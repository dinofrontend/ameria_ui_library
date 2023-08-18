import React from 'react'
import { Button, useGetSnackbar } from '../components'

export default {
  title: 'Snackbar',
  component: useGetSnackbar,
  argTypes: {
    type: {
      options: ['information', 'success', 'error', 'warning'],
      control: { type: 'radio' }
    }
  }
}

const Template = () => {
  const { _toast, Comp } = useGetSnackbar({ duration: 60000, position: 'bottom-center' })

  return (
    <div>
      <>
        <Button
          buttonText={'notify'}
          onClick={() => {
            const __id = Math.random()
            _toast({
              text: `${__id}`,
              toastId: __id,
              actionProps: {
                buttonText: 'Close'
              }
            })
          }}
        />
        <Comp />
      </>
    </div>
  )
}
export const Snackbar = Template.bind({})

Snackbar.args = {}
