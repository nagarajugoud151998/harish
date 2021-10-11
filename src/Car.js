import React from 'react'
import './Car.css';
import {Card} from 'react-bootstrap';



function Car() {
    return (
        <div>
     <img  src="https://d3lp4xedbqa8a5.cloudfront.net/imagegen/max/ccr/1023/-/s3/digital-cougar-assets/whichcar/2016/07/27/6416/Tesla-Model-x-2.jpg" className="img3" ></img> 
         <br></br>
         <Card style={{ width: '18rem',height:'10rem' }}  className="card1" >
  <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.9ME56Y6wVkdVUfVrKf-3EAAAAA&pid=Api&P=0&w=212&h=159" />
  <Card.Body>
    <Card.Title>₹30,000</Card.Title>
    <Card.Text>
      
      2015-250000km<br></br>
      Nano car desial car
    </Card.Text>
    </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'20rem' }}  className="card1" >
  <Card.Img variant="top" src="https://www.enterprise.com/content/dam/global-vehicle-images/cars/TOYO_RAV4_2014.png"  />
  <Card.Body>
    <Card.Title> ₹7,00,000</Card.Title>
    <Card.Text>
       2017-3500km<br></br>
     Creta is good codition 
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'20rem' }}  className="card1" >
  <Card.Img variant="top" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/bmw_5_series.jpg?itok=c3u3n4wP"  />
  <Card.Body>
    <Card.Title> ₹25,00,000</Card.Title>
    <Card.Text>
      2020-1500km<br></br>
      Bmw argent sale Desial 
   </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'20rem' }}  className="card1"  >
  <Card.Img variant="top" src="https://i.kinja-img.com/gawker-media/image/upload/s--9y4VNSvP--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/192dde341njpojpg.jpg"  />
  <Card.Body>
    <Card.Title> ₹25,000</Card.Title>
    <Card.Text>
     2001-25000km <br></br>
     marthisuzki 800ac petrol& gas
    </Card.Text>
    </Card.Body>
</Card>


        </div>
    )
}

export default Car
