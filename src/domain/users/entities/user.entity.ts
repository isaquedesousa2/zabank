import { BaseEntity, BaseEntityProps } from 'src/core/entities/base.entity'

interface UserEntityProps extends BaseEntityProps {
  name: string
  email: string
  password: string
}

export class UserEntity extends BaseEntity<UserEntityProps> {
  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get createdAt() {
    return this.props?.createdAt
  }

  get updatedAt() {
    return this.props?.updatedAt
  }
}
