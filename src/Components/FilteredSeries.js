import {Card} from 'react-bootstrap'

export const FilteredSeries = ({searchInput, movies, getFavorite}) =>{
    return (
        <>
        <div className="cards mt-5 pt-5">

            {movies.filter((filtredElement)=>{
                
                if ((searchInput === "") && (filtredElement.Type === "movie")){
                    return 
                }else if ((filtredElement.Type === "series") && filtredElement.Title.toLowerCase().includes(searchInput.toLowerCase())){
                    return filtredElement
                }

            }).map(element =>

            <Card className="movie">
                <Card.Img variant="top" className="img" src={element.Poster} />
                <Card.Body className="card-body">
                    <Card.Title className="movie--title">{element.Title}</Card.Title>
                    <span className="text-movie">{element.Year}</span>
                    <span className="movie--icons">
                        <span onClick={getFavorite}><i class="fas fa-heart"></i></span>
                        <span><i class="fas fa-eye"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span>{element.Rate}</span>
                    </span>  
                </Card.Body>
            </Card>
            )}
        </div>
     </>
    )
}