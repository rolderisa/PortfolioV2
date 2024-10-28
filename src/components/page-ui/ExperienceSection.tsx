"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TracingBeam } from "@/components/ui/tracing-beams";
import { Badge } from "lucide-react";

export function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge("text-xl text-black dark:text-white")}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: "IRS Appointment System",
    description: (
      <ul className="list-disc">
        
        <li>
        Led both the frontend and backend teams in the IRSA development lifecycle.
        </li>
        <li>
        Delivered the new features bi-weekly as ordered by the Project
        lead.Ensured customer satisfaction. 
        </li>
        <li>
   The project is for all the Rwandan health centers that give treatment appointments to patients
hence saving lives and time.
          </li>
<li>
     Increased the app performance by 15%.Developed the app using great technologies such as Java (Spring
Boot) and JavaScript (Next.js).Contributed to the securing of funds for the project. 
        </li>
      </ul>
    ),
    badge:"Jan 2023 – Ongoing"
    
  },
  {
    title: "GUARD project",
    description: (
      <ul className="list-disc">
        <li>
          Actively engaged in personal development, focusing on enhancing my
          soft skills and public speaking abilities under the guidance of
          experienced mentors.
        </li>
        <li>
          Transitioned into a mentorship role, where I guided high school
          students in developing their soft skills and provided guidance in
          career planning and decision-making.
        </li>
        <li>
          Volunteered in web development team creating fls.ba info website
        </li>
      </ul>
    ),
    badge: "Nov 2022 – Ongoing",
  },
  
];
