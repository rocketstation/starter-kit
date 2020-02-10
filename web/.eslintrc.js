const convention = require('@rocketstation/convention')
const path = require('path')

module.exports = {
  env: { browser: true },
  globals: Object.keys(
    convention.webApp(path.resolve(__dirname, 'lib'))
  ).reduce(
    (r, v) => {
      r[v] = 'readonly'

      return r
    },
    { React: 'readonly' },
  ),
}
