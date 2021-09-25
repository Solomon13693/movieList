import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import Banner from './Banner'
import ListCard from './ListCard'

function WatchList() {
    const {watchlist} = useContext(GlobalContext)
    return (
        <div>

            <Banner title="WatchList" />

 
            {watchlist.length > 0 ? (
            <div>

                <div className="w-auto py-5 bg-gray-800 text-white px-5 container m-auto sm:w-96 mt-5 rounded-2xl text-1xl text-center">You have <span className="font-bold">{watchlist.length}</span> movies in your List</div>

                <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5">
                        {watchlist.map((movie) => (
                            <ListCard movie={movie} />
                        ))}
                 </div>

             </div>
            ) : (
                <h1 className="w-auto py-5 bg-gray-800 text-white px-5 container m-auto sm:w-96 mt-5 rounded-2xl text-1xl text-center">No movie in your List <Link className="bg-white text-black p-2 ml-5 rounded-xl" to="/add">Add some</Link> </h1>
            ) }
                
        </div>
    )
}

export default WatchList
