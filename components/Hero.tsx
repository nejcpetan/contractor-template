import { Button } from "./ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-transparent z-10" />
      <div className="absolute inset-0">
        <Image
          src="/hero-img1.png"
          alt="Gradbišče"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold text-white">
            Vrhunske Gradbene Storitve za Vaš Dom
          </h1>
          <p className="text-lg text-white/90">
            Gradimo z odličnostjo, izkušnjami in predanostjo že več kot 25 let.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Brezplačna Ponudba</Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="w-4 h-4" />
              Naši Projekti
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
