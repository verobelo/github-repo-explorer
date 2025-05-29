import { Box } from "@chakra-ui/react/box";
import { Button, IconButton } from "@chakra-ui/react/button";
import { Flex } from "@chakra-ui/react/flex";
import { Input } from "@chakra-ui/react/input";
import { Select } from "@chakra-ui/react/select";
import { Portal } from "@chakra-ui/react/portal";
import { languages } from "@/logic/languages";
import { Group } from "@chakra-ui/react/group";
import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <Flex direction={"column"} gap={"2"}>
      <Group attached w={"full"}>
        <Input
          type="text"
          placeholder="Search repositories..."
          _placeholder={{ fontSize: { base: "sm", md: "md" } }}
          size={{ base: "sm", md: "md", xl: "xl" }}
        />
        <IconButton
          colorPalette={"blue"}
          size={{ base: "sm", md: "md", xl: "xl" }}
          aria-label="Search repositories">
          <Search />
        </IconButton>
      </Group>

      <Flex direction={{ base: "column", md: "row" }} gap={"2"}>
        <Select.Root
          collection={languages}
          size={{ base: "sm", md: "md", xl: "lg" }}
          aria-label="Select a language">
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText
                placeholder="Select language"
                fontSize={{ base: "sm", md: "md" }}
              />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {languages.items.map((language) => (
                  <Select.Item item={language} key={language.value}>
                    {language.title}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <Select.Root
          size={{ base: "sm", md: "md", xl: "lg" }}
          aria-label="Select a filter">
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText
                placeholder="Filter by"
                fontSize={{ base: "sm", md: "md" }}
              />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                <Select.Item item="Best Match">Best Match</Select.Item>
                <Select.Item item="Most Stars">Most Stars</Select.Item>
                <Select.Item item="Most Forks">Most Forks</Select.Item>
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <Button
          colorPalette={"green"}
          alignSelf={"center"}
          size={{ base: "sm", md: "md", xl: "xl" }}
          fontSize={{ base: "sm", md: "md" }}>
          Find a Random Repo
        </Button>
      </Flex>
    </Flex>
  );
}
