import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp, Text } from '../components'

const ICONS = [
  'pos',
  'spinner',
  'spinner-hover',
  'notebook-add',
  'notebook-add-hover',
  'expand-left',
  'expand-left-hover',
  'expand-right',
  'expand-right-hover',
  'open',
  'open-hover',
  'chevron-up-down',
  'chevron-up-down-hover',
  'dismiss-circle',
  'dismiss-circle-hover',
  'blocked',
  'blocked-hover',
  'briefcase',
  'briefcase-hover',
  'copy',
  'copy-hover',
  'terminate',
  'terminate-hover',
  'add-user',
  'add-user-hover',
  'user',
  'user-hover',
  'login',
  'login-hover',
  'logout',
  'logout-hover',
  'select-all',
  'select-all-hover',
  'select-all-check',
  'select-all-check-hover',
  'percent',
  'dram',
  'attach',
  'attach-hover',
  'close',
  'close-hover',
  'add',
  'add-hover',
  'add-circle',
  'add-circle-hover',
  'phone',
  'phone-hover',
  'menu',
  'menu-hover',
  'repeat',
  'repeat-hover',
  'filter',
  'filter-hover',
  'trash',
  'trash-hover',
  'search',
  'search-hover',
  'eye-on',
  'eye-on-hover',
  'eye-off',
  'eye-off-hover',
  'mail',
  'mail-hover',
  'image',
  'image-hover',
  'link',
  'link-hover',
  'wallet',
  'wallet-hover',
  'minus',
  'minus-hover',
  'minus-circle',
  'minus-circle-hover',
  'more',
  'more-hover',
  'more-vertical',
  'more-vertical-hover',
  'warning',
  'warning-hover',
  'error',
  'error-hover',
  'favorite',
  'favorite-hover',
  'lock',
  'lock-hover',
  'unlock',
  'unlock-hover',
  'settings',
  'settings-hover',
  'comment',
  'comment-hover',
  'bookmark',
  'bookmark-hover',
  'notification',
  'notification-hover',
  'notification2',
  'notification2-hover',
  'savings',
  'savings-hover',
  'info',
  'info-hover',
  'question',
  'question-hover',
  'edit',
  'edit-hover',
  'share',
  'share-hover',
  'share2',
  'share2-hover',
  'home',
  'home-hover',
  'mark',
  'mark-hover',
  'checkmark',
  'checkmark-hover',
  'calendar',
  'calendar-hover',
  'calendar2',
  'calendar2-hover',
  'caret-left',
  'caret-left-hover',
  'caret-right',
  'caret-right-hover',
  'caret-down',
  'caret-down-hover',
  'caret-up',
  'caret-up-hover',
  'caret-down-right',
  'caret-down-right-hover',
  'arrow-left',
  'arrow-left-hover',
  'arrow-right',
  'arrow-right-hover',
  'arrow-up',
  'arrow-up-hover',
  'arrow-down',
  'arrow-down-hover',
  'arrow2-left',
  'arrow2-left-hover',
  'arrow2-right',
  'arrow2-right-hover',
  'arrow2-up',
  'arrow2-up-hover',
  'arrow2-down',
  'arrow2-down-hover',
  'arrow2-up-right',
  'arrow2-up-right-hover',
  'arrow2-up-left',
  'arrow2-up-left-hover',
  'arrow2-down-left',
  'arrow2-down-left-hover',
  'facebook',
  'twitter',
  'instagram',
  'linkedin',
  'apple',
  'medium',
  'telegram',
  'google',
  'youtube',
  'project-product',
  'only-employee',
  'units-employee'
]

export default {
  title: 'Icon',
  component: IconComp,
  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'selected',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'radio' }
    },
    size: {
      options: ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
    {/*{ICONS.length}*/}

    {ICONS.map((iconName) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
          flex: '70px',
          maxWidth: '70px'
        }}
        key={iconName}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            marginBottom: '5px',
            border: '1px solid #919191',
            backgroundColor: `${args.type == 'inverse' ? '#919191' : ''}`
          }}
        >
          <IconComp {...args} name={iconName} size={`${args.size}`} type={`${args.type}`} />
        </div>
        <Text size="small">{iconName}</Text>
      </div>
    ))}
  </div>
)

export const Icon = Template.bind({})
Icon.args = {
  type: '',
  size: 'medium'
}
