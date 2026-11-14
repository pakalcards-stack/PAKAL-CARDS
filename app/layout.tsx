import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'פק״ל | נהנים בכל דרך',
  description: 'פק״ל, משחקים בבית ויוצאים לשטח',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="he" dir="rtl"><body>{children}</body></html>;
}
