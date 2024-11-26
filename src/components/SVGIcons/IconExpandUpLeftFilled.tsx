import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconExpandUpLeftFilled = ({
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
    <g id="Direction=Up Left, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M11 3.75C11 3.33579 10.6642 3 10.25 3H3.74951C3.3353 3 2.99951 3.33579 2.99951 3.75V10.25C2.99951 10.6642 3.3353 11 3.74951 11C4.16372 11 4.49951 10.6642 4.49951 10.25V5.56074L9.71966 10.7804C10.0126 11.0732 10.4874 11.0732 10.7803 10.7803C11.0732 10.4874 11.0732 10.0125 10.7803 9.71964L5.56009 4.5H10.25C10.6642 4.5 11 4.16421 11 3.75ZM17.75 4.5C18.7165 4.5 19.5 5.2835 19.5 6.25V12H14.75C13.2312 12 12 13.2312 12 14.75V19.5H6.24996C5.28346 19.5 4.49996 18.7165 4.49996 17.75V13.75C4.49996 13.3358 4.16418 13 3.74996 13C3.33575 13 2.99996 13.3358 2.99996 13.75V17.75C2.99996 19.5449 4.45504 21 6.24996 21L17.25 21.0002L17.2839 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H13.75C13.3357 3 13 3.33579 13 3.75C13 4.16421 13.3357 4.5 13.75 4.5H17.75Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconExpandUpLeftFilled
