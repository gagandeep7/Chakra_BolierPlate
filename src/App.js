import React from "react";
import { Button, Box, useColorMode, Text } from "@chakra-ui/core";

// function ColorModeExample() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <header>
//       <Button onClick={toggleColorMode}>
//         Toggle {colorMode === "light" ? "Dark" : "Light"}
//       </Button>

//       <Text color="brand.900">Hello world</Text>
//     </header>
//   );
// }

const App = () => {
  return (
    <>
      {" "}
      <Box
        as="h1"
        fontSize="6xl"
        marginX="auto"
        maxW="400px"
        mt="2rem"
        color="blue.400"
      >
        Hello World
      </Box>
    </>
  );
};

export default App;
