import { takeLatest, put, call, all, fork } from 'redux-saga/effects';
import { CHECK_AUTH, REQUEST, SUCCESS, FAILURE } from '../constants/actionTypes';
import history from '../history';

// const todo = state => state.todo.data;

function* checkAuth({ payload, meta }) {
  const { resetForm, setStatus, setSubmitting } = meta;
  // const data = yield select(todo);
  // console.log(data);
  try {
    const res = yield call(fetch, 'http://localhost:3004/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
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
      yield call(history.push, 'products');
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

function* checkAuthRequest() {
  yield takeLatest(`${CHECK_AUTH}_${REQUEST}`, checkAuth);
}

export default function* rootSaga() {
  yield all([fork(checkAuthRequest)]);
}
