'use client';
import Image from 'next/image';
import {Menu,Map,BookOpen,ShoppingBag,Users,Info,HelpCircle,Mail} from 'lucide-react';
const links=[['#game','על המשחק',Info],['#how','איך משחקים?',BookOpen],['#trails','מסלולים',Map],['#faq','שאלות ותשובות',HelpCircle],['#contact','צור קשר',Mail]] as const;
export default function Header(){return <header className="siteHeader"><a href="#top" className="headerLogo"><Image src="/assets/logo-main.png" alt="פקל נהנים בכל דרך" fill sizes="150px"/></a><nav>{links.map(([href,t,Icon])=><a key={href} href={href}><Icon size={16}/>{t}</a>)}</nav><div className="headerCtas"><a href="#individual" className="smallBtn solo"><ShoppingBag size={16}/>יחידים</a><a href="#groups" className="smallBtn team"><Users size={16}/>קבוצות</a></div><button className="menu" aria-label="פתיחת תפריט"><Menu/></button></header>}
