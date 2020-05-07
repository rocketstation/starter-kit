export default () => {
  services.route(
    'account-add',
    async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        if (err instanceof lib.UniqueViolationError) {
          throw new lib.Error400('email', 'isPresentTrue')
        }
      }
    },
    async (ctx) => {
      if (IS_DEVELOPMENT === true) {
        console.log('test')
      }

      const { email } = ctx.request.body

      ctx.body = await Account.query()
        .insert({
          email,
        })
        .returning('*')
    },
  )
}
