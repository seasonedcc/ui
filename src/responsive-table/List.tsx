import React from 'react'
import map from 'lodash/map'
import { Card, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import { obj } from './typeDeclarations'
import Cell from './Cell'

interface ListProps {
  data: obj[]
  cardProps: obj
  scrollable?: boolean
  tableProps: obj
}

const OurList = ({
  data = [],
  cardProps,
  scrollable,
  tableProps = {},
}: ListProps) => {
  return (
    <div>
      {data.map((row, index) => (
        <Card {...cardProps} key={`card-${index}`}>
          <div style={scrollable ? { overflowX: 'auto', width: '100%' } : {}}>
            <Table {...tableProps}>
              <TableBody>
                {map(row, (cellValue, cellKey) =>
                  cellValue ? (
                    <TableRow key={`tablecell-${index}-${cellKey}`}>
                      <TableCell>{cellKey}</TableCell>
                      <Cell align="right" content={cellValue} />
                    </TableRow>
                  ) : null,
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default OurList
