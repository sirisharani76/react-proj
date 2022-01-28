import React from 'react';
import { Col, Container, Row, Card} from 'react-bootstrap';

function Cards1() {
return (
<div>
<Container>
<h2 >Heading</h2>
<Row>
<Col md={4}>
<Card className="border-0">
  <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC" style={{height:'18rem'}}/>
  <Card.Body>
        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Some quick example text to build on the card title and make up the bulk ofthe card's content.Some quick example text to build on the card title and make up the bulk ofthe card's content.
    </Card.Text>
      </Card.Body>
</Card>
</Col>

<Col md={4}>
<Card className="border-0">
  <Card.Img variant="top"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC" style={{height:'18rem'}}/>
  <Card.Body>
        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Some quick example text to build on the card title and make up the bulk ofthe card's content.Some quick example text to build on the card title and make up the bulk ofthe card's content.
    </Card.Text>
      </Card.Body>
</Card>
</Col>

<Col md={4}>
<Card className="border-0">
  <Card.Img variant="top"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC" style={{height:'18rem'}}/>
  <Card.Body>
        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Some quick example text to build on the card title and make up the bulk ofthe card's content.Some quick example text to build on the card title and make up the bulk ofthe card's content.
    </Card.Text>
      </Card.Body>
</Card>
</Col>


</Row>


</Container>
</div>
                                    
                  );
}

export default Cards1;