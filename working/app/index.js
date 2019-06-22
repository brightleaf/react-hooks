import React, { Component, Fragment } from 'react'
import { Router, createHistory, Link, LocationProvider } from '@reach/router'
import createHashSource from 'hash-source'
import Intro from './intro'
import Home from './home'
const Fetch = React.lazy(() => import('../hooks/fetcher'))
const Graph = React.lazy(() => import('../hooks/graph'))
const Grapher = React.lazy(() => import('../hooks/grapher'))
const Getter = React.lazy(() => import('../hooks/getter'))
const Poster = React.lazy(() => import('../hooks/poster'))
const Nes = React.lazy(() => import('../hooks/nes'))
const Local = React.lazy(() => import('../hooks/local'))
const source = createHashSource()
const history = createHistory(source)

export default class App extends Component {
  render() {
    return (
      <LocationProvider history={history}>
        <Fragment>
          <React.Suspense fallback={<div>Loading</div>}>
            <Link to="/">Home</Link> | <Link to="examples">Fetch</Link> |{' '}
            <Link to="examples/getter">Get</Link> |{' '}
            <Link to="examples/graph">GraphQL</Link> |{' '}
            <Link to="examples/grapher">GraphQL Vars</Link> |{' '}
            <Link to="examples/poster">Poster</Link> |{' '}
            <Link to="examples/nes">Nes</Link> |{' '}
            <Link to="examples/local">Local Storage</Link>
            <Intro />
            <Router>
              <Home path="/" />
              <Fetch path="examples" />
              <Getter path="examples/getter" />
              <Graph path="examples/graph" />
              <Grapher path="examples/grapher" />
              <Poster path="examples/poster" />
              <Nes path="examples/nes" />
              <Local path="examples/local" />
            </Router>
          </React.Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
