import{L as An,D as _n,a as Ln,b as In,c as vn,k as rn}from"./index-CXIq3xT0.js";const S=10,f=6,h=16,Y=256,T=256,c=16,M=21,Dn=44,I=10,X=12,dn=12,fn=6,Q=14,Un=8+T*c,j=106664,Bn=j-Un,Z=51,Mn=0,Fn=1,qn=2,hn=3,J="keybard.fakeBoard.v1",Pn=[h,T,Y,T];function F(){const _=new Uint8Array(T*I);for(let e=0;e<T;e++)_[e*I+8]=200,_[e*I+9]=0;return{keymap:new Uint8Array(h*S*f*2),macros:new Uint8Array(j),tapDance:_,combo:new Uint8Array(T*X),keyOverride:new Uint8Array(T*dn),altRepeatKey:new Uint8Array(T*fn),leader:new Uint8Array(T*Q),labels:Pn.map(e=>new Uint8Array(e*c)),qmkSettings:zn(),magic:128,fragments:new Uint8Array(M),custom:Gn(),rgb:Uint8Array.from([255,1,0,0,0]),identityName:"",defaultLayer:0,storageFlags:0}}function l(_,n,e){_[n]=e&255,_[n+1]=e>>8&255}function zn(){const _=new Uint8Array(Dn);return l(_,0,175),l(_,2,5e3),l(_,4,30),l(_,6,16),l(_,8,1),l(_,10,15),l(_,12,40),l(_,14,10),l(_,16,80),l(_,18,8),l(_,20,40),l(_,22,50),l(_,24,200),_[26]=0,_[27]=0,_[28]=5,_[29]=9,l(_,30,10),l(_,32,80),_[34]=5,l(_,36,200),l(_,38,0),l(_,40,300),_[42]=1,_}function Gn(){const _=new Uint8Array(Z*2),n=(o,t,s=0)=>{_[o*2]=t,_[o*2+1]=s};n(0,3),n(1,1),n(2,3),n(3,0),n(4,1),n(5,3),n(6,15),n(7,0),n(8,1),n(9,0),n(10,7),n(11,1),n(12,1);for(let o=25;o<=29;o++)n(o,1);return[22015,5631,38399,2992,11263,33023,255,255,60159,49151,2992,27391,33023,33023,11263,54783].forEach((o,t)=>n(32+t,o>>8,o&255)),_}function sn(_){let n="";for(let e=0;e<_.length;e+=32768)n+=String.fromCharCode(..._.subarray(e,e+32768));return btoa(n)}function Cn(_,n){const e=new Uint8Array(n),o=atob(_);for(let t=0;t<o.length&&t<n;t++)e[t]=o.charCodeAt(t);return e}function Kn(_){let n=_.length;for(;n>0&&_[n-1]===0;)n--;return _.subarray(0,n)}const gn=["keymap","macros","tapDance","combo","keyOverride","altRepeatKey","leader","qmkSettings","fragments","custom","rgb"];function Vn(_){const n={v:1,magic:_.magic,identityName:_.identityName,defaultLayer:_.defaultLayer,storageFlags:_.storageFlags};for(const e of gn)n[e]=sn(Kn(_[e]));return _.labels.forEach((e,o)=>{n[`labels${o}`]=sn(Kn(e))}),JSON.stringify(n)}function Wn(_){try{const n=JSON.parse(_);if(n.v!==1)return null;const e=F();for(const o of gn)typeof n[o]=="string"&&(e[o]=Cn(n[o],e[o].length));return e.labels=e.labels.map((o,t)=>typeof n[`labels${t}`]=="string"?Cn(n[`labels${t}`],o.length):o),e.magic=Number(n.magic)>>>0,e.identityName=String(n.identityName??""),e.defaultLayer=Number(n.defaultLayer)||0,e.storageFlags=Number(n.storageFlags)||0,e}catch{return null}}function $(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Yn(){const _=$()?.getItem(J);return _?Wn(_):null}function Nn(_){try{$()?.setItem(J,Vn(_))}catch(n){console.warn("[fake board] Could not save the simulated board's settings:",n)}}function Zn(){try{$()?.removeItem(J)}catch{}}const Hn="XQAAAAT//////////wA9iInGVDbDF0/k5i20IEFAa6A1i4aNevXOOFOphT5cHOBLs5Do+nG6zZaqdPbnO+mNn7UIYXy944A8HRv5tFUVIGyb3lx+r69MT1djAEMSfS2iX2smOIwlDBAof+6NyY3seBQV/iouN20AQYhFBVtp7ElXSYjDFB2UVn8C3lO2ynN8H+NM5rHbfpWonnz1s2FXh5dyX98GwYRVJVdrO3auZdeT+b6eYIe8Q/UlNxOmzR8+DbPJXpwtBr9IQ9n6jU9y6cOjaMy56ck/TRLodroMFXhvAktki6gyzDBNU9+slSldP9XY6C+vwdLe9D80qZjyPNRl6Oe3MC1w+Fusu3HhXBuWNTxkiPMHmMLvjJGkyk+Nzx95HXuHPOmoHqXZnKe9m1muckGsuEwHx7DLjo5Rf02aatb9+pIuy9LQCKPEeaWPSjqSttiUL6UmdJU3s+/VZpJocqijZxM1xSCbgOVT8DbOTZGfMSuTmM/zIkSoAjXUanGtmFIS5wRXsxSNnCLQNcddAr4zszFwaADIjQ5u9TDouS7ctxtdsi+LJiaqKdYIpbju+RybqvgwvfCnpWDUNBX+Hkpiyhu3yMKbZ3ByWqiCIf/4QtZymGPbGdjQDmlE0M1EYCDPsj4mdaV+AytZzohNe2XJ9IegwoeS7lNgZ66aNcxxpRytZdVVrAMXVpfxIDxdOdxqclQGg6F2s3ig+xQAgZBhak5pT688unB/V8PoR8IuxNbXsvCnxOZKVpmsEAV6bbgZztcPcQfpOE5wv7qFgPhE3UUpYTC2uJ23pDXkrT/6oS7fgkxbHoxkJ0kb+3lEDO5KdWj0O2nG2A034NQCILzy107yUSSz/uRhHR3ctue+VOprUDrC7RdZG9wqTBb5G1JjB5bc1cxZ7bGW3g2tLsQ7bdo7wpmV/CQxwT/t+V6LBaJ2BA3ZHzf32rrWDg6aTjw0CZeLlMLp/qYMoYaZuifQSeKCcJQSrtosUAKgWAd1dUqtwi6/pay1Al3LJS0vuPhE90XvD/FUSAO1dA8DP4zbwc3IjOevUOCC/e7hR/aGaszQklMnfgn2XtEcWAe5hRVE1erfyi9EDkJIW+8GPiWD+V1fmEvJGMiuTuo8glAbrz0HkZIPXXs6/Bm1gaHyoJr1osO+V8Ocw/L3LGIT4voV1oXQUmhnXkHu0PG/sOIhyX1c31es5vDIndUAtje4tUkgH7E513+A/Sr+WVY7QA6bc8nrY8bz/cawv1zuwSf9DoCvGUaHoMNJnmAPlufCJPxZfky2WeH/xEUcQ7h/bOTRMqxrY+TV7vvGXvAz2rXs6XfxC7wtVnIRaPY1WqwelkGdOBzIeXnmzt9zuKxxoG8ADFWuIVMU+YfmbQVxI/7LI7h0pUXT4pDHkpoaMS7oLfpqUZ8VQTkwDysNrMuMCs5ebhHURNwwV7PMZu8F1TL7Aw/TqdPCxWKaaJBYFheybnvoF0NpGNL91Wu8+yA9ghD/rNOCEwFawN2NVgpAGpTANjlxFz/8OpwjAJCqb3rWOhcovDLY+CCIE5ZdORpilEWIkAETicLWP2fqbyHkPRMYs5SL2hKQTRHOeIzpshGeJjdmaymfokUER7kslmvwitMzcY2yDdRXDafDXTVSYApO+oip37GB33Qv6V9A8mMvqDdfrxbb0b3NhvexvrRK5yH+FHrYbh4j/pXZjzQVHfQbGA2AeMwadLA5VVKTL2/xdVg+/0LBS651IQIPRIShkLV3WWLm2qwWWV5COq231BsyxKDXtlzZV8KhAX61mEVsi9ugycLFf6dtojpfMOXEznExGQx7NTnf5K/m38WtAvXaGcz22biKHGzyP39EKxjJ/kYWtkhFScSzRhETwheSKulE5/coPDUnmiD4f5ccid5NJjQhxxvk6iWJjfBlcWhsjx+0x+ig3Go5Bjc+lxlPLPzu38d6m8FdadJrO7JY3W4U8C4vfi58nQD8HoTmU3oq5BnFjGCRbT0+cZX+5bBp/ZVSb9NOYiG/elRGy4uAo76Z9KbIIs5e++CC+yNpH36ENSKovzSNUSsONVckBbV19EtAFANTnrTM4tI+MQg/iC6awLee04LH7ICZZMKXUepQFGF9zUiYM1gU1DBYE29hyI6onegbYFOr8vbx40VN5asdC1KDvgVU7lMYXb8rYrde3iI2AICu+vLXjPB7vZtBFwCkYLTuq33Ic29un0rCVFwcUF3WIaQ8SsoQog9Cr25g11zoqfYbkSY9PCaEv9H0H5d12MpSZXJJRxaQtOa9RzNEy0ugq2+2gMAGuQkCqn2ZNaAr8Qbj4yw9Z+bLOXzj4/qbaG1X4KVyWXpdRsRbh+Iu4F4eWqqnQUh51SUB38R2mceaQK0YzIjSxAwfCrVeeDghXvX1hNeOCC97hT69FCEZ4AA66tjdvVNpQkmzf0WOxTLoE3VKVLG2y2pJ0jsirkmQbjiZ/Y/tK8o6fClt8/eJeaue8Lx43O+ELB8Vw8BUM011IrUzpx0/03EwVShQ7QVt07Xl6sAOIYwnTsh44RdDmpJr80k/yuaoKXahuUdsGWGlVloD+2t/OLSqFgtUJIcrMYj8/szwB3UrWS/ZG7vTRbQ3VK5iHeo6kixod4bmNHfWzVTM6wOdj0a9Ynvy0vpcG9u2gvqL5NYoczk7RRp+U+R7r008TkK5rmeEX95ZWo0mEahyi20ZeRWYyWwuJnkAi5gIVsJJI8cI9dcT/Sdrjb41TIdGt06yvhJ+/5jraPY97KEG5PpzOehwNVZ/KaSv02dLZgqmg/OE2OCyS6BnpxQpq/nvCcGpo2zFcH2m6IUk7TXhJ+WF5t3+0QEmeXn0P7DnC779SidYqxpLTO5gYdXw4oGw4nVt/HxbfmFBKlCjdrW5fFLciBfW1RGvDobZkocfOjto5OtuTHAfY497WrMoaE44EWcRiJCk51K6r49Ol99oAL/kKuw90rfvKZI9jqVO5jvvg6GhpZ7m+WJ2UQu5dhG2d5b5sq+pcDdFnt1WnTK6ACrIGKwiyvTKfGuvpxkCJrUvjAuSH09TOngaN+VERMTuGjFo3wTNGG4sd/1iuORe+KJboSjCeDjxybHCFyG+Tro9bT8AWBGaBxzhsIquh1QeIYOLDQkAgDU+9IQ09EccXSvwhghinfRJXXUqZHNEZz9FMnLdWVKulQ+4VSwuMS3AbDZdzZj0YEItFLC4JDF+M8R6ddL2RIM8IcbVTdHu84ReKdHqqn4kPYbXbJGtOxGB0eEnCzQfeK0zmE3snEVEc5Fr6uxPFt/ezLR1XbwdAlemb9kK+BR5kMfAFzY9BnVwyHsmJ7ahNT1oTjRJINCQ1BtEcOPIMZQMiJjXTdvmtpLEaMHMosvXlwSxjccIYsra731q9+25aBxsOnlvNZRbDI9ibNqfiJ8iZ/C3ZawhnlBYK2/VEFUi92TlszHRZ3v/FBOBgG+fdosvC4fheNHh7d7gb8QcCEjzbIu+Km0nFcbwCpQenW06iPrNMKB0INh6/QZ6ng0NjKoivQQC9sYGEOZqYlry6as65r+keOv7zgX/vKvc8A==";function Xn(_){const n=atob(_),e=new Uint8Array(n.length);for(let o=0;o<n.length;o++)e[o]=n.charCodeAt(o);return e}const A=Xn(Hn);function Qn(_){let n=0;const e=[];return An.decompressFile({readByte:()=>n<_.length?_[n++]:-1},{writeByte:o=>{e.push(o)}}),new TextDecoder().decode(new Uint8Array(e))}const nn=JSON.parse(Qn(A)),yn=nn.composition?.instances??[],E=yn.length,jn=yn.flatMap((_,n)=>_.hardware_detect?[n]:[]),Jn=nn.fragments?.pointing_none?.id??255,z=221,an=223,$n=254,ne=4294967295,ee=1,te=3,cn=120,oe=6,_e=3,R=255,ln=22,re=[27,24,125,242,33,246,41,72],L=[0,0,9],se=75,Ce=15,Ke=128,Ne=4,ae=8,k=6,D=5,G=1500,ie=500,un=13,w=255,ce=2,le=73,ue=83,V=24,Sn=5,p=[90,60,45,30,25,20,15],m=9,Se=48,g=5,O=49,H=50,q=[200,300,400,500,800],x=5,Te=84,U=64,Re=[83,86,65,76,66,79,65,82],i=(_,n)=>_[n]|_[n+1]<<8,B=(_,n)=>(_[n]|_[n+1]<<8|_[n+2]<<16|_[n+3]<<24)>>>0,u=(_,n,e)=>{_[n]=e&255,_[n+1]=e>>8&255},d=(_,n,e)=>{_[n]=e&255,_[n+1]=e>>>8&255,_[n+2]=e>>>16&255,_[n+3]=e>>>24&255},Tn={0:{bytes:_=>_.tapDance,size:I,used:_=>!!(i(_,0)||i(_,2)||i(_,4)||i(_,6))},1:{bytes:_=>_.combo,size:X,used:_=>!!(i(_,0)||i(_,8))},2:{bytes:_=>_.keyOverride,size:dn,used:_=>!!(i(_,0)||i(_,2))},3:{bytes:_=>_.altRepeatKey,size:fn,used:_=>!!(i(_,0)||i(_,2))},4:{bytes:_=>_.leader,size:Q,used:_=>!!(i(_,0)||i(_,10))}},Oe={1:{table:0,set:!1,minLength:0},2:{table:0,set:!0,minLength:14},3:{table:1,set:!1,minLength:0},4:{table:1,set:!0,minLength:16},5:{table:2,set:!1,minLength:0},6:{table:2,set:!0,minLength:16},7:{table:3,set:!1,minLength:0},8:{table:3,set:!0,minLength:10},20:{table:4,set:!1,minLength:0},21:{table:4,set:!0,minLength:18}},W=[{qsid:1,size:1,offset:26,bit:0},{qsid:2,size:2,offset:22,bit:0},{qsid:5,size:1,offset:28,bit:0},{qsid:6,size:2,offset:2,bit:0},{qsid:7,size:2,offset:24,bit:0},{qsid:9,size:2,offset:4,bit:0},{qsid:10,size:2,offset:6,bit:0},{qsid:11,size:2,offset:8,bit:0},{qsid:12,size:2,offset:10,bit:0},{qsid:13,size:2,offset:12,bit:0},{qsid:14,size:2,offset:14,bit:0},{qsid:15,size:2,offset:16,bit:0},{qsid:16,size:2,offset:18,bit:0},{qsid:17,size:2,offset:20,bit:0},{qsid:18,size:2,offset:30,bit:0},{qsid:19,size:2,offset:32,bit:0},{qsid:20,size:1,offset:34,bit:0},{qsid:21,size:0,offset:0,bit:0},{qsid:22,size:1,offset:29,bit:0},{qsid:23,size:1,offset:29,bit:1},{qsid:24,size:1,offset:29,bit:2},{qsid:25,size:2,offset:36,bit:0},{qsid:26,size:1,offset:29,bit:3},{qsid:27,size:2,offset:38,bit:0},{qsid:28,size:2,offset:40,bit:0},{qsid:29,size:1,offset:42,bit:0}],Rn=_=>_>=22&&_<=26&&_!==25||_===29,On=new Set([6,13,14,20,21,22,23,24,O]),pe=_=>_<=15||_>=20&&_<=31||_>=32&&_<48,me=_=>_<=14||_>=20&&_<=30||_>=32&&_<48,de=new Set([O,H]),pn=_=>q.reduce((n,e,o)=>Math.abs(e-_)<Math.abs(q[n]-_)?o:n,0);class fe{constructor(n,e={}){this.state=n,this.comboLabels=e.comboLabels??!0,this.typingPause=e.typingPause??!0,this.flickerLatch=e.flickerLatch??!0,this.debounceSwitch=e.debounceSwitch??!0,this.timingUsOnly=e.timingUsOnly??!0,this.onChange=e.onChange,this.timingUsOnly&&this.migrateTiming(),this.factoryKeymap=e.factoryKeymap;const o=Date.now();this.now=e.now??(()=>Date.now()-o),this.idCounter=Math.floor(Math.random()*65536)}comboLabels;typingPause;flickerLatch;debounceSwitch;timingUsOnly;customWrites=[];opticalDebounceOn=!0;debounceWrites=[];pressed=new Set;latchPressed=new Uint8Array(S);latchReleased=new Uint8Array(S);changes=new Uint8Array(S*k);latchReads=0;pauseRequests=[];pauseOwner=0;pauseOwnerSeen=0;pauseEndedAt=null;pausePaused=!1;pauseLastEnd=0;currentClient=0;layerState=0;idCounter;now;onChange;factoryKeymap;stagedName=new Uint8Array(U);migrateTiming(){const n=this.state.custom,e=r=>n[r*2]|n[r*2+1]<<8,o=(r,K)=>{n[r*2]=K&255,n[r*2+1]=K>>8&255};let t=!1;const s=n[m*2]<p.length?n[m*2]:0;for(const r of[13,14])e(r)===0&&(o(r,p[s]),t=!0);if(n[m*2]!==0&&(n[m*2]=0,t=!0),e(O)===0){const r=n[g*2];o(O,r<x?q[r]:500),t=!0}t&&this.changed()}timingPreset(){const n=this.state.custom,e=n[26]|n[27]<<8,o=n[28]|n[29]<<8,t=p.indexOf(e);return e===o&&t>=0?t:255}timingValue(n,e,o){const t=this.state.custom,s=(C,N)=>{t[C*2]=N&255,t[C*2+1]=N>>8&255},r=C=>t[C*2]|t[C*2+1]<<8;if(n===8){if(e===m)o[0]=this.timingPreset();else if(e===O)o[0]=t[O*2],o[1]=t[O*2+1];else if(e===H)o[0]=t[g*2]===x?1:0;else return!1;return!0}if(n!==7)return!1;const K=o[0]|o[1]<<8;if(e===m)o[0]<p.length&&(s(13,p[o[0]]),s(14,p[o[0]]));else if(e===13||e===14)s(e,K||p[0]);else if(e===g){if(o[0]>x)return!0;t[g*2]=o[0],o[0]<x&&s(O,q[o[0]])}else if(e===O){const C=Math.round(Math.min(2e3,Math.max(100,K))/10)*10;s(O,C),t[g*2]!==x&&(t[g*2]=pn(C))}else if(e===H)t[g*2]=o[0]?x:pn(r(O)||500);else return!1;return this.changed(),!0}get macroBufferSize(){return this.comboLabels?Bn:j}get featureFlags3(){return(this.typingPause?Ne:0)|(this.flickerLatch?ae:0)}count(n,e){const o=n*k+e;this.changes[o]<255&&this.changes[o]++}press(n,e){const o=`${n},${e}`;this.pressed.has(o)||(this.pressed.add(o),this.latchPressed[n]|=1<<e,this.count(n,e))}release(n,e){const o=`${n},${e}`;this.pressed.has(o)&&(this.pressed.delete(o),this.latchReleased[n]|=1<<e,this.count(n,e))}flicker(n,e){this.press(n,e),this.release(n,e)}rawRow(n){let e=0;for(let o=0;o<8;o++)this.pressed.has(`${n},${o}`)&&(e|=1<<o);return e}flickerCommand(n,e){if(e<4+3*S||e<4+D*k){e>1&&(n[1]=3);return}const o=n[0],t=n[1];if(n.fill(0,1,e),o===0){this.latchReads++,n[2]=3,n[3]=S;for(let s=0;s<S;s++)n[4+s]=this.rawRow(s),n[4+S+s]=this.latchPressed[s],n[4+2*S+s]=this.latchReleased[s];this.latchPressed.fill(0),this.latchReleased.fill(0)}else if(o===1&&t<=1){n[2]=1,n[3]=t;const s=t*D*k;n.set(this.changes.subarray(s,s+D*k),4),this.changes.fill(0,s,s+D*k)}else n[1]=1}typingPauseState(){const n=this.timer();return this.pausePaused&&n-this.pauseOwnerSeen>=G&&(this.pausePaused=!1,this.pauseEndedAt=this.pauseOwnerSeen+G,this.pauseLastEnd=2),this.pausePaused?"paused":this.pauseEndedAt!==null&&n-this.pauseEndedAt<ie?"ending":(this.pauseEndedAt=null,"off")}typingPauseCommand(n,e){if(e<16){e>1&&(n[1]=3);return}const o=n[0];this.pauseRequests.push({op:o,client:this.currentClient,at:this.timer()}),this.pauseRequests.length>2e3&&this.pauseRequests.splice(0,this.pauseRequests.length-2e3),n.fill(0,1,e);let t=0;const s=this.typingPauseState();o===1?(this.pausePaused=!0,this.pauseEndedAt=null,this.pauseOwner=this.currentClient,this.pauseOwnerSeen=this.timer()):o===0?s==="paused"&&(this.pausePaused=!1,this.pauseEndedAt=this.timer(),this.pauseLastEnd=1):o!==2&&(t=1);const r=this.typingPauseState();n[1]=t,n[2]=r==="paused"?1:r==="ending"?2:0,n[3]=this.pauseLastEnd,n[4]=r!=="off"&&this.pauseOwner===this.currentClient?1:0,u(n,5,r==="paused"?Math.max(0,G-(this.timer()-this.pauseOwnerSeen)):0)}get featureFlags2(){return Ce|(this.comboLabels?Ke:0)}changed(){this.onChange?.(this.state)}receive(n){const e=n.length,o=new Uint8Array(n);return o[0]===z?this.clientWrapperReceive(o,e):o[0]===an?null:(this.viaReceive(o,e,!1),o)}timer(){return Math.floor(this.now())>>>0}allocateId(){const n=(this.timer()&4294901760|this.idCounter&65535)>>>0;return this.idCounter=this.idCounter+1&65535,n}validId(n){if(n===0||n===ne)return!1;const e=(n&4294901760)>>>0;return((this.timer()&4294901760)>>>0)-e>>>0<cn*1e3}sendError(n,e,o){return o.fill(0),o[0]=z,d(o,1,n),o[5]=255,o[6]=e,o}clientWrapperReceive(n,e){const o=B(n,1);if(o===0)return e<31?null:(d(n,25,this.allocateId()),u(n,29,cn),n);if(!this.validId(o))return this.sendError(o,ee,n);this.currentClient=o,this.typingPauseState()==="paused"&&o===this.pauseOwner&&(this.pauseOwnerSeen=this.timer());const t=n[5];return t===an?(this.svalCommand(n.subarray(5),e-5),n):t===$n?(n.copyWithin(0,6),this.viaReceive(n,e,!0),n.copyWithin(6,0,e-6),n[0]=z,d(n,1,o),n[5]=t,n):this.sendError(o,te,n)}viaBufferSize(n,e,o){const t=o&&e>6?e-6:e,s=t>4?t-4:0;return n>s?s:n}viaReceive(n,e,o){const t=n.subarray(1),s=this.state;switch(n[0]){case 1:t[0]=un>>8,t[1]=un&255;break;case 2:switch(t[0]){case 1:{const r=this.timer();t[1]=r>>>24&255,t[2]=r>>>16&255,t[3]=r>>>8&255,t[4]=r&255;break}case 2:case 4:t[1]=t[2]=t[3]=t[4]=0;break;case 3:{const r=t[1];let K=2;for(let C=0;C<28&&C+r<S;C++){let N=0;for(let a=0;a<8;a++)this.pressed.has(`${C+r},${a}`)&&(N|=1<<a);t[K++]=N}break}case 6:t[1]=0,t[2]=0,t[3]=0,t[4]=L[2];break;default:n[0]=w}break;case 3:t[0]!==2&&t[0]!==5&&(n[0]=w);break;case 4:{const r=this.keycodeAt(t[0],t[1],t[2]);t[3]=r>>8,t[4]=r&255;break}case 5:{const[r,K,C]=[t[0],t[1],t[2]];if(r<h&&K<S&&C<f){const N=((r*S+K)*f+C)*2;s.keymap[N]=t[3],s.keymap[N+1]=t[4],this.changed()}break}case 6:if(!this.factoryKeymap){n[0]=w;break}s.keymap.set(this.factoryKeymap),this.changed();break;case 7:case 8:case 9:this.customValueCommand(n,e,o);break;case 12:t[0]=Y&255,t[1]=Y>>8;break;case 13:{const r=Math.min(this.macroBufferSize,65535);t[0]=r>>8,t[1]=r&255;break}case 14:case 15:{const r=t[0]<<8|t[1],K=this.viaBufferSize(t[2],e,o);n[0]===14?this.macroRead(r,K,t.subarray(3)):(this.macroWrite(r,t.subarray(3,3+K)),this.changed());break}case 16:s.macros.fill(0),this.changed();break;case 17:t[0]=h;break;case 18:case 19:{const r=t[0]<<8|t[1],K=this.viaBufferSize(t[2],e,o),C=t.subarray(3);for(let N=0;N<K;N++){const a=r+N;n[0]===18?C[N]=a<s.keymap.length?s.keymap[a]:0:a<s.keymap.length&&(s.keymap[a]=C[N])}n[0]===19&&this.changed();break}default:n[0]=w}}keycodeAt(n,e,o){if(n>=h||e>=S||o>=f)return 0;const t=((n*S+e)*f+o)*2;return this.state.keymap[t]<<8|this.state.keymap[t+1]}macroRead(n,e,o){const t=this.macroBufferSize;for(let s=0;s<e;s++)o[s]=n<t&&s<t-n?this.state.macros[n+s]:0}macroWrite(n,e){const o=this.macroBufferSize;for(let t=0;t<e.length;t++)n<o&&t<o-n&&(this.state.macros[n+t]=e[t])}customValueCommand(n,e,o){const[t,s,r]=[n[0],n[1],n[2]],K=n.subarray(3);if(s===ce){this.rgblightCommand(n);return}if(s===Te){n[0]=w;return}if(s===ue){this.scanlabCommand(n,e);return}if(s===le){this.identityCommand(n,e,o);return}const C=this.state.custom;if(r===Se&&this.debounceSwitch){t===7?(this.opticalDebounceOn=K[0]!==0,this.debounceWrites.push({value:K[0],saved:!1})):t===8&&(K[0]=this.opticalDebounceOn?1:0);return}if(t===9&&this.debounceWrites.length&&(this.debounceWrites[this.debounceWrites.length-1].saved=!0),t===7&&this.customWrites.push({id:r,value:Array.from(K.subarray(0,2))}),!(this.timingUsOnly&&this.timingValue(t,r,K))&&!(!this.timingUsOnly&&de.has(r))){if(t===7){if(r>=Z||!me(r))return;let N=K[0];if((r===0||r===2)&&N>=11||r===5&&N>=6||r===9&&N>=7)return;r===30&&N>2&&(N=2),r>=25&&r<=29&&(N=N?1:0),C[r*2]=N,(On.has(r)||r>=32)&&(C[r*2+1]=K[1]),this.changed()}else if(t===8){if(r>=Z||!pe(r))return;K[0]=C[r*2],(On.has(r)||r===31||r>=32)&&(K[1]=C[r*2+1])}}}scanlabCommand(n,e){const[o,,t]=[n[0],n[1],n[2]],s=n.subarray(3);if(o!==7&&o!==8)return;const r=o===8?t&-9:t,K=o===8?t>>3&1:s[0]&1,C=new Uint8Array(V),N=this.state.custom,a=v=>N[v*2]|N[v*2+1]<<8,en=N[m*2]<p.length?N[m*2]:0,P=a(13)||p[en],tn=a(14)||p[en],on=[25,26,27,28,29].reduce((v,xn,En)=>v|(N[xn*2]?1:0)<<En,0);r===16?(C[0]=1,u(C,8,P),u(C,10,tn),C[12]=K===0?1:0,C[13]=4,u(C,17,a(13)),u(C,19,a(14)),C[21]=this.timingUsOnly?this.timingPreset():N[m*2],C[22]=K===1?1:0,this.debounceSwitch&&(C[23]=1|(this.opticalDebounceOn?2:0))):r===17?(u(C,0,a(20)),u(C,2,a(21)),u(C,4,a(22)),u(C,6,1e3),u(C,8,Sn*(P+13)),u(C,11,a(20)),u(C,13,P),u(C,15,tn),C[17]=Sn,u(C,18,a(23)),u(C,20,a(24)),C[22]=(on&31)<<2):r===18&&(C[0]=on,C[5]=this.state.rgb[0],C[4]=this.state.rgb[0],C[7]=1,C[21]=125,C[22]=[48,24,12][Math.min(2,N[60])]);const wn=Math.min(Math.max(0,e-3),this.debounceSwitch?V:V-1);s.set(C.subarray(0,wn))}rgblightCommand(n){const[e,,o]=[n[0],n[1],n[2]],t=n.subarray(3),s=this.state.rgb;if(e===9)return;const K={1:[0],2:[1],3:[2],4:[3,4]}[o];if(!K){n[0]=w;return}e===7?(K.forEach((C,N)=>{s[C]=t[N]}),this.changed()):K.forEach((C,N)=>{t[N]=s[C]})}identityCommand(n,e,o){const[t,,s]=[n[0],n[1],n[2]],r=n.subarray(3);if(e<16)return;const K=e-5-(o?oe:0),C=new TextEncoder().encode(this.state.identityName);if(t===8&&s===0)r[0]=1,r[1]=1,r[2]=C.length,r[3]=U,r[4]=2,r.set(Re,5);else if(t===8&&s===1){const N=r[0],a=N<C.length?Math.min(K,C.length-N):0;r[0]=0,r[1]=a,r.set(C.subarray(N,N+a),2)}else if(t===7&&s===1){const[N,a]=[r[0],r[1]];if(a>K||N+a>U){r[0]=1;return}this.stagedName.set(r.subarray(2,2+a),N),r[0]=0}else if(t===7&&s===2){const N=r[0];if(N>U){r[0]=1;return}this.state.identityName=new TextDecoder().decode(this.stagedName.subarray(0,N)),this.changed(),r[0]=0}else t===7&&s===3?r[0]=0:r[0]=1}svalCommand(n,e){const o=n[1],t=this.state,s=Oe[o];if(s){this.tableCommand(n,e,s.table,s.set,s.minLength);return}switch(o){case 0:{d(n,2,_e),n.set(re,6),n[14]=se,n[15]=L[0],n[16]=L[1],n[17]=L[2],n[18]=t.storageFlags&5,n[19]=this.featureFlags2,e>20&&(n[20]=this.featureFlags3);break}case 42:t.storageFlags&&(t.storageFlags=0,this.changed());break;case 9:{n[2]=t.qmkSettings[2],n[3]=t.qmkSettings[3],n[4]=t.qmkSettings[28];break}case 10:t.qmkSettings[2]=n[2],t.qmkSettings[3]=n[3],t.qmkSettings[28]=n[4],this.changed();break;case 11:break;case 12:this.reset();break;case 13:d(n,2,A.length);break;case 14:{const r=i(n,2);let K=n[4];if((K===0||K>ln)&&(K=ln),r>=A.length){n[4]=0;break}const C=Math.min(K,A.length-r);n.set(A.subarray(r,r+C),5),n[4]=C;break}case 16:{const r=i(n,2),K=n.subarray(2,e);K.fill(255);let C=0;for(const N of W)if(N.qsid>r){if(C+4>K.length)break;u(K,C,N.qsid),C+=2}break}case 17:n[2]=this.qmkSettingsGet(i(n,2),n.subarray(3,e));break;case 18:n[2]=this.qmkSettingsSet(i(n,2),n.subarray(4,e));break;case 19:{const r=F();t.qmkSettings=r.qmkSettings,t.magic=r.magic,this.changed();break}case 22:{if(e<10){n[1]=R;break}d(n,2,this.layerState),d(n,6,1<<t.defaultLayer>>>0),e>=12&&(n[10]=0,n[11]=0);break}case 23:this.layerState=B(n,2);break;case 43:{if(e<3){n[1]=R;break}const r=n[2];if(r>=h){n[2]=1;break}t.defaultLayer=r,this.changed(),n[2]=0;break}case 44:if(e>2){const r=n.subarray(2,e);r.fill(0),r.length>=11&&(r[0]=1,r.set([9,0,3,0,0],1),r.set([11,0,3,0,0],6))}break;case 45:case 47:e>2&&n.subarray(2,e).fill(0);break;case 24:{n[2]=E;for(let r=0;r<M;r++)n[3+r]=jn.includes(r)?Jn:255;break}case 25:n[2]=E;for(let r=0;r<M;r++)n[3+r]=r<E?t.fragments[r]:255;break;case 26:{if(e<24){n[2]=1;break}let r=n[2];if(r>M){n[2]=2;break}r>E&&(r=E);for(let K=0;K<r;K++)t.fragments[K]=n[3+K];this.changed(),n[2]=0;break}case 33:this.tableScan(n);break;case 30:d(n,2,this.macroBufferSize);break;case 31:case 32:{if(e<7){n[1]=R;break}const r=B(n,2),K=n[6],C=this.macroBufferSize;if(K>e-7||r>C||K>C-r){o===31?n[6]=0:n[2]=1;break}o===31?this.macroRead(r,K,n.subarray(7)):(this.macroWrite(r,n.subarray(7,7+K)),this.changed(),n[2]=0);break}case 27:this.labelGet(n,e);break;case 28:this.labelSet(n,e);break;case 29:this.labelClear(n,e);break;case 61:if(!this.flickerLatch){n[1]=R;break}e>3&&this.flickerCommand(n.subarray(2),e-2);break;case 60:if(!this.typingPause){n[1]=R;break}e>3&&this.typingPauseCommand(n.subarray(2),e-2);break;default:n[1]=R}}tableCommand(n,e,o,t,s){const r=Tn[o],K=r.bytes(this.state),C=i(n,2);if(!t){const N=n.subarray(4,4+r.size);N.fill(0),C<T&&N.set(K.subarray(C*r.size,(C+1)*r.size));return}if(e<s){n[1]=R;return}if(C>=T){n[2]=1;return}K.set(n.subarray(4,4+r.size),C*r.size),this.changed(),n[2]=0}tableScan(n){const e=n[2],o=Tn[e];let t=i(n,3),s=!1;const r=new Uint8Array(Q);for(;r.fill(0),!(!o||t>=T);t++)if(r.set(o.bytes(this.state).subarray(t*o.size,(t+1)*o.size)),o.used(r)){s=!0;break}n[3]=s?1:0,n[4]=t&255,n[5]=t>>8&255,s&&n.set(r,6)}labelArray(n){return n===hn&&!this.comboLabels?null:this.state.labels[n]??null}labelGet(n,e){if(e<6+c){n[1]=R;return}const o=this.labelArray(n[2]);if(!o){n[1]=R;return}const t=o.length/c;let s=i(n,3);const r=K=>o.subarray(K*c,(K+1)*c).every(C=>C===0);for(;s<t&&r(s);)s++;n[3]=s<t?1:0,n[4]=s&255,n[5]=s>>8&255,n.subarray(6,6+c).fill(0),s<t&&n.set(o.subarray(s*c,(s+1)*c),6)}labelStatus(n,e){const o=this.labelArray(n);return o?e>=o.length/c?2:0:1}labelSet(n,e){if(e<5+c){n[1]=R;return}const o=n[2],t=i(n,3),s=n.slice(5,5+c);if(!he(s)){n[2]=3;return}const r=this.labelStatus(o,t);r===0&&(this.labelArray(o).set(s,t*c),this.changed()),n[2]=r}labelClear(n,e){if(e<5){n[1]=R;return}const o=n[2],t=i(n,3),s=this.labelStatus(o,t);s===0&&(this.labelArray(o).fill(0,t*c,(t+1)*c),this.changed()),n[2]=s}qmkSettingsGet(n,e){const o=this.state;if(n===21)return e.length<4?255:(d(e,0,o.magic),0);const t=W.find(s=>s.qsid===n);return t?Rn(n)?(e[0]=o.qmkSettings[t.offset]>>t.bit&1,0):t.size>e.length?255:(e.set(o.qmkSettings.subarray(t.offset,t.offset+t.size)),0):255}qmkSettingsSet(n,e){const o=this.state;if(n===21)return e.length<4?255:(o.magic=B(e,0)&1023,this.changed(),0);const t=W.find(s=>s.qsid===n);return t?Rn(n)?(e[0]?o.qmkSettings[t.offset]|=1<<t.bit:o.qmkSettings[t.offset]&=~(1<<t.bit),this.changed(),0):t.size>e.length?255:(o.qmkSettings.set(e.subarray(0,t.size),t.offset),this.changed(),0):255}reset(){const n=F(),e=this.state;e.tapDance=n.tapDance,e.combo=n.combo,e.keyOverride=n.keyOverride,e.altRepeatKey=n.altRepeatKey,e.leader=n.leader,e.labels=n.labels,e.fragments=n.fragments,e.macros.fill(0),this.factoryKeymap&&e.keymap.set(this.factoryKeymap),this.changed()}}function he(_){let n=!1,e=0;for(;e<c;){const o=_[e];if(o===0){n=!0,e++;continue}if(n||o>=1&&o<=31&&o!==9||o===127)return!1;if(o<=127){e++;continue}let t;if(o>=194&&o<=223)t=1;else if(o>=224&&o<=239)t=2;else if(o>=240&&o<=244)t=3;else return!1;if(e+t>=c)return!1;for(let s=1;s<=t;s++){const r=_[e+s];if(r<128||r>191)return!1}if(o===224&&_[e+1]<160||o===237&&_[e+1]>159||o===240&&_[e+1]<144||o===244&&_[e+1]>143)return!1;e+=1+t}return!0}const ge=`{
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
    "11": 8,
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
`,ye={[Mn]:{0:"Base",1:"Numbers"},[Fn]:{0:"A or Ctrl"},[qn]:{1:"Greeting"},[hn]:Ln},be=32768,ke=32768,we=128;function y(_,n,e){_[n]=e&255,_[n+1]=e>>8&255}function xe(_,n,e){const o=new TextEncoder().encode(e).subarray(0,c);_.set(o,n*c)}function bn(){const _=L.join(".");return In()!==_&&vn(_),rn.registerKnownCustomKeycodes(nn.customKeycodes??[]),n=>{const e=rn.parse(n);return Number.isFinite(e)&&e>=0&&e<=65535?e:0}}function kn(_=bn()){const n=JSON.parse(ge).layout??[],e=new Uint8Array(h*S*f*2);for(let o=0;o<h;o++)for(let t=0;t<S;t++)for(let s=0;s<f;s++){const r=n[o]?.[t]?.[s],K=r?_(r):0,C=((o*S+t)*f+s)*2;e[C]=K>>8,e[C+1]=K&255}return e}function mn(_,n){const e=[];for(const[o,...t]of _)if(o==="text"&&e.push(...new TextEncoder().encode(String(t[0]))),o==="tap")for(const s of t){const r=n(String(s));r>0&&r<256?e.push(1,1,r):r>=256&&e.push(1,5,r&255,r>>8)}return e}function Ee(){const _=bn(),n=F();n.keymap=kn(_),_n.combo.forEach((t,s)=>{const r=s*X;t.keys.forEach((K,C)=>y(n.combo,r+C*2,_(K))),y(n.combo,r+8,_(t.output)),y(n.combo,r+10,(t.on?be:0)|t.combo_term&32767)}),_n.tap_dance.forEach((t,s)=>{const r=s*I;[t.on_tap,t.on_hold,t.on_double_tap,t.on_tap_hold].forEach((K,C)=>y(n.tapDance,r+C*2,_(K))),y(n.tapDance,r+8,(t.on?ke:0)|t.tapping_term&32767)});const e=[mn([["tap","KC_A"]],_),mn([["text","hello world"]],_)];let o=0;for(const t of e)n.macros.set(t,o),o+=t.length+1;y(n.keyOverride,0,_("KC_BSPACE")),y(n.keyOverride,2,_("KC_DELETE")),n.keyOverride.set([255,255,0,0,34,0,34,we|7],4);for(const[t,s]of Object.entries(ye))for(const[r,K]of Object.entries(s))xe(n.labels[Number(t)],Number(r),K);return n.fragments.fill(0,0,E),n}const b="Simulated Svalboard",Ae=12346,Le=16452,Ie=32;function ve(_){const n={reportId:0,items:[{reportSize:8,reportCount:_,usagePage:65376}]};return{usagePage:65376,usage:97,type:1,children:[],inputReports:[n],outputReports:[n],featureReports:[]}}function De(){if(typeof MessageChannel<"u"&&typeof window<"u"&&!/jsdom/i.test(navigator.userAgent)){const _=new MessageChannel,n=[];return _.port1.onmessage=()=>n.shift()?.(),e=>{n.push(e),_.port2.postMessage(0)}}return _=>setTimeout(_,0)}function Ue(){if(typeof Worker>"u"||typeof Blob>"u"||typeof URL?.createObjectURL!="function")return null;try{const _="onmessage = (e) => { const [id, due] = e.data; while (performance.timeOrigin + performance.now() < due) {} postMessage(id); };",n=new Worker(URL.createObjectURL(new Blob([_],{type:"text/javascript"}))),e=new Map;let o=0,t=!1;return n.onerror=()=>{t=!0;for(const s of e.values())setTimeout(s,0);e.clear()},n.onmessage=s=>{const r=e.get(s.data);e.delete(s.data),r?.()},(s,r)=>{if(t){setTimeout(s,r);return}const K=o++;e.set(K,s),n.postMessage([K,performance.timeOrigin+performance.now()+r])}}catch{return null}}class Be extends EventTarget{oninputreport=null;vendorId=Ae;productId=Le;productName=b;reportLength;collections;firmware;sent=[];replyDelayMs=0;isOpen=!1;persisting;schedule;linkClock;constructor(n={}){super(),this.reportLength=n.reportLength??Ie,this.collections=[ve(this.reportLength)];const e=n.persist??(!n.state&&n.seedTurbo===void 0&&!n.seedLeaderZero);this.persisting=e;let o=n.state??(e?Yn():null);if(!o){if(o=Ee(),n.seedTurbo!==void 0){const t=o.custom;t[18]=n.seedTurbo,t[26]=t[27]=t[28]=t[29]=0}n.seedLeaderZero&&(o.qmkSettings[40]=o.qmkSettings[41]=0,o.qmkSettings[42]=0),e&&Nn(o)}this.firmware=new fe(o,{comboLabels:n.comboLabels??!0,typingPause:n.typingPause??!0,flickerLatch:n.flickerLatch??!0,debounceSwitch:n.debounceSwitch??!0,timingUsOnly:n.timingUsOnly??!0,onChange:t=>{this.persisting&&Nn(t)},factoryKeymap:kn()}),this.schedule=n.schedule??De()}forgetSettings(){this.persisting=!1,Zn()}asHIDDevice(){return this}get opened(){return this.isOpen}get state(){return this.firmware.state}async open(){this.isOpen=!0}async close(){this.isOpen=!1}async forget(){this.isOpen=!1}async sendReport(n,e){if(!this.isOpen)throw new DOMException("The device must be opened first.","InvalidStateError");const o=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength),t=new Uint8Array(this.reportLength);if(t.set(o.subarray(0,this.reportLength)),this.sent.push(t),this.sent.length>2e3&&this.sent.splice(0,this.sent.length-2e3),n!==0)return;let s;try{s=this.firmware.receive(t)}catch(r){console.error("[fake board] The simulated firmware failed on a report:",r),s=null}if(s)if(this.replyDelayMs>0){this.linkClock===void 0&&(this.linkClock=Ue());const r=this.linkClock;r?r(()=>this.deliver(s),this.replyDelayMs):setTimeout(()=>this.deliver(s),this.replyDelayMs)}else this.schedule(()=>this.deliver(s))}async sendFeatureReport(){throw new DOMException("The simulated board has no feature reports.","NotSupportedError")}async receiveFeatureReport(){throw new DOMException("The simulated board has no feature reports.","NotSupportedError")}deliver(n){if(!this.isOpen)return;const e=new ArrayBuffer(this.reportLength);new Uint8Array(e).set(n);const o=new Event("inputreport");Object.defineProperties(o,{device:{value:this},reportId:{value:0},data:{value:new DataView(e)}}),this.oninputreport?.(o),this.dispatchEvent(o)}}function Me(_,n){const e=document.createElement("div");e.setAttribute("role","status"),e.dataset.fakeBoardBadge=_,e.className="fixed bottom-2 right-2 z-[1000] flex items-center gap-2 rounded-full border border-kb-gray-border bg-kb-warn-bg px-3 py-1 text-xs font-medium text-kb-warn-ink shadow-sm";const o=document.createElement("span");o.textContent=_==="old"?`${b}, firmware without combo names`:_==="no-pause"?`${b}, firmware that can't pause typing`:_==="turbo6"?`${b}, updated from turbo 6`:_==="leader0"?`${b}, leader timeout stored as 0`:b;const t=document.createElement("button");t.type="button",t.textContent="Reset",t.title="Put the simulated board back to its starting settings",t.className="cursor-pointer underline underline-offset-2 text-kb-warn-ink",t.addEventListener("click",()=>{window.confirm("Put the simulated board back to its starting settings? Its changes are lost.")&&n()}),e.append(o,t);const s=()=>document.body.appendChild(e);document.body?s():document.addEventListener("DOMContentLoaded",s,{once:!0})}function qe(_){const n=_==="combo-names"||_==="turbo6"||_==="leader0",e=new Be({comboLabels:_!=="old",typingPause:n,flickerLatch:n,debounceSwitch:n,timingUsOnly:n,seedTurbo:_==="turbo6"?6:void 0,seedLeaderZero:_==="leader0",reportLength:n?64:32}),o=()=>{e.forgetSettings(),window.location.reload()};return window.keybardFakeBoard={device:e,wipe:o},Me(_,o),console.info(`[fake board] ${b} (${_==="old"?"firmware without combo names":_==="no-pause"?"firmware that can't pause typing":"combo names on the board"}) in place of WebHID.`),e.asHIDDevice()}export{qe as installFakeBoard};
