const Component = ({ direction, space, skinSelf, ...props }) => {
  return $(LibTrack, {
    direction: 'x',
    skinSelf: lib.skins(libSkins.contentRight({ space }), skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
