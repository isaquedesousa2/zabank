// Error
export class Left<L> {
  readonly value: L

  left() {
    return true
  }

  right() {
    return false
  }

  constructor(value: L) {
    this.value = value
  }
}

// Success
export class Right<R> {
  readonly value: R

  left() {
    return false
  }

  right() {
    return true
  }

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
