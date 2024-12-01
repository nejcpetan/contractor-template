import { Users, Building2, Trophy, Clock } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: <Building2 className="w-8 h-8 text-orange-500" />,
      number: "500+",
      label: "Zaključenih Projektov",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      number: "150+",
      label: "Zadovoljnih Strank",
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      number: "25+",
      label: "Let Izkušenj",
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      number: "98%",
      label: "Pravočasnih Dobav",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              {stat.icon}
              <h3 className="text-4xl font-bold text-gray-900">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
