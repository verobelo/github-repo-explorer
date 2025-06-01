import { Alert } from "@chakra-ui/react/alert";
import { Spinner } from "@chakra-ui/react/spinner";

export default function Loader({ query }) {
  return (
    <Alert.Root
      borderStartWidth="3px"
      borderStartColor="colorPalette.600"
      title="We are loading something">
      <Alert.Indicator>
        <Spinner size="sm" />
      </Alert.Indicator>
      <Alert.Title fontSize={"md"}>
        Searching for "{query}" results ...
      </Alert.Title>
    </Alert.Root>
  );
}
