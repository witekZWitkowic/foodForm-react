import React from 'react'
import { Input, Select, Button } from '../index'
import {cook} from '../../assets/index'

const Main = () => {
  return (
    <section>
        <div className='bg-white w-[550px] h-[700px] p-10 mx-auto mt-20 rounded-lg relative form-container'>
            <h1 className='text-gradient font-bold sm:text-[60px] text-[42px]'>DishBrary</h1>
            <p className='text-gray text-[22px] mb-10'>Create your <span className='text-gradient font-bold'>awesome</span> dish library!</p>
            <form >
                <div>
                    <Input name="name" label="Name your dish" type="text" />
                    <Input name="preparation_time" label="Set Preparation Time" type="duuration"/>
                    <Select label="Select Dish Type"/>
                </div>
                <div className='absolute bottom-20 left-[35%]'>
                    <Button text="Submit!" background={"bg-orange-gradient"} color={"text-white"}/>
                </div>
            </form>
        </div>
        <img src={cook} className='absolute top-0 left-[1147px]'/>
    </section>
  )
}

export default Main