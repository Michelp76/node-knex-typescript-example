import Knex from 'knex'

import PostgresProvider from './PostgresProvider'

export interface DataClient {
  postgres: Knex,
}

export async function create (): Promise<DataClient> {
  return {
    postgres: await PostgresProvider.create(),
  }
}

export default {create}
