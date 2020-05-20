const path = require('path')

const webpack = require('webpack')

const wpExternals = require('webpack-node-externals')
const WPNodemon = require('nodemon-webpack-plugin')

const MODE = {
  development: 'development',
  production: 'production',
}

module.exports = (origin, app, mode) => {
  const config = require(path.resolve(
    __dirname,
    'src',
    app.name,
    'webpack.config.js',
  ))(app, mode)

  config.entry = './index.js'

  config.externals = [
    wpExternals({
      modulesDir: 'api/node_modules',
    }),
  ]

  config.node = {
    __dirname: false,
    __filename: false,
    Buffer: false,
    console: false,
    global: false,
    process: false,
  }

  config.target = 'node'

  switch (mode) {
    case MODE.development: {
      const outputPath = path.resolve(origin, 'build', app.name)

      config.entry = ['webpack/hot/poll?1000', config.entry]

      config.plugins.push(
        new webpack.EnvironmentPlugin({
          PORT: null,
          POSTGRES: 'localhost',
          REDIS: 'localhost',
        }),
        new WPNodemon({
          script: path.resolve(outputPath, 'main.js'),
          watch: outputPath,
        }),
      )

      break
    }
    case MODE.production: {
      break
    }
  }

  return config
}
