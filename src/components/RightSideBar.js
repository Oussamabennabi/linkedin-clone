import React from 'react'
import styled from 'styled-components'

import { BsInfoSquareFill } from 'react-icons/bs'
import { HiOutlineArrowRight } from 'react-icons/hi'
// Commponents
import FooterLinks from '../components/Footer/FooterLinks'
import FooterPhoto from '../components/Footer/FooterPhoto'
import SmallUserCard from '../components/userCard/SmallUserCard'
const RightSideBar = () => {
  return (
    <RightBar>
      
        <div className='aside-content'>
          <h1>Add to your feed <BsInfoSquareFill /></h1>
          <div className='cards'>

            <SmallUserCard
              className="user-card"
              userImage={'/images/users/user1.jpeg'}
              userName={'imen lacost🇩🇿'}
              aboutUser="Ingénieur en génie chimique"
            />
            <SmallUserCard
              className="user-card"
              userImage={'/images/users/user3.jpeg'}
              userName={'Farida'}
              aboutUser="Management"
            />
            <SmallUserCard
              className="user-card"
              userImage={'/images/users/user2.jpeg'}
              userName={'Oussama Ben'}
              aboutUser="web Developer"
            />
          </div>
          <h2>View all recommendations <HiOutlineArrowRight /> </h2>
        </div>
        <footer className='asdie-footer'>
          <FooterPhoto className="footer-photo" url='footer1.png' />
          <FooterLinks />
        </footer>
      
    </RightBar>
  )
}

export default RightSideBar
const RightBar = styled.aside`
grid-area: rightsidebar;
max-width: 576px;
width: 100%;
margin-inline: auto;
  .aside-content {
    background-color: white;
    border-radius: .6rem;
    box-shadow: 0 0px 1px var(--grey);
    padding: 1rem;
    margin-bottom: .7rem;
    h1,h2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      svg {
        color: var(--grey);
        font-size: 13px;
        cursor: pointer;
      }
    }
    h2 {
      justify-content: start;
      gap: .3rem;
      transition: all .2s ease-in-out;
      color: var(--grey);
      cursor: pointer;
      width: fit-content;
      font-size: 14px;
      border-radius: .2rem;
      padding: .3rem;
      margin-top: 1rem;
      &:hover {
        background-color: rgba(0,0,0,0.1);
      }
    }
      .cards {
        margin-top: 1rem;
        display: flex;
        justify-content: start;
        flex-direction: column;
        gap: 1rem;
      }
}
footer {
  text-align: center;
}
@media screen and (max-width:1200px){
    margin: 0;
}
@media screen and (max-width:992px){
    max-width: 493px;
    width: 100%; 
}
@media screen and (max-width: 768px){
  margin:auto;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  max-width: 576px;
}
`