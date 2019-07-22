import React from 'react'
import SampleCard from 'example/SampleCard'
import { ResponsiveTable } from '@seasonedsoftware/ui'

export default () => (
  <>
    <SampleCard
      title="Scrollable"
      code={`
import { ResponsiveTable } from '@seasonedsoftware/ui'

// MyComponent
<ResponsiveTable
  scrollable
  data={data} // see last sample
  tableProps={{ style: { minWidth: 800 } }}
/>`}
    >
      <p>
        The <em>scrollable</em> prop will make both tables (desktop and mobile)
        scroll when the width of the container is not enough for the table
        content.
      </p>
      <p>
        The <em>tableProps</em> will only affect the <em>desktop version</em>.
        You can pass any prop that is acceptable by{' '}
        <a
          href="https://material-ui.com/api/table/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Table
        </a>{' '}
        component.
      </p>
      <ResponsiveTable
        scrollable
        tableProps={{ style: { minWidth: 800 } }}
        data={data}
      />
    </SampleCard>
    <SampleCard
      title="Change mobile Props"
      code={`
import { ResponsiveTable } from '@seasonedsoftware/ui'

// MyComponent
<ResponsiveTable
  data={data} // see last sample
  mobileTableProps={{ size: 'small' }}
  cardProps={{ elevation: 10 }}
/>`}
    >
      <p>
        The <em>mobileTableProps</em> and <em>cardProps</em> are only used on
        the mobile version of the table. You can pass any prop that is
        acceptable by{' '}
        <a
          href="https://material-ui.com/api/table/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Table
        </a>{' '}
        and{' '}
        <a
          href="https://material-ui.com/api/card/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Card
        </a>{' '}
        respectively.
      </p>
      <ResponsiveTable
        data={data}
        mobileTableProps={{ size: 'small' }}
        cardProps={{ elevation: 10 }}
      />
    </SampleCard>
    <SampleCard
      title="Change the breakpoint"
      code={`
import { ResponsiveTable } from '@seasonedsoftware/ui'

// MyComponent
<ResponsiveTable
  data={data} // see last sample
  mediaQuery="(min-width:890px)" // default: (min-width:600px)
/>`}
    >
      <p>
        You can pass a <em>mediaQuery</em> prop with a media query string. If it
        matches, then the table is shown.
      </p>
      <ResponsiveTable data={data} mediaQuery="(min-width:890px)" />
    </SampleCard>
    <SampleCard
      title="The Data for these samples"
      code={JSON.stringify(data, null, 2)}
    >
      <p>
        The <em>data</em> prop should be an array with objects. The object keys
        of the first array should be what you want as the table header.
      </p>
      <p>
        For the values, you can pass either a string, a react element, or
        another object which should have a content key. Any other key will be
        passed to the TableCell as props.
      </p>
      <p>
        <em>Null</em> values will be hidden in the mobile version.
      </p>
    </SampleCard>
  </>
)

const data = [
  {
    Foo: 'Bar',
    Fizz: <span style={{ color: 'red' }}>Buzz</span>,
    Hello: {
      content: 'World',
      style: { color: 'red' },
    },
  },
  {
    Foo: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    Fizz: 'Fizz',
    Hello: 'Hello',
  },
  {
    Foo: {
      content: 'Hakuna matata!',
      className: 'special-one',
      align: 'right',
    },
    Fizz: null,
    Hello: {
      content: <strong>Bar foo</strong>,
      align: 'left',
    },
  },
]
