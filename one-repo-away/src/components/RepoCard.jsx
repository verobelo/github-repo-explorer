import { Link } from "@chakra-ui/react/link";
import { Card } from "@chakra-ui/react/card";
import { Flex } from "@chakra-ui/react/flex";
import { Icon } from "@chakra-ui/react/icon";
import { Text } from "@chakra-ui/react/typography";
import { Dices, GitFork, Heart, HeartPlus, Star } from "lucide-react";
import { IconButton, ButtonGroup } from "@chakra-ui/react/button";
import { Badge } from "@chakra-ui/react/badge";
import { toaster } from "./ui/toaster";

export default function RepoCard({
  repo,
  title,
  description,
  language,
  forks,
  stars,
  url,
  isRandom = false,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Card.Root
      as={"li"}
      w={"full"}
      minH={"250px"}
      h={"100%"}
      border={isRandom && "2px dashed green"}
      bg={isRandom && "green.50"}>
      <Card.Body gap="2">
        {isRandom && (
          <Badge
            colorPalette="green"
            variant={"subtle"}
            size={{ base: "sm", sm: "md" }}>
            <Dices /> Random Pick
          </Badge>
        )}
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
        flexDirection={"column"}
        flexWrap={"wrap"}
        justifyContent="space-between"
        alignItems="center"
        gap={{ md: 2, xl: 3 }}
        fontWeight={"light"}>
        <Flex align={"center"} justifyContent="space-between" w="full">
          <Text
            fontSize={"sm"}
            color={{ _light: "gray.600", _dark: "gray.400" }}>
            {language ?? "None"}
          </Text>
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
        </Flex>

        <ButtonGroup
          display={"flex"}
          align={"center"}
          gap={"3"}
          alignSelf={"flex-end"}>
          <IconButton
            as="a"
            href={url}
            aria-label="View in GitHub"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer">
            <Icon fill={{ _light: "black", _dark: "white" }}>
              <svg
                focusable="false"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Icon>
          </IconButton>

          <IconButton
            bg={{ _light: "white", _dark: "transparent" }}
            aria-label="Add to favorites"
            onClick={() => {
              onToggleFavorite(repo);
              toaster.create({
                description: isFavorite
                  ? "Removed from Favorites"
                  : "Added to Favorites",
                type: isFavorite ? "error" : "success",
              });
            }}>
            {!isFavorite ? (
              <Icon color={"#16a34a"} size={{ base: "lg", xl: "xl" }}>
                <HeartPlus />
              </Icon>
            ) : (
              <Icon size={{ base: "xl", xl: "2xl" }}>
                <Heart fill="#16a34a" />
              </Icon>
            )}
          </IconButton>
        </ButtonGroup>
      </Card.Footer>
    </Card.Root>
  );
}
