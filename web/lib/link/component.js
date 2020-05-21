const Component = ({ skinSelf, ...props }) => {
  return $(LibLinkSelf, {
    skinSelf: lib.skins(libLinkSkins.self, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
