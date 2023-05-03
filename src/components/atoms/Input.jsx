import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Input = ({label, name, type, step, min="0", max}) => {
  return (
    <div className='relative'>
        <label className='absolute focus:text-red-500'>{label}</label>
        <div>
            <input
            name={name}
            type={type}
            step={step}
            min={min}
            max={max}
            className='mb-8 border-b-[1px] border-zinc-300 focus:outline-none'
            />
        </div>
    </div>
  )
}

export default Input;