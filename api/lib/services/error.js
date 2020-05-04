export { ValidationError } from 'objection'
export { UniqueViolationError } from 'objection-db-errors'

export class Error400 extends Error {
  constructor(key, val) {
    super(key + '-' + val)
    this.name = 'Error400'
    this.key = key
    this.val = val
  }
}

export class Error401 extends Error {
  constructor() {
    super('unauthorized')
    this.name = 'Error401'
  }
}

export const handle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.error(err)

    switch (true) {
      case err instanceof Error400:
        ctx.status = 400
        ctx.body = { key: err.key, val: err.val }
        break
      case err instanceof Error401:
        ctx.status = 401
        ctx.body = 'unauthorized'
        break
      default:
        ctx.status = 500
        ctx.body = {}
    }
  }
}
