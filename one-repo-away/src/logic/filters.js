import { createListCollection } from "@chakra-ui/react";

export const filters = createListCollection([
  {
    name: "Best Match",
    value: "",
  },
  {
    name: "Most Forks",
    value: "forks",
  },
  {
    name: "Most Stars",
    value: "stars",
  },
  {
    name: "Recently updated",
    value: "updated",
  },
]);
