import { Badge, DataTable, LegacyCard, Page } from "@shopify/polaris";
import React from "react";
export function RecentTasks() {
  const rows = [
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
    [
      <Badge tone="info">Producer</Badge>,
      <b>#1</b>,
      <p
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "600",
        }}
      >
        Carbonite web goalkeeper gloves are ergonomically designed to give easy
        fit
      </p>,
      <Badge tone="success" progress="complete">
        active
      </Badge>,
      "20 Apr 2023",
      "13 Jul 2023",
    ],
  ];

  return (
    <Page title="Sales by product" fullWidth>
      <LegacyCard>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "text",
            "text",
            "text",
            "text",
          ]}
          headings={[
            "Type",
            "Task ID",
            "Task Name",
            "Status",
            "First Deliverable",
            "Closed",
          ]}
          rows={rows}
        />
      </LegacyCard>
    </Page>
  );
}
