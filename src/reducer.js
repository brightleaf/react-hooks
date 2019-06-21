export const reducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return { ...state, loading: true }
    case 'loading':
      return { ...state, loading: true }
    case 'success':
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      }
    case 'error':
      return {
        ...state,
        data: null,
        error: action.payload.error,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
