import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { second } from './second'
import AnotherProduct from "./secondProduct"

const Another = () => {
  return (
    <Flex direction="column" w={'78%'} m='auto'>
    <Grid
      gridGap="5"
      gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
    >
      {second.map((p) => (
        <AnotherProduct key={p.id} {...p} />
      ))}
    </Grid>
  </Flex>
  )
}

export default Another
