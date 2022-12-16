import { Flex, Grid, Heading,Box } from '@chakra-ui/react'
import React from 'react'
import SixthProduct from './sixthProduct'
import { sixthStory } from './sixthStory'

const Sixth = () => {
  return (
    <Box>
        <Heading textAlign={'center'} mt='5%' fontWeight='medium'>More you need to see</Heading>
        <Flex direction="column" w={'95%'} m='auto' mt={'2%'} >
    <Grid
      gridGap="4"
      gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
    >
      {sixthStory.map((p) => (
        <SixthProduct key={p.id} {...p} />
      ))}
    </Grid>
  </Flex>
  <br />
  <hr />
      
    </Box>
  )
}

export default Sixth
