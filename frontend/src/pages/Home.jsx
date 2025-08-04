import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){
    const [ searchQuery, setSearchQuery] = useState("");

    const movies= [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "3 idiots", release_date: "2013"},
        {id: 3, title: "Matrix", release_date: "1996"},
        {id: 4, title: "Saiyarra", release_date: "2025"}
    ]

    const handleSearch= (e) => {
        e.preventDefault()
    }

    return <div className="home">
        <form onSubmit={handleSearch } className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value= { searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
            
            <button type="submit" className="search-button">Search </button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (<MovieCard movie = {movie} key = {movie.id}/>

                )
                )) }
        </div>
    </div>
}

export default Home