import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getWishList } from '../Redux/action';
import {
    Box, Accordion, AccordionItem, AccordionButton,
    AccordionPanel,
    Heading,
    Breadcrumb
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import ProductCard from './ProductCard';
import { MinusIcon } from '@chakra-ui/icons';
import Breadcrumbs from './Breadcrumb';


export default function ProductPage() {

    const [page, setPage] = useState(1);

    const data = useSelector((state) => state.wishReducer.WishProducts);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getWishList(page));
    }, [dispatch]);

    return (
        <Box my={"20px"}>
            {
                data.length === 0 ? <Heading color={'white'} fontSize={'9xl'}>Loading</Heading> :

                    <Box>
                        <Breadcrumbs w='80%' m='auto' />

                        <Box display={'flex'} >

                            <Box w='75%' m='auto' display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap='20px' paddingTop={'2em'}>
                                {
                                    data?.map((prod) => {
                                        return <ProductCard productData={prod} key={prod.id} discount={prod.id} />
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
            }
        </Box>

    )
}