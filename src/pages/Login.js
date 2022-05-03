import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {getUserAuth, signInAPI} from '../actions/userAPI'

const Login = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserAuth())
  }, [dispatch])
  return (
    <Container>
      <Nav>
        <img className="logo" src='/images/icons/linkedin-logo.svg' alt='linkedin' />
        <div>
          <button
            onClick={() => dispatch(signInAPI())}
          >Join now</button>
          <button
            onClick={() => dispatch(signInAPI())}
          >Sign In</button>
        </div>
      </Nav>
      <Body>
        <div>
          <h1>Welcome to your professinal community</h1>
          <button
            onClick={() => dispatch(signInAPI())}
          ><img src='/images/icons/google.svg' alt='google svg' /> Sign in with Google</button>
        </div>
        <img src='/images/home-image.svg' />
      </Body>
    </Container>
  )
}

export default Login
const Container = styled.header`
  max-width: 1128px;
  margin: auto;
  padding: 0 1rem;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  z-index: 1000;
  position: relative;
  .logo {
    width: 135px;
  }
  div {
    display: flex ;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    button{ 
      font-size: 18px;
      font-weight:bold ;
      background-color: transparent;
      border-radius: 2rem;
      padding: .5rem 1rem;
      cursor: pointer;
      transition: all .2s ease-in-out;
    }
    button:first-child {
      color:var(--grey);
      &:hover {
        background-color: rgba(0,0,0,0.1);
      }
    }
    button:nth-child(2) {
      background-color: white;
      color: var(--blue);
      box-shadow: inset 0 0 0 1px var(--blue);
      &:hover {
        background-color: rgba(10, 102, 194,.1);
      box-shadow: inset 0 0 0 2px var(--blue);

      }
    }
  }
`
const Body = styled.div`

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 3rem;
  div {
    flex: 1;
  }
  img {
    flex: 1;
    width: 60%;
    
  }
  h1 {
    color: #8f5849;
    margin-bottom: 4rem;
    font-size: 56px;
    font-weight: 200;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: 1rem 3rem;
    border-radius: 2rem;
    background-color: #eeeeee;
    border:2px solid;
    cursor: pointer;
    img {
      width: 1rem;
    }
  }
  @media screen and (max-width:966px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    div {
      text-align: center;
      
      button {
        margin: auto;
        margin-bottom: 2rem;
      }
    }
    img {
      width: 100%;
    }
    
  }
`