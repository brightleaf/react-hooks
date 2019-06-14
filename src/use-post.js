import useRequest from './use-request'

const defaultConfig = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}
export const usePost = (
  url = '',
  config = {
    method: 'POST',
  }
) => {
  const { data, error, loading, makeRequest } = useRequest(url, {
    data: [],
    error: null,
    loading: false,
  })
  const fullConfig = { ...defaultConfig, ...config }
  const postData = async data => {
    await makeRequest({
      method: 'POST',
      ...fullConfig,
      body: JSON.stringify(data),
    })
  }

  return { data, error, loading, postData }
}

export default usePost
