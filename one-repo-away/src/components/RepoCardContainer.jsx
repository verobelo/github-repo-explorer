import { Grid, GridItem } from "@chakra-ui/react/grid";
import RepoCard from "./RepoCard";
import { IconButton, ButtonGroup } from "@chakra-ui/react/button";
import { Pagination } from "@chakra-ui/react/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box } from "@chakra-ui/react/box";
import { Heading } from "@chakra-ui/react/typography";

export default function RepoCardContainer({
  repos,
  page,
  goToPage,
  perPage,
  totalResults,
  totalPages,
  randomRepoId,
}) {
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
        color={{ _light: "gray.600", _dark: "gray.400" }}
        textAlign={"center"}>
        {totalResults === 0 && "Repository Results"}
        {totalResults <= 1000 &&
          `Repository results (${Math.min(
            totalResults,
            perPage * totalPages
          )})`}

        {totalResults > 1000 &&
          `Showing top ${Math.min(
            totalResults,
            perPage * totalPages
          )} repositories (as per GitHub REST API limitations)`}
      </Heading>
      <Grid
        as={"ul"}
        w={"full"}
        gridTemplateColumns={{
          base: "minmax(0, 1fr)",
          md: "repeat(2, minmax(300px, 1fr))",
          xl: "repeat(3, minmax(300px, 1fr))",
        }}
        placeItems={"center"}
        gap={"2"}>
        {repos.map((repo) => (
          <GridItem key={repo.id} w={"full"} maxW="300px">
            <RepoCard
              title={repo.full_name}
              description={repo.description}
              language={repo.language}
              forks={repo.forks}
              stars={repo.stargazers_count}
              url={repo.html_url}
              isRandom={repo.id === randomRepoId}
            />
          </GridItem>
        ))}
      </Grid>
      {repos.length > 0 && (
        <Box w={"full"} display={"flex"} justifyContent={"center"}>
          <Pagination.Root
            count={perPage * totalPages}
            pageSize={perPage}
            aria-label="pagination"
            p="2"
            siblingCount={"3"}
            page={page}
            onPageChange={(e) => goToPage(e.page)}>
            <ButtonGroup
              attached
              variant="ghost"
              size={{ base: "xs", sm: "md", lg: "lg" }}>
              <Pagination.PrevTrigger asChild>
                <IconButton aria-label="Go to previous">
                  <ChevronLeft />
                </IconButton>
              </Pagination.PrevTrigger>

              <Pagination.Items
                render={(page) => (
                  <IconButton
                    key={page.value}
                    {...page}
                    variant={{ base: "ghost", _selected: "outline" }}>
                    {page.value}
                  </IconButton>
                )}
              />

              <Pagination.NextTrigger asChild>
                <IconButton aria-label="Go to next">
                  <ChevronRight />
                </IconButton>
              </Pagination.NextTrigger>
            </ButtonGroup>
          </Pagination.Root>
        </Box>
      )}
    </Box>
  );
}
