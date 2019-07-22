import React from 'react'
import map from 'lodash/map'
import { obj } from './typeDeclarations'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@material-ui/core'
import Cell from './Cell'

interface TableProps {
  data: obj[]
  scrollable: boolean
  tableProps: obj
}

const OurTable = ({ data, scrollable = true, tableProps = {} }: TableProps) => {
  const [firstSet] = data
  return (
    <div style={scrollable ? { overflowX: 'auto', width: '100%' } : {}}>
      <Table {...tableProps}>
        <TableHead>
          <TableRow>
            {Object.keys(firstSet).map((title, index) => (
              <TableCell key={`tableheader-${index}`}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={`tablerow-${index}`}>
              {map(row, (cellValue: string | obj, cellKey: string) => (
                <Cell
                  key={`tablecell-${index}-${cellKey}`}
                  content={cellValue}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OurTable
