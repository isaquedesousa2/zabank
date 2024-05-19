import { AccountEntity } from 'src/domain/accounts/entities/account.entity'
import { EAccountType } from 'src/domain/accounts/enums/account-type.enum'
import { ECurrencyType } from 'src/domain/accounts/enums/currency-type.enum'

interface ICreateAccount {
  bank: number
  count: number
  agency: number
  customerId: string
  accountType: EAccountType
  currency: ECurrencyType
}

export abstract class AccountRepository {
  abstract create(props: ICreateAccount): Promise<AccountEntity>
}
