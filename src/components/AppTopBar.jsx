import { Button, InlineStack, Text, TopBar } from "@shopify/polaris";
import {
  ArrowLeftIcon,
  NotificationIcon,
  PlusCircleIcon,
} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

export default function Header({ onToggleMobileNavigationActive }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

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
    <InlineStack blockAlign="center" gap="300">
      <Text variant="bodyMd" as="h6">
        Available credits: 4
      </Text>

      <Button
        icon={PlusCircleIcon}
        accessibilityLabel="Add credit"
        variant="plain"
      />

      <button className="custom-medium-btn">Submit a new task</button>

      <Button
        icon={NotificationIcon}
        accessibilityLabel="Notification"
        variant="plain"
      />
    </InlineStack>
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onNavigationToggle={onToggleMobileNavigationActive}
    />
  );
}
