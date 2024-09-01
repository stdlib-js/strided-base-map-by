"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=d(function(ur,G){
function K(e,r,u,i,a,t,c,n,s,v){var o,q,p,f;if(e<=0)return a;for(o=i,q=c,f=0;f<e;f++)p=s.call(v,r[o],f,[o,q],[r,a]),p!==void 0&&(a[q]=n(p)),o+=u,q+=t;return a}G.exports=K
});var O=d(function(sr,x){
var S=require('@stdlib/strided-base-stride2offset/dist'),L=g();function M(e,r,u,i,a,t,c,n){return L(e,r,u,S(e,u),i,a,S(e,a),t,c,n)}x.exports=M
});var A=d(function(vr,R){
function P(e,r,u,i,a,t,c,n,s,v,o,q){var p,f,l,m;if(e<=0)return t;for(p=i,f=n,m=0;m<e;m++)l=o.call(q,a(r,p),m,[p,f],[r,t]),l!==void 0&&s(t,f,v(l)),p+=u,f+=c;return t}R.exports=P
});var z=d(function(cr,w){
var j=require('@stdlib/strided-base-stride2offset/dist'),Q=A();function T(e,r,u,i,a,t,c,n,s,v){return Q(e,r,u,j(e,u),i,a,t,j(e,t),c,n,s,v)}w.exports=T
});var E=d(function(nr,D){
var C=require('@stdlib/array-base-assert-is-accessor-array/dist'),U=require('@stdlib/array-base-accessor-getter/dist'),V=require('@stdlib/array-base-accessor-setter/dist'),W=require('@stdlib/array-base-getter/dist'),Z=require('@stdlib/array-base-setter/dist'),B=require('@stdlib/array-dtype/dist'),_=O(),$=z();function b(e,r,u,i,a,t,c,n){var s,v;return C(r)&&(s=U(B(r))),C(i)&&(v=V(B(i))),s||v?(s=s||W(B(r)),v=v||Z(B(i)),$(e,r,u,s,i,a,v,t,c,n)):_(e,r,u,i,a,t,c,n)}D.exports=b
});var I=d(function(or,H){
var F=require('@stdlib/array-base-assert-is-accessor-array/dist'),h=require('@stdlib/array-base-accessor-getter/dist'),k=require('@stdlib/array-base-accessor-setter/dist'),X=require('@stdlib/array-base-getter/dist'),Y=require('@stdlib/array-base-setter/dist'),y=require('@stdlib/array-dtype/dist'),N=g(),rr=A();function er(e,r,u,i,a,t,c,n,s,v){var o,q;return F(r)&&(o=h(y(r))),F(a)&&(q=k(y(a))),o||q?(o=o||X(y(r)),q=q||Y(y(a)),rr(e,r,u,i,o,a,t,c,q,n,s,v)):N(e,r,u,i,a,t,c,n,s,v)}H.exports=er
});var ar=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),J=E(),tr=I();ar(J,"ndarray",tr);module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
