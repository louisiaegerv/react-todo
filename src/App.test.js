import { render, screen } from '@testing-library/react'

import App from './App'

test('app component renders correctly', () => {
  render(<App />)

  let element = screen.getByRole('heading')

  expect(element).toHaveTextContent(/louis/i)
})
