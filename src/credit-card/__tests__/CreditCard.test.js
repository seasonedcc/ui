import React from 'react'
import renderer from 'react-test-renderer'

import CreditCard from '../CreditCard'

jest.mock('../FormFields', () => props => <div {...props}>FormFields</div>)
jest.mock('../Card', () => props => <div {...props}>Card</div>)

it('renders correctly', () => {
  const props = {
    foo: 'bar',
  }
  const tree = renderer.create(<CreditCard {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
