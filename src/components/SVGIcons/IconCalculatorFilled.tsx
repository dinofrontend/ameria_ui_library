import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCalculatorFilled = ({
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
        d="M4 5.25C4 3.45507 5.45507 2 7.25 2H16.75C18.5449 2 20 3.45507 20 5.25V18.75C20 20.5449 18.5449 22 16.75 22H7.25C5.45507 22 4 20.5449 4 18.75V5.25ZM9 5C7.89543 5 7 5.89543 7 7V8C7 9.10457 7.89543 10 9 10H15C16.1046 10 17 9.10457 17 8V7C17 5.89543 16.1046 5 15 5H9ZM9.5 13.25C9.5 12.5596 8.94036 12 8.25 12C7.55964 12 7 12.5596 7 13.25C7 13.9404 7.55964 14.5 8.25 14.5C8.94036 14.5 9.5 13.9404 9.5 13.25ZM8.25 18.5C8.94036 18.5 9.5 17.9404 9.5 17.25C9.5 16.5596 8.94036 16 8.25 16C7.55964 16 7 16.5596 7 17.25C7 17.9404 7.55964 18.5 8.25 18.5ZM17 13.25C17 12.5596 16.4404 12 15.75 12C15.0596 12 14.5 12.5596 14.5 13.25C14.5 13.9404 15.0596 14.5 15.75 14.5C16.4404 14.5 17 13.9404 17 13.25ZM15.75 18.5C16.4404 18.5 17 17.9404 17 17.25C17 16.5596 16.4404 16 15.75 16C15.0596 16 14.5 16.5596 14.5 17.25C14.5 17.9404 15.0596 18.5 15.75 18.5ZM13.25 13.25C13.25 12.5596 12.6904 12 12 12C11.3096 12 10.75 12.5596 10.75 13.25C10.75 13.9404 11.3096 14.5 12 14.5C12.6904 14.5 13.25 13.9404 13.25 13.25ZM12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconCalculatorFilled
