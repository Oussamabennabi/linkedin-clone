import React from 'react'
import styled from 'styled-components'

const UserCard = (
  { userImage,
    backdropImage,
    name,
    skills,
    aboutUser }) =>
{

  return (
    <Wrapper>
      <img className="backdrop" src={backdropImage} />
      <img className="user-image" src={ userImage}/>
        <h1>{ name}</h1>
        <p>{skills}</p>
        <small>{aboutUser}</small>
        <button>Connect</button>
      
    </Wrapper>
  )
}

export default UserCard
const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
    box-shadow: 0 0 3px rgba(0,0,0,.3);
  flex-basis: calc(41.3% - 40px);
    max-width: calc(29.8% );
    overflow: hidden;
  background-color: white;
  height: 315px;
  border-radius: 0.6rem;
  text-align: center;
    margin-bottom: 16px;
  .backdrop {
    width: 100%;
    height: 65px;
  }
  .user-image {
    width: 104px;
    border-radius: 50%;
    margin: -54px auto 12px;
    aspect-ratio: 1;
    object-fit: cover;
  }
  h1,p,small {
        overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2; 
  }
  h1 ,p{
    font-size: 14px;
    padding: 0 1.7rem;
 
  }
  p,small{
    padding: 0 1.7rem;
    color: var(--grey);
  }
  button {
    cursor: pointer;
    font-weight: 600;
    box-shadow: inset 0 0 0rem .06rem var(--blue);
    transition: all .2s ease-in-out;
    color: var(--blue);
    padding: .4rem ;
    border-radius: 2rem;
    width: calc(100% - 1.7rem);
    margin-bottom: .9rem;
    margin-top: .9rem;
    &:hover{ 
      background-color: rgba(10, 102, 194,.14);
    box-shadow: inset 0 0 0px .1rem var(--blue);
    }
  }
`