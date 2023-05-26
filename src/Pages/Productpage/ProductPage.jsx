import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/action';
import { Card, CardBody, CardFooter, Image, Divider, Stack, Heading, Text,Box } from '@chakra-ui/react'
export default function ProductPage() {
  const isLoad = useSelector((store) =>{
        console.log(store)
    return store.productsReducer.isLoading;
  }
  )

  const data = useSelector((state) => state.productsReducer.AllProducts);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProducts);

  }, [dispatch]);


  return (
    <Box display={'flex'} >
      <Box w='30%' h={'100em'} border={'1px solid green'}></Box>
      <Box w='70%' display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} border='1px solid red' gap='20px'>
        {data.length > 0 && data.map((el) => {
          return <Card maxW='sm' >
            <CardBody>
              <Image
                src={el.images.black || el.images.grey || el.images.orange || el.images.silver || el.images.pink || el.images.white || el.images.yellow || el.images.blue}
                alt='Cycle'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{el.name}</Heading>

                <Text color='blue.600' fontSize='2xl'>
                  {el.price}      </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              {/* <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup> */}
            </CardFooter>
          </Card>
        })}
      </Box>
      {/* map the below div against your coffee data */}
      {/* {data.length >0 && data.map((el)=>{
          return <GridItem w='80%' h='30' >

<img className = "image" alt = "img" width = "100%" height="10%" src={el.images.black} />
          <div className = "name"> {el.name}</div>
          <div className = "price"> {el.price}</div>
          </GridItem>
           */}
      {/* //   <div className = "item" key={el.id}>
        //   <img className = "image" alt = "img" width = "70%" src={el.images.black} />
        //   <div className = "name"> {el.name}</div>
        //   <div className = "price"> {el.price}</div>
        // </div> */}
      {/* })}
          </Grid> */}

    </Box>

  )
}