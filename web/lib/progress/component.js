const Component = ({ children, percent = 0, skinSelf, ...props }) => {
  return $box({
    skin: lib.skins.combine(({ theme }) => {
      return {
        box: LIB.colors.minorDark[theme],
        boxCorner: LIB.corners.m,
        boxHeight: '1em',
        boxPosition: 'relative',
        [lib.skin.itsBefore]: {
          box: LIB.colors.important[theme],
          boxContent: true,
          boxCorner: LIB.corners.m,
          boxMoveLeft: 0,
          boxMoveY: 0,
          boxPosition: 'absolute',
          boxWidth: percent > 100 ? 100 : percent + '%',
          kind: 'box',
        },
      }
    }, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
