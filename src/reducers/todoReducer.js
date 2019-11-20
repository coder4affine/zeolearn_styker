export const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_TODO_REQUEST':
    case 'ADD_TODO_REQUEST':
    case 'UPDATE_TODO_REQUEST':
    case 'DELETE_TODO_REQUEST':
      return { ...state, loading: true };

    case 'ADD_TODO_FAILURE':
    case 'LOAD_TODO_FAILURE':
    case 'UPDATE_TODO_FAILURE':
    case 'DELETE_TODO_FAILURE':
      return { ...state, loading: false, error: payload };

    case 'LOAD_TODO_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'ADD_TODO_SUCCESS':
      return { ...state, loading: false, data: [...state.data, payload] };

    case 'UPDATE_TODO_SUCCESS': {
      const index = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), payload, ...state.data.slice(index + 1)],
      };
    }

    case 'DELETE_TODO_SUCCESS': {
      return { ...state, loading: false, data: state.data.filter(x => x.id !== payload.id) };
    }

    default:
      return state;
  }
};
