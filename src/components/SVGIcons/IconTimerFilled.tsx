import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTimerFilled = ({
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
        d="M12 5C16.6944 5 20.5 8.80558 20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 8.80558 7.30558 5 12 5ZM12 8C11.6203 8 11.3065 8.28215 11.2568 8.64823L11.25 8.75V13.25L11.2568 13.3518C11.3065 13.7178 11.6203 14 12 14C12.3797 14 12.6935 13.7178 12.7432 13.3518L12.75 13.25V8.75L12.7432 8.64823C12.6935 8.28215 12.3797 8 12 8ZM19.1704 5.1226L19.2517 5.18424L20.4008 6.18424C20.7132 6.45617 20.7461 6.9299 20.4742 7.24236C20.2249 7.52878 19.8061 7.58026 19.4973 7.3774L19.416 7.31576L18.267 6.31576C17.9545 6.04383 17.9217 5.5701 18.1936 5.25764C18.4428 4.97122 18.8617 4.91974 19.1704 5.1226ZM14.25 2.5C14.6642 2.5 15 2.83579 15 3.25C15 3.6297 14.7178 3.94349 14.3518 3.99315L14.25 4H9.75C9.33579 4 9 3.66421 9 3.25C9 2.8703 9.28215 2.55651 9.64823 2.50685L9.75 2.5H14.25Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconTimerFilled
