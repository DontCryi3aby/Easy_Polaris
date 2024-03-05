import {
  Box,
  Divider,
  LegacyCard,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
} from "@shopify/polaris";
import React from "react";

export default function ContactSkeleton() {
  return (
    <Page title="Contact">
      <LegacyCard sectioned>
        <Box style={{ padding: "20px 20px 0" }}>
          <SkeletonBodyText lines={3} />
          <Box style={{ margin: "20px 0" }}>
            <Divider borderColor="border" />
          </Box>

          <Box>
            <Box style={{ marginBottom: "20px" }}>
              <SkeletonBodyText lines={1} />
              <Box style={{ marginTop: "10px" }}>
                <SkeletonDisplayText maxWidth="100%" />
              </Box>
            </Box>
            <Box style={{ marginBottom: "20px" }}>
              <SkeletonBodyText lines={1} />
              <Box style={{ marginTop: "10px" }}>
                <SkeletonDisplayText maxWidth="100%" />
              </Box>
            </Box>
            <Box style={{ marginBottom: "20px" }}>
              <SkeletonBodyText lines={1} />
              <Box style={{ marginTop: "10px" }}>
                <SkeletonDisplayText maxWidth="100%" />
              </Box>
            </Box>
          </Box>
        </Box>
      </LegacyCard>
    </Page>
  );
}
