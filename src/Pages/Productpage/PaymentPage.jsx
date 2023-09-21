import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";

import { BsCart, BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineGift } from "react-icons/ai";
import { SettingsIcon } from "@chakra-ui/icons";
import { MdOutlineFeedback } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import PersonalInfo from "../Checkoutpage/PersonalInfo";
import Myorder from "../Checkoutpage/Myorder";
import PaymentCards from "../Checkoutpage/PaymentCards";
import MyWishlist from "../Checkoutpage/MyWishlist";
import Breadcrumbs from "../../Components/Breadcrumb";

const PaymentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [selectedBox, setSelectedBox] = useState(0);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  return (
    <Box bgColor="#262626" p={5}>
      <Breadcrumbs />
      <Flex mt={"20px"}>
        <Box w="30%" p={4}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            marginBottom={10}
            color="white"
          >
            ACCOUNT EDIT
          </Text>
          <Container
            mt={4}
            p={2}
            color="white"
            fontSize={"xl"}
            _hover={{ cursor: "pointer" }}
          >
            <Box onClick={() => handleBoxClick(0)}>
              <Flex
                align="center"
                color={selectedBox === 0 ? "yellow.500" : "white"}
              >
                <RiAccountCircleFill size={24} />
                <Text ml={1}>PERSONAL INFORMATION</Text>
              </Flex>
            </Box>
            <Divider mt={2} mb={2} />
            <Box onClick={() => handleBoxClick(1)}>
              <Flex
                align="center"
                color={selectedBox === 1 ? "yellow.500" : "white"}
              >
                <BsCart />
                <Text ml={2}>MY ORDERS</Text>
              </Flex>
            </Box>
            <Divider mt={2} mb={2} />
            <Box onClick={() => handleBoxClick(2)}>
              <Flex
                align="center"
                color={selectedBox === 2 ? "yellow.500" : "white"}
              >
                <AiOutlineGift />
                <Text ml={2}>COUPONS</Text>
              </Flex>
            </Box>
            <Divider mt={2} mb={2} />
            <Box onClick={() => handleBoxClick(3)}>
              <Flex
                align="center"
                color={selectedBox === 3 ? "yellow.500" : "white"}
              >
                <BsCreditCard2Back />
                <Text ml={2}>PAYMENT CARDS</Text>
              </Flex>
            </Box>
            <Divider mt={2} mb={2} />

            <Box onClick={() => handleBoxClick(4)}>
              <Flex
                align="center"
                color={selectedBox === 4 ? "yellow.500" : "white"}
              >
                <AiOutlineHeart />
                <Text ml={2}>MY WISHLIST</Text>
              </Flex>
            </Box>
            <Divider mt={2} mb={2} />
            <Box onClick={() => handleBoxClick(5)}>
              <Flex
                align="center"
                color={selectedBox === 5 ? "yellow.500" : "white"}
              >
                <SettingsIcon />
                <Text ml={2}>SERVICE</Text>
              </Flex>
            </Box>
            <Divider mt={2} mb={2} />
            <Box onClick={() => handleBoxClick(6)}>
              <Flex
                align="center"
                color={selectedBox === 6 ? "yellow.500" : "white"}
              >
                <MdOutlineFeedback />
                <Text ml={2}>FEEDBACKS & QUESTIONS</Text>
              </Flex>
            </Box>
          </Container>
        </Box>
        <Box w="70%">
          {selectedBox === 0 ? (
            <PersonalInfo setSelectedBox={setSelectedBox} />
          ) : selectedBox === 1 ? (
            <Myorder setSelectedBox={setSelectedBox} />
          ) : selectedBox === 2 ? (
            <h1>coupon</h1>
          ) : selectedBox === 3 ? (
            <PaymentCards />
          ) : (
            <MyWishlist />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentPage;
