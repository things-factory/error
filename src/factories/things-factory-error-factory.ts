import { ErrorFactory } from './error-factory'
import { ErrorCodes } from '../error-codes'
import { ThingsFactoryGraphQLError, InternalServerError } from '../errors'
import { GraphQLError } from 'graphql'

export class ThingsFactoryErrorFactory extends ErrorFactory {
  private static instance?: ErrorFactory
  static getInstance(): ErrorFactory {
    if (!ThingsFactoryErrorFactory.instance) {
      ThingsFactoryErrorFactory.instance = new ThingsFactoryErrorFactory()
    }

    return ThingsFactoryErrorFactory.instance
  }

  createError(errorCode: string, graphqlError?: GraphQLError): ThingsFactoryGraphQLError {
    let error: ThingsFactoryGraphQLError
    switch (errorCode) {
      case 'aa':
        error = undefined!
        break
      case 'INTERNAL_SERVER_ERROR':
      default:
        error = new InternalServerError(graphqlError)
        break
    }

    return error
  }
}
