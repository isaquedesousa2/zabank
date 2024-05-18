import { Injectable } from '@nestjs/common'
import { IHasher } from 'src/core/cryptography/hasher'
import { left, Either, right } from 'src/core/either'
import { UserEntity } from 'src/domain/users/entities/user.entity'
import { ExistingUserError } from 'src/domain/users/errors/existing-user-error'
import {
  ICreateUser,
  IUserRepository,
} from 'src/domain/users/repositories/user.repository'

type CreateUserUseCaseResponse = Either<ExistingUserError, UserEntity>

@Injectable()
export class CreateUserUseCase {
  constructor(
    private useRepository: IUserRepository,
    private hasher: IHasher,
  ) {}

  async execute({
    name,
    email,
    password,
  }: ICreateUser): Promise<CreateUserUseCaseResponse> {
    const hasExistingUser = await this.useRepository.findByEmail({ email })

    if (hasExistingUser) {
      return left(new ExistingUserError())
    }

    const passwordHashed = await this.hasher.hash(password)

    const user = await this.useRepository.create({
      name,
      email,
      password: passwordHashed,
    })

    return right(user)
  }
}
