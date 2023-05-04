import React, { useEffect, useState } from 'react'
import Input from './Input';

const Select = ({label, register, errors}) => {
  const options = ["", "Pizza", "Soup", "Sandwich"];

  const [food, setFood] = useState("");
  const [pizza, setPizza] = useState(true);
  const [soup, setSoup] = useState(false);
  const [sandwich, setSandwich] = useState(false);


  useEffect(() => {
    food === "Pizza" ? setPizza(true) : setPizza(false);
    food === "Soup" ? setSoup(true) : setSoup(false);
    food === "Sandwich" ? setSandwich(true) : setSandwich(false);
  }, [food]);

  const handleOnChange = (e) => {
    setFood(e.target.value);
  }
  
  return (
    <div className='flex flex-col'>
      <label className={`floating-label ml-1 text-zinc-600 ${food && 'filled'}`}>{label}</label>
      <select value={food} onChange={handleOnChange} className='mb-10 border-b-[1px] text-[18px] text-zinc-600 border-zinc-300 focus:outline-none sm:w-[350px]'>
        {options.map((option, index) => (
          <option key={index} value={option} className=''>{option}</option>
        ))}
      </select>
      {pizza && 
        <div>
          <Input register={register} errors={errors} label="Number of Slices" name="no_of_slices" type="number"/>
          <Input register={register} errors={errors} label="Diameter" name="diameter" type="number" step="0.1"/>
        </div>}
      {soup && <Input register={register} errors={errors} label="Spiciness Scale" name="spiciness_scale" type="number" min="1" max="10"/>}
      {sandwich && <Input register={register} errors={errors} label="Slices of Bread" name="slices_of_bread" type="number"/>}
    </div>
  )
}

export default Select