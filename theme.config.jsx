const themeConfig = {
  settings: {
    title: "Home Page",
    description: "JavaScript || Reactjs || Nextjs || Python || Rust || Biotechnology || Bioinformatic || Front-end Developer || Author",
    SiteURL:"https://officialrajdeepsingh.dev/",
    defaultSEO: {
      title: "Home Page",
      titleTemplate: '%s | Rajdeep Singh',
      twitter: {
        handle: "@Official_R_deep",
        site: "@site",
        cardType: "summary_large_image"
      }
    }
  },
  DateFormat: "MMM DD, YYYY",
  bannerMessage: "Start your markdown portfolio blog with nextjs, nextra, tailwind CSS, and Shadcn UI using <a style='margin: 0px 4px;text-decoration:underline;' target='_blank' href='https://www.npmjs.com/package/section-blog-theme'> the section blog theme. </a>",
  SocialLinks: [
    {
      name: "twitter",
      url: "https://twitter.com/Official_R_deep",
    },
    {
      name: "github",
      url: "https://github.com/officialrajdeepsingh/officialrajdeepsingh.dev",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/officalrajdeepsingh",
    }
  ],
  Logo: {
    logo: "Rajdeep Singh.",
    target: "_self"
  },
  PrimaryNavigation: [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/posts",
      title: "Blog",
    },
    {
      title: "Tags",
      subNav: true,
      subNavigation: [
        {
          title: "Ghost CMS",
          href: "/tags/ghost",
          description:
            "Check out my personal portfolio blog website.",
        },
        {
          title: "Linux",
          href: "/tags/linux",
          description: "Section blog theme is nextra based theme.",
        },
        {
          title: "Raspberry Pi",
          href: "/tags/raspberry",
          description: "Section blog theme is nextra based theme.",
        }
      ],
    },
    {
      title: "Projects",
      subNav: true,
      subNavigation: [
        {
          title: "Personal Blog",
          href: "https://officialrajdeepsingh.dev/",
          description: "Check out my personal portfolio blog website.",
        },
        {
          title: "Section Blog Theme",
          href: "https://github.com/frontendweb3/section-blog-theme",
          description: "Section blog theme is nextra based theme.",
        },
        {
          title: "Awesome Nextjs",
          href: "https://github.com/officialrajdeepsingh/awesome-nextjs",
          description: "A curated list of awesome Nextjs-based libraries that help build small and large-scale applications with next.js.",
        },
      ],
    },
    {
      href: "/pages/manga-and-anime",
      title: "Manga List"
    }
  ],
  SecondaryNavigation: [
    {
      href: "/pages/disclaimer",
      title: "Disclaimer",
    },
    {
      href: "/pages/privacy-policy",
      title: "Privacy Policy",
    },
    {
      href: "/pages/contact",
      title: "Contact",
    },
  ]
};
export default themeConfig;