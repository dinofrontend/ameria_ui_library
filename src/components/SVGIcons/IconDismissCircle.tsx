import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDismissCircle = ({
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
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM15.4462 8.39705L15.5303 8.46967C15.7966 8.73594 15.8208 9.1526 15.6029 9.44621L15.5303 9.53033L13.061 12L15.5303 14.4697C15.7966 14.7359 15.8208 15.1526 15.6029 15.4462L15.5303 15.5303C15.2641 15.7966 14.8474 15.8208 14.5538 15.6029L14.4697 15.5303L12 13.061L9.53033 15.5303C9.26406 15.7966 8.8474 15.8208 8.55379 15.6029L8.46967 15.5303C8.2034 15.2641 8.1792 14.8474 8.39705 14.5538L8.46967 14.4697L10.939 12L8.46967 9.53033C8.2034 9.26406 8.1792 8.8474 8.39705 8.55379L8.46967 8.46967C8.73594 8.2034 9.1526 8.1792 9.44621 8.39705L9.53033 8.46967L12 10.939L14.4697 8.46967C14.7359 8.2034 15.1526 8.1792 15.4462 8.39705Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconDismissCircle
