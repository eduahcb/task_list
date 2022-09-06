import React, { ReactElement, useState } from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import style from './TaskList.module.scss'
import Task from '../../types/Task'

function TaskList (): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateNewTask (): void {
    if (newTaskTitle === '') return

    const newTask: Task = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion (id: number): void {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        const newTask: Task = { ...task, isComplete: !task.isComplete }

        return newTask
      }

      return task
    })

    setTasks(newTasks)
  }

  function handleRemoveTask (id: number): void {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <section className={`${style['task-list'] as string} ${style.container as string}`}>
      <header>
        <h2>Minhas tasks</h2>

        <div className={style['input-group']}>
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? style.completed : ''} data-testid="task">
                <label className={style['checkbox-container']}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                    data-testid="checkbox"
                  />
                  <span className={style.checkmark}></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}

        </ul>
      </main>
    </section>
  )
}

export default TaskList
