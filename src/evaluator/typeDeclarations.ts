export type PossibleNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type SubjectObject = {
  title?: string
  name: string
  max?: PossibleNumbers
  value: number
}
export type Subject = string | SubjectObject

export interface BaseProps {
  value?: number
  max?: PossibleNumbers
  icon?: JSX.Element
  emptyIcon?: JSX.Element
  readOnly?: boolean
  allowHalf?: boolean
}
