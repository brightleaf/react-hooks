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
/**
 * @typedef {Object} GetRequest~State
 * @property {Object|array} data - The data returned from the function.
 * @property {boolean} error - Indicates whether the function had an error.
 * @property {boolean} loading - Indicates whether the function is executing
 * @property {function} getUrl - The function to call to make the request
 */

/**
 * useGet hook to handle fetching data from a url
 *
 * @param {string} url - The url to request
 * @param {object} config - The config object to be used with the fetch
 * @returns {...GetRequest~State} - The states and results and the call to make the request
 */
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
  /**
   * getUrl - HTTP Get the url passed in
   *
   * @param {string} [urlToGet=url] - the url to get
   */
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
