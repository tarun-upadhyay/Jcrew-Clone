import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { BsForward } from "react-icons/bs";
import Stories from "../Stories/Stories";
import Another from "./Another";

const SecondPart = () => {
  return (
    <>
    <Box w={"100%"} h="auto"  bg="#f8f4ef" >
      <Image
        w={"15%"}
        ml="12%"
        mt={"2%"}
        src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
      />
      <Box fontSize={'16px'}>
        <Button
          bg={"none"}
          ml="72%"
          mt={"-2%"}
          _hover={{ bg: "none", textDecoration: "underline" }}
        >
          Meet our creative community <BsForward />
        </Button>
      </Box>

      <Another />
      <br />
      <Stories />
    </Box>
    </>
  );
};

export default SecondPart;
