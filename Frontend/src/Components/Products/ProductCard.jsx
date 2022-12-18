// import {ButtonH as Button} from 'react-bootstrap/Button';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Card from 'react-bootstrap/Card';

function ProductCard ({img,title,desc,originalPrice,size,salePrice}) {
  console.log(img,title,desc,originalPrice,size,(salePrice));
  return (

    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src= {`${img[0]}`} />
      <Card.Body>
        <Card.Title style={{fontWeight:"600",fontSize:"18px"}}>{title}</Card.Title>
        {/* <Card.Text>{desc}</Card.Text> */}
        <p style={{width:"100%"}}>Price : <span style={{textDecoration:"line-through"}}>INR {originalPrice}</span> <span style={{color:"red"}}>INR {salePrice}</span></p>
        {/* <p style={{width:"100%"}}>Size : {size && size[0]}</p> */}
        <br/> <br/>
        <Button colorScheme='blue' mt='-10' style={{width:"100%"}}>Buy</Button>
      </Card.Body>
    </Card>

    
  );
}

export default ProductCard;