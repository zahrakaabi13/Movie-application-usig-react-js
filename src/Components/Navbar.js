import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'
import {Link} from "react-router-dom"


function Menu({getSearchInput, favorite}){

    return (        
            <Navbar collapseOnSelect expand="lg" fixed="top">
                 <Link to="/" className="linked--brand ml-auto" >MovieHype</Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="linked--page" to="/">Home</Link>
                        <Link className="linked--page" to="/FilteredMovies">Movies</Link>
                        <Link className="linked--page" to="/FilteredSeries">Series</Link>
                        <Link className="linked--page" to="/WatchedList">Watched</Link>
                        <Form inline>
                            <FormControl type="text" placeholder="SEARCH" onChange={getSearchInput}/>
                            <Button variant="outline-secondary"><i class="fas fa-search  "></i></Button>
                        </Form>
                        <Link className="heart" to="/Favorite"><i class="fas fa-heart"></i><span className="favorite--value">{favorite}</span></Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
    )
}
export default Menu