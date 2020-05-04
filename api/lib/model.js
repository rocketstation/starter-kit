import { Model } from 'objection'
import { DBErrors } from 'objection-db-errors'

class Base extends DBErrors(Model) {}

export default Base
