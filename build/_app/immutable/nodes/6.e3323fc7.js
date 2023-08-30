import{s as it,e as ns,i as ge,u as Te,d as v,o as us,f as o,g as r,w as $,a as f,l as p,h as d,c as h,m as g,j as t,k as os,r as e,n as z,x as ds,G as ie}from"../chunks/scheduler.4c84dceb.js";import{S as vt,i as ut,b as pt,d as gt,m as bt,a as Dt,t as Et,e as Ct}from"../chunks/index.11ec2f83.js";import{a as fs}from"../chunks/axios.82afda87.js";import{e as jt}from"../chunks/each.e59479a4.js";function hs(i){let a,s="No se pudieron cargar los datos.";return{c(){a=o("p"),a.textContent=s},l(l){a=r(l,"P",{"data-svelte-h":!0}),$(a)!=="svelte-1gr6ajs"&&(a.textContent=s)},m(l,n){ge(l,a,n)},p:Te,d(l){l&&v(a)}}}function _s(i){let a,s,l,n,u,c,x="Ferrol",j,_,E,M,m,C,w=Math.round(i[3])+"",S,O,D,y,I,V,P,H,k,G,T,U="Humidade",B,N,R,ee,F,L,K,Y="Sensación",J,A,ve=Math.round(i[2])+"",fe,Q,he,te,se,Z="Vento",le,be,we,_e,Ke,me,De='<img src="/cidades/ferrol.png" alt="" class="svelte-1tpgona"/>';return{c(){a=o("div"),s=o("div"),l=o("div"),n=o("div"),u=o("div"),c=o("h4"),c.textContent=x,j=f(),_=o("p"),E=p(i[7]),M=f(),m=o("div"),C=o("h1"),S=p(w),O=p("º"),D=f(),y=o("p"),I=p(i[4]),V=f(),P=o("div"),H=o("div"),k=o("div"),G=o("div"),T=o("p"),T.textContent=U,B=f(),N=o("h4"),R=p(i[0]),ee=p("%"),F=f(),L=o("div"),K=o("p"),K.textContent=Y,J=f(),A=o("h4"),fe=p(ve),Q=p("º"),he=f(),te=o("div"),se=o("p"),se.textContent=Z,le=f(),be=o("h4"),we=p(i[1]),_e=p(" km/h"),Ke=f(),me=o("div"),me.innerHTML=De,this.h()},l(W){a=r(W,"DIV",{class:!0,style:!0});var ae=d(a);s=r(ae,"DIV",{class:!0});var Ye=d(s);l=r(Ye,"DIV",{class:!0});var ne=d(l);n=r(ne,"DIV",{class:!0});var oe=d(n);u=r(oe,"DIV",{class:!0});var xe=d(u);c=r(xe,"H4",{class:!0,"data-svelte-h":!0}),$(c)!=="svelte-1ee26g"&&(c.textContent=x),j=h(xe),_=r(xe,"P",{class:!0});var Ue=d(_);E=g(Ue,i[7]),Ue.forEach(v),xe.forEach(v),M=h(oe),m=r(oe,"DIV",{class:!0});var ue=d(m);C=r(ue,"H1",{class:!0});var Be=d(C);S=g(Be,w),O=g(Be,"º"),Be.forEach(v),D=h(ue),y=r(ue,"P",{class:!0});var Qe=d(y);I=g(Qe,i[4]),Qe.forEach(v),ue.forEach(v),V=h(oe),P=r(oe,"DIV",{class:!0});var Ee=d(P);H=r(Ee,"DIV",{class:!0});var Se=d(H);k=r(Se,"DIV",{class:!0});var Ce=d(k);G=r(Ce,"DIV",{class:!0});var He=d(G);T=r(He,"P",{class:!0,"data-svelte-h":!0}),$(T)!=="svelte-tsib6v"&&(T.textContent=U),B=h(He),N=r(He,"H4",{class:!0});var re=d(N);R=g(re,i[0]),ee=g(re,"%"),re.forEach(v),He.forEach(v),F=h(Ce),L=r(Ce,"DIV",{class:!0});var de=d(L);K=r(de,"P",{class:!0,"data-svelte-h":!0}),$(K)!=="svelte-1b66wfj"&&(K.textContent=Y),J=h(de),A=r(de,"H4",{class:!0});var We=d(A);fe=g(We,ve),Q=g(We,"º"),We.forEach(v),de.forEach(v),he=h(Ce),te=r(Ce,"DIV",{class:!0});var Pe=d(te);se=r(Pe,"P",{class:!0,"data-svelte-h":!0}),$(se)!=="svelte-1xiwqsg"&&(se.textContent=Z),le=h(Pe),be=r(Pe,"H4",{class:!0});var pe=d(be);we=g(pe,i[1]),_e=g(pe," km/h"),pe.forEach(v),Pe.forEach(v),Ce.forEach(v),Se.forEach(v),Ee.forEach(v),oe.forEach(v),Ke=h(ne),me=r(ne,"DIV",{class:!0,"data-svelte-h":!0}),$(me)!=="svelte-13gnik"&&(me.innerHTML=De),ne.forEach(v),Ye.forEach(v),ae.forEach(v),this.h()},h(){t(c,"class","svelte-1tpgona"),t(_,"class","svelte-1tpgona"),t(u,"class","fechaLugar svelte-1tpgona"),t(C,"class","svelte-1tpgona"),t(y,"class","svelte-1tpgona"),t(m,"class","temperaturaTiempo svelte-1tpgona"),t(T,"class","svelte-1tpgona"),t(N,"class","svelte-1tpgona"),t(G,"class","col s4 datos_pills svelte-1tpgona"),t(K,"class","svelte-1tpgona"),t(A,"class","svelte-1tpgona"),t(L,"class","col s4 datos_pills raya svelte-1tpgona"),t(se,"class","svelte-1tpgona"),t(be,"class","svelte-1tpgona"),t(te,"class","col s4 datos_pills svelte-1tpgona"),t(k,"class","row"),t(H,"class","datos_capsula svelte-1tpgona"),t(P,"class","datos svelte-1tpgona"),t(n,"class","col s12"),t(me,"class","cidades_img svelte-1tpgona"),t(l,"class","row"),t(s,"class","container"),t(a,"class","fondo svelte-1tpgona"),os(a,"background-image","url("+i[6]+")")},m(W,ae){ge(W,a,ae),e(a,s),e(s,l),e(l,n),e(n,u),e(u,c),e(u,j),e(u,_),e(_,E),e(n,M),e(n,m),e(m,C),e(C,S),e(C,O),e(m,D),e(m,y),e(y,I),e(n,V),e(n,P),e(P,H),e(H,k),e(k,G),e(G,T),e(G,B),e(G,N),e(N,R),e(N,ee),e(k,F),e(k,L),e(L,K),e(L,J),e(L,A),e(A,fe),e(A,Q),e(k,he),e(k,te),e(te,se),e(te,le),e(te,be),e(be,we),e(be,_e),e(l,Ke),e(l,me)},p(W,ae){ae&8&&w!==(w=Math.round(W[3])+"")&&z(S,w),ae&16&&z(I,W[4]),ae&1&&z(R,W[0]),ae&4&&ve!==(ve=Math.round(W[2])+"")&&z(fe,ve),ae&2&&z(we,W[1]),ae&64&&os(a,"background-image","url("+W[6]+")")},d(W){W&&v(a)}}}function ms(i){let a;function s(u,c){return u[5]!==null?_s:hs}let l=s(i),n=l(i);return{c(){n.c(),a=ns()},l(u){n.l(u),a=ns()},m(u,c){n.m(u,c),ge(u,a,c)},p(u,[c]){l===(l=s(u))&&n?n.p(u,c):(n.d(1),n=l(u),n&&(n.c(),n.m(a.parentNode,a)))},i:Te,o:Te,d(u){u&&v(a),n.d(u)}}}function ps(){const i=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],a=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],s=new Date,l=i[s.getDay()],n=s.getDate(),u=a[s.getMonth()],c=s.getFullYear();return`${l}, ${n} de ${u} de ${c}`}function gs(i,a,s){const l="3e867330616c39fa60d18a1af5d82f16";let{humidade:n}=a,{vento:u}=a,{sensacion:c}=a;const x=ps();console.log(x);let j="",_="",E="";var M=null;let m="";return us(async()=>{let C=43.4842336,w=-8.2358432;console.log(C),j=`lat=${C}&lon=${w}`,console.log(j),fs.get(`https://api.openweathermap.org/data/2.5/weather?${j}&appid=${l}&units=metric&lang=gl`).then(S=>{switch(s(5,M=S.data),console.log(S.data),M.name,s(3,_=M.main.temp),s(4,E=M.weather[0].description),M.weather[0].icon){case"01d":s(6,m=O());break;case"01n":s(6,m=D());break;case"02d":s(6,m=y());break;case"02n":s(6,m=I());break;case"03d":s(6,m=V());break;case"03n":s(6,m=P());break;case"04d":s(6,m=H());break;case"04n":s(6,m=H());break;case"09d":s(6,m=k());break;case"09n":s(6,m=k());break;case"10d":s(6,m=G());break;case"10n":s(6,m=G());break;case"11d":s(6,m=T());break;case"11n":s(6,m=T());break;case"13d":s(6,m=U());break;case"13n":s(6,m=U());break;case"50d":s(6,m=B());break;case"50n":s(6,m=B());break;case"unknown":s(6,m=N());break}function O(){return"./fondos/fondo_soleado.png"}function D(){return"./fondos/fondo_noite_clara.png"}function y(){return"./fondos/fondo_soleado_poucas_nubes.png"}function I(){return"./fondos/fondo_noite_poucas_nubes.png"}function V(){return"./fondos/fondo_nublado.png"}function P(){return"./fondos/fondo_noite_nublado.png"}function H(){return"./fondos/fondo_nublado.png"}function k(){return"./fondos/fondo_moita_choiva.png"}function G(){return"./fondos/fondo_pouca_choiva.png"}function T(){return"./fondos/fondo_tormenta.png"}function U(){return"./fondos/fondo_neve.png"}function B(){return"./fondos/fondo_neboa.png"}function N(){return"./fondos/unknown.png"}})}),i.$$set=C=>{"humidade"in C&&s(0,n=C.humidade),"vento"in C&&s(1,u=C.vento),"sensacion"in C&&s(2,c=C.sensacion)},[n,u,c,_,E,M,m,x]}class bs extends vt{constructor(a){super(),ut(this,a,gs,ms,it,{humidade:0,vento:1,sensacion:2})}}function rs(i,a,s){const l=i.slice();return l[1]=a[s],l}function cs(i){let a,s,l,n,u=i[1].time+"",c,x,j,_,E,M,m,C,w,S=Math.round(i[1].temperature)+"",O,D,y;return{c(){a=o("div"),s=o("div"),l=o("p"),n=o("strong"),c=p(u),x=p("h"),j=f(),_=o("div"),E=o("img"),m=f(),C=o("div"),w=o("h4"),O=p(S),D=p("°"),y=f(),this.h()},l(I){a=r(I,"DIV",{class:!0});var V=d(a);s=r(V,"DIV",{});var P=d(s);l=r(P,"P",{class:!0});var H=d(l);n=r(H,"STRONG",{});var k=d(n);c=g(k,u),x=g(k,"h"),k.forEach(v),H.forEach(v),P.forEach(v),j=h(V),_=r(V,"DIV",{class:!0});var G=d(_);E=r(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(v),m=h(V),C=r(V,"DIV",{});var T=d(C);w=r(T,"H4",{class:!0});var U=d(w);O=g(U,S),D=g(U,"°"),U.forEach(v),T.forEach(v),y=h(V),V.forEach(v),this.h()},h(){t(l,"class","svelte-12dn4pd"),ie(E.src,M="./iconsTempo/"+i[1].icon+".gif")||t(E,"src",M),t(E,"alt","icono"),t(E,"class","svelte-12dn4pd"),t(_,"class","weather-icon center"),t(w,"class","svelte-12dn4pd"),t(a,"class","horas_venideiras svelte-12dn4pd")},m(I,V){ge(I,a,V),e(a,s),e(s,l),e(l,n),e(n,c),e(n,x),e(a,j),e(a,_),e(_,E),e(a,m),e(a,C),e(C,w),e(w,O),e(w,D),e(a,y)},p(I,V){V&1&&u!==(u=I[1].time+"")&&z(c,u),V&1&&!ie(E.src,M="./iconsTempo/"+I[1].icon+".gif")&&t(E,"src",M),V&1&&S!==(S=Math.round(I[1].temperature)+"")&&z(O,S)},d(I){I&&v(a)}}}function Ds(i){let a,s=jt(i[0]),l=[];for(let n=0;n<s.length;n+=1)l[n]=cs(rs(i,s,n));return{c(){a=o("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){a=r(n,"DIV",{class:!0});var u=d(a);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(v),this.h()},h(){t(a,"class","caixa_horas svelte-12dn4pd")},m(n,u){ge(n,a,u);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(a,null)},p(n,[u]){if(u&1){s=jt(n[0]);let c;for(c=0;c<s.length;c+=1){const x=rs(n,s,c);l[c]?l[c].p(x,u):(l[c]=cs(x),l[c].c(),l[c].m(a,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},i:Te,o:Te,d(n){n&&v(a),ds(l,n)}}}function Es(i,a,s){let{TiempoHoras:l}=a;return i.$$set=n=>{"TiempoHoras"in n&&s(0,l=n.TiempoHoras)},[l]}class Cs extends vt{constructor(a){super(),ut(this,a,Es,Ds,it,{TiempoHoras:0})}}function is(i,a,s){const l=i.slice();return l[1]=a[s],l}function vs(i){let a,s,l,n,u=i[1].dianome+"",c,x,j,_=i[1].dia+"",E,M,m=i[1].mes+"",C,w,S=i[1].ano+"",O,D,y,I,V,P,H,k,G=Math.round(i[1].tempmax)+"",T,U,B,N,R,ee=Math.round(i[1].tempmin)+"",F,L,K;return{c(){a=o("div"),s=o("div"),l=o("div"),n=o("h4"),c=p(u),x=f(),j=o("p"),E=p(_),M=f(),C=p(m),w=f(),O=p(S),D=f(),y=o("div"),I=o("img"),P=f(),H=o("div"),k=o("h3"),T=p(G),U=p("º"),B=f(),N=o("div"),R=o("h3"),F=p(ee),L=p("º"),K=f(),this.h()},l(Y){a=r(Y,"DIV",{class:!0});var J=d(a);s=r(J,"DIV",{class:!0});var A=d(s);l=r(A,"DIV",{class:!0});var ve=d(l);n=r(ve,"H4",{class:!0});var fe=d(n);c=g(fe,u),fe.forEach(v),x=h(ve),j=r(ve,"P",{class:!0});var Q=d(j);E=g(Q,_),M=h(Q),C=g(Q,m),w=h(Q),O=g(Q,S),Q.forEach(v),ve.forEach(v),D=h(A),y=r(A,"DIV",{class:!0});var he=d(y);I=r(he,"IMG",{src:!0,alt:!0,class:!0}),he.forEach(v),P=h(A),H=r(A,"DIV",{class:!0});var te=d(H);k=r(te,"H3",{class:!0});var se=d(k);T=g(se,G),U=g(se,"º"),se.forEach(v),te.forEach(v),B=h(A),N=r(A,"DIV",{class:!0});var Z=d(N);R=r(Z,"H3",{class:!0});var le=d(R);F=g(le,ee),L=g(le,"º"),le.forEach(v),Z.forEach(v),A.forEach(v),K=h(J),J.forEach(v),this.h()},h(){t(n,"class","svelte-qktj3x"),t(j,"class","svelte-qktj3x"),t(l,"class","col s4 valign-wrappe"),ie(I.src,V="./iconsTempo/"+i[1].icon+".gif")||t(I,"src",V),t(I,"alt","icono"),t(I,"class","svelte-qktj3x"),t(y,"class","col s4 iconos svelte-qktj3x"),t(k,"class","svelte-qktj3x"),t(H,"class","col s2"),t(R,"class","svelte-qktj3x"),t(N,"class","col s2"),t(s,"class","row"),t(a,"class","dias_venideiros svelte-qktj3x")},m(Y,J){ge(Y,a,J),e(a,s),e(s,l),e(l,n),e(n,c),e(l,x),e(l,j),e(j,E),e(j,M),e(j,C),e(j,w),e(j,O),e(s,D),e(s,y),e(y,I),e(s,P),e(s,H),e(H,k),e(k,T),e(k,U),e(s,B),e(s,N),e(N,R),e(R,F),e(R,L),e(a,K)},p(Y,J){J&1&&u!==(u=Y[1].dianome+"")&&z(c,u),J&1&&_!==(_=Y[1].dia+"")&&z(E,_),J&1&&m!==(m=Y[1].mes+"")&&z(C,m),J&1&&S!==(S=Y[1].ano+"")&&z(O,S),J&1&&!ie(I.src,V="./iconsTempo/"+Y[1].icon+".gif")&&t(I,"src",V),J&1&&G!==(G=Math.round(Y[1].tempmax)+"")&&z(T,G),J&1&&ee!==(ee=Math.round(Y[1].tempmin)+"")&&z(F,ee)},d(Y){Y&&v(a)}}}function js(i){let a,s=jt(i[0]),l=[];for(let n=0;n<s.length;n+=1)l[n]=vs(is(i,s,n));return{c(){a=o("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){a=r(n,"DIV",{class:!0});var u=d(a);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(v),this.h()},h(){t(a,"class","caixas_dias svelte-qktj3x")},m(n,u){ge(n,a,u);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(a,null)},p(n,[u]){if(u&1){s=jt(n[0]);let c;for(c=0;c<s.length;c+=1){const x=is(n,s,c);l[c]?l[c].p(x,u):(l[c]=vs(x),l[c].c(),l[c].m(a,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},i:Te,o:Te,d(n){n&&v(a),ds(l,n)}}}function ks(i,a,s){let{TiempoDias:l}=a;return i.$$set=n=>{"TiempoDias"in n&&s(0,l=n.TiempoDias)},[l]}class Is extends vt{constructor(a){super(),ut(this,a,ks,js,it,{TiempoDias:0})}}function Vs(i){let a,s,l,n,u,c,x,j,_,E,M,m,C,w,S="Temp. Max.",O,D,y,I,V,P,H,k,G,T,U="Temp. Min.",B,N,R,ee,F,L,K,Y,J,A,ve="Vento",fe,Q,he,te,se,Z,le,be,we,_e,Ke="Sensación",me,De,W,ae,Ye,ne,oe,xe,Ue,ue,Be="Humidade",Qe,Ee,Se,Ce,He,re,de,We,Pe,pe,Ut="Presión",kt,Ge,dt,It,Vt,je,Ne,Bt,Mt,qe,Qt="Indice UV",wt,ye,ft,Ht,Pt,ke,Fe,Wt,Tt,Ae,Zt="Visibilidade",xt,Oe,ht,St,Gt,Ie,Le,$t,Nt,Xe,es="Amancer",qt,Ze,_t,yt,Ve,ze,ts,Ft,Je,ss="Solpor",At,$e,mt,ce;return a=new bs({props:{humidade:i[6],sensacion:i[5],vento:i[4]}}),n=new Cs({props:{TiempoHoras:i[0]}}),c=new Is({props:{TiempoDias:i[1]}}),{c(){pt(a.$$.fragment),s=f(),l=o("div"),pt(n.$$.fragment),u=f(),pt(c.$$.fragment),x=f(),j=o("div"),_=o("div"),E=o("div"),M=o("img"),C=f(),w=o("p"),w.textContent=S,O=f(),D=o("h4"),y=p(i[2]),I=p("ºC"),V=f(),P=o("div"),H=o("img"),G=f(),T=o("p"),T.textContent=U,B=f(),N=o("h4"),R=p(i[3]),ee=p("ºC"),F=f(),L=o("div"),K=o("img"),J=f(),A=o("p"),A.textContent=ve,fe=f(),Q=o("h4"),he=p(i[4]),te=p(" km/h"),se=f(),Z=o("div"),le=o("img"),we=f(),_e=o("p"),_e.textContent=Ke,me=f(),De=o("h4"),W=p(i[5]),ae=p(" ºC"),Ye=f(),ne=o("div"),oe=o("img"),Ue=f(),ue=o("p"),ue.textContent=Be,Qe=f(),Ee=o("h4"),Se=p(i[6]),Ce=p(" %"),He=f(),re=o("div"),de=o("img"),Pe=f(),pe=o("p"),pe.textContent=Ut,kt=f(),Ge=o("h4"),dt=p(i[7]),It=p(" hPa"),Vt=f(),je=o("div"),Ne=o("img"),Mt=f(),qe=o("p"),qe.textContent=Qt,wt=f(),ye=o("h4"),ft=p(i[9]),Ht=p("/10"),Pt=f(),ke=o("div"),Fe=o("img"),Tt=f(),Ae=o("p"),Ae.textContent=Zt,xt=f(),Oe=o("h4"),ht=p(i[8]),St=p(" m"),Gt=f(),Ie=o("div"),Le=o("img"),Nt=f(),Xe=o("p"),Xe.textContent=es,qt=f(),Ze=o("h4"),_t=p(i[10]),yt=f(),Ve=o("div"),ze=o("img"),Ft=f(),Je=o("p"),Je.textContent=ss,At=f(),$e=o("h4"),mt=p(i[11]),this.h()},l(b){gt(a.$$.fragment,b),s=h(b),l=r(b,"DIV",{class:!0});var q=d(l);gt(n.$$.fragment,q),u=h(q),gt(c.$$.fragment,q),q.forEach(v),x=h(b),j=r(b,"DIV",{class:!0});var Re=d(j);_=r(Re,"DIV",{class:!0});var X=d(_);E=r(X,"DIV",{class:!0});var Me=d(E);M=r(Me,"IMG",{src:!0,alt:!0,class:!0}),C=h(Me),w=r(Me,"P",{class:!0,"data-svelte-h":!0}),$(w)!=="svelte-m2md8"&&(w.textContent=S),O=h(Me),D=r(Me,"H4",{class:!0});var Ot=d(D);y=g(Ot,i[2]),I=g(Ot,"ºC"),Ot.forEach(v),Me.forEach(v),V=h(X),P=r(X,"DIV",{class:!0});var et=d(P);H=r(et,"IMG",{src:!0,alt:!0,class:!0}),G=h(et),T=r(et,"P",{class:!0,"data-svelte-h":!0}),$(T)!=="svelte-4a7uba"&&(T.textContent=U),B=h(et),N=r(et,"H4",{class:!0});var Lt=d(N);R=g(Lt,i[3]),ee=g(Lt,"ºC"),Lt.forEach(v),et.forEach(v),F=h(X),L=r(X,"DIV",{class:!0});var tt=d(L);K=r(tt,"IMG",{src:!0,alt:!0,class:!0}),J=h(tt),A=r(tt,"P",{class:!0,"data-svelte-h":!0}),$(A)!=="svelte-1xiwqsg"&&(A.textContent=ve),fe=h(tt),Q=r(tt,"H4",{class:!0});var Xt=d(Q);he=g(Xt,i[4]),te=g(Xt," km/h"),Xt.forEach(v),tt.forEach(v),se=h(X),Z=r(X,"DIV",{class:!0});var st=d(Z);le=r(st,"IMG",{src:!0,alt:!0,class:!0}),we=h(st),_e=r(st,"P",{class:!0,"data-svelte-h":!0}),$(_e)!=="svelte-1b66wfj"&&(_e.textContent=Ke),me=h(st),De=r(st,"H4",{class:!0});var zt=d(De);W=g(zt,i[5]),ae=g(zt," ºC"),zt.forEach(v),st.forEach(v),Ye=h(X),ne=r(X,"DIV",{class:!0});var lt=d(ne);oe=r(lt,"IMG",{src:!0,alt:!0,class:!0}),Ue=h(lt),ue=r(lt,"P",{class:!0,"data-svelte-h":!0}),$(ue)!=="svelte-tsib6v"&&(ue.textContent=Be),Qe=h(lt),Ee=r(lt,"H4",{class:!0});var Jt=d(Ee);Se=g(Jt,i[6]),Ce=g(Jt," %"),Jt.forEach(v),lt.forEach(v),He=h(X),re=r(X,"DIV",{class:!0});var at=d(re);de=r(at,"IMG",{src:!0,alt:!0,class:!0}),Pe=h(at),pe=r(at,"P",{class:!0,"data-svelte-h":!0}),$(pe)!=="svelte-4v31ok"&&(pe.textContent=Ut),kt=h(at),Ge=r(at,"H4",{class:!0});var Rt=d(Ge);dt=g(Rt,i[7]),It=g(Rt," hPa"),Rt.forEach(v),at.forEach(v),Vt=h(X),je=r(X,"DIV",{class:!0});var nt=d(je);Ne=r(nt,"IMG",{src:!0,alt:!0,class:!0}),Mt=h(nt),qe=r(nt,"P",{class:!0,"data-svelte-h":!0}),$(qe)!=="svelte-1nk0d9r"&&(qe.textContent=Qt),wt=h(nt),ye=r(nt,"H4",{class:!0});var Kt=d(ye);ft=g(Kt,i[9]),Ht=g(Kt,"/10"),Kt.forEach(v),nt.forEach(v),Pt=h(X),ke=r(X,"DIV",{class:!0});var ot=d(ke);Fe=r(ot,"IMG",{src:!0,alt:!0,class:!0}),Tt=h(ot),Ae=r(ot,"P",{class:!0,"data-svelte-h":!0}),$(Ae)!=="svelte-18vrm1t"&&(Ae.textContent=Zt),xt=h(ot),Oe=r(ot,"H4",{class:!0});var Yt=d(Oe);ht=g(Yt,i[8]),St=g(Yt," m"),Yt.forEach(v),ot.forEach(v),Gt=h(X),Ie=r(X,"DIV",{class:!0});var rt=d(Ie);Le=r(rt,"IMG",{src:!0,alt:!0,class:!0}),Nt=h(rt),Xe=r(rt,"P",{class:!0,"data-svelte-h":!0}),$(Xe)!=="svelte-llqjzt"&&(Xe.textContent=es),qt=h(rt),Ze=r(rt,"H4",{class:!0});var ls=d(Ze);_t=g(ls,i[10]),ls.forEach(v),rt.forEach(v),yt=h(X),Ve=r(X,"DIV",{class:!0});var ct=d(Ve);ze=r(ct,"IMG",{src:!0,alt:!0,class:!0}),Ft=h(ct),Je=r(ct,"P",{class:!0,"data-svelte-h":!0}),$(Je)!=="svelte-1lz7hxp"&&(Je.textContent=ss),At=h(ct),$e=r(ct,"H4",{class:!0});var as=d($e);mt=g(as,i[11]),as.forEach(v),ct.forEach(v),X.forEach(v),Re.forEach(v),this.h()},h(){t(l,"class","posicion svelte-1v7nbjt"),ie(M.src,m="./iconos/temperMax.png")||t(M,"src",m),t(M,"alt",""),t(M,"class","svelte-1v7nbjt"),t(w,"class","svelte-1v7nbjt"),t(D,"class","svelte-1v7nbjt"),t(E,"class","col s6 caixas svelte-1v7nbjt"),ie(H.src,k="./iconos/temperMin.png")||t(H,"src",k),t(H,"alt",""),t(H,"class","svelte-1v7nbjt"),t(T,"class","svelte-1v7nbjt"),t(N,"class","svelte-1v7nbjt"),t(P,"class","col s6 caixas svelte-1v7nbjt"),ie(K.src,Y="./iconos/wind.png")||t(K,"src",Y),t(K,"alt",""),t(K,"class","svelte-1v7nbjt"),t(A,"class","svelte-1v7nbjt"),t(Q,"class","svelte-1v7nbjt"),t(L,"class","col s6 caixas svelte-1v7nbjt"),ie(le.src,be="./iconos/feel_like.png")||t(le,"src",be),t(le,"alt",""),t(le,"class","svelte-1v7nbjt"),t(_e,"class","svelte-1v7nbjt"),t(De,"class","svelte-1v7nbjt"),t(Z,"class","col s6 caixas svelte-1v7nbjt"),ie(oe.src,xe="./iconos/humidity.png")||t(oe,"src",xe),t(oe,"alt",""),t(oe,"class","svelte-1v7nbjt"),t(ue,"class","svelte-1v7nbjt"),t(Ee,"class","svelte-1v7nbjt"),t(ne,"class","col s6 caixas svelte-1v7nbjt"),ie(de.src,We="./iconos/pressure.png")||t(de,"src",We),t(de,"alt",""),t(de,"class","svelte-1v7nbjt"),t(pe,"class","svelte-1v7nbjt"),t(Ge,"class","svelte-1v7nbjt"),t(re,"class","col s6 caixas svelte-1v7nbjt"),ie(Ne.src,Bt="./iconos/uvi.png")||t(Ne,"src",Bt),t(Ne,"alt",""),t(Ne,"class","svelte-1v7nbjt"),t(qe,"class","svelte-1v7nbjt"),t(ye,"class","svelte-1v7nbjt"),t(je,"class","col s6 caixas svelte-1v7nbjt"),ie(Fe.src,Wt="./iconos/visibilidad.png")||t(Fe,"src",Wt),t(Fe,"alt",""),t(Fe,"class","svelte-1v7nbjt"),t(Ae,"class","svelte-1v7nbjt"),t(Oe,"class","svelte-1v7nbjt"),t(ke,"class","col s6 caixas svelte-1v7nbjt"),ie(Le.src,$t="./iconos/sunrise.png")||t(Le,"src",$t),t(Le,"alt",""),t(Le,"class","svelte-1v7nbjt"),t(Xe,"class","svelte-1v7nbjt"),t(Ze,"class","svelte-1v7nbjt"),t(Ie,"class","col s6 caixas svelte-1v7nbjt"),ie(ze.src,ts="./iconos/sunset.png")||t(ze,"src",ts),t(ze,"alt",""),t(ze,"class","svelte-1v7nbjt"),t(Je,"class","svelte-1v7nbjt"),t($e,"class","svelte-1v7nbjt"),t(Ve,"class","col s6 caixas svelte-1v7nbjt"),t(_,"class","row"),t(j,"class","datosTecnicos svelte-1v7nbjt")},m(b,q){bt(a,b,q),ge(b,s,q),ge(b,l,q),bt(n,l,null),e(l,u),bt(c,l,null),ge(b,x,q),ge(b,j,q),e(j,_),e(_,E),e(E,M),e(E,C),e(E,w),e(E,O),e(E,D),e(D,y),e(D,I),e(_,V),e(_,P),e(P,H),e(P,G),e(P,T),e(P,B),e(P,N),e(N,R),e(N,ee),e(_,F),e(_,L),e(L,K),e(L,J),e(L,A),e(L,fe),e(L,Q),e(Q,he),e(Q,te),e(_,se),e(_,Z),e(Z,le),e(Z,we),e(Z,_e),e(Z,me),e(Z,De),e(De,W),e(De,ae),e(_,Ye),e(_,ne),e(ne,oe),e(ne,Ue),e(ne,ue),e(ne,Qe),e(ne,Ee),e(Ee,Se),e(Ee,Ce),e(_,He),e(_,re),e(re,de),e(re,Pe),e(re,pe),e(re,kt),e(re,Ge),e(Ge,dt),e(Ge,It),e(_,Vt),e(_,je),e(je,Ne),e(je,Mt),e(je,qe),e(je,wt),e(je,ye),e(ye,ft),e(ye,Ht),e(_,Pt),e(_,ke),e(ke,Fe),e(ke,Tt),e(ke,Ae),e(ke,xt),e(ke,Oe),e(Oe,ht),e(Oe,St),e(_,Gt),e(_,Ie),e(Ie,Le),e(Ie,Nt),e(Ie,Xe),e(Ie,qt),e(Ie,Ze),e(Ze,_t),e(_,yt),e(_,Ve),e(Ve,ze),e(Ve,Ft),e(Ve,Je),e(Ve,At),e(Ve,$e),e($e,mt),ce=!0},p(b,[q]){const Re={};q&64&&(Re.humidade=b[6]),q&32&&(Re.sensacion=b[5]),q&16&&(Re.vento=b[4]),a.$set(Re);const X={};q&1&&(X.TiempoHoras=b[0]),n.$set(X);const Me={};q&2&&(Me.TiempoDias=b[1]),c.$set(Me),(!ce||q&4)&&z(y,b[2]),(!ce||q&8)&&z(R,b[3]),(!ce||q&16)&&z(he,b[4]),(!ce||q&32)&&z(W,b[5]),(!ce||q&64)&&z(Se,b[6]),(!ce||q&128)&&z(dt,b[7]),(!ce||q&512)&&z(ft,b[9]),(!ce||q&256)&&z(ht,b[8]),(!ce||q&1024)&&z(_t,b[10]),(!ce||q&2048)&&z(mt,b[11])},i(b){ce||(Dt(a.$$.fragment,b),Dt(n.$$.fragment,b),Dt(c.$$.fragment,b),ce=!0)},o(b){Et(a.$$.fragment,b),Et(n.$$.fragment,b),Et(c.$$.fragment,b),ce=!1},d(b){b&&(v(s),v(l),v(x),v(j)),Ct(a,b),Ct(n),Ct(c)}}}function Ms(i,a,s){const l="3e867330616c39fa60d18a1af5d82f16";let n="",u="",c="",x="",j="",_="",E="",M="",m="",C="",w="",S=[],O=[];var D=null;return i.$$.update=()=>{i.$$.dirty&12291&&us(async()=>{s(12,n=`?lat=${43.4842336}&lon=${-8.2358432}`),console.log(n),fs.get(`https://api.openweathermap.org/data/2.5/onecall${n}&exclude=minutely&appid=${l}&units=metric&lang=gl`).then(V=>{s(13,D=V.data),console.log(V.data),s(2,u=D.daily[0].temp.max),s(3,c=D.daily[0].temp.min),s(4,x=D.daily[0].wind_speed),s(5,j=D.current.feels_like),s(6,_=D.daily[0].humidity),s(7,E=D.daily[0].pressure),s(8,M=D.current.visibility),s(9,m=D.current.uvi),s(0,S=D.hourly.slice(1,17).map(F=>({temperature:F.temp,icon:F.weather[0].icon,time:new Date(F.dt*1e3).getHours()}))),console.log(S);var P=["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"],H=["Xan.","Feb.","Mar.","Abr.","Mai.","Xuñ.","Xul.","Ago.","Set.","Out.","Nov.","Dec."];s(1,O=D.daily.slice(1,6).map(F=>({tempmax:F.temp.max,tempmin:F.temp.min,icon:F.weather[0].icon,mes:H[new Date(F.dt*1e3).getMonth()],dia:new Date(F.dt*1e3).getDay(),dianome:P[new Date(F.dt*1e3).getDay()],ano:new Date(F.dt*1e3).getFullYear()}))),console.log(O);const k=new Date(D.current.sunrise*1e3),G=k.getHours(),T=k.getMinutes(),U=k.getSeconds();s(10,C=`${G}:${T}:${U}`);const B=new Date(D.current.sunset*1e3),N=B.getHours(),R=B.getMinutes(),ee=B.getSeconds();s(11,w=`${N}:${R}:${ee}`)})})},[S,O,u,c,x,j,_,E,M,m,C,w,n,D]}class ws extends vt{constructor(a){super(),ut(this,a,Ms,Vs,it,{})}}function Hs(i){let a,s;return a=new ws({}),{c(){pt(a.$$.fragment)},l(l){gt(a.$$.fragment,l)},m(l,n){bt(a,l,n),s=!0},p:Te,i(l){s||(Dt(a.$$.fragment,l),s=!0)},o(l){Et(a.$$.fragment,l),s=!1},d(l){Ct(a,l)}}}class Gs extends vt{constructor(a){super(),ut(this,a,null,Hs,it,{})}}export{Gs as component};
