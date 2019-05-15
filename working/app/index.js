import React, { Component, Fragment } from 'react'
import { Router, Link } from '@reach/router'

const Fetch = React.lazy(() => import('../hooks/fetcher'))
const Graph = React.lazy(() => import('../hooks/graph'))
const Grapher = React.lazy(() => import('../hooks/grapher'))
const Getter = React.lazy(() => import('../hooks/getter'))
const Poster = React.lazy(() => import('../hooks/poster'))
const Nes = React.lazy(() => import('../hooks/nes'))
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <React.Suspense fallback={<div>Loading</div>}>
          <Link to="/react-hooks/examples">Fetch</Link> |{' '}
          <Link to="/getter">Get</Link> |{' '}
          <Link to="/react-hooks/examples/graph">GraphQL</Link> |{' '}
          <Link to="/react-hooks/examples/grapher">GraphQL Vars</Link> |{' '}
          <Link to="/react-hooks/examples/poster">Poster</Link> |{' '}
          <Link to="/react-hooks/examples/nes">Nes</Link>
          <Router>
            <Fetch path="/react-hooks/examples" />
            <Getter path="/react-hooks/examples/getter" />
            <Graph path="/react-hooks/examples/graph" />
            <Grapher path="/react-hooks/examples/grapher" />
            <Poster path="/react-hooks/examples/poster" />
            <Nes path="/react-hooks/examples/nes" />
          </Router>
        </React.Suspense>
      </Fragment>
    )
  }
}
