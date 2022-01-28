import React from 'react';
import {Card,Button, Row, Col, Container} from 'react-bootstrap';



function Crads() {
return (
<div class="p-5">


<Container>
<Row>
<Col md={3} >
<Card className="text-center border-0">
<div class="align-middle">
<Card.Img  className="rounded-circle w-50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC"/>
</div>
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="secondary">Go somewhere</Button>
</Card.Body>
</Card>
</Col>
<Col md={3} >
<Card className="text-center border-0">
<div class="align-middle">
<Card.Img  class="rounded-circle w-50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC"/>
</div>
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="secondary">Go somewhere</Button>
</Card.Body>
</Card>
</Col>

<Col md={3} >
<Card className="text-center border-0">
<div class="align-middle">
<Card.Img variant="top"  class="rounded-circle w-50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC"/>
</div>
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="secondary">Go somewhere</Button>
</Card.Body>
</Card>
</Col>
<Col md={3}>
<Card className="text-center border-0">
<div class="align-middle">
<Card.Img variant="top" class="rounded-circle w-50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC" />
</div>
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="secondary">Go somewhere</Button>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
</div>
                                    
                  );
}

export default Crads;