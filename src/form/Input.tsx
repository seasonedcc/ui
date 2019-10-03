import React from 'react'
import { TextField } from '@material-ui/core'
import startCase from 'lodash/startCase'

export default ({
  children,
  disabled,
  name,
  error,
  helper = ' ',
  label = startCase(name),
  placeholder = label,
  ...props
}: any) => {
  const helperText = error || helper
  return (
    <TextField
      {...props}
      name={name}
      id={name}
      label={label}
      placeholder={placeholder}
      fullWidth
      error={!!error}
      helperText={helperText}
      disabled={disabled}
      style={{
        marginBottom: '8px',
      }}
    />
  )
}
