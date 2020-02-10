const convention = require('@rocketstation/convention')
const path = require('path')

const webpack = require('webpack')
const WPDotenv = require('dotenv-webpack')
const WPProgressBar = require('webpackbar')

const { name, version } = require('./package.json')

const MODE = {
  development: 'development',
  production: 'production',
}

const mode = process.env.NODE_ENV || MODE.development

const scope = process.env.SCOPE

module.exports = Object.entries(convention.project(__dirname)).reduce(
  (r, [k, v]) => {
    v.src.forEach((app) => {
      const origin = path.resolve(__dirname, k)

      const config = require(path.resolve(origin, 'webpack.config.js'))(
        origin,
        app,
        mode,
      )

      config.context = path.resolve(origin, 'src', app.name)

      config.mode = mode

      config.module.rules.push({
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@rocketstation/babel-plugin-convention',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-nullish-coalescing-operator',
              ],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    corejs: { proposals: true, version: 3 },
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
          {
            loader: 'eslint-loader',
            options: { fix: true },
          },
        ],
      })

      config.name = k + app.name

      config.output = {
        path: path.resolve(origin, 'build', app.name),
        publicPath: '/',
        ...config.output,
      }

      config.plugins.push(
        new WPProgressBar(),
        new webpack.ProvidePlugin({
          ...v.lib,
          ...app.modules,
        }),
        new webpack.DefinePlugin({
          IS_DEVELOPMENT: JSON.stringify(mode === MODE.development),
          MODE: JSON.stringify(mode),
          NAME: JSON.stringify(name),
          VERSION: JSON.stringify(version),
        }),
      )

      switch (mode) {
        case MODE.development: {
          config.stats = 'minimal'

          config.plugins = [
            ...config.plugins,
            new WPDotenv({ path: path.resolve(config.context, '.env') }),
            new webpack.HotModuleReplacementPlugin(),
          ]

          break
        }
        case MODE.production: {
          config.stats = 'errors-only'

          break
        }
      }

      config.resolve = {
        alias: {
          app: path.resolve(origin, 'src', app.name),
          lib: path.resolve(origin, 'lib'),
          src: path.resolve(origin, 'src'),
        },
      }

      if (!scope || scope === config.name) r.push(config)
    })

    return r
  },
  [],
)
