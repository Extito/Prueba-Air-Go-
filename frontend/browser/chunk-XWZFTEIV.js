import{C as ee,Da as G,Ea as ie,I as Ce,Ja as Re,K as Fe,Ka as Ie,L as y,N as m,O as V,Q as h,S as g,T as d,U as Ae,W as be,X as _e,a as z,bb as Pe,c as pe,ca as te,g as De,j as me,m as ye,ma as ve,n as O,oa as Te,qa as Se,r as N,va as ne,x as Ee,ya as S,z as we,za as re}from"./chunk-U7OWAT4O.js";var R=new h("");var Ne=null;function W(){return Ne}function lt(t){Ne??=t}var se=class{},oe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=m({token:t,factory:()=>d(Be),providedIn:"platform"})}return t})();var Be=(()=>{class t extends oe{_location;_history;_doc=d(R);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return W().getBaseHref(this._doc)}onPopState(e){let r=W().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=W().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ke(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Me(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function _(t){return t&&t[0]!=="?"?`?${t}`:t}var H=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=m({token:t,factory:()=>d(Ue),providedIn:"root"})}return t})(),xe=new h(""),Ue=(()=>{class t extends H{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??d(R).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ke(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+_(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,s){let o=this.prepareExternalUrl(i+_(s));this._platformLocation.pushState(e,r,o)}replaceState(e,r,i,s){let o=this.prepareExternalUrl(i+_(s));this._platformLocation.replaceState(e,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||t)(g(oe),g(xe,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$e=(()=>{class t{_subject=new me;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=ht(Me(Le(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+_(r))}normalize(e){return t.stripTrailingSlash(ft(this._basePath,Le(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=_;static joinWithSlash=ke;static stripTrailingSlash=Me;static \u0275fac=function(r){return new(r||t)(g(H))};static \u0275prov=m({token:t,factory:()=>dt(),providedIn:"root"})}return t})();function dt(){return new $e(g(H))}function ft(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Le(t){return t.replace(/\/index.html$/,"")}function ht(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Y=class{$implicit;ngForOf;index;count;constructor(n,e,r,i){this.$implicit=n,this.ngForOf=e,this.index=r,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ve=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,r,i){this._viewContainer=e,this._template=r,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let r=this._viewContainer;e.forEachOperation((i,s,o)=>{if(i.previousIndex==null)r.createEmbeddedView(this._template,new Y(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)r.remove(s===null?void 0:s);else if(s!==null){let u=r.get(s);r.move(u,o),je(u,i)}});for(let i=0,s=r.length;i<s;i++){let u=r.get(i).context;u.index=i,u.count=s,u.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let s=r.get(i.currentIndex);je(s,i)})}static ngTemplateContextGuard(e,r){return!0}static \u0275fac=function(r){return new(r||t)(S(re),S(ne),S(Pe))};static \u0275dir=ie({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function je(t,n){t.context.$implicit=n.item}var gt=(()=>{class t{_viewContainer;_context=new Z;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,r){this._viewContainer=e,this._thenTemplateRef=r}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ze(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ze(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,r){return!0}static \u0275fac=function(r){return new(r||t)(S(re),S(ne))};static \u0275dir=ie({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Z=class{$implicit=null;ngIf=null};function ze(t,n){if(t&&!t.createEmbeddedView)throw new y(2020,!1)}var pt=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=G({type:t});static \u0275inj=V({})}return t})();function ae(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let r=e.indexOf("="),[i,s]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===n)return decodeURIComponent(s)}return null}var Dt="browser",Ge="server";function mt(t){return t===Ge}var B=class{};var P=class{},k=class{},A=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),s=e.slice(r+1).trim();this.addHeaderEntry(i,s)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=(n.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let s=n.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(u=>s.indexOf(u)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(s=>s.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var K=class{encodeKey(n){return We(n)}encodeValue(n){return We(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Et(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[o,u]=s==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,s)),n.decodeValue(i.slice(s+1))],a=e.get(o)||[];a.push(u),e.set(o,a)}),e}var wt=/%(\d[a-f0-9])/gi,Ct={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function We(t){return encodeURIComponent(t).replace(wt,(n,e)=>Ct[e]??n)}function X(t){return`${t}`}var F=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new K,n.fromString){if(n.fromObject)throw new y(2805,!1);this.map=Et(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(X):[X(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(s=>{e.push({param:r,value:s,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(X(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(X(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var J=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Ft(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function He(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Ye(t){return typeof Blob<"u"&&t instanceof Blob}function Ze(t){return typeof FormData<"u"&&t instanceof FormData}function At(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Xe="Content-Type",Ke="Accept",qe="X-Request-URL",Qe="text/plain",et="application/json",bt=`${et}, ${Qe}, */*`,I=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let s;if(Ft(this.method)||i?(this.body=r!==void 0?r:null,s=i):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new A,this.context??=new J,!this.params)this.params=new F,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let u=e.indexOf("?"),a=u===-1?"?":u<e.length-1?"&":"";this.urlWithParams=e+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||He(this.body)||Ye(this.body)||Ze(this.body)||At(this.body)?this.body:this.body instanceof F?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ze(this.body)?null:Ye(this.body)?this.body.type||null:He(this.body)?null:typeof this.body=="string"?Qe:this.body instanceof F?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?et:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,s=n.transferCache??this.transferCache,o=n.body!==void 0?n.body:this.body,u=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,D=n.headers||this.headers,w=n.params||this.params,E=n.context??this.context;return n.setHeaders!==void 0&&(D=Object.keys(n.setHeaders).reduce((C,p)=>C.set(p,n.setHeaders[p]),D)),n.setParams&&(w=Object.keys(n.setParams).reduce((C,p)=>C.set(p,n.setParams[p]),w)),new t(e,r,o,{params:w,headers:D,context:E,reportProgress:a,responseType:i,withCredentials:u,transferCache:s})}},v=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(v||{}),M=class{headers;status;statusText;url;ok;type;constructor(n,e=200,r="OK"){this.headers=n.headers||new A,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},q=class t extends M{constructor(n={}){super(n)}type=v.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},T=class t extends M{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=v.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},x=class extends M{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},_t=200,vt=204;function ue(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var tt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let s;if(e instanceof I)s=e;else{let a;i.headers instanceof A?a=i.headers:a=new A(i.headers);let D;i.params&&(i.params instanceof F?D=i.params:D=new F({fromObject:i.params})),s=new I(e,r,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:D,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=O(s).pipe(we(a=>this.handler.handle(a)));if(e instanceof I||i.observe==="events")return o;let u=o.pipe(Ee(a=>a instanceof T));switch(i.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return u.pipe(N(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new y(2806,!1);return a.body}));case"blob":return u.pipe(N(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new y(2807,!1);return a.body}));case"text":return u.pipe(N(a=>{if(a.body!==null&&typeof a.body!="string")throw new y(2808,!1);return a.body}));case"json":default:return u.pipe(N(a=>a.body))}case"response":return u;default:throw new y(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new F().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,ue(i,r))}post(e,r,i={}){return this.request("POST",e,ue(i,r))}put(e,r,i={}){return this.request("PUT",e,ue(i,r))}static \u0275fac=function(r){return new(r||t)(g(P))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Tt=new h("");function nt(t,n){return n(t)}function St(t,n){return(e,r)=>n.intercept(e,{handle:i=>t(i,r)})}function Rt(t,n,e){return(r,i)=>_e(e,()=>n(r,s=>t(s,i)))}var rt=new h(""),le=new h(""),de=new h(""),fe=new h("",{providedIn:"root",factory:()=>!0});function It(){let t=null;return(n,e)=>{t===null&&(t=(d(rt,{optional:!0})??[]).reduceRight(St,nt));let r=d(te);if(d(fe)){let s=r.add();return t(n,e).pipe(ee(()=>r.remove(s)))}else return t(n,e)}}var Q=(()=>{class t extends P{backend;injector;chain=null;pendingTasks=d(te);contributeToStability=d(fe);constructor(e,r){super(),this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(le),...this.injector.get(de,[])]));this.chain=r.reduceRight((i,s)=>Rt(i,s,this.injector),nt)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(ee(()=>this.pendingTasks.remove(r)))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(g(k),g(be))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Pt=/^\)\]\}',?\n/,Mt=RegExp(`^${qe}:`,"m");function Lt(t){return"responseURL"in t&&t.responseURL?t.responseURL:Mt.test(t.getAllResponseHeaders())?t.getResponseHeader(qe):null}var ce=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new y(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?ye(r.\u0275loadImpl()):O(null)).pipe(Ce(()=>new De(s=>{let o=r.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((c,l)=>o.setRequestHeader(c,l.join(","))),e.headers.has(Ke)||o.setRequestHeader(Ke,bt),!e.headers.has(Xe)){let c=e.detectContentTypeHeader();c!==null&&o.setRequestHeader(Xe,c)}if(e.responseType){let c=e.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let u=e.serializeBody(),a=null,D=()=>{if(a!==null)return a;let c=o.statusText||"OK",l=new A(o.getAllResponseHeaders()),b=Lt(o)||e.url;return a=new q({headers:l,status:o.status,statusText:c,url:b}),a},w=()=>{let{headers:c,status:l,statusText:b,url:j}=D(),f=null;l!==vt&&(f=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=f?_t:0);let L=l>=200&&l<300;if(e.responseType==="json"&&typeof f=="string"){let ut=f;f=f.replace(Pt,"");try{f=f!==""?JSON.parse(f):null}catch(ct){f=ut,L&&(L=!1,f={error:ct,text:f})}}L?(s.next(new T({body:f,headers:c,status:l,statusText:b,url:j||void 0})),s.complete()):s.error(new x({error:f,headers:c,status:l,statusText:b,url:j||void 0}))},E=c=>{let{url:l}=D(),b=new x({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});s.error(b)},C=!1,p=c=>{C||(s.next(D()),C=!0);let l={type:v.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),e.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),s.next(l)},$=c=>{let l={type:v.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),s.next(l)};return o.addEventListener("load",w),o.addEventListener("error",E),o.addEventListener("timeout",E),o.addEventListener("abort",E),e.reportProgress&&(o.addEventListener("progress",p),u!==null&&o.upload&&o.upload.addEventListener("progress",$)),o.send(u),s.next({type:v.Sent}),()=>{o.removeEventListener("error",E),o.removeEventListener("abort",E),o.removeEventListener("load",w),o.removeEventListener("timeout",E),e.reportProgress&&(o.removeEventListener("progress",p),u!==null&&o.upload&&o.upload.removeEventListener("progress",$)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(r){return new(r||t)(g(B))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),it=new h(""),Ot="XSRF-TOKEN",Nt=new h("",{providedIn:"root",factory:()=>Ot}),Bt="X-XSRF-TOKEN",kt=new h("",{providedIn:"root",factory:()=>Bt}),U=class{},xt=(()=>{class t{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,r,i){this.doc=e,this.platform=r,this.cookieName=i}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ae(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||t)(g(R),g(ve),g(Nt))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();function Ut(t,n){let e=t.url.toLowerCase();if(!d(it)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return n(t);let r=d(U).getToken(),i=d(kt);return r!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,r)})),n(t)}var he=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(he||{});function $t(t,n){return{\u0275kind:t,\u0275providers:n}}function st(...t){let n=[tt,ce,Q,{provide:P,useExisting:Q},{provide:k,useFactory:()=>d(Tt,{optional:!0})??d(ce)},{provide:le,useValue:Ut,multi:!0},{provide:it,useValue:!0},{provide:U,useClass:xt}];for(let e of t)n.push(...e.\u0275providers);return Ae(n)}var Je=new h("");function ot(){return $t(he.LegacyInterceptors,[{provide:Je,useFactory:It},{provide:le,useExisting:Je,multi:!0}])}var jt=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=G({type:t});static \u0275inj=V({providers:[st(ot())]})}return t})();var zt=new h(""),Vt="b",Gt="h",Wt="s",Ht="st",Yt="u",Zt="rt",ge=new h(""),Xt=["GET","HEAD"];function Kt(t,n){let C=d(ge),{isCacheActive:e}=C,r=pe(C,["isCacheActive"]),{transferCache:i,method:s}=t;if(!e||i===!1||s==="POST"&&!r.includePostRequests&&!i||s!=="POST"&&!Xt.includes(s)||!r.includeRequestsWithAuthHeaders&&Jt(t)||r.filter?.(t)===!1)return n(t);let o=d(Te);if(d(zt,{optional:!0}))throw new y(2803,!1);let a=t.url,D=qt(t,a),w=o.get(D,null),E=r.includeHeaders;if(typeof i=="object"&&i.includeHeaders&&(E=i.includeHeaders),w){let{[Vt]:p,[Zt]:$,[Gt]:c,[Wt]:l,[Ht]:b,[Yt]:j}=w,f=p;switch($){case"arraybuffer":f=new TextEncoder().encode(p).buffer;break;case"blob":f=new Blob([p]);break}let L=new A(c);return O(new T({body:f,headers:L,status:l,statusText:b,url:j}))}return n(t).pipe(Fe(p=>{p instanceof T}))}function Jt(t){return t.headers.has("authorization")||t.headers.has("proxy-authorization")}function at(t){return[...t.keys()].sort().map(n=>`${n}=${t.getAll(n)}`).join("&")}function qt(t,n){let{params:e,method:r,responseType:i}=t,s=at(e),o=t.serializeBody();o instanceof URLSearchParams?o=at(o):typeof o!="string"&&(o="");let u=[r,i,n,o,s].join("|"),a=Qt(u);return a}function Qt(t){let n=0;for(let e of t)n=Math.imul(31,n)+e.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function zi(t){return[{provide:ge,useFactory:()=>(Se("NgHttpTransferCache"),z({isCacheActive:!0},t))},{provide:de,useValue:Kt,multi:!0},{provide:Re,multi:!0,useFactory:()=>{let n=d(Ie),e=d(ge);return()=>{n.whenStable().then(()=>{e.isCacheActive=!1})}}}]}export{R as a,W as b,lt as c,se as d,$e as e,Ve as f,gt as g,pt as h,ae as i,Dt as j,mt as k,B as l,tt as m,st as n,jt as o,zi as p};
