import{s as N,n as S,f as O}from"../chunks/scheduler.d35e8dc7.js";import{S as P,i as L,g as m,m as $,s as x,h as _,j as p,n as k,f as h,c as w,l as g,a as d,x as b,o as C,y as q,d as y,b as z,t as v,z as G,r as H,u as I,v as R,w as T,p as D}from"../chunks/index.e88137da.js";function j(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function F(s,e){const l={},c={},a={$$scope:1};let i=s.length;for(;i--;){const f=s[i],t=e[i];if(t){for(const o in f)o in t||(c[o]=1);for(const o in t)a[o]||(l[o]=t[o],a[o]=1);s[i]=t}else for(const o in f)a[o]=1}for(const f in c)f in l||(l[f]=void 0);return l}function J(s){return typeof s=="object"&&s!==null?s:{}}function K(s){let e,l,c,a,i,f;return{c(){e=m("span"),l=m("strong"),c=$(s[0]),a=x(),i=m("span"),f=$(s[1]),this.h()},l(t){e=_(t,"SPAN",{style:!0});var o=p(e);l=_(o,"STRONG",{});var n=p(l);c=k(n,s[0]),n.forEach(h),o.forEach(h),a=w(t),i=_(t,"SPAN",{style:!0});var u=p(i);f=k(u,s[1]),u.forEach(h),this.h()},h(){g(e,"display","inline-block"),g(e,"width","100px"),g(i,"display","inline-block"),g(i,"width","100px")},m(t,o){d(t,e,o),b(e,l),b(l,c),d(t,a,o),d(t,i,o),b(i,f)},p(t,[o]){o&1&&C(c,t[0]),o&2&&C(f,t[1])},i:S,o:S,d(t){t&&(h(e),h(a),h(i))}}}function M(s,e,l){let{name:c}=e,{dob:a}=e;return s.$$set=i=>{"name"in i&&l(0,c=i.name),"dob"in i&&l(1,a=i.dob)},[c,a]}class Q extends P{constructor(e){super(),L(this,e,M,K,N,{name:0,dob:1})}}function A(s,e,l){const c=s.slice();return c[1]=e[l],c}function B(s){let e,l,c,a;const i=[s[1]];let f={};for(let t=0;t<i.length;t+=1)f=O(f,i[t]);return l=new Q({props:f}),{c(){e=m("li"),H(l.$$.fragment),c=x()},l(t){e=_(t,"LI",{});var o=p(e);I(l.$$.fragment,o),c=w(o),o.forEach(h)},m(t,o){d(t,e,o),R(l,e,null),b(e,c),a=!0},p(t,o){const n=o&1?F(i,[J(t[1])]):{};l.$set(n)},i(t){a||(y(l.$$.fragment,t),a=!0)},o(t){v(l.$$.fragment,t),a=!1},d(t){t&&h(e),T(l)}}}function U(s){let e,l="Birthday list",c,a,i,f=j(s[0].birthdays),t=[];for(let n=0;n<f.length;n+=1)t[n]=B(A(s,f,n));const o=n=>v(t[n],1,1,()=>{t[n]=null});return{c(){e=m("h1"),e.textContent=l,c=x(),a=m("ol");for(let n=0;n<t.length;n+=1)t[n].c()},l(n){e=_(n,"H1",{"data-svelte-h":!0}),q(e)!=="svelte-l2gpsr"&&(e.textContent=l),c=w(n),a=_(n,"OL",{});var u=p(a);for(let r=0;r<t.length;r+=1)t[r].l(u);u.forEach(h)},m(n,u){d(n,e,u),d(n,c,u),d(n,a,u);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(a,null);i=!0},p(n,[u]){if(u&1){f=j(n[0].birthdays);let r;for(r=0;r<f.length;r+=1){const E=A(n,f,r);t[r]?(t[r].p(E,u),y(t[r],1)):(t[r]=B(E),t[r].c(),y(t[r],1),t[r].m(a,null))}for(D(),r=f.length;r<t.length;r+=1)o(r);z()}},i(n){if(!i){for(let u=0;u<f.length;u+=1)y(t[u]);i=!0}},o(n){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)v(t[u]);i=!1},d(n){n&&(h(e),h(c),h(a)),G(t,n)}}}function V(s,e,l){let{data:c}=e;return s.$$set=a=>{"data"in a&&l(0,c=a.data)},[c]}class Y extends P{constructor(e){super(),L(this,e,V,U,N,{data:0})}}export{Y as component};