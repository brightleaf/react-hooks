export const reducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return { ...state, loading: true, complete: false }
    case 'loading':
      return { ...state, loading: true, complete: false }
    case 'success':
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
        complete: true,
      }
    case 'error':
      return {
        ...state,
        data: null,
        error: action.payload.error,
        loading: false,
        complete: true,
      }
    default:
      return state
  }
}

export default reducer
