import { Grid, GridItem } from "@chakra-ui/react/grid";
import RepoCard from "./RepoCard";
import { Separator } from "@chakra-ui/react/separator";
import { IconButton, ButtonGroup } from "@chakra-ui/react/button";
import { Pagination } from "@chakra-ui/react/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box } from "@chakra-ui/react/box";
import { Heading } from "@chakra-ui/react/typography";

export default function RepoCardContainer() {
  return (
    <Box
      bg={{ base: "gray.50", _dark: "gray.800" }}
      p={{ base: 2, md: 4 }}
      borderRadius="xl"
      border="1px solid"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      boxShadow="sm">
      <Heading
        as="h2"
        fontSize={{ base: "sm", md: "md", xl: "lg" }}
        pb={"1"}
        color={{ _light: "gray.600", _dark: "gray.400" }}>
        Repository Results
      </Heading>
      <Grid
        as={"ul"}
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        justifyItems={"center"}
        gap={"2"}>
        <GridItem>
          <RepoCard />
        </GridItem>
        <GridItem>
          <RepoCard />
        </GridItem>
        <GridItem>
          <RepoCard />
        </GridItem>
        <GridItem>
          <RepoCard />
        </GridItem>
      </Grid>

      <Box w={"full"} display={"flex"} justifyContent={"center"}>
        <Pagination.Root
          count={10}
          pageSize={2}
          defaultPage={1}
          aria-label="pagination"
          p="2">
          <ButtonGroup
            variant="ghost"
            size={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
            gap={{ base: 1, md: 2, xl: 3 }}>
            <Pagination.PrevTrigger asChild>
              <IconButton
                aria-label="Go to previous"
                size={{ base: "sm", md: "md", xl: "lg" }}>
                <ChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton
                  variant={{ base: "ghost", _selected: "outline" }}
                  fontSize={{ base: "sm", md: "md", xl: "lg" }}
                  size={{ base: "sm", md: "md", xl: "lg" }}>
                  {page.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton
                aria-label="Go to next"
                size={{ base: "sm", md: "md", xl: "lg" }}>
                <ChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Box>
    </Box>
  );
}
