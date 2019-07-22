import React from 'react'
import { TableCell } from '@material-ui/core'
import isPlainObject from 'lodash/isPlainObject'
import get from 'lodash/get'
import omit from 'lodash/omit'
import { obj } from './typeDeclarations'
import { TableCellProps } from '@material-ui/core/TableCell'

interface CellProps extends TableCellProps {
  content: string | obj
}

const Cell = ({ content, align }: CellProps) => {
  const isReact = get(content, '$$typeof')
  const isObj = !isReact && isPlainObject(content)
  const text = isObj ? get(content, 'content') : content
  return (
    <TableCell
      align={align}
      {...(isObj ? omit(content as obj, 'content') : {})}
    >
      {text}
    </TableCell>
  )
}

export default Cell
