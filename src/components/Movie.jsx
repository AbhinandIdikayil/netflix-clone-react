import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { userAuth } from '../context/AuthContext'
import {db} from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

function Movie({ item,id }) {
    const [like, setLike] = useState(false);
    const [saved,setSaved] = useState(false)
    const {user} = userAuth()

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true);
            await updateDoc(movieID, {
                savedShows:arrayUnion({
                    id:item.id,
                    title:item.title,
                    img:item.backdrop_path
                })
            })
        }else{
            alert('please login to save a movie')
        }
    }

    return (

        item?.backdrop_path && (
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full'>
                        {item?.title}
                    </p>
                    <p onClick={saveShow}>
                        {like ? <FaHeart className='absolute top-4 left-4 text-gray-200' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-200' />}
                    </p>
                </div>
            </div>
        )


    )
}

export default Movie