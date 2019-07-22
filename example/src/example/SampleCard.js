import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import kebabCase from 'lodash/kebabCase'

export default ({ children, code, title }) => (
  <Card className="sample-card" elevation={5} id={kebabCase(title)}>
    <CardHeader title={title} />
    <CardContent>{children}</CardContent>
    <SyntaxHighlighter language="javascript" style={prism}>
      {code}
    </SyntaxHighlighter>
  </Card>
)
