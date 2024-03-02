import { BlockStack, Box, InlineStack, LegacyCard } from "@shopify/polaris";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export function MainLayout({ children }) {
  return (
    <Box>
      <InlineStack>
        <Box width="200px">
          <LegacyCard>
            <Sidebar />
          </LegacyCard>
        </Box>
        <Box>
          <BlockStack>
            <Header />
            <LegacyCard>{children}</LegacyCard>
          </BlockStack>
        </Box>
      </InlineStack>
    </Box>
  );
}
