import React, { useState } from 'react'

const Input = ({label, name, forName, type, step, min="0", max, register, errors}) => {

  const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className='input-container'>
        <label htmlFor={forName} className={`floating-label text-zinc-600 ml-1 ${value && 'filled'}`}>{label}</label>
        <div>
            <input
            {...register(name, {required: true})}
            name={name}
            type={type}
            step={step}
            min={min}
            max={max}
            value={value}
            onInput={handleChange}
            className={`mb-10 pl-1 border-b-[1px] ${errors[name] ? "border-red-300" : "border-zinc-300"} focus:outline-none sm:w-[350px]`}
            />
            {errors[name] ? <p className='text-[10px] absolute top-6 left-1 text-red-600'>This field is required</p> : <></>}
        </div>
    </div>
  )
}

export default Input;