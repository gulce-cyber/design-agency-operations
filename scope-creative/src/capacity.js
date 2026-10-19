// Completed production rounds from illustrative Clockify records. No live retrieval.
export const CLOCKIFY_HISTORY = [
 {id:'CF-071',date:'2026-07-09',client:'OLIO',project:'Summer stories',category:'Social asset',quantity:6,hours:24,description:'Campaign social assets'},
 {id:'CF-072',date:'2026-07-16',client:'MONDAY',project:'Everyday moments',category:'Social asset',quantity:4,hours:16,description:'Static social adaptations'},
 {id:'CF-073',date:'2026-08-12',client:'OLIO',project:'Summer stories',category:'Social asset',quantity:3,hours:9,description:'Story adaptations'},
 {id:'CF-074',date:'2026-09-08',client:'MONDAY',project:'New season',category:'Social asset',quantity:6,hours:27,description:'Social asset production'},
 {id:'CF-075',date:'2026-09-22',client:'OLIO',project:'Autumn launch',category:'Social asset',quantity:3,hours:12,description:'Campaign social assets'},
 {id:'CF-081',date:'2026-07-21',client:'FOLK',project:'Our next chapter',category:'Presentation',quantity:1,hours:18,description:'Presentation design'},
 {id:'CF-082',date:'2026-08-18',client:'FOLK',project:'Our next chapter',category:'Presentation',quantity:1,hours:20,description:'Deck production'},
 {id:'CF-083',date:'2026-09-17',client:'FOLK',project:'Investor story',category:'Presentation',quantity:1,hours:16,description:'Presentation design'},
 {id:'CF-091',date:'2026-07-28',client:'FORM & FIELD',project:'Everyday collection',category:'Packaging',quantity:1,hours:24,description:'Packaging concepts and artwork'},
 {id:'CF-092',date:'2026-09-11',client:'FORM & FIELD',project:'Everyday collection',category:'Packaging',quantity:1,hours:30,description:'Packaging artwork'},
 {id:'CF-101',date:'2026-08-27',client:'MONDAY',project:'Everyday moments',category:'Motion adaptation',quantity:2,hours:14,description:'Motion adaptations'},
 {id:'CF-102',date:'2026-09-24',client:'MONDAY',project:'New season',category:'Motion adaptation',quantity:2,hours:16,description:'Motion adaptations'},
 {id:'CF-111',date:'2026-09-25',client:'OLIO',project:'Autumn launch',category:'Social asset',quantity:1,hours:3,description:''},
 {id:'CF-112',date:'2026-09-28',client:'Unmatched',project:null,category:'Packaging',quantity:1,hours:5,description:'Artwork preparation'}
];
export const WEEKS=['2026-10-05','2026-10-12','2026-10-19','2026-10-26'];
export const mondayOf = date => {const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7));return d.toISOString().slice(0,10)};
export function plannedWeek(project,task,index){
 if(task.plannedWeek)return task.plannedWeek;
 if(project.id<=4)return index===0||(project.id===1&&index===1)?'2026-10-12':'2026-10-19';
 return mondayOf(project.due);
}
export function weeklyCapacity(db,week){
 return db.team.map((member,index)=>{const allocations=db.projects.flatMap(project=>project.tasks.map((task,i)=>({...task,projectId:project.id,projectName:project.name,client:project.client,color:project.color,due:project.due,week:plannedWeek(project,task,i)}))).filter(t=>t.person===index&&t.week===week);
 const booked=week==='2026-10-12'?member.booked:allocations.reduce((sum,t)=>sum+t.hours,0);
 return {...member,booked,allocations,remaining:Math.max(0,member.available-booked),over:Math.max(0,booked-member.available)};
 });
}
export const median = values=>{const v=[...values].sort((a,b)=>a-b);return v.length?v.length%2?v[(v.length-1)/2]:(v[v.length/2-1]+v[v.length/2])/2:0};
export function historicalEffort(period='all',group='category'){
 const source=CLOCKIFY_HISTORY.filter(r=>period==='all'||r.date.startsWith(period));
 const valid=source.filter(r=>r.description&&r.project&&r.client!=='Unmatched'&&r.quantity>0);
 const groups=new Map();for(const r of valid){const key=r[group];if(!groups.has(key))groups.set(key,[]);groups.get(key).push(r)}
 return {source,valid,excluded:source.filter(r=>!valid.includes(r)),rows:[...groups].map(([name,records])=>{const units=records.map(r=>r.hours/r.quantity);const categories=new Set(records.map(r=>r.category));return {name,records,hours:records.reduce((s,r)=>s+r.hours,0),typical:median(units),min:Math.min(...units),max:Math.max(...units),mixed:categories.size>1,confidence:categories.size>1?'Mixed deliverables':records.length<3?'Limited sample':Math.max(...units)>Math.min(...units)*2?'Wide effort range':'Comparable history'}}).sort((a,b)=>b.hours-a.hours)};
}
export function socialEffort(){return historicalEffort().rows.find(r=>r.name==='Social asset')?.typical||4}
