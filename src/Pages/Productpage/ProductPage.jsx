import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/action';
import { Box } from '@chakra-ui/react'
import ProductCard from '../../Components/ProductCard';
export default function ProductPage() {
  const data = useSelector((state) => state.productsReducer.AllProducts);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  return (
    <Box display={'flex'} >
      <Box w='25%' display={'grid'} gridTemplateRows={'repeat(2, 1fr)'} color={'white'} fontSize={'34px'} marginTop={'1.5em'} fontWeight={'600'}>
        MOUNTAIN
        <Box w='10%' display={'grid'} gridTemplateColumns={'repeat(1, 1fr)'} color={'white'}>
          MOUNTAIN
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