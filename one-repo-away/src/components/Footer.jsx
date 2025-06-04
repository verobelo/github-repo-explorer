import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" textAlign="center" p={"2"}>
      <Text fontSize={{ base: "xs", sm: "sm", md: "md" }}>
        &copy; 2025 Veronika Belozerova. All rights reserved.
      </Text>
    </Box>
  );
}
