import Image from 'next/image';

const nav=[
 ['על המשחק','about','about'],['איך משחקים?','how','how'],['מסלולים','trails','trails'],
 ['שאלות ותשובות','faq','faq'],['צור קשר','contact','contact'],['עגלת קניות','buy','cart']
];
const resources=[
 {src:'/assets/morale.png',label:'מורל'},
 {src:'/assets/time.png',label:'זמן'},
 {src:'/assets/food.png',label:'אוכל'},
 {src:'/assets/water.png',label:'מים'}
];
const characters=[
 {src:'/assets/characters-hammock.webp',title:'מסע של הפתעות',text:'כל קלף פותח דרך חדשה ליהנות ביחד.'},
 {src:'/assets/characters-map.webp',title:'בוחרים את הדרך',text:'מתכננים, משחקים ויוצאים להרפתקה.'},
 {src:'/assets/characters-camp.webp',title:'חוויות בשטח',text:'רגעים משותפים סביב הדרך והמשחק.'}
];
export default function Home(){return <main>
 <section className="hero" aria-label="פק״ל נהנים בכל דרך">
  <Image src="/assets/hero.webp" alt="פק״ל - מפת אוצר, קלפי משאבים ונופי ישראל" fill priority sizes="100vw" quality={82}/>
  <nav aria-label="ניווט ראשי">{nav.map(([label,id,c])=><a key={id} className={`hit nav-${c}`} href={`#${id}`} aria-label={label}/>)}</nav>
  <a className="hit buy-group" href="#buy" aria-label="רכישה קבוצתית"/><a className="hit buy-single" href="#buy" aria-label="רכישה ליחידים"/>
  <a className="hit box-buy" href="#buy" aria-label="רוצים פק״ל?"/><a className="hit box-how" href="#how" aria-label="איך משחקים?"/><a className="hit box-trails" href="#trails" aria-label="מסלולים"/>
  <div className="realResources" aria-label="משאבי המשחק המקוריים">{resources.map(r=><article key={r.label}><Image src={r.src} alt={r.label} width={150} height={150}/><strong>{r.label}</strong></article>)}</div>
 </section>
 <section id="trails" className="paperSection trailsSection">
  <div className="titleLine"><i/><h2>מסלולים מובילים</h2><i/></div>
  <Image className="cloverDecor" src="/assets/decor-clover.png" alt="" width={120} height={120}/>
  <div className="trailGrid">
   <article className="trailCard"><div className="photo"><Image src="/assets/trail-emek.webp" alt="נוף ירוק ופורח בעמק המעיינות" fill sizes="(max-width:700px) 86vw, 42vw"/></div><h3>עמק המעיינות</h3><p>שבילים ירוקים, פריחה ונופי העמק</p></article>
   <article className="trailCard featureCharacter"><div className="photo"><Image src="/assets/character-trail.webp" alt="דמות משחק במסלול טבע" fill sizes="(max-width:700px) 86vw, 42vw"/></div><h3>שביל ההרפתקה</h3><p>צעדים, משימות והפתעות בדרך</p></article>
  </div>
 </section>
 <section id="about" className="charactersSection">
  <div className="titleLine light"><i/><h2>הדמויות של פק״ל</h2><i/></div><p className="lead">ההרפתקה מקבלת חיים עם הדמויות שמלוות את המשחק.</p>
  <div className="characterGrid">{characters.map(x=><article key={x.src}><div className="portrait"><Image src={x.src} alt={x.title} fill sizes="(max-width:700px) 86vw, 30vw"/></div><div><h3>{x.title}</h3><p>{x.text}</p></div></article>)}</div>
 </section>
 <section id="how" className="paperSection info"><h2>איך משחקים?</h2><p>אזור זה יחובר בהמשך להוראות המשחק המקוריות.</p></section>
 <section id="faq" className="paperSection info"><h2>שאלות ותשובות</h2><p>כאן יתווסף התוכן המקורי של האתר.</p></section>
 <section id="contact" className="darkSection info"><h2>צור קשר</h2><p>פרטי הקשר הקיימים יחוברו כאן.</p></section>
 <section id="buy" className="darkSection info"><h2>רכישת פק״ל</h2><p>כפתורי הרכישה יחוברו לקישורי ה-Checkout הפעילים.</p></section>
 </main>}
