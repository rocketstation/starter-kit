const Component = ({ space, skinSelf, ...props }) => {
  return $(LibBox, {
    skinSelf: lib.skins(libSkins.contentRight({ space }), skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
