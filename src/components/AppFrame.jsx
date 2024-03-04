import { Frame } from "@shopify/polaris";

import React, { useCallback, useState } from "react";
import Logo from "../assets/images/Logo.png";
import Header from "./Header";
import NavigationMarkup from "./NavigationMarkup";
import AppTopBar from "./AppTopBar";

export default function AppFrame({ children }) {
  // Track the open state of the mobile navigation
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const logo = {
    topBarSource: Logo,
    width: 120,
    url: "/",
    accessibilityLabel: "Shopify",
  };

  return (
    <Frame
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      topBar={
        <AppTopBar
          onToggleMobileNavigationActive={toggleMobileNavigationActive}
        />
      }
      logo={logo}
      navigation={<NavigationMarkup />}
    >
      {children}
    </Frame>
  );
}
