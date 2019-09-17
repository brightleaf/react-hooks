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
const WebSocketExample = React.lazy(() => import('../hooks/websockets'))
const Local = React.lazy(() => import('../hooks/local'))
const Keypress = React.lazy(() => import('../hooks/keypress'))
const Keyhandler = React.lazy(() => import('../hooks/keyhandler'))
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
const Menu = () => {
  return (
    <aside className="menu">
      <p className="menu-label">Hooks</p>
      <ul className="menu-list">
        <TabLink to="/">Home</TabLink>
      </ul>
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <TabLink to="/examples/local">Local Storage</TabLink>
        <TabLink to="/examples/keypress">Key Press</TabLink>
        <TabLink to="/examples/page-visibility">Page Visibility</TabLink>
        <TabLink to="/examples/online-status">Online status</TabLink>
        <TabLink to="/examples/events">Events</TabLink>
        <TabLink to="/examples/media-query">Media Query</TabLink>
        <li>
          <a href="#hover-hook">Hover</a>
        </li>
        <li>
          <a href="#click-outside-hook">Click Outside</a>
        </li>
      </ul>
      <p className="menu-label">HTTP</p>
      <ul className="menu-list">
        <TabLink to="/examples">Fetch</TabLink>
        <TabLink to="/examples/getter">Get</TabLink>
        <TabLink to="/examples/graph">GraphQL</TabLink>
        <TabLink to="/examples/grapher">GraphQL Vars</TabLink>
        <TabLink to="/examples/poster">Poster</TabLink>
        <TabLink to="/examples/nes">Nes</TabLink>
      </ul>
      <p className="menu-label">Page</p>
      <ul className="menu-list">
        <li>
          <a href="#script-hook">Script</a>
        </li>
        <li>
          <a href="#style-hook">Style</a>
        </li>
        <li>
          <a href="#stylesheet-hook">StyleSheet</a>
        </li>
        <li>
          <a href="#favicon-hook">Favicon</a>
        </li>
        <li>
          <a href="#title-hook">Title</a>
        </li>
      </ul>
    </aside>
  )
}
export default class App extends Component {
  render() {
    return (
      <LocationProvider history={history}>
        <React.Suspense fallback={<div>Loading</div>}>
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu />
            </div>
            <div className="column is-three-quarters">
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
                <WebSocketExample path="/examples/ws" />
                <Keyhandler path="/examples/keyhandler" />
              </Router>
            </div>
          </div>
        </React.Suspense>
      </LocationProvider>
    )
  }
}
