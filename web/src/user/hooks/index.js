export const req = (...endpoints) => {
  const { token, setContext } = React.useContext(services.Context)

  const req = libUse.req(token, ...endpoints)

  return Object.entries(req).reduce((r, [k, v]) => {
    r[k] = async (...args) => {
      try {
        const data = await v(...args)

        return data
      } catch (e) {
        if (e.message === '401') setContext({})
        else throw e
      }
    }

    return r
  }, {})
}
