import knexfile from './knexfile'

class Base extends Lib {}

Lib.knex(lib.getKnex(knexfile))

export default Base
