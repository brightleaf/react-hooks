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
          <Link to="/">Fetch</Link> | <Link to="/getter">Get</Link> |{' '}
          <Link to="/graph">GraphQL</Link> |{' '}
          <Link to="/grapher">GraphQL Vars</Link> |{' '}
          <Link to="/poster">Poster</Link> | <Link to="/nes">Nes</Link>
          <Router>
            <Fetch path="/" />
            <Getter path="/getter" />
            <Graph path="/graph" />
            <Grapher path="/grapher" />
            <Poster path="/poster" />
            <Nes path="/nes" />
          </Router>
        </React.Suspense>
      </Fragment>
    )
  }
}
