import { knexSnakeCaseMappers } from 'objection'
import Knex from 'knex'

export const getKnex = (config) => {
  return Knex({
    ...config,
    ...knexSnakeCaseMappers(),
  })
}
