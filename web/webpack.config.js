const path = require('path')

const webpack = require('webpack')

const { CleanWebpackPlugin: WPClean } = require('clean-webpack-plugin')
const WPCompression = require('compression-webpack-plugin')
const WPCopy = require('copy-webpack-plugin')
const WPIcon = require('favicons-webpack-plugin')
const WPHTML = require('html-webpack-plugin')
const WPServiceWorker = require('serviceworker-webpack-plugin')

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

  config.module.rules.push(
    {
      test: /\.css$/,
      use: [{ loader: 'css-loader' }],
    },
    {
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack' }, { loader: 'file-loader' }],
    },
  )

  config.plugins.push(
    new WPCopy({
      patterns: [{ from: 'robots.txt' }, { from: 'offline.html' }],
    }),
    new WPServiceWorker({
      cache: {
        offline: true,
        precache: ['offline.html'],
      },
      entry: path.resolve(__dirname, 'src', app.name, 'service-worker.js'),
    }),
  )

  const wrAssets = {
    test: /\.(gif|jpg|png|eot|ttf|woff|mp3|mp4)$/,
    use: [{ loader: 'file-loader' }],
  }

  const wpHTMLConfig = {
    template: path.resolve(__dirname, 'src', app.name, 'index.html'),
  }

  switch (mode) {
    case MODE.development: {
      config.entry = [config.entry, 'webpack-hot-middleware/client']
      config.devtool = 'eval'

      break
    }
    case MODE.production: {
      config.output.filename = '[name].[contenthash].js'
      wpHTMLConfig.filename = 'index.html'
      wrAssets.use[0].options = { filename: '[name]-[hash].[ext]' }

      config.plugins.push(
        new WPClean(),
        new WPCompression({
          exclude: /\.(mp3|mp4)$/,
          filename: '[path]',
          minRatio: Infinity,
        }),
        new WPIcon({
          favicons: {
            appDescription: '',
            appleStatusBarStyle: 'black',
            appName: '',
            background: '#fff',
            developerName: '',
            developerURL: '',
            theme_color: '#000',
            version: '1.0.0',
          },
          logo: './index.svg',
          prefix: '/',
        }),
      )

      break
    }
  }

  config.module.rules.push(wrAssets)
  config.plugins.push(
    new WPHTML(wpHTMLConfig),
    new webpack.ProvidePlugin({ React: 'react' }),
  )

  return config
}
