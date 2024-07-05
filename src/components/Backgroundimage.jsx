import React from 'react'
import backgroundimage from "../assets/login.jpg"
import styled from 'styled-components';
export default function Backgroundimage() {
  return (
    <Container>
        <img src = {backgroundimage} alt = "background"/>
    </Container>
  );
}


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
