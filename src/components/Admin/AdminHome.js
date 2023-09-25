import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Adminav from './AdminNav';

export default function AdminHome() {
  return (
    <>
    <Adminav/>
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      // src="https://avatars.githubusercontent.com/u/141824580?v=4"
                      
                      
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Admin</MDBCardTitle>
                   

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                     
                      
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  );
}