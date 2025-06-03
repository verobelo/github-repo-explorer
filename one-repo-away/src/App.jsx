import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react/container";
import { VStack } from "@chakra-ui/react/stack";
import { Box } from "@chakra-ui/react/box";
import Searchbar from "./components/SearchBar";
import RepoCardContainer from "./components/RepoCardContainer";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import NoReposMessage from "./components/NoReposMessage";
import useRepoSearch from "./hooks/useRepoSearch";

function App() {
  const {
    query,
    setQuery,
    repos,
    isLoading,
    error,
    hasSearched,
    setSelectedLanguage,
    selectedFilter,
    setSelectedFilter,
    page,
    perPage,
    handleSearch,
    goToPage,
    totalResults,
    fetchRandomRepo,
  } = useRepoSearch();

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
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              randomRepo={fetchRandomRepo}
            />
            {isLoading && <Loader query={query} />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && (
              <RepoCardContainer
                repos={repos}
                page={page}
                goToPage={goToPage}
                perPage={perPage}
                totalResults={totalResults}
              />
            )}
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
