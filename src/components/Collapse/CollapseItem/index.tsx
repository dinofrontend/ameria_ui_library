import React from 'react'
import { motion } from 'framer-motion'

import { Text, Icon, Divider } from '../../index'
import { AnimatedComponent } from '../../../helperComponents/AnimatePresenceWrapper'

import { TCollapseProps } from '../types'
import '../../../assets/styles/components/_collapse.scss'

export const Collapse = (props: TCollapseProps): JSX.Element => {
  const { title, isOpen, toggle, children, titleSize = 'medium', titleColor = 'primary' } = props

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={toggle}>
        <Text size={titleSize} type={titleColor}>
          {title}
        </Text>
        <Icon
          name="arrow-right"
          className={isOpen ? 'collapse_icon_opened' : 'collapse_icon_closed'}
        />
      </div>
      <AnimatedComponent>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
          >
            <div className="collapse_container">
              <Divider type="primary" isHorizontal />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatedComponent>
    </div>
  )
}
