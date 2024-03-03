import { Box } from "@shopify/polaris";
import { Banner } from "./Banner";
import { RecentTasks } from "./RecentTasks";

export function Home() {
  return (
    <Box style={{ padding: "20px 60px 40px" }}>
      <Banner />
      <RecentTasks />
    </Box>
  );
}
