import { IError } from 'src/core/errors/error.interface'

export class ExistingUserError extends Error implements IError {
  constructor() {
    super('User already exists!')
  }
}
