import React from 'react'
import SampleCard from 'example/SampleCard'
import { CreditCard } from '@seasonedsoftware/ui'
import { useFormState } from 'react-use-form-state'

const ExampleSnack = ({children}) => {
  return (
    <SampleCard
      code={`
import { CreditCard } from '@seasonedsoftware/ui'
import { useFormState } from 'react-use-form-state'

// My component
<CreditCard fields={fields} />`}
    >{children}</SampleCard>
  )
}

const Example = () => {
  const [ formState, fields ] = useFormState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  })
  return (
        <ExampleSnack><CreditCard formState={formState} fields={fields} /></ExampleSnack>
  )
}



export default () => (
    <Example />
)
