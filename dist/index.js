"use strict";var l=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var S=l(function(er,G){
function J(a,r,o,s,e,c,f,q){var v,u,t,i;if(a<=0)return s;for(o<0?v=(1-a)*o:v=0,e<0?u=(1-a)*e:u=0,i=0;i<a;i++)t=f.call(q,r[v],i,[v,u],[r,s]),t!==void 0&&(s[u]=c(t)),v+=o,u+=e;return s}G.exports=J
});var x=l(function(ar,d){
function K(a,r,o,s,e,c,f,q,v,u){var t,i,p,n;if(a<=0)return e;for(o<0?t=(1-a)*o:t=0,c<0?i=(1-a)*c:i=0,n=0;n<a;n++)p=v.call(u,s(r,t),n,[t,i],[r,e]),p!==void 0&&f(e,i,q(p)),t+=o,i+=c;return e}d.exports=K
});var j=l(function(ir,R){
var O=require('@stdlib/array-base-assert-is-accessor-array/dist'),L=require('@stdlib/array-base-accessor-getter/dist'),M=require('@stdlib/array-base-accessor-setter/dist'),P=require('@stdlib/array-base-getter/dist'),Q=require('@stdlib/array-base-setter/dist'),B=require('@stdlib/array-dtype/dist'),T=S(),U=x();function V(a,r,o,s,e,c,f,q){var v,u;return O(r)&&(v=L(B(r))),O(s)&&(u=M(B(s))),v||u?(v=v||P(B(r)),u=u||Q(B(s)),U(a,r,o,v,s,e,u,c,f,q)):T(a,r,o,s,e,c,f,q)}R.exports=V
});var z=l(function(tr,w){
function W(a,r,o,s,e,c,f,q,v,u){var t,i,p,n;if(a<=0)return e;for(t=s,i=f,n=0;n<a;n++)p=v.call(u,r[t],n,[t,i],[r,e]),p!==void 0&&(e[i]=q(p)),t+=o,i+=c;return e}w.exports=W
});var D=l(function(vr,C){
function Z(a,r,o,s,e,c,f,q,v,u,t,i){var p,n,A,m;if(a<=0)return c;for(p=s,n=q,m=0;m<a;m++)A=t.call(i,e(r,p),m,[p,n],[r,c]),A!==void 0&&v(c,n,u(A)),p+=o,n+=f;return c}C.exports=Z
});var H=l(function(ur,F){
var E=require('@stdlib/array-base-assert-is-accessor-array/dist'),_=require('@stdlib/array-base-accessor-getter/dist'),$=require('@stdlib/array-base-accessor-setter/dist'),y=require('@stdlib/array-base-getter/dist'),b=require('@stdlib/array-base-setter/dist'),g=require('@stdlib/array-dtype/dist'),h=z(),k=D();function X(a,r,o,s,e,c,f,q,v,u){var t,i;return E(r)&&(t=_(g(r))),E(e)&&(i=$(g(e))),t||i?(t=t||y(g(r)),i=i||b(g(e)),k(a,r,o,s,t,e,c,f,i,q,v,u)):h(a,r,o,s,e,c,f,q,v,u)}F.exports=X
});var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=j(),N=H();Y(I,"ndarray",N);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
