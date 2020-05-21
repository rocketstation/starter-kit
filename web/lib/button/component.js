const Component = ({ skinSelf, ...props }) => {
  return $(LibButtonSelf, {
    skinSelf: lib.skins(
      ({ theme }) => {
        return libButtonSkins.self({ isDisabled: props.isDisabled, theme })
      },
      libButtonSkins.important,
      skinSelf,
    ),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
