import { useContext, useMemo, useCallback } from 'react'
import { Context } from './SnackbarProvider'
import { Dispatcher } from './typeDeclarations'

export const useSnackbar = () => {
  const dispatch: Dispatcher = useContext(Context)
  const makeDispatcher = useCallback(
    type => (text: string, timeout: number) => {
      dispatch(text, type, timeout)
    },
    [],
  )
  const actions = useMemo(
    () => ({
      error: makeDispatcher('error'),
      flash: dispatch,
      info: makeDispatcher('info'),
      success: makeDispatcher('success'),
      warning: makeDispatcher('warning'),
    }),
    [],
  )
  return actions
}
