const Component = ({ src, size = '1em', skinSelf, ...props }) => {
  const Icon = libIconAssets[lib.cc.p(src)]

  if (!Icon) return null

  return $(Icon, {
    skin: lib.skins(
      {
        boxHeight: size,
        boxWidth: size,
        kind: 'box',
        shape: 'currentColor',
      },
      skinSelf,
    ),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
