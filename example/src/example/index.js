import React from 'react'
import Title from './Title'
import kebabCase from 'lodash/kebabCase'

export default ({ title, Component }) => (
  <div className={`example-${kebabCase(title)}`}>
    <Title>{title}</Title>
    <Component />
  </div>
)
