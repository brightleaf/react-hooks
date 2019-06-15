import React from 'react'
import usePost from '../../src/use-post'
export default () => {
  const { data, error, loading, postData } = usePost(
    `https://kev-pi.herokuapp.com/api/echo`
  )
  if (loading) {
    return (
      <div className="App">
        <h2>Loading</h2>
        <span className="loader loader-xl" />
      </div>
    )
  }
  if (error) {
    return (
      <div className="App">
        <h2>Error Posting Data</h2>
      </div>
    )
  }

  return (
    <div className="App">
      <h3>Result</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>Post</h2>
      <div className="select">
        <div className="wrap">
          <div
            className="button"
            onClick={e => {
              console.log('click')
              postData({
                id: 1,
                message: 'The message from 1',
              })
            }}
          >
            1
          </div>
        </div>
        <div className="wrap">
          <div
            className="button"
            onClick={e => {
              console.log('click')
              postData({
                id: 2,
                message: 'The message from 2',
              })
            }}
          >
            2
          </div>
        </div>
        <div className="wrap">
          <div
            className="button"
            onClick={e => {
              console.log('click')
              postData({
                id: 3,
                message: 'The message from 3',
              })
            }}
          >
            3
          </div>
        </div>
        <div className="wrap">
          <div
            className="button"
            onClick={e => {
              console.log('click')
              postData({
                id: 4,
                message: 'The message from 4',
              })
            }}
          >
            4
          </div>
        </div>
        <div className="wrap">
          <div
            className="button"
            onClick={e => {
              console.log('click')
              postData({
                id: 5,
                message: 'The message from 5',
              })
            }}
          >
            5
          </div>
        </div>
        <div className="wrap">
          <div
            className="button"
            onClick={e => {
              console.log('click')
              postData({
                id: 6,
                message: 'The message from 6',
              })
            }}
          >
            6
          </div>
        </div>
      </div>
    </div>
  )
}
