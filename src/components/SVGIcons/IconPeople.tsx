import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPeople = ({
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
      d="M5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8ZM8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM15.5 9C15.5 8.17157 16.1716 7.5 17 7.5C17.8284 7.5 18.5 8.17157 18.5 9C18.5 9.82843 17.8284 10.5 17 10.5C16.1716 10.5 15.5 9.82843 15.5 9ZM17 6C15.3431 6 14 7.34315 14 9C14 10.6569 15.3431 12 17 12C18.6569 12 20 10.6569 20 9C20 7.34315 18.6569 6 17 6ZM14.2484 19.0377C14.9507 19.3232 15.8517 19.5 17.001 19.5C19.2833 19.5 20.5867 18.8027 21.2979 17.9421C21.643 17.5244 21.8186 17.1027 21.9077 16.7795C21.9521 16.6181 21.9754 16.48 21.9875 16.377C21.9936 16.3254 21.997 16.2821 21.9988 16.2487C21.9997 16.232 22.0003 16.2177 22.0006 16.2059L22.0009 16.1903L22.001 16.1839L22.001 16.1811L22.001 16.1786C22.001 14.9754 21.0256 14 19.8224 14H14.1796C14.1521 14 14.1248 14.0005 14.0977 14.0015C14.4916 14.4126 14.7787 14.927 14.914 15.5H19.8224C20.194 15.5 20.4958 15.7986 20.5009 16.1689C20.5006 16.1746 20.4997 16.1855 20.4979 16.2011C20.4934 16.2387 20.4835 16.3015 20.4615 16.3812C20.4177 16.5402 20.3277 16.7613 20.1416 16.9865C19.7903 17.4116 18.9687 18 17.001 18C16.0209 18 15.3252 17.854 14.8302 17.655C14.7231 18.0551 14.5452 18.5378 14.2484 19.0377ZM4.25 14C3.00736 14 2 15.0074 2 16.25V16.5011L2 16.5022L2.00001 16.5048L2.00007 16.5111L2.00035 16.5277C2.00064 16.5406 2.00117 16.5571 2.0021 16.5771C2.00396 16.6169 2.00745 16.6705 2.01398 16.7358C2.02701 16.8661 2.05233 17.045 2.10165 17.2564C2.19995 17.6776 2.39654 18.2404 2.79183 18.8051C3.61066 19.9749 5.17178 21 8 21C10.8282 21 12.3893 19.9749 13.2082 18.8051C13.6035 18.2404 13.8001 17.6776 13.8983 17.2564C13.9477 17.045 13.973 16.8661 13.986 16.7358C13.9926 16.6705 13.996 16.6169 13.9979 16.5771C13.9988 16.5571 13.9994 16.5406 13.9996 16.5277L13.9999 16.5111L14 16.5048L14 16.5022L14 16.25C14 15.0074 12.9926 14 11.75 14H4.25ZM3.50047 16.5072L3.5 16.4947V16.25C3.5 15.8358 3.83579 15.5 4.25 15.5H11.75C12.1642 15.5 12.5 15.8358 12.5 16.25V16.4946L12.4995 16.5072C12.4988 16.5222 12.4972 16.5493 12.4935 16.5865C12.486 16.6612 12.4703 16.7753 12.4376 16.9155C12.3718 17.1974 12.2403 17.5721 11.9793 17.9449C11.4857 18.6501 10.4218 19.5 8 19.5C5.57822 19.5 4.51434 18.6501 4.02067 17.9449C3.75971 17.5721 3.62818 17.1974 3.56241 16.9155C3.5297 16.7753 3.514 16.6612 3.50653 16.5865C3.50281 16.5493 3.50117 16.5222 3.50047 16.5072Z"
      fill="#222222"
    />
  </svg>
)

export default IconPeople
