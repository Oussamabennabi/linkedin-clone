import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { POST_ACTIONS, POST_REDUCER_ACTIONS } from '../../store/postData-slice'
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'
const PhotoModule = () => {

  const dispatch = useDispatch()

  const { photo } = useSelector(s => s.postData)
  function handleFileInputChange(photo) {
    dispatch(POST_REDUCER_ACTIONS.setPostData({ type: POST_ACTIONS.photo, data: photo }))
  }
  return (
    <Container>
      {!photo &&
        <input
          data-text='Select images to share'
        type="file"
        accept="image/*"
        onChange={(e) => handleFileInputChange(e.target.files[0])}
        />
      }
      {photo && <>
        <img src={URL.createObjectURL(photo)} alt='' />
        <span onClick={() => dispatch(POST_REDUCER_ACTIONS.clearPost({ type: POST_ACTIONS.photo }))} className='close'><VscChromeClose /></span>
      </>
      }
    </Container>
  )
}
export default PhotoModule

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 148px;
    width: 100%;
    max-height:600px ;
    overflow:auto;
    img {
      width: 100%;
      height: 100%;
    }
    input::-webkit-file-upload-button {
      visibility: hidden;
    }
    input::before {
      content: attr(data-text);
      display: inline-block;
      background: transparent;
      border: none;
      color: var(--blue);
      border-radius: 3px;
      outline: 2px solid;
      padding: .4rem 1rem;
      border-radius: 0.6rem;
      margin-left: 1rem;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      font-weight: 700;
      font-size: 18px;
      transition: all .2s ease-in-out;
    }
    input:hover::before {
      background-color: rgba(10, 102, 194,.2);
    }
      span.close {
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
  

`