import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowDown = ({
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
    <g id="Direction=Down, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M19.7906 13.2673C20.0763 12.9674 20.0647 12.4926 19.7648 12.2069C19.4649 11.9213 18.9901 11.9328 18.7045 12.2327L12.75 18.484V3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75V18.4844L5.29514 12.2327C5.00945 11.9328 4.53472 11.9213 4.23479 12.2069C3.93487 12.4926 3.92332 12.9674 4.20901 13.2673L11.2757 20.6862C11.4367 20.8553 11.6422 20.9552 11.8557 20.9861C11.9024 20.9952 11.9506 21 12 21C12.0497 21 12.0982 20.9952 12.1452 20.9859C12.3583 20.9548 12.5632 20.8549 12.7239 20.6862L19.7906 13.2673Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowDown
