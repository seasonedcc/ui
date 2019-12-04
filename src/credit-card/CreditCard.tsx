import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import FormFields from './FormFields'
import Card from './Card'

export const handleFocus = (setFocus:Function) => ({ target: { id } }:any) => {
  setFocus(id)
}

export const CreditCard = (props:any) => {
  const [focused, setFocused] = useState()

  return (
    <>
      <Card {...props} focused={focused} />
      <Grid container justify={'space-between'} style={{ margin: '30px 0' }}>
        <FormFields {...props} handleFocus={handleFocus(setFocused)} />
      </Grid>
    </>
  )
}

export default CreditCard
