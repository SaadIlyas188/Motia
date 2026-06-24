import Link from 'next/link';

const footerLinks = [
  { href: '/photoshoot', label: 'Photoshoot' },
  { href: '/thesis', label: 'Thesis' },
  { href: '/about', label: 'About' },
];

export function Footer() {
  return (
    <footer className="bg-motia-dark text-motia-cream pb-20 lg:pb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8">
          <Link
            href="/"
            className="font-display italic text-[20px] md:text-[22px] text-motia-cream leading-none"
          >
            motia
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.08em] text-motia-muted hover:text-motia-cream transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-motia-muted/20 mb-5 md:mb-6" />

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
          <p className="font-body text-[11px] md:text-[12px] text-motia-muted">
            &copy; {new Date().getFullYear()} Shiza Khan. All rights reserved.
          </p>
          <p className="font-display italic text-[13px] md:text-[14px] text-motia-muted">
            A study of memory, fragrance, and inherited femininity.
          </p>
        </div>
      </div>
    </footer>
  );
}
