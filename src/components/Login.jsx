import React, { useState} from 'react'
import {  useNavigate } from 'react-router-dom'


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './Login.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function Login() {

  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   

    const eml=e.target.form1.value;
    const pass=e.target.form2.value


    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Check if the user exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find((u) => u.username === username && u.password === password);
    console.log(user);
    if (user) {
      // Set a flag in local storage to indicate the user is logged in
      localStorage.setItem('loggedIn', JSON.stringify(user));
      alert('Login successful!');
      

      navigate('/');
    } else if(eml=='krishnadas'&& pass==123){
      navigate('/adminhome')
    }else{
      alert('Invalid username or password.');
    }
    
    
   

    // Clear the form fields
    setUsername('');

    setPassword('');

    

  }
  

return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://www.babees.pl/wp-content/uploads/2018/10/babes.png"
                style={{width: '185px'}} alt="logo" />
             
            </div>
<form onSubmit={handleLogin}>
            <p>Please login to your account</p>

              <MDBInput wrapperClass='mb-4' label='User Name' id='form1' type='text' value={username} onChange={(e)=> setUsername(e.target.value)} required/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>

              <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" >Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger' onClick={()=>navigate('/reg')}>
                Register Now
              </MDBBtn>
            </div>
           

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than a company</h4>
              <p class="small mb-0">"We've Got Your Baby Needs Covered - Shop Now!
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
  

export default Login;

