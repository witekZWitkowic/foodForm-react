import React, { useEffect, useState } from 'react'
import Input from './Input';

const Select = () => {
  const options = ["pizza", "soup", "sandwich"];

  const [food, setFood] = useState("pizza");
  const [pizza, setPizza] = useState(true);
  const [soup, setSoup] = useState(false);
  const [sandwich, setSandwich] = useState(false);

  useEffect(() => {
    food === "pizza" ? setPizza(true) : setPizza(false);
    food === "soup" ? setSoup(true) : setSoup(false);
    food === "sandwich" ? setSandwich(true) : setSandwich(false);
  }, [food]);

  const handleOnChange = (e) => {
    setFood(e.target.value);
  }
  return (
    <div>
      <select value={food} onChange={handleOnChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {pizza && 
        <div>
          <Input label="Number of Slices" name="no_of_slices" type="number"/>
          <Input label="Diameter" name="diameter" type="number" step="0.1"/>
        </div>
      }
      {soup && <Input label="Spiciness Scale" name="spiciness_scale" type="number" min="1" max="10"/>}
      {sandwich && <Input label="Slices of Bread" name="slices_of_bread" type="number"/>}
    </div>
  )
}

export default Select