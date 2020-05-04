import http from 'http'

export const run = async (app, port) => {
  try {
    const server = http.createServer(app.callback())

    server.listen(port, (err) => {
      if (err) console.error(err)
    })
  } catch (err) {
    console.error(err)
  }
}
