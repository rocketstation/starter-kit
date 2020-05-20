export const box = ({ theme } = {}) => {
  return {
    box: LIB.colors.minorLight[theme],
    boxBorder: LIB.colors.minorDark[theme],
    boxBorderKind: true,
    boxBorderSize: 1,
    boxCorner: LIB.corners.m,
    boxSpaceInnerX: LIB.spaces.s,
    boxSpaceInnerY: LIB.spaces.m,
  }
}

export const contentBottom = (config = {}) => {
  return {
    [lib.skin.itsChildren]: {
      boxSpaceOuterBottom: config.space ?? LIB.spaces.m,
      [lib.skin.itsLast()]: { boxSpaceOuterBottom: 0 },
    },
  }
}

export const contentRight = (config = {}) => {
  return {
    [lib.skin.itsChildren]: {
      boxSpaceOuterRight: config.space ?? LIB.spaces.m,
      [lib.skin.itsLast()]: { boxSpaceOuterRight: 0 },
    },
  }
}

export const groupX = () => {
  return {
    kind: 'track',
    [lib.skin.itsChildren]: {
      boxCorner: 0,
      [lib.skin.itsFirst()]: { boxCornerLeft: LIB.corners.m },
      [lib.skin.itsLast()]: { boxCornerRight: LIB.corners.m },
    },
  }
}

export const groupY = () => {
  return {
    [lib.skin.itsChildren]: {
      boxCorner: 0,
      [lib.skin.itsFirst()]: { boxCornerTop: LIB.corners.m },
      [lib.skin.itsLast()]: { boxCornerBottom: LIB.corners.m },
    },
  }
}

export const limit = (config = {}) => {
  return {
    boxSpaceOuterX: 'auto',
    boxWidth: '100%',
    boxWidthMax: config.max ?? LIB.screens.m / LIB.unit,
  }
}

export const fitLine = () => {
  return {
    boxOverflowX: false,
    boxOverflowY: false,
    textOverflow: false,
    textOverflowHandler: true,
  }
}

export const section = (config = {}) => {
  const { bp = LIB.screens.s } = config

  return {
    boxSpaceInnerX: LIB.spaces.s,
    [lib.screen.to(bp)]: { boxSpaceInnerY: config.spaceS ?? LIB.spaces.m },
    [lib.screen.from(bp)]: { boxSpaceInnerY: config.spaceL ?? LIB.spaces.l },
  }
}

export const title = (config = {}) => {
  return {
    textLine: LIB.lines.s,
    textSize: config.size ?? LIB.sizes.major,
    textWeight: LIB.weights.bold,
  }
}
