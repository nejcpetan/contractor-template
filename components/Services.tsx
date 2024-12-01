import { Card } from "./ui/card";
import { Construction, Palette, Home, Users } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Construction className="w-6 h-6 text-orange-500" />,
      title: "Gradbeni Management",
      description:
        "Dolgoletne izkušnje z vodenjem gradbenih projektov vseh velikosti.",
    },
    {
      icon: <Palette className="w-6 h-6 text-orange-500" />,
      title: "Zunanje Urejanje",
      description:
        "Celostno načrtovanje in izvedba zunanjih površin ter vrtov.",
    },
    {
      icon: <Home className="w-6 h-6 text-orange-500" />,
      title: "Notranje Opremljanje",
      description: "Vrhunsko oblikovanje in izvedba notranjih prostorov.",
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Projektno Svetovanje",
      description: "Strokovno svetovanje pri načrtovanju in izvedbi projektov.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left side - Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:w-2/3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="space-y-6">
                  <div className="bg-white rounded-sm w-12 h-12 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto hover:bg-transparent text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right side - Text content */}
          <div className="lg:w-1/3 space-y-6 relative pt-8">
            <div className="relative">
              <span className="text-sm uppercase tracking-wider text-gray-500">
                NAŠE STORITVE
              </span>
              <h2 className="text-4xl font-bold mt-4 leading-tight">
                Celovite rešitve za gradbeništvo, upravljanje in prenovo.
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Smo uveljavljeno gradbeno podjetje z dolgoletno tradicijo. Naše
                bogate izkušnje obsegajo vse vrste gradbenih projektov, od
                manjših prenov do zahtevnih novogradenj. Kakovost in
                zanesljivost sta naši glavni vodili.
              </p>
              <Button
                variant="link"
                className="text-orange-500 p-0 mt-6 gap-2 hover:no-underline"
              >
                VEČ INFORMACIJ
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Background shapes */}
            <div className="absolute right-0 top-0 w-full h-full -z-10 opacity-5">
              <div className="absolute right-0 top-20 w-72 h-72 border-2 border-gray-400 rounded-full" />
              <div className="absolute right-20 top-40 w-48 h-48 border-2 border-gray-400 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
