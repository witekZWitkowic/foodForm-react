import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Input = ({label, name, type, step, min="0", max}) => {
  return (
    <div>
        <label>{label}</label>
        <div>
            <input
            name={name}
            type={type}
            step={step}
            min={min}
            max={max}
            />
        </div>
    </div>
  )
}

export default Input;