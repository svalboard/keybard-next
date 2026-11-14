import{L as Hn,P as mn,a as On,n as en,C as Zn,p as Yn,b as Xn,c as jn,d as Qn,e as Jn,D as Kn,f as $n,g as ne,h as ee,k as hn}from"./index-BIXoR8GG.js";const S=10,A=6,M=16,Nn=256,O=256,l=16,Q=21,te=44,z=10,V=12,Fn=12,Un=6,un=14,oe=8+O*l,dn=106664,_e=dn-oe,cn=51,re=0,se=1,ae=2,Bn=3,Sn="keybard.fakeBoard.v1",ie=[M,O,Nn,O];function W(){const _=new Uint8Array(O*z);for(let e=0;e<O;e++)_[e*z+8]=200,_[e*z+9]=0;return{keymap:new Uint8Array(M*S*A*2),macros:new Uint8Array(dn),tapDance:_,combo:new Uint8Array(O*V),keyOverride:new Uint8Array(O*Fn),altRepeatKey:new Uint8Array(O*Un),leader:new Uint8Array(O*un),labels:ie.map(e=>new Uint8Array(e*l)),qmkSettings:Ce(),magic:128,fragments:new Uint8Array(Q),custom:Ke(),rgb:Uint8Array.from([255,1,0,0,0]),identityName:"",defaultLayer:0,storageFlags:0}}function u(_,n,e){_[n]=e&255,_[n+1]=e>>8&255}function Ce(){const _=new Uint8Array(te);return u(_,0,175),u(_,2,5e3),u(_,4,30),u(_,6,16),u(_,8,1),u(_,10,15),u(_,12,40),u(_,14,10),u(_,16,80),u(_,18,8),u(_,20,40),u(_,22,50),u(_,24,200),_[26]=0,_[27]=0,_[28]=5,_[29]=9,u(_,30,10),u(_,32,80),_[34]=5,u(_,36,200),u(_,38,0),u(_,40,300),_[42]=1,_}function Ke(){const _=new Uint8Array(cn*2),n=(t,o,s=0)=>{_[t*2]=o,_[t*2+1]=s};n(0,3),n(1,1),n(2,3),n(3,0),n(4,1),n(5,3),n(6,15),n(7,0),n(8,1),n(9,0),n(10,7),n(11,1),n(12,1);for(let t=25;t<=29;t++)n(t,1);return[22015,5631,38399,2992,11263,33023,255,255,60159,49151,2992,27391,33023,33023,11263,54783].forEach((t,o)=>n(32+o,t>>8,t&255)),_}function fn(_){let n="";for(let e=0;e<_.length;e+=32768)n+=String.fromCharCode(..._.subarray(e,e+32768));return btoa(n)}function gn(_,n){const e=new Uint8Array(n),t=atob(_);for(let o=0;o<t.length&&o<n;o++)e[o]=t.charCodeAt(o);return e}function yn(_){let n=_.length;for(;n>0&&_[n-1]===0;)n--;return _.subarray(0,n)}const qn=["keymap","macros","tapDance","combo","keyOverride","altRepeatKey","leader","qmkSettings","fragments","custom","rgb"];function Ne(_){const n={v:1,magic:_.magic,identityName:_.identityName,defaultLayer:_.defaultLayer,storageFlags:_.storageFlags};for(const e of qn)n[e]=fn(yn(_[e]));return _.labels.forEach((e,t)=>{n[`labels${t}`]=fn(yn(e))}),JSON.stringify(n)}function ce(_){try{const n=JSON.parse(_);if(n.v!==1)return null;const e=W();for(const t of qn)typeof n[t]=="string"&&(e[t]=gn(n[t],e[t].length));return e.labels=e.labels.map((t,o)=>typeof n[`labels${o}`]=="string"?gn(n[`labels${o}`],t.length):t),e.magic=Number(n.magic)>>>0,e.identityName=String(n.identityName??""),e.defaultLayer=Number(n.defaultLayer)||0,e.storageFlags=Number(n.storageFlags)||0,e}catch{return null}}function pn(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function le(){const _=pn()?.getItem(Sn);return _?ce(_):null}function bn(_){try{pn()?.setItem(Sn,Ne(_))}catch(n){console.warn("[fake board] Could not save the simulated board's settings:",n)}}function ue(){try{pn()?.removeItem(Sn)}catch{}}const Gn=[{name:"quick tap",ms:90,fingers:1,x:1500,y:1700,dx:15,dy:10,gap:900},{name:"tap that rolls 0.6 mm at the lift",ms:120,fingers:1,x:2400,y:2100,dx:50,dy:35,late:40,gap:1100},{name:"slow touch, too long for a tap",ms:280,fingers:1,x:2e3,y:1500,dx:10,dy:15,gap:1e3},{name:"press and hold",ms:1100,fingers:1,x:1800,y:2300,dx:30,dy:20,gap:1100},{name:"hold that drifts 0.65 mm",ms:700,fingers:1,x:2600,y:1600,dx:45,dy:47,by:400,gap:1100},{name:"two-finger tap",ms:110,fingers:2,x:1300,y:2e3,dx:10,dy:0,others:[{ox:1600,oy:-150}],gap:1100},{name:"two-finger scroll",ms:700,fingers:2,x:1300,y:1200,dx:0,dy:900,others:[{ox:1700,oy:-100,delay:40}],gap:1100},{name:"two fingers that move 0.6 mm, too little to scroll",ms:450,fingers:2,x:1400,y:1800,dx:40,dy:45,others:[{ox:1600,oy:120,delay:30}],gap:1e3},{name:"three-finger touch",ms:500,fingers:3,x:800,y:2e3,dx:20,dy:10,others:[{ox:1500,oy:-250,delay:30},{ox:3e3,oy:50,delay:60}],gap:1e3},{name:"resting palm",ms:900,fingers:1,x:2700,y:2700,dx:80,dy:-40,area:14,gap:1100},{name:"pointer move",ms:600,fingers:1,x:1e3,y:2600,dx:1800,dy:-700,gap:1400}],tn=Gn.reduce((_,n)=>_+n.ms+n.gap,0);function on(_){const n=Math.sin(_*12.9898)*43758.5453;return(n-Math.floor(n))*2-1}function de(_){let n=0;for(const[e,t]of Gn.entries()){if(_<n+t.ms){const o=_-n,s=Math.min(1,t.late?Math.max(0,(o-(t.ms-t.late))/(t.late-10)):o/((t.by??t.ms)-10)),r=6*on(e*1e3+Math.floor(o/10)),a=Math.min(1,(o+10)/(t.area?150:60)),i=Math.round((420+380*a)*(1+.05*on(e*7+Math.floor(o/30)))),C=t.area??(t.fingers>1?4:3),K=Math.max(1,Math.round(C*a)),p=Math.round(t.x+t.dx*s+r),h=Math.round(t.y+t.dy*s-r),y=[{slot:0,x:p,y:h,area:K}];for(const[L,f]of(t.others??[]).entries()){if(o<(f.delay??0))continue;const T=5*on(e*1e3+97*(L+1)+Math.floor(o/10)),w=Math.min(1,(o-(f.delay??0)+10)/60);y.push({slot:L+1,x:p+f.ox+Math.round(T),y:h+f.oy-Math.round(T),area:Math.max(1,Math.round((f.area??4)*w))})}return{t:_,x:p,y:h,fingers:y.length,strength:i,area:K,points:y}}if(n+=t.ms+t.gap,_<n)return{t:_,x:t.x+t.dx,y:t.y+t.dy,fingers:0,points:[]}}return{t:_,x:0,y:0,fingers:0,points:[]}}const Se="XQAAAAT//////////wA9iInGVDbDF0/k5i20IEFAa6A1i4aNevXOOFOphT5cHOBLs5Do+nG6zZaqdPbnO+mNn7UIYXy944A8HRv5tFUVIGyb3lx+r69MT1djAEMSfS2iX2smOIwlDBAof+6NyY3seBQV/iouN20AQYhFBVtp7ElXSYjDFB2UVn8C3lO2ynN8H+NM5rHbfpWonnz1s2FXh5dyX98GwYRVJVdrO3auZdeT+b6eYIe8Q/UlNxOmzR8+DbPJXpwtBr9IQ9n6jU9y6cOjaMy56ck/TRLodroMFXhvAktki6gyzDBNU9+slSldP9XY6C+vwdLe9D80qZjyPNRl6Oe3MC1w+Fusu3HhXBuWNTxkiPMHmMLvjJGkyk+Nzx95HXuHPOmoHqXZnKe9m1muckGsuEwHx7DLjo5Rf02aatb9+pIuy9LQCKPEeaWPSjqSttiUL6UmdJU3s+/VZpJocqijZxM1xSCbgOVT8DbOTZGfMSuTmM/zIkSoAjXUanGtmFIS5wRXsxSNnCLQNcddAr4zszFwaADIjQ5u9TDouS7ctxtdsi+LJiaqKdYIpbju+RybqvgwvfCnpWDUNBX+Hkpiyhu3yMKbZ3ByWqiCIf/4QtZymGPbGdjQDmlE0M1EYCDPsj4mdaV+AytZzohNe2XJ9IegwoeS7lNgZ66aNcxxpRytZdVVrAMXVpfxIDxdOdxqclQGg6F2s3ig+xQAgZBhak5pT688unB/V8PoR8IuxNbXsvCnxOZKVpmsEAV6bbgZztcPcQfpOE5wv7qFgPhE3UUpYTC2uJ23pDXkrT/6oS7fgkxbHoxkJ0kb+3lEDO5KdWj0O2nG2A034NQCILzy107yUSSz/uRhHR3ctue+VOprUDrC7RdZG9wqTBb5G1JjB5bc1cxZ7bGW3g2tLsQ7bdo7wpmV/CQxwT/t+V6LBaJ2BA3ZHzf32rrWDg6aTjw0CZeLlMLp/qYMoYaZuifQSeKCcJQSrtosUAKgWAd1dUqtwi6/pay1Al3LJS0vuPhE90XvD/FUSAO1dA8DP4zbwc3IjOevUOCC/e7hR/aGaszQklMnfgn2XtEcWAe5hRVE1erfyi9EDkJIW+8GPiWD+V1fmEvJGMiuTuo8glAbrz0HkZIPXXs6/Bm1gaHyoJr1osO+V8Ocw/L3LGIT4voV1oXQUmhnXkHu0PG/sOIhyX1c31es5vDIndUAtje4tUkgH7E513+A/Sr+WVY7QA6bc8nrY8bz/cawv1zuwSf9DoCvGUaHoMNJnmAPlufCJPxZfky2WeH/xEUcQ7h/bOTRMqxrY+TV7vvGXvAz2rXs6XfxC7wtVnIRaPY1WqwelkGdOBzIeXnmzt9zuKxxoG8ADFWuIVMU+YfmbQVxI/7LI7h0pUXT4pDHkpoaMS7oLfpqUZ8VQTkwDysNrMuMCs5ebhHURNwwV7PMZu8F1TL7Aw/TqdPCxWKaaJBYFheybnvoF0NpGNL91Wu8+yA9ghD/rNOCEwFawN2NVgpAGpTANjlxFz/8OpwjAJCqb3rWOhcovDLY+CCIE5ZdORpilEWIkAETicLWP2fqbyHkPRMYs5SL2hKQTRHOeIzpshGeJjdmaymfokUER7kslmvwitMzcY2yDdRXDafDXTVSYApO+oip37GB33Qv6V9A8mMvqDdfrxbb0b3NhvexvrRK5yH+FHrYbh4j/pXZjzQVHfQbGA2AeMwadLA5VVKTL2/xdVg+/0LBS651IQIPRIShkLV3WWLm2qwWWV5COq231BsyxKDXtlzZV8KhAX61mEVsi9ugycLFf6dtojpfMOXEznExGQx7NTnf5K/m38WtAvXaGcz22biKHGzyP39EKxjJ/kYWtkhFScSzRhETwheSKulE5/coPDUnmiD4f5ccid5NJjQhxxvk6iWJjfBlcWhsjx+0x+ig3Go5Bjc+lxlPLPzu38d6m8FdadJrO7JY3W4U8C4vfi58nQD8HoTmU3oq5BnFjGCRbT0+cZX+5bBp/ZVSb9NOYiG/elRGy4uAo76Z9KbIIs5e++CC+yNpH36ENSKovzSNUSsONVckBbV19EtAFANTnrTM4tI+MQg/iC6awLee04LH7ICZZMKXUepQFGF9zUiYM1gU1DBYE29hyI6onegbYFOr8vbx40VN5asdC1KDvgVU7lMYXb8rYrde3iI2AICu+vLXjPB7vZtBFwCkYLTuq33Ic29un0rCVFwcUF3WIaQ8SsoQog9Cr25g11zoqfYbkSY9PCaEv9H0H5d12MpSZXJJRxaQtOa9RzNEy0ugq2+2gMAGuQkCqn2ZNaAr8Qbj4yw9Z+bLOXzj4/qbaG1X4KVyWXpdRsRbh+Iu4F4eWqqnQUh51SUB38R2mceaQK0YzIjSxAwfCrVeeDghXvX1hNeOCC97hT69FCEZ4AA66tjdvVNpQkmzf0WOxTLoE3VKVLG2y2pJ0jsirkmQbjiZ/Y/tK8o6fClt8/eJeaue8Lx43O+ELB8Vw8BUM011IrUzpx0/03EwVShQ7QVt07Xl6sAOIYwnTsh44RdDmpJr80k/yuaoKXahuUdsGWGlVloD+2t/OLSqFgtUJIcrMYj8/szwB3UrWS/ZG7vTRbQ3VK5iHeo6kixod4bmNHfWzVTM6wOdj0a9Ynvy0vpcG9u2gvqL5NYoczk7RRp+U+R7r008TkK5rmeEX95ZWo0mEahyi20ZeRWYyWwuJnkAi5gIVsJJI8cI9dcT/Sdrjb41TIdGt06yvhJ+/5jraPY97KEG5PpzOehwNVZ/KaSv02dLZgqmg/OE2OCyS6BnpxQpq/nvCcGpo2zFcH2m6IUk7TXhJ+WF5t3+0QEmeXn0P7DnC779SidYqxpLTO5gYdXw4oGw4nVt/HxbfmFBKlCjdrW5fFLciBfW1RGvDobZkocfOjto5OtuTHAfY497WrMoaE44EWcRiJCk51K6r49Ol99oAL/kKuw90rfvKZI9jqVO5jvvg6GhpZ7m+WJ2UQu5dhG2d5b5sq+pcDdFnt1WnTK6ACrIGKwiyvTKfGuvpxkCJrUvjAuSH09TOngaN+VERMTuGjFo3wTNGG4sd/1iuORe+KJboSjCeDjxybHCFyG+Tro9bT8AWBGaBxzhsIquh1QeIYOLDQkAgDU+9IQ09EccXSvwhghinfRJXXUqZHNEZz9FMnLdWVKulQ+4VSwuMS3AbDZdzZj0YEItFLC4JDF+M8R6ddL2RIM8IcbVTdHu84ReKdHqqn4kPYbXbJGtOxGB0eEnCzQfeK0zmE3snEVEc5Fr6uxPFt/ezLR1XbwdAlemb9kK+BR5kMfAFzY9BnVwyHsmJ7ahNT1oTjRJINCQ1BtEcOPIMZQMiJjXTdvmtpLEaMHMosvXlwSxjccIYsra731q9+25aBxsOnlvNZRbDI9ibNqfiJ8iZ/C3ZawhnlBYK2/VEFUi92TlszHRZ3v/FBOBgG+fdosvC4fheNHh7d7gb8QcCEjzbIu+Km0nFcbwCpQenW06iPrNMKB0INh6/QZ6ng0NjKoivQQC9sYGEOZqYlry6as65r+keOv7zgX/vKvc8A==";function pe(_){const n=atob(_),e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}const q=pe(Se);function Te(_){let n=0;const e=[];return Hn.decompressFile({readByte:()=>n<_.length?_[n++]:-1},{writeByte:t=>{e.push(t)}}),new TextDecoder().decode(new Uint8Array(e))}const U=JSON.parse(Te(q)),Tn=U.composition?.instances??[],F=Tn.length,zn=Tn.flatMap((_,n)=>_.hardware_detect?[n]:[]),Re=U.fragments?.pointing_none?.id??255,me=U.fragments?.pointing_touchpad_azoteq?.id??7,Oe={none:Re,pmw3389:U.fragments?.pointing_trackball_pmw3389?.id??6,azoteq:me,trackpoint:U.fragments?.pointing_trackpoint?.id??8},he=Object.fromEntries(zn.map(_=>[_,Tn[_].id.startsWith("right")?"right":"left"])),_n=221,rn=223,kn=254,fe=4294967295,ge=1,ye=3,wn=120,be=6,ke=3,R=255,xn=22,we=[27,24,125,242,33,246,41,72],G=[0,0,9],xe=75,Ee=15,Ae=128,Le=4,Me=8,Ie=16,De=32,ve=64,Pe=128,Fe=1,Ue=2,Be=4,qe=8,Ge=32,ze=64,We={pmw3389:{built:2,detected:2,id0:71,id1:184},azoteq:{built:5,detected:5,id0:0,id1:40},trackpoint:{built:6,detected:6,id0:0,id1:0},none:{built:0,detected:3,id0:0,id1:0}},Z=105,B=[300,20,50,100,150,200,250,350,400,500,600,700,800,1e3,1200,1500],D=6,Y=5,sn=1500,Ve=500,En=13,v=255,He=2,Ze=73,Ye=83,an=24,An=5,k=[90,60,45,30,25,20,15],x=9,Xe=48,I=5,g=49,ln=50,J=[200,300,400,500,800],P=5,je=84,X=64,Qe=[83,86,65,76,66,79,65,82],N=(_,n)=>_[n]|_[n+1]<<8,j=(_,n)=>(_[n]|_[n+1]<<8|_[n+2]<<16|_[n+3]<<24)>>>0,c=(_,n,e)=>{_[n]=e&255,_[n+1]=e>>8&255},E=(_,n,e)=>{_[n]=e&255,_[n+1]=e>>>8&255,_[n+2]=e>>>16&255,_[n+3]=e>>>24&255},Ln={0:{bytes:_=>_.tapDance,size:z,used:_=>!!(N(_,0)||N(_,2)||N(_,4)||N(_,6))},1:{bytes:_=>_.combo,size:V,used:_=>!!(N(_,0)||N(_,8))},2:{bytes:_=>_.keyOverride,size:Fn,used:_=>!!(N(_,0)||N(_,2))},3:{bytes:_=>_.altRepeatKey,size:Un,used:_=>!!(N(_,0)||N(_,2))},4:{bytes:_=>_.leader,size:un,used:_=>!!(N(_,0)||N(_,10))}},Je={1:{table:0,set:!1,minLength:0},2:{table:0,set:!0,minLength:14},3:{table:1,set:!1,minLength:0},4:{table:1,set:!0,minLength:16},5:{table:2,set:!1,minLength:0},6:{table:2,set:!0,minLength:16},7:{table:3,set:!1,minLength:0},8:{table:3,set:!0,minLength:10},20:{table:4,set:!1,minLength:0},21:{table:4,set:!0,minLength:18}},Cn=[{qsid:1,size:1,offset:26,bit:0},{qsid:2,size:2,offset:22,bit:0},{qsid:5,size:1,offset:28,bit:0},{qsid:6,size:2,offset:2,bit:0},{qsid:7,size:2,offset:24,bit:0},{qsid:9,size:2,offset:4,bit:0},{qsid:10,size:2,offset:6,bit:0},{qsid:11,size:2,offset:8,bit:0},{qsid:12,size:2,offset:10,bit:0},{qsid:13,size:2,offset:12,bit:0},{qsid:14,size:2,offset:14,bit:0},{qsid:15,size:2,offset:16,bit:0},{qsid:16,size:2,offset:18,bit:0},{qsid:17,size:2,offset:20,bit:0},{qsid:18,size:2,offset:30,bit:0},{qsid:19,size:2,offset:32,bit:0},{qsid:20,size:1,offset:34,bit:0},{qsid:21,size:0,offset:0,bit:0},{qsid:22,size:1,offset:29,bit:0},{qsid:23,size:1,offset:29,bit:1},{qsid:24,size:1,offset:29,bit:2},{qsid:25,size:2,offset:36,bit:0},{qsid:26,size:1,offset:29,bit:3},{qsid:27,size:2,offset:38,bit:0},{qsid:28,size:2,offset:40,bit:0},{qsid:29,size:1,offset:42,bit:0}],Mn=_=>_>=22&&_<=26&&_!==25||_===29,In=new Set([6,13,14,20,21,22,23,24,g]),$e=_=>_<=15||_>=20&&_<=31||_>=32&&_<48,nt=_=>_<=14||_>=20&&_<=30||_>=32&&_<48,et=new Set([g,ln]),Dn=_=>J.reduce((n,e,t)=>Math.abs(e-_)<Math.abs(J[n]-_)?t:n,0);class tt{constructor(n,e={}){this.state=n,this.comboLabels=e.comboLabels??!0,this.unread=e.unread,this.typingPause=e.typingPause??!0,this.flickerLatch=e.flickerLatch??!0,this.debugConsole=e.debugConsole??!0,this.debounceSwitch=e.debounceSwitch??!0,this.timingUsOnly=e.timingUsOnly??!0,this.padGestures=e.padGestures??!0,this.scrollSpeed=e.scrollSpeed??!0;const t=e.touchpad??!1;this.modules=e.modules??(t?{left:e.leftTrackball?"pmw3389":"azoteq",right:"azoteq"}:{left:"none",right:"none"}),this.touchpad=this.modules.left==="azoteq"||this.modules.right==="azoteq",this.leftTrackball=this.modules.left==="pmw3389",this.touchpad&&this.modules.left!=="azoteq"&&(this.leftMissing=!0),this.hostTouchpad=e.hostTouchpad??!1,this.multiFinger=e.multiFinger??!0,this.onChange=e.onChange,this.timingUsOnly&&this.migrateTiming(),this.factoryKeymap=e.factoryKeymap,this.serial=e.serial??Qe;const o=Date.now();this.now=e.now??(()=>Date.now()-o),this.idCounter=Math.floor(Math.random()*65536)}comboLabels;typingPause;flickerLatch;debugConsole;debugEnable=!1;debugRequests=[];debounceSwitch;timingUsOnly;padGestures;scrollSpeed;leftTrackball;scrollSpeedPct=[100,100];touchpad;modules;hostTouchpad;multiFinger;leftMissing=!1;padMode=0;invalidFrameEvery=0;leftOsDropEvery=0;touchReads=0;fingersReads=0;get padsOs(){return this.hostTouchpad&&this.padMode===0}padPalm=0;padSetting=0;padTuning={deadZone:On[0],tapMs:mn[0],scroll:0};padPlayers=null;touchSpeed=1;customWrites=[];opticalDebounceOn=!0;debounceWrites=[];pressed=new Set;latchPressed=new Uint8Array(S);latchReleased=new Uint8Array(S);changes=new Uint8Array(S*D);latchReads=0;pauseRequests=[];pauseOwner=0;pauseOwnerSeen=0;pauseEndedAt=null;pausePaused=!1;pauseLastEnd=0;currentClient=0;layerState=0;dropKeymapWrites=0;idCounter;now;onChange;factoryKeymap;serial;stagedName=new Uint8Array(X);unread;migrateTiming(){const n=this.state.custom,e=r=>n[r*2]|n[r*2+1]<<8,t=(r,a)=>{n[r*2]=a&255,n[r*2+1]=a>>8&255};let o=!1;const s=n[x*2]<k.length?n[x*2]:0;for(const r of[13,14])e(r)===0&&(t(r,k[s]),o=!0);if(n[x*2]!==0&&(n[x*2]=0,o=!0),e(g)===0){const r=n[I*2];t(g,r<P?J[r]:500),o=!0}o&&this.changed()}timingPreset(){const n=this.state.custom,e=n[26]|n[27]<<8,t=n[28]|n[29]<<8,o=k.indexOf(e);return e===t&&o>=0?o:255}timingValue(n,e,t){const o=this.state.custom,s=(i,C)=>{o[i*2]=C&255,o[i*2+1]=C>>8&255},r=i=>o[i*2]|o[i*2+1]<<8;if(n===8){if(e===x)t[0]=this.timingPreset();else if(e===g)t[0]=o[g*2],t[1]=o[g*2+1];else if(e===ln)t[0]=o[I*2]===P?1:0;else return!1;return!0}if(n!==7)return!1;const a=t[0]|t[1]<<8;if(e===x)t[0]<k.length&&(s(13,k[t[0]]),s(14,k[t[0]]));else if(e===13||e===14)s(e,a||k[0]);else if(e===I){if(t[0]>P)return!0;o[I*2]=t[0],t[0]<P&&s(g,J[t[0]])}else if(e===g){const i=Math.round(Math.min(2e3,Math.max(100,a))/10)*10;s(g,i),o[I*2]!==P&&(o[I*2]=Dn(i))}else if(e===ln)o[I*2]=t[0]?P:Dn(r(g)||500);else return!1;return this.changed(),!0}get macroBufferSize(){return this.comboLabels?_e:dn}get featureFlags3(){return(this.typingPause?Le:0)|(this.flickerLatch?Me:0)|(this.padGestures?Ie:0)|(this.padGestures&&this.touchpad?De|ve|(this.multiFinger?Pe:0):0)}count(n,e){const t=n*D+e;this.changes[t]<255&&this.changes[t]++}press(n,e){const t=`${n},${e}`;this.pressed.has(t)||(this.pressed.add(t),this.latchPressed[n]|=1<<e,this.count(n,e))}release(n,e){const t=`${n},${e}`;this.pressed.has(t)&&(this.pressed.delete(t),this.latchReleased[n]|=1<<e,this.count(n,e))}flicker(n,e){this.press(n,e),this.release(n,e)}rawRow(n){let e=0;for(let t=0;t<8;t++)this.pressed.has(`${n},${t}`)&&(e|=1<<t);return e}flickerCommand(n,e){if(e<4+3*S||e<4+Y*D){e>1&&(n[1]=3);return}const t=n[0],o=n[1];if(n.fill(0,1,e),t===0){this.latchReads++,n[2]=3,n[3]=S;for(let s=0;s<S;s++)n[4+s]=this.rawRow(s),n[4+S+s]=this.latchPressed[s],n[4+2*S+s]=this.latchReleased[s];this.latchPressed.fill(0),this.latchReleased.fill(0)}else if(t===1&&o<=1){n[2]=1,n[3]=o;const s=o*Y*D;n.set(this.changes.subarray(s,s+Y*D),4),this.changes.fill(0,s,s+Y*D)}else n[1]=1}typingPauseState(){const n=this.timer();return this.pausePaused&&n-this.pauseOwnerSeen>=sn&&(this.pausePaused=!1,this.pauseEndedAt=this.pauseOwnerSeen+sn,this.pauseLastEnd=2),this.pausePaused?"paused":this.pauseEndedAt!==null&&n-this.pauseEndedAt<Ve?"ending":(this.pauseEndedAt=null,"off")}typingPauseCommand(n,e){if(e<16){e>1&&(n[1]=3);return}const t=n[0];this.pauseRequests.push({op:t,client:this.currentClient,at:this.timer()}),this.pauseRequests.length>2e3&&this.pauseRequests.splice(0,this.pauseRequests.length-2e3),n.fill(0,1,e);let o=0;const s=this.typingPauseState();t===1?(this.pausePaused=!0,this.pauseEndedAt=null,this.pauseOwner=this.currentClient,this.pauseOwnerSeen=this.timer()):t===0?s==="paused"&&(this.pausePaused=!1,this.pauseEndedAt=this.timer(),this.pauseLastEnd=1):t!==2&&(o=1);const r=this.typingPauseState();n[1]=o,n[2]=r==="paused"?1:r==="ending"?2:0,n[3]=this.pauseLastEnd,n[4]=r!=="off"&&this.pauseOwner===this.currentClient?1:0,c(n,5,r==="paused"?Math.max(0,sn-(this.timer()-this.pauseOwnerSeen)):0)}get featureFlags2(){return Ee|(this.comboLabels?Ae:0)}changed(){this.onChange?.(this.state)}receive(n){const e=n.length,t=new Uint8Array(n);return t[0]===_n?this.clientWrapperReceive(t,e):t[0]===rn?null:(this.viaReceive(t,e,!1),t)}timer(){return Math.floor(this.now())>>>0}allocateId(){const n=(this.timer()&4294901760|this.idCounter&65535)>>>0;return this.idCounter=this.idCounter+1&65535,n}validId(n){if(n===0||n===fe)return!1;const e=(n&4294901760)>>>0;return((this.timer()&4294901760)>>>0)-e>>>0<wn*1e3}sendError(n,e,t){return t.fill(0),t[0]=_n,E(t,1,n),t[5]=255,t[6]=e,t}clientWrapperReceive(n,e){const t=j(n,1);if(t===0)return e<31?null:(E(n,25,this.allocateId()),c(n,29,wn),n);if(!this.validId(t))return this.sendError(t,ge,n);this.currentClient=t,this.typingPauseState()==="paused"&&t===this.pauseOwner&&(this.pauseOwnerSeen=this.timer());const o=n[5];return o===rn&&this.unread?.qmkSettings&&(n[6]===16||n[6]===17)||o===kn&&n[6]===8&&n[7]===0&&this.unread?.customIds?.includes(n[8])?null:o===rn?(this.svalCommand(n.subarray(5),e-5),n):o===kn?(n.copyWithin(0,6),this.viaReceive(n,e,!0),n.copyWithin(6,0,e-6),n[0]=_n,E(n,1,t),n[5]=o,n):this.sendError(t,ye,n)}viaBufferSize(n,e,t){const o=t&&e>6?e-6:e,s=o>4?o-4:0;return n>s?s:n}viaReceive(n,e,t){const o=n.subarray(1),s=this.state;switch(n[0]){case 1:o[0]=En>>8,o[1]=En&255;break;case 2:switch(o[0]){case 1:{const r=this.timer();o[1]=r>>>24&255,o[2]=r>>>16&255,o[3]=r>>>8&255,o[4]=r&255;break}case 2:case 4:o[1]=o[2]=o[3]=o[4]=0;break;case 3:{const r=o[1];let a=2;for(let i=0;i<28&&i+r<S;i++){let C=0;for(let K=0;K<8;K++)this.pressed.has(`${i+r},${K}`)&&(C|=1<<K);o[a++]=C}break}case 6:o[1]=0,o[2]=0,o[3]=0,o[4]=G[2];break;default:n[0]=v}break;case 3:o[0]!==2&&o[0]!==5&&(n[0]=v);break;case 4:{const r=this.keycodeAt(o[0],o[1],o[2]);o[3]=r>>8,o[4]=r&255;break}case 5:{const[r,a,i]=[o[0],o[1],o[2]];if(this.dropKeymapWrites>0){this.dropKeymapWrites--;break}if(r<M&&a<S&&i<A){const C=((r*S+a)*A+i)*2;s.keymap[C]=o[3],s.keymap[C+1]=o[4],this.changed()}break}case 6:if(!this.factoryKeymap){n[0]=v;break}s.keymap.set(this.factoryKeymap),this.changed();break;case 7:case 8:case 9:this.customValueCommand(n,e,t);break;case 12:o[0]=Nn&255,o[1]=Nn>>8;break;case 13:{const r=Math.min(this.macroBufferSize,65535);o[0]=r>>8,o[1]=r&255;break}case 14:case 15:{const r=o[0]<<8|o[1],a=this.viaBufferSize(o[2],e,t);n[0]===14?this.macroRead(r,a,o.subarray(3)):(this.macroWrite(r,o.subarray(3,3+a)),this.changed());break}case 16:s.macros.fill(0),this.changed();break;case 17:o[0]=M;break;case 18:case 19:{const r=o[0]<<8|o[1],a=this.viaBufferSize(o[2],e,t),i=o.subarray(3);if(n[0]===19&&this.dropKeymapWrites>0){this.dropKeymapWrites--;break}for(let C=0;C<a;C++){const K=r+C;n[0]===18?i[C]=K<s.keymap.length?s.keymap[K]:0:K<s.keymap.length&&(s.keymap[K]=i[C])}n[0]===19&&this.changed();break}default:n[0]=v}}keycodeAt(n,e,t){if(n>=M||e>=S||t>=A)return 0;const o=((n*S+e)*A+t)*2;return this.state.keymap[o]<<8|this.state.keymap[o+1]}macroRead(n,e,t){const o=this.macroBufferSize;for(let s=0;s<e;s++)t[s]=n<o&&s<o-n?this.state.macros[n+s]:0}macroWrite(n,e){const t=this.macroBufferSize;for(let o=0;o<e.length;o++)n<t&&o<t-n&&(this.state.macros[n+o]=e[o])}customValueCommand(n,e,t){const[o,s,r]=[n[0],n[1],n[2]],a=n.subarray(3);if(s===He){this.rgblightCommand(n);return}if(s===je){n[0]=v;return}if(s===Ye){this.scanlabCommand(n,e);return}if(s===Ze){this.identityCommand(n,e,t);return}const i=this.state.custom;if(r===Xe&&this.debounceSwitch){o===7?(this.opticalDebounceOn=a[0]!==0,this.debounceWrites.push({value:a[0],saved:!1})):o===8&&(a[0]=this.opticalDebounceOn?1:0);return}if(this.scrollSpeed&&(r===61||r===62)){const C=r===61?0:1;o===7?(this.customWrites.push({id:r,value:Array.from(a.subarray(0,2))}),this.scrollSpeedPct[C]=Math.max(20,Math.min(1e3,a[0]|a[1]<<8)),this.changed()):o===8&&(a[0]=this.scrollSpeedPct[C]&255,a[1]=this.scrollSpeedPct[C]>>8);return}if(this.padGestures&&this.touchpad&&this.multiFinger&&r===59){o===7?(this.customWrites.push({id:r,value:Array.from(a.subarray(0,2))}),this.padMode=a[0]===1?1:0):o===8&&(a[0]=this.padMode);return}if(this.padGestures&&this.touchpad&&this.multiFinger&&r===58){o===7?(this.customWrites.push({id:r,value:Array.from(a.subarray(0,2))}),this.padPalm=Math.min(56,a[0]|a[1]<<8)):o===8&&(a[0]=this.padPalm,a[1]=0);return}if(this.padGestures&&this.touchpad&&r>=55&&r<=57){this.padTuningValue(o,r,a);return}if(this.padGestures&&r>=51&&r<=54){this.padValue(o,r,a);return}if(o===9&&this.debounceWrites.length&&(this.debounceWrites[this.debounceWrites.length-1].saved=!0),o===7&&this.customWrites.push({id:r,value:Array.from(a.subarray(0,2))}),!(this.timingUsOnly&&this.timingValue(o,r,a))&&!(!this.timingUsOnly&&et.has(r))){if(o===7){if(r>=cn||!nt(r))return;let C=a[0];if((r===0||r===2)&&C>=11||r===5&&C>=6||r===9&&C>=7)return;r===30&&C>2&&(C=2),r>=25&&r<=29&&(C=C?1:0),i[r*2]=C,(In.has(r)||r>=32)&&(i[r*2+1]=a[1]),this.changed()}else if(o===8){if(r>=cn||!$e(r))return;a[0]=i[r*2],(In.has(r)||r===31||r>=32)&&(a[1]=i[r*2+1])}}}padTuningValue(n,e,t){const o=this.padTuning;if(n===7){this.customWrites.push({id:e,value:Array.from(t.subarray(0,2))});const s=t[0]|t[1]<<8;e===55?o.deadZone=en(On,s):e===56?o.tapMs=en(mn,s):o.scroll=s===0||s===Z?0:en(jn.slice(1),s)}else if(n===8){const s=e===55?o.deadZone:e===56?o.tapMs:o.scroll||Z;t[0]=s&255,t[1]=s>>8}}chipSettings(){const n=this.padSetting;return{deadZone:this.padTuning.deadZone,tapMs:this.padTuning.tapMs,holdMs:B[n>>3&15],tapOn:(n&1)===0,twoFingerOn:(n&2)===0,holdOn:(n&4)===0,scrollStart:this.padTuning.scroll||Z}}padModels(n){return this.padPlayers||(this.padPlayers=[0,tn/2].map(e=>({model:new Zn(()=>this.chipSettings()),fedTo:n,offset:e}))),this.padPlayers.map(e=>{for(let t=Math.max(e.fedTo,n-tn);t<=n;t+=10){const o=(t+e.offset)%tn;e.model.sample({...de(o),t})}return e.fedTo=Math.max(e.fedTo,n+10),e.model})}fingersPage(n){const e=this.now()*this.touchSpeed,[t,o]=this.padModels(e).map((s,r)=>({...s.readFingers(e),os:this.padsOs,...this.leftMissing&&r===0?{valid:!1}:{}}));n.set(Yn({palm:this.padPalm,left:t,right:o}))}touchPage(n){const e=this.now()*this.touchSpeed;this.touchReads++;const t=this.invalidFrameEvery>0&&this.touchReads%this.invalidFrameEvery===0,o=this.leftOsDropEvery>0&&this.touchReads%this.leftOsDropEvery===1,s=this.padModels(e).map((a,i)=>({...a.read(e),os:this.padsOs&&!(i===0&&o),...t||this.leftMissing&&i===0?{valid:!1}:{}})),r=this.chipSettings();n.set(Xn({tapOn:r.tapOn,twoFingerOn:r.twoFingerOn,holdOn:r.holdOn,elapsedMs:0,deadZone:r.deadZone,tapMs:r.tapMs,holdMs:r.holdMs,width:Qn,height:Jn,channelsX:8,channelsY:7,scrollStart:this.padTuning.scroll||Z,left:s[0],right:s[1]}))}padValue(n,e,t){const o=e===51?1:e===52?2:4;if(n===7)if(this.customWrites.push({id:e,value:Array.from(t.subarray(0,2))}),e===54){const s=t[0]|t[1]<<8,r=B.reduce((a,i,C)=>{const K=Math.abs(i-s),p=Math.abs(B[a]-s);return K<p||K===p&&i<B[a]?C:a},0);this.padSetting=this.padSetting&-121|r<<3}else this.padSetting=t[0]?this.padSetting&~o:this.padSetting|o;else if(n===8)if(e===54){const s=B[this.padSetting>>3&15];t[0]=s&255,t[1]=s>>8}else t[0]=this.padSetting&o?0:1}scanlabCommand(n,e){const[t,,o]=[n[0],n[1],n[2]],s=n.subarray(3);if(t!==7&&t!==8)return;const r=t===8?o&-9:o,a=t===8?o>>3&1:s[0]&1,i=new Uint8Array(an),C=this.state.custom,K=T=>C[T*2]|C[T*2+1]<<8,p=C[x*2]<k.length?C[x*2]:0,h=K(13)||k[p],y=K(14)||k[p],L=[25,26,27,28,29].reduce((T,w,b)=>T|(C[w*2]?1:0)<<b,0);r===16?(i[0]=1,c(i,8,h),c(i,10,y),i[12]=a===0?1:0,i[13]=4,c(i,17,K(13)),c(i,19,K(14)),i[21]=this.timingUsOnly?this.timingPreset():C[x*2],i[22]=a===1?1:0,this.debounceSwitch&&(i[23]=1|(this.opticalDebounceOn?2:0))):r===17?(c(i,0,K(20)),c(i,2,K(21)),c(i,4,K(22)),c(i,6,1e3),c(i,8,An*(h+13)),c(i,11,K(20)),c(i,13,h),c(i,15,y),i[17]=An,c(i,18,K(23)),c(i,20,K(24)),i[22]=(L&31)<<2):r===18&&(i[0]=L,i[5]=this.state.rgb[0],i[4]=this.state.rgb[0],i[7]=1,i[21]=125,i[22]=[48,24,12][Math.min(2,C[60])]);const f=Math.min(Math.max(0,e-3),this.debounceSwitch?an:an-1);s.set(i.subarray(0,f))}rgblightCommand(n){const[e,,t]=[n[0],n[1],n[2]],o=n.subarray(3),s=this.state.rgb;if(e===9)return;const a={1:[0],2:[1],3:[2],4:[3,4]}[t];if(!a){n[0]=v;return}e===7?(a.forEach((i,C)=>{s[i]=o[C]}),this.changed()):a.forEach((i,C)=>{o[C]=s[i]})}identityCommand(n,e,t){const[o,,s]=[n[0],n[1],n[2]],r=n.subarray(3);if(e<16)return;const a=e-5-(t?be:0),i=new TextEncoder().encode(this.state.identityName);if(o===8&&s===0)r[0]=1,r[1]=1,r[2]=i.length,r[3]=X,r[4]=2,r.set(this.serial,5);else if(o===8&&s===1){const C=r[0],K=C<i.length?Math.min(a,i.length-C):0;r[0]=0,r[1]=K,r.set(i.subarray(C,C+K),2)}else if(o===7&&s===1){const[C,K]=[r[0],r[1]];if(K>a||C+K>X){r[0]=1;return}this.stagedName.set(r.subarray(2,2+K),C),r[0]=0}else if(o===7&&s===2){const C=r[0];if(C>X){r[0]=1;return}this.state.identityName=new TextDecoder().decode(this.stagedName.subarray(0,C)),this.changed(),r[0]=0}else o===7&&s===3?r[0]=0:r[0]=1}svalCommand(n,e){const t=n[1],o=this.state,s=Je[t];if(s){this.tableCommand(n,e,s.table,s.set,s.minLength);return}switch(t){case 0:{E(n,2,ke),n.set(we,6),n[14]=xe,n[15]=G[0],n[16]=G[1],n[17]=G[2],n[18]=o.storageFlags&5,n[19]=this.featureFlags2,e>20&&(n[20]=this.featureFlags3),e>21&&(n[21]=(this.padGestures&&this.touchpad&&this.multiFinger?Fe|Ue:0)|(this.debugConsole?Be:0)|qe|(this.scrollSpeed?Ge:0)|(this.modules.left==="trackpoint"||this.modules.right==="trackpoint"?ze:0));break}case 42:o.storageFlags&&(o.storageFlags=0,this.changed());break;case 9:{n[2]=o.qmkSettings[2],n[3]=o.qmkSettings[3],n[4]=o.qmkSettings[28];break}case 10:o.qmkSettings[2]=n[2],o.qmkSettings[3]=n[3],o.qmkSettings[28]=n[4],this.changed();break;case 11:break;case 12:this.reset();break;case 13:E(n,2,q.length);break;case 14:{const r=N(n,2);let a=n[4];if((a===0||a>xn)&&(a=xn),r>=q.length){n[4]=0;break}const i=Math.min(a,q.length-r);n.set(q.subarray(r,r+i),5),n[4]=i;break}case 16:{const r=N(n,2),a=n.subarray(2,e);a.fill(255);let i=0;for(const C of Cn)if(C.qsid>r){if(i+4>a.length)break;c(a,i,C.qsid),i+=2}break}case 17:n[2]=this.qmkSettingsGet(N(n,2),n.subarray(3,e));break;case 18:n[2]=this.qmkSettingsSet(N(n,2),n.subarray(4,e));break;case 19:{const r=W();o.qmkSettings=r.qmkSettings,o.magic=r.magic,this.changed();break}case 22:{if(e<10){n[1]=R;break}E(n,2,this.layerState),E(n,6,1<<o.defaultLayer>>>0),e>=12&&(n[10]=0,n[11]=0);break}case 23:this.layerState=j(n,2);break;case 43:{if(e<3){n[1]=R;break}const r=n[2];if(r>=M){n[2]=1;break}o.defaultLayer=r,this.changed(),n[2]=0;break}case 44:if(e>2){const r=n.subarray(2,e);if(r.fill(0),r.length>=11){r[0]=1;const a=this.padsOs?16:0,i=(C,K)=>{const p=We[C];return[9|(K?2:0)|(C==="none"?0:4)|(C==="azoteq"?a:0),p.built,p.detected,p.id0,p.id1]};r.set(i(this.modules.right,!1),1),r.set(i(this.modules.left,!0),6)}}break;case 45:{const r=e>3?n[3]:0;e>2&&n.subarray(2,e).fill(0),r===1&&this.padGestures&&this.touchpad&&e>=58&&this.touchPage(n.subarray(2,e)),r===2&&this.padGestures&&this.touchpad&&this.multiFinger&&e>=58&&(this.fingersReads++,this.fingersPage(n.subarray(2,e)));break}case 57:{const r=n[2],a=n[3]&1,i=N(n,4);if(e>2&&n.subarray(2,e).fill(0),r!==0||e<27)break;if((a?this.modules.right:this.modules.left)!=="pmw3389"){n[2]=1,n[3]=a?16:0;break}const K=Math.floor(this.now()/50)&65535,p=K-i&65535,h=p>256||p===0&&i!==K,y=h?K-256&65535:i,L=K-y&65535,f=Math.min(2,L);n[2]=1,n[3]=3|(h?4:0)|(L>f?8:0)|(a?16:0),c(n,4,y),n[6]=f,c(n,7,K);for(let T=0;T<f;T++){const w=y+T&65535,b=9+T*9,H=Math.sin(w/9+a*2),Rn=w%80<14,nn=Math.round((a?62:31)+6*H+(Rn?14:0));n[b]=nn,n[b+1]=Math.max(0,nn-5-w%3),n[b+2]=Math.min(255,nn+6+w%4),n[b+3]=Math.round((a?78:40)+8*H),n[b+4]=Math.round((a?190:140)+10*H),n[b+5]=a?12:6,c(n,b+6,Math.round((a?3200:4500)+300*H)),n[b+8]=Rn?40+w%20:0}break}case 47:e>2&&n.subarray(2,e).fill(0);break;case 24:{n[2]=F;for(let r=0;r<Q;r++)n[3+r]=zn.includes(r)?Oe[this.modules[he[r]]]:255;break}case 25:n[2]=F;for(let r=0;r<Q;r++)n[3+r]=r<F?o.fragments[r]:255;break;case 26:{if(e<24){n[2]=1;break}let r=n[2];if(r>Q){n[2]=2;break}r>F&&(r=F);for(let a=0;a<r;a++)o.fragments[a]=n[3+a];this.changed(),n[2]=0;break}case 33:this.tableScan(n);break;case 30:E(n,2,this.macroBufferSize);break;case 31:case 32:{if(e<7){n[1]=R;break}const r=j(n,2),a=n[6],i=this.macroBufferSize;if(a>e-7||r>i||a>i-r){t===31?n[6]=0:n[2]=1;break}t===31?this.macroRead(r,a,n.subarray(7)):(this.macroWrite(r,n.subarray(7,7+a)),this.changed(),n[2]=0);break}case 27:this.labelGet(n,e);break;case 28:this.labelSet(n,e);break;case 29:this.labelClear(n,e);break;case 61:if(!this.flickerLatch){n[1]=R;break}e>3&&this.flickerCommand(n.subarray(2),e-2);break;case 62:if(!this.debugConsole){n[1]=R;break}if(e>4){const r=n[2];this.debugRequests.push(r),(r===0||r===1)&&(this.debugEnable=r===1),n[3]=r<=2?0:1,n[4]=this.debugEnable?1:0}break;case 60:if(!this.typingPause){n[1]=R;break}e>3&&this.typingPauseCommand(n.subarray(2),e-2);break;default:n[1]=R}}tableCommand(n,e,t,o,s){const r=Ln[t],a=r.bytes(this.state),i=N(n,2);if(!o){const C=n.subarray(4,4+r.size);C.fill(0),i<O&&C.set(a.subarray(i*r.size,(i+1)*r.size));return}if(e<s){n[1]=R;return}if(i>=O){n[2]=1;return}a.set(n.subarray(4,4+r.size),i*r.size),this.changed(),n[2]=0}tableScan(n){const e=n[2],t=Ln[e];let o=N(n,3),s=!1;const r=new Uint8Array(un);for(;r.fill(0),!(!t||o>=O);o++)if(r.set(t.bytes(this.state).subarray(o*t.size,(o+1)*t.size)),t.used(r)){s=!0;break}n[3]=s?1:0,n[4]=o&255,n[5]=o>>8&255,s&&n.set(r,6)}labelArray(n){return n===Bn&&!this.comboLabels?null:this.state.labels[n]??null}labelGet(n,e){if(e<6+l){n[1]=R;return}const t=this.labelArray(n[2]);if(!t){n[1]=R;return}const o=t.length/l;let s=N(n,3);const r=a=>t.subarray(a*l,(a+1)*l).every(i=>i===0);for(;s<o&&r(s);)s++;n[3]=s<o?1:0,n[4]=s&255,n[5]=s>>8&255,n.subarray(6,6+l).fill(0),s<o&&n.set(t.subarray(s*l,(s+1)*l),6)}labelStatus(n,e){const t=this.labelArray(n);return t?e>=t.length/l?2:0:1}labelSet(n,e){if(e<5+l){n[1]=R;return}const t=n[2],o=N(n,3),s=n.slice(5,5+l);if(!ot(s)){n[2]=3;return}const r=this.labelStatus(t,o);r===0&&(this.labelArray(t).set(s,o*l),this.changed()),n[2]=r}labelClear(n,e){if(e<5){n[1]=R;return}const t=n[2],o=N(n,3),s=this.labelStatus(t,o);s===0&&(this.labelArray(t).fill(0,o*l,(o+1)*l),this.changed()),n[2]=s}qmkSettingsGet(n,e){const t=this.state;if(n===21)return e.length<4?255:(E(e,0,t.magic),0);const o=Cn.find(s=>s.qsid===n);return o?Mn(n)?(e[0]=t.qmkSettings[o.offset]>>o.bit&1,0):o.size>e.length?255:(e.set(t.qmkSettings.subarray(o.offset,o.offset+o.size)),0):255}qmkSettingsSet(n,e){const t=this.state;if(n===21)return e.length<4?255:(t.magic=j(e,0)&1023,this.changed(),0);const o=Cn.find(s=>s.qsid===n);return o?Mn(n)?(e[0]?t.qmkSettings[o.offset]|=1<<o.bit:t.qmkSettings[o.offset]&=~(1<<o.bit),this.changed(),0):o.size>e.length?255:(t.qmkSettings.set(e.subarray(0,o.size),o.offset),this.changed(),0):255}firstBootReset(n=4){const e=W();this.factoryKeymap&&e.keymap.set(this.factoryKeymap),e.storageFlags=n,Object.assign(this.state,e),this.changed()}reset(){const n=W(),e=this.state;e.tapDance=n.tapDance,e.combo=n.combo,e.keyOverride=n.keyOverride,e.altRepeatKey=n.altRepeatKey,e.leader=n.leader,e.labels=n.labels,e.fragments=n.fragments,e.macros.fill(0),this.factoryKeymap&&e.keymap.set(this.factoryKeymap),this.changed()}}function ot(_){let n=!1,e=0;for(;e<l;){const t=_[e];if(t===0){n=!0,e++;continue}if(n||t>=1&&t<=31&&t!==9||t===127)return!1;if(t<=127){e++;continue}let o;if(t>=194&&t<=223)o=1;else if(t>=224&&t<=239)o=2;else if(t>=240&&t<=244)o=3;else return!1;if(e+o>=l)return!1;for(let s=1;s<=o;s++){const r=_[e+s];if(r<128||r>191)return!1}if(t===224&&_[e+1]<160||t===237&&_[e+1]>159||t===240&&_[e+1]<144||t===244&&_[e+1]>143)return!1;e+=1+o}return!0}const _t=`{
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
`,rt={[re]:{0:"Base",1:"Numbers"},[se]:{0:"A or Ctrl"},[ae]:{1:"Greeting"},[Bn]:$n},Wn=32768,st=32768,at=128;function m(_,n,e){_[n]=e&255,_[n+1]=e>>8&255}function it(_,n,e){const t=new TextEncoder().encode(e).subarray(0,l);_.set(t,n*l)}function $(){const _=G.join(".");return ne()!==_&&ee(_),hn.registerKnownCustomKeycodes(U.customKeycodes??[]),n=>{const e=hn.parse(n);return Number.isFinite(e)&&e>=0&&e<=65535?e:0}}function Vn(_=$()){const n=JSON.parse(_t).layout??[],e=new Uint8Array(M*S*A*2);for(let t=0;t<M;t++)for(let o=0;o<S;o++)for(let s=0;s<A;s++){const r=n[t]?.[o]?.[s],a=r?_(r):0,i=((t*S+o)*A+s)*2;e[i]=a>>8,e[i+1]=a&255}return e}const Ct={KC_Z:"LCTL(KC_1)",KC_X:"LCTL_T(KC_2)",KC_C:"LT1(KC_3)",KC_V:"LSFT(KC_4)",KC_B:"LALT(KC_SLASH)",KC_M:"LGUI(KC_1)",KC_N:"RALT(KC_7)",KC_G:"KC_2",KC_H:"KC_8"},Kt=[{keys:["KC_COMMA","KC_DOT"],output:"KC_ENTER"},{keys:["LCTL(KC_1)","LCTL_T(KC_2)"],output:"KC_TAB"},{keys:["LT1(KC_3)","LALT(KC_SLASH)","KC_SLASH"],output:"KC_ESCAPE"},{keys:["KC_SLASH","KC_QUOTE"],output:"KC_BSPACE"},{keys:["KC_8","KC_I"],output:"KC_DELETE"}];function Nt(_){const n=$(),e=new Map(Object.entries(Ct).map(([t,o])=>[n(t),n(o)]));for(let t=0;t<S*A*2;t+=2){const o=_.keymap[t]<<8|_.keymap[t+1],s=e.get(o);s!==void 0&&(_.keymap[t]=s>>8,_.keymap[t+1]=s&255)}Kt.forEach((t,o)=>{const s=(Kn.combo.length+o)*V;_.combo.fill(0,s,s+V),t.keys.forEach((r,a)=>m(_.combo,s+a*2,n(r))),m(_.combo,s+8,n(t.output)),m(_.combo,s+10,Wn)})}function ct(_){const n=$();m(_.altRepeatKey,0,n("KC_A")),m(_.altRepeatKey,2,n("KC_S")),_.altRepeatKey[4]=0,_.altRepeatKey[5]=0}function vn(_,n){const e=[];for(const[t,...o]of _)if(t==="text"&&e.push(...new TextEncoder().encode(String(o[0]))),t==="tap")for(const s of o){const r=n(String(s));r>0&&r<256?e.push(1,1,r):r>=256&&e.push(1,5,r&255,r>>8)}return e}function lt(){const _=$(),n=W();n.keymap=Vn(_),Kn.combo.forEach((o,s)=>{const r=s*V;o.keys.forEach((a,i)=>m(n.combo,r+i*2,_(a))),m(n.combo,r+8,_(o.output)),m(n.combo,r+10,(o.on?Wn:0)|o.combo_term&32767)}),Kn.tap_dance.forEach((o,s)=>{const r=s*z;[o.on_tap,o.on_hold,o.on_double_tap,o.on_tap_hold].forEach((a,i)=>m(n.tapDance,r+i*2,_(a))),m(n.tapDance,r+8,(o.on?st:0)|o.tapping_term&32767)});const e=[vn([["tap","KC_A"]],_),vn([["text","hello world"]],_)];let t=0;for(const o of e)n.macros.set(o,t),t+=o.length+1;m(n.keyOverride,0,_("KC_BSPACE")),m(n.keyOverride,2,_("KC_DELETE")),n.keyOverride.set([255,255,0,0,34,0,34,at|7],4);for(const[o,s]of Object.entries(rt))for(const[r,a]of Object.entries(s))it(n.labels[Number(o)],Number(r),a);return n.fragments.fill(0,0,F),n}const d="Simulated Svalboard",ut=12346,dt=16452,St=32;function pt(_){const n={reportId:0,items:[{reportSize:8,reportCount:_,usagePage:65376}]};return{usagePage:65376,usage:97,type:1,children:[],inputReports:[n],outputReports:[n],featureReports:[]}}function Tt(){if(typeof MessageChannel<"u"&&typeof window<"u"&&!/jsdom/i.test(navigator.userAgent)){const _=new MessageChannel,n=[];return _.port1.onmessage=()=>n.shift()?.(),e=>{n.push(e),_.port2.postMessage(0)}}return _=>setTimeout(_,0)}function Rt(){if(typeof Worker>"u"||typeof Blob>"u"||typeof URL?.createObjectURL!="function")return null;try{const _="onmessage = (e) => { const [id, due] = e.data; while (performance.timeOrigin + performance.now() < due) {} postMessage(id); };",n=new Worker(URL.createObjectURL(new Blob([_],{type:"text/javascript"}))),e=new Map;let t=0,o=!1;return n.onerror=()=>{o=!0;for(const s of e.values())setTimeout(s,0);e.clear()},n.onmessage=s=>{const r=e.get(s.data);e.delete(s.data),r?.()},(s,r)=>{if(o){setTimeout(s,r);return}const a=t++;e.set(a,s),n.postMessage([a,performance.timeOrigin+performance.now()+r])}}catch{return null}}class Pn extends EventTarget{oninputreport=null;vendorId=ut;productId=dt;productName=d;reportLength;collections;firmware;sent=[];replyDelayMs=0;isOpen=!1;persisting;schedule;linkClock;constructor(n={}){super(),this.reportLength=n.reportLength??St,this.collections=[pt(this.reportLength)];const e=n.persist??(!n.state&&n.seedTurbo===void 0&&!n.seedLeaderZero&&!n.seedUnread&&!n.seedLegends&&!n.seedAltRepeat);this.persisting=e;let t=n.state??(e?le():null);if(!t){if(t=lt(),n.seedTurbo!==void 0){const o=t.custom;o[18]=n.seedTurbo,o[26]=o[27]=o[28]=o[29]=0}n.seedLeaderZero&&(t.qmkSettings[40]=t.qmkSettings[41]=0,t.qmkSettings[42]=0),n.seedLegends&&Nt(t),n.seedAltRepeat&&ct(t),n.seedUnread&&(t.tapDance[18]=0,t.tapDance[19]=0,t.tapDance[10]=5,t.tapDance[11]=0),e&&bn(t)}this.firmware=new tt(t,{comboLabels:n.comboLabels??!0,typingPause:n.typingPause??!0,flickerLatch:n.flickerLatch??!0,debugConsole:n.debugConsole??!0,debounceSwitch:n.debounceSwitch??!0,timingUsOnly:n.timingUsOnly??!0,padGestures:n.padGestures??!0,scrollSpeed:n.scrollSpeed??!0,leftTrackball:n.leftTrackball??!1,touchpad:n.touchpad??!1,modules:n.modules,hostTouchpad:n.hostTouchpad??!1,multiFinger:n.multiFinger??!0,onChange:o=>{this.persisting&&bn(o)},factoryKeymap:Vn(),serial:n.serial,unread:n.seedUnread?{qmkSettings:!0,customIds:[0,7]}:void 0}),this.schedule=n.schedule??Tt()}forgetSettings(){this.persisting=!1,ue()}present=!0;async simulateFirmwareUpdate(n={}){const e=typeof navigator<"u"?navigator.hid:void 0,t=o=>{const s=new Event(o);Object.defineProperty(s,"device",{value:this}),e?.dispatchEvent(s)};this.present=!1,this.isOpen=!1,t("disconnect"),await new Promise(o=>setTimeout(o,n.goneMs??1500)),this.firmware.firstBootReset(n.flags??4),this.present=!0,t("connect")}asHIDDevice(){return this}get opened(){return this.isOpen}get state(){return this.firmware.state}async open(){this.isOpen=!0}async close(){this.isOpen=!1}async forget(){this.isOpen=!1}async sendReport(n,e){if(!this.isOpen)throw new DOMException("The device must be opened first.","InvalidStateError");const t=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength),o=new Uint8Array(this.reportLength);if(o.set(t.subarray(0,this.reportLength)),this.sent.push(o),this.sent.length>2e3&&this.sent.splice(0,this.sent.length-2e3),n!==0)return;let s;try{s=this.firmware.receive(o)}catch(r){console.error("[fake board] The simulated firmware failed on a report:",r),s=null}if(s)if(this.replyDelayMs>0){this.linkClock===void 0&&(this.linkClock=Rt());const r=this.linkClock;r?r(()=>this.deliver(s),this.replyDelayMs):setTimeout(()=>this.deliver(s),this.replyDelayMs)}else this.schedule(()=>this.deliver(s))}async sendFeatureReport(){throw new DOMException("The simulated board has no feature reports.","NotSupportedError")}async receiveFeatureReport(){throw new DOMException("The simulated board has no feature reports.","NotSupportedError")}deliver(n){if(!this.isOpen)return;const e=new ArrayBuffer(this.reportLength);new Uint8Array(e).set(n);const t=new Event("inputreport");Object.defineProperties(t,{device:{value:this},reportId:{value:0},data:{value:new DataView(e)}}),this.oninputreport?.(t),this.dispatchEvent(t)}}function mt(_,n){const e=document.createElement("div");e.setAttribute("role","status"),e.dataset.fakeBoardBadge=_,e.className="fixed bottom-2 right-2 z-[1000] flex items-center gap-2 rounded-full border border-kb-gray-border bg-kb-warn-bg px-3 py-1 text-xs font-medium text-kb-warn-ink shadow-sm";const t=document.createElement("span");t.textContent=_==="old"?`${d}, firmware without combo names`:_==="no-pause"?`${d}, firmware that can't pause typing`:_==="turbo6"?`${d}, updated from turbo 6`:_==="leader0"?`${d}, leader timeout stored as 0`:_==="touchpad"?`${d}, touchpads`:_==="touchpad-gestures"?`${d}, touchpads on built-in gestures`:_==="pointing"?`${d}, left trackball and right touchpad`:_==="pointing-os"?`${d}, left trackball and right touchpad, driven by the computer`:_==="two-balls"?`${d}, a trackball on each half`:_==="ball-trackpoint"?`${d}, left trackball and right TrackPoint`:_==="no-module"?`${d}, no pointing module`:_==="touchpad-434"?`${d}, touchpads, v4.3.4 firmware`:_==="altrepeat"?`${d}, one Alt-Repeat entry`:_==="legends"?`${d}, legend samples`:_==="unread"?`${d}, some reads unanswered`:d;const o=document.createElement("button");o.type="button",o.textContent="Reset",o.title="Put the simulated board back to its starting settings",o.className="cursor-pointer underline underline-offset-2 text-kb-warn-ink",o.addEventListener("click",()=>{window.confirm("Put the simulated board back to its starting settings? Its changes are lost.")&&n()}),e.append(t,o);const s=()=>document.body.appendChild(e);document.body?s():document.addEventListener("DOMContentLoaded",s,{once:!0})}function ht(_){const n=_==="pointing"||_==="pointing-os",e=_==="touchpad"||_==="touchpad-gestures"||_==="touchpad-434"||n,t=_==="combo-names"||_==="turbo6"||_==="leader0"||_==="unread"||_==="legends"||_==="altrepeat"||_==="two-balls"||_==="ball-trackpoint"||_==="no-module"||e,o=_==="two-balls"?{left:"pmw3389",right:"pmw3389"}:_==="ball-trackpoint"?{left:"pmw3389",right:"trackpoint"}:void 0,s=new Pn({comboLabels:_!=="old",typingPause:t,flickerLatch:t,debugConsole:t&&_!=="touchpad-434",debounceSwitch:t,timingUsOnly:t,seedTurbo:_==="turbo6"?6:void 0,seedLeaderZero:_==="leader0",seedUnread:_==="unread",seedLegends:_==="legends",seedAltRepeat:_==="altrepeat",reportLength:t?64:32,padGestures:t,scrollSpeed:t&&_!=="touchpad-434",leftTrackball:n,touchpad:e,modules:o,hostTouchpad:_==="touchpad"||_==="touchpad-434"||_==="pointing-os",multiFinger:_!=="touchpad-434"}),r=()=>{s.forgetSettings(),window.location.reload()},a=()=>{const i=new Pn({persist:!1,serial:[14,126,18,52,86,120,154,188],reportLength:t?64:32});return navigator.hid?.others?.unshift(i.asHIDDevice()),i};return window.keybardFakeBoard={device:s,wipe:r,addOtherBoard:a},mt(_,r),console.info(`[fake board] ${d} (${_==="old"?"firmware without combo names":_==="no-pause"?"firmware that can't pause typing":"combo names on the board"}) in place of WebHID.`),s.asHIDDevice()}export{ht as installFakeBoard};
