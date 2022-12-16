import { Button, Flex, Grid, Heading } from "@chakra-ui/react";

export default function Groups() {
  return (
    <Flex direction="column" w={"70%"} m="auto" mt={"5%"}>
      <Grid
        gridGap="8"
        gridTemplateColumns="repeat( auto-fit, minmax(100px, 1fr) )"
      >
        <Button bg={"none"} textDecoration="underline" _hover={{ bg: "none" }}>
          Shop New Arrivals
        </Button>
        <Button
          _hover={{ bg: "gray", color: "white" }}
          bg="white"
          color={"black"}
          border="1px solid black"
        >
          Shop Women
        </Button>
        <Button
          _hover={{ bg: "gray", color: "white" }}
          bg="white"
          color={"black"}
          border="1px solid black"
        >
          Shop Men
        </Button>
        <Button
          _hover={{ bg: "gray", color: "white" }}
          bg="white"
          color={"black"}
          border="1px solid black"
        >
          Shop Girls
        </Button>
        <Button
          _hover={{ bg: "gray", color: "white" }}
          bg="white"
          color={"black"}
          border="1px solid black"
        >
          Shop Boys
        </Button>
      </Grid>
    </Flex>
  );
}
