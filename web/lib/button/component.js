const Component = ({ kind = 'important', skinSelf, ...props }) => {
  return $(LibButtonSelf, {
    skinSelf: lib.skins(
      ({ theme }) => {
        return libButtonSkins.self({ isDisabled: props.isDisabled, theme })
      },
      ({ theme }) => {
        return libButtonSkins.cta({ kind, theme })
      },
      skinSelf,
    ),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
