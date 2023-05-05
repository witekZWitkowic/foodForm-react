import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import {Input, Select, Button, InputDuration} from '../index';
import axios from 'axios';

const Form = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  
  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <Input register={register} errors={errors} name="name" label="Name your dish" type="text"/>
                <InputDuration register={register} errors={errors} name="preparation_time" label="Set Preparation Time"/>
                <Select register={register} errors={errors} label="Select Dish Type" />
            </div>
            <div className='absolute bottom-20 left-[35%]'>
                <Button text="Submit!" type="submit" background={"bg-orange-gradient"} color={"text-white"}/>
            </div>
        </form>
    </div>
  )
}

export default Form