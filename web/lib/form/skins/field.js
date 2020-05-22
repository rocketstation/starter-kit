export const onInit = ({ isDisabled, theme } = {}) => {
  const rules = {
    box: LIB.colors.minor[theme],
    boxBorder: LIB.colors.minorDark[theme],
    boxBorderKind: true,
    boxBorderSize: 1,
    boxCorner: LIB.corners.m,
    boxSpaceInnerX: LIB.spaces.s,
    boxSpaceInnerY: LIB.spaces.sx,
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
  }

  if (isDisabled) rules.opacity = 50

  return rules
}

export const onFocus = ({ theme } = {}) => {
  return {
    boxOutline: LIB.colors.minor[theme],
    boxOutlineKind: true,
    boxOutlineSize: 2,
    boxOutlineSpace: 0,
  }
}

export const onHover = ({ theme } = {}) => {
  return {
    boxBorder: LIB.colors.minorDark[theme],
  }
}

export const type = ({ isDisabled, theme } = {}) => {
  const rules = {
    ...onInit({ isDisabled, theme }),
    appearance: 'none',
    boxCursor: 'text',
    boxWidth: '100%',
    kind: 'box',
    text: 'inherit',
    textLine: 'inherit',
    textSize: 'inherit',
    textWeight: 'inherit',
  }

  rules[lib.skin.onFocus] = onFocus({ isDisabled, theme })
  rules[lib.skin.onHover] = onHover({ isDisabled, theme })

  return rules
}

export const select = ({ isDisabled, theme } = {}) => {
  const rules = {
    ...onInit({ isDisabled, theme }),
    appearance: 'none',
    boxBg: lib.skin.img(libIconAssets.bottom),
    boxBgMove: { right: LIB.spaces.sx, top: '50%' },
    boxBgRepeat: false,
    boxBgSize: { width: LIB.spaces.s },
    boxCursor: 'text',
    boxSpaceInnerRight: 2 * LIB.spaces.sx + LIB.spaces.s,
    boxWidth: '100%',
    kind: 'box',
    text: 'inherit',
    textLine: 'inherit',
    textSize: 'inherit',
    textWeight: 'inherit',
  }

  rules[lib.skin.onFocus] = onFocus({ isDisabled, theme })
  rules[lib.skin.onHover] = onHover({ isDisabled, theme })

  return rules
}

export const edit = ({ isDisabled, theme } = {}) => {
  const rules = {
    ...onInit({ isDisabled, theme }),
    appearance: 'none',
    boxCursor: 'text',
    boxWidth: '100%',
    kind: 'box',
    resize: 'vertical',
    text: 'inherit',
    textLine: 'inherit',
    textSize: 'inherit',
    textWeight: 'inherit',
  }

  rules[lib.skin.onFocus] = onFocus({ isDisabled, theme })
  rules[lib.skin.onHover] = onHover({ isDisabled, theme })

  return rules
}
