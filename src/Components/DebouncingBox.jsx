import {
  Divider,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DebouncingBox = ({ debouncingProducts }) => {
  const navigate = useNavigate();
  return (
    <>
      {debouncingProducts?.map((ele) => {
        return (
          <div key={ele._id}>
            <Text
              _hover={{ cursor: "pointer", color: "red" }}
              color={"yellow"}
              my={"5px"}
              onClick={() => navigate(`/productPage/details/${ele._id}`)}
            >
              {ele.name}
            </Text>
            <Divider />
          </div>
        );
      })}
    </>
  );
};

export default DebouncingBox;
