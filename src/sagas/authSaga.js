import { takeLatest, put, call, select } from 'redux-saga/effects';
import { CHECK_AUTH, REQUEST, SUCCESS, FAILURE } from '../constants/actionTypes';
import history from '../history';

const todo = state => state.todo.data;

function* checkAuth({ payload, meta }) {
  console.log(meta);
  const { resetForm, setStatus, setSubmitting } = meta;
  const data = yield select(todo);
  console.log(data);
  try {
    const res = yield call(fetch, 'http://localhost:3004/users');
    const users = yield res.json();
    const user = users.find(
      x => x.username === payload.username && x.password === payload.password,
    );
    if (user) {
      yield call(resetForm);
      yield put({
        type: `${CHECK_AUTH}_${SUCCESS}`,
        payload: user,
      });
      yield call(history.push, '/products');
    } else {
      throw new Error('Authentication Fail');
    }
  } catch (error) {
    yield call(resetForm);
    yield call(setStatus, { serverError: error.message });
    yield put({
      type: `${CHECK_AUTH}_${FAILURE}`,
      payload: error,
    });
  } finally {
    yield call(setSubmitting, false);
  }
}

export default function* rootAuth() {
  yield takeLatest(`${CHECK_AUTH}_${REQUEST}`, checkAuth);
}
