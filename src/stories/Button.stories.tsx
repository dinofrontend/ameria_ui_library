import React from 'react'
import { Button as ButtonComp } from '../index'

export default {
  title: 'Button',
  component: ButtonComp,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'text'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    },
    disabled: {
      options: ['true', 'false'],
      control: { disabled: 'true' }
    },
    isLoading: {
      options: ['true', 'false'],
      control: { isLoading: 'false' }
    }
  }
}

const Template = (args) => <ButtonComp {...args} />

export const Button = Template.bind({})
Button.args = {
  iconProps: {
    name: 'home'
  },
  type: 'primary',
  size: 'large',
  disabled: false,
  isLoading: false,
  buttonText: 'Label',
  autoFocus:true,
  onClick: () => console.log('iconbutton  buttonClicked')
}
