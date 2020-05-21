const animation = () => {
  return {
    from: { modify: lib.skin.rotate(0) },
    to: { modify: lib.skin.rotate(360) },
  }
}

const Component = ({ size = '1em', skinSelf, ...props }) => {
  const renderer = libUse.renderer()

  return $(libLoaderIconAssets.Icon, {
    skin: lib.skins(({ theme }) => {
      return {
        boxHeight: size,
        boxWidth: size,
        kind: 'box',
        [lib.skin.its(lib.skin.attrContainsStr('class', 'back'))]: {
          shape: LIB.colors.minor[theme],
        },
        [lib.skin.its(lib.skin.attrContainsStr('class', 'front'))]: {
          animation: renderer.renderKeyframe(animation),
          animationCount: true,
          animationDuration: LIB.durations.l,
          animationFn: 'linear',
          modifyOrigin: 'center',
          shape: LIB.colors.important[theme],
        },
      }
    }, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
