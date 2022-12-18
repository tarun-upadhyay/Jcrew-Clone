import React from "react";
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
  Select,
  Thead,
  Button,
  Tfoot,
  Image,
  Spacer,
  Divider,
} from "@chakra-ui/react";
const AdminProducts = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://real-red-blackbuck-toga.cyclic.app/products/women")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [data]);
  return (
    <Box>
        <Flex>

      <Select placeholder="Type" w={"40"}>
        <option value="option1">Men</option>
        <option value="women">Women</option>
        <option value="option3">Kids</option>
      </Select>
      <Button colorScheme={"teal"}>Home</Button>
        </Flex>
      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>Original Price</Th>
                <Th>Sale Price</Th>
                <Th>Edit</Th>
                <Th> Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {" "}
              {data.length > 0 &&
                data.map((el) => {
                  return (
                    <Tr>
                      <Td>
                        <Image src={el.img[0]} alt="" w="10" />
                      </Td>
                      <Td>{el.title}</Td>
                      <Td>{el.original_price}</Td>
                      <Td>{el.sale_price}</Td>
                      <Td>
                        <Button colorScheme={'yellow'}>Edit</Button>
                      </Td>
                      <Td>
                        <Button colorScheme={"red"}>Delete</Button>
                      </Td>
                    </Tr>
                  );
                })}{" "}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AdminProducts;
