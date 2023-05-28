import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"

const getData = (setData)=>{
    axios.get(`https://specialized-bike-json-server.onrender.com/products?_page=2&_limit=3`)
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
}


const Bestsellers = () => {

  const [data, setData] = useState([])
//   console.log(data)
    
    useEffect(()=>{
        getData(setData)
    } ,[])

    return (
        <Box textAlign={'left'} mx={{base:'30px',sm:'100px',md:'50px'}} my={'40px'} >
            <Box my={'20px'}><Heading>CHOOSE OUR BEST SELLERS</Heading></Box>
            <Box my={'20px'}>
                <Flex gap={{base:'10px',md:'20px'}} direction={{base:'column', md:'row'}}>
                        {
                            data?.map((prod)=>{
                                return <ProductCard productData={prod} key={prod.id} w="30%"/>
                            })
                        }
                </Flex>
            </Box>
            <Box>
                <Button variant={'outline'} colorScheme='yellow'> CATALOGUE </Button>
            </Box>
        </Box>
    );
};

export default Bestsellers