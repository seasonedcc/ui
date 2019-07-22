import React from 'react'
import get from 'lodash/get'
import { Star, StarBorder, StarHalf } from '@material-ui/icons'
import { PossibleNumbers, BaseProps } from './typeDeclarations'
import { ratingIconType } from './utils'

interface ItemProps extends BaseProps {
  index: PossibleNumbers
  hovered: PossibleNumbers
  rating: number
  setRating: (t: 0 | PossibleNumbers) => void
  setHovered: (t: number) => void
}

export const StarItem = ({
  index,
  setRating,
  setHovered,
  iconEmpty,
  iconHalf,
  iconFull,
  hovered,
  rating,
  disabled,
}: ItemProps) => {
  const onMouseEnter = () => setHovered && setHovered(index)
  const onMouseLeave = () => setHovered && setHovered(0)

  const onClick = () => {
    if (!disabled && setRating) {
      const value = rating === index ? 0 : index
      setRating(value)
    }
  }

  const value = Math.max(disabled ? 0 : hovered, rating)
  const isTransparent = disabled && index > Math.ceil(value)
  const getIcon = (type: 'full' | 'empty' | 'half') =>
    get({ full: iconFull, half: iconHalf, empty: iconEmpty }, type, iconEmpty)!
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        opacity: isTransparent ? 0.6 : 1,
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      {getIcon(ratingIconType(index, value))}
    </span>
  )
}

StarItem.defaultProps = {
  iconEmpty: <StarBorder color="secondary" />,
  iconHalf: <StarHalf color="secondary" />,
  iconFull: <Star color="secondary" />,
}
