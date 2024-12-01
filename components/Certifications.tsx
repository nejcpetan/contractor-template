"use client";

import { Card } from "./ui/card";
import { Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Certifikati in Zagotovila</h2>
          <p className="text-gray-600">
            Naše delo temelji na najvišjih standardih kakovosti in varnosti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center space-y-4">
              <Shield className="w-12 h-12 text-orange-500 mx-auto" />
              <h3 className="text-xl font-semibold">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Certificiran sistem vodenja kakovosti
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 text-center space-y-4">
              <Award className="w-12 h-12 text-orange-500 mx-auto" />
              <h3 className="text-xl font-semibold">Gradbeni Certifikat A+</h3>
              <p className="text-gray-600">Najvišja ocena kakovosti gradnje</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-orange-500 mx-auto" />
              <h3 className="text-xl font-semibold">10-letna Garancija</h3>
              <p className="text-gray-600">
                Garancija na vse izvedene storitve
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
