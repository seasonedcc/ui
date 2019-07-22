import React, { memo, useMemo, useState, ChangeEvent } from 'react'
import map from 'lodash/map'
// @ts-ignore
import { useOnMount } from '@seasonedsoftware/utils/dist/hooks'
import { TextField } from '@material-ui/core'
import { initSubjects, formatSubject } from './utils'
import Rating from './Rating'
import { Subject, BaseProps, SubjectObject } from './typeDeclarations'

interface EvaluatorProps extends BaseProps {
  onChange?: (t: any) => void
  enableComment?: boolean
  commentLabel?: string
  subjects: Subject[]
}

const EvaluatorComponent = ({
  onChange,
  subjects,
  commentLabel,
  enableComment,
  initialRating = 0,
  ...props
}: EvaluatorProps): JSX.Element => {
  const formatter = (subject: Subject) =>
    formatSubject(subject, props.length, initialRating)
  const formatedSubjects = useMemo(() => subjects.map(formatter), [])
  const allSubjects = initSubjects(formatedSubjects)

  const [state, setState] = useState(allSubjects)
  const [comment, setComment] = useState('')

  useOnMount(() => onChange && onChange(state))

  const onChangeRating = (name: string, rating: number) => {
    if (!onChange) return undefined
    const newState = { ...state, [name]: rating }
    setState(newState)
    return onChange(enableComment ? { ...newState, comment } : newState)
  }

  const updateComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!onChange) return undefined
    const comment = event.target.value
    setComment(comment)
    return onChange({ ...state, comment })
  }

  return (
    <>
      {map(formatedSubjects, (subject: SubjectObject, index: number) => {
        return (
          <Rating
            key={index}
            onChange={onChangeRating}
            subject={subject}
            rating={state[subject.name]}
            showLabel={subjects.length > 1}
            {...props}
          />
        )
      })}
      {enableComment && (
        <TextField
          value={comment}
          onChange={updateComment}
          label={commentLabel}
          multiline
          fullWidth
        />
      )}
    </>
  )
}

EvaluatorComponent.defaultProps = {
  commentLabel: 'Leave your comment',
  enableComment: false,
  disabled: false,
  subjects: ['rating'],
}

export const Evaluator = memo(EvaluatorComponent)
