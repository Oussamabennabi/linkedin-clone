import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'

//ACTIONS
import { MODULE_REDUCER_ACTIONS, SELECTED_MODULE_ACTIONS } from '../../store/module-slice'
// Modules
import MainModule from './MainModule'
import PhotoModule from './PhotoModule'
import VideoModule from './VideoModule'
// Modules-components
import PostFooter from './modules-components/PostFooter'
import PostHeader from './modules-components/PostHeader'
import AreYouSureAboutThat from './modules-components/AreYouSureAboutThat'
import { POST_ACTIONS, POST_REDUCER_ACTIONS } from '../../store/postData-slice'


const PostModule = () => {
  const dispatch = useDispatch()
  const { isHidden, selectedModule } = useSelector(s => s.module)



  document.body.style.overflowY = isHidden ? '' : 'hidden'
  const moduleRef = useRef()
  const handleClickOutside = useCallback((event) => {
    if (moduleRef.current && !moduleRef.current.contains(event.target)) {
      dispatch(MODULE_REDUCER_ACTIONS.hideModule())

    }
  }, [moduleRef, dispatch])
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);
  if (isHidden) {
    dispatch(POST_REDUCER_ACTIONS.clearPost({type:POST_ACTIONS.clearAll}))
  }
  return (
    <>
      {!isHidden &&
        <Wrrapper>
          <Container
            ref={moduleRef}>
            <PostHeader />
            <PostBody selectedModule={selectedModule}>

              {selectedModule === SELECTED_MODULE_ACTIONS.main ?
                <MainModule /> :
                selectedModule === SELECTED_MODULE_ACTIONS.photo ?
                  <PhotoModule /> :
                  selectedModule === SELECTED_MODULE_ACTIONS.video ?
                    <VideoModule /> :
                    ""
              }
            </PostBody>
            <PostFooter />
            {/* <AreYouSureAboutThat/> */}
          </Container>
        </Wrrapper>
      }
    </>
  )
}


export default PostModule
const Wrrapper = styled.div`
background-color:rgba(0,0,0,.75);
position: fixed;
z-index: 1000000;
inset: 0;
height: 101vh;
animation: fadeIn .25s;
`
const Container = styled.main`
  background-color: white;
  position: relative;
  margin: auto;
  width: 100%;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
  margin-top: 44px;
  border-radius: .6rem;
  max-height: 90%;
  max-width: 552px;
  animation: fadeIn .25s;
`

const PostBody = styled.section`
position: relative;
`
