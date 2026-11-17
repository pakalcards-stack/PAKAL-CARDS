import Image from 'next/image';
import RoutesCarousel from '@/components/RoutesCarousel';

const navHotspots = [
  { label: 'דף הבית', href: '/', cls: 'home' },
  { label: 'על המשחק', href: '#about', cls: 'about' },
  { label: 'איך משחקים?', href: '/rules', cls: 'rules' },
  { label: 'מסלולים', href: '#routes', cls: 'routesLink' },
  { label: 'שאלות ותשובות', href: '#faq', cls: 'faq' },
  { label: 'צור קשר', href: '#contact', cls: 'contact' },
  { label: 'סל קניות', href: '#purchase', cls: 'cartLink' },
];

export default function Home() {
  return <main>
    <section className="exactHero" aria-label="דף הבית של פק״ל">
      <Image src="/assets/home-hero-exact.png" alt="פק״ל, משחק הקלפים הישראלי למטיילים" fill priority sizes="100vw" />
      <nav className="heroImageNav" aria-label="ניווט ראשי מתוך עיצוב האתר">
        {navHotspots.map(item => <a key={item.cls} className={`hotspot ${item.cls}`} href={item.href} aria-label={item.label} title={item.label}><span className="srOnly">{item.label}</span></a>)}
      </nav>
    </section>
    <RoutesCarousel />
    <section id="about" className="aboutSection">
      <div className="aboutParchment">
        <div className="aboutDecor aboutLeft"><Image src="/assets/about-adventure-left.jpg" alt="קלף מסלול מקורי של פק״ל" fill sizes="(max-width:760px) 100px, 170px" /></div>
        <div className="aboutDecor aboutRight"><Image src="/assets/about-adventure-right.jpg" alt="קלף נוסף מחפיסת פק״ל" fill sizes="(max-width:760px) 100px, 170px" /></div>
        <div className="aboutHeader">
          <Image src="/assets/logo.png" alt="פק״ל נהנים בכל דרך" width={230} height={140} className="aboutLogo" />
          <h2>על המשחק</h2>
        </div>
        <div className="aboutCopy">
          <p>משחק קלפים ישראלי שנוצר מתוך אהבה לטיולים, למקומות ולחוויות שבדרך.</p>
          <p>המשחק מזמין אתכם לגלות, לחוות ולהכיר את הארץ. במסלולים שבחפיסה, בשביל ליד הבית או בכל מקום שהדרך תיקח אתכם.</p>
          <p>קחו <strong>פק״ל</strong> איתכם וצאו לדרך, צרו חוויות, ושתפו אותן עם אחרים.</p>
          <p className="aboutClosing">כי בסוף לא משנה לאן מטיילים, העיקר שיוצאים להכיר עוד פינה קסומה בארץ ישראל.</p>
        </div>
        <div className="aboutClover"><Image src="/assets/clover.png" alt="תלתן מתוך עולם המשחק" width={104} height={104} /></div>
        <div className="aboutSignature">נהנים בכל דרך</div>
      </div>
    </section>
    <section id="faq" className="placeholder"><h2>שאלות ותשובות</h2></section>
    <section id="contact" className="placeholder"><h2>צור קשר</h2></section>
    <section id="purchase" className="placeholder"><h2>רכישה</h2><p>אפשרויות הרכישה יחוברו בהמשך.</p></section>
  </main>;
}
