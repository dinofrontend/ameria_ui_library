import React, { ReactElement } from 'react'

import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import { Icon } from '../../Icon'
import { ButtonSelect } from '../../Select'

import { getYearOptions, noop } from '../../../utils/helpers'
import './styles.scss'

interface TProps extends ReactDatePickerCustomHeaderProps {
  months: TSelectOptions
  startYear: number
  endYear: number
  dataPrefix?: string
}

export const CustomHeader = (props: TProps): ReactElement => {
  const {
    months,
    date,
    dataPrefix,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    startYear,
    endYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  } = props

  const getMonthLabel = (month: number) => {
    const selectMonth = months.find((item) => item.value === month)
    return selectMonth?.label.toString()
  }

  const month = date?.getMonth()
  const year = date?.getFullYear()

  return (
    <div className="flexbox custom_header_container">
      <Icon
        name="arrow-left"
        size="small"
        className="cursor-pointer"
        dataId={dataPrefix ? `${dataPrefix}-prev-month-button` : ''}
        onClick={prevMonthButtonDisabled ? noop : decreaseMonth}
        type={prevMonthButtonDisabled ? 'disabled' : 'primary'}
      />
      <div className="selects_container">
        <ButtonSelect
          className="date_picker_select"
          offsets={{ top: 42, left: 48 }}
          buttonProps={{
            buttonText: getMonthLabel(month),
            dataId: dataPrefix ? `${dataPrefix}-month-select` : '',
            iconProps: { name: 'caret-down-hover', alignment: 'right' },
            type: 'tertiary'
          }}
          size="small"
          options={months}
          selectedItem={month}
          setSelectedItem={(m) => changeMonth(m as number)}
          dropdownWidth={150}
        />
        <ButtonSelect
          className="date_picker_select"
          offsets={{ top: 42, left: 138 }}
          buttonProps={{
            dataId: dataPrefix ? `${dataPrefix}-year-select` : '',
            buttonText: year.toString(),
            iconProps: { name: 'caret-down-hover', alignment: 'right' },
            type: 'tertiary'
          }}
          size="small"
          options={getYearOptions(startYear, endYear)}
          selectedItem={year}
          setSelectedItem={(y) => changeYear(y as number)}
          dropdownWidth={100}
        />
      </div>
      <Icon
        name="arrow-right"
        size="small"
        className="cursor-pointer"
        dataId={dataPrefix ? `${dataPrefix}-next-month-button` : ''}
        onClick={nextMonthButtonDisabled ? noop : increaseMonth}
        type={nextMonthButtonDisabled ? 'disabled' : 'primary'}
      />
    </div>
  )
}
