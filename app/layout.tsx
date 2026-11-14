import type { Metadata } from 'next';
import { Heebo, Secular_One } from 'next/font/google';
import './globals.css';

const heebo = Heebo({ subsets: ['hebrew', 'latin'], variable: '--font-body', display: 'swap' });
const secular = Secular_One({ weight: '400', subsets: ['hebrew', 'latin'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: 'פק״ל | נהנים בכל דרך',
  description: 'משחק קלפים ישראלי שמחבר בין הבית, הדרך והשטח.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${secular.variable}`}>{children}</body>
    </html>
  );
}
