const Component = ({ skinSelf, ...props }) => {
  return $(LibLinkSelf, {
    skinSelf: lib.skins(
      libButtonSkins.self,
      libButtonSkins.important,
      skinSelf,
    ),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
