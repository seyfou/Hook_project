import React from 'react'
import { Card} from 'react-bootstrap';
import './Components.css';
import ReactStars from "react-rating-stars-component";


function MoviesCard({movie}) {
  return (
    <div>
       <div >
          
            <Card className="card" name="one" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image}/>
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>
              {movie.description}
              </Card.Text>
              <Card.Text style={{color:"green"}}>
              {movie.genre}
              </Card.Text>
              
           <a href={movie.url}>Watch it</a>
             <div className="star"> <ReactStars 
              count={5}
              edit={false}
              size={24}
              value={movie.rating}
              activeColor="#ffd700"
            /></div>
              
            </Card.Body>
          </Card>
           
         </div>
    </div>
  )
}

export default MoviesCard;