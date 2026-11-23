'use client';
import {useEffect} from 'react';

const WHATSAPP_URL='https://wa.me/972546699435';

/** Redirects existing #contact links, including the artwork's transparent hotspot. */
export default function WhatsAppContact(){
  useEffect(()=>{
    const onClick=(event:MouseEvent)=>{
      const target=event.target;
      if(!(target instanceof Element))return;
      const link=target.closest<HTMLAnchorElement>('a[href="#contact"], a[href="/#contact"]');
      if(!link)return;
      event.preventDefault();
      window.location.assign(WHATSAPP_URL);
    };
    document.addEventListener('click',onClick);
    return()=>document.removeEventListener('click',onClick);
  },[]);
  return null;
}
