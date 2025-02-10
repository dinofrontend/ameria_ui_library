import type { ReactElement } from 'react'
import React, { useState } from 'react'
import classNames from 'classnames'
import type { TNavigationLinkPropTypes } from './types'
import { NavigationItemTypes } from './types'
import { Badge } from '../../Badge'
import IconDynamicComponent from '../../../helperComponents/IconDynamicComponent/IconDynamicComponent'
import IconChevronDown from '../../SVGIcons/IconChevronDown'

export const NavigationItem = (props: TNavigationLinkPropTypes): ReactElement => {
  const {
    As,
    type,
    isOpen,
    iconName,
    showBadge,
    expandable = false,
    showAction = false,
    actionElm,
    active = false,
    badgeType = 'green',
    badgeContent,
    expandIconProps = {
      Component: IconChevronDown,
      size: 'medium'
    },
    children
  } = props

  const [childOpen, setChildOpen] = useState(false)

  const displayNavigationItem = () => {
    if (type === NavigationItemTypes.HEADER && !isOpen) {
      return null
    }
    return As()
  }

  const displayHeader =
    isOpen && type === NavigationItemTypes.HEADER && showAction && actionElm && actionElm

  return (
    <>
      <div
        className={classNames('navigation-item', `navigation-item--${type}`)}
        onClick={() => setChildOpen(!childOpen)}
      >
        <div className={classNames('navigation-item__inner', active && 'active')}>
          <>
            {!isOpen && type === NavigationItemTypes.HEADER && As()}
            {displayHeader}
            {displayNavigationItem()}
            {type === NavigationItemTypes.USER && iconName && isOpen && (
              <IconDynamicComponent componentName={iconName} />
            )}
          </>
          {showBadge && badgeContent && isOpen && (
            <Badge type={badgeType} text={badgeContent} size="small" className={'mr-12'} />
          )}
          {expandable && isOpen && (
            <span className={classNames('navigation-item__expandable-icon', childOpen && 'opened')}>
              {expandIconProps.Component && (
                <expandIconProps.Component
                  size={expandIconProps.size || 'small'}
                  className={'mr-12'}
                />
              )}
            </span>
          )}
        </div>
        {children && (
          <div className={classNames('navigation-item__child', childOpen && 'active')}>
            {children}
          </div>
        )}
      </div>
    </>
  )
}
