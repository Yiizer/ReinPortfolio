"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, HOMEPAGE_PROJECTS } from "@/data/projects";

export function ProjectMockupGraphic({ id }: { id: string }) {
  if (id === "01") {
    // Artisan Coffee POS UI Mockup
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#101014" />
        {/* Top Header */}
        <rect x="0" y="0" width="600" height="40" fill="#16161b" />
        <circle cx="25" cy="20" r="5" fill="#ef4444" opacity="0.8" />
        <circle cx="42" cy="20" r="5" fill="#f59e0b" opacity="0.8" />
        <circle cx="59" cy="20" r="5" fill="#10b981" opacity="0.8" />
        <text x="80" y="24" fill="#a1a1aa" fontSize="11" fontFamily="monospace">ARTISAN POS v2.4 // REGISTER 01</text>
        <rect x="500" y="12" width="75" height="18" rx="4" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.4" />
        <text x="515" y="24" fill="#22c55e" fontSize="9" fontFamily="monospace">ONLINE</text>

        {/* Menu Grid (Left 60%) */}
        <rect x="20" y="55" width="340" height="305" rx="8" fill="#141419" stroke="#27272a" />
        <text x="35" y="80" fill="#e4e4e7" fontSize="12" fontFamily="monospace" fontWeight="bold">ITEM CATALOG</text>

        {/* Items */}
        {[
          { name: "Espresso Single", price: "$3.50", col: 0, row: 0, tag: "HOT" },
          { name: "Oat Flat White", price: "$5.20", col: 1, row: 0, tag: "POPULAR" },
          { name: "Iced Cold Brew", price: "$4.80", col: 0, row: 1, tag: "COLD" },
          { name: "Pour Over (V60)", price: "$6.00", col: 1, row: 1, tag: "FILTER" },
          { name: "Matcha Latte", price: "$5.50", col: 0, row: 2, tag: "TEA" },
          { name: "Almond Croissant", price: "$4.20", col: 1, row: 2, tag: "BAKERY" },
        ].map((item, idx) => {
          const x = 35 + item.col * 155;
          const y = 95 + item.row * 65;
          return (
            <g key={idx}>
              <rect x={x} y={y} width="145" height="55" rx="6" fill="#1c1c22" stroke="#2e2e36" />
              <text x={x + 10} y={y + 22} fill="#f4f4f5" fontSize="10" fontFamily="sans-serif" fontWeight="bold">{item.name}</text>
              <text x={x + 10} y={y + 40} fill="#a1a1aa" fontSize="10" fontFamily="monospace">{item.price}</text>
              <rect x={x + 95} y={y + 12} width="40" height="14" rx="3" fill="#27272a" />
              <text x={x + 100} y={y + 22} fill="#71717a" fontSize="7" fontFamily="monospace">{item.tag}</text>
            </g>
          );
        })}

        {/* Order Ticket (Right 40%) */}
        <rect x="375" y="55" width="205" height="305" rx="8" fill="#141419" stroke="#27272a" />
        <text x="390" y="80" fill="#e4e4e7" fontSize="12" fontFamily="monospace" fontWeight="bold">CURRENT TICKET</text>
        <line x1="390" y1="92" x2="565" y2="92" stroke="#27272a" strokeDasharray="3 3" />

        <text x="390" y="115" fill="#d4d4d8" fontSize="10" fontFamily="sans-serif">2x Oat Flat White</text>
        <text x="535" y="115" fill="#e4e4e7" fontSize="10" fontFamily="monospace">$10.40</text>

        <text x="390" y="140" fill="#d4d4d8" fontSize="10" fontFamily="sans-serif">1x Pour Over (V60)</text>
        <text x="540" y="140" fill="#e4e4e7" fontSize="10" fontFamily="monospace">$6.00</text>

        <line x1="390" y1="210" x2="565" y2="210" stroke="#27272a" />
        <text x="390" y="235" fill="#71717a" fontSize="10" fontFamily="monospace">SUBTOTAL</text>
        <text x="535" y="235" fill="#a1a1aa" fontSize="10" fontFamily="monospace">$16.40</text>
        <text x="390" y="255" fill="#71717a" fontSize="10" fontFamily="monospace">TAX (8%)</text>
        <text x="542" y="255" fill="#a1a1aa" fontSize="10" fontFamily="monospace">$1.31</text>
        <text x="390" y="280" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">TOTAL</text>
        <text x="525" y="280" fill="#ffffff" fontSize="13" fontFamily="monospace" fontWeight="bold">$17.71</text>

        {/* Charge Button */}
        <rect x="390" y="300" width="175" height="42" rx="6" fill="#f4f4f5" />
        <text x="445" y="325" fill="#09090b" fontSize="11" fontFamily="monospace" fontWeight="bold">CHARGE $17.71</text>
      </svg>
    );
  }

  if (id === "02") {
    // Clover Industrial Engineering Catalog UI Mockup
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#0c0d10" />
        {/* Top Nav */}
        <rect x="0" y="0" width="600" height="42" fill="#14151a" />
        <text x="25" y="26" fill="#f4f4f5" fontSize="12" fontFamily="sans-serif" fontWeight="bold">CLOVER INDUSTRIAL</text>
        <text x="280" y="25" fill="#a1a1aa" fontSize="10" fontFamily="sans-serif">Products &nbsp;·&nbsp; Engineering &nbsp;·&nbsp; Testing &nbsp;·&nbsp; Contact</text>
        <rect x="500" y="10" width="75" height="22" rx="4" fill="#27272a" />
        <text x="515" y="24" fill="#f4f4f5" fontSize="9" fontFamily="monospace">INQUIRE</text>

        {/* Hero Banner with Technical Diagram */}
        <rect x="25" y="60" width="550" height="150" rx="8" fill="#131419" stroke="#27272a" />
        <text x="45" y="95" fill="#71717a" fontSize="10" fontFamily="monospace">HEAVY-DUTY CENTRIFUGAL BLOWERS</text>
        <text x="45" y="125" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">Industrial Aerodynamics &amp; Ventilation</text>
        <text x="45" y="150" fill="#a1a1aa" fontSize="11" fontFamily="sans-serif">Engineered for extreme pressure, high-heat &amp; continuous factory air displacement.</text>
        <rect x="45" y="165" width="110" height="26" rx="4" fill="#ffffff" />
        <text x="60" y="182" fill="#09090b" fontSize="9" fontFamily="monospace" fontWeight="bold">VIEW SPECS →</text>

        {/* Fan Technical Rotor Wireframe */}
        <circle cx="480" cy="135" r="55" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="480" cy="135" r="40" stroke="#71717a" strokeWidth="1.5" />
        <circle cx="480" cy="135" r="16" fill="#27272a" stroke="#a1a1aa" strokeWidth="1.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
          <line
            key={i}
            x1="480"
            y1="135"
            x2={480 + Math.cos((ang * Math.PI) / 180) * 52}
            y2={135 + Math.sin((ang * Math.PI) / 180) * 52}
            stroke="#a1a1aa"
            strokeWidth="1.2"
          />
        ))}

        {/* Spec Grid Bottom (3 Cards) */}
        {[
          { title: "Series X-800 Blower", cfm: "Max CFM: 42,000", motor: "150 HP Direct Drive" },
          { title: "High-Temp Exhauster", cfm: "Rating: Up to 800°F", motor: "Reinforced Alloy Blades" },
          { title: "Custom Ducting Line", cfm: "Diameters: 12\" to 72\"", motor: "ISO 9001 Certified" },
        ].map((c, i) => (
          <g key={i}>
            <rect x={25 + i * 190} y={225} width="170" height="130" rx="6" fill="#131419" stroke="#27272a" />
            <text x={40 + i * 190} y={250} fill="#f4f4f5" fontSize="11" fontFamily="sans-serif" fontWeight="bold">{c.title}</text>
            <text x={40 + i * 190} y={275} fill="#a1a1aa" fontSize="9" fontFamily="monospace">{c.cfm}</text>
            <text x={40 + i * 190} y={295} fill="#71717a" fontSize="9" fontFamily="monospace">{c.motor}</text>
            <rect x={40 + i * 190} y={315} width="80" height="20" rx="3" fill="#1c1c22" stroke="#2e2e36" />
            <text x={50 + i * 190} y={328} fill="#d4d4d8" fontSize="8" fontFamily="monospace">DOWNLOAD PDF</text>
          </g>
        ))}
      </svg>
    );
  }

  if (id === "03") {
    // AR + Arduino thesis 3D Circuit Simulator
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#08090d" />
        {/* AR Viewport Frame */}
        <rect x="25" y="20" width="550" height="340" rx="10" fill="#0d0f15" stroke="#27272a" />

        {/* AR HUD Crosshairs & Grid Plane */}
        <circle cx="300" cy="190" r="110" stroke="#3b82f6" strokeOpacity="0.25" strokeDasharray="4 4" />
        <circle cx="300" cy="190" r="4" fill="#38bdf8" />
        <line x1="160" y1="190" x2="440" y2="190" stroke="#3b82f6" strokeOpacity="0.2" />
        <line x1="300" y1="80" x2="300" y2="300" stroke="#3b82f6" strokeOpacity="0.2" />

        {/* 3D Simulated Arduino Board Wireframe */}
        <rect x="220" y="130" width="160" height="110" rx="6" fill="#005c5f" fillOpacity="0.4" stroke="#00979d" strokeWidth="1.5" />
        <rect x="205" y="145" width="20" height="30" fill="#71717a" stroke="#d4d4d8" />
        <rect x="250" y="150" width="45" height="45" rx="3" fill="#18181b" stroke="#3f3f46" />
        <text x="255" y="176" fill="#a1a1aa" fontSize="7" fontFamily="monospace">ATMEGA328P</text>

        {/* Pin Headers */}
        <rect x="235" y="132" width="130" height="8" fill="#18181b" stroke="#71717a" />
        <rect x="235" y="230" width="130" height="8" fill="#18181b" stroke="#71717a" />

        {/* Connected Breadboard Wires */}
        <path d="M 330 132 C 330 80, 420 80, 440 120" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M 310 132 C 310 60, 460 60, 470 140" fill="none" stroke="#22c55e" strokeWidth="2" />
        <path d="M 280 238 C 280 280, 430 280, 450 210" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="3 3" />

        {/* LED Component */}
        <circle cx="440" cy="120" r="8" fill="#ef4444" stroke="#fca5a5" strokeWidth="1.5" />
        <circle cx="440" cy="120" r="14" stroke="#ef4444" strokeOpacity="0.4" />

        {/* AR HUD Telemetry Cards */}
        <rect x="40" y="35" width="130" height="50" rx="5" fill="#141419" fillOpacity="0.85" stroke="#27272a" />
        <text x="50" y="52" fill="#38bdf8" fontSize="8" fontFamily="monospace">● AR TRACKING: ACTIVE</text>
        <text x="50" y="66" fill="#f4f4f5" fontSize="10" fontFamily="monospace">VOLTAGE: 5.02V</text>
        <text x="50" y="78" fill="#71717a" fontSize="8" fontFamily="monospace">CURRENT: 18.4mA</text>

        <rect x="430" y="35" width="130" height="50" rx="5" fill="#141419" fillOpacity="0.85" stroke="#27272a" />
        <text x="440" y="52" fill="#a1a1aa" fontSize="8" fontFamily="monospace">UNITY PHYSICS 3D</text>
        <text x="440" y="66" fill="#f4f4f5" fontSize="10" fontFamily="monospace">SIMULATION: 60 FPS</text>
        <text x="440" y="78" fill="#22c55e" fontSize="8" fontFamily="monospace">CIRCUIT: CLOSED (OK)</text>
      </svg>
    );
  }

  if (id === "04") {
    // Walldr — Personal Wall & Digital Gifting App UI Mockup
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#0c0d12" />
        {/* App Topbar */}
        <rect x="0" y="0" width="600" height="42" fill="#13151d" />
        <text x="30" y="26" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.8">WALLDR</text>
        
        {/* Wall Tabs */}
        {["Personal", "Memory", "Shared", "Gift Wall"].map((tab, i) => (
          <g key={i}>
            <rect x={120 + i * 80} y={10} width="72" height="22" rx="11" fill={i === 0 ? "#06b6d4" : "transparent"} fillOpacity={i === 0 ? 0.2 : 0} stroke={i === 0 ? "#06b6d4" : "transparent"} strokeWidth="0.8" />
            <text x={130 + i * 80} y={24} fill={i === 0 ? "#22d3ee" : "#71717a"} fontSize="9" fontFamily="monospace" fontWeight={i === 0 ? "bold" : "normal"}>{tab}</text>
          </g>
        ))}

        {/* Send Credits Balance */}
        <rect x="465" y="10" width="105" height="22" rx="11" fill="#1b1e2a" stroke="#2c3246" />
        <text x="477" y="24" fill="#fde047" fontSize="9" fontFamily="monospace">✨ 450 Credits</text>

        {/* Left: User Profile & Wall Cards Feed */}
        <rect x="30" y="58" width="345" height="300" rx="8" fill="#12141c" stroke="#222634" />
        
        {/* Mini Profile Header */}
        <circle cx="60" cy="90" r="16" fill="#1f2433" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="56" y="94" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">R</text>
        <text x="88" y="88" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">rein.gavino</text>
        <text x="88" y="102" fill="#71717a" fontSize="8" fontFamily="monospace">wall.id/rein &bull; 148 gifts received</text>

        {/* Gift Wall Tiles Grid */}
        <rect x="45" y="120" width="150" height="105" rx="6" fill="#171a25" stroke="#2a3042" />
        <text x="55" y="140" fill="#f4f4f5" fontSize="10" fontWeight="bold" fontFamily="sans-serif">☕ Coffee Treat</text>
        <text x="55" y="156" fill="#a1a1aa" fontSize="8" fontFamily="sans-serif">&ldquo;Thanks for helping with deploy!&rdquo;</text>
        <text x="55" y="185" fill="#06b6d4" fontSize="8" fontFamily="monospace">From: @alex &bull; 2h ago</text>
        <rect x="55" y="195" width="60" height="16" rx="4" fill="#06b6d4" fillOpacity="0.15" />
        <text x="62" y="206" fill="#22d3ee" fontSize="7" fontFamily="monospace">50 CREDITS</text>

        <rect x="210" y="120" width="150" height="105" rx="6" fill="#171a25" stroke="#2a3042" />
        <text x="220" y="140" fill="#f4f4f5" fontSize="10" fontWeight="bold" fontFamily="sans-serif">🎂 Bday Sparkles</text>
        <text x="220" y="156" fill="#a1a1aa" fontSize="8" fontFamily="sans-serif">&ldquo;Happy birthday! Keep crushing it.&rdquo;</text>
        <text x="220" y="185" fill="#f43f5e" fontSize="8" fontFamily="monospace">From: @sarah &bull; 1d ago</text>
        <rect x="220" y="195" width="60" height="16" rx="4" fill="#f43f5e" fillOpacity="0.15" />
        <text x="227" y="206" fill="#fb7185" fontSize="7" fontFamily="monospace">100 CREDITS</text>

        {/* Memory Wall Sticker Note */}
        <rect x="45" y="235" width="315" height="105" rx="6" fill="#161822" stroke="#262b3a" />
        <text x="60" y="260" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">📌 Pinned Memory Wall</text>
        <text x="60" y="278" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">&ldquo;Built hackathon winner project together with the crew — June 2026&rdquo;</text>
        <text x="60" y="300" fill="#71717a" fontSize="8" fontFamily="monospace">4 Collaborators &bull; 18 Photos &bull; 32 Reactions</text>

        {/* Right: Send Digital Gift Action Box */}
        <rect x="390" y="58" width="180" height="300" rx="8" fill="#141722" stroke="#262c3e" />
        <text x="405" y="85" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Send a Digital Gift</text>
        <text x="405" y="100" fill="#71717a" fontSize="8" fontFamily="monospace">SURPRISE YOUR FRIENDS</text>

        {/* Gift Options Carousel */}
        {[
          { name: "Coffee Cup", icon: "☕", cost: "50 cr" },
          { name: "Golden Star", icon: "⭐", cost: "100 cr" },
          { name: "Boba Milk", icon: "🧋", cost: "75 cr" },
        ].map((g, i) => (
          <g key={i}>
            <rect x={405} y={115 + i * 48} width="150" height="40" rx="6" fill="#1b1f2e" stroke={i === 0 ? "#06b6d4" : "#282e42"} strokeWidth={i === 0 ? "1.2" : "1"} />
            <text x={415} y={140 + i * 48} fontSize="14">{g.icon}</text>
            <text x={440} y={133 + i * 48} fill="#f4f4f5" fontSize="9" fontWeight="bold" fontFamily="sans-serif">{g.name}</text>
            <text x={440} y={146 + i * 48} fill="#fde047" fontSize="8" fontFamily="monospace">{g.cost}</text>
          </g>
        ))}

        <rect x="405" y="275" width="150" height="35" rx="6" fill="#06b6d4" />
        <text x="445" y="297" fill="#09090b" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Send Gift ✨</text>

        <rect x="405" y="318" width="150" height="26" rx="6" fill="#1c202d" stroke="#2c3348" />
        <text x="430" y="334" fill="#a1a1aa" fontSize="8" fontFamily="monospace">Top-Up Credits</text>
      </svg>
    );
  }

  if (id === "05") {
    // GrindOn E-Commerce Platform UI Mockup
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#090a0e" />
        {/* Nav Bar */}
        <rect x="0" y="0" width="600" height="42" fill="#111319" />
        <text x="25" y="26" fill="#ffffff" fontSize="13" fontFamily="sans-serif" fontWeight="black" letterSpacing="1.5">GRINDON</text>
        <text x="260" y="25" fill="#a1a1aa" fontSize="10" fontFamily="sans-serif">Jerseys &nbsp;·&nbsp; Hoodies &nbsp;·&nbsp; Teamwear &nbsp;·&nbsp; Customizer</text>
        <circle cx="530" cy="21" r="12" fill="#1c1f2a" stroke="#2e3344" />
        <text x="525" y="25" fill="#d4d4d8" fontSize="10">🛒</text>
        <circle cx="560" cy="21" r="12" fill="#1c1f2a" stroke="#2e3344" />
        <text x="555" y="25" fill="#d4d4d8" fontSize="10">👤</text>

        {/* E-Commerce Product Spotlight & Customizer */}
        <rect x="25" y="60" width="310" height="295" rx="8" fill="#111319" stroke="#222634" />
        {/* Stylized Jersey Vector */}
        <path
          d="M 120 100 L 160 85 L 200 100 L 225 125 L 205 155 L 195 140 L 195 240 L 125 240 L 125 140 L 115 155 L 95 125 Z"
          fill="#1c202d"
          stroke="#475069"
          strokeWidth="2"
        />
        <path d="M 140 88 Q 160 110 180 88" fill="none" stroke="#717a94" strokeWidth="2" />
        <text x="145" y="165" fill="#f4f4f5" fontSize="14" fontFamily="monospace" fontWeight="bold">07</text>
        <text x="135" y="185" fill="#94a3b8" fontSize="9" fontFamily="sans-serif" fontWeight="bold">CYBER TEAM</text>

        {/* Product Details Sidebar */}
        <rect x="350" y="60" width="225" height="295" rx="8" fill="#111319" stroke="#222634" />
        <text x="370" y="90" fill="#f4f4f5" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Pro Esports Jersey v4</text>
        <text x="370" y="112" fill="#38bdf8" fontSize="14" fontFamily="monospace" fontWeight="bold">₱1,450.00</text>
        <text x="370" y="135" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Moisture-wicking dry-fit poly mesh.</text>

        <text x="370" y="165" fill="#717a94" fontSize="8" fontFamily="monospace">CUSTOMIZE NICKNAME &amp; NUMBER</text>
        <rect x="370" y="175" width="185" height="28" rx="4" fill="#181c26" stroke="#2e3547" />
        <text x="380" y="193" fill="#cbd5e1" fontSize="10" fontFamily="monospace">SHADOW // 07</text>

        <text x="370" y="225" fill="#717a94" fontSize="8" fontFamily="monospace">SELECT SIZE</text>
        <g>
          {["S", "M", "L", "XL"].map((sz, i) => (
            <g key={i}>
              <rect x={370 + i * 40} y={235} width="32" height="26" rx="4" fill={i === 1 ? "#ffffff" : "#181c26"} stroke={i === 1 ? "#ffffff" : "#2e3547"} />
              <text x={382 + i * 40} y={252} fill={i === 1 ? "#09090b" : "#94a3b8"} fontSize="10" fontFamily="monospace" fontWeight="bold">{sz}</text>
            </g>
          ))}
        </g>

        <rect x="370" y="290" width="185" height="42" rx="6" fill="#f4f4f5" />
        <text x="415" y="316" fill="#09090b" fontSize="11" fontFamily="monospace" fontWeight="bold">ADD TO CART 🛍️</text>
      </svg>
    );
  }

  // Salo sa Antipolo Waiter & Table Order Management UI Mockup (06)
  return (
    <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="380" fill="#111317" />
      {/* Top Header */}
      <rect x="0" y="0" width="600" height="45" fill="#171920" />
      <text x="30" y="28" fill="#f4f4f5" fontSize="13" fontWeight="bold" fontFamily="serif">SALO SA ANTIPOLO</text>
      <rect x="200" y="14" width="90" height="18" rx="9" fill="#06b6d4" fillOpacity="0.15" stroke="#06b6d4" strokeWidth="0.8" />
      <text x="210" y="27" fill="#06b6d4" fontSize="8" fontFamily="monospace" fontWeight="bold">WAITER PORTAL</text>

      <rect x="480" y="14" width="90" height="20" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="0.8" />
      <text x="495" y="27" fill="#86efac" fontSize="9" fontFamily="monospace">● LIVE SYNC</text>

      {/* Main Container: Table Selection & Order Modal */}
      <rect x="25" y="60" width="340" height="300" rx="8" fill="#15171e" stroke="#27272a" />
      <text x="40" y="85" fill="#e4e4e7" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Floor Plan &amp; Table Status</text>

      {/* Table Cards Grid */}
      <rect x="40" y="105" width="95" height="70" rx="6" fill="#1f222b" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="50" y="125" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Table 01</text>
      <rect x="50" y="132" width="60" height="15" rx="3" fill="#06b6d4" fillOpacity="0.2" />
      <text x="55" y="143" fill="#22d3ee" fontSize="7" fontFamily="monospace">OCCUPIED</text>
      <text x="50" y="163" fill="#a1a1aa" fontSize="8" fontFamily="monospace">4 Guests</text>

      <rect x="150" y="105" width="95" height="70" rx="6" fill="#1b1d24" stroke="#3f3f46" />
      <text x="160" y="125" fill="#d4d4d8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Table 02</text>
      <rect x="160" y="132" width="60" height="15" rx="3" fill="#22c55e" fillOpacity="0.2" />
      <text x="167" y="143" fill="#86efac" fontSize="7" fontFamily="monospace">AVAILABLE</text>
      <text x="160" y="163" fill="#71717a" fontSize="8" fontFamily="monospace">2 Guests</text>

      <rect x="260" y="105" width="90" height="70" rx="6" fill="#1b1d24" stroke="#3f3f46" />
      <text x="270" y="125" fill="#d4d4d8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Table 03</text>
      <rect x="270" y="132" width="60" height="15" rx="3" fill="#eab308" fillOpacity="0.2" />
      <text x="275" y="143" fill="#fde047" fontSize="7" fontFamily="monospace">RESERVED</text>
      <text x="270" y="163" fill="#71717a" fontSize="8" fontFamily="monospace">6 Guests</text>

      {/* Row 2 Tables */}
      <rect x="40" y="190" width="95" height="70" rx="6" fill="#1b1d24" stroke="#3f3f46" />
      <text x="50" y="210" fill="#d4d4d8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Table 04</text>
      <rect x="50" y="217" width="60" height="15" rx="3" fill="#22c55e" fillOpacity="0.2" />
      <text x="57" y="228" fill="#86efac" fontSize="7" fontFamily="monospace">AVAILABLE</text>

      <rect x="150" y="190" width="95" height="70" rx="6" fill="#1b1d24" stroke="#ef4444" strokeOpacity="0.4" />
      <text x="160" y="210" fill="#d4d4d8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Table 05</text>
      <rect x="160" y="217" width="60" height="15" rx="3" fill="#ef4444" fillOpacity="0.2" />
      <text x="168" y="228" fill="#fca5a5" fontSize="7" fontFamily="monospace">BILL OUT</text>

      <rect x="260" y="190" width="90" height="70" rx="6" fill="#1b1d24" stroke="#3f3f46" />
      <text x="270" y="210" fill="#d4d4d8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Table 06</text>
      <rect x="270" y="217" width="60" height="15" rx="3" fill="#06b6d4" fillOpacity="0.2" />
      <text x="275" y="228" fill="#22d3ee" fontSize="7" fontFamily="monospace">OCCUPIED</text>

      {/* Quick Status Bar */}
      <rect x="40" y="280" width="310" height="60" rx="6" fill="#191c24" stroke="#27272a" />
      <text x="55" y="305" fill="#f4f4f5" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Ready to Take an Order?</text>
      <text x="55" y="323" fill="#71717a" fontSize="8" fontFamily="sans-serif">Mark table as occupied with walk-in guests or confirm arrival</text>

      {/* Right: Active Order Ticket Panel */}
      <rect x="380" y="60" width="195" height="300" rx="8" fill="#171921" stroke="#27272a" />
      <text x="395" y="85" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Active Order #1042</text>
      <text x="395" y="100" fill="#06b6d4" fontSize="9" fontFamily="monospace">Table 01 &bull; Walk-In</text>

      <line x1="395" y1="112" x2="560" y2="112" stroke="#27272a" />

      <text x="395" y="132" fill="#d4d4d8" fontSize="9" fontFamily="sans-serif">1x Sinigang na Baboy</text>
      <text x="530" y="132" fill="#a1a1aa" fontSize="9" fontFamily="monospace">₱380</text>

      <text x="395" y="152" fill="#d4d4d8" fontSize="9" fontFamily="sans-serif">2x Garlic Rice</text>
      <text x="535" y="152" fill="#a1a1aa" fontSize="9" fontFamily="monospace">₱90</text>

      <text x="395" y="172" fill="#d4d4d8" fontSize="9" fontFamily="sans-serif">1x Crispy Pata (L)</text>
      <text x="530" y="172" fill="#a1a1aa" fontSize="9" fontFamily="monospace">₱750</text>

      <text x="395" y="192" fill="#d4d4d8" fontSize="9" fontFamily="sans-serif">4x Iced Tea Glass</text>
      <text x="530" y="192" fill="#a1a1aa" fontSize="9" fontFamily="monospace">₱200</text>

      <rect x="395" y="215" width="165" height="40" rx="4" fill="#13141a" />
      <text x="405" y="233" fill="#71717a" fontSize="8" fontFamily="monospace">Kitchen Status:</text>
      <text x="405" y="246" fill="#22c55e" fontSize="9" fontWeight="bold" fontFamily="monospace">PREPARING (12 min)</text>

      <rect x="395" y="275" width="165" height="35" rx="6" fill="#06b6d4" />
      <text x="430" y="297" fill="#09090b" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Send to Kitchen</text>

      <rect x="395" y="318" width="165" height="28" rx="6" fill="#27272a" />
      <text x="445" y="336" fill="#e4e4e7" fontSize="9" fontWeight="medium" fontFamily="sans-serif">Bill Out Table</text>
    </svg>
  );
}

interface WorkListProps {
  projects?: Project[];
  showViewAllLink?: boolean;
  sectionTitle?: string;
  sectionId?: string;
}

export default function WorkList({
  projects = HOMEPAGE_PROJECTS,
  showViewAllLink = true,
  sectionTitle = "[ SELECTED WORK ]",
  sectionId = "work",
}: WorkListProps) {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Keyboard navigation & ESC key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
        setIsZoomed(false);
      }
      if (!activeModalProject) return;

      const hasScreenshots = activeModalProject.screenshots && activeModalProject.screenshots.length > 1;

      if (e.key === "ArrowRight") {
        if (hasScreenshots) {
          setActiveScreenshotIdx((prev) => (prev + 1) % activeModalProject.screenshots!.length);
        } else {
          const currentIndex = projects.findIndex((p) => p.id === activeModalProject.id);
          const nextIndex = (currentIndex + 1) % projects.length;
          setActiveModalProject(projects[nextIndex]);
          setActiveScreenshotIdx(0);
        }
      } else if (e.key === "ArrowLeft") {
        if (hasScreenshots) {
          setActiveScreenshotIdx((prev) => (prev - 1 + activeModalProject.screenshots!.length) % activeModalProject.screenshots!.length);
        } else {
          const currentIndex = projects.findIndex((p) => p.id === activeModalProject.id);
          const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
          setActiveModalProject(projects[prevIndex]);
          setActiveScreenshotIdx(0);
        }
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject, projects]);

  const openProjectModal = (project: Project, screenshotIdx = 0) => {
    setActiveModalProject(project);
    setActiveScreenshotIdx(screenshotIdx);
    setIsZoomed(false);
  };

  return (
    <section id={sectionId} className="py-24 max-w-5xl mx-auto px-6 sm:px-8">
      <div className="flex items-center justify-between mb-10">
        <p className="font-mono text-[13px] tracking-widest text-muted uppercase">
          {sectionTitle}
        </p>
        <span className="font-mono text-xs text-zinc-500 hidden sm:inline-block">
          Click screenshot to expand view
        </span>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {projects.map((project) => {
          const isInProgress = project.status?.toLowerCase().includes("in progress");
          const screenCount = project.screenshots?.length || 1;

          return (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="group relative scroll-mt-24 sm:scroll-mt-32 rounded-2xl bg-surface/75 border border-border-line p-6 sm:p-8 transition-all duration-300 hover:border-accent/45 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-accent/15 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Info & Interactive Triggers */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    {/* ID, Type & Status Tag */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-accent font-bold px-2 py-0.5 rounded bg-accent/10 border border-accent/30">
                        {project.id}
                      </span>
                      <span className="font-mono text-xs text-muted uppercase font-medium">
                        {project.type}
                      </span>

                      {project.status && (
                        <span
                          className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-0.5 rounded-full border transition-colors select-none font-medium ${
                            isInProgress
                              ? "text-amber-700 bg-amber-100 border-amber-300 dark:text-amber-300 dark:bg-amber-950/50 dark:border-amber-500/40"
                              : "text-cyan-800 bg-cyan-100 border-cyan-300 dark:text-accent dark:bg-accent/10 dark:border-accent/30"
                          }`}
                        >
                          {isInProgress && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
                          )}
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl sm:text-3xl text-zinc-100 font-medium group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs sm:text-[13px] text-zinc-400 font-normal">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-[14px] text-muted leading-relaxed">
                      {project.blurb}
                    </p>

                    {project.role && (
                      <p className="text-[13px] text-zinc-300 leading-relaxed pt-1">
                        <strong className="text-zinc-100 font-semibold">My role:</strong>{" "}
                        {project.role}
                      </p>
                    )}
                  </div>

                  {/* Stack Chips & Action Buttons */}
                  <div className="space-y-4 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] text-zinc-300 bg-ink/70 border border-border-line px-2.5 py-0.5 rounded hover:border-accent/40 hover:text-accent transition-colors cursor-default select-none shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interactive CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {showViewAllLink ? (
                        <Link
                          href={`/works#project-${project.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-zinc-950 hover:bg-accent-hover font-mono text-xs font-bold transition-all shadow-md shadow-accent/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer"
                        >
                          <span>Explore Project</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openProjectModal(project, 0)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-zinc-950 hover:bg-accent-hover font-mono text-xs font-bold transition-all shadow-md shadow-accent/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer"
                        >
                          <span>Inspect Gallery</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      )}

                      {project.external && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface border border-border-line hover:border-accent/40 text-zinc-300 hover:text-accent font-mono text-xs font-medium transition-all hover:bg-surface/90 cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <span className="text-accent">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Clean Frameless Interactive Preview */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => openProjectModal(project, 0)}
                    className="group/frame relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border-line bg-surface/90 shadow-xl transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-[1.015] cursor-pointer flex items-center justify-center"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openProjectModal(project, 0);
                      }
                    }}
                    aria-label={`Open interactive preview for ${project.name}`}
                  >
                    {/* Embedded Real Image or Clean Vector Mockup */}
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <Image
                        src={project.screenshots[0].src}
                        alt={project.name}
                        width={600}
                        height={375}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/frame:scale-105"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full transition-transform duration-500 group-hover/frame:scale-105">
                        <ProjectMockupGraphic id={project.id} />
                      </div>
                    )}

                    {/* Minimal Multi-Screen Count Badge */}
                    {screenCount > 1 && (
                      <div className="screen-badge absolute top-3 right-3 bg-zinc-950/90 backdrop-blur-sm border border-zinc-700/80 px-2.5 py-0.5 rounded-md text-[10px] font-mono text-zinc-100 shadow-lg">
                        {screenCount} Screens
                      </div>
                    )}

                    {/* Hover Overlay with Glow Badge */}
                    <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] opacity-0 group-hover/frame:opacity-100 transition-all duration-200 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-accent text-zinc-950 px-4 py-2 font-mono text-xs font-bold shadow-2xl shadow-accent/50 transform translate-y-2 group-hover/frame:translate-y-0 transition-transform duration-200">
                        <span>Click to Inspect Gallery</span>
                        <span>🔍</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Projects CTA Link */}
      {showViewAllLink && (
        <div className="pt-12 flex justify-center">
          <Link
            href="/works"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface/80 hover:bg-surface border border-border-line hover:border-accent/50 font-mono text-xs text-zinc-300 hover:text-accent transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] cursor-pointer"
          >
            <span>View All Projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold text-accent">→</span>
          </Link>
        </div>
      )}

      {/* Interactive Full-Screen Lightbox Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="cinematic-modal relative w-full max-w-6xl max-h-[94vh] flex flex-col rounded-2xl border border-zinc-800 bg-[#131316] shadow-2xl overflow-hidden text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="modal-header flex items-center justify-between border-b border-zinc-800 px-5 py-3.5 bg-[#09090b]">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-zinc-200 font-semibold">
                  {activeModalProject.id} &mdash; {activeModalProject.name}
                </span>
                {activeModalProject.screenshots && (
                  <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/40 font-medium">
                    {activeScreenshotIdx + 1} / {activeModalProject.screenshots.length}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-zinc-400 hidden sm:inline-block">
                  ESC to close · Arrows to navigate
                </span>

                {activeModalProject.screenshots && (
                  <button
                    type="button"
                    onClick={() => setIsZoomed((prev) => !prev)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                      isZoomed
                        ? "border-cyan-400 bg-cyan-400 text-zinc-950 font-medium shadow-sm shadow-cyan-400/30"
                        : "border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:text-cyan-400 hover:border-cyan-500/50"
                    }`}
                    aria-label="Toggle zoom"
                  >
                    <span>{isZoomed ? "Zoom: 100%" : "Zoom: Fit"}</span>
                    <span>{isZoomed ? "🔍−" : "🔍+"}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-lg border border-zinc-700 bg-zinc-900/80 p-1.5 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Image Display Stage (Tightly Hugged & Expanded Full-Bleed) */}
            <div
              className={`modal-stage relative w-full aspect-[16/9] sm:aspect-[1.95/1] max-h-[78vh] bg-[#09090b] flex items-center justify-center overflow-hidden border-b border-zinc-800 ${
                isZoomed ? "cursor-zoom-out overflow-auto" : "cursor-zoom-in"
              }`}
              onClick={() => {
                if (activeModalProject.screenshots) setIsZoomed((prev) => !prev);
              }}
            >
              {activeModalProject.screenshots && activeModalProject.screenshots.length > 0 ? (
                <div
                  className={`w-full h-full flex items-center justify-center transition-transform duration-200 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                >
                  <Image
                    src={activeModalProject.screenshots[activeScreenshotIdx].src}
                    alt={activeModalProject.screenshots[activeScreenshotIdx].title}
                    width={1920}
                    height={960}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                    unoptimized
                  />
                </div>
              ) : (
                <ProjectMockupGraphic id={activeModalProject.id} />
              )}

              {/* Prev / Next Controls with Cyan Hover Glow */}
              {activeModalProject.screenshots && activeModalProject.screenshots.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveScreenshotIdx(
                        (prev) => (prev - 1 + activeModalProject.screenshots!.length) % activeModalProject.screenshots!.length
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-zinc-950/85 backdrop-blur-sm p-3 text-zinc-100 hover:text-cyan-400 hover:border-cyan-400 hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Previous screenshot"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveScreenshotIdx(
                        (prev) => (prev + 1) % activeModalProject.screenshots!.length
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-zinc-950/85 backdrop-blur-sm p-3 text-zinc-100 hover:text-cyan-400 hover:border-cyan-400 hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Next screenshot"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = projects.findIndex((p: Project) => p.id === activeModalProject.id);
                      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
                      openProjectModal(projects[prevIndex], 0);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-zinc-950/85 backdrop-blur-sm p-3 text-zinc-100 hover:text-cyan-400 hover:border-cyan-400 hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Previous project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = projects.findIndex((p: Project) => p.id === activeModalProject.id);
                      const nextIndex = (currentIndex + 1) % projects.length;
                      openProjectModal(projects[nextIndex], 0);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-zinc-950/85 backdrop-blur-sm p-3 text-zinc-100 hover:text-cyan-400 hover:border-cyan-400 hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Next project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Bottom Caption Pill inside stage */}
              {activeModalProject.screenshots && (
                <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                  <div className="screen-badge bg-zinc-950/90 backdrop-blur-sm border border-zinc-700/80 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-100 shadow-xl">
                    {activeModalProject.screenshots[activeScreenshotIdx].title}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Thumbnail Selector Strip */}
            {activeModalProject.screenshots && activeModalProject.screenshots.length > 1 && (
              <div className="modal-footer px-5 py-3 bg-[#09090b] flex items-center justify-center gap-2.5 overflow-x-auto">
                {activeModalProject.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveScreenshotIdx(idx)}
                    className={`h-12 w-20 rounded-md overflow-hidden border transition-all cursor-pointer shrink-0 ${
                      activeScreenshotIdx === idx
                        ? "border-cyan-400 ring-2 ring-cyan-400/40 opacity-100 scale-105"
                        : "border-zinc-700 opacity-50 hover:opacity-80 hover:border-zinc-500"
                    }`}
                  >
                    <Image
                      src={s.src}
                      alt={s.title}
                      width={80}
                      height={48}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
