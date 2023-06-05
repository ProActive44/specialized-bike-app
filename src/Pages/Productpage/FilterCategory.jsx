import { Box, Checkbox, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';


const FilterCategory = ({checkedItems, setCheckedItems, allChecked, isIndeterminate, setCategoryFilter}) => {

  useEffect(() => {
    const filteredCategories = checkedItems.map((ele, index) => {
      let val = ""
      if (ele) {
        val = index === 0? "Mountain" : index === 1? "Road" : index === 2? "Active" : index === 3? "Kids" : ""
      }
      return val
    });
    setCategoryFilter(filteredCategories);
  }, [checkedItems, setCategoryFilter]);

    return (
        <Box
        //  border={"1px solid red"}
        >
                  <Stack my={1} ml={10} spacing={2}>
                    <Checkbox
                      isChecked={allChecked}
                      isIndeterminate={isIndeterminate}
                      onChange={(e) =>
                        setCheckedItems([
                          e.target.checked,
                          e.target.checked,
                          e.target.checked,
                          e.target.checked,
                        ])
                      }
                      colorScheme="green"
                    >
                      <Text fontSize={"xl"}>All Products</Text>
                    </Checkbox>

                    <Checkbox
                      isChecked={checkedItems[0]}
                      onChange={(e) =>
                        setCheckedItems([
                          e.target.checked,
                          checkedItems[1],
                          checkedItems[2],
                          checkedItems[3],
                        ])
                      }
                      colorScheme="yellow"
                    >
                      MOUNTAIN
                    </Checkbox>
                    <Checkbox
                      isChecked={checkedItems[1]}
                      onChange={(e) =>
                        setCheckedItems([
                          checkedItems[0],
                          e.target.checked,
                          checkedItems[2],
                          checkedItems[3],
                        ])
                      }
                      colorScheme="yellow"
                    >
                      ROAD
                    </Checkbox>
                    <Checkbox
                      isChecked={checkedItems[2]}
                      onChange={(e) =>
                        setCheckedItems([
                          checkedItems[0],
                          checkedItems[1],
                          e.target.checked,
                          checkedItems[3],
                        ])
                      }
                      colorScheme="yellow"
                    >
                      ACTIVE
                    </Checkbox>
                    <Checkbox
                      isChecked={checkedItems[3]}
                      onChange={(e) =>
                        setCheckedItems([
                          checkedItems[0],
                          checkedItems[1],
                          checkedItems[2],
                          e.target.checked,
                        ])
                      }
                      colorScheme="yellow"
                    >
                      KIDS
                    </Checkbox>
                  </Stack>
                </Box>
    );
};

export default FilterCategory;