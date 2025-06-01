import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react/container";
import { VStack } from "@chakra-ui/react/stack";
import { Box } from "@chakra-ui/react/box";
import Searchbar from "./components/SearchBar";
import RepoCardContainer from "./components/RepoCardContainer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import NoReposMessage from "./components/NoReposMessage";

function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  let fullQuery = query;
  selectedLanguage !== ""
    ? (fullQuery += `+language:${selectedLanguage}`)
    : fullQuery;

  const handleSearch = async () => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          fullQuery
        )}&sort=stars&order=desc`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setRepos(data.items || []);
    } catch (err) {
      setError(err.message || "Something went wrong.Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() === "") {
      setRepos([]);
      setHasSearched(false);
      setError("");
    }
  }, [query]);

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
              isLoading={isLoading}
              setSelectedLanguage={setSelectedLanguage}
            />
            {isLoading && <Loader query={query} />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && <RepoCardContainer repos={repos} />}
            {hasSearched && !isLoading && repos.length === 0 && (
              <NoReposMessage query={query} />
            )}
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
}

export default App;
