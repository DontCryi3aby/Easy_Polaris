import { Box } from "@shopify/polaris";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/httpRequest";
import { Banner } from "./Banner";
import HomeSkeleton from "./HomeSkeleton";
import { RecentTasks } from "./RecentTasks";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    (async () => {
      const data = await axiosClient.get(
        "https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks",
        {
          params: { page: 1, limit: 10 },
        }
      );
      setTaskList(data);
    })();
  }, []);

  return !isLoading ? (
    <Box style={{ padding: "20px 60px 40px" }}>
      <Banner />
      <RecentTasks data={taskList} />
    </Box>
  ) : (
    <HomeSkeleton />
  );
}
