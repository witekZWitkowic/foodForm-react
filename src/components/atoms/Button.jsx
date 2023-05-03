import React from 'react'

const Button = ({text, background, color}) => {
  return (
    <>
        <div className={`${background} flex justify-center sm:mt-0 mt-2 submit-button px-6 pb-1 h-[45px] w-[160px] rounded-full cursor-pointer drop-shadow-xl`}>
            <button className={`text-[20px] ${color} font-semibold`}>{text}</button>
        </div>
    </>
  )
}

export default Button