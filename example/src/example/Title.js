import React from 'react'

const Title = ({ children }) => (
  <div id={children} style={{ margin: '6rem 0 3rem', width: '100%' }}>
    <h1>{children}</h1>
  </div>
)

export default Title
