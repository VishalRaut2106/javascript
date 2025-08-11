import React from 'react'

function Practice_Props({ values, handleFriend, cardindex }) {
  const { image, profession, name, description, friend } = values;

  return (
    <div className='rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className="w-60 bg-zinc-100">
        {/* Image */}
        <div className="w-full">
          <img
            className='w-full object-cover h-52 transform hover:scale-105 transition-transform duration-300'
            src={image}
            alt={name}
          />
        </div>

        {/* Content */}
        <div className="w-full p-3">
          <h3 className='text-xl font-semibold'>{name}</h3>
          <h5 className='text-sm text-gray-600'>{profession}</h5>
          <p className='text-xs mt-1 text-gray-700'>{description}</p>

          {/* Friend Button with animation */}
          <button
            onClick={() => handleFriend(cardindex)}
            className={`
              px-3 cursor-pointer py-1 mt-4 text-xs rounded-md transition-all duration-300
              ${friend
                ? "bg-green-500 hover:bg-green-600 scale-105"
                : "bg-blue-500 hover:bg-blue-600 scale-100"
              }
              text-white shadow-sm
            `}
          >
            {friend ? "Friends " : "Add Friend"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Practice_Props;
