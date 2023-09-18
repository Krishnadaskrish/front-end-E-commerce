import React,{useState,useEffect,useContext} from 'react';
import { MyContext } from '../context/Context';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from './Search';
import './Navbar.css'
import { MDBBtn} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';



function Navbarfront() {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status
  
  const cart = useContext(MyContext);
console.log(cart);

  useEffect(()=>{


console.log('cart')

  },[cart])

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const user = JSON.parse(localStorage.getItem("loggedIn"));
    console.log(user);
    setIsLoggedIn(!!user?.username);
    if (user) {
      setUserName(user?.username);
    } else {
      setUserName("");
    }
  });

 

  const handleLogout = () => {
    // Clear the logged-in flag in localStorage and update the state
    localStorage.removeItem("loggedIn");
    alert('Logout successful!');
    
    
    setIsLoggedIn(false);
  };

  const handleLogIn = () => {
    // Clear the logged-in flag in localStorage and update the state
    
    navigate("/log");
  };

 const onSearch =(e)=>{
    e.preventDefault();
  
    navigate=('/search');
  }
  

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Babees</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
           <Nav.Link  onClick={() => navigate('/product')}>Category</Nav.Link>
           <Nav.Link  onClick={() => navigate('/All')}>All Product</Nav.Link>
     
          </Nav>
          
          {isLoggedIn ? (
       <MDBBtn onClick={handleLogout}>LOgout</MDBBtn>):(<MDBBtn onClick={handleLogIn}>login</MDBBtn>)}
<img src={require("../images/user(1).png")} alt="" className="navIcons" />
              <li class="nav-item">
                
              {isLoggedIn ? (
                
                  <Link to="/" class="nav-link navBTNLINK">
                  {userName}
                </Link>
                ) : (
                  ""
                )}
              </li>
              <div>
              <i class="fa" style={{fontSize:'24px', color: 'black'}}>&#xf07a;</i>
<span class='badge badge-warning' id='lblCartCount'> 5 </span>

              </div>
        </Navbar.Collapse>
      </Container>
   
    <Form className="d-flex">
    <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setsearchTerm(e.target.value)}
              
            />    
            </Form>
            </Navbar>
            <Search searchTerm={searchTerm} />
</>

)}

export default Navbarfront;

