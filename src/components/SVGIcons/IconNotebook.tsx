import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNotebook = ({
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
        d="M16.7488 2C17.9915 2 18.9988 3.00736 18.9988 4.25V19.75C18.9988 20.9926 17.9915 22 16.7488 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H16.7488ZM16.7488 3.5H6.25C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H16.7488C17.163 20.5 17.4988 20.1642 17.4988 19.75V4.25C17.4988 3.83579 17.163 3.5 16.7488 3.5ZM20 15.0019H20.75C21.1297 15.0019 21.4435 15.2841 21.4932 15.6502L21.5 15.7519V17.25C21.5 17.6297 21.2178 17.9435 20.8518 17.9932L20.75 18H20V15.0019H20.75H20ZM20 11.0019H20.75C21.1297 11.0019 21.4435 11.2841 21.4932 11.6502L21.5 11.7519V13.25C21.5 13.6297 21.2178 13.9435 20.8518 13.9932L20.75 14H20V11.0019H20.75H20ZM20 7.00194H20.75C21.1297 7.00194 21.4435 7.28409 21.4932 7.65017L21.5 7.75194V9.25C21.5 9.6297 21.2178 9.94349 20.8518 9.99315L20.75 10H20V7.00194H20.75H20ZM15.2488 5C15.663 5 15.9988 5.33579 15.9988 5.75V8.2485C15.9988 8.66272 15.663 8.9985 15.2488 8.9985H7.75C7.33579 8.9985 7 8.66272 7 8.2485V5.75C7 5.33579 7.33579 5 7.75 5H15.2488ZM14.4988 6.5H8.5V7.4985H14.4988V6.5Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconNotebook
