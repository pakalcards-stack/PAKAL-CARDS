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
    <section id="faq" className="faqSection" aria-labelledby="faq-title">
      <div className="faqIntro"><span className="faqEyebrow">פותחים את המפה</span><h2 id="faq-title">שאלות ותשובות</h2><p>כל מה שכדאי לדעת לפני שיוצאים לדרך עם פק״ל</p></div>
      <div className="faqList">
        {[
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
        ].map((item,index)=><details className="faqItem" key={item.q}><summary><span className="faqNumber">{String(index+1).padStart(2,'0')}</span><span className="faqQuestion">{item.q}</span><span className="faqToggle" aria-hidden="true">+</span></summary><div className="faqAnswer"><p>{item.a}</p>{index===9&&<a href="/rules" className="faqRulesLink">לכל חוקי המשחק ←</a>}</div></details>)}
      </div>
      <div className="faqBottom">לא מצאתם תשובה? <a href="#contact">דברו איתנו ←</a></div>
    </section>
    <section id="contact" className="placeholder"><h2>צור קשר</h2></section>
    <section id="purchase" className="placeholder"><h2>רכישה</h2><p>אפשרויות הרכישה יחוברו בהמשך.</p></section>
  </main>;
}
