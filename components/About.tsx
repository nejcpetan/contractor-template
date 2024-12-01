import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">
              Tradicija Gradnje od Leta 1998
            </h2>
            <p className="text-muted-foreground">
              GradMajster je vodilno slovensko gradbeno podjetje z več kot
              25-letnimi izkušnjami. Specializirani smo za vse vrste gradbenih
              del, od manjših prenov do zahtevnih novogradenj.
            </p>
            <Button className="gap-2">
              Spoznajte nas
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 relative h-[400px]">
            <Image
              src="/house1.png"
              alt="Gradbeni projekt"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
