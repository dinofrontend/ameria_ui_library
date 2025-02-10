import React, { ReactElement, useState } from 'react'
import { Tab as _Tab } from '../index'
import IconDismissCircle from '../components/SVGIcons/IconDismissCircle'
import { StoryFn } from '@storybook/react'
import { TTabProps } from '../components/Tab/types'
import IconHome from '../components/SVGIcons/IconHome'
import IconApple from '../components/SVGIcons/IconApple'

export default {
  title: 'Tab',
  component: _Tab,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    },
    color: {
      options: ['dark', 'light'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TTabProps> = (args) => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue)
  return <_Tab {...args} selectedValue={selectedTab} onSelect={onTabSelect} />
}

export const Tab = Template.bind({})

// @ts-ignore
Tab.args = {
  type: 'primary',
  size: 'large',
  tabItems: [
    {
      label: 'Prompt text 1',
      value: 1,
      disabled: false,
      iconProps: {
        Component: IconHome
      },
      rightIconProps: {
        Component: IconDismissCircle,
        action: (e: string | number) => {
          // eslint-disable-next-line no-console
          console.log(e, 'e')
        }
      },
      badgeProps: {
        text: '9',
        type: 'grey'
      }
    },
    {
      label: 'Prompt text 2Prompt text 2',
      value: 2,
      iconProps: {
        Component: IconApple
      },
      rightIconProps: {
        Component: IconDismissCircle,
        action: (e: string | number) => {
          // eslint-disable-next-line no-console
          console.log(e, 'e')
        }
      }
    },
    {
      label: 'Prompt text 3',
      value: 3,
      iconProps: {
        Component: IconApple
      }
    }
  ]
}
