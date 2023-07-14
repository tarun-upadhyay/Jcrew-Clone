import {
    Tr,
    Td,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    FormControl,
    Input,
    FormLabel,
    Button,
    ModalBody,Select,
    ModalCloseButton,
    Flex,
  } from "@chakra-ui/react";
  import React, { useState } from "react";


  
  const Tbodydata = (data) => {
    
  const { img, title,desc,sale_price,size,_id } = data.data;


    return (
      <>
    
         <Tr key={_id}>
            <Td>
                {_id}
            </Td>
          <Td>
            <Flex>

            <img src={img} alt="" width="50px" />
          <Td>{title}</Td>
            </Flex>
          </Td>
          <Td>{"Customer"}</Td>
  
          <Td>
          <b>$</b> <b>{sale_price}</b>
          </Td>
          <Td>
            <Button colorScheme={"yellow"} >Approve</Button>
          </Td>
          <Td>
            <Button colorScheme={"red"} >
              Delete
            </Button>
          </Td>
        </Tr>
      </>
    );
  };
  
  export default Tbodydata;