import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { MODULE_REDUCER_ACTIONS } from '../store/module-slice'

const StartNewPost = () => {
  const { photoUrl } = useSelector(s => s.user)
  const { isLoading } = useSelector(s => s.postData)

const dispatch = useDispatch()
  return (
    <Container>
      <div className='post'>
        <img src={photoUrl? photoUrl:'/images/icons/user.svg'} />
        <button
          onClick={()=>dispatch(MODULE_REDUCER_ACTIONS.showModule())}
          className='post-btn'
          disabled={isLoading}
        >Start a post</button>
      </div>
      <div className='icons'>
        <button><img src='/images/icons/photo.svg' /> Photo</button>
        <button><img src='/images/icons/video.svg' /> Video</button>
        <button><img src='/images/icons/events.svg' /> Events</button>
        <button><img src='/images/icons/article.svg' /> Write article</button>
      </div>
    </Container>
  )
}

export default StartNewPost
const Container = styled.section`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 2px  var(--grey);
  border-radius: .6rem;
  background-color: white;
  padding: .4rem .5rem;
  padding-top: .6rem;
  .post {
    display: flex;
    justify-content: flex-start;
      width: 100%;
    align-items: center;
    img{ 
      width:48px ;
      aspect-ratio: 1;
      border-radius: 50%;
      margin-right: .7rem;
      margin-left: .4rem;
    }
    .post-btn {
      width: 100%;
      margin-right: .7rem;
      border-radius: 2rem;
      text-align: left;
      border:1px solid  rgba(0,0,0,0.2);
      color: var(--grey);
      font-size: 14px;
      cursor: pointer;
      font-weight: 600;
      padding:  16px;
      transition: all .15s ease-in-out;
      &:hover {
        background-color: rgba(0,0,0,0.06);
      }
    }
    .post-btn:disabled {
      cursor: not-allowed;
    }
  }
  .icons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: .4rem;
    border-radius: .3rem;
    button {
        color: var(--grey);
        font-size: 14px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all .2s ease-in-out;
        padding: .5rem ;
        &:hover {
          background-color: rgba(0,0,0,0.1);
        }
      img {
        width: 24px;
        margin-right: .5rem;
      }
    }
  }
`