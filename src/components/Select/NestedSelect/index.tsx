import React, { useCallback, useMemo, useState } from 'react'

import { Input } from '../../index'
import { OptionItem } from '../../../helperComponents/OptionItem'
import { useGetElemSizes } from '../../../hooks/useGetElemSizes'
import { checkIsValueOverflowed, incrementOverflowedinitial } from '../utils'

import { TNestedSelectProps } from '../types'
import '../../../assets/styles/components/_select.scss'

const LEVEL_LEFT_MARGIN = 16
type TSelectedItemsWithLevels = {
  [key: string | number]: TItemValue[]
}
export const NestedSelect = (props: TNestedSelectProps): JSX.Element | null => {
  const {
    value,
    label,
    options,
    placeHolder,
    selectedItems,
    isRequiredField,
    setSelectedValue,
    optionRightIconComponent,
    labelRightIconComponent,
    avatar
  } = props
  const initialSelected = (value as TItemValue[]) || selectedItems || []

  const [isDropdownOpen, setIsOpen] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>(initialSelected)
  const [selectedItemsWithLevels, setSelectedLevels] = useState<TSelectedItemsWithLevels>({})

  const { width } = useGetElemSizes(containerRef)

  const openDropdown = () => setIsOpen(true)

  const toggleDropdown = (e?: TClickEventType) => {
    const clickedElement = e?.target as HTMLDivElement
    if (e && clickedElement.className && clickedElement.className.indexOf('icon-') !== -1) {
      setIsOpen(!isDropdownOpen)
      e.preventDefault()
    } else {
      openDropdown()
    }
  }

  const _checkIsValueOverflowed = useCallback(
    (value: string) => checkIsValueOverflowed(value, width),
    [width]
  )

  const onSelect = useCallback(
    (
      optionValue: TItemValue,
      hasChildren: boolean,
      level: string | number,
      isSelected: boolean
    ) => {
      if (!hasChildren) {
        setSelectedValue(optionValue)
      }

      const isLevelAlreadyClicked = !!selectedItemsWithLevels[level]

      if (isLevelAlreadyClicked) {
        const idsTobeClosed = Object.keys(selectedItemsWithLevels).reduce(
          (acc: TItemValue[], levelKey: TItemValue) => {
            if (levelKey && levelKey >= level) {
              acc = [...acc, ...selectedItemsWithLevels[levelKey]]
            }
            return acc
          },
          []
        )

        const filtered = selectedValues.filter((item) => idsTobeClosed.indexOf(item) === -1)

        if (isSelected) {
          setSelectedValues([...filtered])
        } else {
          setSelectedValues([...filtered, optionValue])
        }
        const reduceInitialValue = isSelected ? {} : { [level]: [optionValue] }

        setSelectedLevels((levels: TSelectedItemsWithLevels) => {
          return Object.keys(levels).reduce(
            (acc: TSelectedItemsWithLevels, levelKey: string | number) => {
              if (levelKey && levelKey < level) {
                acc[levelKey] = levels[levelKey]
              }
              return acc
            },
            reduceInitialValue
          )
        })
      } else {
        setSelectedValues([...selectedValues, optionValue])
        setSelectedLevels((levels: TSelectedItemsWithLevels) => {
          return { ...levels, [level]: [optionValue] }
        })
      }
    },
    [selectedValues, selectedItemsWithLevels]
  )

  const getSelectedItemsLabels = (option: TSelectOption, _label: string): string => {
    const isOpen = selectedValues.indexOf(option.value) !== -1

    if (isOpen) {
      const current = `${_label}${_label ? ', ' : ''}${option.label}`
      if (option.children) {
        return option.children.reduce((acc, item) => getSelectedItemsLabels(item, acc), current)
      }
      return current
    }

    return _label
  }

  const selectedItemsLabels = useMemo(() => {
    if (!selectedValues.length) {
      return ''
    }
    const currentValue = options.reduce(
      (acc: { inputValue: string; visibleOptionsLength: number }, option: TSelectOption) => {
        const label = getSelectedItemsLabels(option, '')

        const { inputValue, visibleOptionsLength } = acc
        const accNextValue = `${inputValue}${label}`
        const isOverflowed = _checkIsValueOverflowed(accNextValue)

        if (isOverflowed) {
          acc.inputValue = incrementOverflowedinitial(
            inputValue,
            selectedValues.length - visibleOptionsLength
          )

          return acc
        }
        acc = { inputValue: accNextValue, visibleOptionsLength: visibleOptionsLength + 1 }

        return acc
      },
      { inputValue: '', visibleOptionsLength: 0 }
    )

    return currentValue.inputValue
  }, [options, selectedValues, _checkIsValueOverflowed])

  const generateFolders = (foldersArr: TSelectOption[], level: number): Array<JSX.Element> =>
    foldersArr.reduce((acc: Array<JSX.Element>, option: TSelectOption) => {
      const { value, children, disabled } = option
      const isOpen = selectedValues.indexOf(option.value) !== -1
      const isSelected = isOpen && !option.children
      acc.push(
        <div style={{ paddingLeft: LEVEL_LEFT_MARGIN * level }}>
          <OptionItem
            data={option}
            key={value}
            isSelected={isSelected}
            onClick={() => onSelect(value, !!children, level, isOpen)}
            avatar={avatar}
            disabled={disabled}
            optionRightIconComponent={optionRightIconComponent}
            labelRightIconComponent={labelRightIconComponent}
            labelLeftIconProps={children ? { name: 'caret-down' } : undefined}
          />
        </div>
      )

      if (isOpen && children) {
        acc.push(...generateFolders(children, level + 1))
      }
      return acc
    }, [])

  return (
    <div className="select" ref={setContainerRef}>
      <div onClick={toggleDropdown}>
        <Input
          className="select__input"
          label={label}
          required={isRequiredField}
          rightIconProps={{ name: isDropdownOpen ? 'caret-up' : 'caret-down' }}
          placeholder={placeHolder}
          currentValue={selectedItemsLabels}
        />
      </div>

      {isDropdownOpen && <div className="select__options">{generateFolders(options, 0)}</div>}
    </div>
  )
}
