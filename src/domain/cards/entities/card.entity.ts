import { IBaseEntityProps } from 'src/core/entities/base.entity'
import { ECardStatus } from 'src/domain/cards/enums/card-status.enum'
import { ECardType } from 'src/domain/cards/enums/card-type.enum'

export interface ICardEntityProps extends IBaseEntityProps {
  account: AccountEntity
  cardNumber: number
  cardType: ECardType
  expirationDate: Date
  cvv: number
  status: ECardStatus
}
