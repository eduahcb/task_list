import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TaskList from './TaskList'

describe('TaskList', () => {
  test('should not be able to add a new task', async () => {
    render(<TaskList />)

    const newTaskInput = screen.getByPlaceholderText('Adicionar novo todo')
    const newTaskButton = screen.getByRole('button')

    await userEvent.click(newTaskInput, '')
    await userEvent.click(newTaskButton)

    expect(screen.queryByText('new challenge')).not.toBeInTheDocument()
  })

  test('should be able to add a new task', async () => {
    render(<TaskList />)

    const newTaskInput = screen.getByPlaceholderText('Adicionar novo todo')
    const newTaskButton = screen.getByRole('button')

    await userEvent.type(newTaskInput, 'new task')
    await userEvent.click(newTaskButton)

    expect(screen.getByText('new task')).toBeInTheDocument()
  })

  test('should be able to remove a task', async () => {
    render(<TaskList />)

    const newTaskInput = screen.getByPlaceholderText('Adicionar novo todo')
    const newTaskButton = screen.getByRole('button')

    await userEvent.type(newTaskInput, 'new task 1')
    await userEvent.click(newTaskButton)

    await userEvent.type(newTaskInput, 'new task 2')
    await userEvent.click(newTaskButton)

    await userEvent.type(newTaskInput, 'new task 3')
    await userEvent.click(newTaskButton)

    expect(screen.getByText('new task 1')).toBeInTheDocument()
    expect(screen.getByText('new task 2')).toBeInTheDocument()
    expect(screen.getByText('new task 3')).toBeInTheDocument()

    const removeTaskButton = screen.getAllByRole('button')[2]

    await userEvent.click(removeTaskButton)

    expect(screen.getByText('new task 1')).toBeInTheDocument()
    expect(screen.getByText('new task 3')).toBeInTheDocument()
    expect(screen.queryByText('new task 2')).not.toBeInTheDocument()
  })

  test('should be able to check a task', async () => {
    render(<TaskList />)

    const newTaskInput = screen.getByPlaceholderText('Adicionar novo todo')
    const newTaskButton = screen.getByRole('button')

    await userEvent.type(newTaskInput, 'new task 1')
    await userEvent.click(newTaskButton)

    await userEvent.type(newTaskInput, 'new task 2')
    await userEvent.click(newTaskButton)

    const [checkbox1] = screen.getAllByTestId('checkbox')

    await userEvent.click(checkbox1)
    expect(checkbox1).toBeChecked()
  })
})
