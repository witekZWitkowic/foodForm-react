import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Input from './Input';
import { sandwichImg, pizzaImg, soupImg } from '../../assets/index';

const Select = ({label, register, errors}) => {
  const options = ["", "Pizza", "Soup", "Sandwich"];

  const [food, setFood] = useState("");
  const [pizza, setPizza] = useState(false);
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
      <select 
      {...register("type", {required: 'Dish type is required'})} 
      value={food}
      onChange={handleOnChange}
      className={`mb-10 border-b-[1px] text-[18px] text-zinc-600 ${errors.type ? "border-red-300" : "border-zinc-300"} focus:outline-none sm:w-[350px]`}>
        {options.map((option, index) => (
          <option key={index} value={option} className=''>{option}</option>
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
      <img src={pizzaImg} className={`w-[350px] absolute top-[180px] ease-in-out  ${pizza ? "duration-300 left-[-160px]" : "left-[0]"} z-[-1]`}/>
      <img src={soupImg} className={`w-[350px] absolute top-[230px] ease-in-out  ${soup ? "duration-300 left-[-160px]" : "left-[0]"} z-[-1]`}/>
      <img src={sandwichImg} className={`w-[350px] absolute top-[230px] ease-in-out  ${sandwich ? "duration-300 left-[-160px]" : "left-[0]"} z-[-1]`}/>
      
    </div>
  )
}

export default Select