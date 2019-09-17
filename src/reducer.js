export const getData = obj => {
  if (obj && obj.data && obj.data.data) return obj.data.data
  if (obj && obj.data) return obj.data
  if (obj.data === null) return null
  return obj
}
export const getError = obj => {
  if (obj && obj.error && obj.error.Error) return obj.error.Error
  if (obj && obj.error && obj.error.error) return obj.error.error
  if (obj && obj.error) return obj.error
  if (obj && obj.errorMessage) return obj.data

  return obj
}
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
        data: getData(action.payload),
        error: true,
        errorDetails: getError(action.payload),
        loading: false,
        complete: true,
      }
    default:
      return state
  }
}

export default reducer
