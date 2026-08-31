export interface Screenshot {
  title: string;
  src: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  blurb: string;
  role?: string;
  stack: string[];
  href: string;
  external: boolean;
  type: string;
  screenshots?: Screenshot[];
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "01",
    name: "Artisan Coffee shop POS",
    subtitle: "Internal POS & Kitchen Terminal",
    blurb:
      "Internal staff-only ordering and point-of-sale system built for real day-to-day shop use with order management and item tracking.",
    stack: ["TypeScript", "React", "Supabase", "Node.js", "PostgreSQL"],
    href: "#",
    external: false,
    type: "Web Application",
    screenshots: [
      {
        title: "Counter POS — Live Order Taking & Payment Flow",
        src: "/projects/artisan/order-taking.png",
      },
      {
        title: "Live Order Queue & Kitchen Fulfillment",
        src: "/projects/artisan/live-queue.png",
      },
      {
        title: "Staff PIN Authentication & Security Terminal",
        src: "/projects/artisan/pin-login.png",
      },
      {
        title: "Menu & Inventory Management (Stock Toggles & Add-ons)",
        src: "/projects/artisan/menu-management.png",
      },
      {
        title: "Order History & Real-Time Sales Analytics",
        src: "/projects/artisan/order-history.png",
      },
    ],
  },
  {
    id: "02",
    name: "Clover Industrial",
    subtitle: "Industrial Manufacturing Suite",
    blurb:
      "Modern business site for an industrial fan and blower manufacturer — clean, fast, and built to convert customer inquiries.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO & Performance"],
    href: "#",
    external: false,
    type: "Marketing & Catalog",
  },
  {
    id: "03",
    name: "GrindOn",
    subtitle: "Custom Esports Apparel Platform",
    blurb:
      "E-commerce storefront and custom teamwear apparel platform with user accounts, custom ordering, and catalog browsing.",
    stack: ["Firebase", "JavaScript", "HTML5", "CSS3", "Hosting"],
    href: "https://grindon-da126.web.app/",
    external: true,
    type: "E-Commerce Web App",
  },
  {
    id: "04",
    name: "A.R-DUINO Mobile App",
    subtitle: "Augmented Reality Circuit Simulator",
    blurb:
      "Augmented reality mobile application simulating electronic circuits and Arduino hardware components in interactive 3D space.",
    stack: ["Unity 3D", "C#", "AR Foundation", "Android SDK"],
    href: "#",
    external: false,
    type: "Mobile AR Application",
  },
  {
    id: "05",
    name: "Salo sa Antipolo",
    subtitle: "Restaurant Waiter & Order Terminal",
    blurb:
      "A full restaurant ordering platform covering three roles: waiters taking table-side orders with live table-state management (free/occupied/reserved), cashiers, and an admin dashboard. Planned and led the overall system flow; built the waiter and cashier interfaces, and contributed features to admin.",
    stack: ["Firebase", "JavaScript", "HTML5", "CSS3", "Realtime DB"],
    href: "https://salo-sa-antipolo.web.app/waiter.html",
    external: true,
    type: "Hospitality Web App",
  },
];

// Homepage shows 1, 2, and 4 (GrindOn is on the dedicated /works page)
export const HOMEPAGE_PROJECTS: Project[] = [
  ALL_PROJECTS[0], // 01 Artisan Coffee shop POS
  ALL_PROJECTS[1], // 02 Clover Industrial
  {
    ...ALL_PROJECTS[3],
    id: "03", // Clean sequential index for homepage: 01, 02, 03
  },
];
