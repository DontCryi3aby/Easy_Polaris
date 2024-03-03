import { Box, LegacyStack, Text } from "@shopify/polaris";

export function Banner() {
  return (
    <Box
      className="custom-banner"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Box style={{ width: "300px" }}>
        <LegacyStack vertical>
          <Text variant="heading2xl" as="h2">
            Hey Thach, welcome to EasyPolaris!
          </Text>
          <Text variant="bodyLg" as="p">
            Submit a new task, pick a task from the catalog or subcribe to
            submit unlimited tasks!
          </Text>
          <button
            class="custom-large-btn"
            style={{
              border: "1px solid rgb(170, 170, 170)",
              background: "#fff",
            }}
          >
            Submit a new task
          </button>
          <button
            class="custom-large-btn"
            style={{
              background: "rgb(88, 110, 202)",
              border: "1px solid rgb(88, 110, 202)",
              color: "rgb(255, 255, 255)",
            }}
          >
            Subcribe & Save
          </button>
        </LegacyStack>
      </Box>
      <Box style={{ flex: "1" }}></Box>
    </Box>
  );
}
