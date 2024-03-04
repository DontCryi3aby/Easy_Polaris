import { Box, Button, Icon, InlineStack, Text, TopBar } from "@shopify/polaris";
import {
  ArrowLeftIcon,
  NotificationIcon,
  PlusCircleIcon,
} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import Logo from "../assets/images/Logo.png";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  return (
    <Box
      style={{
        height: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <Box style={{ width: "200px" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <InlineStack align="center" blockAlign="center">
        <Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text variant="bodyMd" as="h6">
              Available credits: 4
            </Text>
            <Icon source={PlusCircleIcon} tone="base" />

            <button className="custom-medium-btn">Submit a new task</button>

            <Button
              icon={NotificationIcon}
              accessibilityLabel="Notification"
              size="large"
              variant="plain"
            />
          </Box>
        </Box>
        <Box style={{ marginLeft: "10px" }}>
          <TopBar.UserMenu
            actions={[
              {
                items: [{ content: "Back to Shopify", icon: ArrowLeftIcon }],
              },
              {
                items: [{ content: "Community forums" }],
              },
            ]}
            name="Nguyen Ngoc Thach"
            detail="Subcribe Now!"
            initials="T"
            open={isUserMenuOpen}
            onToggle={toggleIsUserMenuOpen}
          />
        </Box>
      </InlineStack>
    </Box>
  );
}
