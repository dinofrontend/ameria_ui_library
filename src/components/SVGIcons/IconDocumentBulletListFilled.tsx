import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDocumentBulletListFilled = ({
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
        d="M12 8V2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10H14C12.8954 10 12 9.10457 12 8ZM7 12.25C7 11.8358 7.33579 11.5 7.75 11.5C8.16421 11.5 8.5 11.8358 8.5 12.25C8.5 12.6642 8.16421 13 7.75 13C7.33579 13 7 12.6642 7 12.25ZM7 15.25C7 14.8358 7.33579 14.5 7.75 14.5C8.16421 14.5 8.5 14.8358 8.5 15.25C8.5 15.6642 8.16421 16 7.75 16C7.33579 16 7 15.6642 7 15.25ZM7 18.25C7 17.8358 7.33579 17.5 7.75 17.5C8.16421 17.5 8.5 17.8358 8.5 18.25C8.5 18.6642 8.16421 19 7.75 19C7.33579 19 7 18.6642 7 18.25ZM10 12.25C10 11.8358 10.3358 11.5 10.75 11.5H16.25C16.6642 11.5 17 11.8358 17 12.25C17 12.6642 16.6642 13 16.25 13H10.75C10.3358 13 10 12.6642 10 12.25ZM10 15.25C10 14.8358 10.3358 14.5 10.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H10.75C10.3358 16 10 15.6642 10 15.25ZM10 18.25C10 17.8358 10.3358 17.5 10.75 17.5H16.25C16.6642 17.5 17 17.8358 17 18.25C17 18.6642 16.6642 19 16.25 19H10.75C10.3358 19 10 18.6642 10 18.25ZM13.5 8V2.5L19.5 8.5H14C13.7239 8.5 13.5 8.27614 13.5 8Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconDocumentBulletListFilled
