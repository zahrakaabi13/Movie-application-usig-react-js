import {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

export const SignUp = () => {

  //Declaring Modal variables==========================
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return(
        <>
            <i class="fas fa-user-ninja heart ninja-icon" onClick={handleShow}></i>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                   <Modal.Title>Join us Now!</Modal.Title>
                </Modal.Header>

                <Modal.Body>hello</Modal.Body>

                {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}