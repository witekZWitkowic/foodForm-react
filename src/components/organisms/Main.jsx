import React from 'react'
import { Form } from '../index'
import {cook} from '../../assets/index'

const Main = () => {
  return (
    <section className=''>
        <div className='bg-white w-[550px] h-[700px] p-10 mx-auto xl:mt-20 mt-5 rounded-t-lg rounded-l-lg relative form-container'>
            <h1 className='text-gradient font-bold sm:text-[60px] text-[42px]'>DishBrary</h1>
            <p className='text-gray text-[22px] mb-16'>Create your <span className='text-gradient font-bold'>awesome</span> dish library!</p>
            <Form />
        </div>
        <div className='absolute xl:top-[84px] top-[55px] xl:left-[1147px] lg:left-[907px] md:left-[699px] left-[571px] xl:scale-100 scale-90'>
          <img src={cook} />
        </div>
    </section>
  )
}

export default Main