import type { Metadata } from 'next';import { Heebo, Rubik } from 'next/font/google';import './globals.css';
const heebo=Heebo({subsets:['hebrew'],variable:'--font-heebo'});const rubik=Rubik({subsets:['hebrew'],variable:'--font-rubik'});
export const metadata:Metadata={title:'פק״ל | נהנים בכל דרך',description:'משחק הקלפים למטיילים בארץ'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body className={`${heebo.variable} ${rubik.variable}`}>{children}</body></html>}
