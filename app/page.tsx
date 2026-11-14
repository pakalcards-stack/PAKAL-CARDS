const links = [
  { label: 'על המשחק', href: '#about', className: 'nav-about' },
  { label: 'איך משחקים?', href: '#how', className: 'nav-how' },
  { label: 'מסלולים', href: '#trails', className: 'nav-trails' },
  { label: 'שאלות ותשובות', href: '#faq', className: 'nav-faq' },
  { label: 'צור קשר', href: '#contact', className: 'nav-contact' },
  { label: 'עגלת קניות', href: '#buy', className: 'nav-cart' },
];

export default function Home() {
  return (
    <main className="site" aria-label="אתר פק״ל">
      <section className="desktopArtwork" aria-label="פק״ל, נהנים בכל דרך">
        <img src="/assets/pakal-reference.png" alt="עיצוב אתר פק״ל בסגנון מפת אוצר עתיקה, נופי ישראל, קלפי משאבים ומסלולים" />
        <nav aria-label="ניווט עליון">
          {links.map(link => <a key={link.className} className={`hotspot ${link.className}`} href={link.href}><span>{link.label}</span></a>)}
        </nav>
        <a className="hotspot action-groups" href="#buy"><span>רכישה קבוצתית</span></a>
        <a className="hotspot action-single" href="#buy"><span>רכישה ליחידים</span></a>
        <a className="hotspot feature-buy" href="#buy"><span>רוצים פק״ל?</span></a>
        <a className="hotspot feature-how" href="#how"><span>איך משחקים?</span></a>
        <a className="hotspot feature-trails" href="#trails"><span>מסלולים</span></a>
        <div id="about" className="anchor anchor-about" />
        <div id="how" className="anchor anchor-how" />
        <div id="trails" className="anchor anchor-trails" />
        <div id="faq" className="anchor anchor-faq" />
        <div id="contact" className="anchor anchor-contact" />
        <div id="buy" className="anchor anchor-buy" />
      </section>
      <p className="screenReaderNote">גרסת בסיס חזותית זהה להדמיה. אזורי הניווט והרכישה פעילים ומוכנים לחיבור לתוכן.</p>
    </main>
  );
}
