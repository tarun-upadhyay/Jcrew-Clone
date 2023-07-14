import React, { useState } from "react";
import {
  Box,
  useToast,
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
  Thead,PopoverBody,PopoverHeader,PopoverCloseButton,PopoverArrow,Popover,PopoverTrigger,PopoverContent,
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
 const [ page, SetPage ] = useState(1)
  const [img1, setImg1 ] = useState("")
  const [img2, setImg2 ] = useState("")
  const [img3, setImg3 ] = useState("")
  const [img4, setImg4 ] = useState("")
  const [original_price, setOriginal_price] = useState("")
  const toast = useToast()
  const [ type, setType ] = useState("women")
  const [ sale_price, setSale_price ] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [data, setData] = React.useState([]);
  const [ search, setSearch]  = useState("")
  const [ loading, setLoading ] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://real-red-blackbuck-toga.cyclic.app/products/${type}?title=${search}&page_no=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
       
      setLoading(false)
      }).catch(()=> setLoading(true));
  }, [type,search,page]);
  const handleSubmit = (onClose)=>{
onClose();
initState.title = title;
initState.sale_price = sale_price;
initState.original_price = original_price;
initState.img[0] = img1
if(initState.img[1]){
  initState.img[1] = img2
}
if(initState.img[2]){
initState.img[2] =img3
}
if(initState.img[3]){
  initState.img[3] = img4
}
fetch(`https://real-red-blackbuck-toga.cyclic.app/products/${type}/update/${initState._id}`,{
  method:"PATCH",
  body: JSON.stringify(initState),
  headers:{
    'Content-Type': 'application/json',
  }
}).then((res)=> res.json()).then((res)=>  toast({
  title: 'Product Updated Successfully.',
  status: 'success',
  duration: 5000,
  isClosable: true,
}) ).catch(err=>console.log(err))

  }
  const handleEdit = (data, onOpen)=>{
    initState = data
    setTitle(initState.title)
    setSale_price(initState.sale_price)
    setOriginal_price(initState.original_price)
    setImg1(initState.img[0])
    setImg2("")
    setImg3("")
    setImg4("")
    if(initState.img[1]){
      setImg2(initState.img[1])
    }
    if(initState.img[2]){
      setImg3(initState.img[2])
    }
    if(initState.img[3]){
      setImg4(initState.img[3])
    }
    console.log(initState)
    onOpen()
  

  }
function handleDelete (id){
fetch(`https://real-red-blackbuck-toga.cyclic.app/products/${type}/delete/${id}`,{
  method: "DELETE"
}).then(()=>  fetch(`https://real-red-blackbuck-toga.cyclic.app/products/${type}?title=${search}`)
.then((res) => res.json())
.then((res) => {
  setData(res)
 
setLoading(false)
}).catch(()=> setLoading(true)))
}

  const handleChange = ()=>{

  }

  return (
    <Box mt="5">
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

      <Select placeholder="Type" w={"40"} onChange={(e)=> setType(e.target.value)}>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kids</option>
      </Select>
      <Input type="text" placeholder="Search here....." onChange={(e)=>setSearch(e.target.value)} boxShadow="outline" w="150px"ml="10px" mr="10px" />
      <Link to="/admin">
      <Button colorScheme={"teal"} mr="20px">Home</Button></Link>
     <Link to="/admin/addproduct">
     <Button colorScheme={"purple"}>Add Products</Button>
     </Link>
     <Button ml={5} colorScheme={"pink"} onClick={()=>{if(page>1){SetPage(page-1)}}} disabled={page==1}>Prev</Button>
     <Button colorScheme="blue"  ml="5" onClick={()=>{if(page<3){SetPage(page+1)}}} disabled={page==3}>Next</Button>
        </Flex>
      <Box>
{
  loading ?  <Stack>
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
  <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  <Skeleton  height='20px' />
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
                    <Tr key={el._id}>
                      <Td>
                        <Image src={el.img[0]} alt="" w="10" />
                      </Td>
                      <Td>{el.title}</Td>
                      <Td>{el.original_price}.00</Td>
                      <Td>{el.sale_price}.00</Td>
                      <Td>
                        <Button colorScheme={'yellow'} onClick={()=>handleEdit(el, onOpen)}>Edit</Button>
                      </Td>
                      <Td>

                      <Popover>
  <PopoverTrigger>
                        <Button colorScheme={"pink"}>Delete</Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure for Deleteing</PopoverBody>
    <PopoverBody>{el.title}</PopoverBody>
    <Button  colorScheme={"red"} onClick={()=>handleDelete(el._id)}>Delete</Button>
    <Button  colorScheme={"green"} >Cancel</Button>
  </PopoverContent>
</Popover>
              
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
