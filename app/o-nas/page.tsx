"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Users, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-navbar">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <Image
          src="/about-hero.png"
          alt="O nas"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            O Podjetju GradMajster
          </h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Tradicija in Inovativnost</h2>
              <p className="text-gray-600">
                GradMajster je vodilno slovensko gradbeno podjetje z več kot
                25-letnimi izkušnjami. Naša zgodba se je začela leta 1998 z
                vizijo ustvarjanja kakovostnih gradbenih rešitev za
                najzahtevnejše stranke.
              </p>
              <p className="text-gray-600">
                Danes smo prepoznavni po naši zavezanosti h kakovosti,
                inovativnem pristopu in strokovnosti našega tima. Vsak projekt
                je za nas priložnost, da dokažemo našo odličnost in presežemo
                pričakovanja naših strank.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="/about-company.png"
                alt="Naše podjetje"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Naše Vrednote
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <Shield className="w-12 h-12 text-orange-500 mx-auto" />
              <h3 className="text-xl font-semibold">Kakovost</h3>
              <p className="text-gray-600">
                Najvišji standardi kakovosti pri vseh naših storitvah.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-4"
            >
              <Users className="w-12 h-12 text-orange-500 mx-auto" />
              <h3 className="text-xl font-semibold">Zaupanje</h3>
              <p className="text-gray-600">
                Gradimo dolgotrajne odnose s strankami in partnerji.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <Trophy className="w-12 h-12 text-orange-500 mx-auto" />
              <h3 className="text-xl font-semibold">Inovativnost</h3>
              <p className="text-gray-600">
                Uporabljamo najnovejše tehnologije in pristope.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
