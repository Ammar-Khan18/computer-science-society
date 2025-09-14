
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
  { icon: FaFacebook, href: "https://www.facebook.com/share/16zYAU4tV3/", label: "Facebook", css: "hover:text-blue-500" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/iba-computer-science-society/", label: "LinkedIn", css: "hover:text-blue-600" },
  { icon: FaInstagram, href: "https://www.instagram.com/css.iba", label: "Instagram", css: "hover:text-pink-600" },
];

export default function Footer() {
  return (
    <footer className="font-text w-full border-t border-[#110119] bg-black">
      <div className="max-w-6xl md:mx-auto px-4 py-16 flex flex-col md:flex-row items-start md:items-stretch justify-between ml-3 gap-8 md:gap-20">

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-2xl mb-6 colour-accent relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-16">Quick Links</h3>
          <div className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Link key={link.title} href={link.href} className="colour-text hover:colour-primary transition-colors text-[17px] text-base">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-2xl mb-6 colour-accent relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-16">Contact Us</h3>
          <div className="flex flex-col gap-2 w-full">
            {contacts.map(({ name, role, email }) => (
              <span
                key={email}
                className="colour-text text-base text-[17px] flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2 w-full"
              >
                <span>{name}, {role},</span>
                <Link
                  href={`mailto:${email}`}
                  className="text-sm colour-secondary text-[17px] hover:underline hover:text-pink-500 transition-colors md:ml-2"
                >
                  {email}
                </Link>
              </span>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-2xl mb-6 colour-accent relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-16">Socials</h3>
          <div className="flex flex-row gap-6 mb-4">
            {socials.map(({ icon: Icon, href, label, css }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group text-[17px]">
                <Icon size={28} className={`colour-text ${css}`} />
              </Link>
            ))}
          </div>
          <span className="colour-secondary text-[17px]">IBA, Karachi</span>
        </div>

      </div>
    </footer>
  );
}
