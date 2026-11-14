import Image from 'next/image';
import { BookOpen, ChevronLeft, HelpCircle, Mail, Map, MapPin, ShoppingBag, Users } from 'lucide-react';
import Header from '@/components/Header';

const resources = [
  { image: 'morale.png', label: 'מורל', tone: 'morale' },
  { image: 'time.png', label: 'זמן', tone: 'time' },
  { image: 'food.png', label: 'אוכל', tone: 'food' },
  { image: 'water.png', label: 'מים', tone: 'water' },
];
const destinations = [
  { image: 'land-4.jpg', name: 'הנגב', text: 'מצוקים, קניונים ומרחבי מדבר' },
  { image: 'land-8.jpg', name: 'ירושלים והסביבה', text: 'היסטוריה, טבע ונופים עירוניים' },
  { image: 'land-12.jpg', name: 'הגליל העליון', text: 'נחלים, חורשים ותצפיות' },
  { image: 'land-16.jpg', name: 'מדבר יהודה', text: 'מצוקים, נאות מדבר ושקט' },
];
const features = [
  { href: '#trails', title: 'מסלולים', text: 'גלו מסלולים מומלצים בכל הארץ.', Icon: Map },
  { href: '#how-to-play', title: 'איך משחקים?', text: 'כל מה שצריך לדעת כדי להתחיל.', Icon: BookOpen },
  { href: '#purchase', title: 'רוצים פק״ל?', text: 'בחרו את האפשרות שמתאימה לכם.', Icon: ShoppingBag },
];

export default function Home() {
  return <>
    <Header />
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="topoLines" aria-hidden="true" />
        <div className="compassDecor" aria-hidden="true"><span>✦</span></div>
        <div className="heroContent">
          <Image className="heroLogo" src="/assets/logo.png" alt="פק״ל, נהנים בכל דרך" width={620} height={330} priority />
          <h1 id="hero-title">חפיסה אחת. הרבה דרכים ליהנות.</h1>
          <p className="heroSubtitle">משחקים בבית, יוצאים לשטח.</p>
          <div className="resourceCards" aria-label="משאבי המשחק">
            {resources.map(resource => <article className={`resourceCard ${resource.tone}`} key={resource.label}>
              <Image src={`/assets/${resource.image}`} alt={resource.label} width={92} height={92} />
              <h2>{resource.label}</h2>
            </article>)}
          </div>
          <div className="heroActions">
            <a className="actionButton actionRed" href="#purchase"><ShoppingBag aria-hidden="true" />רכישה ליחידים</a>
            <a className="actionButton actionGreen" href="#purchase"><Users aria-hidden="true" />רכישה לקבוצות</a>
          </div>
        </div>
        <div className="tornEdge" aria-hidden="true" />
      </section>

      <section className="mapPaper section" aria-label="קיצורי דרך">
        <div className="contentWidth featureGrid">
          {features.map(({ href, title, text, Icon }) => <a className="featureCard" href={href} key={title}>
            <Icon className="featureIcon" aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span><ChevronLeft aria-hidden="true" />
          </a>)}
        </div>
      </section>

      <section className="paperSection section" id="trails" aria-labelledby="trails-title">
        <div className="contentWidth">
          <div className="sectionTitle"><span /><h2 id="trails-title">מסלולים מובילים</h2><span /></div>
          <p className="sectionLead">הדרך מתחילה בבחירת הנוף הבא שלכם.</p>
          <div className="trailCards" dir="rtl">
            {destinations.map(item => <article className="trailCard" key={item.name}>
              <div className="trailImage"><Image src={`/assets/${item.image}`} alt={`נוף באזור ${item.name}`} fill sizes="(max-width:760px) 82vw, (max-width:1050px) 50vw, 25vw" /></div>
              <div className="trailCopy"><h3><MapPin aria-hidden="true" />{item.name}</h3><p>{item.text}</p></div>
            </article>)}
          </div>
          <p className="contentNotice">שמות האזורים מוצגים לפי מפרט העיצוב. לפני פרסום יש לאמת התאמה לתמונות ולנתוני המסלולים המקוריים.</p>
        </div>
      </section>

      <section className="story section" id="about">
        <div className="contentWidth storyGrid">
          <div className="productFrame"><Image src="/assets/product.jpg" alt="מוצר פק״ל" fill sizes="(max-width:760px) 92vw, 48vw" /></div>
          <div className="storyCopy"><p className="eyebrow">הסיפור של פק״ל</p><h2>משחקים בבית. יוצאים לשטח.</h2><p>פק״ל מחבר בין עולם משחקי הקלפים לבין האהבה לטבע, למסלולים ולחוויות משותפות.</p><a className="outlineButton" href="#how-to-play">גלו איך משחקים<ChevronLeft aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="paperSection section" id="how-to-play" aria-labelledby="resources-title">
        <div className="contentWidth"><div className="sectionTitle"><span /><h2 id="resources-title">מה לוקחים לדרך?</h2><span /></div><p className="sectionLead">מים, אוכל, זמן ומורל, ארבעת המשאבים של פק״ל.</p>
          <div className="resourceCards resourceCardsLarge">{resources.map(resource => <article className="resourceCard" key={resource.label}><Image src={`/assets/${resource.image}`} alt={resource.label} width={122} height={122} /><h3>{resource.label}</h3></article>)}</div>
        </div>
      </section>

      <section className="purchase section" id="purchase" aria-labelledby="purchase-title">
        <div className="contentWidth"><div className="sectionTitle light"><span /><h2 id="purchase-title">בחרו את הדרך שלכם</h2><span /></div>
          <div className="purchaseGrid">
            <article><ShoppingBag aria-hidden="true" /><h3>רכישה ליחידים</h3><p>לבית, לטיול הבא או כמתנה.</p><a className="actionButton actionRed" href="#contact">לקבלת קישור רכישה</a></article>
            <article><Users aria-hidden="true" /><h3>רכישה לקבוצות</h3><p>לארגונים, צוותים והזמנות מרוכזות.</p><a className="actionButton actionGreen" href="#contact">לקבלת הצעה לקבוצה</a></article>
          </div><p className="checkoutNote">לא הוגדרו במפרט קישורי Checkout אמיתיים. יש להחליף את הקישורים בנקודות החיבור של מערכת הרכישה הקיימת לפני פרסום.</p>
        </div>
      </section>

      <section className="paperSection section infoGridSection">
        <div className="contentWidth infoGrid">
          <article id="faq" className="paperPanel"><HelpCircle aria-hidden="true" /><h2>שאלות ותשובות</h2><details><summary>למי המשחק מתאים?</summary><p>יש להזין כאן את התשובה המקורית מהאתר הקיים.</p></details><details><summary>איך מתחילים לשחק?</summary><p>יש להזין כאן את הוראות המשחק המקוריות והמאושרות.</p></details></article>
          <article id="contact" className="paperPanel"><Mail aria-hidden="true" /><h2>צור קשר</h2><p>פרטי קשר לא נמסרו במפרט. כדי לא להמציא מידע, יש לשחזר כאן את הטופס, הדוא״ל והטלפון מהפרויקט הקיים.</p><a className="outlineButton dark" href="mailto:">פתיחת דוא״ל</a></article>
        </div>
      </section>
    </main>
    <footer className="siteFooter"><div className="contentWidth footerInner"><Image src="/assets/logo.png" alt="פק״ל" width={145} height={70} /><p>נהנים בכל דרך</p><nav aria-label="ניווט תחתון"><a href="#about">על המשחק</a><a href="#trails">מסלולים</a><a href="#contact">צור קשר</a></nav></div></footer>
  </>;
}
