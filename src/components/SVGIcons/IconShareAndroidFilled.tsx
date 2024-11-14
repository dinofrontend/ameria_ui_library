import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconShareAndroidFilled = ({
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
        d="M17 3.00195C18.6558 3.00195 19.998 4.34424 19.998 6.00003C19.998 7.65582 18.6558 8.9981 17 8.9981C16.1578 8.9981 15.3967 8.65085 14.8521 8.09171L9.39499 11.2113C9.46333 11.4626 9.49981 11.7271 9.49981 12C9.49981 12.273 9.46333 12.5374 9.39499 12.7887L14.8528 15.9076C15.3974 15.3489 16.1582 15.002 17 15.002C18.6558 15.002 19.998 16.3442 19.998 18C19.998 19.6558 18.6558 20.9981 17 20.9981C15.3442 20.9981 14.0019 19.6558 14.0019 18C14.0019 17.7271 14.0384 17.4626 14.1067 17.2113L8.6496 14.0917C8.105 14.6508 7.34392 14.9981 6.50174 14.9981C4.84595 14.9981 3.50366 13.6558 3.50366 12C3.50366 10.3442 4.84595 9.00195 6.50174 9.00195C7.34355 9.00195 8.10432 9.3489 8.64887 9.9076L14.1067 6.78874C14.0384 6.53743 14.0019 6.27299 14.0019 6.00003C14.0019 4.34424 15.3442 3.00195 17 3.00195Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconShareAndroidFilled
