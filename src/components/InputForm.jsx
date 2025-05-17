import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const InputForm = () => {
  return (<>
    <div className='flex justify-center items-center'>
        <input placeholder="TODOを入力" className='border-solid border-2 rounded border-black '>
    </input>
        <button><IoIosAddCircleOutline size={30}/></button>
    </div></>)
}


export default InputForm
