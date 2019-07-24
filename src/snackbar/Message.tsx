import React, { ComponentType } from 'react'
// @ts-ignore
import { Countdown } from '@seasonedsoftware/utils/dist/ui'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import { withStyles, Theme } from '@material-ui/core/styles'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

const variantIcon: { [key: string]: ComponentType<SvgIconProps> } = {
  error: ErrorIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
}

const styles = (theme: Theme) => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    marginRight: theme.spacing(1),
    opacity: 0.9,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  message: {
    alignItems: 'center',
    display: 'flex',
  },
  success: {
    backgroundColor: green[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
})

interface MessageProps {
  timeout?: number
  classes: any
  type?: string
  noIcon?: boolean
  text: string
  style?: React.CSSProperties
  close: () => void
}

const Message = ({
  timeout = 0,
  classes,
  style = {},
  text,
  close,
  noIcon,
  type = 'info',
}: MessageProps) => {
  const Icon = variantIcon[type]
  const onFinish = () => (timeout > 0 ? close() : null)
  return (
    <SnackbarContent
      className={classes[type]}
      style={style}
      message={
        <>
          <Countdown time={timeout} onFinish={onFinish} active />
          <span id="client-snackbar" className={classes.message}>
            {noIcon || (
              <Icon className={`${classes.icon} ${classes.iconVariant}`} />
            )}
            {text}
          </span>
        </>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={close}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  )
}

export default withStyles(styles)(Message)
