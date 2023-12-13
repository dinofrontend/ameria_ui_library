import React, {useState} from 'react'
import classNames from 'classnames'
import {NavigationItemTypes, TNavigationLinkPropTypes} from './types'
import './index.scss'
import Icon from '../../Icon'
import Badge from '../../Badge'

const NavigationItem = (props: TNavigationLinkPropTypes) => {
    const {
        As,
        type,
        open,
        iconName,
        showBadge,
        expandable = false,
        showAction = false,
        actionElm,
        userImage,
        active = false,
        badgeContent,
        Child
    } = props

    const [childOpen, setChildOpen] = useState(false)

    return (
        <>
            <div
                className={classNames('navigation--wrapper', `navigation--wrapper--${type}`)}
                onClick={() => setChildOpen(!childOpen)}
            >
                <div
                    className={classNames(
                        'navigation--item',
                        `navigation--item--${type}`,
                        expandable && 'expandable',
                        active && 'active'
                    )}
                >
                    <div className="navigation--item--wrapper">
                        {!open && type === NavigationItemTypes.BLOCK_HEADER && As()}
                        {open &&
                            type === NavigationItemTypes.BLOCK_HEADER &&
                            showAction &&
                            actionElm &&
                            actionElm}
                        {iconName && type !== NavigationItemTypes.USER ? (
                            <Icon name={iconName} size="small"/>
                        ) : (
                            userImage
                        )}
                        {open && As()}
                        {type === NavigationItemTypes.USER && iconName && open && (
                            <Icon name={iconName} size="small"/>
                        )}
                    </div>
                    {showBadge && badgeContent && open && (
                        <Badge type="primary" text={badgeContent} size="small"/>
                    )}
                    {expandable && open && (
                        <div className={classNames('navigation--item--expandable--icon', childOpen && 'open')}>
                            <Icon name="arrow-down"/>
                        </div>
                    )}
                </div>
                {Child && (
                    <div className={classNames('navigation--items--childs', childOpen && 'active')}>{Child()}</div>
                )}
            </div>
        </>
    )
}

export default NavigationItem
