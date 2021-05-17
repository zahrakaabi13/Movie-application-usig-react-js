import Landing from "./Landingpage"
import Movies from "./Movies"


function Home({movies,getFavoriteValue,searchInput, getWatchedList}){
 //home is the parent 
    return (
        <>
            <Landing/>
            <Movies searchInput = {searchInput} getFavoriteValue={getFavoriteValue} movies={movies} getWatchedList={getWatchedList}/>
        </>
    )
}
export default Home