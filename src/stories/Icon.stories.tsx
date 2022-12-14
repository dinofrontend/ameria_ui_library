import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp } from '../components'

const ICONS = [
  'arrow_left',
  'arrow_up',
  'attach',
  'change',
  'close',
  'email',
  'file_jpeg',
  'file_pdf',
  'file_png',
  'phone'
]

export default {
  title: 'Icon',
  component: IconComp
} as Meta

const Template = () => (
  <div style={{ display: 'flex' }}>
    {ICONS.map((iconName) => (
      <div style={{ padding: 20 }} key={iconName}>
        <IconComp name={iconName} size="small" color="inputBorderError" />
      </div>
    ))}
  </div>
)

export const Icon = Template.bind({})
