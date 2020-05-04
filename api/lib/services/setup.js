import Koa from 'koa'
import koaCors from '@koa/cors'
import { handle } from './error'
import { log } from './log'

export const setup = () => {
  const koa = new Koa()

  koa
    .use(koaCors())
    .use(log)
    .use(handle)

  return koa
}
