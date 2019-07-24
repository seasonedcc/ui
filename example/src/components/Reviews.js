import React, { useState } from 'react'
import SampleCard from 'example/SampleCard'
import { Favorite, FavoriteBorder, Star } from '@material-ui/icons'
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
<Evaluator readOnly max={10} allowHalf value={8.3} />`}
      >
        <Evaluator readOnly max={10} allowHalf value={8.3} />
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
    max={3}
    icon={<Favorite color="secondary" />}
    emptyIcon={<FavoriteBorder color="secondary" />}
    readOnly={!!favorite}
    onChange={changeFavorite}
  />
)`}
      >
        <Evaluator
          max={3}
          emptyIcon={<FavoriteBorder color="secondary" />}
          icon={<Favorite color="secondary" />}
          readOnly={!!favorite}
          onChange={changeFavorite}
        />
      </SampleCard>
      <SampleCard
        title="Like it!"
        code={`
import { Evaluator } from '@seasonedsoftware/ui'

// MyComponent
<Evaluator
  max={1}
  name="like"
  icon={<Favorite color="secondary" />}
  emptyIcon={<FavoriteBorder color="secondary" />}
  onChange={({ like }) => tellBackendThatILike(!!like)}
/>`}
      >
        <Evaluator
          max={1}
          name="like"
          emptyIcon={<FavoriteBorder color="secondary" />}
          icon={<Favorite color="secondary" />}
          onChange={values => console.log(values)}
        />
      </SampleCard>
      <SampleCard
        title="Rate and review"
        code={`
import { Evaluator } from '@seasonedsoftware/ui'

// MyComponent
const [value, setValue] = useState('')
return [
  <Evaluator
    allowHalf
    emptyIcon={<Star />}
    icon={<Star color="secondary" />}
    subjects={[
      'Overral',
      { name: 'Sound', max: 3, value: 2.4 },
      { name: 'Drinks', title: 'Soft Drinks', value: 4 },
    ]}
    commentLabel="Review"
    onChange={setValue}
  />,
  {JSON.stringify(value)}
]`}
      >
        <Evaluator
          allowHalf
          emptyIcon={<Star />}
          icon={<Star color="secondary" />}
          subjects={[
            'Overral',
            { name: 'Sound', max: 3, value: 2.4 },
            { name: 'Drinks', title: 'Soft Drinks', value: 4 },
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
