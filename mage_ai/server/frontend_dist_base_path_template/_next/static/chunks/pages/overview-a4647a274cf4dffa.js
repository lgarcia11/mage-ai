(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1709],{62072:function(e,n,t){"use strict";function r(e){return null==e?void 0:e[0]}function i(e){return null==e?void 0:e[1]}t.d(n,{l8:function(){return r},xf:function(){return i}})},59309:function(e,n,t){"use strict";t.d(n,{ZP:function(){return l}});var r=t(12759),i=t(27500),o=t(82610),c=t(34812),u=t(77944),a={expand:r.Z,diverging:i.Z,none:o.Z,silhouette:c.Z,wiggle:u.Z};Object.keys(a);function l(e){return e&&a[e]||a.none}},18246:function(e,n,t){"use strict";t.d(n,{ZP:function(){return l}});var r=t(39586),i=t(25516),o=t(54164),c=t(8512),u=t(2010),a={ascending:r.Z,descending:i.Z,insideout:o.Z,none:c.Z,reverse:u.Z};Object.keys(a);function l(e){return e&&a[e]||a.none}},64657:function(e,n,t){"use strict";t.d(n,{CD:function(){return u},NU:function(){return o},a_:function(){return r},hu:function(){return c}});var r,i=t(44897);!function(e){e.BLOCK_RUNS="block_runs",e.BLOCK_RUNTIME="block_runtime",e.PIPELINE_RUNS="pipeline_runs"}(r||(r={}));var o=[i.Z.accent.warning,i.Z.background.success,i.Z.accent.negative,i.Z.content.active,i.Z.interactive.linkPrimary],c=["cancelled","completed","failed","initial","running"],u=-50},24491:function(e,n,t){"use strict";t.d(n,{i:function(){return p},p:function(){return l}});var r=t(82394),i=t(75582),o=t(61556),c=t(57653);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e,n){if(!e)return[];var t=Object.entries(e).reduce((function(e,n){var t=(0,i.Z)(n,2),r=(t[0],t[1].data),o={};return Object.entries(r).forEach((function(n){var t=(0,i.Z)(n,2),r=t[0],c=t[1],u={};r in e&&(u=e[r]);var l={};Object.entries(c).forEach((function(e){var n,t=(0,i.Z)(e,2),r=t[0],o=t[1],c=null!==(n=u)&&void 0!==n&&n[r]?u[r]:0;l[r]=c+o})),o[r]=a(a({},u),l)})),a(a({},e),o)}),{});return n.map((function(e){return a({date:e},t[e]||{})}))},d=o.E.reduce((function(e,n){return a(a({},e),{},(0,r.Z)({},n,0))}),{}),s=new Set(o.E),p=function(e,n){var t;if(!e)return{groupedPipelineRunData:[],pipelineRunCountByPipelineType:{},totalPipelineRunCount:0,ungroupedPipelineRunData:[]};var o=(t={},(0,r.Z)(t,c.qL.INTEGRATION,a({},d)),(0,r.Z)(t,c.qL.PYSPARK,{}),(0,r.Z)(t,c.qL.PYTHON,a({},d)),(0,r.Z)(t,c.qL.STREAMING,a({},d)),t),u=0,l=Object.entries(e).reduce((function(e,n){var t=(0,i.Z)(n,2),r=(t[0],t[1].data),c={},l={};return Object.entries(r).forEach((function(n){var t=(0,i.Z)(n,2),r=t[0],d=t[1],p={},f={};r in e.grouped?(p=a({},e.grouped[r]),c[r]=a({},p)):c[r]={},r in e.ungrouped&&(f=a({},e.ungrouped[r]));var h={},b={};Object.entries(d).forEach((function(n){var t=(0,i.Z)(n,2),d=t[0],g=t[1];"null"===d||null===d||(r in e.grouped&&d in e.grouped[r]&&(p[d]=a({},e.grouped[r][d])),h[d]={},Object.entries(g).forEach((function(e){var n,t,r,c=(0,i.Z)(e,2),a=c[0],l=c[1],g=null!==(n=p)&&void 0!==n&&null!==(t=n[d])&&void 0!==t&&t[a]?p[d][a]:0;h[d][a]=g+l;var m=null!==(r=f)&&void 0!==r&&r[a]?f[a]:0;b[a]=null!==b&&void 0!==b&&b[a]?b[a]+l:m+l,s.has(a)&&(o[d][a]=(o[d][a]||0)+l),u+=l})),c[r][d]=a(a({},p[d]),h[d]),l[r]=a(a({},f),b))}))})),{grouped:a(a({},e.grouped),c),ungrouped:a(a({},e.ungrouped),l)}}),{grouped:{},ungrouped:{}}),p=[],f=[];return n.forEach((function(e){p.push(a({date:e},l.grouped[e]||{})),f.push(a({date:e},l.ungrouped[e]||{}))})),{groupedPipelineRunData:p,pipelineRunCountByPipelineType:o,totalPipelineRunCount:u,ungroupedPipelineRunData:f}}},53998:function(e,n,t){"use strict";t.d(n,{Z:function(){return q}});var r=t(26304),i=t(82394),o=t(21831),c=t(82684),u=t(84969),a=t(90948),l=t(63588),d=t.n(l),s=t(75823),p=t(29989),f=t(62072),h=t(53989),b=t(49894),g=t(18246),m=t(59309),y=t(65743),v=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function j(e){var n=e.data,t=e.className,r=e.top,i=e.left,o=e.x,u=e.y0,a=void 0===u?f.l8:u,l=e.y1,j=void 0===l?f.xf:l,Z=e.xScale,O=e.yScale,P=e.color,_=e.keys,w=e.value,k=e.order,C=e.offset,I=e.children,T=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,v),E=(0,s.Z)();_&&E.keys(_),w&&(0,b.Z)(E.value,w),k&&E.order((0,g.ZP)(k)),C&&E.offset((0,m.ZP)(C));var N=E(n),D=(0,h.Z)(Z),S=N.map((function(e,n){var t=e.key;return{index:n,key:t,bars:e.map((function(n,r){var i=(O(a(n))||0)-(O(j(n))||0),c=O(j(n)),u="bandwidth"in Z?Z(o(n.data)):Math.max((Z(o(n.data))||0)-D/2);return{bar:n,key:t,index:r,height:i,width:D,x:u||0,y:c||0,color:P(e.key,r)}}))}}));return I?c.createElement(c.Fragment,null,I(S)):c.createElement(p.Z,{className:d()("visx-bar-stack",t),top:r,left:i},S.map((function(e){return e.bars.map((function(n){return c.createElement(y.Z,x({key:"bar-stack-"+e.index+"-"+n.index,x:n.x,y:n.y,height:n.height,width:n.width,fill:n.color},T))}))})))}var Z=t(67778),O=t(17066),P=t(29179),_=t(65376),w=t(48072),k=t(98677),C=t(84181),I=t(24903),T=t(55485),E=t(26226),N=t(30160),D=t(94035),S=t(44897),L=t(42631),R=t(95363),M=t(70515),B=t(48277),A=t(79221),H=t(28598),U=["height","width","xAxisLabel","yAxisLabel"];function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e){var n=e.backgroundColor,t=e.colors,r=e.data,i=e.getXValue,c=(e.getYValue,e.height),l=e.keys,d=e.margin,s=e.numYTicks,f=e.showLegend,h=e.tooltipLeftOffset,b=void 0===h?0:h,g=e.width,m=e.xLabelFormat,y=e.yLabelFormat,v=(0,P.Z)(),x=v.hideTooltip,T=v.showTooltip,E=v.tooltipData,D=v.tooltipLeft,M=v.tooltipOpen,U=v.tooltipTop,F=g-(d.left+d.right),V=c-(d.bottom+d.top),q=r.reduce((function(e,n){var t=n,r=l.reduce((function(e,n){return Number(t[n])&&(e+=Number(t[n])),e}),0);return e.push(r),e}),[]),z=(0,k.Z)({domain:r.map(i),padding:.4,range:[0,F],round:!1}),G=(0,C.Z)({domain:[0,Math.max.apply(Math,(0,o.Z)(q))],range:[V,0],round:!0}),X=null;M&&E&&(X=E.bar.data[E.key],Number.isSafeInteger(X)&&(X=(0,B.uf)(X)));var K=(0,I.Z)({domain:l,range:t});return(0,H.jsxs)("div",{style:{position:"relative",zIndex:2},children:[(0,H.jsxs)("svg",{height:c,width:g,children:[(0,H.jsx)("rect",{fill:n||S.Z.background.chartBlock,height:c,rx:14,width:g,x:0,y:0}),(0,H.jsx)(Z.Z,{height:V,left:d.left,scale:G,stroke:"black",strokeOpacity:.2,top:d.top,width:F}),(0,H.jsx)(p.Z,{left:d.left,top:d.top,children:(0,H.jsx)(j,{color:K,data:r,keys:l,value:function(e,n){return e[n]||0},x:i,xScale:z,yScale:G,children:function(e){return e.map((function(e){return e.bars.map((function(n){return(0,H.jsx)("rect",{fill:n.color,height:n.height,onMouseLeave:x,onMouseMove:function(e){var t=(0,w.Z)(e),r=n.x+n.width/2+b;T({tooltipData:n,tooltipLeft:r,tooltipTop:(null===t||void 0===t?void 0:t.y)+10})},width:n.width,x:n.x,y:n.y},"bar-stack-".concat(e.index,"-").concat(n.index))}))}))}})}),(0,H.jsx)(u.Z,{hideTicks:!0,left:d.left,numTicks:s,scale:G,stroke:S.Z.content.muted,tickFormat:function(e){return y?y(e):(0,A.P5)(e)},tickLabelProps:function(){return{fill:S.Z.content.muted,fontFamily:R.ry,fontSize:11,textAnchor:"end",transform:"translate(0,2.5)"}},top:d.top}),(0,H.jsx)(a.Z,{hideTicks:!0,left:d.left,scale:z,stroke:S.Z.content.muted,tickFormat:m,tickLabelProps:function(){return{fill:S.Z.content.muted,fontFamily:R.ry,fontSize:11,textAnchor:"middle"}},top:V+d.top})]}),f&&(0,H.jsx)("div",{style:{display:"flex",fontSize:"14px",justifyContent:"center",position:"absolute",top:d.top/2-10,width:"100%"},children:(0,H.jsx)(O.Z,{direction:"row",labelMargin:"0 15px 0 0",scale:K})}),M&&E&&(0,H.jsxs)(_.Z,{left:D,style:Y(Y({},_.j),{},{backgroundColor:S.Z.background.page,borderRadius:"".concat(L.TR,"px"),padding:".3rem .4rem"}),top:U,children:[(0,H.jsx)(N.ZP,{bold:!0,color:K(E.key),children:E.key}),(0,H.jsx)(N.ZP,{children:X}),(0,H.jsx)(N.ZP,{children:i(E.bar.data)})]})]})}var q=function(e){var n=e.height,t=e.width,i=e.xAxisLabel,o=e.yAxisLabel,c=(0,r.Z)(e,U);return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)("div",{style:{height:n,marginBottom:M.iI,width:t},children:[o&&(0,H.jsx)(T.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,H.jsx)(D.Z,{children:(0,H.jsx)(N.ZP,{center:!0,muted:!0,small:!0,children:o})})}),(0,H.jsx)("div",{style:{height:n,width:o?0===t?t:t-28:t},children:(0,H.jsx)(E.Z,{children:function(e){var n=e.height,t=e.width;return(0,H.jsx)(V,Y(Y({},c),{},{height:n,width:t}))}})}),i&&(0,H.jsx)("div",{style:{paddingLeft:o?36:0,paddingTop:4},children:(0,H.jsx)(N.ZP,{center:!0,muted:!0,small:!0,children:i})})]})})}},81066:function(e,n,t){"use strict";t.d(n,{B:function(){return p}});var r=t(82394),i=t(46732),o=t(93369),c=t(72473),u=t(8059),a=t(70515),l=t(28598);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,r=e.isLoading,d=e.label,f=e.menuItems,h=e.onClick,b=e.onClickCallback;return(0,l.jsx)(i.Z,{disableKeyboardShortcuts:!0,items:f,onClickCallback:b,onClickOutside:b,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,l.jsx)(o.ZP,s(s({},p),{},{background:u.eW,beforeElement:(0,l.jsx)(c.mm,{size:2.5*a.iI}),loading:r,onClick:function(e){e.preventDefault(),null===h||void 0===h||h()},uuid:"shared/AddButton/index",children:d}))})}},46568:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(33591)),c=t(28598),u=["children","fullHeight","gutter","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,a=e.style,d=void 0===a?{}:a,s=(0,i.Z)(e,u),p=l({},d);return r&&(p.paddingLeft=r,p.paddingRight=p.paddingLeft),t&&(p.height="100%"),(0,c.jsx)(o.Col,l(l({},s),{},{style:p,children:n}))}},82682:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(33591),u=t(28598),a=["children","fullHeight","gutter","justifyContent","style"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,l=e.justifyContent,s=e.style,p=void 0===s?{}:s,f=(0,i.Z)(e,a),h=d({},p);return r&&(h.marginLeft=-1*r,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,u.jsx)(c.Row,d(d({},f),{},{justifyContent:l,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:r,key:n})}))}))}},94542:function(e,n,t){"use strict";t.d(n,{J:function(){return o},X:function(){return c}});var r=t(46568),i=t(82682),o=r.Z,c=i.Z},29241:function(e,n,t){"use strict";var r=t(38626),i=t(44897),o=r.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:3;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||i.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||i.Z.borders).medium,";\n  ")}));n.Z=o},61556:function(e,n,t){"use strict";t.d(n,{E:function(){return o},h:function(){return r}});t(57653);var r,i=t(41143);!function(e){e.BLOCK_RUN_COUNT="block_run_count",e.BLOCK_RUN_TIME="block_run_time",e.PIPELINE_RUN_COUNT="pipeline_run_count",e.PIPELINE_RUN_TIME="pipeline_run_time"}(r||(r={}));var o=[i.V.RUNNING,i.V.COMPLETED,i.V.FAILED]},96348:function(e,n,t){"use strict";t.d(n,{g:function(){return m},Z:function(){return y}});var r=t(82684),i=t(38626),o=t(44897),c=t(42631),u=t(47041),a=t(70515),l=1.5*a.iI,d=1.5*a.iI,s=i.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-13p7y8j-0"})(["border-radius:","px;overflow:hidden;width:100%;"," "," "," ",""],c.n_,(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}),(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.page,";\n    border: ").concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((e.theme||o.Z).shadow.frame,";\n  ")}),(function(e){return e.noBackground&&"\n    background-color: transparent;\n  "}),(function(e){return e.noBoxShadow&&"\n    box-shadow: none;\n  "})),p=i.default.div.withConfig({displayName:"indexstyle__RowContainerStyle",componentId:"sc-13p7y8j-1"})(["overflow:auto;border-bottom-left-radius:","px;border-bottom-right-radius:","px;"," "," "," ",""],c.n_,c.n_,u.w5,(function(e){return e.maxHeight>0&&"\n    max-height: ".concat(e.maxHeight,"px;\n  ")}),(function(e){return e.minHeight>0&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")}),(function(e){return e.scrollable&&"\n    margin-bottom: ".concat(a.iI,"px;\n    overflow-y: auto;\n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),f=i.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-13p7y8j-2"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;",""],c.n_,c.n_,l,2*a.iI,(function(e){return"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")})),h=i.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-13p7y8j-3"})(["padding:","px ","px;"," "," "," "," "," ",""],d,2*a.iI,(function(e){return"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).borders.medium2,";\n  ")}),(function(e){return e.sameColorBorders&&"\n    border-bottom-color: ".concat((e.theme||o.Z).interactive.defaultBorder,";\n  ")}),(function(e){return e.noHorizontalPadding&&"\n    padding-left: 0;\n    padding-right: 0;\n  "}),(function(e){return e.condensed&&"\n    padding-top: ".concat(9,"px;\n    padding-bottom: ").concat(9,"px;\n  ")}),(function(e){return e.secondary&&"\n    background-color: ".concat((e.theme.background||o.Z.background).row2,";\n  ")}),(function(e){return e.last&&e.noBorder&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom: none;\n  ")})),b=i.default.div.withConfig({displayName:"indexstyle__FooterStyle",componentId:"sc-13p7y8j-4"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;padding:","px ","px;",""],c.n_,c.n_,l,2*a.iI,(function(e){return"\n    border-top: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).borders.medium2,";\n  ")})),g=t(28598),m=h;var y=function(e){var n=e.alternating,t=e.children,i=e.footer,o=e.header,c=e.maxHeight,u=e.minHeight,a=e.noBackground,l=e.noBoxShadow,d=e.sameColorBorders,h=e.scrollable,m=e.width,y=[].concat(t).filter((function(e){return null!==e}));return(0,g.jsxs)(s,{noBackground:a,noBoxShadow:l,width:m,children:[o&&(0,g.jsx)(f,{children:o}),(0,g.jsx)(p,{maxHeight:c,minHeight:u,scrollable:h,children:r.Children.map(y,(function(e,t){return e&&r.cloneElement(e,{last:t===y.length-1,sameColorBorders:d,secondary:n&&t%2===1})}))}),i&&(0,g.jsx)(b,{children:i})]})}},17380:function(e,n,t){"use strict";t.d(n,{i:function(){return d}});t(82684);var r=t(38626),i=(t(97618),t(55485),t(48670),t(38276),t(47329)),o=t.n(i);o().node,o().node,o().node.isRequired,o().bool,o().string.isRequired;t(30160);var c=t(70987),u=t(95363),a=t(70515),l=t(42631),d=(t(28598),"tab");r.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(e){return e.containerWidthPercentage&&"\n    width: ".concat(e.containerWidthPercentage,"%;\n  ")})),r.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],l.BG,l.BG,6*a.iI,(function(e){return e.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(e){return e.active&&"\n    border-bottom: ".concat(a.cd,"px solid;\n    border-color: ").concat((e.theme.interactive||c.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),r.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(e){return e.bold&&"\n    font-family: ".concat(u.nF,";\n  ")}),(function(e){return e.fullWidth&&"\n    justify-content: center;\n  "}),(function(e){return!e.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((e.theme.content||c.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}))},98941:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ye}});var r=t(77837),i=t(75582),o=t(82394),c=t(38860),u=t.n(c),a=t(69864),l=t(82684),d=t(34376),s=t(92083),p=t.n(s),f=t(52749),h=t(81066),b=t(53998),g=t(39440),m=t(60523),y=t(90299),v=t(94629),x=t(55485),j=t(85854),Z=t(48670),O=t(97618),P=t(38276),_=t(30160),w=t(38626),k=t(44897),C=t(42631),I=t(70515),T=12.5*I.iI,E=8*I.iI,N=5*I.iI,D=3*I.iI,S=w.default.div.withConfig({displayName:"indexstyle__TileContainerStyle",componentId:"sc-c3nc3q-0"})(["padding:","px;border-radius:","px;height:","px;width:","px;"," ",""],2.5*I.iI,C.TR,T,T,(function(e){return"\n    background-color: ".concat((e.theme||k.Z).background.chartBlock,";\n  ")}),(function(e){return e.compact&&"\n    height: ".concat(E,"px;\n    width: ").concat(E,"px;\n  ")})),L=t(28598);var R=function(e){var n=e.Icon,t=e.compact,r=e.label;return(0,L.jsx)(S,{compact:t,children:(0,L.jsxs)(x.ZP,{alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,L.jsx)(n,{size:t?D:N}),(0,L.jsx)(P.Z,{mb:"4px"}),(0,L.jsx)(_.ZP,{bold:!0,small:t,children:r})]})})},M=t(12468),B=w.default.div.withConfig({displayName:"indexstyle__MetricsSummaryContainerStyle",componentId:"sc-nu65g1-0"})(["width:100%;padding:","px;border-radius:","px;",""],2*I.iI,C.n_,(function(e){return"\n    border: ".concat(C.YF,"px ").concat(C.M8," ").concat((e.theme||k.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((e.theme||k.Z).shadow.frame,";\n  ")})),A=w.default.div.withConfig({displayName:"indexstyle__MetricContainerStyle",componentId:"sc-nu65g1-1"})(["display:flex;flex:1;align-items:center;justify-content:space-between;",""],(function(e){return e.includeLeftBorder&&"\n    @media (min-width: 1200px) {\n      padding-left: 24px;\n      border-left: ".concat(C.YF,"px ").concat(C.M8," ").concat((e.theme||k.Z).interactive.defaultBorder,";\n    }\n  ")})),H=t(57653),U=t(94542),F=t(41143),Y={muted:!0,size:t(72191)._k,widthFitContent:!0},V=t(81728),q=t(48277),z=t(79221),G=t(70320),X=t(86735);function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var J=function(e){var n=e.pipelineRunCountByPipelineType,t=(0,G.q)(),r=(0,l.useMemo)((function(){if(!n)return[];var e=JSON.parse(JSON.stringify(n)),t=e[H.qL.PYTHON]||{};return Object.entries(e[H.qL.PYSPARK]||{}).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0],o=n[1];t[r]?t[r]+=o:t[r]=o})),e[H.qL.PYTHON]=t,delete e[H.qL.PYSPARK],(0,X.mr)(Object.entries(e).filter((function(e){var n=(0,i.Z)(e,2),t=(n[0],n[1]);return 0!==Object.keys(t).length})))}),[n]),o=(0,l.useMemo)((function(){return t?(0,L.jsx)(P.Z,{ml:"4px",children:(0,L.jsx)(M.Z,W(W({},Y),{},{label:"Please note that these metrics are based on UTC time."}))}):null}),[t]);return(0,L.jsxs)(B,{children:[(0,L.jsxs)(x.ZP,{alignItems:"center",children:[(0,L.jsx)(_.ZP,{bold:!0,large:!0,children:"Pipeline run metrics"}),o]}),(0,L.jsx)(P.Z,{mb:2}),(0,L.jsx)(U.X,{style:{gap:"16px"},children:r.map((function(e,n){var t=(0,i.Z)(e,2),o=t[0],c=t[1];return(0,L.jsxs)(A,{includeLeftBorder:0!==n,children:[(0,L.jsx)(R,{Icon:H.Mj[o],label:H.G7[o]}),(0,X.mr)(Object.entries(c)).map((function(e,n){var t=(0,i.Z)(e,2),r=t[0],o=t[1];return(0,L.jsx)(P.Z,{px:1,children:(0,L.jsxs)(O.Z,{flexDirection:"column",children:[(0,L.jsx)(_.ZP,{children:(0,V.kC)(r)}),(0,L.jsx)(_.ZP,{bold:!0,danger:r===F.V.FAILED&&o>0,title:(0,q.uf)(o),xlarge:!0,children:(0,z.P5)(o,{maxFractionDigits:1,minAmount:1e3})})]})},"".concat(r,"_").concat(n))})),(0,L.jsx)(P.Z,{pr:n!==r.length-1?2:0})]},"".concat(o,"_metric"))}))})]})},$=t(29241),Q=t(65956),ee=t(55729),ne=t(93808),te=t(82359),re=t(4190),ie=t(12691),oe=t.n(ie),ce=t(71180),ue=t(96348),ae=t(68899),le=t(17380),de=t(3917),se=t(69419);function pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?pe(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var he=40*I.iI,be=40*I.iI;var ge=function(e){var n=e.pipelineType,t=e.pipelineRuns,r=void 0===t?[]:t,i=(0,d.useRouter)(),o=(0,se.iV)(),c=(null===o||void 0===o?void 0:o[le.i])||de.vk.TODAY,u=(0,G.q)(),a=n===H.LM,s=a?H.LM:H.G7[n],p=H.Mj[n],f=r.length,h=0===f?"":"(".concat(f,")"),b=(0,l.useMemo)((function(){return u?(0,L.jsx)(P.Z,{ml:"4px",children:(0,L.jsx)(M.Z,fe(fe({},Y),{},{label:"The pipeline run failures are displayed in local time.",maxWidth:24*I.iI,widthFitContent:!1}))}):null}),[u]);return(0,L.jsx)(ue.Z,{footer:(0,L.jsx)(x.ZP,{alignItems:"center",justifyContent:"center",children:(0,L.jsx)(oe(),{as:"/pipeline-runs?status=failed",href:"/pipeline-runs",passHref:!0,children:(0,L.jsx)(Z.Z,{sameColorAsText:!0,children:"View more"})})}),header:(0,L.jsxs)(x.ZP,{alignItems:"center",children:[(0,L.jsx)(ce.ZP,{beforeIcon:(0,L.jsx)(p,{size:2.5*I.iI}),compact:!0,notClickable:!0,children:(0,V.kC)(s)}),(0,L.jsx)(P.Z,{ml:2}),(0,L.jsxs)(_.ZP,{bold:!0,children:["Latest ",a?"":"".concat((0,V.wX)(s)," "),"pipeline run failures ",h]}),b]}),maxHeight:he,minHeight:be,children:0===f?(0,L.jsx)(x.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,L.jsx)(P.Z,{px:5,py:10,children:(0,L.jsxs)(x.ZP,{alignItems:"center",flexDirection:"column",children:[(0,L.jsx)(ae.Hn,{imageUrl:"".concat(i.basePath,"/images/blocks/grey_block.webp")}),(0,L.jsx)(P.Z,{mb:3}),(0,L.jsxs)(_.ZP,{large:!0,children:["No ",a?"":"".concat((0,V.wX)(s)," "),"pipeline run failures for ",de.s8[c]]})]})})}):r.map((function(e){var n=e.created_at,t=e.id,r=e.pipeline_uuid;return(0,L.jsx)(ue.g,{children:(0,L.jsxs)(x.ZP,{alignItems:"center",children:[(0,L.jsx)(oe(),{as:"/pipelines/".concat(r),href:"/pipelines/[pipeline]",passHref:!0,children:(0,L.jsx)(Z.Z,{monospace:!0,sameColorAsText:!0,small:!0,children:r})}),(0,L.jsx)(_.ZP,{monospace:!0,small:!0,children:"\xa0>\xa0"}),(0,L.jsx)(oe(),{as:"/pipelines/".concat(r,"/runs/").concat(t),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,L.jsxs)(Z.Z,{danger:!0,monospace:!0,sameColorAsText:!0,small:!0,children:["Run created on\xa0",u?(0,de.XG)(n,u):n]})})]})},"pipeline_run_".concat(t))}))})},me=t(35686),ye=t(98464),ve=t(35058),xe=t(64657),je=t(44425),Ze=t(75399),Oe=t(23780),Pe=t(46684),_e=t(61556),we=t(32929),ke=t(72473),Ce={Icon:ke.LE,label:function(){return(0,V.kC)(de.s8[de.vk.TODAY])},uuid:de.vk.TODAY},Ie={Icon:ke.ks,label:function(){return(0,V.kC)(de.s8[de.vk.WEEK])},uuid:de.vk.WEEK},Te={Icon:ke.zE,label:function(){return(0,V.kC)(de.s8[de.vk.MONTH])},uuid:de.vk.MONTH},Ee={Icon:ke.G6,label:function(){return"Dashboard"},uuid:"Dashboard"},Ne=[Ce,Ie,Te],De=t(24491),Se=t(65458),Le=t(15610),Re=t(72619),Me=t(89538);function Be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Be(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Be(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var He={mt:2,mx:3},Ue={refreshInterval:6e4,revalidateOnFocus:!1};function Fe(){var e,n,t,r=(0,l.useRef)(null),c=(0,se.iV)(),u=(0,d.useRouter)(),s=(0,l.useRef)(null),O=(0,l.useState)(Ce),w=O[0],C=O[1],T=(0,l.useState)(!1),E=T[0],N=T[1],D=(0,l.useState)(null),S=D[0],R=D[1],B=null===w||void 0===w?void 0:w.uuid,A=(0,l.useMemo)((function(){return Ne.concat(Ee)}),[]),U=(0,ye.Z)(w);(0,l.useEffect)((function(){var e=c[le.i];e&&C(A.find((function(n){return n.uuid===e})))}),[A,c,w,U]);var z=(0,l.useMemo)((function(){return(0,de.jV)(B,{isoString:!0})}),[B]),K=(0,l.useMemo)((function(){return{group_by_pipeline_type:1,start_time:z}}),[z]),W=me.ZP.monitor_stats.detail(_e.h.PIPELINE_RUN_COUNT,K,Ae({},Ue)),ne=W.data,ie=W.isValidating,oe=W.mutate,ce=me.ZP.pipeline_runs.list({_limit:50,include_pipeline_type:1,"order_by[]":"created_at desc",start_timestamp:(0,de.A5)(z),status:F.V.FAILED},Ae({},Ue)).data,ue=(0,l.useMemo)((function(){return((null===ce||void 0===ce?void 0:ce.pipeline_runs)||[]).filter((function(e){return null!==e.pipeline_type}))}),[null===ce||void 0===ce?void 0:ce.pipeline_runs]),ae=(0,l.useMemo)((function(){return(0,X.vM)(ue,(function(e){return e.pipeline_type}))}),[ue]),pe=ae.integration,fe=void 0===pe?[]:pe,he=ae.python,be=void 0===he?[]:he,ke=ae.streaming,Ie=void 0===ke?[]:ke;(0,l.useEffect)((function(){U&&(null===w||void 0===w?void 0:w.uuid)!==(null===U||void 0===U?void 0:U.uuid)&&oe()}),[oe,w,U]);var Te,Be=(0,l.useMemo)((function(){return(0,de.Y_)(de.yD[B]+1)}),[B]),Fe=(0,l.useMemo)((function(){var e,n=(null===ne||void 0===ne||null===(e=ne.monitor_stat)||void 0===e?void 0:e.stats)||{};return(0,De.i)(n,Be)}),[null===ne||void 0===ne||null===(e=ne.monitor_stat)||void 0===e?void 0:e.stats,Be]),Ye=Fe.pipelineRunCountByPipelineType,Ve=Fe.totalPipelineRunCount,qe=Fe.ungroupedPipelineRunData,ze=(0,l.useMemo)((function(){return(0,de.Ro)(de.yD[B],{endDateOnly:B===de.vk.TODAY})}),[B]),Ge=(Te=function(e){return u.push("/pipelines/[pipeline]/edit","/pipelines/".concat(e,"/edit"))},(0,a.Db)(me.ZP.pipelines.useCreate(),{onSuccess:function(e){return(0,Re.wD)(e,{callback:function(e){var n=e.pipeline.uuid;null===Te||void 0===Te||Te(n)},onErrorCallback:function(e,n){return R({errors:n,response:e})}})}})),Xe=(0,i.Z)(Ge,2),Ke=Xe[0],We=Xe[1].isLoading,Je=me.ZP.projects.list(),$e=Je.data,Qe=Je.mutate,en=(0,l.useMemo)((function(){var e;return null===$e||void 0===$e||null===(e=$e.projects)||void 0===e?void 0:e[0]}),[$e]),nn=(0,l.useMemo)((function(){var e;return(0,G.h)(null===en||void 0===en||null===(e=en.features)||void 0===e?void 0:e[te.d.LOCAL_TIMEZONE])}),[null===en||void 0===en?void 0:en.features]),tn=(0,Me.dd)((function(){return(0,L.jsx)(Oe.BC,{children:(0,L.jsx)(m.Z,{contained:!0,onClickCustomTemplate:function(e){Ke({pipeline:{custom_template_uuid:null===e||void 0===e?void 0:e.template_uuid,name:(0,V.Y6)()}}).then((function(){cn()}))},showBreadcrumbs:!0,tabs:[we.A2]})})}),{},[],{background:!0,uuid:"browse_templates"}),rn=(0,i.Z)(tn,2),on=rn[0],cn=rn[1],un=(0,Me.dd)((function(e){var n=e.cancelButtonText,t=(e.header,e.onCancel),r=e.onSaveSuccess;return(0,L.jsx)(Oe.BC,{children:(0,L.jsx)(ee.Z,{cancelButtonText:n,contained:!0,header:(0,L.jsx)(P.Z,{mb:I.HN,children:(0,L.jsxs)(Q.Z,{children:[(0,L.jsx)(_.ZP,{warning:!0,children:"You need to add an OpenAI API key to your project before you can generate pipelines using AI."}),(0,L.jsx)(P.Z,{mt:1,children:(0,L.jsxs)(_.ZP,{warning:!0,children:["Read ",(0,L.jsx)(Z.Z,{href:"https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key",openNewWindow:!0,children:"OpenAI\u2019s documentation"})," to get your API key."]})})]})}),onCancel:function(){null===t||void 0===t||t(),dn()},onSaveSuccess:function(e){Qe(),dn(),null===r||void 0===r||r(e)}})})}),{},[Qe],{background:!0,uuid:"configure_project"}),an=(0,i.Z)(un,2),ln=an[0],dn=an[1],sn=(0,Me.dd)((function(){return(0,L.jsx)(Oe.BC,{children:(0,L.jsx)(f.Z,{createPipeline:Ke,isLoading:We,onClose:hn})})}),{},[Ke,We],{background:!0,disableClickOutside:!0,disableCloseButton:!0,uuid:"AI_modal"}),pn=(0,i.Z)(sn,2),fn=pn[0],hn=pn[1],bn=(0,l.useMemo)((function(){return(0,Se.d)(Ke,{showAIModal:function(){null!==en&&void 0!==en&&en.openai_api_key?fn():ln({onSaveSuccess:function(){fn()}})},showBrowseTemplates:on})}),[Ke,en,fn,on,ln]),gn=(0,l.useMemo)((function(){return(0,L.jsx)(h.Z,{addButtonMenuOpen:E,addButtonMenuRef:s,isLoading:We,label:"New pipeline",menuItems:bn,onClick:function(){return N((function(e){return!e}))},onClickCallback:function(){return N(!1)}})}),[E,We,bn]),mn=(0,l.useMemo)((function(){return nn?(0,L.jsx)(P.Z,{ml:"4px",children:(0,L.jsx)(M.Z,Ae(Ae({},Y),{},{label:"Please note that these counts are based on UTC time."}))}):null}),[nn]),yn=(0,l.useMemo)((function(){var e,n,t,r,i,c,u="Pipelines",a=(0,V.kE)("".concat(u,"_overview_dashboard_").concat((0,V.Lo)())),l="Trigger active status",d=(0,V.kE)("".concat(l,"_overview_dashboard_").concat((0,V.Lo)())),s="Pipeline run status",p=(0,V.kE)("".concat(s,"_overview_dashboard_").concat((0,V.Lo)())),f="Pipeline runs daily",h=(0,V.kE)("".concat(f,"_overview_dashboard_").concat((0,V.Lo)())),b="Completed pipeline runs daily",g=(0,V.kE)("".concat(b,"_overview_dashboard_").concat((0,V.Lo)())),m="Failed pipeline runs daily",y=(0,V.kE)("".concat(m,"_overview_dashboard_").concat((0,V.Lo)())),v="Running pipelines",x=(0,V.kE)("".concat(v,"_overview_dashboard_").concat((0,V.Lo)())),j={type:Ze.XO.PIPELINE_SCHEDULES},Z={type:Ze.XO.PIPELINE_RUNS},O={configuration:(e={},(0,o.Z)(e,ve.eN,["execution_date"]),(0,o.Z)(e,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(e,ve.Yg,ve.aE.DAY),(0,o.Z)(e,"chart_type",ve.oV.TIME_SERIES_LINE_CHART),e),data_source:Z,type:je.tf.CHART};return{blocks:(c={},(0,o.Z)(c,a,{configuration:(n={},(0,o.Z)(n,ve.eN,["type"]),(0,o.Z)(n,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"uuid"}]),(0,o.Z)(n,ve.$1,ve.MP.DESCENDING),(0,o.Z)(n,"chart_style",ve.JT.HORIZONTAL),(0,o.Z)(n,"chart_type",ve.oV.BAR_CHART),n),data_source:{type:Ze.XO.PIPELINES},name:u,type:je.tf.CHART,uuid:a}),(0,o.Z)(c,d,{configuration:(t={},(0,o.Z)(t,ve.eN,["status"]),(0,o.Z)(t,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(t,ve.$1,ve.MP.DESCENDING),(0,o.Z)(t,"chart_type",ve.oV.BAR_CHART),t),data_source:j,name:l,type:je.tf.CHART,uuid:d}),(0,o.Z)(c,p,{configuration:(r={},(0,o.Z)(r,ve.eN,["status"]),(0,o.Z)(r,ve.bE,[{aggregation:ve.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(r,ve.$1,ve.MP.DESCENDING),(0,o.Z)(r,"chart_style",ve.JT.HORIZONTAL),(0,o.Z)(r,"chart_type",ve.oV.BAR_CHART),r),data_source:Z,name:s,type:je.tf.CHART,uuid:p}),(0,o.Z)(c,h,Ae(Ae({},O),{},{name:f,uuid:h})),(0,o.Z)(c,g,Ae(Ae({},O),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(F.V.COMPLETED,"']\n"),name:b,uuid:g})),(0,o.Z)(c,y,Ae(Ae({},O),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(F.V.FAILED,"']\n"),name:m,uuid:y})),(0,o.Z)(c,x,{configuration:(i={},(0,o.Z)(i,ve.eN,["backfill_id","completed_at","created_at","execution_date","executor_type","id","pipeline_schedule_id","pipeline_uuid","started_at","status"]),(0,o.Z)(i,"chart_type",ve.oV.TABLE),i),content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(F.V.RUNNING,"']\n"),data_source:Z,name:v,type:je.tf.CHART,uuid:x}),c),layout:[[{block_uuid:a,width:1},{block_uuid:d,width:1}],[{block_uuid:p,width:1},{block_uuid:h,width:2}],[{block_uuid:g,width:1},{block_uuid:y,width:1}],[{block_uuid:x,width:1}]]}}),[]);return(0,L.jsxs)(v.Z,{errors:S,setErrors:R,title:"Overview",uuid:"overview/index",children:[(0,L.jsx)($.Z,{backgroundColor:k.Z.background.panel,ref:r,children:(0,L.jsx)(P.Z,{py:2,children:(0,L.jsxs)(x.ZP,{alignItems:"center",children:[(0,L.jsx)(P.Z,{ml:3,children:gn}),(0,L.jsx)(y.Z,{onClickTab:function(e){var n=e.uuid;(0,Le.u7)((0,o.Z)({},le.i,n),{replaceParams:!0})},regularSizeText:!0,selectedTabUUID:B,tabs:A})]})})}),Ee.uuid===(null===w||void 0===w?void 0:w.uuid)&&(0,L.jsx)(g.Z,{leftOffset:9*I.iI,pageBlockLayoutTemplate:yn,topOffset:Pe.Mz+(null===r||void 0===r||null===(n=r.current)||void 0===n||null===(t=n.getBoundingClientRect())||void 0===t?void 0:t.height),uuid:"overview/dashboard"}),Ee.uuid!==(null===w||void 0===w?void 0:w.uuid)&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(P.Z,{mx:3,my:2,children:[(0,L.jsxs)(j.Z,{level:4,children:[B===de.vk.TODAY&&"".concat((0,V.kC)(de.vk.TODAY)," (UTC): ").concat(ze),B!==de.vk.TODAY&&"".concat((0,V.kC)(de.s8[B])," (UTC): ").concat(ze)]}),(0,L.jsx)(P.Z,{mt:2,children:ie?(0,L.jsx)(P.Z,{mx:2,my:11,children:(0,L.jsx)(re.Z,{inverted:!0})}):(0,L.jsx)(J,{pipelineRunCountByPipelineType:Ye})}),(0,L.jsxs)(P.Z,{mt:2,children:[(0,L.jsx)(P.Z,{ml:2,children:(0,L.jsxs)(x.ZP,{alignItems:"center",children:[(0,L.jsxs)(_.ZP,{bold:!0,large:!0,children:[ie?"--":(0,q.uf)(Ve)," total pipeline runs"]}),mn]})}),(0,L.jsx)(P.Z,{mt:1,children:(0,L.jsx)(b.Z,{backgroundColor:k.Z.background.panel,colors:xe.NU,data:qe,getXValue:function(e){return e.date},height:200,keys:xe.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:xe.CD,xLabelFormat:function(e){return p()(e).format("MMM DD")}})})]})]}),(0,L.jsx)(P.Z,Ae(Ae({},He),{},{children:(0,L.jsxs)(x.ZP,{alignItems:"center",justifyContent:"center",children:[(0,L.jsx)(ge,{pipelineRuns:ue,pipelineType:H.LM}),(0,L.jsx)(P.Z,{ml:2}),(0,L.jsx)(ge,{pipelineRuns:be,pipelineType:H.qL.PYTHON})]})})),(0,L.jsx)(P.Z,Ae(Ae({},He),{},{children:(0,L.jsxs)(x.ZP,{alignItems:"center",justifyContent:"center",children:[(0,L.jsx)(ge,{pipelineRuns:fe,pipelineType:H.qL.INTEGRATION}),(0,L.jsx)(P.Z,{ml:2}),(0,L.jsx)(ge,{pipelineRuns:Ie,pipelineType:H.qL.STREAMING})]})})),(0,L.jsx)(P.Z,{mb:2})]})]})}Fe.getInitialProps=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var Ye=(0,ne.Z)(Fe)},48277:function(e,n,t){"use strict";t.d(n,{$P:function(){return l},JI:function(){return o},VJ:function(){return a},fD:function(){return c},uf:function(){return i},vN:function(){return u}});var r=t(75582),i=function(e){var n=String(e).split("."),t=(0,r.Z)(n,2),i=t[0],o=t[1];return"".concat(i.replace(/\B(?=(\d{3})+(?!\d))/g,",")).concat(o?".".concat(o):"")};function o(e){var n=Math.floor(Date.now()/1e3);return e>0?n-e:n}function c(e){return(e>>>0).toString(2)}function u(e,n){return String(BigInt(e)+BigInt(n))}function a(e,n){return String(BigInt(e)-BigInt(n))}function l(e){return parseInt(e,2)}},56655:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview",function(){return t(98941)}])}},function(e){e.O(0,[2678,3662,1154,844,8224,6639,1124,341,1751,5896,2714,1821,2631,4783,4267,600,8487,8264,7858,5499,3932,722,5810,1769,1550,3004,9264,976,9440,1952,9774,2888,179],(function(){return n=56655,e(e.s=n);var n}));var n=e.O();_N_E=n}]);