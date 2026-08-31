export interface Screenshot {
  title: string;
  src: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  blurb: string;
  status?: string;
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
    name: "Coffee shop POS",
    subtitle: "Internal ordering & point-of-sale system",
    blurb:
      "An internal, staff-only ordering tool built for a small coffee shop — not customer-facing. Handles the full order lifecycle from a live queue (Received → Preparing → Ready → Completed) through to end-of-day revenue totals, with role-gated access for admin and order-taking staff.",
    status: "Featured on homepage",
    stack: ["Next.js (App Router)", "TypeScript", "PostgreSQL via Prisma", "Tailwind CSS"],
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
    subtitle: "Business website for an industrial equipment manufacturer",
    blurb:
      "A static marketing and product-catalog site built for a real client — Clover Industrial Fan and Blower, Inc. Covers company profile, a full product catalog, solutions by industry, and contact/quote request flows, styled to the client's existing brand.",
    status: "Client work · Featured on homepage",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "#",
    external: false,
    type: "Marketing & Catalog",
  },
  {
    id: "03",
    name: "AR + Arduino thesis",
    subtitle: "Augmented reality hardware simulation",
    blurb:
      "A thesis project simulating Arduino-based electronics — including an RC car assembly sequence and an LED circuit simulation — in augmented reality on Android. Includes custom snapping, drag-assembly, and wiring systems built from scratch in Unity.",
    status: "Featured on homepage",
    stack: ["Unity 6.3", "C#", "AR Foundation", "Android SDK"],
    href: "#",
    external: false,
    type: "Mobile AR Application",
  },
  {
    id: "04",
    name: "Walldr",
    subtitle: "Personal wall & digital gifting app",
    blurb:
      "A social product for young Filipino users to build a personal \"wall\" and send digital gifts — with four distinct wall types (Personal, Memory, Shared, Gift), a send-credits system, and a full monetization structure. Currently in active frontend development.",
    status: "In progress",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "#",
    external: false,
    type: "Social & Digital Gifting",
  },
  {
    id: "05",
    name: "GrindOn",
    subtitle: "E-commerce storefront for custom teamwear",
    blurb:
      "An online storefront for custom teamwear and apparel — user accounts, catalog browsing, and a custom-ordering flow for jerseys and team gear.",
    stack: ["Firebase", "JavaScript", "HTML5", "CSS3"],
    href: "https://grindon-da126.web.app/",
    external: true,
    type: "E-Commerce Web App",
  },
  {
    id: "06",
    name: "Salo sa Antipolo",
    subtitle: "Restaurant ordering system — waiter, cashier & admin",
    blurb:
      "A full restaurant ordering platform covering three roles: waiters taking table-side orders with live table-state management (free/occupied/reserved), cashiers, and an admin dashboard.",
    role: "Planned and led the overall system flow. Built the waiter and cashier interfaces, and contributed features to admin.",
    status: "Group project",
    stack: ["JavaScript", "Python", "HTML/CSS", "Firebase"],
    href: "https://salo-sa-antipolo.web.app/waiter.html",
    external: true,
    type: "Hospitality Platform",
  },
];

// Homepage shows projects 01, 02, and 03
export const HOMEPAGE_PROJECTS: Project[] = [
  ALL_PROJECTS[0], // 01 Coffee shop POS
  ALL_PROJECTS[1], // 02 Clover Industrial
  ALL_PROJECTS[2], // 03 AR + Arduino thesis
];
