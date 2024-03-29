import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWishList } from "../Redux/action";
import {
  Box,
  Button,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  Flex,
} from "@chakra-ui/react";
// import { AddIcon } from '@chakra-ui/icons'
import ProductCard from "./ProductCard";
// import { MinusIcon } from '@chakra-ui/icons';
import Breadcrumbs from "./Breadcrumb";
import { Link } from "react-router-dom";

export default function Wishlist({ onOrder }) {
  const data = useSelector((state) => state.wishReducer.WishProducts);
  const currUser = useSelector((store) => {
    return store.accountReducer.currUser;
  });
  const dispatch = useDispatch();

  let userId = currUser._id;
  useEffect(() => {
    dispatch(getWishList(userId));
  }, [dispatch, userId]);

  if (data.length === 0) {
    return (
      <Box my={"50px"} color="white">
        <Box
          h="400px"
          border={"1px solid grey"}
          w={{ base: "90%", sm: "80%", md: "50%", lg: "30%" }}
          m="auto"
          borderRadius={"20px"}
          p="10px"
          position={"relative"}
        >
          <Skeleton borderRadius={"20px"}>
            <div>this</div>
            <div>is</div>
            <div>a</div>
            <div>skeleton</div>
            <div>skeleton</div>
            <div>skeleton</div>
            <div>skeleton</div>
          </Skeleton>
          <SkeletonCircle size="10" mt="4" />
          <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="2" />
          <Box
            position={"absolute"}
            top={"5%"}
            textAlign={"center"}
            w="95%"
            m="auto"
          >
            <Heading color={"yellow"}> Your Wishlist is Empty </Heading>
            <Text my={"15px"}>Add some products to you wishlist</Text>
            <Link to="/productPage">
              <Button colorScheme="red">GO TO ALL PRODUCTS</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box my={"40px"}>
      {data.length === 0 ? (
        <Heading color={"white"} fontSize={"9xl"}>
          Loading
        </Heading>
      ) : (
        <Box>
          {!onOrder && <Breadcrumbs w="80%" m="auto" />}
          <Heading color={"white"} letterSpacing={"0.2em"}>
            WISHLIST
          </Heading>
          <Flex>
            <Box
              w={{ base: "90%", sm: "85%", md: "75%" }}
              m="auto"
              display={"grid"}
              gridTemplateColumns={
                onOrder
                  ? {
                      base: "repeat(1fr)",
                      // sm: "repeat(2, 1fr)",
                      lg: "repeat(2, 1fr)",
                      xl: "repeat(3, 1fr)",
                    }
                  : {
                      base: "repeat(1fr)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                    }
              }
              gap="20px"
              paddingTop={"2em"}
            >
              {data?.map((prod) => {
                return <ProductCard productData={prod} key={prod._id} />;
              })}
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
