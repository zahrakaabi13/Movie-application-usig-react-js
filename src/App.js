import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './Components/Home'
import Menu from './Components/Navbar'
import FilteredMovies from './Components/FilteredMovies'
import {FilteredSeries} from './Components/FilteredSeries'
import Favorite from './Components/Favorite'
import Footer from './Components/Footer'
import { useState, useEffect } from 'react'




function App() {

  //calling the json file===============================================
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    fetch('Movies.json')
    .then(response => response.json())
    .then(movies=>setMovies(movies))
  })

   //value of the input=================================================
   const [searchInput, setSearchInput] = useState("")
   const getSearchInput = (event) =>{
      setSearchInput(event.target.value)
   }

  //increment to favorite===============================================
  const [favorite, setFavorite] = useState(0)
  const getFavorite = () => {
    setFavorite(favorite + 1)
  }

  //add to favorite====================================================
  const [favoriteValue, setFavoriteValue] = useState([])
  const getFavoriteValue = (element) =>{
    //COPY the movies n pass element into it
    setFavoriteValue([...favoriteValue, element])
    getFavorite()
  }

 
  return (
    <BrowserRouter>
         <Menu favorite={favorite} getSearchInput={getSearchInput}/> 
         <Route exact path="/"><Home movies={movies} searchInput = {searchInput} getFavoriteValue={getFavoriteValue}/></Route>
         <Route path="/FilteredMovies"><FilteredMovies searchInput={searchInput} movies={movies} getFavorite={getFavorite}/></Route>
         <Route path="/FilteredSeries"><FilteredSeries searchInput={searchInput} movies={movies} getFavorite={getFavorite}/></Route>
         <Route path="/Favorite"><Favorite favoriteValue={favoriteValue} getFavoriteValue={getFavoriteValue}/></Route>
         <Footer/>
    </BrowserRouter>
  );
}

export default App;