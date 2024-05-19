import { IError } from 'src/core/errors/error.interface'

export class CustomerNotFoundError extends Error implements IError {
  constructor() {
    super('Customer not found!')
  }
}
