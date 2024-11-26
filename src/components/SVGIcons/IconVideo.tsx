import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconVideo = ({
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
    <path
      d="M13.75 4.5C15.5449 4.5 17 5.95507 17 7.75V7.923L20.8639 5.605C21.3638 5.30486 22 5.66493 22 6.248V17.75C22 18.333 21.364 18.6931 20.8641 18.3931L17 16.075V16.25C17 18.0449 15.5449 19.5 13.75 19.5H5.25C3.45507 19.5 2 18.0449 2 16.25V7.75C2 5.95507 3.45507 4.5 5.25 4.5H13.75ZM13.75 6H5.25C4.2835 6 3.5 6.7835 3.5 7.75V16.25C3.5 17.2165 4.2835 18 5.25 18H13.75C14.7165 18 15.5 17.2165 15.5 16.25V7.75C15.5 6.7835 14.7165 6 13.75 6ZM20.5 7.5731L17 9.6745V14.3254L20.5 16.4254V7.5731Z"
      fill="#222222"
    />
  </svg>
)

export default IconVideo
