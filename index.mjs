// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";function d(r,d,o,m,l,v,c,f){var j,u;return e(d)&&(j=t(a(d))),e(m)&&(u=s(a(m))),j||u?function(r,e,t,s,n,i,a,d,o,m){var l,v,c,f;if(r<=0)return n;for(l=t<0?(1-r)*t:0,v=i<0?(1-r)*i:0,f=0;f<r;f++)void 0!==(c=o.call(m,s(e,l),f,[l,v],[e,n]))&&a(n,v,d(c)),l+=t,v+=i;return n}(r,d,o,j=j||n(a(d)),m,l,u=u||i(a(m)),v,c,f):function(r,e,t,s,n,i,a,d){var o,m,l,v;if(r<=0)return s;for(o=t<0?(1-r)*t:0,m=n<0?(1-r)*n:0,v=0;v<r;v++)void 0!==(l=a.call(d,e[o],v,[o,m],[e,s]))&&(s[m]=i(l)),o+=t,m+=n;return s}(r,d,o,m,l,v,c,f)}function o(r,d,o,m,l,v,c,f,j,u){var p,h;return e(d)&&(p=t(a(d))),e(l)&&(h=s(a(l))),p||h?function(r,e,t,s,n,i,a,d,o,m,l,v){var c,f,j,u;if(r<=0)return i;for(c=s,f=d,u=0;u<r;u++)void 0!==(j=l.call(v,n(e,c),u,[c,f],[e,i]))&&o(i,f,m(j)),c+=t,f+=a;return i}(r,d,o,m,p=p||n(a(d)),l,v,c,h=h||i(a(l)),f,j,u):function(r,e,t,s,n,i,a,d,o,m){var l,v,c,f;if(r<=0)return n;for(l=s,v=a,f=0;f<r;f++)void 0!==(c=o.call(m,e[l],f,[l,v],[e,n]))&&(n[v]=d(c)),l+=t,v+=i;return n}(r,d,o,m,l,v,c,f,j,u)}r(d,"ndarray",o);export{d as default,o as ndarray};
//# sourceMappingURL=index.mjs.map