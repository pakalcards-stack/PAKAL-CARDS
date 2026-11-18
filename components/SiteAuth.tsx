'use client';
import {useEffect,useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {LogOut,UserRound,X} from 'lucide-react';

const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
export const db=url&&key?createClient(url,key):null;

export default function SiteAuth(){
 const[logged,setLogged]=useState(false);
 const[open,setOpen]=useState(false);
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');
 const[error,setError]=useState('');
 const[busy,setBusy]=useState(false);
 useEffect(()=>{
   if(!db)return;
   db.auth.getSession().then(({data})=>setLogged(Boolean(data.session)));
   const{data}=db.auth.onAuthStateChange((_event,session)=>setLogged(Boolean(session)));
   return()=>data.subscription.unsubscribe();
 },[]);
 async function signIn(e:React.FormEvent<HTMLFormElement>){
   e.preventDefault();if(!db)return;
   setBusy(true);setError('');
   const{error:loginError}=await db.auth.signInWithPassword({email,password});
   setBusy(false);
   if(loginError){setError('פרטי ההתחברות אינם תקינים.');return}
   setPassword('');setOpen(false);
 }
 async function signOut(){await db?.auth.signOut();setLogged(false)}
 return <>
   <div className="siteAuth" dir="rtl">
     {logged?<button type="button" onClick={()=>void signOut()} aria-label="התנתקות" title="התנתקות"><LogOut size={19}/><span>התנתקות</span></button>:
       <button type="button" onClick={()=>setOpen(true)} aria-label="התחברות" title="התחברות"><UserRound size={19}/><span>התחברות</span></button>}
   </div>
   {open&&<div className="siteAuthBackdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}>
     <div className="siteAuthDialog" role="dialog" aria-modal="true" aria-labelledby="site-login-title" dir="rtl">
       <button className="siteAuthClose" type="button" onClick={()=>setOpen(false)} aria-label="סגירה"><X/></button>
       <h2 id="site-login-title">התחברות לפק״ל</h2><p>התחברו לחשבון שלכם</p>
       <form onSubmit={e=>void signIn(e)}>
         <label>כתובת אימייל<input required type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)}/></label>
         <label>סיסמה<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label>
         {error&&<p className="siteAuthError" role="alert">{error}</p>}
         <button type="submit" disabled={busy}>{busy?'מתחבר...':'כניסה'}</button>
       </form>
     </div>
   </div>}
 </>;
}
