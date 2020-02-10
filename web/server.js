const express = require('express')
const path = require('path')

const webpack = require('webpack')
const webpackMiddlewareDev = require('webpack-dev-middleware')
const webpackMiddlewareHot = require('webpack-hot-middleware')

const configs = require('../webpack.config')

configs
  .filter((v) => {
    return v.name.startsWith('web')
  })
  .forEach((config, i) => {
    const port = 1024 + i

    const app = express()
    const compiler = webpack(config)

    const wmd = webpackMiddlewareDev(compiler, {
      publicPath: config.output.publicPath,
      stats: config.stats,
    })

    const wmh = webpackMiddlewareHot(compiler)

    app.use(wmd)
    app.use(wmh)

    app.get('*', (req, res) => {
      return res.end(
        wmd.fileSystem.readFileSync(
          path.join(config.output.path, 'index.html'),
        ),
      )
    })

    app.listen(port, (err) => {
      if (err) console.error(err)
    })
  })
