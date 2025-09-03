import React from 'react'
import Card from './Card'

function Cards(user) {
  return (
    <div className='p-4 h-96 w-full justify-center gap-5 flex flex-wrap  '>
        <Card user={user}/>
        
    </div>
  )
}

export default Cards