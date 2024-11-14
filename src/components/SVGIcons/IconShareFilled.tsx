import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconShareFilled = ({
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
        d="M6.74658 4.00003H10.2108C10.625 4.00003 10.9608 4.33582 10.9608 4.75003C10.9608 5.12972 10.6786 5.44352 10.3126 5.49318L10.2108 5.50003H6.74658C5.55572 5.50003 4.58094 6.42519 4.50177 7.59598L4.49658 7.75003V17.25C4.49658 18.4409 5.42174 19.4157 6.59253 19.4948L6.74658 19.5H16.2473C17.4382 19.5 18.413 18.5749 18.4921 17.4041L18.4973 17.25V16.7522C18.4973 16.338 18.8331 16.0022 19.2473 16.0022C19.627 16.0022 19.9408 16.2844 19.9905 16.6505L19.9973 16.7522V17.25C19.9973 19.2543 18.425 20.8913 16.4465 20.9948L16.2473 21H6.74658C4.74232 21 3.10531 19.4277 3.00178 17.4492L2.99658 17.25V7.75003C2.99658 5.74577 4.56894 4.10876 6.54742 4.00523L6.74658 4.00003H10.2108H6.74658ZM14.5006 6.54434V3.75003C14.5006 3.12606 15.2074 2.78998 15.6876 3.13983L15.7697 3.20877L21.7643 8.95877C22.0441 9.22712 22.0696 9.65814 21.8407 9.9561L21.7644 10.0412L15.7698 15.7931C15.3196 16.2251 14.5877 15.9477 14.5077 15.3589L14.5006 15.2519V12.45L14.1798 12.4438C11.5223 12.4359 9.25072 13.5269 7.31495 15.745C6.81934 16.3129 5.88968 15.8769 6.0094 15.1328C6.83639 9.99236 9.60847 7.08831 14.1986 6.57446L14.5006 6.54434V3.75003V6.54434Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconShareFilled
