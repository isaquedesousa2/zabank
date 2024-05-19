import {
  CustomerEntity,
  ICustomerEntityProps,
} from 'src/domain/customers/entities/customer.entity'

export interface ICreateCustomer extends ICustomerEntityProps {}

export abstract class CustomerRepository {
  abstract save(props: ICreateCustomer): Promise<CustomerEntity>
  abstract findByCpf(props: { cpf: string }): Promise<CustomerEntity>
  abstract findByEmail(props: { email: string }): Promise<CustomerEntity>
  abstract findById(props: { id: string }): Promise<CustomerEntity>
}
