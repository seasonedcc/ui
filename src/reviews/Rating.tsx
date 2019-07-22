import React, { useState } from 'react'
import times from 'lodash/times'
import { InputLabel } from '@material-ui/core'
import { StarItem } from './StarItem'
import { PossibleNumbers, SubjectObject, BaseProps } from './typeDeclarations'

interface RatingProps extends BaseProps {
  subject: SubjectObject
  onChange: (a: string, b: number) => void
  showLabel: boolean
  rating: number
}
const Rating = ({
  length = 5,
  onChange,
  subject,
  showLabel,
  ...props
}: RatingProps): JSX.Element => {
  const [hovered, setHovered] = useState(0)

  const onChoice = (value: number) => {
    if (!props.disabled) {
      onChange(subject.name || 'rating', value)
    }
  }

  return (
    <div>
      {showLabel && <InputLabel>{subject.title}</InputLabel>}
      {times(subject.length!, (index: number) => (
        <StarItem
          {...props}
          key={`rating=${index}`}
          index={(index + 1) as PossibleNumbers}
          setRating={onChoice}
          setHovered={setHovered}
          hovered={hovered as PossibleNumbers}
        />
      ))}
    </div>
  )
}

export default Rating
