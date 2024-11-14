import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGb = ({
  size,
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
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_1993_2165"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_1993_2165)">
      <rect y="3.42999" width="24" height="17.1429" fill="#0A17A7" />
      <path
        d="M-1.09929 1.78735L9.14287 8.69577V2.28718H14.8572V8.69573L25.0992 1.78736L26.3774 3.6823L18.2796 9.14432H24V14.8586H18.2796L26.3774 20.3206L25.0992 22.2155L14.8572 15.3072V21.7157H9.14287V15.3071L-1.09928 22.2156L-2.37744 20.3206L5.72032 14.8586H7.62939e-06V9.14432H5.72034L-2.37744 3.6823L-1.09929 1.78735Z"
        fill="white"
      />
      <path
        d="M27.1356 1.53249C27.2368 1.68629 27.1942 1.89299 27.0404 1.99417L16.1843 9.13605C16.0305 9.23723 15.8238 9.19457 15.7227 9.04078C15.6215 8.88698 15.6641 8.68028 15.8179 8.5791L26.674 1.43722C26.8277 1.33604 27.0344 1.3787 27.1356 1.53249Z"
        fill="#DB1F35"
      />
      <path
        d="M27.1621 21.9165C27.265 21.7639 27.2247 21.5567 27.072 21.4538L17.3401 14.8943C17.1875 14.7914 16.9803 14.8317 16.8774 14.9844C16.7745 15.137 16.8149 15.3442 16.9675 15.4471L26.6994 22.0066C26.852 22.1095 27.0592 22.0692 27.1621 21.9165Z"
        fill="#DB1F35"
      />
      <path
        d="M-3.56564 1.81145C-3.46276 1.65878 -3.25559 1.61843 -3.10293 1.72132L7.04823 8.56255C7.20089 8.66544 7.24124 8.8726 7.13836 9.02526C7.03547 9.17792 6.82831 9.21828 6.67565 9.11539L-3.47551 2.27415C-3.62817 2.17127 -3.66853 1.96411 -3.56564 1.81145Z"
        fill="#DB1F35"
      />
      <path
        d="M-3.56702 22.7375C-3.46528 22.8909 -3.25842 22.9328 -3.105 22.831L8.14717 15.3691C8.30059 15.2674 8.34249 15.0605 8.24074 14.9071C8.139 14.7537 7.93214 14.7118 7.77872 14.8135L-3.47344 22.2754C-3.62687 22.3772 -3.66876 22.584 -3.56702 22.7375Z"
        fill="#DB1F35"
      />
      <path
        d="M0 13.7157H10.2857V20.5728H13.7143V13.7157H24V10.2871H13.7143V3.42999H10.2857V10.2871H0V13.7157Z"
        fill="#E6273E"
      />
    </g>
  </svg>
)

export default IconGb
