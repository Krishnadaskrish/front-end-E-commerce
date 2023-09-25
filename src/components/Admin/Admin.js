import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBIcon } from 'mdb-react-ui-kit';
import { MyContext } from '../../context/Context';
import { useContext } from 'react';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router';

export default function Admin() {

    const {pro,setpro}=useContext(MyContext)
    const nav=useNavigate()

      




  return (
    <>
    <AdminNav/>
    <MDBTable align='middle' style={{backgroundColor:'#ffff' }}>
      
      <MDBTableHead>  
        <tr>
        <th scope='col'>SL NO</th>
          <th scope='col'>Product</th>
          <th scope='col'>Category And Discription</th>
          <th scope='col'>Actual price</th>
          <th scope='col'>Offer price</th>
          <th scope='col'>DELETE</th>
        </tr>
      </MDBTableHead>{pro.map((pro,i) =>(
      <MDBTableBody>
        <tr>
        <div className='ms-3'>
                <p className='fw-bold mb-1'>{pro.id}</p>
               
              </div>
          <td>
            
            <div className='d-flex align-items-center'>
            
              <img
                src={pro.src}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{pro.name}</p>
               
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{pro.type}</p>
            <p className='text-muted mb-0'>{pro. Discription}</p>
          </td>
          <td>
          
            <MDBBadge color='success' pill>
             {pro.price}
            </MDBBadge>
          </td>
          <td>
          
            <MDBBadge color='success' pill>
             {pro.price2}
            </MDBBadge>
          </td>
          
          <td> 
        
        <svg id={i} onClick={()=>setpro(p=>p.filter((a)=>a.id!==pro.id))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
      </td>
          <td>
            <MDBBtn color='link' rounded size='sm' onClick={()=>nav(`/adminedit/${pro.id}`)}>
              Edit
            </MDBBtn>
          </td>
        </tr>
        
        
       
      </MDBTableBody>))}
    </MDBTable>
    </>
      
  );
}