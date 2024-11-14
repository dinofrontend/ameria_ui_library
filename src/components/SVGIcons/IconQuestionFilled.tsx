import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconQuestionFilled = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M12 2C17.523 2 22 6.478 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12C2 6.478 6.477 2 12 2ZM12 15.5C11.4477 15.5 11 15.9477 11 16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5C13 15.9477 12.5523 15.5 12 15.5ZM12 6.75C10.4812 6.75 9.25 7.98122 9.25 9.5C9.25 9.91421 9.58579 10.25 10 10.25C10.3797 10.25 10.6935 9.96785 10.7432 9.60177L10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.0388 13.115 10.3053 12.6051 10.8322L12.4697 10.9697C11.5916 11.8478 11.25 12.4171 11.25 13.5C11.25 13.9142 11.5858 14.25 12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5C12.75 12.9612 12.885 12.6947 13.3949 12.1678L13.5303 12.0303C14.4084 11.1522 14.75 10.5829 14.75 9.5C14.75 7.98122 13.5188 6.75 12 6.75Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconQuestionFilled
