import { randomUUID } from 'node:crypto'

export interface BaseEntityProps {
  id?: string
  createdAt?: Date
  updatedAt?: Date
}

export class BaseEntity<Props extends BaseEntityProps> {
  protected props: Props

  constructor(props: Props) {
    this.props = props
    this.props.createdAt = props.createdAt ?? new Date()
    this.props.id = props.id ?? randomUUID()
  }
}
