import { RefObject } from 'react'
import { IFormCompProps, TChangeEventType } from '../../types/globals'

export interface InputCustomProps extends Omit<IFormCompProps, 'value'> {
  mask?: string
  className?: string
  size?: string
  currentValue?: string
  error?: string | JSX.Element
  label?: string | JSX.Element
  leftIcon?: boolean
  rightIcon?: boolean
  disabled?: boolean
  required?: boolean
  valid?: boolean
  iconProps?: {
    name: string
    size?: TIconSize
    color?: TColor
  }
  ref?: RefObject<HTMLInputElement>
  style?: Record<string, string>
  type?: 'text' | 'number'
  changeHandler?: (event: TChangeEventType) => void
  placeholder?: string
}
