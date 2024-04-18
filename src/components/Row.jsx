import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie'

function Row({ title, fetchURL,rowId }) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((res) => setMovies(res.data.results))
    }, [fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h1 className='text-white font-bold md:text-xl p-4' >{title}</h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={() => slideLeft()}
                    className='bg-white text-zinc-950 rounded-full absolute opacity-50 z-[90] hidden group-hover:block hover:bg-gray-300'
                    size={40}
                />
                <div id={'slider' + rowId} className='h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide duration-1000 ease-in-out' >
                    {
                        movies.map((item, id) => (
                            <Movie item={item} id={id} />
                        ))
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

export default Row