import React from 'react'
import renderer from 'react-test-renderer'

import CreditCard, { handleFocus } from '../CreditCard'

jest.mock('../FormFields', () => props => <div {...props}>FormFields</div>)
jest.mock('../Card', () => props => <div {...props}>Card</div>)

it('renders correctly', () => {
  const props = {
    foo: 'bar',
  }
  const tree = renderer.create(<CreditCard {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('handleFocus', () => {
  it('calls setFocus with the target id', () => {
    const setFocus = jest.fn()

    handleFocus(setFocus)({ target: { id: 1 } })

    expect(setFocus).toHaveBeenCalledWith(1)
  })
})
