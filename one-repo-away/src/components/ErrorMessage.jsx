import { Alert } from "@chakra-ui/react/alert";

export default function ErrorMessage({ message }) {
  return (
    <Alert.Root status="error">
      <Alert.Indicator />
      <Alert.Title fontSize={"md"}>{message}</Alert.Title>
    </Alert.Root>
  );
}
