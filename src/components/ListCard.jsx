import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function ListCard({movie}) {
    const {removeMovie} = useContext(GlobalContext)

    const removeHandler = (id) => {
        removeMovie(movie.id)
    }

    return (
    <div class="mx-auto px-3 py-8 w-80">
        <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
            <div class="md:flex-shrink-0">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="mountains" class="w-full h-64 rounded-lg rounded-b-none object-cover" />
            </div>
            <div class="px-4 py-2 mt-2">
                <h2 class="font-bold text-1xl text-gray-800 tracking-norma mb-5l">{movie.title}.</h2>
                    <div class="flex items-center justify-between mt-2 my-5">
                        <span href="#" class="flex text-gray-700">
                            <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-blue-500" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                            </svg> 
                            {movie.vote_count}
                        </span>
                        <i onClick={removeHandler} className="fas fa-trash cursor-pointer"></i>
                    </div>
                <div class="author flex items-center -ml-3 my-3">
                    <div class="user-logo">
                        <img class="w-12 h-12 object-cover rounded-full mx-4  shadow" src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt="avatar" />
                    </div>
                    <h2 class="text-sm tracking-tighter text-gray-900">
                        <a href="#">Released: </a> <span class="text-gray-600">{movie.release_date.substring(0,4)}</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ListCard
