"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Contact } from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="pt-navbar">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <Image
          src="/contact-hero.jpg"
          alt="Kontakt"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Kontaktirajte Nas</h1>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.0887321946567!2d14.505543776271642!3d46.056945071123445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d64c86e815d%3A0x25b7cb3a4b91f8f1!2sLjubljana%2C%20Slovenia!5e0!3m2!1sen!2s!4v1709667144317!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </main>
  );
}
