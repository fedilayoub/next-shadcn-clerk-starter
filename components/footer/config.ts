export type FooterNavItem = {
  title: string;
  href: string;
};

export type FooterSection = {
  title: string;
  items: FooterNavItem[];
};

export const footerConfig = {
  description: {
    primary: "Next | Shadcn UI | Clerk Saas Starter",
    secondary: "Quickly build your next SaaS application with Next.js, Shadcn UI, and Clerk",
  },
  sections: [
    {
      title: "Title 1",
      items: [
        { title: "Subtitle 1", href: "/title1" },
        { title: "Subtitle 2", href: "/title2" },
        { title: "Subtitle 3", href: "/title3" },
        { title: "Subtitle 4", href: "/title4" },
      ],
    },
    {
      title: "Title 2",
      items: [
        { title: "Subtitle 1", href: "mailto:example@example.com" },
        { title: "Subtitle 2", href: "https://twitter.com/example" },
        { title: "Subtitle 3", href: "https://github.com/example" },
      ],
    },
    {
      title: "Title 3",
      items: [
        { title: "Subtitle 1", href: "/title1" },
        { title: "Subtitle 2", href: "/title2" },
        { title: "Subtitle 3", href: "/title3" },
        { title: "Subtitle 4", href: "/title4" },
        { title: "Subtitle 5", href: "/title5" },
      ],
    },
    {
      title: "Title 4",
      items: [
        { title: "Subtitle 1", href: "/title1" },
        { title: "Subtitle 2", href: "/title2" },
        { title: "Subtitle 3", href: "/title3" },
        { title: "Subtitle 4", href: "/title4" },
        { title: "Subtitle 5", href: "/title5" },
      ],
    },
  ],
}; 