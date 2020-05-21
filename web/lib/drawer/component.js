const Content = ({ children, skinSelf, ...props }) => {
  const toggler = React.useContext(libDrawer.Context)

  const ref = React.useRef()

  React.useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target)) toggler.close()
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return $box(
    {
      ref,
      skin: lib.skins({ boxPosition: 'relative' }, skinSelf),
      ...props,
    },
    typeof children === 'function' ? children(toggler) : children,
  )
}

const Component = ({ ...props }) => {
  return $(LibDrawerProvider, $(Content, props))
}

Component.displayName = lib.cc.p(ID)

export default Component
