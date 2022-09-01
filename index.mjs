// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t,a,i,o,d){var l,f,s,u;if(r<=0)return t;for(l=e<0?(1-r)*e:0,f=a<0?(1-r)*a:0,u=0;u<r;u++)void 0!==(s=o.call(d,n[l],u,l,f,n,t))&&(t[f]=i(s)),l+=e,f+=a;return t}function e(r,n,e,t,a,i,o,d,l,f){var s,u,c,m;if(r<=0)return a;for(s=t,u=o,m=0;m<r;m++)void 0!==(c=l.call(f,n[s],m,s,u,n,a))&&(a[u]=d(c)),s+=e,u+=i;return a}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
