import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const MovieCard = ({movie}) => {
  return (
    <>
       <img src={IMAGE_BASE_URL+movie.poster_path} className='w-[110px] md:w-[200px] rounded-md hover:border-[3px] border-gray-400 hover:scale-110 duration-150 cursor-pointer transition-all ease-in ' />
    </>
  )
}

export default MovieCard