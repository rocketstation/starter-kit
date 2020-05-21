const Component = ({ fallback = null, ...props }) => {
  return $(React.Suspense, { fallback, ...props })
}

Component.displayName = lib.cc.p(ID)

export default Component
