"use client";

import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { FinishingWorks } from "@/components/FinishingWorks";
import { Certifications } from "@/components/Certifications";
import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-navbar overflow-x-hidden">
      <Hero />
      <Services />
      <Stats />
      <Process />
      <FinishingWorks />
      <Certifications />
      <About />
      <CallToAction />
      <Contact />
    </main>
  );
}
