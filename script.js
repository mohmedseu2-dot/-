// بيانات المحتوى
});
const result = el('div','mt'); result.style.marginTop='8px';
card.appendChild(form); card.appendChild(result); grid.appendChild(card);
});
}


// تفعيل التبويبات
function initTabs(){
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab=>{
tab.addEventListener('click',()=>{
document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
tab.classList.add('active');
document.querySelectorAll('.tab-panels .panel').forEach(p=>p.classList.remove('show'));
const id = tab.dataset.tab;
document.getElementById(`panel-${id}`).classList.add('show');
});
});
}


// بحث عام بسيط على الموارد
function initSearch(){
const input = document.getElementById('globalSearch');
const filter = () =>{
const q = input.value.toLowerCase();
const filterArr = (arr, keys) => arr.filter(o => keys.some(k => (o[k]||'').toString().toLowerCase().includes(q)));
const fb = filterArr(books,['t','a','kind']);
const fp = filterArr(podcasts,['t','ep']);
const fs = filterArr(websites,['t']);
const renderList = (ulId, arr) =>{
const ul = document.getElementById(ulId); ul.innerHTML='';
arr.forEach((it)=>{
const li = el('li');
li.innerHTML = `<div class="row-between"><div><div><strong>${it.t||it.ep||it.link}</strong></div><div class="muted">${it.a?`${it.a} — ${it.y||''} • ${it.kind||''}`: (it.ep||'')}</div></div><a class="link" target="_blank" href="${it.link}">رابط</a></div>`;
ul.appendChild(li);
});
};
renderList('booksList', fb);
renderList('podsList', fp);
renderList('sitesList', fs);
};
input.addEventListener('input', filter);
}


// قائمة جوال
function initMenu(){
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mobileNav');
btn.addEventListener('click',()=>{
const hidden = nav.hasAttribute('hidden');
if(hidden) nav.removeAttribute('hidden'); else nav.setAttribute('hidden','');
btn.setAttribute('aria-expanded', hidden? 'true':'false');
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.setAttribute('hidden','')));
}


// حوار الخريطة
function initMapDialog(){
const dlg = document.getElementById('mapDialog');
document.getElementById('openMap').addEventListener('click',()=>dlg.showModal());
document.getElementById('closeMap').addEventListener('click',()=>dlg.close());
}


// بدء التشغيل
function init(){
buildFacts();
buildTimeline();
buildLandmarks();
buildCulture();
buildFood();
buildResources();
buildFAQ();
buildQuiz();
initTabs();
initSearch();
initMenu();
initMapDialog();
}


document.addEventListener('DOMContentLoaded', init);