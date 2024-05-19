import { IError } from 'src/core/errors/error.interface'

export class ExistingCustomerError extends Error implements IError {
  constructor() {
    super('Customer already exists!')
  }
}
