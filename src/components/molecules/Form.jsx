import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import {Input, Select, Button, InputDuration} from '../index';
import axios from 'axios';

const Form = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const {register, handleSubmit, reset, formState: { errors }} = useForm()

  const submitForm = (data) => {   
     axios.post("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", setPayload(data))
    .then((response) => {
      console.log(response.data)
    })
    .catch((errors) => {
      console.error(errors)
    });
    setSuccessMsg("Horray! A new dish has been added to the library!")
    setTimeout(() => {
      setSuccessMsg("")
    }, "3000");
    reset();
  }
    
  const setPayload = (data) =>{
    let postData = {
      name: data.name,
      type: data.type,
      preparation_time: data.preparation_time,
      };
    switch (data.type){
      case "soup":
        postData.spiciness_scale = data.spiciness_scale;
        break;
      case "pizza":
        postData.no_of_slices = data.no_of_slices;
        postData.diameter = data.diameter;
        break;
      case "sandwich":
        postData.slices_of_bread= data.slices_of_bread;
        break;
    }
    return postData;
  }

  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
        {successMsg && <p className="text-gradient lg:text-[16px] xs:text-[14px] text-[11px] font-bold absolute lg:bottom-[20%] bottom-[15%] lg:left-[15%] left-[10%]">{successMsg}</p>}
            <div>
                <Input register={register} errors={errors} name="name" label="Name your dish" type="text"/>
                <InputDuration  register={register} errors={errors} name="preparation_time" label="Set Preparation Time"/>
                <Select register={register} errors={errors} label="Select Dish Type" />
            </div>
            <div className='absolute lg:bottom-20 xxs:bottom-10 lg:left-[35%] xs:left-[30%] left-[25%]'>
                <Button text="Submit!" type="submit" background={"bg-orange-gradient"} color={"text-white"}/>
            </div>
        </form>
    </div>
  )
}

export default Form