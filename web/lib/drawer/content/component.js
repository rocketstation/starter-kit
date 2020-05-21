const Component = ({ skinSelf, ...props }) => {
  const { isActive } = React.useContext(libDrawer.Context)

  return $box({
    skin: lib.skins(({ theme }) => {
      return libDrawerSkins.content({ isActive, theme })
    }, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
