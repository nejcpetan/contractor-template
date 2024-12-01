"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Novogradnje",
      description:
        "Gradnja stanovanjskih in poslovnih objektov po najvišjih standardih.",
      image: "/services/new-construction.jpg",
    },
    {
      title: "Prenove",
      description: "Celostne prenove stanovanj, hiš in poslovnih prostorov.",
      image: "/services/renovation.jpg",
    },
    {
      title: "Zaključna Dela",
      description: "Vrhunska izvedba vseh vrst zaključnih gradbenih del.",
      image: "/services/finishing.jpg",
    },
    {
      title: "Adaptacije",
      description: "Prilagajanje prostorov novim potrebam in standardom.",
      image: "/services/adaptation.jpg",
    },
  ];

  return (
    <main className="pt-navbar">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <Image
          src="/services-hero.jpg"
          alt="Storitve"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Naše Storitve</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <Button
                      variant="link"
                      className="p-0 text-orange-500 gap-2"
                    >
                      Več informacij
                      <ArrowRight className="w-4 h-4" />
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
