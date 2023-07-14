import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Container,
  Flex,
  VStack,useToast,
  Heading,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
const initState = {
  title: "",
  original_price: "",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  category: "",

  id: '',
  sale_price:"",
  status: false,
};
const AddProduct = () => {
  const toast = useToast()

  const [formData, setFormData] = useState(initState);
  const { title, original_price, img1,img2,img3,img4, category, sale_price} = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    let imgsend = [formData.img1]
    if(formData.img2){
        imgsend.push(img2)
    }
    if(formData.img3){
        imgsend.push(img3)
    }
    if(formData.img4){
        imgsend.push(img3)
    }

   let send = {
    title : formData.title,
    img: imgsend,
    desc: "ITEM bL66",
    original_price: formData.original_price,
    sale_price: formData.sale_price
   }
  
   fetch(`https://real-red-blackbuck-toga.cyclic.app/products/${category}/add`,{
    method: "POST",
    body: JSON.stringify(send),
    headers:{
      'Content-Type': 'application/json',
    }
   }).then(res=>  res.json() ).then(()=>toast({
    title: 'Product Added.',
    description: "We've added your product in database.",
    status: 'success',
    duration: 5000,
    isClosable: true,
  })).catch(er=>   toast({
    title: 'Failed To add ',
    description: "Please fill required Informations.",
    status: 'error',
    duration: 5000,
    isClosable: true,
  }))
    setFormData(initState);
 
  };

  return (
    <Box >
      <Container maxW={"container"} padding="2" bg={"gray.500"}>
        <Flex gap="10" alignContent={"center"} justify="center">
          <Heading color={"white"}>
            <Link to="/admin">Home</Link>
          </Heading>
          <Heading color={"white"}>
            <Link to="/admin/products">Manage Product</Link>
          </Heading>
        </Flex>
      </Container>
      <Container
        maxW="container.lg"
        padding="10"
        align={"center"}
        justify="center"
        
      >
        <Flex  bg={"green.100"} color={""}>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            
            justify={"center"}
            align={"center"}
          >
            <Heading>Add Product Details.</Heading>
            <SimpleGrid columns={2} columnGap={3} rowGap={4}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Title:</FormLabel>
                  <Input
                    placeholder="Enter title"
                    name="title"
                    value={title}
                    boxShadow="outline"
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Price:</FormLabel>
                  <Input
                    placeholder="Enter Original Price"
                    name="original_price"
                    value={original_price}
                    onChange={handleChange}
                   boxShadow="outline"
                   variant={"outline"}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Image url:</FormLabel>
                  <Input
                    placeholder="Enter url 1"
                    name="img1"
                  
                    variant="outline"
                    colorScheme={"red"}
                    value={img1}
                    boxShadow="outline"
                    onChange={handleChange}
                  ></Input>
                   <Input
                    placeholder="Enter url 2"
                    name="img2"
                    boxShadow="outline"
                    variant="outline"
                    colorScheme={"red"}
                    value={img2}
                    onChange={handleChange}
                  ></Input>
                   <Input
                    placeholder="Enter url 3"
                    name="img3"
                    boxShadow="outline"
                    variant="outline"
                    colorScheme={"red"}
                    value={img3}
                    onChange={handleChange}
                  ></Input>
                   <Input
                    placeholder="Enter url 4 "
                    name="img4"
                    boxShadow="outline"
                    variant="outline"
                    colorScheme={"red"}
                    value={img4}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Sale:</FormLabel>
                  <Input
                    placeholder="Enter Sale Price"
                    name="sale_price"
                    boxShadow="outline"
                    value={sale_price}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Category:</FormLabel>
                  <Select
                    name="category"
                    value={category}
                    onChange={handleChange}
                    boxShadow="outline"
                  >
                    <option >Type</option>
                    <option value={"men"}>Men</option>
                    <option value={"women"}>women</option>
                    <option value={"kid"}>kid</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Review:</FormLabel>
                  <Input placeholder="Enter review"  boxShadow="outline"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button
                  width={"full"}
                  size="lg"
                  bg={"green.400"}
                  onClick={handleSubmit}
                >
                  Add Product
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AddProduct;
