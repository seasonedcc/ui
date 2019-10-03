import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

export default ({ formState, focused, acceptedCards }:any) => {
  const cardProps = { ...formState.values, focused, acceptedCards }
  return <Cards {...cardProps} />
}
