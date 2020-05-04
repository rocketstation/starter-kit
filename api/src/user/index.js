api.accountAdd()
api.query()

services.router.get('/health', (ctx) => {
  ctx.body = {}
})

const instance = lib.setup()

const port = process.env.PORT || 1536

instance.use(services.router.routes()).use(services.router.allowedMethods())

lib.run(instance, port)

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
})

if (module.hot) {
  module.hot.accept()
}
