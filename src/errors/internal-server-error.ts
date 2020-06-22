import { ThingsFactoryGraphQLError } from './things-factory-error'
export class InternalServerError extends ThingsFactoryGraphQLError {
  message = 'Internal Server Error'
}
