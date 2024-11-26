import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChatMultiple = ({
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
      d="M10.1553 3C6.01319 3 2.65533 6.35786 2.65533 10.5C2.65533 11.6329 2.907 12.7088 3.35798 13.6734C3.10395 14.6714 2.82013 15.7842 2.63374 16.5147C2.40072 17.428 3.22315 18.2588 4.13749 18.039C4.88771 17.8587 6.04074 17.5819 7.06822 17.337C8.01053 17.7631 9.05616 18 10.1553 18C14.2975 18 17.6553 14.6421 17.6553 10.5C17.6553 6.35786 14.2975 3 10.1553 3ZM4.15533 10.5C4.15533 7.18629 6.84162 4.5 10.1553 4.5C13.469 4.5 16.1553 7.18629 16.1553 10.5C16.1553 13.8137 13.469 16.5 10.1553 16.5C9.19459 16.5 8.28862 16.2748 7.48536 15.8749L7.24195 15.7537L6.97743 15.8167C6.0547 16.0363 4.98864 16.2919 4.18967 16.4838C4.38842 15.7047 4.65159 14.6724 4.87976 13.7757L4.94994 13.4998L4.81943 13.2468C4.3952 12.4246 4.15533 11.4914 4.15533 10.5ZM15.1554 21.0001C13.186 21.0001 11.3939 20.241 10.0557 18.9995C10.0889 18.9999 10.1221 19.0001 10.1554 19.0001C10.8733 19.0001 11.5705 18.911 12.2365 18.7434C13.1004 19.2254 14.0958 19.5001 15.1554 19.5001C16.1161 19.5001 17.0221 19.2748 17.8253 18.8749L18.0687 18.7537L18.3332 18.8167C19.2548 19.0361 20.2983 19.2625 21.0724 19.4262C20.8975 18.6757 20.6587 17.6711 20.4309 16.7757L20.3607 16.4999L20.4913 16.2469C20.9155 15.4247 21.1553 14.4915 21.1553 13.5001C21.1553 11.3853 20.0613 9.52617 18.4084 8.45761C18.23 7.73435 17.959 7.04756 17.6087 6.41052C20.546 7.42684 22.6553 10.2171 22.6553 13.5001C22.6553 14.6332 22.4036 15.7094 21.9524 16.6741C22.2054 17.6821 22.4616 18.774 22.6241 19.4773C22.8286 20.3623 22.0492 21.1633 21.1567 20.9768C20.4296 20.8248 19.2871 20.581 18.2433 20.3367C17.3008 20.763 16.2548 21.0001 15.1554 21.0001Z"
      fill="#222222"
    />
  </svg>
)

export default IconChatMultiple
