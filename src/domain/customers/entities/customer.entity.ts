import { BaseEntity, IBaseEntityProps } from 'src/core/entities/base.entity'

export interface ICustomerEntityProps extends IBaseEntityProps {
  firstName: string
  lastName: string
  email: string
  cpf: string
  password: string
  phoneNumber: string
  address: string
}

export class CustomerEntity extends BaseEntity<ICustomerEntityProps> {
  get firstName() {
    return this.props.firstName
  }

  get lastName() {
    return this.props.lastName
  }

  get cpf() {
    return this.props.cpf
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  get address() {
    return this.props.address
  }
}
