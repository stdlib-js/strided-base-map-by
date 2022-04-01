// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t,a,i,o,d){var l,f,u,s;if(r<=0)return t;for(l=n<0?(1-r)*n:0,f=a<0?(1-r)*a:0,s=0;s<r;s++)void 0!==(u=o.call(d,e[l],s,l,f,e,t))&&(t[f]=i(u)),l+=n,f+=a;return t},n=function(r,e,n,t,a,i,o,d,l,f){var u,s,v,c;if(r<=0)return a;for(u=t,s=o,c=0;c<r;c++)void 0!==(v=l.call(f,e[u],c,u,s,e,a))&&(a[s]=d(v)),u+=n,s+=i;return a};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
