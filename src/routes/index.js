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

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact, layout: null },
  { path: "/task", component: Task },
  { path: "/project", component: Project },
  { path: "/plan", component: Plan },
  { path: "/member-perk", component: MemberPerk, layout: null },
  { path: "/invite", component: Invite, layout: null },
  { path: "/faq", component: FAQ, layout: null },
];

export default routes;
