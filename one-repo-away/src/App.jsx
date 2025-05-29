import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react/container";
import { VStack } from "@chakra-ui/react/stack";
import { Box } from "@chakra-ui/react/box";
import Searchbar from "./components/SearchBar";
import RepoCardContainer from "./components/RepoCardContainer";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          query
        )}&sort=stars&order=desc`
      );
      const data = await res.json();
      setRepos(data.items || []);
    } catch (err) {
      setError(err.message || "Something went wrong.Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW={{ base: "3xl" }} p={"0"} minH={"100dvh"}>
      <VStack p={"4"} gap={"6"} align={{ base: "stretch", md: "center" }}>
        <Header />
        <Box as="main">
          <VStack gap="6" align="stretch" mt={{ base: 2, md: 4 }}>
            <Searchbar
              query={query}
              setQuery={setQuery}
              onSearch={handleSearch}
            />
            <RepoCardContainer repos={repos} />
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
}

export default App;
