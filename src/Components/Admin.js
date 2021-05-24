import {Table, Button, Modal, Form} from 'react-bootstrap'
import 'react-rater/lib/react-rater.css'
import {useState} from 'react'
import axios from 'axios'


export const Admin = ({movies, searchInput}) => {

  //Declaring Modal states===================================
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Posting data from db.json================================
  //Declaring form input's state
  const [input, setInput] = useState({
      Poster : "",
      Title : "",
      Genre : ""
  }) 
  
  //Posting data to the db.josn==============================
  const handleSubmit = e => {
  e.preventDefault()
      axios.post(`http://localhost:3004/posts`,input)
      .then(response => {console.log(response); console.log(response.data)})
      .catch(error => console.log(error))
  }

  //Delete data from db.json=================================
  const handleDelete = async (id) => {
    let confirmDelete = window.confirm("Are you sure to delete this movie?");
        if (confirmDelete) {
        await axios.delete(`http://localhost:3004/posts/${id}`,input)
        .then(response => {console.log(response); console.log(response.data)})
        .catch(error => console.log(error))
        } 
  }
 
  //Editing data from db.json================================

  
  

return (
    <>
     <div className="spacer">
      <div className="buttons">
      <button>Remove all</button>
      <button onClick={handleShow}><i class="fas fa-plus"></i></button>
      </div>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Adding a movie</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
           <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>URL Image</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter URL Image"
                    name = "Poster"
                    value={input.Poster} 
                    onChange={ e =>setInput({...input, Poster : e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter the title" 
                    name="Title"
                    value={input.Title}
                    onChange={ e =>setInput({...input, Title : e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter the genre" 
                    name = "Genre"
                    value={input.Genre}
                    onChange={ e =>setInput({...input, Genre : e.target.value})}/>
                </Form.Group>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal.Body>
      </Modal>


{/*      
     <div className="cards mt-5 pt-5" id="wishlist"> */}
     {/* .filter( filtredElement =>{
                if (searchInput === "") {
                    return filtredElement
                }else if (filtredElement.Title.toLowerCase().includes(searchInput.toLowerCase())){
                    return filtredElement
                }
            }) */}
        <div className="container thead--movie--table">
         <Table bordered hover size="sm">
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
                   <Button variant="danger" onClick={ () =>handleDelete(element.id)}><i class="far fa-trash-alt"></i></Button>
                   <Button variant="info"><i class="far fa-edit"></i></Button>
                   </span>
                </td>
                </tr>
                )}
                </tbody>
            </Table>
            </div>
            </div>
    </>
) 
} 
