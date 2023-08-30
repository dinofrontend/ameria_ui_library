import { TButtonPropTypes } from '../Button/types'

export interface TNestedSelectProps extends IFormCompProps {
  options: TSelectOptions
  isRequiredField?: boolean
  label?: string | JSX.Element
  placeHolder?: string
  selectedItems?: TItemValue[]
  setSelectedValue: (value: TItemValue) => void
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  avatar?: string
}

export type TSelectTranslations = {
  emptyListMainMessage: string
  overflowText?: string
  searchInputPlaceHolder?: string
  emptyListSecondaryMessage?: string
  selectAllLabel?: string
  clearAllLabel?: string
  innerLabel?: string
}

interface TMultiSelectCompProps extends IFormCompProps {
  maxSelectCount: number
  isSearchAvailable: boolean
  helperText?: string
  isOpen: boolean
  isLoading?: boolean
  translations: TSelectTranslations
  selectedValues: TSelectedValue[]
  setSelectedValues: (values: TSelectedValue[]) => void
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  onItemSelect: (item: TSelectedValue) => void
  onItemDeselect: (item: TSelectedValue) => void
  footer: JSX.Element
}

export interface TMultySingleTabPropTypes extends TMultiSelectCompProps {
  options: TSelectOptions
}

export interface TMultiSelectGroupedProps extends TMultiSelectCompProps {
  options: TSelectGroupOptions
}

export interface TMultiSelectPropTypes extends IFormCompProps {
  helperText?: string
  maxSelectCount?: number
  withTabs?: boolean
  isGrouped?: boolean
  placeHolder?: string
  label?: string | JSX.Element
  selectedItems?: TSelectedValue[]
  translations: TSelectTranslations
  options: TSelectOptions | TSelectGroupOptions
  setSelectedItems?: (items: TSelectedValue[]) => void
  isRequiredField?: boolean
  footerButtonProps: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  avatar?: string
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
}

export interface TSingleSelectPropTypes extends IFormCompProps {
  error?: string
  isLoading?: boolean
  label?: string | JSX.Element
  options: TSelectOptions
  placeHolder?: string
  selectedItem?: TItemValue
  setSelectedItem?: (items: TItemValue | undefined) => void
  isRequiredField?: boolean
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  avatar?: string
  size?: 'small' | 'large'
}

export type TSelectFooterPropTypes = {
  buttonProps: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  onCancel: () => void
  onApply: () => void
}

export interface TFilterProps extends IFormCompProps {
  isLoading?: boolean
  withTabs: boolean
  isGrouped: boolean
  isOpen: boolean
  options: TSelectOptions | TSelectGroupOptions
  selectedItems: TSelectedValue[]
  setSelectedItems: (items: TSelectedValue[]) => void
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  footerButtonProps?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  closeHandler: () => void
  parentRef: HTMLElement
}

export interface TFilterDropdownContentProps extends IFormCompProps {
  options: TSelectOptions
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  footerButtonProps?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  // closeHandler: () => void
  filterValue: string
  onItemSelect: (item: TSelectedValue) => void
  onItemDeselect: (item: TSelectedValue) => void
  checkIsSelected: (item: TItemValue) => boolean
}

export interface TFilterGroupDropdownContentProps extends IFormCompProps {
  options: TSelectGroupOptions
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  footerButtonProps?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  filterValue: string
  onItemSelect: (item: TSelectedValue) => void
  onItemDeselect: (item: TSelectedValue) => void
  checkIsSelected: (item: TItemValue) => boolean
}
