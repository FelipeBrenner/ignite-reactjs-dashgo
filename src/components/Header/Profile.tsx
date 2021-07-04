import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Felipe Brenner</Text>
        <Text color="gray.300" fontSize="small">
          felipeobrenner@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Felipe Brenner"
        src="https://github.com/felipebrenner.png"
      />
    </Flex>
  );
}
