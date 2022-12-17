import { Text, Image, Box, Stack, Heading } from "@chakra-ui/react";

const AnotherProduct = ({ imageSrc, imageAlt, title, category, btn }) => (
  <Stack >
    <Image cursor={'pointer'} objectFit="cover" src={imageSrc} alt={imageAlt} />
    <Heading cursor={'pointer'} color="black" fontWeight={'medium'} size="md" textTransform="capitalize">
      {title}
    </Heading>
    <Text cursor={'pointer'} w={'85%'} fontSize={'28px'} color="black" fontWeight={'medium'} textTransform="capitalize">
      {category}
    </Text>

    
    <Box cursor={'pointer'} textDecoration={'underline'}>
      {btn}
    </Box>
  </Stack>
);

export default AnotherProduct;