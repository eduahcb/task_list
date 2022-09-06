import React, { ReactElement } from 'react'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'

import './styles/global.scss'

const App = (): ReactElement => (
  <>
    <Header />
    <TaskList />
  </>
)

export default App
