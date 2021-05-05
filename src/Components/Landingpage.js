import { Row, Col } from "react-bootstrap";


function Landing(){
    return (
        <div>
        <div className="landing">
           <Row>
               <Col mod={7}>
                <h1>THE WITCHER</h1>
                <Row className="date">
                <h6>04 Mai 2021</h6>
                <hr/>
                <h6>Fantasy, Drama</h6>
                </Row>

                <Row className="mt-4">
                    <Col md={3}>
                    <h5>The <br/> story</h5>
                    </Col>

                    <Col md={9}>
                        <p>The witcher is an American fantasy drama series produced bu Lauren Schimit
                        Hissrich. It is based on the book of the same name by Polish writer.</p>
                        <div className="read--more d-flex"><h5>Read more</h5> <i class="fas fa-long-arrow-alt-right"></i></div>
                    </Col>
                </Row>
                

                <Row className="mt-5">
                <Col md={3}>
                    <h5>Trailers</h5>
                    </Col>

                    <Col md={9}>
                        <Row className="images--witcher">
                            <div></div>
                            <div></div>
                            <div></div>
                        </Row>
                    </Col>
                </Row>
               </Col>

               <Col md={4} className="landing--cover">
                  <Row className="row">
                  <button><i class="fas fa-play"></i></button>
                  <h5>watch Now</h5>
                  </Row>
               </Col>

               <Col md={1}>
                   <div className="social--media animate__slideInDown">
                       <h5>Facebook</h5>
                       <hr/>
                       <h5>Instagram</h5>
                       <hr/>
                       <h5>Twitter</h5>
                   </div>  
               </Col>
           </Row>

        </div>
        </div>
    )
}
export default Landing