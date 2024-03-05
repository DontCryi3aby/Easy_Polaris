import {
  Box,
  LegacyStack,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
} from "@shopify/polaris";

export default function HomeSkeleton() {
  return (
    <Box style={{ padding: "20px 60px 40px" }}>
      <Box
        style={{ display: "flex", alignItems: "center", minHeight: "500px" }}
      >
        <Box style={{ width: "300px" }}>
          <LegacyStack vertical>
            <SkeletonDisplayText maxWidth="100%" />
            <SkeletonBodyText />
            <SkeletonDisplayText maxWidth="80%" />

            <SkeletonDisplayText maxWidth="80%" />
          </LegacyStack>
        </Box>
        <Box style={{ flex: "1" }}></Box>
      </Box>

      <Page title="Sales by product" fullWidth>
        <Box style={{ marginBottom: "10px" }}>
          <SkeletonDisplayText maxWidth="100%" size="large" />
        </Box>
        <Box style={{ marginBottom: "10px" }}>
          <SkeletonBodyText lines={6} />
        </Box>
      </Page>
    </Box>
  );
}
