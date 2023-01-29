import React, { useState } from 'react'
import { Checkbox as CheckboxComp, Input as InputComp } from '../components'
import { TCheckboxProps } from '../components/Checkbox/types'
import { noop } from '../utils'

export default {
  title: 'Checkbox',
  component: CheckboxComp,
  argTypes: {
    value: {
      options: ['true', 'false'],
      control: { type: 'true' }
    },
    disabled: {
      options: ['true', 'false'],
      control: { disabled: 'true' }
    },
    justIcon: {
      options: ['true', 'false'],
      control: { disabled: 'false' }
    },
    required: {
      options: ['true', 'false'],
      control: { disabled: 'false' }
    }
  }
}

// export const Template = (args: TCheckboxProps): JSX.Element => {
//   const [isChecked, setIsChecked] = useState(args.selectedValue)
//
//   const clickHandler = () => {
//     setIsChecked((_isChecked) => !_isChecked)
//   }
//
//   return (
//     <div>
//       <CheckboxComp {...args} selectedValue={isChecked} onClick={clickHandler} />
//     </div>
//   )
// }

const Template = (args) => <CheckboxComp {...args} />

export const Checkbox = Template.bind({})

Checkbox.args = {
  iconProps: { name: 'close', size: 'xSmall' },
  value: true,
  justIcon: false,
  disabled: false,
  required: false,
  onClick: noop
}
