import React from 'react'
import basePath from './basePath'
import { Link } from '@reach/router'
import { Card, CardHeader, CardContent, Button } from '@material-ui/core'

const Bt = ({ to, children }) => (
  <Link
    style={{ textDecoration: 'none', color: 'inherit' }}
    to={`${basePath}/${to}`}
  >
    <Button color="primary" variant="outlined">
      {children}
    </Button>
  </Link>
)

export default () => {
  return (
    <Card elevation={5} className="sample-card home-page">
      <CardHeader title="UI Components" />
      <CardContent>
        <div style={{ display: 'grid', gridGap: 10 }}>
          <Bt to="table">Responsive Table</Bt>
          <Bt to="reviews">Reviews</Bt>
        </div>
      </CardContent>
    </Card>
  )
}
