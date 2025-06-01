import { Text } from "@chakra-ui/react/typography";

export default function Loader() {
  return (
    <Text
      textAlign={"center"}
      textTransform={"uppercase"}
      fontSize={"md"}
      fontWeight={"bold"}
      color={{ _light: "gray.700", _dark: "gray.500" }}>
      Loading, please wait...
    </Text>
  );
}
