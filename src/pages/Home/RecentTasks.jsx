import { Badge, Box, DataTable, LegacyCard, Page } from "@shopify/polaris";
import React from "react";
import dayjs from "dayjs";
export function RecentTasks({ data }) {
  const taskListCustom = data.map((item) => {
    const typeCustom = <Badge tone="info">{item.type}</Badge>;
    const idCustom = <b>#{item.id}</b>;
    const descCustom = (
      <Box>
        <h5
          style={{
            fontSize: "15px",
            color: "#6e3bf5",
            fontWeight: "700",
          }}
        >
          {item.title}
        </h5>
        <p
          style={{
            color: "rgba(0, 0, 0, 0.5)",
            fontWeight: "600",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "500px",
          }}
        >
          {item.description}
        </p>
      </Box>
    );
    const statusCustom = item.status ? (
      <Badge tone="success" progress="complete">
        completed
      </Badge>
    ) : (
      <Badge tone="warning" progress="complete">
        cancelled
      </Badge>
    );
    const dateFirstCustom = dayjs(item.first_deliverable).format("DD MMM YYYY");
    const dateClosedCustom = dayjs(item.closed).format("DD MMM YYYY");
    return [
      typeCustom,
      idCustom,
      descCustom,
      statusCustom,
      dateFirstCustom,
      dateClosedCustom,
    ];
  });

  return (
    <Page title="Sales by product" fullWidth>
      <LegacyCard>
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text", "text"]}
          headings={[
            "Type",
            "Task ID",
            "Task Name",
            "Status",
            "First Deliverable",
            "Closed",
          ]}
          rows={taskListCustom}
        />
      </LegacyCard>
    </Page>
  );
}
