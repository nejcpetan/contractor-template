import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Paintbrush2,
  Grid2X2,
  Hammer,
  Wrench,
  Building2,
  Lightbulb,
} from "lucide-react";

export function FinishingWorks() {
  const works = [
    {
      icon: <Paintbrush2 className="w-6 h-6 text-orange-500" />,
      title: "Slikopleskarska Dela",
      description:
        "Profesionalno barvanje in dekorativne tehnike za vsak prostor.",
      image: "/finishing/painting.jpg",
    },
    {
      icon: <Grid2X2 className="w-6 h-6 text-orange-500" />,
      title: "Keramičarska Dela",
      description: "Polaganje ploščic in mozaikov z največjo natančnostjo.",
      image: "/finishing/tiles.jpg",
    },
    {
      icon: <Hammer className="w-6 h-6 text-orange-500" />,
      title: "Parketarska Dela",
      description: "Vrhunska montaža in obnova vseh vrst talnih oblog.",
      image: "/finishing/flooring.jpg",
    },
    {
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      title: "Mizarska Dela",
      description: "Izdelava in montaža vrat, oken in pohištva po meri.",
      image: "/finishing/carpentry.jpg",
    },
    {
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      title: "Fasaderska Dela",
      description: "Energetsko učinkovite fasade in dekorativni ometi.",
      image: "/finishing/facade.jpg",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
      title: "Elektroinštalacije",
      description: "Sodobne električne instalacije in pametne rešitve.",
      image: "/finishing/electrical.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Zaključna Gradbena Dela</h2>
          <p className="text-gray-600">
            Naša ekipa izkušenih mojstrov zagotavlja vrhunsko kakovost izvedbe
            vseh zaključnih del v gradbeništvu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    {work.icon}
                    <h3 className="text-xl font-semibold">{work.title}</h3>
                  </div>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
