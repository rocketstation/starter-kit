import jsonwebtoken from 'jsonwebtoken'

export const get = (headers) => {
  return (headers.authorization || '').split(' ')[1]
}

export const sign = (data, options = {}) => {
  return jsonwebtoken.sign(data, LIB_TOKEN.secret, options)
}

export const validate = async (ctx, next) => {
  const token = get(ctx.request.headers)

  ctx.curr = verify(token)

  await next()
}

export const verify = (token) => {
  try {
    const data = jsonwebtoken.verify(token, LIB_TOKEN.secret)

    if (!data.exp) {
      throw new Error()
    }

    return data
  } catch (err) {
    throw new lib.Error401()
  }
}
