const Component = ({ skinSelf, ...props }) => {
  return $box({
    skin: lib.skins(libSkins.box, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
