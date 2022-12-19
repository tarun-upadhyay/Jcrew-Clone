import React, { useState } from "react";
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
  Select,  useDisclosure,
  Thead,
  Button,Modal, ModalOverlay,ModalHeader,
  Tfoot,ModalContent,
  Image, ModalCloseButton,FormControl,Input, ModalBody,FormLabel,
  Spacer,
  Divider,Skeleton,Stack,ModalFooter
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
let initState
const AdminProducts = () => {
  const [title, setTitle] = useState("");
  const [ img, setImg] = useState([]);
  const [img1, setImg1 ] = useState("")
  const [img2, setImg2 ] = useState("")
  const [img3, setImg3 ] = useState("")
  const [img4, setImg4 ] = useState("")
  const [original_price, setOriginal_price] = useState("")
  const [ desc, setDesc ] = useState("")
  const [ sale_price, setSale_price ] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [data, setData] = React.useState([]);
  const [ loading, setLoading ] = React.useState(false)
  React.useEffect(() => {
    setLoading(true)
    fetch("https://real-red-blackbuck-toga.cyclic.app/products/women")
      .then((res) => res.json())
      .then((res) => {
        setData(res)
       
      setLoading(false)
      }).catch(()=> setLoading(true));
  }, []);
  const handleSubmit = (onClose)=>{
onClose();
let send = {
  title :""
}
console.log(title.length>0)
if(title.length<0){
  send.title = initState.title
}
console.log(send)
  }
  const handleEdit = (data, onOpen)=>{
    initState = data
    onOpen()
  

  }


  const handleChange = ()=>{

  }

  return (
    <Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit you product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title of Product</FormLabel>
              <Input  value={title} 
              required
              onChange={(e)=> setTitle(e.target.value)}
              placeholder='Title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder='Original Price'
              required
              value={original_price}
              onChange={(e)=>  setOriginal_price(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Sale Price</FormLabel>
              <Input placeholder='Sale Price' required
              value={sale_price}
              onChange={(e)=>  setSale_price(e.target.value)}
              />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Image Url</FormLabel>
              <Input placeholder='Url 1 '  onChange={(e)=> setImg1(e.target.value)} value={img1} name="img" />
              <Input placeholder='Url 2' value={img2}  onChange={(e)=> setImg2(e.target.value)} name="img" />
              <Input placeholder='Url 3' value={img3}  onChange={(e)=> setImg3(e.target.value)} name="img" />
              <Input placeholder='Url 4' value={img4}  onChange={(e)=> setImg4(e.target.value)} name="img" />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleSubmit(onClose)}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Flex>

      <Select placeholder="Type" w={"40"}>
        <option value="option1">Men</option>
        <option value="women">Women</option>
        <option value="option3">Kids</option>
      </Select>
      <Link to="/admin">
      <Button colorScheme={"teal"}>Home</Button></Link>
     <Link to="/admin/addproduct">
     <Button colorScheme={"purple"}>Add Products</Button>
     </Link>
        </Flex>
      <Box>
{
  loading ?  <Stack>
  <Skeleton startColor='green.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='blue.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
</Stack> : <TableContainer>
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
                        <Button colorScheme={'yellow'} onClick={()=>handleEdit(el, onOpen)}>Edit</Button>
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
}





        
      </Box>
    </Box>
  );
};

export default AdminProducts;
