import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { POST_ACTIONS, POST_REDUCER_ACTIONS } from '../../store/postData-slice'
import styled from 'styled-components'
const VideoModule = () => {
  const dispatch = useDispatch()
  const {video } = useSelector(s => s.postData)
  
  return (
    <Container>
      {!video &&
        <input
          data-text='Select video to share'
        type="file"
        accept='video/*'
          onChange={(e) => dispatch(POST_REDUCER_ACTIONS.setPostData({ type: POST_ACTIONS.video, data: e.target.files[0] }))}
        />
      }
      {video &&
        <video controls src={URL.createObjectURL(video)} >
          <p>{video.name}</p>
        </video>
      }
    </Container>
  )
}

export default VideoModule

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 148px;
    width: 100%;
    max-height:600px ;
    overflow:auto;
    video {
      width: 100%;
      object-fit: contain;
      aspect-ratio: 16/9;
      background-color: black;
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
  

`