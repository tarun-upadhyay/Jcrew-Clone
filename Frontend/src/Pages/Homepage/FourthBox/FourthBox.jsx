import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./FourthBox.css";
import { BsHeart } from "react-icons/bs";

const FourthBox = () => {
  return (
    <Box w="95%" m="40px auto">
      <Text color="gray.700" fontSize="2xl" textAlign={"center"}>
        You’ll Also Love
      </Text>

      <Box
        w="98%"
        m="auto"
        display="flex"
        justifyContent="space-between"
        textAlign="left"
        mt="50px"
      >
        <Box className="fcontainer" ml={"10px"}>
          <Image
            src="https://www.jcrew.com/s7-img-facade/BA538_BK0001_m?wid=376"
            alt="Avatar"
            className="fimage"
            w="100%"
          />
          <Box mt={"-95%"} ml="82%" bg={"white"}>
            <BsHeart size={"20px"} />
          </Box>

          <Box className="fmiddle">
            <Box className="ftext">
              <Text>Villa coat in italian stadium-cloth wool</Text>
              <Text textDecoration={"line-through"}>INR 51,732.00</Text>
              <Text color={"red"}>INR 20,624.00 (60% off)</Text>
            </Box>
          </Box>
        </Box>
        <Box className="fcontainer" ml={"10px"}>
          <Image
            src="https://www.jcrew.com/s7-img-facade/BA551_BK0001_m?wid=376"
            alt="Avatar"
            className="fimage"
            w="100%"
          />
          <Box mt={"-95%"} ml="82%" bg={"white"}>
            <BsHeart size={"20px"} />
          </Box>
          <Box className="fmiddle">
            <Box className="ftext">
              <Text>Cocoon swatear-blazer</Text>
              <Text textDecoration={"line-through"}>INR 24,630.00</Text>
              <Text color={"red"}>INR 9,617.00 - 19,648.00</Text>
            </Box>
          </Box>
        </Box>
        <Box className="fcontainer" ml={"10px"}>
          <Image
            src="https://www.jcrew.com/s7-img-facade/BD135_NA6445?wid=376"
            alt="Avatar"
            className="fimage"
            w="100%"
          />
          <Box mt={"-95%"} ml="82%" bg={"white"}>
            <BsHeart size={"20px"} />
          </Box>
          <Box className="fmiddle">
            <Box className="ftext">
              <Text>Ribbed touch-screen gloves in Supersoft yarn</Text>
              <Text fontWeight={"black"} color={"black"}>
                INR 5,450.00
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="fcontainer" ml={"10px"}>
          <Image
            src="https://www.jcrew.com/s7-img-facade/BC473_GY5980_m?wid=376"
            alt="Avatar"
            className="fimage"
            w="100%"
          />
          <Box mt={"-95%"} ml="82%" bg={"white"}>
            <BsHeart size={"20px"} />
          </Box>
          <Box className="fmiddle">
            <Box className="ftext">
              <Text>Cashmere half-zip sweater</Text>
              <Text fontWeight={"black"}>INR 23,235.00</Text>
              <Text color={"red"}>selected color- INR 15,836.00</Text>
            </Box>
          </Box>
        </Box>
        <Box className="fcontainer" ml={"10px"}>
          <Image
            src="https://www.jcrew.com/s7-img-facade/BD005_BK0001_m?wid=376"
            alt="Avatar"
            className="fimage"
            w="100%"
          />
          <Box mt={"-95%"} ml="82%" bg={"white"}>
            <BsHeart size={"20px"} />
          </Box>
          <Box className="fmiddle">
            <Box className="ftext">
              <Text>Petite willa blazer in stretch velvet</Text>
              <Text textDecoration={"line-through"}>INR 31,549.00</Text>
              <Text color={"red"}>INR 23,454.00 (26% off)</Text>
            </Box>
          </Box>
        </Box>
        <Box className="fcontainer" ml={"10px"}>
          <Image
            src="https://www.jcrew.com/s7-img-facade/AZ279_HT1033?wid=376"
            alt="Avatar"
            className="image"
            w="100%"
          />
          {/* <Box mt={"-95%"} ml='82%' bg={'white'}><BsHeart size={'20px'}/></Box> */}
          <Box className="fmiddle">
            <Box className="ftext">
              <Text>Cotton-cashmere T-shirt</Text>
              <Text fontWeight={"black"}>INR 10,995.00</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthBox;
