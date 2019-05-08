import React, { useState } from 'react'
import usePost from '../../src/use-post'
export default () => {
  const { data, error, loading, postData } = usePost(
    `https://kev-pi.herokuapp.com/api/echo`
  )
  if (error) {
    return (
      <div className="App">
        <h1>Error Posting Data</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="App">
        <h1>Loading Data</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <h3>Result</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>Post</h2>
      <div className="select">
        <div
          onClick={e => {
            console.log('click')
            postData({
              id: 1,
              message: 'The message',
            })
          }}
        >
          1
        </div>
        <div
          onClick={e => {
            console.log('click')
            postData({
              id: 2,
              message: 'The message',
            })
          }}
        >
          2
        </div>
        <div
          onClick={e => {
            console.log('click')
            postData({
              id: 3,
              message: 'The message',
            })
          }}
        >
          3
        </div>
        <div
          onClick={e => {
            console.log('click')
            postData({
              id: 4,
              message: 'The message',
            })
          }}
        >
          4
        </div>
        <div
          onClick={e => {
            console.log('click')
            postData({
              id: 5,
              message: 'The message',
            })
          }}
        >
          5
        </div>
        <div
          onClick={e => {
            console.log('click')
            postData({
              id: 6,
              message: 'The message',
            })
          }}
        >
          6
        </div>
      </div>
    </div>
  )
}
