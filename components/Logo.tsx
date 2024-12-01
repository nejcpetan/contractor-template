import { Building2 } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Building2 className="w-8 h-8 text-orange-500" />
      <span className="font-bold text-xl">GradMajster</span>
    </div>
  );
}
