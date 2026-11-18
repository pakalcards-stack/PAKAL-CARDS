'use client';
import {useEffect,useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {LogIn,LogOut,UserRound,X} from 'lucide-react';
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
export const db=url&&key?createClient(url,key):null;
export default function SiteAuth(){
 const[logged,setLogged]=useState(false),[open,setOpen]=useState(false),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 useEffect(()=>{if(!db)return;db.auth.getSession().then(({data})=>setLogged(!!data.session));const{data}=db.auth.onAuthStateChange((_event,session)=>setLogged(!!session));return()=>data.subscription.unsubscribe()},[]);
 async function signIn(e:React.FormEvent){e.preventDefault();if(!db)return;setBusy(true);setError('');const{error}=await db.auth.signInWithPassword({email,password});setBusy(false);if(error){setError('פרטי ההתחברות אינם תקינים.');return}setPassword('');setOpen(false)}
 async function signOut(){await db?.auth.signOut();setLogged(false)}
 return <><div className="siteAuth" dir="rtl">{logged?<button onClick={()=>void signOut()}><LogOut size={17}/>התנתקות</button>:<button onClick={()=>setOpen(true)}><UserRound size={17}/>התחברות</button>}</div>{open&&<div className="siteAuthBackdrop"><div className="siteAuthDialog" role="dialog" aria-modal="true" aria-labelledby="site-login-title" dir="rtl"><button className="siteAuthClose" onClick={()=>setOpen(false)} aria-label="סגירה"><X/></button><h2 id="site-login-title">התחברות לפק״ל</h2><p>התחברו לחשבון שלכם</p><form onSubmit={e=>void signIn(e)}><label>כתובת אימייל<input required type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>סיסמה<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label>{error&&<p role="alert">{error}</p>}<button disabled={busy} type="submit">{busy?'מתחבר...':'כניסה'}</button></form></div></div>}</>
}
