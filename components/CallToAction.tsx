"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/cta-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl font-bold text-white">
            Uresničite Vaše Gradbene Sanje
          </h2>
          <p className="text-lg text-gray-200">
            Stopite v stik z nami in skupaj bomo našli najboljšo rešitev za vaš
            projekt. Prvi posvet je brezplačen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="w-full sm:w-auto">
                Brezplačna Ponudba
              </Button>
            </Link>
            <Link href="/projekti">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-black hover:text-white border-white hover:bg-white/10"
              >
                Oglejte Si Naše Projekte
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
