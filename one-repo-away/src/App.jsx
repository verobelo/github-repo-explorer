import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react/container";
import { VStack } from "@chakra-ui/react/stack";
import { Box } from "@chakra-ui/react/box";
import Searchbar from "./components/SearchBar";
import RepoCardContainer from "./components/RepoCardContainer";

function App() {
  return (
    <Container maxW={"3xl"} p={"0"} minH={"100dvh"}>
      <VStack p={"4"} gap={"5"} align={{ base: "stretch", md: "center" }}>
        <Header />
        <Box as="main">
          <VStack gap="5" align="stretch">
            <Searchbar />
            <RepoCardContainer />
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
}

export default App;
