const parse = (token, reqs) => {
  return reqs.reduce(
    (r, [api, endpoint, config]) => {
      const req = lib.request[api](endpoint, { token, ...config })

      r[lib.cc.c(api, endpoint)] = req.run
      r.cancellations.push(req.cancel)

      return r
    },
    { cancellations: [] },
  )
}

export default (token, ...endpoints) => {
  const [{ cancellations, ...data }, setData] = React.useState(
    parse(token, endpoints),
  )

  React.useEffect(() => {
    setData(parse(token, endpoints))

    return () => {
      cancellations.forEach((cancel) => {
        cancel()
      })
    }
  }, [token])

  return data
}
