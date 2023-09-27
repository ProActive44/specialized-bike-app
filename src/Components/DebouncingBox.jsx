import {
  Divider,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DebouncingBox = ({ isOpen, onClose, debouncingProducts }) => {
  const navigate = useNavigate();
  console.log(debouncingProducts);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {debouncingProducts?.map((ele) => {
            return (
              <div key={ele._id}>
                <Text
                  _hover={{ cursor: "pointer" }}
                  my={"5px"}
                  onClick={() => navigate(`/productPage/details/${ele._id}`)}
                >
                  {ele.name}
                </Text>
                <Divider />
              </div>
            );
          })}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DebouncingBox;
