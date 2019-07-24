import { Subject, PossibleNumbers, SubjectObject } from './typeDeclarations'

export function initSubjects(subjects: SubjectObject[]) {
  return subjects.reduce((sum: any, curr: SubjectObject) => {
    sum[curr.name] = curr.value
    return sum
  }, {})
}

export function formatSubject(
  subject: Subject,
  max: PossibleNumbers = 5,
  value: number = 0,
): SubjectObject {
  return typeof subject === 'string'
    ? { name: subject, max, title: subject, value }
    : {
        ...subject,
        title: subject.title || subject.name,
        max: subject.max || max,
        value: subject.value || value,
      }
}
