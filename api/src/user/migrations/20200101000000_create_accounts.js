exports.up = (knex) => {
  return knex.schema.createTable('accounts', (t) => {
    t.increments('id').primary()
    t.string('email').notNullable().unique()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('accounts')
}
