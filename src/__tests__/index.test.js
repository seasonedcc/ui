import React from 'react'

import { ResponsiveTable, Evaluator, SnackbarProvider, useSnackbar } from '..'

jest.mock('../responsive-table/ResponsiveTable', () => ({
  ResponsiveTable: props => <div {...props}>ResponsiveTable</div>,
}))

jest.mock('../evaluator/Evaluator', () => ({
  Evaluator: props => <div {...props}>Evaluator</div>,
}))

jest.mock('../snackbar/SnackbarProvider', () => ({
  SnackbarProvider: props => <div {...props}>SnackbarProvider</div>,
}))

jest.mock('../snackbar/useSnackbar', () => ({
  useSnackbar: jest.fn(),
}))

it('exports correctly', () => {
  expect(ResponsiveTable).not.toBeUndefined()
  expect(Evaluator).not.toBeUndefined()
  expect(SnackbarProvider).not.toBeUndefined()
  expect(useSnackbar).not.toBeUndefined()
})
