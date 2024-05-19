import { BaseEntity, IBaseEntityProps } from 'src/core/entities/base.entity'
import { EAccountStatus } from 'src/domain/accounts/enums/account-status.enum'
import { EAccountType } from 'src/domain/accounts/enums/account-type.enum'
import { ECurrencyType } from 'src/domain/accounts/enums/currency-type.enum'
import { CustomerEntity } from 'src/domain/customers/entities/customer.entity'

export interface IAccountEntityProps extends IBaseEntityProps {
  customer: CustomerEntity
  agency: number
  count: number
  bank: number
  accountType: EAccountType
  balance: number
  lastTransactionDate?: Date
  currency: ECurrencyType
  status: EAccountStatus
}

export class AccountEntity extends BaseEntity<IAccountEntityProps> {
  get customer() {
    return this.props.customer
  }

  get agency() {
    return this.props.agency
  }

  get count() {
    return this.props.count
  }

  get bank() {
    return this.props.bank
  }

  get accountType() {
    return this.props.accountType
  }

  get balance() {
    return this.props.balance
  }

  get lastTransactionDate() {
    return this.props.lastTransactionDate
  }

  get currency() {
    return this.props.currency
  }

  get status() {
    return this.props.status
  }
}
