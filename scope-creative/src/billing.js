// Recorded sample Clockify time is separate from proposed Asana allocations.
export const CLOCKIFY_TIME_RECORDS=[
 {id:'CF-201',date:'2026-10-15',client:'OLIO',projectId:1,person:0,hours:32,category:'Campaign design',description:'Campaign creative production'},
 {id:'CF-202',date:'2026-10-16',client:'OLIO',projectId:5,person:0,hours:16,category:'Print collateral',description:'Lookbook design and artwork'},
 {id:'CF-203',date:'2026-10-16',client:'FORM & FIELD',projectId:2,person:2,hours:24,category:'Packaging',description:'Packaging concepts and artwork'},
 {id:'CF-204',date:'2026-10-16',client:'MONDAY',projectId:3,person:1,hours:18,category:'Social content',description:'Social content production'},
 {id:'CF-205',date:'2026-10-16',client:'FOLK',projectId:4,person:2,hours:20,category:'Presentation',description:'Investor presentation design'},
 {id:'CF-206',date:'2026-10-15',client:'OLIO',projectId:null,person:1,hours:2,category:'Social adaptations',description:'Social story adaptations'},
 {id:'CF-207',date:'2026-10-15',client:'FORM & FIELD',projectId:3,person:2,hours:1.5,category:'Packaging',description:'Packaging artwork'}
];
export function timeRecordIssue(record,projects){const project=projects.find(p=>p.id===record.projectId);return !project?'Unmatched project':project.client!==record.client?'Client / project mismatch':!record.description.trim()?'Missing description':''}
export function prepareInvoiceDrafts(db,period='2026-10'){
 const eligible=db.timeRecords.filter(r=>r.date.startsWith(period)&&!timeRecordIssue(r,db.projects));
 return db.rates.map((rate,index)=>{const records=eligible.filter(r=>r.client===rate.client);if(!records.length)return null;const groups=new Map();for(const record of records){const key=db.grouping==='By deliverable'?record.projectId+'|'+record.category:record.projectId;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(record)}
 const existing=db.invoices.find(i=>i.client===rate.client);
 const lines=[...groups.values()].map(items=>{const project=db.projects.find(p=>p.id===items[0].projectId);const hours=items.reduce((s,r)=>s+r.hours,0);return {description:project.name+' · '+(db.grouping==='By deliverable'?items[0].category:project.type),hours:Math.round(hours*60/db.rounding)*db.rounding/60}});
 return {...existing,id:existing?.id||'SC-2026-'+String(41+index).padStart(3,'0'),client:rate.client,status:'Draft',rate:rate.rate,lines};
 }).filter(Boolean);
}
