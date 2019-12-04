import React from 'react'
import renderer from 'react-test-renderer'

import Input from '../Input'

it('renders correctly', () => {
  const props = {
    label: 'Foobar',
    name: 'foobar',
  }
  const tree = renderer.create(<Input {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
