import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts,filteredProduct } from '../../Redux/action';
import {
  Box, Accordion, AccordionItem, AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import ProductCard from '../../Components/ProductCard';
import { MinusIcon } from '@chakra-ui/icons';
export default function ProductPage() {

  const [page, setPage] = useState(1);
  const [filterProd, setFilterProd] = useState("");

  const data = useSelector((state) => state.productsReducer.AllProducts);
  // const [datas, setDatas] = useState([]);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    setPage(id);
  }

  React.useEffect(() => {
    dispatch(filteredProduct(filterProd));
  }, [dispatch, filterProd]);

 
  React.useEffect(() => {
    dispatch(getProducts(page));

  }, [dispatch, page]);

  
  // React.useEffect(() => {
  //   setDatas(data)

  // });


  // const handleSortAsc = () => {
  // const a =  datas.sort((a, b) => a.price - b.price);
  // console.log(a);
  // setDatas(a)
  // }
 
  // const handleSortDes = () => {
  //   const a =  datas.sort((a, b) => b.price - a.price);
  // console.log("a",a);
  // setDatas(a)
  //     }
  const handleClickCategory = (cat) => {
    setFilterProd(cat);
      }
      

  return (
    <Box display={'flex'} >
      <Box w='20%' gridTemplateRows={'repeat(2, 1fr)'} color={'white'} fontSize={'34px'} marginTop={'1.5em'} fontWeight={'600'}>
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
                  <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} onClick={()=>handleClickCategory('Mountain')}>
                    Mountain
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} onClick={()=>handleClickCategory('Road')}>
                    Road
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} onClick={()=>handleClickCategory('Active')}>
                    Active
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} onClick={()=>handleClickCategory('Electric')}>
                    Electric
                  </AccordionPanel>
                  <AccordionPanel fontSize='12px' cursor={'pointer'} onClick={()=>handleClickCategory('Kids')}>
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
                  {/* <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} onClick={handleSortAsc}> */}
                  <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} >

                    Low to High
                  </AccordionPanel>
                  {/* <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} onClick={handleSortDes}> */}
                  <AccordionPanel fontSize='12px' pb={2} cursor={'pointer'} >
                    High to Low
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>

      </Box>
      <Box w='75%' m='auto' display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap='20px' paddingTop={'10em'}>
        {
          data?.map((prod) => {
            return <ProductCard productData={prod} key={prod.id} discount='20' />
          })
        }
        <Box m='auto' gridTemplateRows={'repeat(3, 1fr)'} gap='20px'>

          {/* <Box textAlign={'center'}> */}
          {/* {pages.map((val)=>{
return      <Button onClick={(val)=>handleClick(val)}>{val}</Button>

        })} */}
          <Button onClick={() => handleClick(1)}>1</Button>
          <Button onClick={() => handleClick(2)}>2</Button>
          <Button onClick={() => handleClick(3)}>3</Button>
          <Button onClick={() => handleClick(4)}>4</Button>
          <Button onClick={() => handleClick(5)}>5</Button>

        </Box>
      </Box>

    </Box>

  )
}