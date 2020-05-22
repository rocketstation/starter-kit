const Component = ({ direction, space, skinSelf, ...props }) => {
  return $(LibTrack, {
    direction: 'y',
    skinSelf: lib.skins(libSkins.contentBottom({ space }), skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
