import { AddIcon, EmailIcon, HamburgerIcon, MinusIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Menu,
  MenuButton,
  Box,
  Spacer,
  useDisclosure,
  Button,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const MenuBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Menu border="1px solid red">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        colorScheme="black"
        color={"white"}
        size={["sm", "sm", "md", "lg","xl", "2xl"]}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="rgb(28,28,28)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Menu</DrawerHeader>

          <DrawerBody color="white">
            <Accordion allowMultiple w="100%" as="button">
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton as="Flex" outline="none">
                        <Box>Account</Box> <Spacer />
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel  textAlign='left' p={'0'}>
                        <Box py={'20px'}>
                            <Button leftIcon={<Avatar size={'xs'} bg='blue.600' />} w="100%" borderRadius={'0'} variant='outline' colorScheme='facebook'>Prasad</Button><br/>
                            <Button leftIcon={<PhoneIcon />} w="100%" borderRadius={'0'} colorScheme='facebook'>9764584028</Button>
                            <Button leftIcon={<EmailIcon />}  w="100%" borderRadius={'0'} variant='outline' colorScheme='facebook'>prasadmhaske2001@gmail.com</Button><br/>
                        </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem _hover= {{ backgroundColor: "blue.600",borderRadius: '10px', color:'black' }}>
                <Button variant={'unstyled'} w={'100%'}>Cart</Button>
              </AccordionItem>
              <AccordionItem _hover= {{ backgroundColor: "blue.600",borderRadius: '10px', color:'black' }}>
                <Button variant={'unstyled'} w={'100%'}>Wishlist</Button>
              </AccordionItem>
            </Accordion >
         <Flex direction={'column'} my={'20px'}>
            <Button colorScheme='facebook' variant='ghost'>MOUNTAIN</Button>
            <Button colorScheme='facebook' variant='ghost'>ROAD</Button>
            <Button colorScheme='facebook' variant='ghost'>ACTIVE</Button>
            <Button colorScheme='facebook' variant='ghost'>ELECTRIC</Button>
            <Button colorScheme='facebook' variant='ghost'>KIDS</Button>
        </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Menu>
  );
};

export default MenuBtn;
