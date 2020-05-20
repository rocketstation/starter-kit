import * as alias from '@rocketstation/skin/build/alias/index'

import { createRenderer } from 'fela'

import pluginCustomProperty from 'fela-plugin-custom-property'
import pluginFallbackValue from 'fela-plugin-fallback-value'
import pluginPrefixer from 'fela-plugin-prefixer'
import pluginUnit from 'fela-plugin-unit'

import reset from './reset'

const config = {
  devMode: IS_DEVELOPMENT,
  plugins: [
    pluginCustomProperty(alias),
    pluginUnit('rem', {
      animationDelay: 'ms',
      animationDuration: 'ms',
      borderBottomLeftRadius: 'px',
      borderBottomRightRadius: 'px',
      borderBottomWidth: 'px',
      borderLeftWidth: 'px',
      borderRadius: 'px',
      borderRightWidth: 'px',
      borderTopLeftRadius: 'px',
      borderTopRightRadius: 'px',
      borderTopWidth: 'px',
      borderWidth: 'px',
      outlineOffset: 'px',
      outlineWidth: 'px',
      transitionDuration: 'ms',
    }),
    pluginPrefixer(),
    pluginFallbackValue(),
  ],
}

const renderer = createRenderer(config)

renderer.renderStatic(reset)

renderer.renderFont('Public Sans', [libAssets.publicSans], {
  fontDisplay: 'optional',
  fontWeight: 300,
})

renderer.renderFont('Public Sans', [libAssets.publicSansBold], {
  fontDisplay: 'optional',
  fontWeight: 500,
})

export default renderer
