const convention = require('@rocketstation/convention')
const path = require('path')

module.exports = {
  env: { browser: true },
  globals: Object.keys(
    convention.webApp(path.resolve(__dirname, 'lib')),
  ).reduce(
    (r, v) => {
      r[v] = 'readonly'

      return r
    },
    {
      $: 'readonly',
      $audio: 'readonly',
      $box: 'readonly',
      $canvas: 'readonly',
      $editor: 'readonly',
      $form: 'readonly',
      $frame: 'readonly',
      $img: 'readonly',
      $input: 'readonly',
      $link: 'readonly',
      $meta: 'readonly',
      $option: 'readonly',
      $path: 'readonly',
      $script: 'readonly',
      $select: 'readonly',
      $shape: 'readonly',
      $text: 'readonly',
      $title: 'readonly',
      $video: 'readonly',
      React: 'readonly',
    },
  ),
}
