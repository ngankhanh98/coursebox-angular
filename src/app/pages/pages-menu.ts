import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  { title: "Explore", icon: "globe-3", link: "explore", home: true },
  {
    title: "Attend",
    icon: "book",
    children: [
      { title: "Enrolled courses", link: "attend/enrolled-courses" },
      { title: "My courses", link: "attend/my-courses" },
    ],
  },
  { title: "Account", icon: "people", link: "account" },
];
