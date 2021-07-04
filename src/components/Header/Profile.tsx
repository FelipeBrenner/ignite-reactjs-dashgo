import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Brenner</Text>
          <Text color="gray.300" fontSize="small">
            felipeobrenner@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Felipe Brenner"
        src="https://github.com/felipebrenner.png"
      />
    </Flex>
  );
}
