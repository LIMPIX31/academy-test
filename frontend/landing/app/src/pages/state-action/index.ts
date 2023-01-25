import { createElement } from 'react'
import StateActionPage from '@landing/state-action-page'

const WrongStateAction = () =>
  createElement('h1', { children: createElement(StateActionPage) })

export default WrongStateAction
