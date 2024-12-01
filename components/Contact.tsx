"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: "Telefon",
      details: "+386 31 123 456",
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: "Email",
      details: "info@gradmajster.si",
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Naslov",
      details: "Poslovna cona 15, Ljubljana",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Delovni Čas",
      details: "Pon - Pet: 7:00 - 17:00",
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
          <h2 className="text-4xl font-bold mb-6">Stopite v Stik z Nami</h2>
          <p className="text-gray-600">
            Zaupajte nam vaše gradbene načrte in skupaj bomo našli najboljšo
            rešitev za vas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Ime in Priimek
                    </label>
                    <Input placeholder="Vnesite vaše ime" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="vas@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefon</label>
                  <Input placeholder="Vnesite vašo telefonsko številko" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sporočilo</label>
                  <Textarea
                    placeholder="Opišite vaš projekt ali vprašanje"
                    rows={6}
                  />
                </div>
                <Button size="lg" className="w-full">
                  Pošlji Povpraševanje
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
