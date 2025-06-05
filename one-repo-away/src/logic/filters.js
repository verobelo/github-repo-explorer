import { createListCollection } from "@chakra-ui/react";

export const filters = createListCollection({
  items: [
    {
      label: "Best Match",
      value: "best-match",
    },
    {
      label: "Most Forks",
      value: "forks",
    },
    {
      label: "Most Stars",
      value: "stars",
    },
    {
      label: "Recently Updated",
      value: "updated",
    },
  ],
});
