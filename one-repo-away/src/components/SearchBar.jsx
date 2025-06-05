import { Button, IconButton, CloseButton } from "@chakra-ui/react/button";
import { Flex } from "@chakra-ui/react/flex";
import { Input, InputGroup } from "@chakra-ui/react/input";
import { Select } from "@chakra-ui/react/select";
import { Portal } from "@chakra-ui/react/portal";
import { languages } from "@/logic/languages";
import { HStack } from "@chakra-ui/react/stack";
import { BrushCleaning, Dices, Search } from "lucide-react";
import { filters } from "@/logic/filters";
import { Tooltip } from "./ui/tooltip";
import { useRef } from "react";

export default function Searchbar({
  query,
  setQuery,
  setTotalResults,
  onSearch,
  isLoading,
  isRandomLoading,
  selectedLanguage,
  setSelectedLanguage,
  selectedFilter,
  setSelectedFilter,
  randomRepo,
  setRepos,
  setHasSearched,
  handleClear,
}) {
  const inputRef = (useRef < HTMLInputElement) | (null > null);
  const endElement = query ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setQuery("");
        setRepos([]);
        setHasSearched(false);
        setTotalResults(0);
        inputRef.current?.focus();
      }}
      me="-2"
    />
  ) : undefined;

  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }

  return (
    <Flex direction={"column"} gap={"2"}>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <HStack w="full" spacing={0}>
          <InputGroup endElement={endElement}>
            <Input
              type="text"
              placeholder="Search repositories..."
              _placeholder={{ fontSize: { base: "sm", md: "md" } }}
              size={{ base: "sm", md: "md", xl: "xl" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>

          <Tooltip
            content="Clear search"
            openDelay={200}
            closeDelay={100}
            contentProps={{
              css: { "--tooltip-bg": "#2563eb" },
            }}>
            <IconButton
              onClick={handleClear}
              type="button"
              aria-label="Clear results"
              colorPalette="blue"
              size={{ base: "sm", md: "md", xl: "xl" }}>
              <BrushCleaning />
            </IconButton>
          </Tooltip>

          <IconButton
            loading={isLoading}
            type="submit"
            aria-label="Search repositories"
            colorPalette="blue"
            size={{ base: "sm", md: "md", xl: "xl" }}>
            <Search />
          </IconButton>
        </HStack>
      </form>

      <Flex direction={{ base: "column", md: "row" }} gap={"2"}>
        <Select.Root
          collection={languages}
          size={{ base: "sm", md: "md", xl: "lg" }}
          aria-label="Select a language"
          value={selectedLanguage}
          onValueChange={(e) => setSelectedLanguage(e.value)}>
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText
                placeholder="Select language"
                fontSize={{ base: "sm", md: "md" }}
              />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.ClearTrigger />
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {languages.items.map((language) => (
                  <Select.Item item={language} key={language.value}>
                    {language.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <Select.Root
          collection={filters}
          size={{ base: "sm", md: "md", xl: "lg" }}
          aria-label="Select a filter"
          value={selectedFilter}
          onValueChange={(e) => setSelectedFilter(e.value)}>
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText
                placeholder="Filter by"
                fontSize={{ base: "sm", md: "md" }}
              />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.ClearTrigger />
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {filters.items.map((filter) => (
                  <Select.Item item={filter} key={filter.value}>
                    <Select.ItemText>{filter.label}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Tooltip
          content="Find a random repository"
          openDelay={200}
          closeDelay={100}
          contentProps={{
            css: { "--tooltip-bg": "#16a34a" },
          }}>
          <Button
            loading={isRandomLoading}
            disabled={query.trim().length > 0}
            colorPalette={"green"}
            alignSelf={"center"}
            size={{ base: "sm", md: "md", xl: "xl" }}
            fontSize={{ base: "sm", md: "md" }}
            onClick={randomRepo}>
            <Dices />
            Suprise me!
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
