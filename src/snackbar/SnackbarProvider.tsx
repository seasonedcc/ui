import React, { useState, FunctionComponent } from 'react'
import MessagesController from './MessagesController'
import { Dispatcher, MessageObject } from './typeDeclarations'
import { SnackbarOrigin } from '@material-ui/core/Snackbar'

const defaultDispatcher: Dispatcher = _ => {}
export const Context = React.createContext(defaultDispatcher)

interface ContextProps {
  noIcon?: boolean
  position?: SnackbarOrigin
  style?: React.CSSProperties
  children: JSX.Element | JSX.Element[]
}

export const SnackbarProvider: FunctionComponent<ContextProps> = ({
  children,
  noIcon,
  position,
  style,
}: ContextProps) => {
  const [message, setMessage] = useState()
  const [open, setOpen] = useState(false)
  const dispatch = (text: string, type = 'info', timeout = 4) => {
    const messageObj: MessageObject = { text, timeout, type }
    setMessage(messageObj)
    setOpen(true)
  }
  const close = () => setMessage(null)
  const willClose = () => setOpen(false)
  return (
    <Context.Provider value={dispatch}>
      <MessagesController
        noIcon={noIcon}
        position={position}
        message={message}
        open={open}
        style={style}
        willClose={willClose}
        close={close}
      />
      {children}
    </Context.Provider>
  )
}
