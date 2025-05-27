import { Box } from "@chakra-ui/react/box";
import { IconButton } from "@chakra-ui/react/button";
import { Flex } from "@chakra-ui/react/flex";
import { Input } from "@chakra-ui/react/input";
import { Select } from "@chakra-ui/react/select";
import { Portal } from "@chakra-ui/react/portal";
import { languages } from "@/logic/languages";
import { LuSearch } from "react-icons/lu";

export default function Searchbar() {
  return (
    <Box>
      <Flex align={"center"}>
        <Input type="text" placeholder="Search repositories..." size={"sm"} />
        <IconButton colorPalette={"blue"} size={"sm"}>
          <LuSearch />
        </IconButton>
      </Flex>

      <Flex>
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
      </Flex>
    </Box>
  );
}
