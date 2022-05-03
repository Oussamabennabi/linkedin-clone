import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
const FooterLinks = () => {
  return (
    <Links>
      <a href="#" >About</a>
      <a href="#" >Accessibility</a>
      <a href="#" >Help Center</a>
      <a href="#" >Privacy & Terms <IoIosArrowDown/></a>
      <a href="#" >Ad Choices</a>
      <a href="#" >Advertising</a>
      <a href="#" >Business Services<IoIosArrowDown /></a>
      <a href="#" >Get the LinkedIn app</a>
      <a href="#" >More</a>
      <p> <ReactSVG src='/images/icons/linkedin-footer-logo.svg'/>LinkedIn Corporation © 2022</p>
    </Links>
  )
}

export default FooterLinks
const Links = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding:2rem 2rem;
  a {
    font-size: 12px;
    color: var(--grey);
    text-decoration: none;
    &:hover {
      color: var(--blue);
      text-decoration: underline;
    }
  }
  p {
    svg {
      color: var(--blue);
    }
    font-size: 12px;
    display: flex;
    gap: .5rem;
    text-align: center;
  }
`