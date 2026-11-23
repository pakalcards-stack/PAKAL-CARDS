import type { ReactNode } from 'react';

const links = [
  { href: '/terms', label: 'תקנון האתר' },
  { href: '/privacy', label: 'מדיניות פרטיות' },
  { href: '/accessibility', label: 'הצהרת נגישות' },
];

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <footer dir="rtl" aria-label="קישורים משפטיים" style={{
        width: '100%', background: '#302015', color: '#fff0d1',
        borderTop: '4px solid #ae864f', padding: '28px 16px 22px',
        textAlign: 'center', boxSizing: 'border-box',
      }}>
        <nav aria-label="מסמכי האתר" style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          alignItems: 'center', gap: '12px 20px', maxWidth: 850,
          margin: '0 auto',
        }}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} style={{
              display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
              minHeight: 44, padding: '9px 17px', color: '#fff0d1',
              border: '1px solid #c4a16e', borderRadius: 9,
              background: '#513821', fontSize: 16, fontWeight: 700,
              textDecoration: 'none', lineHeight: 1.3,
            }}>{label}</a>
          ))}
        </nav>
        <p style={{margin: '18px 0 0', fontSize: 13, opacity: 0.85}}>פק״ל · נהנים בכל דרך</p>
      </footer>
    </>
  );
}
