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
 * @typedef {Object} PutRequest~State
 * @property {Object|array} data - The data returned from the function.
 * @property {boolean} error - Indicates whether the function had an error.
 * @property {boolean} loading - Indicates whether the function is executing
 * @property {function} putData - The function to call to make the POST request
 */

/**
 * usePut hook to handle putting data to a url
 *
 * @param {string} url - The url to request
 * @param {object} config - The config object to be used with the fetch
 * @returns {...PutRequest~State} - The states and results and the call to make the request
 */
export const usePut = (
  url = '',
  config = {
    method: 'PUT',
  }
) => {
  const { data, error, loading, makeRequest } = useRequest(url, {
    data: [],
    error: null,
    loading: false,
  })
  const fullConfig = { ...defaultConfig, ...config }
  /**
   * putData - PUT data to url
   *
   * @param {object} data - the data to post
   */
  const putData = async data => {
    await makeRequest({
      method: 'PUT',
      ...fullConfig,
      body: JSON.stringify(data),
    })
  }

  return { data, error, loading, putData }
}

export default usePut
