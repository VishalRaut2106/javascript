import React from 'react'

function Card() {
  return (
    <div className='w-32 h-[20vh] bg-amber-300 rounded  items-center flex-col flex p-2'>
        <div className="image w-10 h-10 rounded-full bg-blue-600 overflow-hidden">
            <img className="w-full h-full object-cover" src="" alt="Placeholder"/>
        </div>
    </div>
  )
}

export default Card