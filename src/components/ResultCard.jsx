import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function ResultCard({movie}) {
  const {addMovie, watchlist} = useContext(GlobalContext)
  const addHandler = () => {
    addMovie(movie)
  }

  let storedMovie = watchlist.find(y => y.id === movie.id)

  const disabledBtn = storedMovie ? true : false

    return (
        <div>
             <div
        className="
          bg-white
          shadow-md
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96
          mt-20
        "
      >
        
        {movie.poster_path ? (
            <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt="image"
          />
        ) :  (
            <img className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover" src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" alt="" />
        )
    }

        <div
          className="
            flex-1
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
        >
          <div className="flex flex-col justify-start items-baseline">
            <h1 className="font-bold mb-0">
              {movie.title}
            </h1>
            <span className="text-xs text-indigo-300 mt-0"></span>
          </div>
          <p className="text-xs text-gray-500 w-4/5 mb-5">
            {movie.vote_average} Votes
          </p>
          <p className="text-xs text-gray-500 w-4/5">
            {movie.release_date ? movie.release_date.substring(0,4) : "---" }
          </p>
          <button disabled={disabledBtn} onClick={addHandler} className=" bg-green-600 px-5 py-2 text-white rounded-xl">Add to watchlist</button>
        </div>
      </div>
        </div>
    )
}

export default ResultCard
