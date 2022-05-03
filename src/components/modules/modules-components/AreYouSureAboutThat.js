// get it

import React from 'react'
import styled from 'styled-components'
import PostHeader from './PostHeader'
const AreYouSureAboutThat = () => {
  return (
    <Container>
      <PostHeader/>
    </Container>
  )
}

export default AreYouSureAboutThat
const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: white;
  top: 50%;
  width: 55%;
  border-radius: .6rem;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
  margin:0 auto ;

`