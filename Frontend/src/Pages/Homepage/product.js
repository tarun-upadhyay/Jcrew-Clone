import { Text, Image, Stack, Heading, Button } from "@chakra-ui/react";

const Product = ({ imageSrc, imageAlt, title, category }) => (
  <Stack >
    <Image cursor={"pointer"} objectFit="cover" src={imageSrc} alt={imageAlt} />
    <Heading cursor={"pointer"} color="black" size="md" >
      {title}
    </Heading>
    <Text>
    <Button cursor={"pointer"} variant='link' color="black" textAlign={'left'}>
      {category}
    </Button>
    </Text>
  </Stack>
);

export default Product;
