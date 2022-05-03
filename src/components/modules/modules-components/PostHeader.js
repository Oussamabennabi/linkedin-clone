import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import changeModuleHeaderTitle from '../../../helpers/moduleHelper'
import { MODULE_REDUCER_ACTIONS } from '../../../store/module-slice'
import styled from 'styled-components'
import { POST_ACTIONS, POST_REDUCER_ACTIONS } from '../../../store/postData-slice'
const PostHeader = () => {
  const dispatch = useDispatch()
  const { selectedModule } = useSelector(s => s.module)
  return (
    <Container>
      <h1>{changeModuleHeaderTitle(selectedModule)}
      </h1>
      <VscChromeClose onClick={() => {
        dispatch(MODULE_REDUCER_ACTIONS.hideModule())
        dispatch(POST_REDUCER_ACTIONS.clearPost({
          type: POST_ACTIONS.clearAll
        }))
      }} />
    </Container>
  )
}

export default PostHeader
const Container = styled.header`
  display: flex;
  padding:  12px 24px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  h1 {
    color: var(--black);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }
  svg {
    font-size: 40px;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    padding: .5rem;
    color: var(--grey);
    cursor: pointer;
    &:hover {
      background-color: rgba(0,0,0,0.1);
    }
  }
`