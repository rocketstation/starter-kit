const Component = ({ size = '1em', skinSelf, ...props }) => {
  return $(libLogoAssets.Icon, {
    skin: lib.skins(({ theme }) => {
      return {
        boxHeight: size,
        boxWidth: size,
        kind: 'box',
      }
    }, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
