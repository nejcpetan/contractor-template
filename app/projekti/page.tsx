"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Luksuzna Vila Mediteran",
      category: "Novogradnja",
      description:
        "Moderna vila s poudarkom na trajnostni gradnji in energetski učinkovitosti.",
      image: "/luxury-villa.png",
      year: "2023",
    },
    {
      title: "Poslovni Center Aurora",
      category: "Poslovna Gradnja",
      description:
        "Sodoben poslovni objekt z naprednimi tehnološkimi rešitvami.",
      image: "/business-complex.png",
      year: "2023",
    },
    {
      title: "Prenova Mestne Hiše",
      category: "Prenova",
      description: "Celostna prenova zgodovinskega objekta v mestnem središču.",
      image: "/townhouse-remodel.png",
      year: "2022",
    },
    {
      title: "Stanovanjski Kompleks Zeleni Gaj",
      category: "Večstanovanjski Objekt",
      description: "Sodobna stanovanjska soseska z veliko zelenimi površinami.",
      image: "/living-complex.png",
      year: "2022",
    },
  ];

  return (
    <main className="pt-navbar">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <Image
          src="/project-hero1.png"
          alt="Projekti"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Naši Projekti</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-72">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <span className="text-sm text-orange-500">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                    <Button variant="outline" className="w-full">
                      Več o projektu
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
