(this["webpackJsonpjob-listings"]=this["webpackJsonpjob-listings"]||[]).push([[0],[,function(e,o,t){e.exports={job:"Job_job__2wavX",job__title:"Job_job__title__228Jx",job__logo:"Job_job__logo__lxoCd",job__header:"Job_job__header__3lWMh",job__subtitle:"Job_job__subtitle__2c8Fx",job__labels:"Job_job__labels__3uIsC",job__description:"Job_job__description__3brap",job__tags:"Job_job__tags__3SlBM"}},,,function(e,o,t){e.exports={tag:"Tag_tag__25sA1","tag--featured":"Tag_tag--featured__8Md2o"}},,function(e,o,t){},function(e,o,t){},function(e,o,t){e.exports={"job-list":"JobList_job-list__2b1u3"}},function(e,o,t){e.exports={container:"Container_container__2b-1v"}},function(e,o,t){e.exports={card:"Card_card__2jlaB"}},function(e,o,t){e.exports={chip:"Chip_chip__3fb1O"}},,,,,,,function(e,o,t){"use strict";t.r(o);var a=t(2),n=t.n(a),c=t(5),s=t.n(c),l=t(6),i=t.n(l),r=t(7),d=t.n(r),j=t(0),b=function(){return Object(j.jsx)("div",{className:d.a.header,children:"Header"})},u=t(8),_=t.n(u),g=t(9),p=t.n(g),m=function(e){var o="".concat(p.a.container," ").concat(e.className?e.className:"").trim();return Object(j.jsx)("div",{className:o,children:e.children})},v=t(12),h=t(10),f=t.n(h),x=function(e){var o=e.className?e.className:"",t="".concat(f.a.card," ").concat(o).trim();return Object(j.jsx)("div",{className:t,children:e.children})},O=t(11),J=t.n(O),y=function(e){return Object(j.jsx)("span",{className:J.a.chip,children:e.text})},F=t(4),S=t.n(F),w=function(e){var o=e.featured?S.a["tag--featured"]:"",t=e.className?e.className:"",a="".concat(S.a.tag," ").concat(o," ").concat(t).trim();return Object(j.jsx)("span",{className:a,children:e.text})},N=t(1),A=t.n(N),T=function(e){var o=[e.job.role,e.job.level].concat(Object(v.a)(e.job.languages)).map((function(e,o){return Object(j.jsx)(y,{text:e},o)}));return Object(j.jsxs)(x,{className:A.a.job,children:[Object(j.jsx)("img",{className:A.a.job__logo,src:"".concat("/job-listings","/images/").concat(e.job.logo),alt:e.job.company}),Object(j.jsx)("div",{className:A.a.job__container,children:Object(j.jsxs)("div",{className:A.a.job__data,children:[Object(j.jsxs)("div",{className:A.a.job__header,children:[Object(j.jsx)("span",{className:A.a.job__subtitle,children:e.job.company}),Object(j.jsxs)("div",{className:A.a.job__labels,children:[e.job.new&&Object(j.jsx)(w,{className:A.a.job__label,text:"NEW!"}),e.job.featured&&Object(j.jsx)(w,{className:A.a.job__label,text:"FEATURED",featured:!0})]})]}),Object(j.jsx)("h3",{className:A.a.job__title,children:e.job.position}),Object(j.jsxs)("div",{className:A.a.job__description,children:[Object(j.jsx)("span",{children:e.job.postedAt})," \xa0 \u2022 \xa0 ",Object(j.jsx)("span",{children:e.job.contract})," \xa0 \u2022 \xa0 ",Object(j.jsx)("span",{children:e.job.location})]})]})}),Object(j.jsx)("div",{className:A.a.job__tags,children:o})]})},C=[{id:1,company:"Photosnap",logo:"photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],D=function(){var e=C.map((function(e){return Object(j.jsx)(T,{job:e},e.id)}));return Object(j.jsx)(m,{className:_.a["job-list"],children:e})},M=function(){return Object(j.jsxs)("main",{className:i.a["job-listings"],children:[Object(j.jsx)(b,{}),Object(j.jsx)(D,{})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(o){var t=o.getCLS,a=o.getFID,n=o.getFCP,c=o.getLCP,s=o.getTTFB;t(e),a(e),n(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),k()}],[[18,1,2]]]);
//# sourceMappingURL=main.f4c5ed4d.chunk.js.map