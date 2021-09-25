import React, { useState } from 'react'
import Banner from './Banner'
import ResultCard from './ResultCard'

function AddMovies() {

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const onChange = (e) => {
        e.preventDefault()

        setQuery(e.target.value)
 
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=94ffd284358961ce14ea1ccfcc6e9b0a&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            if(!data.errors){
                setResults(data.results)
                console.log(data.results);
            } else{
                setResults([])
            }
        }) 
        .catch((error) => {
            alert(error)
        })
    }
    
    return (
        <div className="container m-auto mt-5">
            <Banner title="Add Movies" />
           
           <form className="text-center">
               <input className="w-auto sm:w-96  outline-none border border-gray-900 py-3 px-4 mt-7 rounded-lg" type="text" placeholder="Search for movies" value={query} onChange={onChange} />
           </form>

           <div className="container m-auto">
               {results.length > 0 && (
                   <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                       {results.map((movie) => (
                          <div>
                              <ResultCard movie={movie} />
                          </div>
                       ))}
                   </ul>
               )}
           </div>

        </div>
    )
}

export default AddMovies
