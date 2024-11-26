import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowSync = ({
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
      d="M16.2506 5.18011C15.9994 5.50947 16.0627 5.9801 16.3921 6.23128C18.1804 7.59515 19.25 9.70821 19.25 12C19.25 15.736 16.4242 18.812 12.7933 19.2071L13.4697 18.5303C13.7626 18.2374 13.7626 17.7626 13.4697 17.4697C13.2034 17.2034 12.7867 17.1792 12.4931 17.3971L12.409 17.4697L10.409 19.4697C10.1427 19.7359 10.1185 20.1526 10.3364 20.4462L10.409 20.5303L12.409 22.5303C12.7019 22.8232 13.1768 22.8232 13.4697 22.5303C13.7359 22.2641 13.7601 21.8474 13.5423 21.5538L13.4697 21.4697L12.7194 20.7208C17.2154 20.355 20.75 16.5903 20.75 12C20.75 9.23526 19.4582 6.68321 17.3017 5.03856C16.9724 4.78738 16.5017 4.85075 16.2506 5.18011ZM10.5303 1.46967C10.2374 1.76256 10.2374 2.23744 10.5303 2.53033L11.2796 3.27923C6.78409 3.6456 3.25 7.41008 3.25 12C3.25 14.6445 4.43126 17.0974 6.43081 18.7491C6.75016 19.0129 7.22289 18.9679 7.48669 18.6485C7.75048 18.3292 7.70545 17.8564 7.3861 17.5926C5.72793 16.2229 4.75 14.1922 4.75 12C4.75 8.26436 7.57532 5.18861 11.2057 4.79301L10.5303 5.46967C10.2374 5.76256 10.2374 6.23744 10.5303 6.53033C10.8232 6.82322 11.2981 6.82322 11.591 6.53033L13.591 4.53033C13.8839 4.23744 13.8839 3.76256 13.591 3.46967L11.591 1.46967C11.2981 1.17678 10.8232 1.17678 10.5303 1.46967Z"
      fill="#222222"
    />
  </svg>
)

export default IconArrowSync
