import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/action';
import {
  Box, Accordion, AccordionItem, AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import ProductCard from '../../Components/ProductCard';
import { MinusIcon } from '@chakra-ui/icons';
export default function ProductPage() {
  const data = useSelector((state) => state.productsReducer.AllProducts);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  return (
    <Box display={'flex'} >
      <Box w='29%' gridTemplateRows={'repeat(2, 1fr)'} color={'white'} fontSize={'34px'} marginTop={'1.5em'} fontWeight={'600'}>
        MOUNTAIN
        <Box fontSize={'22px'} marginTop={'1.5em'} >Filters</Box>
        <Box mt={5}>
          <Accordion allowMultiple>
            <AccordionItem borderColor={'grey'} borderTop={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='center'>
                        CATEGORY                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize='12px' pb={2}>
                    Mountain
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' pb={2}>
                    Road
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' pb={2}>
                    Active
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' pb={2}>
                    Electric
                  </AccordionPanel><AccordionPanel fontSize='12px'>
                    Kids
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem borderColor={'grey'} >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='center'>
                        PRICE                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize='12px' pb={2}>
                    Low to High
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' pb={2}>
                    High to Low
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>

      </Box>
      <Box w='63%' display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap='20px' paddingTop={'10em'}>
        {
          data?.map((prod) => {
            return <ProductCard productData={prod} key={prod.id} w="30%" />
          })
        }
      </Box>
      <Box w='8%' h={'100em'} ></Box>
    </Box>

  )
}