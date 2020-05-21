/* eslint-disable max-lines */
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Component = () => {
  return $(
    BrowserRouter,
    $(
      Switch,
      $(Route, { path: '/authorize/:token' }, $(PageAuthorize)),
      $(Route, { exact: true, path: '/' }, $(PageDashboard)),
      $(Route, { path: '*' }, $(PageNotFound)),
    ),
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
