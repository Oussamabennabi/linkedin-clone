import React, { useState } from 'react'
import styled from 'styled-components'

const MessengerPopUp = () => {
  const [hideBody, setHideBody] = useState(true)

  return (
    <Container isHidden={hideBody}>
      <Header >
        <div onClick={() => setHideBody(p => !p)}>
          <img src='/images/icons/user.svg' alt='user' />
          <span className='green-dot'></span>

          <span>Messaging</span>
        </div>
        <div className='tools'>
          <img src='/images/icons/three-dots.svg' alt="messenger"  />
          <img src='/images/icons/edit.svg' alt="messenger"  />
          <img src='/images/icons/down-icon.svg'  alt="messenger" onClick={() => setHideBody(p => !p)}/>
        </div>
      </Header>
      <MessengerBody isHidden={hideBody}>
        oussama
      </MessengerBody>
    </Container>
  )
}

export default MessengerPopUp
const Header = styled.header`
  height: 48px;
  display: flex;
  cursor: pointer;
  background-color: white;
  transition: all .1s ease-in-out;
  border-radius: .6rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: .3rem;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: rgba(255,255,255,.9);
  }
  div:first-child {

    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    gap: .2rem;
    img {
      width: 32px;
      border-radius: 50%;
    }
  }
  .tools {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .1rem;
    img {
      width: 31px;
      border-radius: 50%;
      padding: .5rem;
      transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);
      &:hover{
        background-color: rgba(0,0,0,0.07);
      }
    }
  }
`
const Container = styled.div`
  max-height:calc(100vh - 104px);
  width: 288px;
  /* position: absolute; */
  inset: 0;
  top: 104px;
  left: 100%;
  transform: translateX(-100%);
box-shadow: 0 0 2px rgba(0,0,0,0.2);

`
const MessengerBody = styled.div`
  height: ${({ isHidden }) => isHidden ? "0px" : "calc(100vh - 104px - 38px"};
  width: 100%;
  height: 100%;
  background-color: blue;
  transition: all .2s ease-in-out;
`