import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconRedo = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M19.2501 2C18.8704 2 18.5566 2.28215 18.507 2.64823L18.5001 2.75V8.44L13.9258 3.88014C11.4838 1.43819 7.56165 1.37863 5.0475 3.70146L4.86162 3.88014C2.35863 6.38313 2.35863 10.4413 4.86162 12.9443L13.7068 21.7835C13.9998 22.0762 14.4745 22.0759 14.7674 21.783C15.0603 21.4901 15.06 21.0151 14.767 20.7223L5.92228 11.8836C4.00507 9.96641 4.00507 6.85801 5.92228 4.9408C7.78139 3.08169 10.7606 3.02535 12.6883 4.77248L12.8659 4.94156L17.4381 9.5L11.7501 9.50018C11.3704 9.50018 11.0566 9.78234 11.007 10.1484L11.0001 10.2502C11.0001 10.6299 11.2823 10.9437 11.6483 10.9933L11.7501 11.0002H19.2501C19.6298 11.0002 19.9436 10.718 19.9933 10.352L20.0001 10.2502V2.75C20.0001 2.33579 19.6643 2 19.2501 2Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconRedo
