import {
  Box,
  Container,
  Flex,
  Heading,
  TableContainer,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  TableCaption,
  Thead,
  Tfoot,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import Tbodydata from "./tbody";

const Manage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://real-red-blackbuck-toga.cyclic.app/products/men")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="purple">
          <TableCaption>All Pending orders</TableCaption>
          <Thead>
            <Tr>
              <Th>Order Id</Th>
              
              <Th>TITLE</Th>
              <Th>Customer</Th>
              <Th>Price</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el) => (
              <Tbodydata key={el.id} data={el} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Manage;
