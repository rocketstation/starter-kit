import koaBody from 'koa-body'
import KoaRouter from 'koa-router'

export const get = () => {
  const instance = new KoaRouter()

  const route = (url, ...middlewares) => {
    instance.post(`/${url}`, koaBody(), ...middlewares)
  }

  const routePrivate = (url, ...middlewares) => {
    return route(url, libToken.validate, ...middlewares)
  }

  const routeInternal = (url, ...middlewares) => {
    return route(url, libInternal.validate, ...middlewares)
  }

  return {
    instance,
    route,
    routeInternal,
    routePrivate,
  }
}
