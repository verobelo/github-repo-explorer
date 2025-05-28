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
        <Input type="text" placeholder="Search repositories..." size={"sm"} />
        <IconButton colorPalette={"blue"} size={"sm"}>
          <Search />
        </IconButton>
      </Group>

      <Flex direction={{ base: "column" }} gap={"2"}>
        <Select.Root collection={languages} size="sm">
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select language" />
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

        <Select.Root size="sm">
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Filter by" />
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

        <Button colorPalette={"green"} alignSelf={"center"}>
          Find a Random Repo
        </Button>
      </Flex>
    </Flex>
  );
}
