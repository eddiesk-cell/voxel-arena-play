const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GTAOPass-D_Zq6hRP.js","./three.core-CWs1dV2C.js","./CopyShader-BEEDdIKK.js"])))=>i.map(i=>d[i]);
import{a as e,i as t,n,o as r}from"./quality-B_KARPno.js";import{n as i}from"./heroes-B09Oz1yi.js";import{J as a}from"./math-C2DYnAfD.js";import{M as o,n as s}from"./settings-D1y0TbiC.js";import{_t as c}from"./combat-ClufnJ6u.js";import{n as l}from"./roles-jaFwKRmq.js";import{n as u}from"./snapshot-B8tgAmzB.js";import{c as d,i as f,l as p,o as m,r as h,s as g,t as _}from"./attack-VgjmVPhh.js";import{s as v}from"./skins-C7ypQNHh.js";import{An as y,B as b,C as x,Cn as S,Ct as C,D as w,Dn as T,E as ee,F as te,G as E,Gn as D,H as ne,I as re,In as ie,Jn as ae,Kn as O,L as oe,Ln as se,M as ce,Mn as le,N as k,Nn as ue,O as de,On as fe,P as pe,S as me,Sn as he,St as ge,U as _e,V as ve,Vn as ye,W as be,X as xe,Xn as Se,Z as Ce,_t as we,a as A,at as j,bn as Te,bt as Ee,c as De,ct as M,d as Oe,dn as ke,dt as Ae,f as je,gt as Me,h as Ne,hn as Pe,ht as Fe,i as N,it as P,jn as Ie,k as Le,kn as Re,kt as ze,l as Be,mt as Ve,nt as He,o as F,ot as Ue,p as I,pn as We,q as Ge,qn as Ke,r as qe,rt as L,tt as Je,u as Ye,un as Xe,vt as Ze,wn as Qe,xt as $e,y as R,yt as et,z as tt}from"./three.core-CWs1dV2C.js";import{_ as z,a as nt,b as rt,d as it,f as at,g as ot,h as st,i as ct,m as lt,n as ut,o as dt,p as ft,r as pt,s as mt,t as ht,u as gt,v as _t,x as vt,y as yt}from"./animation-PNFDEiyR.js";import{a as bt,c as xt,d as St,m as Ct,n as wt,o as Tt,r as Et,s as Dt,t as Ot,u as kt}from"./vision-Cdrs9GyC.js";import{_ as At,a as jt,c as Mt,d as Nt,f as Pt,g as Ft,h as It,i as Lt,l as Rt,m as zt,o as Bt,p as Vt,s as Ht,t as Ut,u as Wt,v as Gt,y as Kt}from"./vfx-system--g8L7j0B.js";import{n as qt,r as Jt,t as Yt}from"./CopyShader-BEEDdIKK.js";import{t as Xt}from"./preload-helper-CRzLMJPS.js";import{t as Zt}from"./skin-fx-Ct5H9lUt.js";var Qt={hero:1,minion:2,monster:4,summon:8,tower:16,core:32};function $t(){return{visible:!1,spec:null,shape:`circle`,fromX:0,fromZ:0,range:0,x:0,z:0,dirX:0,dirZ:1,length:0,width:0,radius:0,angle:0,endRadius:0,maxLength:0,maxRadius:0,endX:0,endZ:0,targetId:0,targetRadius:0,locked:!1,outOfRange:!1,hits:new Int32Array(32),hitR:new Float32Array(32),hitCount:0,state:`ok`,reason:null,charge:-1,tint:`you`,ult:!1,global:!1,recast:!1,empowered:!1}}function en(e,t){let n=e.hits,r=e.hitR;Object.assign(e,t),e.hits=n,e.hitR=r;for(let e=0;e<t.hitCount;e++)n[e]=t.hits[e],r[e]=t.hitR[e];return e}function tn(){return{mode:`auto`,x:0,z:0,dirX:0,dirZ:1,frac:0,device:`mouse`}}var nn=new WeakMap;function rn(e,t){let n=/^[^(]*\(([^)]*)\)/.exec(e);return n&&n[1].split(`,`).map(e=>e.trim().replace(/[=:].*$/,``).trim())[t]||null}function an(e,t){let n=[],r=`.${t}(`,i=e.indexOf(r);for(;i>=0;){let t=0,a=i+r.length,o=``,s=[];for(;a<e.length;a++){let n=e[a];if(n===`(`||n===`{`||n===`[`)t++;else if(n===`)`||n===`}`||n===`]`){if(t===0)break;t--}n===`,`&&t===0?(s.push(o.trim()),o=``):o+=n}o.trim()&&s.push(o.trim()),n.push(s),i=e.indexOf(r,a)}return n}var on=e=>e.replace(/[$]/g,`\\$`);function sn(e,t){let n=e[0]??``;if(!t)return{to:null,len:null};let r=on(t);if(RegExp(`^${r}\\.x$`).test(n))return{to:`point`,len:null};let i=RegExp(`\\+\\s*${r}\\.dirX\\s*\\*\\s*([\\d.]+|[\\w$]+)`).exec(n)??RegExp(`^${r}\\.dirX\\s*\\*\\s*([\\d.]+|[\\w$]+)\\s*\\+`).exec(n);if(i){let e=Number(i[1]);return{to:`forward`,len:Number.isFinite(e)?e:null}}return{to:null,len:null}}function cn(e){let t=nn.get(e);if(t)return t;let n={cone:null,move:null,moveTo:null,moveLength:null,crossWalls:!1,projectile:!1,line:!1,wall:!1},r=[];try{r.push(e.cast.toString()),e.charge&&r.push(e.charge.release.toString())}catch{}for(let e of r){let t=rn(e,1);for(let t of an(e,`enemiesInCone`)){let e=Number(t[5]);n.cone=Number.isFinite(e)?e:n.cone??NaN}if(e.includes(`.spawnProjectile(`)&&(n.projectile=!0),e.includes(`.spawnWall(`)&&(n.wall=!0),e.includes(`.enemiesInLine(`)&&(n.line=!0),!n.move)for(let r of an(e,`dash`)){let e=sn(r,t);if(!e.to)continue;let i=r[2]??``;n.move=/crossWalls\s*:\s*(!0|true)/.test(i)||/height\s*:/.test(i)?`leap`:`dash`,n.crossWalls=/crossWalls\s*:\s*(!0|true)/.test(i),n.moveTo=e.to,n.moveLength=e.len;break}if(!n.move)for(let r of an(e,`blink`)){let e=sn(r,t);if(e.to){n.move=`blink`,n.crossWalls=!0,n.moveTo=e.to,n.moveLength=e.len;break}}}return nn.set(e,n),n}var ln=60,un=new WeakMap,dn=new WeakMap;function fn(e){return{name:e,shape:`circle`,targeting:`point`,range:0,length:0,width:1,radius:0,angle:ln,endRadius:0,stopsAtWalls:!1,crossesWalls:!1,minRange:0,filter:`enemy`,kinds:15,ult:!1,global:!1,charge:null,recast:!1,hasRecast:!1,channel:!1,source:`data`}}function pn(e){let t=fn(e.name);t.targeting=e.targeting,t.filter=e.targetFilter??`enemy`,t.range=e.range,t.length=e.range,t.width=e.width??1,t.radius=e.radius??0,t.global=e.range>=16,t.hasRecast=!!e.recast,t.channel=!!e.channel,e.charge&&(t.charge={min:e.charge.min??0,max:e.charge.max,grow:null});let n=cn(e),r=n.cone!==null||n.move!==null||n.projectile;switch(e.targeting){case`none`:t.shape=t.radius>0?`ring`:`self`,t.range=0,t.length=0,t.radius||=1.3;break;case`unit`:t.shape=`target`;break;case`point`:n.moveTo===`point`&&n.move?(t.shape=n.move,t.stopsAtWalls=n.move===`dash`,t.crossesWalls=n.move!==`dash`):t.shape=n.projectile&&!t.radius?`arc`:`circle`,t.shape===`circle`&&!t.radius&&(t.radius=.9);break;case`direction`:n.cone!==null&&!n.move?(t.shape=`cone`,t.angle=Number.isFinite(n.cone)?n.cone:ln):n.move&&n.moveTo===`forward`&&!n.projectile&&!n.line&&n.cone===null?(t.shape=n.move,n.moveLength&&n.moveLength>=e.range*.75&&(t.length=n.moveLength),t.stopsAtWalls=n.move===`dash`,t.crossesWalls=n.move!==`dash`,e.width===void 0&&(t.width=1.2)):(t.shape=`line`,t.radius&&(t.endRadius=t.radius)),t.range=t.length}return t.source=r?`inferred`:`data`,t}function mn(e,t){return t.shape&&(e.shape=t.shape),t.length!==void 0&&(e.length=t.length),t.width!==void 0&&(e.width=t.width),t.radius!==void 0&&(e.radius=t.radius),t.angle!==void 0&&(e.angle=t.angle),t.endRadius!==void 0&&(e.endRadius=t.endRadius),t.minRange!==void 0&&(e.minRange=t.minRange),t.global!==void 0&&(e.global=t.global),t.shape&&t.stopsAtWalls===void 0&&(e.stopsAtWalls=t.shape===`dash`,e.crossesWalls=t.shape===`leap`||t.shape===`blink`),t.stopsAtWalls!==void 0&&(e.stopsAtWalls=t.stopsAtWalls),t.chargeGrow&&e.charge&&(e.charge={...e.charge,grow:[t.chargeGrow[0],t.chargeGrow[1]]}),(e.shape===`line`||e.shape===`cone`||e.shape===`dash`||e.shape===`blink`)&&e.targeting===`direction`&&(e.range=e.length),e.source=`override`,e}function hn(e,t={}){let n=un.get(e);if(!n){let t=pn(e);e.aim&&mn(t,e.aim);let r=null;e.recast&&(r={...t,recast:!0},e.aim?.recast&&mn(r,e.aim.recast)),n=[t,r],un.set(e,n)}let r=t.recast&&n[1]?n[1]:n[0],i=t.slot===2;return r.ult===i?r:_n(r,i)}var gn=new WeakMap;function _n(e,t){let n=gn.get(e);return n||(n={...e,ult:t},gn.set(e,n)),n}function vn(e){let t=dn.get(e);if(t)return t;switch(t=fn(e.name),t.source=`spell`,e.aim){case`point`:t.shape=`blink`,t.targeting=`point`,t.range=t.length=e.range,t.radius=e.radius??0,t.crossesWalls=!0;break;case`target`:t.shape=`target`,t.targeting=`unit`,t.range=e.range,t.kinds=e.targets===`monster`?Qt.monster|Qt.minion|Qt.summon:Qt.hero;break;case`tower`:t.shape=`target`,t.targeting=`unit`,t.filter=`ally`,t.kinds=48&Qt.tower,t.range=0,t.global=!0;break;default:t.targeting=`none`,t.shape=e.radius?`ring`:`self`,t.radius=e.radius??1.3,e.id===`lifespring`&&(t.filter=`ally`)}return dn.set(e,t),t}function yn(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>1e-9?((e-n)*o+(t-r)*s)/c:0;return l=l<0?0:l>1?1:l,Math.hypot(e-(n+o*l),t-(r+s*l))}function bn(e,t,n,r,i,a){return Math.hypot(e-r,t-i)<=a+n}function xn(e,t,n,r,i,a,o,s,c){return yn(e,t,r,i,r+a*s,i+o*s)<=c/2+n}function Sn(e,t,n,r,i,a,o,s,c){let l=e-r,u=t-i,d=Math.hypot(l,u);if(d>s+n)return!1;if(d<.3)return!0;let f=(l*a+u*o)/(d*(Math.hypot(a,o)||1));return 180/Math.PI*Math.acos(Math.max(-1,Math.min(1,f)))<=c/2}function Cn(e,t,n,r){let i=Math.hypot(n,r)*(Math.hypot(e,t)||1);return i<1e-9?0:Math.acos(Math.max(-1,Math.min(1,(e*n+t*r)/i)))*(180/Math.PI)}function wn(e,t){return!t.targetable||(e.kinds&Qt[t.kind])===0?!1:e.filter===`enemy`?t.enemy:e.filter===`ally`?t.ally&&!t.self:!t.self}function Tn(e,t){return!t.targetable||(e.kinds&Qt[t.kind])===0?!1:e.filter===`ally`?t.ally:t.enemy}function En(e){switch(e.shape){case`target`:return e.global?1e6:e.range+.5;case`circle`:case`arc`:case`leap`:return e.range+Math.max(.5,e.radius*.6);case`ring`:case`self`:return e.radius;default:return e.targeting===`point`?e.range+Math.max(0,e.radius*.6):e.length}}function Dn(e,t,n,r,i=0,a=0,o=180){let s=t.caster;if(e.filter===`ally`){let n=null,c=1/0;for(let l=0;l<t.count;l++){let u=t.units[l];if(!wn(e,u))continue;let d=Math.hypot(u.x-s.x,u.z-s.z);if(d-u.radius>r||(i!==0||a!==0)&&Cn(i,a,u.x-s.x,u.z-s.z)>o+Math.atan2(u.radius,Math.max(.5,d))*(180/Math.PI))continue;let f=(u.kind===`hero`?0:1e3)+u.hp/u.maxHp*100+d*.1;(f<c||f===c&&n&&u.id<n.id)&&(c=f,n=u)}return n}return On.priority=n.targetPriority,On.lastHit=n.lastHitPriority,On.activeCreeps=n.activeCreepFilter,kn.spec=e,kn.c=s,kn.reach=r,kn.dirX=i,kn.dirZ=a,kn.halfAngle=o,kn.preferId=t.lockId,f(t,On,kn)}var On={priority:`lowestHpPct`,lastHit:!0,activeCreeps:!0},kn={spec:null,c:null,accept(e){return wn(kn.spec,e)},dist(e){return h(kn.c,e)},reach:0,dirX:0,dirZ:0,halfAngle:180,angleWeight:.5,preferId:0};function An(e,t,n,r,i,a=12){let o=t.caster,s=Math.hypot(n,r);if(s<1e-6)return null;let c=n/s,l=r/s,u=null,d=1/0;for(let n=0;n<t.count;n++){let r=t.units[n];if(!wn(e,r))continue;let s=r.x-o.x,f=r.z-o.z;if(Math.hypot(s,f)-r.radius>i)continue;let p=s*c+f*l;if(p<=0)continue;let m=Math.abs(s*l-f*c);if(Math.atan2(Math.max(0,m-r.radius),p)*(180/Math.PI)>a)continue;let h=m-r.radius*.5+p*.02+(r.kind===`hero`?0:.3);(h<d||h===d&&u&&r.id<u.id)&&(d=h,u=r)}return u}function jn(e,t,n,r,i){let a=null,o=i;for(let i=0;i<t.count;i++){let s=t.units[i];if(!wn(e,s))continue;let c=Math.hypot(s.x-n,s.z-r)-(s.kind===`hero`?.8:0);c<o&&(o=c,a=s)}return a}function Mn(e){for(let t=0;t<e.count;t++)if(e.units[t].self)return e.units[t];return null}var Nn=(e,t,n)=>e+(t-e)*n,Pn=8;function Fn(e,t,n,r,i,a={}){let o=n.caster,s=Math.sin(o.facing),c=Math.cos(o.facing);i.visible=!o.dead,i.spec=e,i.shape=e.shape,i.fromX=o.x,i.fromZ=o.z,i.range=e.global?0:e.range,i.width=e.width,i.angle=e.angle,i.endRadius=e.endRadius,i.targetId=0,i.targetRadius=0,i.locked=!1,i.outOfRange=!1,i.hitCount=0,i.tint=e.filter===`ally`?`ally`:`you`,i.ult=e.ult,i.global=e.global,i.recast=e.recast,i.empowered=!!a.empowered;let l=a.charge??-1;i.charge=e.charge?l:-1;let u=e.charge?.grow??null,d=l<0?0:l,f=e.shape===`circle`||e.shape===`ring`,p=e.length,m=e.radius;i.maxLength=p,i.maxRadius=m,u&&(f?(m=Nn(u[0],u[1],d),i.maxRadius=u[1]):(p=Nn(u[0],u[1],d),i.maxLength=u[1])),i.length=p,i.radius=m;let h=r.aimAssist,g=t.mode===`drag`&&t.frac<r.manualThreshold,_=s,v=c;if(t.mode===`point`){let e=t.x-o.x,n=t.z-o.z,r=Math.hypot(e,n);r>.05&&(_=e/r,v=n/r)}else if(t.mode===`drag`){let e=Math.hypot(t.dirX,t.dirZ);e>1e-6&&(_=t.dirX/e,v=t.dirZ/e)}let y=o.x,b=o.z,x=null,S=En(e);switch(e.targeting){case`none`:y=o.x,b=o.z;break;case`unit`:if(t.mode===`point`)x=jn(e,n,t.x,t.z,r.unitSnapRadius);else if(t.mode===`drag`){if(g&&h&&(x=Dn(e,n,r,S,_,v,r.assistAngle)),!x&&r.accurateIndicator&&(x=An(e,n,_,v,S,12)),!x){let i=e.range*Math.max(.15,t.frac);x=jn(e,n,o.x+_*i,o.z+v*i,r.unitSnapRadius)??Dn(e,n,r,S,_,v,14)}}else x=Dn(e,n,r,S);if(!x&&e.filter===`ally`&&(x=Mn(n)),x)y=x.x,b=x.z,i.locked=!x.self,i.targetId=x.id,i.targetRadius=x.radius,i.outOfRange=!e.global&&Math.hypot(x.x-o.x,x.z-o.z)-x.radius>e.range;else if(t.mode===`point`)y=t.x,b=t.z;else{let n=e.range*(t.mode===`drag`?Math.max(.15,t.frac):1);y=o.x+_*n,b=o.z+v*n}break;case`direction`:if(t.mode===`point`?r.desktopSkillshotAssist&&(x=Dn(e,n,r,S,_,v,7)):t.mode===`drag`?g&&h?x=Dn(e,n,r,S,_,v,r.assistAngle):r.assistedAim&&(x=Dn(e,n,r,S,_,v,Pn)):h&&(x=Dn(e,n,r,S)),x){let e=Math.hypot(x.x-o.x,x.z-o.z);e>.05&&(_=(x.x-o.x)/e,v=(x.z-o.z)/e),i.locked=!0,i.targetId=x.id,i.targetRadius=x.radius}y=o.x+_*p,b=o.z+v*p;break;case`point`:{if(t.mode===`point`)y=t.x,b=t.z;else if(t.mode===`drag`){if(g&&h)x=Dn(e,n,r,S,_,v,r.assistAngle);else if(r.assistedAim){let r=e.range*t.frac,i=jn(e,n,o.x+_*r,o.z+v*r,Math.max(1.5,e.radius));i&&(x=i)}if(!x){let n=e.range*t.frac;y=o.x+_*n,b=o.z+v*n}}else h&&(x=Dn(e,n,r,S)),x||(y=o.x+s*e.range,b=o.z+c*e.range);x&&(y=x.x,b=x.z,i.locked=!0,i.targetId=x.id,i.targetRadius=x.radius);let a=y-o.x,l=b-o.z,u=Math.hypot(a,l);u>.05&&(_=a/u,v=l/u);let d=u>e.range?e.range:u<e.minRange?e.minRange:u;d!==u&&(y=o.x+_*d,b=o.z+v*d);break}}i.x=y,i.z=b,i.dirX=_,i.dirZ=v,i.endX=y,i.endZ=b,n.walls&&(e.shape===`dash`||e.shape===`blink`||e.shape===`leap`)&&In(n.walls,o.x,o.z,y,b,e.stopsAtWalls,i);let C=i.endX,w=i.endZ;if((e.shape===`dash`||e.shape===`blink`)&&(i.length=Math.hypot(C-o.x,w-o.z)),e.shape!==`self`){let t=Math.hypot(C-o.x,w-o.z);for(let r=0;r<n.count&&i.hitCount<32;r++){let a=n.units[r];if(!Tn(e,a))continue;let s=!1;switch(e.shape){case`ring`:s=bn(a.x,a.z,a.radius,o.x,o.z,m);break;case`circle`:case`arc`:case`leap`:s=m>0&&bn(a.x,a.z,a.radius,C,w,m);break;case`line`:s=xn(a.x,a.z,a.radius,o.x,o.z,_,v,p,e.width)||e.endRadius>0&&bn(a.x,a.z,a.radius,y,b,e.endRadius);break;case`cone`:s=Sn(a.x,a.z,a.radius,o.x,o.z,_,v,p,e.angle);break;case`dash`:s=xn(a.x,a.z,a.radius,o.x,o.z,_,v,t,e.width)||m>0&&bn(a.x,a.z,a.radius,C,w,m);break;case`blink`:s=m>0&&bn(a.x,a.z,a.radius,C,w,m);break;case`target`:s=a.id===i.targetId||m>0&&i.targetId!==0&&bn(a.x,a.z,a.radius,y,b,m)}s&&!a.self&&(i.hits[i.hitCount]=a.id,i.hitR[i.hitCount++]=a.radius)}}return a.cancel?(i.state=`cancel`,i.reason=`Cancel`):a.blocker?(i.state=`invalid`,i.reason=a.blocker):e.targeting===`unit`&&!i.targetId?(i.state=`invalid`,i.reason=`No target`):(i.state=`ok`,i.reason=null),i}function In(e,t,n,r,i,a,o){let s=Math.hypot(r-t,i-n),c=Math.max(1,Math.ceil(s/.25));if(a){let a=t,s=n;for(let o=1;o<=c;o++){let l=t+(r-t)*o/c,u=n+(i-n)*o/c;if(!e.isWalkable(l,u))break;a=l,s=u}o.endX=a,o.endZ=s}else{for(let a=c;a>=0;a--){let s=t+(r-t)*a/c,l=n+(i-n)*a/c;if(e.isWalkable(s,l)){o.endX=s,o.endZ=l;return}}o.endX=t,o.endZ=n}}function Ln(e,t,n){let r=t-e.fromX,i=n-e.fromZ;e.fromX=t,e.fromZ=n;let a=e.spec;a&&a.targeting!==`point`&&a.targeting!==`unit`&&(e.x+=r,e.z+=i,e.endX+=r,e.endZ+=i)}function Rn(e,t){if(!e.visible||e.state!==`ok`||!e.spec)return null;let n=e.spec.targeting===`none`?e.fromX:e.x,r=e.spec.targeting===`none`?e.fromZ:e.z;return t===`spell`?{type:`spell`,x:n,z:r}:e.spec.targeting===`unit`?{type:`cast`,slot:t,x:n,z:r,targetId:e.targetId}:{type:`cast`,slot:t,x:n,z:r}}var zn={slowMs:24,okMs:18.5,downAfter:1.5,upAfter:10,minScale:.6,step:.85,floorScale:.5},Bn=class{base;maxShadowTier;maxTier;baseTier;state={scale:1,shadowTier:0,tier:0};dirty=!1;slowFor=0;okFor=0;sinceChange=0;upWait;tried=!1;cfg;sum=0;n=0;cpuSum=0;playerCap=0;constructor(e=zn,t=2,n=4,r=0){this.base=e,this.maxShadowTier=t,this.maxTier=n,this.baseTier=r,this.cfg=e,this.upWait=e.upAfter,this.state.tier=r}get shed(){return this.state.tier-this.baseTier}setFrameCap(e){this.playerCap=e,this.applyCap()}setMaxTier(e){this.maxTier=e,this.state.tier>e&&(this.state.tier=e,this.applyCap(),this.changed())}get frameCap(){let e=this.state.tier>=4?30:0;return e&&(!this.playerCap||this.playerCap>e)?e:this.playerCap}applyCap(){let e=this.frameCap,t=e>0&&e<55?60/e:1;this.cfg={...this.base,slowMs:this.base.slowMs*t,okMs:this.base.okMs*t}}frame(e,t){if(e<=0||e>.25)return;let n=this.cfg;if(this.sinceChange+=e,this.sum+=e*1e3,this.cpuSum+=t,this.n++,this.n<8&&this.sum<250)return;let r=this.sum/this.n,i=this.cpuSum/this.n,a=this.sum/1e3;this.sum=this.cpuSum=this.n=0,r>n.slowMs?(this.slowFor+=a,this.okFor=0,this.slowFor>=n.downAfter&&(this.slowFor=0,this.tried&&this.sinceChange<6&&(this.upWait=Math.min(120,this.upWait*2)),this.tried=!1,this.stepDown(i>r*.7))):(this.slowFor=0,r<=n.okMs&&(this.okFor+=a),this.okFor>=this.upWait&&(this.state.scale<1||this.state.shadowTier>0||this.state.tier>this.baseTier)?(this.okFor=0,this.tried=!0,this.stepUp()):this.tried&&this.sinceChange>12&&(this.tried=!1,this.upWait=n.upAfter))}stepDown(e){let t=this.state,n=this.cfg;if(!e&&t.scale>n.minScale+1e-6)t.scale=Math.max(n.minScale,+(t.scale*n.step).toFixed(3));else if(t.shadowTier<this.maxShadowTier)t.shadowTier+=1;else if(t.scale>n.minScale+1e-6)t.scale=Math.max(n.minScale,+(t.scale*n.step).toFixed(3));else if(t.tier<this.maxTier)t.tier++,t.tier===3&&(t.scale=Math.min(t.scale,n.floorScale)),t.tier===4&&this.applyCap();else return;this.changed()}stepUp(){let e=this.state,t=this.cfg;e.tier>this.baseTier?(e.tier===3&&(e.scale=t.minScale),e.tier--,e.tier===3&&this.applyCap()):e.shadowTier>0?--e.shadowTier:e.scale=Math.min(1,+(e.scale/t.step).toFixed(3)),this.changed()}changed(){this.dirty=!0,this.sinceChange=0}},Vn=class{next=0;pass(e,t){if(t<=0)return this.next=0,!0;let n=1e3/t;return e<this.next-1.5?!1:(this.next=Math.max(this.next+n,e-n),!0)}},Hn={kind:`spell`},Un=class{view;world;settings={...o};heroDef=e=>i[e];frame=$t();input=tn();source=null;cancelOver=!1;chargeStarted=!1;chargeSeen=!1;snap=null;me=null;slot={skill:void 0,recast:!1,charge:-1,empowered:!1,blocker:null};opts={blocker:null,cancel:!1,charge:-1,empowered:!1};legacySpec=null;anchor=null;constructor(e,t){this.view=e,this.world=t}get active(){return this.source}sync(e,t){this.snap=e,this.me=t,(this.source||this.legacySpec)&&this.refresh()}begin(e,t=`mouse`){this.source=e,this.legacySpec=null,this.cancelOver=!1,this.chargeStarted=!1,this.chargeSeen=!1,this.input.device=t,(t===`touch`||this.input.mode!==`point`)&&(this.input.mode=`auto`);let n=this.refresh();return n?.spec?.charge&&e.kind===`skill`&&this.slot.charge<0&&n.state!==`invalid`?(this.chargeStarted=!0,{command:{type:`cast`,slot:e.slot,x:n.x,z:n.z,...n.targetId?{targetId:n.targetId}:{}},reason:null,frame:this.frame}):null}point(e,t){this.input.mode=`point`,this.input.device=`mouse`,this.input.x=e,this.input.z=t,this.refresh()}drag(e,t,n){this.input.mode=`drag`,this.input.device=`touch`,this.input.dirX=e,this.input.dirZ=t,this.input.frac=Math.max(0,Math.min(1,n)),this.refresh()}setCancel(e){this.cancelOver=e,this.refresh()}release(){let e=this.source,t=this.refresh()??this.frame;if(this.source=null,!e)return{command:null,reason:null,frame:t};if(this.cancelOver)return this.view.show(null,`cancel`),{command:null,reason:null,frame:t};if(t.spec?.charge&&this.chargeStarted&&this.chargeSeen&&this.slot.charge<0)return this.view.show(null,`cast`),{command:null,reason:null,frame:t};let n=Rn(t,e.kind===`spell`?`spell`:e.slot);return this.view.show(null,n?`cast`:`cancel`),{command:n,reason:n?null:t.reason,frame:t}}cancel(){(this.source||this.legacySpec)&&(this.source=null,this.legacySpec=null,this.view.show(null,`cancel`))}stop(){this.source=null,this.legacySpec=null,this.view.show(null,`hide`)}quick(e,t,n=`mouse`){this.source=e,this.legacySpec=null,this.cancelOver=!1,this.chargeStarted=!1,this.chargeSeen=!1,this.input.device=n,t?(this.input.mode=`point`,this.input.x=t.x,this.input.z=t.z):this.input.mode=`auto`;let r=this.refresh()??this.frame;this.source=null;let i=Rn(r,e.kind===`spell`?`spell`:e.slot);return this.view.show(null,i?`cast`:`cancel`),{command:i,reason:i?null:r.reason,frame:r}}refresh(){let e=this.me,t=this.snap,n=this.source;if(!e||!t||e.dead||!n&&!this.legacySpec)return this.view.show(null,`hide`),null;let r=null,i=this.opts;if(i.cancel=this.cancelOver,i.blocker=null,i.charge=-1,i.empowered=!1,!n)r=this.legacySpec;else if(n.kind===`skill`){let a=e.hero?this.heroDef(e.hero.defId):void 0;if(a){let o=d(t,e,a,n.slot,this.slot);o.skill&&(r=hn(o.skill,{recast:o.recast,slot:n.slot}),i.blocker=o.blocker,i.charge=o.charge,i.empowered=o.empowered)}}else r=vn(c(e.hero?.spell)),i.blocker=p(t,e);if(!r)return this.view.show(null,`hide`),null;i.charge!==void 0&&i.charge>=0&&(this.chargeSeen=!0);let a=Fn(r,this.input,this.world,this.settings,this.frame,i),o=this.anchor?.(e.id);return o&&Ln(a,o.x,o.z),this.view.show(a),a}static SPELL=Hn},Wn=36,Gn=`
attribute vec2 aUv;
varying vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Kn=`
uniform vec3 uColor;
uniform float uAlpha;
uniform float uTime;
uniform float uLen;
varying vec2 vUv;
void main() {
  float side = 1.0 - smoothstep(0.55, 1.0, abs(vUv.y));
#ifndef AIM_LOW
  float dash = smoothstep(0.25, 0.35, fract(vUv.x * uLen / 0.7 - uTime * 1.6)) * (1.0 - smoothstep(0.75, 0.85, fract(vUv.x * uLen / 0.7 - uTime * 1.6)));
#else
  float dash = 1.0;
#endif
  float ends = smoothstep(0.0, 0.06, vUv.x) * (1.0 - smoothstep(0.94, 1.0, vUv.x));
  gl_FragColor = vec4(uColor, side * mix(0.35, 1.0, dash) * ends * uAlpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,qn=class{mesh;pos=new Float32Array(222);attr;constructor(e){let t=new F;this.attr=new A(this.pos,3),this.attr.setUsage(de),t.setAttribute(`position`,this.attr);let n=new Float32Array(148),r=[];for(let e=0;e<=Wn;e++)n.set([e/Wn,-1,e/Wn,1],e*4),e<Wn&&r.push(e*2,e*2+1,e*2+2,e*2+1,e*2+3,e*2+2);t.setAttribute(`aUv`,new A(n,2)),t.setIndex(r);let i=new S({uniforms:{uColor:{value:new I},uAlpha:{value:1},uTime:{value:0},uLen:{value:1}},vertexShader:Gn,fragmentShader:Kn,transparent:!0,depthWrite:!1,side:2,defines:e?{AIM_LOW:1}:{}});this.mesh=new P(t,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4,this.mesh.visible=!1,this.mesh.matrixAutoUpdate=!1}place(e,t,n,r,i,a,o,s,c,l){let u=n-e,d=r-t,f=Math.hypot(u,d);if(f<.3){this.mesh.visible=!1;return}let p=-d/f*a*.5,m=u/f*a*.5,h=o(e,t)+.3,g=o(n,r)+.08,_=this.pos;for(let n=0;n<=Wn;n++){let r=n/Wn,a=e+u*r,o=t+d*r,s=h+(g-h)*r+i*4*r*(1-r),c=n*6;_[c]=a-p,_[c+1]=s,_[c+2]=o-m,_[c+3]=a+p,_[c+4]=s,_[c+5]=o+m}this.attr.needsUpdate=!0;let v=this.mesh.material.uniforms;v.uColor.value.copy(s),v.uAlpha.value=c,v.uTime.value=l,v.uLen.value=f,this.mesh.visible=!0}hide(){this.mesh.visible=!1}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},B={range:0,circle:1,ring:2,line:3,cone:4,dash:5,blink:6,link:7,target:8,lock:9,landing:10,chevrons:11,global:12,self:13,hit:14},Jn=`
uniform vec2 uAnchor;
uniform vec2 uFwd;
varying vec2 vP;
#include <common>
#include <logdepthbuf_pars_vertex>
void main() {
  vec2 rel = position.xz - uAnchor;
  vP = vec2(rel.x * uFwd.y - rel.y * uFwd.x, dot(rel, uFwd));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
}`,Yn=`
varying vec2 vP;
void main() {
  vP = position.xz;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
}`,Xn=`
uniform float uKind;
uniform vec4 uA;      // shape dims (see each kind)
uniform vec4 uB;      // extra dims
uniform vec3 uFill;
uniform vec3 uEdge;
uniform vec3 uHot;    // ult / accent
uniform float uAlpha;
uniform float uTime;
uniform vec4 uState;  // x invalid 0..1, y cancel 0..1, z ult 0..1, w pop 0..1 (snap / lock animation)
uniform vec2 uCharge; // x power 0..1 (-1 = not charging), y max length / radius
varying vec2 vP;
#include <common>
#include <logdepthbuf_pars_fragment>

float hash12(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}
float aaw(float d) { return fwidth(d) * 0.9 + 0.006; }
float inside(float d) { float w = aaw(d); return 1.0 - smoothstep(-w, w, d); }
float band(float d, float h) { float w = aaw(d); return 1.0 - smoothstep(h - w, h + w, abs(d)); }
float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float sdSeg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); }
float sdPie(vec2 p, vec2 c, float r) {
  p.x = abs(p.x);
  float l = length(p) - r;
  float m = length(p - c * clamp(dot(p, c), 0.0, r));
  return max(l, m * sign(c.y * p.x - c.x * p.y));
}
// Isosceles triangle, tip at the origin, base at y = q.y (q.x = half base).
float sdTriIso(vec2 p, vec2 q) {
  p.x = abs(p.x);
  vec2 a = p - q * clamp(dot(p, q) / dot(q, q), 0.0, 1.0);
  vec2 b = p - q * vec2(clamp(p.x / q.x, 0.0, 1.0), 1.0);
  float s = -sign(q.y);
  vec2 d = min(vec2(dot(a, a), s * (p.x * q.y - p.y * q.x)), vec2(dot(b, b), s * (p.y - q.y)));
  return -sqrt(d.x) * sign(d.y);
}
// A chevron (">" pointing +y) of half-width w and thickness t at the origin.
float sdChevron(vec2 p, float w, float t) {
  p.x = abs(p.x);
  return sdSeg(p, vec2(0.0, 0.0), vec2(w, -w * 0.75)) - t;
}

void main() {
  #include <logdepthbuf_fragment>
  vec2 p = vP;
  float t = uTime;
  int kind = int(uKind + 0.5);
  float ult = uState.z;
  float pop = uState.w;
  float edgeW = mix(0.07, 0.11, ult);   // outline half-width
  float d = 1e3;      // main signed distance (fill inside d < 0, outline on d = 0)
  float fillA = 0.22; // fill opacity scale
  float edgeA = 0.95;
  float pattern = 0.0;
  float maxLine = 0.0; // charge: dashed outline of the full size
  float rim = 0.0;    // 0 centre -> 1 near the edge (fill brightens toward the rim)
  float fade = 1.0;

#ifndef AIM_LOW
  float wob = (vnoise(p * 1.6 + vec2(t * 0.35, -t * 0.27)) - 0.5) * 0.06;
#else
  float wob = 0.0;
#endif

  if (kind == ${B.range}) {
    // uA.x = radius
    float r = length(p);
    d = r - uA.x;
    fillA = 0.0;
    float rimFill = smoothstep(uA.x * 0.72, uA.x, r) * inside(d) * 0.10;
    float a = atan(p.x, p.y);
    float n = max(24.0, floor(uA.x * 5.0));
#ifndef AIM_LOW
    float dash = step(0.38, fract(a / 6.2831853 * n + t * 0.04));
#else
    float dash = 1.0;
#endif
    float e = band(d, 0.06) + band(d - 0.2, 0.035) * dash * 0.8;
    float ink = band(d + 0.12, 0.04) * (1.0 - e);
    vec3 col = mix(mix(uFill, uEdge, 0.7), vec3(0.16, 0.08, 0.03), ink);
    gl_FragColor = vec4(col, (max(e * 0.9, ink * 0.35) + rimFill) * uAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    return;
  } else if (kind == ${B.circle} || kind == ${B.ring}) {
    // uA.x = radius
    float r = length(p);
    d = r - uA.x + wob;
    rim = clamp(r / max(0.01, uA.x), 0.0, 1.0);
#ifndef AIM_LOW
    pattern = smoothstep(0.75, 1.0, sin((r - t * 1.6) * 5.0) * 0.5 + 0.5) * (1.0 - rim * 0.5);
    if (kind == ${B.ring}) {
      float a = atan(p.x, p.y);
      pattern += band(r - uA.x * 0.62, 0.035) * step(0.5, fract(a / 6.2831853 * 12.0 - t * 0.15)) * 0.8;
    }
#endif
    fillA = kind == ${B.ring} ? 0.17 : 0.24;
    // centre cross-hair for AoE at a point
    if (kind == ${B.circle}) pattern += (band(p.x, 0.035) * step(abs(p.y), 0.35) + band(p.y, 0.035) * step(abs(p.x), 0.35)) * 1.2;
  } else if (kind == ${B.self}) {
    float r = length(p);
    d = r - uA.x + wob;
    rim = clamp(r / max(0.01, uA.x), 0.0, 1.0);
    fillA = 0.10;
#ifndef AIM_LOW
    pattern = band(r - fract(t * 0.8) * uA.x, 0.06) * (1.0 - fract(t * 0.8));
#endif
  } else if (kind == ${B.line}) {
    // uA: x length, y width, z start, w head length
    float L = uA.x, W = uA.y * 0.5, s0 = uA.z, H = uA.w;
    float body = sdBox(p - vec2(0.0, (s0 + L - H) * 0.5), vec2(W, max(0.01, (L - H - s0) * 0.5)));
    float head = sdTriIso(vec2(p.x, L - p.y), vec2(W + mix(0.32, 0.18, step(2.6, W * 2.0)) + W * 0.15, H));
    d = min(body, head) + wob;
    rim = clamp(abs(p.x) / max(0.01, W), 0.0, 1.0);
    fade = smoothstep(s0 - 0.2, s0 + 0.6, p.y);
#ifndef AIM_LOW
    float yy = p.y - abs(p.x) * 0.55;
    float ch = fract(yy / 1.15 - t * 1.4);
    pattern = band(ch - 0.5, 0.07) * smoothstep(s0 + 0.4, s0 + 1.2, p.y) * step(p.y, L - H) * 0.9;
#endif
    // charge: fill sweeps from the hero to the tip; a growing lance shows its full length dashed
    if (uCharge.x >= 0.0) {
      float front = s0 + (L - s0) * uCharge.x;
      fillA *= mix(0.25, 1.6, step(p.y, front));
      pattern += band(p.y - front, 0.06) * step(abs(p.x), W) * 1.5;
    }
    if (uCharge.y > L + 0.05) {
      float dm = sdBox(p - vec2(0.0, (s0 + uCharge.y) * 0.5), vec2(W, (uCharge.y - s0) * 0.5));
      maxLine = band(dm, 0.045) * step(0.5, fract((p.y + abs(p.x)) * 1.6 - t * 0.6)) * step(L - 0.2, p.y) * 0.9;
    }
  } else if (kind == ${B.cone}) {
    // uA: x length, y half-angle (rad)
    vec2 c = vec2(sin(uA.y), cos(uA.y));
    d = sdPie(p, c, uA.x) + wob;
    float r = length(p);
    rim = clamp(r / max(0.01, uA.x), 0.0, 1.0);
    fade = smoothstep(0.2, 1.0, r);
#ifndef AIM_LOW
    pattern = smoothstep(0.7, 1.0, sin((r - t * 2.2) * 4.2) * 0.5 + 0.5) * 0.8;
#endif
    if (uCharge.x >= 0.0) {
      float front = uA.x * uCharge.x;
      fillA *= mix(0.25, 1.6, step(r, front));
      pattern += band(r - front, 0.06) * 1.5;
    }
  } else if (kind == ${B.dash}) {
    // uA: x length, y width, z start
    float L = uA.x, W = uA.y * 0.5, s0 = uA.z;
    d = sdBox(p - vec2(0.0, (s0 + L) * 0.5), vec2(W, max(0.01, (L - s0) * 0.5))) - 0.12 + wob;
    rim = clamp(abs(p.x) / max(0.01, W), 0.0, 1.0);
    fillA = 0.16;
    fade = smoothstep(s0 - 0.2, s0 + 0.6, p.y);
    // footstep dots along the centre + a big chevron at the end
#ifndef AIM_LOW
    float k = fract(p.y / 0.7 - t * 1.8);
    pattern = (1.0 - smoothstep(0.08, 0.14, length(vec2(p.x, (k - 0.5) * 0.7)))) * step(p.y, L - 0.6) * 0.9;
#endif
    pattern += (1.0 - smoothstep(0.0, aaw(p.y) * 2.0, sdChevron(p - vec2(0.0, L - 0.2), min(W, 0.9), 0.07))) * 1.2;
  } else if (kind == ${B.blink}) {
    // dotted line from the hero to the landing (uA.x length)
    float L = uA.x;
    float on = step(0.4, p.y) * step(p.y, L - 0.4);
    float k = fract(p.y / 0.55 - t * 0.9);
    float dotd = length(vec2(p.x, (k - 0.5) * 0.55)) - 0.11;
    d = 1e3;
    float e = (1.0 - smoothstep(-aaw(dotd), aaw(dotd), dotd)) * on;
    gl_FragColor = vec4(mix(uEdge, vec3(1.0), 0.3), e * uAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    return;
  } else if (kind == ${B.link} || kind == ${B.chevrons}) {
    // uA: x length, y start; link = thin dashed line, chevrons = approach arrows
    float L = uA.x, s0 = uA.y;
    float on = smoothstep(s0, s0 + 0.3, p.y) * (1.0 - smoothstep(L - 0.3, L, p.y));
    float e;
    if (kind == ${B.link}) {
      float k = step(0.35, fract(p.y / 0.5 - t * 1.6));
      e = band(p.x, 0.045) * on * mix(0.55, 1.0, k);
    } else {
      float k = fract(p.y / 0.8 - t * 1.5);
      float cd = sdChevron(vec2(p.x, (k - 0.5) * 0.8), 0.32, 0.055);
      e = (1.0 - smoothstep(-aaw(cd), aaw(cd), cd)) * on;
    }
    gl_FragColor = vec4(uEdge, e * uAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    return;
  } else if (kind == ${B.target} || kind == ${B.hit}) {
    // ring under a unit: uA.x radius. target = rotating bracket ring, hit = pulsing glow ring
    float r = length(p);
    float R = uA.x * mix(1.0, 1.35, pop);
    d = r - R;
    float a = atan(p.x, p.y);
    float e;
    if (kind == ${B.target}) {
      float gaps = step(0.18, fract(a / 6.2831853 * 3.0 + t * 0.25));
      e = band(d, 0.09) * gaps;
      float ink = band(d - 0.15, 0.05) * gaps * (1.0 - e);
      float inner = band(d + 0.22, 0.035) * 0.7;
      float glow = (1.0 - smoothstep(0.0, R, r)) * 0.28;
      vec3 col = mix(mix(uFill, uEdge * 1.3, e), vec3(0.15, 0.03, 0.02), ink);
      gl_FragColor = vec4(col, clamp(e + inner + glow + ink * 0.55, 0.0, 1.0) * uAlpha);
    } else {
      float pulse = 0.65 + 0.35 * sin(t * 9.0);
      e = band(d, 0.075) * (0.85 + 0.3 * pulse);
      float ink = band(d - 0.12, 0.04) * (1.0 - e);
      float glow = exp(-abs(d) * 4.5) * 0.6 * pulse + (1.0 - smoothstep(0.0, R, r)) * 0.32;
      vec3 col = mix(mix(uFill, uEdge * 1.25, clamp(e, 0.0, 1.0)), vec3(0.15, 0.03, 0.02), ink);
      gl_FragColor = vec4(col, clamp(e + glow + ink * 0.5, 0.0, 1.0) * uAlpha);
    }
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    return;
  } else if (kind == ${B.lock}) {
    // four corner brackets of a rotating square (uA.x half size), snapping in (pop 1 -> 0)
    float s = uA.x * (1.0 + pop * 0.8);
    float ang = t * 0.9 + pop * 1.5;
    vec2 q = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * p;
    vec2 aq = abs(q);
    float corner = min(sdSeg(aq, vec2(s, s), vec2(s, s * 0.45)), sdSeg(aq, vec2(s, s), vec2(s * 0.45, s)));
    float e = 1.0 - smoothstep(0.07 - aaw(corner), 0.07 + aaw(corner), corner);
    float centre = 1.0 - smoothstep(0.08, 0.12, length(p));
    gl_FragColor = vec4(uEdge, (e + centre * 0.8) * uAlpha * (1.0 - pop * 0.6));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    return;
  } else if (kind == ${B.landing}) {
    // landing / blink destination: ring + inner X (uA.x radius)
    float r = length(p);
    d = r - uA.x;
    fillA = 0.12;
    rim = clamp(r / max(0.01, uA.x), 0.0, 1.0);
    vec2 q = abs(mat2(0.7071, -0.7071, 0.7071, 0.7071) * p);
    pattern = (band(q.x, 0.04) + band(q.y, 0.04)) * step(r, uA.x * 0.55) * 1.2;
#ifndef AIM_LOW
    pattern += band(r - uA.x * (0.4 + 0.6 * fract(t * 1.4)), 0.04) * (1.0 - fract(t * 1.4)) * 0.8;
#endif
  } else if (kind == ${B.global}) {
    // huge-ult reticle at the aim point: uA.x radius
    float r = length(p);
    d = r - uA.x + wob;
    rim = clamp(r / max(0.01, uA.x), 0.0, 1.0);
    fillA = 0.2;
    float a = atan(p.x, p.y);
    vec2 q = abs(p);
    pattern = (band(q.x, 0.05) * step(uA.x * 0.25, q.y) + band(q.y, 0.05) * step(uA.x * 0.25, q.x)) * step(r, uA.x * 1.25) * 1.3;
#ifndef AIM_LOW
    pattern += band(r - uA.x * 1.18, 0.05) * step(0.55, fract(a / 6.2831853 * 16.0 - t * 0.12)) * 1.4;
    pattern += smoothstep(0.75, 1.0, sin((r + t * 2.4) * 3.0) * 0.5 + 0.5) * step(r, uA.x) * 0.6;
#endif
  }

  // ---- common painted composite: ink contour outside, bright outline, white highlight, rich fill
  float fillM = inside(d);
  float outer = band(d, edgeW);
  float ink = band(d - edgeW * 1.75, edgeW * 0.75) * (1.0 - outer);
  float hilite = band(d + edgeW * 0.15, edgeW * 0.28);
  float innerLine = band(d + edgeW * 3.2, edgeW * 0.4);
  if (uCharge.x >= 0.0 && uCharge.y > 0.0 && (kind == ${B.circle} || kind == ${B.ring})) {
    float dm = length(p) - uCharge.y;
    maxLine = band(dm, 0.05) * step(0.5, fract(atan(p.x, p.y) / 6.2831853 * 40.0 + t * 0.2)) * 0.9;
  }
  vec3 fillCol = mix(uFill, uEdge, rim * rim * 0.35);
  vec3 col = fillCol;
  float a = fillM * fillA * 1.45 * (0.6 + 0.7 * rim * rim);
  // ult: hot gradient + an extra outer glow band
  col = mix(col, uHot, ult * 0.45 * rim);
  float glowBand = ult * exp(-max(0.0, d - edgeW * 2.5) * 6.0) * step(edgeW * 2.5, d) * 0.5;
  col = mix(col, uEdge, clamp(pattern, 0.0, 1.0) * fillM);
  a += clamp(pattern, 0.0, 1.0) * fillM * 0.5;
  col = mix(col, uFill * 0.6, innerLine * fillM * 0.7);
  a += innerLine * fillM * 0.25;
  col = mix(col, vec3(0.16, 0.07, 0.02), ink);
  a = max(a, ink * 0.5);
#ifndef AIM_LOW
  vec3 edgeCol = uEdge * 1.35;
#else
  vec3 edgeCol = uEdge;
#endif
  col = mix(col, edgeCol, outer);
  col = mix(col, vec3(1.0, 0.98, 0.9) * 1.2, hilite * outer * 0.55);
  a = max(a, outer * edgeA);
  a += glowBand;
  col = mix(col, uHot * 1.3, glowBand);
  a += maxLine;
  col = mix(col, uEdge, maxLine);

  // invalid / cancel: red + diagonal hatching
  float bad = max(uState.x, uState.y);
#ifndef AIM_LOW
  float stripes = step(0.5, fract((p.x + p.y) * 1.25 + t * 0.6));
#else
  float stripes = 0.5;
#endif
  col = mix(col, mix(col, vec3(0.0), 0.25) * vec3(1.0, 0.85, 0.85), bad * stripes * fillM * 0.6);
  a = mix(a, a * mix(0.65, 1.15, stripes), bad * fillM);
  a *= mix(1.0, 0.7, uState.y);
  a *= fade;
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0) * uAlpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function Zn(e,t=!1){let n={uKind:{value:1},uA:{value:new Ke},uB:{value:new Ke},uFill:{value:new I},uEdge:{value:new I},uHot:{value:new I},uAlpha:{value:1},uTime:{value:0},uState:{value:new Ke},uCharge:{value:new D(-1,0)},uAnchor:{value:new D},uFwd:{value:new D(0,1)}};return new S({uniforms:n,vertexShader:t?Yn:Jn,fragmentShader:Xn,transparent:!0,depthWrite:!1,depthTest:!0,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,defines:e?{AIM_LOW:1}:{}})}var Qn=.17,$n=class{cols;rows;mesh;u;pos;attr;constructor(e,t,n,r=3){this.cols=e,this.rows=t;let i=(e+1)*(t+1);this.pos=new Float32Array(i*3);let a=new F;this.attr=new A(this.pos,3),this.attr.setUsage(de),a.setAttribute(`position`,this.attr);let o=[];for(let n=0;n<t;n++)for(let t=0;t<e;t++){let r=n*(e+1)+t,i=r+1,a=r+e+1,s=a+1;o.push(r,a,i,i,a,s)}a.setIndex(o);let s=Zn(n);this.u=s.uniforms,this.mesh=new P(a,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,this.mesh.visible=!1,this.mesh.matrixAutoUpdate=!1}set kind(e){this.u.uKind.value=e}place(e,t,n,r,i,a,o,s,c,l=!1){let u=Math.hypot(n,r)||1,d=n/u,f=r/u,p=f,m=-d,h=this.pos,g=this.cols,_=this.rows,v=l?c(e,t)+Qn:0,y=0;for(let n=0;n<=_;n++){let r=o+(s-o)*n/_;for(let n=0;n<=g;n++){let o=i+(a-i)*n/g,s=e+p*o+d*r,u=t+m*o+f*r;h[y++]=s,h[y++]=l?v:c(s,u)+Qn,h[y++]=u}}this.attr.needsUpdate=!0,this.u.uAnchor.value.set(e,t),this.u.uFwd.value.set(d,f),this.mesh.visible=!0}hide(){this.mesh.visible=!1}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},er=.7,tr=class{capacity;mesh;u;count=0;m=new L;constructor(e,t){this.capacity=e;let n=new et(2,2).rotateX(-Math.PI/2),r=Zn(t,!0);this.u=r.uniforms,this.u.uKind.value=B.hit,this.u.uA.value.set(er,0,0,0),this.mesh=new E(n,r,e),this.mesh.instanceMatrix.setUsage(de),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.mesh.count=0,this.mesh.visible=!1}begin(){this.count=0}add(e,t,n,r){if(this.count>=this.capacity)return;let i=(n+.35)/er;this.m.makeScale(i,1,i).setPosition(e,r(e,t)+.18,t),this.mesh.setMatrixAt(this.count++,this.m)}end(){this.mesh.count=this.count,this.mesh.visible=this.count>0,this.count>0&&(this.mesh.instanceMatrix.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},nr=e=>new I(e),V={you:{fill:nr(16753940),edge:nr(16768858),hot:nr(16734746)},ally:{fill:nr(3116287),edge:nr(10148095),hot:nr(7332095)},bad:{fill:nr(16721446),edge:nr(16747130),hot:nr(16721446)},ult:nr(16732042),range:nr(16774360),hitEnemy:{fill:nr(16722452),edge:nr(16756874)},hitAlly:{fill:nr(2792703),edge:nr(12576511)},lockEnemy:nr(16733490),lockAlly:nr(6735103),attack:{ring:nr(16770756),target:nr(16723502),targetEdge:nr(16765640),preview:nr(16756896),chevron:nr(16767180)}},rr=class{group=new tt;ground=()=>0;units=null;showRange=!0;showHits=!0;range;main;landing;link;target;lock;arc;hits;decals;f=$t();live=!1;alpha=0;fade=`none`;bad=0;cancel=0;pop=0;lastTarget=0;fill=new I;edge=new I;hot=new I;tmp=new I;constructor(e=!1){let t=e?.4:1,n=e=>Math.max(2,Math.round(e*t));this.range=new $n(n(24),n(24),e,2),this.main=new $n(n(16),n(32),e,3),this.landing=new $n(n(10),n(10),e,4),this.link=new $n(1,n(24),e,4),this.target=new $n(n(8),n(8),e,4),this.lock=new $n(4,4,e,5),this.arc=new qn(e),this.hits=new tr(24,e),this.decals=[this.range,this.main,this.landing,this.link,this.target,this.lock];for(let e of this.decals)this.group.add(e.mesh);this.group.add(this.arc.mesh,this.hits.mesh)}get current(){return this.live||this.fade!==`none`?this.f:null}show(e,t=`hide`){e&&e.visible?(this.live||(this.alpha=this.fade===`none`?0:this.alpha,this.bad=+(e.state===`invalid`),this.cancel=+(e.state===`cancel`)),e.locked&&e.targetId!==this.lastTarget&&(this.pop=1),this.lastTarget=e.locked?e.targetId:0,en(this.f,e),this.live=!0,this.fade=`none`):this.live&&(this.live=!1,this.fade=t,t===`cancel`&&(this.cancel=1))}setWarm(e){for(let t of this.decals)t.mesh.visible=e;this.arc.mesh.visible=e,this.hits.mesh.visible=e}clear(){this.live=!1,this.fade=`none`,this.alpha=0,this.hideAll()}hideAll(){for(let e of this.decals)e.hide();this.arc.hide(),this.hits.begin(),this.hits.end()}update(e,t){if(this.live?this.alpha=Math.min(1,this.alpha+t/.09):this.fade!==`none`&&(this.alpha-=t/(this.fade===`cast`?.16:this.fade===`cancel`?.24:.12),this.alpha<=0&&(this.alpha=0,this.fade=`none`)),!this.live&&this.fade===`none`){this.hideAll();return}let n=this.f,r=Math.min(1,t*14);this.live&&(this.bad+=(+(n.state===`invalid`)-this.bad)*r,this.cancel+=(+(n.state===`cancel`)-this.cancel)*r),this.pop=Math.max(0,this.pop-t*4.5);let i=this.fade===`cast`,a=n.tint===`ally`?V.ally:V.you,o=Math.max(this.bad,this.cancel);this.fill.copy(a.fill).lerp(V.bad.fill,o),this.edge.copy(a.edge).lerp(V.bad.edge,o),this.hot.copy(n.ult||n.global?V.ult:a.hot).lerp(V.bad.hot,o),n.empowered&&this.edge.lerp(this.tmp.setRGB(1,1,1),.35),n.recast&&this.hot.copy(V.ally.edge);let s=n.ult||n.global?1:n.recast?.6:0,c=this.alpha*(i?1.15:1);for(let t of this.decals){let n=t.u;n.uTime.value=e,n.uAlpha.value=c,n.uFill.value.copy(this.fill),n.uEdge.value.copy(this.edge),n.uHot.value.copy(this.hot),n.uState.value.set(this.bad,this.cancel,s,0),n.uCharge.value.set(-1,0),t.hide()}this.arc.hide();let l=this.ground,u=n.fromX,d=n.fromZ;if(this.showRange&&n.range>0){let e=n.range+.5,t=this.range;t.kind=B.range,t.u.uA.value.set(e,0,0,0),t.u.uFill.value.copy(V.range).lerp(this.fill,.25),t.u.uEdge.value.copy(V.range).lerp(this.edge,.3),t.u.uAlpha.value=c*.85,t.place(u,d,0,1,-e-.3,e+.3,-e-.3,e+.3,l)}let f=n.x,p=n.z;if(n.targetId&&this.units){let e=this.units.positionOf(n.targetId);e&&(f=e.x,p=e.z)}let m=this.main,h=n.dirX,g=n.dirZ;switch(n.shape){case`circle`:case`ring`:case`self`:{let e=n.shape===`circle`?n.locked?f:n.x:u,t=n.shape===`circle`?n.locked?p:n.z:d,r=Math.max(.3,n.radius),i=Math.max(r,n.maxRadius);m.kind=n.shape===`circle`?n.global?B.global:B.circle:n.shape===`ring`?B.ring:B.self,m.u.uA.value.set(r,0,0,0),(n.charge>=0||n.maxRadius>r)&&m.u.uCharge.value.set(Math.max(0,n.charge),n.maxRadius);let a=i*(n.global?1.3:1)+.4;m.place(e,t,0,1,-a,a,-a,a,l);break}case`line`:{let e=Math.max(.6,n.length),t=Math.max(.3,n.width),r=Math.min(e*.35,Math.max(.8,Math.min(2,t*.45+.55)));m.kind=B.line,m.u.uA.value.set(e,t,.55,r),(n.charge>=0||n.maxLength>e)&&m.u.uCharge.value.set(n.charge,n.maxLength);let i=t/2+.75+t*.15;m.place(u,d,h,g,-i,i,0,Math.max(e,n.maxLength)+.15,l),n.endRadius>0&&this.circleAt(this.landing,n.x,n.z,n.endRadius,B.circle,c);break}case`cone`:{let e=Math.max(.6,n.length),t=Math.min(359,n.angle)*Math.PI/360;m.kind=B.cone,m.u.uA.value.set(e,t,0,0),n.charge>=0&&m.u.uCharge.value.set(n.charge,n.maxLength);let r=(t>=Math.PI/2?e:e*Math.sin(t))+.35,i=t>=Math.PI/2?-e*Math.min(1,-Math.cos(t)+.01)-.35:-.35;m.place(u,d,h,g,-r,r,i,e+.35,l);break}case`dash`:{let e=Math.max(.4,Math.hypot(n.endX-u,n.endZ-d)),t=Math.max(.9,n.width);m.kind=B.dash,m.u.uA.value.set(e,t,.5,0),m.place(u,d,h,g,-t/2-.4,t/2+.4,0,e+.4,l),this.landingAt(n.endX,n.endZ,n.radius,c);break}case`blink`:{let e=Math.hypot(n.endX-u,n.endZ-d);m.kind=B.blink,m.u.uA.value.set(e,0,0,0),e>.5&&m.place(u,d,n.endX-u,n.endZ-d,-.35,.35,0,e,l),this.landingAt(n.endX,n.endZ,n.radius,c);break}case`leap`:case`arc`:{let t=n.locked?f:n.endX,r=n.locked?p:n.endZ,i=Math.hypot(t-u,r-d);this.arc.place(u,d,t,r,Math.min(3.4,.8+i*.28),n.shape===`leap`?.42:.3,l,this.edge,c,e),this.landingAt(t,r,n.radius,c);break}case`target`:{let e=n.targetId!==0,t=e?f:n.x,r=e?p:n.z,i=t-u,a=r-d,o=Math.hypot(i,a),s=Math.max(.2,o-(e?n.targetRadius+.35:.4)),h=this.link;if(h.kind=B.link,h.u.uA.value.set(s,.55,0,0),o>.6&&h.place(u,d,i,a,-.25,.25,0,s,l),e){let e=this.target;e.kind=B.target,e.u.uA.value.set(n.targetRadius+.45,0,0,0),e.u.uState.value.w=this.pop;let i=n.targetRadius+1.2;e.place(t,r,0,1,-i,i,-i,i,l,!0),n.radius>0&&this.circleAt(m,t,r,n.radius,B.circle,c)}else this.circleAt(this.landing,t,r,.6,B.landing,c);break}}if(n.locked&&n.targetId&&n.shape!==`target`){let e=this.lock;e.kind=B.lock;let t=n.targetRadius+.55;e.u.uA.value.set(t,0,0,0),e.u.uState.value.w=this.pop,e.u.uEdge.value.copy(n.tint===`ally`?V.lockAlly:V.lockEnemy).lerp(V.bad.edge,o*.5);let r=t*2+.6;e.place(f,p,0,1,-r,r,-r,r,l,!0)}let _=this.hits;if(_.begin(),this.showHits&&this.units&&n.state!==`cancel`){let t=n.tint===`ally`?V.hitAlly:V.hitEnemy;_.u.uFill.value.copy(t.fill),_.u.uEdge.value.copy(t.edge),_.u.uTime.value=e,_.u.uAlpha.value=c*(n.state===`invalid`?.45:1);for(let e=0;e<n.hitCount;e++){let t=n.hits[e],r=this.units.positionOf(t);r&&_.add(r.x,r.z,n.hitR[e],l)}}_.end()}circleAt(e,t,n,r,i,a){e.kind=i,e.u.uA.value.set(r,0,0,0),e.u.uAlpha.value=a;let o=r+.4;e.place(t,n,0,1,-o,o,-o,o,this.ground)}landingAt(e,t,n,r){n>.3?this.circleAt(this.landing,e,t,n,B.circle,r):this.circleAt(this.landing,e,t,.8,B.landing,r)}dispose(){for(let e of this.decals)e.dispose();this.arc.dispose(),this.hits.dispose()}},ir={},ar=`rgba(36,6,4,0.9)`;function or(e){let t=ir[e];if(t)return t;let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);if(r.lineCap=`round`,r.lineJoin=`round`,e===`brackets`){let e=(e,t)=>{r.strokeStyle=t,r.lineWidth=e;for(let[e,t,n,i]of[[14,14,1,1],[114,14,-1,1],[14,114,1,-1],[114,114,-1,-1]])r.beginPath(),r.moveTo(e,t+i*30),r.lineTo(e,t+i*6),r.quadraticCurveTo(e,t,e+n*6,t),r.lineTo(e+n*30,t),r.stroke()};e(17,ar),e(9,`#ffffff`)}else{let e=()=>{r.beginPath(),r.moveTo(25.6,28.16),r.lineTo(102.4,28.16),r.lineTo(64,99.84),r.closePath()};e(),r.strokeStyle=ar,r.lineWidth=16,r.stroke(),e(),r.fillStyle=`#ffffff`,r.fill()}let i=new De(n);return i.colorSpace=Te,i.anisotropy=2,ir[e]=i,i}var sr=class{sprite;mat;constructor(e=`brackets`,t=6){this.mat=new y({map:or(e),color:16777215,transparent:!0,depthTest:!1,depthWrite:!1}),this.sprite=new Re(this.mat),this.sprite.renderOrder=t,this.sprite.visible=!1}show(e,t,n,r,i,a,o){this.sprite.position.set(e,t,n),this.sprite.scale.set(r,r,1),this.mat.color.copy(i),this.mat.opacity=a,this.mat.rotation=o,this.sprite.visible=a>.005}hide(){this.sprite.visible=!1}dispose(){this.mat.dispose()}},cr=class{world;group=new tt;targeter;ground=()=>0;units=null;held=!1;enabled=!0;aiming=!1;rangeRing;ring;link;chevrons;reticle=new sr(`brackets`,7);arrow=new sr(`arrow`,7);burst=new sr(`brackets`,7);shownId=0;shownBold=!1;switchT=1;bold=0;alpha=0;last={x:0,y:0,z:0};burstT=1;burstPos={x:0,y:0,z:0};col=new I;constructor(e,t=!1){this.world=e,this.targeter=new _(e),this.rangeRing=new $n(t?10:24,t?10:24,t,2),this.ring=new $n(t?4:8,t?4:8,t,4),this.link=new $n(1,t?10:20,t,4),this.chevrons=new $n(1,t?10:24,t,4),this.group.add(this.rangeRing.mesh,this.ring.mesh,this.link.mesh,this.chevrons.mesh,this.reticle.sprite,this.arrow.sprite,this.burst.sprite)}lock(e){this.targeter.lock(e)}pick(e,t=`auto`){return this.targeter.pick(e,t)}setWarm(e){for(let t of this.group.children)t.visible=e}hideAll(){this.rangeRing.hide(),this.ring.hide(),this.link.hide(),this.chevrons.hide(),this.reticle.hide(),this.arrow.hide()}update(e,t,n,r){let i=this.world.caster,a=this.targeter.update(n,r?i.attackTargetId:0);if(this.updateBurst(t),!this.enabled||!r){this.hideAll(),this.shownId=0;return}let o=a.attacking||this.held&&a.targetId!==0,s=this.held||a.attacking,c=a.targetId;this.shownId&&c!==this.shownId&&this.shownBold&&!this.unitAlive(this.shownId)&&(this.burstT=0,this.burstPos.x=this.last.x,this.burstPos.y=this.last.y,this.burstPos.z=this.last.z),c!==this.shownId&&(this.switchT=this.shownId?0:.5,this.shownId=c),this.switchT=Math.min(1,this.switchT+t*4),this.bold+=(+!!o-this.bold)*Math.min(1,t*12),this.shownBold=o;let l=this.ground,u=+!!s;if(this.alpha+=(u-this.alpha)*Math.min(1,t*12),n.attackRangeRing&&this.alpha>.02){let t=i.attackRange+i.radius,n=this.rangeRing;n.kind=B.range,n.u.uA.value.set(t,0,0,0),n.u.uFill.value.copy(V.attack.ring),n.u.uEdge.value.copy(V.attack.ring),n.u.uAlpha.value=this.alpha*.9,n.u.uTime.value=e,n.u.uState.value.set(0,0,0,0),n.u.uCharge.value.set(-1,0),n.place(i.x,i.z,0,1,-t-.3,t+.3,-t-.3,t+.3,l)}else this.rangeRing.hide();let d=c&&this.units?this.units.positionOf(c):null,f=!o&&!this.aiming&&n.attackPreview&&a.inRange;if(!d||!o&&!f){this.ring.hide(),this.link.hide(),this.chevrons.hide(),this.reticle.hide(),this.arrow.hide();return}let p=this.units?.heightOf?.(c)??2,m=1-this.switchT,h=this.bold;this.col.copy(V.attack.preview).lerp(V.attack.target,h);let g=Math.max(1.3,p*1.05+.35)*(.86+.14*h)*(1+m*.9),_=d.y+p*.5;if(this.last.x=d.x,this.last.y=_,this.last.z=d.z,this.reticle.show(d.x,_,d.z,g,this.col,(.45+.55*h)*(1-m*.5),m*1.6),h>.05?this.arrow.show(d.x,d.y+p+1.3+Math.sin(e*6)*.09,d.z,.78*(1+m*.6),V.attack.target,h,0):this.arrow.hide(),!o){this.ring.hide(),this.link.hide(),this.chevrons.hide();return}let v=this.unitRadius(c),y=this.ring;y.kind=B.target,y.u.uA.value.set(v+.4,0,0,0),y.u.uFill.value.copy(V.attack.target),y.u.uEdge.value.copy(V.attack.targetEdge),y.u.uAlpha.value=h,y.u.uTime.value=e,y.u.uState.value.set(0,0,0,m),y.u.uCharge.value.set(-1,0);let b=v+1.2;y.place(d.x,d.z,0,1,-b,b,-b,b,l,!0);let x=d.x-i.x,S=d.z-i.z,C=Math.hypot(x,S)-v-.35;if(C<.6){this.link.hide(),this.chevrons.hide();return}let w=a.inRange?this.link:this.chevrons;(a.inRange?this.chevrons:this.link).hide(),w.kind=a.inRange?B.link:B.chevrons,w.u.uA.value.set(C,i.radius+.1,0,0),w.u.uEdge.value.copy(a.inRange?V.attack.target:V.attack.chevron),w.u.uAlpha.value=h*(a.inRange?.75:1),w.u.uTime.value=e,w.place(i.x,i.z,x,S,a.inRange?-.2:-.45,a.inRange?.2:.45,0,C,l)}updateBurst(e){if(this.burstT>=1){this.burst.hide();return}this.burstT=Math.min(1,this.burstT+e/.5);let t=this.burstT;this.burst.show(this.burstPos.x,this.burstPos.y,this.burstPos.z,2.2*(1+t*1.4),V.attack.target,(1-t)*(1-t),t*1.2)}unitAlive(e){let t=this.world;for(let n=0;n<t.count;n++)if(t.units[n].id===e)return!0;return!1}unitRadius(e){let t=this.world;for(let n=0;n<t.count;n++)if(t.units[n].id===e)return t.units[n].radius;return .5}dispose(){this.rangeRing.dispose(),this.ring.dispose(),this.link.dispose(),this.chevrons.dispose(),this.reticle.dispose(),this.arrow.dispose(),this.burst.dispose()}},lr=(e,t)=>new j({color:e,transparent:!0,opacity:t,depthWrite:!1,side:2}),ur=class{group=new tt;world=m();view;aim;attack;marker=new P(new Pe(.3,.45,24).rotateX(-Math.PI/2),lr(6160266,.9));markerAt=-99;ground=()=>0;heroId=0;fullVision=!1;lastTime=-1;magicOf=``;magic=!1;legacy={name:`preview`,shape:`circle`,targeting:`point`,range:0,length:0,width:1,radius:1,angle:60,endRadius:0,stopsAtWalls:!1,crossesWalls:!1,minRange:0,filter:`enemy`,kinds:15,ult:!1,global:!1,charge:null,recast:!1,hasRecast:!1,channel:!1,source:`data`};constructor(e=`high`){let t=e===`low`;this.view=new rr(t),this.aim=new Un(this.view,this.world),this.attack=new cr(this.world,t),this.marker.visible=!1,this.marker.renderOrder=2,this.group.add(this.marker,this.view.group,this.attack.group)}get groundY(){return this.ground}set groundY(e){this.ground=e,this.view.ground=e,this.attack.ground=e}attach(e){if(e.walls!==void 0&&(this.world.walls=e.walls),e.units){let t=e.units;this.view.units=t,this.attack.units=t,this.aim.anchor=e=>t.positionOf(e)}e.fullVision!==void 0&&(this.fullVision=e.fullVision,this.attack.enabled=!e.fullVision)}setLocalHero(e){this.heroId=e}showMoveMarker(e,t,n,r=!1){this.marker.position.set(e,this.ground(e,t)+.06,t),this.marker.material.color.setHex(r?16734810:6160266),this.markerAt=n}showAim(e,t=`hide`){this.view.show(e,t)}setAim(e){if(!e){this.aim.legacySpec&&(this.aim.legacySpec=null,this.view.show(null,`hide`));return}if(this.aim.active)return;let t=this.legacy;t.targeting=e.kind,t.range=t.length=e.range,t.width=e.width??1,t.radius=e.radius??0,t.shape=e.kind===`none`?t.radius>0?`ring`:`self`:e.kind===`direction`?`line`:e.kind===`unit`?`target`:`circle`,e.kind===`unit`&&(t.radius=0),e.kind===`none`&&!t.radius&&(t.radius=1.3),this.aim.legacySpec=t,this.aim.point(e.x,e.z)}setWarm(e){this.view.setWarm(e),this.attack.setWarm(e)}update(e,t,n){let r=n??(this.lastTime<0?1/60:Math.min(.1,Math.max(0,e-this.lastTime)));this.lastTime=e;let i=e-this.markerAt;this.marker.visible=i<.45,this.marker.visible&&this.marker.scale.setScalar(1.6-i*2);let a=t&&this.heroId?g(this.world,t,this.heroId,this.fullVision):null;a?.hero&&a.hero.defId!==this.magicOf&&(this.magicOf=a.hero.defId,this.magic=this.aim.heroDef(a.hero.defId)?.role===`mage`),this.world.caster.magic=this.magic,this.aim.sync(t??null,a),this.attack.aiming=this.aim.active!==null||this.aim.legacySpec!==null,this.view.update(e,r),this.attack.update(e,r,this.aim.settings,!!a&&!a.dead&&!this.fullVision)}dispose(){this.view.dispose(),this.attack.dispose(),this.marker.geometry.dispose(),this.marker.material.dispose()}},dr=6965808;function fr(e,t,n,r,i,a,o){e.ellipsoid(t,n,r,i,a,i,o[0]),e.paint((e,t,n,r)=>{if(r===dr)return null;let i=(e*7+t*13+n*5)%9;return i===0?o[1]:i===4?o[2]??o[1]:null})}function pr(e,t){return n=>{switch(n.part(`body`),e){case`oak`:{let e=7+t*2;n.cylinder(0,0,0,1.8,e,dr),n.line(0,e-2,0,4,e+2,1,dr,{radius:.8}),fr(n,0,e+4,0,7+t,4.5,[4028981,5215296,3107372]),fr(n,4,e+3,2,4,3,[4622906,5939272]);break}case`pine`:case`snowpine`:{let r=4+t;n.cylinder(0,0,0,1.4,r+14,dr);let i=e===`snowpine`?2972228:2908984;for(let e=0;e<4;e++)n.cone(0,r+e*3.5,0,7-e*1.4,5,e%2?i:3502660);e===`snowpine`&&n.paint((e,t,n,i)=>i!==dr&&t>r&&(e*3+n*5+t)%4==0?15922943:null);break}case`birch`:{let e=10+t*2;n.cylinder(0,0,0,1.2,e,15262420),n.paint((e,t,n,r)=>r===15262420&&(t*3+e)%5==0?3814704:null),fr(n,0,e+2,0,5,5,[9224010,10933082,7776318]);break}case`willow`:n.cylinder(0,0,0,1.8,8,dr),fr(n,0,11,0,7,3.5,[6265416,7778394]);for(let e=0;e<10;e++){let t=e/10*Math.PI*2,r=Math.round(Math.cos(t)*6),i=Math.round(Math.sin(t)*6);n.line(r,11,i,r,4+e%3,i,e%2?6989394:5540416)}break;case`palm`:n.line(0,0,0,2+t,14,1,9071170,{radius:1});for(let e=0;e<6;e++){let r=e/6*Math.PI*2+t;n.line(2+t,15,1,2+t+Math.round(Math.cos(r)*7),11,1+Math.round(Math.sin(r)*7),5216826,{radius:.7})}n.sphere(2+t,14,1,1.5,6965800);break;case`cactus`:n.cylinder(0,0,0,2,12+t*2,6262590),n.line(0,6,0,5,6,0,6262590,{radius:1.2}),n.line(5,6,0,5,10,0,6262590,{radius:1.2}),t&&(n.line(0,8,0,-4,8,0,6262590,{radius:1.2}),n.line(-4,8,0,-4,11,0,6262590,{radius:1.2})),n.sphere(0,13+t*2,0,1.2,16748464);break;case`deadwood`:n.line(0,0,0,0,11,0,5917248,{radius:1.3}),n.line(0,7,0,4,11,2,5917248,{radius:.7}),n.line(0,9,0,-4,13,-1,5917248,{radius:.6}),n.line(0,5,0,-3,7,3,4864562,{radius:.5});break;case`mushroom`:n.cylinder(0,0,0,1.6,7+t*2,15260864),n.ellipsoid(0,9+t*2,0,6,2.5,6,t?13191754:9067208),n.paint((e,t,n,r)=>r!==15260864&&(e*5+n*3)%7==0&&t>8?16773848:null);break;case`crystal`:n.cylinder(0,0,0,1.4,6,4868698),n.cone(0,6,0,4,9+t*2,10479871,{emissive:.55}),n.cone(3,4,1,2,6,13086975,{emissive:.6})}}}function mr(e,t){return n=>{n.part(`body`),n.ellipsoid(0,2,0,5-t,3,4,e),n.ellipsoid(2,4,1,3,2.5,3,n.shade(e,.12)),t&&n.ellipsoid(-3,1,2,2.5,2,2.5,n.shade(e,-.1)),n.paint((e,t,r,i)=>(e+t*3+r*7)%6==0?n.shade(i,-.15):null)}}function hr(e,t,n){return r=>{r.part(`body`),n===0?(r.box(-4,0,-4,4,2,4,r.shade(e,-.1)),r.cylinder(0,2,0,3,13,e),r.carve(0,12,-3,3,15,3),r.box(4,0,2,7,3,5,e)):(r.box(-9,0,-2,-6,16,2,e),r.box(6,0,-2,9,11,2,e),r.box(-9,16,-2,2,18,2,r.shade(e,.08))),r.paint((e,n,i,a)=>n<6&&(e*5+n+i*3)%4==0?t:(e+n+i)%5==0?r.shade(a,-.12):null)}}function gr(e,t){return n=>{n.part(`body`),n.cylinder(0,0,0,.8,24,5917242),n.sphere(0,25,0,1.4,14201946),n.box(1,9,0,9,22,0,e),n.box(1,21,0,9,22,0,t,{emissive:.4}),n.box(4,13,0,6,17,0,t,{emissive:.6}),n.carve(4,9,0,6,10,0)}}function _r(e,t){return n=>{n.part(`body`),n.ellipsoid(0,1,0,4,1.5,4,4868693),n.cone(0,1,0,2.2,10+t*3,e,{emissive:.75}),n.cone(2,1,1,1.5,6,n.shade(e,.2),{emissive:.6}),n.cone(-2,1,-1,1.3,7,n.shade(e,-.1),{emissive:.6})}}function vr(e,t){return n=>{n.part(`body`),n.ellipsoid(0,3,0,6,4+t,6,e),n.ellipsoid(3,5,2,3.5,3,3.5,n.shade(e,.12)),n.ellipsoid(-3,4,-2,3.5,3,3.5,n.shade(e,-.08)),n.paint((e,r,i,a)=>{let o=(e*7+r*11+i*3)%13;return o===0?n.shade(a,.25):o===6?n.shade(a,-.2):o===9&&r>4?t?16765670:16774048:null})}}function yr(e,t){return n=>{n.part(`body`);let r=e.palette.ground;switch(e.groundStyle){case`grass`:case`moss`:{let i=[16769126,16743080,16777215,10467583,16751178];for(let a=0;a<4;a++){let o=Math.round((n.rand()-.5)*10),s=Math.round((n.rand()-.5)*10),c=2+Math.floor(n.rand()*3);n.line(o,0,s,o,c,s,n.shade(r,-.1)),(t===0||e.groundStyle===`moss`)&&n.set(o,c+1,s,e.groundStyle===`moss`?13150463:i[(a+Math.floor(n.rand()*5))%5])}break}case`sand`:for(let e=0;e<3;e++)n.ellipsoid(Math.round((n.rand()-.5)*8),0,Math.round((n.rand()-.5)*8),1.4,1,1.2,e?12099706:10126438);break;case`snow`:n.ellipsoid(0,0,0,4,1.6,3,16054527),n.ellipsoid(3,0,2,2,1,2,15134456);break;case`ash`:for(let e=0;e<3;e++)n.set(Math.round((n.rand()-.5)*8),0,Math.round((n.rand()-.5)*8),e?16738858:3813424,e?{emissive:.8}:{})}}}function br(e){return t=>{t.part(`body`),t.cylinder(0,0,0,9,1,6974068),t.cylinder(0,1,0,7,0,4868692);for(let n=0;n<3;n++){let r=-4+n*4;t.line(-4,1,r-2,0,1,r+1,e,{emissive:1}),t.line(4,1,r-2,0,1,r+1,e,{emissive:1})}}}function xr(e){return t=>{t.part(`body`),t.cylinder(0,0,0,6,2,t.shade(e,-.1)),t.cylinder(0,2,0,4,3,e),t.mirrorX(n=>n.box(4,0,-1,6,7,1,t.shade(e,.1)))}}function Sr(){return e=>{e.part(`body`),e.cylinder(0,0,0,5,14,9075302),e.cone(0,14,0,5,5,10127988),e.paint((t,n,r,i)=>(t*3+n+r*5)%5==0?e.shade(i,-.18):n%4==0?e.shade(i,.08):null)}}function Cr(e,t,n){let r=e.getAttribute(`position`).array,i=e.index.array,a=Math.max(1,Math.ceil(t/n)),o=Array.from({length:a*a},()=>[]);for(let e=0;e<i.length;e+=3){let t=i[e]*3,s=i[e+1]*3,c=i[e+2]*3,l=(r[t]+r[s]+r[c])/3,u=(r[t+2]+r[s+2]+r[c+2])/3,d=Math.min(a-1,Math.max(0,Math.floor(l/n)));o[Math.min(a-1,Math.max(0,Math.floor(u/n)))*a+d].push(i[e],i[e+1],i[e+2])}let s=r.length/3>65535,c=[],l=new qe,u=new O;for(let t of o){if(t.length===0)continue;let n=new F;for(let t of Object.keys(e.attributes))n.setAttribute(t,e.getAttribute(t));n.setIndex(new A(s?Uint32Array.from(t):Uint16Array.from(t),1)),l.makeEmpty();for(let e=0;e<t.length;e++)l.expandByPoint(u.fromArray(r,t[e]*3));n.boundingBox=l.clone(),n.boundingSphere=l.getBoundingSphere(new T),c.push(n)}return c}function H(e,t){let n=e*374761393+t*668265263|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n&65535)/65535}function wr(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=e=>e*e*(3-2*e),s=H(n,r),c=H(n+1,r),l=H(n,r+1),u=H(n+1,r+1);return s+(c-s)*o(i)+(l-s)*o(a)+(s-c-l+u)*o(i)*o(a)}function Tr(e,t,n){let r=Math.max(0,Math.min(1,n)),i=(e>>16&255)*(1-r)+(t>>16&255)*r,a=(e>>8&255)*(1-r)+(t>>8&255)*r,o=(e&255)*(1-r)+(t&255)*r;return Math.round(i)<<16|Math.round(a)<<8|Math.round(o)}var Er=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Dr={haste:8388564,heal:8257434,power:16757575,shield:12577023},Or=`
varying vec2 vW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,kr=`
uniform sampler2D uMask;
uniform float uSize;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uDeep;
uniform vec3 uFoam;
uniform float uStyle; // 0 water, 1 lava, 2 ice
uniform float uAlpha;
varying vec2 vW;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
void main() {
  vec2 cell = floor(vW * 2.0) / 2.0 + 0.25;
  vec4 m = texture2D(uMask, cell / uSize);
  if (m.r < 0.5) discard;
  float t = uTime * (uStyle > 0.5 && uStyle < 1.5 ? 0.35 : 1.0);
  float w = vnoise(cell * 0.35 + vec2(t * 0.25, t * 0.18)) * 0.65 + vnoise(cell * 0.9 - vec2(t * 0.4, 0.0)) * 0.35;
  vec3 col = mix(uDeep, uColor, uStyle > 1.5 ? 0.75 + 0.1 * w : 0.35 + 0.5 * w);
  float shore = m.g;
  // Foam: drifting patches along the banks only (voxel-quantized noise, no regular stripes).
  float n = vnoise(cell * 0.55 + vec2(t * 0.35, -t * 0.22));
  float foam = uStyle > 1.5 ? shore * 0.45 : step(0.9, shore) * smoothstep(0.45, 0.75, n) * 0.75 + step(0.4, shore) * step(shore, 0.6) * smoothstep(0.75, 0.9, n) * 0.35;
  col = mix(col, uFoam, foam);
  gl_FragColor = vec4(col, uStyle > 0.5 ? 1.0 : uAlpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Ar=`
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uLava;
varying vec2 vW;
void main() {
  vec2 c = floor(vW * 2.0) / 2.0;
  float n = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  float pulse = sin(uTime * (uLava > 0.5 ? 1.6 : 0.8) + n * 6.283) * 0.5 + 0.5;
  vec3 col = mix(uColor, uColor2, pulse * (uLava > 0.5 ? 0.8 : 0.4) * step(0.35, n));
  gl_FragColor = vec4(col, uLava > 0.5 ? 0.92 : 0.5);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,jr=class{group=new tt;map;def;theme;res;heights;wallDist;high;lod;animated=[];bushes=new Map;pads=[];shrines=new Map;walls=new Map;insideBush=new Set;props=new Map;constructor(e,t){this.def=e,this.theme=e.theme,this.map=new kt(e),this.high=t.level===`high`,this.lod=!this.high,this.res=t.fineTerrain?2:1;let n=e.size*this.res;this.heights=new Float32Array(n*n),this.wallDist=this.computeWallDistance(),this.buildTerrain(),this.buildSkirt(),this.buildLiquid(),this.buildHazards(),this.buildProps(),this.buildBushes(),this.buildFeatures()}heightAt(e,t){let n=this.def.size*this.res,r=Math.min(n-1,Math.max(0,Math.floor(e*this.res))),i=Math.min(n-1,Math.max(0,Math.floor(t*this.res)));return this.heights[i*n+r]}cell(e,t){let n=this.def.size;return e<0||t<0||e>=n||t>=n?0:this.map.terrain[t*n+e]}computeWallDistance(){let e=this.def.size,t=new Uint8Array(e*e).fill(8),n=[];for(let r=0;r<e*e;r++)this.map.terrain[r]!==0&&(t[r]=0,n.push(r));for(let r=0;r<n.length;r++){let i=n[r],a=i%e,o=i/e|0;for(let r=-1;r<=1;r++)for(let s=-1;s<=1;s++){let c=a+s,l=o+r;if(c<0||l<0||c>=e||l>=e)continue;let u=l*e+c;t[u]>t[i]+1&&(t[u]=t[i]+1,n.push(u))}}return t}distAt(e,t){let n=this.def.size;return e<0||t<0||e>=n||t>=n?8:this.wallDist[t*n+e]}isLaneEdge(e,t){for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){let i=this.cell(e+r,t+n);if(i!==2&&i!==4)return!0}return!1}hazardKind(e,t){for(let n of this.def.hazards)if(Ct(n.zone,e,t))return n.kind;return null}cellInfo(e,t){let n=this.theme.palette,r=Math.floor(e),i=Math.floor(t),a=this.cell(r,i),o=H(Math.floor(e*4),Math.floor(t*4)),s=wr(e*.18,t*.18);switch(a){case 0:{let a=this.distAt(r,i),s=wr(e*.3,t*.3)*.7+wr(e*1.1,t*1.1)*.3,c=a<=1?.7+s*.5:a===2?1.35+s*.6:1.85+Math.min(a-3,3)*.28+s*.9,l=Math.round(c*4)/4,u=(a<=1?s>.45:s>.78)?z(n.cliff,.12+(o-.5)*.1):z(Tr(n.cliffTop,z(n.cliffTop,-.18),s),(o-.5)*.08),d=Math.floor(l*4)%2==0?.04:-.06;return{h:l,color:u,side:z(n.cliff,d+(o-.5)*.06)}}case 7:return{h:-1.1,color:z(n.liquid,-.62),side:z(n.cliff,-.25)};case 3:return{h:-.35,color:z(Tr(n.liquid,n.lane,.35),-.35+(o-.5)*.08),side:z(n.lane,-.35)};case 2:{if(this.isLaneEdge(r,i)){let r=H(Math.floor(e*2)*3+11,Math.floor(t*2)*7+5),i=r<.18,a=i?z(n.lane,-.22):z(n.laneEdge,(r-.55)*.22);return{h:i?.02:.06+(r>.7?.05:0),color:a,side:z(n.laneEdge,-.32)}}let a=Tr(n.lane,z(n.lane,-.14),s);return{h:0,color:this.tint(e,t,z(a,(o-.5)*.1)),side:z(n.lane,-.3)}}case 4:{let r=this.def.fountains[0],i=this.def.fountains[1],a=Math.hypot(e-r.x,t-r.z)<Math.hypot(e-i.x,t-i.z)?n.baseBlue??10727628:n.baseRed??13413026,s=Math.floor(e*2)%4==0||Math.floor(t*2)%4==0;return{h:0,color:z(a,(s?-.12:0)+(o-.5)*.06),side:z(a,-.3)}}case 5:{let r=(Math.floor(Math.hypot(e-.5,t-.5))+Math.floor(e)+Math.floor(t))%3==0;return{h:0,color:z(n.cliff,(r?.18:.1)+(o-.5)*.08),side:z(n.cliff,-.3)}}case 6:return{h:0,color:this.tint(e,t,z(Tr(n.groundAlt,n.lane,.35+s*.3),(o-.5)*.12)),side:z(n.groundAlt,-.3)};default:{let r=Tr(n.ground,n.groundAlt,s*1.4-.2),i=this.map.bushAt(e,t)>0;return{h:0,color:this.tint(e,t,z(i?z(r,-.18):r,(o-.5)*.12)),side:z(r,-.3)}}}}tint(e,t,n){let r=this.def.hazards.length?this.hazardKind(e,t):null;return r===`lava`?Tr(n,3023392,.85):r===`ice`?Tr(n,14085368,.75):r===`meteor`?Tr(n,3813420,.35+H(Math.floor(e*2),Math.floor(t*2))*.25):n}buildTerrain(){let e=this.res,t=this.def.size*e,n=1/e,r=new Uint32Array(t*t),i=new Uint32Array(t*t);for(let e=0;e<t;e++)for(let a=0;a<t;a++){let o=this.cellInfo((a+.5)*n,(e+.5)*n);this.heights[e*t+a]=o.h,r[e*t+a]=o.color,i[e*t+a]=o.side}let a=[],o=[],s=[],c=[],l=(e,n)=>e<0||n<0||e>=t||n>=t?-2:this.heights[n*t+e],u=(e,t)=>{s.push(Er((e>>16&255)/255)*t,Er((e>>8&255)/255)*t,Er((e&255)/255)*t)},d=(e,t,n,r)=>{let i=a.length/3;e.forEach((e,i)=>{a.push(e[0],e[1],e[2]),o.push(t[0],t[1],t[2]),u(n,r[i])}),c.push(i,i+1,i+2,i,i+2,i+3)};for(let e=0;e<t;e++)for(let a=0;a<t;a++){let o=l(a,e),s=r[e*t+a],c=a*n,u=c+n,f=e*n,p=f+n,m=(t,n)=>{let r=+(l(a+t,e)>o+.1),i=+(l(a,e+n)>o+.1),s=+(l(a+t,e+n)>o+.1);return 1-(r+i+s)*.13};d([[c,o,f],[c,o,p],[u,o,p],[u,o,f]],[0,1,0],s,[m(-1,-1),m(-1,1),m(1,1),m(1,-1)]);let h=i[e*t+a];for(let[t,n,r]of[[1,0,[1,0,0]],[-1,0,[-1,0,0]],[0,1,[0,0,1]],[0,-1,[0,0,-1]]]){let i=l(a+t,e+n);i>=o||d(t===1?[[u,o,f],[u,o,p],[u,i,p],[u,i,f]]:t===-1?[[c,o,p],[c,o,f],[c,i,f],[c,i,p]]:n===1?[[u,o,p],[c,o,p],[c,i,p],[u,i,p]]:[[c,o,f],[u,o,f],[u,i,f],[c,i,f]],r,h,[1,1,.62,.62])}}let f=new F;f.setAttribute(`position`,new k(a,3)),f.setAttribute(`normal`,new k(o,3)),f.setAttribute(`color`,new k(s,3)),f.setIndex(c);let p=new M({vertexColors:!0});for(let e of Cr(f,this.def.size,this.high?20:30)){let t=new P(e,p);t.receiveShadow=this.high,t.matrixAutoUpdate=!1,this.group.add(t)}}buildSkirt(){let e=this.def.size,t=new M({color:new I(z(this.theme.palette.cliffTop,-.25))}),n=[[-70,-70,e+70,0],[-70,e,e+70,e+70],[-70,0,0,e],[e,0,e+70,e]];for(let[e,r,i,a]of n){let n=new P(new et(i-e,a-r).rotateX(-Math.PI/2),t);n.position.set((e+i)/2,2.2,(r+a)/2),this.group.add(n)}}buildLiquid(){let e=this.theme.liquid;if(e===`none`)return;let t=this.def.size,n=new Uint8Array(t*t*4),r=(e,t)=>{let n=this.cell(e,t);return n===3||n===7},i=!1;for(let e=0;e<t;e++)for(let a=0;a<t;a++){if(!r(a,e))continue;i=!0;let o=0;for(let t=1;t<=2&&o===0;t++)for(let n=-t;n<=t;n++)for(let i=-t;i<=t;i++)r(a+i,e+n)||(o=t===1?255:120);let s=(e*t+a)*4;n[s]=255,n[s+1]=o,n[s+3]=255}if(!i)return;let a=new me(n,t,t,ze);a.magFilter=Ae,a.minFilter=Ae,a.needsUpdate=!0;let o=this.theme.palette,s=e===`lava`,c=e===`ice`,l=new S({vertexShader:Or,fragmentShader:kr,transparent:!s&&!c,depthWrite:s||c,uniforms:{uMask:{value:a},uSize:{value:t},uTime:{value:0},uColor:{value:new I(s?16742938:o.liquid)},uDeep:{value:new I(s?10099210:z(o.liquid,c?-.3:-.45))},uFoam:{value:new I(s?16769162:16777215)},uStyle:{value:s?1:c?2:0},uAlpha:{value:.82}}});s&&(l.toneMapped=!1);let u=new P(new et(t,t).rotateX(-Math.PI/2),l);u.position.set(t/2,c?-.05:-.1,t/2),u.renderOrder=1,this.group.add(u),this.animated.push({mat:l})}buildHazards(){let e=this.def.size;for(let t of this.def.hazards){if(t.kind===`meteor`)continue;let n=[],r=[],i=.5;for(let a=0;a<e;a+=i)for(let o=0;o<e;o+=i){if(!Ct(t.zone,o+i/2,a+i/2)||!this.map.isOpenGround(o+i/2,a+i/2))continue;let e=n.length/3,s=this.heightAt(o+i/2,a+i/2)+.03;n.push(o,s,a,o,s,a+i,o+i,s,a+i,o+i,s,a),r.push(e,e+1,e+2,e,e+2,e+3)}if(!n.length)continue;let a=new F;a.setAttribute(`position`,new k(n,3)),a.setIndex(r);let o=t.kind===`lava`,s=new S({vertexShader:Or,fragmentShader:Ar,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new I(o?5904910:12575999)},uColor2:{value:new I(o?16747050:16777215)},uLava:{value:+!!o}}});o&&(s.toneMapped=!1);let c=new P(a,s);c.renderOrder=1,this.group.add(c),this.animated.push({mat:s})}}prop(e,t,n){let r=this.props.get(e);return r||this.props.set(e,r=ct(t,n,`${this.def.id}:${e}`,this.lod)),r}addInstanced(e,t,n,r){let i=[];if(t.length===0)return i;let a=this.high?24:40,o=new Map;for(let e of t){let t=Math.floor(e.elements[12]/a)*1e3+Math.floor(e.elements[14]/a),n=o.get(t);n||o.set(t,n=[]),n.push(e)}for(let t of o.values())for(let a of e.parts)for(let[e,o]of[[a.lit,r??gt],[a.emissive,nt]]){if(!e)continue;let r=new E(e,o,t.length),s=new L().makeTranslation(a.pivot.x,a.pivot.y,a.pivot.z);t.forEach((e,t)=>r.setMatrixAt(t,e.clone().multiply(s))),r.computeBoundingSphere(),r.matrixAutoUpdate=!1,r.castShadow=n&&o!==nt,this.group.add(r),i.push(r)}return i}place(e,t,n,r,i){return new L().compose(new O(e,i??this.heightAt(e,t),t),new C().setFromAxisAngle(new O(0,1,0),n),new O(r,r,r))}buildProps(){let e=this.def,t=this.theme,n=t.palette,r=e.size,i=(t.props.density??1)*(this.high?1:.4),a=t.props.trees.length?t.props.trees:[`oak`],o=new Map,s=[[],[]],c=[[],[]],l=[],u=(e,t,n)=>{let r=e.get(t);r||e.set(t,r=[]),r.push(n)};for(let e=1;e<r-1;e+=2)for(let n=1;n<r-1;n+=2){let r=n+.5+(H(n,e*3)-.5)*1.2,d=e+.5+(H(n*5,e)-.5)*1.2,f=this.map.terrainAt(r,d),p=H(n*3+1,e*5+2),m=this.distAt(Math.floor(r),Math.floor(d));if(f===0){if(m>=3&&p<.27*i){let t=a[Math.floor(H(e,n)*a.length)%a.length];u(o,`${t}:${Math.floor(H(n+7,e)*2)}`,this.place(r,d,p*40,.55+H(n,e)*.3,this.heightAt(r,d)-.05))}else m<=2&&t.props.rocks&&p>1-.07*i?s[+(p>.97)].push(this.place(r,d,p*40,.12+H(e,n)*.08)):t.props.crystals&&m===2&&p<.012*i&&l.push(this.place(r,d,p*30,.1))}else if(f===1||f===6){if(this.map.bushAt(r,d)>0)continue;this.high&&t.props.flowers&&p<.16*i?c[p<.08?0:1].push(this.place(r,d,p*50,.075)):t.props.rocks&&p>.985&&s[1].push(this.place(r,d,p*40,.08))}else f===2&&this.high&&p<.03&&t.props.flowers&&c[1].push(this.place(r,d,p*50,.06))}for(let[e,t]of o){let[n,r]=e.split(`:`);this.addInstanced(this.prop(`tree_${e}`,pr(n,Number(r)),.19),t,this.high)}s.forEach((e,t)=>this.addInstanced(this.prop(`rock_${t}`,mr(n.cliff,t),1),e,this.high)),c.forEach((e,n)=>this.addInstanced(this.prop(`detail_${n}`,yr(t,n),1),e,!1));let d=[[],[]],f=[[],[]],p=(e,t,n,r,i)=>{for(let a=0;a<24;a++){let o=H(i,a)*Math.PI*2,s=n+H(a,i)*(r-n),c=e+Math.cos(o)*s,l=t+Math.sin(o)*s,u=this.distAt(Math.floor(c),Math.floor(l));if(this.map.terrainAt(c,l)===0&&u>=1&&u<=2)return{x:c,z:l}}return null};if(t.props.ruins&&(e.camps.forEach((e,t)=>{let n=p(e.x,e.z,4,7,t*17+3);n&&d[t%2].push(this.place(n.x,n.z,H(t,9)*6,.16))}),e.bosses.forEach((e,t)=>{for(let n=0;n<3;n++){let r=p(e.x,e.z,6.5,10,t*31+n*7);r&&d[n%2].push(this.place(r.x,r.z,Math.atan2(e.x-r.x,e.z-r.z),.17))}})),t.props.crystals&&e.bosses.forEach((e,t)=>{for(let n=0;n<4;n++){let r=p(e.x,e.z,6.5,11,t*53+n*11+1);r&&l.push(this.place(r.x,r.z,H(n,t)*6,.12+H(t,n)*.05))}}),t.props.banners)for(let t of[0,1]){let n=e.fountains[t];for(let e=0;e<10;e++){let r=p(n.x,n.z,14,20,t*101+e*13);r&&f[t].push(this.place(r.x,r.z,Math.atan2(n.x-r.x,n.z-r.z),.13))}}for(let t of e.decor??[]){let e=t.scale??1,n=n=>this.place(t.x,t.z,t.rot??0,n*e);switch(t.kind){case`ruin`:case`statue`:d[t.kind===`statue`?0:1].push(n(.17));break;case`banner`:f[+(t.team===1)].push(n(.13));break;case`crystal`:case`brazier`:l.push(n(.13));break;case`rock`:s[1].push(n(.18));break;case`tree`:this.addInstanced(this.prop(`tree_${a[0]}:0`,pr(a[0],0),.19),[n(.9)],this.high)}}d.forEach((e,t)=>this.addInstanced(this.prop(`ruin_${t}`,hr(z(n.cliff,.25),n.cliffTop,t),1),e,this.high)),this.addInstanced(this.prop(`crystal`,_r(n.accent,1),1),l,!1),f.forEach((e,t)=>{let n=st[t];this.addInstanced(this.prop(`banner_${t}`,gr(n.main,n.light),1),e,this.high)})}buildBushes(){let e=this.def.size,t=new Map;for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=this.map.bush[n*e+r];if(!i||!this.high&&(r+n)%2==1)continue;let a=H(r*7,n*3),o=r+.5+(a-.5)*.4,s=n+.5+(H(n,r)-.5)*.4,c=(this.high?.085:.11)+H(r,n*11)*.025,l=t.get(i);l||t.set(i,l=[]),l.push(this.place(o,s,a*40,c,0))}let n=this.theme.palette.bush,r=[this.prop(`shrub_0`,vr(n,0),1),this.prop(`shrub_1`,vr(n,1),1)];for(let[e,n]of t){let t=new M({vertexColors:!0}),i=[[],[]];n.forEach((e,t)=>i[this.high?t%2:0].push(e)),i.forEach((e,n)=>this.addInstanced(r[n],e,this.high,t)),this.bushes.set(e,{id:e,material:t,translucent:!1})}}buildFeatures(){let e=this.def,t=this.theme.palette.accent;for(let t of[0,1]){let n=e.fountains[t],r=st[t].light,i=new P(new Pe(8.6,9,64).rotateX(-Math.PI/2),new j({color:r,transparent:!0,opacity:.55,depthWrite:!1}));i.position.set(n.x,.05,n.z);let a=new P(new Oe(3,32).rotateX(-Math.PI/2),new j({color:r,transparent:!0,opacity:.35,depthWrite:!1}));a.position.set(n.x,.04,n.z),this.group.add(i,a)}for(let n of e.bosses){let e=new P(new Pe(5.6,6.1,48).rotateX(-Math.PI/2),new j({color:t,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}));e.position.set(n.x,.05,n.z),this.group.add(e)}let n=this.prop(`pad`,br(10479871),.12);for(let t of e.jumpPads){let e=Math.atan2(t.to.x-t.from.x,t.to.z-t.from.z);this.addInstanced(n,[this.place(t.from.x,t.from.z,e,1,.01)],!1);let r=new P(new Pe(.7,1.15,32).rotateX(-Math.PI/2),new j({color:10479871,transparent:!0,opacity:.6,depthWrite:!1,blending:2,toneMapped:!1}));r.position.set(t.from.x,.2,t.from.z),this.pads.push(r);let i=new P(new Pe(.6,.85,24).rotateX(-Math.PI/2),new j({color:10479871,transparent:!0,opacity:.35,depthWrite:!1}));i.position.set(t.to.x,this.heightAt(t.to.x,t.to.z)+.05,t.to.z),this.group.add(r,i)}let r=this.prop(`shrine`,xr(z(this.theme.palette.cliff,.2)),.11);for(let t of e.shrines){this.addInstanced(r,[this.place(t.x,t.z,0,1,0)],this.high);let e=Dr[t.kind],n=new P(new Fe(.42),new j({color:e,toneMapped:!1})),i=new P(new Pe(.9,1.35,32).rotateX(-Math.PI/2),new j({color:e,transparent:!0,opacity:.45,depthWrite:!1,blending:2,toneMapped:!1}));n.position.set(t.x,1.4,t.z),i.position.set(t.x,.12,t.z),this.group.add(n,i),this.shrines.set(t.id,{gem:n,halo:i,y:1.4})}}syncWalls(e){let t=new Set;for(let n of e){if(t.add(n.id),this.walls.has(n.id))continue;let e=new tt,r=this.prop(`wall_pillar`,Sr(),1),i=[],a=n.points,o=n.radius/5*1.15;for(let e=0;e<a.length;e++){let t=a[e],r=a[e+1],s=r?Math.max(1,Math.ceil(Math.hypot(r.x-t.x,r.z-t.z)/(n.radius*1.2))):1;for(let n=0;n<s;n++){let a=n/s,c=r?t.x+(r.x-t.x)*a:t.x,l=r?t.z+(r.z-t.z)*a:t.z;i.push(this.place(c,l,H(e,n)*6,o*(.9+H(n,e)*.25),0))}}let s=a[a.length-1];a.length>1&&i.push(this.place(s.x,s.z,1,o,0));for(let t of this.addInstanced(r,i,this.high))this.group.remove(t),e.add(t);this.group.add(e),this.walls.set(n.id,e)}for(let[e,n]of this.walls)t.has(e)||(this.group.remove(n),this.walls.delete(e))}update(e,t=null,n=0){for(let t of this.animated)t.mat.uniforms.uTime.value=e;for(let t of this.pads){let n=.5+.5*Math.sin(e*4);t.scale.setScalar(.9+n*.25),t.material.opacity=.35+n*.4}if(!t)return;for(let n of t.shrines){let t=this.shrines.get(n.id);t&&(t.gem.visible=n.active,t.gem.rotation.y=e*1.6,t.gem.position.y=t.y+Math.sin(e*2.2)*.15,t.halo.material.opacity=n.active?.35+.2*Math.sin(e*3):.08)}let r=this.insideBush;r.clear();for(let e of t.units){if(e.kind!==`hero`||e.dead||e.team!==n)continue;let t=this.map.bushAt(e.x,e.z);t&&r.add(t)}for(let e of this.bushes.values()){let t=r.has(e.id);t!==e.translucent&&(e.translucent=t,e.material.transparent=t,e.material.opacity=t?.42:1,e.material.depthWrite=!t,e.material.needsUpdate=!0)}(t.walls.length||this.walls.size)&&this.syncWalls(t.walls)}},Mr=class{localTeam;localPlayerId;canvas;ctx;texts=[];hpText=new Map;dpr=1;v=new O;fontBadge=``;fontName=``;fontHp=``;bushAt=null;constructor(e,t,n){this.localTeam=t,this.localPlayerId=n,this.canvas=document.createElement(`canvas`),Object.assign(this.canvas.style,{position:`absolute`,inset:`0`,width:`100%`,height:`100%`,pointerEvents:`none`}),e.appendChild(this.canvas),this.ctx=this.canvas.getContext(`2d`)}resize(e,t,n){this.dpr=n,this.canvas.width=Math.round(e*n),this.canvas.height=Math.round(t*n),this.fontBadge=`bold ${10*n}px system-ui, sans-serif`,this.fontName=`600 ${11*n}px system-ui, sans-serif`,this.fontHp=`800 ${11*n}px system-ui, sans-serif`}onEvents(e,t,n,r){for(let i of e)if(i.type===`goldGain`&&i.unitId===n&&i.amount>=10){let e=r(i.unitId);e&&this.texts.push({text:`+${i.amount}g`,color:`#ffd24a`,x:e.x,y:e.y+2.8,z:e.z,born:t,size:13})}else if(i.type===`levelUp`&&i.unitId===n){let e=r(i.unitId);e&&this.texts.push({text:`LEVEL UP`,color:`#ffd24a`,x:e.x,y:e.y+3,z:e.z,born:t,size:16})}this.texts.length>80&&this.texts.splice(0,this.texts.length-80)}pr={sx:0,sy:0,visible:!1};project(e,t,n,r){this.v.set(t,n,r).project(e);let i=this.pr;return i.sx=(this.v.x+1)/2*this.canvas.width,i.sy=(1-this.v.y)/2*this.canvas.height,i.visible=this.v.z<1&&Math.abs(this.v.x)<1.2&&Math.abs(this.v.y)<1.2,i}hpLabel(e,t){let n=Math.max(0,Math.round(t)),r=this.hpText.get(e);return r?r.hp!==n&&(r.hp=n,r.text=String(n)):(r={hp:n,text:String(n)},this.hpText.set(e,r)),r.text}drawEye(e,t,n){let r=this.ctx,i=this.dpr,a=7*i,o=4.2*i;r.fillStyle=`rgba(10,12,20,0.85)`,r.beginPath(),r.arc(e,t,9*i,0,Math.PI*2),r.fill(),r.strokeStyle=n?`#9fffb0`:`#ffae6a`,r.lineWidth=1.6*i,r.beginPath(),r.moveTo(e-a,t),r.quadraticCurveTo(e,t-o*2,e+a,t),r.quadraticCurveTo(e,t+o*2,e-a,t),r.stroke(),r.fillStyle=r.strokeStyle,r.beginPath(),r.arc(e,t,1.9*i,0,Math.PI*2),r.fill(),n&&(r.beginPath(),r.moveTo(e-a*.9,t+o*1.3),r.lineTo(e+a*.9,t-o*1.3),r.stroke())}draw(e,t,n){let r=this.ctx,i=this.dpr;r.clearRect(0,0,this.canvas.width,this.canvas.height),r.textAlign=`center`,r.textBaseline=`middle`;let o=s().monsterHpNumbers;for(let{unit:n,pos:s,height:c}of t){let t=this.project(e,s.x,s.y+c+.25,s.z);if(!t.visible)continue;let u=n.team===this.localTeam,d=n.team===2,f=n.hero?.playerId===this.localPlayerId,p=f?`#5dff8a`:d?`#e8b04a`:u?`#4aa8ff`:`#ff4a4a`,m=34,h=4;n.kind===`hero`?(m=70,h=8):n.kind===`tower`||n.kind===`core`?(m=90,h=8):n.kind===`monster`&&(m=n.radius>1.5?110:50,h=n.radius>1.5?9:5),m*=i,h*=i;let g=t.sx-m/2,_=t.sy,v=Math.max(0,n.hp/Math.max(1,n.stats.maxHp)),y=n.energy??0,b=Math.max(0,n.shield-y),x=Math.max(n.stats.maxHp,n.hp+b);if(r.fillStyle=`rgba(10,12,20,0.75)`,r.fillRect(g-i,_-i,m+2*i,h+2*i),r.fillStyle=p,r.fillRect(g,_,m*n.hp/x,h),b>0&&(r.fillStyle=`#f2f2f2`,r.fillRect(g+m*n.hp/x,_,m*b/x,h)),y>0&&(r.fillStyle=`rgba(10,12,20,0.75)`,r.fillRect(g-i,_-5*i,m+2*i,4*i),r.fillStyle=`#6fe6ff`,r.fillRect(g,_-4*i,m*Math.min(1,y/Math.max(1,n.stats.maxHp)),2*i)),n.kind===`monster`&&o){r.font=this.fontHp,r.strokeStyle=`rgba(0,0,0,0.8)`,r.lineWidth=3*i,r.fillStyle=`#ffe6b8`;let e=this.hpLabel(n.id,n.hp);r.strokeText(e,t.sx,_-8*i),r.fillText(e,t.sx,_-8*i)}if(n.kind===`hero`&&v>0){r.fillStyle=`rgba(0,0,0,0.45)`;for(let e=1e3;e<x;e+=1e3)r.fillRect(g+m*e/x,_,Math.max(1,i),h*.6);if(r.fillStyle=`rgba(10,12,20,0.75)`,r.fillRect(g-i,_+h+i,m+2*i,3*i+i),r.fillStyle=`#5ab0ff`,r.fillRect(g,_+h+2*i,m*n.mana/Math.max(1,n.stats.maxMana),3*i),r.fillStyle=`rgba(10,12,20,0.85)`,r.fillRect(g-16*i,_-i,14*i,h+6*i),r.fillStyle=`#ffffff`,r.font=this.fontBadge,r.fillText(String(n.hero.level),g-9*i,_+(h+4*i)/2),f&&n.hero.level<15){let e=Math.max(0,Math.min(1,n.hero.xp/Math.max(1,a(n.hero.level))));r.fillStyle=`rgba(255,255,255,0.15)`,r.fillRect(g-15*i,_+h+3.4*i,12*i,1.6*i),r.fillStyle=`#ffd36a`,r.fillRect(g-15*i,_+h+3.4*i,12*i*e,1.6*i)}let e=u&&!f?n.hero.lane:void 0;if(e){let t=l[e],n=g+m+3*i;r.fillStyle=`rgba(10,12,20,0.85)`,r.fillRect(n,_-i,13*i,h+6*i),r.fillStyle=t.color,r.font=this.fontBadge,r.fillText(t.letter,n+6.5*i,_+(h+4*i)/2)}r.font=this.fontName,r.fillStyle=f?`#d8ffe4`:u?`#cfe6ff`:`#ffd0d0`,r.strokeStyle=`rgba(0,0,0,0.7)`,r.lineWidth=3*i,r.strokeText(n.name,t.sx,_-9*i),r.fillText(n.name,t.sx,_-9*i),u&&this.bushAt&&this.bushAt(n.x,n.z)&&this.drawEye(g+m+9*i,_+h/2,!(n.vis>>1-this.localTeam&1))}n.modelKey===`dummy`&&(r.font=`600 ${11*i}px system-ui, sans-serif`,r.fillStyle=`#ffd9a8`,r.strokeStyle=`rgba(0,0,0,0.7)`,r.lineWidth=3*i,r.strokeText(n.name,t.sx,_-9*i),r.fillText(n.name,t.sx,_-9*i)),n.invulnerable&&(r.strokeStyle=`rgba(255,255,255,0.6)`,r.lineWidth=i,r.strokeRect(g-2*i,_-2*i,m+4*i,h+4*i))}this.texts.length>0&&n-this.texts[0].born>=1&&(this.texts=this.texts.filter(e=>n-e.born<1));for(let t of this.texts){let a=n-t.born,o=this.project(e,t.x,t.y+a*1.2,t.z);o.visible&&(r.globalAlpha=1-a*a,r.font=`900 ${t.size*i*(a<.1?1+(.1-a)*4:1)}px system-ui, sans-serif`,r.strokeStyle=`rgba(0,0,0,0.8)`,r.lineWidth=3*i,r.strokeText(t.text,o.sx,o.sy),r.fillStyle=t.color,r.fillText(t.text,o.sx,o.sy))}r.globalAlpha=1}},Nr={desert:{tint:14195286,amount:.42,shade:.04,glow:16762976,top:{color:15520416,chance:.35}},snow:{tint:9087200,amount:.38,shade:.06,glow:10481919,top:{color:16054527,chance:.85}},volcanic:{tint:4860966,amount:.5,shade:-.28,glow:16742954,cracks:{color:16738848,chance:.06}},jungle:{tint:5929524,amount:.3,shade:-.04,glow:8060888,top:{color:5937722,chance:.5}},abyss:{tint:6965936,amount:.4,shade:0,glow:14192895,cracks:{color:14192895,chance:.025}}},Pr=e=>(.2126*(e>>16&255)+.7152*(e>>8&255)+.0722*(e&255))/255;function Fr(e,t,n){let r=ot(e,t,n),i=Pr(r);if(i<.004)return e;let a=Pr(e)/i,o=Math.min(255,Math.round((r>>16&255)*a)),s=Math.min(255,Math.round((r>>8&255)*a)),c=Math.min(255,Math.round((r&255)*a));return o<<16|s<<8|c}function Ir(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,2147483647)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r&65535)/65535}function Lr(e){let t=Nr[e];if(t)return e=>{let n=new Set;for(let t of e.parts.values())for(let e of t.voxels.keys())n.add(e);for(let r of e.parts.values())for(let[e,i]of r.voxels){if(i.e>.25){i.c=ot(i.c,t.glow,.75);continue}let[r,a,o]=yt(e),s=Fr(i.c,t.tint,t.amount);t.shade&&(s=z(s,t.shade)),t.top&&!n.has(_t(r,a+1,o))&&Ir(r,a,o)<t.top.chance&&(s=ot(s,t.top.color,.85)),t.cracks&&Ir(r*3+1,a,o*7)<t.cracks.chance&&(s=t.cracks.color,i.e=.85),i.c=s}}}var Rr=class{x=0;y=0;z=0;set(e,t,n){return this.x=e,this.y=t,this.z=n,this}},zr=new WeakMap;function Br(e){let t=zr.get(e);if(t)return t;let n=e.parts.length;if(n>11)throw Error(`model has ${n} parts, the pose texture holds 11 (MAX_PARTS in src/render/pose.ts, the PartName union)`);let r=new Map;e.parts.forEach((e,t)=>r.set(e.name,t));let i=new Int32Array(n).fill(-1),a=new Float32Array(n*3);e.parts.forEach((t,n)=>{let o=t.parent?r.get(t.parent):void 0;if(o!==void 0&&o!==n){i[n]=o;let r=e.parts[o];a[n*3]=t.pivot.x-r.pivot.x,a[n*3+1]=t.pivot.y-r.pivot.y,a[n*3+2]=t.pivot.z-r.pivot.z}else a[n*3]=t.pivot.x,a[n*3+1]=t.pivot.y,a[n*3+2]=t.pivot.z});let o=e=>{let t=0;for(let n=i[e],r=0;n>=0&&r<8;n=i[n],r++)t++;return t};return t={count:n,order:Int32Array.from(Array.from({length:n},(e,t)=>t).sort((e,t)=>o(e)-o(t)||e-t)),parent:i,offset:a,names:e.parts.map(e=>e.name)},zr.set(e,t),t}var Vr=class{model;shape;root={rotation:new Rr,position:{x:0,y:0,z:0},scale:1};parts={};partList=[];height;constructor(e,t){this.model=e,this.shape=t,this.height=e.height;for(let e=0;e<t.count;e++){let n={rotation:new Rr};this.partList.push(n),this.parts[t.names[e]]=n}}};function Hr(e){return new Vr(e,Br(e))}function Ur(e,t,n){let r=e.shape,i=e.root,a=i.rotation;{let e=Math.cos(a.x),t=Math.sin(a.x),n=Math.cos(a.y),r=Math.sin(a.y),o=Math.cos(a.z),s=Math.sin(a.z),c=e*o,l=e*s,u=t*o,d=t*s,f=i.scale;U[0]=n*o*f,U[1]=-n*s*f,U[2]=r*f,U[3]=i.position.x,U[4]=(l+u*r)*f,U[5]=(c-d*r)*f,U[6]=-t*n*f,U[7]=i.position.y,U[8]=(d-c*r)*f,U[9]=(u+l*r)*f,U[10]=e*n*f,U[11]=i.position.z}let o=r.order,s=r.parent,c=r.offset;for(let r=0;r<o.length;r++){let i=o[r],a=e.partList[i].rotation,l=1,u=0,d=0,f=0,p=1,m=0,h=0,g=0,_=1;if(a.x!==0||a.y!==0||a.z!==0){let e=Math.cos(a.x),t=Math.sin(a.x),n=Math.cos(a.y),r=Math.sin(a.y),i=Math.cos(a.z),o=Math.sin(a.z),s=e*i,c=e*o,v=t*i,y=t*o;l=n*i,u=-n*o,d=r,f=c+v*r,p=s-y*r,m=-t*n,h=y-s*r,g=v+c*r,_=e*n}let v=c[i*3],y=c[i*3+1],b=c[i*3+2],x=s[i],S,C,w,T,ee,te,E,D,ne,re,ie,ae;if(x<0)S=U[0],C=U[1],w=U[2],T=U[3],ee=U[4],te=U[5],E=U[6],D=U[7],ne=U[8],re=U[9],ie=U[10],ae=U[11];else{let e=n+x*12;S=t[e],C=t[e+1],w=t[e+2],T=t[e+3],ee=t[e+4],te=t[e+5],E=t[e+6],D=t[e+7],ne=t[e+8],re=t[e+9],ie=t[e+10],ae=t[e+11]}let O=n+i*12;t[O]=S*l+C*f+w*h,t[O+1]=S*u+C*p+w*g,t[O+2]=S*d+C*m+w*_,t[O+3]=S*v+C*y+w*b+T,t[O+4]=ee*l+te*f+E*h,t[O+5]=ee*u+te*p+E*g,t[O+6]=ee*d+te*m+E*_,t[O+7]=ee*v+te*y+E*b+D,t[O+8]=ne*l+re*f+ie*h,t[O+9]=ne*u+re*p+ie*g,t[O+10]=ne*d+re*m+ie*_,t[O+11]=ne*v+re*y+ie*b+ae}}var U=new Float32Array(12),Wr=33,Gr=Wr*4,Kr=`
uniform highp sampler2D uPose;
attribute float aPart;
mat4 vaPose() {
  int row = int(modelMatrix[3].x + 0.5) + gl_InstanceID;
  int base = int(aPart + 0.5) * 3;
  vec4 r0 = texelFetch(uPose, ivec2(base, row), 0);
  vec4 r1 = texelFetch(uPose, ivec2(base + 1, row), 0);
  vec4 r2 = texelFetch(uPose, ivec2(base + 2, row), 0);
  return mat4(
    vec4(r0.x, r1.x, r2.x, 0.0),
    vec4(r0.y, r1.y, r2.y, 0.0),
    vec4(r0.z, r1.z, r2.z, 0.0),
    vec4(r0.w, r1.w, r2.w, 1.0));
}
`,qr=`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
gl_Position = projectionMatrix * mvPosition;`,Jr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
vec4 worldPosition = vec4( transformed, 1.0 );
#endif`,Yr={value:null};function Xr(e,t){Zr(e,t)}function Zr(e,t){e.uniforms.uPose=Yr;let n=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Kr}`);t?(n=n.replace(`#include <beginnormal_vertex>`,`mat4 vaM = vaPose();
vec3 objectNormal = mat3(vaM) * vec3(normal);`),n=n.replace(`#include <begin_vertex>`,`vec3 transformed = (vaM * vec4(position, 1.0)).xyz;`)):n=n.replace(`#include <begin_vertex>`,`mat4 vaM = vaPose();
vec3 transformed = (vaM * vec4(position, 1.0)).xyz;`),n=n.replace(`#include <project_vertex>`,qr).replace(`#include <worldpos_vertex>`,Jr),e.vertexShader=n}var Qr=null,$r=null,ei=null;function ti(){return Qr||(Qr=new M({vertexColors:!0}),Qr.onBeforeCompile=e=>Zr(e,!0),Qr.customProgramCacheKey=()=>`va-pose-lit`,$r=new j({vertexColors:!0,toneMapped:!1}),$r.onBeforeCompile=e=>Zr(e,!1),$r.customProgramCacheKey=()=>`va-pose-emissive`,ei=new Ue,ei.onBeforeCompile=e=>Zr(e,!1),ei.customProgramCacheKey=()=>`va-pose-depth`),{lit:Qr,emissive:$r,depth:ei}}function ni(){return ti()}function ri(e,t){let n=0,r=0;for(let i of e.parts){let e=i[t];e&&(n+=e.getAttribute(`position`).count,r+=e.index.count)}if(n===0)return null;let i=new Float32Array(n*3),a=new Float32Array(n*3),o=new Float32Array(n*3),s=new Float32Array(n),c=n>65535?new Uint32Array(r):new Uint16Array(r),l=0,u=0;e.parts.forEach((e,n)=>{let r=e[t];if(!r)return;let d=r.getAttribute(`position`).count;i.set(r.getAttribute(`position`).array,l*3),a.set(r.getAttribute(`normal`).array,l*3),o.set(r.getAttribute(`color`).array,l*3),s.fill(n,l,l+d);let f=r.index.array;for(let e=0;e<f.length;e++)c[u+e]=f[e]+l;u+=f.length,l+=d});let d=new F;return d.setAttribute(`position`,new A(i,3)),d.setAttribute(`normal`,new A(a,3)),d.setAttribute(`color`,new A(o,3)),d.setAttribute(`aPart`,new A(s,1)),d.setIndex(new A(c,1)),d}var ii=class{lit;emissive;scratch;count=0;geos=[];constructor(e,t,n,r){let i=ti();this.scratch=new Float32Array(r*Gr);let a=(n,r,a)=>{let o=ri(e,n);if(!o)return null;let s=new be;s.index=o.index;for(let e of[`position`,`normal`,`color`,`aPart`])s.setAttribute(e,o.getAttribute(e));s.instanceCount=0,this.geos.push(s);let c=new P(s,r);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.visible=!1,a&&(c.castShadow=!0,c.customDepthMaterial=i.depth),t.add(c),c};this.lit=a(`lit`,i.lit,n),this.emissive=a(`emissive`,i.emissive,!1)}add(e){if((this.count+1)*Gr>this.scratch.length){let e=new Float32Array(this.scratch.length*2);e.set(this.scratch),this.scratch=e}Ur(e,this.scratch,this.count*Gr),this.count++}commit(e){let t=this.count;for(let n of[this.lit,this.emissive])n&&(n.matrix.setPosition(e,0,0),n.visible=t>0);for(let e of this.geos)e.instanceCount=t}reset(){this.count=0}},ai=class{group=new tt;capRows=128;data=new Float32Array(this.capRows*Gr);tex;batches=new Map;shadowBatches=new Map;active=[];prevActive=[];warm=null;drawn=0;constructor(){this.tex=this.makeTexture(),Yr.value=this.tex,this.group.matrixAutoUpdate=!1}makeTexture(){let e=new me(this.data,Wr,this.capRows,ze,pe);return e.minFilter=Ae,e.magFilter=Ae,e.generateMipmaps=!1,e.flipY=!1,e.needsUpdate=!0,e}batchFor(e,t){let n=t?this.shadowBatches:this.batches,r=n.get(e);return r||(r=new ii(e,this.group,t,t?2:16),n.set(e,r)),r}begin(){let e=this.prevActive;this.prevActive=this.active,this.active=e,this.active.length=0;for(let e of this.prevActive)e.reset()}beginWarm(){if(this.warm)return;let e=new F;e.setAttribute(`position`,new A(new Float32Array(9),3)),e.setAttribute(`normal`,new A(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),e.setAttribute(`color`,new A(new Float32Array(9),3)),e.setIndex([0,1,2]);let t={name:`body`,pivot:new O,parent:null,lit:e,emissive:e};this.warm=new ii({parts:[t],height:1,radius:1},this.group,!0,1),this.warm.count=1,this.warm.commit(0)}endWarm(){let e=this.warm;if(e){for(let t of[e.lit,e.emissive])t&&this.group.remove(t);this.warm=null}}add(e,t){e.count===0&&this.active.push(e),e.add(t)}end(){let e=0;for(let t of this.active)e+=t.count;e>this.capRows&&this.growTexture(e);let t=0;for(let e of this.active)this.data.set(e.scratch.subarray(0,e.count*Gr),t*Gr),e.commit(t),t+=e.count;for(let e of this.prevActive)e.count===0&&e.commit(0);this.drawn=e,e>0&&(this.tex.needsUpdate=!0)}growTexture(e){for(;this.capRows<e;)this.capRows*=2;this.data=new Float32Array(this.capRows*Gr),this.tex.dispose(),this.tex=this.makeTexture(),Yr.value=this.tex;let t=ti();t.lit.needsUpdate=!0,t.emissive.needsUpdate=!0,t.depth.needsUpdate=!0}},oi={plain:new Ue,inst:new Ue,instColor:new Ue},si=oi.plain;function ci(e){e.traverse(e=>{let t=e;if(!t.isMesh||!t.castShadow||t.customDepthMaterial)return;let n=e;t.customDepthMaterial=n.isInstancedMesh?n.instanceColor?oi.instColor:oi.inst:oi.plain})}var li=class{scene;sun;hemi;sunDir;elevation;shadowRes;fwd=new O;right=new O;up=new O;tmp=new O;day;night;nightMix=0;flashCol=new I(.85,.8,1);constructor(e,t,n,r){this.scene=e;let i=t.light,a=Je.degToRad(i.elev),o=Je.degToRad(i.azim);this.elevation=a,this.sunDir=new O(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)).normalize();let s=new I(t.fog.color);e.background=s.clone(),e.fog=new re(s.clone(),t.fog.density),this.day={sun:new I(i.sun),sunI:i.sunI,sky:new I(i.sky),ground:new I(i.ground),hemiI:i.hemiI,bg:s},this.night={sun:new I(10138879),sunI:i.sunI*.45,sky:new I(5925592),ground:new I(i.ground).lerp(new I(2761800),.6),hemiI:i.hemiI*.8,bg:s.clone().lerp(new I(790568),.7)},this.hemi=new ve(this.day.sky,this.day.ground,i.hemiI),e.add(this.hemi),this.sun=new w(this.day.sun,i.sunI),this.shadowRes=n?2048:1024,this.sun.castShadow=r;let c=this.sun.shadow;c.mapSize.set(this.shadowRes,this.shadowRes),c.bias=-3e-4,c.normalBias=.03,c.radius=n?2.6:1.4,c.intensity=.9,c.camera.near=1,c.camera.far=160,c.camera.layers.enable(1),e.add(this.sun,this.sun.target)}update(e,t,n,r,i){let a=+!!n;this.nightMix!==a&&(this.nightMix=a>this.nightMix?Math.min(1,this.nightMix+r/3):Math.max(0,this.nightMix-r/3));let o=this.nightMix,s=this.day,c=this.night;this.sun.color.copy(s.sun).lerp(c.sun,o),this.sun.intensity=s.sunI+(c.sunI-s.sunI)*o+i*2.5,i>0&&this.sun.color.lerp(this.flashCol,Math.min(1,i)),this.hemi.color.copy(s.sky).lerp(c.sky,o),this.hemi.groundColor.copy(s.ground).lerp(c.ground,o),this.hemi.intensity=s.hemiI+(c.hemiI-s.hemiI)*o+i*1.2,this.scene.background.copy(s.bg).lerp(c.bg,o),this.scene.fog.color.copy(this.scene.background);let l=27*Math.max(.7,t),u=this.sunDir;this.fwd.copy(u).negate(),this.right.crossVectors(this.fwd,Ve.DEFAULT_UP).normalize(),this.up.crossVectors(this.right,this.fwd).normalize();let d=l*Math.sin(this.elevation)+7*Math.cos(this.elevation),f=this.sun.shadow.camera;(f.right!==l||f.top!==d)&&(f.left=-l,f.right=l,f.top=d,f.bottom=-d,f.updateProjectionMatrix());let p=2*l/this.shadowRes,m=2*d/this.shadowRes,h=e.dot(this.right),g=e.dot(this.up),_=this.tmp.copy(e);_.addScaledVector(this.right,Math.round(h/p)*p-h),_.addScaledVector(this.up,Math.round(g/m)*m-g),this.sun.target.position.copy(_),this.sun.position.copy(_).addScaledVector(u,80),this.sun.target.updateMatrixWorld()}get night01(){return this.nightMix}},ui={tLight:{value:null},uLightRect:{value:new Ke(0,0,1,1)}};function di(){return{tLight:ui.tLight,uLightRect:ui.uLightRect,tDynLight:At.tDynLight,uDynRect:At.uDynRect,...bt()}}var fi=`varying vec3 vLmPos;`,pi=`
#ifdef USE_INSTANCING
  vLmPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  vLmPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`,mi=`
uniform sampler2D tLight;
uniform vec4 uLightRect;
uniform sampler2D tDynLight;
uniform vec4 uDynRect;
varying vec3 vLmPos;
vec3 lightAt(vec3 p) {
  vec2 uv = (p.xz - uLightRect.xy) * uLightRect.z;
  // Light pools fade with height above the ground they were baked for.
  vec3 l = texture2D(tLight, uv).rgb * uLightRect.w;
  // Dynamic VFX light pools (camera-following window; zero outside it).
  l += texture2D(tDynLight, (p.xz - uDynRect.xy) * uDynRect.z).rgb * uDynRect.w;
  return l * clamp(1.15 - p.y * 0.12, 0.35, 1.15);
}${wt}`,hi=`reflectedLight.indirectDiffuse += lightAt(vLmPos) * diffuseColor.rgb;${Ot}`;function gi(e,t,n=!1){let r=e.onBeforeCompile.bind(e);e.onBeforeCompile=(e,t)=>{r(e,t),Object.assign(e.uniforms,di()),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${fi}`).replace(`#include <fog_vertex>`,`#include <fog_vertex>\n${n?`vLmPos = transformed;`:pi}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${mi}`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>\n${hi}`)};let i=e.customProgramCacheKey.bind(e);return e.customProgramCacheKey=()=>`${i()}|lm-${t}`,e}var _i=class{terrain;sources=[];texture;res;n;data;lights=[];picks=[];constructor(e,t,n){if(this.terrain=e,this.res=t?2:1,this.n=e.world*this.res,this.data=new Float32Array(this.n*this.n*4),this.texture=new me(new Uint16Array(this.n*this.n*4),this.n,this.n,ze,b),this.texture.magFilter=xe,this.texture.minFilter=xe,this.texture.wrapS=this.texture.wrapT=je,ui.tLight.value=this.texture,ui.uLightRect.value.set(e.min,e.min,1/e.world,1),t)for(let e=0;e<2;e++){let e=new Ee(16777215,0,8,1.6);e.castShadow=!1,n.add(e),this.lights.push(e)}}add(e,t,n,r,i,a=1.2,o=0){this.sources.push({x:e,z:t,y:a+this.terrain.plateauAt(e,t),r:n,color:new I(r),i,flicker:o})}splat(e,t,n,r,i){let a=this.n,o=this.res,s=this.terrain.min,c=Math.max(0,Math.floor((e-n-s)*o)),l=Math.min(a-1,Math.ceil((e+n-s)*o)),u=Math.max(0,Math.floor((t-n-s)*o)),d=Math.min(a-1,Math.ceil((t+n-s)*o)),f=this.data;for(let p=u;p<=d;p++){let u=s+(p+.5)/o;for(let d=c;d<=l;d++){let c=s+(d+.5)/o,l=Math.hypot(c-e,u-t)/n;if(l>=1)continue;let m=(1-l)*(1-l)*(1+2*l)*i,h=(p*a+d)*4;f[h]=f[h]+r.r*m,f[h+1]=f[h+1]+r.g*m,f[h+2]=f[h+2]+r.b*m}}}addMaskGlow(e,t,n,r){let i=this.terrain,a=new I(t),o=this.n,s=this.res,c=new Float32Array(o*o);for(let t=0;t<o;t++){let n=i.min+(t+.5)/s;for(let r=0;r<o;r++)c[t*o+r]=i.sample(e,i.min+(r+.5)/s,n)}let l=Math.max(1,Math.round(r*s)),u=new Float32Array(o*o);for(let e=0;e<3;e++){for(let e=0;e<o;e++){let t=0;for(let n=-l;n<=l;n++)t+=c[e*o+Math.min(o-1,Math.max(0,n))];for(let n=0;n<o;n++)u[e*o+n]=t/(2*l+1),t+=c[e*o+Math.min(o-1,n+l+1)]-c[e*o+Math.max(0,n-l)]}for(let e=0;e<o;e++){let t=0;for(let n=-l;n<=l;n++)t+=u[Math.min(o-1,Math.max(0,n))*o+e];for(let n=0;n<o;n++)c[n*o+e]=t/(2*l+1),t+=u[Math.min(o-1,n+l+1)*o+e]-u[Math.max(0,n-l)*o+e]}}let d=this.data;for(let e=0;e<o*o;e++){let t=Math.min(1,c[e]*1.6)*n;t<=.001||(d[e*4]=d[e*4]+a.r*t,d[e*4+1]=d[e*4+1]+a.g*t,d[e*4+2]=d[e*4+2]+a.b*t)}}bake(){for(let e of this.sources)this.splat(e.x,e.z,e.r,e.color,e.i*.55);let e=this.texture.image.data,t=this.data;for(let n=0;n<t.length;n++)e[n]=x.toHalfFloat(Math.min(8,t[n]));this.texture.needsUpdate=!0}update(e,t){if(!this.lights.length)return;let n=this.picks;n.length=0;for(let t of this.sources)Math.abs(t.x-e.x)+Math.abs(t.z-e.z)<26&&t.i>.4&&n.push(t);n.sort((t,n)=>(Math.abs(t.x-e.x)+Math.abs(t.z-e.z))/t.i-(Math.abs(n.x-e.x)+Math.abs(n.z-e.z))/n.i),this.lights.forEach((e,r)=>{let i=n[r];if(!i){e.intensity=0;return}let a=i.flicker>0?.85+.15*Math.sin(t*i.flicker+i.x)*Math.sin(t*i.flicker*1.7+i.z):1;e.position.set(i.x,i.y,i.z),e.color.copy(i.color),e.distance=i.r*1.4,e.intensity=i.i*6*a})}},vi=!1;function yi(){vi||(vi=!0,rt.lights_lambert_pars_fragment=`
varying vec3 vViewPosition;
struct LambertMaterial {
  vec3 diffuseColor;
  float specularStrength;
};
#ifndef TOON_LO
#define TOON_LO 0.34
#endif
#ifndef TOON_HI
#define TOON_HI 0.62
#endif
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  float w = dot( geometryNormal, directLight.direction ) * 0.5 + 0.5;
  float ramp = smoothstep( TOON_LO, TOON_HI, w );
  ramp = mix( ramp, w, 0.22 );
  reflectedLight.directDiffuse += ramp * directLight.color * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`,rt.lights_fragment_end+=`
#ifdef TOON_RIM
{
  float rim = 1.0 - saturate( dot( geometryNormal, geometryViewDir ) );
  rim = smoothstep( 0.5, 0.95, rim );
  reflectedLight.indirectDiffuse += rim * TOON_RIM * ( 0.35 + diffuseColor.rgb * 1.6 );
}
#endif
`)}function bi(e,t){let n=new I(e).multiplyScalar(t);return`vec3(${n.r.toFixed(3)}, ${n.g.toFixed(3)}, ${n.b.toFixed(3)})`}var xi=`
varying vec3 vL;
varying vec3 vN;
varying vec3 vV;
void main() {
  vL = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * position);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,Si=`
uniform vec3 uColor;
uniform vec3 uLight;
uniform float uTime;
uniform float uActive;
uniform float uOpacity;
uniform vec4 uHits[4];
varying vec3 vL;
varying vec3 vN;
varying vec3 vV;
float h1(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float band(float x, float a, float b, float s) { return smoothstep(a - s, a, x) * (1.0 - smoothstep(b, b + s, x)); }
void main() {
  float el = clamp(vL.y, 0.0, 1.0);
  float az = atan(vL.z, vL.x);
  float fres = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
  float foot = 1.0 - smoothstep(0.0, 0.07, el);
  float footGlow = 1.0 - smoothstep(0.0, 0.22, el);
  // Glyph bands turning in opposite directions.
  float g = 0.0;
  for (int k = 0; k < 2; k++) {
    float y0 = k == 0 ? 0.16 : 0.42;
    float w = k == 0 ? 0.07 : 0.05;
    float a = (az / 6.2832 + 0.5) * (k == 0 ? 64.0 : 48.0) + uTime * (k == 0 ? 0.6 : -0.45);
    float cell = floor(a);
    float fx = fract(a);
    float fy = (el - y0) / w;
    float r = h1(vec2(cell, float(k)));
    float stroke = band(fx, 0.42, 0.58, 0.04) * band(fy, 0.15, 0.85, 0.05);
    stroke = max(stroke, band(fy, 0.42 + (r - 0.5) * 0.5, 0.58 + (r - 0.5) * 0.5, 0.05) * band(fx, 0.15, 0.85, 0.04) * step(0.35, r));
    float rails = band(fy, -0.08, 0.0, 0.03) + band(fy, 1.0, 1.08, 0.03);
    g += (stroke * step(0.2, h1(vec2(cell, 9.0 + float(k)))) + rails * 0.6) * step(-0.2, fy) * step(fy, 1.2);
  }
  float lattice = 0.0;
  float ripple = 0.0;
#ifndef ALTAR_LOW
  vec2 p = vec2((az / 6.2832 + 0.5) * 34.0, el * 9.0);
  p.x *= 1.1547;
  vec2 a = mod(p, vec2(1.0, 1.732)) - vec2(0.5, 0.866);
  vec2 b = mod(p + vec2(0.5, 0.866), vec2(1.0, 1.732)) - vec2(0.5, 0.866);
  vec2 hp = dot(a, a) < dot(b, b) ? a : b;
  vec2 ap = abs(hp);
  float hd = max(ap.x * 0.866 + ap.y * 0.5, ap.y);
  lattice = smoothstep(0.42, 0.48, hd);
  vec2 cid = p - hp;
  float flick = step(0.93, h1(cid + floor(uTime * 2.0))) * 0.6;
  lattice += flick * (1.0 - lattice) * 0.5;
  vec3 dir = normalize(vL);
  for (int i = 0; i < 4; i++) {
    vec4 hpt = uHits[i];
    if (hpt.w < 0.0 || hpt.w > 1.2) continue;
    float d = acos(clamp(dot(dir, hpt.xyz), -1.0, 1.0));
    float front = hpt.w * 2.2;
    ripple += band(d, front - 0.1, front + 0.02, 0.05) * (1.0 - hpt.w / 1.2) * 0.5;
    ripple += (1.0 - smoothstep(0.0, 0.3, d)) * max(0.0, 1.0 - hpt.w * 5.0) * 0.6;
  }
#endif
  float scan = band(el, fract(uTime * 0.11) - 0.03, fract(uTime * 0.11), 0.03) * 0.5;
  float act = uActive;
  // Seen from above the shell must stay see-through: activity brightens the rim, lattice lines and
  // glyphs (not the whole surface) and turns the colour hotter.
  // (Kept moderate while active: on bright arenas a fully lit shell plus the beams washed the view out.)
  float alpha = fres * (0.5 + 0.2 * act) + lattice * (0.06 + 0.2 * fres) * (1.0 + act * 0.8) + g * (0.6 + 0.35 * act) + foot * 1.3 + footGlow * (0.4 + 0.2 * act) + scan * (0.25 + fres * 0.6) + ripple * 0.8;
  alpha *= uOpacity * (1.0 - smoothstep(0.86, 1.0, el) * 0.6);
  alpha = min(alpha, 1.0);
  vec3 c = mix(uColor, uLight, clamp(fres * 0.6 + g * 0.6 + foot + ripple * 0.5 + act * 0.25, 0.0, 1.0));
  gl_FragColor = vec4(c * alpha, alpha);
}`;function Ci(e,t,n,r,i,a,o){let s=st[e],c=i*.5,l=new fe(1,a?64:40,a?20:12,0,Math.PI*2,0,Math.PI/2);l.deleteAttribute(`uv`);let u=[0,1,2,3].map(()=>new Ke(0,1,0,-1)),d={uColor:{value:new I(s.main).multiplyScalar(1.3)},uLight:{value:new I(s.light).multiplyScalar(1.5)},uTime:o,uActive:{value:0},uOpacity:{value:.85},uHits:{value:u}},f=new S({uniforms:d,vertexShader:xi,fragmentShader:Si,defines:a?{}:{ALTAR_LOW:1},transparent:!0,depthWrite:!1,blending:2,side:2,forceSinglePass:!0,toneMapped:!1}),p=new P(l,f);p.position.set(t,n,r),p.scale.set(i,c,i),p.renderOrder=4;let m=0;return{mesh:p,uniforms:d,height:c,hit(e,t,n){let r=u[m];m=(m+1)%u.length;let a=new O(e/i,t/c,n/i).normalize();r.set(a.x,Math.max(.05,a.y),a.z,0)},update(e){for(let t of u)t.w>=0&&(t.w=t.w>1.2?-1:t.w+e)}}}var wi=new I,Ti=class{pos=[];nor=[];col=[];v=new O;nm=new He;add(e,t,n){let r=e.index?e.toNonIndexed():e;r.getAttribute(`normal`)||r.computeVertexNormals();let i=r.getAttribute(`position`),a=r.getAttribute(`normal`);this.nm.getNormalMatrix(t);let o=typeof n==`number`?new I(n):null;for(let e=0;e<i.count;e++){let r=i.getX(e),s=i.getY(e),c=i.getZ(e);o?wi.copy(o):n(r,s,c,a.getX(e),a.getY(e),a.getZ(e),wi.setRGB(1,1,1)),this.v.set(r,s,c).applyMatrix4(t),this.pos.push(this.v.x,this.v.y,this.v.z),this.v.set(a.getX(e),a.getY(e),a.getZ(e)).applyMatrix3(this.nm).normalize(),this.nor.push(this.v.x,this.v.y,this.v.z),this.col.push(wi.r,wi.g,wi.b)}r!==e&&r.dispose()}get empty(){return this.pos.length===0}geometry(){let e=new F;return e.setAttribute(`position`,new k(this.pos,3)),e.setAttribute(`normal`,new k(this.nor,3)),e.setAttribute(`color`,new k(this.col,3)),e.computeBoundingSphere(),e}};function W(e,t,n,r=0,i=1,a=i,o=i){return new L().compose(new O(e,t,n),new C().setFromAxisAngle(new O(0,1,0),r),new O(i,a,o))}var Ei=(e,t)=>Math.atan2(e,t);function Di(e,t,n=.12){let r=new Qe(e.map(([e,t])=>new D(e,-t))),i=new ce(r,{depth:Math.max(.01,t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelOffset:-n,bevelSegments:1,curveSegments:4});return i.rotateX(-Math.PI/2),i.translate(0,n,0),i.deleteAttribute(`uv`),i}function Oi(e,t,n=0,r=0){let i=[];for(let a=0;a<e;a++){let o=n+a/e*Math.PI*2,s=Math.sin(o)*t,c=Math.cos(o)*t;if(r<=0){i.push([s,c]);continue}let l=n+(a-1)/e*Math.PI*2,u=n+(a+1)/e*Math.PI*2,d=Math.sin(l)*t,f=Math.cos(l)*t,p=Math.sin(u)*t,m=Math.cos(u)*t,h=Math.hypot(d-s,f-c),g=Math.hypot(p-s,m-c);i.push([s+(d-s)/h*r,c+(f-c)/h*r]),i.push([s+(p-s)/g*r,c+(m-c)/g*r])}return i}function ki(e,t=16){let n=new Ge(e.map(([e,t])=>new D(e,t)),t);return n.deleteAttribute(`uv`),n}function Ai(e,t,n,r=10,i=6){let a=new Ye(e),o=new ue(a,r,1,i,!1),s=o.getAttribute(`position`);for(let e=0;e<=r;e++){let o=a.getPointAt(e/r),c=t+(n-t)*(e/r);for(let t=0;t<=i;t++){let n=e*(i+1)+t;s.setXYZ(n,o.x+(s.getX(n)-o.x)*c,o.y+(s.getY(n)-o.y)*c,o.z+(s.getZ(n)-o.z)*c)}}return o.deleteAttribute(`uv`),o.computeVertexNormals(),o}function ji(e,t,n,r){let i=new Ti,a=new I(n),o=new I(r);return i.add(new Fe(1,0).scale(t,e/2,t),new L,(t,n,r,i,s,c,l)=>l.copy(a).lerp(o,.35+.65*Math.max(0,n/e+.4)).multiplyScalar(.85+.35*Math.abs(i*.6+s*.3+c*.5))),i.add(new Fe(1,0).scale(t*.42,e*.3,t*.42),new L,16777215),i.geometry()}function Mi(e,t,n={}){let r=new I(t),i=new I(e),a=n.cap===void 0?null:new I(n.cap),o=n.trimTop===void 0?null:new I(n.trimTop),s=n.y0??0,c=n.y1??2,l=n.courses??0,u=n.seed??0;return(e,t,d,f,p,m,h)=>{let g=Math.min(1,Math.max(0,(t-s)/Math.max(.01,c-s)));if(h.copy(r).lerp(i,.3+.55*g+.08*Math.sin(e*3.1+d*2.3+u)),l>0&&Math.floor((t-s)*l+.5*Math.floor((e+d)*1.3))%2&&h.multiplyScalar(.93),p>.75&&h.lerp(new I(16777215),.1),p<-.4&&h.multiplyScalar(.55),o&&n.trimBand&&t>c-n.trimBand&&p<.75&&h.copy(o),a&&p>.6&&(n.capAmount??0)>0){let t=(n.capAmount??0)*(.65+.35*Math.sin(e*5.3+d*4.1+u));h.lerp(a,Math.min(1,t))}}}function Ni(e,t){let n=Math.sin(Math.PI*Math.min(1,e*1.04)),r=-e*e*t*.7;return[-t*.42*n**.8+r-.04,t*n**.6*(1-.25*e)+r+.04]}function Pi(e,t,n=12,r=5,i=.12){let a=[],o=[];for(let s of[1,-1]){let c=a.length/3;for(let o=0;o<=n;o++){let c=o/n,[l,u]=Ni(c,t);for(let t=0;t<=r;t++){let n=t/r,o=s*(i*.5+.08*Math.sin(Math.PI*n)*(1-c*.6));a.push(l+(u-l)*n,c*e,o)}}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let n=c+e*(r+1)+t,i=n+1,a=n+r+1,l=a+1;s===1?o.push(n,i,a,i,l,a):o.push(n,a,i,i,a,l)}}let s=new F;return s.setAttribute(`position`,new k(a,3)),s.setIndex(o),s.computeVertexNormals(),s}function Fi(e,t,n,r,i=.06,a=.9,o=12,s=.12){let c=[],l=[];for(let u of[1,-1]){let d=c.length/3;for(let l=0;l<=o;l++){let d=i+(a-i)*l/o,[f,p]=Ni(d,t),m=f+(p-f)*n,h=u*(s*.5+.08*Math.sin(Math.PI*n)*(1-d*.6)+.015),g=r*.5*(1-d*.5);c.push(m-g,d*e,h,m+g,d*e,h)}for(let e=0;e<o;e++){let t=d+e*2;u===1?l.push(t,t+1,t+2,t+1,t+3,t+2):l.push(t,t+2,t+1,t+1,t+2,t+3)}}let u=new F;return u.setAttribute(`position`,new k(c,3)),u.setIndex(l),u.computeVertexNormals(),u}function Ii(e,t,n,r){let i=Math.min(1,Math.max(0,t/n)),[a,o]=Ni(i,r);return{u:o-a>1e-4?(e-a)/(o-a):.5,v:i}}function Li(e,t,n){return{x:e.k.x+e.u.x*t+e.v.x*n,z:e.k.z+e.u.z*t+e.v.z*n}}function Ri(e,t,n){let r=t===0?1:t===1?.8:.55;return e.fronts[t]+e.prow*r*Math.max(0,1-Math.abs(n)/(e.prowW*(1-t*.12)))}var zi=new WeakMap;function Bi(e,t){let n=zi.get(e);return n||zi.set(e,n=[Vi(e,t,0),Vi(e,t,1)]),n}function Vi(e,t,n){let r=e.fountains[n],i=e.cores[n],a=e.size/2,o=Math.sign(a-r.x),s=Math.sign(a-r.z);if(!(Math.abs(r.x-a)>e.size*.25&&Math.abs(r.z-a)>e.size*.25)||o===0||s===0){let e=i.x-r.x,t=i.z-r.z,n=Math.hypot(e,t)||1;o=e/n,s=t/n}else o/=Math.SQRT2,s/=Math.SQRT2;let c={x:o,z:s},l={x:-s,z:o},u=0;for(;u<16&&t.isOpenGround(r.x-c.x*(u+.25),r.z-c.z*(u+.25));)u+=.25;let d={x:r.x-c.x*u,z:r.z-c.z*u},f=(i.x-d.x)*c.x+(i.z-d.z)*c.z,p=1.9,m=u+9+.4;m=Math.max(u+6.5,Math.min(m,f-3.4-p));let h=Math.max(m-5.9,u+2.9),g=m-h>=3.6?Math.max(m-3.1,h+1.8):(m+h)/2,_={team:n,f:{x:r.x,z:r.z},k:d,u:c,v:l,b:u,fronts:[m,g,h],prow:p,prowW:m*.62,bastionS:-5,bastionR:4.6,guards:[{x:0,z:0},{x:0,z:0}],killR:11},v=e=>[0,1,2].flatMap(t=>{let n=t/3*Math.PI*2;return[Li(_,e+Math.cos(n)*_.bastionR,Math.sin(n)*_.bastionR),Li(_,e+Math.cos(n)*_.bastionR*.5,Math.sin(n)*_.bastionR*.5)]});for(;_.bastionS>-9&&v(_.bastionS).some(e=>t.isOpenGround(e.x,e.z));)_.bastionS-=.25;for(let e of[1,-1]){let n={x:(e*l.x-c.x)/Math.SQRT2,z:(e*l.z-c.z)/Math.SQRT2},r=Li(_,m-.883875,e*(m+.883875));_.guards[e===1?0:1]=Hi(t,r,1.4,n)}return _}function Hi(e,t,n,r,i=5){let a=(t,r)=>{if(e.isOpenGround(t,r))return!0;for(let i=0;i<8;i++)if(e.isOpenGround(t+Math.cos(i*.785)*n,r+Math.sin(i*.785)*n))return!0;return!1},o=t.x,s=t.z;for(let e=0;e<i&&a(o,s);e+=.25)o+=r.x*.25,s+=r.z*.25;return{x:o,z:s}}function Ui(e,t){let n=[];for(let r of Bi(e,t)){let e=Li(r,r.bastionS,0);n.push({x:e.x,z:e.z,r:r.bastionR+2.2});for(let e of r.guards)n.push({x:e.x,z:e.z,r:3.2});let t=r.fronts[0]*Math.SQRT2;for(let e of[1,-1])for(let i=1.5;i<t;i+=2.2){let t=i/Math.SQRT2,a=Li(r,t-1.1,e*(t+1.1));n.push({x:a.x,z:a.z,r:2.4})}}return n}var G=e=>new I(e);function Wi(e,t,n,r,i){let a=new Ti,o=new Ti,s=st[t.team],c=[],l=[],u=(t,n)=>e.heightAt(t,n),d=(e,t,n,r,i)=>{let a=r(i,u(e,t));for(let i=0;i<8;i++)a=r(a,u(e+Math.cos(i*.785)*n,t+Math.sin(i*.785)*n));return a},f=(e,t,n)=>d(e,t,n,Math.max,-1e9),p=(e,t,n)=>d(e,t,n,Math.min,1e9),m=Ei(t.u.x,t.u.z),h=n.stone,g=(e,t,r={})=>Mi(h[0],h[2],{courses:2.2,cap:n.cap,capAmount:n.capAmount,y0:e,y1:t,...r}),_=(e,t,n,r,i,a,o=0)=>{l.push({x:e,z:t,r:n,hex:r,i,y:Math.max(.6,a-u(e,t)),flicker:o})},v=Li(t,t.bastionS,0),y=[t.bastionR,t.bastionR*.76,t.bastionR*.52],b=[.7,1.45,2.2],x=Math.min(2.5,Math.max(0,f(v.x,v.z,t.bastionR*.8)-r-.4)),S=Math.min(r,p(v.x,v.z,t.bastionR))-.6,C=b.map(e=>r+e+x);y.forEach((e,t)=>{let r=C[t],i=Oi(3,e,0,e*.16);a.add(Di(i,r-S,.1),W(v.x,S,v.z,m),g(0,r-S,{trimTop:n.trim,trimBand:.13,seed:t}));let c=Oi(3,e-.45,0,(e-.45)*.16);for(let e=0;e<c.length;e++){let t=c[e],n=c[(e+1)%c.length],i=Math.hypot(n[0]-t[0],n[1]-t[1]),a=new N(.09,.05,i).translate(0,0,i/2).rotateY(Math.atan2(n[0]-t[0],n[1]-t[1])).translate(t[0],r+.005,t[1]);o.add(a,W(v.x,0,v.z,m),s.light)}});for(let e of[1,-1]){let t=e*2*Math.PI/3,n=Math.sin(t)*y[0]*.62,r=Math.cos(t)*y[0]*.62,i=new O(n,0,r).applyAxisAngle(new O(0,1,0),m);re(v.x+i.x,C[0],v.z+i.z)}let w=C[2],T=w+4.6;switch(n.motif){case`ice`:T=ae(v,w);break;case`wood`:T=oe(v,w);break;case`basalt`:T=se(v,w);break;default:T=ie(v,w)}for(let e=0;e<3;e++){let t=m+e/3*Math.PI*2+Math.PI/3,r=[];for(let e=0;e<=6;e++){let n=e/6,i=.4+1.05*Math.sin(n*Math.PI*.85)-n*.2;r.push(new O(Math.sin(t)*i,T-.15+n*2.9,Math.cos(t)*i))}a.add(Ai(r,.24,.05,14,7),W(v.x,0,v.z),(e,t,r,i,a,o,c)=>c.copy(G(s.dark)).lerp(G(s.main),Math.min(1,(t-T)*.6)).lerp(G(n.trim),t>T+2.3?.75:0))}let ee=new O(v.x,T+1.9,v.z);_(v.x,v.z,11,s.light,1.05,ee.y,1.2),_(v.x,v.z,6,s.main,.7,C[0]+.5);let te=new O(v.x,w,v.z),E=t.fronts[0]*Math.SQRT2;for(let i of[1,-1]){let c=(t.u.x+i*t.v.x)/Math.SQRT2,l=(t.u.z+i*t.v.z)/Math.SQRT2,u=(i*t.v.x-t.u.x)/Math.SQRT2,d=(i*t.v.z-t.u.z)/Math.SQRT2,m=Ei(c,l),h={x:u,z:d},_=(n,r,i)=>Hi(e.map,{x:t.k.x+c*n+u*r,z:t.k.z+l*n+d*r},i,h);for(let i=.4;i<E-.6;i+=2.4){let h=Math.min(2.28,E-.6-i),_=.62,v=n=>[0,.25,.5,.75,1].some(r=>e.map.isOpenGround(t.k.x+c*(i+h*r)+u*(n-.42),t.k.z+l*(i+h*r)+d*(n-.42)));for(;_<5&&v(_);)_+=.2;let y=t.k.x+c*(i+h/2)+u*_,b=t.k.z+l*(i+h/2)+d*_,x=Math.max(r+.55,f(y,b,.4)+.12),S=Math.min(r,p(y,b,.8))-.4;a.add(Di([[-.36,-h/2],[.36,-h/2],[.36,h/2],[-.36,h/2]],x-S,.07),W(y,S,b,m),g(0,x-S,{trimTop:n.trim,trimBand:.09,courses:3})),o.add(new N(.08,.04,h*.8),W(y-u*.05,x+.005,b-d*.05,m),s.light)}let v=_(E*.27,1.95,1.6);k(v.x,v.z,Ei(-u,-d));for(let e of[.5,.68]){let t=_(E*e,1.2,.7);ue(t.x,t.z,m+(i===1?Math.PI/2:-Math.PI/2))}if(de(i,c,l,u,d),i===-1){let e=_(E*.12+.6,1.6,1.15);te=pe(e.x,e.z)}}let D=[];return t.guards.forEach((n,r)=>{let i=r===0?1:-1,a=(t.u.x+i*t.v.x)/Math.SQRT2,o=(t.u.z+i*t.v.z)/Math.SQRT2,s={x:(i*t.v.x-t.u.x)/Math.SQRT2,z:(i*t.v.z-t.u.z)/Math.SQRT2};D.push(ce(n.x,n.z,Hi(e.map,{x:n.x-a*1.9,z:n.z-o*1.9},.6,s)))}),{lit:a.geometry(),glow:o.geometry(),spire:ee,guards:D,shop:te,flames:c,lights:l};function re(e,t,r){let i=ki([[0,0],[.34,0],[.24,.14],[.13,.85],[.5,1],[.55,1.18],[.42,1.16],[0,1.06]],10);a.add(i,W(e,t-.03,r),(e,t,r,i,a,o,s)=>s.copy(G(h[2])).lerp(G(n.trim),t>.95?.55:.1).multiplyScalar(a<-.3?.6:1)),o.add(new R(.4,.3,.06,10),W(e,t+1.12,r),n.flame),c.push({x:e,y:t+1.55,z:r,s:1}),_(e,r,5.5,n.flame,1,t+1.7,9)}function ie(e,t){let r=6.2;a.add(Di(Oi(4,1.5,Math.PI/4,.16),.7,.08),W(e.x,t,e.z,m),g(0,.7,{trimTop:n.trim,trimBand:.1}));let i=new R(.5,.92,r,4,8).rotateY(Math.PI/4).translate(0,3.8,0);a.add(i,W(e.x,t,e.z,m),(e,t,r,i,a,o,s)=>{g(.7,6.9,{courses:0})(e,t,r,i,a,o,s),(Math.abs(t-2.1)<.11||Math.abs(t-4.4)<.11)&&s.copy(G(n.trim))}),a.add(new Ne(.6,.9,4).rotateY(Math.PI/4).translate(0,6.9+.45,0),W(e.x,t,e.z,m),n.trim);for(let n=0;n<4;n++){let r=n/4*Math.PI*2;o.add(new N(.13,2,.05).translate(0,0,.74).rotateY(r).translate(0,3.25,0),W(e.x,t,e.z,m),s.light),o.add(new N(.45,.08,.05).translate(0,0,.84).rotateY(r).translate(0,1.5,0),W(e.x,t,e.z,m),s.light),o.add(new Fe(.16,0).translate(0,0,.66).rotateY(r).translate(0,5,0),W(e.x,t,e.z,m),s.light)}if(n.motif===`sand`&&o.add(new le(1.25,.07,6,40),W(e.x,t+.5+r+2,e.z,m),n.trim),n.motif===`obsidian`)for(let r=0;r<5;r++){let i=r/5*Math.PI*2;o.add(new Fe(.16,0).scale(1,2.2,1),W(e.x+Math.sin(i)*1.5,t+1.4+r%2*1.1,e.z+Math.cos(i)*1.5),n.glow)}return t+.7+r+.6}function ae(e,t){for(let[n,r,i,c]of[[0,0,.7,5],[.85,.3,.42,3.2],[-.8,.45,.4,2.8],[.2,-.85,.38,3],[-.35,-.6,.3,2.1]]){let l=new R(i*.75,i,c,6).translate(0,c/2,0),u=new Ne(i*.75,i*2.2,6).translate(0,c+i*1.1,0);for(let i of[l,u])a.add(i,W(e.x+n,t,e.z+r,m+n),(e,t,n,r,i,a,o)=>{o.copy(G(h[1])).lerp(G(h[0]),Math.min(1,t/(c+1))*.8+.2*Math.abs(r*.5+a*.8)),i>.5&&o.lerp(G(16777215),.5)});o.add(new R(i*.2,i*.32,c*.7,6).translate(0,c*.4,0),W(e.x+n,t,e.z+r),s.light)}return a.add(new le(.85,.08,6,24).rotateX(Math.PI/2),W(e.x,t+1.4,e.z),n.trim),t+5.4}function oe(e,t){let r=(e,t,r,i,a,o,s)=>{s.copy(G(h[2])).lerp(G(h[1]),.35+.35*Math.sin(Math.atan2(r,e)*9+t*1.4)),a>.6&&s.lerp(G(n.cap),.5)},i=[];for(let e=0;e<=8;e++){let t=e/8;i.push(new O(Math.sin(t*5)*.35*(1-t),t*4.8,Math.cos(t*5)*.35*(1-t)))}a.add(Ai(i,.95,.42,16,9),W(e.x,t-.2,e.z),r);for(let n=0;n<5;n++){let i=n/5*Math.PI*2+.4,o=[new O(0,1,0),new O(Math.sin(i)*1.1,.5,Math.cos(i)*1.1),new O(Math.sin(i)*2,-.2,Math.cos(i)*2)];a.add(Ai(o,.42,.12,8,6),W(e.x,t-.1,e.z),r)}for(let r=0;r<7;r++){let i=r*2.3,a=.6+r*.55,s=.75-r*.04,c=.22+r%3*.06;o.add(new fe(c,8,5,0,Math.PI*2,0,Math.PI/2).scale(1.3,.7,1.3),W(e.x+Math.sin(i)*s,t+a,e.z+Math.cos(i)*s),n.glow)}for(let n=0;n<10;n++){let r=n*.9,i=.4+n*.42;o.add(new ne(.07,0),W(e.x+Math.sin(r)*.8,t+i,e.z+Math.cos(r)*.8),s.light)}return t+4.7}function se(e,t){for(let[r,i,s,c]of[[0,0,.55,4.6],[.9,.2,.42,3.4],[-.75,.5,.45,3],[.3,-.85,.4,3.8],[-.6,-.55,.38,2.4],[.75,.85,.32,2]])a.add(new R(s,s*1.05,c,6).translate(0,c/2,0),W(e.x+r,t-.1,e.z+i,r*2),(e,t,n,r,i,a,o)=>{g(0,c,{courses:0})(e,t,n,r,i,a,o),i>.8&&o.copy(G(h[1]))}),o.add(new N(.06,c*.75,.04).translate(0,c*.42,s*.9),W(e.x+r,t-.1,e.z+i,r*2+.5),n.glow);return a.add(new le(.65,.08,6,6).rotateX(Math.PI/2),W(e.x,t+4.4,e.z),n.trim),t+4.6}function ce(e,i,c){let l=Math.max(r,p(e,i,.7))-.15,d=Ei(t.f.x-e,t.f.z-i),f=4.6;if(a.add(Di(Oi(4,1.35,Math.PI/4,.14),.65,.07),W(e,l,i,d),g(0,.65,{trimTop:n.trim,trimBand:.09})),n.motif===`wood`){let t=[new O(0,0,0),new O(.12,1.4,.05),new O(-.08,2.8,0),new O(0,5.199999999999999,0)];a.add(Ai(t,.62,.42,10,8),W(e,l+.55,i,d),(e,t,n,r,i,a,o)=>o.copy(G(h[2])).lerp(G(h[1]),.4+.3*Math.sin(t*3+n*5))),o.add(new fe(.8,12,6,0,Math.PI*2,0,Math.PI/2).scale(1,.5,1),W(e,l+f+1.1,i),n.glow)}else{let t=n.motif===`basalt`?6:8;a.add(new R(.44,.56,f,t,4).translate(0,2.9499999999999997,0),W(e,l,i,d),(e,t,r,i,a,o,s)=>{g(.6,5.25,{courses:0})(e,t,r,i,a,o,s),(Math.abs(t-1.7)<.09||Math.abs(t-3.6)<.09||Math.abs(t-4.4)<.06)&&s.copy(G(n.trim))}),a.add(new R(.82,.52,.38,t).translate(0,5.44,0),W(e,l,i,d),g(0,4.5,{trimTop:n.trim,trimBand:.1}))}let m=l+.65+f+.38;for(let t=0;t<3;t++){let r=d+t/3*Math.PI*2,o=[];for(let e=0;e<=5;e++){let t=e/5,n=.36+.62*Math.sin(t*Math.PI*.85)-t*.14;o.push(new O(Math.sin(r)*n,t*1.8,Math.cos(r)*n))}a.add(Ai(o,.14,.035,10,5),W(e,m-.05,i),(e,t,r,i,a,o,c)=>c.copy(G(s.dark)).lerp(G(s.main),Math.min(1,t)).lerp(G(n.trim),t>1.4?.7:0))}o.add(new le(.5,.04,4,24).rotateX(Math.PI/2),W(e,l+2.65,i),s.light),o.add(new le(.47,.03,4,24).rotateX(Math.PI/2),W(e,l+4,i),s.light),o.add(new le(1.2,.04,4,4).rotateX(Math.PI/2).rotateY(Math.PI/4),W(e,l+.67,i,d),s.light),re(c.x,Math.max(r,u(c.x,c.z)),c.z);let v=m+1.2;return _(e,i,6,s.light,.9,v),new O(e,v,i)}function k(e,t,i){let c=Math.max(r,p(e,t,.9))-.1,l=W(e,c,t,i,1.3),u=g(0,4.3,{courses:0});a.add(Di(Oi(4,1.2,Math.PI/4,.14),.55,.06),l,g(0,.55,{trimTop:n.trim,trimBand:.08})),a.add(new N(1.35,.3,1.35).translate(0,.7,0),l,u),a.add(new R(.46,.86,2.3,10).translate(0,2,0),l,u),a.add(new R(.66,.5,.45,10).translate(0,3.32,0),l,u),a.add(new fe(.55,12,9).scale(1,1.12,1).translate(0,3.86,.02),l,u);for(let e of[-1,1])a.add(new fe(.3,8,6).scale(1.1,.8,1).translate(e*.62,3.42,0),l,n.trim);for(let e of[-1,1])a.add(new Be(.16,1,3,8).rotateX(-.5).translate(e*.4,3.2,.5),l,u);a.add(new N(.62,1.7,.08).translate(0,2.05,.6).rotateX(-.08),l,(e,t,r,i,a,o,c)=>{c.copy(G(s.dark)).lerp(G(s.main),Math.min(1,(t-1.2)*.7)),(Math.abs(e)>.24||t<1.27)&&c.copy(G(n.trim))});let d=new R(.62,1.02,2.5,12,1,!0,Math.PI*.55,Math.PI*.9).translate(0,2.05,-.06);a.add(d,l,(e,t,n,r,i,a,o)=>o.copy(G(s.dark)).lerp(G(s.main),Math.min(1,(t-.8)*.45))),a.add(new N(.18,2.75,.08).translate(0,2,.84),l,n.trim),a.add(new N(.95,.13,.15).translate(0,3.4,.84),l,n.trim),a.add(new R(.07,.07,.5,6).translate(0,3.72,.84),l,h[2]);for(let e of[-1,1])o.add(new N(.1,.05,.05).translate(e*.16,3.86,.55),l,s.light);o.add(new N(.06,1.3,.02).translate(0,1.85,.89),l,s.light),_(e,t,3.5,s.light,.4,c+2)}function ue(e,t,i){let o=Math.max(r,p(e,t,.4))-.1,c=new R(.08,.1,4.6,6).translate(0,2.3,0);a.add(c,W(e,o,t),4864554),a.add(new Fe(.2,0).translate(0,4.75,0),W(e,o,t),n.trim),a.add(new N(1.45,.09,.09).translate(0,4.35,0),W(e,o,t,i),n.trim);let l=new N(1.25,2.8,.05,6,10,1),u=l.getAttribute(`position`);for(let e=0;e<u.count;e++){let t=u.getY(e),n=u.getX(e);t<-1.3&&u.setY(e,t+.55*(1-Math.abs(n)/.625)),u.setZ(e,u.getZ(e)+.1*Math.sin((t+1.4)*2)+.06*Math.sin(n*4))}l.translate(0,2.88,.07),a.add(l,W(e,o,t,i),(e,t,r,i,a,o,c)=>{c.copy(G(s.main)).lerp(G(s.dark),Math.max(0,(2.2-t)*.35)),(t>4.05||Math.abs(e)>.52)&&c.copy(G(n.trim));let l=t-3,u=Math.max(Math.abs(e)*1.6+l*.8,-l);u<.42&&c.copy(G(u<.32?s.light:n.trim))})}function de(e,r,c,l,u){let d=new O(r,0,c),f=new O(l,0,u),p=.85,m=new O(0,Math.cos(p),0).addScaledVector(f,Math.sin(p)),g=new O().crossVectors(d,m).normalize();g.y<0&&g.negate();let _=Li(t,t.bastionS+1.2,e*1.25),v=C[2]+2.4,y=(e,t,r,c,l)=>{let u=m.clone().multiplyScalar(Math.cos(r)).addScaledVector(d,Math.sin(r)).normalize(),f=new O().crossVectors(u,g).normalize(),p=new L().makeBasis(f,u,g);p.setPosition(_.x+g.x*c*.2,v+g.y*c*.2,_.z+g.z*c*.2);let y=n.motif===`wood`?n.cap:h[0];a.add(Pi(e,t,i?14:9,i?6:4),p,(r,i,a,o,c,u,d)=>{let{u:f,v:p}=Ii(r,i,e,t);d.copy(G(y)).lerp(G(h[1]),.3*(1-f));let m=Math.min(1,Math.max(0,(p-.28)*2.2));d.lerp(G(s.main).lerp(G(s.dark),.35*(1-p)),m*.92),p>.8&&d.lerp(G(s.light),(p-.8)*2.5),(f>.84||p<.06||p>.97)&&d.copy(G(n.trim)),d.multiplyScalar(l)}),o.add(Fi(e,t,.4,.09),p,n.motif===`basalt`?n.glow:s.light)},b=e===1?.72:.88,x=i?7:5;for(let e=x-1;e>=0;e--){let t=e/(x-1);y((9.6-t*4.6)*b,1.05-t*.25,.08+t*1.62,-1-e*.02,.82+.18*(1-t))}let S=i?5:3;for(let e=0;e<S;e++){let t=e/(S-1);y((4.4-t*1.2)*b,1.2,.25+t*1.35,.6,1.05)}}function pe(e,t){let i=Math.max(r,p(e,t,.6))-.08,s=ki([[0,0],[.75,0],[.8,.16],[.5,.28],[.36,.9],[.58,1.05],[.6,1.16],[0,1.16]],12);a.add(s,W(e,i,t),(e,t,r,i,a,o,s)=>s.copy(G(h[1])).lerp(G(h[0]),t*.5).lerp(G(n.trim),t>1||t<.17?.8:0).multiplyScalar(a<-.4?.6:1));for(let n=0;n<6;n++){let i=n*1.1,o=.85+n%2*.2;a.add(new R(.16,.16,.05+n%3*.05,10),W(e+Math.cos(i)*o,Math.max(r,u(e+Math.cos(i)*o,t+Math.sin(i)*o))+.03,t+Math.sin(i)*o),16765024)}return o.add(new le(.62,.035,4,28).rotateX(Math.PI/2),W(e,i+1.18,t),16765562),_(e,t,4.5,16762976,.6,i+1.8,2),new O(e,i+1.95,t)}}var K=(e,t)=>e+Math.random()*(t-e);function Gi(e,t,n,r,i,a){let o=a?.45:.34,s=a?.64:.43,c=e.quality===`low`,l=[{rad:1.25,c1:r,c2:r,a:.28,stripes:3,speed:12},{rad:.8,c1:i,c2:r,a:.46,stripes:2,speed:18},{rad:.3,c1:16777215,c2:i,a:.75,stripes:0,speed:0}],u=0,d=[null,null,null],f=Array.from({length:10},()=>({x:0,y:0,z:0,w:0,a:0})),p=[null,null],m=0,h=!1;for(let n=0;n<(c?3:8);n++){let n=K(0,Math.PI*2),r=K(.5,1.1);e.glow.emit({x:t.x+Math.cos(n)*r,y:t.y+K(-.4,.4),z:t.z+Math.sin(n)*r,vx:-Math.cos(n)*r*9,vz:-Math.sin(n)*r*9,life:.1,size:.25,size1:.05,color:16777215,color2:i})}e.glow.emit({x:t.x,y:t.y,z:t.z,life:.16,size:a?2.6:1.8,size1:a?1.2:.8,color:16777215,color2:r,alpha:1});let g=n.x-t.x,_=n.y-t.y,v=n.z-t.z;return{update(y){m+=y;let b=m/o;if(b>=1)return!1;let x=Math.min(1,m/.05),S=b<.6?1:(1-b)/.4,C=t.x+g*x,w=t.y+_*x,T=t.z+v*x;l.forEach((n,r)=>{let i=d[r];if(!i){if(i=d[r]=e.columns.alloc(),!i)return;i.color(n.c1,n.c2),i.base=.02,i.topFade=.03,i.stripes=n.stripes,i.speed=n.speed,i.twist=0,i.edge=1,i.visible=!0}i.between(t.x,t.y,t.z,C,w,T),i.radius=s*n.rad*(.9+Math.sin(m*70+r)*.1)*Math.max(.15,S)*(m<.06?1.5:1),i.time=m,i.alpha=n.a*S});for(let e=0;e<f.length;e++){let n=e/(f.length-1),r=f[e],i=e>0&&e<f.length-1?.12:0;r.x=t.x+g*x*n+K(-i,i),r.y=t.y+_*x*n+K(-i,i),r.z=t.z+v*x*n+K(-i,i),r.w=s*.32*K(.7,1),r.a=S}for(e.ribbons.strip(f,f.length,16777215),p[0]||=e.lights.attach(),p[1]||=e.lights.attach(),p[0].set(C,T,a?4:3,i,.8*S),p[1].set(t.x+g*.5,t.z+v*.5,Math.hypot(g,v)*.5+1,r,.25*S),u+=y*(c?30:75)*S;u>=1;){--u;let n=Math.random()*x;e.glow.emit({x:t.x+g*n+K(-.2,.2),y:t.y+_*n+K(-.2,.2),z:t.z+v*n+K(-.2,.2),vx:K(-1.2,1.2),vy:K(-.4,1.6),vz:K(-1.2,1.2),life:K(.2,.45),size:K(.16,.34),size1:.03,color:Math.random()<.4?16777215:i,color2:r,shape:Math.random()<.3?Gt.zap:Gt.glow,rot:K(0,6)})}if(!h&&x>=1){h=!0,e.glow.emit({x:n.x,y:n.y,z:n.z,life:.14,size:a?1.7:1.3,size1:.8,color:16777215,color2:i,alpha:.55}),e.glow.emit({x:n.x,y:n.y,z:n.z,life:.12,size:a?2.2:1.7,size1:3.2,color:i,color2:r,shape:Gt.burst,alpha:.7,rot:K(0,6)});for(let t=0;t<(c?5:14);t++){let t=K(0,Math.PI*2),r=K(3,8);e.glow.emit({x:n.x,y:n.y,z:n.z,vx:Math.cos(t)*r,vy:K(1,6),vz:Math.sin(t)*r,life:K(.25,.5),size:K(.12,.22),size1:.03,color:16777215,color2:i,gravity:12,stretch:1.4,bounce:.35})}for(let t=0;t<(c?2:6);t++)e.glow.emit({x:n.x+K(-.3,.3),y:n.y+K(-.4,.6),z:n.z+K(-.3,.3),life:.12,size:K(.4,.7),color:16777215,color2:i,shape:Gt.zap,rot:K(0,6),alpha:1.2});e.flash(n.x,n.y,n.z,i,a?1.3:.9,.16,6),e.shakeAt(n.x,n.z,a?.12:.07)}return!0},dispose(){for(let e of d)e?.release();for(let e of p)e?.release()}}}function Ki(e,t,n,r,i,a,o){let s=1.6,c=e.quality===`low`,l=0,u=[null,null],d=e.columns.alloc(),f=[null,null,null],p=e.lights.attach(),m=!1;return d&&(d.color(o,a),d.base=.02,d.topFade=.02,d.stripes=2,d.speed=10,d.twist=0,d.edge=1,d.visible=!0),{update(h){if(l+=h,l>=s)return!1;let g=l/s,_=Math.min(1,l/.12),v=g<.45?1:Math.max(0,(1-g)/.55);for(let i=0;i<2;i++){let s=u[i];if(!s){if(s=u[i]=e.columns.alloc(),!s)continue;s.color(i===0?a:o,i===0?o:a),s.base=.05,s.topFade=.35,s.stripes=i===0?4:1,s.speed=-6,s.twist=i===0?3:0,s.edge=1,s.visible=!0}s.between(t,n,r,t,n+16*_,r),s.radius=(i===0?1.05:.42)*(.6+.4*v)*(l<.2?1.6-l*3:1),s.time=l,s.alpha=(i===0?.42:.38)*v}d&&(d.between(i.x,i.y,i.z,t,n+1.2,r),d.radius=.22*v*(.85+.15*Math.sin(l*40)),d.time=l,d.alpha=.7*v*(g<.7));for(let i=0;i<3;i++){let s=f[i];if(!s){if(s=f[i]=e.ground.alloc(),!s)continue;i===1?s.decal(`rune`):i===2&&s.decal(`glyph`),s.color(o,a),s.visible=!0}let c=1-(1-Math.min(1,l/(.35+i*.2)))**3,u=i===0?.6+c*4.2:1.2+c*(2.2+i*.6);i===0?s.ring(t,r,u,.35*(1-c)+.06,n+.07):(s.x=t,s.z=r,s.y=n+.06+i*.01,s.R=u,s.fill=1,s.rot=l*(i===1?.8:-.6)),s.alpha=(i===0?.8:.6)*v}if(p.set(t,r,5,o,.7*v),!m){m=!0,e.flash(t,n+2,r,o,1,.3,9);for(let i=0;i<(c?10:28);i++){let a=K(0,Math.PI*2),s=K(.2,1.6);e.glow.emit({x:t+Math.cos(a)*s,y:n+K(0,.6),z:r+Math.sin(a)*s,vx:Math.cos(a)*K(.3,1.5),vy:K(2.5,7),vz:Math.sin(a)*K(.3,1.5),life:K(.6,1.3),size:K(.14,.3),size1:.04,color:16777215,color2:o,drag:1.2,shape:i%4==0?Gt.rune:Gt.glow,rot:K(0,6)})}for(let i=0;i<(c?6:16);i++){let s=i/16*Math.PI*2;e.glow.emit({x:t+Math.cos(s)*.6,y:n+.15,z:r+Math.sin(s)*.6,vx:Math.cos(s)*7,vz:Math.sin(s)*7,life:.45,size:.3,size1:.08,color:o,color2:a,drag:3,stretch:1.2})}}return!0},dispose(){for(let e of u)e?.release();d?.release();for(let e of f)e?.release();p.release()}}}function qi(e,t,n){let r=[];for(let i of e)if(i.type===`damage`&&i.sourceId===0&&i.dmgType===`true`){let e=t(i.targetId);if(!e||e.kind!==`hero`)continue;for(let t of n)e.team===t.team||Math.hypot(i.x-t.f.x,i.z-t.f.z)>t.killR+.75||r.push({kind:`zap`,team:t.team,target:i.targetId,x:i.x,z:i.z})}else if(i.type===`respawn`){let e=t(i.unitId);e&&e.kind===`hero`&&(e.team===0||e.team===1)&&r.push({kind:`respawn`,team:e.team,unit:i.unitId})}return r}var Ji={moss:0,sand:1,ice:2,obsidian:3,wood:4,basalt:5},Yi=`
uniform vec2 uK;
uniform vec2 uU;
uniform vec2 uV;
uniform vec3 uFront;
uniform vec2 uProw;
uniform float uB;
uniform float uHeal;
uniform float uTime;
uniform float uActive;
uniform float uShop;
uniform float uMotif;
uniform vec3 uPave0;
uniform vec3 uPave1;
uniform vec3 uPave2;
uniform vec3 uMortar;
uniform vec3 uTrim;
uniform vec3 uCap;
uniform float uCapAmt;
uniform vec3 uGlowN;
uniform vec3 uTeam;
uniform vec3 uTeamL;
varying vec3 vPlazaW;
varying float vKeep;

float ph(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec2 ph2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
float pn(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(ph(i), ph(i + vec2(1, 0)), f.x), mix(ph(i + vec2(0, 1)), ph(i + vec2(1, 1)), f.x), f.y); }
// Voronoi: x = distance to the nearest cell edge, y = cell id.
vec2 vor(vec2 x) {
  vec2 n = floor(x), f = fract(x), mg, mr;
  float md = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 o = 0.15 + 0.7 * ph2(n + g);
    vec2 r = g + o - f;
    float d = dot(r, r);
    if (d < md) { md = d; mr = r; mg = g; }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) {
    vec2 g = mg + vec2(float(i), float(j));
    vec2 o = 0.15 + 0.7 * ph2(n + g);
    vec2 r = g + o - f;
    if (dot(mr - r, mr - r) > 0.00001) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
  }
  return vec2(md, ph(n + mg));
}
float fr(float t, float H, float k, float w) { return H + uProw.x * k * max(0.0, 1.0 - abs(t) / w); }
float band(float x, float a, float b, float soft) { return smoothstep(a - soft, a, x) * (1.0 - smoothstep(b, b + soft, x)); }
// Rune strokes in a band: u along the ring (cells), v across (0..1).
float glyph(vec2 uv, float seed) {
  vec2 c = vec2(floor(uv.x), seed);
  vec2 f = vec2(fract(uv.x), uv.y);
  float h = ph(c);
  float g = 0.0;
  g = max(g, band(f.x, 0.45, 0.55, 0.03) * step(0.2, f.y) * step(f.y, 0.8));
  g = max(g, band(f.y, 0.47 + (h - 0.5) * 0.4, 0.53 + (h - 0.5) * 0.4, 0.03) * step(0.2, f.x) * step(f.x, 0.8) * step(0.3, h));
  g = max(g, band(abs(f.x - 0.5) - abs(f.y - 0.5) * (h > 0.6 ? 1.0 : -1.0), -0.04, 0.04, 0.03) * step(0.6, ph(c + 3.1)) * step(0.15, f.y) * step(f.y, 0.85));
  return g * step(0.12, f.x) * step(f.x, 0.88);
}
`,Xi=`
{
  vec2 rel = vPlazaW.xz - uK;
  float s = dot(rel, uU);
  float t = dot(rel, uV);
  float W = uProw.y;
  float f0 = fr(t, uFront.x, 1.0, W);
  float f1 = fr(t, uFront.y, 0.8, W * 0.88);
  float f2 = fr(t, uFront.z, 0.55, W * 0.76);
  // Bounded by the front and by where the terrain lifts into walls (vKeep): clean corners end at
  // the map edges (the legs), chamfered ones fill their flat ground.
  if (vKeep < 0.5 || s > f0 || abs(t) > s + 6.0 || s < -0.9) discard;
  float e0 = f0 - s, e1 = f1 - s, e2 = f2 - s;
  int tier = e2 > 0.0 ? 2 : e1 > 0.0 ? 1 : 0;
  float eIn = tier == 2 ? e2 : tier == 1 ? e1 : e0;
  vec2 fp = vPlazaW.xz - (uK + uU * uB);
  float r = length(fp);
  float ang = atan(dot(fp, uV), dot(fp, uU));
  vec3 col;
  float joint = 1.0;
  float idv = 0.0;
  if (tier == 0) {
    // Big slabs in running bond, square to the map edges (the platform's legs).
    vec2 q = vec2(s - t, s + t) * 0.7071;
    float row = floor(q.y / 1.35);
    float col0 = q.x / 1.9 + row * 0.5;
    idv = ph(vec2(row, floor(col0)));
    col = uPave0 * (0.88 + 0.22 * idv);
    joint = smoothstep(0.02, 0.06, min(fract(q.y / 1.35), 1.0 - fract(q.y / 1.35)) * 1.35) * smoothstep(0.02, 0.06, min(fract(col0), 1.0 - fract(col0)) * 1.9);
    // Worn corners: a soft dark speck per slab.
    col *= 1.0 - 0.08 * step(0.7, ph(vec2(floor(col0), row) + 7.0)) * (1.0 - smoothstep(0.0, 0.5, length(vec2(fract(col0) - 0.25, fract(q.y / 1.35) - 0.3))));
  } else if (tier == 1) {
    float row = floor(e1 / 0.95);
    float along = t / 1.7 + row * 0.5;
    idv = ph(vec2(row, floor(along)));
    col = uPave1 * (0.9 + 0.18 * idv);
    joint = smoothstep(0.02, 0.06, min(fract(e1 / 0.95), 1.0 - fract(e1 / 0.95)) * 0.95) * smoothstep(0.015, 0.05, min(fract(along), 1.0 - fract(along)) * 1.7);
  } else {
    float ring = floor(r / 1.05);
    float segs = max(6.0, floor(ring * 6.0 + 6.0));
    float a = (ang / 6.2832 + 0.5) * segs + ring * 0.37;
    idv = ph(vec2(ring, floor(a)));
    col = mix(uPave2, uTeamL, 0.1) * (0.93 + 0.12 * idv);
    joint = smoothstep(0.02, 0.05, min(fract(r / 1.05), 1.0 - fract(r / 1.05)) * 1.05) * smoothstep(0.01, 0.04, min(fract(a), 1.0 - fract(a)) * 6.2832 * max(r, 0.5) / segs);
  }
  col = mix(uMortar, col, joint);
  // Weathering per motif: moss / sand drifts / frost / ash in the joints and patches.
  float patchN = pn(vec2(s, t) * 0.55) * 0.65 + pn(vec2(s, t) * 1.9) * 0.35;
  float wear = smoothstep(0.58, 0.82, patchN) * uCapAmt;
  col = mix(col, uCap, wear * (tier == 2 ? 0.25 : 0.7) * (0.6 + 0.4 * (1.0 - joint)));
  // Kerb: big blocks along each tier front, lit lip, shaded riser just outside the upper tier.
  float kerb = 1.0 - smoothstep(0.5, 0.56, eIn);
  if (kerb > 0.0) {
    float kt = t / 1.15 + float(tier) * 0.31;
    float kj = smoothstep(0.02, 0.06, min(fract(kt), 1.0 - fract(kt)) * 1.15);
    vec3 kc = mix(uPave2, uPave1, 0.35) * (0.95 + 0.1 * ph(vec2(floor(kt), float(tier))));
    col = mix(col, mix(uMortar, kc, kj), kerb);
  }
  col *= 1.0 + 0.32 * band(eIn, 0.4, 0.5, 0.03);
  // Processional way: a team-coloured inlaid runner from the spawn sigil out to the prow, gold
  // edged, with diamonds; it runs over the steps (the riser shading below still breaks it).
  float run = (1.0 - smoothstep(0.95, 1.0, abs(t))) * step(2.85, r) * step(uB, s) * (1.0 - smoothstep(f0 - 0.5, f0 - 0.4, s));
  if (run > 0.0) {
    vec3 rc = mix(uTeam * 0.62, uTeamL * 0.55, 0.25 + 0.25 * sin(s * 0.9));
    float dia = 1.0 - smoothstep(0.32, 0.38, abs(fract(s / 1.4) - 0.5) * 1.4 * 0.8 + abs(t) * 0.8);
    rc = mix(rc, uTrim, dia * 0.85);
    rc = mix(rc, uTrim, band(abs(t), 0.8, 0.95, 0.02));
    col = mix(col, rc, run);
  }
  // Riser: the band of the lower tier just outside a higher tier edge, and tier 1's own front face.
  float riser = 0.0;
  if (tier == 0) riser = max(riser, band(-e1, 0.0, 0.42, 0.04));
  if (tier == 1) riser = max(riser, band(-e2, 0.0, 0.42, 0.04));
  riser = max(riser, band(e0, 0.0, 0.3, 0.02));
  if (riser > 0.0) {
    float vj = smoothstep(0.02, 0.06, min(fract(t / 0.7), 1.0 - fract(t / 0.7)) * 0.7);
    col = mix(col, mix(uMortar, uPave0 * 0.62, vj), riser);
  }
  // Contact shade where the platform meets the walls.
  col *= mix(0.6, 1.0, smoothstep(0.5, 0.95, vKeep));
  // Gold trim line behind every kerb.
  float trim = band(eIn, 0.62, 0.7, 0.025);
  col = mix(col, uTrim, trim);
  vec3 glow = uTrim * trim * 0.25;
  // Team inlays: dashed line on tier 2, solid on the sanctum; chevrons on the prow.
  float pulse = 0.75 + 0.25 * sin(uTime * 2.0) + uActive * 0.8;
  float inl = 0.0;
  if (tier >= 1) {
    float dash = tier == 1 ? step(0.28, fract(t / 1.6 + 0.1)) : 1.0;
    inl = band(eIn, 0.95, 1.07, 0.025) * dash;
  }
  float ax = abs(t);
  for (int k = 0; k < 3; k++) {
    float sk = f0 - 1.35 - float(k) * 0.95 + ax * 0.6;
    float wave = 0.55 + 0.45 * sin(uTime * 3.5 - float(k) * 1.4);
    inl = max(inl, band(s, sk - 0.13, sk + 0.13, 0.03) * step(ax, 1.25) * step(e1, -0.2) * wave);
  }
  // Heal / shop ring around the fountain: dashed runes, slowly turning.
  float rr = abs(r - uHeal);
  float da = fract((ang / 6.2832) * 48.0 + uTime * 0.25);
  float heal = (1.0 - smoothstep(0.12, 0.17, rr)) * step(0.32, da);
  heal += band(r, uHeal - 0.42, uHeal - 0.36, 0.02) * 0.6;
  // Spawn sigil: rune band, rings and a turning triangle.
  float sig = 0.0;
  sig += band(r, 2.62, 2.74, 0.025) + band(r, 2.02, 2.1, 0.025) * 0.8;
  sig += glyph(vec2((ang / 6.2832 + 0.5) * 22.0 + uTime * 0.12, (r - 2.14) / 0.44), 1.0) * step(2.14, r) * step(r, 2.58);
  float ta = uTime * 0.25;
  vec2 q = vec2(cos(ta) * dot(fp, uU) - sin(ta) * dot(fp, uV), sin(ta) * dot(fp, uU) + cos(ta) * dot(fp, uV));
  float tri = -1e3;
  for (int k = 0; k < 3; k++) {
    float a = float(k) * 2.0944;
    tri = max(tri, dot(q, vec2(cos(a), sin(a))));
  }
  sig += band(tri, 0.82, 1.0, 0.02) * step(r, 2.0);
  sig += (1.0 - smoothstep(0.0, 1.0, tri)) * step(r, 2.0) * 0.12;
  vec2 q2 = -q;
  float tri2 = -1e3;
  for (int k = 0; k < 3; k++) {
    float a = float(k) * 2.0944;
    tri2 = max(tri2, dot(q2, vec2(cos(a), sin(a))));
  }
  sig += band(tri2, 0.86, 0.98, 0.02) * step(r, 2.0) * 0.55;
  sig += (1.0 - smoothstep(0.0, 0.5, r)) * 0.8;
  col = mix(col, uTrim * 0.9, clamp(band(r, 2.62, 2.74, 0.025) + band(r, 2.02, 2.1, 0.025), 0.0, 1.0) * 0.6);
  // Motif extras: lava cracks (basalt), violet veins (obsidian), glowing mushroom specks (wood).
  float extra = 0.0;
  if (uMotif > 4.5 && tier == 0) {
    vec2 v2 = vor(vec2(s, t) * 0.82);
    extra = (1.0 - smoothstep(0.0, 0.05, v2.x)) * step(0.62, pn(vec2(s, t) * 0.4));
  } else if (uMotif > 2.5 && uMotif < 3.5) {
    extra = (1.0 - smoothstep(0.0, 0.035, abs(pn(vec2(s, t) * 0.7) - 0.5))) * 0.6 * step(float(tier), 1.0);
  } else if (uMotif > 3.5 && uMotif < 4.5) {
    vec2 c = floor(vec2(s, t) * 2.2);
    vec2 o = fract(vec2(s, t) * 2.2) - 0.5;
    extra = (1.0 - smoothstep(0.08, 0.16, length(o))) * step(0.93, ph(c)) * (1.0 - joint * 0.5) * step(float(tier), 1.0);
  }
  diffuseColor.rgb = col;
  float act = 1.0 + uActive * 1.2;
  glow += uTeamL * inl * pulse * 1.6;
  glow += mix(uTeamL, vec3(1.0, 0.86, 0.5), uShop * 0.45) * heal * (0.9 + 0.5 * uActive + 0.4 * uShop);
  glow += uTeamL * sig * 1.35 * act;
  glow += uGlowN * extra * (0.8 + 0.3 * sin(uTime * 1.7 + s));
  totalEmissiveRadiance += glow;
  diffuseColor.rgb = mix(diffuseColor.rgb, uTeam * 0.6, clamp(inl + heal * 0.6 + sig * 0.5, 0.0, 1.0) * 0.6);
}
`;function Zi(e,t,n,r,i){let a=st[t.team],o=t.fronts[0]+t.prow+.6,s=.5,c=Math.ceil((o+1)/s)+1,l=o+6.5,u=Math.ceil(2*l/s)+1,d=[],f=[],p=[];for(let n=0;n<c;n++){let i=-1+n*s;for(let n=0;n<u;n++){let a=-l+n*s,o=Li(t,i,a),c=e.heightAt(o.x,o.z);d.push(o.x,c+.016,o.z),f.push(+(c-r<.22&&c-r>-.6)),p.push(Math.abs(a)<=i+6.5&&i<=Ri(t,0,a)+.8&&i>=-1.2)}}let m=[],h=t.u.z*t.v.x-t.u.x*t.v.z>0;for(let e=0;e<c-1;e++)for(let t=0;t<u-1;t++){let n=e*u+t,r=n+1,i=n+u,a=i+1;(p[n]||p[r]||p[i]||p[a])&&(f[n]||f[r]||f[i]||f[a])&&(h?m.push(n,i,r,r,i,a):m.push(n,r,i,r,a,i))}let g=new F;g.setAttribute(`position`,new k(d,3)),g.setAttribute(`aKeep`,new k(f,1)),g.setIndex(m),g.computeVertexNormals(),g.computeBoundingSphere();let _=e=>new I(e),v={uK:{value:new D(t.k.x,t.k.z)},uU:{value:new D(t.u.x,t.u.z)},uV:{value:new D(t.v.x,t.v.z)},uFront:{value:new O(...t.fronts)},uProw:{value:new D(t.prow,t.prowW)},uB:{value:t.b},uHeal:{value:9},uTime:i,uActive:{value:0},uShop:{value:0},uMotif:{value:Ji[n.motif]},uPave0:{value:_(n.pave[0])},uPave1:{value:_(n.pave[1])},uPave2:{value:_(n.pave[2])},uMortar:{value:_(n.mortar)},uTrim:{value:_(n.trim)},uCap:{value:_(n.cap)},uCapAmt:{value:n.capAmount},uGlowN:{value:_(n.glow).multiplyScalar(1.6)},uTeam:{value:_(a.main)},uTeamL:{value:_(a.light)}},y=new M({polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});y.defines={TOON_LO:`0.3`,TOON_HI:`0.6`},y.onBeforeCompile=e=>{Object.assign(e.uniforms,v),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aKeep;
varying vec3 vPlazaW;
varying float vKeep;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vPlazaW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vKeep = aKeep;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Yi}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${Xi}`)},y.customProgramCacheKey=()=>`va-altar-plaza`,gi(y,`altar-plaza`);let b=new P(g,y);return b.receiveShadow=!0,b.renderOrder=0,{mesh:b,uniforms:v}}var Qi=`
uniform vec3 uColor;
uniform float uAlpha;
varying vec2 vP;
float h1(float x) { return fract(sin(x * 127.1) * 43758.5453); }
void main() {
  float a = atan(vP.y, vP.x) / 6.2832 + 0.5;
  float r = length(vP);
  float cell = floor(a * 40.0);
  float f = fract(a * 40.0);
  float rr = (r - 0.82) / 0.18;
  float stroke = step(0.25, f) * step(f, 0.75) * step(0.2, rr) * step(rr, 0.8) * step(0.3, h1(cell));
  float rail = step(abs(rr - 0.05), 0.07) + step(abs(rr - 0.95), 0.07);
  float al = (stroke + rail * 0.8) * uAlpha;
  gl_FragColor = vec4(uColor * al, al);
}`,$i=`attribute float aScale; varying vec2 vUv; void main() { vUv = uv; vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * aScale; gl_Position = projectionMatrix * mv; }`,ea=`uniform float uTime; uniform vec3 uColor; varying vec2 vUv; void main() { vec2 q = vUv * 2.0 - 1.0; q.y += 0.35; float w = 1.0 - q.y * 0.55; float fl = sin(uTime * 13.0 + vUv.y * 9.0) * 0.08 * vUv.y; float d = length(vec2((q.x + fl) / max(0.2, w * 0.6), (q.y + 0.2) * 0.75)); float a = smoothstep(1.0, 0.35, d); vec3 c = mix(uColor, vec3(3.0, 2.6, 1.6), smoothstep(0.7, 0.1, d)); gl_FragColor = vec4(c * a, a); }`,ta=class{data;vfx;high;group=new tt;time={value:0};views=[];layouts;pending=[];constructor(e,t,n,r,i){this.data=e,this.vfx=r,this.high=i;let a=Ft(t.key),o=gi(new M({vertexColors:!0}),`altar`);o.defines={TOON_RIM:bi(t.light.rim,.35)};let s=new j({vertexColors:!0,toneMapped:!1,color:new I(1.7,1.7,1.7)}),c=[];this.layouts=Bi(e.def,e.map);for(let t of this.layouts){let r=st[t.team],l=e.heightAt(t.f.x,t.f.z),u=Wi(e,t,a,l,i),d=new P(u.lit,o);d.castShadow=i,d.receiveShadow=!0,d.customDepthMaterial=si;let f=new P(u.glow,s),p=Zi(e,t,a,l,this.time),m=Ci(t.team,t.f.x,l,t.f.z,t.killR,i,this.time);this.group.add(p.mesh,d,f,m.mesh),c.push(...u.flames);for(let e of u.lights)n.add(e.x,e.z,e.r,e.hex,e.i,e.y,e.flicker);n.add(t.f.x,t.f.z,7,r.light,.45,2.5,1.5);let h=new j({vertexColors:!0,toneMapped:!1,color:new I(1.3,1.3,1.3)}),g=new P(ji(3,.9,r.main,r.light),h);g.position.copy(u.spire);let _=[];for(let e=0;e<2;e++){let t=new S({uniforms:{uColor:{value:new I(e?r.light:r.main).multiplyScalar(1.8)},uAlpha:{value:.9}},vertexShader:`varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:Qi,transparent:!0,depthWrite:!1,blending:2,side:2,forceSinglePass:!0,toneMapped:!1}),n=new P(new Pe(.82,1,72,1),t);n.scale.setScalar(e?2:2.5),n.position.copy(u.spire),n.rotation.set(Math.PI/2+(e?.5:-.35),0,e?.3:-.2),_.push(n)}let v=u.guards.map(e=>{let t=new P(ji(1.6,.5,r.main,r.light),h);return t.position.copy(e),{mesh:t,y:e.y,flare:0}}),y=new j({color:new I(16762960).multiplyScalar(1.15),toneMapped:!1}),b=new P(new R(.42,.42,.1,24).rotateX(Math.PI/2),y);b.position.copy(u.shop);let x=new P(new R(.2,.62,20,16,1,!0).translate(0,10,0),new S({uniforms:{uColor:{value:new I(r.light).multiplyScalar(1.5)},uTime:this.time},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main() { vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main() { float core = pow(abs(dot(normalize(vN), normalize(vV))), 2.0); float up = pow(1.0 - vUv.y, 2.2) * smoothstep(0.0, 0.04, vUv.y); float s = 0.7 + 0.3 * sin(vUv.y * 40.0 - uTime * 3.0); float a = up * core * s * 0.32; gl_FragColor = vec4(uColor * a, a); }`,transparent:!0,depthWrite:!1,blending:2,side:2,forceSinglePass:!0,toneMapped:!1}));x.position.copy(u.spire),this.group.add(g,..._,...v.map(e=>e.mesh),b,x),this.views.push({l:t,y0:l,plaza:p,barrier:m,spire:{mesh:g,y:u.spire.y,flare:0},rings:_,guards:v,shop:{mesh:b,y:u.shop.y,flare:0},active:0,shopOn:0,heal:[],moteAcc:0})}if(c.length){let e=new et(.8,1.15),t=new Float32Array(c.length).fill(1);e.setAttribute(`aScale`,new _e(t,1));let n=new S({uniforms:{uTime:this.time,uColor:{value:new I(a.flame).multiplyScalar(2.2)}},vertexShader:$i,fragmentShader:ea,transparent:!0,depthWrite:!1,blending:2}),r=new E(e,n,c.length),i=new L;c.forEach((e,t)=>r.setMatrixAt(t,i.makeTranslation(e.x,e.y,e.z))),r.computeBoundingSphere(),this.group.add(r)}}onEvents(e){let t=this.vfx.units;for(let n of qi(e,e=>t.get(e),this.layouts)){let e=this.views.find(e=>e.l.team===n.team);e&&(n.kind===`zap`?this.pending.push({kind:`zap`,a:e,target:n.target,x:n.x,z:n.z}):this.pending.push({kind:`respawn`,a:e}))}}update(e){this.time.value=e.time;let t=this.vfx.ctx,n=!this.high;for(let n of this.pending){let r=n.a,i=st[r.l.team],a=Math.abs(r.l.f.x-e.focus.x)+Math.abs(r.l.f.z-e.focus.z)<70;if(n.kind===`zap`){if(r.active=Math.min(1.6,r.active+.6),!a)continue;let o=e.units.positionOf(n.target),s=o?o.x:n.x,c=o?o.z:n.z,l={x:s,y:(o?o.y:this.data.heightAt(s,c))+1.1,z:c},u=r.spire.mesh.position;this.vfx.add(Gi(t,{x:u.x,y:u.y,z:u.z},l,i.main,i.light,!0),`beam`),r.spire.flare=1;let d=r.guards[0];for(let e of r.guards)Math.hypot(e.mesh.position.x-s,e.mesh.position.z-c)<Math.hypot(d.mesh.position.x-s,d.mesh.position.z-c)&&(d=e);let f=d.mesh.position;this.vfx.add(Gi(t,{x:f.x,y:f.y,z:f.z},l,i.main,i.light,!1),`beam`),d.flare=1,r.barrier.hit(s-r.l.f.x,r.barrier.height*.35,c-r.l.f.z)}else if(a){let e=this.data.heightAt(r.l.f.x,r.l.f.z),n=r.spire.mesh.position;this.vfx.add(Ki(t,r.l.f.x,e,r.l.f.z,{x:n.x,y:n.y,z:n.z},i.main,i.light),`level_up`),r.spire.flare=1}}this.pending.length=0;let r=this.vfx.me;for(let i of this.views){let a=Math.abs(i.l.f.x-e.focus.x)+Math.abs(i.l.f.z-e.focus.z)<70,o=0,s=0,c=0,l=st[i.l.team];for(let u of e.cur.units){if(u.kind!==`hero`||(u.id===r&&u.team===i.l.team&&u.dead&&(c=1),u.dead))continue;let d=Math.hypot(u.x-i.l.f.x,u.z-i.l.f.z);if(u.team!==i.l.team){d<=i.l.killR&&o++;continue}if(d>9||(u.id===r&&(c=1),!a))continue;let f=e.units.positionOf(u.id);if(!f)continue;let p=i.heal[s];if(!p&&s<5&&i.heal.push(p=t.lights.attach()),s++,!p)continue;let m=u.hp<u.stats.maxHp-1||u.mana<u.stats.maxMana-1;if(p.set(f.x,f.z,2.4,l.light,m?.9:.45),Math.random()<(m?14:4)*(n?.4:1)*e.dt){let e=Math.random()*Math.PI*2,n=.4+Math.random()*.6;t.glow.emit({x:f.x+Math.cos(e)*n,y:f.y+.2+Math.random()*.6,z:f.z+Math.sin(e)*n,vy:1.2+Math.random()*1.4,life:.9+Math.random()*.5,size:m?.26:.18,size1:.04,color:m?12124104:16777215,color2:l.light,drag:.6,curl:.6})}}for(let e=s;e<i.heal.length;e++)i.heal[e].i=0;let u=+(o>0);i.active+=(u-i.active)*Math.min(1,e.dt*(u>i.active?6:1.5)),i.shopOn+=(c-i.shopOn)*Math.min(1,e.dt*4),i.plaza.uniforms.uActive.value=Math.min(1,i.active),i.plaza.uniforms.uShop.value=i.shopOn,i.barrier.uniforms.uActive.value=Math.min(1.4,i.active),i.barrier.update(e.dt);let d=e.time;i.spire.flare=Math.max(0,i.spire.flare-e.dt*3),i.spire.mesh.rotation.y=d*.7,i.spire.mesh.position.y=i.spire.y+Math.sin(d*1.4)*.18,i.spire.mesh.scale.setScalar(1+i.spire.flare*.3+i.active*.06),i.rings[0].rotation.z=d*.5,i.rings[1].rotation.z=-d*.7;for(let e of i.rings)e.position.y=i.spire.mesh.position.y;for(let[t,n]of i.guards.entries())n.flare=Math.max(0,n.flare-e.dt*4),n.mesh.rotation.y=d*1.3+t,n.mesh.position.y=n.y+Math.sin(d*2+t*2)*.12,n.mesh.scale.setScalar(1+n.flare*.45);if(i.shop.mesh.rotation.y=d*1.6,i.shop.mesh.position.y=i.shop.y+Math.sin(d*2.2)*.1,i.shop.mesh.scale.setScalar(1+i.shopOn*.25),a)for(i.moteAcc+=e.dt*(n?3:8)*(1+i.active);i.moteAcc>=1;){--i.moteAcc;let e=Math.random()*Math.PI*2,n=Math.random()*2.6;if(t.glow.emit({x:i.l.f.x+Math.cos(e)*n,y:i.y0+.1,z:i.l.f.z+Math.sin(e)*n,vy:.8+Math.random()*1.2,life:1.4+Math.random(),size:.16,size1:.03,color:16777215,color2:l.light,drag:.3,curl:.4}),Math.random()<.5){let e=i.spire.mesh.position,n=Math.random()*Math.PI*2;t.glow.emit({x:e.x+Math.cos(n)*1.6,y:e.y+(Math.random()-.5)*1.6,z:e.z+Math.sin(n)*1.6,vx:-Math.cos(n)*1.2,vz:-Math.sin(n)*1.2,life:.8,size:.2,size1:.02,color:l.light,color2:l.main})}if(i.shopOn>.5&&Math.random()<.4){let e=i.shop.mesh.position;t.glow.emit({x:e.x+(Math.random()-.5)*.9,y:e.y-.3,z:e.z+(Math.random()-.5)*.9,vy:1.1,life:.9,size:.16,size1:.02,color:16773296,color2:16756784})}}}}dispose(){for(let e of this.views)for(let t of e.heal)t.release();this.group.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()})}},na={snow:{count:1500,box:[30,9,24],y0:0,vel:[.45,-1.15,.25],wander:.6,size:.13,color:16777215,color2:14477567,alpha:.95,additive:!1,blink:0,flake:!0},ash:{count:900,box:[30,9,24],y0:0,vel:[.35,-.55,.12],wander:.55,size:.11,color:6969944,color2:10128004,alpha:.85,additive:!1,blink:0,flake:!0},embers:{count:110,box:[28,6,22],y0:0,vel:[.25,1.1,.1],wander:.9,size:.09,color:16756800,color2:16730640,alpha:1,additive:!0,blink:2,flake:!1},fireflies:{count:260,box:[26,1.4,22],y0:.35,vel:[0,0,0],wander:1.4,size:.13,color:14745466,color2:8060872,alpha:1,additive:!0,blink:1.2,flake:!1},spores:{count:320,box:[26,3,22],y0:.3,vel:[.05,.12,.04],wander:.8,size:.07,color:8060896,color2:11832063,alpha:.8,additive:!0,blink:.6,flake:!1},pollen:{count:260,box:[26,2.5,22],y0:.3,vel:[.18,.04,.1],wander:.6,size:.06,color:16773280,color2:14221210,alpha:.6,additive:!0,blink:0,flake:!1},dust:{count:300,box:[28,2.5,22],y0:.2,vel:[.7,.04,.25],wander:.5,size:.09,color:16177320,color2:16772300,alpha:.35,additive:!1,blink:0,flake:!1},motes:{count:460,box:[28,7,22],y0:-6,vel:[.05,.85,.05],wander:.7,size:.1,color:16762976,color2:12615935,alpha:1,additive:!0,blink:1,flake:!1},sparkle:{count:160,box:[26,.8,22],y0:.15,vel:[0,0,0],wander:.05,size:.12,color:15400959,color2:11589887,alpha:1,additive:!0,blink:3,flake:!1}},ra=new O(0,1,0),ia=`
attribute vec4 aSeed;
uniform float uTime;
uniform vec3 uCenter;
uniform vec3 uBox;
uniform float uY0;
uniform vec3 uVel;
uniform float uWander;
uniform float uSize;
uniform float uScale;
uniform float uBlink;
varying float vMix;
varying float vAlpha;
void main() {
  vec3 base = (aSeed.xyz - 0.5) * 2.0 * uBox;
  float ph = aSeed.w * 6.2831853;
  vec3 p = base + uVel * (uTime + aSeed.w * 37.0);
  p += uWander * vec3(sin(uTime * 0.7 + ph), 0.35 * sin(uTime * 1.1 + ph * 2.0), cos(uTime * 0.6 + ph * 1.3));
  // Wrap around the camera focus (x, z) and inside the height band (y).
  vec3 rel = p - vec3(uCenter.x, 0.0, uCenter.z);
  rel.x = mod(rel.x + uBox.x, 2.0 * uBox.x) - uBox.x;
  rel.z = mod(rel.z + uBox.z, 2.0 * uBox.z) - uBox.z;
  rel.y = mod(rel.y, 2.0 * uBox.y);
  vec3 w = vec3(uCenter.x + rel.x, uY0 + rel.y, uCenter.z + rel.z);
  vec4 mv = viewMatrix * vec4(w, 1.0);
  gl_Position = projectionMatrix * mv;
  float blink = uBlink > 0.0 ? 0.35 + 0.65 * pow(max(0.0, 0.5 + 0.5 * sin(uTime * uBlink * 2.0 + ph * 3.0)), 3.0) : 1.0;
  float edge = smoothstep(1.0, 0.85, abs(rel.x) / uBox.x) * smoothstep(1.0, 0.85, abs(rel.z) / uBox.z);
  float hfade = smoothstep(0.0, 0.08, rel.y / (2.0 * uBox.y)) * smoothstep(1.0, 0.85, rel.y / (2.0 * uBox.y));
  vAlpha = blink * edge * hfade;
  vMix = aSeed.y;
  gl_PointSize = uSize * (0.7 + 0.6 * aSeed.x) * uScale / max(0.5, -mv.z);
}`,aa=`
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uAlpha;
uniform float uFlake;
varying float vMix;
varying float vAlpha;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d = length(q);
  float a = uFlake > 0.5 ? smoothstep(1.0, 0.55, d) : smoothstep(1.0, 0.0, d) * (0.6 + 0.4 * smoothstep(0.4, 0.0, d));
  if (a < 0.01) discard;
  vec3 c = mix(uColor, uColor2, vMix);
  gl_FragColor = vec4(c * (uFlake > 0.5 ? 1.0 : 1.6), a * uAlpha * vAlpha);
}`,oa=class{data;style;vfx;high;mist;group=new tt;weather=[];butterflies=null;bfly=[];birds=null;flock={x:0,z:0,dx:1,dz:0,t:99};fishMesh=null;fish={x:0,z:0,dx:0,dz:0,t:-1,next:3};flyTime={value:0};shafts=null;bubbleAcc=0;m=new L;q=new C;s=new O;p=new O;onSplash=null;mistAcc=0;far=30;constructor(e,t,n,r,i,a=[]){this.data=e,this.style=t,this.vfx=r,this.high=i,this.mist=a;for(let e of t.ambient){let t=na[e];t&&this.addWeather(t)}t.ambient.includes(`butterflies`)&&this.addButterflies(),t.ambient.includes(`birds`)&&this.addBirds(),t.ambient.includes(`fish`)&&e.liquidKind===`water`&&this.addFish(),(t.skyFx===`dapple`||t.key===`verdant`)&&this.addShafts(n.glades)}addWeather(e){let t=Math.round(e.count*(this.high?1:.4)),n=new Float32Array(t*4);for(let e=0;e<n.length;e++)n[e]=Math.random();let r=new F;r.setAttribute(`position`,new A(new Float32Array(t*3),3)),r.setAttribute(`aSeed`,new A(n,4));let i=new S({vertexShader:ia,fragmentShader:aa,uniforms:{uTime:{value:0},uCenter:{value:new O},uBox:{value:new O(e.box[0],e.box[1]/2,e.box[2])},uY0:{value:e.y0},uVel:{value:new O(...e.vel)},uWander:{value:e.wander},uSize:{value:e.size},uScale:{value:900},uBlink:{value:e.blink},uColor:{value:new I(e.color)},uColor2:{value:new I(e.color2)},uAlpha:{value:e.alpha},uFlake:{value:+!!e.flake}},transparent:!0,depthWrite:!1,blending:e.additive?2:1}),a=new $e(r,i);a.frustumCulled=!1,a.renderOrder=3,this.group.add(a),this.weather.push(i)}addButterflies(){let e=this.high?16:6,t=[0,0,0,-.32,.02,-.12,-.28,.02,.2,0,0,0,.28,.02,.2,.32,.02,-.12],n=new F;n.setAttribute(`position`,new k(t,3)),n.setAttribute(`normal`,new k(Array(18).fill(0).map((e,t)=>+(t%3==1)),3));let r=this.style.key===`jungle`,i=new j({side:2,toneMapped:!r});i.onBeforeCompile=e=>{e.uniforms.uTime=this.flyTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        float ph = instanceMatrix[3].x * 3.1 + instanceMatrix[3].z * 1.7;
        float flap = sin(uTime * 18.0 + ph);
        transformed.y += abs(transformed.x) * flap * 1.4;
        transformed.x *= 0.55 + 0.45 * abs(cos(uTime * 18.0 + ph));`)},i.customProgramCacheKey=()=>`va-butterfly`,this.butterflies=new E(n,i,e),this.butterflies.frustumCulled=!1;let a=r?[7002367,9083647,7012312]:this.style.key===`desert`?[16777215,16762960,16751200]:[16764992,16747192,10146047,16777215];for(let t=0;t<e;t++)this.butterflies.setColorAt(t,new I(a[t%a.length]).multiplyScalar(r?2.2:1.2)),this.bfly.push({hx:0,hz:0,a:.5+Math.random()*.6,b:.4+Math.random()*.5,r:1+Math.random()*2.5,ph:Math.random()*10});this.group.add(this.butterflies)}addBirds(){let e=[0,0,.25,-.9,.12,-.15,0,0,-.1,0,0,.25,0,0,-.1,.9,.12,-.15],t=new F;t.setAttribute(`position`,new k(e,3)),t.computeVertexNormals();let n=new M({color:2762288,side:2});n.onBeforeCompile=e=>{e.uniforms.uTime=this.flyTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        float ph = instanceMatrix[3].x * 0.7;
        transformed.y += abs(transformed.x) * sin(uTime * 7.0 + ph) * 0.55;`)},n.customProgramCacheKey=()=>`va-bird`,this.birds=new E(t,n,7),this.birds.frustumCulled=!1,this.birds.castShadow=this.high,this.group.add(this.birds)}addFish(){let e=new fe(.16,8,6).scale(.6,.7,1.6),t=new Ne(.14,.25,4).rotateX(-Math.PI/2).translate(0,0,-.3),n=new M({color:16751184});this.fishMesh=new P(e,n),this.fishMesh.add(new P(t,n)),this.fishMesh.visible=!1,this.group.add(this.fishMesh)}addShafts(e){if(!e.length)return;let t=this.style.light,n=Je.degToRad(Math.max(40,t.elev)),r=Je.degToRad(t.azim),i=new O(Math.cos(n)*Math.cos(r),Math.sin(n),Math.cos(n)*Math.sin(r)).normalize();this.shafts=new S({uniforms:{uTime:this.flyTime,uColor:{value:new I(t.sun).multiplyScalar(this.style.key===`jungle`?.9:.55)}},vertexShader:`varying vec2 vUv; varying float vSeed; void main() { vUv = uv; vSeed = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.11; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uColor; varying vec2 vUv; varying float vSeed; void main() { float across = pow(max(0.0, sin(vUv.x * 3.14159)), 2.5); float along = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.55, vUv.y); float flick = 0.7 + 0.3 * sin(uTime * 0.6 + vSeed * 7.0); float streak = 0.75 + 0.25 * sin(vUv.x * 19.0 + vSeed * 5.0 + uTime * 0.2); gl_FragColor = vec4(uColor * across * along * flick * streak * 0.42, 1.0); }`,transparent:!0,depthWrite:!1,blending:2,side:2,forceSinglePass:!0});let a=new et(2.2,9,1,1).translate(0,4.5,0),o=Math.min(e.length,this.high?22:10),s=new E(a,this.shafts,o*2),c=new O(0,1,0),l=new C().setFromUnitVectors(c,i);for(let t=0;t<o;t++){let n=e[t],r=this.data.heightAt(n.x,n.z);for(let e=0;e<2;e++){let a=new C().setFromAxisAngle(i,e*Math.PI/2+t),o=.8+t*7%5*.15;this.m.compose(this.p.set(n.x,r,n.z),a.clone().multiply(l),this.s.set(o,1,o)),s.setMatrixAt(t*2+e,this.m)}}s.computeBoundingSphere(),s.renderOrder=4,this.group.add(s)}update(e,t=30){this.far=t;let n=e.time;this.flyTime.value=n;for(let t of this.weather)t.uniforms.uTime.value=n,t.uniforms.uCenter.value.copy(e.focus);this.updateButterflies(e),this.updateBirds(e),this.updateFish(e),this.style.ambient.includes(`bubbles`)&&this.data.liquidKind===`lava`&&this.updateBubbles(e),this.mist.length&&this.updateMist(e)}updateMist(e){for(this.mistAcc+=e.dt*(this.high?14:5);this.mistAcc>1;){--this.mistAcc;for(let t of this.mist){if(Math.abs(t.x-e.focus.x)>this.far||Math.abs(t.z-e.focus.z)>this.far*.87)continue;let n=Math.random()*Math.PI*2,r=Math.random()*t.w*.45,i=this.data.level+.15;t.lava?this.vfx.glow.emit({x:t.x+Math.cos(n)*r,y:i,z:t.z+Math.sin(n)*r,vx:Math.cos(n)*.5,vy:1.4+Math.random(),vz:Math.sin(n)*.5,life:.8,size:.12,size1:.04,color:16765024,color2:16726538,alpha:1,gravity:3,fadeIn:.03,fadePow:1}):this.vfx.smoke.emit({x:t.x+Math.cos(n)*r,y:i,z:t.z+Math.sin(n)*r,vx:Math.cos(n)*.6,vy:.5+Math.random()*.5,vz:Math.sin(n)*.6,life:1.6,size:.6,size1:1.8,color:16777215,color2:14743807,alpha:.35,drag:.8,fadeIn:.15})}}}updateButterflies(e){let t=this.butterflies;if(!t)return;let n=e.time;this.bfly.forEach((r,i)=>{if(Math.abs(r.hx-e.focus.x)>24||Math.abs(r.hz-e.focus.z)>20)for(let t=0;t<12;t++){let t=e.focus.x+(Math.random()-.5)*40,n=e.focus.z+(Math.random()-.5)*32;if(this.data.map.isOpenGround(t,n)&&this.data.sample(this.data.lane,t,n)<.5){r.hx=t,r.hz=n;break}}let a=r.hx+Math.sin(n*r.a+r.ph)*r.r,o=r.hz+Math.cos(n*r.b+r.ph*1.3)*r.r*.8,s=this.data.heightAt(a,o)+.7+.35*Math.sin(n*1.7+r.ph),c=Math.cos(n*r.a+r.ph)*r.a,l=-Math.sin(n*r.b+r.ph*1.3)*r.b;this.q.setFromAxisAngle(ra,Math.atan2(c,l)),this.m.compose(this.p.set(a,s,o),this.q,this.s.set(.7,.7,.7)),t.setMatrixAt(i,this.m)}),t.instanceMatrix.needsUpdate=!0}updateBirds(e){let t=this.birds;if(!t)return;let n=this.flock;if(n.t+=e.dt,n.t>14){n.t=0;let t=Math.random()*Math.PI*2;n.dx=Math.cos(t),n.dz=Math.sin(t),n.x=e.focus.x-n.dx*30,n.z=e.focus.z-n.dz*26}let r=n.x+n.dx*5*n.t,i=n.z+n.dz*5*n.t;this.q.setFromAxisAngle(ra,Math.atan2(n.dx,n.dz));for(let a=0;a<t.count;a++){let o=Math.ceil(a/2),s=a%2==0?1:-1,c=-n.dx*o*1.4+-n.dz*s*o*1.1,l=-n.dz*o*1.4+n.dx*s*o*1.1;this.m.compose(this.p.set(r+c,9+Math.sin(e.time*.8+a)*.4,i+l),this.q,this.s.set(.8,.8,.8)),t.setMatrixAt(a,this.m)}t.instanceMatrix.needsUpdate=!0}updateFish(e){let t=this.fishMesh;if(!t)return;let n=this.fish;if(n.t<0){if(n.next-=e.dt,n.next>0)return;n.next=2+Math.random()*4;for(let t=0;t<10;t++){let t=e.focus.x+(Math.random()-.5)*30,r=e.focus.z+(Math.random()-.5)*22;if(this.data.liquidDepth(t,r)>.3){let e=Math.random()*Math.PI*2;Object.assign(n,{x:t,z:r,dx:Math.cos(e),dz:Math.sin(e),t:0}),this.onSplash?.(t,r,.7);break}}return}n.t+=e.dt;let r=n.t/.85;if(r>=1){n.t=-1,t.visible=!1,this.onSplash?.(n.x+n.dx*1.6,n.z+n.dz*1.6,.8);return}t.visible=!0;let i=this.data.level+Math.sin(r*Math.PI)*1.1;t.position.set(n.x+n.dx*1.6*r,i,n.z+n.dz*1.6*r),t.rotation.set(-Math.cos(r*Math.PI)*.9,Math.atan2(n.dx,n.dz),0)}updateBubbles(e){this.bubbleAcc+=e.dt*(this.high?10:4);let t=this.vfx.glow;for(;this.bubbleAcc>1;){--this.bubbleAcc;let n=e.focus.x+(Math.random()-.5)*36,r=e.focus.z+(Math.random()-.5)*28;if(this.data.liquidDepth(n,r)<.05)continue;let i=this.data.level+.04;for(let e=0;e<4;e++){let e=Math.random()*Math.PI*2;t.emit({x:n,y:i,z:r,vx:Math.cos(e)*.6,vy:1.6+Math.random(),vz:Math.sin(e)*.6,life:.6,size:.1,size1:.03,color:16765024,color2:16728080,alpha:1,gravity:7,fadeIn:.02,fadePow:1})}Math.random()<.3&&this.vfx.smoke.emit({x:n,y:i+.3,z:r,vy:.8,life:1.6,size:.4,size1:1.4,color:4864568,color2:6969942,alpha:.3,drag:.5,fadeIn:.15})}}},sa={azure:5945599,ember:16742970,small:15912802,critter:7332816},ca={azure:0,ember:1,small:2,critter:3},la=128,ua=null;function da(){if(ua)return ua;let e=document.createElement(`canvas`);e.width=512,e.height=la;let t=e.getContext(`2d`);[`azure`,`ember`,`small`,`critter`].forEach((e,n)=>{let r=n*la+la/2,i=la/2,a=la*.42,o=`#${sa[e].toString(16).padStart(6,`0`)}`;t.beginPath(),t.arc(r,i,a,0,Math.PI*2),t.fillStyle=`rgba(10,14,24,0.92)`,t.fill(),t.beginPath(),t.arc(r,i,a*.84,0,Math.PI*2);let s=t.createRadialGradient(r-a*.25,i-a*.3,a*.1,r,i,a*.9);if(s.addColorStop(0,`#ffffff`),s.addColorStop(.25,o),s.addColorStop(1,o),t.fillStyle=s,t.fill(),t.fillStyle=`#ffffff`,t.strokeStyle=`rgba(10,14,24,0.9)`,t.lineWidth=la*.035,t.lineJoin=`round`,t.beginPath(),e===`azure`)t.moveTo(r,i-a*.55),t.bezierCurveTo(r+a*.5,i-a*.05,r+a*.38,90.88,r,90.88),t.bezierCurveTo(r-a*.38,90.88,r-a*.5,i-a*.05,r,i-a*.55),t.fill(),t.stroke(),t.beginPath(),t.fillStyle=o,t.arc(r,73.6768,a*.16,0,Math.PI*2),t.fill();else if(e===`ember`)t.moveTo(r,i-a*.6),t.quadraticCurveTo(r+a*.15,i-a*.2,r+a*.45,i-a*.25),t.quadraticCurveTo(r+a*.55,80.128,r,91.9552),t.quadraticCurveTo(r-a*.55,80.128,r-a*.42,i-a*.15),t.quadraticCurveTo(r-a*.15,i-a*.1,r,i-a*.6),t.fill(),t.stroke();else if(e===`small`){t.lineWidth=la*.085,t.lineCap=`round`,t.strokeStyle=`#ffffff`;for(let e=-1;e<=1;e++)t.moveTo(r+e*a*.3-a*.12,i-a*.45),t.lineTo(r+e*a*.3+a*.12,88.19200000000001);t.stroke()}else t.ellipse(r-a*.08,i,a*.42,a*.26,0,0,Math.PI*2),t.moveTo(r+a*.28,i),t.lineTo(r+a*.58,i-a*.26),t.lineTo(r+a*.58,77.9776),t.closePath(),t.fill(),t.stroke()});let n=new De(e);return n.colorSpace=Te,n.anisotropy=4,ua=n,n}var fa=`
varying vec2 vP;
void main() { vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,pa=`
uniform vec3 uColor;
uniform float uR;
uniform float uProg;
uniform float uUp;
uniform float uKnown;
uniform float uTime;
varying vec2 vP;
void main() {
  float r = length(vP);
  float band = smoothstep(uR - 0.42, uR - 0.3, r) * smoothstep(uR + 0.12, uR, r);
  // A soft dark rim under the dashes keeps the ring readable on bright ground (snow, sand).
  float rim = smoothstep(uR - 0.66, uR - 0.5, r) * smoothstep(uR + 0.34, uR + 0.18, r);
  if (rim <= 0.001) discard;
  // Angle clockwise from screen-up (-z), 0..1.
  float a = fract(atan(vP.x, -vP.y) / 6.2831853 + 1.0);
  float dash = step(0.22, fract(a * 28.0));
  float alpha;
  vec3 col = uColor;
  if (uUp > 0.5) {
    float shimmer = 0.75 + 0.25 * sin(uTime * 2.0 - a * 18.0);
    alpha = band * dash * (uKnown > 0.5 ? 0.62 : 0.3) * shimmer;
  } else {
    float done = step(a, uProg);
    float soon = uProg > 0.92 ? 0.5 + 0.5 * sin(uTime * 9.0) : 0.0;
    alpha = band * mix(0.16 * dash, 0.95, done);
    col = mix(uColor * 0.6, mix(vec3(1.0), uColor, 0.35) + soon * 0.4, done);
  }
  float shade = 0.3 * rim * (uKnown > 0.5 ? 1.0 : 0.5);
  float outA = max(alpha, shade);
  gl_FragColor = vec4(mix(vec3(0.02, 0.03, 0.05), col * 1.4, alpha / max(outA, 1e-3)), outA);
}`,ma=class{data;localTeam;fullVision;group=new tt;markers=[];time={value:0};constructor(e,t,n){this.data=e,this.localTeam=t,this.fullVision=n;let r=da(),i=new Map,a=e=>{let t=i.get(e);return t||(t=r.clone(),t.repeat.set(.25,1),t.offset.set(ca[e]*.25,0),t.needsUpdate=!0,i.set(e,t)),t};for(let t of e.map.camps){let n=t.side===2?`critter`:t.monsters.some(e=>e.defId===`azure_wisp`)?`azure`:t.monsters.some(e=>e.defId===`ember_golem`)?`ember`:`small`,r=n===`critter`?1.9:this.clearingRadius(t.x,t.z),i=e.heightAt(t.x,t.z)+.06,o={uProg:{value:0},uUp:{value:0},uKnown:{value:1}},s=new S({uniforms:{uColor:{value:new I(sa[n])},uR:{value:r},uTime:this.time,...o},vertexShader:fa,fragmentShader:pa,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,toneMapped:!1}),c=new P(new Oe(r+.45,64).rotateX(-Math.PI/2),s);c.position.set(t.x,Math.max(i,e.level+.04),t.z),c.renderOrder=2;let l=new Re(new y({map:a(n),transparent:!0,depthWrite:!1,toneMapped:!1})),u=n===`azure`||n===`ember`?1.7:n===`critter`?1.1:1.35;l.scale.set(u,u,u),l.renderOrder=3,this.group.add(c,l),this.markers.push({id:t.id,layout:t,uni:o,badge:l,x:t.x,z:t.z,y:i,r})}}clearingRadius(e,t){let n=9;for(let r=0;r<24;r++){let i=Math.cos(r/24*Math.PI*2),a=Math.sin(r/24*Math.PI*2);for(let r=1;r<9;r+=.25)if(!this.data.map.isOpenGround(e+i*r,t+a*r)){n=Math.min(n,r);break}}return Math.max(2.4,Math.min(5.6,n-.9))}update(e,t){if(this.time.value=e,!t)return;let n=this.localTeam===1?-1:1;for(let r of this.markers){let i=t.camps.find(e=>e.id===r.id);if(!i)continue;let a=this.fullVision||r.layout.side===2||r.layout.side===this.localTeam,o=i.alive||!a;if(r.uni.uKnown.value=+!!a,r.uni.uUp.value=+!!o,!o){let e=(t.tick<r.layout.firstSec*30?r.layout.firstSec:r.layout.respawnSec)*30,n=Math.max(0,i.nextSpawnAt-t.tick);r.uni.uProg.value=i.nextSpawnAt>0?Math.max(0,Math.min(1,1-n/Math.max(1,e))):0}let s=r.badge.material;if(o)r.badge.position.set(r.x,r.y+.55,r.z-(r.r+.2)*n),s.opacity=a?.95:.5;else{let t=r.uni.uProg.value>.92;r.badge.position.set(r.x,r.y+1.1+Math.sin(e*2.2)*.12,r.z),s.opacity=t?.75+.25*Math.sin(e*9):.85}}}},q={ground:0,lane:1,floor:2,cobble:3,bed:4,rock:5,crust:6,noise:7},ha=8,ga=[.9,1.1,1,2.6,1.2,1.8,2,1.4],_a={grass:0,sand:1,snow:2,ash:3,moss:4,slate:5},va=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
vec2 gradT(vec2 i, float per) { float an = hash12(mod(i, per)) * 6.2831853; return vec2(cos(an), sin(an)); }
float gnoiseT(vec2 x, float per) {
  vec2 i = floor(x); vec2 f = fract(x); vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(gradT(i, per), f), b = dot(gradT(i + vec2(1.0, 0.0), per), f - vec2(1.0, 0.0));
  float c = dot(gradT(i + vec2(0.0, 1.0), per), f - vec2(0.0, 1.0)), d = dot(gradT(i + vec2(1.0, 1.0), per), f - vec2(1.0, 1.0));
  return 0.5 + 0.75 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbmT(vec2 uv, float per, int oct) {
  float s = 0.0, a = 0.5, n = 0.0;
  for (int i = 0; i < 8; i++) { if (i >= oct) break; s += a * gnoiseT(uv * per, per); n += a; per *= 2.0; a *= 0.5; }
  return s / n;
}
// Tileable voronoi: x = F1, y = F2, z = cell id hash, w = cell angle hash. 'rel' = vector to nearest site.
vec4 voronoiT(vec2 x, float per, float jit, out vec2 rel) {
  vec2 i = floor(x); vec2 f = fract(x);
  float f1 = 8.0, f2 = 8.0, id = 0.0, an = 0.0; rel = vec2(0.0);
  for (int y = -1; y <= 1; y++) for (int xx = -1; xx <= 1; xx++) {
    vec2 g = vec2(float(xx), float(y));
    vec2 c = mod(i + g, per);
    vec2 o = 0.5 + (hash22(c) - 0.5) * jit;
    vec2 r = g + o - f;
    float d = dot(r, r);
    if (d < f1) { f2 = f1; f1 = d; id = hash12(c + 17.31); an = hash12(c + 3.7); rel = r; } else if (d < f2) { f2 = d; }
  }
  return vec4(sqrt(f1), sqrt(f2), id, an);
}
`,ya=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,ba=`
precision highp float;
varying vec2 vUv;
uniform int uLayer;
uniform int uMode; // 0 = albedo, 1 = height
uniform int uPattern; // ground pattern
uniform int uLanePattern; // 0 dirt, 1 slabs
uniform vec3 uT[4]; // tones of this layer (linear)
${va}

float strokes(vec2 uv, float per, float len, float width, float seed, out float sid) {
  vec2 x = uv * per; vec2 i = floor(x); vec2 f = fract(x);
  float best = 0.0; sid = 0.0;
  for (int y = -1; y <= 1; y++) for (int xx = -1; xx <= 1; xx++) {
    vec2 g = vec2(float(xx), float(y));
    vec2 c = mod(i + g, per);
    vec2 h = hash22(c + seed);
    vec2 p = g + h - f;
    float an = (hash12(c + seed + 5.1) - 0.5) * 1.2 + 0.6;
    vec2 dir = vec2(cos(an), sin(an));
    float t = clamp(dot(-p, dir), -len, len);
    float d = length(-p - dir * t);
    float taper = 1.0 - abs(t) / len;
    float s = smoothstep(width * (0.35 + 0.65 * taper), width * 0.2 * taper, d);
    if (s > best) { best = s; sid = hash12(c + seed + 9.3); }
  }
  return best;
}
float bands(float n, float steps) { float q = n * steps; return (floor(q) + smoothstep(0.35, 0.65, fract(q))) / steps; }
vec3 ramp3(float b) { return b < 0.5 ? mix(uT[0], uT[1], b * 2.0) : mix(uT[1], uT[2], (b - 0.5) * 2.0); }

// Chunky stylized pebbles: dark outline, light top-left highlight.
void pebbles(vec2 uv, float per, float keepAbove, vec3 pc0, vec3 pc1, vec3 rimC, inout vec3 col, inout float h) {
  vec2 rel;
  vec4 v = voronoiT(uv * per, per, 0.85, rel);
  float keep = step(keepAbove, v.z);
  float size = (0.14 + 0.1 * v.w) * keep;
  vec2 r = rel * vec2(1.0, 1.25);
  float dd = length(r);
  float peb = smoothstep(size, size - 0.025, dd);
  float rimO = smoothstep(size + 0.035, size, dd) * (1.0 - peb);
  vec3 pc = mix(pc0, pc1, v.w);
  float hl = smoothstep(0.0, size, dot(-r, normalize(vec2(-0.6, -0.8))) + size * 0.3);
  pc = mix(pc * 0.75, pc * 1.25, hl);
  col = mix(col, rimC, rimO * keep);
  col = mix(col, pc, peb);
  h = max(h, (0.5 + 0.45 * sqrt(max(0.0, 1.0 - dd / max(size, 1e-3)))) * peb);
}

void cracks(vec2 uv, float per, float width, inout vec3 col, inout float h, vec3 crackC) {
  vec2 rel;
  vec4 v = voronoiT(uv * per, per, 0.9, rel);
  float e = v.y - v.x;
  float c = smoothstep(width, width * 0.3, e);
  col = mix(col, crackC, c);
  h = mix(h, 0.02, c);
}

void layerGround(vec2 uv, out vec3 col, out float h) {
  float n1 = fbmT(uv, 3.0, 4);
  float n2 = fbmT(uv + 0.37, 7.0, 3);
  float sid, sid2;
  if (uPattern == 0 || uPattern == 4) {
    // grass / moss: banded tones + brush strokes
    float b = bands(clamp(n1 * 1.25 - 0.12, 0.0, 1.0), 4.0);
    col = ramp3(b);
    col = mix(col, uT[3], smoothstep(0.55, 0.8, n2) * 0.45);
    float s1 = strokes(uv, 9.0, 0.42, 0.13, 1.0, sid);
    col = mix(col, sid < 0.5 ? uT[2] * 0.85 : sid < 0.8 ? uT[0] * 1.2 : uT[2], s1 * 0.45);
    float s2 = strokes(uv + 0.5, 15.0, 0.38, 0.1, 7.0, sid2);
    col = mix(col, sid2 < 0.5 ? uT[0] : uT[2] * 0.9, s2 * 0.3);
    h = 0.45 * n1 + 0.25 * s1 + 0.1 * s2;
    if (uPattern == 4) {
      // moss: soft round clumps
      vec2 rel; vec4 v = voronoiT(uv * 6.0, 6.0, 1.0, rel);
      float clump = smoothstep(0.45, 0.2, v.x) * step(0.5, v.z);
      col = mix(col, uT[2] * 1.05, clump * 0.35);
      h = max(h, 0.4 * clump + 0.3 * n1);
    }
  } else if (uPattern == 1) {
    // sand: wind ripples + soft dunes + pebbles
    float warp = fbmT(uv, 3.0, 3);
    float rip = sin((uv.x * 0.6 + uv.y) * 6.2831853 * 9.0 + warp * 9.0) * 0.5 + 0.5;
    float b = bands(clamp(n1 * 1.2 - 0.1, 0.0, 1.0), 4.0);
    col = ramp3(b);
    col = mix(col, col * 1.12, smoothstep(0.55, 0.9, rip) * 0.6);
    col = mix(col, col * 0.86, smoothstep(0.45, 0.1, rip) * 0.4);
    col = mix(col, uT[3], smoothstep(0.6, 0.85, n2) * 0.35);
    h = 0.35 * n1 + 0.15 * rip;
    pebbles(uv, 9.0, 0.88, uT[0] * 1.1, uT[2], uT[0] * 0.6, col, h);
  } else if (uPattern == 2) {
    // snow: soft drifts, blue shadows, sparkle dots
    float b = bands(clamp(n1 * 1.3 - 0.15, 0.0, 1.0), 4.0);
    col = ramp3(b);
    float s1 = strokes(uv, 7.0, 0.5, 0.16, 3.0, sid);
    col = mix(col, sid < 0.5 ? uT[2] : uT[3], s1 * 0.35);
    col = mix(col, uT[3], smoothstep(0.62, 0.85, n2) * 0.4);
    float sp = step(0.985, hash12(floor(uv * 160.0)));
    col = mix(col, vec3(1.0), sp * 0.7);
    h = 0.5 * n1 + 0.15 * s1;
  } else if (uPattern == 3) {
    // ash: dark soil, pumice, glowing crack network (the shader lights cracks where h is low)
    float b = bands(clamp(n1 * 1.25 - 0.12, 0.0, 1.0), 3.0);
    col = ramp3(b);
    float s1 = strokes(uv, 8.0, 0.45, 0.12, 2.0, sid);
    col = mix(col, uT[2] * 1.1, s1 * 0.3);
    h = 0.4 + 0.3 * n1 + 0.1 * s1;
    pebbles(uv, 8.0, 0.82, uT[0] * 1.4, uT[2] * 1.2, uT[0] * 0.5, col, h);
    cracks(uv + n2 * 0.05, 3.0, 0.022, col, h, uT[0] * 0.6);
  } else {
    // slate: flat stone plates with moss / crystal dust
    vec2 rel;
    vec4 v = voronoiT(uv * 4.0, 4.0, 0.8, rel);
    float e = v.y - v.x;
    col = mix(uT[0], uT[1], 0.3 + 0.7 * v.z) * (0.85 + 0.25 * bands(n1, 3.0));
    col = mix(col, uT[2], smoothstep(0.6, 0.85, n2) * 0.35);
    col = mix(uT[0] * 0.7, col, smoothstep(0.02, 0.08, e));
    col = mix(col, uT[3], smoothstep(0.1, 0.02, e) * step(0.6, n2) * 0.6);
    h = mix(0.1, 0.5 + 0.2 * n1, smoothstep(0.02, 0.08, e));
  }
}

void layerLane(vec2 uv, out vec3 col, out float h) {
  float n1 = fbmT(uv, 3.0, 4);
  float n2 = fbmT(uv + 0.41, 8.0, 3);
  if (uLanePattern == 1) {
    // big worn stone slabs
    vec2 rel;
    vec4 v = voronoiT(uv * vec2(3.0, 3.0), 3.0, 0.55, rel);
    float e = v.y - v.x;
    col = mix(uT[0], uT[1], 0.35 + 0.65 * v.z) * (0.88 + 0.22 * bands(n1, 3.0));
    float hl = clamp(dot(-rel, normalize(vec2(-0.6, -0.8))) * 1.4 + 0.5, 0.0, 1.0);
    col *= mix(0.88, 1.12, hl * smoothstep(0.02, 0.2, e));
    col = mix(col, uT[2], smoothstep(0.62, 0.85, n2) * 0.35);
    float gap = smoothstep(0.06, 0.025, e);
    col = mix(col, uT[0] * 0.45, gap);
    h = mix(0.06, 0.55 + 0.25 * n1, 1.0 - gap);
    return;
  }
  float b = bands(clamp(n1 * 1.3 - 0.15, 0.0, 1.0), 4.0);
  col = ramp3(b);
  col = mix(col, uT[3], smoothstep(0.6, 0.8, n2) * 0.4);
  float sid;
  float s1 = strokes(uv, 8.0, 0.45, 0.12, 2.0, sid);
  col = mix(col, sid < 0.5 ? uT[2] * 1.03 : uT[0] * 1.02, s1 * 0.35);
  h = 0.45 * n1 + 0.15 * s1;
  pebbles(uv, 9.0, 0.8, uT[0] * 0.95, uT[2] * 0.85, uT[0] * 0.62, col, h);
}

void layerFloor(vec2 uv, out vec3 col, out float h) {
  float n1 = fbmT(uv, 3.0, 4);
  float n2 = fbmT(uv + 0.5, 9.0, 3);
  float b = bands(clamp(n1 * 1.2 - 0.1, 0.0, 1.0), 3.0);
  col = mix(uT[0], uT[1], b);
  col = mix(col, uT[2], smoothstep(0.6, 0.85, n2) * 0.5);
  h = 0.4 * n1;
  if (uPattern == 2) { col = ramp3(b); return; } // snow-covered
  if (uPattern == 1 || uPattern == 5) { pebbles(uv, 7.0, 0.7, uT[0] * 1.3, uT[2], uT[0] * 0.6, col, h); return; }
  if (uPattern == 3) { cracks(uv, 4.0, 0.03, col, h, uT[0] * 0.55); return; }
  // painted leaf shapes
  vec2 rel;
  for (int k = 0; k < 2; k++) {
    float per = 7.0 + float(k) * 5.0;
    vec4 v = voronoiT(uv * per + vec2(0.31, 0.17) * float(k), per, 1.0, rel);
    float an = v.w * 6.2831853;
    vec2 r = mat2(cos(an), -sin(an), sin(an), cos(an)) * rel;
    float L = 0.3 + 0.1 * v.z;
    float e = length(r / vec2(L, L * 0.5));
    float leaf = smoothstep(1.0, 0.9, e) * step(0.45, v.z);
    vec3 lc = v.z < 0.65 ? uT[2] : v.z < 0.85 ? mix(uT[2], uT[3], 0.5) : uT[3];
    col = mix(col, lc * mix(0.8, 1.15, smoothstep(0.0, 0.3, r.y + 0.1)), leaf);
    h = max(h, 0.55 * leaf);
  }
}

void layerCobble(vec2 uv, out vec3 col, out float h) {
  vec2 rel;
  vec4 v = voronoiT(uv * 5.0, 5.0, 0.7, rel);
  float edge = v.y - v.x;
  float n1 = fbmT(uv, 4.0, 3);
  vec3 stone = mix(uT[0], uT[1], v.z);
  stone *= 0.85 + 0.25 * bands(n1, 3.0);
  float hl = clamp(dot(-rel, normalize(vec2(-0.6, -0.8))) * 1.6 + 0.5, 0.0, 1.0);
  stone *= mix(0.8, 1.2, hl * smoothstep(0.02, 0.2, edge));
  float moss = smoothstep(0.55, 0.75, fbmT(uv + v.z * 0.1, 6.0, 3));
  stone = mix(stone, uT[3], moss * smoothstep(0.25, 0.05, edge) * 0.8);
  float mortarMask = smoothstep(0.03, 0.09, edge);
  vec3 mortar = mix(uT[2], uT[3] * 0.7, smoothstep(0.4, 0.7, n1));
  col = mix(mortar, stone, mortarMask);
  h = mix(0.05, 0.55 + 0.35 * sqrt(clamp(edge * 2.5, 0.0, 1.0)), mortarMask);
}

void layerBed(vec2 uv, out vec3 col, out float h) {
  float n1 = fbmT(uv, 3.0, 4);
  float b = bands(n1, 3.0);
  col = mix(uT[0], uT[1], b);
  float ripple = sin((uv.x + uv.y) * 6.2831853 * 6.0 + fbmT(uv, 3.0, 3) * 8.0) * 0.5 + 0.5;
  col *= 0.9 + 0.15 * smoothstep(0.6, 0.9, ripple);
  h = 0.3 * n1 + 0.1 * ripple;
  vec2 rel;
  vec4 v = voronoiT(uv * 8.0, 8.0, 0.9, rel);
  float size = (0.22 + 0.12 * v.w) * step(0.55, v.z);
  float dd = length(rel * vec2(1.0, 1.2));
  float peb = smoothstep(size, size - 0.03, dd);
  vec3 pc = mix(uT[2], uT[3], v.w);
  col = mix(col, col * 0.7, smoothstep(size + 0.05, size, dd) * (1.0 - peb));
  col = mix(col, pc, peb);
  h = max(h, 0.6 * peb);
}

void layerRock(vec2 uv, out vec3 col, out float h) {
  float n1 = fbmT(uv, 3.0, 4);
  float n2 = fbmT(uv + 0.3, 8.0, 3);
  col = mix(uT[0], uT[1], bands(n1, 3.0));
  float sid;
  float s1 = strokes(uv, 6.0, 0.5, 0.12, 4.0, sid);
  col = mix(col, sid < 0.5 ? uT[0] * 0.85 : uT[2], s1 * 0.35);
  // chiselled facets
  vec2 rel;
  vec4 v = voronoiT(uv * 4.0, 4.0, 1.0, rel);
  float e = v.y - v.x;
  col *= mix(0.72, 1.0, smoothstep(0.01, 0.07, e)) * (0.9 + 0.2 * v.z);
  h = 0.5 * n1 + 0.2 * s1 + 0.25 * smoothstep(0.0, 0.15, e);
}

void layerCrust(vec2 uv, out vec3 col, out float h) {
  // cooled lava plates with dark seams (seams glow in the terrain shader where h is low)
  vec2 rel;
  vec4 v = voronoiT(uv * 4.0, 4.0, 0.9, rel);
  float e = v.y - v.x;
  float n1 = fbmT(uv, 4.0, 3);
  col = mix(uT[0], uT[1], 0.3 + 0.5 * v.z) * (0.8 + 0.3 * n1);
  float seam = smoothstep(0.08, 0.02, e);
  col = mix(col, uT[0] * 0.4, seam);
  h = mix(0.6 + 0.3 * n1, 0.0, seam);
}

void layerNoise(vec2 uv, out vec3 col, out float h) {
  col = vec3(0.0);
  h = 0.5 * gnoiseT(uv * 4.0, 4.0) + 0.3 * gnoiseT(uv * 9.0 + 3.0, 9.0) + 0.2 * gnoiseT(uv * 19.0 + 1.0, 19.0);
}

void main() {
  vec3 col; float h;
  vec2 uv = vUv;
  if (uLayer == 0) layerGround(uv, col, h);
  else if (uLayer == 1) layerLane(uv, col, h);
  else if (uLayer == 2) layerFloor(uv, col, h);
  else if (uLayer == 3) layerCobble(uv, col, h);
  else if (uLayer == 4) layerBed(uv, col, h);
  else if (uLayer == 5) layerRock(uv, col, h);
  else if (uLayer == 6) layerCrust(uv, col, h);
  else layerNoise(uv, col, h);
  if (uMode == 1) gl_FragColor = vec4(h, h, h, 1.0);
  else gl_FragColor = vec4(col, 1.0);
}
`,xa=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tHeight;
uniform float uBump;
uniform float uTexel;
float hAt(vec2 uv) { return texture2D(tHeight, fract(uv)).r; }
void main() {
  float l = hAt(vUv - vec2(uTexel, 0.0)), r = hAt(vUv + vec2(uTexel, 0.0));
  float d = hAt(vUv - vec2(0.0, uTexel)), u = hAt(vUv + vec2(0.0, uTexel));
  vec3 n = normalize(vec3((l - r) * uBump, (d - u) * uBump, 1.0));
  gl_FragColor = vec4(n * 0.5 + 0.5, hAt(vUv));
}
`;function Sa(e,t){switch(t){case q.ground:return e.ground;case q.lane:return e.lane;case q.floor:return e.floor;case q.cobble:return e.stone;case q.bed:return e.bed;case q.rock:return e.rock;case q.crust:return e.key===`volcanic`?[1708048,3810336,5913136,16738848]:e.rock;default:return e.ground}}function Ca(e,t,n,r){let i={minFilter:Ce,magFilter:xe,generateMipmaps:!0,depthBuffer:!1,wrapS:We,wrapT:We},a=new ae(t,t,ha,{...i,colorSpace:Te}),o=new ae(t,t,ha,{...i}),s=new Se(t,t,{type:b,depthBuffer:!1,wrapS:We,wrapT:We}),c=e.capabilities.getMaxAnisotropy();for(let e of[a.texture,o.texture])e.wrapS=e.wrapT=We,e.anisotropy=Math.min(8,c);let l=new P(new et(2,2)),u=new he;u.add(l);let d=new Me(-1,1,1,-1,0,1),f=[new I,new I,new I,new I],p=new S({vertexShader:ya,fragmentShader:ba,uniforms:{uLayer:{value:0},uMode:{value:0},uPattern:{value:_a[n.pattern]},uLanePattern:{value:r},uT:{value:f}},depthTest:!1,depthWrite:!1}),m=new S({vertexShader:ya,fragmentShader:xa,uniforms:{tHeight:{value:s.texture},uBump:{value:1},uTexel:{value:1/t}},depthTest:!1,depthWrite:!1}),h=e.getRenderTarget(),g=e.autoClear;e.autoClear=!1;for(let r=0;r<ha;r++)Sa(n,r).forEach((e,t)=>f[t].setHex(e)),p.uniforms.uLayer.value=r,l.material=p,p.uniforms.uMode.value=1,e.setRenderTarget(s),e.render(u,d),p.uniforms.uMode.value=0,e.setRenderTarget(a,r),e.render(u,d),l.material=m,m.uniforms.uBump.value=ga[r]*t/256,e.setRenderTarget(o,r),e.render(u,d);return e.setRenderTarget(h),e.autoClear=g,s.dispose(),p.dispose(),m.dispose(),l.geometry.dispose(),{albedo:a.texture,normal:o.texture,dispose:()=>{a.dispose(),o.dispose()}}}var wa={water:0,lava:1,ice:2,abyss:3,none:4};function Ta(e){let t=e.world.toFixed(1),n=e.min.toFixed(1);return`
uniform sampler2D tMaskA;
uniform sampler2D tMaskB;
uniform sampler2D tMaskC;
uniform sampler2DArray tAlb;
uniform sampler2DArray tNrm;
uniform float uTime;
uniform float uLevel;
uniform int uLiq;
uniform vec3 uEmber;
uniform vec3 uLiqGlow;
uniform vec3 uBushTint;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform float uStrata;
uniform float uTrampleLane;
uniform float uRockSlope;
uniform vec4 uScorch[16];
uniform float uHeat[16];
uniform vec4 uWet[16];
uniform int uScorchN;
uniform int uWetN;
varying vec3 vWPos;
varying vec3 vWNrm;
vec3 tAlbedo; vec3 tN; float tAO; vec3 tEmit;

void terrainShade() {
  vec2 wxz = vWPos.xz;
  float macro = texture(tNrm, vec3(wxz * 0.019, ${q.noise}.0)).a;
  float macro2 = texture(tNrm, vec3(wxz * 0.0071 + 0.31, ${q.noise}.0)).a;
  float fine = texture(tNrm, vec3(wxz * 0.23, ${q.rock}.0)).a;
  vec2 muv = (wxz - ${n}) / ${t};
  vec2 warp = (vec2(macro, fine) - 0.5) * 0.9 / ${t};
  vec4 mA = texture(tMaskA, muv + warp);
  vec4 mB = texture(tMaskB, muv);
  vec4 mC = texture(tMaskC, muv + warp * 0.5);
  float lane = mA.r, wall = mA.b, pave = mA.a;
  float lat = mB.r * 6.0, canopy = mB.g, camp = mB.b, path = mB.a;
  float bush = mC.r, crust = mC.g, ice = mC.b, crater = mC.a;
  float y = vWPos.y;
  vec3 N0 = normalize(vWNrm);
  float slope = 1.0 - N0.y;

  // Lane features: worn centre, wheel ruts, broken stone edging.
  float worn = lane * smoothstep(4.4, 2.4, lat + (macro - 0.5) * 2.2);
  float rq = (lat - 1.3) / 0.32;
  float ruts = lane * exp(-rq * rq) * (0.6 + 0.4 * fine);
  float edging = lane * smoothstep(3.75, 4.05, lat) * smoothstep(4.7, 4.3, lat) * step(0.47, texture(tNrm, vec3(wxz * 0.11, ${q.noise}.0)).a);
  float trampled = max(camp * smoothstep(0.55, 1.0, camp) * 0.6 * smoothstep(0.4, 0.65, macro + fine * 0.4), path * smoothstep(0.8, 1.0, path) * (0.55 + 0.35 * fine));
  // Slab roads: jungle paths stay ground (packed, darker), they do not turn into road.
  float packed = trampled * (1.0 - uTrampleLane);
  trampled *= uTrampleLane;

  float wBed = uLiq == 0 ? smoothstep(uLevel + 0.035, uLevel - 0.05, y) : uLiq == 1 ? smoothstep(uLevel + 0.035, uLevel - 0.05, y) * smoothstep(0.2, 0.45, mA.g) : 0.0;
  float rock = smoothstep(uRockSlope, uRockSlope + 0.25, slope + (fine - 0.5) * 0.25);
  float wCrust = crust * (1.0 - rock);
  float wCob = clamp(max(pave, edging) * (1.0 - 0.55 * wBed), 0.0, 1.0) * (1.0 - rock);
  float wDirt = clamp(worn + trampled, 0.0, 1.0) * (1.0 - wCob) * (1.0 - wBed) * (1.0 - rock);
  float wFor = wall * (1.0 - wBed) * (1.0 - wCob) * (1.0 - rock);
  float wRock = rock * (1.0 - wBed * 0.7);
  float wGr = clamp(1.0 - wDirt - wFor - wCob - wBed - wRock - wCrust, 0.0, 1.0);

  float plaza = pave * (1.0 - lane) * (1.0 - wBed);
  vec2 uvG = wxz / 2.6, uvD = wxz / 3.6, uvF = wxz / 3.1, uvC = wxz / (plaza > 0.5 ? 4.6 : 2.4), uvB = wxz / 2.5;
  // Rock: planar projection along the dominant horizontal axis (cliff faces), strata by height.
  // Steep faces: vertical planar projection (strata); gentler banks: top-down (no stretching).
  vec2 uvR = (slope > 0.62 ? (abs(N0.x) > abs(N0.z) ? vec2(vWPos.z, y * 1.6) : vec2(vWPos.x, y * 1.6)) : wxz) / 3.0;
  vec4 nG = texture(tNrm, vec3(uvG, ${q.ground}.0));
  vec4 nD = texture(tNrm, vec3(uvD, ${q.lane}.0));
  vec4 nF = texture(tNrm, vec3(uvF, ${q.floor}.0));
  vec4 nC = texture(tNrm, vec3(uvC, ${q.cobble}.0));
  vec4 nB = texture(tNrm, vec3(uvB, ${q.bed}.0));
  vec4 nR = texture(tNrm, vec3(uvR, ${q.rock}.0));
  vec4 nK = texture(tNrm, vec3(wxz / 3.3, ${q.crust}.0));
  // Height-aware blend: pebbles and cobbles poke through grass / dirt at the borders.
  float k = 0.55;
  vec4 w = vec4(wGr + nG.a * k, wDirt + nD.a * k, wFor + nF.a * k, wCob + nC.a * k);
  vec3 w2 = vec3(wBed + nB.a * k, wRock + nR.a * k, wCrust + nK.a * k);
  float mx = max(max(max(w.x, w.y), max(w.z, w.w)), max(max(w2.x, w2.y), w2.z)) - 0.22;
  w = max(w - mx, 0.0) * step(0.001, vec4(wGr, wDirt, wFor, wCob));
  w2 = max(w2 - mx, 0.0) * step(0.001, vec3(wBed, wRock, wCrust));
  float ws = w.x + w.y + w.z + w.w + w2.x + w2.y + w2.z + 1e-5;
  w /= ws; w2 /= ws;

  vec4 aG = w.x > 0.0 ? texture(tAlb, vec3(uvG, ${q.ground}.0)) : vec4(0.0);
  vec4 aD = w.y > 0.0 ? texture(tAlb, vec3(uvD, ${q.lane}.0)) : vec4(0.0);
  vec4 aF = w.z > 0.0 ? texture(tAlb, vec3(uvF, ${q.floor}.0)) : vec4(0.0);
  vec4 aC = w.w > 0.0 ? texture(tAlb, vec3(uvC, ${q.cobble}.0)) : vec4(0.0);
  vec4 aB = w2.x > 0.0 ? texture(tAlb, vec3(uvB, ${q.bed}.0)) : vec4(0.0);
  vec4 aR = w2.y > 0.0 ? texture(tAlb, vec3(uvR, ${q.rock}.0)) : vec4(0.0);
  vec4 aK = w2.z > 0.0 ? texture(tAlb, vec3(wxz / 3.3, ${q.crust}.0)) : vec4(0.0);
  // Large-scale colour variation (breaks tiling): sun-dried and lush patches.
  aG.rgb *= mix(vec3(1.18, 1.06, 0.82), vec3(0.88, 1.0, 1.02), smoothstep(0.3, 0.7, macro2));
  aD.rgb *= 0.88 + 0.26 * macro;
  aC.rgb *= mix(vec3(1.0), wxz.y > wxz.x ? vec3(0.9, 0.97, 1.14) : vec3(1.14, 0.96, 0.88), plaza * 0.7);
  aD.rgb = mix(aD.rgb, aD.rgb * vec3(0.66, 0.63, 0.6), ruts);
  // Strata bands on cliffs (canyon / basalt / crags).
  aR.rgb *= 1.0 + uStrata * (0.18 * sin(y * 5.5 + macro * 3.0) + 0.1 * sin(y * 13.0));
  aR.rgb = mix(aR.rgb, aR.rgb * 1.25, smoothstep(0.55, 0.85, N0.y + fine * 0.2) * 0.5);
  vec4 alb = aG * w.x + aD * w.y + aF * w.z + aC * w.w + aB * w2.x + aR * w2.y + aK * w2.z;
  vec3 tn = (nG.xyz * 2.0 - 1.0) * w.x + (nD.xyz * 2.0 - 1.0) * w.y + (nF.xyz * 2.0 - 1.0) * w.z + (nC.xyz * 2.0 - 1.0) * w.w
          + (nB.xyz * 2.0 - 1.0) * w2.x + (nR.xyz * 2.0 - 1.0) * w2.y + (nK.xyz * 2.0 - 1.0) * w2.z;
  float hgt = nG.a * w.x + nD.a * w.y + nF.a * w.z + nC.a * w.w + nB.a * w2.x + nR.a * w2.y + nK.a * w2.z;
  // Packed trails on slab-lane maps (snow, ash, abyss): clearly trodden, so walkable ground reads at a glance.
  tAlbedo = alb.rgb * (1.0 - packed * 0.3);
  tEmit = vec3(0.0);
#ifndef VA_LOW
  if (lane > 0.02) {
    float e = 0.2;
    float latX = texture(tMaskB, muv + vec2(e / ${t}, 0.0)).r * 6.0;
    float latZ = texture(tMaskB, muv + vec2(0.0, e / ${t})).r * 6.0;
    vec2 glat = vec2(latX - lat, latZ - lat) / e;
    float q = (lat - 1.3) / 0.32;
    float rp = -2.0 * q / 0.32 * exp(-q * q) * lane * (1.0 - wCob);
    tn.xy += 0.06 * rp * glat;
  }
#endif

  // Gameplay bushes: a darker, tinted footprint so their extent reads from above.
  tAlbedo = mix(tAlbedo, tAlbedo * uBushTint, smoothstep(0.25, 0.75, bush) * 0.55);

  // Embers: ash cracks, crust seams, slab gaps and craters glow (volcanic maps only).
  if (uEmber.r + uEmber.g > 0.0) {
    float pulse = 0.75 + 0.25 * sin(uTime * 1.7 + macro * 9.0 + wxz.x * 0.3);
    float crack = smoothstep(0.1, 0.0, nG.a) * w.x * smoothstep(0.55, 0.8, macro2 + fine * 0.25);
    float seam = smoothstep(0.12, 0.0, nK.a) * w2.z * 1.05;
    float gap = smoothstep(0.12, 0.04, nD.a) * w.y * 0.45;
    tEmit += uEmber * (crack + seam + gap) * pulse;
    tAlbedo = mix(tAlbedo, tAlbedo * vec3(0.35, 0.3, 0.3), crater * 0.85);
    tEmit += uEmber * crater * smoothstep(0.3, 0.05, hgt) * 1.4 * pulse;
  } else {
    tAlbedo = mix(tAlbedo, tAlbedo * vec3(0.5, 0.45, 0.42), crater * 0.7);
  }

  // Abyss: chasm walls lit from the glow below.
  if (uLiq == 3) tEmit += uLiqGlow * smoothstep(-1.2, -9.0, y) * (0.5 + 0.5 * fine) * 0.9;
  // Ice sheets: frost under the ice (the ice surface is drawn on top).
  tAlbedo = mix(tAlbedo, vec3(0.75, 0.88, 1.0), ice * 0.6);

  // Wet shore and splash-wet spots; underwater darkening and animated caustics.
  float wet = (uLiq == 0) ? smoothstep(uLevel + 0.2, uLevel + 0.012, y) * (1.0 - wall * 0.6) : 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= uWetN) break;
    vec4 s = uWet[i];
    if (s.w <= 0.0) continue;
    float d = length(wxz - s.xy) / s.z + (fine - 0.5) * 0.6;
    wet = max(wet, smoothstep(1.0, 0.45, d) * s.w);
  }
  float uw = (uLiq == 0) ? smoothstep(uLevel, uLevel - 0.12, y) : 0.0;
  tAlbedo = mix(tAlbedo, tAlbedo * tAlbedo * 2.2 * vec3(0.8, 0.9, 1.0), wet * 0.6 * (1.0 - uw));
  tAlbedo *= mix(vec3(1.0), vec3(0.55, 0.9, 0.9), uw);
#ifndef VA_LOW
  if (uw > 0.0) {
    float c1 = texture(tNrm, vec3(wxz * 0.33 + vec2(uTime * 0.045, uTime * 0.03), ${q.noise}.0)).a;
    float c2 = texture(tNrm, vec3(wxz * 0.27 - vec2(uTime * 0.03, uTime * 0.05), ${q.noise}.0)).a;
    float caus = pow(clamp(1.0 - abs(c1 - c2) * 4.0, 0.0, 1.0), 5.0);
    tAlbedo += caus * uw * vec3(0.35, 0.55, 0.5);
  }
#endif

  // Scorch decals (burnt ground, glowing embers while fresh).
  float scorch = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= uScorchN) break;
    vec4 s = uScorch[i];
    if (s.w <= 0.0) continue;
    float d = length(wxz - s.xy) / s.z;
    float n = texture(tNrm, vec3(wxz * 0.5 + float(i) * 0.13, ${q.rock}.0)).a;
    float m = smoothstep(1.05, 0.3, d + (n - 0.5) * 0.7) * s.w;
    scorch = max(scorch, m);
    float heat = uHeat[i];
    if (heat > 0.0) tEmit += vec3(3.5, 1.1, 0.3) * heat * pow(smoothstep(0.75, 0.0, d), 2.0) * smoothstep(0.5, 0.7, n + fine * 0.3);
  }
  tAlbedo = mix(tAlbedo, mix(vec3(0.05, 0.03, 0.05), vec3(0.13, 0.06, 0.04), fine), scorch * 0.85);

  // Normal: tangent frame = world X / Z projected onto the surface.
  vec3 T = normalize(vec3(1.0, 0.0, 0.0) - N0 * N0.x);
  vec3 B = normalize(cross(T, N0));
  tn.z = max(tn.z, 0.05);
#ifdef VA_LOW
  tN = normalize(mix(N0, normalize(T * tn.x + B * tn.y + N0 * tn.z), 0.6));
#else
  tN = normalize(T * tn.x + B * tn.y + N0 * tn.z);
#endif
  tN = normalize(mix(tN, N0, uw * 0.6));
  // Wet sheen: painted sun glints on wet ground.
  vec3 V = normalize(cameraPosition - vWPos);
  vec3 H = normalize(uSunDir + V);
  float spec = pow(max(dot(tN, H), 0.0), 60.0) * wet * (1.0 - uw) * 0.9;
  tEmit += uSunCol * spec;
  // Ambient occlusion: canopies, cavities between stones / pebbles.
  tAO = mix(0.42, 1.0, canopy) * mix(0.7, 1.0, smoothstep(0.05, 0.5, hgt));
}
`}var Ea=class{group=new tt;material;decals;uniforms;constructor(e,t,n,r,i,a,o=20){this.decals={scorch:Array.from({length:16},()=>new Ke(0,0,1,0)),heat:Array(16).fill(0),wet:Array.from({length:16},()=>new Ke(0,0,1,0))};let s=t.key===`volcanic`;Dt(t.fow.tint,t.fow.amount),Tt(null);let c=new O(1,1,0).normalize();this.uniforms={tMaskA:{value:n[0]},tMaskB:{value:n[1]},tMaskC:{value:n[2]},tAlb:{value:r},tNrm:{value:i},uTime:{value:0},uLevel:{value:e.level},uLiq:{value:wa[e.liquidKind]},uEmber:{value:s?new I(t.accent).multiplyScalar(1.5):new I(0,0,0)},uLiqGlow:{value:new I(t.liquidGlow||0)},uBushTint:{value:new I(t.bush.colors[0]).lerp(new I(16777215),.35)},uSunDir:{value:c},uSunCol:{value:new I(t.light.sun)},uStrata:{value:t.wall===`canyon`?1:t.wall===`basalt`||t.wall===`abyss`?.6:.15},uRockSlope:{value:t.wall===`snow`?.5:t.wall===`forest`||t.wall===`jungle`?.38:.3},uTrampleLane:{value:t.key===`abyss`||t.key===`volcanic`||t.key===`snow`?0:1},uScorch:{value:this.decals.scorch},uHeat:{value:this.decals.heat},uWet:{value:this.decals.wet},uScorchN:{value:0},uWetN:{value:0},...di()};let l=new M({color:16777215});a||(l.defines={VA_LOW:``});let u=Ta(e);l.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;
varying vec3 vWNrm;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWNrm = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${u}\n${mi.replace(`varying vec3 vLmPos;`,`#define vLmPos vWPos`)}`).replace(`#include <map_fragment>`,`terrainShade();
diffuseColor.rgb = tAlbedo;`).replace(`#include <normal_fragment_maps>`,`normal = normalize((viewMatrix * vec4(tN, 0.0)).xyz);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += tEmit;`).replace(`#include <aomap_fragment>`,`reflectedLight.indirectDiffuse *= tAO;
reflectedLight.indirectSpecular *= tAO;`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>\n${hi}`)},l.customProgramCacheKey=()=>`va-terrain-${e.def.id}-${a?`h`:`l`}`,this.material=l,this.build(e,o)}setSun(e){this.uniforms.uSunDir.value.copy(e)}build(e,t){let n=e.hres,r=e.hn,i=e.height,a=t*n,o=Math.ceil((r-1)/a),s=(e,t,a)=>{let o=Math.max(0,e-1),s=Math.min(r-1,e+1),c=Math.max(0,t-1),l=Math.min(r-1,t+1),u=(i[t*r+s]-i[t*r+o])/((s-o)/n),d=(i[l*r+e]-i[c*r+e])/((l-c)/n);return a.set(-u,1,-d).normalize()},c=new O;for(let t=0;t<o;t++)for(let l=0;l<o;l++){let o=l*a,u=t*a,d=Math.min(r-1,o+a),f=Math.min(r-1,u+a),p=d-o+1,m=f-u+1,h=new Float32Array(p*m*3),g=new Float32Array(p*m*3),_=0;for(let t=u;t<=f;t++)for(let a=o;a<=d;a++)h[_*3]=e.min+a/n,h[_*3+1]=i[t*r+a],h[_*3+2]=e.min+t/n,s(a,t,c),g[_*3]=c.x,g[_*3+1]=c.y,g[_*3+2]=c.z,_++;let v=[];for(let e=0;e<m-1;e++)for(let t=0;t<p-1;t++){let n=e*p+t,r=n+1,i=n+p,a=i+1;v.push(n,i,r,r,i,a)}let y=new F;y.setAttribute(`position`,new A(h,3)),y.setAttribute(`normal`,new A(g,3)),y.setIndex(v),y.computeBoundingSphere(),y.computeBoundingBox();let b=new P(y,this.material);b.receiveShadow=!0,b.castShadow=!1,this.group.add(b)}}update(e){this.uniforms.uTime.value=e;let t=0,n=0;for(let e=0;e<16;e++)this.decals.scorch[e].w>0&&(t=e+1),this.decals.wet[e].w>0&&(n=e+1);this.uniforms.uScorchN.value=t,this.uniforms.uWetN.value=n}},Da=new Set([`explosion`,`meteor`,`fire_pillar`]),Oa=new Set([`ground_slam`,`shockwave`,`cone_blast`,`frost_nova`,`shadow_burst`,`holy_light`,`spin_slash`,`tornado`,`poison_cloud`]),ka=140,Aa=class{data;liquid;decals;vfx;crowns;high;group=new tt;walkers=new Map;proj=new Map;scorchBirth=Array(16).fill(-99);scorchNext=0;wetBirth=Array(16).fill(-99);wetAmt=Array(16).fill(0);wetNext=0;emitters=[];scheduled=[];leaves=[];leavesB=[];leafMesh=null;leafAcc=0;nearCrowns=[];crownAt=-99;frame=0;time=0;m=new L;q=new C;e=new Le;s=new O;p=new O;c=new I;hitAt=new Map;dustCol;lava;ice;constructor(e,t,n,r,i,a){this.data=e,this.liquid=t,this.decals=n,this.vfx=r,this.crowns=i,this.high=a;let o=e.style;if(this.lava=e.liquidKind===`lava`,this.ice=e.liquidKind===`ice`,this.dustCol=o.pattern===`snow`?[15922943,16777215]:o.pattern===`ash`?[5917254,9075314]:o.pattern===`sand`?[15779984,16311488]:o.pattern===`slate`?[11050176,14209256]:[15783586,16181968],o.ambient.includes(`leaves`)){let e=new et(1,1),t=new M({side:2,alphaTest:.5});t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vLUv;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vLUv;`).replace(`#include <color_fragment>`,`#include <color_fragment>
            vec2 q = vLUv * 2.0 - 1.0;
            float w = (1.0 - q.y * q.y) * 0.55;
            if (abs(q.x) > w) discard;
            diffuseColor.rgb *= 1.0 - 0.25 * smoothstep(0.05, 0.0, abs(q.x));`)},t.customProgramCacheKey=()=>`va-leaf`,this.leafMesh=new E(e,t,ka),this.leafMesh.count=0,this.leafMesh.frustumCulled=!1,this.leafMesh.instanceMatrix.setUsage(de);for(let e=0;e<ka;e++)this.leafMesh.setColorAt(e,this.c.set(16777215));this.group.add(this.leafMesh)}}depthAt(e,t){return this.data.liquidDepth(e,t)}dryDirt(e,t){let n=this.data;return n.sample(n.lane,e,t)>.45||n.sample(n.camp,e,t)>.5||n.sample(n.pave,e,t)>.5||n.style.pattern===`sand`||n.style.pattern===`snow`||n.style.pattern===`ash`}splash(e,t,n){if(this.lava)return this.emberSplash(e,t,n);let r=this.vfx.smoke,i=this.data.level+.04,a=Math.round((this.high?10:5)*Math.min(3,n));for(let o=0;o<a;o++){let a=Math.random()*Math.PI*2,o=(.6+Math.random()*1.2)*Math.sqrt(n);r.emit({x:e,y:i,z:t,vx:Math.cos(a)*o,vy:2.4+Math.random()*2.4*Math.sqrt(n),vz:Math.sin(a)*o,life:.5+Math.random()*.3,size:(.17+Math.random()*.12)*Math.sqrt(n),size1:.06,color:16777215,color2:11858678,alpha:1,gravity:10,drag:.4,stretch:.45,fadeIn:.02,fadePow:1.2})}r.emit({x:e,y:i+.08,z:t,vy:.5,life:.35,size:.5*n,size1:1.05*n,color:16777215,alpha:.75,fadeIn:.04});let o=this.vfx.glow;for(let r=0;r<Math.ceil(a/2);r++){let r=Math.random()*Math.PI*2,a=(.5+Math.random())*Math.sqrt(n);o.emit({x:e,y:i+.05,z:t,vx:Math.cos(r)*a,vy:2.6+Math.random()*2*Math.sqrt(n),vz:Math.sin(r)*a,life:.45,size:.12*Math.sqrt(n),size1:.05,color:15269887,color2:9431295,alpha:.7,gravity:10,stretch:.4,fadeIn:.02,fadePow:1.4})}n>.7&&o.emit({x:e,y:i+.25,z:t,life:.25,size:.45*n,color:14679295,alpha:.55,shape:1,rot:Math.random()*3}),this.liquid?.addRipple(e,t,Math.min(1.5,.35+n*.45),this.time)}emberSplash(e,t,n){let r=this.vfx.glow,i=this.data.level+.05,a=Math.round((this.high?8:4)*Math.min(3,n));for(let o=0;o<a;o++){let a=Math.random()*Math.PI*2,o=(.5+Math.random())*Math.sqrt(n);r.emit({x:e,y:i,z:t,vx:Math.cos(a)*o,vy:2+Math.random()*2.5*Math.sqrt(n),vz:Math.sin(a)*o,life:.6+Math.random()*.4,size:.12*Math.sqrt(n),size1:.04,color:16765024,color2:16726538,alpha:1,gravity:9,stretch:.4,fadeIn:.02,fadePow:1})}this.vfx.smoke.emit({x:e,y:i+.2,z:t,vy:.9,life:.9,size:.45*n,size1:1.2*n,color:5917256,color2:9075318,alpha:.45,drag:1,fadeIn:.1}),this.liquid?.addRipple(e,t,Math.min(1.5,.35+n*.45),this.time)}iceStep(e,t,n){let r=this.vfx.glow;for(let i=0;i<(this.high?3:1);i++)r.emit({x:e+(Math.random()-.5)*.4,y:.06,z:t+(Math.random()-.5)*.4,vy:.3,life:.5,size:.14*n,color:15400959,alpha:.9,shape:1,rot:Math.random()*3,fadeIn:.05});this.vfx.smoke.emit({x:e,y:.1,z:t,vx:(Math.random()-.5)*.4,vy:.25,vz:(Math.random()-.5)*.4,life:.6,size:.3*n,size1:.7*n,color:15267071,alpha:.4,drag:2,fadeIn:.08})}bigSplash(e,t,n){if(this.lava){for(let r=0;r<3;r++)this.emberSplash(e+(Math.random()-.5)*n,t+(Math.random()-.5)*n,2);this.embers(e,t,n,2);return}let r=this.vfx.smoke,i=this.data.level+.04,a=this.high?34:16;for(let o=0;o<a;o++){let a=Math.random()*Math.PI*2,o=Math.random()*n*.6,s=1.2+Math.random()*2.2;r.emit({x:e+Math.cos(a)*o,y:i,z:t+Math.sin(a)*o,vx:Math.cos(a)*s,vy:4+Math.random()*4.5,vz:Math.sin(a)*s,life:.7+Math.random()*.4,size:.2+Math.random()*.18,size1:.07,color:16187390,color2:10479344,alpha:.95,gravity:11,drag:.3,stretch:.45,fadeIn:.02,fadePow:1.3})}for(let a=0;a<6;a++){let o=a/6*Math.PI*2;r.emit({x:e+Math.cos(o)*n*.4,y:i+.3,z:t+Math.sin(o)*n*.4,vx:Math.cos(o)*.8,vy:.6,vz:Math.sin(o)*.8,life:.9,size:.8,size1:1.8,color:16777215,color2:13629183,alpha:.45,drag:1.5,fadeIn:.05})}for(let n=0;n<3;n++)this.schedule(this.time+n*.18,()=>this.liquid?.addRipple(e,t,1.4-n*.25,this.time));this.wet(e,t,n*1.5,1)}dust(e,t,n,r=2){let i=this.vfx.smoke,a=this.data.heightAt(e,t)+.12;for(let o=0;o<r;o++){let r=Math.random()*Math.PI*2;i.emit({x:e+Math.cos(r)*.12,y:a,z:t+Math.sin(r)*.12,vx:Math.cos(r)*.55*n,vy:.35+Math.random()*.3,vz:Math.sin(r)*.55*n,life:.55+Math.random()*.3,size:.28*n,size1:.7*n,color:this.dustCol[0],color2:this.dustCol[1],alpha:.5,drag:2.4,fadeIn:.08,fadePow:1.6})}}dustRing(e,t,n){let r=this.vfx.smoke,i=this.data.heightAt(e,t)+.2,a=this.high?18:9;for(let o=0;o<a;o++){let s=o/a*Math.PI*2+Math.random()*.3;r.emit({x:e+Math.cos(s)*n*.3,y:i,z:t+Math.sin(s)*n*.3,vx:Math.cos(s)*n*1.6,vy:.5+Math.random()*.6,vz:Math.sin(s)*n*1.6,life:.8+Math.random()*.4,size:.5,size1:1.2,color:this.dustCol[0],color2:this.dustCol[1],alpha:.32,drag:3,fadeIn:.05,fadePow:1.5})}}debris(e,t,n){let r=this.high?14:7,i=this.data.heightAt(e,t)+.1,a=this.data.style,o=[a.lane[0],a.lane[1],a.rock[0],a.rock[1],a.ground[1]];for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,s=1.5+Math.random()*2.5*Math.min(2,n);this.vfx.particles.emit({x:e+Math.cos(r)*.2,y:i,z:t+Math.sin(r)*.2,vx:Math.cos(r)*s,vy:4+Math.random()*4,vz:Math.sin(r)*s,life:1.2+Math.random()*.6,size:.09+Math.random()*.12,color:o[a%o.length],gravity:16,bounce:.35})}}scorch(e,t,n){let r=this.scorchNext;this.scorchNext=(r+1)%16,this.decals.scorch[r].set(e,t,n,1),this.scorchBirth[r]=this.time}wet(e,t,n,r){if(this.data.liquidKind!==`water`)return;let i=this.wetNext;this.wetNext=(i+1)%16,this.decals.wet[i].set(e,t,n,r),this.wetBirth[i]=this.time,this.wetAmt[i]=r}embers(e,t,n,r){this.emitters.push({x:e,z:t,r:n,until:this.time+r,acc:0})}schedule(e,t){this.scheduled.push({at:e,fn:t})}impact(e,t,n,r,i){this.depthAt(e,t)>.03?i||r?this.bigSplash(e,t,Math.max(1.2,n)):(this.splash(e,t,1.4),this.liquid?.addRipple(e,t,1.5,this.time)):r?(this.scorch(e,t,Math.max(.9,n*.85)),this.embers(e,t,Math.max(.8,n*.7),2.6),this.debris(e,t,n),this.dustRing(e,t,n*.6)):i?(this.debris(e,t,n*.7),this.dustRing(e,t,n*.7)):this.dustRing(e,t,n*.45)}along(e,t,n,r,i){let a=Math.hypot(n-e,r-t),o=Math.max(1,Math.ceil(a/.6));for(let a=0;a<=o;a++){let s=a/o,c=e+(n-e)*s,l=t+(r-t)*s;this.depthAt(c,l)>.03?(!i||a===0||a===o)&&this.splash(c,l,.9):this.ice&&this.data.onIce(c,l)?!i&&a%2==0&&this.iceStep(c,l,1.3):!i&&a%2==0&&this.dryDirt(c,l)&&this.dust(c,l,1.1,1)}i&&(this.depthAt(e,t)<=.03&&this.dust(e,t,1.2,3),this.depthAt(n,r)<=.03&&this.dust(n,r,1.2,3))}onEvents(e,t){this.time=t;for(let n of e)if(n.type===`vfx`){let e=n.params,r=(e.radius??1.6)*(e.scale??1);if(n.key===`meteor`){let n=t+(e.fallTime??.7);this.schedule(n,()=>this.impact(e.x,e.z,r,!0,!0))}else Da.has(n.key)?this.impact(e.x,e.z,r,!0,!0):Oa.has(n.key)?this.impact(e.x,e.z,r,!1,n.key===`ground_slam`||n.key===`shockwave`):(n.key===`dash_trail`||n.key===`blink`)&&e.toX!==void 0&&e.toZ!==void 0&&this.along(e.x,e.z,e.toX,e.toZ,n.key===`blink`)}else n.type===`death`?this.depthAt(n.x,n.z)>.03?this.splash(n.x,n.z,1.6):this.dust(n.x,n.z,1.4,3):n.type===`damage`&&n.amount>0&&n.basic&&t-(this.hitAt.get(n.targetId)??-9)>.35&&this.depthAt(n.x,n.z)>.03&&(this.hitAt.set(n.targetId,t),this.splash(n.x+(Math.random()-.5)*.4,n.z+(Math.random()-.5)*.4,.55))}update(e){let t=e.time;if(this.time=t,this.frame++,this.scheduled.length){let e=this.scheduled.filter(e=>e.at<=t);this.scheduled=this.scheduled.filter(e=>e.at>t);for(let t of e)t.fn()}this.updateWalkers(e),this.updateProjectiles(e),this.updateDecals(t),this.updateEmbers(e.dt),this.leafMesh&&this.updateLeaves(e,this.leafMesh)}updateWalkers(e){let t=e.focus.x,n=e.focus.z;for(let r of e.cur.units){if(r.dead||r.kind===`tower`||r.kind===`core`)continue;let i=e.units.positionOf(r.id);if(!i||Math.abs(i.x-t)>26||Math.abs(i.z-n)>22)continue;let a=this.walkers.get(r.id);if(!a){this.walkers.set(r.id,a={x:i.x,z:i.z,acc:0,wetUntil:0,stillT:0,seen:this.frame});continue}a.seen=this.frame;let o=Math.hypot(i.x-a.x,i.z-a.z);a.x=i.x,a.z=i.z;let s=e.dt>0?o/e.dt:0,c=this.depthAt(i.x,i.z),l=c>.03,u=this.ice&&this.data.onIce(i.x,i.z);if(l&&!this.lava&&(a.wetUntil=e.time+2.2),o>2.5){a.acc=0;continue}let d=r.radius>.9,f=r.kind===`hero`?.72:d?1.1:.55;if(a.acc+=o,s<.2?(a.stillT+=e.dt,l&&a.stillT>1.1&&(a.stillT=0,this.liquid?.addRipple(i.x,i.z,.4+(d?.4:0),e.time))):a.stillT=0,s>8.5&&(l?this.frame%2==0&&this.splash(i.x,i.z,.8):u?this.frame%2==0&&this.iceStep(i.x,i.z,1.2):this.frame%3==0&&this.dryDirt(i.x,i.z)&&this.dust(i.x,i.z,1.2,1)),!(a.acc<f)){if(a.acc%=f,l){let e=(r.kind===`hero`?.75:d?1.2:.5)*(.8+Math.min(1,c*3));this.splash(i.x+(Math.random()-.5)*.3,i.z+(Math.random()-.5)*.3,e)}else u?(r.kind===`hero`||d||Math.random()<.35)&&this.iceStep(i.x,i.z,r.kind===`hero`?1:.7):(e.time<a.wetUntil&&this.wet(i.x,i.z,.32,(a.wetUntil-e.time)/2.2),this.dryDirt(i.x,i.z)&&(r.kind===`hero`||d||Math.random()<.35)&&this.dust(i.x,i.z,d?1.3:r.kind===`hero`?.9:.7,1))}}if(this.frame%120==0)for(let[e,t]of this.walkers)this.frame-t.seen>120&&this.walkers.delete(e)}updateProjectiles(e){if(this.liquid&&!this.ice){for(let[t,n]of e.projectiles){let r=this.proj.get(t);if(r||this.proj.set(t,r={x:n.x,z:n.z,wet:!1,t:0,seen:this.frame}),r.seen=this.frame,r.x=n.x,r.z=n.z,r.wet=this.depthAt(n.x,n.z)>.03&&Math.abs(n.x-e.focus.x)<28&&Math.abs(n.z-e.focus.z)<24,r.wet&&(r.t+=e.dt,r.t>.07)){if(r.t=0,this.lava)this.vfx.glow.emit({x:n.x,y:this.data.level+.05,z:n.z,vy:1.6,life:.4,size:.1,color:16760896,color2:16726538,alpha:1,gravity:6,fadeIn:.02});else{let e=this.vfx.smoke;for(let t=0;t<2;t++)e.emit({x:n.x+(Math.random()-.5)*.2,y:this.data.level+.05,z:n.z+(Math.random()-.5)*.2,vx:(Math.random()-.5)*1.2,vy:1.6+Math.random()*1.4,vz:(Math.random()-.5)*1.2,life:.4,size:.12,size1:.04,color:15925245,color2:11070706,alpha:.9,gravity:9,stretch:.5,fadeIn:.02})}Math.random()<.5&&this.liquid.addRipple(n.x,n.z,.45,e.time)}}for(let[e,t]of this.proj)t.seen!==this.frame&&(t.wet&&this.splash(t.x,t.z,1),this.proj.delete(e))}}updateDecals(e){for(let t=0;t<16;t++){let n=e-this.scorchBirth[t],r=this.decals.scorch[t];r.w>0&&(r.w=n<7?1:Math.max(0,1-(n-7)/8)),this.decals.heat[t]=r.w>0?Math.max(0,1-n/2.8):0;let i=e-this.wetBirth[t],a=this.decals.wet[t];a.w>0&&(a.w=this.wetAmt[t]*Math.max(0,1-i/9))}}updateEmbers(e){let t=this.vfx.glow;if(this.emitters.length){this.emitters=this.emitters.filter(e=>e.until>this.time);for(let n of this.emitters)for(n.acc+=e*(this.high?30:12);n.acc>1;){--n.acc;let e=Math.random()*Math.PI*2,r=Math.random()*n.r;t.emit({x:n.x+Math.cos(e)*r,y:this.data.heightAt(n.x,n.z)+.1,z:n.z+Math.sin(e)*r,vx:(Math.random()-.5)*.6,vy:1.2+Math.random()*1.8,vz:(Math.random()-.5)*.6,life:.9+Math.random()*.9,size:.09+Math.random()*.06,size1:.03,color:16760906,color2:16730644,alpha:1,gravity:-.4,drag:.6,stretch:.3,fadeIn:.05,fadePow:1})}}}updateLeaves(e,t){let n=e.dt;e.time-this.crownAt>.5&&(this.crownAt=e.time,this.nearCrowns=this.crowns.filter(t=>Math.abs(t.x-e.focus.x)<22&&Math.abs(t.z-e.focus.z)<18));let r=this.data.style.canopy.map(e=>e[2]);for(this.leafAcc+=n*(this.high?9:3);this.leafAcc>1&&this.leaves.length<ka&&this.nearCrowns.length;){--this.leafAcc;let e=this.nearCrowns[Math.floor(Math.random()*this.nearCrowns.length)],n=Math.random()*Math.PI*2,i=e.r*(.6+Math.random()*.5),a=e.x+Math.cos(n)*i,o=e.z+Math.sin(n)*i;this.leaves.push({x:a,y:e.y-.5,z:o,vy:.45+Math.random()*.4,phase:Math.random()*6.28,spin:1+Math.random()*2,ax:Math.random()*6,ay:Math.random()*6,az:Math.random()*6,ground:this.data.heightAt(a,o)+.04,landed:-1,size:.26+Math.random()*.12});let s=this.leaves.length-1,c=Math.random();this.c.setHex(c<.55?r[Math.floor(Math.random()*r.length)]:c<.8?15900211:5944141),t.setColorAt(s,this.c)}this.leafAcc>1&&(this.leafAcc=1);let i=0,a=this.leavesB;a.length=0;for(let r of this.leaves){if(r.landed<0)r.y-=r.vy*n,r.phase+=n*1.6,r.x+=(Math.sin(r.phase)*.6+.25)*n,r.z+=Math.cos(r.phase*.7)*.4*n,r.ax+=r.spin*n,r.az+=r.spin*.7*n,r.y<=r.ground&&(r.y=r.ground,r.landed=e.time,r.ax=Math.PI/2,r.az=0,this.depthAt(r.x,r.z)>.03&&this.liquid?.addRipple(r.x,r.z,.25,e.time));else if(e.time-r.landed>3)continue;let o=r.landed<0?1:Math.max(0,1-(e.time-r.landed-2));a.push(r),this.e.set(r.ax,r.ay,r.az),this.q.setFromEuler(this.e),this.s.setScalar(r.size*Math.min(1,o)),this.m.compose(this.p.set(r.x,r.y,r.z),this.q,this.s),t.setMatrixAt(i,this.m),i++}this.leavesB=this.leaves,this.leaves=a,t.count=i,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}};function ja(e,t){let n=e*374761393+t*668265263|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n&65535)/65535}function Ma(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=ja(n,r),l=ja(n+1,r),u=ja(n,r+1),d=ja(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function Na(e,t,n=4){let r=0,i=.5,a=0;for(let o=0;o<n;o++)r+=Ma(e,t)*i,a+=i,e=e*2.03+17.1,t=t*2.03-9.7,i*=.5;return r/a}function J(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Y=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)};function Pa(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0,u=n+o*l-e,d=r+s*l-t;return{d:Math.sqrt(u*u+d*d),t:l}}var X=e=>new I(e);function Fa(e,t,n,r){return Math.sin(e*3.1+r)*Math.sin(t*2.7+r*1.7)*.5+Math.sin(n*3.7+r*.3+e)*.35+Math.sin((e+t+n)*5.3+r*2.1)*.15}function Z(e,t){e.getAttribute(`normal`)||e.computeVertexNormals();let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=new Float32Array(n.count*3),a=new I;for(let e=0;e<n.count;e++)t(n.getX(e),n.getY(e),n.getZ(e),r.getX(e),r.getY(e),r.getZ(e),a),i[e*3]=a.r,i[e*3+1]=a.g,i[e*3+2]=a.b;return e.setAttribute(`color`,new A(i,3)),e}function Ia(e){return e.getAttribute(`uv`)&&e.deleteAttribute(`uv`),e.getAttribute(`uv1`)&&e.deleteAttribute(`uv1`),e}function La(e){let t=e.map(e=>Ia(e.index?e.toNonIndexed():e));return zt(t)}function Ra(e,t,n,r,i=0,a=.88){let o=1/0,s=-1/0,c=e.reduce((e,t)=>e+t.x,0)/e.length,l=e.reduce((e,t)=>e+t.z,0)/e.length;for(let t of e)o=Math.min(o,t.y-t.r),s=Math.max(s,t.y+t.r);let u=o+(s-o)*.42,d=[],f=new O,p=new O,m=new I;e.forEach((i,h)=>{let g=It(new ne(1,t).deleteAttribute(`normal`).deleteAttribute(`uv`)),_=g.getAttribute(`position`),v=new Float32Array(_.count*3),y=new Float32Array(_.count*3);for(let t=0;t<_.count;t++){f.fromBufferAttribute(_,t);let d=i.r*(1+.16*Fa(f.x,f.y,f.z,r+h*7.3)),g=i.x+f.x*d,b=i.y+f.y*d*a,x=i.z+f.z*d;_.setXYZ(t,g,b,x),p.set(g-c,(b-u)*1.15,x-l).normalize().multiplyScalar(.75).add(f.clone().multiplyScalar(.25)).normalize(),v[t*3]=p.x,v[t*3+1]=p.y,v[t*3+2]=p.z;let S=Math.max(0,Math.min(1,(b-o)/(s-o)+.12*Fa(g*.8,b,x*.8,r)));S<.5?m.copy(n[0]).lerp(n[1],S/.5):m.copy(n[1]).lerp(n[2],(S-.5)/.5);let C=1;e.forEach((e,t)=>{if(t===h)return;let n=Math.hypot(g-e.x,b-e.y,x-e.z)-e.r;C=Math.min(C,.45+.55*Math.max(0,Math.min(1,(n+.15)/.75)))}),m.multiplyScalar(C),y[t*3]=m.r,y[t*3+1]=m.g,y[t*3+2]=m.b}g.setAttribute(`normal`,new A(v,3)),g.setAttribute(`color`,new A(y,3)),d.push(g)});let h=Math.round(i*60);for(let t=0;t<h;t++){let i=e[Math.floor(ja(t,r)*e.length)],a=ja(t*3+1,r)*Math.PI*2,o=.15+ja(t*5+2,r)*.8,s=Math.sqrt(1-o*o),c=new ne(.075+ja(t,r+3)*.04,0).deleteAttribute(`uv`);c.translate(i.x+Math.cos(a)*s*i.r*1.08,i.y+o*i.r*.95,i.z+Math.sin(a)*s*i.r*1.08);let l=n[3].clone().lerp(new I(1,1,1),ja(t,r+9)*.4);Z(c,(e,t,n,r,i,a,o)=>o.copy(l)),d.push(It(c))}return zt(d)}function za(e,t,n,r,i,a=5059366,o=9200712){let s=new R(n,t,e,8,4,!0).translate(0,e/2,0),c=s.getAttribute(`position`),l=new Float32Array(c.count*3),u=X(a),d=X(o),f=new I;for(let t=0;t<c.count;t++){let n=c.getY(t)/e,a=1+Math.max(0,.25-n)*2.2*(.7+.3*Math.sin(Math.atan2(c.getZ(t),c.getX(t))*3+i));c.setX(t,c.getX(t)*a+r*n*n),c.setZ(t,c.getZ(t)*a),f.copy(u).lerp(d,Math.min(1,n*1.3)*(.7+.3*Math.sin(Math.atan2(c.getZ(t),c.getX(t))*5))),l[t*3]=f.r,l[t*3+1]=f.g,l[t*3+2]=f.b}return s.setAttribute(`color`,new A(l,3)),s.computeVertexNormals(),Ia(s)}function Ba(e,t,n){let r=[],i=new I,a=X(16054527),o=X(12374256);for(let s=0;s<4;s++){let c=1.9-s*.38,l=1.7-s*.15,u=1.2+s*.95,d=new Ne(c,l,11,4,!0).translate(0,u+l/2,0),f=d.getAttribute(`position`),p=new Float32Array(f.count*3);for(let r=0;r<f.count;r++){let c=f.getY(r),d=Math.atan2(f.getZ(r),f.getX(r));if(c<u+.01){let t=1+.12*Math.sin(d*11+e);f.setX(r,f.getX(r)*t),f.setZ(r,f.getZ(r)*t),f.setY(r,c-.18*(.5+.5*Math.sin(d*11+e)))}let m=(f.getY(r)-u)/l,h=(s+m)/4;i.copy(t[0]).lerp(t[1],Math.min(1,h*1.6)),h>.6&&i.lerp(t[2],(h-.6)/.4*.6),n&&m>.62+.1*Math.sin(d*5+s)&&i.copy(o).lerp(a,Math.min(1,(m-.62)*3.5)),p[r*3]=i.r,p[r*3+1]=i.g,p[r*3+2]=i.b}d.setAttribute(`color`,new A(p,3)),d.computeVertexNormals();let m=d.getAttribute(`normal`),h=new O;for(let e=0;e<m.count;e++)h.fromBufferAttribute(m,e),h.y=Math.max(h.y,.35),h.normalize(),m.setXYZ(e,h.x,h.y,h.z);r.push(Ia(d))}return zt(r)}function Va(e,t){let n=J(e),r=[],i=4.6,a=.9+n()*.5,o=new O;for(let e=0;e<7;e++){let t=e/7,n=(e+1)/7,o=new R(.17-n*.05,.2-t*.05,.6702857142857143,8,1,!0),s=a*t*t,c=a*n*n;o.rotateZ(-Math.atan2(c-s,i/7)),o.translate((s+c)/2,(t+n)*i/2,0),Z(o,(e,t,n,r,i,a,o)=>o.copy(X(9071176)).lerp(X(13148272),.5+.5*Math.sin(t*9))),r.push(o)}o.set(a,i,0);for(let e=0;e<8;e++){let i=e/8*Math.PI*2+n()*.3,a=2.1+n()*.6,s=[],c=[],l=new I;for(let e=0;e<=6;e++){let n=e/6,r=a*n,u=.35*n-1.3*n*n,d=.42*Math.sin(Math.PI*Math.min(1,n*1.15+.05)),f=Math.cos(i)*r,p=Math.sin(i)*r,m=-Math.sin(i)*d,h=Math.cos(i)*d;s.push(o.x+f-m,o.y+u-d*.25,o.z+p-h,o.x+f+m,o.y+u-d*.25,o.z+p+h,o.x+f,o.y+u+.05,o.z+p),l.copy(t[0]).lerp(t[2],n*.9);for(let e=0;e<3;e++)c.push(l.r,l.g,l.b)}let u=[];for(let e=0;e<6;e++){let t=e*3,n=(e+1)*3;u.push(t,n,t+2,n,n+2,t+2,t+2,n+2,t+1,n+2,n+1,t+1)}let d=new F;d.setAttribute(`position`,new k(s,3)),d.setAttribute(`color`,new k(c,3)),d.setIndex(u),d.computeVertexNormals();let f=d.getAttribute(`normal`);for(let e=0;e<f.count;e++)f.setXYZ(e,f.getX(e)*.4,Math.abs(f.getY(e))+.6,f.getZ(e)*.4);r.push(d)}for(let e=0;e<3;e++){let t=new fe(.13,6,5).translate(o.x+Math.cos(e*2.1)*.18,o.y-.15,o.z+Math.sin(e*2.1)*.18);Z(t,(e,t,n,r,i,a,o)=>o.copy(X(5913122))),r.push(t)}return La(r)}function Ha(e,t){let n=J(e),r=[],i=2.4+n()*1.2,a=new Be(.32,i,4,12).translate(0,i/2+.3,0);r.push(a);let o=1+Math.floor(n()*2);for(let e=0;e<o;e++){let t=e===0?1:-1,a=i*(.35+n()*.25),o=new Be(.2,.55,3,10).rotateZ(Math.PI/2).translate(t*.55,a,0),s=new Be(.2,.7+n()*.6,3,10).translate(t*.88,a+.55,0);r.push(o,s)}return Z(La(r),(e,n,r,a,o,s,c)=>{let l=.5+.5*Math.cos(Math.atan2(r,e-(Math.abs(e)>.5?Math.sign(e)*.88:0))*12);c.copy(t[0]).lerp(t[1],.35+.45*l).lerp(t[2],Math.max(0,o)*.5),n>i+.4&&o>.6&&c.copy(X(16743080))})}function Ua(e,t,n,r){let i=J(e),a=[za(2.6,.3,.12,.2*(i()-.5),e,t,n)],o=(e,s,c,l,u,d,f,p)=>{let m=new R(f*.45,f,d,6,1,!0).translate(0,d/2,0);m.rotateZ(u),m.rotateY(l),m.translate(e,s,c);let h=new O(0,d,0).applyAxisAngle(new O(0,0,1),u).applyAxisAngle(new O(0,1,0),l);if(Z(m,(e,i,a,o,c,l,u)=>{u.copy(X(t)).lerp(X(n),.4),r&&i>s+d*.7&&u.copy(X(16738848)).multiplyScalar(1.5)}),a.push(m),p>0)for(let t=0;t<2;t++)o(e+h.x,s+h.y,c+h.z,l+(t?.9:-.9)+i()*.4,u*.8+.25,d*.62,f*.5,p-1)};for(let e=0;e<3;e++)o(0,1.6+e*.35,0,e*2.1+i(),.55+i()*.4,1.1,.12,1);return La(a)}function Wa(e,t,n,r=1){let i=J(e),a=(2.2+i()*1.4)*r,o=[];for(let e=0;e<=8;e++){let t=e/8;o.push(new D((.28+.22*(1-t)*(1-t)+.05*Math.sin(t*9))*r,t*a))}let s=new Ge(o,10);s.rotateZ((i()-.5)*.15),Z(s,(e,t,n,r,i,o,s)=>s.copy(X(14209216)).lerp(X(9079456),1-t/a));let c=(1.3+i()*.7)*r,l=new fe(c,24,10,0,Math.PI*2,0,Math.PI*.55).scale(1,.55,1).translate(0,a-.05,0),u=[];Z(l,(e,r,i,a,o,s,c)=>{c.copy(t).multiplyScalar(.55+.45*Math.max(0,o));let l=Math.atan2(i,e);Math.sin(l*5+r*3)*Math.sin(l*3-r*7)>.55&&c.lerp(n,.5)});let d=new Oe(c*.95,16).rotateX(Math.PI/2).translate(0,a-.06,0);for(let e=0;e<9;e++){let t=e/9*Math.PI*2+i(),n=c*(.35+i()*.5),o=a-.05+Math.sqrt(Math.max(0,1-(n/c)**2))*c*.55;u.push(new fe(.09*r+i()*.06*r,6,4).scale(1,.5,1).translate(Math.cos(t)*n,o,Math.sin(t)*n))}u.push(d);let f=La(u);return Z(f,(e,t,r,i,a,o,s)=>s.copy(n)),[La([s,l]),f]}function Ga(e,t,n){let r=J(e),i=[za(5.2,.75,.42,.3*(r()-.5),e,3811876,8018502)];for(let e=0;e<5;e++){let t=e/5*Math.PI*2+r()*.4,n=new N(.16,1.5,1.3),a=n.getAttribute(`position`);for(let e=0;e<a.count;e++){let t=a.getY(e),n=a.getZ(e);a.setZ(e,n>0?n*(1-(t+.75)/1.5):n*.2)}n.translate(0,.75,.75).rotateY(t),Z(n,(e,t,n,r,i,a,o)=>o.copy(X(3811876)).lerp(X(6965818),t/1.5)),i.push(n)}let a=[];for(let e=0;e<3;e++)a.push({x:(r()-.5)*1.2,y:5.2+e*.7,z:(r()-.5)*1.2,r:2.5-e*.5});for(let e=0;e<6;e++){let t=e/6*Math.PI*2+r();a.push({x:Math.cos(t)*2.4,y:4.8+r()*.6,z:Math.sin(t)*2.4,r:1.5+r()*.5})}let o=Ra(a,n,t,e+3,0,.62),s=[];for(let e=0;e<10;e++){let e=r()*Math.PI*2,n=1.5+r()*2,i=1.2+r()*1.8,a=new R(.035,.05,i,4,1,!0).translate(Math.cos(e)*n,4.6-i/2,Math.sin(e)*n);Z(a,(e,n,r,i,a,o,s)=>s.copy(t[0]).lerp(t[1],(n-3)/2)),s.push(a)}return[La(i),La([o,...s])]}function Ka(e,t,n,r){let i=J(e),a=[],o=5+Math.floor(i()*5);for(let e=0;e<o;e++){let o=i()*Math.PI*2,s=e===0?0:.5+i()*.9,c=1.2+i()*2.4*(e===0?1.3:1),l=.32+i()*.12,u=new R(l,l*1.05,c,6,Math.max(2,Math.ceil(c/.25))).rotateY(i()).translate(Math.cos(o)*s,c/2,Math.sin(o)*s),d=c,f=u.toNonIndexed();f.computeVertexNormals(),Z(f,(i,a,o,s,c,l,u)=>{u.copy(X(t)).lerp(X(n),c>.9?.85:.25+.2*Math.sin(a*4+e)),a<.05&&u.copy(X(r)).multiplyScalar(.9),c>.9&&a>d-.01&&u.multiplyScalar(1.1)}),a.push(f)}return La(a)}function qa(e,t,n=1){let r=J(e),i=[],a=4+Math.floor(r()*3);for(let e=0;e<a;e++){let t=(.6+r()*.9*(e===0?1.6:1))*n,a=new Fe(.22*n,0).scale(e===0?1.3:1,t*2.2/n,e===0?1.3:1);a.translate(0,t*.35,0),a.rotateZ((r()-.5)*(e===0?.2:1.1)),a.rotateX((r()-.5)*(e===0?.2:1.1)),a.rotateY(r()*6.28),a.translate((r()-.5)*.5*n,0,(r()-.5)*.5*n),i.push(Ia(a))}let o=zt(i);o.computeVertexNormals();let s=t.clone().multiplyScalar(.35),c=t.clone().lerp(new I(1,1,1),.45);return Z(o,(e,r,i,a,o,l,u)=>{u.copy(s).lerp(t,Math.min(1,r/n*1.2)).lerp(c,Math.max(0,r/n-.8)*.8),u.multiplyScalar(.8+.4*Math.abs(a+l))})}function Ja(e,t,n){let r=J(e),i=[],a=0,o=1+r()*.4;for(;a<n;){let e=.7+r()*.6,t=new R(o*(.8+r()*.15),o,e,7,1).rotateY(r()*3).translate((r()-.5)*.15,a+e/2,(r()-.5)*.15),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++)n.setXYZ(e,n.getX(e)*(.9+r()*.2),n.getY(e),n.getZ(e)*(.9+r()*.2));i.push(t.toNonIndexed()),a+=e*.95,o*=.82+r()*.1}let s=La(i);return s.computeVertexNormals(),Z(s,(e,n,r,i,a,o,s)=>{let c=Math.floor(n*2.2+Math.sin(n*3)*.6)%3;s.copy(X(t[0])).lerp(X(t[1]),c===0?.3:c===1?.75:1),c===2&&s.lerp(X(t[2]),.4),a>.7&&s.copy(X(t[3]))})}function Ya(e,t,n,r,i){let a=It(new ne(1,1).deleteAttribute(`normal`).deleteAttribute(`uv`)),o=a.getAttribute(`position`),s=J(e);for(let e=0;e<o.count;e++){let t=.78+s()*.4;o.setXYZ(e,o.getX(e)*t,Math.max(-.25,o.getY(e)*t*.75),o.getZ(e)*t)}let c=a.toNonIndexed();c.computeVertexNormals();let l=c.getAttribute(`normal`),u=new Float32Array(l.count*3),d=new I;for(let e=0;e<l.count;e+=3){let a=l.getY(e);d.copy(X(t)).lerp(X(n),s()),a>.55&&d.copy(X(r)).lerp(X(i),s()*.7);for(let t=0;t<3;t++)u[(e+t)*3]=d.r,u[(e+t)*3+1]=d.g,u[(e+t)*3+2]=d.b}return c.setAttribute(`color`,new A(u,3)),c}var Xa={haste:8388564,heal:8257434,power:16757575,shield:12577023};function Za(e,t,n,r){let i=(r,i)=>+(r>=0&&i>=0&&r<t&&i<t&&e[i*t+r]===n),a=t,o=-1,s=t,c=-1;for(let r=0;r<t;r++)for(let i=0;i<t;i++)e[r*t+i]===n&&(a=Math.min(a,i),o=Math.max(o,i),s=Math.min(s,r),c=Math.max(c,r));if(o<0)return null;let l=[],u=(e,t,n)=>{let r=e+.5,i=t+.5;return n===0?[r+.5,i]:n===1?[r+1,i+.5]:n===2?[r+.5,i+1]:[r,i+.5]},d=[[],[3,2],[2,1],[3,1],[0,1],[3,0,2,1],[0,2],[3,0],[3,0],[0,2],[0,1,2,3],[0,1],[3,1],[2,1],[3,2],[]];for(let e=s-1;e<=c;e++)for(let t=a-1;t<=o;t++){let n=d[i(t,e)*8+i(t+1,e)*4+i(t+1,e+1)*2+i(t,e+1)];for(let r=0;r<n.length;r+=2){let i=u(t,e,n[r]),a=u(t,e,n[r+1]);l.push(i[0],i[1],a[0],a[1])}}if(!l.length)return null;let f=[],p=.09;for(let e=0;e<l.length;e+=4){let t=l[e],n=l[e+1],i=l[e+2],a=l[e+3],o=Math.hypot(i-t,a-n)||1,s=-(a-n)/o*p,c=(i-t)/o*p,u=(i-t)/o*p,d=(a-n)/o*p,m=r(t,n)+.06,h=r(i,a)+.06,g=[t-u+s,m,n-d+c,t-u-s,m,n-d-c,i+u-s,h,a+d-c,i+u+s,h,a+d+c];f.push(...g.slice(0,3),...g.slice(3,6),...g.slice(6,9),...g.slice(0,3),...g.slice(6,9),...g.slice(9,12))}let m=new F;return m.setAttribute(`position`,new k(f,3)),m}function Qa(e,t){let n=e.bush.colors.map(X),r=[],i=(e,t,n,r,i,a)=>{let o=[],s=[];for(let c=0;c<=4;c++){let l=c/4,u=t*(1-l),d=r*l*l,f=Math.cos(n)*d,p=Math.sin(n)*d,m=-Math.sin(n)*u,h=Math.cos(n)*u;o.push(f-m,e*l,p-h,f+m,e*l,p+h);let g=i.clone().lerp(a,l);s.push(g.r,g.g,g.b,g.r,g.g,g.b)}let c=[];for(let e=0;e<4;e++)c.push(e*2,e*2+1,e*2+2,e*2+1,e*2+3,e*2+2);let l=new F;l.setAttribute(`position`,new k(o,3)),l.setAttribute(`color`,new k(s,3)),l.setIndex(c),l.computeVertexNormals();let u=l.getAttribute(`normal`);for(let e=0;e<u.count;e++)u.setXYZ(e,u.getX(e)*.3,1,u.getZ(e)*.3);return l};for(let a=0;a<2;a++){let o=J(500+a*7);switch(e.bush.kind){case`leafy`:case`snowshrub`:case`ember`:{let i=[{x:0,y:.75,z:0,r:.72}];for(let e=0;e<4;e++){let t=e/4*Math.PI*2+o();i.push({x:Math.cos(t)*.48,y:.55+o()*.2,z:Math.sin(t)*.48,r:.5+o()*.12})}let s=Ra(i,t,e.bush.kind===`snowshrub`?[n[0],n[1],n[3],n[3]]:[n[0],n[1],n[2],n[3]],21+a*3,e.bush.kind===`leafy`?.12:0,.9),c=null;if(e.bush.kind===`ember`){let e=[];for(let t=0;t<7;t++){let n=i[t%i.length],r=o()*Math.PI*2,a=.3+o()*.7;e.push(new ne(.06,0).translate(n.x+Math.cos(r)*n.r*Math.sqrt(1-a*a),n.y+a*n.r*.9,n.z+Math.sin(r)*n.r*Math.sqrt(1-a*a)))}c=Z(La(e),(e,t,r,i,a,o,s)=>s.copy(n[3]).multiplyScalar(1.4))}r.push([s,c]);break}case`reed`:{let e=[],t=[];for(let r=0;r<16;r++){let a=o()*Math.PI*2,s=o()*.45,c=i(1.2+o()*.6,.07,o()*6.28,.25+o()*.3,n[0],n[2]);if(c.translate(Math.cos(a)*s,0,Math.sin(a)*s),e.push(c),r%4==0){let e=new Be(.05,.22,2,6).translate(Math.cos(a)*s,1.45+o()*.3,Math.sin(a)*s);t.push(Z(e,(e,t,n,r,i,a,o)=>o.copy(X(6961692))))}}r.push([La([...e,...t]),null]);break}case`fern`:case`crystal`:{let t=[],s=[];for(let r=0;r<9;r++){let a=r/9*Math.PI*2+o()*.4;if(t.push(i(1+o()*.4,.2,a,.75+o()*.3,n[0],n[2])),e.bush.kind===`fern`||r%3==0){let e=.8;s.push(new ne(.06,0).translate(Math.cos(a)*e*1*1,1,Math.sin(a)*e*1*1))}}e.bush.kind===`crystal`&&t.push(qa(600+a,n[2],.7));let c=s.length?Z(La(s),(e,t,r,i,a,o,s)=>s.copy(n[3]).multiplyScalar(1.3)):null;r.push([La(t),c]);break}}}return r}function $a(e,t){let n=new M({vertexColors:!0,side:2,transparent:!0,forceSinglePass:!0});return n.defines={TOON_LO:`0.4`,TOON_HI:`0.6`,TOON_RIM:bi(t,.3)},n.onBeforeCompile=t=>{t.uniforms.uTime=e,Object.assign(t.uniforms,di()),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\nuniform float uTime;\n${fi}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_INSTANCING
        vec2 ip = instanceMatrix[3].xz;
#else
        vec2 ip = vec2(0.0);
#endif
        float sw = smoothstep(0.2, 1.4, transformed.y);
        transformed.x += sin(uTime * 1.6 + ip.x * 0.5 + ip.y * 0.3) * 0.05 * sw;
        transformed.z += sin(uTime * 1.3 + ip.y * 0.6) * 0.04 * sw;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>\n${pi}`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\n${mi}`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>\n${hi}`)},n.customProgramCacheKey=()=>`va-bush`,n}var eo=class{data;style;high;group=new tt;bushes=new Map;pads=[];shrines=new Map;walls=new Map;wallBorn=new Map;wallDying=[];time={value:0};inside=new Set;wallGeo;wallMat;constructor(e,t,n,r){this.data=e,this.style=t,this.high=r,this.wallGeo=Ja(77,[t.rock[0],t.rock[1],t.rock[2],t.floor[1]],2.4),this.wallMat=gi(new M({vertexColors:!0,flatShading:!0}),`wallrock`),this.buildBushes(),this.buildPits(n),this.buildPads(n),this.buildShrines(n)}glowMat(e,t,n=!0){return new j({color:new I(e).multiplyScalar(n?1.6:1.25),transparent:!0,opacity:t,depthWrite:!1,blending:n?2:1,toneMapped:!1})}runeRing(e,t,n,r,i){let a=[];for(let r=0;r<n;r++){let i=r/n*Math.PI*2,o=(r+.62)/n*Math.PI*2;for(let n=0;n<4;n++){let s=i+(o-i)*n/4,c=i+(o-i)*(n+1)/4,l=r%3==0?e-(t-e)*.6:e;a.push(Math.cos(s)*l,0,Math.sin(s)*l,Math.cos(s)*t,0,Math.sin(s)*t,Math.cos(c)*t,0,Math.sin(c)*t),a.push(Math.cos(s)*l,0,Math.sin(s)*l,Math.cos(c)*t,0,Math.sin(c)*t,Math.cos(c)*l,0,Math.sin(c)*l)}}let o=new F;o.setAttribute(`position`,new k(a,3));let s=this.glowMat(r,i,!1),c=new P(o,s);return c.renderOrder=2,c}buildBushes(){let e=this.data,t=e.size,n=Qa(this.style,this.high?2:1),r=new Map,i=this.high?.85:1.1;for(let n=0;n<t;n+=i)for(let a=0;a<t;a+=i){let t=a+(ja(Math.floor(a*7),Math.floor(n*3))-.5)*i*.7,o=n+(ja(Math.floor(n*5),Math.floor(a*11))-.5)*i*.7,s=e.map.bushAt(t,o);if(!s)continue;let c=e.sample(e.bush,t,o),l=(.75+.45*c)*(.85+ja(Math.floor(t*13),Math.floor(o*17))*.35),u=new L().compose(new O(t,e.heightAt(t,o)-.04,o),new C().setFromAxisAngle(new O(0,1,0),ja(Math.floor(t*3),Math.floor(o*9))*6.28),new O(l,l*(.9+c*.25),l)),d=r.get(s);d||r.set(s,d=[]),d.push(u)}let a=new j({vertexColors:!0,toneMapped:!1});for(let[i,o]of r){let r=$a(this.time,this.style.light.rim),s=n.map(()=>[]);o.forEach((e,t)=>s[t%n.length].push(e)),s.forEach((e,t)=>{if(!e.length)return;let[i,o]=n[t],s=new E(i,r,e.length);if(e.forEach((e,t)=>s.setMatrixAt(t,e)),s.computeBoundingSphere(),s.castShadow=this.high,this.group.add(s),o){let t=new E(o,a,e.length);e.forEach((e,n)=>t.setMatrixAt(n,e)),t.computeBoundingSphere(),this.group.add(t)}});let c=Za(e.map.bush,t,i,(t,n)=>e.heightAt(t,n)),l=null;if(c){l=new j({color:new I(14221264),transparent:!0,opacity:.22,depthWrite:!1,side:2,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2});let e=new P(c,l);e.renderOrder=2,this.group.add(e)}this.bushes.set(i,{id:i,material:r,translucent:!1,outline:l})}}buildPits(e){let t=this.style.accent,n=[];for(let r of this.data.def.bosses){if(n.some(e=>Math.hypot(e.x-r.x,e.z-r.z)<2))continue;n.push(r);let i=this.data.heightAt(r.x,r.z)+.05,a=this.runeRing(5.4,6,24,t,.5);a.position.set(r.x,Math.max(i,this.data.level+.02),r.z),this.group.add(a),e.add(r.x,r.z,8,t,.55,1.5,.8)}let r=Ya(9,this.style.rock[0],this.style.rock[1],this.style.rock[1],this.style.rock[2]),i=gi(new M({vertexColors:!0,flatShading:!0}),`campstone`),a=[];for(let t of this.data.def.camps){let n=J(Math.floor(t.x*31+t.z*7));for(let e=0;e<2;e++){let e=n()*Math.PI*2;for(let r=0;r<8;r++){let i=3.4+n()*1.2,o=t.x+Math.cos(e+r)*i,s=t.z+Math.sin(e+r)*i;if(!(this.data.sample(this.data.wallDist,o,s)<.2)){a.push(new L().compose(new O(o,this.data.heightAt(o,s)-.1,s),new C().setFromEuler(new Le(0,n()*6,.1)),new O(.45,1.1,.45)));break}}}e.add(t.x,t.z,5,this.style.accent,.3,1.2)}if(a.length){let e=new E(r,i,a.length);a.forEach((t,n)=>e.setMatrixAt(n,t)),e.computeBoundingSphere(),e.castShadow=this.high,this.group.add(e)}}buildPads(e){let t=10479871,n=this.style.stone,r=new Ge([[0,0],[1.25,0],[1.3,.12],[1.15,.18],[0,.16]].map(([e,t])=>new D(e,t)),24);Z(r,(e,t,r,i,a,o,s)=>s.copy(X(n[0])).lerp(X(n[1]),.5+t).lerp(X(16777215),a>.9?.08:0));let i=gi(new M({vertexColors:!0}),`pad`),a=[];for(let e=0;e<3;e++){let t=-.55+e*.42;a.push(-.45,0,t,0,0,t+.32,0,0,t+.14,-.45,0,t,0,0,t+.14,-.45,0,t-.18),a.push(.45,0,t,0,0,t+.14,0,0,t+.32,.45,0,t,.45,0,t-.18,0,0,t+.14)}let o=new F;o.setAttribute(`position`,new k(a,3));for(let n of this.data.def.jumpPads){let a=Math.atan2(n.to.x-n.from.x,n.to.z-n.from.z),s=this.data.heightAt(n.from.x,n.from.z),c=new P(r,i);c.position.set(n.from.x,s-.04,n.from.z),c.receiveShadow=!0;let l=this.runeRing(.95,1.18,12,t,.7);l.position.set(n.from.x,s+.17,n.from.z);let u=new P(o,this.glowMat(t,.85));u.position.set(n.from.x,s+.18,n.from.z),u.rotation.y=a;let d=new P(new R(.9,1.1,2.6,20,1,!0).translate(0,1.3,0),this.beamMat(t,.28));d.position.set(n.from.x,s,n.from.z);let f=this.runeRing(.6,.82,10,t,.45);f.position.set(n.to.x,this.data.heightAt(n.to.x,n.to.z)+.05,n.to.z),this.group.add(c,l,u,d,f),this.pads.push({halo:l,arrows:u,column:d}),e.add(n.from.x,n.from.z,3.5,t,.9,.8,3)}}beamMat(e,t){return new S({uniforms:{uColor:{value:new I(e).multiplyScalar(1.6)},uOpacity:{value:t},uTime:this.time},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main() { vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; uniform float uTime; varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main() { float edge = pow(max(0.0, 1.0 - abs(dot(vN, vV))), 1.5); float up = pow(max(0.0, 1.0 - vUv.y), 1.6); float stripe = 0.75 + 0.25 * sin(vUv.y * 18.0 - uTime * 4.0); gl_FragColor = vec4(uColor * stripe, uOpacity * up * (0.35 + 0.65 * (1.0 - edge))); }`,transparent:!0,depthWrite:!1,blending:2,side:2,forceSinglePass:!0,toneMapped:!1})}buildShrines(e){let t=this.style.stone,n=new Ge([[0,0],[.85,0],[.9,.18],[.55,.3],[.42,.85],[.62,1],[.6,1.1],[0,1.1]].map(([e,t])=>new D(e,t)),12);Z(n,(e,n,r,i,a,o,s)=>s.copy(X(t[0])).lerp(X(t[1]),.4+n*.4).lerp(X(15251552),n>.95?.6:0).multiplyScalar(a<-.5?.6:1));let r=gi(new M({vertexColors:!0}),`shrine`);for(let t of this.data.def.shrines){let i=Xa[t.kind],a=this.data.heightAt(t.x,t.z),o=new P(n,r);o.position.set(t.x,a-.05,t.z),o.castShadow=!0,o.customDepthMaterial=si;let s=new P(new Fe(.42,0).scale(1,1.4,1),new j({color:new I(i).multiplyScalar(2.2),toneMapped:!1}));s.position.set(t.x,a+1.75,t.z);let c=this.runeRing(.9,1.3,10,i,.5);c.position.set(t.x,a+.06,t.z);let l=new P(new R(.35,.55,4.5,16,1,!0).translate(0,2.25,0),this.beamMat(i,.32));l.position.set(t.x,a+1.1,t.z),this.group.add(o,s,c,l),this.shrines.set(t.id,{gem:s,halo:c,beam:l,y:a+1.75}),e.add(t.x,t.z,4.5,i,1,1.8,2)}}syncWalls(e,t){let n=new Set;for(let r of e){if(n.add(r.id),this.walls.has(r.id))continue;this.wallBorn.set(r.id,t);let e=new tt,i=[],a=r.points,o=r.radius/5*1.5;for(let e=0;e<a.length;e++){let t=a[e],n=a[e+1],s=n?Math.max(1,Math.ceil(Math.hypot(n.x-t.x,n.z-t.z)/(r.radius*1.1))):1;for(let r=0;r<s;r++){let a=r/s,c=n?t.x+(n.x-t.x)*a:t.x,l=n?t.z+(n.z-t.z)*a:t.z,u=o*(.85+ja(e,r)*.3);i.push(new L().compose(new O(c,this.data.heightAt(c,l)-.1,l),new C().setFromAxisAngle(new O(0,1,0),ja(r,e)*6),new O(u,u,u)))}}let s=a[a.length-1];a.length>1&&i.push(new L().compose(new O(s.x,this.data.heightAt(s.x,s.z)-.1,s.z),new C,new O(o,o,o)));let c=new E(this.wallGeo,this.wallMat,i.length);i.forEach((e,t)=>c.setMatrixAt(t,e)),c.computeBoundingSphere(),c.castShadow=this.high,e.add(c),ci(e),this.group.add(e),this.walls.set(r.id,e)}for(let[e,r]of this.walls)n.has(e)||(this.walls.delete(e),this.wallBorn.delete(e),this.wallDying.push({g:r,at:t}))}animateWalls(e){for(let[t,n]of this.walls){let r=Math.min(1,(e-(this.wallBorn.get(t)??e))/.28),i=r>=1?1:1+2.70158*(r-1)**3+1.70158*(r-1)**2;n.position.y=-2.6*(1-i),n.scale.set(1,Math.max(.05,i),1)}for(let t=this.wallDying.length-1;t>=0;t--){let n=this.wallDying[t],r=(e-n.at)/.45;r>=1?(this.group.remove(n.g),this.wallDying.splice(t,1)):(n.g.position.y=-2.2*r*r,n.g.scale.set(1-r*.25,1-r*.6,1-r*.25))}}update(e,t,n,r=-1){this.time.value=e;for(let t of this.pads){let n=.5+.5*Math.sin(e*4);t.halo.rotation.y=e*.6,t.arrows.material.opacity=.45+.5*Math.max(0,Math.sin(e*5)),t.halo.scale.setScalar(.95+n*.08)}if(!t)return;for(let n of t.shrines){let t=this.shrines.get(n.id);t&&(t.gem.visible=n.active,t.beam.visible=n.active,t.gem.rotation.y=e*1.6,t.gem.position.y=t.y+Math.sin(e*2.2)*.15,t.halo.material.opacity=n.active?.45+.2*Math.sin(e*3):.1,t.halo.rotation.y=-e*.4)}let i=this.inside;i.clear();let a=0;for(let e of t.units){if(e.kind!==`hero`||e.dead||e.team!==n)continue;let t=this.data.map.bushAt(e.x,e.z);t&&i.add(t),t&&e.id===r&&(a=t)}for(let t of this.bushes.values()){if(t.outline){let n=t.id===a?.72+.2*Math.sin(e*4):i.has(t.id)?.5:.22;t.outline.opacity=n,t.outline.color.setHex(t.id===a?10485680:14221264)}let n=i.has(t.id);n!==t.translucent&&(t.translucent=n,t.material.opacity=n?.38:1,t.material.depthWrite=!n)}(t.walls.length||this.walls.size)&&this.syncWalls(t.walls,e),(this.walls.size||this.wallDying.length)&&this.animateWalls(e)}},to={value:Array.from({length:16},()=>new Ke)},no={value:0},ro=`
uniform vec4 uReveal[16];
uniform int uRevealN;
// Interleaved gradient noise: a stable per-pixel dither threshold.
float vaDither(vec2 p) {
  return fract(52.9829189 * fract(dot(floor(p), vec2(0.06711056, 0.00583715))));
}`,io=`
  {
    float vaReveal = 0.0;
    for (int i = 0; i < 16; i++) {
      if (i >= uRevealN) break;
      vec4 rv = uReveal[i];
      vec3 cu = rv.xyz - cameraPosition;
      float L = length(cu);
      vec3 dir = cu / L;
      vec3 cw = vLmPos - cameraPosition;
      float t = dot(cw, dir);
      // Only what lies between the camera and the unit (and a little around its body).
      if (t > L + 0.6) continue;
      float d = length(cw - dir * t);
      // A cone that narrows toward the camera: canopies right above the unit open widest.
      float rad = rv.w * mix(0.55, 1.0, clamp(t / L, 0.0, 1.0));
      vaReveal = max(vaReveal, smoothstep(rad, rad * 0.45, d) * smoothstep(L + 0.6, L - 0.4, t));
    }
    if (vaReveal > 0.0 && vaReveal * 0.9 > vaDither(gl_FragCoord.xy)) discard;
  }`;function ao(e){let t=e.onBeforeCompile.bind(e);e.onBeforeCompile=(e,n)=>{t(e,n),e.uniforms.uReveal=to,e.uniforms.uRevealN=no,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${ro}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>\n${io}`)};let n=e.customProgramCacheKey.bind(e);return e.customProgramCacheKey=()=>`${n()}|reveal`,e}var oo=class{pool=[];update(e,t,n,r,i){let a=this.pool,o=0;for(let s of e){let e=s.unit;if(e.dead||e.kind===`tower`||e.kind===`core`)continue;let c=s.pos.x-n,l=s.pos.z-r;if(Math.abs(c)>40||Math.abs(l)>32)continue;let u=e.id===t;if(!u&&!i(s.pos.x,s.pos.z))continue;let d=a[o];d||a.push(d={x:0,y:0,z:0,r:0,score:0});let f=Math.max(1.2,s.height);d.x=s.pos.x,d.y=s.pos.y+f*.55,d.z=s.pos.z,d.r=u?3.1:e.kind===`hero`?2.6:e.kind===`monster`?Math.max(2.2,e.radius*2.4):1.9,d.score=(u?-1e6:e.kind===`hero`?-1e3:e.kind===`monster`?-500:0)+c*c+l*l,o++}let s=to.value,c=Math.min(o,16);for(let e=0;e<c;e++){let t=e;for(let n=e+1;n<o;n++)a[n].score<a[t].score&&(t=n);let n=a[e];a[e]=a[t],a[t]=n;let r=a[e];s[e].set(r.x,r.y,r.z,r.r)}no.value=c}},so=new I(1,1,1);function co(e,t,n,r){let i=new M({vertexColors:!0,side:n});return i.defines={TOON_LO:`0.4`,TOON_HI:`0.6`,TOON_RIM:bi(t,.22)},i.onBeforeCompile=t=>{t.uniforms.uTime=e,Object.assign(t.uniforms,di()),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\nuniform float uTime;\nvarying vec3 vWPos;\n${fi}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_INSTANCING
        vec2 ip = instanceMatrix[3].xz;
#else
        vec2 ip = vec2(0.0);
#endif
        float sway = smoothstep(0.6, 4.5, transformed.y);
        transformed.x += sin(uTime * 1.1 + ip.x * 0.37 + ip.y * 0.21) * 0.06 * sway;
        transformed.z += sin(uTime * 0.9 + ip.y * 0.41) * 0.05 * sway;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
#ifdef USE_INSTANCING
        vWPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif
${pi}`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec3 vWPos;\n${mi}`).replace(`#include <color_fragment>`,`#include <color_fragment>
        vec3 p = vWPos * 1.35;
        float bl = sin(p.x * 1.7 + sin(p.z * 1.3)) * sin(p.z * 1.9 + sin(p.y * 2.1)) * sin(p.y * 1.5 + sin(p.x * 1.1));
        diffuseColor.rgb *= mix(0.86, 1.16, smoothstep(-0.15, 0.15, bl));`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>\n${hi}`)},i.customProgramCacheKey=()=>`va-canopy-${r}`,i}var lo=class{group=new tt;time={value:0};crowns=[];lights=[];reflectSkip=[];glades=[];constructor(e,t,n,r=n?2:1){let i=t.light.rim,a=ao(co(this.time,i,0,`front`)),o=ao(co(this.time,i,2,`double`)),s=ao(gi(new M({vertexColors:!0}),`bark`)),c=ao(gi(new M({vertexColors:!0,flatShading:!0}),`rock`)),l=new j({vertexColors:!0});l.color.setScalar(2.2);let u=new j,d=t.canopy.map(e=>e.map(X)),f=t.rock,p=t.key===`volcanic`,m=new Map,h=e=>{let n=[];for(let i=0;i<3;i++){let l=d[i%d.length],u=J(100+i*13+e.length*7);switch(e){case`round`:{let e=[{x:0,y:3.4,z:0,r:1.55}],t=4+i;for(let n=0;n<t;n++){let r=n/t*Math.PI*2+u();e.push({x:Math.cos(r)*1.25,y:2.7+u()*.6,z:Math.sin(r)*1.25,r:1+u()*.35})}e.push({x:(u()-.5)*.6,y:4.3,z:(u()-.5)*.6,r:1.05}),n.push({parts:[{geo:Ra(e,r,l,11+i*5),mat:a,shadow:!1},{geo:za(2.6,.32,.18,.15*(i-1),i),mat:s,shadow:!0}],proxy:Ra(e,0,l,11+i*5),glow:null,y:3.4,r:2.4,foot:2.4,light:0});break}case`pine`:case`snowpine`:{let t=Ba(7+i,l,e===`snowpine`);n.push({parts:[{geo:t,mat:a,shadow:!1},{geo:za(1.6,.22,.14,0,3),mat:s,shadow:!0}],proxy:t,glow:null,y:3.2,r:1.9,foot:1.9,light:0});break}case`palm`:n.push({parts:[{geo:Va(31+i,l),mat:o,shadow:!0}],proxy:null,glow:null,y:4.4,r:2.2,foot:1.5,light:0});break;case`cactus`:n.push({parts:[{geo:Ha(41+i,[X(3107392),X(5677138),X(11063408)]),mat:s,shadow:!0}],proxy:null,glow:null,y:0,r:0,foot:.9,light:0});break;case`deadwood`:n.push({parts:[{geo:Ua(51+i,p?1708564:t.key===`abyss`?2761272:4864560,p?3811878:t.key===`abyss`?5917296:9072728,p),mat:s,shadow:!0}],proxy:null,glow:null,y:0,r:0,foot:1.2,light:0});break;case`mushroom`:{let e=[6961840,2783920,11553418],t=[10152191,13146879,8060880],[r,a]=Wa(61+i,X(e[i]),X(t[i]),1);n.push({parts:[{geo:r,mat:s,shadow:!0}],proxy:null,glow:a,y:0,r:0,foot:1.6,light:t[i]});break}case`giant`:{let[e,t]=Ga(71+i,l,r);n.push({parts:[{geo:t,mat:a,shadow:!1},{geo:e,mat:s,shadow:!0}],proxy:Ra([{x:0,y:5.4,z:0,r:3.2}],0,l,1,0,.6),glow:null,y:5.4,r:4,foot:4,light:0});break}case`basalt`:n.push({parts:[{geo:Ka(81+i,p?1841698:f[0],p?4999256:f[2],p?16734740:f[1]),mat:c,shadow:!0}],proxy:null,glow:null,y:0,r:0,foot:1.6,light:0});break;case`crystal`:{let e=X(t.crystals[i%t.crystals.length]);n.push({parts:[],proxy:null,glow:qa(91+i,e,1.8),y:0,r:0,foot:1.2,light:t.crystals[i%t.crystals.length]});break}case`spire`:n.push({parts:[{geo:Ja(101+i,[f[0],f[1],f[2],t.floor[1]],3+i*1.2),mat:c,shadow:!0}],proxy:null,glow:null,y:0,r:0,foot:1.6,light:0})}}return n};for(let[e,n]of t.trees)n>0&&m.set(e,h(e));let g=new Map,_=new Map,v=new L,y=new C,b=new O(0,1,0),x=new O,S=new O,w=J(1234),T=new Map,ee=(e,t)=>Math.floor(e/4)*1e3+Math.floor(t/4),te=(e,t,n)=>{for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){let a=T.get(ee(e+r*4,t+i*4));if(a){for(let r of a)if(Math.hypot(r.x-e,r.z-t)<(r.r+n)*.62)return!1}}return!0},D=(e,t,n)=>{let r=ee(e,t),i=T.get(r);i||T.set(r,i=[]),i.push({x:e,z:t,r:n})};for(let t of Ui(e.def,e.map))D(t.x,t.z,t.r/.62);let ne=(t,n)=>e.sample(e.wallDist,t,n),re=e.min+2,ie=e.min+e.world-2,ae=(t,n)=>Math.max(-t,-n,t-e.size,n-e.size,0),oe=(t,n,r)=>{for(let i=0;i<8;i++)if(e.sample(e.liquid,t+Math.cos(i*.785)*r,n+Math.sin(i*.785)*r)>.3)return!0;return!1},se=t.trees.reduce((e,[,t])=>e+t,0),ce=(e,n)=>{let r=w()*se;for(let[i,a]of t.trees)if(r-=a,r<=0)return i===`palm`&&!oe(e,n,6)?t.trees.find(([e])=>e!==`palm`)[0]:i;return t.trees[0][0]},le={round:2.4,pine:2.1,snowpine:2,palm:1.6,cactus:1.1,deadwood:1.3,mushroom:1.4,giant:4.2,basalt:.9,crystal:1.1,spire:2.4},k=t.treeDensity*(n?1:.7),ue=1.5;for(let t=e.min;t<e.min+e.world;t+=ue)for(let n=e.min;n<e.min+e.world;n+=ue){let r=n+(w()-.5)*ue,i=t+(w()-.5)*ue;if(r<re||i<re||r>ie||i>ie||ae(r,i)>30||w()>k)continue;let a=ne(r,i);if(e.townBandAt(r,i))continue;let o=ce(r,i);if(o===`giant`&&a<le.giant&&(o=m.has(`round`)?`round`:o),a<le[o])continue;let s=m.get(o);if(!s)continue;let c=s[Math.floor(w()*s.length)],l=Math.min(1,(a-le[o])/4),u;u=o===`round`||o===`pine`||o===`snowpine`?Math.min((a+.4)/2.4,(.62+.38*l)*(.82+w()*.4)+Math.min(.3,Math.max(0,a-6)*.05)):o===`giant`?.85+w()*.35:o===`spire`?.7+w()*.5+l*.3:o===`crystal`?.7+w()*.6:o===`cactus`?.5+w()*.3:o===`mushroom`?.65+w()*.35:.75+w()*.45;let d=c.foot*u;if(!te(r,i,d))continue;D(r,i,d);let f=e.heightAt(r,i);y.setFromAxisAngle(b,w()*Math.PI*2),x.set(u,u*(.9+w()*.25),u),v.compose(S.set(r,f-.1,i),y,x);let p=v.clone(),h=g.get(c);h||g.set(c,h=[]),h.push(p),_.set(p,new I(1,1,1).offsetHSL((w()-.5)*.05,(w()-.5)*.15,(w()-.5)*.1)),c.r>0&&(e.addCanopy(r,i,(o===`giant`?4:2.6)*u,o===`giant`?.55:.45),this.crowns.push({x:r,z:i,y:f+c.y*u,r:c.r*u})),c.light&&w()<(o===`crystal`?.8:.5)&&this.lights.push({x:r,z:i,r:4.5*u,hex:c.light,i:o===`crystal`?.9:.7,y:f+1.5})}let de=t.edgeBushes.map(X),fe=[Ra([{x:0,y:.45,z:0,r:.75},{x:.55,y:.35,z:.2,r:.55},{x:-.45,y:.35,z:-.25,r:.58}],r,de,3),Ra([{x:0,y:.5,z:0,r:.8},{x:-.5,y:.35,z:.35,r:.55}],r,de,5,t.key===`verdant`?.18:.08),Ra([{x:0,y:.4,z:0,r:.65},{x:.5,y:.3,z:-.3,r:.5},{x:-.3,y:.3,z:.45,r:.45}],r,[de[0],de[1].clone().offsetHSL(.02,0,.03),de[2],de[3]],9,.12)],pe=[0,1,2].map(e=>Ya(e+1,f[0],f[1],t.key===`snow`?15266047:t.key===`desert`?f[2]:t.key===`volcanic`?f[1]:6067266,t.key===`snow`?16777215:t.key===`volcanic`?f[2]:10142298)),me=fe.map(()=>[]),he=pe.map(()=>[]),ge=t.key===`desert`||t.key===`volcanic`||t.key===`abyss`?.32:.62,_e=t.wall===`forest`||t.wall===`jungle`||t.wall===`snow`,ve=n?.8:1.05;for(let r=e.min;r<e.min+e.world;r+=ve)for(let i=e.min;i<e.min+e.world;i+=ve){let a=i+(w()-.5)*ve,o=r+(w()-.5)*ve;if(a<re||o<re||a>ie||o>ie||ae(a,o)>26)continue;let s=ne(a,o);if(e.townBandAt(a,o)||s<.35||s>2.6||e.sample(e.liquid,a,o)>.2)continue;let c=w();if(c<.09&&s<1.6&&t.edgeRocks){let t=Math.min(.35+w()*.55,(s+.15)/1.5);if(!te(a,o,t*1.2))continue;D(a,o,t*1.2),y.setFromEuler(new Le((w()-.5)*.4,w()*Math.PI*2,(w()-.5)*.4)),v.compose(S.set(a,e.heightAt(a,o)-.05,o),y,x.set(t*(1+w()*.5),t,t)),he[Math.floor(w()*pe.length)].push(v.clone())}else if(c<(_e&&s<1.6?n?.92:.8:ge)){let t=Math.min(.75+w()*.65,(s-.05)/1.05);if(t<.45||!te(a,o,t*.95))continue;D(a,o,t*.95),y.setFromAxisAngle(b,w()*Math.PI*2),v.compose(S.set(a,e.heightAt(a,o)-.08,o),y,x.set(t,t*(.85+w()*.3),t));let n=v.clone();me[w()<.7?0:w()<.5?1:2].push(n),_.set(n,new I(1,1,1).offsetHSL((w()-.5)*.04,(w()-.5)*.1,(w()-.5)*.08)),e.addCanopy(a,o,1.1*t,.3)}}if(e.liquidKind===`water`||e.liquidKind===`lava`)for(let t=0;t<(n?2600:1200);t++){let t=e.min+w()*e.world,n=e.min+w()*e.world;if(ae(t,n)>24)continue;let r=e.sample(e.liquid,t,n);if(r<.05||r>.55||e.sample(e.lane,t,n)>.05||e.sample(e.pave,t,n)>.1||e.liquidDepth(t,n)>.1||w()>.5)continue;let i=.16+w()*.3;te(t,n,i)&&(D(t,n,i),y.setFromEuler(new Le(w()*.5,w()*6.28,w()*.5)),v.compose(S.set(t,e.heightAt(t,n)-.04,n),y,x.set(i*1.3,i,i)),he[Math.floor(w()*pe.length)].push(v.clone()))}for(let t=0;t<400&&this.glades.length<26;t++){let t=w()*e.size,n=w()*e.size;!e.map.isOpenGround(t,n)||e.sample(e.lane,t,n)>.2||e.sample(e.canopy,t,n)>.85||e.sample(e.wallWide,t,n)<.25||this.glades.some(e=>Math.hypot(e.x-t,e.z-n)<7)||this.glades.push({x:t,z:n})}let ye=n?48:64,be=(e,t,n,r,i=!1,a=!1)=>{let o=new Map;for(let e of n){let t=Math.floor(e.elements[12]/ye)*1e3+Math.floor(e.elements[14]/ye),n=o.get(t);n||o.set(t,n=[]),n.push(e)}for(let n of o.values()){let o=new E(e,t,n.length);n.forEach((e,t)=>{o.setMatrixAt(t,e),o.setColorAt(t,_.get(e)??so)}),o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.computeBoundingSphere(),o.castShadow=r,o.receiveShadow=!1,i&&o.layers.set(1),a&&this.reflectSkip.push(o),this.group.add(o)}};for(let[e,t]of g){let r=!!e.proxy&&n;for(let i of e.parts)be(i.geo,i.mat,t,i.shadow&&n&&!(r&&i.mat===s));if(e.proxy&&n){let n=e.parts.find(e=>e.mat===s);be(n?La([e.proxy.clone(),n.geo.clone()]):e.proxy,u,t,!0,!0)}e.glow&&be(e.glow,l,t,!1,!1,!0)}fe.forEach((e,t)=>be(e,a,me[t],!1,!1,!0)),pe.forEach((e,t)=>be(e,c,he[t],!1,!1,!0))}update(e){this.time.value=e}},uo=28;function fo(e,t){let n=J(t),r=[],i=[],a=[];for(let t=0;t<e;t++){let o=t/e*Math.PI*2+n()*.8,s=.5+n()*.45,c=.5+n()*.22,l=.13+n()*.05,u=Math.cos(o),d=Math.sin(o),f=-d,p=u,m=u*.04,h=d*.04,g=r.length/3;for(let n=0;n<=3;n++){let a=n/3,o=s*a*a,g=m+u*o,_=h+d*o,v=c*a*(1-.25*a*s),y=l*(1-a)*(1-a*.2);n<3?(r.push(g-f*y,v,_-p*y,g+f*y,v,_+p*y),i.push(a,t/e,a,t/e)):(r.push(g,v,_),i.push(1,t/e))}for(let e=0;e<2;e++){let t=g+e*2;a.push(t,t+1,t+2,t+1,t+3,t+2)}let _=g+4;a.push(_,_+1,_+2)}let o=new be;return o.setAttribute(`position`,new k(r,3)),o.setAttribute(`aBlade`,new k(i,2)),o.setIndex(a),o}function po(){let e=[-.11,.16,0,.11,.16,0,.11,.38,0,-.11,.38,0,-.13,.3,-.13,.13,.3,-.13,.13,.3,.13,-.13,.3,.13],t=[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],n=new be;return n.setAttribute(`position`,new k(e,3)),n.setAttribute(`uv`,new k(t,2)),n.setIndex([0,1,2,0,2,3,4,6,5,4,7,6]),n}var mo=`
uniform float uTime;
uniform vec4 uPush[12];
attribute vec4 aOffset; // x, y, z, rotation
attribute vec4 aParams; // scale, hue, phase, height
varying vec3 vLmPos;
vec3 windBend(vec3 p, vec3 root, float t, float phase) {
  float gust = sin(uTime * 1.4 + root.x * 0.23 + root.z * 0.17) * 0.5 + sin(uTime * 2.3 + phase * 6.0) * 0.25;
  vec2 dir = normalize(vec2(0.8, 0.6));
  vec2 off = dir * gust * 0.22 * t * t;
  for (int i = 0; i < 12; i++) {
    vec4 u = uPush[i];
    if (u.z <= 0.0) continue;
    vec2 d = root.xz - u.xy;
    float l = length(d);
    float k = 1.0 - smoothstep(u.z * 0.4, u.z, l);
    if (k > 0.0) off += normalize(d + vec2(0.001)) * k * 0.55 * t;
  }
  p.xz += off;
  p.y -= dot(off, off) * 0.6;
  return p;
}
`;function ho(e){let t=new M({side:2});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\n${mo}\nattribute vec2 aBlade;\nuniform vec3 uC0;\nuniform vec3 uC1;\nuniform vec3 uC2;\nvarying vec3 vTuft;`).replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3(0.0, 1.0, 0.0);`).replace(`#include <begin_vertex>`,`float c = cos(aOffset.w), s = sin(aOffset.w);
        vec3 lp = position * vec3(aParams.x, aParams.x * aParams.w, aParams.x);
        lp = vec3(c * lp.x - s * lp.z, lp.y, s * lp.x + c * lp.z);
        vec3 transformed = windBend(aOffset.xyz + lp, aOffset.xyz, aBlade.x, aParams.z + aBlade.y);
        vLmPos = transformed;
        float t = aBlade.x;
        vec3 col = t < 0.55 ? mix(uC0, uC1, t / 0.55) : mix(uC1, uC2, (t - 0.55) / 0.45);
        float onWall = step(1.5, aParams.y);
        col *= mix(vec3(0.88, 1.04, 1.12), vec3(1.12, 1.04, 0.8), aParams.y - 2.0 * onWall);
        col *= mix(vec3(1.0), vec3(0.7, 0.76, 0.8), onWall);
        vTuft = col;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec3 vTuft;\n${mi}`).replace(`#include <color_fragment>`,`diffuseColor.rgb = vTuft;`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>\n${hi}`)},t.customProgramCacheKey=()=>`va-tuft`,t}function go(e){let t=new M({side:2,alphaTest:.5});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\n${mo}\nvarying vec2 vFUv;\nvarying float vHue;`).replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3(0.0, 1.0, 0.0);`).replace(`#include <begin_vertex>`,`float c = cos(aOffset.w), s = sin(aOffset.w);
        vec3 lp = position * aParams.x;
        lp = vec3(c * lp.x - s * lp.z, lp.y, s * lp.x + c * lp.z);
        vec3 transformed = windBend(aOffset.xyz + lp, aOffset.xyz, clamp(position.y * 3.0, 0.0, 1.0), aParams.z);
        vLmPos = transformed;
        vFUv = uv; vHue = aParams.y;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec2 vFUv;\nvarying float vHue;\nuniform vec3 uF[4];\n${mi}`).replace(`#include <color_fragment>`,`vec2 q = vFUv * 2.0 - 1.0;
        float an = atan(q.y, q.x);
        float rr = length(q);
        float petal = 0.62 + 0.3 * cos(an * 5.0);
        if (rr > petal) discard;
        vec3 pc = vHue < 0.25 ? uF[0] : vHue < 0.5 ? uF[1] : vHue < 0.75 ? uF[2] : uF[3];
        diffuseColor.rgb = mix(vec3(1.0, 0.8, 0.2), pc, smoothstep(0.16, 0.24, rr));`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * GLOWF;`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>\n${hi}`)},t.customProgramCacheKey=()=>`va-flower`,t}var _o=class{group=new tt;push;uniforms;chunks=[];constructor(e,t,n){this.push=Array.from({length:12},()=>new Ke(0,0,0,0));let r=t.grass,i=r.flowers.length?r.flowers:[16777215];this.uniforms={uTime:{value:0},uPush:{value:this.push},uC0:{value:new I(r.colors[0])},uC1:{value:new I(r.colors[1])},uC2:{value:new I(r.colors[2])},uF:{value:[0,1,2,3].map(e=>new I(i[e%i.length]))},...di()};let a=ho(this.uniforms),o=go(this.uniforms);o.defines={GLOWF:t.key===`jungle`?`0.9`:`0.0`};let s=[fo(n?10:7,1),fo(n?8:6,2)],c=po(),l=(n?1:.4)*r.density,u=r.height,d=J(777),f=new Map,p=(e,t)=>{let n=(Math.floor(e/uo)+100)*1e3+Math.floor(t/uo)+100,r=f.get(n);return r||f.set(n,r={t:[[],[]],f:[]}),r},m=e.liquidKind===`water`||e.liquidKind===`lava`,h=.42;for(let t=e.min;t<e.min+e.world;t+=h)for(let n=e.min;n<e.min+e.world;n+=h){if(n<-18||t<-18||n>e.size+18||t>e.size+18)continue;let i=n+(d()-.5)*h*1.2,a=t+(d()-.5)*h*1.2,o=e.sample(e.lane,i,a),s=e.sample(e.pave,i,a),c=e.sample(e.liquid,i,a),f=e.sample(e.wallDist,i,a),g=e.sample(e.laneLat,i,a),_=e.heightAt(i,a);if(m&&_<e.level+.02||s>.4||_<-1||e.sample(e.ice,i,a)>.2||e.sample(e.crust,i,a)>.3||e.sample(e.crater,i,a)>.2||e.sample(e.bush,i,a)>.4||Math.abs(e.heightAt(i+.3,a)-e.heightAt(i-.3,a))+Math.abs(e.heightAt(i,a+.3)-e.heightAt(i,a-.3))>.45)continue;let v,y=Na(i*.35,a*.35,3);if(v=f>.05?f<3?.55:.12:.32+y*.5,o>.05&&(v*=o>.6?Math.max(0,(g-3.3)/1.2)*.9+(g<2.6&&g>.6&&Math.abs(g-1.3)>.45?.04:0):1-o),v*=1-c*.6,v*=1-Y(.5,1,e.sample(e.camp,i,a))*.6,v*=1-Y(.8,1,e.sample(e.path,i,a))*.75,v*=.55+y*.9,d()>v*l)continue;let b=p(i,a),x=.42+d()*.35+(f>.05?.15:0),S=(f>.05?1:.8+y*.4)*u;b.t[d()<.5?0:1].push(i,_,a,d()*6.28,x,d()+(f>.05?2:0),d(),S),r.flowers.length&&f<.05&&o<.3&&c<.2&&d()<.05*(y>.5?2:.3)&&b.f.push(i+.1,_,a-.1,d()*6.28,.8+d()*.5,Math.floor(y*7+d()*2)%4/4+.05,d(),1)}for(let[e,t]of f){let n=Math.floor(e/1e3),r=e-n*1e3-100,i=n-100;t.t.forEach((e,t)=>this.addChunk(s[t],a,e,i,r)),this.addChunk(c,o,t.f,i,r)}}addChunk(e,t,n,r,i){let a=n.length/8;if(a===0)return;let o=J(r*31+i*7+a);for(let e=a-1;e>0;e--){let t=Math.floor(o()*(e+1));for(let r=0;r<8;r++){let i=n[e*8+r];n[e*8+r]=n[t*8+r],n[t*8+r]=i}}let s=new be;s.index=e.index;for(let[t,n]of Object.entries(e.attributes))s.setAttribute(t,n);let c=new Float32Array(a*4),l=new Float32Array(a*4);for(let e=0;e<a;e++)for(let t=0;t<4;t++)c[e*4+t]=n[e*8+t],l[e*4+t]=n[e*8+4+t];s.setAttribute(`aOffset`,new _e(c,4)),s.setAttribute(`aParams`,new _e(l,4)),s.instanceCount=a;let u=(r+.5)*uo,d=(i+.5)*uo;s.boundingSphere=new T(new O(u,.3,d),22);let f=new P(s,t);f.receiveShadow=!0,f.castShadow=!1,this.group.add(f),this.chunks.push({mesh:f,geo:s,count:a,cx:u,cz:d})}update(e,t,n,r){this.uniforms.uTime.value=e;for(let e of this.chunks){let i=Math.hypot(e.cx-t.x,e.cz-t.z),a=i<n?1:i<r?.45:0;e.mesh.visible=a>0,e.geo.instanceCount=Math.max(1,Math.floor(e.count*a))}}},vo=`
uniform sampler2D tHeight;
uniform sampler2D tMaskA;
uniform sampler2D tMaskC;
uniform sampler2DArray tNrm;
uniform float uTime;
uniform float uHn;
uniform float uHres;
uniform float uLevel;
uniform vec2 uFlow;
uniform vec4 uRip[32];
uniform vec3 uT0;
uniform vec3 uT1;
uniform vec3 uT2;
uniform vec3 uT3;
uniform vec3 uSky;
uniform vec3 uSkyHi;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform sampler2D tRefl;
uniform mat4 uReflMat;
uniform float uReflOn;
varying vec3 vWPos;
vec3 wEmit;
float wn(vec2 p) { return texture(tNrm, vec3(p, ${q.noise}.0)).a; }
float ripples(vec2 wxz, float t) {
  float foam = 0.0;
  for (int i = 0; i < 32; i++) {
    vec4 r = uRip[i];
    float age = t - r.z;
    if (r.w <= 0.0 || age < 0.0 || age > 1.1) continue;
    float life = age / 1.1;
    float rad = 0.12 + age * (0.8 + r.w * 0.8);
    float dd = length(wxz - r.xy);
    float wdt = 0.05 + 0.05 * r.w + life * 0.05;
    foam = max(foam, smoothstep(wdt, wdt * 0.3, abs(dd - rad)) * (1.0 - life) * (1.0 - life) * min(0.85, r.w * 1.3));
  }
  return foam;
}
// Reflection: rgb + coverage (0 = open sky). Planar mirror on high, painted dark banks on low.
vec4 reflection(vec2 wxz, vec2 distort, float bank) {
  if (uReflOn > 0.5) {
    vec4 rc = uReflMat * vec4(wxz.x, uLevel, wxz.y, 1.0);
    return texture2D(tRefl, rc.xy / rc.w + distort);
  }
  return vec4(uT2 * 0.3, bank * 0.75);
}
`;function yo(e){return`((wxz - ${e.min.toFixed(1)}) / ${e.world.toFixed(1)})`}var bo=e=>`
void liquidShade(inout vec4 diffuseColor) {
  vec2 wxz = vWPos.xz;
  vec2 huv = ((wxz - ${e.min.toFixed(1)}) * uHres + 0.5) / uHn;
  float bed = texture(tHeight, huv).r;
  float depth = uLevel - bed;
  if (depth < -0.004) discard;
  float tm = uTime;
  vec2 flow = uFlow;
  float d01 = smoothstep(0.0, 0.42, depth);
  float n1 = wn(wxz * 0.11 - flow * tm * 0.05);
  float n2 = wn(wxz * 0.19 + vec2(-flow.y, flow.x) * tm * 0.02 - flow * tm * 0.08);
  float n3 = wn(wxz * 0.05 + flow * tm * 0.01);
  vec3 col = mix(uT0, uT1, d01);
  col = mix(col, uT2, smoothstep(0.3, 0.6, depth) * smoothstep(0.4, 0.7, n3));
  vec2 along = vec2(dot(wxz, flow), dot(wxz, vec2(-flow.y, flow.x)));
  float s1 = wn(vec2(along.x * 0.035 - tm * 0.06, along.y * 0.22));
  float streak = smoothstep(0.035, 0.0, abs(s1 - 0.56)) * (0.35 + 0.65 * d01);
  col = mix(col, mix(uT0, vec3(1.0), 0.5), streak * 0.55);
  col *= 0.92 + 0.16 * n1;
  // Reflection (planar on high, painted sky + dark banks on low), fresnel-weighted.
  vec3 V = normalize(cameraPosition - vWPos);
  float fres = 0.28 + 0.5 * pow(1.0 - clamp(V.y, 0.0, 1.0), 2.0);
  vec2 distort = (vec2(n1, n2) - 0.5) * 0.03;
  float bank = texture(tMaskA, ${yo(e)} + vec2(0.0, -2.2 / ${e.world.toFixed(1)})).b;
  vec4 r = reflection(wxz, distort, bank);
  vec3 refl = mix(mix(uSky, uSkyHi, n3), r.rgb, r.a);
  col = mix(col, refl, fres * (0.34 + 0.3 * d01) * (0.55 + 0.45 * r.a));
  // Shoreline foam: a solid lip plus a second band that breathes in and out.
  float lip = 1.0 - smoothstep(0.012, 0.05, depth + (n2 - 0.5) * 0.04);
  float band = smoothstep(0.016, 0.0, abs(depth - 0.075 - 0.025 * sin(tm * 1.3 + n1 * 9.0))) * smoothstep(0.55, 0.45, n2 + 0.1) * (1.0 - d01 * 0.5);
  float foam = max(max(lip, band * 0.85), ripples(wxz, tm));
  // Sun glints on the ripples + sparkles.
  vec3 nrm = normalize(vec3((n1 - 0.5) * 0.9, 1.0, (n2 - 0.5) * 0.9));
  float gl = pow(max(dot(nrm, normalize(uSunDir + V)), 0.0), 120.0);
  float sp = wn(wxz * 0.9 + vec2(tm * 0.05, -tm * 0.03)) * wn(wxz * 1.3 - vec2(tm * 0.04, tm * 0.06));
  float spark = pow(clamp((sp - 0.36) * 9.0, 0.0, 1.0), 3.0) * d01;
  wEmit = uSunCol * (gl * 2.2 + spark * 1.4) * d01;
  diffuseColor.rgb = mix(col, uT3, foam);
  diffuseColor.a = mix(mix(0.62, 0.93, d01), 0.97, foam);
  wEmit += uT3 * foam * 0.12;
}
`,xo=e=>`
vec2 lhash(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
vec3 lvor(vec2 x) {
  vec2 i = floor(x); vec2 f = fract(x);
  float f1 = 8.0, f2 = 8.0; float id = 0.0;
  for (int y = -1; y <= 1; y++) for (int xx = -1; xx <= 1; xx++) {
    vec2 g = vec2(float(xx), float(y));
    vec2 o = lhash(i + g);
    vec2 r = g + o - f;
    float d = dot(r, r);
    if (d < f1) { f2 = f1; f1 = d; id = o.x; } else if (d < f2) f2 = d;
  }
  return vec3(sqrt(f1), sqrt(f2), id);
}
void liquidShade(inout vec4 diffuseColor) {
  vec2 wxz = vWPos.xz;
  vec2 huv = ((wxz - ${e.min.toFixed(1)}) * uHres + 0.5) / uHn;
  float bed = texture(tHeight, huv).r;
  float depth = uLevel - bed;
  float lm = texture(tMaskA, ${yo(e)}).g;
  if (depth < -0.004 || lm < 0.3) discard;
  float tm = uTime;
  vec2 flow = uFlow;
  vec2 along = vec2(dot(wxz, flow), dot(wxz, vec2(-flow.y, flow.x)));
  float n1 = wn(wxz * 0.08 - flow * tm * 0.03);
  float n2 = wn(wxz * 0.21 + flow * tm * 0.05);
  // Crust plates drifting downstream, white-hot cracks between them.
  vec3 v = lvor(vec2(along.x * 0.55 - tm * 0.12, along.y * 0.75) + (n1 - 0.5) * 1.4);
  float e = v.y - v.x;
  float crack = smoothstep(0.16, 0.0, e);
  float cool = smoothstep(0.02, 0.2, depth) * smoothstep(0.3, 0.75, lm); // banks are cooler
  float plate = clamp(smoothstep(0.15, 0.45, v.z * 0.7 + n2 * 0.6) * (0.75 + 0.25 * (1.0 - cool)) + (1.0 - cool) * 0.5, 0.0, 1.0);
  vec3 crust = mix(uT3, uT2, n2 * 0.8);
  vec3 molten = mix(uT1, uT0, smoothstep(0.4, 0.8, n1 + crack * 0.4));
  float hot = clamp((1.0 - plate) * 0.9 + crack * 0.8, 0.0, 1.0);
  // Bubbles: swelling glowing domes that pop.
  vec2 bc = floor(wxz * 0.7);
  vec2 bo = lhash(bc);
  float bt = fract(tm * (0.18 + 0.2 * bo.y) + bo.x);
  float bd = length(fract(wxz * 0.7) - 0.25 - bo * 0.5);
  float bub = smoothstep(0.08 + bt * 0.22, 0.04 + bt * 0.2, bd) * smoothstep(1.0, 0.85, bt) * step(0.5, bo.x) * cool;
  hot = max(hot, bub);
  float rip = ripples(wxz, tm);
  hot = max(hot, rip);
  diffuseColor.rgb = mix(crust, molten * 0.6, hot);
  diffuseColor.a = 1.0;
  float pulse = 0.85 + 0.15 * sin(tm * 2.0 + n1 * 12.0);
  wEmit = molten * (hot * 1.35 + 0.12) * pulse + uT0 * crack * 1.0 * cool;
}
`,So=e=>`
vec2 ihash(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
float ivor(vec2 x) {
  vec2 i = floor(x); vec2 f = fract(x);
  float f1 = 8.0, f2 = 8.0;
  for (int y = -1; y <= 1; y++) for (int xx = -1; xx <= 1; xx++) {
    vec2 g = vec2(float(xx), float(y));
    vec2 r = g + ihash(i + g) - f;
    float d = dot(r, r);
    if (d < f1) { f2 = f1; f1 = d; } else if (d < f2) f2 = d;
  }
  return sqrt(f2) - sqrt(f1);
}
void liquidShade(inout vec4 diffuseColor) {
  vec2 wxz = vWPos.xz;
  float m = texture(tMaskC, ${yo(e)}).b;
  float edge = smoothstep(0.3, 0.55, m);
  if (edge <= 0.01) discard;
  float tm = uTime;
  float n1 = wn(wxz * 0.13);
  float n2 = wn(wxz * 0.5 + 3.0);
  // Clear ice over darker depths toward the middle, a few long white cracks.
  vec3 col = mix(uT0, uT1, smoothstep(0.55, 1.0, m) * (0.5 + 0.5 * n1));
  col = mix(col, uT2, smoothstep(0.85, 1.0, m) * smoothstep(0.5, 0.8, n2) * 0.3);
  float cr = smoothstep(0.035, 0.0, ivor(wxz * 0.32 + n1 * 0.9)) * smoothstep(0.35, 0.6, n2);
  col = mix(col, uT3, cr * 0.8);
  // Painted highlight streaks (glossy surface).
  float streakI = smoothstep(0.62, 0.7, wn(vec2(wxz.x * 0.08 + wxz.y * 0.05, wxz.y * 0.02))) * 0.35;
  col = mix(col, vec3(1.0), streakI);
  vec3 V = normalize(cameraPosition - vWPos);
  float fres = 0.32 + 0.45 * pow(1.0 - clamp(V.y, 0.0, 1.0), 2.0);
  vec2 distort = (vec2(n1, n2) - 0.5) * 0.006;
  vec4 r = reflection(wxz, distort, 0.0);
  vec3 refl = mix(mix(uSky, uSkyHi, n1), r.rgb, r.a);
  col = mix(col, refl, fres * (0.4 + 0.25 * r.a));
  // Frosted rim + glints.
  float frost = smoothstep(0.6, 0.3, m + (n2 - 0.5) * 0.3);
  col = mix(col, vec3(0.95, 0.98, 1.0), frost * 0.8);
  vec3 nrm = normalize(vec3((n2 - 0.5) * 0.4, 1.0, (n1 - 0.5) * 0.4));
  float gl = pow(max(dot(nrm, normalize(uSunDir + V)), 0.0), 90.0);
  vec2 gc = floor(wxz * 3.0);
  float gr = fract(sin(dot(gc, vec2(12.9898, 78.233))) * 43758.5453);
  float sp = step(0.9, gr) * smoothstep(0.22, 0.0, length(fract(wxz * 3.0) - 0.5)) * (0.5 + 0.5 * sin(tm * 3.0 + gr * 40.0));
  wEmit = uSunCol * gl * 1.4 + vec3(0.8, 0.95, 1.0) * sp * 0.9 * (1.0 - frost);
  diffuseColor.rgb = col;
  diffuseColor.a = edge * 0.9;
}
`,Co=class{data;group=new tt;uniforms;ripples;next=0;blocks=new Set;constructor(e,t,n){this.data=e;let r=e.liquidKind;this.ripples=Array.from({length:32},()=>new Ke(0,0,-99,0));let i=t.liquidTones.map(e=>new I(e));this.uniforms={tHeight:{value:n.heightTex},tMaskA:{value:n.masks[0]},tMaskC:{value:n.masks[2]},tNrm:{value:n.nrm},uTime:{value:0},uHn:{value:e.hn},uHres:{value:e.hres},uLevel:{value:e.level},uFlow:{value:new D(e.flow[0],e.flow[1])},uRip:{value:this.ripples},uT0:{value:i[0]},uT1:{value:i[1]},uT2:{value:i[2]},uT3:{value:i[3]},uSky:{value:new I(t.liquidTones[1]).lerp(new I(t.light.sky),.15)},uSkyHi:{value:new I(t.liquidTones[0]).lerp(new I(16777215),.3)},uSunDir:{value:new O(0,1,0)},uSunCol:{value:new I(t.light.sun)},tRefl:{value:n.reflection?n.reflection.texture:null},uReflMat:{value:n.reflection?n.reflection.matrix:new L},uReflOn:{value:0}};let a=r===`lava`,o=r===`lava`?xo(e):r===`ice`?So(e):bo(e),s=new M({color:16777215,transparent:!a,depthWrite:!0});s.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms,bt()),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${vo}\n${o}\n#define vLmPos vWPos\n${wt}`).replace(`#include <map_fragment>`,`liquidShade(diffuseColor);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += wEmit;`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>\n${Ot}`)},s.customProgramCacheKey=()=>`va-liquid-${r}-${e.def.id}`,this.build(s,r===`ice`?e.ice:e.liquid,e.level)}build(e,t,n){let r=this.data,i=new Map;for(let e=Math.floor(r.min);e<r.min+r.world;e++)for(let n=Math.floor(r.min);n<r.min+r.world;n++){let a=0;for(let[i,o]of[[.1,.1],[.9,.1],[.1,.9],[.9,.9],[.5,.5]])a=Math.max(a,r.sample(t,n+i,e+o));if(a<.02)continue;let o=Math.floor((n-r.min)/24)*1e3+Math.floor((e-r.min)/24),s=i.get(o);s||i.set(o,s=[]),s.push(n,e),this.blocks.add(Math.floor(n/8)*1e3+Math.floor(e/8))}for(let t of i.values()){let r=t.length/2,i=new Float32Array(r*12),a=[];for(let e=0;e<r;e++){let r=t[e*2],o=t[e*2+1];i.set([r,n,o,r,n,o+1,r+1,n,o+1,r+1,n,o],e*12);let s=e*4;a.push(s,s+1,s+2,s,s+2,s+3)}let o=new F;o.setAttribute(`position`,new A(i,3));let s=new Float32Array(r*12);for(let e=0;e<r*4;e++)s[e*3+1]=1;o.setAttribute(`normal`,new A(s,3)),o.setIndex(a),o.computeBoundingSphere();let c=new P(o,e);c.receiveShadow=!0,c.renderOrder=-1,this.group.add(c)}}nearView(e,t,n){for(let r=Math.floor((e-n)/8);r<=Math.floor((e+n)/8);r++)for(let e=Math.floor((t-n*.8)/8);e<=Math.floor((t+n*.6)/8);e++)if(this.blocks.has(r*1e3+e))return!0;return!1}addRipple(e,t,n,r){this.ripples[this.next].set(e,t,r,n),this.next=(this.next+1)%32}update(e,t,n){this.uniforms.uTime.value=e,this.uniforms.uSunDir.value.copy(t),this.uniforms.uReflOn.value=+!!n}},wo=class{data;group=new tt;uniforms;flash=0;nextBolt=2;bolt;boltLife=0;constructor(e,t){this.data=e;let n=t.liquidTones.map(e=>new I(e));this.uniforms={uTime:{value:0},uFlash:{value:0},uA:{value:n[0]},uB:{value:n[1]},uDark:{value:n[2]},uGold:{value:n[3]}};let r=e.min+e.world/2,i=e.world+40,a=new S({uniforms:this.uniforms,vertexShader:`varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
uniform float uTime; uniform float uFlash; uniform vec3 uA; uniform vec3 uB; uniform vec3 uDark; uniform vec3 uGold;
varying vec3 vW;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
void main() {
  vec2 p = vW.xz * 0.06;
  float t = uTime * 0.05;
  vec2 q = vec2(fbm(p + t), fbm(p - t + 3.1));
  float f = fbm(p * 1.6 + q * 2.2 + vec2(t * 2.0, -t));
  float veins = smoothstep(0.05, 0.0, abs(fbm(p * 2.4 + q * 3.0 - t * 3.0) - 0.5)) ;
  vec3 col = mix(uDark, uB, smoothstep(0.35, 0.75, f));
  col = mix(col, uA, smoothstep(0.62, 0.9, f) * 0.8);
  col += uGold * veins * 3.2;
  col += uGold * smoothstep(0.7, 0.95, f) * 0.6;
  float stars = step(0.996, h(floor(vW.xz * 3.0))) * (0.5 + 0.5 * sin(uTime * 3.0 + vW.x));
  col += uGold * stars * 1.5;
  col *= 1.7 + uFlash * 1.5;
  gl_FragColor = vec4(col, 1.0);
}`}),o=new P(new et(i,i).rotateX(-Math.PI/2),a);o.position.set(r,e.level,r),this.group.add(o);for(let[e,t,n]of[[-3.2,.05,.55],[-5.4,.035,.7]]){let a=new S({uniforms:{...this.uniforms,uY:{value:e},uScale:{value:t},uAlpha:{value:n}},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
uniform float uTime; uniform float uFlash; uniform vec3 uA; uniform vec3 uB; uniform vec3 uDark; uniform vec3 uGold; uniform float uScale; uniform float uAlpha; uniform float uY;
varying vec3 vW;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
void main() {
  vec2 p = vW.xz * uScale + vec2(uTime * 0.012, uTime * 0.008) * (uY < -4.0 ? -1.0 : 1.0);
  float f = fbm(p + fbm(p * 1.7) * 0.8);
  float a = smoothstep(0.45, 0.8, f) * uAlpha;
  vec3 col = mix(uDark * 2.0, mix(uB, uA, 0.4) * 0.9, smoothstep(0.5, 0.9, f));
  col += vec3(0.9, 0.85, 1.0) * uFlash * smoothstep(0.5, 0.9, f) * 2.5;
  gl_FragColor = vec4(col, a);
}`}),o=new P(new et(i,i).rotateX(-Math.PI/2),a);o.position.set(r,e,r),o.renderOrder=1,this.group.add(o)}this.bolt=new P(new F,new j({color:new I(2.5,2.2,3.2),transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})),this.bolt.visible=!1,this.bolt.frustumCulled=!1,this.group.add(this.bolt)}get lightning(){return this.flash}update(e,t,n){this.uniforms.uTime.value=e,this.flash=Math.max(0,this.flash-t*3.2),this.nextBolt-=t,this.nextBolt<=0&&(this.nextBolt=3+Math.random()*6,this.flash=1,this.boltLife=.35,this.makeBolt(n.x+(Math.random()-.5)*34,n.z-6+(Math.random()-.5)*20)),this.boltLife>0&&(this.boltLife-=t,this.bolt.visible=this.boltLife>0&&(this.boltLife>.22||Math.sin(e*90)>0)),this.uniforms.uFlash.value=this.flash*this.flash}makeBolt(e,t){if(this.data.heightAt(e,t)>-3)return;let n=[],r=e,i=t;for(let e=-2.6;e>this.data.level;e-=.5)n.push(new O(r,e,i)),r+=(Math.random()-.5)*.9,i+=(Math.random()-.5)*.9;let a=[];for(let e=0;e<n.length-1;e++){let t=n[e],r=n[e+1],i=.09*(1-e/n.length)+.03;a.push(t.x-i,t.y,t.z,t.x+i,t.y,t.z,r.x+i,r.y,r.z,t.x-i,t.y,t.z,r.x+i,r.y,r.z,r.x-i,r.y,r.z),a.push(t.x,t.y,t.z-i,t.x,t.y,t.z+i,r.x,r.y,r.z+i,t.x,t.y,t.z-i,r.x,r.y,r.z+i,r.x,r.y,r.z-i)}this.bolt.geometry.dispose();let o=new F;o.setAttribute(`position`,new k(a,3)),this.bolt.geometry=o}},To={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new I(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Eo=class e extends Jt{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new D(256,256):new D(e.x,e.y),this.clearColor=new I(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(i,a,{type:b,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Se(i,a,{type:b,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Se(i,a,{type:b,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=To;this.highPassUniforms=ie.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new S({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new D(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ie.clone(Yt.uniforms),this.blendMaterial=new S({uniforms:this.copyUniforms,vertexShader:Yt.vertexShader,fragmentShader:Yt.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new I,this._oldClearAlpha=1,this._basic=new j,this._fsQuad=new qt(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new D(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new S({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new D(.5,.5)},direction:{value:new D(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new S({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Eo.BlurDirectionX=new D(1,0),Eo.BlurDirectionY=new D(0,1);var Do={clouds:0,aurora:1,storm:2,dapple:3,smoke:4},Oo=`
uniform sampler2D tColor;
uniform sampler2D tBloom;
uniform sampler2D tAO;
uniform sampler2D tMask;
uniform sampler2D tDepth;
uniform sampler2D tNoise;
uniform sampler2D tCanopy;
uniform mat4 uInvVP;
uniform float uNear;
uniform float uFar;
uniform float uAO;
uniform float uExposure;
uniform float uTime;
uniform float uVignette;
uniform float uOutline;
uniform vec2 uTexel;
uniform vec4 uCanRect;   // x0, z0, 1/extent, -
uniform int uFx;
uniform vec3 uFxColor;
uniform float uFxAmt;
uniform float uFlash;
uniform vec3 uHFog;
uniform vec2 uHFogP;     // density, top
uniform float uSat;
uniform vec3 uShadowTint;
uniform vec3 uHighTint;
uniform float uContrast;
uniform sampler2D tDistort;
uniform float uDistort;
uniform vec4 uFxTint;
uniform vec4 uFxWash;
uniform sampler2D tAdapt;
uniform vec3 uAdapt;     // knee, gain, floor
varying vec2 vUv;
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float sceneZ(vec2 uv) { float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - d * (uFar - uNear)); }
float nz(vec2 p) { return texture2D(tNoise, p).r; }
void main() {
  // VFX heat shimmer / shock rings bend the colour lookup (src/render/vfx/distort.ts, high only).
  vec2 cuv = vUv;
  if (uDistort > 0.0) cuv = clamp(vUv + texture2D(tDistort, vUv).rg * uDistort, vec2(0.001), vec2(0.999));
  // Bloom is added here instead of blended into the half-float scene target (no float-blending dependency, one
  // full-screen pass less).
  vec3 c = (texture2D(tColor, cuv).rgb + texture2D(tBloom, cuv).rgb) * uExposure;
  // Anti white-out: the adapted screen excess pulls the exposure down while the frame is flooded.
  float adaptK = 1.0 / (1.0 + max(0.0, texture2D(tAdapt, vec2(0.5)).r - uAdapt.x) * uAdapt.y);
  c *= max(adaptK, uAdapt.z);
  vec3 aurora = vec3(0.0);
  float ao = texture2D(tAO, vUv).r;
  c *= mix(1.0, ao, uAO);
  float d = texture2D(tDepth, vUv).x;
  if (d < 0.99999) {
    vec4 wp = uInvVP * vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    vec3 w = wp.xyz / wp.w;
    float t = uTime;
    // World-space light pattern.
    if (uFx == 0 || uFx == 2 || uFx == 4) {
      float sp = uFx == 2 ? 0.02 : 0.008;
      float n = nz(w.xz * 0.011 + vec2(t * sp, t * sp * 0.6)) * 0.65 + nz(w.xz * 0.027 - vec2(t * sp * 1.4, 0.0)) * 0.35;
      float sh = smoothstep(0.48, 0.68, n) * uFxAmt;
      c *= mix(vec3(1.0), uFxColor * 2.0 + 0.25, sh);
      if (uFx == 2) c *= 1.0 + uFlash * 0.9 * (0.6 + 0.4 * n);
    } else if (uFx == 1) {
      float n = nz(w.xz * 0.008 + vec2(t * 0.004, 0.0));
      float band = sin(w.x * 0.045 + w.z * 0.02 + n * 7.0 + t * 0.15);
      float rib = smoothstep(0.3, 1.0, band) * (0.55 + 0.45 * nz(vec2(w.x * 0.03 - t * 0.01, w.z * 0.005)));
      vec3 ac = mix(uFxColor, vec3(0.45, 0.55, 1.0), 0.25 + 0.25 * sin(w.x * 0.02 + t * 0.1));
      // Aurora light: a gentle tint in scene light + a glow added after the tone curve (bright snow
      // would otherwise wash it out to white).
      c += c * ac * rib * uFxAmt * 0.6;
      aurora = ac * rib * uFxAmt * 0.22;
    } else if (uFx == 3) {
      float can = texture2D(tCanopy, (w.xz - uCanRect.xy) * uCanRect.z).g;
      float under = smoothstep(0.95, 0.55, can);
      vec2 sway = vec2(sin(t * 0.7), cos(t * 0.53)) * 0.6;
      float leaf = nz(w.xz * 0.09 + sway * 0.05) * 0.6 + nz(w.xz * 0.23 - sway * 0.08) * 0.4;
      float spot = smoothstep(0.52, 0.62, leaf);
      c *= mix(vec3(1.0), mix(uFxColor * 2.5 + 0.2, vec3(1.35, 1.25, 0.95), spot), under * uFxAmt);
    }
    // Height fog (mist pooling in low ground).
    float hf = 1.0 - exp(-max(0.0, uHFogP.y - w.y) * uHFogP.x);
    c = mix(c, uHFog * (1.0 + uFlash), clamp(hf, 0.0, 0.9));
  }
  // Hue-preserving filmic curve on luminance (keeps saturated paint colours saturated). Highlights
  // above the knee are soft-clipped first, so the curve approaches but never reaches flat white
  // (effect cores stay hot-coloured instead of clipping) and the push toward white is limited.
  float L0 = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float KN = 1.5, LM = 2.75;
  float L = L0 < KN ? L0 : KN + (LM - KN) * (1.0 - exp(-(L0 - KN) / (LM - KN)));
  c *= L / max(L0, 1e-4);
  float W = 3.0;
  float Lt = L * (1.0 + L / (W * W)) / (1.0 + L);
  Lt = mix(Lt, smoothstep(0.0, 1.0, Lt), 0.35);
  c *= Lt / max(L, 1e-4);
  c = mix(c, vec3(Lt), smoothstep(0.9, 2.2, L) * 0.45);
  // Grade: saturation, split toning, contrast.
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(mix(vec3(l), c, uSat), 0.0);
  c *= mix(uShadowTint, vec3(1.0), smoothstep(0.0, 0.35, l));
  c *= mix(vec3(1.0), uHighTint, smoothstep(0.4, 1.0, l));
  c = max((c - 0.5 * l) * uContrast + 0.5 * l, 0.0) * (1.0 + (uContrast - 1.0) * 0.3);
  c += aurora * (1.0 - 0.5 * smoothstep(0.6, 1.0, dot(c, vec3(0.333))));
  // Silhouette outline around the visible part of units.
  if (uOutline > 0.0) {
    float sz = sceneZ(vUv);
    float mz = texture2D(tMask, vUv).r;
    bool self = mz > 0.0 && mz <= sz + 0.25;
    if (!self) {
      float o = 0.0;
      for (int i = 0; i < 8; i++) {
        float a = float(i) * 0.7853982;
        vec2 uv2 = vUv + vec2(cos(a), sin(a)) * uTexel * 1.6;
        float nzv = texture2D(tMask, uv2).r;
        if (nzv > 0.0 && nzv <= sceneZ(uv2) + 0.25 && nzv <= sz + 0.4) o = 1.0;
      }
      c = mix(c, vec3(0.03, 0.02, 0.06), o * uOutline);
    }
  }
  vec2 q = (vUv - 0.5) * vec2(1.0, 0.85);
  // VFX screen pulses (src/render/vfx/feel.ts): tinted edge darkening (shadow / frost) and a warm wash.
  float vq = smoothstep(0.12, 0.72, length(q));
  c = mix(c, c * uFxTint.rgb * 1.6, clamp(uFxTint.a * vq, 0.0, 1.0));
  // The wash only fills the room left below white (it never flattens a bright frame to white).
  float lw = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c += uFxWash.rgb * uFxWash.a * (1.0 - 0.55 * vq) * clamp(1.0 - lw, 0.0, 1.0) * adaptK;
  c = clamp(c, 0.0, 1.0);
  c *= 1.0 - uVignette * smoothstep(0.2, 0.65, length(q));
  c = toSRGB(c);
  c += (hash(gl_FragCoord.xy + fract(uTime) * 61.0) - 0.5) / 255.0;
  gl_FragColor = vec4(c, 1.0);
}
`,ko=`
uniform sampler2D tColor;
uniform vec2 uTexel;
uniform float uExposure;
varying vec2 vUv;
void main() {
  // 4 taps around the texel centre: a fair average of the screen area it covers.
  vec3 c = vec3(0.0);
  c += texture2D(tColor, vUv + vec2(-uTexel.x, -uTexel.y)).rgb;
  c += texture2D(tColor, vUv + vec2(uTexel.x, -uTexel.y)).rgb;
  c += texture2D(tColor, vUv + vec2(-uTexel.x, uTexel.y)).rgb;
  c += texture2D(tColor, vUv + vec2(uTexel.x, uTexel.y)).rgb;
  float L = dot(c * 0.25 * uExposure, vec3(0.2126, 0.7152, 0.0722));
  gl_FragColor = vec4(max(0.0, L - 1.25), L, 0.0, 1.0);
}`,Ao=`
uniform sampler2D tMeasure;
uniform sampler2D tPrev;
uniform float uDt;
varying vec2 vUv;
void main() {
  vec2 m = textureLod(tMeasure, vec2(0.5), 8.0).rg;
  vec2 p = texture2D(tPrev, vec2(0.5)).rg;
  // A non-finite value (NaN / Inf) would stay in the running average for good: drop it.
  if (!(m.r >= 0.0 && m.r < 6e4 && m.g >= 0.0 && m.g < 6e4)) m = vec2(0.0);
  if (!(p.r >= 0.0 && p.r < 6e4 && p.g >= 0.0 && p.g < 6e4)) p = vec2(0.0);
  float rate = m.r > p.r ? 24.0 : 2.2;
  float k = 1.0 - exp(-uDt * rate);
  gl_FragColor = vec4(mix(p, m, k), 0.0, 1.0);
}`,jo=`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Mo={knee:.1,gain:2.4,floor:.5};function No(){let e=new Uint8Array(262144),t=new Float32Array(1024),n=9871,r=()=>(n=n*16807%2147483647)/2147483647;for(let e=0;e<t.length;e++)t[e]=r();let i=(e,n,r)=>t[(n%r+r)%r*32+(e%r+r)%r];for(let t=0;t<256;t++)for(let n=0;n<256;n++){let r=0,a=.5,o=0;for(let e=0;e<4;e++){let s=4<<e,c=n/256*s,l=t/256*s,u=Math.floor(c),d=Math.floor(l),f=c-u,p=l-d,m=f*f*(3-2*f),h=p*p*(3-2*p),g=i(u,d,s)*(1-m)*(1-h)+i(u+1,d,s)*m*(1-h)+i(u,d+1,s)*(1-m)*h+i(u+1,d+1,s)*m*h;r+=g*a,o+=a,a*=.5}let s=Math.round(r/o*255),c=(t*256+n)*4;e[c]=e[c+1]=e[c+2]=s,e[c+3]=255}let a=new me(e,256,256,ze);return a.wrapS=a.wrapT=We,a.magFilter=xe,a.minFilter=Ce,a.generateMipmaps=!0,a.needsUpdate=!0,a}var Po=class{renderer;target;gtao=null;bloom=null;quad;finalMat;white;black;noise;mask;vp=new L;bloomBase=.4;size=new D(2,2);measure;adapt;adaptIdx=0;measureQuad;adaptQuad;measureMat;adaptMat;px=new Uint16Array(4);lite=!1;constructor(e,t,n,r,i){this.renderer=e;let a=new ee(1,1);if(a.type=ye,this.target=new Se(1,1,{type:b,samples:i.msaa,depthTexture:a,minFilter:xe,magFilter:xe}),this.white=new me(new Uint8Array([255,255,255,255]),1,1),this.white.needsUpdate=!0,this.black=new me(new Uint8Array([0,0,0,255]),1,1),this.black.needsUpdate=!0,this.noise=No(),i.ao&&Xt(async()=>{let{GTAOPass:e}=await import(`./GTAOPass-D_Zq6hRP.js`);return{GTAOPass:e}},__vite__mapDeps([0,1,2]),import.meta.url).then(({GTAOPass:e})=>{let r=new e(t,n,2,2);r.setGBuffer(a),r.output=e.OUTPUT.Off,r.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:8,distanceFallOff:1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8}),r.setSize(Math.ceil(this.size.x/2),Math.ceil(this.size.y/2)),this.gtao=r,this.finalMat.uniforms.tAO.value=r.gtaoMap,this.finalMat.uniforms.uAO.value=.7}),i.bloom){this.bloom=new Eo(new D(2,2),this.bloomBase,.5,1.3);let e=this.bloom.materialHighPassFilter;e.fragmentShader=e.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
			texel.rgb *= min( 1.0, 3.0 / max( luminance( texel.rgb ), 1e-4 ) );`),e.needsUpdate=!0}this.mask=i.outline?new Se(1,1,{type:b,depthBuffer:!0,minFilter:Ae,magFilter:Ae}):null;let o=r.grade;this.finalMat=new S({vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:Oo,uniforms:{tColor:{value:this.target.texture},tBloom:{value:this.black},tAO:{value:this.white},tMask:{value:this.mask?this.mask.texture:this.white},tDepth:{value:a},tNoise:{value:this.noise},tCanopy:{value:this.white},uInvVP:{value:new L},uNear:{value:n.near},uFar:{value:n.far},uAO:{value:0},uExposure:{value:r.light.exposure},uTime:{value:0},uVignette:{value:o.vignette},uOutline:{value:this.mask?.75:0},uTexel:{value:new D(1,1)},uCanRect:{value:new Ke(0,0,1,0)},uFx:{value:Do[r.skyFx]},uFxColor:{value:new I(r.skyFxColor)},uFxAmt:{value:r.skyFxAmount},uFlash:{value:0},uHFog:{value:new I(r.heightFog.color)},uHFogP:{value:new D(r.heightFog.density,r.heightFog.top)},uSat:{value:o.sat},uShadowTint:{value:new I(o.shadow)},uHighTint:{value:new I(o.highlight)},uContrast:{value:o.contrast},tDistort:{value:this.white},uDistort:{value:0},uFxTint:{value:new Ke(0,0,0,0)},uFxWash:{value:new Ke(0,0,0,0)},tAdapt:{value:null},uAdapt:{value:new O(Mo.knee,Mo.gain,Mo.floor)}},depthTest:!1,depthWrite:!1}),this.quad=new qt(this.finalMat),this.bloom&&(this.bloom.blendMaterial.visible=!1),this.setLite(!1);let s={type:b,depthBuffer:!1};this.measure=new Se(64,32,{...s,generateMipmaps:!0,minFilter:Ce,magFilter:xe}),this.adapt=[new Se(1,1,{...s,minFilter:Ae,magFilter:Ae}),new Se(1,1,{...s,minFilter:Ae,magFilter:Ae})],this.measureMat=new S({vertexShader:jo,fragmentShader:ko,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:this.target.texture},uTexel:{value:new D(1/128,1/64)},uExposure:{value:r.light.exposure}}}),this.adaptMat=new S({vertexShader:jo,fragmentShader:Ao,depthTest:!1,depthWrite:!1,uniforms:{tMeasure:{value:this.measure.texture},tPrev:{value:this.adapt[1].texture},uDt:{value:0}}}),this.measureQuad=new qt(this.measureMat),this.adaptQuad=new qt(this.adaptMat),this.finalMat.uniforms.tAdapt.value=this.adapt[0].texture}debugAdapt(){this.renderer.readRenderTargetPixels(this.adapt[this.adaptIdx],0,0,1,1,this.px);let e=x.fromHalfFloat(this.px[0]);return{excess:e,luma:x.fromHalfFloat(this.px[1]),k:Math.max(Mo.floor,1/(1+Math.max(0,e-Mo.knee)*Mo.gain))}}setVision(e,t,n,r){Tt(e,t,n,r)}setFx(e,t,n,r,i){let a=this.finalMat.uniforms;a.tDistort.value=e??this.white,a.uDistort.value=e?t:0,a.uFxTint.value.copy(n),a.uFxWash.value.copy(r),this.bloom&&(this.bloom.strength=this.bloomBase+Math.min(.35,i))}setCanopy(e,t,n){this.finalMat.uniforms.tCanopy.value=e,this.finalMat.uniforms.uCanRect.value.set(t,t,n,0)}setLite(e){this.lite=e;let t=this.finalMat.uniforms;t.uOutline.value=this.mask&&!e?.75:0,t.tBloom.value=this.bloom&&!e?this.bloom.renderTargetsHorizontal[0].texture:this.black,t.uAdapt.value.y=e?0:Mo.gain}setSize(e,t){this.size.set(e,t),this.target.setSize(e,t),this.mask?.setSize(e,t),this.finalMat.uniforms.uTexel.value.set(1/e,1/t),this.gtao&&this.gtao.setSize(Math.ceil(e/2),Math.ceil(t/2)),this.bloom&&this.bloom.setSize(Math.ceil(e/4),Math.ceil(t/4))}render(e,t,n,r,i,a){let o=this.renderer,s=this.lite;this.mask&&a&&!s&&(o.setRenderTarget(this.mask),o.setClearColor(0,1),o.clear(),a()),o.setRenderTarget(this.target),o.clear(),o.render(e,t),this.gtao&&this.gtao.render(o,this.target,this.target,n,!1),this.bloom&&!s&&this.bloom.render(o,this.target,this.target,n,!1);let c=this.finalMat.uniforms;s||this.adaptFrame(n),c.uTime.value=r,c.uFlash.value=i,this.vp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),c.uInvVP.value.copy(this.vp).invert(),o.setRenderTarget(null),this.quad.render(o)}adaptFrame(e){let t=this.renderer;t.setRenderTarget(this.measure),this.measureQuad.render(t);let n=this.adapt[this.adaptIdx];this.adaptIdx=1-this.adaptIdx;let r=this.adapt[this.adaptIdx];this.adaptMat.uniforms.tPrev.value=n.texture,this.adaptMat.uniforms.uDt.value=Math.min(.1,Math.max(0,e)),t.setRenderTarget(r),this.adaptQuad.render(t),this.finalMat.uniforms.tAdapt.value=r.texture}dispose(){this.target.dispose(),this.measure.dispose();for(let e of this.adapt)e.dispose();this.measureMat.dispose(),this.adaptMat.dispose(),this.measureQuad.dispose(),this.adaptQuad.dispose(),this.mask?.dispose(),this.gtao?.dispose(),this.bloom?.dispose(),this.finalMat.dispose(),this.quad.dispose(),this.noise.dispose(),this.black.dispose()}},Fo=4.4,Io={height:2.4,ramp:11,band:9,cliff:3.5},Lo={water:-.1,lava:-.07,ice:.012,abyss:-7.5,none:-.1};function Ro(e,t,n,r){let i=Float32Array.from(e);if(n<1)return i;let a=new Float32Array(t*t),o=2*n+1;for(let e=0;e<r;e++){for(let e=0;e<t;e++){let r=e*t,s=0;for(let e=-n;e<=n;e++)s+=i[r+Math.min(t-1,Math.max(0,e))];for(let e=0;e<t;e++)a[r+e]=s/o,s+=i[r+Math.min(t-1,e+n+1)]-i[r+Math.max(0,e-n)]}for(let e=0;e<t;e++){let r=0;for(let i=-n;i<=n;i++)r+=a[Math.min(t-1,Math.max(0,i))*t+e];for(let s=0;s<t;s++)i[s*t+e]=r/o,r+=a[Math.min(t-1,s+n+1)*t+e]-a[Math.max(0,s-n)*t+e]}}return i}function zo(e,t,n){let r=1e9,i=new Float32Array(t*t);for(let n=0;n<t*t;n++)i[n]=e[n]?r:0;let a=n,o=n*Math.SQRT2;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=e*t+n,s=i[r];s!==0&&(n>0&&(s=Math.min(s,i[r-1]+a)),e>0&&(s=Math.min(s,i[r-t]+a),n>0&&(s=Math.min(s,i[r-t-1]+o)),n<t-1&&(s=Math.min(s,i[r-t+1]+o))),i[r]=s)}for(let e=t-1;e>=0;e--)for(let n=t-1;n>=0;n--){let r=e*t+n,s=i[r];s!==0&&(n<t-1&&(s=Math.min(s,i[r+1]+a)),e<t-1&&(s=Math.min(s,i[r+t]+a),n<t-1&&(s=Math.min(s,i[r+t+1]+o)),n>0&&(s=Math.min(s,i[r+t-1]+o))),i[r]=s)}for(let e=0;e<t*t;e++)i[e]>=r&&(i[e]=99);return i}var Bo=class{def;map;style;size;min;world;liquidKind;level;mres;mn;lane;liquid;wall;wallWide;pave;camp;path;bush;crust;ice;crater;laneLat;wallDist;liquidDist;canopy;hres;hn;height;flow;craters=[];exits=[];hazardCell;paintedLiquid;constructor(e,t,n){this.def=e,this.style=t,this.map=new kt(e),this.size=e.size,this.min=-36,this.world=e.size+72,this.liquidKind=t.liquid,this.level=Lo[t.liquid],this.mres=n?4:2;let r=this.world*this.mres;this.mn=r;let i=r*r,a=this.size;this.hazardCell=new Uint8Array(a*a),this.paintedLiquid=new Uint8Array(a*a);let o=e.terrain.paint.filter(e=>e.kind===`river`||e.kind===`deep`),s=0,c=0,l=0,u=0,d=0,f=0;for(let t=0;t<a;t++)for(let n=0;n<a;n++){let r=n+.5,i=t+.5;for(let o of e.hazards)if(Ct(o.zone,r,i)){this.hazardCell[t*a+n]=o.kind===`lava`?1:o.kind===`ice`?2:3;break}for(let e of o)Ct(e.shape,r,i)&&(this.paintedLiquid[t*a+n]=e.kind===`deep`?2:1);this.cellLiquid(n,t)&&(s+=r,c+=i,l+=r*r,u+=i*i,d+=r*i,f++)}if(f>10){let e=s/f,t=c/f,n=l/f-e*e,r=u/f-t*t,i=d/f-e*t,a=.5*Math.atan2(2*i,n-r);this.flow=[Math.cos(a),Math.sin(a)]}else this.flow=[Math.SQRT1_2,Math.SQRT1_2];this.findExits();let p=new Float32Array(i),m=new Float32Array(i),h=new Float32Array(i),g=new Float32Array(i),_=new Float32Array(i),v=new Float32Array(i),y=new Float32Array(i),b=new Float32Array(i),x=new Float32Array(i),S=new Float32Array(i),C=new Uint8Array(i),w=new Uint8Array(i),T=1/this.mres,ee=this.liquidKind;for(let e=0;e<r;e++){let t=this.min+(e+.5)*T;for(let n=0;n<r;n++){let i=this.min+(n+.5)*T,a=e*r+n,o=this.kindAt(i,t),s=this.cellIndex(i,t),c=s>=0?this.hazardCell[s]:0,l=s>=0?this.paintedLiquid[s]:0,u=o===2&&l>0,d=!1;ee===`water`?d=o===3||o===7||u&&l===1:ee===`lava`?d=o===7||c===1:ee===`ice`?d=o===3||o===7:ee===`abyss`&&(d=o===7),o===2&&(p[a]=1),o===0&&(h[a]=1,C[a]=1),d&&(m[a]=1,w[a]=1),(o===4||o===5||u)&&(g[a]=1),o===6&&(_[a]=1),o===1&&!this.inTown(i,t)&&(v[a]=1),s>=0&&this.map.bush[s]&&(y[a]=1),ee===`lava`&&o===3&&!d&&(b[a]=1),(c===2||ee===`ice`&&d)&&(x[a]=1)}}for(let t of e.hazards){if(t.kind!==`meteor`)continue;let e=t.zone.kind===`circle`?t.zone:null;if(!e)continue;let n=Math.max(2,Math.round(e.r*.45));for(let t=0;t<n*4&&this.craters.length<40;t++){let n=Na(t*3.1+e.x,e.z*.7+t,2)*Math.PI*8,r=Math.sqrt(Na(t*1.7+11,e.x+e.z+t*.3,2))*e.r*.95,i=e.x+Math.cos(n)*r,a=e.z+Math.sin(n)*r;this.map.isOpenGround(i,a)&&this.map.terrainAt(i,a)!==2&&(this.craters.some(e=>Math.hypot(e.x-i,e.z-a)<3)||this.craters.push({x:i,z:a,r:1.1+Na(i,a,2)*.9}))}}for(let e of this.craters)this.stamp(S,e.x,e.z,e.r*1.25,1);let te=this.mres;this.wallDist=zo(C,r,T),this.liquidDist=zo(w,r,T),this.lane=Ro(p,r,Math.round(.75*te),3),this.liquid=Ro(m,r,Math.round((ee===`abyss`?1.1:.75)*te),3),this.wall=Ro(h,r,Math.round(.75*te),3),this.wallWide=Ro(h,r,Math.round(2*te),3),this.pave=Ro(g,r,Math.round(.5*te),3),this.camp=Ro(_,r,Math.round(1*te),3),this.path=Ro(v,r,Math.round(.75*te),3),this.bush=Ro(y,r,Math.max(1,Math.round(.3*te)),2),this.crust=Ro(b,r,Math.round(.6*te),3),this.ice=Ro(x,r,Math.max(1,Math.round(1*te)),3),this.crater=S;let E=new Float32Array(i).fill(9),D=[];for(let t of e.lanes){let e=t.waypoints[0];for(let t=0;t<e.length-1;t++)D.push([e[t].x,e[t].z,e[t+1].x,e[t+1].z])}for(let e=0;e<r;e++){let t=this.min+(e+.5)*T;for(let n=0;n<r;n++){let i=e*r+n;if(this.lane[i]<.002)continue;let a=this.min+(n+.5)*T,o=9;for(let e of D)o=Math.min(o,Pa(a,t,e[0],e[1],e[2],e[3]).d);E[i]=o}}this.laneLat=E,this.canopy=new Float32Array(i).fill(1),this.hres=n?2:1;let ne=this.world*this.hres+1;this.hn=ne,this.height=new Float32Array(ne*ne);for(let e=0;e<ne;e++){let t=this.min+e/this.hres;for(let n=0;n<ne;n++){let r=this.min+n/this.hres;this.height[e*ne+n]=this.computeHeight(r,t)}}}cellIndex(e,t){let n=Math.floor(e),r=Math.floor(t);return n<0||r<0||n>=this.size||r>=this.size?-1:r*this.size+n}kindAt(e,t){let n=this.size,r=this.def.terrain.border??2,i=Math.floor(e),a=Math.floor(t),o=i>=0&&a>=0&&i<n&&a<n;if(o){let e=this.map.terrain[a*n+i];if(e!==0)return e}let s=Math.max(r,Math.min(n-1-r,i)),c=Math.max(r,Math.min(n-1-r,a));if(o&&s===i&&c===a)return 0;if(this.liquidKind===`water`)return this.inExitChannel(e,t)?3:0;let l=this.map.terrain[c*n+s];if(l===3||l===7){let e=Math.max(Math.abs(s-i),Math.abs(c-a));if(this.liquidKind===`abyss`||e<=r+4)return l}return 0}stamp(e,t,n,r,i){let a=this.mn,o=this.mres,s=Math.max(0,Math.floor((t-r-this.min)*o)),c=Math.min(a-1,Math.ceil((t+r-this.min)*o)),l=Math.max(0,Math.floor((n-r-this.min)*o)),u=Math.min(a-1,Math.ceil((n+r-this.min)*o));for(let d=l;d<=u;d++){let l=this.min+(d+.5)/o;for(let u=s;u<=c;u++){let s=this.min+(u+.5)/o,c=Math.hypot(s-t,l-n)/r;c<1&&(e[d*a+u]=Math.max(e[d*a+u],i*(1-c*c)))}}}cellLiquid(e,t){let n=this.size,r=this.map.terrain[t*n+e],i=this.liquidKind;return i===`lava`?r===7||this.hazardCell[t*n+e]===1:i===`abyss`?r===7:i===`none`?!1:r===3||r===7}findExits(){if(this.liquidKind!==`water`)return;let e=this.size,t=this.def.terrain.border??2,n=[];for(let r=t;r<e-t;r++)for(let[i,a]of[[t,r],[e-1-t,r],[r,t],[r,e-1-t]])this.cellLiquid(i,a)&&n.push({x:i+.5,z:a+.5});let r=[];for(let e of n){let t=r.find(t=>t.some(t=>Math.hypot(t.x-e.x,t.z-e.z)<6));t?t.push(e):r.push([e])}let i=e/2;for(let t of r){let n=t.reduce((e,t)=>e+t.x,0)/t.length,r=t.reduce((e,t)=>e+t.z,0)/t.length,a=(n-i)*this.flow[0]+(r-i)*this.flow[1]>=0?1:-1,o=this.flow[0]*a,s=this.flow[1]*a,c=0;for(;c<40&&n+o*c>-.01&&r+s*c>-.01&&n+o*c<e+.01&&r+s*c<e+.01;)c+=.25;let l=0;for(let e of t)l=Math.max(l,Math.abs((e.x-n)*-s+(e.z-r)*o));this.exits.push({x:n+o*c,z:r+s*c,dx:o,dz:s,w:Math.max(3,l*2+1.5)})}}inExitChannel(e,t){for(let n of this.exits){let r=(e-n.x)*n.dx+(t-n.z)*n.dz,i=Math.abs((e-n.x)*-n.dz+(t-n.z)*n.dx);if(r>-14&&r<=.9&&i<n.w/2)return!0}return!1}wallRelief(e,t,n,r,i){let a=this.style.wallHeight,o=i*i*(3-2*i);switch(e){case`forest`:case`jungle`:return o*o*(.3+1.25*Na(t*.055+3.1,n*.055+7.7,4))*a;case`snow`:return o*(.35+1.7*Na(t*.05+3.1,n*.05+7.7,4))*a;case`canyon`:case`basalt`:case`abyss`:{let i=Na(t*.09+1.3,n*.09-2.1,3),o=Na(t*.045+5.1,n*.045+2.7,4),s=Y(.1,1,r),c=Y(2.2,7.5,r),l=s*(e===`basalt`?1.1+.5*i:1.35+.55*i)+c*(e===`abyss`?1.6+2.6*o:1.3+2*o),u=e===`canyon`?.62:e===`basalt`?.5:.7,d=l/u;return l=(Math.floor(d)+Y(.55,1,d-Math.floor(d)))*u*.7+l*.3,l*a}}}computeHeight(e,t){let n=this.sample(this.lane,e,t),r=this.sample(this.wallWide,e,t),i=this.sample(this.wallDist,e,t),a=-.08+.1*Na(e*.11,t*.11,3);a=a*(1-n*.5)-n*.01;let o=Y(0,.9,i),s=this.townLift(e,t);i>.01&&(a+=this.wallRelief(this.style.wall,e,t,i,r)*o*(1-.8*s.band)+.5*s.band*o),(this.style.wall===`forest`||this.style.wall===`jungle`||this.style.wall===`snow`)&&i>.01&&(a+=.42*this.style.wallHeight*Y(.1,1.3,i)*(1-s.band)),a+=Io.height*(s.walk+(s.wall-s.walk)*o);let c=this.liquidKind,l=this.sample(this.liquid,e,t);if(c===`abyss`){let n=Y(.4,.6,l);if(n>0){let r=.25+.75*Y(0,2.6,this.sample(this.liquidDist,e,t));a=a*(1-n)-10.5*n*r**.8*(.9+.2*Na(e*.2,t*.2,2))}}else if(l>.001&&c!==`none`&&c!==`ice`){let r=this.sample(this.liquidDist,e,t),i=c===`lava`,o=.85+.3*Na(e*.3+11,t*.3-4,3),s=(i?.28:.55)*Y(.15,2.6,r)*o,u=this.cellIndex(e,t);u>=0&&this.map.terrain[u]===7&&(s+=.5*Y(.5,3,r)),s+=(Math.min(s,.15)-s)*Y(.35,.85,n);let d=this.level+.06-s-.05*Y(0,.08,s);a+=(d-a)*Y(.08,.6,l)}else c===`ice`&&l>.001&&(a+=(this.level-.25-a)*Y(.1,.6,l));for(let n of this.exits){let r=(e-n.x)*n.dx+(t-n.z)*n.dz,i=Math.abs((e-n.x)*-n.dz+(t-n.z)*n.dx);r>.2&&i<n.w/2+8&&(a=Math.max(a,Fo*Y(.7,2,r)*Y(n.w/2+8,n.w/2+3.5,i)+.4*Na(e*.3,t*.3,2)*Y(1.5,3,r)))}let u=this.sample(this.crust,e,t);u>.001&&(a-=.1*u);for(let n of this.craters){let r=Math.hypot(e-n.x,t-n.z)/n.r;r<1.35&&(a+=-.22*Y(1,.2,r)+.07*Y(.75,1,r)*Y(1.35,1,r))}return a}townLift(e,t){let n=0,r=0,i=0;for(let a of this.def.towns??[]){let o=Math.hypot(e-a.x,t-a.z);o>a.r+Io.band+Io.cliff+Io.ramp||(n=Math.max(n,1-Y(a.r-.3,a.r+Io.ramp,o)),r=Math.max(r,1-Y(a.r+Io.band,a.r+Io.band+Io.cliff,o)),i=Math.max(i,1-Y(a.r+Io.band-1.5,a.r+Io.band+.5,o)))}return{walk:n,wall:r,band:i}}inTown(e,t){for(let n of this.def.towns??[])if(Math.hypot(e-n.x,t-n.z)<n.r+.5)return!0;return!1}plateauAt(e,t){return Io.height*this.townLift(e,t).walk}townBandAt(e,t){for(let n of this.def.towns??[])if(Math.hypot(e-n.x,t-n.z)<n.r+Io.band+.8)return n;return null}sample(e,t,n){let r=this.mn,i=(t-this.min)*this.mres-.5,a=(n-this.min)*this.mres-.5,o=Math.max(0,Math.min(r-2,Math.floor(i))),s=Math.max(0,Math.min(r-2,Math.floor(a))),c=Math.max(0,Math.min(1,i-o)),l=Math.max(0,Math.min(1,a-s)),u=s*r+o,d=e[u]+(e[u+1]-e[u])*c;return d+(e[u+r]+(e[u+r+1]-e[u+r])*c-d)*l}heightAt(e,t){let n=this.hn,r=(e-this.min)*this.hres,i=(t-this.min)*this.hres,a=Math.max(0,Math.min(n-2,Math.floor(r))),o=Math.max(0,Math.min(n-2,Math.floor(i))),s=Math.max(0,Math.min(1,r-a)),c=Math.max(0,Math.min(1,i-o)),l=o*n+a,u=this.height,d=u[l]+(u[l+1]-u[l])*s;return d+(u[l+n]+(u[l+n+1]-u[l+n])*s-d)*c}liquidDepth(e,t){return this.liquidKind!==`water`&&this.liquidKind!==`lava`?0:Math.max(0,this.level-this.heightAt(e,t))}onIce(e,t){return this.sample(this.ice,e,t)>.5}hazardAt(e,t){let n=this.cellIndex(e,t);return n>=0?this.hazardCell[n]:0}addCanopy(e,t,n,r){let i=this.mn,a=this.mres,o=Math.max(0,Math.floor((e-n-this.min)*a)),s=Math.min(i-1,Math.ceil((e+n-this.min)*a)),c=Math.max(0,Math.floor((t-n-this.min)*a)),l=Math.min(i-1,Math.ceil((t+n-this.min)*a));for(let u=c;u<=l;u++){let c=this.min+(u+.5)/a;for(let l=o;l<=s;l++){let o=this.min+(l+.5)/a,s=Math.hypot(o-e,c-t)/n;if(s>=1)continue;let d=u*i+l;this.canopy[d]=this.canopy[d]*(1-(1-s*s)*r)}}}dataTexture(e){let t=this.mn,n=new me(e,t,t,ze,se);return n.magFilter=xe,n.minFilter=Ce,n.generateMipmaps=!0,n.wrapS=n.wrapT=je,n.needsUpdate=!0,n}buildMaskTextures(){let e=this.mn,t=new Uint8Array(e*e*4),n=new Uint8Array(e*e*4),r=new Uint8Array(e*e*4),i=e=>Math.max(0,Math.min(255,Math.round(e*255)));for(let a=0;a<e*e;a++)t[a*4]=i(this.lane[a]),t[a*4+1]=i(this.liquid[a]),t[a*4+2]=i(this.wall[a]),t[a*4+3]=i(this.pave[a]),n[a*4]=i(this.laneLat[a]/6),n[a*4+1]=i(this.canopy[a]),n[a*4+2]=i(this.camp[a]),n[a*4+3]=i(this.path[a]),r[a*4]=i(this.bush[a]),r[a*4+1]=i(this.crust[a]),r[a*4+2]=i(this.ice[a]),r[a*4+3]=i(this.crater[a]);return[this.dataTexture(t),this.dataTexture(n),this.dataTexture(r)]}buildHeightTexture(){let e=this.hn,t=new Uint16Array(e*e);for(let n=0;n<e*e;n++)t[n]=x.toHalfFloat(this.height[n]);let n=new me(t,e,e,ke,b);return n.magFilter=xe,n.minFilter=xe,n.wrapS=n.wrapT=je,n.needsUpdate=!0,n}},Vo=`
uniform float uTime;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uFoam;
uniform float uLava;
varying vec2 vUv;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  float sp = uLava > 0.5 ? 0.5 : 1.8;
  float flow = vUv.y * 5.0 - uTime * sp;
  float s = n(vec2(vUv.x * 11.0, flow)) * 0.55 + n(vec2(vUv.x * 27.0, flow * 1.8)) * 0.45;
  float streak = smoothstep(0.55, 0.8, n(vec2(vUv.x * 22.0, flow * 0.6)));
  vec3 c = mix(uA, uB, s * 0.8 + vUv.y * 0.2);
  float foam = streak * 0.55 + smoothstep(0.1, 0.0, vUv.y) * 0.7 + smoothstep(0.78, 1.0, vUv.y) * 0.9;
  c = mix(c, uFoam, clamp(foam, 0.0, 1.0));
  float edge = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
  float a = edge * (0.9 + 0.1 * s);
  gl_FragColor = vec4(c * (uLava > 0.5 ? 1.8 : 1.12), a);
}`,Ho=class{data;style;lights;high;group=new tt;time={value:0};flames;islands=[];mist=[];constructor(e,t,n,r){switch(this.data=e,this.style=t,this.lights=n,this.high=r,this.flames=new S({uniforms:{uTime:this.time,uColor:{value:new I(16752704).multiplyScalar(2.2)}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * vec2(1.0, 1.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uTime; uniform vec3 uColor; varying vec2 vUv; void main() { vec2 q = vUv * 2.0 - 1.0; q.y += 0.35; float w = 1.0 - q.y * 0.55; float fl = sin(uTime * 13.0 + vUv.y * 9.0) * 0.08 * vUv.y; float d = length(vec2((q.x + fl) / max(0.2, w * 0.6), (q.y + 0.2) * 0.75)); float a = smoothstep(1.0, 0.35, d); vec3 c = mix(uColor, vec3(3.0, 2.6, 1.6), smoothstep(0.7, 0.1, d)); gl_FragColor = vec4(c * a, a); }`,transparent:!0,depthWrite:!1,blending:2}),this.banners(),this.pitRuins(),this.crystals(),this.braziers(),this.decor(),t.key){case`verdant`:this.statues(),this.falls();break;case`desert`:this.arches(),this.obelisks(),this.falls();break;case`snow`:this.iceSpires();break;case`abyss`:this.chains(),this.floatingIslands(),this.runeLamps();break;case`jungle`:this.mushroomRing();break;case`volcanic`:this.lavaFalls(),this.volcanoes(),this.obelisks()}}lit(e,t,n=!1){let r=new P(e,ao(gi(new M({vertexColors:!0,flatShading:n}),t)));return r.castShadow=this.high,r.customDepthMaterial=si,r}wallSpot(e,t,n,r,i,a,o){let s=J(o);for(let o=0;o<60;o++){let o=s()*Math.PI*2,c=n+s()*(r-n),l=e+Math.cos(o)*c,u=t+Math.sin(o)*c,d=this.data.sample(this.data.wallDist,l,u);if(d>=i&&d<=a)return{x:l,z:u}}return null}banners(){let e=this.data,t=La([new R(.06,.08,3,6).translate(0,1.5,0),new fe(.13,8,6).translate(0,3.05,0),new N(.9,.06,.06).translate(.42,2.85,0)].map(e=>(e.deleteAttribute(`uv`),e)));Z(t,(e,t,n,r,i,a,o)=>o.copy(X(t>2.98?16765274:5913130)));let n=gi(new M({vertexColors:!0}),`pole`),r=new et(.78,1.6,2,8).translate(.45,2.04,0),i=[0,1].map(e=>{let t=st[e],n=new M({side:2}),r=new I(t.main),i=new I(t.light),a=new I(t.dark);return n.onBeforeCompile=e=>{e.uniforms.uTime=this.time,e.uniforms.uMain={value:r},e.uniforms.uLight={value:i},e.uniforms.uDark={value:a},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
varying vec2 vBUv;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
            vBUv = uv;
            float fl = (1.0 - uv.y) * 0.15 + (transformed.x - 0.06) * 0.25;
            vec2 ip = vec2(0.0);
#ifdef USE_INSTANCING
            ip = instanceMatrix[3].xz;
#endif
            transformed.z += sin(uTime * 3.2 + transformed.x * 4.0 + transformed.y * 1.5 + ip.x) * fl;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uMain;
uniform vec3 uLight;
uniform vec3 uDark;
varying vec2 vBUv;`).replace(`#include <color_fragment>`,`vec2 bu = vBUv;
            if (bu.y < 0.16 && abs(bu.x - 0.5) < (0.16 - bu.y) * 2.2) discard;
            vec3 bc = mix(uDark, uMain, smoothstep(0.0, 0.5, bu.y));
            float trim = step(bu.y, 0.95) * step(0.88, bu.y) + step(bu.x, 0.08) + step(0.92, bu.x);
            float emblem = 1.0 - smoothstep(0.13, 0.16, length((bu - vec2(0.5, 0.62)) * vec2(1.0, 1.6)));
            bc = mix(bc, vec3(1.0, 0.8, 0.3), clamp(trim, 0.0, 1.0));
            bc = mix(bc, uLight, emblem);
            diffuseColor.rgb = bc;`)},n.customProgramCacheKey=()=>`va-banner-${e}`,n}),a=[],o=[[],[]],s=new L,c=new C,l=new O(1,1,1),u=new O;for(let t of e.def.towers){let n=e.map.laneWaypoints(t.team,t.lane),r=1e9,i=1,d=0;for(let e=0;e<n.length-1;e++){let a=n[e],o=n[e+1],s=o.x-a.x,c=o.z-a.z,l=s*s+c*c;if(l<=0)continue;let u=Math.max(0,Math.min(1,((t.x-a.x)*s+(t.z-a.z)*c)/l)),f=Math.hypot(a.x+s*u-t.x,a.z+c*u-t.z);if(f<r){r=f;let e=Math.sqrt(l);i=s/e,d=c/e}}for(let n of[-1,1])for(let r of[-1.6,1.6]){let f=t.x-d*n*5.5+i*r,p=t.z+i*n*5.5+d*r;e.sample(e.wallDist,f,p)<.25||(c.setFromAxisAngle(new O(0,1,0),Math.atan2(-d,i)+(n>0?Math.PI:0)),s.compose(u.set(f,e.heightAt(f,p)-.05,p),c,l),a.push(s.clone()),o[t.team].push(s.clone()))}}if(a.length){let e=new E(t,n,a.length);a.forEach((t,n)=>e.setMatrixAt(n,t)),e.castShadow=this.high,e.computeBoundingSphere(),this.group.add(e)}o.forEach((e,t)=>{if(!e.length)return;let n=new E(r,i[t],e.length);e.forEach((e,t)=>n.setMatrixAt(t,e)),n.castShadow=this.high,n.computeBoundingSphere(),this.group.add(n)})}pillar(e,t){let n=J(t),r=this.style.stone,i=[new N(.95,.3,.95).translate(0,.15,0)],a=.3;for(;a<e;){let t=Math.min(e-a,.55+n()*.2);i.push(new R(.33,.35,t*.96,8,1).rotateY(n()).translate((n()-.5)*.04,a+t/2,(n()-.5)*.04)),a+=t}n()<.6&&i.push(new N(.8,.22,.8).rotateY(.3+n()).rotateZ((n()-.5)*.25).translate(0,a+.08,0));let o=La(i);o.computeVertexNormals();let s=this.style.key===`snow`?15791871:this.style.key===`volcanic`?3811878:this.style.key===`desert`?13148256:6527295;return Z(o,(e,n,i,a,o,c,l)=>{l.copy(X(r[2])).lerp(X(r[0]),.5).lerp(X(r[1]),.5+.5*Math.sin(n*7+e*3+t)),(o>.6||n<.7&&Math.sin(e*9+i*7)>.2)&&l.copy(X(s)).multiplyScalar(.85+.3*Math.sin(e*13+i*11))})}pits(){let e=[];for(let t of this.data.def.bosses)e.some(e=>Math.hypot(e.x-t.x,e.z-t.z)<2)||e.push({x:t.x,z:t.z});return e}pitRuins(){let e=J(4242),t=[this.pillar(2.4,1),this.pillar(1.5,2),this.pillar(3,3),this.pillar(.9,4)],n=t.map(()=>[]),r=new L;for(let i of this.pits())for(let a=0;a<11;a++){let o=a/11*Math.PI*2+e()*.2,s=7.6+e()*.6,c=i.x+Math.cos(o)*s,l=i.z+Math.sin(o)*s;if(this.data.sample(this.data.wallDist,c,l)<.45)continue;let u=.9+e()*.3;r.compose(new O(c,this.data.heightAt(c,l)-.1,l),new C().setFromEuler(new Le((e()-.5)*.12,e()*6.28,(e()-.5)*.12)),new O(u,u,u)),n[Math.floor(e()*t.length)].push(r.clone())}let i=ao(gi(new M({vertexColors:!0,flatShading:!0}),`pillar`));t.forEach((e,t)=>{if(!n[t].length)return;let r=new E(e,i,n[t].length);n[t].forEach((e,t)=>r.setMatrixAt(t,e)),r.castShadow=this.high,r.computeBoundingSphere(),this.group.add(r)})}crystals(){if(this.style.key===`desert`||this.style.key===`jungle`)return;let e=J(77),t=this.style.crystals.map(X).map((e,t)=>qa(10+t,e)),n=t.map(()=>[]),r=[...this.data.def.camps.map(e=>({x:e.x,z:e.z,n:2})),...this.pits().map(e=>({x:e.x,z:e.z,n:3}))],i=new L;for(let a of r){let r=0;for(let o=0;o<60&&r<a.n;o++){let o=e()*Math.PI*2,s=4.5+e()*4.5,c=a.x+Math.cos(o)*s,l=a.z+Math.sin(o)*s,u=this.data.sample(this.data.wallDist,c,l);if(u<.5||u>1.8)continue;let d=.8+e()*.6,f=Math.floor(e()*t.length);i.compose(new O(c,this.data.heightAt(c,l)-.05,l),new C().setFromAxisAngle(new O(0,1,0),e()*6.28),new O(d,d,d)),n[f].push(i.clone()),this.lights.add(c,l,4*d,this.style.crystals[f],.85,1.2),r++}}let a=new j({vertexColors:!0});a.color.setScalar(2.4),t.forEach((e,t)=>{if(!n[t].length)return;let r=new E(e,a,n[t].length);n[t].forEach((e,t)=>r.setMatrixAt(t,e)),r.computeBoundingSphere(),this.group.add(r)})}brazier(e,t,n=16752704){let r=this.style.stone,i=new Ge([[0,0],[.3,0],[.22,.12],[.12,.8],[.45,.95],[.5,1.12],[.38,1.1],[0,1]].map(([e,t])=>new D(e,t)),10);Z(i,(e,t,n,i,a,o,s)=>s.copy(X(r[0])).lerp(X(3811874),t>.9?.6:.2).multiplyScalar(a<-.3?.6:1));let a=this.data.heightAt(e,t),o=this.lit(i,`brazier`);o.position.set(e,a-.05,t);let s=new P(new et(.75,1.1),this.flames);s.position.set(e,a+1.45,t),s.frustumCulled=!0,this.group.add(o,s),this.lights.add(e,t,5.5,n,1,1.7,9)}braziers(){for(let e of[0,1]){let t=this.data.def.cores[e],n=J(e*17+5),r=0;for(let e=0;e<40&&r<4;e++){let i=e/40*Math.PI*2*3+n(),a=5+n()*2,o=t.x+Math.cos(i)*a,s=t.z+Math.sin(i)*a;this.data.map.isOpenGround(o,s)&&this.data.map.terrainAt(o,s)!==2&&(this.data.def.fountains.some(e=>Math.hypot(e.x-o,e.z-s)<3.5)||(this.brazier(o,s),r++))}}}decor(){for(let e of this.data.def.decor??[]){let t=e.scale??1,n=this.data.heightAt(e.x,e.z);if(e.kind===`brazier`)this.brazier(e.x,e.z);else if(e.kind===`crystal`){let r=this.style.crystals[0],i=new P(qa(31,X(r),1.4*t),new j({vertexColors:!0,color:new I(2.2,2.2,2.2)}));i.position.set(e.x,n-.05,e.z),this.group.add(i),this.lights.add(e.x,e.z,5*t,r,1,1.5)}else if(e.kind===`ruin`||e.kind===`statue`){let r=this.lit(this.pillar(2.2*t,9),`pillar1`,!0);r.position.set(e.x,n-.1,e.z),r.rotation.y=e.rot??0,this.group.add(r)}else if(e.kind===`rock`){let r=this.style.rock,i=this.lit(Ya(5,r[0],r[1],r[3],r[2]),`decorrock`,!0);i.position.set(e.x,n-.1,e.z),i.scale.setScalar(t),this.group.add(i)}}}statues(){let e=this.style.stone,t=[new N(2.2,.6,2.2).translate(0,.3,0),new N(1.8,.4,1.8).translate(0,.8,0),new R(.55,1,2.6,8).translate(0,2.3,0),new fe(.62,10,8).scale(1,1.1,1).translate(0,4,.05),new R(.75,.6,.5,8).translate(0,3.45,0),new N(.18,3,.08).translate(0,2.3,.85),new N(.9,.12,.14).translate(0,3.9,.85),new R(.08,.08,.6,6).translate(0,4.2,.85)];for(let e of[-1,1])t.push(new Be(.18,1.1,3,8).rotateX(-.5).translate(e*.45,3.35,.55));let n=La(t);n.computeVertexNormals(),Z(n,(t,n,r,i,a,o,s)=>{s.copy(X(e[2])).lerp(X(e[0]),.6).lerp(X(e[1]),.3+.2*Math.sin(n*3+t)),(a>.55||n<1.2&&Math.sin(t*7+r*5)>0)&&s.copy(X(6067266)).multiplyScalar(.8+.3*Math.sin(t*11+r*9))});for(let[e,t]of this.pits().entries()){let r=this.wallSpot(t.x,t.z,8,12,1.2,4,300+e);if(!r)continue;let i=this.lit(n,`statue`,!0);i.position.set(r.x,this.data.heightAt(r.x,r.z)-.2,r.z),i.rotation.y=Math.atan2(t.x-r.x,t.z-r.z),i.scale.setScalar(1.05),this.group.add(i),this.lights.add(r.x,r.z,4,this.style.accent,.6,1)}}arches(){let e=this.style.rock,t=J(808),n=0;for(let r=0;r<300&&n<4;r++){let r=8+t()*(this.data.size-16),i=8+t()*(this.data.size-16),a=this.data.sample(this.data.wallDist,r,i);if(a<2.5||a>6)continue;let o=t()*Math.PI,s=5+t()*2,c=Math.cos(o)*s/2,l=Math.sin(o)*s/2;if(this.data.sample(this.data.wallDist,r+c,i+l)<1.2||this.data.sample(this.data.wallDist,r-c,i-l)<1.2)continue;let u=new le(s/2,.75,8,16,Math.PI),d=u.getAttribute(`position`);for(let e=0;e<d.count;e++)d.setXYZ(e,d.getX(e)*(1+.08*Math.sin(d.getY(e)*3)),d.getY(e)*1.15,d.getZ(e)*(1.2+.2*Math.sin(d.getX(e)*2)));u.computeVertexNormals(),Z(u,(t,n,r,i,a,o,s)=>{let c=Math.floor(n*2.4)%3;s.copy(X(e[0])).lerp(X(e[1]),c===0?.35:c===1?.75:1).lerp(X(e[2]),c===2?.4:0),a>.75&&s.copy(X(this.style.floor[1]))});let f=this.lit(u,`arch`,!0);f.position.set(r,this.data.heightAt(r,i)+.6,i),f.rotation.y=-o,this.group.add(f),n++}}obelisks(){let e=this.style.key===`volcanic`?this.style.rock:this.style.stone,t=La([new R(.3,.55,4.2,4,1).rotateY(Math.PI/4).translate(0,2.1,0),new Ne(.42,.7,4).rotateY(Math.PI/4).translate(0,4.55,0)]);t.computeVertexNormals(),Z(t,(t,n,r,i,a,o,s)=>s.copy(X(e[0])).lerp(X(e[1]),n/5).lerp(X(this.style.accent),n>4.3?.8:0));for(let[e,n]of this.pits().entries())for(let r=0;r<2;r++){let i=this.wallSpot(n.x,n.z,7,10,.6,2.5,500+e*7+r);if(!i)continue;let a=this.lit(t,`obelisk`,!0);a.position.set(i.x,this.data.heightAt(i.x,i.z)-.1,i.z),this.group.add(a),this.lights.add(i.x,i.z,3.5,this.style.accent,.6,4.5)}}falls(){if(this.data.liquidKind!==`water`)return;let e=this.style.liquidTones;for(let t of this.data.exits.slice(0,4))this.fall(t.x+t.dx*.55,t.z+t.dz*.55,t.dx,t.dz,t.w,Fo-this.data.level,!1,e[1],e[0],e[3])}fall(e,t,n,r,i,a,o,s,c,l){let u=[],d=[],f=-r,p=n;for(let o=0;o<=14;o++){let s=o/14,c=1.4*(1-Math.sqrt(s))+.1,l=a*(1-s)*(1-.15*s),m=i/2*(1+.12*s);for(let i of[-1,1])u.push(e+n*c+f*i*m,this.data.level+l,t+r*c+p*i*m),d.push(i<0?0:1,s)}let m=[];for(let e=0;e<14;e++)m.push(e*2,e*2+1,e*2+2,e*2+1,e*2+3,e*2+2);let h=new F;h.setAttribute(`position`,new k(u,3)),h.setAttribute(`uv`,new k(d,2)),h.setIndex(m);let g=new S({uniforms:{uTime:this.time,uA:{value:new I(s)},uB:{value:new I(c)},uFoam:{value:new I(l)},uLava:{value:+!!o}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:Vo,transparent:!0,depthWrite:!1,side:2,forceSinglePass:!0,blending:o?2:1}),_=new P(h,g);_.renderOrder=2,this.group.add(_);let v=this.style.rock,y=Ya(66,v[0],v[1],this.style.floor[1],this.style.floor[2]);for(let a of[-1,1])for(let o=0;o<2;o++){let s=this.lit(y,`fallrock`,!0),c=1.2+o*1.3,l=i/2+.5+o*.9,u=e+n*c+f*a*l,d=t+r*c+p*a*l;s.position.set(u,this.data.heightAt(u,d)-.2,d),s.scale.set(1.3-o*.3,1.1+o*.4,1.2),s.rotation.y=o*1.7+a,this.group.add(s)}let b=new P(new Oe(1,28).rotateX(-Math.PI/2),new S({uniforms:{uTime:this.time,uColor:{value:o?new I(l).multiplyScalar(2.2):new I(l)}},vertexShader:`varying vec2 vP; void main() { vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uColor; varying vec2 vP; float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); } float n(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); } void main() { float r = length(vP); float rings = n(vec2(r * 7.0 - uTime * 2.2, atan(vP.y, vP.x) * 3.0)); float a = smoothstep(1.0, 0.35, r) * smoothstep(0.35, 0.65, rings + (1.0 - r) * 0.35); gl_FragColor = vec4(uColor, a * 0.85); }`,transparent:!0,depthWrite:!1,blending:o?2:1}));b.position.set(e-n*.4,this.data.level+.03,t-r*.4),b.scale.set(i*.6,1,i*.6),b.renderOrder=2,this.group.add(b),this.mist.push({x:e-n*.3,z:t-r*.3,w:i,lava:o}),o&&this.lights.add(e,t,7,this.style.liquidGlow,1.4,1.5,2)}lavaFalls(){let e=this.data,t=J(919),n=this.style.liquidTones,r=[];for(let n=0;n<2e3&&r.length<3;n++){let n=4+t()*(e.size/2),i=4+t()*(e.size-8);if(!(e.sample(e.liquid,n,i)<.7||e.liquidDepth(n,i)<.1))for(let[t,a]of[[0,-1],[-1,0],[1,0],[0,1]]){let o=n+t*3.5,s=i+a*3.5;if(e.sample(e.wallDist,o,s)>1.4&&e.heightAt(o,s)>1.2&&!r.some(e=>Math.hypot(e.x-n,e.z-i)<12)){r.push({x:n+t*1.2,z:i+a*1.2,dx:t,dz:a});break}}}let i=e.size;for(let t of[...r,...r.map(e=>({x:i-e.x,z:i-e.z,dx:-e.dx,dz:-e.dz}))])this.fall(t.x,t.z,t.dx,t.dz,2.4,Math.max(1.5,e.heightAt(t.x+t.dx*2.5,t.z+t.dz*2.5)-e.level),!0,n[1],n[0],n[0])}volcanoes(){let e=this.data,t=this.style.rock,n=[{x:-14,z:-12,s:1.4},{x:e.size+14,z:e.size+12,s:1.4},{x:e.size+10,z:-16,s:1},{x:-10,z:e.size+16,s:1}];for(let e of n){let n=[];for(let e=0;e<=12;e++){let t=e/12;n.push(new D(14*(1-t)+3.2*t+1.2*Math.sin(t*9),t*12))}n.push(new D(2.4,11.4));let r=new Ge(n,24),i=r.getAttribute(`position`);for(let e=0;e<i.count;e++){let t=Math.atan2(i.getZ(e),i.getX(e)),n=1+.08*Math.sin(t*5+i.getY(e))+.05*Math.sin(t*11);i.setX(e,i.getX(e)*n),i.setZ(e,i.getZ(e)*n)}r.computeVertexNormals(),Z(r,(e,n,r,i,a,o,s)=>{s.copy(X(t[0])).lerp(X(t[1]),.3+.4*Math.sin(n*1.3+Math.atan2(r,e)*3)*.5+.2),Math.sin(Math.atan2(r,e)*7+n*.5)>.93&&n>4&&s.copy(X(16738848)).multiplyScalar(1.6),n>11&&s.copy(X(16747056)).multiplyScalar(2)});let a=this.lit(r,`volcano`);a.castShadow=!1,a.position.set(e.x,-1,e.z),a.scale.setScalar(e.s),this.group.add(a),this.lights.add(e.x,e.z,14*e.s,16734746,1.2,10)}}iceSpires(){let e=new j({vertexColors:!0,color:new I(1.7,1.7,1.7)}),t=J(1201);[...this.pits(),...this.data.def.camps.filter((e,t)=>t%2==0)].forEach((n,r)=>{let i=this.wallSpot(n.x,n.z,6,11,1.2,4,900+r);if(!i)return;let a=this.style.crystals[r%this.style.crystals.length],o=new P(qa(1300+r,X(a),2.4+t()*.8),e);o.position.set(i.x,this.data.heightAt(i.x,i.z)-.2,i.z),o.rotation.y=t()*6,this.group.add(o),this.lights.add(i.x,i.z,7,a,1.1,2.5,.6)})}chains(){let e=this.data,t=new le(.28,.08,6,10);Z(t,(e,t,n,r,i,a,o)=>o.copy(X(4866648)).lerp(X(13148240),Math.max(0,i)*.5));let n=[],r=[],i=e.def.lanes[0];if(!i)return;let a=i.waypoints[0],o=a.length;for(let t of[.2,.5,.8]){let i=Math.min(o-2,Math.floor(t*(o-1))),s=a[i],c=a[i+1],l=c.x-s.x,u=c.z-s.z,d=Math.hypot(l,u)||1,f=-u/d,p=l/d;for(let t of[-1,1]){let i=(s.x+c.x)/2,a=(s.z+c.z)/2,o=i,l=a;for(let n=0;n<40;n++){let r=i+f*t*n*.25,s=a+p*t*n*.25;if(e.kindAt(r,s)===7)break;o=r,l=s}let u=new O(o,.4,l),d=new O(o+f*t*9,-1.5,l+p*t*9-3),m=new ge(u,new O((u.x+d.x)/2,-4.5,(u.z+d.z)/2),d),h=m.getLength(),g=Math.floor(h/.42);for(let e=0;e<g;e++){let t=m.getPointAt(e/g),r=m.getTangentAt(e/g),i=new C().setFromUnitVectors(new O(1,0,0),r);i.multiply(new C().setFromAxisAngle(new O(1,0,0),e%2?Math.PI/2:0)),n.push(new L().compose(t,i,new O(1,1,1)))}let _=this.lit(La([new R(.35,.45,1,8).translate(0,.5,0),new fe(.3,8,6).translate(0,1.1,0)].map(e=>Z(e,(e,t,n,r,i,a,o)=>o.copy(X(5918832)).lerp(X(15251536),t>.95?.8:0)))),`anchor`);_.position.set(o,e.heightAt(o,l)-.05,l),r.push(_)}}let s=gi(new M({vertexColors:!0}),`chain`);if(n.length){let e=new E(t,s,n.length);n.forEach((t,n)=>e.setMatrixAt(n,t)),e.computeBoundingSphere(),e.castShadow=this.high,this.group.add(e)}for(let e of r)this.group.add(e)}floatingIslands(){let e=this.data,t=J(4400),n=this.style.rock,r=new j({vertexColors:!0,color:new I(2.2,2.2,2.2)}),i=0;for(let a=0;a<400&&i<9;a++){let o=e.min+6+t()*(e.world-12),s=e.min+6+t()*(e.world-12);if(e.heightAt(o,s)>-6||e.sample(e.liquidDist,o,s)<4||this.islands.some(e=>Math.hypot(e.mesh.position.x-o,e.mesh.position.z-s)<10))continue;let c=new tt,l=new Ne(1.8+t(),3.2+t()*2,7,3).rotateX(Math.PI),u=l.getAttribute(`position`);for(let e=0;e<u.count;e++)u.setXYZ(e,u.getX(e)*(.85+t()*.3),u.getY(e),u.getZ(e)*(.85+t()*.3));let d=l.toNonIndexed();d.computeVertexNormals(),Z(d,(e,t,r,i,a,o,s)=>{s.copy(X(n[0])).lerp(X(n[1]),.5+t*.12),a>.6&&s.copy(X(this.style.ground[1]))}),c.add(this.lit(d,`island`,!0));let f=Ra([{x:0,y:.1,z:0,r:1.5}],1,[X(this.style.ground[0]),X(this.style.ground[1]),X(this.style.ground[2]),X(16777215)],a,0,.3);c.add(this.lit(f,`islandtop`));let p=this.style.crystals[i%this.style.crystals.length],m=new P(qa(4500+a,X(p),1.2),r);m.position.y=.2,c.add(m);let h=-2.5-t()*2.5;c.position.set(o,h,s),c.scale.setScalar(.8+t()*.6),this.group.add(c),this.islands.push({mesh:c,y:h,ph:t()*6}),i++}}runeLamps(){let e=this.data,t=e.def.lanes[0];if(!t)return;let n=t.waypoints[0],r=La([new R(.1,.14,1.6,6).translate(0,.8,0),new R(.22,.16,.18,6).translate(0,1.6,0)]);Z(r,(e,t,n,r,i,a,o)=>o.copy(X(4866656)).lerp(X(15251536),t>1.5?.7:0));let i=new j({color:new I(this.style.accent).multiplyScalar(2.4),toneMapped:!1}),a=0;for(let t=0;t<n.length-1;t++){let o=n[t],s=n[t+1],c=Math.hypot(s.x-o.x,s.z-o.z),l=-(s.z-o.z)/c,u=(s.x-o.x)/c;for(let t=0;t<c;t+=1){if(a+=1,a%7!=0)continue;let n=o.x+(s.x-o.x)*t/c,d=o.z+(s.z-o.z)*t/c;for(let t of[-1,1]){let a=n,o=d;for(let r=0;r<40;r++){let i=n+l*t*r*.25,s=d+u*t*r*.25;if(e.kindAt(i,s)===7)break;a=i,o=s}a-=l*t*.35,o-=u*t*.35;let s=this.lit(r,`lamp`);s.position.set(a,e.heightAt(a,o)-.05,o);let c=new P(new ne(.17,1),i);c.position.set(a,e.heightAt(a,o)+1.85,o),this.group.add(s,c),this.lights.add(a,o,3.5,this.style.accent,.8,1.9,1.2)}}}}mushroomRing(){let e=new j({vertexColors:!0,color:new I(2,2,2)}),t=[8010432,2788032,12602010],n=[10152191,13672703,8060880],r=J(77);for(let[i,a]of this.pits().entries())for(let o=0;o<5;o++){let s=this.wallSpot(a.x,a.z,9,13,1.6,4.5,2e3+i*31+o);if(!s)continue;let[c,l]=Wa(3e3+o,X(t[o%3]),X(n[o%3]),1.05+r()*.35),u=this.lit(c,`giantshroom`),d=new P(l,e),f=this.data.heightAt(s.x,s.z)-.1;u.position.set(s.x,f,s.z),d.position.copy(u.position),u.rotation.y=d.rotation.y=r()*6,this.group.add(u,d),this.lights.add(s.x,s.z,7,n[o%3],1,3.5,.7)}}update(e,t,n=1/0){this.time.value=e;for(let r of this.islands){let i=r.mesh.position;t&&Math.abs(i.x-t.x)+Math.abs(i.z-t.z)>n*1.4||(i.y=r.y+Math.sin(e*.5+r.ph)*.35)}}},Uo={verdant:{stone:12762286,stoneDark:8748914,trim:6986312,plaster:15655622,timber:6965808,roof:11819066,roofTeam:.45,roofKind:`gable`,snow:!1,palisade:!1,window:3817298,lit:!1,cones:!0},desert:{stone:14729100,stoneDark:11041358,trim:16048828,plaster:15585954,timber:9067060,roof:14200954,roofTeam:.6,roofKind:`flat`,snow:!1,palisade:!1,window:4861984,lit:!1,cones:!1},snow:{stone:9213620,stoneDark:5791870,trim:15922943,plaster:11056332,timber:4864562,roof:5925516,roofTeam:.5,roofKind:`gable`,snow:!0,palisade:!1,window:16760944,lit:!0,cones:!0},volcanic:{stone:4866116,stoneDark:2235424,trim:16738852,plaster:5917768,timber:2760740,roof:3024424,roofTeam:.35,roofKind:`flat`,snow:!1,palisade:!1,window:16747056,lit:!0,cones:!1},jungle:{stone:8018490,stoneDark:4863008,trim:10123844,plaster:13808770,timber:5913122,roof:11569728,roofTeam:.3,roofKind:`thatch`,snow:!1,palisade:!0,window:16765056,lit:!0,cones:!0},abyss:{stone:6446212,stoneDark:3420238,trim:15251536,plaster:7498900,timber:3814480,roof:4076130,roofTeam:.4,roofKind:`gable`,snow:!1,palisade:!1,window:14192895,lit:!0,cones:!0}},Wo=class{pos=[];nor=[];col=[];m=new L;nm=new He;v=new O;c=new I;add(e,t,n,r,i,a){let o=e.index?e.toNonIndexed():e;o.getAttribute(`normal`)||o.computeVertexNormals(),this.m.makeRotationY(i).setPosition(t,n,r),this.nm.getNormalMatrix(this.m);let s=o.getAttribute(`position`),c=o.getAttribute(`normal`);typeof a==`number`&&this.c.set(a);for(let e=0;e<s.count;e++)typeof a!=`number`&&a(s.getX(e),s.getY(e),s.getZ(e),c.getY(e),this.c),this.v.set(s.getX(e),s.getY(e),s.getZ(e)).applyMatrix4(this.m),this.pos.push(this.v.x,this.v.y,this.v.z),this.v.set(c.getX(e),c.getY(e),c.getZ(e)).applyMatrix3(this.nm).normalize(),this.nor.push(this.v.x,this.v.y,this.v.z),this.col.push(this.c.r,this.c.g,this.c.b)}get empty(){return this.pos.length===0}geometry(){let e=new F;return e.setAttribute(`position`,new k(this.pos,3)),e.setAttribute(`normal`,new k(this.nor,3)),e.setAttribute(`color`,new k(this.col,3)),e.computeBoundingSphere(),e}};function Go(e,t,n,r=.18){let i=-e/2-r,a=e/2+r,o=-t/2-r,s=t/2+r,c=[],l=(e,t,n,r)=>void c.push(...e,...t,...n,...e,...n,...r),u=(e,t,n)=>void c.push(...e,...t,...n);l([i,0,o],[i,n,0],[a,n,0],[a,0,o]),l([a,0,s],[a,n,0],[i,n,0],[i,0,s]),u([i,0,s],[i,n,0],[i,0,o]),u([a,0,o],[a,n,0],[a,0,s]);let d=new F;return d.setAttribute(`position`,new k(c,3)),d.computeVertexNormals(),d}var Ko={0:3109600,1:13125166},Q=(e,t,n)=>new I(e).lerp(new I(t),n).getHex(),qo=class{data;lights;high;group=new tt;look;flames;flameSpots=[];constructor(e,t,n,r,i){this.data=e,this.lights=n,this.high=r,this.look=Uo[t.key]??Uo.verdant,this.flames=new S({uniforms:{uTime:i,uColor:{value:new I(t.key===`abyss`?12611839:16752704).multiplyScalar(2.2)}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uTime; uniform vec3 uColor; varying vec2 vUv; void main() { vec2 q = vUv * 2.0 - 1.0; q.y += 0.35; float w = 1.0 - q.y * 0.55; float fl = sin(uTime * 13.0 + vUv.y * 9.0) * 0.08 * vUv.y; float d = length(vec2((q.x + fl) / max(0.2, w * 0.6), (q.y + 0.2) * 0.75)); float a = smoothstep(1.0, 0.35, d); vec3 c = mix(uColor, vec3(3.0, 2.6, 1.6), smoothstep(0.7, 0.1, d)); gl_FragColor = vec4(c * a, a); }`,transparent:!0,depthWrite:!1,blending:2});for(let t of e.def.towns??[])this.build(t)}h(e,t){return this.data.heightAt(e,t)}inside(e,t,n=1.2){let r=this.data.size;return e>n&&t>n&&e<r-n&&t<r-n}build(e){let t=new Wo,n=new Wo,r=st[e.team],i=this.look,a=J(e.team*7919+Math.round(e.r*13)),o=e.r+1.25,s=1.5/o,c=[];for(let t=0;t<Math.PI*2;t+=s){let n=e.x+Math.cos(t)*o,r=e.z+Math.sin(t)*o;if(!this.inside(n,r,1.6))continue;let i=this.data.map.isWalkable(n,r)||this.data.sample(this.data.wallDist,n,r)<.6;c.push({a:t,x:n,z:r,open:i})}let l=[],u=[];for(let e=0;e<c.length;e++){let t=c[e],n=c[e-1],r=n&&Math.abs(t.a-n.a-s)<s*.1;(t.open||!r)&&(u.length&&l.push(u),u=[]),t.open||u.push(t)}if(u.length&&l.push(u),l.length>1){let e=l[0],t=l[l.length-1];e[0].a<s*.5&&t[t.length-1].a>Math.PI*2-s*1.5&&(l[0]=[...t,...e],l.pop())}let d=e=>c.some(t=>t.open&&Math.abs((t.a-e+Math.PI*3)%(Math.PI*2)-Math.PI)<s*1.5);for(let e=l.length-1;e>=0;e--){let t=l[e];t.length<4&&d(t[0].a-s)&&d(t[t.length-1].a+s)&&l.splice(e,1)}let f=i.palisade?2.4:2.1,p=(o,s,c)=>{let l=Math.min(this.h(o,s),this.h(o+.8,s),this.h(o-.8,s),this.h(o,s+.8),this.h(o,s-.8)),u=c?1.15:.95,d=f+(c?2.6:1),p=l-.5;if(i.palisade)t.add(new R(u*.9,u,d+.5,8).translate(0,(d+.5)/2,0),o,p,s,0,(e,t,n,r,a)=>a.set(Q(i.stone,i.stoneDark,t%.6<.1?.6:.1+.15*Math.sin(t*9)))),t.add(new Ne(u*1.3,1.1,8).translate(0,d+.5+.55,0),o,p,s,0,(t,n,r,a,o)=>o.set(a>0?Q(i.roof,Ko[e.team],.7):i.timber));else if(t.add(new R(u,u*1.08,d,10).translate(0,d/2,0),o,p,s,0,(e,t,n,r,a)=>{let o=Math.floor(t*2.2+.5*Math.floor((Math.atan2(n,e)+3.2)*2.5));a.set(Q(i.stone,i.stoneDark,o%2?.18:.04)),t<.6&&a.set(Q(i.stone,i.stoneDark,.45))}),t.add(new R(u*1.18,u*1.18,.22,10).translate(0,d+.11,0),o,p,s,0,i.trim===16738852?i.stoneDark:Q(i.stone,i.trim,.2)),i.cones)t.add(new Ne(u*1.3,1.5,10).translate(0,d+.22+.75,0),o,p,s,0,(t,n,r,a,o)=>o.set(i.snow&&n>d+.9?16186111:Q(Ko[e.team],i.roof,.15))),t.add(new N(.04,.9,.04).translate(0,d+2.1,0),o,p,s,0,4864554),t.add(new N(.55,.3,.03).translate(.29,d+2.4,0),o,p,s,a()*6.28,r.main);else{for(let e=0;e<6;e++){let n=e/6*Math.PI*2;t.add(new N(.42,.38,.32).rotateY(-n).translate(Math.cos(n)*u*1.05,d+.4,Math.sin(n)*u*1.05),o,p,s,0,Q(i.stone,i.stoneDark,.1))}i.trim===16738852&&n.add(new R(u*1.01,u*1.01,.08,10).translate(0,d*.55,0),o,p,s,0,16738852),t.add(new N(.05,1.2,.05).translate(0,d+.8,0),o,p,s,0,4864554),t.add(new N(.62,.36,.03).translate(.32,d+1.2,0),o,p,s,a()*6.28,r.main)}return p+d},m=[];for(let e of l)for(let r=0;r<e.length;r++){let a=e[r],o=-a.a,s=Math.min(this.h(a.x,a.z),this.h(a.x+Math.cos(a.a+Math.PI/2)*.8,a.z+Math.sin(a.a+Math.PI/2)*.8),this.h(a.x-Math.cos(a.a+Math.PI/2)*.8,a.z-Math.sin(a.a+Math.PI/2)*.8))-.45,c=f+.45;if(i.palisade)for(let e=-1;e<=1;e++){let n=c+.25*Math.sin(r*3.1+e*1.7),l=new R(.25,.27,n,6).translate(0,n/2,e*.5);t.add(l,a.x,s,a.z,o,(t,n,a,o,s)=>s.set(Q(i.stone,i.stoneDark,.2+.25*Math.sin(n*5+r+e)))),t.add(new Ne(.26,.45,6).translate(0,n+.22,e*.5),a.x,s,a.z,o,Q(i.stone,15257760,.3))}else{t.add(new N(1.25,c,1.56).translate(0,c/2,0),a.x,s,a.z,o,(e,t,n,r,a)=>{let o=Math.floor((t+.2)*2.6),s=Math.floor(n*1.6+o%2*.5);a.set(Q(i.stone,i.stoneDark,(o*7+s*3)%5*.05+(t<.75?.35:0))),r>.9&&a.set(Q(i.stone,i.trim,i.trim===16738852?0:.25))});for(let e of[-.45,.45])t.add(new N(.34,.5,.48).translate(-.48,c+.25,e),a.x,s,a.z,o,Q(i.stone,i.stoneDark,.08));t.add(new N(.24,.32,1.56).translate(.55,c+.16,0),a.x,s,a.z,o,Q(i.stone,i.stoneDark,.18)),i.snow&&r%3==1&&t.add(new N(.95,.12,1.5).translate(0,c+.06,0),a.x,s,a.z,o,16054527),i.trim===16738852&&r%2==1&&n.add(new N(.87,.07,1.2).translate(0,c*.45+.15*Math.sin(r),0),a.x,s,a.z,o,16738852)}r===0||r===e.length-1?m.push({x:a.x,z:a.z,top:0,a:a.a}):r%9==0&&e.length-r>4&&p(a.x,a.z,!1)}for(let e of m)e.top=p(e.x,e.z,!0);let h=new Set;for(let a of e.gates){let o=-1,s=1/0,c=-1,l=1/0;if(m.forEach((e,t)=>{let n=Math.hypot(e.x-a.x,e.z-a.z);n<s?(c=o,l=s,o=t,s=n):n<l&&(c=t,l=n)}),o<0||c<0||h.has(o)||h.has(c))continue;let u=m[o],d=m[c],f=Math.hypot(u.x-d.x,u.z-d.z);if(f>24||f<2)continue;h.add(o),h.add(c);let p=Math.atan2(-(d.z-u.z),d.x-u.x);for(let o of[u,d]){n.add(new Fe(.45,0).scale(1,1.35,1),o.x,o.top+(i.cones?2:1),o.z,p,r.light);let s=e.x-o.x,c=e.z-o.z,l=Math.hypot(s,c)||1,d=o.x+s/l*1.9,f=o.z+c/l*1.9;if(this.data.map.isWalkable(d,f)&&Math.hypot(d-a.x,f-a.z)<3)continue;this.brazier(t,d,f);let m=o.x+s/l*1.1+(u===o?1:-1)*Math.cos(-p)*.2,h=o.z+c/l*1.1,g=this.h(m,h)-.1;t.add(new R(.07,.09,4.2,6).translate(0,2.1,0),m,g,h,0,5914672),t.add(new N(.85,2.1,.05).translate(.45,2.9,0),m,g,h,p+(u===o?0:Math.PI),(e,t,n,i,a)=>a.set(t>3.75?15253600:t<2?r.light:r.main))}}this.houses(t,n,e,a),this.keep(t,n,e);let g=ao(gi(new M({vertexColors:!0}),`town`)),_=new P(t.geometry(),g);if(_.castShadow=this.high,_.receiveShadow=!0,_.customDepthMaterial=si,this.group.add(_),!n.empty){let e=new P(n.geometry(),new j({vertexColors:!0,toneMapped:!1,color:new I(1.7,1.7,1.7)}));this.group.add(e)}if(this.flameSpots.length){let e=new et(.75,1.1);for(let t of this.flameSpots.splice(0)){let n=new P(e,this.flames);n.position.set(t.x,t.y,t.z),n.scale.setScalar(t.s),this.group.add(n)}}}brazier(e,t,n){let r=this.look,i=this.h(t,n),a=new Ge([[0,0],[.3,0],[.22,.12],[.12,.8],[.45,.95],[.5,1.12],[.38,1.1],[0,1]].map(([e,t])=>new D(e,t)),10);e.add(a,t,i-.05,n,0,(e,t,n,i,a)=>a.set(Q(r.stoneDark,3811874,t>.9?.6:.2)).multiplyScalar(i<-.3?.6:1)),this.flameSpots.push({x:t,y:i+1.45,z:n,s:1}),this.lights.add(t,n,5.5,this.look.trim===15251536?12611839:16752704,1,1.7,9)}houses(e,t,n,r){let i=[],a=this.data;this.litWindows=0;let o=a.size,s=new Uint8Array(o*o);for(let c=3;c<o-3;c++)for(let l=3;l<o-3;l++){let u=c*o+l;if(s[u]||a.map.terrain[u]!==0||Math.hypot(l+.5-n.x,c+.5-n.z)>n.r-1.2)continue;let d=[u];s[u]=1;let f=0,p=0;for(let e=0;e<d.length;e++){let t=d[e],n=t%o,r=t/o|0;f+=n+.5,p+=r+.5;for(let e of[t+1,t-1,t+o,t-o]){let t=e%o,n=e/o|0;t<3||n<3||t>=o-3||n>=o-3||s[e]||a.map.terrain[e]!==0||(s[e]=1,d.push(e))}}if(d.length<8||d.length>80)continue;let m=f/d.length,h=p/d.length,g=Math.sqrt(d.length/Math.PI),_=g*1.25,v=Math.atan2(-(n.x-m),-(n.z-h));i.push({x:m,z:h,rad:g+.5}),this.house(e,t,n,r,m,h,_*(1+r()*.15),_*(.85+r()*.15),v,1.6+r()*.8)}for(let o=n.r+2.6;o<n.r+Io.band-.6;o+=2.3){let s=3.3/o;for(let c=r()*s;c<Math.PI*2;c+=s*(.9+r()*.4)){let s=n.x+Math.cos(c)*o,l=n.z+Math.sin(c)*o;if(!this.inside(s,l,1.5))continue;let u=1.9+r()*1.3,d=1.7+r()*1,f=Math.max(u,d)*.62;if(a.sample(a.wallDist,s,l)<f+.3||i.some(e=>Math.hypot(e.x-s,e.z-l)<e.rad+f+.35))continue;let p=Math.atan2(-(n.x-s),-(n.z-l)),m=!0;for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let n=e*u/2,r=t*d/2,i=s+n*Math.cos(p)+r*Math.sin(p),o=l-n*Math.sin(p)+r*Math.cos(p);(a.sample(a.wallDist,i,o)<.3||!this.inside(i,o,1))&&(m=!1)}m&&(i.push({x:s,z:l,rad:f}),this.house(e,t,n,r,s,l,u,d,p,1.3+r()*.9))}}}litWindows=0;house(e,t,n,r,i,a,o,s,c,l){let u=this.look,d=st[n.team],f=Math.min(this.h(i,a),this.h(i+1,a),this.h(i-1,a),this.h(i,a+1),this.h(i,a-1))-.25,p=Q(u.plaster,r()<.5?16777215:u.stoneDark,.08+r()*.08);e.add(new N(o,l,s).translate(0,l/2,0),i,f,a,c,(e,t,n,r,i)=>{i.set(t<.45?Q(u.stone,u.stoneDark,.25):p),u.roofKind===`gable`&&(Math.abs(Math.abs(e)-o/2)<.12||Math.abs(t-l*.62)<.07)&&t>.45&&i.set(u.timber),u.roofKind===`thatch`&&Math.abs(Math.abs(n)-s/2)<.12&&t>.45&&i.set(u.timber)});let m=r()<u.roofTeam?Q(Ko[n.team],u.roof,.3+r()*.2):Q(u.roof,u.stoneDark,r()*.25);if(u.roofKind===`flat`)e.add(new N(o+.2,.25,s+.2).translate(0,l+.12,0),i,f,a,c,Q(u.plaster,u.stoneDark,.15)),r()<.45?(e.add(new fe(Math.min(o,s)*.38,12,6,0,Math.PI*2,0,Math.PI/2).translate(0,l+.24,0),i,f,a,c,m),t.add(new Fe(.12,0).translate(0,l+.24+Math.min(o,s)*.38+.1,0),i,f,a,c,u.lit?u.window:16765040)):e.add(new N(o*.6,.06,.6).rotateX(.35).translate(0,l*.72,-s/2-.25),i,f,a,c,d.main);else{let t=u.roofKind===`thatch`?1.2+r()*.3:.95+r()*.35;e.add(Go(o,s,t,u.roofKind===`thatch`?.3:.18).translate(0,l,0),i,f,a,c,(e,n,r,i,a)=>{a.set(m),u.roofKind===`thatch`?a.multiplyScalar(.85+.15*Math.sin(n*22)):Math.floor(n*5)%2&&a.multiplyScalar(.9),u.snow&&i>.3&&n>l+t*.25&&a.set(16054527),i<.2&&Math.abs(i)<.95&&u.roofKind===`gable`&&a.set(Q(p,u.timber,.15))}),u.roofKind===`gable`&&r()<.55&&e.add(new N(.32,.8,.32).translate(o*.25,l+t*.6,s*.15),i,f,a,c,Q(u.stone,u.stoneDark,.3))}let h=-s/2-.02;e.add(new N(.5,.85,.05).translate(0,.62,h),i,f,a,c,u.timber);for(let n of[-1,1]){let r=new N(.34,.34,.05).translate(n*o*.28,l*.62,h);u.lit?t.add(r,i,f,a,c,u.window):e.add(r,i,f,a,c,u.window)}u.lit&&this.litWindows<14&&r()<.5&&(this.litWindows++,this.lights.add(i,a,3.2,u.window,.35,1.2))}keep(e,t,n){let r=this.look,i=st[n.team],a=this.data.size,o=n.x<a/2?-11:a+11,s=n.z<a/2?-11:a+11,c=this.h(o,s)-.6,l=4.2,u=8.5;e.add(new R(l,l*1.12,u,16).translate(0,u/2,0),o,c,s,0,(e,t,n,i,a)=>{let o=Math.floor(t*1.6)+Math.floor((Math.atan2(n,e)+3.2)*3)%2;a.set(Q(r.stone,r.stoneDark,o%2?.2:.05)),t<1.2&&a.set(Q(r.stone,r.stoneDark,.4))}),e.add(new R(l*1.12,l*1.12,.4,16).translate(0,8.7,0),o,c,s,0,Q(r.stone,r.trim,.2));for(let t=0;t<12;t++){let n=t/12*Math.PI*2;e.add(new N(.9,.7,.6).rotateY(-n).translate(Math.cos(n)*l*1.08,9.25,Math.sin(n)*l*1.08),o,c,s,0,Q(r.stone,r.stoneDark,.1))}r.cones&&e.add(new Ne(l*.9,4,16).translate(0,10.9,0),o,c,s,0,(e,t,i,a,o)=>o.set(r.snow&&t>11.5?16186111:Q(Ko[n.team],r.roof,.15)));let d=u+(r.cones?6.2:4);e.add(new R(.08,.1,d-u,6).translate(0,u+(d-u)/2,0),o,c,s,0,4864554),e.add(new N(2.4,1.3,.06).translate(1.25,d-.75,0),o,c,s,.6,(e,t,n,r,a)=>a.set(Math.abs(t-(d-.75))<.18?i.light:i.main));for(let e=0;e<5;e++){let n=e/5*Math.PI*2+.4;t.add(new N(.3,.9,.1).rotateY(Math.PI/2-n).translate(Math.cos(n)*4.22,u*.6,Math.sin(n)*4.22),o,c,s,0,r.lit?r.window:i.light)}this.lights.add(o,s,9,i.light,.8,6)}},Jo=class{level;target;matrix=new L;camera=new we;plane=new Ze;clip=new Ke;q=new Ke;v=new O;look=new O;tgt=new O;rot=new L;normal=new O(0,1,0);hidden=[];clearColor=new I;active=!1;constructor(e){this.level=e,this.target=new Se(1,1,{type:b,samples:0})}setSize(e,t){this.target.setSize(Math.max(1,Math.round(e/3)),Math.max(1,Math.round(t/3)))}render(e,t,n,r){let i=this.level,a=this.v.setFromMatrixPosition(n.matrixWorld);if(a.y<=i)return;let o=this.tgt.set(a.x,i,a.z),s=this.camera;s.position.set(a.x,2*i-a.y,a.z),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(a),this.look.y=2*i-this.look.y,s.up.set(0,1,0).applyMatrix4(this.rot),s.up.y=-s.up.y,s.lookAt(this.look),s.far=n.far,s.near=n.near,s.updateMatrixWorld(),s.projectionMatrix.copy(n.projectionMatrix),this.matrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.matrix.multiply(s.projectionMatrix).multiply(s.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.normal,o).applyMatrix4(s.matrixWorldInverse);let c=this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant),l=s.projectionMatrix.elements,u=this.q;u.x=(Math.sign(c.x)+l[8])/l[0],u.y=(Math.sign(c.y)+l[9])/l[5],u.z=-1,u.w=(1+l[10])/l[14],c.multiplyScalar(2/c.dot(u)),l[2]=c.x,l[6]=c.y,l[10]=c.z+1-.003,l[14]=c.w,s.projectionMatrixInverse.copy(s.projectionMatrix).invert();let d=this.hidden;d.length=0;for(let e of r)e.visible&&(e.visible=!1,d.push(e));let f=e.getRenderTarget(),p=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1;let m=t.background;t.background=null,e.getClearColor(this.clearColor);let h=e.getClearAlpha();e.setClearColor(0,0),e.setRenderTarget(this.target),e.clear(),e.render(t,s),e.setRenderTarget(f),e.setClearColor(this.clearColor,h),t.background=m,e.shadowMap.autoUpdate=p;for(let e of d)e.visible=!0;this.active=!0}dispose(){this.target.dispose()}};function Yo(e,t,n,r=e.capAmount,i=0){return Pt(e.stone[0],e.stone[2],{cap:e.cap,capAmount:r,y0:t,y1:n,seed:i})}function Xo(e,t,n,r){let i=new I(e.dark),a=new I(e.main),o=new I(t);return(e,t,s)=>{let c=Math.min(1,Math.max(0,(e.y-n)/Math.max(.01,r-n)));s.copy(i).lerp(a,.35+.65*c),c>.9&&s.copy(o),t.y>.5&&s.lerp(new I(16777215),.1)}}function Zo(e,t,n,r,i,a,o,s,c=.46){let l=Math.cos(o)*c*.5,u=-Math.sin(o)*c*.5,d=[Math.sin(o)*.04,-1,Math.cos(o)*.04];e.sheet([r-l,i,a-u],[r+l,i,a+u],d,s,Xo(t,n,i-s,i),{bulge:.06,rag:.25,rows:3,cols:3,seed:Math.round(o*10)}),e.tube([[r-l*1.2,i+.03,a-u*1.2],[r+l*1.2,i+.03,a+u*1.2]],.035,.035,n,{caps:!1,seg:.5}),e.crystal([r+Math.sin(o)*.07,i-s*.45,a+Math.cos(o)*.07],[r+Math.sin(o)*.07,i-s*.45+.24,a+Math.cos(o)*.07],.07,t.light,{glow:!0})}function Qo(e,t,n,r,i,a=0){e.part(`extra`,[0,n,0]),e.crystal([0,n-r*.5,0],[0,n+r*.5,0],i,Mt(t.dark,t.main,n-r*.5,n+r*.5),{glow:!0}),e.crystal([0,n-r*.3,0],[0,n+r*.3,0],i*.45,t.light,{glow:!0}),e.ring([0,n-r*.18,0],i*1.7,.03,t.light,{rot:[.3,0,.15],glow:!0});for(let r=0;r<a;r++){let o=r/a*Math.PI*2,s=[Math.cos(o)*i*2.6,n+(r%2?.25:-.2),Math.sin(o)*i*2.6];e.crystal([s[0],s[1]-.2,s[2]],[s[0],s[1]+.22,s[2]],.09,Mt(t.main,t.light,s[1]-.2,s[1]+.22),{glow:!0})}e.part(`body`)}function $o(e,t,n,r=.03){e.ring([0,r,0],n,.04,t.light,{glow:!0,seg:1.4});for(let i=0;i<8;i++){let a=i/8*Math.PI*2+Math.PI/8;e.crystal([Math.cos(a)*n,r-.02,Math.sin(a)*n],[Math.cos(a)*n,r+.04,Math.sin(a)*n],.09,t.main,{glow:!0})}}function es(e,t,n=1){let r=Ft(t.key),i=st[e],a=r.trim,o=new Ht(1),s=n>=3?1.14:n===2?1.07:1,c=3.25*s;o.part(`body`,[0,0,0]);let l=Yo(r,0,.8,r.capAmount*.6);o.lathe([[0,0],[1.42,0],[1.4,.24],[1.22,.3],[1.18,.5],[1,.56],[0,.56]],[0,0,0],l,{seg:.45}),o.ring([0,.27,0],1.33,.05,a,{seg:.9}),$o(o,i,1.62);let u=c;switch(r.motif){case`sand`:{let e=new R(.58,.86,c-.5,4,4);e.rotateY(Math.PI/4).translate(0,.5+(c-.5)/2,0),o.add(e,new L,(e,t,n)=>{Yo(r,.5,c,.25)(e,t,n);let o=Math.abs((e.y-.5)%.9-.45);o<.06?n.set(i.main):o<.1&&n.set(a)});for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4;o.cone([Math.sin(t)*.62,c-.2,Math.cos(t)*.62],[Math.sin(t)*1.05,c+.35,Math.cos(t)*1.05],.14,Rt(13144112,16773280,c-.2,c+.35),{sides:4})}o.lathe([[0,0],[.92,0],[.98,.14],[.7,.36],[0,.4]],[0,c-.05,0],Wt(i.main,{back:i.light,y0:c,y1:c+.4}),{seg:.5});break}case`ice`:o.lathe([[.9,.5],[.8,1.4],[.74,c-.6],[.86,c-.3],[.92,c],[0,c]],[0,0,0],Yo(r,.5,c,.8),{seg:.8});for(let e of[1.4,2.3])o.ring([0,e*s,0],.8,.06,a,{seg:.8});o.lathe([[0,0],[1.08,0],[1.12,.12],[.98,.3],[0,.3]],[0,c-.02,0],Wt(i.main,{back:16777215,y0:c,y1:c+.3,cap:{color:16777215,amount:.8}}),{seg:.7});for(let e=0;e<10;e++){let t=e/10*Math.PI*2;o.crystal([Math.cos(t)*1,c+.02,Math.sin(t)*1],[Math.cos(t)*1.03,c-.42-e%3*.12,Math.sin(t)*1.03],.06,Mt(9099519,16777215,c-.6,c),{})}break;case`obsidian`:{let e=new R(.66,.92,c-.5,6,3);e.translate(0,.5+(c-.5)/2,0),o.add(e,new L,(e,t,n)=>{n.set(2761792).lerp(new I(6970008),Math.max(0,t.y)*.6+.15*Vt(e.x,e.y,e.z,3))});for(let e=0;e<6;e++){let t=e/6*Math.PI*2+Math.PI/6;o.tube([[Math.sin(t)*.86,.7,Math.cos(t)*.86],[Math.sin(t)*.74,c-.4,Math.cos(t)*.74]],.035,.03,11565823,{glow:!0,caps:!1,seg:.5})}o.lathe([[0,0],[1.02,0],[1.06,.1],[.9,.28],[0,.28]],[0,c-.02,0],Wt(i.main,{back:i.light,y0:c,y1:c+.3}),{seg:.7}),o.ring([0,c+.06,0],1.04,.04,a,{seg:.8});break}case`wood`:o.tube([[0,.3,0],[.05,1.4,.02],[-.04,2.3,0],[0,c,0]],.62,.52,Wt(8018488,{back:11043930,y0:0,y1:c,stripes:{color:5914664,freq:9,amount:.4}}),{caps:!1});for(let e=0;e<5;e++){let t=e/5*Math.PI*2+.3;o.tube([[Math.sin(t)*.4,1,Math.cos(t)*.4],[Math.sin(t)*.9,.45,Math.cos(t)*.9],[Math.sin(t)*1.3,.12,Math.cos(t)*1.3]],.24,.08,Wt(6965806,{back:10123856}))}for(let e=0;e<7;e++){let t=e/7*Math.PI*2;o.ellipsoid([Math.cos(t)*.85,c-.25,Math.sin(t)*.85],[.42,.3,.42],Wt(3111494,{back:10145874,y0:c-.6,y1:c+.1}),{seg:.6})}for(let e=0;e<3;e++){let t=e/3*Math.PI*2+1,n=[Math.sin(t)*1,.32,Math.cos(t)*1];o.tube([[n[0],.05,n[2]],n],.06,.05,15261896,{caps:!1,seg:.5}),o.dome(n,[.22,.14,.22],2797728,{seg:.5}),o.ellipsoid([n[0],n[1]+.01,n[2]],[.18,.04,.18],r.glow,{glow:!0,seg:.4})}o.lathe([[0,0],[.86,0],[.9,.12],[.76,.26],[0,.26]],[0,c-.02,0],Wt(i.main,{back:i.light,y0:c,y1:c+.26}),{seg:.6});break;case`basalt`:for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=c-.3-e%3*.28,r=new R(.34,.38,n-.4,6);r.translate(Math.cos(t)*.42,.4+(n-.4)/2,Math.sin(t)*.42),o.add(r,new L,(e,n,r)=>{r.set(2893350).lerp(new I(6971484),n.y>.7?.7:.18+.1*Math.sin(e.y*7+t))}),o.tube([[Math.cos(t)*.72,.6,Math.sin(t)*.72],[Math.cos(t)*.66,n-.2,Math.sin(t)*.66]],.03,.02,16742952,{glow:!0,caps:!1,seg:.5})}o.lathe([[.3,0],[.86,.05],[1.1,.4],[1.04,.44],[.8,.14],[0,.14]],[0,c-.25,0],Wt(r.trim,{back:16763024,y0:c-.25,y1:c+.2}),{seg:.7}),o.ellipsoid([0,c+.02,0],[.82,.08,.82],Nt([0,c+.05,0],16769184,16734738,.85),{glow:!0,seg:.6}),o.ring([0,c+.12,0],1,.05,i.main,{seg:.8});break;default:{o.lathe([[.94,.5],[.86,1.5],[.8,c-.4],[.9,c-.2],[.96,c],[0,c]],[0,0,0],Yo(r,.5,c,.55),{seg:.8});for(let e of[1.45,2.4])o.ring([0,e*s,0],.88-(e-1.45)*.06,.06,a,{seg:.8});let e=[];for(let t=0;t<=10;t++){let n=t/10,r=n*Math.PI*2.4,i=.92-n*.1;e.push([Math.cos(r)*i,.55+n*(c-.9),Math.sin(r)*i])}o.tube(e,.05,.03,4160048,{caps:!1});for(let t=1;t<10;t+=2)o.ellipsoid(e[t],[.12,.07,.12],Wt(4885046,{back:9096020}),{seg:.4});o.lathe([[0,0],[1.06,0],[1.1,.12],[.96,.3],[0,.3]],[0,c-.02,0],Wt(i.main,{back:i.light,y0:c,y1:c+.3}),{seg:.7}),o.ring([0,c+.06,0],1.08,.04,a,{seg:.8})}}for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4,n=Math.cos(t),s=Math.sin(t),c=[[n*.75,u+.2,s*.75],[n*1,u+.75,s*1],[n*.82,u+1.35,s*.82],[n*.5,u+1.7,s*.5]],l=r.motif===`obsidian`||r.motif===`basalt`;o.tube(c,l?.15:.13,.03,(e,t,n)=>{let o=Math.min(1,Math.max(0,(e.y-u)/1.7));n.set(r.motif===`wood`?8018488:r.motif===`obsidian`?3813472:r.stone[1]).lerp(new I(i.main),Math.min(1,o*1.6)),o>.82&&n.set(a),t.y>.6&&n.lerp(new I(16777215),.12)})}let d=n>=2?4:2;for(let e=0;e<d;e++){let t=e/d*Math.PI*2;Zo(o,i,a,Math.sin(t)*.98,u-.12,Math.cos(t)*.98,t,(n>=2?1.25:1)*s)}if(n>=3)for(let e=0;e<4;e++){let t=e/4*Math.PI*2,n=Math.cos(t),a=Math.sin(t);o.tube([[n*1.55,.1,a*1.55],[n*1.4,1.1,a*1.4],[n*.95,1.9,a*.95]],.2,.12,Yo(r,0,2,r.capAmount*.7,e)),o.crystal([n*1.55,1.2,a*1.55],[n*1.58,1.65,a*1.58],.1,i.light,{glow:!0})}let f=u+1.12;return Qo(o,i,f,1.2*s,.38*s,n>=2?3:0),o.build(f+.75*s,1.45,{kind:`structure`})}function ts(e,t){let n=Ft(t.key),r=st[e],i=n.trim,a=new Ht(1);a.part(`body`,[0,0,0]),a.lathe([[0,0],[2.85,0],[2.82,.26],[2.42,.32],[2.38,.58],[1.95,.64],[1.9,.92],[0,.92]],[0,0,0],Yo(n,0,1,n.capAmount*.5),{seg:.6}),a.ring([0,.93,0],1.92,.05,i,{seg:1.2}),$o(a,r,3.05),a.ring([0,.94,0],1.5,.06,r.light,{glow:!0,seg:1.2}),a.lathe([[0,.92],[1.2,.92],[.96,1.4],[.82,1.8],[1.06,2],[0,2]],[0,0,0],Yo(n,.9,2,n.capAmount*.4),{seg:.7}),a.ring([0,1.98,0],1.02,.05,i,{seg:.9});for(let e=0;e<6;e++){let t=e/6*Math.PI*2,o=Math.cos(t),s=Math.sin(t),c=[[o*2.1,.9,s*2.1],[o*2.2,2.2,s*2.2],[o*1.85,3.5,s*1.85],[o*1.25,4.35,s*1.25]],l=n.motif===`wood`?Wt(8018488,{back:11043930,y0:0,y1:4.5}):n.motif===`obsidian`?(e,t,n)=>{n.set(2761792).lerp(new I(6970008),Math.max(0,t.y)*.6+.15*Vt(e.x,e.y,e.z,3))}:n.motif===`basalt`?(e,t,n)=>{n.set(2893350).lerp(new I(6971484),t.y>.7?.7:.2)}:Yo(n,.9,4.5,n.capAmount*.6,e);a.tube(c,.26,.14,l),(n.motif===`obsidian`||n.motif===`basalt`)&&a.tube([[o*2.36,1.2,s*2.36],[o*2.22,3.2,s*2.22]],.03,.02,n.glow,{glow:!0,caps:!1,seg:.5}),n.motif===`ice`&&a.crystal([o*2,3,s*2],[o*2.6,3.6,s*2.6],.12,Mt(9099519,16777215,3,3.6)),n.motif===`wood`&&a.ellipsoid([o*1.9,3.2,s*1.9],[.45,.32,.45],Wt(3111494,{back:10145874,y0:2.9,y1:3.5}),{seg:.6}),n.motif===`moss`&&a.ellipsoid([o*2.05,2.7,s*2.05],[.28,.12,.28],Wt(4885046,{back:9096020}),{seg:.5}),a.crystal([o*1.25,4.3,s*1.25],[o*1.1,4.85,s*1.1],.14,Mt(r.main,r.light,4.3,4.85),{glow:!0}),e%2==0&&Zo(a,r,i,Math.cos(t+Math.PI/6)*2.2,2.75,Math.sin(t+Math.PI/6)*2.2,Math.PI/2-(t+Math.PI/6),1.5,.6)}a.ellipsoid([0,2.05,0],[.8,.06,.8],Nt([0,2.06,0],16777215,r.main,.85),{glow:!0,seg:.8}),a.part(`extra`,[0,3.55,0]),a.crystal([0,2.35,0],[0,4.85,0],.82,Mt(r.dark,r.main,2.35,4.85),{glow:!0}),a.crystal([0,2.85,0],[0,4.25,0],.36,r.light,{glow:!0}),a.crystal([.85,2.7,.2],[1.25,3.5,.3],.22,Mt(r.dark,r.main,2.7,3.5),{glow:!0}),a.crystal([-.8,2.6,-.3],[-1.2,3.3,-.4],.2,Mt(r.dark,r.main,2.6,3.3),{glow:!0}),a.crystal([.1,2.55,.85],[.2,3.2,1.25],.18,Mt(r.dark,r.main,2.55,3.2),{glow:!0});for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=[Math.cos(t)*1.65,3.5+(e%2?.3:-.25),Math.sin(t)*1.65];a.crystal([n[0],n[1]-.24,n[2]],[n[0],n[1]+.26,n[2]],.12,Mt(r.main,r.light,n[1]-.24,n[1]+.26),{glow:!0})}return a.build(5.6,2.9,{kind:`structure`})}var ns={key:`verdant`,ground:[1859909,3378253,7056709,2192746],pattern:`grass`,lane:[10712399,13410667,15124369,12746071],floor:[1194031,2382912,4221242,10382131],stone:[10395819,12432286,4013394,6527295],bed:[7055508,11391400,8363688,12569799],rock:[7568020,11383746,6055557,6067266],wall:`forest`,wallHeight:1,trees:[[`round`,.7],[`pine`,.22],[`crystal`,0]],canopy:[[1330509,3377746,11063634],[1724994,4561229,13096540],[1196626,2192742,8043883]],treeDensity:1,edgeBushes:[1331783,3707986,9751639,16424647],edgeRocks:!0,bush:{kind:`leafy`,colors:[1002042,2918994,9425002,16769162]},grass:{colors:[3242572,5284180,11129185],density:1,height:1,flowers:[16773878,16761894,15885982,10521343]},liquid:`water`,liquidTones:[8449497,1546936,1207208,16121850],liquidGlow:0,light:{sun:16772300,sunI:3.4,elev:47,azim:200,sky:12891903,ground:8366509,hemiI:1.65,rim:12371174,exposure:1},fog:{color:10205629,density:.0062},heightFog:{color:13168895,density:.5,top:-.05},skyFx:`clouds`,skyFxColor:3162218,skyFxAmount:.18,grade:{sat:1.16,shadow:15265023,highlight:16774888,contrast:1,vignette:.28},fow:{tint:2767466,amount:.62},ambient:[`butterflies`,`pollen`,`leaves`,`fish`,`birds`],accent:8380671,crystals:[4249855,11365375,5111743]},rs={key:`desert`,ground:[12086328,14192462,15709810,12999216],pattern:`sand`,lane:[12886650,14929314,16313554,13081190],floor:[6957594,9190436,11032116,7306806],stone:[14268554,15586989,9067066,13148240],bed:[4175272,9429192,14205072,15654837],rock:[6169622,11029034,14452300,15911056],wall:`canyon`,wallHeight:1.3,trees:[[`spire`,.4],[`cactus`,.2],[`deadwood`,.15],[`palm`,.25]],canopy:[[3041850,5937728,13162608],[3829816,6988872,14213248],[3500610,6067792,12113016]],treeDensity:.55,edgeBushes:[5925418,9214534,14209152,15771848],edgeRocks:!0,bush:{kind:`reed`,colors:[3824162,7313983,13160554,15241262]},grass:{colors:[6965792,11045446,15784080],density:.4,height:.9,flowers:[16743088,16764992,16777215]},liquid:`water`,liquidTones:[10288104,2081988,820397,16775920],liquidGlow:0,light:{sun:16757880,sunI:3.4,elev:38,azim:215,sky:13146848,ground:14191196,hemiI:1.5,rim:16763040,exposure:1.02},fog:{color:15181432,density:.0062},heightFog:{color:16767144,density:.4,top:-.05},skyFx:`clouds`,skyFxColor:6961770,skyFxAmount:.14,grade:{sat:1.12,shadow:15785215,highlight:16773340,contrast:1.03,vignette:.3},fow:{tint:5909066,amount:.6},ambient:[`dust`,`birds`,`fish`,`butterflies`],accent:16761450,crystals:[16756816,5304544,16742992]},is={key:`snow`,ground:[11846886,14345462,16777215,12635888],pattern:`snow`,lane:[4541284,6712454,9081002,12109024],floor:[13622514,15528703,16777215,11452128],stone:[8949934,11055818,3554390,15134463],bed:[8374504,12118264,10139864,14216952],rock:[4609658,6979238,9676490,16054527],wall:`snow`,wallHeight:1.15,trees:[[`snowpine`,.8],[`crystal`,.08],[`deadwood`,.12]],canopy:[[1195060,2055752,5214058],[1062970,1858128,4885106],[1326642,2253898,5937776]],treeDensity:1,edgeBushes:[1919552,3107416,13623538,16777215],edgeRocks:!0,bush:{kind:`snowshrub`,colors:[2054728,3836518,15398143,16777215]},grass:{colors:[11058392,13688048,16777215],density:.08,height:.8,flowers:[]},liquid:`ice`,liquidTones:[13957375,8837362,4887756,16777215],liquidGlow:0,light:{sun:16771284,sunI:2.9,elev:42,azim:165,sky:10274047,ground:14214902,hemiI:1.45,rim:10148095,exposure:.98},fog:{color:6980800,density:.0058},heightFog:{color:14216447,density:.3,top:-.05},skyFx:`aurora`,skyFxColor:5308344,skyFxAmount:.6,grade:{sat:1.06,shadow:13950207,highlight:16775408,contrast:1.03,vignette:.32},fow:{tint:1714794,amount:.62},ambient:[`snow`,`sparkle`],accent:9236735,crystals:[9236735,11575551,6356952]},as={key:`abyss`,ground:[3354188,4998248,7103372,6965936],pattern:`slate`,lane:[6972536,9735334,13156564,15251536],floor:[2367290,3682642,5524084,9067216],stone:[8288406,10788030,2499124,15251536],bed:[2760768,3812952,5259376,6967440],rock:[1841198,3617103,5919360,10119912],wall:`abyss`,wallHeight:1.2,trees:[[`crystal`,.35],[`deadwood`,.3],[`spire`,.35]],canopy:[[2760784,4864640,10125520],[3155016,5259386,10520776],[2498120,4208250,9075408]],treeDensity:.55,edgeBushes:[2371674,3821712,9089279,13674751],edgeRocks:!0,bush:{kind:`crystal`,colors:[1846364,3430048,8697087,13936895]},grass:{colors:[2763354,4868746,10129632],density:.25,height:.8,flowers:[13672703,16765040]},liquid:`abyss`,liquidTones:[11559167,6299840,1574952,16762960],liquidGlow:10506495,light:{sun:16765072,sunI:2.9,elev:40,azim:205,sky:11049200,ground:11563248,hemiI:1.6,rim:14196991,exposure:1.02},fog:{color:3944034,density:.0068},heightFog:{color:9060568,density:.06,top:-.8},skyFx:`storm`,skyFxColor:2101312,skyFxAmount:.32,grade:{sat:1.18,shadow:14207231,highlight:16773344,contrast:1.05,vignette:.36},fow:{tint:2756688,amount:.64},ambient:[`motes`,`lightning`,`sparkle`],accent:16762976,crystals:[11563263,16760912,7383295]},os={key:`jungle`,ground:[866868,1793094,3967568,3030656],pattern:`moss`,lane:[8015924,11041356,13936744,6982202],floor:[534564,1195062,2382400,6961824],stone:[7637640,10005154,2241588,4889178],bed:[1727066,3836544,5939344,9095344],rock:[2241594,4479070,6979204,3836506],wall:`jungle`,wallHeight:1.1,trees:[[`giant`,.32],[`round`,.53],[`mushroom`,.15]],canopy:[[405550,1006152,5419120],[797768,1724006,4889240],[536120,1333840,5944456]],treeDensity:1.25,edgeBushes:[604720,1600074,6473872,9105663],edgeRocks:!0,bush:{kind:`fern`,colors:[539184,1534282,5816456,8060888]},grass:{colors:[405534,1268278,4759648],density:.85,height:1.15,flowers:[8050943,11832063,8060872]},liquid:`water`,liquidTones:[7006416,1350298,678522,14745592],liquidGlow:0,light:{sun:16773300,sunI:2.8,elev:56,azim:190,sky:7383280,ground:2787952,hemiI:1.45,rim:9109464,exposure:1.04},fog:{color:2051148,density:.0085},heightFog:{color:4894880,density:.35,top:.35},skyFx:`dapple`,skyFxColor:1060906,skyFxAmount:.4,grade:{sat:1.18,shadow:13691135,highlight:16775384,contrast:1.04,vignette:.34},fow:{tint:666186,amount:.64},ambient:[`fireflies`,`spores`,`butterflies`],accent:8060888,crystals:[7012304,9089279,13664511]},ss={key:`volcanic`,ground:[2761252,4076596,5917768,16734746],pattern:`ash`,lane:[7234144,9734276,12365992,3813424],floor:[1972766,2893352,4208696,16730640],stone:[6050384,8287344,1840662,16738848],bed:[2496532,3810334,5779999,16738848],rock:[1709852,3025458,4867152,16732180],wall:`basalt`,wallHeight:1.15,trees:[[`basalt`,.55],[`deadwood`,.33],[`crystal`,.12]],canopy:[[2757648,5909016,13130282],[3021332,6960160,14182960],[2363918,4858390,11553316]],treeDensity:.8,edgeBushes:[2364954,3810344,6961708,16747056],edgeRocks:!0,bush:{kind:`ember`,colors:[2758164,4860452,9062960,16752704]},grass:{colors:[2234392,4075048,8016438],density:.22,height:.8,flowers:[]},liquid:`lava`,liquidTones:[16769136,16738836,9050632,2755590],liquidGlow:16738848,light:{sun:16758928,sunI:3,elev:38,azim:210,sky:9078440,ground:12087392,hemiI:1.3,rim:16752752,exposure:1.04},fog:{color:4072996,density:.0075},heightFog:{color:16738864,density:.25,top:-.05},skyFx:`smoke`,skyFxColor:1706506,skyFxAmount:.3,grade:{sat:1.14,shadow:15257855,highlight:16773336,contrast:1.06,vignette:.38},fow:{tint:2755088,amount:.66},ambient:[`ash`,`embers`,`bubbles`],accent:16747066,crystals:[16742960,16760896,16730656]},cs={"classic-verdant":ns,"amber-canyon":rs,"frozen-highland":is,"brawl-abyss":as,"twin-hollow":os,"hazard-caldera":ss},ls={verdant:ns,autumn:ns,desert:rs,snow:is,volcanic:ss,twilight:as};function us(e){return{...e,light:{...e.light,sun:16753752,sunI:e.light.sunI*1.1,elev:21,azim:e.light.azim+15,sky:11043048,hemiI:e.light.hemiI*.82,rim:16756848,exposure:e.light.exposure*1.04},grade:{...e.grade,highlight:16771272,shadow:14206207,sat:e.grade.sat*1.05,contrast:e.grade.contrast*1.04,vignette:e.grade.vignette+.06},fog:{color:e.fog.color,density:e.fog.density}}}function ds(e,t=`default`){let n=cs[e.id]??ls[e.theme.biome]??ns,r=cs[e.id]?n:{...n,liquid:e.theme.liquid===`lava`&&n.liquid!==`abyss`?`lava`:e.theme.liquid===`none`?`none`:n.liquid};return t===`golden`&&(r=us(r)),r}function fs(){return typeof location>`u`?`default`:new URLSearchParams(location.search).get(`tod`)===`golden`?`golden`:`default`}function ps(){return typeof location>`u`?!1:new URLSearchParams(location.search).get(`classicvoxel`)===`1`}var ms=!1;function hs(){let e=new j;return e.onBeforeCompile=e=>{Xr(e,!1),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vMaskZ;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
vMaskZ = -mvPosition.z;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vMaskZ;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
gl_FragColor = vec4(vMaskZ, 0.0, 0.0, 1.0);`)},e.customProgramCacheKey=()=>`va-unit-mask`,e}var gs=class{renderer;scene;group=new tt;data;style;high;atmo;terrain;foliage;grass;liquid=null;abyss=null;reflection=null;features;camps;props;town;townTime={value:0};themedKeys=[];ambient;effects;altars;lights;vision=null;revealers=new oo;revealOn;textures;post;pushTmp=[];hidden=[];reflHide=[];vfxGroup;vfx;blobs;m4=new L;localTeam;mapDef;maskMat=hs();quality;lifeOff=!1;constructor(e,t,n,r,i,a,o){this.renderer=e,this.scene=t,yi(),this.vfxGroup=i.group,this.vfx=i;let s=new URLSearchParams(location.search);this.high=r.level===`high`,this.quality=r,this.revealOn=s.get(`reveal`)!==`0`;let c=this.high;this.localTeam=o.localTeam,this.mapDef=a;let l=ds(a,fs());this.style=l,e.shadowMap.enabled=r.shadows,e.info.autoReset=!1,e.shadowMap.type=1,this.data=new Bo(a,l,c);let u=+(l.key===`abyss`||l.key===`volcanic`||l.key===`snow`);this.textures=Ca(e,c?1024:512,l,u),this.atmo=new li(t,l,c,r.shadows),this.lights=new _i(this.data,c,t),this.foliage=new lo(this.data,l,c,r.foliageDetail);for(let e of this.foliage.lights)this.lights.add(e.x,e.z,e.r,e.hex,e.i,e.y);this.features=new eo(this.data,l,this.lights,c),this.camps=new ma(this.data,o.localTeam,o.fullVision),this.props=new Ho(this.data,l,this.lights,c),this.town=new qo(this.data,l,this.lights,c,this.townTime);let d=this.data.buildMaskTextures(),f=this.data.buildHeightTexture();l.liquidGlow&&(this.data.liquidKind===`lava`||this.data.liquidKind===`abyss`)&&this.lights.addMaskGlow(this.data.liquid,l.liquidGlow,this.data.liquidKind===`abyss`?.9:1.6,this.data.liquidKind===`abyss`?3:2.2),this.altars=new ta(this.data,l,this.lights,i,c),this.group.add(this.altars.group),this.lights.bake(),this.terrain=new Ea(this.data,l,d,this.textures.albedo,this.textures.normal,c,c?32:40),this.terrain.setSun(this.atmo.sunDir);let p=this.data.liquidKind;p===`water`||p===`lava`||p===`ice`?(c&&p!==`lava`&&s.get(`reflect`)!==`0`&&(this.reflection=new Jo(this.data.level)),this.liquid=new Co(this.data,l,{heightTex:f,masks:d,nrm:this.textures.normal,reflection:this.reflection?{texture:this.reflection.target.texture,matrix:this.reflection.matrix}:null}),this.group.add(this.liquid.group)):p===`abyss`&&(this.abyss=new wo(this.data,l),this.group.add(this.abyss.group)),this.grass=r.grass?new _o(this.data,l,c):null,this.ambient=new oa(this.data,s.get(`ambient`)===`0`||!r.ambient?{...l,ambient:[]}:l,this.foliage,i,c,r.ambient?this.props.mist:[]),this.effects=new Aa(this.data,this.liquid,this.terrain.decals,i,this.foliage.crowns,c),this.ambient.onSplash=(e,t,n)=>this.effects.splash(e,t,n),this.grass&&this.group.add(this.grass.group),this.group.add(this.terrain.group,this.foliage.group,this.features.group,this.camps.group,this.props.group,this.town.group,this.ambient.group,this.effects.group),ci(this.group);let m=new S({vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 uColor; varying vec2 vUv; void main() { float d = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, d); gl_FragColor = vec4(uColor, a * a * 0.55); }`,uniforms:{uColor:{value:new I(l.fow.tint).multiplyScalar(.25)}},transparent:!0,depthWrite:!1});this.blobs=new E(new et(1,1).rotateX(-Math.PI/2),m,256),this.blobs.count=0,this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.group.add(this.blobs);let h=ni();h.lit.defines={...h.lit.defines??{},TOON_RIM:bi(l.light.rim,.7)},ms||=(gi(h.lit,`units`,!0),!0),h.lit.needsUpdate=!0,h.emissive.color.setScalar(1.7),at(`tower`,e=>es(+(e===1),l,1)),at(`tower_t2`,e=>es(+(e===1),l,2)),at(`tower_t3`,e=>es(+(e===1),l,3)),at(`core`,e=>ts(+(e===1),l));let g=Lr(l.key);for(let[e,t]of Object.entries(lt))if(e.startsWith(`monster_`)){if(Lt.includes(e))at(e,t=>jt(e,t,l.key,c));else if(g)at(e,n=>ct(e=>t.fn(e,n),t.scale,`${e}#${n}`,!1,.6,g));else continue;this.themedKeys.push(e)}ft(!0),Bt(l.key),this.post=new Po(e,t,n,l,{msaa:c?4:0,ao:c&&s.get(`ao`)!==`0`,bloom:s.get(`bloom`)!==`0`&&r.post===`full`,outline:s.get(`outline`)!==`0`&&r.post===`full`}),this.post.setLite(r.post===`min`),this.post.setCanopy(d[1],this.data.min,1/this.data.world);let _=s.get(`fog`);_!==`0`&&(!o.fullVision||_===`1`)&&(this.vision=new Et(a,o.fullVision?0:o.localTeam,c),this.post.setVision(this.vision.texture,0,0,1/a.size))}setPerfTier(e){this.post.setLite(this.quality.post===`min`||e>=1),this.lifeOff=e>=2,this.grass&&(this.grass.group.visible=!this.lifeOff),this.ambient.group.visible=!this.lifeOff}setVisionTeam(e){e===null?(this.vision=null,this.post.setVision(null,0,0,1/this.mapDef.size)):(this.localTeam=e,this.vision?this.vision.setTeam(e):(this.vision=new Et(this.mapDef,e,this.high),this.post.setVision(this.vision.texture,0,0,1/this.mapDef.size)))}get warmTarget(){return this.post.target}debugAdapt(){return this.post.debugAdapt()}get sun(){return this.atmo.sun}groundY(e,t){let n=this.data.heightAt(e,t),r=this.data.liquidKind;return r===`water`||r===`lava`?Math.max(n,this.data.level-.26):Math.max(n,-.2)}resize(e,t,n){let r=Math.round(e*n),i=Math.round(t*n);this.post.setSize(r,i),this.vfx.distort?.setSize(r,i),this.reflection?.setSize(r,i)}onEvents(e,t){this.effects.onEvents(e,t),this.altars.onEvents(e)}update(e){let t=this.abyss?this.abyss.lightning:0;this.atmo.update(e.focus,e.zoom,e.cur.night,e.dt,t),this.terrain.update(e.time),this.liquid?.update(e.time,this.atmo.sunDir,!!this.reflection?.active),this.abyss?.update(e.time,e.dt,e.focus),this.foliage.update(e.time),this.grass&&!this.lifeOff&&this.grass.update(e.time,e.focus,this.quality.near,this.quality.far),this.features.update(e.time,e.cur,this.localTeam,e.localId??-1),this.camps.update(e.time,e.cur),this.props.update(e.time,e.focus,this.quality.far),this.townTime.value=e.time,this.lifeOff||this.ambient.update(e,this.quality.far),this.effects.update(e),this.altars.update(e),this.lights.update(e.focus,e.time),this.vision?.update(e.cur,e.dt);let n=this.data;this.revealers.update(this.revealOn?e.units.visible():[],e.localId??-1,e.focus.x,e.focus.z,(e,t)=>n.sample(n.wallWide,e,t)>.015||n.sample(n.wallWide,e,t+3)>.015||n.sample(n.wallWide,e,t-3)>.015),this.grass&&!this.lifeOff&&this.updatePushers(e,this.grass),this.updateBlobs(e)}updatePushers(e,t){let n=this.pushTmp,r=0;for(let t of e.cur.units){if(t.dead||t.kind===`tower`||t.kind===`core`)continue;let i=e.units.positionOf(t.id);if(!i)continue;let a=Math.abs(i.x-e.focus.x)+Math.abs(i.z-e.focus.z);if(a>40*Math.max(1,e.zoom))continue;let o=n[r];o||n.push(o={x:0,z:0,r:0,d:0}),o.x=i.x,o.z=i.z,o.r=Math.max(.7,t.radius*1.9),o.d=a,r++}let i=t.push;for(let e=0;e<12;e++){let t=-1;for(let i=e;i<r;i++)(t<0||n[i].d<n[t].d)&&(t=i);if(t<0){i[e].z=0;continue}let a=n[e];n[e]=n[t],n[t]=a;let o=n[e];i[e].set(o.x,o.z,o.r,0)}}updateBlobs(e){let t=0,n=this.m4;for(let r of e.units.visible()){if(t>=256)break;let i=r.unit;if(Math.abs(r.pos.x-e.focus.x)>30*Math.max(1,e.zoom)||Math.abs(r.pos.z-e.focus.z)>26*Math.max(1,e.zoom))continue;let a=(i.kind===`core`?6:i.kind===`tower`?3.2:Math.max(1.1,i.radius*2.6))*(1+Math.max(0,r.pos.y-this.groundY(r.pos.x,r.pos.z))*.25);n.makeScale(a,1,a).setPosition(r.pos.x,this.groundY(r.pos.x,r.pos.z)+.035,r.pos.z),this.blobs.setMatrixAt(t++,n)}this.blobs.count=t,t>0&&Kt(this.blobs.instanceMatrix,t)}render(e,t,n,r,i){this.renderer.info.reset();let a=this.reflection;if(a&&this.liquid&&(a.active=!1,this.liquid.nearView(i.x,i.z,24))){let t=this.reflHide;t.length=0,t.push(this.liquid.group,this.blobs,this.ambient.group,this.effects.group,this.features.group,this.camps.group,...this.foliage.reflectSkip),this.grass&&t.push(this.grass.group);for(let e of r.children)e.isMesh&&t.push(e);a.render(this.renderer,this.scene,e,t)}let o=this.vfx,s=o.distort;s&&s.active&&s.render(this.renderer,e),this.post.setFx(s&&s.active?s.target.texture:null,.012,o.feel.screen.tint,o.feel.screen.wash,o.feel.screen.bloom),this.post.render(this.scene,e,t,n,this.abyss?this.abyss.lightning:0,()=>this.drawMask(e,r))}drawMask(e,t){let n=this.scene,r=this.hidden;r.length=0;for(let e of n.children)if(e!==t&&e.visible&&!e.isLight){if(e===this.vfxGroup)for(let t of e.children)t.visible&&!t.isLight&&(t.visible=!1,r.push(t));else e.visible=!1,r.push(e)}for(let e of t.children)e.isMesh&&e.visible&&(e.visible=!1,r.push(e));let i=n.background,a=n.fog;n.background=null,n.fog=null,n.overrideMaterial=this.maskMat;let o=this.renderer.shadowMap.autoUpdate;this.renderer.shadowMap.autoUpdate=!1,this.renderer.render(n,e),this.renderer.shadowMap.autoUpdate=o,n.overrideMaterial=null,n.background=i,n.fog=a;for(let e of r)e.visible=!0}dispose(){this.post.dispose(),this.altars.dispose(),this.textures.dispose(),this.reflection?.dispose(),at(`tower`,null),at(`tower_t2`,null),at(`tower_t3`,null),at(`core`,null);for(let e of this.themedKeys)at(e,null);ft(!1),Bt(null)}},_s=e=>e<=0?0:e>=1?1:e*e*(3-2*e),vs=e=>e<=0?0:e>=1?1:1-(1-e)*(1-e),ys=e=>{if(e<=0)return 0;if(e>=1)return 1;let t=e-1;return 1+2.7*t*t*t+1.7*t*t},$=(e,t,n)=>e+(t-e)*n;function bs(e,t){let n=t-e.attackAt,r=e.windup,i=r+e.recover;if(n<0||n>i+.05)return{w:0,raise:0,strike:0,ta:n};let a=n<=r?_s(Math.min(1,n/Math.min(r,.12))):1-_s((n-r)/e.recover);e.cancelAt>=e.attackAt&&(a*=1-_s((t-e.cancelAt)/.1));let o=r*.75,s=_s(Math.min(1,n/o)),c=n<o?0:_s((n-o)/Math.max(.04,r-o+.03));return{w:a,raise:s,strike:c,ta:n}}function xs(e,t,n,r,i,a,o,s){let c=e.parts,l=e.partList??Object.values(c);for(let e=0;e<l.length;e++)l[e].rotation.set(0,0,0);let u=e.root;u.rotation.x=0,u.rotation.z=0;let d=a+t.seed,f=!!n.boss,p=n.kind,m=a-t.spawnAt,h=f?1.6:p===`structure`?0:.75;if(h>0&&m>=0&&m<h){let e=m/h;p===`hover`?(u.scale=.2+.8*ys(e),u.position.y+=(1-vs(e))*1.2):(u.position.y-=(1-vs(e))*s*(f?.95:.7),u.rotation.x-=Math.sin(e*Math.PI)*(f?.08:.2))}if(i){Cs(e,t,n,a,s);return}let g=t.speed>.4&&p!==`structure`;t.phase+=o*(g?(p===`quad`?3:p===`brute`?f?1.3:1.7:p===`turtle`?1.2:p===`roller`?3.2:p===`fish`?3.8:1.5)*Math.min(8,t.speed):0);let _=Math.min(1,t.speed/4),v=t.phase,y=g?Math.sin(v):0,b=0;switch(p){case`quad`:{let e=.62*_;c.legL&&(c.legL.rotation.x=y*e),c.extra2&&(c.extra2.rotation.x=y*e),c.legR&&(c.legR.rotation.x=-y*e),c.extra&&(c.extra.rotation.x=-y*e),b=g?Math.abs(Math.cos(v))*.045*_:Math.sin(d*1.6)*.012,c.torso&&(c.torso.rotation.x=g?Math.sin(v*2)*.04:Math.sin(d*1.6)*.025),c.head&&(c.head.rotation.y=g?0:Math.sin(d*.5)*.28,c.head.rotation.x=g?-Math.sin(v*2)*.05:Math.max(0,Math.sin(d*2.9))*.1-.03),c.cape&&(c.cape.rotation.y=g?Math.sin(v)*.35:Math.sin(d*2.2)*.3);break}case`brute`:{let e=(f?.42:.5)*_;c.legL&&(c.legL.rotation.x=y*e),c.legR&&(c.legR.rotation.x=-y*e),c.armL&&(c.armL.rotation.x=-y*.32*_,c.armL.rotation.z=.1+Math.sin(d*1.2)*.04),c.armR&&(c.armR.rotation.x=y*.32*_,c.armR.rotation.z=-.1-Math.sin(d*1.2)*.04),c.torso&&(c.torso.rotation.x=g?.06*_:Math.sin(d*1.2)*.035,c.torso.rotation.y=y*.08),b=g?Math.abs(Math.sin(v))*(f?.09:.06)*_:Math.sin(d*1.2)*.015,c.head&&(c.head.rotation.y=g?0:Math.sin(d*.45)*.22),c.cape&&(c.cape.rotation.x=-.06-_*.22+Math.sin(d*1.7)*.035),c.extra&&(c.extra.rotation.y=d*.55),c.extra2&&(c.extra2.rotation.y=-d*.9);break}case`hover`:b=(n.hover??0)+Math.sin(d*1.8)*.12,u.rotation.x+=.22*_,c.armL&&(c.armL.rotation.z=.25+Math.sin(d*2)*.12,c.armL.rotation.x=Math.sin(d*1.7)*.15+.4*_),c.armR&&(c.armR.rotation.z=-.25-Math.sin(d*2+.5)*.12,c.armR.rotation.x=Math.sin(d*1.7+1)*.15+.4*_),c.cape&&(c.cape.rotation.y=Math.sin(d*2.4)*.45,c.cape.rotation.x=Math.sin(d*1.3)*.15+.5*_),c.extra&&(c.extra.rotation.y=d*1.4),c.head&&(c.head.rotation.y=Math.sin(d*.6)*.2);break;case`roller`:b=g?Math.abs(Math.sin(v))*.16*_:0,c.torso&&(c.torso.rotation.x=g?Math.sin(v)*.14:0,c.torso.rotation.z=Math.sin(d*2)*.04),c.legL&&(c.legL.rotation.x=y*.6*_),c.legR&&(c.legR.rotation.x=-y*.6*_),c.armL&&(c.armL.rotation.x=-y*.5*_+Math.sin(d*1.9)*.08),c.armR&&(c.armR.rotation.x=y*.5*_-Math.sin(d*1.9)*.08);break;case`fish`:b=g?Math.max(0,Math.sin(v))*.22*_:Math.max(0,Math.sin(d*2.6))*.05,c.torso&&(c.torso.rotation.y=Math.sin(g?v*2:d*2)*.1),c.cape&&(c.cape.rotation.y=Math.sin(d*(g?9:4.5))*.45),c.armL&&(c.armL.rotation.z=Math.sin(d*5)*.35),c.armR&&(c.armR.rotation.z=-Math.sin(d*5)*.35),c.extra&&(c.extra.rotation.x=Math.sin(d*2.1)*.18,c.extra.rotation.z=Math.sin(d*1.3)*.15),c.head&&(c.head.rotation.x=Math.sin(d*1.7)*.05);break;case`turtle`:{let e=.36*_;c.legL&&(c.legL.rotation.x=y*e),c.extra2&&(c.extra2.rotation.x=y*e),c.legR&&(c.legR.rotation.x=-y*e),c.extra&&(c.extra.rotation.x=-y*e),b=g?Math.abs(Math.cos(v))*.05*_:Math.sin(d*1.1)*.02,c.head&&(c.head.rotation.x=Math.sin(d*.8)*.06,c.head.rotation.y=g?Math.sin(v)*.06:Math.sin(d*.4)*.26),c.torso&&(c.torso.rotation.z=g?Math.sin(v)*.025:0),c.cape&&(c.cape.rotation.y=Math.sin(d*1.5)*.2);break}case`structure`:c.extra&&(c.extra.rotation.y=d*.8,c.extra.rotation.x=Math.sin(d*1.3)*.06)}let x=bs(t,a);x.w>.001&&Ss(e,t,n,x);let S=+(r===`cast`||r===`channel`);if(t.castW+=(S-t.castW)*Math.min(1,o*(S>t.castW?20:10)),t.castW>.002&&p===`brute`){let e=t.castW;c.armL&&(c.armL.rotation.x=$(c.armL.rotation.x,-2.4,e)),c.armR&&(c.armR.rotation.x=$(c.armR.rotation.x,-2.4,e)),c.head&&(c.head.rotation.x=$(c.head.rotation.x,-.35,e))}let C=a-t.hitAt;if(C>=0&&C<.22){let e=Math.sin(C/.22*Math.PI)*(f?.05:p===`structure`?0:.14);p===`structure`?u.rotation.z+=Math.sin(C*70)*.012*(1-C/.22):(u.rotation.x-=e,c.head&&(c.head.rotation.x-=e*1.5))}u.position.y+=b}function Ss(e,t,n,r){let i=e.parts,a=e.root,{w:o,raise:s,strike:c}=r,l=e=>{a.position.x+=Math.sin(a.rotation.y)*e,a.position.z+=Math.cos(a.rotation.y)*e};switch(n.kind){case`quad`:t.ranged?(i.head&&(i.head.rotation.x=$(i.head.rotation.x,-.65*s+.95*c,o)),i.torso&&(i.torso.rotation.x=$(i.torso.rotation.x,-.12*s+.18*c,o))):(a.rotation.x+=o*(-.16*s+.36*c),i.head&&(i.head.rotation.x=$(i.head.rotation.x,-.35*s+.55*c,o)),i.legL&&(i.legL.rotation.x=$(i.legL.rotation.x,-.6*s+.4*c,o)),i.legR&&(i.legR.rotation.x=$(i.legR.rotation.x,-.6*s+.4*c,o)),l(o*(.3*c-.08*s)));break;case`brute`:if(t.atkN%2==1)i.armR&&(i.armR.rotation.x=$(i.armR.rotation.x,-2.1*s+2.5*c,o),i.armR.rotation.z=$(i.armR.rotation.z,-.55*s+.45*c,o)),i.torso&&(i.torso.rotation.y=$(i.torso.rotation.y,.4*s-.75*c,o));else{let e=-2.7*s+3.05*c;i.armL&&(i.armL.rotation.x=$(i.armL.rotation.x,e,o)),i.armR&&(i.armR.rotation.x=$(i.armR.rotation.x,e,o)),i.torso&&(i.torso.rotation.x=$(i.torso.rotation.x,-.22*s+.42*c,o)),i.head&&(i.head.rotation.x=$(i.head.rotation.x,-.25*s+.2*c,o)),a.position.y-=o*c*(n.boss?.18:.1)}break;case`hover`:a.rotation.x+=o*(-.18*s+.22*c),i.armL&&(i.armL.rotation.x=$(i.armL.rotation.x,.7*s-1.5*c,o)),i.armR&&(i.armR.rotation.x=$(i.armR.rotation.x,.7*s-1.5*c,o)),i.armL&&(i.armL.rotation.z=$(i.armL.rotation.z,.5*s,o)),i.armR&&(i.armR.rotation.z=$(i.armR.rotation.z,-.5*s,o));break;case`roller`:i.torso&&(i.torso.rotation.x=$(i.torso.rotation.x,-.3*s+.5*c,o)),a.position.y+=o*(.2*c-.08*s),l(o*.22*c),i.armL&&(i.armL.rotation.x=$(i.armL.rotation.x,-1.2*s+.4*c,o)),i.armR&&(i.armR.rotation.x=$(i.armR.rotation.x,-1.2*s+.4*c,o));break;case`turtle`:a.rotation.x+=o*(-.24*s+.3*c),i.legL&&(i.legL.rotation.x=$(i.legL.rotation.x,-.75*s+.5*c,o)),i.legR&&(i.legR.rotation.x=$(i.legR.rotation.x,-.75*s+.5*c,o)),i.head&&(i.head.rotation.x=$(i.head.rotation.x,-.4*s+.45*c,o));break;case`structure`:i.extra&&(i.extra.rotation.y+=o*2.5*s)}}function Cs(e,t,n,r,i){let a=e.parts,o=e.root,s=r-t.deathAt,c=!!n.boss,l=Math.max(0,s-(c?1.2:.8))*(c?.9:.6);switch(n.kind){case`quad`:case`fish`:case`roller`:{let e=_s(s/.45);o.rotation.z=e*1.45;for(let t of[`legL`,`legR`,`extra`,`extra2`])a[t]&&(a[t].rotation.x=Math.sin(s*18)*.15*Math.max(0,1-s*1.5)+e*.3);a.head&&(a.head.rotation.x=e*.4),o.position.y-=l*.6;break}case`brute`:{let e=_s(s/.35),t=_s((s-.3)/(c?.9:.6));a.legL&&(a.legL.rotation.x=-e*.9),a.legR&&(a.legR.rotation.x=-e*.7),o.position.y-=e*i*.12,o.rotation.x=t*1.35,a.armL&&(a.armL.rotation.x=-t*1.6),a.armR&&(a.armR.rotation.x=-t*1.4),a.head&&(a.head.rotation.x=t*.5),a.cape&&(a.cape.rotation.x=-t*.6),o.position.y-=l;break}case`hover`:{let e=_s(s/.9);o.position.y-=e*1.1,o.rotation.x=e*.6,o.scale=Math.max(.05,1-e*.7),a.armL&&(a.armL.rotation.z=.25+e),a.armR&&(a.armR.rotation.z=-.25-e);break}case`turtle`:{let e=_s(s/1.1);for(let t of[`legL`,`legR`,`extra`,`extra2`])a[t]&&(a[t].rotation.x=(t===`legL`||t===`legR`?-1:1)*e*.5);a.head&&(a.head.rotation.x=e*.55),o.position.y-=e*.45+l*.7,o.rotation.z=Math.sin(s*5)*.03*(1-e);break}case`structure`:{let e=_s(s/1.6);o.position.y-=e*i*.62,o.rotation.x=e*.12,o.rotation.z=Math.sin(s*38)*.03*(1-e),a.extra&&(a.extra.rotation.z=e*1.2);break}}}var ws=1.6,Ts=new Pe(.72,.9,32).rotateX(-Math.PI/2),Es={self:new j({color:6160266,transparent:!0,opacity:.85,depthWrite:!1}),ally:new j({color:4892927,transparent:!0,opacity:.7,depthWrite:!1}),enemy:new j({color:16730698,transparent:!0,opacity:.7,depthWrite:!1})};function Ds(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+r*n}var Os=class{localTeam;localPlayerId;shadows;fullVision;lodPixels;lodFirst;groundY;group=new tt;batches=new ai;visuals=new Map;prevById=new Map;seen=new Set;lastSnap=null;camera=null;frustum=new oe;pv=new L;sphere=new T;shownPool=[];shownOut=[];shownCount=0;rings;ringM=new L;screenPx=0;drawn=0;skins=new Map;skinRev=0;spawnedAt=new Map;setSkins(e){this.skins=new Map(Object.entries(e).map(([e,t])=>[Number(e),t])),this.skinRev++}visualKey(e){if(e.kind===`tower`&&e.modelKey===`tower`&&(e.tier??1)>=2){let t=(e.tier??1)>=3?`tower_t3`:`tower_t2`;if(mt(t))return t}return e.kind!==`hero`||!e.hero||e.modelKey!==`hero:${e.hero.defId}`?e.modelKey:v(e.hero.defId,this.skins.get(e.hero.playerId))}beginWarm(){this.batches.beginWarm()}endWarm(){this.batches.endWarm()}setVision(e,t){this.localTeam=e,this.fullVision=t}setScreen(e){this.screenPx=e}setCamera(e){this.camera=e}constructor(e,t,n,r=!1,i=0,a=!1,o){this.localTeam=e,this.localPlayerId=t,this.shadows=n,this.fullVision=r,this.lodPixels=i,this.lodFirst=a,this.groundY=o,this.group.add(this.batches.group);let s=e=>{let t=new E(Ts,e,32);return t.instanceMatrix.setUsage(de),t.frustumCulled=!1,t.renderOrder=1,t.count=0,this.group.add(t),t};this.rings={self:s(Es.self),ally:s(Es.ally),enemy:s(Es.enemy)}}canSee(e){return this.fullVision||u(e,this.localTeam)}positionOf(e){let t=this.visuals.get(e);return!t||t.removedAt!==null||t.unit.dead||!t.shown?null:t.pos}keyFor(e){return this.visualKey(e)}modelKeyOf(e){return this.visuals.get(e)?.modelKey}heightOf(e){return this.visuals.get(e)?.pose.height??2}visible(){let e=this.shownOut;e.length=this.shownCount;for(let t=0;t<this.shownCount;t++)e[t]=this.shownPool[t];return e}onEvents(e,t){for(let n of e)if(n.type===`attack`){let e=this.visuals.get(n.unitId);e&&(pt(e.anim,t,n.windup,n.period),e.aimId=n.targetId,e.aimUntil=t+e.anim.windup+.2)}else if(n.type===`cast`){let e=this.visuals.get(n.unitId);e&&(e.anim.castAt=t,n.slot<4&&Math.hypot(n.x-e.pos.x,n.z-e.pos.z)>.6&&(e.aimId=0,e.aimX=n.x,e.aimZ=n.z,e.aimUntil=t+.3))}else if(n.type===`damage`){let e=this.visuals.get(n.targetId);e&&n.amount>0&&t-e.anim.hitAt>.25&&(e.anim.hitAt=t)}else if(n.type===`death`){let e=this.visuals.get(n.unitId);e&&(e.anim.deathAt=t)}else n.type===`spawn`&&this.spawnedAt.set(n.unitId,t)}animateVisual(e,t,n,r,i){let a=e.model.rig;a?xs(e.pose,e.anim,a,t,n,r,i,e.model.height):ht(e.pose,e.anim,t,n,r,i)}update(e,t,n,r,i){let a=this.prevById;if(e!==this.lastSnap){if(a.clear(),e)for(let t of e.units)a.set(t.id,t);this.lastSnap=e}let o=this.camera;o&&(this.pv.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.pv)),this.batches.begin();for(let e of Object.values(this.rings))e.count=0;this.shownCount=0,this.drawn=0;let s=this.seen;s.clear();for(let e of t.units){s.add(e.id);let t=this.visuals.get(e.id);t||=this.create(e),t.unit=e,(e.modelKey!==t.simKey||t.skinRev!==this.skinRev)&&this.swapModel(t,e);let o=a.get(e.id),c=o?o.x+(e.x-o.x)*n:e.x,l=o?o.z+(e.z-o.z)*n:e.z,d=this.groundY?this.groundY(c,l):0;t.lift+=((e.flying&&!e.dead?ws:0)-t.lift)*Math.min(1,i*6),t.lift<.002&&(t.lift=0);let f=t.lift>0?Math.sin(r*3+e.id)*.12*(t.lift/ws):0,p=(o?o.y+(e.y-o.y)*n:e.y)+d+t.lift+f,m=c-t.pos.x,h=l-t.pos.z,g=i>0?Math.sqrt(m*m+h*h)/i:0;if(t.anim.speed+=(Math.min(12,g)-t.anim.speed)*Math.min(1,i*12),i>0&&g<30){let e=Math.min(1,i*12);t.vx+=(m/i-t.vx)*e,t.vz+=(h/i-t.vz)*e}t.pos.set(c,p,l);let _=e.facing,v=14;if(r<t.aimUntil&&!e.dead){let e=t.aimId?this.visuals.get(t.aimId):void 0,n=e?e.pos.x:t.aimId?NaN:t.aimX,r=e?e.pos.z:t.aimId?NaN:t.aimZ;Number.isFinite(n)&&(n-c)*(n-c)+(r-l)*(r-l)>.04&&(_=Math.atan2(n-c,r-l),v=22)}t.facing=Ds(t.facing,_,Math.min(1,i*v));let y=t.vx*t.vx+t.vz*t.vz>.16?Math.atan2(t.vx,t.vz)-t.facing:0;t.anim.moveRel=Ds(t.anim.moveRel,Ds(0,y,1),Math.min(1,i*16));let b=t.anim;e.action!==`attack`&&b.cancelAt<b.attackAt&&r-b.attackAt<b.windup-.05&&(b.cancelAt=r);let x=!this.fullVision&&!u(e,this.localTeam),S=e.dead&&r-t.anim.deathAt>(e.kind===`hero`?.12:2.5),C=!x&&!S;if(t.shown=C,t.fx&&(t.fx.root.visible=!1),e.dead&&t.anim.deathAt<0&&(t.anim.deathAt=r),!e.dead&&t.anim.deathAt>0&&(t.anim.deathAt=-99),t.ring&&C&&!e.dead){let e=this.rings[t.ring];e.count<32&&e.setMatrixAt(e.count++,this.ringM.makeTranslation(c,.04+d,l))}if(!C)continue;if(!e.dead){let n=this.shownPool[this.shownCount];n?(n.unit=e,n.pos=t.pos,n.height=t.pose.height):this.shownPool.push({unit:e,pos:t.pos,height:t.pose.height}),this.shownCount++}if(!this.inView(c,p,l,t))continue;this.lodPixels>0&&this.updateLod(t,e,c,p,l);let w=t.pose.root;if(w.position.x=c,w.position.y=p,w.position.z=l,w.rotation.y=t.facing,w.scale=1,this.animateVisual(t,e.action,e.dead,r,i),this.batches.add(t.batch,t.pose),this.drawn++,t.fx&&!e.dead){let e=t.fx.root;e.visible=!0,e.position.set(c,p,l),e.rotation.y=t.facing,t.fx.update(r)}}for(let e of this.visuals.values()){if(s.has(e.id))continue;e.removedAt===null&&(e.removedAt=r,e.anim.deathAt<0&&(e.anim.deathAt=r));let t=r-e.removedAt;if(e.fx&&(e.fx.root.visible=!1),t>1.3){this.remove(e);continue}if(!this.inView(e.pos.x,e.pos.y,e.pos.z,e))continue;let n=e.pose.root;n.position.x=e.pos.x,n.position.y=e.pos.y,n.position.z=e.pos.z,n.rotation.y=e.facing,n.scale=1,this.animateVisual(e,`dead`,!0,r,i),n.scale*=Math.max(.01,1-Math.max(0,t-.8)/.5),this.batches.add(e.batch,e.pose),this.drawn++}this.batches.end();for(let e of Object.values(this.rings))e.instanceMatrix.needsUpdate=e.count>0;if(this.spawnedAt.size)for(let[e,t]of this.spawnedAt)r-t>2&&this.spawnedAt.delete(e)}inView(e,t,n,r){if(!this.camera)return!0;let i=this.sphere;return i.center.set(e,t+r.pose.height*.5,n),i.radius=r.bound,this.frustum.intersectsSphere(i)}castsShadow(e,t){return this.shadows&&(t?e.kind===`hero`||e.kind===`summon`:e.kind===`hero`||e.kind===`tower`||e.kind===`core`||e.kind===`monster`)}pixelsAt(e,t,n,r){let i=this.camera;if(!i||!this.screenPx)return 1/0;let a=t-i.position.x,o=n-i.position.y,s=r-i.position.z,c=Math.sqrt(a*a+o*o+s*s)||1;return e*this.screenPx/(2*Math.tan(i.fov*Math.PI/360)*c)}setRing(e,t){this.ringFocus=e,this.ringFar=t}ringFocus=null;ringFar=1/0;wantsLod(e,t,n,r,i,a){if(e.kind===`tower`||e.kind===`core`)return!1;let o=this.ringFocus;return o&&e.hero?.playerId!==this.localPlayerId&&Math.hypot(n-o.x,i-o.z)>this.ringFar*(a?.9:1)?!0:this.pixelsAt(t.height,n,r,i)<(e.hero?.playerId===this.localPlayerId?this.lodPixels*.4:this.lodPixels)*(a?1.2:1)}updateLod(e,t,n,r,i){this.wantsLod(t,e.model,n,r,i,e.lod)!==e.lod&&this.bind(e,t,e.swapped,!e.lod)}bind(e,t,n,r){let i=this.castsShadow(t,n),a=this.visualKey(t),o=dt(a,t.team,r);e.model=o,e.pose=Hr(o),e.batch=this.batches.batchFor(o,i),e.modelKey=a,e.simKey=t.modelKey,e.skinRev=this.skinRev,this.attachFx(e,a,o),e.lod=r,e.swapped=n,e.shadow=i,e.bound=Math.max(o.height,o.radius*2)*.62+1.2+(i?4:0)}attachFx(e,t,n){let r=t.indexOf(`~`),i=r<0?``:t.slice(r+1);i!==e.fxSkin&&(e.fx?.dispose(),e.fx=i?Zt(i,n.height,n.radius):null,e.fxSkin=i,e.fx&&(e.fx.root.visible=!1,this.group.add(e.fx.root)))}create(e){let t=e.kind===`hero`?e.hero?.playerId===this.localPlayerId?`self`:e.team===this.localTeam?`ally`:`enemy`:null,n=e.stats.attackRange>2.5,r=this.visualKey(e),i=!1,a;if(this.lodFirst&&this.lodPixels>0){let t=dt(r,e.team,!0);i=this.wantsLod(e,t,e.x,e.y,e.z,!1),a=i?t:dt(r,e.team,!1)}else a=dt(r,e.team,!1);let o=ut(n,e.id*.6180339%1*6.283),s=this.spawnedAt.get(e.id);s!==void 0&&(o.spawnAt=s,this.spawnedAt.delete(e.id));let c={id:e.id,model:a,pose:Hr(a),batch:null,anim:o,unit:e,pos:new O(e.x,e.y,e.z),facing:e.facing,lift:0,vx:0,vz:0,aimId:0,aimX:0,aimZ:0,aimUntil:-99,removedAt:null,ring:t,modelKey:r,simKey:e.modelKey,skinRev:this.skinRev,fx:null,fxSkin:``,shown:!0,bound:0,lod:i,swapped:!1,shadow:!1};return this.bind(c,e,!1,i),this.visuals.set(e.id,c),c}swapModel(e,t){let n=t.modelKey!==e.simKey;!n&&this.visualKey(t)===e.modelKey?e.skinRev=this.skinRev:this.bind(e,t,e.swapped||n,e.lod)}remove(e){e.fx?.dispose(),this.visuals.delete(e.id)}},ks={day:{sky:14216447,ground:3820080,hemi:1.25,sun:16773596,sunI:1.9},golden:{sky:16770244,ground:4864552,hemi:1.12,sun:16763274,sunI:2},overcast:{sky:14673646,ground:4869712,hemi:1.45,sun:15790837,sunI:1.05},dusk:{sky:12626144,ground:3811904,hemi:1.05,sun:16751226,sunI:1.45},night:{sky:7375048,ground:1712176,hemi:.8,sun:11059455,sunI:.85}},As=class{container;renderer;scene=new he;rig;units;map;stylized;vfx;overlay;indicators;quality;sun=null;projectilePos=new Map;areaPos=new Map;prevProj=new Map;seenProj=new Set;seenArea=new Set;localHeroId=0;raycaster=new Xe;ground=new Ze(new O(0,1,0),0);groundAt=new Ze(new O(0,1,0),0);width=1;height=1;hemi=null;day;nightMix=0;skyDay;skyNight;tmpA=new I;tmpB=new I;localTeam;governor;basePixelRatio;mapDef;animTime=0;constructor(e,t){this.container=e,this.quality=t.quality??r();let n=this.quality;it(n.level===`low`),this.indicators=new ur(n.level);let i=!ps();this.renderer=new vt({antialias:n.antialias&&!i,powerPreference:`high-performance`}),this.basePixelRatio=Math.min(window.devicePixelRatio||1,i?n.level===`high`?1.5:1:n.dprCap)*n.renderScale,this.renderer.setPixelRatio(this.basePixelRatio);let a=n.renderScale;this.governor=n.adaptive?new Bn({...zn,minScale:Math.min(1,zn.minScale/a),floorScale:Math.min(1,zn.floorScale/a)},n.shadows?2:0,4,n.post===`min`?n.grass||n.ambient?1:2:0):null,this.renderer.shadowMap.enabled=n.shadows,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=Te,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,Object.assign(this.renderer.domElement.style,{position:`absolute`,inset:`0`,width:`100%`,height:`100%`,display:`block`}),e.appendChild(this.renderer.domElement);let o=t.map.theme;if(this.localTeam=t.localTeam,this.mapDef=t.map,this.day=ks[o.lighting]??ks.day,this.skyDay=new I(o.sky),this.skyNight=new I(o.sky).lerp(new I(791588),.75),this.rig=new xt(t.localTeam),this.vfx=new Ut(e=>this.followPos(e),n.level,()=>this.localHeroId),this.vfx.setParticles(n.particles),i){let e=new gs(this.renderer,this.scene,this.rig.camera,n,this.vfx,t.map,{localTeam:t.localTeam,fullVision:t.fullVision??!1});this.stylized=e,this.vfx.setGround((t,n)=>e.groundY(t,n)),this.indicators.groundY=(t,n)=>e.groundY(t,n);let r=e.style.pattern;this.vfx.setDust(r===`snow`?14674164:r===`ash`?6180940:r===`sand`?14203014:r===`slate`?9734824:11049080),this.map=null,this.units=new Os(t.localTeam,t.localPlayerId,n.shadows,t.fullVision??!1,n.lodPixels,n.level===`low`,(t,n)=>e.groundY(t,n)),this.scene.add(e.group)}else{if(this.stylized=null,this.scene.background=this.skyDay.clone(),this.scene.fog=o.fogDensity?new re(o.fog,o.fogDensity):new te(o.fog,60,150),this.hemi=new ve(this.day.sky,this.day.ground,this.day.hemi),this.scene.add(this.hemi),this.sun=new w(this.day.sun,this.day.sunI),this.sun.castShadow=n.shadows,n.shadows){this.sun.shadow.mapSize.set(n.shadowMapSize,n.shadowMapSize);let e=this.sun.shadow.camera;e.left=-26,e.right=26,e.top=26,e.bottom=-26,e.near=1,e.far=120,this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.03}this.scene.add(this.sun,this.sun.target),this.map=new jr(t.map,n),this.units=new Os(t.localTeam,t.localPlayerId,n.shadows,t.fullVision??!1,n.lodPixels,n.level===`low`),this.scene.add(this.map.group)}t.skins&&this.units.setSkins(t.skins),this.indicators.attach({walls:St(t.map),units:this.units,fullVision:t.fullVision??!1}),this.vfx.modelKeyOf=e=>this.units.modelKeyOf(e.id)??this.units.keyFor(e),this.vfx.canSee=e=>this.units.canSee(e),this.units.setCamera(this.rig.camera),this.units.setRing(this.rig.focus,n.far),this.overlay=new Mr(e,t.localTeam,t.localPlayerId);let s=St(t.map);this.overlay.bushAt=(e,t)=>s.bushAt(e,t),this.scene.add(this.units.group,this.vfx.group,this.indicators.group),this.resize(),window.addEventListener(`resize`,this.onResize),this.warmUp()}async warmUp(){this.units.beginWarm();let e=new F;e.setAttribute(`position`,new A(new Float32Array(9),3)),e.setAttribute(`normal`,new A(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),e.setAttribute(`color`,new A(new Float32Array(9).fill(1),3));let t=new E(e,new M({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),1);t.setMatrixAt(0,new L().makeTranslation(-900,0,-900)),t.frustumCulled=!1,this.scene.add(t);let n=this.stylized?this.stylized.warmTarget:null,r=e=>{let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(n);try{return e()}finally{this.renderer.setRenderTarget(t)}};try{this.indicators.setWarm(!0);let e=r(()=>this.renderer.compileAsync(this.scene,this.rig.camera));this.indicators.setWarm(!1),await e;let t=await r(()=>this.vfx.precompile(this.renderer,this.scene,this.rig.camera));this.scene.add(t),r(()=>this.renderer.render(this.scene,this.rig.camera)),this.scene.remove(t)}catch{}finally{this.scene.remove(t),this.units.endWarm()}}onResize=()=>this.resize();resize(){this.width=Math.max(1,this.container.clientWidth),this.height=Math.max(1,this.container.clientHeight),this.renderer.setSize(this.width,this.height,!1),this.rig.setAspect(this.width/this.height),this.units.setScreen(this.height*this.renderer.getPixelRatio()),this.overlay.resize(this.width,this.height,Math.min(window.devicePixelRatio||1,this.quality.dprCap)),this.stylized?.resize(this.width,this.height,this.renderer.getPixelRatio())}get mapSize(){return this.mapDef.size}setLocalHero(e){this.localHeroId=e,this.indicators.setLocalHero(e)}setVisionTeam(e){this.units.setVision(e??0,e===null),this.stylized?.setVisionTeam(e)}setSkins(e){this.units.setSkins(e)}followPos(e){return e.kind===`unit`?this.units.positionOf(e.id):e.kind===`projectile`?this.projectilePos.get(e.id)??null:this.areaPos.get(e.id)??null}onEvents(e,t,n){this.units.onEvents(e,this.animTime),this.vfx.onEvents(e,n),this.stylized?.onEvents(e,t),this.overlay.onEvents(e,t,this.localHeroId,e=>this.units.positionOf(e))}frame(e,t,n,r,i,a){let o=performance.now();this.frames++;let s=this.prevProj;if(s.clear(),e)for(let t of e.projectiles)s.set(t.id,t);let c=this.seenProj;c.clear();for(let e of t.projectiles){c.add(e.id);let t=s.get(e.id),r=this.projectilePos.get(e.id);r||this.projectilePos.set(e.id,r=new O),r.set(t?t.x+(e.x-t.x)*n:e.x,e.y,t?t.z+(e.z-t.z)*n:e.z),this.stylized&&(r.y+=this.stylized.groundY(r.x,r.z))}for(let e of this.projectilePos.keys())c.has(e)||this.projectilePos.delete(e);let l=this.seenArea;l.clear();for(let e of t.areas){l.add(e.id);let t=this.areaPos.get(e.id);t||this.areaPos.set(e.id,t=new O),t.set(e.x,this.stylized?Math.max(0,this.stylized.groundY(e.x,e.z)):0,e.z)}for(let e of this.areaPos.keys())l.has(e)||this.areaPos.delete(e);a&&this.rig.follow(a.x,a.z,r),this.rig.camera.updateMatrixWorld();let u=this.rig.focus,d=r*this.vfx.timeScale(r);this.animTime+=d,this.units.update(e,t,n,this.animTime,d),this.sun&&(this.sun.position.set(u.x-18,40,u.z+14),this.sun.target.position.set(u.x,0,u.z)),this.map&&(this.map.update(i,t,this.localTeam),this.updateLighting(t.night,r)),this.vfx.setFocus(u.x,u.z),this.vfx.observe(t,this.animTime),this.vfx.update(d,this.animTime),this.indicators.update(i,t,r),this.stylized?.update({dt:r,time:i,cur:t,focus:u,zoom:this.rig.distance,units:this.units,projectiles:this.projectilePos,localId:this.localHeroId});let f=this.rig.camera;f.position.add(this.vfx.shakeOffset),this.stylized?this.stylized.render(f,r,i,this.units.group,u):this.renderer.render(this.scene,f),f.position.sub(this.vfx.shakeOffset),this.overlay.draw(this.rig.camera,this.units.visible(),i);let p=this.governor;p&&(p.frame(r,performance.now()-o),p.dirty&&this.applyGovernor(p))}applyGovernor(e){e.dirty=!1;let t=e.state;if(this.renderer.setPixelRatio(this.basePixelRatio*t.scale),this.units.setScreen(this.height*this.renderer.getPixelRatio()),this.stylized?.resize(this.width,this.height,this.renderer.getPixelRatio()),this.stylized?.setPerfTier(t.tier),!this.quality.shadows)return;let n=t.shadowTier<2,r=t.shadowTier===0?this.quality.shadowMapSize:this.quality.shadowMapSize/2,i=this.sun??this.stylized?.sun;if(!i)return;let a=i.shadow;n&&a.mapSize.x!==r&&(a.mapSize.set(r,r),a.map?.depthTexture?.dispose(),a.map?.dispose(),a.map=null),i.castShadow=n,this.renderer.shadowMap.enabled=n}setFrameRate(n){this.playerCap=t(n,this.quality,e()),this.governor?.setFrameCap(this.playerCap),this.governor?.setMaxTier(n===`auto`?4:3),this.governor?.dirty&&this.applyGovernor(this.governor)}playerCap=0;frames=0;get frameCap(){return this.governor?this.governor.frameCap:this.playerCap}get perfLabel(){let e=this.governor?.state,t=e&&e.scale<1?` · ${Math.round(e.scale*this.quality.renderScale*100)}%`:``;return`${n[this.quality.tier]} T${this.governor?this.governor.shed:0}${t}`}updateLighting(e,t){let n=+!!e;if(this.nightMix===n||!this.hemi||!this.sun)return;this.nightMix=n>this.nightMix?Math.min(1,this.nightMix+t/3):Math.max(0,this.nightMix-t/3);let r=this.nightMix,i=this.day,a=ks.night;this.hemi.color.copy(this.tmpA.setHex(i.sky)).lerp(this.tmpB.setHex(a.sky),r),this.hemi.groundColor.copy(this.tmpA.setHex(i.ground)).lerp(this.tmpB.setHex(a.ground),r),this.hemi.intensity=i.hemi+(a.hemi-i.hemi)*r,this.sun.color.copy(this.tmpA.setHex(i.sun)).lerp(this.tmpB.setHex(a.sun),r),this.sun.intensity=i.sunI+(a.sunI-i.sunI)*r,this.scene.background.copy(this.skyDay).lerp(this.skyNight,r)}screenToGround(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new D((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(r,this.rig.camera);let i=new O;if(!this.raycaster.ray.intersectPlane(this.ground,i))return null;let a=this.stylized;if(a){let e=this.groundAt;for(let t=0;t<4&&(e.constant=-a.groundY(i.x,i.z),!(e.constant>-.15||!this.raycaster.ray.intersectPlane(e,i)));t++);}return{x:i.x,z:i.z}}pickUnit(e,t,n,r,i=48){let a=this.renderer.domElement.getBoundingClientRect(),o=new O,s=null,c=i;for(let i of n.units){if(i.dead||!r(i))continue;let n=this.units.positionOf(i.id);if(!n)continue;o.set(n.x,n.y+this.units.heightOf(i.id)*.5,n.z).project(this.rig.camera);let l=a.left+(o.x+1)/2*a.width,u=a.top+(1-o.y)/2*a.height,d=Math.hypot(l-e,u-t)-(i.radius>1?20:0);d<c&&(c=d,s=i)}return s}get canvas(){return this.renderer.domElement}dispose(){window.removeEventListener(`resize`,this.onResize),this.indicators.dispose(),this.stylized?.dispose(),this.scene.traverse(e=>{let t=e;t.geometry?.dispose?.();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let e of n){for(let t of Object.values(e))t instanceof Ie&&t.dispose();e.dispose()}}),this.scene.background instanceof Ie&&this.scene.background.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.overlay.canvas.remove()}};export{Fn as a,$t as c,Vn as i,tn as l,cr as n,hn as o,rr as r,vn as s,As as t};