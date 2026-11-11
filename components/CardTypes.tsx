'use client';
import { motion } from 'framer-motion';
const cards=[['💧','מים','var(--water)'],['🥘','אוכל','var(--pot)'],['⏳','זמן','var(--time)'],['☀️','מורל','var(--morale)']];
export default function CardTypes(){return <section id="game" className="section"><p className="eyebrow">כל מה שצריך לטיול</p><h2>ארבעה דברים. אינסוף דרכים לנצח.</h2><div className="card-grid">{cards.map(([icon,title,color],i)=><motion.article key={title} className="type-card" style={{'--accent':color} as React.CSSProperties} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} whileHover={{y:-8,rotate:i%2?2:-2}}><span>{icon}</span><h3>{title}</h3></motion.article>)}</div></section>}
