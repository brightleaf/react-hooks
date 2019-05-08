# Brightleaf React Hooks

Useful React Hooks

## GraphQL Hook

```javascript
import React, { useState } from 'react'
import { useQuery } from '@brightleaf/hooks'

export default () => {
  const [id, setId] = useState(1)
  const { data, loading, error } = useQuery(
    'https://swapiql.herokuapp.com/graphql',
    `query Person($id: ID) {
      person(id: $id) {
        id,
        name
      }
    }`,
    { id }
  )
  if (loading) {
    return <div>Loading Data</div>
  }
  if (error) {
    return <div>Error getting graphql data</div>
  }
  return <div>{data.person[0].name}</div>
}
```

## Post Hook

```javascript
import React from 'react'
import { Button, Form, TextBox } from 'react-form-elements'
import { usePost } from '@brightleaf/hooks'

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
      onSubmit={data => {
        postData(data)
      }}
    >
      <TextBox label="My Label" name="myTextBox" />
      <Button>Send</Button>
    </Form>
  )
}

```