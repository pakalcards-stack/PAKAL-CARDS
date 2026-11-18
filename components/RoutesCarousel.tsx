'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {ChevronLeft,ChevronRight,ImagePlus,Pencil,Trash2,X,Check} from 'lucide-react';
import {db} from './SiteAuth';
type Route={id:string;title:string;description:string;image_url:string;sort_order:number;active:boolean};
const examples:Route[]=[{id:'example-1',title:'נחל חרמון (בניאס)',description:'מים, טבע וחוויה קסומה',image_url:'/assets/route-1.jpg',sort_order:0,active:true},{id:'example-2',title:'הגליל העליון',description:'נחלים, חורשים ותצפיות',image_url:'/assets/route-2.jpg',sort_order:1,active:true},{id:'example-3',title:'מדבר יהודה',description:'מצוקים ונאות מדבר',image_url:'/assets/route-3.jpg',sort_order:2,active:true},{id:'example-4',title:'הנגב',description:'קניונים ומרחבי מדבר',image_url:'/assets/route-4.jpg',sort_order:3,active:true}];
const empty={title:'',description:'',image_url:''};
export default function RoutesCarousel(){
 const[items,setItems]=useState<Route[]>(examples),[admin,setAdmin]=useState(false),[editing,setEditing]=useState<string|null>(null),[form,setForm]=useState(empty),[busy,setBusy]=useState(false),[notice,setNotice]=useState('');const rail=useRef<HTMLDivElement>(null);const currentIndex=useRef(0);const scrollTimer=useRef<ReturnType<typeof setTimeout>|null>(null);const paused=useRef(false);const programmatic=useRef(false);const [reducedMotion,setReducedMotion]=useState(false);
 useEffect(()=>{if(!db)return;void reload();void refreshAdmin();const{data}=db.auth.onAuthStateChange(()=>{void refreshAdmin()});return()=>data.subscription.unsubscribe()},[]);
 // Three consecutive copies create a seamless, bidirectional loop.
 const count=items.length;
 const loopItems=count>0?[...items,...items,...items]:[];
 function centeredIndex(){
   const el=rail.current;
   if(!el)return currentIndex.current;
   const center=el.getBoundingClientRect().left+el.clientWidth/2;
   let nearest=currentIndex.current, distance=Infinity;
   el.querySelectorAll<HTMLElement>('[data-route-card]').forEach((card,i)=>{
     const rect=card.getBoundingClientRect();
     const d=Math.abs(rect.left+rect.width/2-center);
     if(d<distance){distance=d;nearest=i}
   });
   return nearest;
 }
 function jumpTo(index:number){
   const el=rail.current;
   const card=el?.querySelectorAll<HTMLElement>('[data-route-card]')[index];
   if(!el||!card)return;
   const previousSnap=el.style.scrollSnapType;
   el.style.scrollSnapType='none';
   const railRect=el.getBoundingClientRect(), cardRect=card.getBoundingClientRect();
   const delta=(cardRect.left+cardRect.width/2)-(railRect.left+railRect.width/2);
   el.scrollLeft+=delta;
   currentIndex.current=index;
   requestAnimationFrame(()=>{if(rail.current===el)el.style.scrollSnapType=previousSnap});
 }
 function goTo(index:number,smooth=true){
   const el=rail.current;
   if(!el||!count||index<0||index>=count*3)return;
   if(scrollTimer.current)clearTimeout(scrollTimer.current);
   programmatic.current=true;
   const target=el.querySelectorAll<HTMLElement>('[data-route-card]')[index];
   if(!target){programmatic.current=false;return}
   currentIndex.current=index;
   const previousSnap=el.style.scrollSnapType;
   el.style.scrollSnapType='none';
   const railRect=el.getBoundingClientRect(),cardRect=target.getBoundingClientRect();
   const delta=(cardRect.left+cardRect.width/2)-(railRect.left+railRect.width/2);
   el.scrollBy({left:delta,behavior:smooth&&!reducedMotion?'smooth':'instant'});
   scrollTimer.current=setTimeout(()=>{
     if(rail.current!==el)return;
     const normalized=((index%count)+count)%count;
     if(index<count||index>=count*2)jumpTo(count+normalized);
     programmatic.current=false;
     requestAnimationFrame(()=>{if(rail.current===el)el.style.scrollSnapType=previousSnap});
   },smooth&&!reducedMotion?550:50);
 }
 function step(direction:-1|1){
   if(programmatic.current||count<2)return;
   // RTL: increasing card indexes are visually to the left.
   // Right arrow = previous card, left arrow = next card.
   const nearest=centeredIndex();
   goTo(nearest+direction);
 }
 function onRailScroll(){
   if(programmatic.current||!rail.current||!count)return;
   if(scrollTimer.current)clearTimeout(scrollTimer.current);
   scrollTimer.current=setTimeout(()=>{
     const closest=centeredIndex();
     currentIndex.current=closest;
     if(closest<count||closest>=count*2){
       programmatic.current=true;
       jumpTo(count+((closest%count)+count)%count);
       setTimeout(()=>{programmatic.current=false},70);
     }
   },220);
 }
 useEffect(()=>{
   if(!count)return;
   currentIndex.current=count;
   const id=requestAnimationFrame(()=>goTo(count,false));
   return()=>cancelAnimationFrame(id);
 },[count]);
 useEffect(()=>{
   const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
   setReducedMotion(mq.matches);
   const update=()=>setReducedMotion(mq.matches);mq.addEventListener('change',update);
   return()=>mq.removeEventListener('change',update);
 },[]);
 useEffect(()=>()=>{if(scrollTimer.current)clearTimeout(scrollTimer.current)},[]);
 async function reload(){if(!db)return;const{data,error}=await db.from('routes').select('id,title,description,image_url,sort_order,active').eq('active',true).order('sort_order');if(error){setNotice('טעינת המסלולים נכשלה.');return}setItems((data||[]) as Route[])}
 async function refreshAdmin(){if(!db)return;const{data:{user}}=await db.auth.getUser();if(!user){setAdmin(false);return}const{data,error}=await db.rpc('is_admin');setAdmin(!error&&data===true)}
 function edit(x?:Route){if(!admin)return;setEditing(x?.id||'new');setForm(x?{title:x.title,description:x.description,image_url:x.image_url}:empty);setNotice('')}
 async function upload(file:File){if(!db||!admin)return;if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>10*1024*1024){setNotice('יש להעלות JPG, PNG או WebP עד 10MB.');return}setBusy(true);setNotice('');try{const ext=file.type==='image/png'?'png':file.type==='image/webp'?'webp':'jpg';const path=`${crypto.randomUUID()}.${ext}`;const{error}=await db.storage.from('pakal-routes').upload(path,file,{contentType:file.type});if(error)throw error;setForm(v=>({...v,image_url:db!.storage.from('pakal-routes').getPublicUrl(path).data.publicUrl}))}catch(e){setNotice('העלאת התמונה נכשלה: '+(e instanceof Error?e.message:'שגיאה'))}finally{setBusy(false)}}
 async function save(){if(!db||!admin||!editing)return;if(!form.title.trim()||!form.image_url){setNotice('יש להזין שם מסלול ותמונה.');return}setBusy(true);setNotice('');try{const payload={title:form.title.trim(),description:form.description.trim(),image_url:form.image_url};const response=editing==='new'?await db.from('routes').insert({...payload,sort_order:items.length,active:true}):await db.from('routes').update(payload).eq('id',editing);if(response.error)throw response.error;setEditing(null);await reload()}catch(e){setNotice('השמירה נכשלה: '+(e instanceof Error?e.message:'שגיאה'))}finally{setBusy(false)}}
 async function remove(x:Route){if(!db||!admin||!confirm(`למחוק את ״${x.title}״?`))return;setBusy(true);try{const{error}=await db.from('routes').delete().eq('id',x.id);if(error)throw error;await reload()}catch(e){setNotice('המחיקה נכשלה: '+(e instanceof Error?e.message:'שגיאה'))}finally{setBusy(false)}}
 return <section id="routes" className="routes"><div className="routesHeading"><h2>מסלולים</h2><p>גלו מקומות ומסלולים ברחבי הארץ</p>{admin&&<button className="routeAdd" onClick={()=>edit()}><ImagePlus size={19}/>הוספת מסלול</button>}</div><div className="carousel"><button className="carouselArrow" aria-label="הקודם" onClick={()=>step(-1)}><ChevronRight/></button><div className="rail rail3d" ref={rail} onScroll={onRailScroll} onMouseEnter={()=>{paused.current=true}} onMouseLeave={()=>{paused.current=false}} onFocusCapture={()=>{paused.current=true}} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))paused.current=false}}>{loopItems.map((x,i)=><article className="routeCard" data-route-card key={`${x.id}-${i}`} aria-hidden={i<count||i>=count*2}><h3>{x.title}</h3><div className="photo"><Image src={x.image_url} alt={x.title} fill sizes="(max-width:760px) 82vw, 340px" unoptimized={x.image_url.startsWith('https://')}/></div><p>{x.description}</p>{admin&&i>=count&&i<count*2&&<div className="routeActions"><button onClick={()=>edit(x)}><Pencil size={16}/>עריכה</button><button onClick={()=>void remove(x)} disabled={busy}><Trash2 size={16}/>מחיקה</button></div>}</article>)}{items.length===0&&<p>אין מסלולים להצגה.</p>}</div><button className="carouselArrow" aria-label="הבא" onClick={()=>step(1)}><ChevronLeft/></button></div>{editing&&admin&&<div className="routeEditorBackdrop"><div className="routeEditor" role="dialog" aria-modal="true" aria-labelledby="route-editor"><div className="routeEditorHead"><h3 id="route-editor">{editing==='new'?'הוספת מסלול':'עריכת מסלול'}</h3><button onClick={()=>setEditing(null)} aria-label="סגירה"><X/></button></div><label>שם המסלול<input maxLength={100} value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></label><label>תיאור קצר<textarea maxLength={400} value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/></label><label>תמונה<input type="file" accept="image/jpeg,image/png,image/webp" onChange={e=>{const f=e.target.files?.[0];if(f)void upload(f)}}/></label>{form.image_url&&<div className="routePreview"><img src={form.image_url} alt="תצוגה מקדימה"/></div>}<div className="routeEditorButtons"><button onClick={()=>setEditing(null)}>ביטול</button><button disabled={busy} onClick={()=>void save()}><Check size={17}/>{busy?'שומר...':'שמירה'}</button></div></div></div>}{notice&&<p className="routeNotice" role="status">{notice}</p>}</section>
}
