declare type TIconSize = 'xSmall' | 'small' | 'medium' | 'large'
declare type TTextSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'
declare type TColor =
  | 'borderGray'
  | 'labelGray'
  | 'justWhite'
  | 'textBlack'
  | 'dropdownGray'
  | 'dropdownGray'
  | 'inputWhite'
  | 'inputBorderGray'
  | 'inputBorderActive'
  | 'inputBorderError'
  | 'buttonGreen'
  | 'secButtonBorderGray'
  | 'iconGray'
  | 'footerTextGray'
  | 'footerUnderlineGray'
  | 'darkGray'

declare type CallbackFnType = () => void

declare type TIconSizes = {
  [size in TIconSize]: string
}

interface TCustomIcons {
  [iconName: string]: (fillColor: string, size: string) => string
}

declare type TCustomColors = {
  [color: string]: string
}

interface TInputChangeEventType extends EventTarget {
  target: { value: string }
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

interface FieldError {
  ref?: RefObject<HTMLInputElement>
  message?: string
}

declare type TFormData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

declare type TEventType = MouseEvent | UIEvent<HTMLDivElement>

interface StringEventTarget extends EventTarget {
  text: string
}
interface InputEvent extends EventTarget {
  target: { value: string }
}
interface MouseEvent extends EventTarget {
  target: TextEventTarget | StringEventTarget
}

type FieldError = {
  message: string
}
declare type FieldErrors = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

interface RefObject<T> {
  readonly current: T | null
}

declare type TSetValue = (name: string, value: unknown, config?: { [key: string]: unknown }) => void

declare type TRegister = (name: string, RegisterOptions?) => { onChange; onBlur; name; ref }

interface FileEventTarget extends EventTarget {
  files: FileList
}

interface InputCustomPropTypes {
  mask?: string
  className?: string
  value?: string
  error?: string
  showError?: boolean
  label?: string
  ref?: HTMLInputElement<HTMLInputElement>
  style?: Record<string, string>
  onChange?: (event: TInputChangeEventType) => void
  onBlur?: (event: TInputChangeEventType) => void
}

declare type InputPropTypes = InputCustomPropTypes & React.HTMLProps<HTMLInputElement>

interface TFileUploadPropTypes {
  allowedTypes?: Array<string>
  label?: string
  getFiles?: (files: FileList) => void
  name?: string
  setFieldValue: TSetValue
}

declare type TComponentProps = TFileUploadPropTypes | InputCustomPropTypes

declare type TImageMimeTypes =
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/png'
  | 'image/heic'
  | 'image/heif'
  | 'application/pdf'
