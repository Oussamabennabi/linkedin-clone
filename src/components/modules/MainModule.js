import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FaGlobeAmericas } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { POST_ACTIONS, POST_REDUCER_ACTIONS } from '../../store/postData-slice'

const MainModule = () => {
  const { userName, photoUrl } = useSelector(s => s.user)
  const dispatch = useDispatch()
  const { editorText, document, photo, showPhoto, showDocument, video, showVideo } = useSelector(s => s.postData)
  
  return (
    <Container>
      <div className='user'>
        < img className="user-image" src={photoUrl ? photoUrl : '/images/icons/user.svg'} alt="user" />
        <div>
          <h1>{userName}</h1>
          <button><FaGlobeAmericas /> Anyone <AiOutlineCaretDown /></button>
        </div>
      </div>
      <textarea
        autoFocus={true}
        value={editorText}
        onChange={(e) => dispatch(POST_REDUCER_ACTIONS.setPostData({ type: POST_ACTIONS.text, data: e.target.value }))}
        placeholder='What do you want to talk about?' />
      {showPhoto &&
        <div className='img-video-container'>
          <img src={URL.createObjectURL(photo)} />
          <span onClick={() => dispatch(POST_REDUCER_ACTIONS.clearPost({ type: POST_ACTIONS.photo }))} className='close-photo'><VscChromeClose /></span>
        </div>
      }
      {showVideo &&
        <div className='img-video-container'>
          <video src={URL.createObjectURL(video)} />
          <span onClick={() => dispatch(POST_REDUCER_ACTIONS.clearPost({ type: POST_ACTIONS.video }))} className='close-photo'><VscChromeClose /></span>
        </div>
      }

      <button className='add-hashtags'>Add hashtag</button>
    </Container>
  )
}

export default MainModule

const Container = styled.main`
  .user {
    display: flex;
  padding: 12px 24px;

    justify-content: start;
    align-items: center;
    gap: 1rem;
    .user-image{
      width: 48px;
      aspect-ratio: 1;
      border-radius: 50%;
    }
    div {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .2rem;
        color: var(--grey);
        transition: all .2s ease-in-out;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,1);
        border-radius: 1rem;
        margin-top: .3rem;
        font-weight: 600;
        padding: .45rem .6rem;
        font-size: 14px;
        &:hover{ 
          box-shadow: inset 0 0 0 2px;
          background-color: rgba(0,0,0,.07);
        }
      }
    }
  }
  textarea {
    margin: 1rem 0;
    resize: none; 
    padding: 12px 24px;
    width: 100%;
    height: 120px;
    font-size: 16px;
    font-family: inherit;
    outline: none;
    border: none;
  }
  .add-hashtags {
    color: var(--blue);
    font-weight: 600;
    padding: .4rem .6rem;
    margin: 7px 24px;
    border-radius: .2rem;
    transition: all .2s ease-in-out;
    &:hover {
    background-color: rgba(10, 102, 194,.1);
    }
  }
  .img-video-container {
    position: relative;
        min-height: 148px;
    max-height:300px ;
    overflow:auto;
    img,video {
      width: 100%;
      border-radius: .6rem;
      height: 100%;
            object-fit: contain;
      aspect-ratio: 16/9;
      outline: 1px solid rgba(0,0,0,.07);
    }
    span {
      position: absolute;
      top: 10px;
      border-radius: 50%;
      right: 10px;
      background-color: rgba(0,0,0,.5);
      cursor: pointer;
      padding: 5px;
      display: flex;

      transition: all .13s ease-in-out;
      &:hover {
      background-color: rgba(0,0,0,.8);
      }
      svg {
        color: white;
        font-size: 20px;
      }
    }
  }

`