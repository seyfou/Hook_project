import './App.css';
import React from 'react'
import Search from './Components/Search'
import MovieList from './Components/MovieList';
import AddMovies from './Components/AddMovies'
import {useState} from 'react';


function App() {
  const [film,setFilm]=useState([{ 
    name:"Chernobyl: Abyss",
    image:"https://img.moviesjoy.to/resize/188x288/9c/32/9c32b2293db8584b1530558c177add3c/9c32b2293db8584b1530558c177add3c.jpg",
    description:"Abyss is about the aftermath of the explosion at the Chernobyl nuclear power station.",
    genre:"History, Drama",
    url:"https://moviesjoy.to/movie/chernobyl-abyss-70609",
    rating:'4'

  },
  {
    name:"Icemen",
    image:"https://img.moviesjoy.to/resize/188x288/ab/7b/ab7bf49ad6e4536d7555f6bb9d44c227/ab7bf49ad6e4536d7555f6bb9d44c227.jpg",
    description:"A stoty of the historic heroes who have explored the frozen continent of Antarctica.",
    genre:"History, Documentary",
    url:"https://moviesjoy.to/movie/icemen-200-years-in-antarctica-67542",
    rating:'5'

  },
  {
    name:"Witnesses",
    image:"https://img.moviesjoy.to/resize/188x288/28/f2/28f2c9ff69b213006bb8be36991440c6/28f2c9ff69b213006bb8be36991440c6.jpg",
    description:"The gripping true story of the first three witnesses to the Book of Mormon.",
    genre:"History, Family, Drama",
    url:"https://moviesjoy.to/movie/witnesses-70255",
    rating:'4'

  },
  {
    name:"The Last Frontier",
    image:"https://img.moviesjoy.to/resize/188x288/b2/7e/b27eb05b720c774d608b862ee71a837f/b27eb05b720c774d608b862ee71a837f.jpg",
    description:"The story of the Podolsk cadets’ heroic stand outside Moscow in October 1941. ",
    genre:"History, War, Drama",
    url:"https://moviesjoy.to/movie/the-last-frontier-69469",
    rating:'5'

  },
  {
    name:"Edge of the World",
    image:"https://img.moviesjoy.to/resize/188x288/e0/8b/e08b2ec5e7744801c6d30ec52649d9b1/e08b2ec5e7744801c6d30ec52649d9b1.jpg",
    description:"Sir James Brooke, the British adventurer who became King of Sarawak in the 1840's.",
    genre:"Adventure, History, Drama",
    url:"https://moviesjoy.to/movie/edge-of-the-world-70108",
    rating:'2'

  },
  {
    name:"Jungle Cruisek",
    image:"https://img.moviesjoy.to/resize/188x288/6c/62/6c629d59a9a4a3cf6324b5a6c886a4f4/6c629d59a9a4a3cf6324b5a6c886a4f4.jpg",
    description:"Dr. Lily Houghton enlists the aid to take her down the Amazon in his ramshackle boat.",
    genre:"Adventure, Family, Fantasy",
    url:"https://moviesjoy.to/movie/jungle-cruise-69692",
    rating:'4'

  },
  {
    name:"Tom & Jerry",
    image:"https://img.moviesjoy.to/resize/188x288/49/28/492801e1400915d5aadf0de9f3c9eb0b/492801e1400915d5aadf0de9f3c9eb0b.jpg",
    description:" Tom and Jerry  get kicked out of their home and relocate to a fancy New York hotel. ",
    genre:"Comedy, Adventure, Family",
    url:"https://moviesjoy.to/movie/tom-jerry-67902",
    rating:'3'

  },
  {
    name:"Superman",
    image:"https://img.moviesjoy.to/resize/188x288/13/29/1329eea7d8ae66b2ae0d6aa980a4ba1b/1329eea7d8ae66b2ae0d6aa980a4ba1b.jpg",
    description:" It’s the dawn of a new age of heroes, and Metropolis has just met its first. ",
    genre:"Animation, Science Fiction",
    url:"https://moviesjoy.to/movie/superman-man-of-tomorrow-63269",
    rating:'5'

  },

])
const add=(newMovie)=>{
  setFilm(film=>([...film,newMovie]))
  console.log(newMovie)
 
}
const [text, settext] = useState('')
const [rate, setrate] = useState('1')


const searchtext=(text)=>{
settext(text)
}
const searchrate=(rate)=>{
  setrate(rate)
  }
  return (
    <div>
        <div className="App">
    <Search searchtext={searchtext} searchrate={searchrate}/>
    <MovieList film={film} text={text} rate={rate}/>
    <AddMovies add={add}/>
 
    </div>
    </div>
  )
}

export default App;