import got from 'got'

export const get = (headers) => {
  return headers.key
}

export const request = (body, url = 'query', options = {}) => {
  return got
    .post(url, {
      headers: { key: LIB_INTERNAL.key },
      json: body,
      ...options,
    })
    .json()
}

export const user = (body, url, options = {}) => {
  return request(body, url, {
    prefixUrl: process.env.API_USER,
    ...options,
  })
}

export const validate = async (ctx, next) => {
  verify(get(ctx.request.headers))

  await next()
}

export const verify = (key) => {
  if (key !== LIB_INTERNAL.key) {
    throw new lib.Error400('key', 'isInvalid')
  }

  return { isInternal: true }
}
