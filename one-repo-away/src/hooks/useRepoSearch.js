import { useState } from "react";

export default function useRepoSearch() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const perPage = 12;

  const fetchRepos = async (searchQuery = query, pageNumber = page) => {
    if (searchQuery.trim().length === 0) {
      setError("Please enter a search term");
      setIsLoading(false);
      setRepos([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setError("");
    setHasSearched(true);

    let fullQuery = searchQuery;
    if (selectedLanguage) {
      fullQuery += `+language:${selectedLanguage}`;
    }

    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          fullQuery
        )}&sort=${selectedFilter}&order=desc&page=${pageNumber}&per_page=${perPage}`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();

      console.log("Total count:", data.total_count);
      console.log("Items received:", data.items.length);

      setRepos(data.items || []);
      setTotalResults(data.total_count);
      const totalPagesCount = Math.ceil(data.total_count / perPage);
      setTotalPages(Math.min(totalPagesCount, 100));

      console.log("Calculated total pages:", totalPagesCount);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchRepos(query, 1);
  };

  const goToPage = (newPage) => {
    setPage(newPage);
    fetchRepos(query, newPage);
  };

  return {
    query,
    setQuery,
    repos,
    isLoading,
    error,
    hasSearched,
    selectedLanguage,
    setSelectedLanguage,
    selectedFilter,
    setSelectedFilter,
    page,
    perPage,
    totalPages,
    handleSearch,
    goToPage,
    totalResults,
  };
}
