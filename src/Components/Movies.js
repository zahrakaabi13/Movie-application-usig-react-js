import { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'

function Movies(){
    const [movies,setMovies] = useState([])
    //calling the json file
    useEffect(()=>{
        fetch('Movies.json')
        .then(response => response.json())
        .then(movies=>setMovies(movies))
    })
    return(
        <div className="cards mt-5 pt-5">
            {movies.map(element=>
            <Card className="movie">
                <Card.Img variant="top" className="img" src={element.Poster} />
                <Card.Body className="card-body">
                    <Card.Title className="movie--title">{element.Title}</Card.Title>
                    <span className="text-movie">{element.Year}</span>
                    <span className="movie--icons">
                        <span><i class="fas fa-heart"></i></span>
                        <span><i class="fas fa-eye"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span>{element.Rate}</span>
                    </span>
                    
                </Card.Body>
            </Card>
            )}
        </div>
    )
}
export default Movies