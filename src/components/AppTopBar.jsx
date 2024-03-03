import { Box, Button, Icon, Text, TopBar } from "@shopify/polaris";
import {
  ArrowLeftIcon,
  NotificationIcon,
  PlusCircleIcon,
} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const userMenuMarkup = (
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
  );

  const secondaryMenuMarkup = (
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

      <Button>Submit a new task</Button>
      <TopBar.Menu
        activatorContent={
          <span>
            <Icon source={NotificationIcon} />
            <Text as="span" visuallyHidden>
              Secondary menu
            </Text>
          </span>
        }
        open={isSecondaryMenuOpen}
        onOpen={toggleIsSecondaryMenuOpen}
        onClose={toggleIsSecondaryMenuOpen}
        actions={[
          {
            items: [{ content: "Notification" }],
          },
        ]}
      />
    </Box>
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );
}
