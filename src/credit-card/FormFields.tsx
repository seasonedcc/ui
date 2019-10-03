import React, { Fragment } from 'react'

import Input from '../form/Input'

export default ({ fields, formState: {values}, handleFocus }:any) => {
  return (
    <Fragment>
      <Input
        {...fields.text('name')}
        key="name"
        onFocus={handleFocus}
        value={values.name}
        autoFocus
      />
      <Input {...fields.text('number')} key="number" onFocus={handleFocus} />
      <Input
        {...fields.text('expiry')}
        key="expiry"
        placeholder={'MM/AA'}
        onFocus={handleFocus}
        value={values.expiry}
      />
      <Input
        {...fields.text('cvc')}
        label="CVC"
        placeholder={'123'}
        onFocus={handleFocus}
        value={values.cvc || ''}
      />
    </Fragment>
  )
}
