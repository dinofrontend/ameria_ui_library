import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHistoryFilled = ({
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
        d="M19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C10.3379 4.75 8.80642 5.30932 7.58352 6.25H8.25C8.80228 6.25 9.25 6.69772 9.25 7.25C9.25 7.80228 8.80228 8.25 8.25 8.25H5.25C4.69772 8.25 4.25 7.80228 4.25 7.25V7H4.21647L4.25 6.94829V4.25C4.25 3.69772 4.69772 3.25 5.25 3.25C5.80228 3.25 6.25 3.69772 6.25 4.25V4.75385C7.82875 3.49939 9.82686 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 11.6174 2.77322 11.2403 2.81834 10.8699C2.88069 10.3581 3.33398 10 3.8496 10C4.44068 10 4.86674 10.5685 4.79864 11.1556C4.76652 11.4326 4.75 11.7144 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V13C11 13.5523 11.4477 14 12 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13V8Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconHistoryFilled
