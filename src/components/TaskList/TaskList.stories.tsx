import React, { ReactElement } from 'react'

import TaskList from './TaskList'

export default {
  title: 'Components/TaskList',
  component: TaskList
}

export const usage = (): ReactElement => (
   <div style={{ marginTop: '10rem' }}>
     <TaskList />
   </div>
)
