import { Logo } from "./Logo";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Logo />
            <p className="text-gray-400 max-w-sm">
              Več kot 25 let izkušenj v gradbeništvu. Zaupanje, kakovost in
              profesionalnost so naše glavne vrednote.
            </p>
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:text-orange-500"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:text-orange-500"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:text-orange-500"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Kontakt</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                +386 31 123 456
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                info@gradmajster.si
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                Poslovna cona 15, Ljubljana
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Storitve</h4>
            <div className="space-y-2">
              <Link
                href="/storitve/gradnja"
                className="block text-gray-400 hover:text-orange-500"
              >
                Gradnja
              </Link>
              <Link
                href="/storitve/prenova"
                className="block text-gray-400 hover:text-orange-500"
              >
                Prenova
              </Link>
              <Link
                href="/storitve/zakljucna-dela"
                className="block text-gray-400 hover:text-orange-500"
              >
                Zaključna dela
              </Link>
              <Link
                href="/storitve/svetovanje"
                className="block text-gray-400 hover:text-orange-500"
              >
                Svetovanje
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Delovni Čas</h4>
            <div className="space-y-2 text-gray-400">
              <p>Pon - Pet: 7:00 - 17:00</p>
              <p>Sob: 8:00 - 13:00</p>
              <p>Ned: Zaprto</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 GradMajster d.o.o. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
