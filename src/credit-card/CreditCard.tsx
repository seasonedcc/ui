import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import FormFields from './FormFields'
import Card from './Card'

export const CreditCard = (props:any) => {
  const [focused, setFocused] = useState()

  const handleFocus = ({ target: { id } }:any) => {
    setFocused(id)
  }

  return (
    <>
      <Card {...props} focused={focused} />
      <Grid container justify={'space-between'} style={{ margin: '30px 0' }}>
        <FormFields {...props} handleFocus={handleFocus} />
      </Grid>
    </>
  )
}

export default CreditCard
