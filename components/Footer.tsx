
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Codex", href: "/Codex" },
  { title: "ProBattle", href: "/ProBattle" },
  { title: "Forms", href: "/Forms" },
];

const contacts = [
  {
    name: "Zainab",
    role: "CEO",
    email: "z.ansari.29091@khi.iba.edu.pk"
  },
  {
    name: "Abdullah",
    role: "COO",
    email: "Abdullah.Tariq.29123@khi.iba.edu.pk"
  },
  {
    name: "Bisma",
    role: "CFO",
    email: "b.kasbati.28671@khi.iba.edu.pk"
  }
];

const socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/share/16zYAU4tV3/", label: "Facebook" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/iba-computer-science-society/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/css.iba", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="font-text w-full bg-gradient-to-b from-[#110119] to-black">
      <div className="max-w-6xl md:mx-auto px-4 py-16 flex flex-col md:flex-row items-start md:items-stretch justify-between ml-3 gap-8 md:gap-20">

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-start">
            <h3 className="font-heading text-2xl mb-2 colour-accent">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link key={link.title} href={link.href} className="colour-text hover:colour-primary transition-colors text-[14px] text-base">
                  {link.title}
                </Link>
              ))}
            </div>
        </div>

        {/* Contact Us */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-2xl mb-2 colour-accent">Contact Us</h3>
          <div className="flex flex-col gap-2 w-full">
            {contacts.map(({ name, role, email }) => (
              <span
                key={email}
                className="colour-text text-base text-[14px] flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2 w-full"
              >
                <span>{name}, {role},</span>
                <Link
                  href={`mailto:${email}`}
                  className="text-sm colour-secondary text-[14px] hover:underline hover:text-pink-500 transition-colors md:ml-2"
                >
                  {email}
                </Link>
              </span>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-2xl mb-4 colour-accent">Socials</h3>
          <div className="flex flex-row gap-6 mb-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group text-[14px]">
                <Icon size={28} className="colour-text" />
              </Link>
            ))}
          </div>
          <span className="colour-secondary text-base">IBA, Karachi</span>
        </div>

      </div>
    </footer>
  );
}
