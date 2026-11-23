import Image from 'next/image';
import RoutesCarousel from '@/components/RoutesCarousel';
import SiteAuth from '@/components/SiteAuth';

const whatsapp = 'https://wa.me/972546699435';
const navHotspots = [
  { label: 'דף הבית', href: '/', cls: 'home' },
  { label: 'על המשחק', href: '#about', cls: 'about' },
  { label: 'איך משחקים?', href: '/rules', cls: 'rules' },
  { label: 'מסלולים', href: '#routes', cls: 'routesLink' },
  { label: 'שאלות ותשובות', href: '#faq', cls: 'faq' },
  { label: 'צור קשר', href: whatsapp, cls: 'contact' },
  { label: 'סל קניות', href: '#purchase', cls: 'cartLink' },
];

const questions = [
  {q:'מה זה פק״ל?',a:'פק״ל הוא משחק קלפים ישראלי שנוצר בהשראת הטיולים, המקומות והחוויות שבדרך. המשחק משלב קלפי מסלול וקלפי מטיילים, ומזמין להכיר עוד פינות בארץ.'},
  {q:'לכמה משתתפים המשחק מתאים?',a:'אפשר לשחק משני מטיילים ומעלה. המשחק מתאים לגיל 5 ומעלה.'},
  {q:'כמה קלפים יש בחפיסה?',a:'בחפיסה 109 קלפים: 80 קלפי מסלול, 28 קלפי מטיילים ופקל״ף אישי אחד שממשיך איתכם גם לטיולים.'},
  {q:'מה המטרה במשחק?',a:'לאסוף פק״ל שלם: קלף מסלול אחד מכל אחד מארבעת המשאבים, מים, אוכל, זמן ומורל. בסיום שואפים לצבור את הניקוד הגבוה ביותר.'},
  {q:'איך מתחילים לשחק?',a:'מערבבים ומחלקים 7 קלפים לכל מטייל ועוד קלף למטייל המוביל, שהוא הצעיר ביותר. את יתר הקלפים מניחים במרכז כצידנית. בכל תור לוקחים קלף ומעבירים קלף הלאה.'},
  {q:'מה עושים כשמקבלים קלף נסיך?',a:'אפשר להתמודד באמצעות קלף מסלול מהמשאב המתאים, לבטל אותו בעזרת מלכה או לשמור אותו ביד. נסיך שנשאר בסיום המשחק מפחית 3 נקודות.'},
  {q:'איך יודעים מי ניצח?',a:'אחרי שמטייל מכריז ״פק״לי!״, יתר המטיילים מקבלים תור אחרון. מחשבים את הקלף הגבוה מכל משאב, מוסיפים בונוס ממלך פק״ל אם יש, ומפחיתים 3 נקודות לכל נסיך.'},
  {q:'אפשר לשחק עם חוקים נוספים?',a:'בהחלט. אפשר לבחור מראש חוקי גיוון כמו ״טיול הפוך״, ״הכל נראה אותו דבר״ או ״המספר האישי שלי״. חשוב שכל המטיילים יסכימו עליהם לפני תחילת המשחק.'},
  {q:'מה זה פקל״ף?',a:'זה הקלף האישי שלא משתתף במשחק הרגיל. קחו אותו לטיולים, הצטלמו איתו באתרים ובמסלולים בארץ ושתפו את החוויות שלכם.'},
  {q:'איפה אפשר לקרוא את כל החוקים?',a:'בעמוד ״איך משחקים?״ באתר תמצאו את ההוראות המלאות, קלפי הפעולה ואפשרויות הגיוון.'},
];

export default function Home() {
  return <main>
    <section className="exactHero" aria-label="דף הבית של פק״ל">
      <Image src="/assets/home-hero-exact.png" alt="פק״ל, משחק הקלפים הישראלי למטיילים" fill priority sizes="100vw" />
      <nav className="heroImageNav" aria-label="ניווט ראשי מתוך עיצוב האתר">
        {navHotspots.map(item => <a key={item.cls} className={`hotspot ${item.cls}`} href={item.href} aria-label={item.label} title={item.label} {...(item.cls === 'contact' ? {target:'_blank',rel:'noopener noreferrer'} : {})}><span className="srOnly">{item.label}</span></a>)}
      </nav>
      <div className="desktopPakalNav" dir="rtl" aria-label="ניווט ראשי למחשב">
        <a href="/" className="desktopHome"><span aria-hidden="true">⌂</span> דף הבית</a>
        <a href="#about">על המשחק</a>
        <a href="/rules">איך משחקים?</a>
        <a href="#routes">מסלולים</a>
        <a href="#faq">שאלות ותשובות</a>
        <a href="https://wa.me/972546699435" target="_blank" rel="noopener noreferrer">צור קשר</a>
        <a href="#purchase" className="desktopCart" aria-label="סל קניות" title="סל קניות"><span aria-hidden="true">🛒</span></a>
      </div>
      <SiteAuth />
      <style>{`@media (min-width: 761px) {
        .exactHero .heroImageNav {display:none!important;}
        .exactHero .desktopPakalNav {
          position:absolute;top:0;left:0;right:0;z-index:6;
          height:clamp(76px,7.8vw,150px);display:flex;align-items:stretch;
          padding-left:clamp(110px,9.5vw,180px);background:#f3efe5;
          border-bottom:2px solid #d2cab8;box-shadow:0 3px 8px #0000001c;
          font-family:Arial,'Noto Sans Hebrew',sans-serif;
        }
        .exactHero .desktopPakalNav a {
          display:flex;align-items:center;justify-content:center;flex:1 1 0;
          min-width:0;padding:8px 10px;color:#263c2a;font-weight:800;
          font-size:clamp(14px,1.8vw,31px);text-align:center;
          border-left:1px solid #d1cbbf;transition:background .18s ease;
        }
        .exactHero .desktopPakalNav a:hover,.exactHero .desktopPakalNav a:focus-visible {background:#e4e5d8;outline-offset:-3px;}
        .exactHero .desktopPakalNav .desktopHome {flex:1.35;background:#e7e7d9;gap:12px;}
        .exactHero .desktopPakalNav .desktopHome span {font-size:clamp(28px,3.4vw,64px);line-height:1;}
        .exactHero .desktopPakalNav .desktopCart {flex:.65;}
        .exactHero .desktopPakalNav .desktopCart span {font-size:clamp(28px,3.2vw,60px);}
        .exactHero .siteAuth {position:absolute!important;z-index:8!important;
          top:0!important;left:0!important;width:clamp(110px,9.5vw,180px)!important;
          height:clamp(76px,7.8vw,150px)!important;min-height:0!important;
          display:flex!important;align-items:center!important;justify-content:center!important;
          padding:0!important;background:#f3efe5!important;
          border-right:1px solid #d1cbbf!important;}
        .exactHero .siteAuth button {width:100%!important;height:100%!important;
          min-height:0!important;padding:8px!important;margin:0!important;
          border:0!important;border-radius:0!important;box-shadow:none!important;
          background:transparent!important;color:#263c2a!important;
          font-size:clamp(13px,1.5vw,25px)!important;font-weight:800!important;
          display:flex!important;flex-direction:column!important;gap:4px!important;}
        .exactHero .siteAuth button:hover,.exactHero .siteAuth button:focus-visible {background:#e4e5d8!important;}
        .exactHero .siteAuth button svg {width:clamp(24px,2.7vw,48px)!important;height:clamp(24px,2.7vw,48px)!important;}
        .exactHero .siteAuth button span {display:inline!important;}
      }
      @media (max-width:760px) {.exactHero .desktopPakalNav {display:none!important;}}
      `}</style>
    </section>
    <RoutesCarousel />
    <section id="about" className="aboutSection">
      <div className="aboutParchment">
        <div className="aboutDecor aboutLeft"><Image src="/assets/about-adventure-left.jpg" alt="קלף מסלול מקורי של פק״ל" fill sizes="(max-width:760px) 100px, 170px" /></div>
        <div className="aboutDecor aboutRight"><Image src="/assets/about-adventure-right.jpg" alt="קלף נוסף מחפיסת פק״ל" fill sizes="(max-width:760px) 100px, 170px" /></div>
        <div className="aboutHeader"><Image src="/assets/logo.png" alt="פק״ל נהנים בכל דרך" width={230} height={140} className="aboutLogo" /><h2>על המשחק</h2></div>
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
    <section id="faq" className="faqSection" aria-labelledby="faq-title">
      <div className="faqIntro"><span className="faqEyebrow">פותחים את המפה</span><h2 id="faq-title">שאלות ותשובות</h2><p>כל מה שכדאי לדעת לפני שיוצאים לדרך עם פק״ל</p></div>
      <div className="faqList">
        {questions.map((item,index)=><details className="faqItem" key={item.q}><summary><span className="faqNumber">{String(index+1).padStart(2,'0')}</span><span className="faqQuestion">{item.q}</span><span className="faqToggle" aria-hidden="true">+</span></summary><div className="faqAnswer"><p>{item.a}</p>{index===9&&<a href="/rules" className="faqRulesLink">לכל חוקי המשחק ←</a>}</div></details>)}
      </div>
      <div className="faqBottom">לא מצאתם תשובה? <a href={whatsapp} target="_blank" rel="noopener noreferrer">דברו איתנו ←</a></div>
    </section>
    <section id="contact" className="placeholder"><h2>צור קשר</h2><p><a href={whatsapp} target="_blank" rel="noopener noreferrer">שלחו לנו הודעה בוואטסאפ</a></p></section>
    <section id="purchase" className="placeholder"><h2>רכישה</h2><p>אפשרויות הרכישה יחוברו בהמשך.</p></section>
  </main>;
}
