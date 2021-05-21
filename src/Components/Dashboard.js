import {Col, Row, Table, Button} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import {PostMovie} from "./PostMovie";


export const Dashboard = ({movies, searchInput}) => {
    
return (
    <>
     <div className="spacer">
     <PostMovie/>
      <div className="buttons">
      <button>Remove all</button>
      <button><i class="far fa-plus-square"></i></button>
      </div>
    
{/*      
     <div className="cards mt-5 pt-5" id="wishlist"> */}
     {/* .filter( filtredElement =>{
                if (searchInput === "") {
                    return filtredElement
                }else if (filtredElement.Title.toLowerCase().includes(searchInput.toLowerCase())){
                    return filtredElement
                }
            }) */}
         <Table bordered hover size="sm" className="thead--movie--table mt-5">
             <thead>
                <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Edit</th>
                </tr>
             </thead>
    
             <tbody>
           {movies.map(element =>  
                <tr>
                <td>{element.id}</td>
                <td><img src={element.Poster} alt={element.Title} className="post-size-img"/></td>
                <td>{element.Title}</td>
                <td>{element.Genre}</td>
                <td>
                   <span>
                   <Button variant="danger"><i class="far fa-trash-alt"></i></Button>
                   <Button variant="info"><i class="far fa-edit"></i></Button>
                   </span>
                </td>
                </tr>
                )}
                </tbody>
            </Table>
            </div>
    </>
) 
} 
