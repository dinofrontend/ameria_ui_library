import React, { useState } from 'react'
import { SideSheet as SideSheetComp } from '../components'

export default {
  title: 'SideSheet',
  component: SideSheetComp,
  argTypes: {
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseSheet = () => setIsOpen(false)
  const handleOpenSheet = () => setIsOpen(true)
  return (
    <div>
      <button onClick={handleOpenSheet}>Open Side Sheet</button>
      <SideSheetComp
        {...args}
        onClose={handleCloseSheet}
        isOpen={isOpen}
        onSumbit={() => console.log('submit')}
        buttonProps={{
          confirm: {
            buttonText: 'Register',
            buttonActionType: 'submit'
          },
          cancel: { buttonText: 'Cancel' }
        }}
      >
        <div>Side Sheet content</div>
      </SideSheetComp>
    </div>
  )
}

export const SideSheet = Template.bind({})

SideSheet.args = {
  title: 'Side sheet title',
  position: 'right'
}
