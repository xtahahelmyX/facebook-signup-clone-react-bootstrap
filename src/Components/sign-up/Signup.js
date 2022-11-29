import React from 'react'
import { Card, Form, FormCheck, FormControl, FormGroup, FormLabel, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/facebook-logo.png'
import './sign-up.css'
import CardHeader from 'react-bootstrap/esm/CardHeader'

export const Signup = () => {
  return (
    <div className="form">
      <img src={logo} alt="" />
     <Card>
     <Card.Body>
      <CardHeader>
        <h1>Create a new account</h1>
        <p>It's quick and easy</p>
      </CardHeader>
      <Form> 
      <div className="formGroupOne">
      <FormGroup>
        <div className="formGroupOnePartOne">
        <FormControl type="text" placeholder='First name'/>
        <FormControl type="text" placeholder='Surname'/>
        </div>
        <div className="formGroupOnePartTwo">
        <FormControl type="email" placeholder="Mobile number or email address"/>
        <FormControl type="password" placeholder='New Password'/>
        </div>
      </FormGroup>
      </div>
      <FormGroup>
        <FormLabel>Date of Birth</FormLabel>
        <FormControl type="date"/>
      </FormGroup>
     <div className="formGroupThree">
      <FormGroup>
       <FormLabel>Gender</FormLabel>
      <div className="radio">
       <FormCheck  type="radio" label= 'Male' reverse name='gender'/>
       <FormCheck  type="radio" label= 'Female' reverse name='gender'/>
       <FormCheck  type="radio" label= 'Custom' reverse name='gender'/>
      </div>
      </FormGroup>
     </div>
     </Form>
     <footer>
      <div className="learnMore">
        <p>People who use our service may have uploaded your contact information to facebook. <a href="#"> Learn More
        </a>  
        </p>
        <p>By Clicking Sign Up, you agree to Terms,<a href='#'>Data Policy </a> and <a href='#'> Cookie Policy.
        </a> You may receive SMS notifications from us and can opt out at any time.</p>
      </div>
      <div className="buttons">
      <Button>Sign Up</Button>
      <a href="#">Already have an account?</a>
      </div>
     </footer>
    </Card.Body>
   </Card>
  </div>
  )
}
