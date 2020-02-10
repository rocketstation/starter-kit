import ReactDOM from 'react-dom'
import { RendererProvider as FelaProvider } from 'react-fela'
import { I18nextProvider } from 'react-i18next'
import { HelmetProvider } from 'react-helmet-async'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

runtime.register()

const render = (Component) => {
  return ReactDOM.render(
    React.createElement(
      React.StrictMode,
      {},
      React.createElement(
        I18nextProvider,
        { i18n: lib.i18n },
        React.createElement(
          FelaProvider,
          { renderer: lib.fela },
          React.createElement(
            HelmetProvider,
            {},
            React.createElement(
              React.Suspense,
              { fallback: null },
              React.createElement(Component),
            ),
          ),
        ),
      ),
    ),
    document.getElementById('app'),
  )
}

render(Component)

if (module.hot) {
  module.hot.accept('app/component', () => {
    render(require('app/component').default)
  })
}
