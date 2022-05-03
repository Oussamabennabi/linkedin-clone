import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
const DiscoverCard = ({ hide}) => {
  return (
    <Container hide={hide}>
        <button>Groups</button>
        <button>Events<AiOutlinePlus /></button>
        <button>Followed Hashtags</button>
        <button className='discover-more'>Discover more</button>
    </Container>
  )
}

export default DiscoverCard
const Container = styled.div`
  box-shadow: 0 0px 1px var(--grey);
  margin-bottom: .7rem;
  overflow: hidden;
  text-align: center;
  background-color: white;
  border-radius: .6rem;
    button {
      color: var(--blue);
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-weight: bold;
      margin: .8rem 0;
      padding: 0 .7rem;
      svg {
        border-radius: 50%;
        padding: .2rem;
        font-size: 1.6rem;
        transition: all .2s ease-in-out;
        &:hover {
          background-color: rgba(0,0,0,0.08);
        }
      }
      &:hover {
        text-decoration: underline;
      }
    }
    .discover-more {
      color: var(--grey);
      text-align: center;
      justify-content: center;
      margin-bottom: 0;
      font-size: 14px;
      padding: 1rem;
      transition: all .2s ease-in-out;
              &:hover {
        background-color: rgba(0,0,0,0.08);
      }
    }
    @media screen and (max-width: 768px){
      display: ${({ hide }) => hide ? "none" : "block"};
      }
    
`