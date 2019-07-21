import React, { Component, Fragment } from 'react'
import {
  Router,
  createHistory,
  Link,
  LocationProvider,
  Location,
} from '@reach/router'
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
const Keypress = React.lazy(() => import('../hooks/keypress'))
const PageViz = React.lazy(() => import('../hooks/page-visibility'))
const OnlineStatus = React.lazy(() => import('../hooks/online-status'))
const EventExample = React.lazy(() => import('../hooks/event-example'))
const MediaQueryMatch = React.lazy(() => import('../hooks/media-match'))
const source = createHashSource()
const history = createHistory(source)

const TabLink = props => {
  return (
    <Location>
      {({ location }) => {
        const active = props.to === location.pathname
        return (
          <li className={active ? 'is-active' : ''}>
            <Link
              {...props}
              getProps={prop => {
                const { isCurrent } = prop
                return {
                  className: isCurrent ? 'is-active' : '',
                }
              }}
            />
          </li>
        )
      }}
    </Location>
  )
}

export default class App extends Component {
  render() {
    return (
      <LocationProvider history={history}>
        <Fragment>
          <React.Suspense fallback={<div>Loading</div>}>
            <div className="tabs">
              <ul>
                <TabLink to="/">Home</TabLink>
                <TabLink to="/examples">Fetch</TabLink>
                <TabLink to="/examples/getter">Get</TabLink>
                <TabLink to="/examples/graph">GraphQL</TabLink>
                <TabLink to="/examples/grapher">GraphQL Vars</TabLink>
                <TabLink to="/examples/poster">Poster</TabLink>
                <TabLink to="/examples/nes">Nes</TabLink>
                <TabLink to="/examples/local">Local Storage</TabLink>
                <TabLink to="/examples/keypress">Key Press</TabLink>
                <TabLink to="/examples/page-visibility">
                  Page Visibility
                </TabLink>
                <TabLink to="/examples/online-status">Online status</TabLink>
                <TabLink to="/examples/events">Events</TabLink>
                <TabLink to="/examples/media-query">Media Query</TabLink>
              </ul>
            </div>
            <Intro />
            <Router>
              <Home path="/" />
              <Home path="*" />
              <Fetch path="/examples" />
              <Getter path="/examples/getter" />
              <Graph path="/examples/graph" />
              <Grapher path="/examples/grapher" />
              <Poster path="/examples/poster" />
              <Nes path="/examples/nes" />
              <Local path="/examples/local" />
              <Keypress path="/examples/keypress" />
              <PageViz path="/examples/page-visibility" />
              <OnlineStatus path="/examples/online-status" />
              <EventExample path="/examples/events" />
              <MediaQueryMatch path="/examples/media-query" />
            </Router>
          </React.Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
