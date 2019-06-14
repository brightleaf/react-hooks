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
export const useGet = (
  url = '',
  config = {
    method: 'GET',
  }
) => {
  const { data, error, loading, makeRequest } = useRequest(url, {
    data: [],
    error: null,
    loading: false,
  })
  const fullConfig = { ...defaultConfig, ...config }
  const getUrl = async (urlToGet = url) => {
    await makeRequest(
      {
        method: 'GET',
        ...fullConfig,
      },
      urlToGet
    )
  }

  return { data, error, loading, getUrl }
}

export default useGet
