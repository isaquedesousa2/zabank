import { Injectable } from '@nestjs/common'
import { IHasher } from 'src/core/cryptography/hasher'
import { left, Either, right } from 'src/core/either'
import { CustomerEntity } from 'src/domain/customers/entities/customer.entity'
import { ExistingCustomerError } from 'src/domain/customers/erros/existing-customer-error'
import {
  CustomerRepository,
  ICreateCustomer,
} from 'src/domain/customers/repositories/customer.repository'

type CreatecustomerUseCaseResponse = Either<
  ExistingCustomerError,
  CustomerEntity
>

@Injectable()
export class CreatecustomerUseCase {
  constructor(
    private customerRepository: CustomerRepository,
    private hasher: IHasher,
  ) {}

  async execute({
    password,
    email,
    cpf,
    ...res
  }: ICreateCustomer): Promise<CreatecustomerUseCaseResponse> {
    const hasExistingCustomerByEmail =
      await this.customerRepository.findByEmail({
        email,
      })

    const hasExistingCustomerByCpf = await this.customerRepository.findByCpf({
      cpf,
    })

    if (hasExistingCustomerByEmail || hasExistingCustomerByCpf) {
      return left(new ExistingCustomerError())
    }

    const passwordHashed = await this.hasher.hash(password)

    const customer = await this.customerRepository.save({
      password: passwordHashed,
      email,
      cpf,
      ...res,
    })

    return right(customer)
  }
}
