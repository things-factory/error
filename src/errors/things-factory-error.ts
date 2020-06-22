import { GraphQLError } from 'graphql'
export abstract class ThingsFactoryGraphQLError extends GraphQLError {
  abstract message: string
  constructor(graphqlError?: GraphQLError) {
    super(graphqlError?.message ?? '')
    Object.assign(this, {
      ...graphqlError,
    })
  }
}
