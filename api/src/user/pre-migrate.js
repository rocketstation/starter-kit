const { Client } = require('pg')

const {
  connection: { database, ...config },
} = require('./knexfile')

const run = async () => {
  const client = new Client({ database: 'postgres', ...config })

  await client.connect()

  const { rows } = await client.query(
    `select 1 as result from pg_database where datname='${database}'`,
  )

  if (rows.length === 0) {
    await client.query(`create database "${database}"`)
  }

  await client.end()
}

run().catch((err) => {
  console.error(err.message)
})
