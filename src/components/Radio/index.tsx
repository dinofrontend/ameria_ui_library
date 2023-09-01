import React, { forwardRef } from 'react'
import { TRadioProps } from './types'
import '../../assets/styles/components/_controllers.scss'
import Text from "../Text";

export const Radio = forwardRef((props: TRadioProps, ref): JSX.Element | null => {
  const {
    name,
    label,
    helperText,
    disabled,
    setFieldValue,
    isSelected,
    value,
    className = '',
    onClick,
    dataId = ''
  } = props
  const isChecked = !!value || !!isSelected

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <label
      className={`controller controller--radio 
                ${className} 
                ${disabled ? 'controller--disabled' : ''}
                `}
    >
      <input
        data-id={dataId}
        type="radio"
        tabIndex={0}
        onChange={changeHandler}
        checked={isSelected}
        disabled={disabled}
      />
      <span className="controller__icon"></span>
      {label ? <span className="controller__label">{label}</span> : null}
      {helperText ?  <Text size="small" type={disabled ? 'disabled' : 'secondary'} className="controller__helper">{helperText}</Text> : null}
    </label>
  )
})

Radio.displayName = 'Radio'

export default Radio
