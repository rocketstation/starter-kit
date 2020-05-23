export const self = ({ isDisabled, theme } = {}) => {
  const rules = {
    textDecoration: false,
    transition: [
      'background-color',
      'border-color',
      'color',
      'fill',
      'stroke',
      'opacity',
    ],
    transitionDuration: [
      LIB.durations.m,
      LIB.durations.m,
      LIB.durations.m,
      LIB.durations.m,
      LIB.durations.m,
      LIB.durations.m,
    ],
    [lib.skin.onHover]: { textDecoration: false },
    [lib.skin.onFocus]: {
      boxOutline: LIB.colors.minorDark[theme],
      boxOutlineKind: true,
      boxOutlineSize: 2,
    },
  }

  if (isDisabled) rules.boxOpacity = 50
  else rules.boxCursor = true

  return rules
}

export const cta = ({ kind = 'important', theme } = {}) => {
  const rules = {
    box: LIB.colors[kind][theme],
    boxBorder: LIB.colors[kind][theme],
    boxBorderKind: true,
    boxBorderSize: 1,
    boxCorner: LIB.corners.m,
    boxSpaceInnerX: LIB.spaces.s,
    boxSpaceInnerY: LIB.spaces.sx,
    text: LIB.colors.light[theme],
    [lib.skin.onHover]: { box: lib.hsla(LIB.colors[kind][theme])(33) },
  }

  return rules
}
