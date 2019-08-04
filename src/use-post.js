import useRequest from './use-request'
import { mergeDeep } from './utils/merge-deep'

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
 * @typedef {Object} PostRequest~State
 * @property {Object|array} data - The data returned from the function.
 * @property {boolean} error - Indicates whether the function had an error.
 * @property {boolean} loading - Indicates whether the function is executing
 * @property {function} postData - The function to call to make the POST request
 */

/**
 * usePost hook to handle posting data to a url
 *
 * @param {string} url - The url to request
 * @param {object} config - The config object to be used with the fetch
 * @returns {...PostRequest~State} - The states and results and the call to make the request
 */
export const usePost = (
  url = '',
  config = {
    method: 'POST',
  }
) => {
  const { data, error, loading, complete, makeRequest } = useRequest(url)
  const fullConfig = mergeDeep(defaultConfig, config)

  /**
   * postData - Post data to url
   *
   * @param {object} data - the data to post
   */
  const postData = async data => {
    await makeRequest({
      method: 'POST',
      ...fullConfig,
      body:
        typeof data === 'string' || data instanceof String
          ? data
          : JSON.stringify(data),
    })
  }

  return { data, error, loading, complete, postData }
}

export default usePost
