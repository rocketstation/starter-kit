export const self = ({ src, ratio, theme } = {}) => {
  const rules = {
    box: LIB.colors.minor[theme],
    boxBg: lib.skin.img(src),
    boxBgMove: 'center center',
    boxBgRepeat: false,
    boxBgSize: 'fill',
    boxCorner: LIB.corners.m,
    boxWidth: '100%',
    kind: 'box',
  }

  if (ratio) rules.boxSpaceInnerBottom = 100 * ratio + '%'

  return rules
}
