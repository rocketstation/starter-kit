const Component = ({ space, skinSelf, ...props }) => {
  return $box({
    skin: lib.skins(libSkins.box, libSkins.contentBottom({ space }), skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
