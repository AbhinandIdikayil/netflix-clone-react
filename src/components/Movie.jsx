import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function Movie({ item,id }) {
    const [like, setLike] = useState(false)
    return (

        item?.backdrop_path && (
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full'>
                        {item?.title}
                    </p>
                    <p>
                        {like ? <FaHeart className='absolute top-4 left-4 text-gray-200' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-200' />}
                    </p>
                </div>
            </div>
        )


    )
}

export default Movie