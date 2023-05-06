import React from 'react'
import { Form } from '../index'
import { cook } from '../../assets/index'

const Main = () => {
  return (
    <section className=''>
        <div className='bg-white lg:w-[550px] md:w-[430px] sm:w-[400px] xs:w-[400px] w-[310px] lg:h-[700px] sm:h-[650px] h-[90vh] p-10 mx-auto xl:mt-20 mt-5 rounded-t-lg rounded-l-lg relative form-container'>
            <h1 className='text-gradient font-bold sm:text-[60px] text-[42px]'>DishBrary</h1>
            <p className='text-gray md:text-[22px] xs:text-[20px] text-[14px] mb-16'>Create your <span className='text-gradient font-bold'>awesome</span> dish library!</p>
            <Form />
        </div>
        <div className='absolute xl:top-[84px] lg:top-[24px] md:top-[72px] top-[55px] xl:left-[1147px] lg:left-[907px] md:left-[651px] md:block hidden '>
          <img src={cook} alt='Cook lady' />
        </div>
    </section>
  )
}

export default Main