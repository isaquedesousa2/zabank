import { Injectable } from '@nestjs/common'
import { randomInt } from 'crypto'
import { Either, left, right } from 'src/core/either'
import { AccountEntity } from 'src/domain/accounts/entities/account.entity'
import { EAccountType } from 'src/domain/accounts/enums/account-type.enum'
import { ECurrencyType } from 'src/domain/accounts/enums/currency-type.enum'
import { AccountRepository } from 'src/domain/accounts/repositories/account.repository'
import { CustomerNotFoundError } from 'src/domain/customers/erros/customer-not-found-error'
import { CustomerRepository } from 'src/domain/customers/repositories/customer.repository'

type CreateAccountUseCaseResponse = Either<CustomerNotFoundError, AccountEntity>

interface ICreateAccount {
  customerId: string
  accountType: EAccountType
  currency: ECurrencyType
}

@Injectable()
export class CreateAccountUseCase {
  constructor(
    private accountRepository: AccountRepository,
    private customerRepository: CustomerRepository,
  ) {}

  async execute({
    customerId,
    ...res
  }: ICreateAccount): Promise<CreateAccountUseCaseResponse> {
    const bank = 2302
    const agency = randomInt(4)
    const count = randomInt(9)

    const customer = await this.customerRepository.findById({ id: customerId })

    if (!customer) {
      return left(new CustomerNotFoundError())
    }

    const account = await this.accountRepository.create({
        
      bank,
      agency,
      count,
      ...res,
    })

    return right(account)
  }
}
