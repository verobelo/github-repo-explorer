import { Heading, Text } from "@chakra-ui/react/typography";
import { ColorModeButton } from "./ui/color-mode";
import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";

export default function Header() {
  return (
    <header style={{ textAlign: "center" }}>
      <Flex align={"center"} justify="center" gap="8">
        <Heading as={"h1"} fontSize={{ base: "2xl", md: "3xl" }}>
          One Repo Away.
        </Heading>
        <Box bg={{ _light: "gray.100", _dark: "transparent" }} rounded={"2xl"}>
          <ColorModeButton />
        </Box>
      </Flex>
      <Text fontSize={{ base: "xs", sm: "sm", md: "md" }} fontStyle={"italic"}>
        The perfect GitHub repo is just one search away.
      </Text>
    </header>
  );
}
