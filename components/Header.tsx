'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BookOpen, HelpCircle, Info, Mail, Map, Menu, ShoppingBag, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'על המשחק', Icon: Info },
  { href: '#how-to-play', label: 'איך משחקים?', Icon: BookOpen },
  { href: '#trails', label: 'מסלולים', Icon: Map },
  { href: '#faq', label: 'שאלות ותשובות', Icon: HelpCircle },
  { href: '#contact', label: 'צור קשר', Icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <a className="brand" href="#top" aria-label="פק״ל, חזרה לראש העמוד" onClick={() => setOpen(false)}>
          <Image src="/assets/logo.png" alt="פק״ל, נהנים בכל דרך" width={180} height={72} priority />
        </a>
        <nav className="desktopNav" aria-label="ניווט ראשי">
          {links.map(({ href, label, Icon }) => (
            <a key={href} href={href}><Icon aria-hidden="true" />{label}</a>
          ))}
        </nav>
        <a className="headerBuy" href="#purchase"><ShoppingBag aria-hidden="true" />לרכישה</a>
        <button className="menuButton" type="button" aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobileNav ${open ? 'isOpen' : ''}`} aria-label="ניווט במובייל" hidden={!open}>
        {links.map(({ href, label, Icon }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}><Icon aria-hidden="true" />{label}</a>
        ))}
        <a className="mobileBuy" href="#purchase" onClick={() => setOpen(false)}><ShoppingBag aria-hidden="true" />לרכישה</a>
      </nav>
    </header>
  );
}
