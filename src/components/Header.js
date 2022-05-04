import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
import { useDispatch, useSelector } from 'react-redux';
import { signOutAPI } from '../actions/userAPI';

const Header = () => {
  const [value, setValue] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const { userName, photoUrl } = useSelector(s => s.user)
  const dispatch = useDispatch()
  return (
    <Container className='container'>
      <Content className='content'>
        {/* LEFT SIDE */}

        <div className='left-side'>
          <NavLink to="/home">
            <ReactSVG className="logo" src="/images/icons/logo.svg" />
          </NavLink>
          <div className='input-field'>
            <span>
              <ReactSVG src='/images/icons/search-icon.svg' />
            </span>
            <input
              placeholder='Search'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className='search-block item' >
            <ReactSVG src='/images/icons/search-icon.svg' />
            <span>Search</span>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='right-side'>
          <NavLink className='item' to="/home">
            <ReactSVG src='/images/icons/nav-home.svg' />
            <span>Home</span>
          </NavLink>
          <NavLink className='item' to="/mynetwork">
            <ReactSVG src='/images/icons/nav-network.svg' />
            <span>My Network</span>
          </NavLink>
          <NavLink className='item' to="/jobs">
            <ReactSVG src='/images/icons/nav-jobs.svg' />
            <span>Jobs</span>
          </NavLink>
          <NavLink className='item' to="/messaging">
            <ReactSVG src='/images/icons/nav-messaging.svg' />
            <span>Messaging</span>
          </NavLink>
          <NavLink className='item' to="/notification">
            <ReactSVG src='/images/icons/nav-notifications.svg' />

            <span>Notifications</span>
          </NavLink>
          <NavLink

            onClick={() => setIsHidden(!isHidden)}
            className='item user'
            to="/user">
            {photoUrl ?
              <img src={photoUrl} /> :
              <ReactSVG src='/images/icons/user.svg' />
            }

            <span>Me ▼</span>
          </NavLink>
          <Profile className='profile' isHidden={isHidden}>
            <div className='user'>
              {photoUrl ?
                <img src={photoUrl} /> :
                <ReactSVG src='/images/icons/user.svg' />
              }
              <div>
                <h2>{userName}</h2>
                <p>Student at Abou Bekr Belkaid University of Tlemcen</p>
              </div>
            </div>
            <button>View Profile</button>
            <div className='account'>
              <h1>Accout</h1>
              <a href='#'>
                <span>Try Premiem for free</span>
              </a>

              <a href='#'>
                <h6>Settings & Privacy</h6>
              </a>
              <a href='#'>
                <h6>Help</h6>
              </a>
              <a href='#'>
                <h6>Languages</h6>
              </a>
            </div>
            <div className='manage'>
              <h1>Manage</h1>
              <a href='#'>
                <h6>Postes and Activity</h6>
              </a>

              <a href='#'>
                <h6>Job Posting Acount</h6>
              </a>
            </div>
            <a
              onClick={() => dispatch(signOutAPI())}
              href='#'>
              Sign Out
            </a>
          </Profile>
          <NavLink className='item' to="/work">
            <ReactSVG src='/images/icons/nav-work.svg' />
            <span>work ▼</span>
          </NavLink>
          <NavLink className='item' to="/postjob">
            <span>Post a Job</span>
          </NavLink>
        </div>

      </Content>
    </Container>
  )
}

export default Header

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 52px;
  background-color: white;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
`
const Profile = styled.div`
  position: absolute;
  inset: 0;
  top: calc(52px + 6px);
  left: 100%;
  z-index: 1000;
  transform: translateX(-175%);
  background-color: white;
  border-radius: .4rem;
  box-shadow: 0 0 4px solid rgba(0,0,0,0.3);
  width: 264px;
  overflow: hidden;
  height: ${({ isHidden }) => isHidden ? '0px' : "400px"};
  transition: all .16s ease-in-out;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  padding: ${({ isHidden }) => isHidden ? '0 1rem' : "1rem"};
  .user {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: .2rem;
    img {
      width: 64px;
      border-radius: 50%;  
    }
    svg {
      width: 64px;
      border-radius: 50%;
    }

  }
  button {
    width: 100%;
    outline: 2px solid var(--blue) ;
    padding: .3rem 0;
    margin: 1rem 0;
    border-radius: 2rem;
    color: var(--blue);
    transition: all .2s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: rgba(1, 69, 137,.1);
    }
  }
   a {
      text-decoration: none;
      color: var(--grey);
      &:hover{
        text-decoration: underline;
      }
    }
  .account,.manage {
    margin-bottom: 1rem;
    width: 100%;
    h1 {
      margin-bottom: .1rem;
      padding-top: 0.3rem;
      border-top: 1px solid rgba(0,0,0,0.3);
    }
    a h6{
      font-weight: normal;
      padding: .2rem 0;
      color: var(--grey);
    }
    
  }

`
const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  justify-content: center;
  .item.search-block {
    height: 100%;
      svg {
        transform: scale(1.38);
        margin-bottom: .2rem;
        color: var(--grey);
      }
    
  }

  .item {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
      width: 80px;
      span {
        color: var(--grey);
        font-size:12px ;
      }
      svg {
        width: 24px;
      }
      &:hover {
        span {
          color: var(--black);
        }
        svg {
          fill: var(--black);
        }
      }

    }
  .right-side .item img,.left-side .item img {
    width: 1.5rem;
  }  
  .right-side,.left-side {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-side {
    width: 100%;
    justify-content: start;
    .search-block {
        display: none;
      }
    .logo {
      width: 34px;
      height: 34px;
    }
    .input-field {
        position: relative;
        
        height: 34px;
        width: 60%;
        input:focus {
          width: 130%;
        }
        margin-left: .5rem;
        transition: all .2s ease;
      span {
        svg {
          color: var(--grey);
        }
        position: absolute;
        top: 50%;
        left: 17px;
        transform: translateY(-50%);
        transition: all .2s ease;
      }
      input {        
        height: 100%;
        padding-left: 41px;
        width: 100%;
        font-family: inherit;
        background-color: var(--lightGrey);
        transition: all .2s ease;
        border-radius: .2rem;
        &:focus {
            box-shadow:0px 1px 2px rgba(0, 0, 0, 0.4);
      }
      &::placeholder {
        transition: all .2s ease;
        font-size: 14px;
      }
        &:focus::placeholder {
          font-size: 16px;
        }
      }
    }
  }
  .right-side {
      height: 100%;
      .item.user svg,.item.user img{
        border-radius: 50%;
      }
      .item.user img {
        width: 28px;
      }
      .item.active {
      }
  }
  @media screen and (max-width:1027px){
    justify-content: start;
    .left-side {
      height: 100%;
      width: fit-content;
      .search-block {
        display: flex;
      }
      .input-field {
        height: 100%;
        margin-left: .4rem;
        display: none;
      }
    }
  }
  @media screen and (max-width:854px){
    .item {
      width: 48px;
      margin-inline: 12px;
      span {
        display: none;
      }
    }
    
  }
  @media screen and (max-width:749px){
    .item {
      margin-inline: 2px;
    }
  }
  @media screen and (max-width:400px){
    .item {
      width: 38px;
    }
    
  }
`
