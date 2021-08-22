(this["webpackJsonpjob-listings"]=this["webpackJsonpjob-listings"]||[]).push([[0],[,,function(e,t,o){e.exports={job:"Job_job__2wavX",job__title:"Job_job__title__228Jx",job__logo:"Job_job__logo__lxoCd",job__container:"Job_job__container__18cTw",job__header:"Job_job__header__3lWMh",job__subtitle:"Job_job__subtitle__2c8Fx",job__labels:"Job_job__labels__3uIsC",job__description:"Job_job__description__3brap",job__tags:"Job_job__tags__3SlBM",job__tag:"Job_job__tag__3qlwe"}},,,,function(e,t,o){e.exports={"job-filter":"JobFilter_job-filter__3pnCU","job-filter__container":"JobFilter_job-filter__container__2EBVW","job-filter__clear":"JobFilter_job-filter__clear__2JWj2","job-filter__tag":"JobFilter_job-filter__tag__3mvGo"}},,function(e,t,o){e.exports={"job-listings__container":"App_job-listings__container__19HeI","job-listings--has-filters":"App_job-listings--has-filters__217qq"}},function(e,t,o){e.exports={chip:"Chip_chip__3fb1O","chip--closable":"Chip_chip--closable__3qQA8",chip__close:"Chip_chip__close__1O_M1"}},,,function(e,t,o){e.exports={tag:"Tag_tag__25sA1","tag--featured":"Tag_tag--featured__8Md2o"}},,function(e,t,o){e.exports={header:"Header_header__1v0yI"}},,function(e,t,o){e.exports={container:"Container_container__2b-1v"}},function(e,t,o){e.exports={card:"Card_card__2jlaB"}},,,,,,,,,,,function(e,t,o){},,,,function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(7),i=o.n(c),s=o(3),l=o(4),r=o(5),b=Object(l.b)({name:"filter",initialState:{filters:[]},reducers:{setFilters:function(e,t){e.filters=[].concat(Object(r.a)(e.filters),[{name:t.payload}])},removeFilter:function(e,t){e.filters=Object(r.a)(e.filters.filter((function(e,o){return t.payload!==o})))},removeFilters:function(e){e.filters=[]}}}),j=b.actions,_=b.reducer,d={jobs:[{id:1,company:"Photosnap",logo:"photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}]},u=Object(l.b)({name:"job",initialState:d,reducers:{setJobs:function(e,t){e.job=t.payload}}}),g=(u.actions,u.reducer),p=Object(l.a)({reducer:{filter:_,job:g}}),m=(o(28),o(8)),f=o.n(m),h=o(14),v=o.n(h),O=o(1),x=function(){return Object(O.jsx)("div",{className:v.a.header,children:Object(O.jsxs)("picture",{children:[Object(O.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat("/job-listings","/images/bg-header-desktop.svg")}),Object(O.jsx)("img",{src:"".concat("/job-listings","/images/bg-header-mobile.svg"),alt:"Job listings"})]})})},F=o(15),J=o.n(F),y=o(16),N=o.n(y),S=function(e){var t="".concat(N.a.container," ").concat(e.className?e.className:"").trim();return Object(O.jsx)("div",{className:t,children:e.children})},w=o(17),A=o.n(w),C=function(e){var t=e.className?e.className:"",o="".concat(A.a.card," ").concat(t).trim();return Object(O.jsx)("div",{className:o,children:e.children})},T=o(9),k=o.n(T),M=function(e){var t=e.className?e.className:"",o="".concat(t).trim(),n=e.closable?k.a["chip--closable"]:"",a="".concat(k.a.chip," ").concat(n).trim();return Object(O.jsxs)("div",{className:o,children:[Object(O.jsx)("span",{className:a,onClick:e.onClick,children:e.text}),e.closable&&Object(O.jsx)("span",{className:k.a.chip__close,onClick:e.onRemove,children:"x"})]})},D=o(12),R=o.n(D),E=function(e){var t=e.featured?R.a["tag--featured"]:"",o=e.className?e.className:"",n="".concat(R.a.tag," ").concat(t," ").concat(o).trim();return Object(O.jsx)("span",{className:n,children:e.text})},P=o(2),W=o.n(P),B=function(e){var t=Object(s.c)((function(e){return e.filter.filters})),o=Object(s.b)(),n=function(e){!t.map((function(e){return e.name})).includes(e)&&o(j.setFilters(e))},a=e.job.tags.map((function(e,t){return Object(O.jsx)(M,{className:W.a.job__tag,text:e,onClick:n.bind(null,e)},t)}));return Object(O.jsxs)(C,{className:W.a.job,children:[Object(O.jsx)("img",{className:W.a.job__logo,src:"".concat("/job-listings","/images/").concat(e.job.logo),alt:e.job.company}),Object(O.jsx)("div",{className:W.a.job__container,children:Object(O.jsxs)("div",{className:W.a.job__data,children:[Object(O.jsxs)("div",{className:W.a.job__header,children:[Object(O.jsx)("span",{className:W.a.job__subtitle,children:e.job.company}),Object(O.jsxs)("div",{className:W.a.job__labels,children:[e.job.new&&Object(O.jsx)(E,{className:W.a.job__label,text:"NEW!"}),e.job.featured&&Object(O.jsx)(E,{className:W.a.job__label,text:"FEATURED",featured:!0})]})]}),Object(O.jsx)("h3",{className:W.a.job__title,children:e.job.position}),Object(O.jsxs)("div",{className:W.a.job__description,children:[Object(O.jsx)("span",{children:e.job.postedAt})," \xa0 \u2022 \xa0 ",Object(O.jsx)("span",{children:e.job.contract})," ","\xa0 \u2022 \xa0 ",Object(O.jsx)("span",{children:e.job.location})]})]})}),Object(O.jsx)("div",{className:W.a.job__tags,children:a})]})},I=function(){var e=Object(s.c)((function(e){return e.filter.filters})),t=Object(s.c)((function(e){return e.job.jobs})),o=e.map((function(e){return e.name})),n=t.map((function(e){return{id:e.id,company:e.company,logo:e.logo,new:e.new,featured:e.featured,position:e.position,postedAt:e.postedAt,contract:e.contract,location:e.location,tags:[e.role,e.level].concat(Object(r.a)(e.languages)),tools:e.tools}})),a=n.filter((function(e){return function(e){return!o.length||J.a.intersection(o,e.tags).length===o.length}(e)})).map((function(e){return Object(O.jsx)(B,{job:e},e.id)}));return Object(O.jsx)(S,{children:a})},U=o(6),H=o.n(U),L=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.filter.filters})),o=function(t){e(j.removeFilter(t))},n=t.map((function(e,t){var n=e.name;return Object(O.jsx)(M,{className:H.a["job-filter__tag"],text:n,closable:!0,onRemove:o.bind(null,t)},t)}));return Object(O.jsxs)(C,{className:H.a["job-filter"],children:[Object(O.jsx)("div",{className:H.a["job-filter__container"],children:n}),Object(O.jsx)("span",{className:H.a["job-filter__clear"],onClick:function(){e(j.removeFilters())},children:"clear"})]})},q=function(){var e=!!Object(s.c)((function(e){return e.filter.filters})).length,t=e?"".concat(f.a["job-listings--has-filters"]):"",o="".concat(f.a["job-listings__container"]," ").concat(t).trim();return Object(O.jsxs)("main",{className:f.a["job-listings"],children:[Object(O.jsx)(x,{}),Object(O.jsxs)(S,{className:o,children:[e&&Object(O.jsx)(L,{}),Object(O.jsx)(I,{})]})]})},V=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,33)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;o(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(O.jsxs)(a.a.StrictMode,{children:[Object(O.jsx)(s.a,{store:p,children:Object(O.jsx)(q,{})}),","]}),document.getElementById("root")),V()}],[[32,1,2]]]);
//# sourceMappingURL=main.124649b1.chunk.js.map