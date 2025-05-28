import { Grid, GridItem } from "@chakra-ui/react/grid";

export default function RepoCardContainer() {
  return (
    <Grid
      as={"ul"}
      gridTemplateColumns={"repeat(2, 1fr)"}
      justifyItems={"center"}>
      <GridItem>Hello</GridItem>
      <GridItem>Hello</GridItem>
      <GridItem>Hello</GridItem>
      <GridItem>Hello</GridItem>
    </Grid>
  );
}
