import React from 'react'
import { Form } from '../index'
import {cook} from '../../assets/index'

const Main = () => {
  return (
    <section>
        <div className='bg-white w-[550px] h-[700px] p-10 mx-auto mt-20 rounded-lg relative form-container'>
            <h1 className='text-gradient font-bold sm:text-[60px] text-[42px]'>DishBrary</h1>
            <p className='text-gray text-[22px] mb-16'>Create your <span className='text-gradient font-bold'>awesome</span> dish library!</p>
            <Form />
        </div>
        <img src={cook} className='absolute top-0 left-[1147px]'/>
    </section>
  )
}

export default Main