export const self = ({ theme } = {}) => {
  return {
    boxCursor: true,
    text: LIB.colors.important[theme],
    textDecoration: false,
    [lib.skin.onHover]: { textDecoration: 'bottom' },
    [lib.skin.onFocus]: {
      boxOutlineColor: LIB.colors.minor[theme],
      boxOutlineKind: true,
      boxOutlineSize: 2,
    },
  }
}
