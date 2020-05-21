const Component = ({ label, src, placeholder, ratio, skinSelf, ...props }) => {
  if (label) props['aria-label'] = label

  props.role = 'img'

  return $box({
    skin: lib.skins(({ theme }) => {
      return libImgSkins.self({ ratio, src: src ?? placeholder, theme })
    }, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
