import type { MouseEvent } from 'react'
import React from 'react'
import { Badge } from '../Badge'
import { noop } from '../../utils/helpers'
import type { TTabItemProps } from './types'
import classNames from 'classnames'
import { Text } from '../Text'
import { ICON_SIZE_MAPPING, TEXT_SIZE_MAPPING } from './consts'

export const TabItem = (props: TTabItemProps): JSX.Element | null => {
  const {
    iconProps,
    badgeProps,
    label,
    size = 'large',
    className = '',
    disabled = false,
    isSelected,
    rightIconProps,
    val,
    onClick,
    dataId
  } = props

  return (
    <div
      onClick={disabled ? noop : onClick}
      className={classNames(
        'tab',
        { 'tab--disabled': disabled },
        { 'tab--selected': isSelected },
        className
      )}
    >
      {iconProps?.Component ? (
        <iconProps.Component
          className="tab__icon mr-8"
          size={ICON_SIZE_MAPPING[size]}
          {...iconProps}
        />
      ) : null}
      <Text
        as={'span'}
        className={'tab__label'}
        data-id={dataId}
        lineHeight={'xsmall'}
        size={TEXT_SIZE_MAPPING[size]}
      >
        {label}
      </Text>
      {rightIconProps?.Component ? (
        <rightIconProps.Component
          onClick={(e: MouseEvent<unknown>) => {
            if (rightIconProps?.action) {
              e.stopPropagation()
              rightIconProps?.action(val)
            }
          }}
          className="tab__icon ml-8"
          size={ICON_SIZE_MAPPING[size]}
          {...rightIconProps}
        />
      ) : null}
      {badgeProps?.text ? (
        <Badge className="tab__badge ml-8" size="small" type="grey" {...badgeProps} />
      ) : null}
    </div>
  )
}
