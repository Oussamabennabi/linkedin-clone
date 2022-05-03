import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const UserInfoCard = ({ hide }) => {
  const { userName, photoUrl } = useSelector(s => s.user)

  return (
    <Container hide={hide}>
        <img src='/images/card-bg.svg' />
      <div className="camera">
        
        <img src={photoUrl ? photoUrl : '/images/camera.svg'} />
        </div>
      <h1>Welcome, {userName.split(" ")[0]}!</h1>
        <button>Add a photo</button>
        <div className='card connections'>
          <small>Connections <img src='/images/icons/connections.svg' /></small>
          <h5>Grow your network</h5>
        </div>
        <div className='card exclusive'>
          <small>Access exclusive tools & insights</small>
          <span><img src="/images/icons/premium.svg" />Try Premium for free</span>
        </div>
        <span className='card my-items'><img src='/images/icons/bookmark.svg' /> My items</span>
    </Container>
  )
}

export default UserInfoCard
const Container = styled.div`
  box-shadow: 0 0px 1px var(--grey);
  margin-bottom: .7rem;
  padding-top: 0;
  overflow: hidden;
  text-align: center;
  background-color: white;
  border-radius: .6rem;
  img:first-child {
    width: 100%;
    height: 56.25px;
  }
  .camera {
    margin: -38px auto 12px;
    img {
      width: auto;
      transform: scale(1.1);
      background-color: #eeeeee;
      border-radius: 50%;
      padding: 0.4rem;
      cursor: pointer;
    }
    text-align: center;
  }
  button {
    text-align: center;
    font-size: 12px;
    margin-top: .7rem;
    cursor: pointer;
    color: var(--blue);
    margin-bottom: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .card {
    img {
      width: 16px;
    }
    cursor: pointer;
    padding: .3rem .7rem;
    margin-bottom: 1rem;
    &:hover {
      background-color: rgba(0,0,0,0.08);
    }
  }
  .connections {
    small {
      color: var(--grey);
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1;
      height: 22px;
    }
    h5 {
      color: var(--black);
      line-height: 1;
      font-size: 14px;
      text-align: left;
    }

  }
  .exclusive {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    flex-direction: column;
    padding-top: .4rem;
    border-top:1px solid rgba(0,0,0,0.28) ;
    border-bottom:1px solid rgba(0,0,0,0.28) ;
    font-size: 12px;
    margin-bottom: 0;
    span {
      height: 28px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: bold;
      img{ 
        margin-right: .2rem;
      }

    }
    &:hover {
      span {
        color: var(--blue);
      }
    }
  }
  .my-items {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height:27px;
    font-weight: bold;
    margin: 0;
    padding: 1.5rem 1rem ;
    font-size: 14px;
    img {
      margin-right: .2rem;
    }
  }

  @media screen and (max-width: 768px){
    .my-items,.exclusive {
      display: ${({hide})=>hide ? "none":"flex"};
    }
    .connections {
      display: ${({ hide }) => hide ? "none" : "block"};

    }
  }
`