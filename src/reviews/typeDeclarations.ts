export type PossibleNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type SubjectObject = {
  title?: string
  name: string
  length?: PossibleNumbers
  initial: number
}
export type Subject = string | SubjectObject

export interface BaseProps {
  initialRating?: number
  length?: PossibleNumbers
  iconEmpty?: JSX.Element
  iconHalf?: JSX.Element
  iconFull?: JSX.Element
  disabled?: boolean
}
