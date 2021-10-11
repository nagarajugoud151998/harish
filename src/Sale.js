import React from 'react'
import './Sale.css';
import {Card} from 'react-bootstrap';
function Sale() {
    return (
        <div>
          <Card style={{ width: '18rem' ,height:'30rem'}}  className="card2" >
  <Card.Img variant="top" src="https://u.realgeeks.media/spokanehomesforsale/_rgg/landscape_images/suburbhome.jpg"  />
  <Card.Body>
    <Card.Title> ₹1,00,0000</Card.Title>
    <Card.Text>
     2017model <br></br>
     Home sale double bedroom in Hyderabad
    </Card.Text>
    </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'30rem' }}  className="card2" >
  <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.MfR17f4j9QmisSVJOxS4rQHaFm&pid=Api&P=0&w=212&h=161"  />
  <Card.Body>
    <Card.Title> ₹10,00,000</Card.Title>
    <Card.Text>
     2020model 
    Home sale Duplex house in america
    </Card.Text>
    </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'30rem' }}  className="card2" >
  <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.MKj3GGdrwwFkXKY_aL2PmAHaEZ&pid=Api&P=0&w=265&h=158"  />
  <Card.Body>
    <Card.Title> ₹20,00,000</Card.Title>
    <Card.Text>
     2021model <br></br>
     Home sale single bedroom in hitech city,road no6
    </Card.Text>
    </Card.Body>
</Card>

<Card style={{ width: '18rem',height:'30rem' }}  className="card2" >
  <Card.Img variant="top" src="https://media.istockphoto.com/photos/house-for-sale-sign-picture-id1152256307"  />
  <Card.Body>
    <Card.Title> ₹8,000,000</Card.Title>
    <Card.Text>
     2012model <br></br>
     Home sale 4 floors in kukatapally,roadno4
    </Card.Text>
    </Card.Body>
</Card>  
        </div>
    )
}

export default Sale
