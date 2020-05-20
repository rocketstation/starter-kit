export class ServerError extends Error {
  constructor(status, key, val) {
    super(`Status - ${status}`)
    this.name = 'ServerError'
    this.status = status
    this.key = key
    this.val = val
  }
}

const request = async (endpoint, config, responseKind = 'json') => {
  const response = await fetch(endpoint, config)

  if (response.status === 401) throw new Error('401')

  const data = await response[responseKind]()

  if (!response.ok) throw new ServerError(response.status, data.key, data.val)

  if (responseKind === 'blob') {
    const contentDisposition = response.headers.get('content-disposition')

    if (contentDisposition?.includes('attachment')) {
      data.name = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
        contentDisposition,
      )?.[1]
    }
  }

  return data
}

export const post = (endpoint, { headers = {}, token } = {}, responseKind) => {
  let isCanceled = false

  const config = {
    headers,
    method: 'post',
    mode: 'cors',
  }

  if (token) config.headers.Authorization = `Bearer ${token}`

  return {
    cancel() {
      isCanceled = true
    },
    run(body) {
      return new Promise((resolve, reject) => {
        request(endpoint, { ...config, body }, responseKind).then(
          (val) => {
            return isCanceled ? reject(new Error('Canceled')) : resolve(val)
          },
          (err) => {
            return isCanceled ? reject(new Error('Canceled')) : reject(err)
          },
        )
      })
    },
  }
}

export const send = (
  endpoint,
  { headers = {}, ...config } = {},
  responseKind,
) => {
  headers['Content-Type'] = 'application/json'

  const { cancel, run } = post(endpoint, { headers, ...config }, responseKind)

  return {
    cancel,
    run(body = {}) {
      return run(JSON.stringify(body))
    },
  }
}

export const raw = (
  endpoint,
  { headers = {}, ...config } = {},
  responseKind,
) => {
  const { cancel, run } = post(endpoint, { headers, ...config }, responseKind)

  return {
    cancel,
    run(body = {}) {
      return run(
        Object.entries(body).reduce((r, [k, v]) => {
          if (v != null) r.append(k, v)

          return r
        }, new window.FormData()),
      )
    },
  }
}
