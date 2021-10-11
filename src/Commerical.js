import React from 'react'
import './Commerical.css'
import {Card} from 'react-bootstrap'

function Commerical() {
    return (
        <div>
            <Card style={{ width: '18rem' ,height:'25rem'}}  className="card2" >
  <Card.Img variant="top" src="https://www.hoatax.com/wp-content/uploads/2017/08/Seattle-commercial-real-estate-photography-company-aerial-photography-services-virtual-tours-for-commercial.jpg"  />
  <Card.Body>
    <Card.Title> ₹120,00,0000</Card.Title>
    <Card.Text>
     2017model <br></br>
    Commerical Appartment 
    </Card.Text>
    </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'25rem' }}  className="card2" >
  <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.t6CHkBczlFKNSobuEKlpEwHaFj&pid=Api&P=0&w=224&h=169"  />
  <Card.Body>
    <Card.Title> ₹1,00,000</Card.Title>
    <Card.Text>
     1month rent <br/>
     software office with cabine rent
    </Card.Text>
    </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'25rem' }}  className="card2" >
  <Card.Img variant="top" src="https://hs-legal.co.uk/wp-content/uploads/2017/08/Residential-property.jpg"  />
  <Card.Body>
    <Card.Title> ₹2,20,000</Card.Title>
    <Card.Text>
     Commerical Buliding rent <br></br>
     kukatapally in road no4
    </Card.Text>
    </Card.Body>
</Card>

<Card style={{ width: '18rem',height:'25rem' }}  className="card2" >
  <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.EVTDZBzjKLQn5qQVrH4bLwHaHa&pid=Api&P=0&w=300&h=300"  />
  <Card.Body>
    <Card.Title> ₹80,0000</Card.Title>
    <Card.Text>
     commercial Appartment <br></br>
     hyderabad in gachibole
    </Card.Text>
    </Card.Body>
</Card>
        </div>
    )
}

export default Commerical
