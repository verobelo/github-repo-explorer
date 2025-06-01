import { Alert } from "@chakra-ui/react/alert";

export default function NoReposMessage({ query }) {
  return (
    <Alert.Root status="info">
      <Alert.Indicator />
      <Alert.Title>No repositories for "{query}" found</Alert.Title>
    </Alert.Root>
  );
}
