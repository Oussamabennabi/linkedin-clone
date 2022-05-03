import React from 'react'
import styled from 'styled-components'
import { BsPlusLg } from 'react-icons/bs'
const SmallUserCard = ({ userImage, userName, aboutUser }) => {
  return (
    <Wrapper>
      <img src={userImage} alt="user" />
      <div>
        <h3>{userName}</h3>
        <p>{aboutUser}</p>
        <button><BsPlusLg /> Follow</button>
      </div>
    </Wrapper>
  )
}

export default SmallUserCard
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    width: 48px;
  cursor: pointer;

    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
  div {
    margin-left: 1rem;
    display: flex;
    justify-content: start;
    align-items: flex-start;
  flex-direction: column;
    gap: .3rem;
    h3 {
      font-size: 14px;
  cursor: pointer;
      font-weight: 600;
      color: var(--black);
    }
    p {
      color: var(--grey);
      font-size: 12px;
  cursor: pointer;
    }
    button {
      font-weight: 600;
      font-size: 16px;
      padding: .3rem 1rem;
      border-radius: 2rem;
      color: var(--grey);
      cursor: pointer;
      box-shadow:inset 0 0 0px 1px var(--grey);
      transition: all .2s ease-in-out;
      &:hover {
      box-shadow:inset 0 0 0px 2px var(--grey);
      background-color: rgba(0,0,0,0.08);
      }
      svg {
        padding-right:.2rem;
      }
    }
  }

`