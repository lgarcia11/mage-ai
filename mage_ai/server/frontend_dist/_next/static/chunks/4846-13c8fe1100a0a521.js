"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4846],{65597:function(e,n,t){t.d(n,{c:function(){return u},f:function(){return s}});var r=t(9518),i=t(23831),o=t(49125),c=t(73942),l=t(37391),u=r.default.div.withConfig({displayName:"Tablestyle__TableContainerStyle",componentId:"sc-8ammqd-0"})(["position:relative;overflow:auto;"," ",""],l.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")})),s=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-1"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||i.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},97496:function(e,n,t){var r=t(82394),i=t(12757),o=t(12691),c=t.n(o),l=t(34376),u=t.n(l),s=t(82684),a=t(83455),d=t(60328),p=t(47999),f=t(93461),h=t(67971),g=t(10919),b=t(47409),j=t(86673),x=t(54283),m=t(17903),O=t(19711),v=t(41374),Z=t(23831),w=t(73942),y=t(10503),_=t(65597),C=t(93348),P=t(49125),I=t(19395),k=t(96510),E=t(28598);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e){var n=e.isLoadingCancelPipeline,t=e.onCancel,r=e.onSuccess,o=e.pipelineRun,c=o.pipeline_schedule_id,l=o.pipeline_schedule_token,u=o.pipeline_schedule_type,f=o.status,g=b.V.RUNNING===f&&n,m=(0,a.Db)(C.Xm.API===u&&l?v.ZP.pipeline_runs.pipeline_schedules.useCreateWithParent(c,l):v.ZP.pipeline_runs.pipeline_schedules.useCreate(c),{onSuccess:function(e){return(0,k.wD)(e,{callback:function(){r()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),I=(0,i.Z)(m,1)[0],D=(0,s.useState)(),N=D[0],S=D[1],A=(0,s.useCallback)((function(){S(!1),I({pipeline_run:{execution_date:null===o||void 0===o?void 0:o.execution_date,pipeline_schedule_id:null===o||void 0===o?void 0:o.pipeline_schedule_id,pipeline_uuid:null===o||void 0===o?void 0:o.pipeline_uuid,variables:null===o||void 0===o?void 0:o.variables}})}),[o]),R=(0,s.useCallback)((function(){S(!1),t(L(L({},o),{},{status:b.V.CANCELLED}))}),[o]);return(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)(d.Z,{backgroundColor:g&&Z.Z.accent.yellow,beforeIcon:b.V.INITIAL!==f&&(0,E.jsxs)(E.Fragment,{children:[b.V.COMPLETED===f&&(0,E.jsx)(y.Jr,{size:2*P.iI}),[b.V.FAILED,b.V.CANCELLED].includes(f)&&(0,E.jsx)(y.Py,{inverted:b.V.CANCELLED===f,size:2*P.iI}),[b.V.RUNNING].includes(f)&&(0,E.jsx)(x.Z,{color:n?Z.Z.status.negative:Z.Z.monotone.white,small:!0})]}),borderRadius:w.D7,danger:b.V.FAILED===f,default:b.V.INITIAL===f,loading:!o,onClick:function(){return S(!0)},padding:"6px",primary:b.V.RUNNING===f&&!n,warning:b.V.CANCELLED===f,children:g?"Canceling":b.D[f]}),(0,E.jsx)(p.Z,{onClickOutside:function(){return S(!1)},open:N,children:(0,E.jsxs)(_.f,{children:[[b.V.RUNNING,b.V.INITIAL].includes(f)&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(O.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,E.jsx)(j.Z,{mb:1}),(0,E.jsxs)(O.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,E.jsx)("br",{}),"the current pipeline run."]}),(0,E.jsx)(O.ZP,{}),(0,E.jsx)(j.Z,{mt:1,children:(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(d.Z,{onClick:function(){R(),A()},children:"Retry run"}),(0,E.jsx)(j.Z,{ml:1}),(0,E.jsx)(d.Z,{onClick:R,children:"Cancel run"})]})})]}),[b.V.CANCELLED,b.V.FAILED,b.V.COMPLETED].includes(f)&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(O.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",f]}),(0,E.jsx)(j.Z,{mb:1}),(0,E.jsx)(O.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,E.jsx)(j.Z,{mb:1}),(0,E.jsx)(d.Z,{onClick:A,children:"Retry run"})]})]})})]})}n.Z=function(e){var n=e.fetchPipelineRuns,t=e.onClickRow,r=e.pipelineRuns,o=e.selectedRun,l=(0,a.Db)((function(e){return v.ZP.pipeline_runs.useUpdate(e.id)({pipeline_run:e})}),{onSuccess:function(e){return(0,k.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),s=(0,i.Z)(l,2),p=s[0],x=s[1].isLoading,Z=[null,1,2,1,1,null],C=[{uuid:"Status"},{uuid:"Pipeline UUID"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return t&&(Z.push(null),C.push({label:function(){return""},uuid:"action"})),(0,E.jsx)(_.c,{minHeight:30*P.iI,children:0===r.length?(0,E.jsx)(j.Z,{px:3,py:1,children:(0,E.jsx)(O.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No runs available"})}):(0,E.jsx)(m.Z,{columnFlex:Z,columns:C,isSelectedRow:function(e){return r[e].id===(null===o||void 0===o?void 0:o.id)},onClickRow:t,rows:r.map((function(e,i){var o=e.block_runs_count,l=e.completed_at,s=e.execution_date,a=e.id,m=e.pipeline_schedule_id,v=e.pipeline_schedule_name,Z=e.pipeline_uuid,_=e.status,C=[];return C=i>0&&r[i-1].execution_date===e.execution_date&&r[i-1].pipeline_schedule_id===e.pipeline_schedule_id?[(0,E.jsx)(j.Z,{ml:1,children:(0,E.jsxs)(h.Z,{alignItems:"center",children:[(0,E.jsx)(y.TT,{size:2*P.iI,useStroke:!0}),(0,E.jsx)(d.Z,{borderRadius:w.D7,notClickable:!0,padding:"6px",children:(0,E.jsx)(O.ZP,{muted:!0,children:b.D[_]})})]})},"row_status"),(0,E.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:Z},"row_pipeline_uuid"),(0,E.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_date_retry"),(0,E.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_trigger_retry"),(0,E.jsx)(c(),{as:"/pipelines/".concat(Z,"/runs/").concat(a),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,E.jsx)(g.Z,{bold:!0,muted:!0,children:"See block runs (".concat(o,")")})},"row_block_runs"),(0,E.jsx)(O.ZP,{monospace:!0,muted:!0,children:l&&(0,I.eI)(l).toISOString().split(".")[0]||"-"},"row_completed"),(0,E.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(Z,"/logs?pipeline_run_id[]=").concat(a))},children:(0,E.jsx)(y.B4,{default:!0,size:2*P.iI})},"row_logs")]:[(0,E.jsx)(N,{isLoadingCancelPipeline:x,onCancel:p,onSuccess:n,pipelineRun:e},"row_retry_button"),(0,E.jsx)(O.ZP,{default:!0,monospace:!0,children:Z},"row_pipeline_uuid"),(0,E.jsx)(O.ZP,{default:!0,monospace:!0,children:s&&(0,I.eI)(s).toISOString().split(".")[0]||"-"},"row_date"),(0,E.jsx)(c(),{as:"/pipelines/".concat(Z,"/triggers/").concat(m),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,E.jsx)(g.Z,{bold:!0,sameColorAsText:!0,children:v})},"row_trigger"),(0,E.jsx)(c(),{as:"/pipelines/".concat(Z,"/runs/").concat(a),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,E.jsx)(g.Z,{bold:!0,sameColorAsText:!0,children:"See block runs (".concat(o,")")})},"row_block_runs"),(0,E.jsx)(O.ZP,{default:!0,monospace:!0,children:l&&(0,I.eI)(l).toISOString().split(".")[0]||"-"},"row_completed"),(0,E.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(Z,"/logs?pipeline_run_id[]=").concat(a))},children:(0,E.jsx)(y.B4,{default:!0,size:2*P.iI})},"row_item_13")],t&&C.push((0,E.jsx)(f.Z,{flex:1,justifyContent:"flex-end",children:(0,E.jsx)(y._Q,{default:!0,size:2*P.iI})})),C})),uuid:"pipeline-runs"})})}},19395:function(e,n,t){t.d(n,{IJ:function(){return a},Vx:function(){return p},eI:function(){return d},gU:function(){return h},tL:function(){return f},vJ:function(){return g}});var r,i,o=t(82394),c=t(92083),l=t.n(c);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,i=n.started_at,c=n.status,u=null;i&&r&&(u=l()(r).valueOf()-l()(i).valueOf());return s(s({},e),{},(0,o.Z)({},t,{runtime:u,status:c}))}),{})}function d(e){if(!e)return null;var n=new Date(l()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}function p(e){return d(e).toISOString().split(".")[0]}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(i||(i={}));var f=(r={},(0,o.Z)(r,i.DAY,86400),(0,o.Z)(r,i.HOUR,3600),(0,o.Z)(r,i.MINUTE,60),(0,o.Z)(r,i.SECOND,1),r);function h(e){var n=i.SECOND,t=e;return e%86400===0?(t/=86400,n=i.DAY):e%3600===0?(t/=3600,n=i.HOUR):e%60===0&&(t/=60,n=i.MINUTE),{time:t,unit:n}}function g(e,n){return e*f[n]}},51099:function(e,n,t){t(82684);var r=t(60328),i=t(67971),o=t(86673),c=t(10503),l=t(73899),u=t(49125),s=t(28598);n.Z=function(e){var n=e.page,t=e.maxPages,a=e.onUpdate,d=e.totalPages,p=[],f=t;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),g=n-h;n+h>=d?(g=d-f+2,f-=2):n-h<=0?(g=0,f-=2):(f-=4,g=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+g}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(i.Z,{alignItems:"center",children:[(0,s.jsx)(r.Z,{disabled:0===n,onClick:function(){return a(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*u.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){e!==n&&a(e)},notClickable:e===n,backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return a(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*u.iI,stroke:"#AEAEAE"})})]})})}},47409:function(e,n,t){t.d(n,{D:function(){return c},V:function(){return o}});var r,i=t(82394),o=t(66050).V,c=(r={},(0,i.Z)(r,o.CANCELLED,"Cancelled"),(0,i.Z)(r,o.COMPLETED,"Done"),(0,i.Z)(r,o.FAILED,"Failed"),(0,i.Z)(r,o.INITIAL,"Ready"),(0,i.Z)(r,o.RUNNING,"Running"),r)},93348:function(e,n,t){t.d(n,{U5:function(){return l},Xm:function(){return i},Z4:function(){return u},fq:function(){return c}});var r,i,o=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(i||(i={}));var c,l,u=(r={},(0,o.Z)(r,i.API,(function(){return"API"})),(0,o.Z)(r,i.EVENT,(function(){return"event"})),(0,o.Z)(r,i.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(c||(c={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(l||(l={}))},55378:function(e,n,t){var r=t(82394),i=t(26304),o=t(82684),c=t(9518),l=t(69898),u=t(31969),s=t(49125),a=t(28598),d=["beforeIcon","children","label","placeholder"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],l.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",s.iI,s.iI,2.5*s.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).inverted,";\n  ")})),g=function(e,n){var t=e.beforeIcon,r=e.children,o=e.label,c=e.placeholder,u=(0,i.Z)(e,d);return(0,a.jsx)(l.Z,f(f({},u),{},{beforeIcon:t,input:(0,a.jsxs)(h,f(f({},u),{},{children:[(o||c)&&(0,a.jsx)("option",{disabled:!0,selected:!0,value:"",children:o||c}),r]})),label:o,placeholder:c,ref:n,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};n.Z=o.forwardRef(g)},33766:function(e,n,t){t.d(n,{u:function(){return a}});var r=t(12757),i=t(82394),o=t(34376),c=t.n(o),l=t(59e3);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.replaceParams,o=t.pushHistory,u=i?{}:(0,l.iV)();n=window.location.pathname;var a=o?c().push:c().replace,d=s(s({},u),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete d[t]}));var p=(0,l.uM)(d);p.length>=1&&(p="?".concat(p));var f="".concat(n.split("?")[0]).concat(p);return a(c().router.pathname,f,{shallow:!0})}}}]);