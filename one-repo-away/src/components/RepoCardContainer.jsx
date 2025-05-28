import { Grid, GridItem } from "@chakra-ui/react/grid";
import RepoCard from "./RepoCard";
import { Separator } from "@chakra-ui/react/separator";
import { IconButton, ButtonGroup } from "@chakra-ui/react/button";
import { Pagination } from "@chakra-ui/react/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box } from "@chakra-ui/react/box";

export default function RepoCardContainer() {
  return (
    <>
      <Grid
        as={"ul"}
        gridTemplateColumns={"1fr"}
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
          aria-label="pagination">
          <ButtonGroup variant="ghost" size="xs">
            <Pagination.PrevTrigger asChild>
              <IconButton aria-label="Go to previous">
                <ChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton variant={{ base: "ghost", _selected: "outline" }}>
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

      <Separator />
    </>
  );
}
