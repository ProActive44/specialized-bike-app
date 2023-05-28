import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { postCartProduct } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ productData, discount }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [wish, setWish] = useState(false);
  const dispatch = useDispatch()
  const cartData = useSelector((store)=>{
    return store.cartReducer.cartProducts;
  })

  const handleColorClick = (index) => {
    setImageIdx(index);
  };

  const handleAddToCart = ()=>{
    const existProd = cartData.find((prod)=>prod.id === productData.id)
    if(existProd){
      alert("product already exist")
    }else{
      dispatch(postCartProduct(productData, ))
      alert("Item added to cart")
    }
  }

  //   console.log(typeof(productData.price))

  return (
    <Box
      bg={"#f3f0f3"}
      color={"black"}
      borderRadius={"20px"}
      p="10px"   
      textAlign="left" 
      //   w={'250px'}
      //   h={"300px"}
    >
      <Image
        w="100%"
        src={productData.images[imageIdx]}
        borderRadius={"20px"}
        m={"auto"}
        p={"10px"}
      />
      <Flex my={"10px"}>
        {productData.color.map((color, index) => {
          return (
            <Box
              key={index}
              width="20px"
              height="20px"
              borderRadius="50%"
              border={"0.5px solid black"}
              backgroundColor={color}
              mr={2}
              cursor="pointer"
              onClick={() => handleColorClick(index)}
            />
          );
        })}
      </Flex>
      <Box py={"5px"}>
        <Heading size={"sm"} my={"5px"}>
          {productData.name}
        </Heading>
        {discount && (
          <Flex gap={"5px"}>
            <Text as="del" color={"grey"}>
              €{Math.floor(
                productData.price + productData.price / discount
              )}
            </Text>
            <Text color={"red"}>{discount}%off</Text>{" "}
          </Flex>
        )}
        <Text>€{productData.price}</Text>
      </Box>
      <Flex m={"5px"} justify={"space-between"} align={"center"}>
        <Box>
          <IconButton
            aria-label="Search database"
            icon={
              wish ? (
                <FaHeart size={"30px"} color="red" />
              ) : (
                <FaRegHeart size={"30px"} color="red" />
              )
            }
            variant="outline"
            p={""}
            onClick={() => {
              setWish((prev) => !prev);
            }}
          />
          {/* <FaRegHeart size={'30px'} /> */}
        </Box>
        <Button variant="outline" colorScheme="orange" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
