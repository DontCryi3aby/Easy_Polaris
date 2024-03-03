import {
  Home,
  Contact,
  Task,
  Project,
  Plan,
  MemberPerk,
  Invite,
  FAQ,
} from "../pages";
import { Settings } from "../pages/Settings";

const routes = [
  { path: "/home", component: Home },
  { path: "/contact", component: Contact, layout: null },
  { path: "/task", component: Task },
  { path: "/project", component: Project },
  { path: "/project/active", component: Project },
  { path: "/project/completed", component: Project },
  { path: "/project/closed", component: Project },
  { path: "/plan", component: Plan },
  { path: "/member-perk", component: MemberPerk },
  { path: "/invite", component: Invite },
  { path: "/faq", component: FAQ },
  { path: "/settings", component: Settings },
];

export default routes;
