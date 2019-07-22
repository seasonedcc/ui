import React from 'react'
import Table from './Table'
import List from './List'
import { useMediaQuery } from '@material-ui/core'
import { ResponsiveTableProps } from './typeDeclarations'

export const ResponsiveTable = ({
  data,
  scrollable = false,
  tableProps = {},
  mobileTableProps = {},
  cardProps = {},
  mediaQuery = '(min-width:600px)',
}: ResponsiveTableProps) => {
  if (data.length < 1) return null
  const matches: boolean = useMediaQuery(mediaQuery)
  return matches ? (
    <Table data={data} scrollable={scrollable} tableProps={tableProps} />
  ) : (
    <List
      data={data}
      scrollable={scrollable}
      cardProps={cardProps}
      tableProps={mobileTableProps}
    />
  )
}
