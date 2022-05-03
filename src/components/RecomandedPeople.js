import React from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'
const RecomandedPeople = () => {
  return (
    <Container>
      <h1>oussama, want even more updates?</h1>
      <p>Add these people you may know to your network, and you'll see their updates in the feed.</p>
      <Flex>
        <UserCard 
          userImage={'/images/users/user1.jpeg'}
          backdropImage="/images/card-bg.svg"
          name="D Nourine Hasnaoui"
          skills="Web Developer | ReactJs| CSS |HTML | Js "
          aboutUser="Abou Beker Belkaid"
          />
        <UserCard
          userImage={'/images/users/user2.jpeg'}
          backdropImage="/images/card-bg.svg"
          name="Mahi EDDINE"
          skills="Custommer support "
          aboutUser="Abou Beker Belkaid"
        />
        <UserCard
          userImage={'/images/users/user2.jpeg'}
          backdropImage="/images/card-bg.svg"
          name="Zouhir Fethi Benabbou"
          skills="CK{A, AD} | RHCSA | System Engineer "
          aboutUser="Recently active on the feed"
        />
        <UserCard
          userImage={'/images/users/user3.jpeg'}
          backdropImage="/images/card-bg.svg"
          name="D Hamdi Mohhamed "
          skills="Web Developer | CSS |HTML | Js "
          aboutUser="Knolegde and informations"
        />
      </Flex>
      <button className='discover-more'>Discover more</button>

    </Container>
  )
}

export default RecomandedPeople
const Container = styled.div`
overflow: hidden;
  padding-top: 1.4rem ;
  box-shadow:0 0 3px rgba(0,0,0,0.2) ;
  background-color: white;
  border-radius: .6rem;
  h1,p {
    text-align: center;
    padding: 0 1rem;
  }
  h1 {
    font-size: 20px;
    margin-bottom: .7rem;
    font-weight: 400;
  }
  p {
    font-size: 14px;
    color: var(--grey);
    margin-bottom: 1.6rem;
  }
  .discover-more {
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.2);
    padding: .7rem;
    color: var(--blue);
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
      background-color: rgba(10, 102, 194,0.2);
    }
  }

`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    padding: 0 1rem;
  flex-wrap: wrap;
`