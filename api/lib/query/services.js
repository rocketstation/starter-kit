const parse = (query, conditions) => {
  return conditions.reduce((q, [kind, ...args]) => {
    const [conditions] = args

    if (!kind.startsWith('insert') && Array.isArray(conditions)) {
      return q[kind](function () {
        return parse(this, conditions)
      })
    }

    return q[kind](...args)
  }, query)
}

export const run = (map) => {
  return async (ctx) => {
    const { conditions, key } = ctx.request.body

    const model = map[key]

    const result = await parse(model.query(), conditions || [])

    ctx.body = result || {}
  }
}
