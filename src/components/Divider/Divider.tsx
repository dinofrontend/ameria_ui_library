import React from 'react'
import { TDividerProps } from './types'
import classnames from 'classnames'
import '../../assets/styles/components/_divider.scss'

export const Divider = (props: TDividerProps): JSX.Element => {
  const { type, isHorizontal, className } = props
  return (
    <hr
      className={classnames(
        'divider',
        `divider--${type}`,
        {
          'divider--horizontal': isHorizontal,
          'divider--vertical': !isHorizontal
        },
        className
      )}
    />
  )
}
