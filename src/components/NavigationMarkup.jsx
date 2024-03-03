import { Badge, Box, Navigation } from "@shopify/polaris";
import {
  AppsIcon,
  BlogIcon,
  ChatIcon,
  DisabledIcon,
  DiscountIcon,
  GiftCardIcon,
  HomeIcon,
  PersonAddIcon,
  PlusCircleIcon,
  QuestionCircleIcon,
  SettingsIcon,
  StatusActiveIcon,
} from "@shopify/polaris-icons";
import { useLocation } from "react-router-dom";

export default function NavigationMarkup() {
  const location = useLocation();
  return (
    <Navigation location={location.pathname}>
      <Box>
        <Navigation.Section
          items={[
            {
              url: "/home",
              label: "Home",
              icon: HomeIcon,
            },
            {
              url: "/task",
              label: "Task Catalog",
              icon: AppsIcon,
              badge: "46",
            },
          ]}
        />

        <Navigation.Section
          title="MY PROJECTS"
          items={[
            {
              url: "/project/active",
              label: "Active",
              icon: BlogIcon,
              badge: <Badge tone="info">12</Badge>,
            },
            {
              url: "/project/completed",
              label: "Completed",
              icon: StatusActiveIcon,
            },
            {
              url: "/project/closed",
              label: "Closed",
              icon: DisabledIcon,
            },
          ]}
          action={{
            accessibilityLabel: "Add project",
            icon: PlusCircleIcon,
            onClick: () => {},
          }}
        />

        <Navigation.Section
          title="MY PLAN"
          items={[
            {
              url: "/plan",
              label: "Subcribe",
              icon: DiscountIcon,
              badge: <Badge tone="success">Save 40%</Badge>,
            },
          ]}
        />

        <Navigation.Section
          title="MORE"
          items={[
            {
              url: "/member-perk",
              label: "Member Perks",
              icon: GiftCardIcon,
            },
            {
              url: "/invite",
              label: "Invite Friends",
              icon: PersonAddIcon,
              badge: <Badge tone="success">Earn $10</Badge>,
            },
            {
              url: "/contact",
              label: "Contact Us",
              icon: ChatIcon,
              badge: <Badge tone="success">It's free</Badge>,
            },
            {
              url: "/faq",
              label: "FAQ",
              icon: QuestionCircleIcon,
            },
          ]}
        />
      </Box>

      <Box style={{ marginTop: "120px" }}>
        <Navigation.Section
          items={[
            {
              url: "/settings",
              label: "Settings",
              icon: SettingsIcon,
            },
          ]}
        />
      </Box>
    </Navigation>
  );
}
