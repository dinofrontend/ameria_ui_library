import React from 'react'
import { Badge as _Badge } from '../index'
import type { StoryFn } from '@storybook/react'
import { TBadgeProps } from '../components/Badge/types'

export default {
  title: 'Badge',
  component: _Badge,
  argTypes: {
    type: {
      options: ['red', 'grey', 'greyDark', 'green', 'transparent'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TBadgeProps> = (args) => <_Badge {...args} />

export const Badge = Template.bind({})

Badge.args = {
  text: '999+',
  size: 'large'
}
