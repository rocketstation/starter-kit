export const content = ({ isActive, theme } = {}) => {
  return {
    box: LIB.colors.minorLight[theme],
    boxBorder: LIB.colors.minor[theme],
    boxBorderKind: true,
    boxBorderSize: 1,
    boxMoveLeft: 0,
    boxMoveTop: '100%',
    boxOrder: LIB.orders.dropdown,
    boxPosition: 'absolute',
    kind: isActive,
  }
}
