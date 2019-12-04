import React from 'react'
import renderer from 'react-test-renderer'

import FormFields from '../FormFields'

jest.mock('../../form/Input', () => props => <div {...props}>Input</div>)

it('renders correctly', () => {
  const props = {
    fields: {
      text: jest.fn(() => ({})),
    },
    formState: {
      values: {},
    },
    handleFocus: jest.fn(),
  }

  const tree = renderer.create(<FormFields {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
