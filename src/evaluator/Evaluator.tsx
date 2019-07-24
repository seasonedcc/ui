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
  name?: string
  commentLabel?: string
  subjects: Subject[]
}

const EvaluatorComponent = ({
  onChange,
  subjects,
  name = 'rating',
  commentLabel,
  enableComment,
  value = 0,
  ...props
}: EvaluatorProps): JSX.Element => {
  const formatter = (subject: Subject) =>
    formatSubject(subject, props.max, value)
  const defaultSubjects = subjects || [name]
  const formatedSubjects = useMemo(() => defaultSubjects.map(formatter), [])
  const allSubjects = initSubjects(formatedSubjects)

  const [state, setState] = useState(allSubjects)
  const [comment, setComment] = useState('')

  useOnMount(() => onChange && onChange(state))

  const onChangeRating = (name: string, value: number) => {
    const newState = { ...state, [name]: value }
    setState(newState)
    return onChange
      ? onChange(enableComment ? { ...newState, comment } : newState)
      : undefined
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
            value={state[subject.name]}
            showLabel={formatedSubjects.length > 1}
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
  readOnly: false,
}

export const Evaluator = memo(EvaluatorComponent)
