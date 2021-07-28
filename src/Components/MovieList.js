import React from 'react'
import MoviesCard from './MoviesCard'
import './Components.css';

function MovieList({film,text,rate}) {
 

  return (
    <div className="movies">
      {film.filter(el=>(el.name.toLowerCase().includes(text.toLowerCase()) && parseInt(el.rating)>=rate )).map(el=><MoviesCard movie={el} />)}
    </div>
    
  )
}

export default MovieList;