const convention = require('@rocketstation/convention')
const path = require('path')

module.exports = {
  env: { node: true },
  globals: Object.keys(
    convention.apiApp(path.resolve(__dirname, 'lib')),
  ).reduce((r, v) => {
    r[v] = 'readonly'

    return r
  }, {}),
}
