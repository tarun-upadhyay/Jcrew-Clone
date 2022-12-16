import { Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import { thirdStory } from './thirdstory'
import ThirdProduct from "./thirdProduct"

const Stories = () => {
  return (
    <>
    <Heading fontWeight={'medium'} fontSize='55px' mt={'5%'} ml={'11%'}>More Stories</Heading>
    <Flex direction="column" w={'78%'} m='auto' mt={'1%'} >
    <Grid
      gridGap="5"
      gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
    >
      {thirdStory.map((p) => (
        <ThirdProduct key={p.id} {...p} />
      ))}
    </Grid>
  </Flex>
  </>
  )
}

export default Stories
