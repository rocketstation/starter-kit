const Component = ({ type, ...props }) => {
  return $(LibFormType, { type: 'email', ...props })
}

Component.displayName = lib.cc.p(ID)

export default Component
