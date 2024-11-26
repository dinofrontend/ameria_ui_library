import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconInfo = ({
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
      d="M12.0001 1.99902C17.5238 1.99902 22.0016 6.47687 22.0016 12.0006C22.0016 17.5243 17.5238 22.0021 12.0001 22.0021C6.47638 22.0021 1.99854 17.5243 1.99854 12.0006C1.99854 6.47687 6.47638 1.99902 12.0001 1.99902ZM12.0001 3.49902C7.30481 3.49902 3.49854 7.3053 3.49854 12.0006C3.49854 16.6959 7.30481 20.5021 12.0001 20.5021C16.6954 20.5021 20.5016 16.6959 20.5016 12.0006C20.5016 7.3053 16.6954 3.49902 12.0001 3.49902ZM11.9964 10.4996C12.3761 10.4994 12.6901 10.7813 12.74 11.1473L12.7469 11.2491L12.7505 16.7507C12.7508 17.1649 12.4152 17.5009 12.001 17.5012C11.6213 17.5014 11.3073 17.2195 11.2574 16.8535L11.2505 16.7517L11.2469 11.2501C11.2467 10.8359 11.5822 10.4999 11.9964 10.4996ZM12.0005 7.00184C12.5521 7.00184 12.9992 7.44896 12.9992 8.0005C12.9992 8.55205 12.5521 8.99917 12.0005 8.99917C11.449 8.99917 11.0019 8.55205 11.0019 8.0005C11.0019 7.44896 11.449 7.00184 12.0005 7.00184Z"
      fill="#222222"
    />
  </svg>
)

export default IconInfo
