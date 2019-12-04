import React from 'react'
import renderer from 'react-test-renderer'

import Card from '../Card'

jest.mock('react-credit-cards', () => props => <div {...props}>Cards</div>)

it('renders correctly', () => {
  const props = {
    formState: {
      values: {
        number: '',
      },
    },
    focused: 'name',
  }

  const tree = renderer.create(<Card {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
