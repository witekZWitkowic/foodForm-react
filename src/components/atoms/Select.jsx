import React, { useEffect, useState } from 'react'
import Input from './Input';
import { sandwichImg, pizzaImg, soupImg } from '../../assets/index';

const Select = ({label, register, errors}) => {
  const options = ["", "pizza", "soup", "sandwich"];

  const [food, setFood] = useState("");
  const [pizza, setPizza] = useState(false);
  const [soup, setSoup] = useState(false);
  const [sandwich, setSandwich] = useState(false);

  useEffect(() => {
    food === "pizza" ? setPizza(true) : setPizza(false);
    food === "soup" ? setSoup(true) :  setSoup(false);
    food === "sandwich" ? setSandwich(true) : setSandwich(false);
  }, [food]);

  const handleOnChange = (e) => {
    setFood(e.target.value);
  }
  
  return (
    <div className='flex flex-col'>
      <label className={`floating-label ml-1 text-zinc-600 ${food && 'filled'}`}>{label}</label>
      <select 
      {...register("type", {required: 'Dish type is required'})}
      value={food}
      onChange={handleOnChange}
      className={`mb-10 border-b-[1px] text-[18px] text-zinc-600 ${errors.type ? "border-red-300" : "border-zinc-300"} focus:outline-none lg:w-[350px] sm:w-[300px] xs:w-[320px] w-[230px]`}>
        {options.map((option, index) => (
          <option key={index} value={option} className=''>{option.toUpperCase()}</option>
        ))}
      </select>
      {errors.type && <p className='text-[10px] absolute mt-7 ml-1 text-red-600'>{errors.type.message}</p>}
      {pizza && 
        <div>
          <Input register={register} errors={errors} label="Number of Slices" name="no_of_slices" type="number"/>
          <Input register={register} errors={errors} label="Diameter" name="diameter" type="number" step="0.1"/>
        </div>}
      {soup && <Input register={register} errors={errors} label="Spiciness Scale" name="spiciness_scale" type="number" min="1" max="10"/> }
      {sandwich && <Input register={register} errors={errors} label="Slices of Bread" name="slices_of_bread" type="number"/>}
      
      {/* <img src={pizza ? pizzaImg : soup ? soupImg : sandwich ? sandwichImg : ""} className='w-[350px] absolute top-[230px] left-[-160px] z-[-1]'/> */}
      <img src={pizzaImg} className={`sm:block hidden md:w-[350px] sm:w-[300px] absolute top-[180px] ease-in-out  ${pizza ? "duration-300 md:left-[-160px] sm:left-[-140px]" : "left-[0]"} z-[-1]`}/>
      <img src={soupImg} className={`sm:block hidden md:w-[350px] sm:w-[300px] absolute top-[230px] ease-in-out  ${soup ? "duration-300 md:left-[-160px] sm:left-[-140px]" : "left-[0]"} z-[-1]`}/>
      <img src={sandwichImg} className={`sm:block hidden md:w-[350px] sm:w-[300px] absolute top-[230px] ease-in-out  ${sandwich ? "duration-300 md:left-[-160px] sm:left-[-140px]" : "left-[0]"} z-[-1]`}/>
      
    </div>
  )
}

export default Select