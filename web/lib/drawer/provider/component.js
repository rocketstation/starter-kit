const Component = ({ children }) => {
  const toggler = libUse.toggler()

  return $(libDrawer.Context.Provider, { value: toggler }, children)
}

Component.displayName = lib.cc.p(ID)

export default Component
