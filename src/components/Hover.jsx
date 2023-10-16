import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function Hower() {
  return (
    <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://i.pinimg.com/originals/18/f2/95/18f295087673ddd528d9a714688f666c.gif' />
      <MDBCardOverlay>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText>
        <MDBCardText>Last updated 3 mins ago</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
}