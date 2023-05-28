import {
  Box,
  Image,
  Show,
  Flex,
  HStack,
  Link,
  Hide,
  InputGroup,
  Input,
  InputRightAddon,
  Spacer,
  Text,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom"
import React, { useEffect } from "react";
import Logo from "../Images/Mainlogo.png";
import { Search2Icon } from "@chakra-ui/icons";
import wishIcon from "../Images/Wishlist icon.png";
import cartIcon from "../Images/CartIcon.png";
import accountIcon from "../Images/AccountIcon.png";
import "./Navbar.css";
import MenuBtn from "./MenuBtn";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../Redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartReducer = useSelector((store) => {
    return store.cartReducer;
  });
  const number = cartReducer.cartProducts.length
  console.log(number);

  useEffect(() => {
    dispatch(getCartProducts);
  }, []);
  return (
    <>
      <Box
        maxW={"1366px"}
        bg={"rgb(28,28,28)"}
        // m={"auto"}
        h={["55px", "55px", "65px", "65px", "65px", "65px"]}
        position={"sticky"}
        top={0}
        zIndex={"1000"}
        // border={'1px solid red'}
      >
        <Flex align={"center"} mx={"20px"}>
          {/* Hidden menu */}
          <Box position="relative" ml={"10px"}>
            <Show below="lg">
              <MenuBtn />
            </Show>
          </Box>
          {/* <Spacer /> */}

          {/* LogoBox */}
          <Box ml={"20px"} w={"120px"} mr={"10px"}>
            <Image maxW={"100%"} src={Logo} py={"5px"} />
          </Box>

          {/* Categories */}
          <Box>
            <Hide below="md">
              <HStack color={"white"} spacing="10px">
                <Link
                  to="/mountain"
                  className="categories"
                  _hover={{ underLine: "none" }}
                >
                  MOUNTAIN
                </Link>
                <Link
                  to="/mountain"
                  className="categories"
                  _hover={{ underLine: "none" }}
                >
                  ROAD
                </Link>
                <Link
                  to="/mountain"
                  className="categories"
                  _hover={{ underLine: "none" }}
                >
                  ACTIVE
                </Link>
                <Link
                  to="/mountain"
                  className="categories"
                  _hover={{ underLine: "none" }}
                >
                  ELECTRIC
                </Link>
                <Link
                  to="/mountain"
                  className="categories"
                  _hover={{ underLine: "none" }}
                >
                  KIDS
                </Link>
              </HStack>
            </Hide>
          </Box>
          <Spacer />

          {/* Search Box */}
          <Box mx={[null, "sm", "md", "lg", "xl", "2xl"]} pt="5px">
            <InputGroup borderRadius={"20px"}>
              <Input
                className="searchInput"
                focusBorderColor="none"
                placeholder="Search"
                // h={{sm:"2px"}}
                size={["sm", "sm", "sm", "sm", "xl", "2xl"]}
                w={["150px", "250px", "200px", "200px", "320px", "400px"]}
                style={{
                  fontSize: "small",
                  outline: "none",
                  border: "0.13rem solid white",
                  paddingLeft: "15px",
                  paddingRight: "50px",
                  background: "black",
                  color: "white",
                  //   width: "400px",
                  borderRadius: "20px",
                }}
              />
              <InputRightAddon
                zIndex="1"
                // as={"Button"}
                ml={"-50px"}
                mt={["-4px", null, null, "-3px", "-3px", "1px"]}
                // mr={['-2px', null, null,'-8px','-3px','4px']}
                border={"none"}
                borderRadius={"20px"}
                bg={"none"}
                color={"grey"}
              >
                <Search2Icon />
              </InputRightAddon>
            </InputGroup>
          </Box>
          <Spacer />

          <Hide below="lg">
            <Box mr={"20px"}>
              <HStack spacing={"10px"}>
                <Link>
                  <Image
                    src={wishIcon}
                    alt="cartIcon"
                    color={"white"}
                    w={"40px"}
                  />
                </Link>
                <Link >
                  
                  <Text position={'absolute'} ml={'75px'} color={'white'} bg={'red'} borderRadius={'15px'} px={'3px'} >{number > 0 && <span>{number}</span>}</Text>
                  <Image
                    src={cartIcon}
                    alt="cartIcon"
                    color={"white"}
                    w={"80px"}
                  />
                </Link>
                <Link>
                  <Image
                    src={accountIcon}
                    alt="cartIcon"
                    color={"white"}
                    w={"40px"}
                  />
                 
                </Link>
              </HStack>
            </Box>
          </Hide>
        </Flex>
        {/* White line */}
      </Box>

      <Box
        position={"sticky"}
        zIndex={200}
        top={["55px", "55px", "65px", "65px", "65px", "65px"]}
        bg="white"
        maxW={"1366px"}
        h={"0.6px"}
        mx={["10px", "20px", "30px", "40px"]}
      ></Box>

      {/* navBelow */}
      <Box
        maxW={"1366px"}
        h={["35px", "40px", "45px"]}
        position={"sticky"}
        top={["56px", "56px", "66px", "66px", "66px", "66px"]}
        //   border="1px solid white"
        zIndex={"100"}
        bgGradient="linear(rgb(28,28,28) 30%, rgb(32,26,14) 15%, rgb(32,26,14) 0%)"
      >
        <HStack
          color="grey"
          justify={"flex-end"}
          mx={"40px"}
          spacing={"15px"}
          className="navBelow"
        >
          <Link className="navBelowLink" _hover={{ underLine: "none" }}>
            Abount us
          </Link>
          <Link className="navBelowLink" _hover={{ underLine: "none" }}>
            Delivery
          </Link>
          <Link className="navBelowLink" _hover={{ underLine: "none" }}>
            Payment
          </Link>
          <Link className="navBelowLink" _hover={{ underLine: "none" }}>
            Contact
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
