import { Flex, Grid } from "@chakra-ui/react";
import Product from "./product.js";
import { products } from "./mocks.js";

export default function Final() {
  return (
    <Flex direction="column"  w={'75%'} m='auto' mt={'5%'}>
      <Grid
        gridGap="0"
        gridTemplateColumns="repeat( auto-fit, minmax(500px, 1fr) )"
      >
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </Grid>
    </Flex>
  );
}