import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Divider,
  Flex,
  FormControl,
  
  Input,
  Select,
  Stack,
  Text,
  Button,
  TagLeftIcon,
} from '@chakra-ui/react';
import { BsCart, BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineGift } from "react-icons/ai";
import { SettingsIcon } from "@chakra-ui/icons";
import { MdOutlineFeedback } from "react-icons/md";


const PaymentPage = () => {
    return (
      <ChakraProvider>
        <Box  bgColor="#262626" p={10}>
          <Flex h="100%">
            <Box w="1/3" p={4}>
              <Text fontSize="5xl" fontWeight="bold" marginTop={10}  marginBottom={10} color="white">
                ACCOUNT EDIT
              </Text>
              <Container  mt={4} p={2}  color="white">
                <Box >
                  <Flex align="center">
                    <BsCart />
                    <Text ml={2}>MY ORDERS</Text>
                  </Flex>
                </Box>
                <Divider mt={2} mb={2} />
                <Box>
                  <Flex align="center">
                    <AiOutlineHeart />
                    <Text ml={2}>MY WISHLIST</Text>
                  </Flex>
                </Box>
                <Divider mt={2} mb={2} />
                <Box>
                  <Flex align="center">
                    <BsCreditCard2Back />
                    <Text ml={2}>PAYMENT CARDS</Text>
                  </Flex>
                </Box>
                <Divider mt={2} mb={2} />
                <Box>
                  <Flex align="center">
                    <AiOutlineGift />
                    <Text ml={2}>COUPONS</Text>
                  </Flex>
                </Box>
                <Divider mt={2} mb={2} />
                <Box>
                  <Flex align="center">
                    <SettingsIcon />
                    <Text ml={2}>SERVICE</Text>
                  </Flex>
                </Box>
                <Divider mt={2} mb={2} />
                <Box>
                  <Flex align="center">
                    <MdOutlineFeedback />
                    <Text ml={2}>FEEDBACKS & QUESTIONS</Text>
                  </Flex>
                </Box>
              </Container>
            </Box>
           
            <Box w="2/3" p={4} marginTop={20} marginLeft={20}>
              <Text fontSize="xl" fontWeight="bold" mb={4}  paddingTop={10}  color="white">
                MAIN PERSONAL INFO
              </Text>
              <Stack spacing={4}>
                <Flex>
                <FormControl>
                  
                  <Input type="text" placeholder="Enter your name" width="100%"/>
                </FormControl>
                <FormControl>
                  
                  <Input type="email" placeholder="Enter your email" width="200%" marginLeft={15} />
                </FormControl>
                </Flex>
                <Flex>
                <FormControl>
                  
                  <Input type="tel" placeholder="Enter your mobile number"/>
                </FormControl>
                <FormControl>
                 
                  <Select placeholder="Select your gender" marginLeft={15} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                </Flex>
              </Stack>
              <Text fontSize="xl" fontWeight="bold" mt={10} mb={4}  color="white">
                MY DELIVERY ADDRESS
              </Text>
              <Stack spacing={4}>
                <FormControl>
                  
                  <Input type="text" placeholder="Enter your address" />
                </FormControl>
                <FormControl >
                  
                  <Input type="text" placeholder="Enter your pincode"   />
                </FormControl>
              </Stack>
              <Text fontSize="xl" fontWeight="bold" mt={10} mb={4}  color="white">
                PAYMENT INFO
              </Text>
              <Stack spacing={4}>
                <FormControl>
                  
                  <Select placeholder="Select payment method" color="black"
                    placeholderTextColor="white" >
                    <option  value="card">Card Payment</option>
                    <option  value="cash">Cash on Delivery</option>
                    <option  value="upi">UPI Payment</option>
                  </Select>
                </FormControl>
                <FormControl>
                  
                  <Input type="text" placeholder="Enter cardholder name" />
                </FormControl>
                <FormControl>
                  
                  <Input type="text" placeholder="Enter card number" />
                </FormControl>
                <Flex>
                <FormControl>
                 
                  <Input type="text" placeholder="MM/YY" />
                </FormControl>
                <FormControl>
                 
                  <Input type="text" placeholder="Enter CVV" ml={4} width="90%"/>
                </FormControl>
                </Flex>
              </Stack>
              <Button colorScheme="red" mt={6} color="white" p={7}>
                Confirm Payment
              </Button>
            </Box>
          </Flex>
        </Box>
      </ChakraProvider>
    );
  };
  
  export default PaymentPage;