import { Heading, Text } from "@chakra-ui/react/typography";
import { ColorModeButton } from "./ui/color-mode";
import { Flex } from "@chakra-ui/react/flex";

export default function Header() {
  return (
    <header style={{ textAlign: "center" }}>
      <Flex align={"center"} justify={{ base: "space-around" }}>
        <Heading as={"h1"} textStyle={{ base: "2xl" }}>
          One Repo Away.
        </Heading>
        <ColorModeButton />
      </Flex>
      <Text textStyle={{ base: "xs" }} fontStyle={"italic"}>
        The perfect GitHub repo is just one search away.
      </Text>
    </header>
  );
}
