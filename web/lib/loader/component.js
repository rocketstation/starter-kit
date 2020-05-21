const Component = ({ children, size, skinSelf }) => {
  return $(
    LibLoaderSelf,
    { fallback: $(LibLoaderIcon, { size, skinSelf }) },
    children,
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
