import { StarIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/action";
import "./SingleProduct.css";

export const Singleproduct = ({
  image,
  title,
  titledesp,
  price,
  category,
  rating,
  reviewCount,
  cartquantity,
  id,
  state,
  setstate,
}) => {
  let dispatch = useDispatch();
  let handleAddtocart = (id) => {
    dispatch(addtocart(id));
    setstate(state + 1);
  };

  return (
    <Flex
      maxW=""
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      textAlign="left"
    >
      <VStack>
        <Box>
          <Image
            src={image}
            alt={title}
            w="200px"
            h="350px"
            margin="auto"
            p={10}
          />
        </Box>
      </VStack>
      <VStack>
        <Box p="6">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {category}
          </Badge>

          <Box
            mt="1"
            fontSize="2xl"
            fontWeight="bold"
            as="h2"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>
          <Box
            mt="1"
            fontWeight="light"
            as="p"
            lineHeight="tight"
            noOfLines={2}
          >
            {titledesp}
          </Box>
          <Box>
            <Box as="span" color="gray.600" fontSize="xl">
              <Text as="s">₹{(price + price / 10).toFixed(2)}</Text>
            </Box>
            &nbsp; &nbsp;
            <Box as="span" color="gray.600" fontSize="2xl" fontWeight="bold">
              ₹{price.toFixed(2)}
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviewCount} reviews
            </Box>
          </Box>
        </Box>
        <Box>
          {cartquantity !== 0 ? (
            <Alert borderRadius={15} w="auto" status="success">
              <AlertIcon />
              Added to cart !!
            </Alert>
          ) : (
            <Button
              onClick={() => handleAddtocart(id)}
              disabled={cartquantity > 0}
              colorScheme="teal"
            >
              {cartquantity > 0 ? "added" : "ADD TO CART"}
            </Button>
          )}
        </Box>
      </VStack>
    </Flex>
  );
};
