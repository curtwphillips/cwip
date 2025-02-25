var Of=(f)=>structuredClone(f);var nf=(f,x)=>P(Object.keys(x),f);var cf=(...f)=>Object.assign({},...f);var u=(f)=>typeof f!=="undefined"&&f!==null,i=(f)=>f!==!1&&u(f);var G=(f)=>typeof f==="string";var v=(f,x,O=!1)=>{if(O)x=x.toLowerCase();for(let n=0;n<f.length;n++)if(x.includes(O?f[n].toLowerCase():f[n]))return!0;return!1};var Tf=(f,x)=>{for(let O=0;O<f.length;O++)if(u(x[f[O]]))return f[O]};var Kf=(f,x)=>{const O=Object.keys(x);for(let n=0;n<O.length;n++)if(f.includes(x[O[n]]))return x[O[n]]};var z=(f,x,O=".")=>x.split(O).reduce((n,c)=>n&&n[c],f);var If=(f,x)=>f.filter((O)=>!V(O,x));var Cf=(f,x)=>{for(let O=0;O<f.length;O++)if(!V(f[O],x))return!1;return!0};var V=(f,x)=>Object.prototype.hasOwnProperty.call(x,f);var Ef=(f,x)=>{for(let O=0;O<f.length;O++)delete x[f[O]];return x};var Jf=(f)=>Object.assign({},f);var X=(f,x=2)=>{const O=[];return JSON.stringify(f,function(n,c){if(typeof c==="object"&&c!==null){if(O.indexOf(c)!==-1)return;O.push(c)}return c},x)};var j=(f,x)=>{const O={};for(let n in f)if(!x.includes(n))O[n]=f[n];return O};var P=(f,x,O,n=".")=>{const c=O?new Set(f.map((T)=>z(T,O,n))):new Set(f);return x.filter((T)=>!c.has(O?T:T))};var _f=(f,x,O,n=".")=>{const c=new Set(f.map((T)=>O?z(T,O,n):T));return x.filter((T)=>c.has(O?T:T))};var Hf=(f)=>{return f.filter((x,O,n)=>O===n.findIndex((c)=>JSON.stringify(c)===JSON.stringify(x)))};var qf=(f)=>[...new Set(f)];var Ff=(f,x,O=1,...n)=>{return f.splice(x,O,...n),f};var Gf=(f,x,O,n=".")=>{const c=new Set(x);return f.filter((T)=>O?!c.has(z(T,O,n)):!c.has(T))};var Qf=(...f)=>[...Array(Math.min(...f.map((x)=>x.length)))].map((x,O)=>f.map((n)=>n[O]));var bx=(f,x,O)=>i(f)?x(O):O,Xf=(f)=>(...x)=>x.length>=f.length?f(...x):(...O)=>D(f)(...x,...O),D=(f)=>Xf(f);var Q,Dx=(f,x="Etc/UTC")=>{Q=f,Q.tz?.setDefault(x)},Ax="YYYY-MM-DD HH:mm:ss",e={"MM/DD/YYYY":/^\d{2}\/\d{2}\/\d{4}$/,"M/DD/YYYY":/^\d{1}\/\d{2}\/\d{4}$/,"MM/D/YYYY":/^\d{2}\/\d{1}\/\d{4}$/,"M/D/YYYY":/^\d{1}\/\d{1}\/\d{4}$/,"MM/DD/YY":/^\d{2}\/\d{2}\/\d{2}$/,"M/D/YY":/^\d{1}\/\d{1}\/\d{2}$/,"M/DD/YY":/^\d{1}\/\d{2}\/\d{2}$/,"MM/D/YY":/^\d{2}\/\d{1}\/\d{2}$/,"YYYY/MM/DD":/^\d{4}\/\d{2}\/\d{2}$/,"YYYY/M/DD":/^\d{4}\/\d{1}\/\d{2}$/,"YYYY/MM/D":/^\d{4}\/\d{2}\/\d{1}$/,"MM-DD-YYYY":/^\d{2}-\d{2}-\d{4}$/,"M-DD-YYYY":/^\d{1}-\d{2}-\d{4}$/,"MM-D-YYYY":/^\d{2}-\d{1}-\d{4}$/,"M-D-YYYY":/^\d{1}-\d{1}-\d{4}$/,"MM-DD-YY":/^\d{2}-\d{2}-\d{2}$/,"M-D-YY":/^\d{1}-\d{1}-\d{2}$/,"M-DD-YY":/^\d{1}-\d{2}-\d{2}$/,"MM-D-YY":/^\d{2}-\d{1}-\d{2}$/,"YYYY-MM-DD":/^\d{4}-\d{2}-\d{2}$/,"YYYY-M-DD":/^\d{4}-\d{1}-\d{2}$/,"YYYY-MM-D":/^\d{4}-\d{2}-\d{1}$/,"YYYY-MM-DD HH:mm:ss":/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,"MMM D, YYYY":/^[a-zA-Z]{3,5} \d{1,2}, \d{4}$/,"MMMM D, YYYY":/^[a-zA-Z]{6,} \d{1,2}, \d{4}$/,"YYYY-MM-DDTHH:mm:ssZ":/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/},A=(f,x="")=>{let O;if(!Q.isMoment(f))O=Q(f,g(f));else O=f;if(O.isValid()){if(!x)return O;return O.format(x)}return""},g=(f)=>{if(!G(f))return;return f=f.trim(),Object.keys(e).find((x)=>e[x].test(f))},Z=(f,x="",O="")=>{let n;if(G(f))n=Q.utc(f,x||g(f));else n=Q.utc(f);return A(n,O)},ox=(f,x="")=>{const O=Q.tz(f||new Date,"America/New_York");return A(O,x)},Sx=(f,x="")=>{const O=Q(f);return A(O,x)},h=D((f,x,O=Z())=>Z(O).diff(Z(x),f)),kx=h("minutes"),Yf=h("hours"),yx=h("days"),r=(f,x=new Date)=>{if(Q)return Yf();else return Math.abs(f.getTime()-x.getTime())/3600000},tx=(f,x,O=new Date)=>{const n=Z(O).day();if(Z(x).day()>n)x=Z(x).add(48,"hours");const T=h(f,x,O),K=f==="days"?T:h("days",x,O),I=Math.floor(K/7)*2;if(I===0)return T;if(f==="days")return T-I;if(f==="hours"){const E=I*24;return T-E}if(f==="minutes"){const E=I*24*60;return T-E}return T};var J={disableSameMessagesLimit:!1,redactionText:"HIDDEN",secretProps:Object.keys(process.env||{}).filter((f)=>f.includes("PASSWORD")||f.includes("SECRET")),messagesPerHour:2,priorMessages:{}},$f=(f)=>{return J.secretProps.forEach((x)=>{f.replaceAll(process.env[x]||"",J.redactionText)}),f},o=(f)=>{if(!f)return f;if(G(f))return $f(f);const x=JSON.parse(JSON.stringify(f));if(x.auth)x.auth=J.redactionText;if(x.headers?.authorization)x.headers.authorization=J.redactionText;if(x.response?.config)delete x.response.config;const O=o(JSON.stringify(x));return JSON.parse(O)},S=(f,x="default")=>{if(!f)return!0;if(J.disableSameMessagesLimit)return!0;if(!J.priorMessages[x])J.priorMessages[x]=[];if(!J.priorMessages[x][f])return J.priorMessages[x][f]={date:new Date,count:1},!0;if(r(J.priorMessages[x][f].date)>1)return J.priorMessages[x][f].date=new Date,J.priorMessages[x][f].count=1,!0;if(J.priorMessages[x][f].count<J.messagesPerHour)return J.priorMessages[x][f].count++,!0;return J.priorMessages[x][f].count++,!1};var L=(f)=>!!f.response||f.isAxiosError===!0;var Bf=["ETIMEOUT","ENOTFOUND","ECONNRESET","ESOCKET"],k=(f,x=Bf)=>f&&f.message&&v(x,f.message);var zf=["EREQUEST","credentials_required"],y=function f(x){if(!x||!x.stack)return!1;if(L(x))return!1;if(k(x))return!1;if(x.code&&zf.includes(x.code))return!1;return!0};var Wf=["/node_modules/","internal/"],t=(f)=>{if(!f.stack)return;const x=f.stack.split("\n").reduce((O,n)=>{if(Wf.some((c)=>n.includes(c)))return O;if(!n.includes("/"))return O;return[...O,n]},[]);return f.stack=x.join("\n"),f};var N=(f,x="")=>{try{if(!f)return"";if(G(f))f=new Error(f);const O=y(f);delete f.config;let n;if(L(f))if(f.response.data&&Array.isArray(f.response.data)&&f.response.data[0])n=f.response.data[0];else n=f.response.data||f.response;let c=x;const T=f.message||f;if(!n)c+=` error: ${T}`;let K;if(!n)K=X(f);if(K&&K!=="{}"&&K!==X(T))c+=`, stringified: ${K}`;let I;if(n){let E,_,q;if(q=f.response.status,f.response.config)E=f.response.config.url,_=f.response.config.method&&f.response.config.method?.toUpperCase(),delete f.response.config;c+=" "+`url: ${_||""} ${q||""} ${E||""}`.trim(),I=X(n)}if(I)if(I.includes("<html>"))c+=", axios response: <html removed>";else c+=`, axios response: ${I}`;if(O)c+=`, stack:\n${t(f).stack}`;return o(c.trim())}catch(O){return f}};var FO=function(f){let x="",O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<f;n++)x+=O.charAt(Math.floor(Math.random()*O.length));return x},GO=async(f)=>new Promise((x)=>setTimeout(x,f));var F=["trace","debug","info","warn","error"],Zf=F.indexOf("trace"),Uf=F.indexOf("debug"),Vf=F.indexOf("info"),hf=F.indexOf("warn"),Lf=F.indexOf("error"),wf={pino:null,name:"",prettyPrint:{colorize:!0,translateTime:"UTC:yyyy-mm-dd HH:MM:ss",ignore:"pid,hostname,v,name"},hideFile:!1,hideTime:!1,hideLine:!1,useLocalTime:!0,stackIndex:3,level:"info"},C={logger:null,currentConfig:wf,depth:console.log},d,pf=(f,x)=>f[x]?.getFileName()||"",Mf=(f,x)=>f[x]?.getLineNumber()||"",Y=(f=C.currentConfig.stackIndex)=>{const x=Error.prepareStackTrace;Error.prepareStackTrace=function(K,I){return I};const O=new Error;Error.captureStackTrace(O);const n=O.stack;Error.prepareStackTrace=x;const c=C.currentConfig.hideFile?"":pf(n,f).slice(process.cwd().length),T=C.currentConfig.hideLine?"":Mf(n,f);if(c)if(C.currentConfig.hideLine)return c;else return c+":"+T;return""},w=(...f)=>{let x="";if(!C.currentConfig.hideTime)if(C.currentConfig.timeFunction)x+=C.currentConfig.timeFunction();else if(C.currentConfig.useLocalTime){const n=(new Date()).getTimezoneOffset()*60000;let c=new Date(Date.now()-n).toISOString().slice(0,-1);c.replace("T"," "),x+=c}else x+=(new Date()).toISOString();if(Y())x+=` ${Y()}`;f.forEach((n)=>{const c=typeof n==="object"?JSON.parse(X(n)):n;x+=" ",x+=typeof c==="string"?c:X(c)}),console.log(x.trim())},Nf=function(){return{trace:(...f)=>{if(F.indexOf(C.currentConfig.level)>=Zf)w(...f)},debug:(...f)=>{if(F.indexOf(C.currentConfig.level)>=Uf)w(...f)},info:(...f)=>{if(F.indexOf(C.currentConfig.level)>=Vf)w(...f)},warn:(...f)=>{if(F.indexOf(C.currentConfig.level)>=hf)w(...f)},error:(...f)=>{if(F.indexOf(C.currentConfig.level)>=Lf)w(...f)}}},YO=(f={})=>{const{pino:x,...O}=f;if(C.currentConfig=Object.assign({},C.currentConfig,O),d=x??Nf,C.logger=d(f),C.logger.update=(c)=>{const T=j(c,["pino"]);C.logger=d(T)},!x)return{...C.logger};const n={trace:(...c)=>C.logger.trace(Y(),...c),debug:(...c)=>C.logger.debug(Y(),...c),info:(...c)=>C.logger.info(Y(),...c),warn:(...c)=>C.logger.warn(Y(),...c),error:(...c)=>C.logger.error(Y(),...c),update:C.logger.update};return n.depth=(c,T,...K)=>C.logger[T](Y(c||C.currentConfig.stackIndex+1),...K),C.logger.depth=n.depth,C.depth=n.depth,n};var zO=(f,x)=>+x.toFixed(f),WO=(f,x)=>Number(Math.round(Number(x+"e"+f))+"e-"+f),ZO=(f,x)=>Number(Math.ceil(Number(x+"e"+f))+"e-"+f),UO=(f,x)=>Number(Math.floor(Number(x+"e"+f))+"e-"+f),VO=(f,x)=>{const O=f<0&&x>0||x<0&&f>0?-1:1,n=R(f),c=R(x),T=Math.max(n,c),K=f.toFixed(T).split(""),I=x.toFixed(T).split("");if(K[0]==="-")K.shift();if(I[0]==="-")I.shift();if(K.includes("."))K.splice(K.indexOf("."),1);if(I.includes("."))I.splice(I.indexOf("."),1);const E=[];let _=0;for(let $=I.length-1;$>-1;$--){const W=[];E.push(W);const ff=Number(I[$]);if($!==I.length-1)for(let B=I.length-1;B>$;B--)W.push("0");for(let B=K.length-1;B>-1;B--){const xf=Number(K[B]),U=(ff*Number(xf)+_).toFixed(0);if(W.unshift(U.slice(U.length-1)),U.length>1){if(_=Number(U.slice(0,U.length-1)),B===0)W.unshift(_),_=0}else _=0}}const H=E.reduce(($,W)=>{return Rf($,Number(W.join("")))},0).toFixed(0).split(""),m=T*2,a=[...H.slice(0,H.length-m),".",...H.slice(H.length-m)];return O*Number(a.join(""))},l=(f,x,O)=>{if(x.toString().includes("e-"))x=s(x);if(O.toString().includes("e-"))O=s(O);const n=R(x),c=R(O),T=Math.max(n,c),K=Number(x+"e"+T),I=Number(O+"e"+T);let E;if(f==="subtract")E=K-I;else if(f==="add")E=K+I;else if(f==="divide")return K/I;else return;return Number(E+"e-"+T)},Rf=(f,x)=>l("add",f,x),hO=(f,x)=>l("subtract",f,x),LO=(f,x)=>l("divide",f,x),R=(f)=>{if(!G(f)&&Number(f)%1===0)return 0;return f.toString().split(".")[1].length},s=(f)=>{const x=f.toString().toLowerCase(),O=x.indexOf(".");let n=x.indexOf("e");if(n===-1)return f;let c=1,T=!0;if(x.indexOf("e+")!==-1)c=2,T=!0;else c=2,T=!1;let K,I;if(O!==-1)K=x.slice(0,O),I=x.slice(O+1,n);else K=x.slice(0,n),I="";const E=Number(x.slice(n+c,x.length));let _,q,H;if(!T){_=E-K.length,q=".";for(H=0;H<_;H++)q+="0";q+=K+I}else{_=E-I.length,q=K+I;for(H=0;H<_;H++)q+="0"}return q};var M={timer:300000,groupInclusions:[]},NO=(f,x="")=>{const O=N(f);if(S(O,x))C.logger.error(x,O);return O},b={},bf=(f)=>{delete b[f]},Pf=(f,x=M.timer)=>{if(b[f])return;b[f]=!0,setTimeout(()=>{bf(f)},x)},p=({type:f="error",group:x="",vals:O=[],skipShouldLogMessageCheck:n=!1,depth:c,timer:T=M.timer})=>{try{const K=O.join(",");if(!x){for(let I=0;I<M.groupInclusions.length;I++)if(K.includes(M.groupInclusions[I])){x=M.groupInclusions[I];break}}if(!x||!b[x]){if(x)Pf(x||K,T);if(n||S(K)){let I;if(f==="error"&&O[O.length-1]instanceof Error)I=[...O.slice(0,-1),N(O[-1],"")];if(x)C.depth(c,f,x,...I||O);else C.depth(c,f,...I||O)}}}catch(K){console.log("smartLog err:",K)}},RO=({group:f,vals:x,skipShouldLogMessageCheck:O,depth:n,timer:c})=>{const T={group:f,skipShouldLogMessageCheck:O,depth:n,timer:c};return{error:(...K)=>p({...T,type:"error",vals:[...x,...K]}),trace:(...K)=>p({...T,type:"trace",vals:[...x,...K]}),debug:(...K)=>p({...T,type:"debug",vals:[...x,...K]}),info:(...K)=>p({...T,type:"info",vals:[...x,...K]}),warn:(...K)=>p({...T,type:"warn",vals:[...x,...K]})}};export{Qf as zip,j as withoutKeys,Gf as without,F as validLogLevels,tx as timePastDateExcludeWeekend,h as timePastDate,hO as subtract,X as stringify,Ff as splice,RO as smartLogger,M as smartLogSettings,p as smartLog,GO as sleep,y as showStackForError,S as shouldLogMessage,Jf as shallowClone,zO as setPrecision,ZO as roundUp,UO as roundDown,WO as round,t as removeModulesFromStack,Ef as removeKeys,qf as removeDupsPrimitive,Hf as removeDups,FO as randomAlpahNumeric,VO as multiply,A as momentValidate,kx as minutesPastDateMoment,J as loggingSettings,C as logSettings,k as isNetworkError,L as isAxiosError,_f as includes,bx as ifIt,Yf as hoursPastDateMoment,r as hoursPastDate,V as hasKey,Cf as hasAllKeys,NO as handleError,Z as getUTCDate,g as getTimeStringFormat,If as getMissingKeys,N as getMessageFromError,Sx as getLocalDate,Mf as getLineFromStack,pf as getFileFromStack,ox as getESTDate,z as getDeepKey,Kf as firstExistingKeyValue,Tf as firstExistingKey,cf as extend,nf as excludesKeys,P as excludes,l as doMath,LO as divide,Of as deepClone,Ax as dbTimeFormat,yx as daysPastDateMoment,e as dateFormatRegexes,D as curry,YO as createLogger,R as countDecimals,s as convertScientificToDecimal,$f as cleanStringForLogging,o as cleanDataForLogging,Dx as addMomentTimeZone,Rf as add};
