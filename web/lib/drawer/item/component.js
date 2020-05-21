const Component = ({ children, skinSelf }) => {
  const toggler = React.useContext(libDrawer.Context)

  const handleClick = () => {
    toggler.close()
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === LIB.keys.enter || e.keyCode === LIB.keys.space) {
      toggler.close()
    }
  }

  return $box(
    { onClick: handleClick, onKeyDown: handleKeyDown, skin: skinSelf },
    children,
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
