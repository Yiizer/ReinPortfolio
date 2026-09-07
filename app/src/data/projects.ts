export interface Screenshot {
  title: string;
  src: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  blurb: string;
  status?: string;
  role?: string;
  stack: string[];
  href: string;
  external: boolean;
  type: string;
  featured?: boolean;
  thumbnail?: string;
  screenshots?: Screenshot[];
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "01",
    slug: "artisan-pos",
    name: "Coffee Shop POS",
    subtitle: "Internal ordering & point-of-sale system",
    blurb:
      "An internal, staff-only ordering tool engineered for a specialized coffee bar. Handles the full order lifecycle from a live kitchen queue (Received → Preparing → Ready → Completed) through to end-of-day sales auditing, with role-gated access for admin and order-taking baristas.",
    status: "Production Ready",
    featured: true,
    thumbnail: "/projects/artisan/order-taking.png",
    stack: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
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
    slug: "salo-sa-antipolo",
    name: "Salo sa Antipolo",
    subtitle: "Restaurant ordering system — waiter, cashier & admin",
    blurb:
      "A comprehensive multi-role restaurant management platform. Covers floor plan table-state tracking (free, occupied, bill-out) for mobile waiters, instant order ticket synchronization to kitchen, cashier receipt processing, and an administrative inventory overview.",
    role: "Planned system architecture, built the waiter and cashier applications, and contributed to admin modules.",
    status: "Live System",
    featured: true,
    thumbnail: "/projects/salo/table-management.png",
    stack: ["JavaScript", "Python", "Firebase", "Realtime DB", "HTML/CSS"],
    href: "https://salo-sa-antipolo.web.app/waiter.html",
    external: true,
    type: "Hospitality Platform",
    screenshots: [
      {
        title: "Waiter Portal — Live Table State Management & Order Slips",
        src: "/projects/salo/table-management.png",
      },
      {
        title: "Waiter Portal — Table-Side Ordering & Menu Selection",
        src: "/projects/salo/menu-ordering.png",
      },
      {
        title: "Cashier Portal — Payment Processing & Receipt Generation",
        src: "/projects/salo/cashier-payment.png",
      },
      {
        title: "Admin Dashboard — Real-time Operations & Table Overview",
        src: "/projects/salo/admin-overview.png",
      },
      {
        title: "Admin Dashboard — Billing & Transaction Records",
        src: "/projects/salo/admin-billing.png",
      },
    ],
  },
  {
    id: "03",
    slug: "clover-industrial",
    name: "Clover Industrial",
    subtitle: "Business website & equipment catalog",
    blurb:
      "A digital marketing and technical equipment catalog engineered for Clover Industrial Fan and Blower, Inc. Features complete product specifications, centrifugal blower performance charts, and direct quotation pipelines tailored to their industrial brand.",
    status: "Client Project",
    featured: false,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
    external: false,
    type: "Marketing & Catalog",
  },
  {
    id: "04",
    slug: "ar-arduino-thesis",
    name: "AR + Arduino Simulation",
    subtitle: "Augmented reality hardware circuit simulator",
    blurb:
      "An interactive Android AR simulation system designed for engineering education. Covers 3D circuit breadboard simulations (LED blinking, potentiometer circuit regulation, RC car wiring assembly) using target marker detection and real-time electrical telemetry.",
    role: "Architected component logic, pin interactions, and engineered two full hardware simulation modules in Unity.",
    status: "Academic Thesis",
    featured: false,
    thumbnail: "/projects/arduino/ar-rc-car-camera.jpg",
    stack: ["Unity 6", "C#", "AR Foundation", "Vuforia Engine", "Android SDK"],
    href: "#",
    external: false,
    type: "Mobile AR Application",
    screenshots: [
      {
        title: "Real-World AR Projection — Arduino RC Car on Physical Desk",
        src: "/projects/arduino/ar-rc-car-camera.jpg",
      },
      {
        title: "Educational Simulation Dashboard — Project & Module Selector",
        src: "/projects/arduino/project-selector.jpg",
      },
      {
        title: "Target Marker Recognition & Microcontroller Telemetry (ATmega328P)",
        src: "/projects/arduino/marker-tracking-uno.jpg",
      },
      {
        title: "3D RC Car Wiring Builder — L298N Motor Driver Assembly",
        src: "/projects/arduino/rc-car-wiring-builder.jpg",
      },
      {
        title: "3D Breadboard Circuit Assembly — Component Tray & IDE Integration",
        src: "/projects/arduino/breadboard-assembly.jpg",
      },
      {
        title: "AR Component Library Hub & Device Pairing Portal",
        src: "/projects/arduino/qr-component-library.jpg",
      },
    ],
  },
  {
    id: "05",
    slug: "walldr",
    name: "Walldr",
    subtitle: "Personal wall & digital gifting application",
    blurb:
      "A social web application for creating personalized community walls. Features four unique wall configurations (Personal, Memory, Shared, Gift Wall) with digital gifting credits, custom stickers, and interactive micro-transactions.",
    status: "In Development",
    featured: false,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    href: "#",
    external: false,
    type: "Social Platform",
  },
  {
    id: "06",
    slug: "grindon",
    name: "GrindOn",
    subtitle: "E-commerce storefront for custom teamwear",
    blurb:
      "An apparel e-commerce web platform for custom esports jerseys and athletic apparel. Supports custom nickname/number lettering previews, shopping cart persistence, and order tracking for teams.",
    role: "Engineered database architecture, cart management, and administrative order handling.",
    status: "Group Project",
    featured: false,
    thumbnail: "/projects/grindon/storefront-hero.png",
    stack: ["Firebase", "JavaScript", "HTML5", "CSS3"],
    href: "https://grindon-da126.web.app/",
    external: true,
    type: "E-Commerce",
    screenshots: [
      {
        title: "Storefront Landing & Brand Hero — Custom Esports Teamwear",
        src: "/projects/grindon/storefront-hero.png",
      },
      {
        title: "Product Catalog Grid — Pro Jersey Lineup & Collar Variants",
        src: "/projects/grindon/product-catalog.png",
      },
      {
        title: "Product Customizer — Size, Sizing Guides & Add to Cart",
        src: "/projects/grindon/product-customizer.png",
      },
      {
        title: "Shopping Cart & Live Order Subtotal Calculation",
        src: "/projects/grindon/shopping-cart.png",
      },
      {
        title: "Checkout & Interactive Shipping Location Pinning (Leaflet/OSM)",
        src: "/projects/grindon/shipping-map-pin.png",
      },
      {
        title: "Payment Gateway Selection (GCash, Online Banking, Cash on Delivery)",
        src: "/projects/grindon/payment-checkout.png",
      },
      {
        title: "Merchant Admin Portal — Live Stock Controls & Product Catalog",
        src: "/projects/grindon/admin-products.png",
      },
      {
        title: "Order Fulfillment Terminal — Real-Time Order Dispatch & Status",
        src: "/projects/grindon/admin-orders.png",
      },
    ],
  },
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);
