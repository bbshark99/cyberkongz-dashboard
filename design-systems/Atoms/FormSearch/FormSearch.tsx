import React from 'react'
import { FormInput, FormInputProps } from '../FormInput'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export interface FormSearchProps extends FormInputProps {}

export const FormSearch: React.FC<FormSearchProps> = ({
  disabled = false,
  value = '',
  placeholder = 'Search',
  onChange,
}) => {
  const className = [
    // text color
    'text-primary',
  ].join(' ')

  return (
    <div className='w-full h-[40px] relative'>
      <MagnifyingGlassIcon className='w-[22px] h-[22px] stroke-[#5041BC] absolute top-[11px] right-[22px]' />
      <FormInput
        type='text'
        className={className}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
