const convention = require('@rocketstation/convention')
const path = require('path')

module.exports = {
  globals: Object.keys(convention.webApp(path.resolve(__dirname))).reduce(
    (r, v) => {
      r[v] = 'readonly'

      return r
    },
    {},
  ),
}
