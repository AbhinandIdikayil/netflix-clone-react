import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((res) => setMovies(res.data.results))
    }, [fetchURL])

    console.log(movies)
    return (
        <>
            <h1 className='text-white font-bold md:text-xl p-4' >{title}</h1>
            <div className='relative flex items-center'>
                <div id={'slider'} >

                </div>
            </div>
        </>
    )
}

export default Row