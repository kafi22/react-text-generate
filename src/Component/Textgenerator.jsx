import React, { useState } from 'react'
import Data from '../Data'

const Textgenerator = () => {

   const [texts, setText] = useState(0)
   const [getItem, setItem] = useState([])
   const [text, setDefault] = useState('Please generate a number between 1 and 8')

  const handelSubmit = (e) => {
        e.preventDefault()
        const amount = parseInt(texts)
        getText(amount)
     
   }

   const getText = (amount) => {
    setItem(Data.slice(0, amount))
   }

 



  return (
    <div className=' mt-6'>
       <form action="" onSubmit={handelSubmit} className=' flex justify-center mb-3  items-center gap-2'>
        <label htmlFor="amount" className=' text-lg tracking-wider text-slate-700 capitalize'>paragraph: </label>
        <input 
        type="number"
         name='texts' 
         id='' 
         min={1}
          max={8} 
          step={1}
          value={texts}
          onChange={e => setText(e.target.value)}
          className=' w-[180px] h-[40px] bg-slate-200 p-2 rounded-md '
          />
          <button type='submit' className=' bg-green-400 rounded-md py-2 px-4 text-white'>Generator</button>
       </form>

       {getItem.length < 1 && (<h2 className=' text-center tracking-wider text-lg text-slate-900 leading-7 font-medium'>{text}</h2>)}

     
        <div className='flex flex-col space-y-2 justify-start items-start'>
        {getItem.map((item, index) => (
            <h3 className=' p-2 my-2 text-gray-700 text-lg leading-7 font-light text-justify' key={index}>{item}</h3>
        ))}
        </div>
   
    </div>
  )
}

export default Textgenerator;