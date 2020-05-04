import koaMorgan from 'koa-morgan'

const log = koaMorgan('dev', {
  skip: (req) => {
    return req.url === '/health'
  },
})

export { log }
