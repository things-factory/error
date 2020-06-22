import { ThingsFactoryGraphQLError, InternalServerError } from '../errors'
import { ErrorCodes } from '../error-codes'
import { GraphQLError } from 'graphql'
export abstract class ErrorFactory {
  create(errorCode: string, graphqlError?: GraphQLError): ThingsFactoryGraphQLError {
    const error: ThingsFactoryGraphQLError = this.createError(errorCode, graphqlError)
    return error
  }

  static getInstance(): ErrorFactory {
    return null!
  }

  abstract createError(errorCode: string, graphqlError?: GraphQLError): ThingsFactoryGraphQLError
}
