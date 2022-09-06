
import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App component', () => {
  test('renders text', () => {
    render(<App />)

    expect(screen.getByText('Minhas tasks')).toBeInTheDocument()
  })
})
