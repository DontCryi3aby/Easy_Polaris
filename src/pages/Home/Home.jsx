import { Box } from "@shopify/polaris";
import { Banner } from "./Banner";
import { RecentTasks } from "./RecentTasks";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/httpRequest";

export function Home() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axiosClient.get(
        "https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks",
        {
          params: { page: 1, limit: 10 },
        }
      );
      setTaskList(data);
      console.log(data);
    })();
  }, []);

  return (
    <Box style={{ padding: "20px 60px 40px" }}>
      <Banner />
      <RecentTasks data={taskList} />
    </Box>
  );
}
