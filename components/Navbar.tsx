import { Button } from "./ui/button";
import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary">
            Domov
          </Link>
          <Link href="/o-nas" className="hover:text-primary">
            O nas
          </Link>
          <Link href="/storitve" className="hover:text-primary">
            Storitve
          </Link>
          <Link href="/projekti" className="hover:text-primary">
            Projekti
          </Link>
          <Link href="/reference" className="hover:text-primary">
            Reference
          </Link>
          <Link href="/kontakt">
            <Button>Kontakt</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
