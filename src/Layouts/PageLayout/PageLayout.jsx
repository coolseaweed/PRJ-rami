import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/SideBar/Sidebar";
const PageLayout = ({ children }) => {
  return (
    <Flex>
      {/* sidebar on the left */}
      <Box w={{ base: "70px", md: "240px" }}>
        <Sidebar />
      </Box>
      {/* the page content on the right */}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
