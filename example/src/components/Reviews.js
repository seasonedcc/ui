import React, { useState } from 'react'
import SampleCard from 'example/SampleCard'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import { Divider, Typography } from '@material-ui/core'
import { Evaluator } from '@seasonedsoftware/ui'

export default () => {
  const [value, setValue] = useState('')
  const [favorite, setFavorite] = useState(0)
  const changeFavorite = ({ rating }) => {
    setFavorite(rating)
  }
  return (
    <>
      <SampleCard
        title="Past Reviews"
        code={`
import { Evaluator } from '@seasonedsoftware/ui'

// MyComponent
<Evaluator disabled length={10} initialRating={8.3} />`}
      >
        <Evaluator disabled length={10} initialRating={8.3} />
      </SampleCard>
      <SampleCard
        title="Rate"
        code={`
import { Evaluator } from '@seasonedsoftware/ui'

// MyComponent
const [favorite, setFavorite] = useState(0)
const changeFavorite = ({ rating }) => {
  setFavorite(rating)
}
return (
  <Evaluator
    length={3}
    iconEmpty={<FavoriteBorder color="secondary" />}
    iconFull={<Favorite color="secondary" />}
    disabled={!!favorite}
    onChange={changeFavorite}
  />
)`}
      >
        <Evaluator
          length={3}
          iconEmpty={<FavoriteBorder color="secondary" />}
          iconFull={<Favorite color="secondary" />}
          disabled={!!favorite}
          onChange={changeFavorite}
        />
      </SampleCard>
      <SampleCard
        title="Like it!"
        code={`
import { Evaluator } from '@seasonedsoftware/ui'

// MyComponent
<Evaluator
  length={1}
  iconEmpty={<FavoriteBorder style={{ fontSize: 50 }} />}
  iconFull={<Favorite style={{ fontSize: 50 }} />}
  onChange={values => tellBackendThatILike(!!values.rating)}
/>`}
      >
        <Evaluator
          length={1}
          iconEmpty={<FavoriteBorder style={{ fontSize: 50 }} />}
          iconFull={<Favorite style={{ fontSize: 50 }} />}
          onChange={values => console.log(values)}
        />
      </SampleCard>
      <SampleCard
        title="Rate and review"
        code={`
import { Evaluator } from '@seasonedsoftware/ui'

// MyComponent
const [value, setValue] = useState('')
return (
  <>
    <Evaluator
      subjects={[
        'Overral',
        { name: 'Sound', length: 3, initial: 2.4 },
        { name: 'Drinks', title: 'Soft Drinks', initial: 4 },
      ]}
      commentLabel="Review"
      onChange={setValue}
    />
    {JSON.stringify(value)}
  </>
)`}
      >
        <Evaluator
          subjects={[
            'Overral',
            { name: 'Sound', length: 3, initial: 2.4 },
            { name: 'Drinks', title: 'Soft Drinks', initial: 4 },
          ]}
          commentLabel="Review"
          onChange={setValue}
          enableComment
        />
        <Divider />
        <Typography variant="body2">{JSON.stringify(value)}</Typography>
      </SampleCard>
    </>
  )
}
