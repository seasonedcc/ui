import React from 'react'
import PropTypes from 'prop-types'

import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const Card = ({ formState, focused, acceptedCards }:any) => {
  const cardProps = { ...formState.values, focused, acceptedCards }
  return <Cards {...cardProps} />
}

Card.propTypes = {
  focused: PropTypes.string,
  acceptedCards: PropTypes.arrayOf(PropTypes.string)
}

export default Card
