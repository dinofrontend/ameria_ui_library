import { TButtonPropTypes } from '../Button/types'

export interface TModalPropTypes {
  isOpen: boolean
  onClose: () => void
  onSumbit: () => void
  title?: string
  size?: 'small' | 'medium' | 'large'
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  closeIcon?: boolean
  children: JSX.Element
}
