import React from "react";

import { HeroParallax } from "@/components/ui/hero-paralax";

export function ProjectsSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Order",
    link: "https://github.com/rolderisa/Order.git",
    thumbnail: "/projects/project3.png",
  },
  {
    title: "Travel App",
    link: "https://github.com/rolderisa/Travel-App.git",
    thumbnail: "/projects/travel.png",
  },
  {
    title: "Fashion Store",
    link: "https://github.com/rolderisa/Fashion_Store.git",
    thumbnail: "/projects/fashion.png",
  },

  {
    title: "Google Clone",
    link: "",
    thumbnail: "/projects/google-clone.png",
  },
  {
    title: "Portfolio V1",
    link:" irisa-bz79r0eal-irisas-projects-175f74bb.vercel.app",
    thumbnail: "/projects/v1.png",
  },
  {
    title: "Dresscode",
    link: "",
    thumbnail: "/projects/dresscode.png",
  },

  {
    title: "Portfolio V2",
    link: " https://github.com/rolderisa/PortfolioV2.git",
    thumbnail: "/projects/portfoliov2.png",
  },
  {
    title: "Health care App",
    link: "https://github.com/rolderisa/HealthCare.git",
    thumbnail: "/projects/health.png",
  },
  {
    title: "Artemis",
    link: "",
    thumbnail: "/projects/artemis.png",
  },
];
