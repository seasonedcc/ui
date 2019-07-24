import React from 'react'
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar'
import Message from './Message'
import { MessageObject } from './typeDeclarations'

interface ControllerProps {
  message?: MessageObject
  close: () => void
  willClose: () => void
  open: boolean
  noIcon?: boolean
  style?: React.CSSProperties
  position?: SnackbarOrigin
}

export default ({
  message,
  close,
  willClose,
  noIcon,
  style,
  open,
  position,
}: ControllerProps) =>
  message && message.text ? (
    <Snackbar
      anchorOrigin={
        position || {
          horizontal: 'right',
          vertical: 'bottom',
        }
      }
      open={open}
      onClose={close}
    >
      <Message noIcon={noIcon} close={willClose} style={style} {...message} />
    </Snackbar>
  ) : null
