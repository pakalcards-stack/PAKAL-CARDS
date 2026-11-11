'use client';
import { Menu, ShoppingBag } from 'lucide-react';
export default function Header(){return <header className="header"><a className="brand" href="#top">פק״ל</a><nav><a href="#game">המשחק</a><a href="#trails">המסלולים</a><a href="#about">אודות</a></nav><div className="actions"><button className="icon" aria-label="סל קניות"><ShoppingBag/></button><button className="icon mobile" aria-label="תפריט"><Menu/></button></div></header>}
