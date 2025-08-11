"use client";

import * as React from "react";

import Link from "next/link";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerTitle } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { X, Menu} from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Codex", href: "/Codex" },
  { title: "ProBattle", href: "/ProBattle" },
  { title: "Forms", href: "/Forms" },
];




const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState<number | null>(0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMouseOver = (index: number) => setActiveLink(index);
  const handleMouseOut = () => setActiveLink(null);

  return (
    <nav className="font-text colour-bg py-4 w-full shadow-md">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-end items-center gap-6 w-full pr-10">
        {navLinks.map((link, index) => (
          <Link
            key={link.title}
            href={link.href}
            className={`text-xl font-heading font-medium px-6 py-3 rounded-lg border-animation colour-text transition-none ${activeLink !== null && activeLink !== index ? 'dim' : ''}`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            {link.title}
          </Link>
        ))}
        <Link href="/">
          <img src="/favicon.ico" alt="favicon" className="w-10 h-10 ml-4 rounded-full border-2 border-pink-300 shadow" />
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden justify-between items-center w-full px-4">
        <Link href="/">
          <img src="/favicon.ico" alt="favicon" className="w-10 h-10 rounded-full border-2 border-pink-300 shadow" />
        </Link>
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <button className="text-lg font-heading px-2 py-1 rounded-lg colour-text" aria-label="Open menu">
              <Menu />
            </button>
          </DrawerTrigger>
          <DrawerContent className="colour-bg">
            <div className="relative flex items-center px-4 pt-4 h-12">
              <DrawerTitle className="absolute left-0 right-0 mx-auto text-center font-text text-xl colour-text pointer-events-none">Menu</DrawerTitle>
              <div className="flex-1 flex justify-end">
                <DrawerClose asChild>
                  <button className="text-2xl colour-text" aria-label="Close menu">
                    <X />
                  </button>
                </DrawerClose>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0 py-8 px-4">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.title}>
                  <Link
                    href={link.href}
                    className={`w-full text-center text-lg font-heading px-6 py-3 rounded-lg border-animation colour-text transition-none ${activeLink !== null && activeLink !== index ? 'dim' : ''}`}
                    onClick={() => { setActiveLink(index); setDrawerOpen(false); }}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={handleMouseOut}
                  >
                    {link.title}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
