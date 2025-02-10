import type { ReactElement } from 'react'
import React from 'react'
import { Text } from '../Text'
import type { TBadgeProps } from './types'
import classNames from 'classnames'
import { COLOR_TYPE_MAPPING, TEXT_SIZE_MAPPING } from './consts'

export const Badge = (props: TBadgeProps): ReactElement => {
  const { type = 'red', size = 'large', text, className = '' } = props

  return (
    <div className={classNames(`badge badge--${type}  badge--${size}`, className)}>
      {text ? (
        <Text
          size={TEXT_SIZE_MAPPING[size]}
          type={COLOR_TYPE_MAPPING[type]}
          className="badge__inner"
        >
          <>{text}</>
        </Text>
      ) : null}
    </div>
  )
}
