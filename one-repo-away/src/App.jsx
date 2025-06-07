import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react/container";
import { VStack } from "@chakra-ui/react/stack";
import { Box } from "@chakra-ui/react/box";
import { Searchbar } from "./components/SearchBar";
import RepoCardContainer from "./components/RepoCardContainer";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import NoReposMessage from "./components/NoReposMessage";
import useRepoSearch from "./hooks/useRepoSearch";
import { useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const {
    query,
    setQuery,
    repos,
    setRepos,
    isLoading,
    isRandomLoading,
    error,
    setError,
    hasSearched,
    setHasSearched,
    selectedLanguage,
    setSelectedLanguage,
    selectedFilter,
    setSelectedFilter,
    page,
    perPage,
    handleSearch,
    goToPage,
    totalPages,
    setTotalResults,
    totalResults,
    fetchRandomRepo,
    randomRepoId,
  } = useRepoSearch();

  const [favoriteRepos, setFavoriteRepos] = useLocalStorage(
    [],
    "favoriteRepos"
  );
  const inputRef = useRef(null);

  function toggleFavorite(repo) {
    const isFavorite = favoriteRepos.some((r) => r.id === repo.id);

    const updated = isFavorite
      ? favoriteRepos.filter((r) => r.id !== repo.id)
      : [...favoriteRepos, repo];
    setFavoriteRepos(updated);
  }

  function handleClearSearch() {
    setQuery("");
    setRepos([]);
    setHasSearched(false);
    setTotalResults(0);
    inputRef.current?.focus();
  }

  function handleClear() {
    setQuery("");
    setRepos([]);
    setError("");
    setHasSearched(false);
    setTotalResults(0);
  }

  return (
    <Container
      maxW={"3xl"}
      p={"0"}
      minH={"100dvh"}
      display={"flex"}
      flexDirection={"column"}>
      <VStack p={"4"} gap={"6"} align={{ base: "stretch", md: "center" }}>
        <Header />
        <Box as="main">
          <VStack gap="6" align="stretch" mt={{ base: 2, md: 4 }}>
            <Searchbar
              ref={inputRef}
              query={query}
              setQuery={setQuery}
              onSearch={handleSearch}
              isLoading={isLoading}
              isRandomLoading={isRandomLoading}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              randomRepo={fetchRandomRepo}
              handleClear={handleClear}
              handleClearSearch={handleClearSearch}
            />
            {isLoading && <Loader query={query} />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && (
              <RepoCardContainer
                repos={repos}
                page={page}
                goToPage={goToPage}
                perPage={perPage}
                totalPages={totalPages}
                totalResults={totalResults}
                randomRepoId={randomRepoId}
                handleToggleFavorite={toggleFavorite}
                favoriteRepos={favoriteRepos}
                setFavoriteRepos={setFavoriteRepos}
              />
            )}
            {hasSearched && !isLoading && repos.length === 0 && (
              <NoReposMessage query={query} />
            )}
          </VStack>
        </Box>
      </VStack>
      <Footer />
    </Container>
  );
}

export default App;
