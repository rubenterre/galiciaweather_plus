import{s as it,e as rs,i as ge,u as Te,d,o as us,f as o,g as n,w as $,a as h,l as p,h as v,c as f,m as g,j as t,k as os,r as e,n as X,x as vs,G as ie}from"../chunks/scheduler.4c84dceb.js";import{S as dt,i as ut,b as pt,d as gt,m as bt,a as Dt,t as Et,e as Ct}from"../chunks/index.11ec2f83.js";import{a as hs}from"../chunks/axios.82afda87.js";import{e as yt}from"../chunks/each.e59479a4.js";function fs(i){let a,s="No se pudieron cargar los datos.";return{c(){a=o("p"),a.textContent=s},l(l){a=n(l,"P",{"data-svelte-h":!0}),$(a)!=="svelte-1gr6ajs"&&(a.textContent=s)},m(l,r){ge(l,a,r)},p:Te,d(l){l&&d(a)}}}function _s(i){let a,s,l,r,u,c,x="Ourense",y,_,E,M,m,C,w=Math.round(i[3])+"",z,A,D,j,I,V,P,H,k,S,T,U="Humidade",B,G,R,ee,q,F,K,Y="Sensación",J,O,de=Math.round(i[2])+"",he,Q,fe,te,se,Z="Vento",le,be,we,_e,Ke,me,De='<img src="/cidades/ourense.png" alt="" class="svelte-zeh11o"/>';return{c(){a=o("div"),s=o("div"),l=o("div"),r=o("div"),u=o("div"),c=o("h4"),c.textContent=x,y=h(),_=o("p"),E=p(i[7]),M=h(),m=o("div"),C=o("h1"),z=p(w),A=p("º"),D=h(),j=o("p"),I=p(i[4]),V=h(),P=o("div"),H=o("div"),k=o("div"),S=o("div"),T=o("p"),T.textContent=U,B=h(),G=o("h4"),R=p(i[0]),ee=p("%"),q=h(),F=o("div"),K=o("p"),K.textContent=Y,J=h(),O=o("h4"),he=p(de),Q=p("º"),fe=h(),te=o("div"),se=o("p"),se.textContent=Z,le=h(),be=o("h4"),we=p(i[1]),_e=p(" km/h"),Ke=h(),me=o("div"),me.innerHTML=De,this.h()},l(W){a=n(W,"DIV",{class:!0,style:!0});var ae=v(a);s=n(ae,"DIV",{class:!0});var Ye=v(s);l=n(Ye,"DIV",{class:!0});var re=v(l);r=n(re,"DIV",{class:!0});var oe=v(r);u=n(oe,"DIV",{class:!0});var xe=v(u);c=n(xe,"H4",{class:!0,"data-svelte-h":!0}),$(c)!=="svelte-8o9udx"&&(c.textContent=x),y=f(xe),_=n(xe,"P",{class:!0});var Ue=v(_);E=g(Ue,i[7]),Ue.forEach(d),xe.forEach(d),M=f(oe),m=n(oe,"DIV",{class:!0});var ue=v(m);C=n(ue,"H1",{class:!0});var Be=v(C);z=g(Be,w),A=g(Be,"º"),Be.forEach(d),D=f(ue),j=n(ue,"P",{class:!0});var Qe=v(j);I=g(Qe,i[4]),Qe.forEach(d),ue.forEach(d),V=f(oe),P=n(oe,"DIV",{class:!0});var Ee=v(P);H=n(Ee,"DIV",{class:!0});var ze=v(H);k=n(ze,"DIV",{class:!0});var Ce=v(k);S=n(Ce,"DIV",{class:!0});var He=v(S);T=n(He,"P",{class:!0,"data-svelte-h":!0}),$(T)!=="svelte-tsib6v"&&(T.textContent=U),B=f(He),G=n(He,"H4",{class:!0});var ne=v(G);R=g(ne,i[0]),ee=g(ne,"%"),ne.forEach(d),He.forEach(d),q=f(Ce),F=n(Ce,"DIV",{class:!0});var ve=v(F);K=n(ve,"P",{class:!0,"data-svelte-h":!0}),$(K)!=="svelte-1b66wfj"&&(K.textContent=Y),J=f(ve),O=n(ve,"H4",{class:!0});var We=v(O);he=g(We,de),Q=g(We,"º"),We.forEach(d),ve.forEach(d),fe=f(Ce),te=n(Ce,"DIV",{class:!0});var Pe=v(te);se=n(Pe,"P",{class:!0,"data-svelte-h":!0}),$(se)!=="svelte-1xiwqsg"&&(se.textContent=Z),le=f(Pe),be=n(Pe,"H4",{class:!0});var pe=v(be);we=g(pe,i[1]),_e=g(pe," km/h"),pe.forEach(d),Pe.forEach(d),Ce.forEach(d),ze.forEach(d),Ee.forEach(d),oe.forEach(d),Ke=f(re),me=n(re,"DIV",{class:!0,"data-svelte-h":!0}),$(me)!=="svelte-186hzsv"&&(me.innerHTML=De),re.forEach(d),Ye.forEach(d),ae.forEach(d),this.h()},h(){t(c,"class","svelte-zeh11o"),t(_,"class","svelte-zeh11o"),t(u,"class","fechaLugar svelte-zeh11o"),t(C,"class","svelte-zeh11o"),t(j,"class","svelte-zeh11o"),t(m,"class","temperaturaTiempo svelte-zeh11o"),t(T,"class","svelte-zeh11o"),t(G,"class","svelte-zeh11o"),t(S,"class","col s4 datos_pills svelte-zeh11o"),t(K,"class","svelte-zeh11o"),t(O,"class","svelte-zeh11o"),t(F,"class","col s4 datos_pills raya svelte-zeh11o"),t(se,"class","svelte-zeh11o"),t(be,"class","svelte-zeh11o"),t(te,"class","col s4 datos_pills svelte-zeh11o"),t(k,"class","row"),t(H,"class","datos_capsula svelte-zeh11o"),t(P,"class","datos svelte-zeh11o"),t(r,"class","col s12"),t(me,"class","cidades_img svelte-zeh11o"),t(l,"class","row"),t(s,"class","container"),t(a,"class","fondo svelte-zeh11o"),os(a,"background-image","url("+i[6]+")")},m(W,ae){ge(W,a,ae),e(a,s),e(s,l),e(l,r),e(r,u),e(u,c),e(u,y),e(u,_),e(_,E),e(r,M),e(r,m),e(m,C),e(C,z),e(C,A),e(m,D),e(m,j),e(j,I),e(r,V),e(r,P),e(P,H),e(H,k),e(k,S),e(S,T),e(S,B),e(S,G),e(G,R),e(G,ee),e(k,q),e(k,F),e(F,K),e(F,J),e(F,O),e(O,he),e(O,Q),e(k,fe),e(k,te),e(te,se),e(te,le),e(te,be),e(be,we),e(be,_e),e(l,Ke),e(l,me)},p(W,ae){ae&8&&w!==(w=Math.round(W[3])+"")&&X(z,w),ae&16&&X(I,W[4]),ae&1&&X(R,W[0]),ae&4&&de!==(de=Math.round(W[2])+"")&&X(he,de),ae&2&&X(we,W[1]),ae&64&&os(a,"background-image","url("+W[6]+")")},d(W){W&&d(a)}}}function ms(i){let a;function s(u,c){return u[5]!==null?_s:fs}let l=s(i),r=l(i);return{c(){r.c(),a=rs()},l(u){r.l(u),a=rs()},m(u,c){r.m(u,c),ge(u,a,c)},p(u,[c]){l===(l=s(u))&&r?r.p(u,c):(r.d(1),r=l(u),r&&(r.c(),r.m(a.parentNode,a)))},i:Te,o:Te,d(u){u&&d(a),r.d(u)}}}function ps(){const i=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],a=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],s=new Date,l=i[s.getDay()],r=s.getDate(),u=a[s.getMonth()],c=s.getFullYear();return`${l}, ${r} de ${u} de ${c}`}function gs(i,a,s){const l="3e867330616c39fa60d18a1af5d82f16";let{humidade:r}=a,{vento:u}=a,{sensacion:c}=a;const x=ps();console.log(x);let y="",_="",E="";var M=null;let m="";return us(async()=>{let C=42.3333,w=-7.85;console.log(C),y=`lat=${C}&lon=${w}`,console.log(y),hs.get(`https://api.openweathermap.org/data/2.5/weather?${y}&appid=${l}&units=metric&lang=gl`).then(z=>{switch(s(5,M=z.data),console.log(z.data),M.name,s(3,_=M.main.temp),s(4,E=M.weather[0].description),M.weather[0].icon){case"01d":s(6,m=A());break;case"01n":s(6,m=D());break;case"02d":s(6,m=j());break;case"02n":s(6,m=I());break;case"03d":s(6,m=V());break;case"03n":s(6,m=P());break;case"04d":s(6,m=H());break;case"04n":s(6,m=H());break;case"09d":s(6,m=k());break;case"09n":s(6,m=k());break;case"10d":s(6,m=S());break;case"10n":s(6,m=S());break;case"11d":s(6,m=T());break;case"11n":s(6,m=T());break;case"13d":s(6,m=U());break;case"13n":s(6,m=U());break;case"50d":s(6,m=B());break;case"50n":s(6,m=B());break;case"unknown":s(6,m=G());break}function A(){return"./fondos/fondo_soleado.png"}function D(){return"./fondos/fondo_noite_clara.png"}function j(){return"./fondos/fondo_soleado_poucas_nubes.png"}function I(){return"./fondos/fondo_noite_poucas_nubes.png"}function V(){return"./fondos/fondo_nublado.png"}function P(){return"./fondos/fondo_noite_nublado.png"}function H(){return"./fondos/fondo_nublado.png"}function k(){return"./fondos/fondo_moita_choiva.png"}function S(){return"./fondos/fondo_pouca_choiva.png"}function T(){return"./fondos/fondo_tormenta.png"}function U(){return"./fondos/fondo_neve.png"}function B(){return"./fondos/fondo_neboa.png"}function G(){return"./fondos/unknown.png"}})}),i.$$set=C=>{"humidade"in C&&s(0,r=C.humidade),"vento"in C&&s(1,u=C.vento),"sensacion"in C&&s(2,c=C.sensacion)},[r,u,c,_,E,M,m,x]}class bs extends dt{constructor(a){super(),ut(this,a,gs,ms,it,{humidade:0,vento:1,sensacion:2})}}function ns(i,a,s){const l=i.slice();return l[1]=a[s],l}function cs(i){let a,s,l,r,u=i[1].time+"",c,x,y,_,E,M,m,C,w,z=Math.round(i[1].temperature)+"",A,D,j;return{c(){a=o("div"),s=o("div"),l=o("p"),r=o("strong"),c=p(u),x=p("h"),y=h(),_=o("div"),E=o("img"),m=h(),C=o("div"),w=o("h4"),A=p(z),D=p("°"),j=h(),this.h()},l(I){a=n(I,"DIV",{class:!0});var V=v(a);s=n(V,"DIV",{});var P=v(s);l=n(P,"P",{class:!0});var H=v(l);r=n(H,"STRONG",{});var k=v(r);c=g(k,u),x=g(k,"h"),k.forEach(d),H.forEach(d),P.forEach(d),y=f(V),_=n(V,"DIV",{class:!0});var S=v(_);E=n(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(d),m=f(V),C=n(V,"DIV",{});var T=v(C);w=n(T,"H4",{class:!0});var U=v(w);A=g(U,z),D=g(U,"°"),U.forEach(d),T.forEach(d),j=f(V),V.forEach(d),this.h()},h(){t(l,"class","svelte-12dn4pd"),ie(E.src,M="./iconsTempo/"+i[1].icon+".gif")||t(E,"src",M),t(E,"alt","icono"),t(E,"class","svelte-12dn4pd"),t(_,"class","weather-icon center"),t(w,"class","svelte-12dn4pd"),t(a,"class","horas_venideiras svelte-12dn4pd")},m(I,V){ge(I,a,V),e(a,s),e(s,l),e(l,r),e(r,c),e(r,x),e(a,y),e(a,_),e(_,E),e(a,m),e(a,C),e(C,w),e(w,A),e(w,D),e(a,j)},p(I,V){V&1&&u!==(u=I[1].time+"")&&X(c,u),V&1&&!ie(E.src,M="./iconsTempo/"+I[1].icon+".gif")&&t(E,"src",M),V&1&&z!==(z=Math.round(I[1].temperature)+"")&&X(A,z)},d(I){I&&d(a)}}}function Ds(i){let a,s=yt(i[0]),l=[];for(let r=0;r<s.length;r+=1)l[r]=cs(ns(i,s,r));return{c(){a=o("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){a=n(r,"DIV",{class:!0});var u=v(a);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(d),this.h()},h(){t(a,"class","caixa_horas svelte-12dn4pd")},m(r,u){ge(r,a,u);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(a,null)},p(r,[u]){if(u&1){s=yt(r[0]);let c;for(c=0;c<s.length;c+=1){const x=ns(r,s,c);l[c]?l[c].p(x,u):(l[c]=cs(x),l[c].c(),l[c].m(a,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},i:Te,o:Te,d(r){r&&d(a),vs(l,r)}}}function Es(i,a,s){let{TiempoHoras:l}=a;return i.$$set=r=>{"TiempoHoras"in r&&s(0,l=r.TiempoHoras)},[l]}class Cs extends dt{constructor(a){super(),ut(this,a,Es,Ds,it,{TiempoHoras:0})}}function is(i,a,s){const l=i.slice();return l[1]=a[s],l}function ds(i){let a,s,l,r,u=i[1].dianome+"",c,x,y,_=i[1].dia+"",E,M,m=i[1].mes+"",C,w,z=i[1].ano+"",A,D,j,I,V,P,H,k,S=Math.round(i[1].tempmax)+"",T,U,B,G,R,ee=Math.round(i[1].tempmin)+"",q,F,K;return{c(){a=o("div"),s=o("div"),l=o("div"),r=o("h4"),c=p(u),x=h(),y=o("p"),E=p(_),M=h(),C=p(m),w=h(),A=p(z),D=h(),j=o("div"),I=o("img"),P=h(),H=o("div"),k=o("h3"),T=p(S),U=p("º"),B=h(),G=o("div"),R=o("h3"),q=p(ee),F=p("º"),K=h(),this.h()},l(Y){a=n(Y,"DIV",{class:!0});var J=v(a);s=n(J,"DIV",{class:!0});var O=v(s);l=n(O,"DIV",{class:!0});var de=v(l);r=n(de,"H4",{class:!0});var he=v(r);c=g(he,u),he.forEach(d),x=f(de),y=n(de,"P",{class:!0});var Q=v(y);E=g(Q,_),M=f(Q),C=g(Q,m),w=f(Q),A=g(Q,z),Q.forEach(d),de.forEach(d),D=f(O),j=n(O,"DIV",{class:!0});var fe=v(j);I=n(fe,"IMG",{src:!0,alt:!0,class:!0}),fe.forEach(d),P=f(O),H=n(O,"DIV",{class:!0});var te=v(H);k=n(te,"H3",{class:!0});var se=v(k);T=g(se,S),U=g(se,"º"),se.forEach(d),te.forEach(d),B=f(O),G=n(O,"DIV",{class:!0});var Z=v(G);R=n(Z,"H3",{class:!0});var le=v(R);q=g(le,ee),F=g(le,"º"),le.forEach(d),Z.forEach(d),O.forEach(d),K=f(J),J.forEach(d),this.h()},h(){t(r,"class","svelte-qktj3x"),t(y,"class","svelte-qktj3x"),t(l,"class","col s4 valign-wrappe"),ie(I.src,V="./iconsTempo/"+i[1].icon+".gif")||t(I,"src",V),t(I,"alt","icono"),t(I,"class","svelte-qktj3x"),t(j,"class","col s4 iconos svelte-qktj3x"),t(k,"class","svelte-qktj3x"),t(H,"class","col s2"),t(R,"class","svelte-qktj3x"),t(G,"class","col s2"),t(s,"class","row"),t(a,"class","dias_venideiros svelte-qktj3x")},m(Y,J){ge(Y,a,J),e(a,s),e(s,l),e(l,r),e(r,c),e(l,x),e(l,y),e(y,E),e(y,M),e(y,C),e(y,w),e(y,A),e(s,D),e(s,j),e(j,I),e(s,P),e(s,H),e(H,k),e(k,T),e(k,U),e(s,B),e(s,G),e(G,R),e(R,q),e(R,F),e(a,K)},p(Y,J){J&1&&u!==(u=Y[1].dianome+"")&&X(c,u),J&1&&_!==(_=Y[1].dia+"")&&X(E,_),J&1&&m!==(m=Y[1].mes+"")&&X(C,m),J&1&&z!==(z=Y[1].ano+"")&&X(A,z),J&1&&!ie(I.src,V="./iconsTempo/"+Y[1].icon+".gif")&&t(I,"src",V),J&1&&S!==(S=Math.round(Y[1].tempmax)+"")&&X(T,S),J&1&&ee!==(ee=Math.round(Y[1].tempmin)+"")&&X(q,ee)},d(Y){Y&&d(a)}}}function ys(i){let a,s=yt(i[0]),l=[];for(let r=0;r<s.length;r+=1)l[r]=ds(is(i,s,r));return{c(){a=o("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){a=n(r,"DIV",{class:!0});var u=v(a);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(d),this.h()},h(){t(a,"class","caixas_dias svelte-qktj3x")},m(r,u){ge(r,a,u);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(a,null)},p(r,[u]){if(u&1){s=yt(r[0]);let c;for(c=0;c<s.length;c+=1){const x=is(r,s,c);l[c]?l[c].p(x,u):(l[c]=ds(x),l[c].c(),l[c].m(a,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},i:Te,o:Te,d(r){r&&d(a),vs(l,r)}}}function ks(i,a,s){let{TiempoDias:l}=a;return i.$$set=r=>{"TiempoDias"in r&&s(0,l=r.TiempoDias)},[l]}class Is extends dt{constructor(a){super(),ut(this,a,ks,ys,it,{TiempoDias:0})}}function Vs(i){let a,s,l,r,u,c,x,y,_,E,M,m,C,w,z="Temp. Max.",A,D,j,I,V,P,H,k,S,T,U="Temp. Min.",B,G,R,ee,q,F,K,Y,J,O,de="Vento",he,Q,fe,te,se,Z,le,be,we,_e,Ke="Sensación",me,De,W,ae,Ye,re,oe,xe,Ue,ue,Be="Humidade",Qe,Ee,ze,Ce,He,ne,ve,We,Pe,pe,Ut="Presión",kt,Se,vt,It,Vt,ye,Ge,Bt,Mt,Ne,Qt="Indice UV",wt,je,ht,Ht,Pt,ke,qe,Wt,Tt,Oe,Zt="Visibilidade",xt,Ae,ft,zt,St,Ie,Fe,$t,Gt,Le,es="Amancer",Nt,Ze,_t,jt,Ve,Xe,ts,qt,Je,ss="Solpor",Ot,$e,mt,ce;return a=new bs({props:{humidade:i[6],sensacion:i[5],vento:i[4]}}),r=new Cs({props:{TiempoHoras:i[0]}}),c=new Is({props:{TiempoDias:i[1]}}),{c(){pt(a.$$.fragment),s=h(),l=o("div"),pt(r.$$.fragment),u=h(),pt(c.$$.fragment),x=h(),y=o("div"),_=o("div"),E=o("div"),M=o("img"),C=h(),w=o("p"),w.textContent=z,A=h(),D=o("h4"),j=p(i[2]),I=p("ºC"),V=h(),P=o("div"),H=o("img"),S=h(),T=o("p"),T.textContent=U,B=h(),G=o("h4"),R=p(i[3]),ee=p("ºC"),q=h(),F=o("div"),K=o("img"),J=h(),O=o("p"),O.textContent=de,he=h(),Q=o("h4"),fe=p(i[4]),te=p(" km/h"),se=h(),Z=o("div"),le=o("img"),we=h(),_e=o("p"),_e.textContent=Ke,me=h(),De=o("h4"),W=p(i[5]),ae=p(" ºC"),Ye=h(),re=o("div"),oe=o("img"),Ue=h(),ue=o("p"),ue.textContent=Be,Qe=h(),Ee=o("h4"),ze=p(i[6]),Ce=p(" %"),He=h(),ne=o("div"),ve=o("img"),Pe=h(),pe=o("p"),pe.textContent=Ut,kt=h(),Se=o("h4"),vt=p(i[7]),It=p(" hPa"),Vt=h(),ye=o("div"),Ge=o("img"),Mt=h(),Ne=o("p"),Ne.textContent=Qt,wt=h(),je=o("h4"),ht=p(i[9]),Ht=p("/10"),Pt=h(),ke=o("div"),qe=o("img"),Tt=h(),Oe=o("p"),Oe.textContent=Zt,xt=h(),Ae=o("h4"),ft=p(i[8]),zt=p(" m"),St=h(),Ie=o("div"),Fe=o("img"),Gt=h(),Le=o("p"),Le.textContent=es,Nt=h(),Ze=o("h4"),_t=p(i[10]),jt=h(),Ve=o("div"),Xe=o("img"),qt=h(),Je=o("p"),Je.textContent=ss,Ot=h(),$e=o("h4"),mt=p(i[11]),this.h()},l(b){gt(a.$$.fragment,b),s=f(b),l=n(b,"DIV",{class:!0});var N=v(l);gt(r.$$.fragment,N),u=f(N),gt(c.$$.fragment,N),N.forEach(d),x=f(b),y=n(b,"DIV",{class:!0});var Re=v(y);_=n(Re,"DIV",{class:!0});var L=v(_);E=n(L,"DIV",{class:!0});var Me=v(E);M=n(Me,"IMG",{src:!0,alt:!0,class:!0}),C=f(Me),w=n(Me,"P",{class:!0,"data-svelte-h":!0}),$(w)!=="svelte-m2md8"&&(w.textContent=z),A=f(Me),D=n(Me,"H4",{class:!0});var At=v(D);j=g(At,i[2]),I=g(At,"ºC"),At.forEach(d),Me.forEach(d),V=f(L),P=n(L,"DIV",{class:!0});var et=v(P);H=n(et,"IMG",{src:!0,alt:!0,class:!0}),S=f(et),T=n(et,"P",{class:!0,"data-svelte-h":!0}),$(T)!=="svelte-4a7uba"&&(T.textContent=U),B=f(et),G=n(et,"H4",{class:!0});var Ft=v(G);R=g(Ft,i[3]),ee=g(Ft,"ºC"),Ft.forEach(d),et.forEach(d),q=f(L),F=n(L,"DIV",{class:!0});var tt=v(F);K=n(tt,"IMG",{src:!0,alt:!0,class:!0}),J=f(tt),O=n(tt,"P",{class:!0,"data-svelte-h":!0}),$(O)!=="svelte-1xiwqsg"&&(O.textContent=de),he=f(tt),Q=n(tt,"H4",{class:!0});var Lt=v(Q);fe=g(Lt,i[4]),te=g(Lt," km/h"),Lt.forEach(d),tt.forEach(d),se=f(L),Z=n(L,"DIV",{class:!0});var st=v(Z);le=n(st,"IMG",{src:!0,alt:!0,class:!0}),we=f(st),_e=n(st,"P",{class:!0,"data-svelte-h":!0}),$(_e)!=="svelte-1b66wfj"&&(_e.textContent=Ke),me=f(st),De=n(st,"H4",{class:!0});var Xt=v(De);W=g(Xt,i[5]),ae=g(Xt," ºC"),Xt.forEach(d),st.forEach(d),Ye=f(L),re=n(L,"DIV",{class:!0});var lt=v(re);oe=n(lt,"IMG",{src:!0,alt:!0,class:!0}),Ue=f(lt),ue=n(lt,"P",{class:!0,"data-svelte-h":!0}),$(ue)!=="svelte-tsib6v"&&(ue.textContent=Be),Qe=f(lt),Ee=n(lt,"H4",{class:!0});var Jt=v(Ee);ze=g(Jt,i[6]),Ce=g(Jt," %"),Jt.forEach(d),lt.forEach(d),He=f(L),ne=n(L,"DIV",{class:!0});var at=v(ne);ve=n(at,"IMG",{src:!0,alt:!0,class:!0}),Pe=f(at),pe=n(at,"P",{class:!0,"data-svelte-h":!0}),$(pe)!=="svelte-4v31ok"&&(pe.textContent=Ut),kt=f(at),Se=n(at,"H4",{class:!0});var Rt=v(Se);vt=g(Rt,i[7]),It=g(Rt," hPa"),Rt.forEach(d),at.forEach(d),Vt=f(L),ye=n(L,"DIV",{class:!0});var rt=v(ye);Ge=n(rt,"IMG",{src:!0,alt:!0,class:!0}),Mt=f(rt),Ne=n(rt,"P",{class:!0,"data-svelte-h":!0}),$(Ne)!=="svelte-1nk0d9r"&&(Ne.textContent=Qt),wt=f(rt),je=n(rt,"H4",{class:!0});var Kt=v(je);ht=g(Kt,i[9]),Ht=g(Kt,"/10"),Kt.forEach(d),rt.forEach(d),Pt=f(L),ke=n(L,"DIV",{class:!0});var ot=v(ke);qe=n(ot,"IMG",{src:!0,alt:!0,class:!0}),Tt=f(ot),Oe=n(ot,"P",{class:!0,"data-svelte-h":!0}),$(Oe)!=="svelte-18vrm1t"&&(Oe.textContent=Zt),xt=f(ot),Ae=n(ot,"H4",{class:!0});var Yt=v(Ae);ft=g(Yt,i[8]),zt=g(Yt," m"),Yt.forEach(d),ot.forEach(d),St=f(L),Ie=n(L,"DIV",{class:!0});var nt=v(Ie);Fe=n(nt,"IMG",{src:!0,alt:!0,class:!0}),Gt=f(nt),Le=n(nt,"P",{class:!0,"data-svelte-h":!0}),$(Le)!=="svelte-llqjzt"&&(Le.textContent=es),Nt=f(nt),Ze=n(nt,"H4",{class:!0});var ls=v(Ze);_t=g(ls,i[10]),ls.forEach(d),nt.forEach(d),jt=f(L),Ve=n(L,"DIV",{class:!0});var ct=v(Ve);Xe=n(ct,"IMG",{src:!0,alt:!0,class:!0}),qt=f(ct),Je=n(ct,"P",{class:!0,"data-svelte-h":!0}),$(Je)!=="svelte-1lz7hxp"&&(Je.textContent=ss),Ot=f(ct),$e=n(ct,"H4",{class:!0});var as=v($e);mt=g(as,i[11]),as.forEach(d),ct.forEach(d),L.forEach(d),Re.forEach(d),this.h()},h(){t(l,"class","posicion svelte-rdeyr2"),ie(M.src,m="./iconos/temperMax.png")||t(M,"src",m),t(M,"alt",""),t(M,"class","svelte-rdeyr2"),t(w,"class","svelte-rdeyr2"),t(D,"class","svelte-rdeyr2"),t(E,"class","col s6 caixas svelte-rdeyr2"),ie(H.src,k="./iconos/temperMin.png")||t(H,"src",k),t(H,"alt",""),t(H,"class","svelte-rdeyr2"),t(T,"class","svelte-rdeyr2"),t(G,"class","svelte-rdeyr2"),t(P,"class","col s6 caixas svelte-rdeyr2"),ie(K.src,Y="./iconos/wind.png")||t(K,"src",Y),t(K,"alt",""),t(K,"class","svelte-rdeyr2"),t(O,"class","svelte-rdeyr2"),t(Q,"class","svelte-rdeyr2"),t(F,"class","col s6 caixas svelte-rdeyr2"),ie(le.src,be="./iconos/feel_like.png")||t(le,"src",be),t(le,"alt",""),t(le,"class","svelte-rdeyr2"),t(_e,"class","svelte-rdeyr2"),t(De,"class","svelte-rdeyr2"),t(Z,"class","col s6 caixas svelte-rdeyr2"),ie(oe.src,xe="./iconos/humidity.png")||t(oe,"src",xe),t(oe,"alt",""),t(oe,"class","svelte-rdeyr2"),t(ue,"class","svelte-rdeyr2"),t(Ee,"class","svelte-rdeyr2"),t(re,"class","col s6 caixas svelte-rdeyr2"),ie(ve.src,We="./iconos/pressure.png")||t(ve,"src",We),t(ve,"alt",""),t(ve,"class","svelte-rdeyr2"),t(pe,"class","svelte-rdeyr2"),t(Se,"class","svelte-rdeyr2"),t(ne,"class","col s6 caixas svelte-rdeyr2"),ie(Ge.src,Bt="./iconos/uvi.png")||t(Ge,"src",Bt),t(Ge,"alt",""),t(Ge,"class","svelte-rdeyr2"),t(Ne,"class","svelte-rdeyr2"),t(je,"class","svelte-rdeyr2"),t(ye,"class","col s6 caixas svelte-rdeyr2"),ie(qe.src,Wt="./iconos/visibilidad.png")||t(qe,"src",Wt),t(qe,"alt",""),t(qe,"class","svelte-rdeyr2"),t(Oe,"class","svelte-rdeyr2"),t(Ae,"class","svelte-rdeyr2"),t(ke,"class","col s6 caixas svelte-rdeyr2"),ie(Fe.src,$t="./iconos/sunrise.png")||t(Fe,"src",$t),t(Fe,"alt",""),t(Fe,"class","svelte-rdeyr2"),t(Le,"class","svelte-rdeyr2"),t(Ze,"class","svelte-rdeyr2"),t(Ie,"class","col s6 caixas svelte-rdeyr2"),ie(Xe.src,ts="./iconos/sunset.png")||t(Xe,"src",ts),t(Xe,"alt",""),t(Xe,"class","svelte-rdeyr2"),t(Je,"class","svelte-rdeyr2"),t($e,"class","svelte-rdeyr2"),t(Ve,"class","col s6 caixas svelte-rdeyr2"),t(_,"class","row"),t(y,"class","datosTecnicos svelte-rdeyr2")},m(b,N){bt(a,b,N),ge(b,s,N),ge(b,l,N),bt(r,l,null),e(l,u),bt(c,l,null),ge(b,x,N),ge(b,y,N),e(y,_),e(_,E),e(E,M),e(E,C),e(E,w),e(E,A),e(E,D),e(D,j),e(D,I),e(_,V),e(_,P),e(P,H),e(P,S),e(P,T),e(P,B),e(P,G),e(G,R),e(G,ee),e(_,q),e(_,F),e(F,K),e(F,J),e(F,O),e(F,he),e(F,Q),e(Q,fe),e(Q,te),e(_,se),e(_,Z),e(Z,le),e(Z,we),e(Z,_e),e(Z,me),e(Z,De),e(De,W),e(De,ae),e(_,Ye),e(_,re),e(re,oe),e(re,Ue),e(re,ue),e(re,Qe),e(re,Ee),e(Ee,ze),e(Ee,Ce),e(_,He),e(_,ne),e(ne,ve),e(ne,Pe),e(ne,pe),e(ne,kt),e(ne,Se),e(Se,vt),e(Se,It),e(_,Vt),e(_,ye),e(ye,Ge),e(ye,Mt),e(ye,Ne),e(ye,wt),e(ye,je),e(je,ht),e(je,Ht),e(_,Pt),e(_,ke),e(ke,qe),e(ke,Tt),e(ke,Oe),e(ke,xt),e(ke,Ae),e(Ae,ft),e(Ae,zt),e(_,St),e(_,Ie),e(Ie,Fe),e(Ie,Gt),e(Ie,Le),e(Ie,Nt),e(Ie,Ze),e(Ze,_t),e(_,jt),e(_,Ve),e(Ve,Xe),e(Ve,qt),e(Ve,Je),e(Ve,Ot),e(Ve,$e),e($e,mt),ce=!0},p(b,[N]){const Re={};N&64&&(Re.humidade=b[6]),N&32&&(Re.sensacion=b[5]),N&16&&(Re.vento=b[4]),a.$set(Re);const L={};N&1&&(L.TiempoHoras=b[0]),r.$set(L);const Me={};N&2&&(Me.TiempoDias=b[1]),c.$set(Me),(!ce||N&4)&&X(j,b[2]),(!ce||N&8)&&X(R,b[3]),(!ce||N&16)&&X(fe,b[4]),(!ce||N&32)&&X(W,b[5]),(!ce||N&64)&&X(ze,b[6]),(!ce||N&128)&&X(vt,b[7]),(!ce||N&512)&&X(ht,b[9]),(!ce||N&256)&&X(ft,b[8]),(!ce||N&1024)&&X(_t,b[10]),(!ce||N&2048)&&X(mt,b[11])},i(b){ce||(Dt(a.$$.fragment,b),Dt(r.$$.fragment,b),Dt(c.$$.fragment,b),ce=!0)},o(b){Et(a.$$.fragment,b),Et(r.$$.fragment,b),Et(c.$$.fragment,b),ce=!1},d(b){b&&(d(s),d(l),d(x),d(y)),Ct(a,b),Ct(r),Ct(c)}}}function Ms(i,a,s){const l="3e867330616c39fa60d18a1af5d82f16";let r="",u="",c="",x="",y="",_="",E="",M="",m="",C="",w="",z=[],A=[];var D=null;return i.$$.update=()=>{i.$$.dirty&12291&&us(async()=>{s(12,r=`?lat=${42.3333}&lon=${-7.85}`),console.log(r),hs.get(`https://api.openweathermap.org/data/2.5/onecall${r}&exclude=minutely&appid=${l}&units=metric&lang=gl`).then(V=>{s(13,D=V.data),console.log(V.data),s(2,u=D.daily[0].temp.max),s(3,c=D.daily[0].temp.min),s(4,x=D.daily[0].wind_speed),s(5,y=D.current.feels_like),s(6,_=D.daily[0].humidity),s(7,E=D.daily[0].pressure),s(8,M=D.current.visibility),s(9,m=D.current.uvi),s(0,z=D.hourly.slice(1,17).map(q=>({temperature:q.temp,icon:q.weather[0].icon,time:new Date(q.dt*1e3).getHours()}))),console.log(z);var P=["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"],H=["Xan.","Feb.","Mar.","Abr.","Mai.","Xuñ.","Xul.","Ago.","Set.","Out.","Nov.","Dec."];s(1,A=D.daily.slice(1,6).map(q=>({tempmax:q.temp.max,tempmin:q.temp.min,icon:q.weather[0].icon,mes:H[new Date(q.dt*1e3).getMonth()],dia:new Date(q.dt*1e3).getDay(),dianome:P[new Date(q.dt*1e3).getDay()],ano:new Date(q.dt*1e3).getFullYear()}))),console.log(A);const k=new Date(D.current.sunrise*1e3),S=k.getHours(),T=k.getMinutes(),U=k.getSeconds();s(10,C=`${S}:${T}:${U}`);const B=new Date(D.current.sunset*1e3),G=B.getHours(),R=B.getMinutes(),ee=B.getSeconds();s(11,w=`${G}:${R}:${ee}`)})})},[z,A,u,c,x,y,_,E,M,m,C,w,r,D]}class ws extends dt{constructor(a){super(),ut(this,a,Ms,Vs,it,{})}}function Hs(i){let a,s;return a=new ws({}),{c(){pt(a.$$.fragment)},l(l){gt(a.$$.fragment,l)},m(l,r){bt(a,l,r),s=!0},p:Te,i(l){s||(Dt(a.$$.fragment,l),s=!0)},o(l){Et(a.$$.fragment,l),s=!1},d(l){Ct(a,l)}}}class Ss extends dt{constructor(a){super(),ut(this,a,null,Hs,it,{})}}export{Ss as component};
