import React from 'react';
import { useState } from 'react';
import {
  // MDBBtn,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';



function Reg() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate();

const handleSignup = (e) => {
  e.preventDefault();


  // Validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/


  if (!username || !email || !password) {
    alert('Please fill in all fields!');
    return;
  }
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  console.log(`Signup with username: ${username}, email: ${email}, and password: ${password}`);

  
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const isUserExists = existingUsers.some((user) => user.username === username);


  if (isUserExists) {
    alert('Username already exists. Please choose a different one.');
    return;
  }



  // Create a new user object and add it to local storage
  
  const newUser = { username, email, password };
  existingUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(existingUsers));

  setUsername('');
  setEmail('');
  setPassword('');

  navigate('/log');
};


















  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Register Here</h2>

                <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg"  value={username}onChange={(e) => setUsername(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email}onChange={(e) => setEmail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password}onChange={(e) => setPassword(e.target.value)}/>
                {/* <button className='btn btn-primary' onClick={handleSignup} type='submit'>Create</button><br /><br /> */}
              
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              {/* <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p> */}
              <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSignup}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Reg;