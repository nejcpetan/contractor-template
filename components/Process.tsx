"use client"; // Add this since we're using framer-motion

import { Card } from "./ui/card";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Začetno Posvetovanje",
      description:
        "Natančna analiza vaših potreb in želja za optimalno načrtovanje projekta.",
    },
    {
      number: "02",
      title: "Načrtovanje",
      description:
        "Detajlna priprava načrtov in časovnice z upoštevanjem vseh specifik projekta.",
    },
    {
      number: "03",
      title: "Izvedba",
      description:
        "Strokovna izvedba del s strani usposobljenih strokovnjakov.",
    },
    {
      number: "04",
      title: "Predaja",
      description: "Natančen pregled opravljenih del in predaja projekta.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Naš Delovni Proces</h2>
          <p className="text-gray-600">
            Sledimo preverjenemu procesu, ki zagotavlja vrhunske rezultate in
            zadovoljstvo naših strank.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 relative group hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <span className="text-5xl font-bold text-orange-500/20">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
