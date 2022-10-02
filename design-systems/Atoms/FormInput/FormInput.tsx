import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

export interface FormInputProps {
  type?: HTMLInputTypeAttribute
  disabled?: boolean
  placeholder?: string
  value?: string
  className?: string
  onChange: ChangeEventHandler
}

export const FormInput: React.FC<FormInputProps> = ({
  type = 'text',
  disabled = false,
  value = '',
  placeholder = '',
  className: _className = '',
  onChange,
}) => {
  const wrapperClassName = [
    // size
    'w-full',
    // border radius
    'rounded-[23px] overflow-hidden',
  ].join(' ')

  const className = [
    // padding
    'py-[11px] px-[22px]',
    // size
    'w-full',
    // background
    'bg-input-primary-default',
    // border
    'outline-transparent',
    // text
    'text-primary placeholder:text-primary',
    // external class
    _className,
  ].join(' ')

  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        className={className}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
