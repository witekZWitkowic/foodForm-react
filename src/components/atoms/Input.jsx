import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Input = ({label, name, type, step}) => {
  return (
    <form>
        <label>{label}</label>
        <div>
            <input
            name={name}
            type={type}
            step={step}
            min="0"
            />
        </div>
    </form>
  )
}

export default Input;