import { randomUUID } from 'node:crypto'

export interface IBaseEntityProps {
  id?: string
  createdAt?: Date
  updatedAt?: Date
}

export class BaseEntity<Props extends IBaseEntityProps> {
  protected props: Props

  get id() {
    return this.props.id
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  constructor(props: Props) {
    this.props = props
    this.props.createdAt = props.createdAt ?? new Date()
    this.props.id = props.id ?? randomUUID()
  }
}
