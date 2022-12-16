import { Image, Box, Stack} from "@chakra-ui/react";

const SixthProduct = ({ imageSrc, imageAlt, btn }) => (
  <Stack>
    <Image cursor={"pointer"} objectFit="cover" src={imageSrc} alt={imageAlt} />

    <Box
      cursor={"pointer"}
      textDecoration={"underline"}
      fontSize="13px"
      fontWeight={"bold"}
    >
      {btn}
    </Box>
  </Stack>
);

export default SixthProduct;
