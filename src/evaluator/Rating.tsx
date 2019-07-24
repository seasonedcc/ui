import React from 'react'
import { Rating as MuiRating } from '@material-ui/lab'
import { InputLabel } from '@material-ui/core'
import { SubjectObject, BaseProps } from './typeDeclarations'

interface RatingProps extends BaseProps {
  subject: SubjectObject
  onChange: (a: string, b: number) => void
  showLabel: boolean
  value: number
}

const Rating = ({
  onChange,
  subject,
  showLabel,
  value,
  allowHalf,
  readOnly,
  icon,
  emptyIcon,
}: RatingProps): JSX.Element => {
  const roundPrecision = (value = 0) => Math.round(value * 2) / 2
  const displayValue = roundPrecision(value)

  const onChoice = (_event: any, value: number) => {
    onChange(subject.name || 'rating', value)
  }

  return (
    <div>
      {showLabel && <InputLabel>{subject.title}</InputLabel>}
      <MuiRating
        icon={icon}
        emptyIcon={emptyIcon}
        name={subject.title}
        precision={allowHalf ? 0.5 : 1}
        onChange={onChoice}
        value={displayValue}
        max={subject.max}
        readOnly={readOnly}
      />
    </div>
  )
}

export default Rating
