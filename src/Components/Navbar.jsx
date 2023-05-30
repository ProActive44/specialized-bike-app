import {
  Box,
  Image,
  Show,
  Flex,
  HStack,
  Hide,
  InputGroup,
  Input,
  InputRightAddon,
  Spacer,
  Text,
  MenuButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  useDisclosure,
  Avatar,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Logo from "../Images/Mainlogo.png";
import { ChevronDownIcon, EmailIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import wishIcon from "../Images/Wishlist icon.png";
import cartIcon from "../Images/CartIcon.png";
import accountIcon from "../Images/AccountIcon.png";
import "./Navbar.css";
import MenuBtn from "./MenuBtn";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, logOutUser } from "../Redux/action";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
  const cartReducer = useSelector((store) => {
    return store.cartReducer;
  });
  const currUser = useSelector((store) => {
    return store.accountReducer.currUser;
  });
  console.log("curruser", currUser);
  const number = cartReducer.cartProducts.length;
  // console.log(cartReducer);


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
              <MenuBtn cartNumber={number} currUser={currUser} />
            </Show>
          </Box>
          {/* <Spacer /> */}

          {/* LogoBox */}
          <Box ml={"20px"} w={"120px"} mr={"10px"}>
            <Link to="/">
              <Image maxW={"100%"} src={Logo} py={"5px"} />
            </Link>
          </Box>

          {/* Categories */}
          <Box>
            <Hide below="md">
              <HStack color={"white"} spacing="10px">
                <Link
                  to="/productPage"
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
                <Link to='wishlist'>
                  <Image
                    src={wishIcon}
                    alt="wishIcon"
                    color={"white"}
                    w={"40px"}
                  />
                </Link>
                <Link>
                  <Text
                    position={"absolute"}
                    ml={"75px"}
                    color={"white"}
                    bg={"red.500"}
                    borderRadius={"15px"}
                    px={"3px"}
                  >
                    {number > 0 && <span>{number}</span>}
                  </Text>
                  <Image
                    src={cartIcon}
                    alt="cartIcon"
                    color={"white"}
                    w={"80px"}
                    pt="5px"
                  />
                </Link>
                <Link>
                  <Menu >
                    {({ isOpen }) => (
                      <>
                        <MenuButton>
                          <Image
                            isActive={isOpen}
                            src={accountIcon}
                            alt="accountIcon"
                            color={"white"}
                            w={"40px"}
                            pt={'8px'}
                          />
                        </MenuButton>
                        <MenuList p={'10px'} bg={'rgb(38,38,38)'} color={'white'} textAlign={'center'} border={'none'} boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, white 0px 1px 3px 1px'>
                          {Object.keys(currUser).length === 0 ? (<>
                            <MenuItem bg={'yellow.500'} borderRadius={'5px'}>You are not logged in</MenuItem> <MenuDivider />
                            <MenuItem bg={'rgb(38,38,38)'} _hover={{ bg: "red" }} borderRadius={'10px'}>
                              <Link to="/login">
                                <Text w='100%' px={'60px'} >SIGN IN </Text>
                              </Link>
                            </MenuItem >
                            {/* <br /> */}
                            <MenuItem bg={'rgb(38,38,38)'} _hover={{ bg: "red" }} borderRadius={'10px'}>
                              <Link to="/signup">
                                <Text w='100%' _hover={{ bg: "red" }} px={'60px'} >SIGN UP </Text>
                              </Link>
                              <br />
                            </MenuItem> </>
                          ) : (
                            <Box borderRadius={'10px'} >
                              <Text py={'5px'}>ACCOUNT</Text> <MenuDivider />
                              <Button
                                leftIcon={<Avatar size={"xs"} bg="blue.600" />}
                                w="100%"
                                borderRadius={"10px 10px 0 0"}
                                variant="outline"
                                colorScheme="facebook"
                              >
                                {currUser.firstName + " " + currUser.lastName}
                              </Button>
                              <br />
                              <Button
                                leftIcon={<PhoneIcon />}
                                w="100%"
                                borderRadius={"0"}
                                colorScheme="facebook"
                              >
                                {currUser.contact}
                              </Button>
                              <Button
                                leftIcon={<EmailIcon />}
                                w="100%"
                                borderRadius={"0"}
                                variant="outline"
                                colorScheme="facebook"
                              >
                                {currUser.email}
                              </Button>
                              <br />
                              <Button
                                w="100%"
                                colorScheme="red"
                                borderRadius={"10"}
                                mt={"10px"}
                                onClick={() => { dispatch(logOutUser); navigate("/") }}
                              >
                                LOGOUT
                              </Button>
                            </Box>
                          )}
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Link>
              </HStack>
            </Box>
          </Hide>
        </Flex>
      </Box>

      {/* White line */}
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