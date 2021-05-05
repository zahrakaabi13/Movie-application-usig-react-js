import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'
import {Link} from "react-router-dom"

function Menu(){
    return (
        
            <Navbar collapseOnSelect expand="lg" fixed="top">
                 <Link to="/" className="ml-auto" >MovieHype</Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">Home</Link>
                        <Link to="/Contact">Contact us</Link>
                        <Form inline>
                            <FormControl type="text" placeholder="SEARCH"  />
                            <Button variant="outline-secondary"><i class="fas fa-search  "></i></Button>
                        </Form>
                        <Link className="heart" to="/Favorite"><i class="fas fa-heart"></i></Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
       
    )
}
export default Menu