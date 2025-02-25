import { createRequire as createImportMetaRequire } from "module"; import.meta.require ||= (id) => createImportMetaRequire(import.meta.url)(id);
var In=(n)=>structuredClone(n);var bn=(n)=>(...t)=>t.length>=n.length?n(...t):(...e)=>p(n)(...t,...e),p=(n)=>bn(n);var v=(n,t)=>{const e=[...t],o=e.splice(0,n);return e.length>n?[o,...v(n,e)]:[o,e].filter((r)=>r.length!==0)},On=p(v);var mn=(n)=>(t)=>t.chain(n);var Tn=(...n)=>(...t)=>n.reduceRight((e,o)=>[o.call(null,...e)],t)[0];var jn=p((n,t,e)=>(...o)=>{return(typeof n==="function"?n(...o):n)?t(...o):e(...o)});var ln=(...n)=>{return n[0]},hn=(n)=>(...t)=>{return t[n]},En=(...n)=>{return n[n.length-1]};var X=(n)=>{if(n===null||n===void 0)return!0;return!Object.keys(n).length};var nn=(n,t)=>{if(!X(n)){const[e]=n;return t?.hasOwnProperty(e)?nn(n.slice(1),t[e]):void 0}return t},Fn=p(nn);var Kn=p((n,t,e)=>{return(typeof n==="function"?n(e):n)?t(e):e});var an=(n)=>{return Boolean(n&&(Object.getPrototypeOf(n)===null||n.constructor===Object)&&n!==null)};var Cn=p((n,t)=>{return typeof n==="function"?!n(t):!n});var Mn=(n)=>{return n.join()};var Rn=(...n)=>(t)=>{return console.log(...n,t),t};var An=(n)=>(t)=>{return t.map(n)};var Y=p((n,t)=>({...n,...t}));var sn=(...n)=>(...t)=>n.reduce((e,o)=>[o.call(null,...e)],t)[0];var Bn=(n)=>(t)=>({...t,...n(t)});var Pn=(n)=>(t)=>{return n(t),t},Vn=(n)=>async(t)=>{return await n(t),Promise.resolve(t)};var _n=(n,t)=>t.reduce((e,o)=>({...e,[o]:n[o]}),{});var wn=(n,t,e)=>{if(e===null||e===void 0)return[];const o=[...e],[r]=o.splice(n,1);return o.splice(t,0,r),o},Hn=p(wn);var qn=(n)=>[...new Set(n)];class tn{static keys=p((n,t)=>{if(typeof t!=="object")return["Error:Non Object Provided"];return Object.keys(t).map(n)});static values=p((n,t)=>{if(typeof t!=="object")return["Error:Non Object Provided"];return Object.values(t).map(n)});static entries=p((n,t)=>{if(typeof t!=="object")return[["Error","Non Object Provided"]];return Object.entries(t).map(n)});static mergeObjects=p((n,t)=>{if(typeof t!=="object"||typeof n!=="object")return{Error:"Non Object Provided"};return Y(t,n)});static fromEntries=(n)=>{try{return Object.fromEntries(n)}catch(t){return{Error:t.message}}}}var Jn=(n)=>(t)=>t.concat(n);var Gn=p((n,t)=>t.every(n));var Qn=p((n,t)=>t.filter(n));var Xn=(n)=>(t)=>t.flat(n);var Yn=p((n,t)=>t.find(n));var $n=p((n,t)=>t.includes(n));var Wn=(n)=>n&&typeof n==="object"?Object.keys(n).length:0;var Zn=(n,t)=>(e)=>e.reduce(n,t);var Un=p((n,t)=>t.some(n));var zn=(n)=>(t)=>t.sort(n);var R=(n)=>({map:(t)=>R(t(n)),join:()=>n,chain:(t)=>R(n).map(t).join()});var a=p((n,t,e)=>({passesChecker:()=>t(e),map:(o)=>a(n,t,e).passesChecker()?a(n,t,o(e)):a(n,t,e),join:()=>a(n,t,e).passesChecker()?e:n(e),chain:(o)=>a(n,t,e).map(o).join()}));var C=(n)=>({map:()=>C(n),join:()=>n,chain:()=>C(n).join()}),en=C;var Nn=p((n,t,e,o)=>{return n(o)?R(t(o)):C(new Error(e))});class A{value;constructor(n){this.value=n}static of(n){return new A(n)}map(n){return A.of(n(this.value))}join(){return this.value}chain(n){return this.map(n).join()}}class s{value;constructor(n){this.value=n}static of(n){return new s(n)}map(n){return s.of(n(this.value))}join(){return this.value}chain(n){return this.map(n).join()}}var Ln=p((n,t,e)=>{switch(e.constructor){case A:return n(e.join());case s:return t(e.join());default:return en(e)}});var on=(n)=>typeof n!=="undefined"&&n!==null;var m=(n)=>typeof n==="string";var rn=(n,t,e=!1)=>{if(e)t=t.toLowerCase();for(let o=0;o<n.length;o++)if(t.includes(e?n[o].toLowerCase():n[o]))return!0;return!1};var T,Ho=(n,t="Etc/UTC")=>{T=n,T.tz?.setDefault(t)},qo="YYYY-MM-DD HH:mm:ss",cn={"MM/DD/YYYY":/^\d{2}\/\d{2}\/\d{4}$/,"M/DD/YYYY":/^\d{1}\/\d{2}\/\d{4}$/,"MM/D/YYYY":/^\d{2}\/\d{1}\/\d{4}$/,"M/D/YYYY":/^\d{1}\/\d{1}\/\d{4}$/,"MM/DD/YY":/^\d{2}\/\d{2}\/\d{2}$/,"M/D/YY":/^\d{1}\/\d{1}\/\d{2}$/,"M/DD/YY":/^\d{1}\/\d{2}\/\d{2}$/,"MM/D/YY":/^\d{2}\/\d{1}\/\d{2}$/,"YYYY/MM/DD":/^\d{4}\/\d{2}\/\d{2}$/,"YYYY/M/DD":/^\d{4}\/\d{1}\/\d{2}$/,"YYYY/MM/D":/^\d{4}\/\d{2}\/\d{1}$/,"MM-DD-YYYY":/^\d{2}-\d{2}-\d{4}$/,"M-DD-YYYY":/^\d{1}-\d{2}-\d{4}$/,"MM-D-YYYY":/^\d{2}-\d{1}-\d{4}$/,"M-D-YYYY":/^\d{1}-\d{1}-\d{4}$/,"MM-DD-YY":/^\d{2}-\d{2}-\d{2}$/,"M-D-YY":/^\d{1}-\d{1}-\d{2}$/,"M-DD-YY":/^\d{1}-\d{2}-\d{2}$/,"MM-D-YY":/^\d{2}-\d{1}-\d{2}$/,"YYYY-MM-DD":/^\d{4}-\d{2}-\d{2}$/,"YYYY-M-DD":/^\d{4}-\d{1}-\d{2}$/,"YYYY-MM-D":/^\d{4}-\d{2}-\d{1}$/,"YYYY-MM-DD HH:mm:ss":/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,"MMM D, YYYY":/^[a-zA-Z]{3,5} \d{1,2}, \d{4}$/,"MMMM D, YYYY":/^[a-zA-Z]{6,} \d{1,2}, \d{4}$/,"YYYY-MM-DDTHH:mm:ssZ":/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/},$=(n,t="")=>{let e;if(!T.isMoment(n))e=T(n,fn(n));else e=n;if(e.isValid()){if(!t)return e;return e.format(t)}return""},fn=(n)=>{if(!m(n))return;return n=n.trim(),Object.keys(cn).find((t)=>cn[t].test(n))},B=(n,t="",e="")=>{let o;if(m(n))o=T.utc(n,t||fn(n));else o=T.utc(n);return $(o,e)},Jo=(n,t="")=>{const e=T.tz(n||new Date,"America/New_York");return $(e,t)},Go=(n,t="")=>{const e=T(n);return $(e,t)},P=p((n,t,e)=>B(e).diff(B(t),n)),Qo=P("minutes"),Dn=P("hours"),Xo=P("days"),pn=(n,t=new Date)=>{if(T)return Dn(t,n);else return Math.abs(n.getTime()-t.getTime())/3600000},Yo=(n,t,e=new Date)=>{const o=B(e).day();if(B(t).day()>o)t=B(t).add(48,"hours");const c=P(n,t,e),f=n==="days"?c:P("days",t,e),x=Math.floor(f/7)*2;if(x===0)return c;if(n==="days")return c-x;if(n==="hours"){const i=x*24;return c-i}if(n==="minutes"){const i=x*24*60;return c-i}return c};var y={disableSameMessagesLimit:!1,redactionText:"HIDDEN",secretProps:Object.keys(process.env||{}).filter((n)=>n.includes("PASSWORD")||n.includes("SECRET")),messagesPerHour:2,priorMessages:{}},Sn=(n)=>{return y.secretProps.forEach((t)=>{n.replaceAll(process.env[t]||"",y.redactionText)}),n},W=(n)=>{if(!n)return n;if(m(n))return Sn(n);const t=JSON.parse(JSON.stringify(n));if(t.auth)t.auth=y.redactionText;if(t.headers?.authorization)t.headers.authorization=y.redactionText;if(t.response?.config)delete t.response.config;const e=W(JSON.stringify(t));return JSON.parse(e)},Z=(n,t="default")=>{if(!n)return!0;if(y.disableSameMessagesLimit)return!0;if(!y.priorMessages[t])y.priorMessages[t]=[];if(!y.priorMessages[t][n])return y.priorMessages[t][n]={date:new Date,count:1},!0;if(pn(y.priorMessages[t][n].date)>1)return y.priorMessages[t][n].date=new Date,y.priorMessages[t][n].count=1,!0;if(y.priorMessages[t][n].count<y.messagesPerHour)return y.priorMessages[t][n].count++,!0;return y.priorMessages[t][n].count++,!1};var V=(n)=>!!n.response||n.isAxiosError===!0;var kn=["ETIMEOUT","ENOTFOUND","ECONNRESET","ESOCKET"],U=(n,t=kn)=>n&&n.message&&rn(t,n.message);var gn=["EREQUEST","credentials_required"],z=function n(t){if(!t||!t.stack)return!1;if(V(t))return!1;if(U(t))return!1;if(t.code&&gn.includes(t.code))return!1;return!0};var vn=["/node_modules/","internal/"],N=(n)=>{if(!n.stack)return;const t=n.stack.split("\n").reduce((e,o)=>{if(vn.some((r)=>o.includes(r)))return e;if(!o.includes("/"))return e;return[...e,o]},[]);return n.stack=t.join("\n"),n};var J=(n,t="")=>{try{if(!n)return"";if(m(n))n=new Error(n);const e=z(n);delete n.config;let o;if(V(n))if(n.response.data&&Array.isArray(n.response.data)&&n.response.data[0])o=n.response.data[0];else o=n.response.data||n.response;let r=t;const c=n.message||n;if(!o)r+=` error: ${c}`;let f;if(!o)f=j(n);if(f&&f!=="{}"&&f!==j(c))r+=`, stringified: ${f}`;let x;if(o){let i,d,b;if(b=n.response.status,n.response.config)i=n.response.config.url,d=n.response.config.method&&n.response.config.method?.toUpperCase(),delete n.response.config;r+=" "+`url: ${d||""} ${b||""} ${i||""}`.trim(),x=j(o)}if(x)if(x.includes("<html>"))r+=", axios response: <html removed>";else r+=`, axios response: ${x}`;if(e)r+=`, stack:\n${N(n).stack}`;return W(r.trim())}catch(e){return n}};var nt=(n,t)=>L(Object.keys(t),n);var tt=(...n)=>Object.assign({},...n);var et=(n,t)=>{for(let e=0;e<n.length;e++)if(on(t[n[e]]))return n[e]};var ot=(n,t)=>{const e=Object.keys(t);for(let o=0;o<e.length;o++)if(n.includes(t[e[o]]))return t[e[o]]};var F=(n,t,e=".")=>t.split(e).reduce((o,r)=>o&&o[r],n);var rt=(n,t)=>n.filter((e)=>!_(e,t));var ct=(n,t)=>{for(let e=0;e<n.length;e++)if(!_(n[e],t))return!1;return!0};var _=p((n,t)=>Object.prototype.hasOwnProperty.call(t,n));var ft=p((n,t)=>Object.prototype.hasOwnProperty.call(n,t));var pt=(n,t)=>{for(let e=0;e<n.length;e++)delete t[n[e]];return t};var xt=(n)=>Object.assign({},n);var j=(n,t=2)=>{const e=[];return JSON.stringify(n,function(o,r){if(typeof r==="object"&&r!==null){if(e.indexOf(r)!==-1)return;e.push(r)}return r},t)};var D=(n,t)=>{const e={};for(let o in n)if(!t.includes(o))e[o]=n[o];return e};var L=(n,t,e,o=".")=>{const r=e?new Set(n.map((c)=>F(c,e,o))):new Set(n);return t.filter((c)=>!r.has(e?c:c))};var ut=(n,t,e,o=".")=>{const r=new Set(n.map((c)=>e?F(c,e,o):c));return t.filter((c)=>r.has(e?c:c))};var it=(n)=>{return n.filter((t,e,o)=>e===o.findIndex((r)=>JSON.stringify(r)===JSON.stringify(t)))};var yt=(n)=>[...new Set(n)];var dt=(n,t,e=1,...o)=>{return n.splice(t,e,...o),n};var It=(n,t,e,o=".")=>{const r=new Set(t);return n.filter((c)=>e?!r.has(F(c,e,o)):!r.has(c))};var bt=(...n)=>[...Array(Math.min(...n.map((t)=>t.length)))].map((t,e)=>n.map((o)=>o[e]));var Ot=function(n){let t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<n;o++)t+=e.charAt(Math.floor(Math.random()*e.length));return t};var mt=async(n)=>new Promise((t)=>setTimeout(t,n));var O=["trace","debug","info","warn","error"],Tt=O.indexOf("trace"),jt=O.indexOf("debug"),lt=O.indexOf("info"),ht=O.indexOf("warn"),Et=O.indexOf("error"),Ft={pino:null,name:"",prettyPrint:{colorize:!0,translateTime:"UTC:yyyy-mm-dd HH:MM:ss",ignore:"pid,hostname,v,name"},hideFile:!1,hideTime:!1,hideLine:!1,useLocalTime:!0,stackIndex:3,level:"info"},u={logger:null,currentConfig:Ft,depth:console.log},S,Kt=(n,t)=>n[t]?.getFileName()||"",at=(n,t)=>n[t]?.getLineNumber()||"",l=(n=u.currentConfig.stackIndex)=>{const t=Error.prepareStackTrace;Error.prepareStackTrace=function(f,x){return x};const e=new Error;Error.captureStackTrace(e);const o=e.stack;Error.prepareStackTrace=t;const r=u.currentConfig.hideFile?"":Kt(o,n).slice(process.cwd().length),c=u.currentConfig.hideLine?"":at(o,n);if(r)if(u.currentConfig.hideLine)return r;else return r+":"+c;return""},w=(...n)=>{let t="";if(!u.currentConfig.hideTime)if(u.currentConfig.timeFunction)t+=u.currentConfig.timeFunction();else if(u.currentConfig.useLocalTime){const o=(new Date()).getTimezoneOffset()*60000;let r=new Date(Date.now()-o).toISOString().slice(0,-1);r.replace("T"," "),t+=r}else t+=(new Date()).toISOString();if(l())t+=` ${l()}`;n.forEach((o)=>{const r=typeof o==="object"?JSON.parse(j(o)):o;t+=" ",t+=typeof r==="string"?r:j(r)}),console.log(t.trim())},Ct=function(){return{trace:(...n)=>{if(O.indexOf(u.currentConfig.level)>=Tt)w(...n)},debug:(...n)=>{if(O.indexOf(u.currentConfig.level)>=jt)w(...n)},info:(...n)=>{if(O.indexOf(u.currentConfig.level)>=lt)w(...n)},warn:(...n)=>{if(O.indexOf(u.currentConfig.level)>=ht)w(...n)},error:(...n)=>{if(O.indexOf(u.currentConfig.level)>=Et)w(...n)}}},Tc=(n={})=>{const{pino:t,...e}=n;if(u.currentConfig=Object.assign({},u.currentConfig,e),S=t??Ct,u.logger=S(n),u.logger.update=(r)=>{const c=D(r,["pino"]);u.logger=S(c)},!t)return{...u.logger};const o={trace:(...r)=>u.logger.trace(l(),...r),debug:(...r)=>u.logger.debug(l(),...r),info:(...r)=>u.logger.info(l(),...r),warn:(...r)=>u.logger.warn(l(),...r),error:(...r)=>u.logger.error(l(),...r),update:u.logger.update};return o.depth=(r,c,...f)=>u.logger[c](l(r||u.currentConfig.stackIndex+1),...f),u.logger.depth=o.depth,u.depth=o.depth,o};var hc=(n,t)=>+t.toFixed(n),Ec=(n,t)=>Number(Math.round(Number(t+"e"+n))+"e-"+n),Fc=(n,t)=>Number(Math.ceil(Number(t+"e"+n))+"e-"+n),Kc=(n,t)=>Number(Math.floor(Number(t+"e"+n))+"e-"+n),ac=(n,t)=>{const e=n<0&&t>0||t<0&&n>0?-1:1,o=G(n),r=G(t),c=Math.max(o,r),f=n.toFixed(c).split(""),x=t.toFixed(c).split("");if(f[0]==="-")f.shift();if(x[0]==="-")x.shift();if(f.includes("."))f.splice(f.indexOf("."),1);if(x.includes("."))x.splice(x.indexOf("."),1);const i=[];let d=0;for(let h=x.length-1;h>-1;h--){const K=[];i.push(K);const yn=Number(x[h]);if(h!==x.length-1)for(let E=x.length-1;E>h;E--)K.push("0");for(let E=f.length-1;E>-1;E--){const dn=Number(f[E]),M=(yn*Number(dn)+d).toFixed(0);if(K.unshift(M.slice(M.length-1)),M.length>1){if(d=Number(M.slice(0,M.length-1)),E===0)K.unshift(d),d=0}else d=0}}const I=i.reduce((h,K)=>{return Mt(h,Number(K.join("")))},0).toFixed(0).split(""),g=c*2,un=[...I.slice(0,I.length-g),".",...I.slice(I.length-g)];return e*Number(un.join(""))},k=(n,t,e)=>{if(t.toString().includes("e-"))t=xn(t);if(e.toString().includes("e-"))e=xn(e);const o=G(t),r=G(e),c=Math.max(o,r),f=Number(t+"e"+c),x=Number(e+"e"+c);let i;if(n==="subtract")i=f-x;else if(n==="add")i=f+x;else if(n==="divide")return f/x;else return;return Number(i+"e-"+c)},Mt=(n,t)=>k("add",n,t),Cc=(n,t)=>k("subtract",n,t),Mc=(n,t)=>k("divide",n,t),G=(n)=>{if(!m(n)&&Number(n)%1===0)return 0;return n.toString().split(".")[1].length},xn=(n)=>{const t=n.toString().toLowerCase(),e=t.indexOf(".");let o=t.indexOf("e");if(o===-1)return n;let r=1,c=!0;if(t.indexOf("e+")!==-1)r=2,c=!0;else r=2,c=!1;let f,x;if(e!==-1)f=t.slice(0,e),x=t.slice(e+1,o);else f=t.slice(0,o),x="";const i=Number(t.slice(o+r,t.length));let d,b,I;if(!c){d=i-f.length,b=".";for(I=0;I<d;I++)b+="0";b+=f+x}else{d=i-x.length,b=f+x;for(I=0;I<d;I++)b+="0"}return b};var q={timer:300000,groupInclusions:[]},Bc=(n,t="")=>{const e=J(n);if(Z(e,t))u.logger.error(t,e);return e},Q={},Rt=(n)=>{delete Q[n]},At=(n,t=q.timer)=>{if(Q[n])return;Q[n]=!0,setTimeout(()=>{Rt(n)},t)},H=({type:n="error",group:t="",vals:e=[],skipShouldLogMessageCheck:o=!1,depth:r,timer:c=q.timer})=>{try{const f=e.join(",");if(!t){for(let x=0;x<q.groupInclusions.length;x++)if(f.includes(q.groupInclusions[x])){t=q.groupInclusions[x];break}}if(!t||!Q[t]){if(t)At(t||f,c);if(o||Z(f)){let x;if(n==="error"&&e[e.length-1]instanceof Error)x=[...e.slice(0,-1),J(e[-1],"")];if(t)u.depth(r,n,t,...x||e);else u.depth(r,n,...x||e)}}}catch(f){console.log("smartLog err:",f)}},Pc=({group:n,vals:t,skipShouldLogMessageCheck:e,depth:o,timer:r})=>{const c={group:n,skipShouldLogMessageCheck:e,depth:o,timer:r};return{error:(...f)=>H({...c,type:"error",vals:[...t,...f]}),trace:(...f)=>H({...c,type:"trace",vals:[...t,...f]}),debug:(...f)=>H({...c,type:"debug",vals:[...t,...f]}),info:(...f)=>H({...c,type:"info",vals:[...t,...f]}),warn:(...f)=>H({...c,type:"warn",vals:[...t,...f]})}};export{bt as zip,D as withoutKeys,It as without,O as validLogLevels,qn as unique,Yo as timePastDateExcludeWeekend,P as timePastDate,Cc as subtract,j as stringify,dt as splice,zn as sort,Un as some,Pc as smartLogger,q as smartLogSettings,H as smartLog,mt as sleep,Pn as sideEffect,z as showStackForError,Z as shouldLogMessage,xt as shallowClone,Bn as setValue,hc as setPrecision,Fc as roundUp,Kc as roundDown,Ec as round,Hn as reorder,N as removeModulesFromStack,pt as removeKeys,yt as removeDupsPrimitive,it as removeDups,_n as reduceKeys,Zn as reduce,Ot as randomAlpahNumeric,sn as pipe,ft as objHasKey,ac as multiply,$ as momentValidate,Qo as minutesPastDateMoment,Y as mergeObjects,An as map,Rn as loggit,y as loggingSettings,u as logSettings,Wn as length,Mn as join,an as isObject,Cn as isNot,U as isNetworkError,X as isEmpty,V as isAxiosError,ut as includesDeep,$n as includes,Kn as ifIt,Dn as hoursPastDateMoment,pn as hoursPastDate,_ as hasKey,ct as hasAllKeys,Bc as handleError,Fn as getValue,B as getUTCDate,fn as getTimeStringFormat,rt as getMissingKeys,J as getMessageFromError,Go as getLocalDate,at as getLineFromStack,Kt as getFileFromStack,Jo as getESTDate,F as getDeepKey,En as getArgLast,hn as getArgAt,ln as getArg,Xn as flat,ot as firstExistingKeyValue,et as firstExistingKey,Yn as find,Qn as filter,tt as extend,nt as excludesKeys,L as excludes,Gn as every,jn as either,k as doMath,Mc as divide,In as deepClone,qo as dbTimeFormat,Xo as daysPastDateMoment,cn as dateFormatRegexes,p as curry,Tc as createLogger,G as countDecimals,xn as convertScientificToDecimal,Jn as concat,Tn as compose,Sn as cleanStringForLogging,W as cleanDataForLogging,mn as chain,Vn as asyncSideEffect,On as arrayChunker,Ho as addMomentTimeZone,Mt as add,C as ShortCircuit,a as Maybe,R as Identity,Nn as ErrorMonad,s as EitherRight,A as EitherLeft,Ln as Either,tn as ComposableObject};
