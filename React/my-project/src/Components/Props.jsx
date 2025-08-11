import React from 'react'

function Practice_Props({values} ) {
    const {image ,  profession ,name , description} = values;  // Destructuring the values object to get the properties directly. 

  return (
    <div className=' rounded overflow-hidden'>
        <div className="w-60  bg-zinc-100  ">
            <div className="w-full ">
                <img className='w-full object-cover h-52 ' src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h3 className=' text-xl font-semibold'>{name}</h3>
                <h5 className='text-xx'>{ profession}</h5>
                <p className='text-xs' >{description}</p>
                <button className='px-3 mt-4 py-1 text-xs text-shadow-white bg-blue-500 rounded-md'> add Friend</button>
            </div>
        </div>
    </div>
  )
}

export default Practice_Props