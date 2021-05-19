import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './Components/Home'
import Menu from './Components/Navbar'
import FilteredMovies from './Components/FilteredMovies'
import {FilteredSeries} from './Components/FilteredSeries'
import Favorite from './Components/Favorite'
import {WatchedList} from './Components/WatchedList'
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

  //increment the wishlist==============================================
  const [favorite, setFavorite] = useState(0)
  const getFavorite = () => {
    setFavorite(favoriteValue.length+1)
  }

  //add to the wishlist=================================================
  const [favoriteValue, setFavoriteValue] = useState([])
  const getFavoriteValue = (element) =>{
    //favoriteValue.push(element)
    //if (!favoriteValue.some(alreadyFavorite => alreadyFavorite.Title == element.id)){
      setFavoriteValue(favoriteValue => [...favoriteValue, element])
      getFavorite()
    //}
  }


  //add to watched list=================================================
  const[watchedList, setWatchedList] = useState([])
  const getWatchedList = (element) => {
    setWatchedList(watchedList => [...watchedList, element])
  }

  //remove from the watched list========================================
  const removeFromWatchedlist = (element) => {
    let index = watchedList.indexOf(element)
    if (index !== -1) {
      watchedList.splice(index, 1);
      setWatchedList(watchedList)}
  }

  //remove from the wishlist============================================
  const removeFromWishlist = (element) => {
    let index = favoriteValue.indexOf(element)
    if (index !== -1) {
      favoriteValue.splice(index, 1);
      setFavoriteValue(favoriteValue)}
    //delete favoriteValue[index]
    setFavorite(favorite - 1)
  }

  //remove all from the wishlist========================================
  const removeAllWishlist = () => {
    setFavoriteValue([])
    setFavorite(0)
  }

  
 
  return (
    <BrowserRouter>
         <Menu favorite={favorite} getSearchInput={getSearchInput}/> 
         <Route exact path="/"><Home movies={movies} searchInput = {searchInput} getFavoriteValue={getFavoriteValue}  getWatchedList={getWatchedList}/></Route>
         <Route path="/FilteredMovies"><FilteredMovies searchInput={searchInput} movies={movies} getFavoriteValue={getFavoriteValue}/></Route>
         <Route path="/FilteredSeries"><FilteredSeries searchInput={searchInput} movies={movies} getFavoriteValue={getFavoriteValue}/></Route>
         <Route path="/WatchedList"><WatchedList searchInput={searchInput} watchedList={watchedList} removeFromWatchedlist={removeFromWatchedlist}/></Route>
         <Route path="/Favorite"><Favorite searchInput={searchInput} favoriteValue={favoriteValue} getFavoriteValue={getFavoriteValue} removeFromWishlist={removeFromWishlist} removeAllWishlist={removeAllWishlist}/></Route>
         <Footer/>
    </BrowserRouter>
  );
}

export default App;