import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { useOnOutsideClick, useGetElemPositions, useGetElemSizes } from '../../hooks'

import { Text, Input } from '../../index'
import { OptionItem } from '../../helperComponents/OptionItem'

import { Loading } from './SharedComponents'
import { SELECTED_VISIBLE_MIN_COUNT } from './MultiSelect/consts'

import { TSingleSelectPropTypes } from './types'
import '../../assets/styles/components/_select.scss'

const SingleSelect = (props: TSingleSelectPropTypes): JSX.Element | null => {
  const {
    className,
    size = 'large',
    name,
    value,
    label,
    avatar,
    options,
    hasError,
    isLoading,
    isValid,
    disabled,
    dataId = '',
    placeHolder,
    selectedItem,
    setFieldValue,
    setSelectedItem,
    outerHelperText,
    innerHelperText,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent
  } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { scrollHeight } = useGetElemSizes(scrollRef.current)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState<string>('')
  const currentSelection = (value as TItemValue) || selectedItem || null

  const [itemLabel, setItemLabel] = useState<string | null>('')

  useEffect(() => {
    const label = options.find((item) => item.value === currentSelection)
    setItemLabel(label?.label.toString() || '')
  }, [currentSelection, options])

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => setIsOpen(false)

  useOnOutsideClick(containerRef.current, closeDropdown, isOpen, useId())
  const { bottom, left } = useGetElemPositions(inputRef.current)
  const { width } = useGetElemSizes(containerRef.current)

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return options
    }

    return options.filter((dataItem) => {
      return (
        typeof dataItem.label === 'string' &&
        dataItem.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  }, [searchValue, options])

  const onItemSelect = (value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value)
    }

    closeDropdown()
  }

  const onItemDeselect = () => onItemSelect(null)

  const onOpenOptions = (e: TClickEventType): void => {
    const result = e?.target as HTMLDivElement
    if (e && result.className && result.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
      return
    } else {
      openDropdown()
    }
  }

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
      setSearchValue('')
      if (!isSelected) {
        onItemSelect(value)
        return
      }
      if (!isRequiredField) {
        onItemDeselect()
      }
    }

  const onSearch = (e: TChangeEventType) => {
    setItemLabel(null)
    setSearchValue(e.target.value)
  }

  return (
    <div className={classNames(`select select--${size}`, className)} ref={containerRef}>
      <div onClick={onOpenOptions}>
        <Input
          size={size}
          data-id={dataId}
          hasError={hasError}
          className="select__input"
          label={label}
          onChange={onSearch}
          required={isRequiredField}
          rightIconProps={{
            name: isOpen ? 'caret-up-hover' : 'caret-down-hover',
            size: 'xsmall'
          }}
          readonly={options.length <= SELECTED_VISIBLE_MIN_COUNT}
          placeholder={placeHolder}
          value={itemLabel}
          isValid={isValid}
          disabled={disabled}
          helperText={isOpen ? '' : outerHelperText}
          ref={inputRef}
        />
      </div>

      {isOpen && (
        <div className="select__options" style={{ left, width, top: bottom }}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                ref={scrollRef}
                className={classNames(
                  'select__options__scroll',
                  'scrollbar',
                  'scrollbar--vertical',
                  {
                    'mr-6': scrollHeight > 372
                  }
                )}
              >
                {innerHelperText ? (
                  <div className="content-top">
                    <Text size="xsmall" type="secondary" className="content-top__label">
                      {innerHelperText}
                    </Text>
                  </div>
                ) : null}

                {filteredData.map((item: TSelectOption) => {
                  const isSelected = item.value === currentSelection
                  return (
                    <OptionItem
                      data={item}
                      key={item.value}
                      onClick={clickHandler(isSelected)}
                      labelLeftIconProps={labelLeftIconProps}
                      OptionRightIconComponent={optionRightIconComponent}
                      LabelRightIconComponent={labelRightIconComponent}
                      avatar={avatar}
                      disabled={item.disabled}
                      isSelected={isSelected}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default SingleSelect
