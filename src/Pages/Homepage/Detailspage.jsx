import React, { useEffect, useRef } from "react";
import {
  Box,
  Image,
  Heading,
  Flex,
  Text,
  Button,
  IconButton,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addWish,
  getSingleProduct,
  postCartProduct,
  removeWish,
} from "../../Redux/action";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddIcon,
  MinusIcon,
  WarningTwoIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { TableComp } from "../../Components/TableComp";
import visa from "../../Images/Visa.png";
import cash from "../../Images/Cash.png";
import masterCard from "../../Images/MasterCard.png";
import Breadcrumbs from "../../Components/Breadcrumb";

const Detailspage = () => {
  const [wish, setWish] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const toast = useToast();
  const toastIdRef = useRef();
  const dispatch = useDispatch();
  const currUser = useSelector((store) => store.accountReducer.currUser);
  const currproduct = useSelector((store) => {
    return store.productsReducer.currProduct;
  });
  const isLoading = useSelector((store) => {
    return store.productsReducer.isLoading;
  });
  const wishData = useSelector((store) => {
    return store.wishReducer.WishProducts;
  });
  const cartData = useSelector((store) => {
    return store.cartReducer.cartProducts;
  });

  const wishProd = wishData.find((prod) => {
    return prod.productId === currproduct._id || prod._id === currproduct._id;
  });
  const existProdInCart = cartData.find((prod) => {
    return prod.productId === currproduct._id || prod._id === currproduct._id;
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleColorClick = (index) => {
    setImageIdx(index);
  };

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (wishProd) {
      setWish(true);
    } else {
      setWish(false);
    }
  }, [wishData, currproduct._id]);

  const handleAddToCart = () => {
    // If user is not logged in
    if (!currUser || Object.keys(currUser).length === 0) {
      toast({
        title: "Need To Login First",
        status: "error",
        isClosable: true,
      });
    } else {
      if (existProdInCart) {
        toastIdRef.current = toast({
          description: "Product Already Present in cart",
        });
      } else {
        let userId = currUser._id;
        dispatch(postCartProduct(currproduct, userId));
        toast({
          title: "Item added to Cart",
          status: "success",
          isClosable: true,
        });
      }
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
      dispatch(addWish(currproduct, userId));
      toast({
        title: "Added To WishList",
        status: "success",
        position: "top-left",
        isClosable: true,
      });
    }
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeWish(wishProd._id));
    toast({
      title: "Removed From WishList",
      status: "warning",
      position: "top-left",
      isClosable: true,
    });
  };

  const handlequickOrder = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const discount = currproduct.discount;

  return (
    <Box
      w={{ base: "98%", sm: "95%", md: "90%" }}
      m="auto"
      my={"50px"}
      color={"white"}
    >
      {!isLoading && currproduct.images !== undefined ? (
        <Box>
          <Breadcrumbs />
          <Flex
            columnGap={"40px"}
            rowGap={{ base: "10px", md: null }}
            mt="30px"
            flexWrap={"wrap"}
          >
            {/* Image Div */}
            <Box
              p={{ base: "10px", sm: "20px", md: "40px" }}
              bg={"#f3f0f3"}
              borderRadius={"10px"}
              w="48%"
              flexGrow={"1"}
            >
              <Image src={currproduct.images[imageIdx]} />
            </Box>

            {/* Heading Div */}
            <Box w="48%" flexGrow={"1"} textAlign={"left"} pl={"10px"}>
              <Heading color={"white"}>{currproduct.name}</Heading>

              {/* Starts and Available Items */}
              <Flex
                my={{ base: "10px", sm: "10px", md: "20px" }}
                justify={"space-between"}
              >
                <Flex>
                  {currproduct.rating >= 1 ? (
                    <AiFillStar size={"20px"} color="#eda515" />
                  ) : (
                    <AiOutlineStar size={"20px"} color="#eda515" />
                  )}
                  {currproduct.rating >= 2 ? (
                    <AiFillStar size={"20px"} color="#eda515" />
                  ) : (
                    <AiOutlineStar size={"20px"} color="#eda515" />
                  )}
                  {currproduct.rating >= 3 ? (
                    <AiFillStar size={"20px"} color="#eda515" />
                  ) : (
                    <AiOutlineStar size={"20px"} color="#eda515" />
                  )}
                  {currproduct.rating >= 4 ? (
                    <AiFillStar size={"20px"} color="#eda515" />
                  ) : (
                    <AiOutlineStar size={"20px"} color="#eda515" />
                  )}
                  {currproduct.rating >= 5 ? (
                    <AiFillStar size={"20px"} color="#eda515" />
                  ) : (
                    <AiOutlineStar size={"20px"} color="#eda515" />
                  )}
                  <Text ml={"10px"} color={"grey"}>
                    {currproduct.rating}
                  </Text>
                </Flex>
                <Flex
                  gap={{ base: "10px", sm: "20px" }}
                  mr={{ base: "20px", sm: "50px", md: "100px" }}
                >
                  <Text
                    mt="-3px"
                    color={currproduct.discount < 10 ? "red" : "green"}
                  >
                    {currproduct.discount < 10 ? "Only few Left" : "In Stocks"}
                  </Text>
                  {currproduct.discount < 10 ? (
                    <Icon color="red" as={WarningTwoIcon} />
                  ) : (
                    <Icon color={"green"} as={CheckCircleIcon} />
                  )}
                  <Text mt={"-4px"} color="grey">
                    {currproduct.discount * 10}
                  </Text>
                </Flex>
              </Flex>

              {/* Color Div */}
              <Flex my={"20px"}>
                <Text mr="10px">Color:</Text>
                {currproduct.color.map((color, index) => {
                  return (
                    <Box
                      key={index}
                      width="25px"
                      height="25px"
                      borderRadius="50%"
                      backgroundColor={color}
                      mr={2}
                      cursor="pointer"
                      onClick={() => handleColorClick(index)}
                    />
                  );
                })}
              </Flex>

              {/* Discount and price */}
              {discount && (
                <Flex gap={"5px"}>
                  <Text as="del" color={"grey"}>
                    €
                    {Math.floor(
                      currproduct.price + (discount / 100) * currproduct.price
                    )}
                  </Text>
                  <Text color={"red"} ml={"5px"}>
                    {discount}%off
                  </Text>{" "}
                </Flex>
              )}
              <Text my={"20px"}>€{currproduct.price}</Text>

              <Divider orientation="horizontal" />

              {/* Cart and Order Buttons */}
              <Flex my={"20px"} gap={{ base: "10px", sm: "20px" }}>
                <Button colorScheme="red" onClick={handleAddToCart} fontSize={{base:'small', sm:"medium"}}>
                  <BsCart3 size={20} />
                  <Text ml={{ base: "0", sm: "10px" }}>ADD TO CART</Text>
                </Button>
                <Button colorScheme="yellow" onClick={handlequickOrder} 
                fontSize={{base:'small', sm:"medium"}}
                >
                  QUICK ORDER
                </Button>
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
                    bg={"rgb(38,38,38)"}
                    _hover={{ bg: "rgb(38,38,38)" }}
                    onClick={() => {
                      if (wish) {
                        handleRemoveFromWishlist();
                      } else {
                        handleAddToWishlist();
                      }
                    }}
                  />
                </Box>
              </Flex>

              <Divider orientation="horizontal" />
            </Box>

            {/* CHARACTERISTICS Div */}
            <Box
              w="48%"
              flexGrow={"1"}
              bg={"#f3f0f3"}
              color={"black"}
              p={"30px"}
              borderRadius={"10px"}
              textAlign={"left"}
              mt={"20px"}
            >
              <Flex direction={"column"} gap={"10px"}>
                <Text fontSize={"2xl"} mb={"30px"} letterSpacing={"0.1em"}>
                  CHARACTERISTICS
                </Text>{" "}
                <Divider h={"1px"} bg={"grey"} />
                <Flex justify={"space-between"}>
                  <Text>Front wheel</Text> <Text>Traverse SL 29</Text>
                </Flex>{" "}
                <Divider h={"1px"} bg={"grey"} />
                <Flex justify={"space-between"}>
                  <Text>Rear Wheel</Text> <Text>TRAVERSE SL 29</Text>
                </Flex>{" "}
                <Divider h={"1px"} bg={"grey"} />
                <Flex justify={"space-between"}>
                  <Text>Front Tire</Text>{" "}
                  <Text>BUTCHER GRID TRAIL T9 29×2.3"</Text>
                </Flex>{" "}
                <Divider h={"1px"} bg={"grey"} />
                <Flex justify={"space-between"}>
                  <Text>Inner Tubes</Text> <Text>STANDARD, PRESTA VALUE</Text>
                </Flex>{" "}
                <Divider h={"1px"} bg={"grey"} />
                <Flex justify={"space-between"}>
                  <Text>Front wheel</Text>{" "}
                  <Text>BUTCHER GRID TRAIL T7 29 × 2.3"</Text>
                </Flex>{" "}
                <Divider h={"1px"} bg={"grey"} />
              </Flex>
            </Box>

            {/**/}
            <Box w="48%" flexGrow={"1"} textAlign={"left"}>
              {/* Payment Div */}
              <Box
                bg={"#f3f0f3"}
                color="black"
                p={{ base: "10px", sm: "20px" }}
                borderRadius={"10px"}
                my={{ base: "5px", sm: "20px" }}
              >
                <Flex gap="10px" align={"center"}>
                  <IoWalletOutline size={30} color="green" />
                  <Text>PAYMENT</Text>
                </Flex>
                <Flex
                  w={{ base: "100%", sm: "90%" }}
                  m={"20px auto"}
                  textAlign={"center"}
                  justify={"space-evenly"}
                >
                  <Flex
                    direction={"column"}
                    w={{ base: "33%", sm: "30%" }}
                    border={"1px solid grey"}
                    p="10px"
                    borderRadius={"10px"}
                  >
                    <Text>Payment by card online</Text>
                    <Image w="90%" m="auto" src={visa} />
                  </Flex>
                  <Flex
                    direction={"column"}
                    w={{ base: "32%", sm: "30%" }}
                    border={"1px solid grey"}
                    p="10px"
                    borderRadius={"10px"}
                  >
                    <Text>Payment by cash</Text>
                    <Image w="60%" m="auto" src={cash} />
                  </Flex>
                  <Flex
                    direction={"column"}
                    w={{ base: "33%", sm: "30%" }}
                    border={"1px solid grey"}
                    p="10px"
                    borderRadius={"10px"}
                  >
                    <Text>Payment by card online</Text>
                    <Image w="90%" m="auto" src={masterCard} />
                  </Flex>
                </Flex>
              </Box>

              {/* Warranty Div */}
              <Box
                bg={"#f3f0f3"}
                color="black"
                p="20px"
                borderRadius={"10px"}
                my={"20px"}
              >
                <Flex gap="10px">
                  <CheckCircleIcon color="green" mt="5px" />
                  <Text>WARRANTY: </Text>
                  <Text>
                    2 years for registered products and 1 year for not
                    registered products
                  </Text>
                </Flex>
              </Box>

              {/* Exchange Div */}
              <Box
                bg={"#f3f0f3"}
                color="black"
                p="20px"
                borderRadius={"10px"}
                my={"20px"}
              >
                <Flex>
                  <Flex gap={{ base: "5px", sm: "10px" }}>
                    <GiReturnArrow color="green" size={24} />
                    <Text>EXCHANGE & RETURN: </Text>
                  </Flex>
                  <Text ml={{ base: "5px", sm: "10px" }}>within 14 days</Text>
                </Flex>
              </Box>
            </Box>

            {/* Description Div */}
            <Box
              bg={"#f3f0f3"}
              color={"black"}
              textAlign={"left"}
              pt={"10px"}
              p={"30px"}
              borderRadius={"10px"}
              overflow={"scroll"}
            >
              <Text fontSize={"2xl"} mb={"30px"} letterSpacing={"0.1em"}>
                DESCRIPTION
              </Text>
              <Text my={"15px"}>
                Power up to trail riding's next level and dominate any and all
                trail monsters the Turbo Kenevo Super Light melds the legendary
                handling and all-around big trail prowess of the Enduro with our
                Super Light electric support to deliver indomitable capability,
                light weight, and power to conquer more and bigger trails.
              </Text>
              <Text my={"15px"}>
                The Turbo Kenevo Super Light puts the "E" in our Enduro,
                delivering more of what you want from your trail ride-more
                capability everywhere, more power to climb, more pop when you
                really need it, more adrenaline. More laps, more jumps, more
                drops, faster rides with fresher legs.
              </Text>
              <Text my={"15px"}>
                And it does all this with less. Carrying much less weight than
                bulkier e-MTBs. the Turbo Kenevo Super Light is hyper-responsive
                and just as willing and able to redefine big trail performance
                as our Enduro. Level up your trail game.
              </Text>
              <Accordion allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Bike Geometry
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <TableComp />
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Manual Downloads
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <a
                          href="https://media.specialized.com/support/collateral/Future_Shock_Retrofit_Compatibility_Tech_Bulletin_Swedish.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text as={"p"} color="grey" ml="10px">
                            {currproduct.name}.pdf
                          </Text>
                        </a>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Box>
            {/* </Box> */}
          </Flex>
        </Box>
      ) : (
        <Heading fontSize={{ base: "5xl", sm: "7xl", md: "9xl" }}>
          Loading...
        </Heading>
      )}
    </Box>
  );
};

export default Detailspage;
