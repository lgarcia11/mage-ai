(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5810],{7432:function(n,e,o){var t={"./Active4D.json":[266,266],"./All Hallows Eve.json":[4450,4450],"./Amy.json":[88849,8849],"./Birds of Paradise.json":[78097,8097],"./Blackboard.json":[88018,6115],"./Brilliance Black.json":[73835,3835],"./Brilliance Dull.json":[6507,6507],"./Chrome DevTools.json":[22508,2508],"./Clouds Midnight.json":[49566,9566],"./Clouds.json":[57951,7951],"./Cobalt.json":[80826,826],"./Cobalt2.json":[98256,8256],"./Dawn.json":[76958,6958],"./Dominion Day.json":[89307,9307],"./Dracula.json":[33453,3453],"./Dreamweaver.json":[19363,9363],"./Eiffel.json":[82481,2481],"./Espresso Libre.json":[44776,4776],"./GitHub Dark.json":[792,792],"./GitHub Light.json":[61450,1450],"./GitHub.json":[10739,739],"./IDLE.json":[67947,7947],"./Katzenmilch.json":[81240,1240],"./Kuroir Theme.json":[4388,4388],"./LAZY.json":[25164,5164],"./MagicWB (Amiga).json":[76443,6443],"./Merbivore Soft.json":[99361,9361],"./Merbivore.json":[86042,6042],"./Monokai Bright.json":[14883,4883],"./Monokai.json":[34454,4454],"./Night Owl.json":[60261,261],"./Nord.json":[59785,9785],"./Oceanic Next.json":[58920,8920],"./Pastels on Dark.json":[38901,8901],"./Slush and Poppies.json":[26434,6434],"./Solarized-dark.json":[36116,6116],"./Solarized-light.json":[5008,5008],"./SpaceCadet.json":[20440,440],"./Sunburst.json":[68018,8018],"./Textmate (Mac Classic).json":[15824,5824],"./Tomorrow-Night-Blue.json":[81150,1150],"./Tomorrow-Night-Bright.json":[8762,8762],"./Tomorrow-Night-Eighties.json":[82545,2545],"./Tomorrow-Night.json":[99855,9855],"./Tomorrow.json":[34092,4092],"./Twilight.json":[93898,3898],"./Upstream Sunburst.json":[98807,8807],"./Vibrant Ink.json":[89927,9927],"./Xcode_default.json":[64042,4042],"./Zenburnesque.json":[33467,3467],"./iPlastic.json":[88277,8277],"./idleFingers.json":[5104,5104],"./krTheme.json":[9633,9633],"./monoindustrial.json":[15729,5729],"./themelist.json":[79437,9437]};function i(n){if(!o.o(t,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],i=e[0];return o.e(e[1]).then((function(){return o.t(i,19)}))}i.keys=function(){return Object.keys(t)},i.id=7432,n.exports=i},89209:function(n,e,o){"use strict";o.d(e,{M4:function(){return d},S0:function(){return s},S_:function(){return c},Yn:function(){return f},rW:function(){return l}});var t=o(82394),i=o(21831),r=o(75582);function a(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function u(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){(0,t.Z)(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function c(n,e){return Object.entries(e).map((function(e){var o=(0,r.Z)(e,2),t=o[0],i=o[1];return n.languages.registerCompletionItemProvider(t,{provideCompletionItems:i(n)})}))}function s(n){var e=function(n){var e="[\\w.]+",o=["import ".concat(e," as ").concat(e),"import ".concat(e),"from ".concat(e," import ").concat(e," as ").concat(e),"from ".concat(e," import ").concat(e)],t=new RegExp("(".concat(o.join("|"),")"),"g");return(0,i.Z)(n.matchAll(t)).map((function(n){return n[1]}))}(n),o="[\\w.]+",r=["from ".concat(o," import ").concat(o," as (").concat(o,")"),"from ".concat(o," import (").concat(o,")"),"import ".concat(o," as (").concat(o,")"),"import (".concat(o,")")],a=new RegExp("(".concat(r.join("|"),")"));return e.reduce((function(n,e){var o=e.match(a);if(!o)return n;var r=(0,i.Z)(o),c=r[2],s=r[3],l=r[4],d=r[5],f=c||s||l||d;return u(u({},n),{},(0,t.Z)({},f,e))}),{})}function l(n,e){var o=n;e&&(o=o.split(" as ".concat(e))[0]);var t="[\\w.]+",a=["from ".concat(t," import (").concat(t,")"),"import (".concat(t,")")],u=new RegExp("(".concat(a.join("|"),")"),"g"),c=(0,i.Z)(o.matchAll(u))[0];if(c){var s=(0,r.Z)(c,4),l=s[2],d=s[3];return l||d}}function d(n,e){return function(n,e){return n.split("\n")[e.startLineNumber-1]}(n,e).slice(0,e.startColumn-1)}function f(n){var e=new RegExp("([\\w_]+)[ ]*=[ ]*([\\w_]+)","g");return(0,i.Z)(n.matchAll(e)).map((function(n){return{assignmentValue:n[2],variableName:n[1]}}))}},89678:function(n,e,o){"use strict";o.d(e,{Ep:function(){return a},KT:function(){return s},Nk:function(){return c},aU:function(){return u}});var t=o(38626),i=o(44897),r=o(95363),a=2,u=21,c=t.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-w2hta3-0"})(["font-family:",";"," ",""],r.ry,(function(n){return"number"===typeof n.padding&&n.padding>0&&"\n    padding-top: ".concat(n.padding,"px;\n    background-color: ").concat((n.theme.background||i.Z.background).codeTextarea,";\n  ")}),(function(n){return n.hideDuplicateMenuItems&&'\n    /*\n     * The (n + 10) assumes a specific number of items in the block editor context\n     * menu. This includes "Run selected block", "Change All Occurrences", "Cut",\n     * "Copy", "Paste", "Command Palette", and 3 dividers. The 10th item from the\n     * bottom and higher are hidden to avoid duplicate shortcut items in the\n     * context menu.\n     */\n    .monaco-menu li.action-item:nth-last-child(n + 10) {\n      display: none;\n    }\n  '})),s=t.default.div.withConfig({displayName:"indexstyle__PlaceholderStyle",componentId:"sc-w2hta3-1"})(["padding-left:67px;position:absolute;z-index:1;"])},75810:function(n,e,o){"use strict";o.d(e,{Z:function(){return j}});var t=o(85202),i=o(66639),r=o(82684),a=o(4383),u=o(44425),c=o(30160),s=o(98464),l=o(95363),d=o(61896),f=o(89678),m=o(89209);function h(n,e,o){o.forEach((function(n){e.addAction(n)}))}var g=o(75582),p={"all-hallows-eve":"All Hallows Eve","birds-of-paradise":"Birds of Paradise","brilliance-black":"Brilliance Black","brilliance-dull":"Brilliance Dull","chrome-devtools":"Chrome DevTools","clouds-midnight":"Clouds Midnight","espresso-libre":"Espresso Libre","kuroir-theme":"Kuroir Theme","magicwb--amiga-":"MagicWB (Amiga)","merbivore-soft":"Merbivore Soft","monokai-bright":"Monokai Bright","night-owl":"Night Owl","oceanic-next":"Oceanic Next","pastels-on-dark":"Pastels on Dark","slush-and-poppies":"Slush and Poppies","solarized-dark":"Solarized-dark","solarized-light":"Solarized-light","textmate--mac-classic-":"Textmate (Mac Classic)","tomorrow-night":"Tomorrow-Night","tomorrow-night-blue":"Tomorrow-Night-Blue","tomorrow-night-bright":"Tomorrow-Night-Bright","tomorrow-night-eighties":"Tomorrow-Night-Eighties","upstream-sunburst":"Upstream Sunburst","vibrant-ink":"Vibrant Ink","xcode-default":"Xcode_default",active4d:"Active4D",amy:"Amy",blackboard:"Blackboard",clouds:"Clouds",cobalt:"Cobalt",dawn:"Dawn",dreamweaver:"Dreamweaver",eiffel:"Eiffel",github:"GitHub",idle:"IDLE",idlefingers:"idleFingers",iplastic:"iPlastic",katzenmilch:"Katzenmilch",krtheme:"krTheme",lazy:"LAZY",merbivore:"Merbivore",monoindustrial:"monoindustrial",monokai:"Monokai",spacecadet:"SpaceCadet",sunburst:"Sunburst",tomorrow:"Tomorrow",twilight:"Twilight",zenburnesque:"Zenburnesque"};var v=o(37529),b=o(28598);i._m.config({paths:{vs:"".concat((0,a.XF)(),"/monaco-editor/min/vs")}});var j=function(n){var e=n.autocompleteProviders,a=n.autoHeight,j=n.autoSave,w=n.block,k=n.fontSize,C=void 0===k?d.i3:k,y=n.height,S=n.language,E=n.onChange,O=n.onContentSizeChangeCallback,x=n.onDidChangeCursorPosition,D=n.onMountCallback,T=n.onSave,M=n.padding,N=n.placeholder,P=n.readOnly,_=n.selected,B=(n.setSelected,n.setTextareaFocused),Z=n.shortcuts,z=n.showLineNumbers,A=void 0===z||z,F=n.tabSize,I=void 0===F?4:F,L=n.textareaFocused,R=n.theme,K=void 0===R?"twilight":R,H=n.value,W=n.width,U=void 0===W?"100%":W,G=(0,r.useRef)(null),V=(0,r.useRef)(null),q=(0,r.useRef)(null),X=(0,r.useState)([]),Y=X[0],Q=X[1],J=(0,r.useState)(null),$=J[0],nn=J[1],en=(0,r.useState)(!1),on=en[0],tn=en[1],rn=(0,r.useState)(null),an=rn[0],un=rn[1],cn=(0,r.useCallback)((function(n){un((function(e){return e!==K&&function(n){return new Promise((function(e){Promise.all([i._m.init(),o(7432)("./".concat(p[n],".json"))]).then((function(o){var t=(0,g.Z)(o,2),i=t[0],r=t[1];r.colors["editor.background"]="#000000",r.colors["editor.foreground"]="#FFFFFF",i.editor.defineTheme(n,r),e(!0)})).catch((function(){e(!1)}))}))}(K).then((function(e){if(e)return n.editor.setTheme(K),K})),e}))}),[K]),sn=(0,r.useCallback)((function(n){n.languages.typescript.javascriptDefaults.setEagerModelSync(!0),nn(n),cn(n)}),[cn]),ln=(0,r.useCallback)((function(n,e){G.current=n,V.current=e;var o=[];null===Z||void 0===Z||Z.forEach((function(t){o.push(t(e,n))})),T&&o.push((0,v.e)(e,(function(){T(n.getValue())}))),h(0,n,o),n.getModel().updateOptions({tabSize:I}),a&&!y&&(n._domElement.style.height="".concat(((H||"").split("\n").length+f.Ep)*f.aU,"px")),n.onDidFocusEditorWidget((function(){null===B||void 0===B||B(!0)})),n.onDidContentSizeChange((function(e){var o=e.contentHeight,t=e.contentHeightChanged;a&&t&&(n._domElement.style.height="".concat(o+2*f.aU,"px")),O&&(null===O||void 0===O||O())})),_&&L&&setTimeout((function(){n.focus()}),1),x&&n.onDidChangeCursorPosition((function(e){var o=e.position.lineNumber,t=n._domElement.getBoundingClientRect(),i=t.height,r=t.top,a=n.getTopForLineNumber(o);x({editorRect:{height:Number(i),top:Number(r)},position:{lineNumberTop:a}})})),tn(!0),null===D||void 0===D||D()}),[a,y,O,x,D,T,_,tn,B,Z,I,L,H]);(0,r.useEffect)((function(){var n;return j&&T&&(n=setInterval((function(){T(G.current.getValue())}),5e3)),function(){j&&n&&clearInterval(n)}}),[j,G,T]);var dn=(0,s.Z)(_),fn=(0,s.Z)(L);return(0,r.useEffect)((function(){null!==G&&void 0!==G&&G.current&&(_&&L?setTimeout((function(){G.current.focus()}),1):t.findDOMNode(G.current._domElement).getElementsByClassName("inputarea")[0].blur())}),[G,_,dn,L,fn]),(0,r.useEffect)((function(){if(null!==V&&void 0!==V&&V.current&&null!==G&&void 0!==G&&G.current){var n=[];null===Z||void 0===Z||Z.forEach((function(e){n.push(e(null===V||void 0===V?void 0:V.current,null===G||void 0===G?void 0:G.current))})),h(null===V||void 0===V||V.current,null===G||void 0===G?void 0:G.current,n)}}),[null===w||void 0===w?void 0:w.downstream_blocks,null===w||void 0===w?void 0:w.upstream_blocks]),(0,r.useEffect)((function(){return function(){Y.map((function(n){return n.dispose()}))}}),[Y]),(0,r.useEffect)((function(){$&&e&&(0===Y.length&&L||!fn&&L?Q((0,m.S_)($,e)):fn&&!L&&Y.map((function(n){return n.dispose()})))}),[e,Y,$,L,fn]),(0,b.jsxs)(f.Nk,{hideDuplicateMenuItems:!0,padding:M,style:{display:on?null:"none"},children:[N&&!(null!==H&&void 0!==H&&H.length)&&(0,b.jsx)(f.KT,{children:(0,b.jsx)(c.ZP,{monospace:!0,muted:!0,children:N})}),(0,b.jsx)(i.ZP,{beforeMount:sn,height:y,language:S||"python",onChange:function(n){null===E||void 0===E||E(n)},onMount:ln,options:{domReadOnly:P,fontFamily:l.Vp,fontLigatures:!0,fontSize:C,hideCursorInOverviewRuler:!0,lineNumbers:A?"on":"off",minimap:{enabled:!1},overviewRulerBorder:!1,readOnly:P,renderLineHighlightOnlyWhenFocus:!0,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1,vertical:"hidden"},useShadowDOM:!1,wordBasedSuggestions:!1,wordWrap:(null===w||void 0===w?void 0:w.type)===u.tf.MARKDOWN?"on":"off"},theme:an||"vs-dark",value:H,width:U}),(0,b.jsx)("div",{ref:q})]})}},37529:function(n,e,o){"use strict";function t(n,e){return{contextMenuGroupId:"navigation",contextMenuOrder:1.5,id:"saveCode",keybindingContext:null,keybindings:[n.KeyMod.CtrlCmd|n.KeyCode.KeyS],label:"Save",precondition:null,run:function(n){e()}}}function i(n,e){return{contextMenuGroupId:"navigation",contextMenuOrder:1.5,id:"executeCode",keybindingContext:null,keybindings:[n.KeyMod.CtrlCmd|n.KeyCode.Enter],label:"Run selected block",precondition:null,run:function(){return e()}}}o.d(e,{Q:function(){return i},e:function(){return t}})}}]);