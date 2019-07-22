import { Subject, PossibleNumbers, SubjectObject } from './typeDeclarations'

export function initSubjects(subjects: SubjectObject[]) {
  return subjects.reduce((sum: any, curr: SubjectObject) => {
    sum[curr.name] = curr.initial
    return sum
  }, {})
}

export function formatSubject(
  subject: Subject,
  length: PossibleNumbers = 5,
  initialRating: number = 0,
): SubjectObject {
  return typeof subject === 'string'
    ? { name: subject, length, title: subject, initial: initialRating || 0 }
    : {
        ...subject,
        title: subject.title || subject.name,
        length: subject.length || length,
        initial: subject.initial || initialRating || 0,
      }
}

export const ratingIconType = (index: PossibleNumbers, rating: number = 0) => {
  if (rating >= index || index - rating < 0.25) return 'full'
  return index - rating < 0.75 ? 'half' : 'empty'
}
