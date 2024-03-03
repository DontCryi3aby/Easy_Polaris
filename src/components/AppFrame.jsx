import { Frame } from "@shopify/polaris";

import React, { useCallback, useState } from "react";
import Logo from "../assets/images/Logo.png";
import AppTopBar from "./AppTopBar";
import NavigationMarkup from "./NavigationMarkup";

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
    width: 86,
    url: "/",
    accessibilityLabel: "Shopify",
  };

  return (
    <Frame
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      topBar={<AppTopBar />}
      logo={logo}
      navigation={<NavigationMarkup />}
    >
      {children}
    </Frame>
  );
}
