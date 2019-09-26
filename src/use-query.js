import { useRequest } from './use-request'
import { mergeDeep } from './utils/merge-deep'
const defaultConfig = {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}

export const useQuery = (
  url = '/graphql',
  query,
  config = {
    method: 'POST',
  }
) => {
  const { makeRequest, ...props } = useRequest(url, {
    data: null,
    error: null,
    loading: false,
  })
  const fullConfig = mergeDeep(defaultConfig, config)

  /**
   * postData - Post data to url
   *
   * @param {object} data - the data to post
   */
  const makeQuery = async variables => {
    await makeRequest({
      ...fullConfig,
      body: JSON.stringify({ query, variables }),
    })
  }

  return { makeQuery, ...props }
}
