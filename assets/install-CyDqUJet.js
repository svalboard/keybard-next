import{L as Gn,P as Sn,a as Tn,n as Q,C as zn,p as Vn,b as Wn,c as Hn,d as Zn,e as Yn,D as rn,f as Xn,g as jn,h as Qn,k as dn}from"./index-DlHoLjzW.js";const u=10,y=6,b=16,sn=256,p=256,c=16,Z=21,Jn=44,B=10,G=12,Mn=12,In=6,Kn=14,$n=8+p*c,Nn=106664,ne=Nn-$n,an=51,ee=0,te=1,oe=2,Dn=3,cn="keybard.fakeBoard.v1",_e=[b,p,sn,p];function q(){const _=new Uint8Array(p*B);for(let e=0;e<p;e++)_[e*B+8]=200,_[e*B+9]=0;return{keymap:new Uint8Array(b*u*y*2),macros:new Uint8Array(Nn),tapDance:_,combo:new Uint8Array(p*G),keyOverride:new Uint8Array(p*Mn),altRepeatKey:new Uint8Array(p*In),leader:new Uint8Array(p*Kn),labels:_e.map(e=>new Uint8Array(e*c)),qmkSettings:re(),magic:128,fragments:new Uint8Array(Z),custom:se(),rgb:Uint8Array.from([255,1,0,0,0]),identityName:"",defaultLayer:0,storageFlags:0}}function l(_,n,e){_[n]=e&255,_[n+1]=e>>8&255}function re(){const _=new Uint8Array(Jn);return l(_,0,175),l(_,2,5e3),l(_,4,30),l(_,6,16),l(_,8,1),l(_,10,15),l(_,12,40),l(_,14,10),l(_,16,80),l(_,18,8),l(_,20,40),l(_,22,50),l(_,24,200),_[26]=0,_[27]=0,_[28]=5,_[29]=9,l(_,30,10),l(_,32,80),_[34]=5,l(_,36,200),l(_,38,0),l(_,40,300),_[42]=1,_}function se(){const _=new Uint8Array(an*2),n=(o,t,s=0)=>{_[o*2]=t,_[o*2+1]=s};n(0,3),n(1,1),n(2,3),n(3,0),n(4,1),n(5,3),n(6,15),n(7,0),n(8,1),n(9,0),n(10,7),n(11,1),n(12,1);for(let o=25;o<=29;o++)n(o,1);return[22015,5631,38399,2992,11263,33023,255,255,60159,49151,2992,27391,33023,33023,11263,54783].forEach((o,t)=>n(32+t,o>>8,o&255)),_}function pn(_){let n="";for(let e=0;e<_.length;e+=32768)n+=String.fromCharCode(..._.subarray(e,e+32768));return btoa(n)}function Rn(_,n){const e=new Uint8Array(n),o=atob(_);for(let t=0;t<o.length&&t<n;t++)e[t]=o.charCodeAt(t);return e}function mn(_){let n=_.length;for(;n>0&&_[n-1]===0;)n--;return _.subarray(0,n)}const vn=["keymap","macros","tapDance","combo","keyOverride","altRepeatKey","leader","qmkSettings","fragments","custom","rgb"];function ae(_){const n={v:1,magic:_.magic,identityName:_.identityName,defaultLayer:_.defaultLayer,storageFlags:_.storageFlags};for(const e of vn)n[e]=pn(mn(_[e]));return _.labels.forEach((e,o)=>{n[`labels${o}`]=pn(mn(e))}),JSON.stringify(n)}function Ce(_){try{const n=JSON.parse(_);if(n.v!==1)return null;const e=q();for(const o of vn)typeof n[o]=="string"&&(e[o]=Rn(n[o],e[o].length));return e.labels=e.labels.map((o,t)=>typeof n[`labels${t}`]=="string"?Rn(n[`labels${t}`],o.length):o),e.magic=Number(n.magic)>>>0,e.identityName=String(n.identityName??""),e.defaultLayer=Number(n.defaultLayer)||0,e.storageFlags=Number(n.storageFlags)||0,e}catch{return null}}function ln(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function ie(){const _=ln()?.getItem(cn);return _?Ce(_):null}function On(_){try{ln()?.setItem(cn,ae(_))}catch(n){console.warn("[fake board] Could not save the simulated board's settings:",n)}}function Ke(){try{ln()?.removeItem(cn)}catch{}}const Fn=[{name:"quick tap",ms:90,fingers:1,x:1500,y:1700,dx:15,dy:10,gap:900},{name:"tap that rolls 0.6 mm at the lift",ms:120,fingers:1,x:2400,y:2100,dx:50,dy:35,late:40,gap:1100},{name:"slow touch, too long for a tap",ms:280,fingers:1,x:2e3,y:1500,dx:10,dy:15,gap:1e3},{name:"press and hold",ms:1100,fingers:1,x:1800,y:2300,dx:30,dy:20,gap:1100},{name:"hold that drifts 0.65 mm",ms:700,fingers:1,x:2600,y:1600,dx:45,dy:47,by:400,gap:1100},{name:"two-finger tap",ms:110,fingers:2,x:1300,y:2e3,dx:10,dy:0,others:[{ox:1600,oy:-150}],gap:1100},{name:"two-finger scroll",ms:700,fingers:2,x:1300,y:1200,dx:0,dy:900,others:[{ox:1700,oy:-100,delay:40}],gap:1100},{name:"two fingers that move 0.6 mm, too little to scroll",ms:450,fingers:2,x:1400,y:1800,dx:40,dy:45,others:[{ox:1600,oy:120,delay:30}],gap:1e3},{name:"three-finger touch",ms:500,fingers:3,x:800,y:2e3,dx:20,dy:10,others:[{ox:1500,oy:-250,delay:30},{ox:3e3,oy:50,delay:60}],gap:1e3},{name:"resting palm",ms:900,fingers:1,x:2700,y:2700,dx:80,dy:-40,area:14,gap:1100},{name:"pointer move",ms:600,fingers:1,x:1e3,y:2600,dx:1800,dy:-700,gap:1400}],J=Fn.reduce((_,n)=>_+n.ms+n.gap,0);function $(_){const n=Math.sin(_*12.9898)*43758.5453;return(n-Math.floor(n))*2-1}function Ne(_){let n=0;for(const[e,o]of Fn.entries()){if(_<n+o.ms){const t=_-n,s=Math.min(1,o.late?Math.max(0,(t-(o.ms-o.late))/(o.late-10)):t/((o.by??o.ms)-10)),r=6*$(e*1e3+Math.floor(t/10)),a=Math.min(1,(t+10)/(o.area?150:60)),C=Math.round((420+380*a)*(1+.05*$(e*7+Math.floor(t/30)))),i=o.area??(o.fingers>1?4:3),K=Math.max(1,Math.round(i*a)),h=Math.round(o.x+o.dx*s+r),k=Math.round(o.y+o.dy*s-r),A=[{slot:0,x:h,y:k,area:K}];for(const[v,w]of(o.others??[]).entries()){if(t<(w.delay??0))continue;const x=5*$(e*1e3+97*(v+1)+Math.floor(t/10)),j=Math.min(1,(t-(w.delay??0)+10)/60);A.push({slot:v+1,x:h+w.ox+Math.round(x),y:k+w.oy-Math.round(x),area:Math.max(1,Math.round((w.area??4)*j))})}return{t:_,x:h,y:k,fingers:A.length,strength:C,area:K,points:A}}if(n+=o.ms+o.gap,_<n)return{t:_,x:o.x+o.dx,y:o.y+o.dy,fingers:0,points:[]}}return{t:_,x:0,y:0,fingers:0,points:[]}}const ce="XQAAAAT//////////wA9iInGVDbDF0/k5i20IEFAa6A1i4aNevXOOFOphT5cHOBLs5Do+nG6zZaqdPbnO+mNn7UIYXy944A8HRv5tFUVIGyb3lx+r69MT1djAEMSfS2iX2smOIwlDBAof+6NyY3seBQV/iouN20AQYhFBVtp7ElXSYjDFB2UVn8C3lO2ynN8H+NM5rHbfpWonnz1s2FXh5dyX98GwYRVJVdrO3auZdeT+b6eYIe8Q/UlNxOmzR8+DbPJXpwtBr9IQ9n6jU9y6cOjaMy56ck/TRLodroMFXhvAktki6gyzDBNU9+slSldP9XY6C+vwdLe9D80qZjyPNRl6Oe3MC1w+Fusu3HhXBuWNTxkiPMHmMLvjJGkyk+Nzx95HXuHPOmoHqXZnKe9m1muckGsuEwHx7DLjo5Rf02aatb9+pIuy9LQCKPEeaWPSjqSttiUL6UmdJU3s+/VZpJocqijZxM1xSCbgOVT8DbOTZGfMSuTmM/zIkSoAjXUanGtmFIS5wRXsxSNnCLQNcddAr4zszFwaADIjQ5u9TDouS7ctxtdsi+LJiaqKdYIpbju+RybqvgwvfCnpWDUNBX+Hkpiyhu3yMKbZ3ByWqiCIf/4QtZymGPbGdjQDmlE0M1EYCDPsj4mdaV+AytZzohNe2XJ9IegwoeS7lNgZ66aNcxxpRytZdVVrAMXVpfxIDxdOdxqclQGg6F2s3ig+xQAgZBhak5pT688unB/V8PoR8IuxNbXsvCnxOZKVpmsEAV6bbgZztcPcQfpOE5wv7qFgPhE3UUpYTC2uJ23pDXkrT/6oS7fgkxbHoxkJ0kb+3lEDO5KdWj0O2nG2A034NQCILzy107yUSSz/uRhHR3ctue+VOprUDrC7RdZG9wqTBb5G1JjB5bc1cxZ7bGW3g2tLsQ7bdo7wpmV/CQxwT/t+V6LBaJ2BA3ZHzf32rrWDg6aTjw0CZeLlMLp/qYMoYaZuifQSeKCcJQSrtosUAKgWAd1dUqtwi6/pay1Al3LJS0vuPhE90XvD/FUSAO1dA8DP4zbwc3IjOevUOCC/e7hR/aGaszQklMnfgn2XtEcWAe5hRVE1erfyi9EDkJIW+8GPiWD+V1fmEvJGMiuTuo8glAbrz0HkZIPXXs6/Bm1gaHyoJr1osO+V8Ocw/L3LGIT4voV1oXQUmhnXkHu0PG/sOIhyX1c31es5vDIndUAtje4tUkgH7E513+A/Sr+WVY7QA6bc8nrY8bz/cawv1zuwSf9DoCvGUaHoMNJnmAPlufCJPxZfky2WeH/xEUcQ7h/bOTRMqxrY+TV7vvGXvAz2rXs6XfxC7wtVnIRaPY1WqwelkGdOBzIeXnmzt9zuKxxoG8ADFWuIVMU+YfmbQVxI/7LI7h0pUXT4pDHkpoaMS7oLfpqUZ8VQTkwDysNrMuMCs5ebhHURNwwV7PMZu8F1TL7Aw/TqdPCxWKaaJBYFheybnvoF0NpGNL91Wu8+yA9ghD/rNOCEwFawN2NVgpAGpTANjlxFz/8OpwjAJCqb3rWOhcovDLY+CCIE5ZdORpilEWIkAETicLWP2fqbyHkPRMYs5SL2hKQTRHOeIzpshGeJjdmaymfokUER7kslmvwitMzcY2yDdRXDafDXTVSYApO+oip37GB33Qv6V9A8mMvqDdfrxbb0b3NhvexvrRK5yH+FHrYbh4j/pXZjzQVHfQbGA2AeMwadLA5VVKTL2/xdVg+/0LBS651IQIPRIShkLV3WWLm2qwWWV5COq231BsyxKDXtlzZV8KhAX61mEVsi9ugycLFf6dtojpfMOXEznExGQx7NTnf5K/m38WtAvXaGcz22biKHGzyP39EKxjJ/kYWtkhFScSzRhETwheSKulE5/coPDUnmiD4f5ccid5NJjQhxxvk6iWJjfBlcWhsjx+0x+ig3Go5Bjc+lxlPLPzu38d6m8FdadJrO7JY3W4U8C4vfi58nQD8HoTmU3oq5BnFjGCRbT0+cZX+5bBp/ZVSb9NOYiG/elRGy4uAo76Z9KbIIs5e++CC+yNpH36ENSKovzSNUSsONVckBbV19EtAFANTnrTM4tI+MQg/iC6awLee04LH7ICZZMKXUepQFGF9zUiYM1gU1DBYE29hyI6onegbYFOr8vbx40VN5asdC1KDvgVU7lMYXb8rYrde3iI2AICu+vLXjPB7vZtBFwCkYLTuq33Ic29un0rCVFwcUF3WIaQ8SsoQog9Cr25g11zoqfYbkSY9PCaEv9H0H5d12MpSZXJJRxaQtOa9RzNEy0ugq2+2gMAGuQkCqn2ZNaAr8Qbj4yw9Z+bLOXzj4/qbaG1X4KVyWXpdRsRbh+Iu4F4eWqqnQUh51SUB38R2mceaQK0YzIjSxAwfCrVeeDghXvX1hNeOCC97hT69FCEZ4AA66tjdvVNpQkmzf0WOxTLoE3VKVLG2y2pJ0jsirkmQbjiZ/Y/tK8o6fClt8/eJeaue8Lx43O+ELB8Vw8BUM011IrUzpx0/03EwVShQ7QVt07Xl6sAOIYwnTsh44RdDmpJr80k/yuaoKXahuUdsGWGlVloD+2t/OLSqFgtUJIcrMYj8/szwB3UrWS/ZG7vTRbQ3VK5iHeo6kixod4bmNHfWzVTM6wOdj0a9Ynvy0vpcG9u2gvqL5NYoczk7RRp+U+R7r008TkK5rmeEX95ZWo0mEahyi20ZeRWYyWwuJnkAi5gIVsJJI8cI9dcT/Sdrjb41TIdGt06yvhJ+/5jraPY97KEG5PpzOehwNVZ/KaSv02dLZgqmg/OE2OCyS6BnpxQpq/nvCcGpo2zFcH2m6IUk7TXhJ+WF5t3+0QEmeXn0P7DnC779SidYqxpLTO5gYdXw4oGw4nVt/HxbfmFBKlCjdrW5fFLciBfW1RGvDobZkocfOjto5OtuTHAfY497WrMoaE44EWcRiJCk51K6r49Ol99oAL/kKuw90rfvKZI9jqVO5jvvg6GhpZ7m+WJ2UQu5dhG2d5b5sq+pcDdFnt1WnTK6ACrIGKwiyvTKfGuvpxkCJrUvjAuSH09TOngaN+VERMTuGjFo3wTNGG4sd/1iuORe+KJboSjCeDjxybHCFyG+Tro9bT8AWBGaBxzhsIquh1QeIYOLDQkAgDU+9IQ09EccXSvwhghinfRJXXUqZHNEZz9FMnLdWVKulQ+4VSwuMS3AbDZdzZj0YEItFLC4JDF+M8R6ddL2RIM8IcbVTdHu84ReKdHqqn4kPYbXbJGtOxGB0eEnCzQfeK0zmE3snEVEc5Fr6uxPFt/ezLR1XbwdAlemb9kK+BR5kMfAFzY9BnVwyHsmJ7ahNT1oTjRJINCQ1BtEcOPIMZQMiJjXTdvmtpLEaMHMosvXlwSxjccIYsra731q9+25aBxsOnlvNZRbDI9ibNqfiJ8iZ/C3ZawhnlBYK2/VEFUi92TlszHRZ3v/FBOBgG+fdosvC4fheNHh7d7gb8QcCEjzbIu+Km0nFcbwCpQenW06iPrNMKB0INh6/QZ6ng0NjKoivQQC9sYGEOZqYlry6as65r+keOv7zgX/vKvc8A==";function le(_){const n=atob(_),e=new Uint8Array(n.length);for(let o=0;o<n.length;o++)e[o]=n.charCodeAt(o);return e}const P=le(ce);function ue(_){let n=0;const e=[];return Gn.decompressFile({readByte:()=>n<_.length?_[n++]:-1},{writeByte:o=>{e.push(o)}}),new TextDecoder().decode(new Uint8Array(e))}const X=JSON.parse(ue(P)),Pn=X.composition?.instances??[],D=Pn.length,Se=Pn.flatMap((_,n)=>_.hardware_detect?[n]:[]),Te=X.fragments?.pointing_none?.id??255,de=X.fragments?.pointing_touchpad_azoteq?.id??7,nn=221,en=223,hn=254,pe=4294967295,Re=1,me=3,fn=120,Oe=6,he=3,T=255,gn=22,fe=[27,24,125,242,33,246,41,72],U=[0,0,9],ge=75,ye=15,be=128,ke=4,we=8,xe=16,Ee=32,Ae=64,Le=128,Me=1,Ie=2,De=4,z=105,F=[300,20,50,100,150,200,250,350,400,500,600,700,800,1e3,1200,1500],L=6,V=5,tn=1500,ve=500,yn=13,M=255,Fe=2,Pe=73,Ue=83,on=24,bn=5,m=[90,60,45,30,25,20,15],f=9,Be=48,E=5,R=49,Cn=50,Y=[200,300,400,500,800],I=5,qe=84,W=64,Ge=[83,86,65,76,66,79,65,82],N=(_,n)=>_[n]|_[n+1]<<8,H=(_,n)=>(_[n]|_[n+1]<<8|_[n+2]<<16|_[n+3]<<24)>>>0,S=(_,n,e)=>{_[n]=e&255,_[n+1]=e>>8&255},g=(_,n,e)=>{_[n]=e&255,_[n+1]=e>>>8&255,_[n+2]=e>>>16&255,_[n+3]=e>>>24&255},kn={0:{bytes:_=>_.tapDance,size:B,used:_=>!!(N(_,0)||N(_,2)||N(_,4)||N(_,6))},1:{bytes:_=>_.combo,size:G,used:_=>!!(N(_,0)||N(_,8))},2:{bytes:_=>_.keyOverride,size:Mn,used:_=>!!(N(_,0)||N(_,2))},3:{bytes:_=>_.altRepeatKey,size:In,used:_=>!!(N(_,0)||N(_,2))},4:{bytes:_=>_.leader,size:Kn,used:_=>!!(N(_,0)||N(_,10))}},ze={1:{table:0,set:!1,minLength:0},2:{table:0,set:!0,minLength:14},3:{table:1,set:!1,minLength:0},4:{table:1,set:!0,minLength:16},5:{table:2,set:!1,minLength:0},6:{table:2,set:!0,minLength:16},7:{table:3,set:!1,minLength:0},8:{table:3,set:!0,minLength:10},20:{table:4,set:!1,minLength:0},21:{table:4,set:!0,minLength:18}},_n=[{qsid:1,size:1,offset:26,bit:0},{qsid:2,size:2,offset:22,bit:0},{qsid:5,size:1,offset:28,bit:0},{qsid:6,size:2,offset:2,bit:0},{qsid:7,size:2,offset:24,bit:0},{qsid:9,size:2,offset:4,bit:0},{qsid:10,size:2,offset:6,bit:0},{qsid:11,size:2,offset:8,bit:0},{qsid:12,size:2,offset:10,bit:0},{qsid:13,size:2,offset:12,bit:0},{qsid:14,size:2,offset:14,bit:0},{qsid:15,size:2,offset:16,bit:0},{qsid:16,size:2,offset:18,bit:0},{qsid:17,size:2,offset:20,bit:0},{qsid:18,size:2,offset:30,bit:0},{qsid:19,size:2,offset:32,bit:0},{qsid:20,size:1,offset:34,bit:0},{qsid:21,size:0,offset:0,bit:0},{qsid:22,size:1,offset:29,bit:0},{qsid:23,size:1,offset:29,bit:1},{qsid:24,size:1,offset:29,bit:2},{qsid:25,size:2,offset:36,bit:0},{qsid:26,size:1,offset:29,bit:3},{qsid:27,size:2,offset:38,bit:0},{qsid:28,size:2,offset:40,bit:0},{qsid:29,size:1,offset:42,bit:0}],wn=_=>_>=22&&_<=26&&_!==25||_===29,xn=new Set([6,13,14,20,21,22,23,24,R]),Ve=_=>_<=15||_>=20&&_<=31||_>=32&&_<48,We=_=>_<=14||_>=20&&_<=30||_>=32&&_<48,He=new Set([R,Cn]),En=_=>Y.reduce((n,e,o)=>Math.abs(e-_)<Math.abs(Y[n]-_)?o:n,0);class Ze{constructor(n,e={}){this.state=n,this.comboLabels=e.comboLabels??!0,this.unread=e.unread,this.typingPause=e.typingPause??!0,this.flickerLatch=e.flickerLatch??!0,this.debugConsole=e.debugConsole??!0,this.debounceSwitch=e.debounceSwitch??!0,this.timingUsOnly=e.timingUsOnly??!0,this.padGestures=e.padGestures??!0,this.touchpad=e.touchpad??!1,this.hostTouchpad=e.hostTouchpad??!1,this.multiFinger=e.multiFinger??!0,this.onChange=e.onChange,this.timingUsOnly&&this.migrateTiming(),this.factoryKeymap=e.factoryKeymap,this.serial=e.serial??Ge;const o=Date.now();this.now=e.now??(()=>Date.now()-o),this.idCounter=Math.floor(Math.random()*65536)}comboLabels;typingPause;flickerLatch;debugConsole;debugEnable=!1;debugRequests=[];debounceSwitch;timingUsOnly;padGestures;touchpad;hostTouchpad;multiFinger;leftMissing=!1;padMode=0;invalidFrameEvery=0;leftOsDropEvery=0;touchReads=0;fingersReads=0;get padsOs(){return this.hostTouchpad&&this.padMode===0}padPalm=0;padSetting=0;padTuning={deadZone:Tn[0],tapMs:Sn[0],scroll:0};padPlayers=null;touchSpeed=1;customWrites=[];opticalDebounceOn=!0;debounceWrites=[];pressed=new Set;latchPressed=new Uint8Array(u);latchReleased=new Uint8Array(u);changes=new Uint8Array(u*L);latchReads=0;pauseRequests=[];pauseOwner=0;pauseOwnerSeen=0;pauseEndedAt=null;pausePaused=!1;pauseLastEnd=0;currentClient=0;layerState=0;dropKeymapWrites=0;idCounter;now;onChange;factoryKeymap;serial;stagedName=new Uint8Array(W);unread;migrateTiming(){const n=this.state.custom,e=r=>n[r*2]|n[r*2+1]<<8,o=(r,a)=>{n[r*2]=a&255,n[r*2+1]=a>>8&255};let t=!1;const s=n[f*2]<m.length?n[f*2]:0;for(const r of[13,14])e(r)===0&&(o(r,m[s]),t=!0);if(n[f*2]!==0&&(n[f*2]=0,t=!0),e(R)===0){const r=n[E*2];o(R,r<I?Y[r]:500),t=!0}t&&this.changed()}timingPreset(){const n=this.state.custom,e=n[26]|n[27]<<8,o=n[28]|n[29]<<8,t=m.indexOf(e);return e===o&&t>=0?t:255}timingValue(n,e,o){const t=this.state.custom,s=(C,i)=>{t[C*2]=i&255,t[C*2+1]=i>>8&255},r=C=>t[C*2]|t[C*2+1]<<8;if(n===8){if(e===f)o[0]=this.timingPreset();else if(e===R)o[0]=t[R*2],o[1]=t[R*2+1];else if(e===Cn)o[0]=t[E*2]===I?1:0;else return!1;return!0}if(n!==7)return!1;const a=o[0]|o[1]<<8;if(e===f)o[0]<m.length&&(s(13,m[o[0]]),s(14,m[o[0]]));else if(e===13||e===14)s(e,a||m[0]);else if(e===E){if(o[0]>I)return!0;t[E*2]=o[0],o[0]<I&&s(R,Y[o[0]])}else if(e===R){const C=Math.round(Math.min(2e3,Math.max(100,a))/10)*10;s(R,C),t[E*2]!==I&&(t[E*2]=En(C))}else if(e===Cn)t[E*2]=o[0]?I:En(r(R)||500);else return!1;return this.changed(),!0}get macroBufferSize(){return this.comboLabels?ne:Nn}get featureFlags3(){return(this.typingPause?ke:0)|(this.flickerLatch?we:0)|(this.padGestures?xe:0)|(this.padGestures&&this.touchpad?Ee|Ae|(this.multiFinger?Le:0):0)}count(n,e){const o=n*L+e;this.changes[o]<255&&this.changes[o]++}press(n,e){const o=`${n},${e}`;this.pressed.has(o)||(this.pressed.add(o),this.latchPressed[n]|=1<<e,this.count(n,e))}release(n,e){const o=`${n},${e}`;this.pressed.has(o)&&(this.pressed.delete(o),this.latchReleased[n]|=1<<e,this.count(n,e))}flicker(n,e){this.press(n,e),this.release(n,e)}rawRow(n){let e=0;for(let o=0;o<8;o++)this.pressed.has(`${n},${o}`)&&(e|=1<<o);return e}flickerCommand(n,e){if(e<4+3*u||e<4+V*L){e>1&&(n[1]=3);return}const o=n[0],t=n[1];if(n.fill(0,1,e),o===0){this.latchReads++,n[2]=3,n[3]=u;for(let s=0;s<u;s++)n[4+s]=this.rawRow(s),n[4+u+s]=this.latchPressed[s],n[4+2*u+s]=this.latchReleased[s];this.latchPressed.fill(0),this.latchReleased.fill(0)}else if(o===1&&t<=1){n[2]=1,n[3]=t;const s=t*V*L;n.set(this.changes.subarray(s,s+V*L),4),this.changes.fill(0,s,s+V*L)}else n[1]=1}typingPauseState(){const n=this.timer();return this.pausePaused&&n-this.pauseOwnerSeen>=tn&&(this.pausePaused=!1,this.pauseEndedAt=this.pauseOwnerSeen+tn,this.pauseLastEnd=2),this.pausePaused?"paused":this.pauseEndedAt!==null&&n-this.pauseEndedAt<ve?"ending":(this.pauseEndedAt=null,"off")}typingPauseCommand(n,e){if(e<16){e>1&&(n[1]=3);return}const o=n[0];this.pauseRequests.push({op:o,client:this.currentClient,at:this.timer()}),this.pauseRequests.length>2e3&&this.pauseRequests.splice(0,this.pauseRequests.length-2e3),n.fill(0,1,e);let t=0;const s=this.typingPauseState();o===1?(this.pausePaused=!0,this.pauseEndedAt=null,this.pauseOwner=this.currentClient,this.pauseOwnerSeen=this.timer()):o===0?s==="paused"&&(this.pausePaused=!1,this.pauseEndedAt=this.timer(),this.pauseLastEnd=1):o!==2&&(t=1);const r=this.typingPauseState();n[1]=t,n[2]=r==="paused"?1:r==="ending"?2:0,n[3]=this.pauseLastEnd,n[4]=r!=="off"&&this.pauseOwner===this.currentClient?1:0,S(n,5,r==="paused"?Math.max(0,tn-(this.timer()-this.pauseOwnerSeen)):0)}get featureFlags2(){return ye|(this.comboLabels?be:0)}changed(){this.onChange?.(this.state)}receive(n){const e=n.length,o=new Uint8Array(n);return o[0]===nn?this.clientWrapperReceive(o,e):o[0]===en?null:(this.viaReceive(o,e,!1),o)}timer(){return Math.floor(this.now())>>>0}allocateId(){const n=(this.timer()&4294901760|this.idCounter&65535)>>>0;return this.idCounter=this.idCounter+1&65535,n}validId(n){if(n===0||n===pe)return!1;const e=(n&4294901760)>>>0;return((this.timer()&4294901760)>>>0)-e>>>0<fn*1e3}sendError(n,e,o){return o.fill(0),o[0]=nn,g(o,1,n),o[5]=255,o[6]=e,o}clientWrapperReceive(n,e){const o=H(n,1);if(o===0)return e<31?null:(g(n,25,this.allocateId()),S(n,29,fn),n);if(!this.validId(o))return this.sendError(o,Re,n);this.currentClient=o,this.typingPauseState()==="paused"&&o===this.pauseOwner&&(this.pauseOwnerSeen=this.timer());const t=n[5];return t===en&&this.unread?.qmkSettings&&(n[6]===16||n[6]===17)||t===hn&&n[6]===8&&n[7]===0&&this.unread?.customIds?.includes(n[8])?null:t===en?(this.svalCommand(n.subarray(5),e-5),n):t===hn?(n.copyWithin(0,6),this.viaReceive(n,e,!0),n.copyWithin(6,0,e-6),n[0]=nn,g(n,1,o),n[5]=t,n):this.sendError(o,me,n)}viaBufferSize(n,e,o){const t=o&&e>6?e-6:e,s=t>4?t-4:0;return n>s?s:n}viaReceive(n,e,o){const t=n.subarray(1),s=this.state;switch(n[0]){case 1:t[0]=yn>>8,t[1]=yn&255;break;case 2:switch(t[0]){case 1:{const r=this.timer();t[1]=r>>>24&255,t[2]=r>>>16&255,t[3]=r>>>8&255,t[4]=r&255;break}case 2:case 4:t[1]=t[2]=t[3]=t[4]=0;break;case 3:{const r=t[1];let a=2;for(let C=0;C<28&&C+r<u;C++){let i=0;for(let K=0;K<8;K++)this.pressed.has(`${C+r},${K}`)&&(i|=1<<K);t[a++]=i}break}case 6:t[1]=0,t[2]=0,t[3]=0,t[4]=U[2];break;default:n[0]=M}break;case 3:t[0]!==2&&t[0]!==5&&(n[0]=M);break;case 4:{const r=this.keycodeAt(t[0],t[1],t[2]);t[3]=r>>8,t[4]=r&255;break}case 5:{const[r,a,C]=[t[0],t[1],t[2]];if(this.dropKeymapWrites>0){this.dropKeymapWrites--;break}if(r<b&&a<u&&C<y){const i=((r*u+a)*y+C)*2;s.keymap[i]=t[3],s.keymap[i+1]=t[4],this.changed()}break}case 6:if(!this.factoryKeymap){n[0]=M;break}s.keymap.set(this.factoryKeymap),this.changed();break;case 7:case 8:case 9:this.customValueCommand(n,e,o);break;case 12:t[0]=sn&255,t[1]=sn>>8;break;case 13:{const r=Math.min(this.macroBufferSize,65535);t[0]=r>>8,t[1]=r&255;break}case 14:case 15:{const r=t[0]<<8|t[1],a=this.viaBufferSize(t[2],e,o);n[0]===14?this.macroRead(r,a,t.subarray(3)):(this.macroWrite(r,t.subarray(3,3+a)),this.changed());break}case 16:s.macros.fill(0),this.changed();break;case 17:t[0]=b;break;case 18:case 19:{const r=t[0]<<8|t[1],a=this.viaBufferSize(t[2],e,o),C=t.subarray(3);if(n[0]===19&&this.dropKeymapWrites>0){this.dropKeymapWrites--;break}for(let i=0;i<a;i++){const K=r+i;n[0]===18?C[i]=K<s.keymap.length?s.keymap[K]:0:K<s.keymap.length&&(s.keymap[K]=C[i])}n[0]===19&&this.changed();break}default:n[0]=M}}keycodeAt(n,e,o){if(n>=b||e>=u||o>=y)return 0;const t=((n*u+e)*y+o)*2;return this.state.keymap[t]<<8|this.state.keymap[t+1]}macroRead(n,e,o){const t=this.macroBufferSize;for(let s=0;s<e;s++)o[s]=n<t&&s<t-n?this.state.macros[n+s]:0}macroWrite(n,e){const o=this.macroBufferSize;for(let t=0;t<e.length;t++)n<o&&t<o-n&&(this.state.macros[n+t]=e[t])}customValueCommand(n,e,o){const[t,s,r]=[n[0],n[1],n[2]],a=n.subarray(3);if(s===Fe){this.rgblightCommand(n);return}if(s===qe){n[0]=M;return}if(s===Ue){this.scanlabCommand(n,e);return}if(s===Pe){this.identityCommand(n,e,o);return}const C=this.state.custom;if(r===Be&&this.debounceSwitch){t===7?(this.opticalDebounceOn=a[0]!==0,this.debounceWrites.push({value:a[0],saved:!1})):t===8&&(a[0]=this.opticalDebounceOn?1:0);return}if(this.padGestures&&this.touchpad&&this.multiFinger&&r===59){t===7?(this.customWrites.push({id:r,value:Array.from(a.subarray(0,2))}),this.padMode=a[0]===1?1:0):t===8&&(a[0]=this.padMode);return}if(this.padGestures&&this.touchpad&&this.multiFinger&&r===58){t===7?(this.customWrites.push({id:r,value:Array.from(a.subarray(0,2))}),this.padPalm=Math.min(56,a[0]|a[1]<<8)):t===8&&(a[0]=this.padPalm,a[1]=0);return}if(this.padGestures&&this.touchpad&&r>=55&&r<=57){this.padTuningValue(t,r,a);return}if(this.padGestures&&r>=51&&r<=54){this.padValue(t,r,a);return}if(t===9&&this.debounceWrites.length&&(this.debounceWrites[this.debounceWrites.length-1].saved=!0),t===7&&this.customWrites.push({id:r,value:Array.from(a.subarray(0,2))}),!(this.timingUsOnly&&this.timingValue(t,r,a))&&!(!this.timingUsOnly&&He.has(r))){if(t===7){if(r>=an||!We(r))return;let i=a[0];if((r===0||r===2)&&i>=11||r===5&&i>=6||r===9&&i>=7)return;r===30&&i>2&&(i=2),r>=25&&r<=29&&(i=i?1:0),C[r*2]=i,(xn.has(r)||r>=32)&&(C[r*2+1]=a[1]),this.changed()}else if(t===8){if(r>=an||!Ve(r))return;a[0]=C[r*2],(xn.has(r)||r===31||r>=32)&&(a[1]=C[r*2+1])}}}padTuningValue(n,e,o){const t=this.padTuning;if(n===7){this.customWrites.push({id:e,value:Array.from(o.subarray(0,2))});const s=o[0]|o[1]<<8;e===55?t.deadZone=Q(Tn,s):e===56?t.tapMs=Q(Sn,s):t.scroll=s===0||s===z?0:Q(Hn.slice(1),s)}else if(n===8){const s=e===55?t.deadZone:e===56?t.tapMs:t.scroll||z;o[0]=s&255,o[1]=s>>8}}chipSettings(){const n=this.padSetting;return{deadZone:this.padTuning.deadZone,tapMs:this.padTuning.tapMs,holdMs:F[n>>3&15],tapOn:(n&1)===0,twoFingerOn:(n&2)===0,holdOn:(n&4)===0,scrollStart:this.padTuning.scroll||z}}padModels(n){return this.padPlayers||(this.padPlayers=[0,J/2].map(e=>({model:new zn(()=>this.chipSettings()),fedTo:n,offset:e}))),this.padPlayers.map(e=>{for(let o=Math.max(e.fedTo,n-J);o<=n;o+=10){const t=(o+e.offset)%J;e.model.sample({...Ne(t),t:o})}return e.fedTo=Math.max(e.fedTo,n+10),e.model})}fingersPage(n){const e=this.now()*this.touchSpeed,[o,t]=this.padModels(e).map((s,r)=>({...s.readFingers(e),os:this.padsOs,...this.leftMissing&&r===0?{valid:!1}:{}}));n.set(Vn({palm:this.padPalm,left:o,right:t}))}touchPage(n){const e=this.now()*this.touchSpeed;this.touchReads++;const o=this.invalidFrameEvery>0&&this.touchReads%this.invalidFrameEvery===0,t=this.leftOsDropEvery>0&&this.touchReads%this.leftOsDropEvery===1,s=this.padModels(e).map((a,C)=>({...a.read(e),os:this.padsOs&&!(C===0&&t),...o||this.leftMissing&&C===0?{valid:!1}:{}})),r=this.chipSettings();n.set(Wn({tapOn:r.tapOn,twoFingerOn:r.twoFingerOn,holdOn:r.holdOn,elapsedMs:0,deadZone:r.deadZone,tapMs:r.tapMs,holdMs:r.holdMs,width:Zn,height:Yn,channelsX:8,channelsY:7,scrollStart:this.padTuning.scroll||z,left:s[0],right:s[1]}))}padValue(n,e,o){const t=e===51?1:e===52?2:4;if(n===7)if(this.customWrites.push({id:e,value:Array.from(o.subarray(0,2))}),e===54){const s=o[0]|o[1]<<8,r=F.reduce((a,C,i)=>{const K=Math.abs(C-s),h=Math.abs(F[a]-s);return K<h||K===h&&C<F[a]?i:a},0);this.padSetting=this.padSetting&-121|r<<3}else this.padSetting=o[0]?this.padSetting&~t:this.padSetting|t;else if(n===8)if(e===54){const s=F[this.padSetting>>3&15];o[0]=s&255,o[1]=s>>8}else o[0]=this.padSetting&t?0:1}scanlabCommand(n,e){const[o,,t]=[n[0],n[1],n[2]],s=n.subarray(3);if(o!==7&&o!==8)return;const r=o===8?t&-9:t,a=o===8?t>>3&1:s[0]&1,C=new Uint8Array(on),i=this.state.custom,K=x=>i[x*2]|i[x*2+1]<<8,h=i[f*2]<m.length?i[f*2]:0,k=K(13)||m[h],A=K(14)||m[h],v=[25,26,27,28,29].reduce((x,j,qn)=>x|(i[j*2]?1:0)<<qn,0);r===16?(C[0]=1,S(C,8,k),S(C,10,A),C[12]=a===0?1:0,C[13]=4,S(C,17,K(13)),S(C,19,K(14)),C[21]=this.timingUsOnly?this.timingPreset():i[f*2],C[22]=a===1?1:0,this.debounceSwitch&&(C[23]=1|(this.opticalDebounceOn?2:0))):r===17?(S(C,0,K(20)),S(C,2,K(21)),S(C,4,K(22)),S(C,6,1e3),S(C,8,bn*(k+13)),S(C,11,K(20)),S(C,13,k),S(C,15,A),C[17]=bn,S(C,18,K(23)),S(C,20,K(24)),C[22]=(v&31)<<2):r===18&&(C[0]=v,C[5]=this.state.rgb[0],C[4]=this.state.rgb[0],C[7]=1,C[21]=125,C[22]=[48,24,12][Math.min(2,i[60])]);const w=Math.min(Math.max(0,e-3),this.debounceSwitch?on:on-1);s.set(C.subarray(0,w))}rgblightCommand(n){const[e,,o]=[n[0],n[1],n[2]],t=n.subarray(3),s=this.state.rgb;if(e===9)return;const a={1:[0],2:[1],3:[2],4:[3,4]}[o];if(!a){n[0]=M;return}e===7?(a.forEach((C,i)=>{s[C]=t[i]}),this.changed()):a.forEach((C,i)=>{t[i]=s[C]})}identityCommand(n,e,o){const[t,,s]=[n[0],n[1],n[2]],r=n.subarray(3);if(e<16)return;const a=e-5-(o?Oe:0),C=new TextEncoder().encode(this.state.identityName);if(t===8&&s===0)r[0]=1,r[1]=1,r[2]=C.length,r[3]=W,r[4]=2,r.set(this.serial,5);else if(t===8&&s===1){const i=r[0],K=i<C.length?Math.min(a,C.length-i):0;r[0]=0,r[1]=K,r.set(C.subarray(i,i+K),2)}else if(t===7&&s===1){const[i,K]=[r[0],r[1]];if(K>a||i+K>W){r[0]=1;return}this.stagedName.set(r.subarray(2,2+K),i),r[0]=0}else if(t===7&&s===2){const i=r[0];if(i>W){r[0]=1;return}this.state.identityName=new TextDecoder().decode(this.stagedName.subarray(0,i)),this.changed(),r[0]=0}else t===7&&s===3?r[0]=0:r[0]=1}svalCommand(n,e){const o=n[1],t=this.state,s=ze[o];if(s){this.tableCommand(n,e,s.table,s.set,s.minLength);return}switch(o){case 0:{g(n,2,he),n.set(fe,6),n[14]=ge,n[15]=U[0],n[16]=U[1],n[17]=U[2],n[18]=t.storageFlags&5,n[19]=this.featureFlags2,e>20&&(n[20]=this.featureFlags3),e>21&&(n[21]=(this.padGestures&&this.touchpad&&this.multiFinger?Me|Ie:0)|(this.debugConsole?De:0));break}case 42:t.storageFlags&&(t.storageFlags=0,this.changed());break;case 9:{n[2]=t.qmkSettings[2],n[3]=t.qmkSettings[3],n[4]=t.qmkSettings[28];break}case 10:t.qmkSettings[2]=n[2],t.qmkSettings[3]=n[3],t.qmkSettings[28]=n[4],this.changed();break;case 11:break;case 12:this.reset();break;case 13:g(n,2,P.length);break;case 14:{const r=N(n,2);let a=n[4];if((a===0||a>gn)&&(a=gn),r>=P.length){n[4]=0;break}const C=Math.min(a,P.length-r);n.set(P.subarray(r,r+C),5),n[4]=C;break}case 16:{const r=N(n,2),a=n.subarray(2,e);a.fill(255);let C=0;for(const i of _n)if(i.qsid>r){if(C+4>a.length)break;S(a,C,i.qsid),C+=2}break}case 17:n[2]=this.qmkSettingsGet(N(n,2),n.subarray(3,e));break;case 18:n[2]=this.qmkSettingsSet(N(n,2),n.subarray(4,e));break;case 19:{const r=q();t.qmkSettings=r.qmkSettings,t.magic=r.magic,this.changed();break}case 22:{if(e<10){n[1]=T;break}g(n,2,this.layerState),g(n,6,1<<t.defaultLayer>>>0),e>=12&&(n[10]=0,n[11]=0);break}case 23:this.layerState=H(n,2);break;case 43:{if(e<3){n[1]=T;break}const r=n[2];if(r>=b){n[2]=1;break}t.defaultLayer=r,this.changed(),n[2]=0;break}case 44:if(e>2){const r=n.subarray(2,e);if(r.fill(0),r.length>=11)if(r[0]=1,this.touchpad){const a=this.padsOs?16:0;r.set([13|a,5,5,0,40],1),r.set([15|a,5,5,0,40],6)}else r.set([9,0,3,0,0],1),r.set([11,0,3,0,0],6)}break;case 45:{const r=e>3?n[3]:0;e>2&&n.subarray(2,e).fill(0),r===1&&this.padGestures&&this.touchpad&&e>=58&&this.touchPage(n.subarray(2,e)),r===2&&this.padGestures&&this.touchpad&&this.multiFinger&&e>=58&&(this.fingersReads++,this.fingersPage(n.subarray(2,e)));break}case 47:e>2&&n.subarray(2,e).fill(0);break;case 24:{n[2]=D;for(let r=0;r<Z;r++)n[3+r]=Se.includes(r)?this.touchpad?de:Te:255;break}case 25:n[2]=D;for(let r=0;r<Z;r++)n[3+r]=r<D?t.fragments[r]:255;break;case 26:{if(e<24){n[2]=1;break}let r=n[2];if(r>Z){n[2]=2;break}r>D&&(r=D);for(let a=0;a<r;a++)t.fragments[a]=n[3+a];this.changed(),n[2]=0;break}case 33:this.tableScan(n);break;case 30:g(n,2,this.macroBufferSize);break;case 31:case 32:{if(e<7){n[1]=T;break}const r=H(n,2),a=n[6],C=this.macroBufferSize;if(a>e-7||r>C||a>C-r){o===31?n[6]=0:n[2]=1;break}o===31?this.macroRead(r,a,n.subarray(7)):(this.macroWrite(r,n.subarray(7,7+a)),this.changed(),n[2]=0);break}case 27:this.labelGet(n,e);break;case 28:this.labelSet(n,e);break;case 29:this.labelClear(n,e);break;case 61:if(!this.flickerLatch){n[1]=T;break}e>3&&this.flickerCommand(n.subarray(2),e-2);break;case 62:if(!this.debugConsole){n[1]=T;break}if(e>4){const r=n[2];this.debugRequests.push(r),(r===0||r===1)&&(this.debugEnable=r===1),n[3]=r<=2?0:1,n[4]=this.debugEnable?1:0}break;case 60:if(!this.typingPause){n[1]=T;break}e>3&&this.typingPauseCommand(n.subarray(2),e-2);break;default:n[1]=T}}tableCommand(n,e,o,t,s){const r=kn[o],a=r.bytes(this.state),C=N(n,2);if(!t){const i=n.subarray(4,4+r.size);i.fill(0),C<p&&i.set(a.subarray(C*r.size,(C+1)*r.size));return}if(e<s){n[1]=T;return}if(C>=p){n[2]=1;return}a.set(n.subarray(4,4+r.size),C*r.size),this.changed(),n[2]=0}tableScan(n){const e=n[2],o=kn[e];let t=N(n,3),s=!1;const r=new Uint8Array(Kn);for(;r.fill(0),!(!o||t>=p);t++)if(r.set(o.bytes(this.state).subarray(t*o.size,(t+1)*o.size)),o.used(r)){s=!0;break}n[3]=s?1:0,n[4]=t&255,n[5]=t>>8&255,s&&n.set(r,6)}labelArray(n){return n===Dn&&!this.comboLabels?null:this.state.labels[n]??null}labelGet(n,e){if(e<6+c){n[1]=T;return}const o=this.labelArray(n[2]);if(!o){n[1]=T;return}const t=o.length/c;let s=N(n,3);const r=a=>o.subarray(a*c,(a+1)*c).every(C=>C===0);for(;s<t&&r(s);)s++;n[3]=s<t?1:0,n[4]=s&255,n[5]=s>>8&255,n.subarray(6,6+c).fill(0),s<t&&n.set(o.subarray(s*c,(s+1)*c),6)}labelStatus(n,e){const o=this.labelArray(n);return o?e>=o.length/c?2:0:1}labelSet(n,e){if(e<5+c){n[1]=T;return}const o=n[2],t=N(n,3),s=n.slice(5,5+c);if(!Ye(s)){n[2]=3;return}const r=this.labelStatus(o,t);r===0&&(this.labelArray(o).set(s,t*c),this.changed()),n[2]=r}labelClear(n,e){if(e<5){n[1]=T;return}const o=n[2],t=N(n,3),s=this.labelStatus(o,t);s===0&&(this.labelArray(o).fill(0,t*c,(t+1)*c),this.changed()),n[2]=s}qmkSettingsGet(n,e){const o=this.state;if(n===21)return e.length<4?255:(g(e,0,o.magic),0);const t=_n.find(s=>s.qsid===n);return t?wn(n)?(e[0]=o.qmkSettings[t.offset]>>t.bit&1,0):t.size>e.length?255:(e.set(o.qmkSettings.subarray(t.offset,t.offset+t.size)),0):255}qmkSettingsSet(n,e){const o=this.state;if(n===21)return e.length<4?255:(o.magic=H(e,0)&1023,this.changed(),0);const t=_n.find(s=>s.qsid===n);return t?wn(n)?(e[0]?o.qmkSettings[t.offset]|=1<<t.bit:o.qmkSettings[t.offset]&=~(1<<t.bit),this.changed(),0):t.size>e.length?255:(o.qmkSettings.set(e.subarray(0,t.size),t.offset),this.changed(),0):255}firstBootReset(n=4){const e=q();this.factoryKeymap&&e.keymap.set(this.factoryKeymap),e.storageFlags=n,Object.assign(this.state,e),this.changed()}reset(){const n=q(),e=this.state;e.tapDance=n.tapDance,e.combo=n.combo,e.keyOverride=n.keyOverride,e.altRepeatKey=n.altRepeatKey,e.leader=n.leader,e.labels=n.labels,e.fragments=n.fragments,e.macros.fill(0),this.factoryKeymap&&e.keymap.set(this.factoryKeymap),this.changed()}}function Ye(_){let n=!1,e=0;for(;e<c;){const o=_[e];if(o===0){n=!0,e++;continue}if(n||o>=1&&o<=31&&o!==9||o===127)return!1;if(o<=127){e++;continue}let t;if(o>=194&&o<=223)t=1;else if(o>=224&&o<=239)t=2;else if(o>=240&&o<=244)t=3;else return!1;if(e+t>=c)return!1;for(let s=1;s<=t;s++){const r=_[e+s];if(r<128||r>191)return!1}if(o===224&&_[e+1]<160||o===237&&_[e+1]>159||o===240&&_[e+1]<144||o===244&&_[e+1]>143)return!1;e+=1+t}return!0}const Xe=`{
  "version": 1,
  "uid": 5199957870438586395,
  "layout": [
    [
      [
        "KC_LCTRL",
        "LGUI_T(KC_TAB)",
        "KC_LSHIFT",
        "LT1(KC_ENTER)",
        "KC_NO",
        "KC_CAPSLOCK"
      ],
      [
        "KC_V",
        "KC_G",
        "KC_F",
        "KC_R",
        "KC_DQUO",
        "KC_NO"
      ],
      [
        "KC_C",
        "KC_T",
        "KC_D",
        "KC_E",
        "KC_GRAVE",
        "KC_NO"
      ],
      [
        "KC_X",
        "KC_B",
        "KC_S",
        "KC_W",
        "KC_ESCAPE",
        "KC_NO"
      ],
      [
        "KC_Z",
        "KC_LBRACKET",
        "KC_A",
        "KC_Q",
        "KC_DELETE",
        "KC_NO"
      ],
      [
        "KC_LALT",
        "KC_BSPACE",
        "MO(1)",
        "KC_SPACE",
        "KC_NO",
        "MO(2)"
      ],
      [
        "KC_M",
        "KC_QUOTE",
        "KC_J",
        "KC_U",
        "KC_H",
        "KC_NO"
      ],
      [
        "KC_COMMA",
        "KC_COLN",
        "KC_K",
        "KC_I",
        "KC_Y",
        "KC_NO"
      ],
      [
        "KC_DOT",
        "LT14(KC_NO)",
        "KC_L",
        "KC_O",
        "KC_N",
        "KC_NO"
      ],
      [
        "KC_SLASH",
        "KC_BSLASH",
        "KC_SCOLON",
        "KC_P",
        "KC_RBRACKET",
        "KC_NO"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_END",
        "KC_5",
        "KC_4",
        "KC_DLR",
        "KC_PERC",
        "KC_NO"
      ],
      [
        "KC_PGDOWN",
        "KC_MINUS",
        "KC_3",
        "KC_HASH",
        "KC_PLUS",
        "KC_NO"
      ],
      [
        "KC_PGUP",
        "KC_DOT",
        "KC_2",
        "KC_AT",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_HOME",
        "KC_EQUAL",
        "KC_1",
        "KC_EXLM",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_LEFT",
        "KC_CIRC",
        "KC_7",
        "KC_AMPR",
        "KC_6",
        "KC_NO"
      ],
      [
        "KC_UP",
        "KC_NO",
        "KC_8",
        "KC_ASTR",
        "KC_UNDS",
        "KC_NO"
      ],
      [
        "KC_DOWN",
        "KC_NO",
        "KC_9",
        "KC_LPRN",
        "KC_INSERT",
        "KC_NO"
      ],
      [
        "KC_RIGHT",
        "KC_NO",
        "KC_0",
        "KC_RPRN",
        "KC_TILD",
        "KC_NO"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_F14",
        "KC_F5",
        "KC_F4",
        "KC_F24",
        "KC_F15",
        "KC_NO"
      ],
      [
        "KC_F13",
        "KC_F10",
        "KC_F3",
        "KC_F23",
        "KC_NO",
        "KC_NO"
      ],
      [
        "KC_F12",
        "KC_NO",
        "KC_F2",
        "KC_F22",
        "KC_NO",
        "KC_NO"
      ],
      [
        "KC_F11",
        "KC_NO",
        "KC_F1",
        "KC_F21",
        "KC_NO",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_F17",
        "KC_F16",
        "KC_F7",
        "KC_NO",
        "KC_F6",
        "KC_NO"
      ],
      [
        "KC_F18",
        "KC_NO",
        "KC_F8",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      [
        "KC_F19",
        "KC_NO",
        "KC_F9",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      [
        "KC_F20",
        "KC_NO",
        "KC_F10",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ]
    ],
    [
      [
        "KC_TRNS",
        "KC_BTN2",
        "KC_TRNS",
        "KC_BTN1",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_BTN1",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_BTN3",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_BTN2",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "SV_SNIPER_3",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ],
      [
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_TRNS",
        "KC_NO"
      ]
    ]
  ],
  "encoder_layout": [],
  "layout_options": -1,
  "macro": [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      [
        "text",
        ","
      ]
    ],
    []
  ],
  "svil_protocol": 1,
  "via_protocol": 12,
  "tap_dance": [
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    },
    {
      "on": true,
      "on_tap": "KC_NO",
      "on_hold": "KC_NO",
      "on_double_tap": "KC_NO",
      "on_tap_hold": "KC_NO",
      "tapping_term": 200
    }
  ],
  "combo": [
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    },
    {
      "on": true,
      "keys": [
        "KC_NO",
        "KC_NO",
        "KC_NO",
        "KC_NO"
      ],
      "output": "KC_NO",
      "combo_term": 0
    }
  ],
  "key_override": [
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "trigger": "KC_NO",
      "replacement": "KC_NO",
      "layers": 65535,
      "trigger_mods": 0,
      "negative_mod_mask": 0,
      "suppressed_mods": 0,
      "options": 0
    }
  ],
  "alt_repeat_key": [
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    },
    {
      "on": true,
      "keycode": "KC_NO",
      "alt_keycode": "KC_NO",
      "allowed_mods": 0,
      "options": 0
    }
  ],
  "leader": [
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    },
    {
      "on": true,
      "sequence": [],
      "output": "KC_NO",
      "options": 0
    }
  ],
  "settings": {
    "1": 0,
    "2": 50,
    "3": 0,
    "4": 175,
    "5": 5,
    "6": 5000,
    "7": 200,
    "9": 30,
    "10": 20,
    "11": 1,
    "12": 15,
    "13": 40,
    "14": 10,
    "15": 80,
    "16": 8,
    "17": 40,
    "18": 0,
    "19": 80,
    "20": 5,
    "21": 128,
    "22": 1,
    "23": 0,
    "24": 0,
    "25": 200,
    "26": 1,
    "27": 0,
    "28": 300,
    "29": 1
  },
  "fragment_selections": {
  "left_pinky": "finger_5",
  "left_ring": "finger_5",
  "left_middle": "finger_5",
  "left_index": "finger_5",
  "right_index": "finger_5",
  "right_middle": "finger_5",
  "right_ring": "finger_5",
  "right_pinky": "finger_5",
    "left_thumb": "thumb_left",
    "right_thumb": "thumb_right"
  },
  "fragments": {
    "finger_5": {
      "id": 0,
      "description": "5-key finger cluster (no 2S)",
      "kle": [
        [
          {
            "x": 1
          },
          "N"
        ],
        [
          "W",
          "C",
          "E"
        ],
        [
          {
            "x": 1
          },
          "S"
        ]
      ]
    },
    "finger_6": {
      "id": 1,
      "description": "6-key finger cluster (with 2S)",
      "kle": [
        [
          {
            "x": 1
          },
          "N"
        ],
        [
          "W",
          "C",
          "E"
        ],
        [
          {
            "x": 1
          },
          "S"
        ],
        [
          {
            "x": 1
          },
          "2S"
        ]
      ]
    },
    "thumb_left": {
      "id": 2,
      "description": "Left thumb cluster (6 keys)",
      "kle": [
        [
          {
            "w": 1.5
          },
          "T1",
          "T2",
          {
            "w": 1.5
          },
          "T3"
        ],
        [
          {
            "x": -0.5,
            "w": 2
          },
          "T4",
          "T5",
          {
            "w": 1.5
          },
          "T6"
        ]
      ]
    },
    "thumb_right": {
      "id": 3,
      "description": "Right thumb cluster (6 keys)",
      "kle": [
        [
          {
            "w": 1.5
          },
          "T1",
          "T2",
          {
            "w": 1.5
          },
          "T3"
        ],
        [
          {
            "w": 1.5
          },
          "T4",
          "T5",
          {
            "w": 2
          },
          "T6"
        ]
      ]
    }
  },
  "composition": {
    "instances": [
      {
        "id": "left_pinky",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 0,
              "y": 1.5
            },
            "matrix_map": [
              [
                4,
                3
              ],
              [
                4,
                4
              ],
              [
                4,
                2
              ],
              [
                4,
                1
              ],
              [
                4,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 0,
              "y": 1.5
            },
            "matrix_map": [
              [
                4,
                3
              ],
              [
                4,
                4
              ],
              [
                4,
                2
              ],
              [
                4,
                1
              ],
              [
                4,
                0
              ],
              [
                4,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "left_ring",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 2.5,
              "y": 0
            },
            "matrix_map": [
              [
                3,
                3
              ],
              [
                3,
                4
              ],
              [
                3,
                2
              ],
              [
                3,
                1
              ],
              [
                3,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 2.5,
              "y": 0
            },
            "matrix_map": [
              [
                3,
                3
              ],
              [
                3,
                4
              ],
              [
                3,
                2
              ],
              [
                3,
                1
              ],
              [
                3,
                0
              ],
              [
                3,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "left_middle",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 6,
              "y": 0
            },
            "matrix_map": [
              [
                2,
                3
              ],
              [
                2,
                4
              ],
              [
                2,
                2
              ],
              [
                2,
                1
              ],
              [
                2,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 6,
              "y": 0
            },
            "matrix_map": [
              [
                2,
                3
              ],
              [
                2,
                4
              ],
              [
                2,
                2
              ],
              [
                2,
                1
              ],
              [
                2,
                0
              ],
              [
                2,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "left_index",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 8.5,
              "y": 1.5
            },
            "matrix_map": [
              [
                1,
                3
              ],
              [
                1,
                4
              ],
              [
                1,
                2
              ],
              [
                1,
                1
              ],
              [
                1,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 8.5,
              "y": 1.5
            },
            "matrix_map": [
              [
                1,
                3
              ],
              [
                1,
                4
              ],
              [
                1,
                2
              ],
              [
                1,
                1
              ],
              [
                1,
                0
              ],
              [
                1,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "right_index",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 13.5,
              "y": 1.5
            },
            "matrix_map": [
              [
                6,
                3
              ],
              [
                6,
                4
              ],
              [
                6,
                2
              ],
              [
                6,
                1
              ],
              [
                6,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 13.5,
              "y": 1.5
            },
            "matrix_map": [
              [
                6,
                3
              ],
              [
                6,
                4
              ],
              [
                6,
                2
              ],
              [
                6,
                1
              ],
              [
                6,
                0
              ],
              [
                6,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "right_middle",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 16,
              "y": 0
            },
            "matrix_map": [
              [
                7,
                3
              ],
              [
                7,
                4
              ],
              [
                7,
                2
              ],
              [
                7,
                1
              ],
              [
                7,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 16,
              "y": 0
            },
            "matrix_map": [
              [
                7,
                3
              ],
              [
                7,
                4
              ],
              [
                7,
                2
              ],
              [
                7,
                1
              ],
              [
                7,
                0
              ],
              [
                7,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "right_ring",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 19.5,
              "y": 0
            },
            "matrix_map": [
              [
                8,
                3
              ],
              [
                8,
                4
              ],
              [
                8,
                2
              ],
              [
                8,
                1
              ],
              [
                8,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 19.5,
              "y": 0
            },
            "matrix_map": [
              [
                8,
                3
              ],
              [
                8,
                4
              ],
              [
                8,
                2
              ],
              [
                8,
                1
              ],
              [
                8,
                0
              ],
              [
                8,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "right_pinky",
        "fragment_options": [
          {
            "fragment": "finger_5",
            "placement": {
              "x": 22,
              "y": 1.5
            },
            "matrix_map": [
              [
                9,
                3
              ],
              [
                9,
                4
              ],
              [
                9,
                2
              ],
              [
                9,
                1
              ],
              [
                9,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 22,
              "y": 1.5
            },
            "matrix_map": [
              [
                9,
                3
              ],
              [
                9,
                4
              ],
              [
                9,
                2
              ],
              [
                9,
                1
              ],
              [
                9,
                0
              ],
              [
                9,
                5
              ]
            ],
            "default": true
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "left_thumb",
        "fragment_options": [
          {
            "fragment": "thumb_left",
            "placement": {
              "x": 8,
              "y": 7
            },
            "matrix_map": [
              [
                0,
                3
              ],
              [
                0,
                5
              ],
              [
                0,
                1
              ],
              [
                0,
                4
              ],
              [
                0,
                2
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "fragment": "finger_5",
            "placement": {
              "x": 8.5,
              "y": 7
            },
            "matrix_map": [
              [
                0,
                3
              ],
              [
                0,
                4
              ],
              [
                0,
                2
              ],
              [
                0,
                1
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 8.5,
              "y": 7
            },
            "matrix_map": [
              [
                0,
                3
              ],
              [
                0,
                4
              ],
              [
                0,
                2
              ],
              [
                0,
                1
              ],
              [
                0,
                0
              ],
              [
                0,
                5
              ]
            ]
          }
        ],
        "hardware_detect": false
      },
      {
        "id": "right_thumb",
        "fragment_options": [
          {
            "fragment": "thumb_right",
            "placement": {
              "x": 13,
              "y": 7
            },
            "matrix_map": [
              [
                5,
                1
              ],
              [
                5,
                5
              ],
              [
                5,
                3
              ],
              [
                5,
                0
              ],
              [
                5,
                2
              ],
              [
                5,
                4
              ]
            ]
          },
          {
            "fragment": "finger_5",
            "placement": {
              "x": 13.5,
              "y": 7
            },
            "matrix_map": [
              [
                5,
                3
              ],
              [
                5,
                4
              ],
              [
                5,
                2
              ],
              [
                5,
                1
              ],
              [
                5,
                0
              ]
            ]
          },
          {
            "fragment": "finger_6",
            "placement": {
              "x": 13.5,
              "y": 7
            },
            "matrix_map": [
              [
                5,
                3
              ],
              [
                5,
                4
              ],
              [
                5,
                2
              ],
              [
                5,
                1
              ],
              [
                5,
                0
              ],
              [
                5,
                5
              ]
            ]
          }
        ],
        "hardware_detect": false
      }
    ]
  },
  "keylayout": {
    "0": {
      "x": 10.8,
      "y": 6.5,
      "w": 1.5,
      "h": 1,
      "row": 0,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T6"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "1": {
      "x": 10.8,
      "y": 5.5,
      "w": 1.5,
      "h": 1,
      "row": 0,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T3"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "2": {
      "x": 9.8,
      "y": 6.5,
      "w": 1,
      "h": 1,
      "row": 0,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T5"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "3": {
      "x": 8.3,
      "y": 5.5,
      "w": 1.5,
      "h": 1,
      "row": 0,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T1"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "4": {
      "x": 7.800000000000001,
      "y": 6.5,
      "w": 2,
      "h": 1,
      "row": 0,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T4"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "5": {
      "x": 9.8,
      "y": 5.5,
      "w": 1,
      "h": 1,
      "row": 0,
      "col": 5,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T2"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "6": {
      "x": 9.5,
      "y": 3.5,
      "w": 1,
      "h": 1,
      "row": 1,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "7": {
      "x": 10.5,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 1,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "8": {
      "x": 9.5,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 1,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "9": {
      "x": 9.5,
      "y": 1.5,
      "w": 1,
      "h": 1,
      "row": 1,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "10": {
      "x": 8.5,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 1,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "12": {
      "x": 7,
      "y": 2,
      "w": 1,
      "h": 1,
      "row": 2,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "13": {
      "x": 8,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 2,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "14": {
      "x": 7,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 2,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "15": {
      "x": 7,
      "y": 0,
      "w": 1,
      "h": 1,
      "row": 2,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "16": {
      "x": 6,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 2,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "18": {
      "x": 3.5,
      "y": 2,
      "w": 1,
      "h": 1,
      "row": 3,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "19": {
      "x": 4.5,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 3,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "20": {
      "x": 3.5,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 3,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "21": {
      "x": 3.5,
      "y": 0,
      "w": 1,
      "h": 1,
      "row": 3,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "22": {
      "x": 2.5,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 3,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "24": {
      "x": 1,
      "y": 3.5,
      "w": 1,
      "h": 1,
      "row": 4,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "25": {
      "x": 2,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 4,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "26": {
      "x": 1,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 4,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "27": {
      "x": 1,
      "y": 1.5,
      "w": 1,
      "h": 1,
      "row": 4,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "28": {
      "x": 0,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 4,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "30": {
      "x": 12.7,
      "y": 6.5,
      "w": 1.5,
      "h": 1,
      "row": 5,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T4"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "31": {
      "x": 12.7,
      "y": 5.5,
      "w": 1.5,
      "h": 1,
      "row": 5,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T1"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "32": {
      "x": 14.2,
      "y": 6.5,
      "w": 1,
      "h": 1,
      "row": 5,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T5"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "33": {
      "x": 15.2,
      "y": 5.5,
      "w": 1.5,
      "h": 1,
      "row": 5,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T3"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "34": {
      "x": 15.2,
      "y": 6.5,
      "w": 2,
      "h": 1,
      "row": 5,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T6"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "35": {
      "x": 14.2,
      "y": 5.5,
      "w": 1,
      "h": 1,
      "row": 5,
      "col": 5,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "T2"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "36": {
      "x": 14.5,
      "y": 3.5,
      "w": 1,
      "h": 1,
      "row": 6,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "37": {
      "x": 15.5,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 6,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "38": {
      "x": 14.5,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 6,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "39": {
      "x": 14.5,
      "y": 1.5,
      "w": 1,
      "h": 1,
      "row": 6,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "40": {
      "x": 13.5,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 6,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "42": {
      "x": 17,
      "y": 2,
      "w": 1,
      "h": 1,
      "row": 7,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "43": {
      "x": 18,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 7,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "44": {
      "x": 17,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 7,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "45": {
      "x": 17,
      "y": 0,
      "w": 1,
      "h": 1,
      "row": 7,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "46": {
      "x": 16,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 7,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "48": {
      "x": 20.5,
      "y": 2,
      "w": 1,
      "h": 1,
      "row": 8,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "49": {
      "x": 21.5,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 8,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "50": {
      "x": 20.5,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 8,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "51": {
      "x": 20.5,
      "y": 0,
      "w": 1,
      "h": 1,
      "row": 8,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "52": {
      "x": 19.5,
      "y": 1,
      "w": 1,
      "h": 1,
      "row": 8,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "54": {
      "x": 23,
      "y": 3.5,
      "w": 1,
      "h": 1,
      "row": 9,
      "col": 0,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "S"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "55": {
      "x": 24,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 9,
      "col": 1,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "E"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "56": {
      "x": 23,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 9,
      "col": 2,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "C"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "57": {
      "x": 23,
      "y": 1.5,
      "w": 1,
      "h": 1,
      "row": 9,
      "col": 3,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "N"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    },
    "58": {
      "x": 22,
      "y": 2.5,
      "w": 1,
      "h": 1,
      "row": 9,
      "col": 4,
      "color": "#cccccc",
      "textColor": [],
      "labels": [
        "W"
      ],
      "rotation_angle": 0,
      "rotation_x": 0,
      "rotation_y": 0
    }
  },
  "cosmetic": {
    "layer": {},
    "layer_colors": {
      "0": "green",
      "1": "orange",
      "2": "blue",
      "3": "orange",
      "4": "yellow",
      "5": "blue",
      "6": "red",
      "7": "red",
      "8": "magenta",
      "9": "purple",
      "10": "orange",
      "11": "green",
      "12": "blue",
      "13": "blue",
      "14": "yellow",
      "15": "magenta"
    }
  },
  "custom_values": [
    {
      "key": "id_layer0_color",
      "channel": 0,
      "valueId": 0,
      "data": [
        85,
        255
      ]
    },
    {
      "key": "id_layer1_color",
      "channel": 0,
      "valueId": 1,
      "data": [
        21,
        255
      ]
    },
    {
      "key": "id_layer2_color",
      "channel": 0,
      "valueId": 2,
      "data": [
        149,
        255
      ]
    },
    {
      "key": "id_layer3_color",
      "channel": 0,
      "valueId": 3,
      "data": [
        11,
        176
      ]
    },
    {
      "key": "id_layer4_color",
      "channel": 0,
      "valueId": 4,
      "data": [
        43,
        255
      ]
    },
    {
      "key": "id_layer5_color",
      "channel": 0,
      "valueId": 5,
      "data": [
        128,
        255
      ]
    },
    {
      "key": "id_layer6_color",
      "channel": 0,
      "valueId": 6,
      "data": [
        0,
        255
      ]
    },
    {
      "key": "id_layer7_color",
      "channel": 0,
      "valueId": 7,
      "data": [
        0,
        255
      ]
    },
    {
      "key": "id_layer8_color",
      "channel": 0,
      "valueId": 8,
      "data": [
        234,
        255
      ]
    },
    {
      "key": "id_layer9_color",
      "channel": 0,
      "valueId": 9,
      "data": [
        191,
        255
      ]
    },
    {
      "key": "id_layer10_color",
      "channel": 0,
      "valueId": 10,
      "data": [
        11,
        176
      ]
    },
    {
      "key": "id_layer11_color",
      "channel": 0,
      "valueId": 11,
      "data": [
        106,
        255
      ]
    },
    {
      "key": "id_layer12_color",
      "channel": 0,
      "valueId": 12,
      "data": [
        128,
        255
      ]
    },
    {
      "key": "id_layer13_color",
      "channel": 0,
      "valueId": 13,
      "data": [
        128,
        255
      ]
    },
    {
      "key": "id_layer14_color",
      "channel": 0,
      "valueId": 14,
      "data": [
        43,
        255
      ]
    },
    {
      "key": "id_layer15_color",
      "channel": 0,
      "valueId": 15,
      "data": [
        213,
        255
      ]
    }
  ]
}
`,je={[ee]:{0:"Base",1:"Numbers"},[te]:{0:"A or Ctrl"},[oe]:{1:"Greeting"},[Dn]:Xn},Un=32768,Qe=32768,Je=128;function O(_,n,e){_[n]=e&255,_[n+1]=e>>8&255}function $e(_,n,e){const o=new TextEncoder().encode(e).subarray(0,c);_.set(o,n*c)}function un(){const _=U.join(".");return jn()!==_&&Qn(_),dn.registerKnownCustomKeycodes(X.customKeycodes??[]),n=>{const e=dn.parse(n);return Number.isFinite(e)&&e>=0&&e<=65535?e:0}}function Bn(_=un()){const n=JSON.parse(Xe).layout??[],e=new Uint8Array(b*u*y*2);for(let o=0;o<b;o++)for(let t=0;t<u;t++)for(let s=0;s<y;s++){const r=n[o]?.[t]?.[s],a=r?_(r):0,C=((o*u+t)*y+s)*2;e[C]=a>>8,e[C+1]=a&255}return e}const nt={KC_Z:"LCTL(KC_1)",KC_X:"LCTL_T(KC_2)",KC_C:"LT1(KC_3)",KC_V:"LSFT(KC_4)",KC_B:"LALT(KC_SLASH)",KC_N:"RALT(KC_7)",KC_G:"KC_2",KC_H:"KC_8"},et=[{keys:["KC_COMMA","KC_DOT"],output:"KC_ENTER"},{keys:["LCTL(KC_1)","LCTL_T(KC_2)"],output:"KC_TAB"},{keys:["LT1(KC_3)","LALT(KC_SLASH)","KC_SLASH"],output:"KC_ESCAPE"},{keys:["KC_SLASH","KC_QUOTE"],output:"KC_BSPACE"},{keys:["KC_8","KC_I"],output:"KC_DELETE"}];function tt(_){const n=un(),e=new Map(Object.entries(nt).map(([o,t])=>[n(o),n(t)]));for(let o=0;o<u*y*2;o+=2){const t=_.keymap[o]<<8|_.keymap[o+1],s=e.get(t);s!==void 0&&(_.keymap[o]=s>>8,_.keymap[o+1]=s&255)}et.forEach((o,t)=>{const s=(rn.combo.length+t)*G;_.combo.fill(0,s,s+G),o.keys.forEach((r,a)=>O(_.combo,s+a*2,n(r))),O(_.combo,s+8,n(o.output)),O(_.combo,s+10,Un)})}function An(_,n){const e=[];for(const[o,...t]of _)if(o==="text"&&e.push(...new TextEncoder().encode(String(t[0]))),o==="tap")for(const s of t){const r=n(String(s));r>0&&r<256?e.push(1,1,r):r>=256&&e.push(1,5,r&255,r>>8)}return e}function ot(){const _=un(),n=q();n.keymap=Bn(_),rn.combo.forEach((t,s)=>{const r=s*G;t.keys.forEach((a,C)=>O(n.combo,r+C*2,_(a))),O(n.combo,r+8,_(t.output)),O(n.combo,r+10,(t.on?Un:0)|t.combo_term&32767)}),rn.tap_dance.forEach((t,s)=>{const r=s*B;[t.on_tap,t.on_hold,t.on_double_tap,t.on_tap_hold].forEach((a,C)=>O(n.tapDance,r+C*2,_(a))),O(n.tapDance,r+8,(t.on?Qe:0)|t.tapping_term&32767)});const e=[An([["tap","KC_A"]],_),An([["text","hello world"]],_)];let o=0;for(const t of e)n.macros.set(t,o),o+=t.length+1;O(n.keyOverride,0,_("KC_BSPACE")),O(n.keyOverride,2,_("KC_DELETE")),n.keyOverride.set([255,255,0,0,34,0,34,Je|7],4);for(const[t,s]of Object.entries(je))for(const[r,a]of Object.entries(s))$e(n.labels[Number(t)],Number(r),a);return n.fragments.fill(0,0,D),n}const d="Simulated Svalboard",_t=12346,rt=16452,st=32;function at(_){const n={reportId:0,items:[{reportSize:8,reportCount:_,usagePage:65376}]};return{usagePage:65376,usage:97,type:1,children:[],inputReports:[n],outputReports:[n],featureReports:[]}}function Ct(){if(typeof MessageChannel<"u"&&typeof window<"u"&&!/jsdom/i.test(navigator.userAgent)){const _=new MessageChannel,n=[];return _.port1.onmessage=()=>n.shift()?.(),e=>{n.push(e),_.port2.postMessage(0)}}return _=>setTimeout(_,0)}function it(){if(typeof Worker>"u"||typeof Blob>"u"||typeof URL?.createObjectURL!="function")return null;try{const _="onmessage = (e) => { const [id, due] = e.data; while (performance.timeOrigin + performance.now() < due) {} postMessage(id); };",n=new Worker(URL.createObjectURL(new Blob([_],{type:"text/javascript"}))),e=new Map;let o=0,t=!1;return n.onerror=()=>{t=!0;for(const s of e.values())setTimeout(s,0);e.clear()},n.onmessage=s=>{const r=e.get(s.data);e.delete(s.data),r?.()},(s,r)=>{if(t){setTimeout(s,r);return}const a=o++;e.set(a,s),n.postMessage([a,performance.timeOrigin+performance.now()+r])}}catch{return null}}class Ln extends EventTarget{oninputreport=null;vendorId=_t;productId=rt;productName=d;reportLength;collections;firmware;sent=[];replyDelayMs=0;isOpen=!1;persisting;schedule;linkClock;constructor(n={}){super(),this.reportLength=n.reportLength??st,this.collections=[at(this.reportLength)];const e=n.persist??(!n.state&&n.seedTurbo===void 0&&!n.seedLeaderZero&&!n.seedUnread&&!n.seedLegends);this.persisting=e;let o=n.state??(e?ie():null);if(!o){if(o=ot(),n.seedTurbo!==void 0){const t=o.custom;t[18]=n.seedTurbo,t[26]=t[27]=t[28]=t[29]=0}n.seedLeaderZero&&(o.qmkSettings[40]=o.qmkSettings[41]=0,o.qmkSettings[42]=0),n.seedLegends&&tt(o),n.seedUnread&&(o.tapDance[18]=0,o.tapDance[19]=0,o.tapDance[10]=5,o.tapDance[11]=0),e&&On(o)}this.firmware=new Ze(o,{comboLabels:n.comboLabels??!0,typingPause:n.typingPause??!0,flickerLatch:n.flickerLatch??!0,debugConsole:n.debugConsole??!0,debounceSwitch:n.debounceSwitch??!0,timingUsOnly:n.timingUsOnly??!0,padGestures:n.padGestures??!0,touchpad:n.touchpad??!1,hostTouchpad:n.hostTouchpad??!1,multiFinger:n.multiFinger??!0,onChange:t=>{this.persisting&&On(t)},factoryKeymap:Bn(),serial:n.serial,unread:n.seedUnread?{qmkSettings:!0,customIds:[0,7]}:void 0}),this.schedule=n.schedule??Ct()}forgetSettings(){this.persisting=!1,Ke()}present=!0;async simulateFirmwareUpdate(n={}){const e=typeof navigator<"u"?navigator.hid:void 0,o=t=>{const s=new Event(t);Object.defineProperty(s,"device",{value:this}),e?.dispatchEvent(s)};this.present=!1,this.isOpen=!1,o("disconnect"),await new Promise(t=>setTimeout(t,n.goneMs??1500)),this.firmware.firstBootReset(n.flags??4),this.present=!0,o("connect")}asHIDDevice(){return this}get opened(){return this.isOpen}get state(){return this.firmware.state}async open(){this.isOpen=!0}async close(){this.isOpen=!1}async forget(){this.isOpen=!1}async sendReport(n,e){if(!this.isOpen)throw new DOMException("The device must be opened first.","InvalidStateError");const o=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength),t=new Uint8Array(this.reportLength);if(t.set(o.subarray(0,this.reportLength)),this.sent.push(t),this.sent.length>2e3&&this.sent.splice(0,this.sent.length-2e3),n!==0)return;let s;try{s=this.firmware.receive(t)}catch(r){console.error("[fake board] The simulated firmware failed on a report:",r),s=null}if(s)if(this.replyDelayMs>0){this.linkClock===void 0&&(this.linkClock=it());const r=this.linkClock;r?r(()=>this.deliver(s),this.replyDelayMs):setTimeout(()=>this.deliver(s),this.replyDelayMs)}else this.schedule(()=>this.deliver(s))}async sendFeatureReport(){throw new DOMException("The simulated board has no feature reports.","NotSupportedError")}async receiveFeatureReport(){throw new DOMException("The simulated board has no feature reports.","NotSupportedError")}deliver(n){if(!this.isOpen)return;const e=new ArrayBuffer(this.reportLength);new Uint8Array(e).set(n);const o=new Event("inputreport");Object.defineProperties(o,{device:{value:this},reportId:{value:0},data:{value:new DataView(e)}}),this.oninputreport?.(o),this.dispatchEvent(o)}}function Kt(_,n){const e=document.createElement("div");e.setAttribute("role","status"),e.dataset.fakeBoardBadge=_,e.className="fixed bottom-2 right-2 z-[1000] flex items-center gap-2 rounded-full border border-kb-gray-border bg-kb-warn-bg px-3 py-1 text-xs font-medium text-kb-warn-ink shadow-sm";const o=document.createElement("span");o.textContent=_==="old"?`${d}, firmware without combo names`:_==="no-pause"?`${d}, firmware that can't pause typing`:_==="turbo6"?`${d}, updated from turbo 6`:_==="leader0"?`${d}, leader timeout stored as 0`:_==="touchpad"?`${d}, touchpads`:_==="touchpad-gestures"?`${d}, touchpads on built-in gestures`:_==="touchpad-434"?`${d}, touchpads, v4.3.4 firmware`:_==="legends"?`${d}, legend samples`:_==="unread"?`${d}, some reads unanswered`:d;const t=document.createElement("button");t.type="button",t.textContent="Reset",t.title="Put the simulated board back to its starting settings",t.className="cursor-pointer underline underline-offset-2 text-kb-warn-ink",t.addEventListener("click",()=>{window.confirm("Put the simulated board back to its starting settings? Its changes are lost.")&&n()}),e.append(o,t);const s=()=>document.body.appendChild(e);document.body?s():document.addEventListener("DOMContentLoaded",s,{once:!0})}function ct(_){const n=_==="touchpad"||_==="touchpad-gestures"||_==="touchpad-434",e=_==="combo-names"||_==="turbo6"||_==="leader0"||_==="unread"||_==="legends"||n,o=new Ln({comboLabels:_!=="old",typingPause:e,flickerLatch:e,debugConsole:e&&_!=="touchpad-434",debounceSwitch:e,timingUsOnly:e,seedTurbo:_==="turbo6"?6:void 0,seedLeaderZero:_==="leader0",seedUnread:_==="unread",seedLegends:_==="legends",reportLength:e?64:32,padGestures:e,touchpad:n,hostTouchpad:_==="touchpad"||_==="touchpad-434",multiFinger:_!=="touchpad-434"}),t=()=>{o.forgetSettings(),window.location.reload()},s=()=>{const r=new Ln({persist:!1,serial:[14,126,18,52,86,120,154,188],reportLength:e?64:32});return navigator.hid?.others?.unshift(r.asHIDDevice()),r};return window.keybardFakeBoard={device:o,wipe:t,addOtherBoard:s},Kt(_,t),console.info(`[fake board] ${d} (${_==="old"?"firmware without combo names":_==="no-pause"?"firmware that can't pause typing":"combo names on the board"}) in place of WebHID.`),o.asHIDDevice()}export{ct as installFakeBoard};
