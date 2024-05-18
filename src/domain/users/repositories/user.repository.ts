import { UserEntity } from 'src/domain/users/entities/user.entity'

export interface ICreateUser {
  name: string
  email: string
  password: string
}

export abstract class IUserRepository {
  abstract create({ name, email, password }: ICreateUser): Promise<UserEntity>
  abstract findById({ id }: { id: string }): Promise<UserEntity>
  abstract findByEmail({ email }: { email: string }): Promise<UserEntity>
}
