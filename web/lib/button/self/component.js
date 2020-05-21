const Component = React.forwardRef(
  ({ action, label, isActive, isDisabled, skinSelf, ...props }, ref) => {
    if (label) props['aria-label'] = label

    props.role = 'button'
    props.tabIndex = 0

    if (isActive != null) {
      props.checked = isActive
      props['aria-pressed'] = isActive
    }

    if (!isDisabled) {
      props.onClick = action
      props.onKeyDown = (e) => {
        if (e.keyCode === LIB.keys.enter || e.keyCode === LIB.keys.space) {
          action(e)
        }
      }
    }

    return $box({ ref, skin: skinSelf, ...props })
  },
)

Component.displayName = lib.cc.p(ID)

export default Component
