import React from 'react'
import FormHandling from './Components/FormHandling'
import {useForm} from 'react-hook-form'
import Cards from './Components2.jsx/Cards'
import Form from './Components2.jsx/Form'

function App2() {
const{register ,handleSubmit} =  useForm()


  return (
    // <div  className='bg-gray-500  p-20'>
    //   <form  action="" onSubmit={handleSubmit(data =>console.log(data))}>
    //     <input {...register('name')}  className='bg-amber-200 rounded  'type="text" placeholder='name' />
    //     <input  {...register('email')} className='bg-amber-200 rounded ' type="email" placeholder='email' />
    //     <input className='bg-amber-200 p-2 rounded-3xl' type="submit" />
    //   </form>
      
    // </div>

    <div className='w-full h-screen flex justify-center items-center bg-zinc-200
    '>
      <div className="container mx-auto ">
       <Cards/>
       <Form/>
      </div>

    </div>
    
  )
}

export default App2