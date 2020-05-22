const Component = ({ space, skinSelf, ...props }) => {
  return $(LibBox, {
    skinSelf: lib.skins(libSkins.contentBottom({ space }), skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
