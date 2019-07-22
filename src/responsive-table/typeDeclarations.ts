export type obj = { [key: string]: string | obj }

export interface ResponsiveTableProps {
  data: obj[]
  scrollable?: boolean
  mobileTableProps: obj
  tableProps: obj
  cardProps: obj
  mediaQuery: string
}
