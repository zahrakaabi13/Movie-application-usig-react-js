import {Row,Col} from 'react-bootstrap'

export const WatchedList = ({watchedList, removeFromWatchedlist}) =>{
    return (
        <>
        <div className="container watchedList mt-5 pt-5">
          
          {watchedList.map(element =>

           <div className="mt-5">
                  <img className="fav--movie--pic" src={element.Poster} alt={element.Title}/>
                  <div className="remove--button--wishlist" onClick={()=> removeFromWatchedlist(element)}><i class="fas fa-eye-slash"></i></div>
           </div>
           )}
       </div>
        </>
    )
}