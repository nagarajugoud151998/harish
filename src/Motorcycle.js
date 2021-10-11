import React from 'react'
import{Card} from'react-bootstrap';
import{CardGroup} from'react-bootstrap';
import './Motorcycle.css'

 function Motorcycle() {
    return (
        
        <div>
            <br></br>
            <Card style={{ width: '18rem',height:'20rem' }}  className="moto1" >
  <Card.Img variant="top" src="http://1.bp.blogspot.com/-0nOwr47bGXo/U1UaVRbabRI/AAAAAAAAHUE/raCnasr-OhE/s1600/ktm-duke-125-5176-1680x1050--pp-First-Impresion-Motorcycles.jpg" />
  <Card.Body>
    <Card.Title> ₹1,12,000</Card.Title>
    <Card.Text>
     2020model <br></br>
     Duke bike good condition
    </Card.Text>
    </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'20rem'  }}  className="moto1" >
  <Card.Img variant="top" src="https://stat.overdrive.in/wp-content/odgallery/2017/02/33119_New_Activa_125.jpg"  />
  <Card.Body>
    <Card.Title> ₹50,000</Card.Title>
    <Card.Text>
     2019model 
     Honda Activa 
    </Card.Text>
    </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'20rem'  }}  className="moto1" >
  <Card.Img variant="top" src="https://cdn1.acedms.com/photos/listing/2018-05-24/3dc858581edf1fbcb2c87c8d5e6a6dc6_extra_large.jpg"  />
  <Card.Body>
    <Card.Title> ₹60,000</Card.Title>
    <Card.Text>
     2018model <br></br>
     Cbz xtream bike
    </Card.Text>
    </Card.Body>
</Card>

<Card style={{ width: '18rem' ,height:'20rem' }}  className="moto1" >
  <Card.Img variant="top" src="https://newwallpapershd.com/wp-content/uploads/2015/05/Aprilia-RSV4-Motorcycle-Wallpaper.jpg"  />
  <Card.Body>
    <Card.Title> ₹1,25,000</Card.Title>
    <Card.Text>
     2017model <br></br>
     R15 bike new condition
    </Card.Text>
    </Card.Body>
</Card>
        </div>
    )
}
export default Motorcycle