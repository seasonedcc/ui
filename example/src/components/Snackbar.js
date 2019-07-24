import React, { useEffect } from 'react'
import SampleCard from 'example/SampleCard'
import { SnackbarProvider, useSnackbar } from '@seasonedsoftware/ui'

const ExampleSnack = ({ title, timeout = 0, type = 'info', message }) => {
  const snackbars = useSnackbar()
  useEffect(() => {
    snackbars[type](message, timeout)
  }, []) // eslint-disable-line
  return (
    <SampleCard
      title={title || type}
      code={`
import { useSnackbar } from '@seasonedsoftware/ui'

const { ${type} } = useSnackbar()
useEffect(() => {
${type}('${message}', ${timeout}) // 0 for no timeout
}, [info])`}
    />
  )
}

const Example = () => {
  return (
    <div className="snackwrapper">
      <SnackbarProvider
        position={{ vertical: 'top', horizontal: 'center' }}
        style={{ padding: 20, color: 'pink' }}
        noIcon
      >
        <ExampleSnack
          timeout={4}
          title="custom info"
          type="info"
          message="Custom style"
        />
      </SnackbarProvider>
      <SnackbarProvider position={{ vertical: 'top', horizontal: 'left' }}>
        <ExampleSnack timeout={6} type="info" message="Hello!" />
      </SnackbarProvider>
      <SnackbarProvider position={{ vertical: 'top', horizontal: 'right' }}>
        <ExampleSnack timeout={8} type="error" message="An error message" />
      </SnackbarProvider>
      <SnackbarProvider position={{ vertical: 'bottom', horizontal: 'left' }}>
        <ExampleSnack timeout={10} type="warning" message="A warning message" />
      </SnackbarProvider>
      <SnackbarProvider>
        <ExampleSnack type="success" message="A success message" />
      </SnackbarProvider>
      <SampleCard
        title="Customization"
        code={`
import { SnackbarProvider, useSnackbar } from '@seasonedsoftware/ui'

<SnackbarProvider
  style={{ color: 'pink', padding: 20 }}
  position={{
    vertical: 'top',
    horizontal: 'center',
  }}
  noIcon
>
  <MyApp />
</SnackbarProvider>
`}
      />
    </div>
  )
}

export default () => (
  <SnackbarProvider style={{ color: 'white' }}>
    <Example />
  </SnackbarProvider>
)
