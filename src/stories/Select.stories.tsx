import React, { useState } from 'react'
import {
  Button,
  Select as _Select,
  MultiSelect as _MultiSelect,
  NestedSelect as _NestedSelect,
  ButtonSelect as _ButtonSelect,
  ProfileDropdown as _ProfileDropdown,
  Menu,
  Avatar,
  Badge
} from '../index'
// @ts-ignore
import imageFile from '../assets/images/avatar.jpg'
import IconPerson from '../components/SVGIcons/IconPerson'
import IconInfo from '../components/SVGIcons/IconInfo'
import IconMore from '../components/SVGIcons/IconMore'
import { StoryFn } from '@storybook/react'
import {
  TButtonSelectPropTypes,
  TMultiSelectPropTypes,
  TSingleSelectPropTypes
} from '../components/Select/types'
import { Positions } from '../components/Tooltip/types'
import IconSignOut from '../components/SVGIcons/IconSignOut'
import IconQuestion from '../components/SVGIcons/IconQuestion'
import IconChatMultiple from '../components/SVGIcons/IconChatMultiple'
import IconAm from '../components/SVGIcons/IconAm'
import IconGb from '../components/SVGIcons/IconGb'
import IconChevronDown from '../components/SVGIcons/IconChevronDown'
import IconChevronUp from '../components/SVGIcons/IconChevronUp'

type TItemValue = string | number | null
declare type TItemLabel = string

type TSelectOption = {
  value: TItemValue
  label: TItemLabel
  meta?: string
  disabled?: boolean
  children?: TSelectOption[]
}

type TSelectOptions = TSelectOption[]

type TSelectGroupOption = {
  title: string
  data: TSelectOptions
}

type TSelectGroupOptions = TSelectGroupOption[]

const image = {
  src: imageFile,
  alt: 'my image'
}

export default {
  title: 'Select',
  component: _Select,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const BUTTON_SELECT_OPTIONS = [
  {
    value: 'jan',
    label: 'Jan'
  },
  {
    value: 'feb',
    label: 'Feb'
  },
  {
    value: 'mrch',
    label: 'March'
  },
  {
    value: 'apr',
    label: 'April'
  },
  {
    value: 'may',
    label: 'May'
  },
  {
    value: 'jun',
    label: 'Jun'
  },
  {
    value: 'jul',
    label: 'Jul'
  },
  {
    value: 'aug',
    label: 'Aug'
  },
  {
    value: 'sep',
    label: 'Sep'
  },
  {
    value: 'oct',
    label: 'Oct'
  },
  {
    value: 'nov',
    label: 'Nov'
  },
  {
    value: 'dec',
    label: 'Dec'
  }
]
const OPTIONS: TSelectOptions = [
  {
    value: 1,
    label:
      'Armeniaaasdasdasdasdlkashdkjlashdkjasdkjashkdjhaskjdhdaskjdhaskjhdkajsdkjasdkjashdjkashdkjhaskdhaskjdhaskjdhaskjdhaskjhdkjas',
    meta: 'AM'
  },
  {
    value: 2,
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 3,
    label: 'France    France    France',
    meta: 'FR'
  },
  {
    value: 4,
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 5,
    label: 'Germany',
    meta: 'De'
  },
  {
    value: 6,
    label: 'Australia',
    meta: 'AU'
  },
  {
    value: 7,
    label: 'Hungary',
    meta: 'HY'
  },
  {
    value: 8,
    label: 'Georgia',
    meta: 'GE'
  },
  {
    value: 9,
    label: 'Brazil',
    meta: 'BR'
  },
  {
    value: 10,
    label: 'Norway',
    meta: 'NR'
  },
  {
    value: 11,
    label: 'Mexico',
    meta: 'MC'
  }
]
const OPTIONS_CITIES: TSelectOptions = [
  {
    value: 'yerevan',
    label: 'Yerevan'
  },
  {
    value: 'rome',
    label: 'Rome'
  },
  {
    value: 'paris',
    label: 'Paris'
  },
  {
    value: 'aaaa',
    label: 'iiii'
  }
]

const OPTIONS_GROUPED: TSelectGroupOptions = [
  {
    title: 'Countries',
    data: OPTIONS
  },
  {
    title: 'Cities',
    data: OPTIONS_CITIES
  }
]

const OPTIONS_NESTED: TSelectOptions = [
  {
    value: 1,
    label: 'Ameribank',
    children: [
      {
        value: 2,
        label: 'BOD',
        children: [
          {
            value: 3,
            label: 'Managment board'
          },
          {
            value: 4,
            label: '4'
          }
        ]
      },
      {
        value: 10,
        label: '3',
        children: [
          {
            value: 5,
            label: '5'
          },
          {
            value: 6,
            label: '6',
            children: [
              {
                value: 7,
                label: '7'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 8,
    label: '8',
    children: [
      {
        value: 9,
        label: '9'
      },
      {
        value: 10,
        label: '10'
      }
    ]
  }
]

const languagesOptions = [
  {
    label: 'Հայ',
    value: 'AM',
    optionLeftIcon: {
      Component: IconAm
    }
  },
  {
    label: 'Eng',
    value: 'EN',
    optionLeftIcon: {
      Component: IconGb
    }
  }
]

// -----------SINGLE SELECT---------
const Template: StoryFn<TSingleSelectPropTypes> = (args) => {
  const [selectedValue, setSelectedValue] = useState<TItemValue | undefined>(null)

  return (
    <div style={{ display: 'flex', maxHeight: '100vh', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', minHeight: '1000px' }}>
        <_Select
          {...args}
          dataId={'single-select'}
          tooltipAddons={{ position: Positions.BOTTOM_LEFT, text: '' }}
          isRequiredField
          options={OPTIONS}
          outerHelperText="helper text"
          selectedItem={selectedValue}
          setSelectedItem={setSelectedValue}
          withSearch={true}
          optionRightIconComponent={(value) => <>{value}</>}
        />
      </div>
    </div>
  )
}
export const Select = Template.bind({})

// -----------ButtonSelect---------
const Template2: StoryFn<TButtonSelectPropTypes> = (args) => {
  const [selectedValue, setSelectedValue] = useState<TItemValue | undefined>(null)

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        position: 'absolute',
        top: 100
      }}
    >
      <_ButtonSelect
        {...args}
        size="small"
        placeHolder="Select month"
        // tooltipAddons={{ position: 'bottom-left' }}
        isRequiredField
        options={BUTTON_SELECT_OPTIONS}
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        dropdownWidth={300}
        // optionRightIconComponent={(value) => <>{value}</div>}
      />
    </div>
  )
}
export const ButtonSelect = Template2.bind({})

const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null)

  const open = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  return (
    <div ref={setButtonRef}>
      <Button type="tertiary" onClick={open} iconProps={{ Component: IconMore }} size="small" />
      {buttonRef ? (
        <Menu
          menuItems={[
            {
              label: 'delete',
              value: 'delete',
              handler: () => {
                console.log('delete')
              }
            }
          ]}
          parentRef={buttonRef}
          onClose={close}
          isOpen={isOpen}
        />
      ) : null}
    </div>
  )
}
Select.args = {
  size: 'large',
  disabled: false,
  isLoading: false,
  options: OPTIONS,
  label: 'country',
  avatar: image.src,
  placeHolder: 'Select country',
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}

// -----------MULTISELECT---------
const MultiSelectTemplate: StoryFn<TMultiSelectPropTypes> = (args) => {
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>([])

  const set = (value: TSelectedValue[], isChecked: boolean) => {
    setSelectedValues(value)
    console.log(isChecked)
  }
  return (
    <div
      style={{ width: 250, height: '100vh', position: 'absolute', left: 500, top: 10 }}
      className="ddddd"
    >
      <_MultiSelect
        {...args}
        isGrouped={true}
        isButtonSelect={true}
        dropdownWidth={400}
        align="right"
        maxSelectCount={3}
        selectedItems={selectedValues}
        setSelectedItems={set}
        labelRightIconComponent={() => (
          <IconPerson
            size="xsmall"
            className="mr-4"
            onClick={(e: any) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          />
        )}
        translations={{
          emptyListMainMessage: '',
          innerLabel: 'Group name',
          clearAllLabel: 'Clear All',
          selectAllLabel: 'Select All'
        }}
        optionRightIconComponent={() => <ButtonMenu />}
      />
    </div>
  )
}
export const MultiSelect = MultiSelectTemplate.bind({})

// @ts-ignore
MultiSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_GROUPED,
  avatar: image.src,
  placeHolder: 'Select country',
  helperText: 'To be filled in only for USA, Canada and European countries.',
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
  // disabled: true
  // labelRightIconComponent: <IconPerson size="xsmall" className="mr-4" />,
  // optionRightIconComponent: <IconPerson size="xsmall" />
}

// ----------NESTED_SELECT---------------

const NestedSelectTemplate = (args: any): JSX.Element => {
  const [selected, setSelected] = useState<TSelectOption>({
    value: 3,
    label: 'Management board'
  })

  return (
    <div style={{ width: 320, position: 'absolute', left: 300 }}>
      <_NestedSelect
        {...args}
        selected={selected}
        setSelectedValue={setSelected}
        initialSelectedFolderIds={[1, 2]}
      />
    </div>
  )
}
export const NestedSelect = NestedSelectTemplate.bind({})

// @ts-ignore
NestedSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_NESTED,
  placeHolder: 'Select country',
  labelLeftIconProps: { Component: IconPerson },
  labelRightIconComponent: () => <IconPerson size="xsmall" className="mr-4" />,
  optionRightIconComponent: () => (
    <IconMore
      size="xsmall"
      onClick={(e: any) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    />
  ),
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}

// ----------LANGUAGE-SELECT----------------

const LanguageSelectTemplate: StoryFn<TSingleSelectPropTypes> = (args) => {
  const [selectedValue, setSelectedValue] = useState<TItemValue | undefined>(null)

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', width: '20vw' }}>
      <_Select
        {...args}
        options={languagesOptions}
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        className={'select--language'}
        selectRightIconProps={{
          Component: IconChevronDown,
          size: 'small'
        }}
        selectRightIconOpenedProps={{
          Component: IconChevronUp,
          size: 'small'
        }}
      />
    </div>
  )
}
export const LanguageSelect = LanguageSelectTemplate.bind({})

// ----------PROFILE DROPDOWN---------------

const ProfileDropdownTemplate = (args: any): JSX.Element => {
  return (
    <div
      style={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 300
      }}
    >
      <div style={{ position: 'absolute', left: 300 }}>
        <_ProfileDropdown {...args} />
      </div>
    </div>
  )
}

export const ProfileDropdown = ProfileDropdownTemplate.bind({})

// @ts-ignore
ProfileDropdown.args = {
  avatar: <Avatar size={'medium'} initials={'RG'} />,
  name: 'Mariam Yeghiazaryan',
  email: 'mariam.yeghiazaryan@gmail.com',
  bodyItems: [
    {
      icon: <IconQuestion size={'small'} className={'mr-8'} />,
      text: 'Հաճախ տրվող հարցեր',
      url: '#s',
      rightInfoProps: <Badge text={'5'} type={'green'} className={'ml-12'} />
    },
    {
      icon: <IconChatMultiple size={'small'} className={'mr-8'} />,
      text: 'Հետադարձ կապ',
      url: '#s'
    }
  ],
  footerItems: [
    {
      icon: <IconSignOut size={'small'} className={'mr-8'} />,
      text: 'Ելք',
      onclick: () => alert('button clicked')
    }
  ]
}

// ----------FILTERDROPDOWN---------------

// const FilterDropdownTemplate = (args: any): JSX.Element => {
//   const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])
//   const [isOpen, setIsOpen] = useState(false)
//   const containerRef = useRef(null)
//   const closeHandler = () => setIsOpen(false)
//   return (
//     <div
//       style={{
//         width: 320,
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'absolute',
//         left: 300
//       }}
//     >
//       <div style={{ position: 'absolute', left: 300 }} ref={containerRef}>
//         <Button
//           type="secondary"
//           iconProps={{ Component: IconFilter }}
//           buttonText={'filter'}
//           onClick={() => setIsOpen(!isOpen)}
//         />
//         <_FilterDropdown
//           {...args}
//           parentRef={containerRef.current}
//           closeHandler={closeHandler}
//           isOpen={isOpen}
//           selectedItems={selectedValues}
//           setSelectedItems={setSelectedValues}
//         />
//       </div>
//     </div>
//   )
// }
// export const FilterDropdown = FilterDropdownTemplate.bind({})

// FilterDropdown.args = {
//   isLoading: true,
//   options: OPTIONS_NESTED,
//   avatar: image.src,
//   labelLeftIconProps: { Component: IconPerson },
//   labelRightIconComponent: () => <IconPerson size="xsmall" className="mr-4" />,
//   optionRightIconComponent: () => <IconMore size="xsmall" />
// }
