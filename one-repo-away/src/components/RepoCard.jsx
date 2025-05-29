import { Link } from "@chakra-ui/react/link";
import { Card } from "@chakra-ui/react/card";
import { Flex } from "@chakra-ui/react/flex";
import { Icon } from "@chakra-ui/react/icon";
import { Text } from "@chakra-ui/react/typography";
import { GitFork, Star } from "lucide-react";

export default function RepoCard({
  title,
  description,
  language,
  forks,
  stars,
  url,
}) {
  return (
    <Card.Root as={"li"} maxW={"300px"} minH={"250px"} h={"100%"}>
      <Card.Body gap="2">
        <Card.Title
          mt="2"
          fontSize={{ base: "sm", md: "md", xl: "lg" }}
          truncate>
          {title}
        </Card.Title>
        <Card.Description fontSize={{ base: "sm", md: "md" }} lineClamp="3">
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap={{ md: 2, xl: 3 }}
        fontWeight={"light"}>
        <Text fontSize={"sm"} color={{ _light: "gray.600", _dark: "gray.400" }}>
          {language}
        </Text>
        <Flex align={"center"} gap={"1"}>
          <Icon
            size={"sm"}
            verticalAlign={"middle"}
            color={{ _light: "gray.600", _dark: "gray.400" }}>
            <GitFork />
          </Icon>
          <Text
            fontSize={"sm"}
            color={{ _light: "gray.600", _dark: "gray.400" }}>
            {forks}
          </Text>
        </Flex>
        <Flex align={"center"} gap={"1"}>
          <Icon
            size={"sm"}
            verticalAlign={"middle"}
            color={{ _light: "gray.600", _dark: "gray.400" }}>
            <Star />
          </Icon>
          <Text
            fontSize={"sm"}
            color={{ _light: "gray.600", _dark: "gray.400" }}>
            {stars}
          </Text>
        </Flex>
        <Link
          href={url}
          isExternal
          aria-label="View repository on GitHub"
          display={"flex"}
          alignItems={"center"}
          fontSize={"sm"}
          color={"gray.700"}>
          View
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}
