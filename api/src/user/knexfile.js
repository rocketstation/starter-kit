module.exports = {
  client: 'pg',
  connection: {
    database: 'user',
    host: process.env.POSTGRES,
    password: 'password',
    timezone: 'utc',
    user: 'postgres',
  },
  debug: process.env.MODE !== 'production',
}
