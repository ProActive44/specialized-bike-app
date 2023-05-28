import { Box} from "@chakra-ui/react";
import React from "react";
import Bikediv1 from "../../Components/Bikediv1";
import Bikediv2 from "../../Components/Bikediv2";
import Slider from "../../Components/Slider";
import AboutDiv from "../../Components/AboutDiv";
import RootsOfBrain from "../../Components/RootsOfBrain";
import Knowmore from "../../Components/Knowmore";
import Bestsellers from "../../Components/Bestsellers";
import Discount from "../../Components/Discount";


const Homepage = () => {

  // const state = useSelector((store)=>{
  //   return store
  // })
  // console.log(state);

  return (
    <Box color="white" maxW={"1366px"}>
      
      <Slider/>
      <AboutDiv/>
      <Bikediv2/>
      <Bestsellers/>
      <RootsOfBrain/>
      <Bikediv1/>
      <Discount/>
      <Knowmore/>
      
    </Box>
  );
};

export default Homepage;
