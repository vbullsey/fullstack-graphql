import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).
    toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle('background-color: #06092b')
  })
})
