import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react/container";
import { VStack } from "@chakra-ui/react/stack";
import { Box } from "@chakra-ui/react/box";
import Searchbar from "./components/SearchBar";

function App() {
  return (
    <Container maxW={"3xl"} p={"0"} minH={"100dvh"}>
      <VStack p={"4"} gap={"4"}>
        <Header />
        <Box as="main">
          <Searchbar />
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
}

export default App;
