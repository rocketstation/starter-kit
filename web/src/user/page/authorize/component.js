const Component = () => {
  const history = libUse.history()
  const { token } = libUse.params()

  const { isAuthorized, setContext } = React.useContext(services.Context)

  const req = use.req(['user', 'authorize'])

  React.useEffect(() => {
    req
      .run({ token })
      .then((data) => {
        setContext(data)
        history.replace('/')
      })
      .catch(() => {
        history.replace(isAuthorized ? '/' : '/sign-in')
      })
  }, [])

  return $(LibLoader)
}

Component.displayName = lib.cc.p(ID)

export default Component
