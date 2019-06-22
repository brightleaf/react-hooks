import React from 'react'
import { Button, Form, TextBox } from 'react-form-elements'
import { usePost } from '@brightleaf/react-hooks'

export default () => {
  const { data, error, loading, postData } = usePost(
    `https://kev-pi.herokuapp.com/api/echo`
  )

  if (loading) {
    return <div>Loading Data</div>
  }
  if (error) {
    return <div>Error getting graphql data</div>
  }
  return (
    <Form
      name="testForm"
      onSubmit={formData => {
        postData(formData)
      }}
    >
      <TextBox label="My Label" name="myTextBox" />
      <Button>Send</Button>
    </Form>
  )
}
