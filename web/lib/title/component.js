const Component = ({ lvl, skinSelf, ...props }) => {
  if (lvl) {
    props.role = 'heading'
    props['aria-level'] = lvl
  }

  return $box({ skin: skinSelf, ...props })
}

Component.displayName = lib.cc.p(ID)

export default Component
