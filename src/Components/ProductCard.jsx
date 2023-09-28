import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState, useRef } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addWish, postCartProduct, removeWish } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { BsCart3 } from "react-icons/bs";

const ProductCard = ({ productData }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [wish, setWish] = useState(false);
  const toast = useToast();
  const toastIdRef = useRef();
  const dispatch = useDispatch();
  const currUser = useSelector((store) => store.accountReducer.currUser);

  // console.log(currUser)

  const cartData = useSelector((store) => {
    return store.cartReducer.cartProducts;
  });
  const wishData = useSelector((store) => {
    return store.wishReducer.WishProducts;
  });

  const wishProd = wishData.find((prod) => {
    return prod.productId === productData._id || prod._id === productData._id;
  });

  const handleColorClick = (index) => {
    setImageIdx(index);
  };

  useEffect(() => {
    console.log(wishProd)
    if (wishProd) {
      setWish(true);
    } else {
      setWish(false);
    }
  }, [wishData, productData._id]);

  const handleAddToCart = () => {
    const existProd = cartData.find(
      (prod) => prod.productId === productData.productId
    );
    if (existProd) {
      toastIdRef.current = toast({
        description: "Product Already Present in cart",
      });
    } else {
      if (!currUser) {
        toast({
          title: "Need To Login First",
          status: "error",
          isClosable: true,
        });
        return;
      }
      let userId = currUser._id;
      dispatch(postCartProduct(productData, userId));
      toast({
        title: "Item added to Cart",
        status: "success",
        isClosable: true,
      });
    }
  };

  const handleAddToWishlist = () => {
    // If user is not logged in
    if (!currUser || Object.keys(currUser).length === 0) {
      toast({
        title: "Need To Login First",
        status: "error",
        isClosable: true,
      });
    } else {
      let userId = currUser._id;
      dispatch(addWish(productData, userId));
      toast({
        title: "Added To WishList",
        status: "success",
        position: "top-center",
        isClosable: true,
      });
    }
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeWish(wishProd._id));
    toast({
      title: "Removed From WishList",
      status: "warning",
      position: "top-center",
      isClosable: true,
    });
  };

  const navigate = useNavigate();
  const discount = productData.discount;

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
        _hover={{ cursor: "pointer" }}
        onClick={() => navigate(`/productPage/details/${productData._id}`)}
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
              €
              {Math.floor(
                productData.price + (discount / 100) * productData.price
              )}
            </Text>
            <Text color={"red"}>{discount}%off</Text>
          </Flex>
        )}
        <Text>€{productData.price}</Text>
      </Box>
      <Flex m={"5px"} justify={"space-between"} align={"center"}>
        <Box>
          <IconButton
            aria-label="Search database"
            border=""
            icon={
              wish ? (
                <FaHeart size={"30px"} color="red" />
              ) : (
                <FaRegHeart size={"30px"} color="red" />
              )
            }
            // variant="outline"
            p={""}
            bg={"#f3f0f3"}
            _hover={{ bg: "#f3f0f3" }}
            onClick={() => {
              if (wish) {
                handleRemoveFromWishlist();
              } else {
                handleAddToWishlist();
              }
            }}
          />
        </Box>

        <Button colorScheme="red" size={{ base: "sm", md: "md" }}>
          <Text onClick={handleAddToCart} fontSize={{ base: "sm" }}>
            ADD TO CART
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
