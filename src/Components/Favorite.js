import {Card} from 'react-bootstrap'


export default function Favorite({favoriteValue, getFavoriteValue}){
return (
    <>
     <div className="cards mt-5 pt-5">
           
           {favoriteValue.map(element =>

            <Card className="movie">
                <Card.Img variant="top" className="img" src={element.Poster} />
                <Card.Body className="card-body">
                    <Card.Title className="movie--title">{element.Title}</Card.Title>
                    <span className="text-movie">{element.Year}</span>
                    <span className="movie--icons">
                        {/* whenever you click you do the function n pass the movie */}
                        <span onClick={()=>getFavoriteValue(element)}><i class="fas fa-heart"></i></span>
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