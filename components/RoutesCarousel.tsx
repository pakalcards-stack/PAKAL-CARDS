'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {ChevronLeft,ChevronRight,ImagePlus,Pencil,Trash2,X,Check} from 'lucide-react';
import {createClient,type SupabaseClient} from '@supabase/supabase-js';

type Route={id:string;title:string;description:string;image_url:string;sort_order:number;active:boolean};
const initial:Route[]=[
{id:'local-1',title:'נחל חרמון (בניאס)',description:'מים, טבע וחוויה קסומה',image_url:'/assets/route-1.jpg',sort_order:0,active:true},
{id:'local-2',title:'הגליל העליון',description:'נחלים, חורשים ותצפיות',image_url:'/assets/route-2.jpg',sort_order:1,active:true},
{id:'local-3',title:'מדבר יהודה',description:'מצוקים ונאות מדבר',image_url:'/assets/route-3.jpg',sort_order:2,active:true},
{id:'local-4',title:'הנגב',description:'קניונים ומרחבי מדבר',image_url:'/assets/route-4.jpg',sort_order:3,active:true},
];
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const db:SupabaseClient|null=url&&key?createClient(url,key):null;
const store='pakal-public-routes-v1';
const blank={title:'',description:'',image_url:''};
function readLocal():Route[]{try{const s=localStorage.getItem(store);return s?JSON.parse(s) as Route[]:initial}catch{return initial}}
export default function RoutesCarousel(){
 const[items,setItems]=useState<Route[]>(initial);const[editing,setEditing]=useState<string|null>(null);const[form,setForm]=useState(blank);const[busy,setBusy]=useState(false);const[notice,setNotice]=useState('');const rail=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!db){setItems(readLocal());return}void reload()},[]);
 async function reload(){if(!db)return;const{data,error}=await db.from('routes').select('id,title,description,image_url,sort_order,active').eq('active',true).order('sort_order');if(error){setNotice('לא ניתן לטעון את המסלולים. בדקו את הגדרות Supabase.');return}setItems((data||[]) as Route[])}
 function persist(next:Route[]){setItems(next);try{localStorage.setItem(store,JSON.stringify(next))}catch{setNotice('האחסון בדפדפן מלא. מומלץ לחבר Supabase לשמירת תמונות.')}}
 async function upload(file:File){if(!file.type.startsWith('image/')){setNotice('אפשר להעלות תמונה בלבד.');return}if(file.size>5*1024*1024){setNotice('גודל התמונה המקסימלי הוא 5MB.');return}setBusy(true);setNotice('');try{if(db){const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,'_');const path=`${crypto.randomUUID()}-${safe}`;const{error}=await db.storage.from('routes').upload(path,file,{contentType:file.type,upsert:false});if(error)throw error;setForm(f=>({...f,image_url:db.storage.from('routes').getPublicUrl(path).data.publicUrl}))}else{const reader=new FileReader();reader.onload=()=>{setForm(f=>({...f,image_url:String(reader.result)}));setBusy(false)};reader.onerror=()=>{setNotice('קריאת התמונה נכשלה.');setBusy(false)};reader.readAsDataURL(file);return}}catch(e){setNotice(`העלאת התמונה נכשלה: ${e instanceof Error?e.message:'שגיאה'}`)}finally{setBusy(false)}}
 function startNew(){setEditing('new');setForm(blank);setNotice('')}
 function startEdit(x:Route){setEditing(x.id);setForm({title:x.title,description:x.description,image_url:x.image_url});setNotice('')}
 async function save(){if(!form.title.trim()||!form.image_url){setNotice('יש למלא שם מסלול ולבחור תמונה.');return}setBusy(true);setNotice('');const payload={title:form.title.trim(),description:form.description.trim(),image_url:form.image_url};try{if(db){const response=editing==='new'?await db.from('routes').insert({...payload,sort_order:items.length,active:true}):await db.from('routes').update(payload).eq('id',editing!);if(response.error)throw response.error;await reload()}else{const next=editing==='new'?[...items,{...payload,id:crypto.randomUUID(),sort_order:items.length,active:true}]:items.map(x=>x.id===editing?{...x,...payload}:x);persist(next)}setEditing(null);setForm(blank)}catch(e){setNotice(`השמירה נכשלה: ${e instanceof Error?e.message:'שגיאה'}`)}finally{setBusy(false)}}
 async function remove(x:Route){if(!window.confirm(`למחוק את המסלול ״${x.title}״?`))return;setBusy(true);try{if(db){const{error}=await db.from('routes').delete().eq('id',x.id);if(error)throw error;await reload()}else persist(items.filter(y=>y.id!==x.id))}catch(e){setNotice(`המחיקה נכשלה: ${e instanceof Error?e.message:'שגיאה'}`)}finally{setBusy(false)}}
 function move(direction:number){rail.current?.scrollBy({left:direction*350,behavior:'smooth'})}
 return <section id="routes" className="routes" aria-labelledby="routes-heading"><div className="routesHeading"><h2 id="routes-heading">מסלולים</h2><p>גלו מקומות ומסלולים ברחבי הארץ</p><button className="routeAdd" type="button" onClick={startNew}><ImagePlus size={19}/>הוספת מסלול</button></div>
 <div className="carousel"><button className="carouselArrow" aria-label="הקודם" onClick={()=>move(1)}><ChevronRight/></button><div className="rail" ref={rail}>{items.map(x=><article className="routeCard" key={x.id}><h3>{x.title}</h3><div className="photo">{x.image_url.startsWith('data:')?<img src={x.image_url} alt={x.title}/>:<Image src={x.image_url} alt={x.title} fill sizes="(max-width:760px) 82vw, 340px" unoptimized={x.image_url.startsWith('https://')}/>}</div><p>{x.description}</p><div className="routeActions"><button onClick={()=>startEdit(x)}><Pencil size={16}/>עריכה</button><button className="routeDelete" onClick={()=>void remove(x)} disabled={busy}><Trash2 size={16}/>מחיקה</button></div></article>)}{!items.length&&<p className="emptyRoutes">אין מסלולים עדיין. לחצו על ״הוספת מסלול״ כדי להתחיל.</p>}</div><button className="carouselArrow" aria-label="הבא" onClick={()=>move(-1)}><ChevronLeft/></button></div>
 {!db&&<p className="routeStorageNote">מצב מקומי: השינויים נשמרים בדפדפן הזה בלבד. להצגה לכל המבקרים יש לחבר Supabase.</p>}
 {editing&&<div className="routeEditorBackdrop" role="presentation"><div className="routeEditor" role="dialog" aria-modal="true" aria-labelledby="route-editor-title"><div className="routeEditorHead"><h3 id="route-editor-title">{editing==='new'?'הוספת מסלול':'עריכת מסלול'}</h3><button aria-label="סגירה" onClick={()=>setEditing(null)}><X/></button></div><label>שם המסלול<input maxLength={100} value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="לדוגמה: נחל חרמון"/></label><label>תיאור קצר<textarea maxLength={400} value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="כמה מילים על המסלול"/></label><label>תמונת מסלול<input type="file" accept="image/*" onChange={e=>{const f=e.target.files?.[0];if(f)void upload(f)}}/></label>{form.image_url&&<div className="routePreview"><img src={form.image_url} alt="תצוגה מקדימה"/></div>}<div className="routeEditorButtons"><button onClick={()=>setEditing(null)}>ביטול</button><button onClick={()=>void save()} disabled={busy}><Check size={17}/>{busy?'שומר...':'שמירה'}</button></div></div></div>}
 {notice&&<p className="routeNotice" role="status">{notice}</p>}</section>
}
