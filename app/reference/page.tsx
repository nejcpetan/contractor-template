"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ReferencePage() {
  const testimonials = [
    {
      name: "Janez Novak",
      company: "Novak Nepremičnine d.o.o.",
      image: "https://i.pravatar.cc/100?img=12",
      text: "Z GradMajster ekipo smo sodelovali pri gradnji poslovnega objekta. Njihova strokovnost in natančnost sta res izjemni. Projekt je bil zaključen v roku in v skladu z dogovorjenim proračunom.",
      rating: 5,
    },
    {
      name: "Ana Kovač",
      company: "Družinska Hiša",
      image: "https://i.pravatar.cc/100?img=5",
      text: "Prenova naše hiše je bila v rokah GradMajster ekipe in rezultati so presegli vsa pričakovanja. Posebej bi pohvalila njihovo komunikacijo in prilagodljivost našim željam.",
      rating: 5,
    },
    {
      name: "Marko Horvat",
      company: "Horvat Investments",
      image: "https://i.pravatar.cc/100?img=8",
      text: "Kot investitor sem zelo zadovoljen s sodelovanjem z GradMajster. Njihove izkušnje in profesionalni pristop so ključno prispevali k uspešni realizaciji našega stanovanjskega kompleksa.",
      rating: 5,
    },
  ];

  const projects = [
    {
      image: "/references/project1.jpg",
      title: "Stanovanjski Kompleks Brdo",
      description: "120 stanovanjskih enot, Ljubljana",
      year: "2023",
    },
    {
      image: "/references/project2.jpg",
      title: "Poslovna Stavba Tech Park",
      description: "5000m² poslovnih prostorov, Maribor",
      year: "2022",
    },
    {
      image: "/references/project3.jpg",
      title: "Hotel Marina Bay",
      description: "Luksuzni hotel s 150 sobami, Portorož",
      year: "2023",
    },
  ];

  return (
    <main className="pt-navbar">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <Image
          src="/references-hero.jpg"
          alt="Reference"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Naše Reference</h1>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Izbrani Projekti
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <p className="text-orange-500 mt-2">{project.year}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mnenja Naših Strank
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
