import React, { useState, useEffect } from 'react'
import { userAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai'

function SavedShows() {
    const [movies, setMovies] = useState([])
    const { user } = userAuth()

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email])

    const movieRef = doc(db,'users',`${user?.email}`);
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef,{
                savedShows:result,
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <h1 className='text-white font-bold md:text-xl p-4'>My shows</h1>
            <div className='relative flex items-center group bg-black'>
                <MdChevronLeft
                    onClick={() => slideLeft()}
                    className='bg-white text-zinc-950 rounded-full absolute opacity-50 z-[90] hidden group-hover:block hover:bg-gray-300'
                    size={40}
                />
                <div id={'slider'} className='h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide duration-1000 ease-in-out' >
                    {
                        movies ? (movies.map((item, id) => (
                            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                    <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full'>
                                        {item?.title}
                                    </p>
                                </div>
                                <p
                                    onClick={() => deleteShow(item.id)}
                                    className='absolute top-4 right-4 hidden group-hover:block'>
                                    <AiOutlineClose />
                                </p>
                            </div>
                        )) ) : (
                            <h3 className='md:text-4xl p-4' >No saved movies</h3>
                        )
                    }
                </div>
                <MdChevronRight
                    className='right-0 bg-white text-zinc-950 rounded-full absolute opacity-50 z-[90] hidden group-hover:block'
                    size={40}
                    onClick={slideRight}
                />
            </div>
        </>
    )
}

export default SavedShows