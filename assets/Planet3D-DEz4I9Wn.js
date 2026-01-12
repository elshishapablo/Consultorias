import{r as Ft,j as Zt,m as sl,a as al}from"./index-DNM6YGzw.js";const Ks="182",ai={ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ol=0,_a=1,ll=2,nr=1,cl=2,yi=3,wn=0,wt=1,fn=2,pn=0,oi=1,ga=2,xa=3,va=4,hl=5,On=100,ul=101,fl=102,dl=103,pl=104,ml=200,_l=201,gl=202,xl=203,Qr=204,es=205,vl=206,Ml=207,Sl=208,El=209,yl=210,Tl=211,bl=212,Al=213,Rl=214,ts=0,ns=1,is=2,ci=3,rs=4,ss=5,as=6,os=7,go=0,wl=1,Cl=2,en=0,xo=1,vo=2,Mo=3,So=4,Eo=5,yo=6,To=7,bo=300,Gn=301,hi=302,ls=303,cs=304,pr=306,hs=1e3,dn=1001,us=1002,gt=1003,Pl=1004,Ni=1005,Mt=1006,Er=1007,zn=1008,Vt=1009,Ao=1010,Ro=1011,Ai=1012,Zs=1013,rn=1014,Jt=1015,_n=1016,js=1017,$s=1018,Ri=1020,wo=35902,Co=35899,Po=1021,Do=1022,Xt=1023,gn=1026,Vn=1027,Lo=1028,Js=1029,ui=1030,Qs=1031,ea=1033,ir=33776,rr=33777,sr=33778,ar=33779,fs=35840,ds=35841,ps=35842,ms=35843,_s=36196,gs=37492,xs=37496,vs=37488,Ms=37489,Ss=37490,Es=37491,ys=37808,Ts=37809,bs=37810,As=37811,Rs=37812,ws=37813,Cs=37814,Ps=37815,Ds=37816,Ls=37817,Us=37818,Is=37819,Ns=37820,Fs=37821,Os=36492,Bs=36494,zs=36495,Vs=36283,Gs=36284,Hs=36285,ks=36286,Dl=3200,Ll=0,Ul=1,An="",Bt="srgb",fi="srgb-linear",cr="linear",$e="srgb",Xn=7680,Ma=519,Il=512,Nl=513,Fl=514,ta=515,Ol=516,Bl=517,na=518,zl=519,Sa=35044,Ea="300 es",Qt=2e3,hr=2001;function Uo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vl(){const i=ur("canvas");return i.style.display="block",i}const ya={};function Ta(...i){const e="THREE."+i.shift();console.log(e,...i)}function Le(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Xe(...i){const e="THREE."+i.shift();console.error(e,...i)}function wi(...i){const e=i.join(" ");e in ya||(ya[e]=!0,Le(...i))}function Gl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],or=Math.PI/180,Ws=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Hl(i,e){return(i%e+e)%e}function yr(i,e,t){return(1-t)*i+t*e}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kl={DEG2RAD:or};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],d=s[a+0],_=s[a+1],v=s[a+2],M=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=_,e[t+2]=v,e[t+3]=M;return}if(f!==M||c!==d||l!==_||u!==v){let p=c*d+l*_+u*v+f*M;p<0&&(d=-d,_=-_,v=-v,M=-M,p=-p);let h=1-o;if(p<.9995){const y=Math.acos(p),b=Math.sin(y);h=Math.sin(h*y)/b,o=Math.sin(o*y)/b,c=c*h+d*o,l=l*h+_*o,u=u*h+v*o,f=f*h+M*o}else{c=c*h+d*o,l=l*h+_*o,u=u*h+v*o,f=f*h+M*o;const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+u*f+c*_-l*d,e[t+1]=c*v+u*d+l*f-o*_,e[t+2]=l*v+u*_+o*d-c*f,e[t+3]=u*v-o*f-c*d-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),_=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*_*v,this._y=l*_*f-d*u*v,this._z=l*u*v+d*_*f,this._w=l*u*f-d*_*v;break;case"YXZ":this._x=d*u*f+l*_*v,this._y=l*_*f-d*u*v,this._z=l*u*v-d*_*f,this._w=l*u*f+d*_*v;break;case"ZXY":this._x=d*u*f-l*_*v,this._y=l*_*f+d*u*v,this._z=l*u*v+d*_*f,this._w=l*u*f-d*_*v;break;case"ZYX":this._x=d*u*f-l*_*v,this._y=l*_*f+d*u*v,this._z=l*u*v-d*_*f,this._w=l*u*f+d*_*v;break;case"YZX":this._x=d*u*f+l*_*v,this._y=l*_*f+d*u*v,this._z=l*u*v-d*_*f,this._w=l*u*f-d*_*v;break;case"XZY":this._x=d*u*f-l*_*v,this._y=l*_*f-d*u*v,this._z=l*u*v+d*_*f,this._w=l*u*f+d*_*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-c)*_,this._y=(s-l)*_,this._z=(a-r)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(u-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+l)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(s-l)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(a-r)/_,this._x=(s+l)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new N,ba=new Hn;class Ie{constructor(e,t,n,r,s,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],_=n[5],v=n[8],M=r[0],p=r[3],h=r[6],y=r[1],b=r[4],T=r[7],A=r[2],R=r[5],C=r[8];return s[0]=a*M+o*y+c*A,s[3]=a*p+o*b+c*R,s[6]=a*h+o*T+c*C,s[1]=l*M+u*y+f*A,s[4]=l*p+u*b+f*R,s[7]=l*h+u*T+f*C,s[2]=d*M+_*y+v*A,s[5]=d*p+_*b+v*R,s[8]=d*h+_*T+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,_=l*s-a*c,v=t*f+n*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*l-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=d*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=_*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(br.makeScale(e,t)),this}rotate(e){return this.premultiply(br.makeRotation(-e)),this}translate(e,t){return this.premultiply(br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Ie,Aa=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ra=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wl(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===An?cr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:Aa,fromXYZ:Ra,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:Aa,fromXYZ:Ra,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const Ye=Wl();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class Xl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yn===void 0&&(Yn=ur("canvas")),Yn.width=e.width,Yn.height=e.height;const r=Yn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Yn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yl=0;class ia{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ar(r[a].image)):s.push(Ar(r[a]))}else s=Ar(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let ql=0;const Rr=new N;class yt extends kn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=dn,r=dn,s=Mt,a=zn,o=Xt,c=Vt,l=yt.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Pi(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rr).x}get height(){return this.source.getSize(Rr).y}get depth(){return this.source.getSize(Rr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=bo;yt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],_=c[5],v=c[9],M=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+p)<.1&&Math.abs(l+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,T=(_+1)/2,A=(h+1)/2,R=(u+d)/4,C=(f+M)/4,O=(v+p)/4;return b>T&&b>A?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=C/n):T>A?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=R/r,s=O/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=C/s,r=O/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-v)*(p-v)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(f-M)/y,this.z=(d-u)/y,this.w=Math.acos((l+_+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kl extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new yt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ia(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends Kl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Io extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zl extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(s,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fi.copy(n.boundingBox)),Fi.applyMatrix4(e.matrixWorld),this.union(Fi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Oi.subVectors(this.max,gi),qn.subVectors(e.a,gi),Kn.subVectors(e.b,gi),Zn.subVectors(e.c,gi),vn.subVectors(Kn,qn),Mn.subVectors(Zn,Kn),Dn.subVectors(qn,Zn);let t=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-Dn.z,Dn.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,Dn.z,0,-Dn.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-Dn.y,Dn.x,0];return!wr(t,qn,Kn,Zn,Oi)||(t=[1,0,0,0,1,0,0,0,1],!wr(t,qn,Kn,Zn,Oi))?!1:(Bi.crossVectors(vn,Mn),t=[Bi.x,Bi.y,Bi.z],wr(t,qn,Kn,Zn,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const on=[new N,new N,new N,new N,new N,new N,new N,new N],Gt=new N,Fi=new Di,qn=new N,Kn=new N,Zn=new N,vn=new N,Mn=new N,Dn=new N,gi=new N,Oi=new N,Bi=new N,Ln=new N;function wr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ln.fromArray(i,s);const o=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),c=e.dot(Ln),l=t.dot(Ln),u=n.dot(Ln);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const jl=new Di,xi=new N,Cr=new N;class ra{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Cr)),this.expandByPoint(xi.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ln=new N,Pr=new N,zi=new N,Sn=new N,Dr=new N,Vi=new N,Lr=new N;class sa{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pr.copy(e).add(t).multiplyScalar(.5),zi.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Pr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zi),o=Sn.dot(this.direction),c=-Sn.dot(zi),l=Sn.lengthSq(),u=Math.abs(1-a*a);let f,d,_,v;if(u>0)if(f=a*c-o,d=a*o-c,v=s*u,f>=0)if(d>=-v)if(d<=v){const M=1/u;f*=M,d*=M,_=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),_=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),_=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),_=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Pr).addScaledVector(zi,d),_}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,r,s){Dr.subVectors(t,e),Vi.subVectors(n,e),Lr.crossVectors(Dr,Vi);let a=this.direction.dot(Lr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const c=o*this.direction.dot(Vi.crossVectors(Sn,Vi));if(c<0)return null;const l=o*this.direction.dot(Dr.cross(Sn));if(l<0||c+l>a)return null;const u=-o*Sn.dot(Lr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,s,a,o,c,l,u,f,d,_,v,M,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,d,_,v,M,p)}set(e,t,n,r,s,a,o,c,l,u,f,d,_,v,M,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=_,h[7]=v,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/jn.setFromMatrixColumn(e,0).length(),s=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,_=a*f,v=o*u,M=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=_+v*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=v+_*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,_=c*f,v=l*u,M=l*f;t[0]=d+M*o,t[4]=v*o-_,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=_*o-v,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,_=c*f,v=l*u,M=l*f;t[0]=d-M*o,t[4]=-a*f,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,_=a*f,v=o*u,M=o*f;t[0]=c*u,t[4]=v*l-_,t[8]=d*l+M,t[1]=c*f,t[5]=M*l+d,t[9]=_*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,_=a*l,v=o*c,M=o*l;t[0]=c*u,t[4]=M-d*f,t[8]=v*f+_,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=_*f+v,t[10]=d-M*f}else if(e.order==="XZY"){const d=a*c,_=a*l,v=o*c,M=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+M,t[5]=a*u,t[9]=_*f-v,t[2]=v*f-_,t[6]=o*u,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($l,e,Jl)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),En.crossVectors(n,Dt),En.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),En.crossVectors(n,Dt)),En.normalize(),Gi.crossVectors(Dt,En),r[0]=En.x,r[4]=Gi.x,r[8]=Dt.x,r[1]=En.y,r[5]=Gi.y,r[9]=Dt.y,r[2]=En.z,r[6]=Gi.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],_=n[13],v=n[2],M=n[6],p=n[10],h=n[14],y=n[3],b=n[7],T=n[11],A=n[15],R=r[0],C=r[4],O=r[8],x=r[12],S=r[1],D=r[5],G=r[9],B=r[13],X=r[2],K=r[6],H=r[10],k=r[14],$=r[3],ce=r[7],se=r[11],J=r[15];return s[0]=a*R+o*S+c*X+l*$,s[4]=a*C+o*D+c*K+l*ce,s[8]=a*O+o*G+c*H+l*se,s[12]=a*x+o*B+c*k+l*J,s[1]=u*R+f*S+d*X+_*$,s[5]=u*C+f*D+d*K+_*ce,s[9]=u*O+f*G+d*H+_*se,s[13]=u*x+f*B+d*k+_*J,s[2]=v*R+M*S+p*X+h*$,s[6]=v*C+M*D+p*K+h*ce,s[10]=v*O+M*G+p*H+h*se,s[14]=v*x+M*B+p*k+h*J,s[3]=y*R+b*S+T*X+A*$,s[7]=y*C+b*D+T*K+A*ce,s[11]=y*O+b*G+T*H+A*se,s[15]=y*x+b*B+T*k+A*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],_=e[14],v=e[3],M=e[7],p=e[11],h=e[15],y=c*_-l*d,b=o*_-l*f,T=o*d-c*f,A=a*_-l*u,R=a*d-c*u,C=a*f-o*u;return t*(M*y-p*b+h*T)-n*(v*y-p*A+h*R)+r*(v*b-M*A+h*C)-s*(v*T-M*R+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],_=e[11],v=e[12],M=e[13],p=e[14],h=e[15],y=f*p*l-M*d*l+M*c*_-o*p*_-f*c*h+o*d*h,b=v*d*l-u*p*l-v*c*_+a*p*_+u*c*h-a*d*h,T=u*M*l-v*f*l+v*o*_-a*M*_-u*o*h+a*f*h,A=v*f*c-u*M*c-v*o*d+a*M*d+u*o*p-a*f*p,R=t*y+n*b+r*T+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=y*C,e[1]=(M*d*s-f*p*s-M*r*_+n*p*_+f*r*h-n*d*h)*C,e[2]=(o*p*s-M*c*s+M*r*l-n*p*l-o*r*h+n*c*h)*C,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*_-n*c*_)*C,e[4]=b*C,e[5]=(u*p*s-v*d*s+v*r*_-t*p*_-u*r*h+t*d*h)*C,e[6]=(v*c*s-a*p*s-v*r*l+t*p*l+a*r*h-t*c*h)*C,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*_+t*c*_)*C,e[8]=T*C,e[9]=(v*f*s-u*M*s-v*n*_+t*M*_+u*n*h-t*f*h)*C,e[10]=(a*M*s-v*o*s+v*n*l-t*M*l-a*n*h+t*o*h)*C,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*_-t*o*_)*C,e[12]=A*C,e[13]=(u*M*r-v*f*r+v*n*d-t*M*d-u*n*p+t*f*p)*C,e[14]=(v*o*r-a*M*r-v*n*c+t*M*c+a*n*p-t*o*p)*C,e[15]=(a*f*r-u*o*r+u*n*c-t*f*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,_=s*u,v=s*f,M=a*u,p=a*f,h=o*f,y=c*l,b=c*u,T=c*f,A=n.x,R=n.y,C=n.z;return r[0]=(1-(M+h))*A,r[1]=(_+T)*A,r[2]=(v-b)*A,r[3]=0,r[4]=(_-T)*R,r[5]=(1-(d+h))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(v+b)*C,r[9]=(p-y)*C,r[10]=(1-(d+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=jn.set(r[0],r[1],r[2]).length();const a=jn.set(r[4],r[5],r[6]).length(),o=jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Ht.copy(this);const l=1/s,u=1/a,f=1/o;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Qt,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),_=(n+r)/(n-r);let v,M;if(c)v=s/(a-s),M=a*s/(a-s);else if(o===Qt)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===hr)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Qt,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),_=-(n+r)/(n-r);let v,M;if(c)v=1/(a-s),M=a/(a-s);else if(o===Qt)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===hr)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=_,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jn=new N,Ht=new ct,$l=new N(0,0,0),Jl=new N(1,1,1),En=new N,Gi=new N,Dt=new N,wa=new ct,Ca=new Hn;class xn{constructor(e=0,t=0,n=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ql=0;const Pa=new N,$n=new Hn,cn=new ct,Hi=new N,vi=new N,ec=new N,tc=new Hn,Da=new N(1,0,0),La=new N(0,1,0),Ua=new N(0,0,1),Ia={type:"added"},nc={type:"removed"},Jn={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Ut extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new N,t=new xn,n=new Hn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ie}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Da,e)}rotateY(e){return this.rotateOnAxis(La,e)}rotateZ(e){return this.rotateOnAxis(Ua,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Da,e)}translateY(e){return this.translateOnAxis(La,e)}translateZ(e){return this.translateOnAxis(Ua,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(vi,Hi,this.up):cn.lookAt(Hi,vi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(cn),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ia),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nc),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ia),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,ec),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new N(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new N,hn=new N,Ir=new N,un=new N,Qn=new N,ei=new N,Na=new N,Nr=new N,Fr=new N,Or=new N,Br=new lt,zr=new lt,Vr=new lt;class Wt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kt.subVectors(r,t),hn.subVectors(n,t),Ir.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(hn),c=kt.dot(Ir),l=hn.dot(hn),u=hn.dot(Ir),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(l*c-o*u)*d,v=(a*u-o*c)*d;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Br.setScalar(0),zr.setScalar(0),Vr.setScalar(0),Br.fromBufferAttribute(e,t),zr.fromBufferAttribute(e,n),Vr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Br,s.x),a.addScaledVector(zr,s.y),a.addScaledVector(Vr,s.z),a}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),hn.subVectors(e,t),kt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),kt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,n),ei.subVectors(s,n),Nr.subVectors(e,n);const c=Qn.dot(Nr),l=ei.dot(Nr);if(c<=0&&l<=0)return t.copy(n);Fr.subVectors(e,r);const u=Qn.dot(Fr),f=ei.dot(Fr);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Qn,a);Or.subVectors(e,s);const _=Qn.dot(Or),v=ei.dot(Or);if(v>=0&&_<=v)return t.copy(s);const M=_*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(ei,o);const p=u*v-_*f;if(p<=0&&f-u>=0&&_-v>=0)return Na.subVectors(s,r),o=(f-u)/(f-u+(_-v)),t.copy(r).addScaledVector(Na,o);const h=1/(p+M+d);return a=M*h,o=d*h,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const No={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Hl(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Gr(a,s,e+1/3),this.g=Gr(a,s,e),this.b=Gr(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=No[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ye.workingToColorSpace(vt.copy(this),e),Math.round(He(vt.r*255,0,255))*65536+Math.round(He(vt.g*255,0,255))*256+Math.round(He(vt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(vt.copy(this),t);const n=vt.r,r=vt.g,s=vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Bt){Ye.workingToColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,r=vt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(ki);const n=yr(yn.h,ki.h,t),r=yr(yn.s,ki.s,t),s=yr(yn.l,ki.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new et;et.NAMES=No;let ic=0;class mr extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=oi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=es,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==es&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fr extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new N,Wi=new Fe;let rc=0;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class Fo extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oo extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sc=0;const Ot=new ct,Hr=new Ut,ti=new N,Lt=new Di,Mi=new Di,_t=new N;class qt extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uo(e)?Oo:Fo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Lt.min,Mi.min),Lt.expandByPoint(_t),_t.addVectors(Lt.max,Mi.max),Lt.expandByPoint(_t)):(Lt.expandByPoint(Mi.min),Lt.expandByPoint(Mi.max))}Lt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(ti.fromBufferAttribute(e,l),_t.add(ti)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new N,c[O]=new N;const l=new N,u=new N,f=new N,d=new Fe,_=new Fe,v=new Fe,M=new N,p=new N;function h(O,x,S){l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,O),_.fromBufferAttribute(s,x),v.fromBufferAttribute(s,S),u.sub(l),f.sub(l),_.sub(d),v.sub(d);const D=1/(_.x*v.y-v.x*_.y);isFinite(D)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(D),p.copy(f).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(D),o[O].add(M),o[x].add(M),o[S].add(M),c[O].add(p),c[x].add(p),c[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,x=y.length;O<x;++O){const S=y[O],D=S.start,G=S.count;for(let B=D,X=D+G;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new N,T=new N,A=new N,R=new N;function C(O){A.fromBufferAttribute(r,O),R.copy(A);const x=o[O];b.copy(x),b.sub(A.multiplyScalar(A.dot(x))).normalize(),T.crossVectors(R,x);const D=T.dot(c[O])<0?-1:1;a.setXYZW(O,b.x,b.y,b.z,D)}for(let O=0,x=y.length;O<x;++O){const S=y[O],D=S.start,G=S.count;for(let B=D,X=D+G;B<X;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let d=0,_=e.count;d<_;d+=3){const v=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let _=0,v=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?_=c[M]*o.data.stride+o.offset:_=c[M]*u;for(let h=0;h<u;h++)d[v++]=l[_++]}return new nn(d,u,f)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],_=e(d,n);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const _=l[f];u.push(_.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,_=f.length;d<_;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new ct,Un=new sa,Xi=new ra,Oa=new N,Yi=new N,qi=new N,Ki=new N,kr=new N,Zi=new N,Ba=new N,ji=new N;class Yt extends Ut{constructor(e=new qt,t=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(kr.fromBufferAttribute(f,e),a?Zi.addScaledVector(kr,u):Zi.addScaledVector(kr.sub(t),u))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(Xi.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Xi,Oa)===null||Un.origin.distanceToSquared(Oa)>(e.far-e.near)**2))&&(Fa.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],h=a[p.materialIndex],y=Math.max(p.start,_.start),b=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let T=y,A=b;T<A;T+=3){const R=o.getX(T),C=o.getX(T+1),O=o.getX(T+2);r=$i(this,h,e,n,l,u,f,R,C,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(o.count,_.start+_.count);for(let p=v,h=M;p<h;p+=3){const y=o.getX(p),b=o.getX(p+1),T=o.getX(p+2);r=$i(this,a,e,n,l,u,f,y,b,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],h=a[p.materialIndex],y=Math.max(p.start,_.start),b=Math.min(c.count,Math.min(p.start+p.count,_.start+_.count));for(let T=y,A=b;T<A;T+=3){const R=T,C=T+1,O=T+2;r=$i(this,h,e,n,l,u,f,R,C,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let p=v,h=M;p<h;p+=3){const y=p,b=p+1,T=p+2;r=$i(this,a,e,n,l,u,f,y,b,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function ac(i,e,t,n,r,s,a,o){let c;if(e.side===wt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===wn,o),c===null)return null;ji.copy(o),ji.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ji);return l<t.near||l>t.far?null:{distance:l,point:ji.clone(),object:i}}function $i(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Yi),i.getVertexPosition(c,qi),i.getVertexPosition(l,Ki);const u=ac(i,e,t,n,Yi,qi,Ki,Ba);if(u){const f=new N;Wt.getBarycoord(Ba,Yi,qi,Ki,f),r&&(u.uv=Wt.getInterpolatedAttribute(r,o,c,l,f,new Fe)),s&&(u.uv1=Wt.getInterpolatedAttribute(s,o,c,l,f,new Fe)),a&&(u.normal=Wt.getInterpolatedAttribute(a,o,c,l,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};Wt.getNormal(Yi,qi,Ki,d.normal),u.face=d,u.barycoord=f}return u}class Li extends qt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,_=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function v(M,p,h,y,b,T,A,R,C,O,x){const S=T/C,D=A/O,G=T/2,B=A/2,X=R/2,K=C+1,H=O+1;let k=0,$=0;const ce=new N;for(let se=0;se<H;se++){const J=se*D-B;for(let Te=0;Te<K;Te++){const ye=Te*S-G;ce[M]=ye*y,ce[p]=J*b,ce[h]=X,l.push(ce.x,ce.y,ce.z),ce[M]=0,ce[p]=0,ce[h]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Te/C),f.push(1-se/O),k+=1}}for(let se=0;se<O;se++)for(let J=0;J<C;J++){const Te=d+J+K*se,ye=d+J+K*(se+1),Re=d+(J+1)+K*(se+1),De=d+(J+1)+K*se;c.push(Te,ye,De),c.push(ye,Re,De),$+=6}o.addGroup(_,$,x),_+=$,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function oc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const lc={clone:di,merge:Et};var cc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cc,this.fragmentShader=hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=oc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zo extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new N,za=new Fe,Va=new Fe;class zt extends zo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,za,Va),t.subVectors(Va,za)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class uc extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new zt(ni,ii,e,t);s.layers=this.layers,this.add(s);const a=new zt(ni,ii,e,t);a.layers=this.layers,this.add(a);const o=new zt(ni,ii,e,t);o.layers=this.layers,this.add(o);const c=new zt(ni,ii,e,t);c.layers=this.layers,this.add(c);const l=new zt(ni,ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Vo extends yt{constructor(e=[],t=Gn,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Go extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:pn});s.uniforms.tEquirect.value=t;const a=new Yt(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Mt),new uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Ti extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fc={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),h=this._getHandJoint(l,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),_=.02,v=.005;l.inputState.pinching&&d>_+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=_-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dc extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pc extends yt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=gt,u=gt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new N,mc=new N,_c=new Ie;class bn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xr.subVectors(n,t).cross(mc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_c.getNormalMatrix(e),r=this.coplanarPoint(Xr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new ra,gc=new Fe(.5,.5),Ji=new N;class Ho{constructor(e=new bn,t=new bn,n=new bn,r=new bn,s=new bn,a=new bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],_=s[7],v=s[8],M=s[9],p=s[10],h=s[11],y=s[12],b=s[13],T=s[14],A=s[15];if(r[0].setComponents(l-a,_-u,h-v,A-y).normalize(),r[1].setComponents(l+a,_+u,h+v,A+y).normalize(),r[2].setComponents(l+o,_+f,h+M,A+b).normalize(),r[3].setComponents(l-o,_-f,h-M,A-b).normalize(),n)r[4].setComponents(c,d,p,T).normalize(),r[5].setComponents(l-c,_-d,h-p,A-T).normalize();else if(r[4].setComponents(l-c,_-d,h-p,A-T).normalize(),t===Qt)r[5].setComponents(l+c,_+d,h+p,A+T).normalize();else if(t===hr)r[5].setComponents(c,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);const t=gc.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ji.x=r.normal.x>0?e.max.x:e.min.x,Ji.y=r.normal.y>0?e.max.y:e.min.y,Ji.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ji)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ci extends yt{constructor(e,t,n=rn,r,s,a,o=gt,c=gt,l,u=gn,f=1){if(u!==gn&&u!==Vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xc extends Ci{constructor(e,t=rn,n=Gn,r,s,a=gt,o=gt,c,l=gn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ko extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _r extends qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,_=[],v=[],M=[],p=[];for(let h=0;h<u;h++){const y=h*d-a;for(let b=0;b<l;b++){const T=b*f-s;v.push(T,-y,0),M.push(0,0,1),p.push(b/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<o;y++){const b=y+l*h,T=y+l*(h+1),A=y+1+l*(h+1),R=y+1+l*h;_.push(b,T,R),_.push(T,A,R)}this.setIndex(_),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(M,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class dr extends qt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new N,d=new N,_=[],v=[],M=[],p=[];for(let h=0;h<=n;h++){const y=[],b=h/n;let T=0;h===0&&a===0?T=.5/t:h===n&&c===Math.PI&&(T=-.5/t);for(let A=0;A<=t;A++){const R=A/t;f.x=-e*Math.cos(r+R*s)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+b*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),p.push(R+T,1-b),y.push(l++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const b=u[h][y+1],T=u[h][y],A=u[h+1][y],R=u[h+1][y+1];(h!==0||a>0)&&_.push(b,T,R),(h!==n-1||c<Math.PI)&&_.push(T,A,R)}this.setIndex(_),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(M,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vc extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mc extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sc extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wo extends zo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ec extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ga=new ct;class yc{constructor(e,t,n=0,r=1/0){this.ray=new sa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ga.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ga),this}intersectObject(e,t=!0,n=[]){return Xs(e,this,n,t),n.sort(Ha),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Xs(e[r],this,n,t);return n.sort(Ha),n}}function Ha(i,e){return i.distance-e.distance}function Xs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Xs(s[a],e,t,!0)}}class ka{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tc extends kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Wa(i,e,t,n){const r=bc(n);switch(t){case Po:return i*e;case Lo:return i*e/r.components*r.byteLength;case Js:return i*e/r.components*r.byteLength;case ui:return i*e*2/r.components*r.byteLength;case Qs:return i*e*2/r.components*r.byteLength;case Do:return i*e*3/r.components*r.byteLength;case Xt:return i*e*4/r.components*r.byteLength;case ea:return i*e*4/r.components*r.byteLength;case ir:case rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ds:case ms:return Math.max(i,16)*Math.max(e,8)/4;case fs:case ps:return Math.max(i,8)*Math.max(e,8)/2;case _s:case gs:case vs:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xs:case Ss:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ts:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ws:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Us:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Is:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Os:case Bs:case zs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vs:case Gs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hs:case ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bc(i){switch(i){case Vt:case Ao:return{byteLength:1,components:1};case Ai:case Ro:case _n:return{byteLength:2,components:1};case js:case $s:return{byteLength:2,components:4};case rn:case Zs:case Jt:return{byteLength:4,components:1};case wo:case Co:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ks}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ks);function Xo(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ac(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)_=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((_,v)=>_.start-v.start);let d=0;for(let _=1;_<f.length;_++){const v=f[d],M=f[_];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,f[d]=M)}f.length=d+1;for(let _=0,v=f.length;_<v;_++){const M=f[_];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$c=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ah=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ph=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$h=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,du=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Su=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Au=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ru=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Du=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ku=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ku=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$u=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Rc,alphahash_pars_fragment:wc,alphamap_fragment:Cc,alphamap_pars_fragment:Pc,alphatest_fragment:Dc,alphatest_pars_fragment:Lc,aomap_fragment:Uc,aomap_pars_fragment:Ic,batching_pars_vertex:Nc,batching_vertex:Fc,begin_vertex:Oc,beginnormal_vertex:Bc,bsdfs:zc,iridescence_fragment:Vc,bumpmap_pars_fragment:Gc,clipping_planes_fragment:Hc,clipping_planes_pars_fragment:kc,clipping_planes_pars_vertex:Wc,clipping_planes_vertex:Xc,color_fragment:Yc,color_pars_fragment:qc,color_pars_vertex:Kc,color_vertex:Zc,common:jc,cube_uv_reflection_fragment:$c,defaultnormal_vertex:Jc,displacementmap_pars_vertex:Qc,displacementmap_vertex:eh,emissivemap_fragment:th,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:rh,envmap_fragment:sh,envmap_common_pars_fragment:ah,envmap_pars_fragment:oh,envmap_pars_vertex:lh,envmap_physical_pars_fragment:vh,envmap_vertex:ch,fog_vertex:hh,fog_pars_vertex:uh,fog_fragment:fh,fog_pars_fragment:dh,gradientmap_pars_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:_h,lights_lambert_pars_fragment:gh,lights_pars_begin:xh,lights_toon_fragment:Mh,lights_toon_pars_fragment:Sh,lights_phong_fragment:Eh,lights_phong_pars_fragment:yh,lights_physical_fragment:Th,lights_physical_pars_fragment:bh,lights_fragment_begin:Ah,lights_fragment_maps:Rh,lights_fragment_end:wh,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Ph,logdepthbuf_pars_vertex:Dh,logdepthbuf_vertex:Lh,map_fragment:Uh,map_pars_fragment:Ih,map_particle_fragment:Nh,map_particle_pars_fragment:Fh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:Bh,morphinstance_vertex:zh,morphcolor_vertex:Vh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Hh,morphtarget_vertex:kh,normal_fragment_begin:Wh,normal_fragment_maps:Xh,normal_pars_fragment:Yh,normal_pars_vertex:qh,normal_vertex:Kh,normalmap_pars_fragment:Zh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:$h,clearcoat_pars_fragment:Jh,iridescence_pars_fragment:Qh,opaque_fragment:eu,packing:tu,premultiplied_alpha_fragment:nu,project_vertex:iu,dithering_fragment:ru,dithering_pars_fragment:su,roughnessmap_fragment:au,roughnessmap_pars_fragment:ou,shadowmap_pars_fragment:lu,shadowmap_pars_vertex:cu,shadowmap_vertex:hu,shadowmask_pars_fragment:uu,skinbase_vertex:fu,skinning_pars_vertex:du,skinning_vertex:pu,skinnormal_vertex:mu,specularmap_fragment:_u,specularmap_pars_fragment:gu,tonemapping_fragment:xu,tonemapping_pars_fragment:vu,transmission_fragment:Mu,transmission_pars_fragment:Su,uv_pars_fragment:Eu,uv_pars_vertex:yu,uv_vertex:Tu,worldpos_vertex:bu,background_vert:Au,background_frag:Ru,backgroundCube_vert:wu,backgroundCube_frag:Cu,cube_vert:Pu,cube_frag:Du,depth_vert:Lu,depth_frag:Uu,distance_vert:Iu,distance_frag:Nu,equirect_vert:Fu,equirect_frag:Ou,linedashed_vert:Bu,linedashed_frag:zu,meshbasic_vert:Vu,meshbasic_frag:Gu,meshlambert_vert:Hu,meshlambert_frag:ku,meshmatcap_vert:Wu,meshmatcap_frag:Xu,meshnormal_vert:Yu,meshnormal_frag:qu,meshphong_vert:Ku,meshphong_frag:Zu,meshphysical_vert:ju,meshphysical_frag:$u,meshtoon_vert:Ju,meshtoon_frag:Qu,points_vert:ef,points_frag:tf,shadow_vert:nf,shadow_frag:rf,sprite_vert:sf,sprite_frag:af},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},$t={basic:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Et([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Et([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Et([le.points,le.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Et([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Et([le.common,le.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Et([le.sprite,le.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Et([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Et([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};$t.physical={uniforms:Et([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Qi={r:0,b:0,g:0},Nn=new xn,of=new ct;function lf(i,e,t,n,r,s,a){const o=new et(0);let c=s===!0?0:1,l,u,f=null,d=0,_=null;function v(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function M(b){let T=!1;const A=v(b);A===null?h(o,c):A&&A.isColor&&(h(A,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,T){const A=v(T);A&&(A.isCubeTexture||A.mapping===pr)?(u===void 0&&(u=new Yt(new Li(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:di($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Nn.copy(T.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(of.makeRotationFromEuler(Nn)),u.material.toneMapped=Ye.getTransfer(A.colorSpace)!==$e,(f!==A||d!==A.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,_=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Yt(new _r(2,2),new sn({name:"BackgroundMaterial",uniforms:di($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(A.colorSpace)!==$e,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,f=A,d=A.version,_=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,T){b.getRGB(Qi,Bo(i)),n.buffers.color.setClear(Qi.r,Qi.g,Qi.b,T,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),c=T,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(o,c)},render:M,addToRenderList:p,dispose:y}}function cf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,D,G,B,X){let K=!1;const H=f(B,G,D);s!==H&&(s=H,l(s.object)),K=_(S,B,G,X),K&&v(S,B,G,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,T(S,D,G,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,D,G){const B=G.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let K=X[D.id];K===void 0&&(K={},X[D.id]=K);let H=K[B];return H===void 0&&(H=d(c()),K[B]=H),H}function d(S){const D=[],G=[],B=[];for(let X=0;X<t;X++)D[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:B,object:S,attributes:{},index:null}}function _(S,D,G,B){const X=s.attributes,K=D.attributes;let H=0;const k=G.getAttributes();for(const $ in k)if(k[$].location>=0){const se=X[$];let J=K[$];if(J===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),se===void 0||se.attribute!==J||J&&se.data!==J.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function v(S,D,G,B){const X={},K=D.attributes;let H=0;const k=G.getAttributes();for(const $ in k)if(k[$].location>=0){let se=K[$];se===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const J={};J.attribute=se,se&&se.data&&(J.data=se.data),X[$]=J,H++}s.attributes=X,s.attributesNum=H,s.index=B}function M(){const S=s.newAttributes;for(let D=0,G=S.length;D<G;D++)S[D]=0}function p(S){h(S,0)}function h(S,D){const G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),X[S]!==D&&(i.vertexAttribDivisor(S,D),X[S]=D)}function y(){const S=s.newAttributes,D=s.enabledAttributes;for(let G=0,B=D.length;G<B;G++)D[G]!==S[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function b(S,D,G,B,X,K,H){H===!0?i.vertexAttribIPointer(S,D,G,X,K):i.vertexAttribPointer(S,D,G,B,X,K)}function T(S,D,G,B){M();const X=B.attributes,K=G.getAttributes(),H=D.defaultAttributeValues;for(const k in K){const $=K[k];if($.location>=0){let ce=X[k];if(ce===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const se=ce.normalized,J=ce.itemSize,Te=e.get(ce);if(Te===void 0)continue;const ye=Te.buffer,Re=Te.type,De=Te.bytesPerElement,V=Re===i.INT||Re===i.UNSIGNED_INT||ce.gpuType===Zs;if(ce.isInterleavedBufferAttribute){const q=ce.data,he=q.stride,we=ce.offset;if(q.isInstancedInterleavedBuffer){for(let de=0;de<$.locationSize;de++)h($.location+de,q.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let de=0;de<$.locationSize;de++)p($.location+de);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let de=0;de<$.locationSize;de++)b($.location+de,J/$.locationSize,Re,se,he*De,(we+J/$.locationSize*de)*De,V)}else{if(ce.isInstancedBufferAttribute){for(let q=0;q<$.locationSize;q++)h($.location+q,ce.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let q=0;q<$.locationSize;q++)p($.location+q);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let q=0;q<$.locationSize;q++)b($.location+q,J/$.locationSize,Re,se,J*De,J/$.locationSize*q*De,V)}}else if(H!==void 0){const se=H[k];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv($.location,se);break;case 3:i.vertexAttrib3fv($.location,se);break;case 4:i.vertexAttrib4fv($.location,se);break;default:i.vertexAttrib1fv($.location,se)}}}}y()}function A(){O();for(const S in n){const D=n[S];for(const G in D){const B=D[G];for(const X in B)u(B[X].object),delete B[X];delete D[G]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const G in D){const B=D[G];for(const X in B)u(B[X].object),delete B[X];delete D[G]}delete n[S.id]}function C(S){for(const D in n){const G=n[D];if(G[S.id]===void 0)continue;const B=G[S.id];for(const X in B)u(B[X].object),delete B[X];delete G[S.id]}}function O(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function hf(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];t.update(_,n,1)}function c(l,u,f,d){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<l.length;v++)a(l[v],u[v],d[v]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let v=0;for(let M=0;M<f;M++)v+=u[M]*d[M];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function uf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Xt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const O=C===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Vt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jt&&!O)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:T,maxSamples:A,samples:R}}function ff(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new bn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,_){const v=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const y=s?0:n,b=y*4;let T=h.clippingState||null;c.value=T,T=u(v,d,b,_);for(let A=0;A!==b;++A)T[A]=t[A];h.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,_,v){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,v!==!0||p===null){const h=_+M*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,T=_;b!==M;++b,T+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function df(i){let e=new WeakMap;function t(a,o){return o===ls?a.mapping=Gn:o===cs&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ls||o===cs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Go(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Rn=4,Xa=[.125,.215,.35,.446,.526,.582],Bn=20,pf=256,Si=new Wo,Ya=new et;let Yr=null,qr=0,Kr=0,Zr=!1;const mf=new N;class qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=mf}=s;Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr,qr,Kr),this._renderer.xr.enabled=Zr,e.scissorTest=!1,ri(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:_n,format:Xt,colorSpace:fi,depthBuffer:!1},r=Ka(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_f(s)),this._blurMaterial=xf(s,e,t),this._ggxMaterial=gf(s,e,t)}return r}_compileMaterial(e){const t=new Yt(new qt,e);this._renderer.compile(t,Si)}_sceneToCubeUV(e,t,n,r,s){const c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,_=f.toneMapping;f.getClearColor(Ya),f.toneMapping=en,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Li,new fr({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let h=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,h=!0):(p.color.copy(Ya),h=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):T===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;ri(r,T*A,b>2?A:0,A,A),f.setRenderTarget(r),h&&f.render(M,c),f.render(e,c)}f.toneMapping=_,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gn||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ri(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Si)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,_=f*d,{_lodMax:v}=this,M=this._sizeLods[n],p=3*M*(n>v-Rn?n-v+Rn:0),h=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=_,c.mipInt.value=v-t,ri(s,p,h,3*M,2*M),r.setRenderTarget(s),r.render(o,Si),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,ri(e,p,h,3*M,2*M),r.setRenderTarget(e),r.render(o,Si)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Bn-1),M=s/v,p=isFinite(s)?1+Math.floor(u*M):Bn;p>Bn&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const h=[];let y=0;for(let C=0;C<Bn;++C){const O=C/M,x=Math.exp(-O*O/2);h.push(x),C===0?y+=x:C<p&&(y+=2*x)}for(let C=0;C<h.length;C++)h[C]=h[C]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;const T=this._sizeLods[r],A=3*T*(r>b-Rn?r-b+Rn:0),R=4*(this._cubeSize-T);ri(t,A,R,3*T,2*T),c.setRenderTarget(t),c.render(f,Si)}}function _f(i){const e=[],t=[],n=[];let r=i;const s=i-Rn+1+Xa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Rn?c=Xa[a-i+Rn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,v=6,M=3,p=2,h=1,y=new Float32Array(M*v*_),b=new Float32Array(p*v*_),T=new Float32Array(h*v*_);for(let R=0;R<_;R++){const C=R%3*2/3-1,O=R>2?0:-1,x=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];y.set(x,M*v*R),b.set(d,p*v*R);const S=[R,R,R,R,R,R];T.set(S,h*v*R)}const A=new qt;A.setAttribute("position",new nn(y,M)),A.setAttribute("uv",new nn(b,p)),A.setAttribute("faceIndex",new nn(T,h)),n.push(new Yt(A,null)),r>Rn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ka(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ri(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gf(i,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function xf(i,e,t){const n=new Float32Array(Bn),r=new N(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Za(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ja(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function gr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ls||c===cs,u=c===Gn||c===hi;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new qa(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const _=o.image;return l&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new qa(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&wi("WebGLRenderer: "+n+" extension not supported."),r}}}function Sf(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER)}function l(f){const d=[],_=f.index,v=f.attributes.position;let M=0;if(_!==null){const y=_.array;M=_.version;for(let b=0,T=y.length;b<T;b+=3){const A=y[b+0],R=y[b+1],C=y[b+2];d.push(A,R,R,C,C,A)}}else if(v!==void 0){const y=v.array;M=v.version;for(let b=0,T=y.length/3-1;b<T;b+=3){const A=b+0,R=b+1,C=b+2;d.push(A,R,R,C,C,A)}}else return;const p=new(Uo(d)?Oo:Fo)(d,1);p.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Ef(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,_){i.drawElements(n,_,s,d*a),t.update(_,n,1)}function l(d,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,d*a,v),t.update(_,n,v))}function u(d,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=_[h];t.update(p,n,1)}function f(d,_,v,M){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/a,_[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(n,_,0,s,d,0,M,0,v);let h=0;for(let y=0;y<v;y++)h+=_[y]*M[y];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function yf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Tf(i,e,t){const n=new WeakMap,r=new lt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let T=o.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*f),C=new Io(R,T,A,f);C.type=Jt,C.needsUpdate=!0;const O=b*4;for(let S=0;S<f;S++){const D=p[S],G=h[S],B=y[S],X=T*A*4*S;for(let K=0;K<D.count;K++){const H=K*O;_===!0&&(r.fromBufferAttribute(D,K),R[X+H+0]=r.x,R[X+H+1]=r.y,R[X+H+2]=r.z,R[X+H+3]=0),v===!0&&(r.fromBufferAttribute(G,K),R[X+H+4]=r.x,R[X+H+5]=r.y,R[X+H+6]=r.z,R[X+H+7]=0),M===!0&&(r.fromBufferAttribute(B,K),R[X+H+8]=r.x,R[X+H+9]=r.y,R[X+H+10]=r.z,R[X+H+11]=B.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Fe(T,A)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let M=0;M<l.length;M++)_+=l[M];const v=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function bf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Af={[xo]:"LINEAR_TONE_MAPPING",[vo]:"REINHARD_TONE_MAPPING",[Mo]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[yo]:"AGX_TONE_MAPPING",[To]:"NEUTRAL_TONE_MAPPING",[Eo]:"CUSTOM_TONE_MAPPING"};function Rf(i,e,t,n,r){const s=new tn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new tn(e,t,{type:_n,depthBuffer:!1,stencilBuffer:!1}),o=new qt;o.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new It([0,2,0,0,2,0],2));const c=new vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Yt(o,c),u=new Wo(-1,1,1,-1,0,1);let f=null,d=null,_=!1,v,M=null,p=[],h=!1;this.setSize=function(y,b){s.setSize(y,b),a.setSize(y,b);for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){p=y,h=p.length>0&&p[0].isRenderPass===!0;const b=s.width,T=s.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(b,T)}},this.begin=function(y,b){if(_||y.toneMapping===en&&p.length===0)return!1;if(M=b,b!==null){const T=b.width,A=b.height;(s.width!==T||s.height!==A)&&this.setSize(T,A)}return h===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=en,!0},this.hasRenderPass=function(){return h},this.end=function(y,b){y.toneMapping=v,_=!0;let T=s,A=a;for(let R=0;R<p.length;R++){const C=p[R];if(C.enabled!==!1&&(C.render(y,A,T,b),C.needsSwap!==!1)){const O=T;T=A,A=O}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,c.defines={},Ye.getTransfer(f)===$e&&(c.defines.SRGB_TRANSFER="");const R=Af[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(M),y.render(l,u),M=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Yo=new yt,Ys=new Ci(1,1),qo=new Io,Ko=new Zl,Zo=new Vo,$a=[],Ja=[],Qa=new Float32Array(16),eo=new Float32Array(9),to=new Float32Array(4);function pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$a[r];if(s===void 0&&(s=new Float32Array(r),$a[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xr(i,e){let t=Ja[e];t===void 0&&(t=new Int32Array(e),Ja[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Lf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;to.set(n),i.uniformMatrix2fv(this.addr,!1,to),mt(t,n)}}function Uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;eo.set(n),i.uniformMatrix3fv(this.addr,!1,eo),mt(t,n)}}function If(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Qa.set(n),i.uniformMatrix4fv(this.addr,!1,Qa),mt(t,n)}}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function kf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ys.compareFunction=t.isReversedDepthBuffer()?na:ta,s=Ys):s=Yo,t.setTexture2D(e||s,r)}function Wf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ko,r)}function Xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zo,r)}function Yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qo,r)}function qf(i){switch(i){case 5126:return wf;case 35664:return Cf;case 35665:return Pf;case 35666:return Df;case 35674:return Lf;case 35675:return Uf;case 35676:return If;case 5124:case 35670:return Nf;case 35667:case 35671:return Ff;case 35668:case 35672:return Of;case 35669:case 35673:return Bf;case 5125:return zf;case 36294:return Vf;case 36295:return Gf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return Yf}}function Kf(i,e){i.uniform1fv(this.addr,e)}function Zf(i,e){const t=pi(e,this.size,2);i.uniform2fv(this.addr,t)}function jf(i,e){const t=pi(e,this.size,3);i.uniform3fv(this.addr,t)}function $f(i,e){const t=pi(e,this.size,4);i.uniform4fv(this.addr,t)}function Jf(i,e){const t=pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qf(i,e){const t=pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ed(i,e){const t=pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function td(i,e){i.uniform1iv(this.addr,e)}function nd(i,e){i.uniform2iv(this.addr,e)}function id(i,e){i.uniform3iv(this.addr,e)}function rd(i,e){i.uniform4iv(this.addr,e)}function sd(i,e){i.uniform1uiv(this.addr,e)}function ad(i,e){i.uniform2uiv(this.addr,e)}function od(i,e){i.uniform3uiv(this.addr,e)}function ld(i,e){i.uniform4uiv(this.addr,e)}function cd(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ys:a=Yo;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function hd(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ko,s[a])}function ud(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Zo,s[a])}function fd(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qo,s[a])}function dd(i){switch(i){case 5126:return Kf;case 35664:return Zf;case 35665:return jf;case 35666:return $f;case 35674:return Jf;case 35675:return Qf;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return nd;case 35668:case 35672:return id;case 35669:case 35673:return rd;case 5125:return sd;case 36294:return ad;case 36295:return od;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return hd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return fd}}class pd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qf(t.type)}}class md{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dd(t.type)}}class _d{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function no(i,e){i.seq.push(e),i.map[e.id]=e}function gd(i,e,t){const n=i.name,r=n.length;for(jr.lastIndex=0;;){const s=jr.exec(n),a=jr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){no(t,l===void 0?new pd(o,i,e):new md(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new _d(o),no(t,f)),t=f}}}class lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);gd(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xd=37297;let vd=0;function Md(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ro=new Ie;function Sd(i){Ye._getMatrix(ro,Ye.workingColorSpace,i);const e=`mat3( ${ro.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function so(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Md(i.getShaderSource(e),o)}else return s}function Ed(i,e){const t=Sd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yd={[xo]:"Linear",[vo]:"Reinhard",[Mo]:"Cineon",[So]:"ACESFilmic",[yo]:"AgX",[To]:"Neutral",[Eo]:"Custom"};function Td(i,e){const t=yd[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const er=new N;function bd(){Ye.getLuminanceCoefficients(er);const i=er.x.toFixed(4),e=er.y.toFixed(4),t=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ad(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bi).join(`
`)}function Rd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bi(i){return i!==""}function ao(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cd=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(i){return i.replace(Cd,Dd)}const Pd=new Map;function Dd(i,e){let t=Ne[e];if(t===void 0){const n=Pd.get(e);if(n!==void 0)t=Ne[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qs(t)}const Ld=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(i){return i.replace(Ld,Ud)}function Ud(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function co(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Id={[nr]:"SHADOWMAP_TYPE_PCF",[yi]:"SHADOWMAP_TYPE_VSM"};function Nd(i){return Id[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fd={[Gn]:"ENVMAP_TYPE_CUBE",[hi]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function Od(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fd[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bd={[hi]:"ENVMAP_MODE_REFRACTION"};function zd(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bd[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vd={[go]:"ENVMAP_BLENDING_MULTIPLY",[wl]:"ENVMAP_BLENDING_MIX",[Cl]:"ENVMAP_BLENDING_ADD"};function Gd(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vd[i.combine]||"ENVMAP_BLENDING_NONE"}function Hd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kd(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Nd(t),l=Od(t),u=zd(t),f=Gd(t),d=Hd(t),_=Ad(t),v=Rd(s),M=r.createProgram();let p,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(bi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(bi).join(`
`),h.length>0&&(h+=`
`)):(p=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),h=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?Ne.tonemapping_pars_fragment:"",t.toneMapping!==en?Td("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Ed("linearToOutputTexel",t.outputColorSpace),bd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bi).join(`
`)),a=qs(a),a=ao(a,t),a=oo(a,t),o=qs(o),o=ao(o,t),o=oo(o,t),a=lo(a),o=lo(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=y+p+a,T=y+h+o,A=io(r,r.VERTEX_SHADER,b),R=io(r,r.FRAGMENT_SHADER,T);r.attachShader(M,A),r.attachShader(M,R),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(D){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(M)||"",B=r.getShaderInfoLog(A)||"",X=r.getShaderInfoLog(R)||"",K=G.trim(),H=B.trim(),k=X.trim();let $=!0,ce=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,A,R);else{const se=so(r,A,"vertex"),J=so(r,R,"fragment");Xe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+K+`
`+se+`
`+J)}else K!==""?Le("WebGLProgram: Program Info Log:",K):(H===""||k==="")&&(ce=!1);ce&&(D.diagnostics={runnable:$,programLog:K,vertexShader:{log:H,prefix:p},fragmentShader:{log:k,prefix:h}})}r.deleteShader(A),r.deleteShader(R),O=new lr(r,M),x=wd(r,M)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,xd)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vd++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=R,this}let Wd=0;class Xd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yd(e),t.set(e,n)),n}}class Yd{constructor(e){this.id=Wd++,this.code=e,this.usedTimes=0}}function qd(i,e,t,n,r,s,a){const o=new aa,c=new Xd,l=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,D,G,B){const X=G.fog,K=B.geometry,H=x.isMeshStandardMaterial?G.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),$=k&&k.mapping===pr?k.image.height:null,ce=v[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const se=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,J=se!==void 0?se.length:0;let Te=0;K.morphAttributes.position!==void 0&&(Te=1),K.morphAttributes.normal!==void 0&&(Te=2),K.morphAttributes.color!==void 0&&(Te=3);let ye,Re,De,V;if(ce){const Ze=$t[ce];ye=Ze.vertexShader,Re=Ze.fragmentShader}else ye=x.vertexShader,Re=x.fragmentShader,c.update(x),De=c.getVertexShaderID(x),V=c.getFragmentShaderID(x);const q=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,de=B.isBatchedMesh===!0,ke=!!x.map,ot=!!x.matcap,Oe=!!k,We=!!x.aoMap,Ge=!!x.lightMap,Be=!!x.bumpMap,ht=!!x.normalMap,w=!!x.displacementMap,ut=!!x.emissiveMap,Ke=!!x.metalnessMap,nt=!!x.roughnessMap,ve=x.anisotropy>0,E=x.clearcoat>0,m=x.dispersion>0,L=x.iridescence>0,Y=x.sheen>0,j=x.transmission>0,W=ve&&!!x.anisotropyMap,Se=E&&!!x.clearcoatMap,ie=E&&!!x.clearcoatNormalMap,xe=E&&!!x.clearcoatRoughnessMap,Pe=L&&!!x.iridescenceMap,ee=L&&!!x.iridescenceThicknessMap,ae=Y&&!!x.sheenColorMap,ge=Y&&!!x.sheenRoughnessMap,Me=!!x.specularMap,re=!!x.specularColorMap,ze=!!x.specularIntensityMap,P=j&&!!x.transmissionMap,fe=j&&!!x.thicknessMap,te=!!x.gradientMap,pe=!!x.alphaMap,Q=x.alphaTest>0,Z=!!x.alphaHash,ne=!!x.extensions;let Ue=en;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const it={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:ye,fragmentShader:Re,defines:x.defines,customVertexShaderID:De,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:de,batchingColor:de&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:fi,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:ot,envMap:Oe,envMapMode:Oe&&k.mapping,envMapCubeUVHeight:$,aoMap:We,lightMap:Ge,bumpMap:Be,normalMap:ht,displacementMap:w,emissiveMap:ut,normalMapObjectSpace:ht&&x.normalMapType===Ul,normalMapTangentSpace:ht&&x.normalMapType===Ll,metalnessMap:Ke,roughnessMap:nt,anisotropy:ve,anisotropyMap:W,clearcoat:E,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:m,iridescence:L,iridescenceMap:Pe,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:ae,sheenRoughnessMap:ge,specularMap:Me,specularColorMap:re,specularIntensityMap:ze,transmission:j,transmissionMap:P,thicknessMap:fe,gradientMap:te,opaque:x.transparent===!1&&x.blending===oi&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:Z,combine:x.combine,mapUv:ke&&M(x.map.channel),aoMapUv:We&&M(x.aoMap.channel),lightMapUv:Ge&&M(x.lightMap.channel),bumpMapUv:Be&&M(x.bumpMap.channel),normalMapUv:ht&&M(x.normalMap.channel),displacementMapUv:w&&M(x.displacementMap.channel),emissiveMapUv:ut&&M(x.emissiveMap.channel),metalnessMapUv:Ke&&M(x.metalnessMap.channel),roughnessMapUv:nt&&M(x.roughnessMap.channel),anisotropyMapUv:W&&M(x.anisotropyMap.channel),clearcoatMapUv:Se&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&M(x.sheenRoughnessMap.channel),specularMapUv:Me&&M(x.specularMap.channel),specularColorMapUv:re&&M(x.specularColorMap.channel),specularIntensityMapUv:ze&&M(x.specularIntensityMap.channel),transmissionMapUv:P&&M(x.transmissionMap.channel),thicknessMapUv:fe&&M(x.thicknessMap.channel),alphaMapUv:pe&&M(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ht||ve),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(ke||pe),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===$e,decodeVideoTextureEmissive:ut&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===$e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fn,flipSided:x.side===wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function h(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)S.push(D),S.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(y(S,x),b(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const S=v[x.type];let D;if(S){const G=$t[S];D=lc.clone(G.uniforms)}else D=x.uniforms;return D}function A(x,S){let D=f.get(S);return D!==void 0?++D.usedTimes:(D=new kd(i,S,x,s),u.push(D),f.set(S,D)),D}function R(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function C(x){c.remove(x)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:O}}function Kd(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Zd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,_,v,M,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:_,groupOrder:v,renderOrder:f.renderOrder,z:M,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=_,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=M,h.group=p),e++,h}function o(f,d,_,v,M,p){const h=a(f,d,_,v,M,p);_.transmission>0?n.push(h):_.transparent===!0?r.push(h):t.push(h)}function c(f,d,_,v,M,p){const h=a(f,d,_,v,M,p);_.transmission>0?n.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||Zd),n.length>1&&n.sort(d||ho),r.length>1&&r.sort(d||ho)}function u(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function jd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new uo,i.set(n,[a])):r>=s.length?(a=new uo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $d(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new et};break;case"SpotLight":t={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Jd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qd=0;function ep(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tp(i){const e=new $d,t=Jd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new ct,a=new ct;function o(l){let u=0,f=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let _=0,v=0,M=0,p=0,h=0,y=0,b=0,T=0,A=0,R=0,C=0;l.sort(ep);for(let x=0,S=l.length;x<S;x++){const D=l[x],G=D.color,B=D.intensity,X=D.distance;let K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ui?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=G.r*B,f+=G.g*B,d+=G.b*B;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],B);C++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,$=t.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[_]=$,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=D.shadow.matrix,y++}n.directional[_]=H,_++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(G).multiplyScalar(B),H.distance=X,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[M]=H;const k=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,k.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[M]=k.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=K,T++}M++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(G).multiplyScalar(B),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=H,p++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const k=D.shadow,$=t.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=D.shadow.matrix,b++}n.point[v]=H,v++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(B),H.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[h]=H,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==_||O.pointLength!==v||O.spotLength!==M||O.rectAreaLength!==p||O.hemiLength!==h||O.numDirectionalShadows!==y||O.numPointShadows!==b||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==C)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=p,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=T+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,O.directionalLength=_,O.pointLength=v,O.spotLength=M,O.rectAreaLength=p,O.hemiLength=h,O.numDirectionalShadows=y,O.numPointShadows=b,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=C,n.version=Qd++)}function c(l,u){let f=0,d=0,_=0,v=0,M=0;const p=u.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const b=l[h];if(b.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(b.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),_++}else if(b.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:n}}function fo(i){const e=new tp(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function np(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new fo(i),e.set(r,[o])):s>=a.length?(o=new fo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sp=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],ap=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],po=new ct,Ei=new N,$r=new N;function op(i,e,t){let n=new Ho;const r=new Fe,s=new Fe,a=new lt,o=new Mc,c=new Sc,l={},u=t.maxTextureSize,f={[wn]:wt,[wt]:wn,[fn]:fn},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:ip,fragmentShader:rp}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new qt;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Yt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let h=this.type;this.render=function(R,C,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;R.type===cl&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=nr);const x=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),G=i.state;G.setBlending(pn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=h!==this.type;B&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(K=>K.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,K=R.length;X<K;X++){const H=R[X],k=H.shadow;if(k===void 0){Le("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const $=k.getFrameExtents();if(r.multiply($),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,k.mapSize.y=s.y)),k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===yi){if(H.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new tn(r.x,r.y,{format:ui,type:_n,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Ci(r.x,r.y,Jt),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=gn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=gt,k.map.depthTexture.magFilter=gt}else{H.isPointLight?(k.map=new Go(r.x),k.map.depthTexture=new xc(r.x,rn)):(k.map=new tn(r.x,r.y),k.map.depthTexture=new Ci(r.x,r.y,rn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=gn;const se=i.state.buffers.depth.getReversed();this.type===nr?(k.map.depthTexture.compareFunction=se?na:ta,k.map.depthTexture.minFilter=Mt,k.map.depthTexture.magFilter=Mt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=gt,k.map.depthTexture.magFilter=gt)}k.camera.updateProjectionMatrix()}const ce=k.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ce;se++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,se),i.clear();else{se===0&&(i.setRenderTarget(k.map),i.clear());const J=k.getViewport(se);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),G.viewport(a)}if(H.isPointLight){const J=k.camera,Te=k.matrix,ye=H.distance||J.far;ye!==J.far&&(J.far=ye,J.updateProjectionMatrix()),Ei.setFromMatrixPosition(H.matrixWorld),J.position.copy(Ei),$r.copy(J.position),$r.add(sp[se]),J.up.copy(ap[se]),J.lookAt($r),J.updateMatrixWorld(),Te.makeTranslation(-Ei.x,-Ei.y,-Ei.z),po.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),k._frustum.setFromProjectionMatrix(po,J.coordinateSystem,J.reversedDepth)}else k.updateMatrices(H);n=k.getFrustum(),T(C,O,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===yi&&y(k,O),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(x,S,D)};function y(R,C){const O=e.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new tn(r.x,r.y,{format:ui,type:_n})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,O,d,M,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,O,_,M,null)}function b(R,C,O,x){let S=null;const D=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=O.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=S.uuid,B=C.uuid;let X=l[G];X===void 0&&(X={},l[G]=X);let K=X[B];K===void 0&&(K=S.clone(),X[B]=K,C.addEventListener("dispose",A)),S=K}if(S.visible=C.visible,S.wireframe=C.wireframe,x===yi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=i.properties.get(S);G.light=O}return S}function T(R,C,O,x,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===yi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const B=e.update(R),X=R.material;if(Array.isArray(X)){const K=B.groups;for(let H=0,k=K.length;H<k;H++){const $=K[H],ce=X[$.materialIndex];if(ce&&ce.visible){const se=b(R,ce,x,S);R.onBeforeShadow(i,R,C,O,B,se,$),i.renderBufferDirect(O,null,B,se,R,$),R.onAfterShadow(i,R,C,O,B,se,$)}}}else if(X.visible){const K=b(R,X,x,S);R.onBeforeShadow(i,R,C,O,B,K,null),i.renderBufferDirect(O,null,B,K,R,null),R.onAfterShadow(i,R,C,O,B,K,null)}}const G=R.children;for(let B=0,X=G.length;B<X;B++)T(G[B],C,O,x,S)}function A(R){R.target.removeEventListener("dispose",A);for(const O in l){const x=l[O],S=R.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const lp={[ts]:ns,[is]:as,[rs]:os,[ci]:ss,[ns]:ts,[as]:is,[os]:rs,[ss]:ci};function cp(i,e){function t(){let P=!1;const fe=new lt;let te=null;const pe=new lt(0,0,0,0);return{setMask:function(Q){te!==Q&&!P&&(i.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){P=Q},setClear:function(Q,Z,ne,Ue,it){it===!0&&(Q*=Ue,Z*=Ue,ne*=Ue),fe.set(Q,Z,ne,Ue),pe.equals(fe)===!1&&(i.clearColor(Q,Z,ne,Ue),pe.copy(fe))},reset:function(){P=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let P=!1,fe=!1,te=null,pe=null,Q=null;return{setReversed:function(Z){if(fe!==Z){const ne=e.get("EXT_clip_control");Z?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),fe=Z;const Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return fe},setTest:function(Z){Z?q(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Z){te!==Z&&!P&&(i.depthMask(Z),te=Z)},setFunc:function(Z){if(fe&&(Z=lp[Z]),pe!==Z){switch(Z){case ts:i.depthFunc(i.NEVER);break;case ns:i.depthFunc(i.ALWAYS);break;case is:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case rs:i.depthFunc(i.EQUAL);break;case ss:i.depthFunc(i.GEQUAL);break;case as:i.depthFunc(i.GREATER);break;case os:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Z}},setLocked:function(Z){P=Z},setClear:function(Z){Q!==Z&&(fe&&(Z=1-Z),i.clearDepth(Z),Q=Z)},reset:function(){P=!1,te=null,pe=null,Q=null,fe=!1}}}function r(){let P=!1,fe=null,te=null,pe=null,Q=null,Z=null,ne=null,Ue=null,it=null;return{setTest:function(Ze){P||(Ze?q(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Ze){fe!==Ze&&!P&&(i.stencilMask(Ze),fe=Ze)},setFunc:function(Ze,Kt,an){(te!==Ze||pe!==Kt||Q!==an)&&(i.stencilFunc(Ze,Kt,an),te=Ze,pe=Kt,Q=an)},setOp:function(Ze,Kt,an){(Z!==Ze||ne!==Kt||Ue!==an)&&(i.stencilOp(Ze,Kt,an),Z=Ze,ne=Kt,Ue=an)},setLocked:function(Ze){P=Ze},setClear:function(Ze){it!==Ze&&(i.clearStencil(Ze),it=Ze)},reset:function(){P=!1,fe=null,te=null,pe=null,Q=null,Z=null,ne=null,Ue=null,it=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,_=[],v=null,M=!1,p=null,h=null,y=null,b=null,T=null,A=null,R=null,C=new et(0,0,0),O=0,x=!1,S=null,D=null,G=null,B=null,X=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),H=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=k>=2);let ce=null,se={};const J=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),ye=new lt().fromArray(J),Re=new lt().fromArray(Te);function De(P,fe,te,pe){const Q=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<te;ne++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(fe+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Z}const V={};V[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(ci),Be(!1),ht(_a),q(i.CULL_FACE),We(pn);function q(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function he(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function we(P,fe){return f[P]!==fe?(i.bindFramebuffer(P,fe),f[P]=fe,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=fe),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function de(P,fe){let te=_,pe=!1;if(P){te=d.get(fe),te===void 0&&(te=[],d.set(fe,te));const Q=P.textures;if(te.length!==Q.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ne=Q.length;Z<ne;Z++)te[Z]=i.COLOR_ATTACHMENT0+Z;te.length=Q.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function ke(P){return v!==P?(i.useProgram(P),v=P,!0):!1}const ot={[On]:i.FUNC_ADD,[ul]:i.FUNC_SUBTRACT,[fl]:i.FUNC_REVERSE_SUBTRACT};ot[dl]=i.MIN,ot[pl]=i.MAX;const Oe={[ml]:i.ZERO,[_l]:i.ONE,[gl]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[yl]:i.SRC_ALPHA_SATURATE,[Sl]:i.DST_COLOR,[vl]:i.DST_ALPHA,[xl]:i.ONE_MINUS_SRC_COLOR,[es]:i.ONE_MINUS_SRC_ALPHA,[El]:i.ONE_MINUS_DST_COLOR,[Ml]:i.ONE_MINUS_DST_ALPHA,[Tl]:i.CONSTANT_COLOR,[bl]:i.ONE_MINUS_CONSTANT_COLOR,[Al]:i.CONSTANT_ALPHA,[Rl]:i.ONE_MINUS_CONSTANT_ALPHA};function We(P,fe,te,pe,Q,Z,ne,Ue,it,Ze){if(P===pn){M===!0&&(he(i.BLEND),M=!1);return}if(M===!1&&(q(i.BLEND),M=!0),P!==hl){if(P!==p||Ze!==x){if((h!==On||T!==On)&&(i.blendEquation(i.FUNC_ADD),h=On,T=On),Ze)switch(P){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.ONE,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",P);break}else switch(P){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xa:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case va:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",P);break}y=null,b=null,A=null,R=null,C.set(0,0,0),O=0,p=P,x=Ze}return}Q=Q||fe,Z=Z||te,ne=ne||pe,(fe!==h||Q!==T)&&(i.blendEquationSeparate(ot[fe],ot[Q]),h=fe,T=Q),(te!==y||pe!==b||Z!==A||ne!==R)&&(i.blendFuncSeparate(Oe[te],Oe[pe],Oe[Z],Oe[ne]),y=te,b=pe,A=Z,R=ne),(Ue.equals(C)===!1||it!==O)&&(i.blendColor(Ue.r,Ue.g,Ue.b,it),C.copy(Ue),O=it),p=P,x=!1}function Ge(P,fe){P.side===fn?he(i.CULL_FACE):q(i.CULL_FACE);let te=P.side===wt;fe&&(te=!te),Be(te),P.blending===oi&&P.transparent===!1?We(pn):We(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function ht(P){P!==ol?(q(i.CULL_FACE),P!==D&&(P===_a?i.cullFace(i.BACK):P===ll?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),D=P}function w(P){P!==G&&(H&&i.lineWidth(P),G=P)}function ut(P,fe,te){P?(q(i.POLYGON_OFFSET_FILL),(B!==fe||X!==te)&&(i.polygonOffset(fe,te),B=fe,X=te)):he(i.POLYGON_OFFSET_FILL)}function Ke(P){P?q(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function nt(P){P===void 0&&(P=i.TEXTURE0+K-1),ce!==P&&(i.activeTexture(P),ce=P)}function ve(P,fe,te){te===void 0&&(ce===null?te=i.TEXTURE0+K-1:te=ce);let pe=se[te];pe===void 0&&(pe={type:void 0,texture:void 0},se[te]=pe),(pe.type!==P||pe.texture!==fe)&&(ce!==te&&(i.activeTexture(te),ce=te),i.bindTexture(P,fe||V[P]),pe.type=P,pe.texture=fe)}function E(){const P=se[ce];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function m(){try{i.compressedTexImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function Y(){try{i.texSubImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function j(){try{i.texSubImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function ie(){try{i.texStorage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function xe(){try{i.texStorage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function Pe(){try{i.texImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function ee(){try{i.texImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function ae(P){ye.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ye.copy(P))}function ge(P){Re.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Re.copy(P))}function Me(P,fe){let te=l.get(fe);te===void 0&&(te=new WeakMap,l.set(fe,te));let pe=te.get(P);pe===void 0&&(pe=i.getUniformBlockIndex(fe,P.name),te.set(P,pe))}function re(P,fe){const pe=l.get(fe).get(P);c.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,P.__bindingPointIndex),c.set(fe,pe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,se={},f={},d=new WeakMap,_=[],v=null,M=!1,p=null,h=null,y=null,b=null,T=null,A=null,R=null,C=new et(0,0,0),O=0,x=!1,S=null,D=null,G=null,B=null,X=null,ye.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:he,bindFramebuffer:we,drawBuffers:de,useProgram:ke,setBlending:We,setMaterial:Ge,setFlipSided:Be,setCullFace:ht,setLineWidth:w,setPolygonOffset:ut,setScissorTest:Ke,activeTexture:nt,bindTexture:ve,unbindTexture:E,compressedTexImage2D:m,compressedTexImage3D:L,texImage2D:Pe,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:re,texStorage2D:ie,texStorage3D:xe,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:Se,scissor:ae,viewport:ge,reset:ze}}function hp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,u=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,m){return _?new OffscreenCanvas(E,m):ur("canvas")}function M(E,m,L){let Y=1;const j=ve(E);if((j.width>L||j.height>L)&&(Y=L/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(Y*j.width),Se=Math.floor(Y*j.height);f===void 0&&(f=v(W,Se));const ie=m?v(W,Se):f;return ie.width=W,ie.height=Se,ie.getContext("2d").drawImage(E,0,0,W,Se),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Se+")."),ie}else return"data"in E&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,m,L,Y,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=m;if(m===i.RED&&(L===i.FLOAT&&(W=i.R32F),L===i.HALF_FLOAT&&(W=i.R16F),L===i.UNSIGNED_BYTE&&(W=i.R8)),m===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.R8UI),L===i.UNSIGNED_SHORT&&(W=i.R16UI),L===i.UNSIGNED_INT&&(W=i.R32UI),L===i.BYTE&&(W=i.R8I),L===i.SHORT&&(W=i.R16I),L===i.INT&&(W=i.R32I)),m===i.RG&&(L===i.FLOAT&&(W=i.RG32F),L===i.HALF_FLOAT&&(W=i.RG16F),L===i.UNSIGNED_BYTE&&(W=i.RG8)),m===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RG8UI),L===i.UNSIGNED_SHORT&&(W=i.RG16UI),L===i.UNSIGNED_INT&&(W=i.RG32UI),L===i.BYTE&&(W=i.RG8I),L===i.SHORT&&(W=i.RG16I),L===i.INT&&(W=i.RG32I)),m===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGB8UI),L===i.UNSIGNED_SHORT&&(W=i.RGB16UI),L===i.UNSIGNED_INT&&(W=i.RGB32UI),L===i.BYTE&&(W=i.RGB8I),L===i.SHORT&&(W=i.RGB16I),L===i.INT&&(W=i.RGB32I)),m===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),L===i.UNSIGNED_INT&&(W=i.RGBA32UI),L===i.BYTE&&(W=i.RGBA8I),L===i.SHORT&&(W=i.RGBA16I),L===i.INT&&(W=i.RGBA32I)),m===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),m===i.RGBA){const Se=j?cr:Ye.getTransfer(Y);L===i.FLOAT&&(W=i.RGBA32F),L===i.HALF_FLOAT&&(W=i.RGBA16F),L===i.UNSIGNED_BYTE&&(W=Se===$e?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function T(E,m){let L;return E?m===null||m===rn||m===Ri?L=i.DEPTH24_STENCIL8:m===Jt?L=i.DEPTH32F_STENCIL8:m===Ai&&(L=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===rn||m===Ri?L=i.DEPTH_COMPONENT24:m===Jt?L=i.DEPTH_COMPONENT32F:m===Ai&&(L=i.DEPTH_COMPONENT16),L}function A(E,m){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==gt&&E.minFilter!==Mt?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function R(E){const m=E.target;m.removeEventListener("dispose",R),O(m),m.isVideoTexture&&u.delete(m)}function C(E){const m=E.target;m.removeEventListener("dispose",C),S(m)}function O(E){const m=n.get(E);if(m.__webglInit===void 0)return;const L=E.source,Y=d.get(L);if(Y){const j=Y[m.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(E),Object.keys(Y).length===0&&d.delete(L)}n.remove(E)}function x(E){const m=n.get(E);i.deleteTexture(m.__webglTexture);const L=E.source,Y=d.get(L);delete Y[m.__cacheKey],a.memory.textures--}function S(E){const m=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(m.__webglFramebuffer[Y]))for(let j=0;j<m.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(m.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(m.__webglFramebuffer[Y]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[Y])}else{if(Array.isArray(m.__webglFramebuffer))for(let Y=0;Y<m.__webglFramebuffer.length;Y++)i.deleteFramebuffer(m.__webglFramebuffer[Y]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Y=0;Y<m.__webglColorRenderbuffer.length;Y++)m.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[Y]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const L=E.textures;for(let Y=0,j=L.length;Y<j;Y++){const W=n.get(L[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(L[Y])}n.remove(E)}let D=0;function G(){D=0}function B(){const E=D;return E>=r.maxTextures&&Le("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function X(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function K(E,m){const L=n.get(E);if(E.isVideoTexture&&Ke(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){const Y=E.image;if(Y===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{V(L,E,m);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+m)}function H(E,m){const L=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){V(L,E,m);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+m)}function k(E,m){const L=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){V(L,E,m);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+m)}function $(E,m){const L=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){q(L,E,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+m)}const ce={[hs]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[us]:i.MIRRORED_REPEAT},se={[gt]:i.NEAREST,[Pl]:i.NEAREST_MIPMAP_NEAREST,[Ni]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[Er]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},J={[Il]:i.NEVER,[zl]:i.ALWAYS,[Nl]:i.LESS,[ta]:i.LEQUAL,[Fl]:i.EQUAL,[na]:i.GEQUAL,[Ol]:i.GREATER,[Bl]:i.NOTEQUAL};function Te(E,m){if(m.type===Jt&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Mt||m.magFilter===Er||m.magFilter===Ni||m.magFilter===zn||m.minFilter===Mt||m.minFilter===Er||m.minFilter===Ni||m.minFilter===zn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ce[m.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ce[m.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ce[m.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,se[m.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,se[m.minFilter]),m.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,J[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===gt||m.minFilter!==Ni&&m.minFilter!==zn||m.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function ye(E,m){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",R));const Y=m.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const W=X(m);if(W!==E.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),j[W].usedTimes++;const Se=j[E.__cacheKey];Se!==void 0&&(j[E.__cacheKey].usedTimes--,Se.usedTimes===0&&x(m)),E.__cacheKey=W,E.__webglTexture=j[W].texture}return L}function Re(E,m,L){return Math.floor(Math.floor(E/L)/m)}function De(E,m,L,Y){const W=E.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,L,Y,m.data);else{W.sort((ee,ae)=>ee.start-ae.start);let Se=0;for(let ee=1;ee<W.length;ee++){const ae=W[Se],ge=W[ee],Me=ae.start+ae.count,re=Re(ge.start,m.width,4),ze=Re(ae.start,m.width,4);ge.start<=Me+1&&re===ze&&Re(ge.start+ge.count-1,m.width,4)===re?ae.count=Math.max(ae.count,ge.start+ge.count-ae.start):(++Se,W[Se]=ge)}W.length=Se+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let ee=0,ae=W.length;ee<ae;ee++){const ge=W[ee],Me=Math.floor(ge.start/4),re=Math.ceil(ge.count/4),ze=Me%m.width,P=Math.floor(Me/m.width),fe=re,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,ze,P,fe,te,L,Y,m.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function V(E,m,L){let Y=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ye(E,m),W=m.source;t.bindTexture(Y,E.__webglTexture,i.TEXTURE0+L);const Se=n.get(W);if(W.version!==Se.__version||j===!0){t.activeTexture(i.TEXTURE0+L);const ie=Ye.getPrimaries(Ye.workingColorSpace),xe=m.colorSpace===An?null:Ye.getPrimaries(m.colorSpace),Pe=m.colorSpace===An||ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ee=M(m.image,!1,r.maxTextureSize);ee=nt(m,ee);const ae=s.convert(m.format,m.colorSpace),ge=s.convert(m.type);let Me=b(m.internalFormat,ae,ge,m.colorSpace,m.isVideoTexture);Te(Y,m);let re;const ze=m.mipmaps,P=m.isVideoTexture!==!0,fe=Se.__version===void 0||j===!0,te=W.dataReady,pe=A(m,ee);if(m.isDepthTexture)Me=T(m.format===Vn,m.type),fe&&(P?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ae,ge,null));else if(m.isDataTexture)if(ze.length>0){P&&fe&&t.texStorage2D(i.TEXTURE_2D,pe,Me,ze[0].width,ze[0].height);for(let Q=0,Z=ze.length;Q<Z;Q++)re=ze[Q],P?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,ae,ge,re.data):t.texImage2D(i.TEXTURE_2D,Q,Me,re.width,re.height,0,ae,ge,re.data);m.generateMipmaps=!1}else P?(fe&&t.texStorage2D(i.TEXTURE_2D,pe,Me,ee.width,ee.height),te&&De(m,ee,ae,ge)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ae,ge,ee.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){P&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,ze[0].width,ze[0].height,ee.depth);for(let Q=0,Z=ze.length;Q<Z;Q++)if(re=ze[Q],m.format!==Xt)if(ae!==null)if(P){if(te)if(m.layerUpdates.size>0){const ne=Wa(re.width,re.height,m.format,m.type);for(const Ue of m.layerUpdates){const it=re.data.subarray(Ue*ne/re.data.BYTES_PER_ELEMENT,(Ue+1)*ne/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ue,re.width,re.height,1,ae,it)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,ee.depth,ae,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,re.width,re.height,ee.depth,0,re.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,ee.depth,ae,ge,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,re.width,re.height,ee.depth,0,ae,ge,re.data)}else{P&&fe&&t.texStorage2D(i.TEXTURE_2D,pe,Me,ze[0].width,ze[0].height);for(let Q=0,Z=ze.length;Q<Z;Q++)re=ze[Q],m.format!==Xt?ae!==null?P?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,re.width,re.height,0,re.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,ae,ge,re.data):t.texImage2D(i.TEXTURE_2D,Q,Me,re.width,re.height,0,ae,ge,re.data)}else if(m.isDataArrayTexture)if(P){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,ee.width,ee.height,ee.depth),te)if(m.layerUpdates.size>0){const Q=Wa(ee.width,ee.height,m.format,m.type);for(const Z of m.layerUpdates){const ne=ee.data.subarray(Z*Q/ee.data.BYTES_PER_ELEMENT,(Z+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,ae,ge,ne)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,ge,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ae,ge,ee.data);else if(m.isData3DTexture)P?(fe&&t.texStorage3D(i.TEXTURE_3D,pe,Me,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,ge,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ae,ge,ee.data);else if(m.isFramebufferTexture){if(fe)if(P)t.texStorage2D(i.TEXTURE_2D,pe,Me,ee.width,ee.height);else{let Q=ee.width,Z=ee.height;for(let ne=0;ne<pe;ne++)t.texImage2D(i.TEXTURE_2D,ne,Me,Q,Z,0,ae,ge,null),Q>>=1,Z>>=1}}else if(ze.length>0){if(P&&fe){const Q=ve(ze[0]);t.texStorage2D(i.TEXTURE_2D,pe,Me,Q.width,Q.height)}for(let Q=0,Z=ze.length;Q<Z;Q++)re=ze[Q],P?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae,ge,re):t.texImage2D(i.TEXTURE_2D,Q,Me,ae,ge,re);m.generateMipmaps=!1}else if(P){if(fe){const Q=ve(ee);t.texStorage2D(i.TEXTURE_2D,pe,Me,Q.width,Q.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ge,ee)}else t.texImage2D(i.TEXTURE_2D,0,Me,ae,ge,ee);p(m)&&h(Y),Se.__version=W.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function q(E,m,L){if(m.image.length!==6)return;const Y=ye(E,m),j=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+L);const W=n.get(j);if(j.version!==W.__version||Y===!0){t.activeTexture(i.TEXTURE0+L);const Se=Ye.getPrimaries(Ye.workingColorSpace),ie=m.colorSpace===An?null:Ye.getPrimaries(m.colorSpace),xe=m.colorSpace===An||Se===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=m.isCompressedTexture||m.image[0].isCompressedTexture,ee=m.image[0]&&m.image[0].isDataTexture,ae=[];for(let Z=0;Z<6;Z++)!Pe&&!ee?ae[Z]=M(m.image[Z],!0,r.maxCubemapSize):ae[Z]=ee?m.image[Z].image:m.image[Z],ae[Z]=nt(m,ae[Z]);const ge=ae[0],Me=s.convert(m.format,m.colorSpace),re=s.convert(m.type),ze=b(m.internalFormat,Me,re,m.colorSpace),P=m.isVideoTexture!==!0,fe=W.__version===void 0||Y===!0,te=j.dataReady;let pe=A(m,ge);Te(i.TEXTURE_CUBE_MAP,m);let Q;if(Pe){P&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,ge.width,ge.height);for(let Z=0;Z<6;Z++){Q=ae[Z].mipmaps;for(let ne=0;ne<Q.length;ne++){const Ue=Q[ne];m.format!==Xt?Me!==null?P?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,ze,Ue.width,Ue.height,0,Ue.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,0,0,Ue.width,Ue.height,Me,re,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,ze,Ue.width,Ue.height,0,Me,re,Ue.data)}}}else{if(Q=m.mipmaps,P&&fe){Q.length>0&&pe++;const Z=ve(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ae[Z].width,ae[Z].height,Me,re,ae[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ae[Z].width,ae[Z].height,0,Me,re,ae[Z].data);for(let ne=0;ne<Q.length;ne++){const it=Q[ne].image[Z].image;P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,0,0,it.width,it.height,Me,re,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,ze,it.width,it.height,0,Me,re,it.data)}}else{P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,re,ae[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Me,re,ae[Z]);for(let ne=0;ne<Q.length;ne++){const Ue=Q[ne];P?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,0,0,Me,re,Ue.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,ze,Me,re,Ue.image[Z])}}}p(m)&&h(i.TEXTURE_CUBE_MAP),W.__version=j.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function he(E,m,L,Y,j,W){const Se=s.convert(L.format,L.colorSpace),ie=s.convert(L.type),xe=b(L.internalFormat,Se,ie,L.colorSpace),Pe=n.get(m),ee=n.get(L);if(ee.__renderTarget=m,!Pe.__hasExternalTextures){const ae=Math.max(1,m.width>>W),ge=Math.max(1,m.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,W,xe,ae,ge,m.depth,0,Se,ie,null):t.texImage2D(j,W,xe,ae,ge,0,Se,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ut(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,ee.__webglTexture,0,w(m)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,ee.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(E,m,L){if(i.bindRenderbuffer(i.RENDERBUFFER,E),m.depthBuffer){const Y=m.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=T(m.stencilBuffer,j),Se=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(m),W,m.width,m.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(m),W,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,W,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,E)}else{const Y=m.textures;for(let j=0;j<Y.length;j++){const W=Y[j],Se=s.convert(W.format,W.colorSpace),ie=s.convert(W.type),xe=b(W.internalFormat,Se,ie,W.colorSpace);ut(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(m),xe,m.width,m.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(m),xe,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,xe,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(E,m,L){const Y=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(m.depthTexture);if(j.__renderTarget=m,(!j.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Te(i.TEXTURE_CUBE_MAP,m.depthTexture);const Pe=s.convert(m.depthTexture.format),ee=s.convert(m.depthTexture.type);let ae;m.depthTexture.format===gn?ae=i.DEPTH_COMPONENT24:m.depthTexture.format===Vn&&(ae=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,m.width,m.height,0,Pe,ee,null)}}else K(m.depthTexture,0);const W=j.__webglTexture,Se=w(m),ie=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,xe=m.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===gn)ut(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ie,W,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ie,W,0);else if(m.depthTexture.format===Vn)ut(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ie,W,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ie,W,0);else throw new Error("Unknown depthTexture format")}function ke(E){const m=n.get(E),L=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Y){const j=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),m.__depthDisposeCallback=j}m.__boundDepthTexture=Y}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)de(m.__webglFramebuffer[Y],E,Y);else{const Y=E.texture.mipmaps;Y&&Y.length>0?de(m.__webglFramebuffer[0],E,0):de(m.__webglFramebuffer,E,0)}else if(L){m.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[Y]),m.__webglDepthbuffer[Y]===void 0)m.__webglDepthbuffer[Y]=i.createRenderbuffer(),we(m.__webglDepthbuffer[Y],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=m.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),we(m.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(E,m,L){const Y=n.get(E);m!==void 0&&he(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ke(E)}function Oe(E){const m=E.texture,L=n.get(E),Y=n.get(m);E.addEventListener("dispose",C);const j=E.textures,W=E.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=m.version,a.memory.textures++),W){L.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[ie]=[];for(let xe=0;xe<m.mipmaps.length;xe++)L.__webglFramebuffer[ie][xe]=i.createFramebuffer()}else L.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let ie=0;ie<m.mipmaps.length;ie++)L.__webglFramebuffer[ie]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ie=0,xe=j.length;ie<xe;ie++){const Pe=n.get(j[ie]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ut(E)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const xe=j[ie];L.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ie]);const Pe=s.convert(xe.format,xe.colorSpace),ee=s.convert(xe.type),ae=b(xe.internalFormat,Pe,ee,xe.colorSpace,E.isXRRenderTarget===!0),ge=w(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,L.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),we(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Te(i.TEXTURE_CUBE_MAP,m);for(let ie=0;ie<6;ie++)if(m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)he(L.__webglFramebuffer[ie][xe],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else he(L.__webglFramebuffer[ie],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(m)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,xe=j.length;ie<xe;ie++){const Pe=j[ie],ee=n.get(Pe);let ae=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,ee.__webglTexture),Te(ae,Pe),he(L.__webglFramebuffer,E,Pe,i.COLOR_ATTACHMENT0+ie,ae,0),p(Pe)&&h(ae)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),Te(ie,m),m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)he(L.__webglFramebuffer[xe],E,m,i.COLOR_ATTACHMENT0,ie,xe);else he(L.__webglFramebuffer,E,m,i.COLOR_ATTACHMENT0,ie,0);p(m)&&h(ie),t.unbindTexture()}E.depthBuffer&&ke(E)}function We(E){const m=E.textures;for(let L=0,Y=m.length;L<Y;L++){const j=m[L];if(p(j)){const W=y(E),Se=n.get(j).__webglTexture;t.bindTexture(W,Se),h(W),t.unbindTexture()}}}const Ge=[],Be=[];function ht(E){if(E.samples>0){if(ut(E)===!1){const m=E.textures,L=E.width,Y=E.height;let j=i.COLOR_BUFFER_BIT;const W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(E),ie=m.length>1;if(ie)for(let Pe=0;Pe<m.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=E.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Pe=0;Pe<m.length;Pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Pe]);const ee=n.get(m[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,L,Y,0,0,L,Y,j,i.NEAREST),c===!0&&(Ge.length=0,Be.length=0,Ge.push(i.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ge.push(W),Be.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Pe=0;Pe<m.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Pe]);const ee=n.get(m[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const m=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function w(E){return Math.min(r.maxSamples,E.samples)}function ut(E){const m=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Ke(E){const m=a.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function nt(E,m){const L=E.colorSpace,Y=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==fi&&L!==An&&(Ye.getTransfer(L)===$e?(Y!==Xt||j!==Vt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",L)),m}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=ot,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function up(i,e){function t(n,r=An){let s;const a=Ye.getTransfer(r);if(n===Vt)return i.UNSIGNED_BYTE;if(n===js)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$s)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Co)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ao)return i.BYTE;if(n===Ro)return i.SHORT;if(n===Ai)return i.UNSIGNED_SHORT;if(n===Zs)return i.INT;if(n===rn)return i.UNSIGNED_INT;if(n===Jt)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Po)return i.ALPHA;if(n===Do)return i.RGB;if(n===Xt)return i.RGBA;if(n===gn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===Lo)return i.RED;if(n===Js)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Qs)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===ir||n===rr||n===sr||n===ar)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ir)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ir)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fs||n===ds||n===ps||n===ms)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ds)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ps)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ms)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_s||n===gs||n===xs||n===vs||n===Ms||n===Ss||n===Es)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_s||n===gs)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vs)return s.COMPRESSED_R11_EAC;if(n===Ms)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ss)return s.COMPRESSED_RG11_EAC;if(n===Es)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ys||n===Ts||n===bs||n===As||n===Rs||n===ws||n===Cs||n===Ps||n===Ds||n===Ls||n===Us||n===Is||n===Ns||n===Fs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ys)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ts)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===As)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ws)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ps)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ds)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ls)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Us)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Is)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ns)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Os||n===Bs||n===zs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Os)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vs||n===Gs||n===Hs||n===ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:fp,fragmentShader:dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mp extends kn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,_=null,v=null;const M=typeof XRWebGLBinding<"u",p=new pp,h={},y=t.getContextAttributes();let b=null,T=null;const A=[],R=[],C=new Fe;let O=null;const x=new zt;x.viewport=new lt;const S=new zt;S.viewport=new lt;const D=[x,S],G=new Ec;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=A[V];return q===void 0&&(q=new Wr,A[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=A[V];return q===void 0&&(q=new Wr,A[V]=q),q.getGripSpace()},this.getHand=function(V){let q=A[V];return q===void 0&&(q=new Wr,A[V]=q),q.getHandSpace()};function K(V){const q=R.indexOf(V.inputSource);if(q===-1)return;const he=A[q];he!==void 0&&(he.update(V.inputSource,V.frame,l||a),he.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let V=0;V<A.length;V++){const q=R[V];q!==null&&(R[V]=null,A[V].disconnect(q))}B=null,X=null,p.reset();for(const V in h)delete h[V];e.setRenderTarget(b),_=null,d=null,f=null,r=null,T=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,we=null,de=null;y.depth&&(de=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?Vn:gn,we=y.stencil?Ri:rn);const ke={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new tn(d.textureWidth,d.textureHeight,{format:Xt,type:Vt,depthTexture:new Ci(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new tn(_.framebufferWidth,_.framebufferHeight,{format:Xt,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(V){for(let q=0;q<V.removed.length;q++){const he=V.removed[q],we=R.indexOf(he);we>=0&&(R[we]=null,A[we].disconnect(he))}for(let q=0;q<V.added.length;q++){const he=V.added[q];let we=R.indexOf(he);if(we===-1){for(let ke=0;ke<A.length;ke++)if(ke>=R.length){R.push(he),we=ke;break}else if(R[ke]===null){R[ke]=he,we=ke;break}if(we===-1)break}const de=A[we];de&&de.connect(he)}}const $=new N,ce=new N;function se(V,q,he){$.setFromMatrixPosition(q.matrixWorld),ce.setFromMatrixPosition(he.matrixWorld);const we=$.distanceTo(ce),de=q.projectionMatrix.elements,ke=he.projectionMatrix.elements,ot=de[14]/(de[10]-1),Oe=de[14]/(de[10]+1),We=(de[9]+1)/de[5],Ge=(de[9]-1)/de[5],Be=(de[8]-1)/de[0],ht=(ke[8]+1)/ke[0],w=ot*Be,ut=ot*ht,Ke=we/(-Be+ht),nt=Ke*-Be;if(q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(nt),V.translateZ(Ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),de[10]===-1)V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const ve=ot+Ke,E=Oe+Ke,m=w-nt,L=ut+(we-nt),Y=We*Oe/E*ve,j=Ge*Oe/E*ve;V.projectionMatrix.makePerspective(m,L,Y,j,ve,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function J(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let q=V.near,he=V.far;p.texture!==null&&(p.depthNear>0&&(q=p.depthNear),p.depthFar>0&&(he=p.depthFar)),G.near=S.near=x.near=q,G.far=S.far=x.far=he,(B!==G.near||X!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),B=G.near,X=G.far),G.layers.mask=V.layers.mask|6,x.layers.mask=G.layers.mask&3,S.layers.mask=G.layers.mask&5;const we=V.parent,de=G.cameras;J(G,we);for(let ke=0;ke<de.length;ke++)J(de[ke],we);de.length===2?se(G,x,S):G.projectionMatrix.copy(x.projectionMatrix),Te(V,G,we)};function Te(V,q,he){he===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(he.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ws*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&_===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(V){return h[V]};let ye=null;function Re(V,q){if(u=q.getViewerPose(l||a),v=q,u!==null){const he=u.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let we=!1;he.length!==G.cameras.length&&(G.cameras.length=0,we=!0);for(let Oe=0;Oe<he.length;Oe++){const We=he[Oe];let Ge=null;if(_!==null)Ge=_.getViewport(We);else{const ht=f.getViewSubImage(d,We);Ge=ht.viewport,Oe===0&&(e.setRenderTargetTextures(T,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(T))}let Be=D[Oe];Be===void 0&&(Be=new zt,Be.layers.enable(Oe),Be.viewport=new lt,D[Oe]=Be),Be.matrix.fromArray(We.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(We.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Oe===0&&(G.matrix.copy(Be.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),we===!0&&G.cameras.push(Be)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const Oe=f.getDepthInformation(he[0]);Oe&&Oe.isValid&&Oe.texture&&p.init(Oe,r.renderState)}if(de&&de.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let Oe=0;Oe<he.length;Oe++){const We=he[Oe].camera;if(We){let Ge=h[We];Ge||(Ge=new ko,h[We]=Ge);const Be=f.getCameraImage(We);Ge.sourceTexture=Be}}}}for(let he=0;he<A.length;he++){const we=R[he],de=A[he];we!==null&&de!==void 0&&de.update(we,q,l||a)}ye&&ye(V,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),v=null}const De=new Xo;De.setAnimationLoop(Re),this.setAnimationLoop=function(V){ye=V},this.dispose=function(){}}}const Fn=new xn,_p=new ct;function gp(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Bo(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,y,b,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&_(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,y,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===wt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===wt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=e.get(h),b=y.envMap,T=y.envMapRotation;b&&(p.envMap.value=b,Fn.copy(T),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),p.envMapRotation.value.setFromMatrix4(_p.makeRotationFromEuler(Fn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,y,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function _(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const T=b.program;n.uniformBlockBinding(y,T)}function l(y,b){let T=r[y.id];T===void 0&&(v(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(y,A);const R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function u(y){const b=f();y.__bindingPointIndex=b;const T=i.createBuffer(),A=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=r[y.id],T=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,C=T.length;R<C;R++){const O=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,S=O.length;x<S;x++){const D=O[x];if(_(D,R,x,A)===!0){const G=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let K=0;K<B.length;K++){const H=B[K],k=M(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,G+X,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,X),X+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(y,b,T,A){const R=y.value,C=b+"_"+T;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const O=A[C];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return A[C]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function v(y){const b=y.uniforms;let T=0;const A=16;for(let C=0,O=b.length;C<O;C++){const x=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,D=x.length;S<D;S++){const G=x[S],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,K=B.length;X<K;X++){const H=B[X],k=M(H),$=T%A,ce=$%k.boundary,se=$+ce;T+=ce,se!==0&&A-se<k.storage&&(T+=A-se),G.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=k.storage}}}const R=T%A;return R>0&&(T+=A-R),y.__size=T,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}const vp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jt=null;function Mp(){return jt===null&&(jt=new pc(vp,16,16,ui,_n),jt.name="DFG_LUT",jt.minFilter=Mt,jt.magFilter=Mt,jt.wrapS=dn,jt.wrapT=dn,jt.generateMipmaps=!1,jt.needsUpdate=!0),jt}class Sp{constructor(e={}){const{canvas:t=Vl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:_=Vt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const M=_,p=new Set([ea,Qs,Js]),h=new Set([Vt,rn,Ai,Ri,js,$s]),y=new Uint32Array(4),b=new Int32Array(4);let T=null,A=null;const R=[],C=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=Bt;let D=0,G=0,B=null,X=-1,K=null;const H=new lt,k=new lt;let $=null;const ce=new et(0);let se=0,J=t.width,Te=t.height,ye=1,Re=null,De=null;const V=new lt(0,0,J,Te),q=new lt(0,0,J,Te);let he=!1;const we=new Ho;let de=!1,ke=!1;const ot=new ct,Oe=new N,We=new lt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ht(){return B===null?ye:1}let w=n;function ut(g,U){return t.getContext(g,U)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ks}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),w===null){const U="webgl2";if(w=ut(U,g),w===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw Xe("WebGLRenderer: "+g.message),g}let Ke,nt,ve,E,m,L,Y,j,W,Se,ie,xe,Pe,ee,ae,ge,Me,re,ze,P,fe,te,pe,Q;function Z(){Ke=new Mf(w),Ke.init(),te=new up(w,Ke),nt=new uf(w,Ke,e,te),ve=new cp(w,Ke),nt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),E=new yf(w),m=new Kd,L=new hp(w,Ke,ve,m,nt,te,E),Y=new df(x),j=new vf(x),W=new Ac(w),pe=new cf(w,W),Se=new Sf(w,W,E,pe),ie=new bf(w,Se,W,E),ze=new Tf(w,nt,L),ge=new ff(m),xe=new qd(x,Y,j,Ke,nt,pe,ge),Pe=new gp(x,m),ee=new jd,ae=new np(Ke),re=new lf(x,Y,j,ve,ie,v,c),Me=new op(x,ie,nt),Q=new xp(w,E,nt,ve),P=new hf(w,Ke,E),fe=new Ef(w,Ke,E),E.programs=xe.programs,x.capabilities=nt,x.extensions=Ke,x.properties=m,x.renderLists=ee,x.shadowMap=Me,x.state=ve,x.info=E}Z(),M!==Vt&&(O=new Rf(M,t.width,t.height,r,s));const ne=new mp(x,w);this.xr=ne,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const g=Ke.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ke.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(g){g!==void 0&&(ye=g,this.setSize(J,Te,!1))},this.getSize=function(g){return g.set(J,Te)},this.setSize=function(g,U,z=!0){if(ne.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}J=g,Te=U,t.width=Math.floor(g*ye),t.height=Math.floor(U*ye),z===!0&&(t.style.width=g+"px",t.style.height=U+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,g,U)},this.getDrawingBufferSize=function(g){return g.set(J*ye,Te*ye).floor()},this.setDrawingBufferSize=function(g,U,z){J=g,Te=U,ye=z,t.width=Math.floor(g*z),t.height=Math.floor(U*z),this.setViewport(0,0,g,U)},this.setEffects=function(g){if(M===Vt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let U=0;U<g.length;U++)if(g[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(H)},this.getViewport=function(g){return g.copy(V)},this.setViewport=function(g,U,z,F){g.isVector4?V.set(g.x,g.y,g.z,g.w):V.set(g,U,z,F),ve.viewport(H.copy(V).multiplyScalar(ye).round())},this.getScissor=function(g){return g.copy(q)},this.setScissor=function(g,U,z,F){g.isVector4?q.set(g.x,g.y,g.z,g.w):q.set(g,U,z,F),ve.scissor(k.copy(q).multiplyScalar(ye).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(g){ve.setScissorTest(he=g)},this.setOpaqueSort=function(g){Re=g},this.setTransparentSort=function(g){De=g},this.getClearColor=function(g){return g.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(g=!0,U=!0,z=!0){let F=0;if(g){let I=!1;if(B!==null){const oe=B.texture.format;I=p.has(oe)}if(I){const oe=B.texture.type,me=h.has(oe),ue=re.getClearColor(),_e=re.getClearAlpha(),Ee=ue.r,Ce=ue.g,be=ue.b;me?(y[0]=Ee,y[1]=Ce,y[2]=be,y[3]=_e,w.clearBufferuiv(w.COLOR,0,y)):(b[0]=Ee,b[1]=Ce,b[2]=be,b[3]=_e,w.clearBufferiv(w.COLOR,0,b))}else F|=w.COLOR_BUFFER_BIT}U&&(F|=w.DEPTH_BUFFER_BIT),z&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),re.dispose(),ee.dispose(),ae.dispose(),m.dispose(),Y.dispose(),j.dispose(),ie.dispose(),pe.dispose(),Q.dispose(),xe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ca),ne.removeEventListener("sessionend",ha),Cn.stop()};function Ue(g){g.preventDefault(),Ta("WebGLRenderer: Context Lost."),S=!0}function it(){Ta("WebGLRenderer: Context Restored."),S=!1;const g=E.autoReset,U=Me.enabled,z=Me.autoUpdate,F=Me.needsUpdate,I=Me.type;Z(),E.autoReset=g,Me.enabled=U,Me.autoUpdate=z,Me.needsUpdate=F,Me.type=I}function Ze(g){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Kt(g){const U=g.target;U.removeEventListener("dispose",Kt),an(U)}function an(g){$o(g),m.remove(g)}function $o(g){const U=m.get(g).programs;U!==void 0&&(U.forEach(function(z){xe.releaseProgram(z)}),g.isShaderMaterial&&xe.releaseShaderCache(g))}this.renderBufferDirect=function(g,U,z,F,I,oe){U===null&&(U=Ge);const me=I.isMesh&&I.matrixWorld.determinant()<0,ue=Qo(g,U,z,F,I);ve.setMaterial(F,me);let _e=z.index,Ee=1;if(F.wireframe===!0){if(_e=Se.getWireframeAttribute(z),_e===void 0)return;Ee=2}const Ce=z.drawRange,be=z.attributes.position;let Ve=Ce.start*Ee,Je=(Ce.start+Ce.count)*Ee;oe!==null&&(Ve=Math.max(Ve,oe.start*Ee),Je=Math.min(Je,(oe.start+oe.count)*Ee)),_e!==null?(Ve=Math.max(Ve,0),Je=Math.min(Je,_e.count)):be!=null&&(Ve=Math.max(Ve,0),Je=Math.min(Je,be.count));const st=Je-Ve;if(st<0||st===1/0)return;pe.setup(I,F,ue,z,_e);let at,tt=P;if(_e!==null&&(at=W.get(_e),tt=fe,tt.setIndex(at)),I.isMesh)F.wireframe===!0?(ve.setLineWidth(F.wireframeLinewidth*ht()),tt.setMode(w.LINES)):tt.setMode(w.TRIANGLES);else if(I.isLine){let Ae=F.linewidth;Ae===void 0&&(Ae=1),ve.setLineWidth(Ae*ht()),I.isLineSegments?tt.setMode(w.LINES):I.isLineLoop?tt.setMode(w.LINE_LOOP):tt.setMode(w.LINE_STRIP)}else I.isPoints?tt.setMode(w.POINTS):I.isSprite&&tt.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)wi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))tt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ae=I._multiDrawStarts,je=I._multiDrawCounts,qe=I._multiDrawCount,Ct=_e?W.get(_e).bytesPerElement:1,Wn=m.get(F).currentProgram.getUniforms();for(let Pt=0;Pt<qe;Pt++)Wn.setValue(w,"_gl_DrawID",Pt),tt.render(Ae[Pt]/Ct,je[Pt])}else if(I.isInstancedMesh)tt.renderInstances(Ve,st,I.count);else if(z.isInstancedBufferGeometry){const Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,je=Math.min(z.instanceCount,Ae);tt.renderInstances(Ve,st,je)}else tt.render(Ve,st)};function la(g,U,z){g.transparent===!0&&g.side===fn&&g.forceSinglePass===!1?(g.side=wt,g.needsUpdate=!0,Ii(g,U,z),g.side=wn,g.needsUpdate=!0,Ii(g,U,z),g.side=fn):Ii(g,U,z)}this.compile=function(g,U,z=null){z===null&&(z=g),A=ae.get(z),A.init(U),C.push(A),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(A.pushLight(I),I.castShadow&&A.pushShadow(I))}),g!==z&&g.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(A.pushLight(I),I.castShadow&&A.pushShadow(I))}),A.setupLights();const F=new Set;return g.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const oe=I.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const ue=oe[me];la(ue,z,I),F.add(ue)}else la(oe,z,I),F.add(oe)}),A=C.pop(),F},this.compileAsync=function(g,U,z=null){const F=this.compile(g,U,z);return new Promise(I=>{function oe(){if(F.forEach(function(me){m.get(me).currentProgram.isReady()&&F.delete(me)}),F.size===0){I(g);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let vr=null;function Jo(g){vr&&vr(g)}function ca(){Cn.stop()}function ha(){Cn.start()}const Cn=new Xo;Cn.setAnimationLoop(Jo),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(g){vr=g,ne.setAnimationLoop(g),g===null?Cn.stop():Cn.start()},ne.addEventListener("sessionstart",ca),ne.addEventListener("sessionend",ha),this.render=function(g,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const z=ne.enabled===!0&&ne.isPresenting===!0,F=O!==null&&(B===null||z)&&O.begin(x,B);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),g.isScene===!0&&g.onBeforeRender(x,g,U,B),A=ae.get(g,C.length),A.init(U),C.push(A),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),we.setFromProjectionMatrix(ot,Qt,U.reversedDepth),ke=this.localClippingEnabled,de=ge.init(this.clippingPlanes,ke),T=ee.get(g,R.length),T.init(),R.push(T),ne.enabled===!0&&ne.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&Mr(me,U,-1/0,x.sortObjects)}Mr(g,U,0,x.sortObjects),T.finish(),x.sortObjects===!0&&T.sort(Re,De),Be=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Be&&re.addToRenderList(T,g),this.info.render.frame++,de===!0&&ge.beginShadows();const I=A.state.shadowsArray;if(Me.render(I,g,U),de===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&O.hasRenderPass())===!1){const me=T.opaque,ue=T.transmissive;if(A.setupLights(),U.isArrayCamera){const _e=U.cameras;if(ue.length>0)for(let Ee=0,Ce=_e.length;Ee<Ce;Ee++){const be=_e[Ee];fa(me,ue,g,be)}Be&&re.render(g);for(let Ee=0,Ce=_e.length;Ee<Ce;Ee++){const be=_e[Ee];ua(T,g,be,be.viewport)}}else ue.length>0&&fa(me,ue,g,U),Be&&re.render(g),ua(T,g,U)}B!==null&&G===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),F&&O.end(x),g.isScene===!0&&g.onAfterRender(x,g,U),pe.resetDefaultState(),X=-1,K=null,C.pop(),C.length>0?(A=C[C.length-1],de===!0&&ge.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?T=R[R.length-1]:T=null};function Mr(g,U,z,F){if(g.visible===!1)return;if(g.layers.test(U.layers)){if(g.isGroup)z=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(U);else if(g.isLight)A.pushLight(g),g.castShadow&&A.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||we.intersectsSprite(g)){F&&We.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ot);const me=ie.update(g),ue=g.material;ue.visible&&T.push(g,me,ue,z,We.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||we.intersectsObject(g))){const me=ie.update(g),ue=g.material;if(F&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),We.copy(g.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),We.copy(me.boundingSphere.center)),We.applyMatrix4(g.matrixWorld).applyMatrix4(ot)),Array.isArray(ue)){const _e=me.groups;for(let Ee=0,Ce=_e.length;Ee<Ce;Ee++){const be=_e[Ee],Ve=ue[be.materialIndex];Ve&&Ve.visible&&T.push(g,me,Ve,z,We.z,be)}}else ue.visible&&T.push(g,me,ue,z,We.z,null)}}const oe=g.children;for(let me=0,ue=oe.length;me<ue;me++)Mr(oe[me],U,z,F)}function ua(g,U,z,F){const{opaque:I,transmissive:oe,transparent:me}=g;A.setupLightsView(z),de===!0&&ge.setGlobalState(x.clippingPlanes,z),F&&ve.viewport(H.copy(F)),I.length>0&&Ui(I,U,z),oe.length>0&&Ui(oe,U,z),me.length>0&&Ui(me,U,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function fa(g,U,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){const Ve=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new tn(1,1,{generateMipmaps:!0,type:Ve?_n:Vt,minFilter:zn,samples:nt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const oe=A.state.transmissionRenderTarget[F.id],me=F.viewport||H;oe.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);const ue=x.getRenderTarget(),_e=x.getActiveCubeFace(),Ee=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(ce),se=x.getClearAlpha(),se<1&&x.setClearColor(16777215,.5),x.clear(),Be&&re.render(z);const Ce=x.toneMapping;x.toneMapping=en;const be=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),de===!0&&ge.setGlobalState(x.clippingPlanes,F),Ui(g,z,F),L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Je=0,st=U.length;Je<st;Je++){const at=U[Je],{object:tt,geometry:Ae,material:je,group:qe}=at;if(je.side===fn&&tt.layers.test(F.layers)){const Ct=je.side;je.side=wt,je.needsUpdate=!0,da(tt,z,F,Ae,je,qe),je.side=Ct,je.needsUpdate=!0,Ve=!0}}Ve===!0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe))}x.setRenderTarget(ue,_e,Ee),x.setClearColor(ce,se),be!==void 0&&(F.viewport=be),x.toneMapping=Ce}function Ui(g,U,z){const F=U.isScene===!0?U.overrideMaterial:null;for(let I=0,oe=g.length;I<oe;I++){const me=g[I],{object:ue,geometry:_e,group:Ee}=me;let Ce=me.material;Ce.allowOverride===!0&&F!==null&&(Ce=F),ue.layers.test(z.layers)&&da(ue,U,z,_e,Ce,Ee)}}function da(g,U,z,F,I,oe){g.onBeforeRender(x,U,z,F,I,oe),g.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),I.onBeforeRender(x,U,z,F,g,oe),I.transparent===!0&&I.side===fn&&I.forceSinglePass===!1?(I.side=wt,I.needsUpdate=!0,x.renderBufferDirect(z,U,F,I,g,oe),I.side=wn,I.needsUpdate=!0,x.renderBufferDirect(z,U,F,I,g,oe),I.side=fn):x.renderBufferDirect(z,U,F,I,g,oe),g.onAfterRender(x,U,z,F,I,oe)}function Ii(g,U,z){U.isScene!==!0&&(U=Ge);const F=m.get(g),I=A.state.lights,oe=A.state.shadowsArray,me=I.state.version,ue=xe.getParameters(g,I.state,oe,U,z),_e=xe.getProgramCacheKey(ue);let Ee=F.programs;F.environment=g.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(g.isMeshStandardMaterial?j:Y).get(g.envMap||F.environment),F.envMapRotation=F.environment!==null&&g.envMap===null?U.environmentRotation:g.envMapRotation,Ee===void 0&&(g.addEventListener("dispose",Kt),Ee=new Map,F.programs=Ee);let Ce=Ee.get(_e);if(Ce!==void 0){if(F.currentProgram===Ce&&F.lightsStateVersion===me)return ma(g,ue),Ce}else ue.uniforms=xe.getUniforms(g),g.onBeforeCompile(ue,x),Ce=xe.acquireProgram(ue,_e),Ee.set(_e,Ce),F.uniforms=ue.uniforms;const be=F.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(be.clippingPlanes=ge.uniform),ma(g,ue),F.needsLights=tl(g),F.lightsStateVersion=me,F.needsLights&&(be.ambientLightColor.value=I.state.ambient,be.lightProbe.value=I.state.probe,be.directionalLights.value=I.state.directional,be.directionalLightShadows.value=I.state.directionalShadow,be.spotLights.value=I.state.spot,be.spotLightShadows.value=I.state.spotShadow,be.rectAreaLights.value=I.state.rectArea,be.ltc_1.value=I.state.rectAreaLTC1,be.ltc_2.value=I.state.rectAreaLTC2,be.pointLights.value=I.state.point,be.pointLightShadows.value=I.state.pointShadow,be.hemisphereLights.value=I.state.hemi,be.directionalShadowMap.value=I.state.directionalShadowMap,be.directionalShadowMatrix.value=I.state.directionalShadowMatrix,be.spotShadowMap.value=I.state.spotShadowMap,be.spotLightMatrix.value=I.state.spotLightMatrix,be.spotLightMap.value=I.state.spotLightMap,be.pointShadowMap.value=I.state.pointShadowMap,be.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=Ce,F.uniformsList=null,Ce}function pa(g){if(g.uniformsList===null){const U=g.currentProgram.getUniforms();g.uniformsList=lr.seqWithValue(U.seq,g.uniforms)}return g.uniformsList}function ma(g,U){const z=m.get(g);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Qo(g,U,z,F,I){U.isScene!==!0&&(U=Ge),L.resetTextureUnits();const oe=U.fog,me=F.isMeshStandardMaterial?U.environment:null,ue=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:fi,_e=(F.isMeshStandardMaterial?j:Y).get(F.envMap||me),Ee=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),be=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,Je=!!z.morphAttributes.color;let st=en;F.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(st=x.toneMapping);const at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=at!==void 0?at.length:0,Ae=m.get(F),je=A.state.lights;if(de===!0&&(ke===!0||g!==K)){const St=g===K&&F.id===X;ge.setState(F,g,St)}let qe=!1;F.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==je.state.version||Ae.outputColorSpace!==ue||I.isBatchedMesh&&Ae.batching===!1||!I.isBatchedMesh&&Ae.batching===!0||I.isBatchedMesh&&Ae.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ae.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ae.instancing===!1||!I.isInstancedMesh&&Ae.instancing===!0||I.isSkinnedMesh&&Ae.skinning===!1||!I.isSkinnedMesh&&Ae.skinning===!0||I.isInstancedMesh&&Ae.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ae.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ae.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ae.instancingMorph===!1&&I.morphTexture!==null||Ae.envMap!==_e||F.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ge.numPlanes||Ae.numIntersection!==ge.numIntersection)||Ae.vertexAlphas!==Ee||Ae.vertexTangents!==Ce||Ae.morphTargets!==be||Ae.morphNormals!==Ve||Ae.morphColors!==Je||Ae.toneMapping!==st||Ae.morphTargetsCount!==tt)&&(qe=!0):(qe=!0,Ae.__version=F.version);let Ct=Ae.currentProgram;qe===!0&&(Ct=Ii(F,U,I));let Wn=!1,Pt=!1,mi=!1;const rt=Ct.getUniforms(),Tt=Ae.uniforms;if(ve.useProgram(Ct.program)&&(Wn=!0,Pt=!0,mi=!0),F.id!==X&&(X=F.id,Pt=!0),Wn||K!==g){ve.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),rt.setValue(w,"projectionMatrix",g.projectionMatrix),rt.setValue(w,"viewMatrix",g.matrixWorldInverse);const bt=rt.map.cameraPosition;bt!==void 0&&bt.setValue(w,Oe.setFromMatrixPosition(g.matrixWorld)),nt.logarithmicDepthBuffer&&rt.setValue(w,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&rt.setValue(w,"isOrthographic",g.isOrthographicCamera===!0),K!==g&&(K=g,Pt=!0,mi=!0)}if(Ae.needsLights&&(je.state.directionalShadowMap.length>0&&rt.setValue(w,"directionalShadowMap",je.state.directionalShadowMap,L),je.state.spotShadowMap.length>0&&rt.setValue(w,"spotShadowMap",je.state.spotShadowMap,L),je.state.pointShadowMap.length>0&&rt.setValue(w,"pointShadowMap",je.state.pointShadowMap,L)),I.isSkinnedMesh){rt.setOptional(w,I,"bindMatrix"),rt.setOptional(w,I,"bindMatrixInverse");const St=I.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),rt.setValue(w,"boneTexture",St.boneTexture,L))}I.isBatchedMesh&&(rt.setOptional(w,I,"batchingTexture"),rt.setValue(w,"batchingTexture",I._matricesTexture,L),rt.setOptional(w,I,"batchingIdTexture"),rt.setValue(w,"batchingIdTexture",I._indirectTexture,L),rt.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&rt.setValue(w,"batchingColorTexture",I._colorsTexture,L));const Nt=z.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&ze.update(I,z,Ct),(Pt||Ae.receiveShadow!==I.receiveShadow)&&(Ae.receiveShadow=I.receiveShadow,rt.setValue(w,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Tt.envMap.value=_e,Tt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Mp()),Pt&&(rt.setValue(w,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&el(Tt,mi),oe&&F.fog===!0&&Pe.refreshFogUniforms(Tt,oe),Pe.refreshMaterialUniforms(Tt,F,ye,Te,A.state.transmissionRenderTarget[g.id]),lr.upload(w,pa(Ae),Tt,L)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(lr.upload(w,pa(Ae),Tt,L),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&rt.setValue(w,"center",I.center),rt.setValue(w,"modelViewMatrix",I.modelViewMatrix),rt.setValue(w,"normalMatrix",I.normalMatrix),rt.setValue(w,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const St=F.uniformsGroups;for(let bt=0,Sr=St.length;bt<Sr;bt++){const Pn=St[bt];Q.update(Pn,Ct),Q.bind(Pn,Ct)}}return Ct}function el(g,U){g.ambientLightColor.needsUpdate=U,g.lightProbe.needsUpdate=U,g.directionalLights.needsUpdate=U,g.directionalLightShadows.needsUpdate=U,g.pointLights.needsUpdate=U,g.pointLightShadows.needsUpdate=U,g.spotLights.needsUpdate=U,g.spotLightShadows.needsUpdate=U,g.rectAreaLights.needsUpdate=U,g.hemisphereLights.needsUpdate=U}function tl(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(g,U,z){const F=m.get(g);F.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),m.get(g.texture).__webglTexture=U,m.get(g.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,U){const z=m.get(g);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const nl=w.createFramebuffer();this.setRenderTarget=function(g,U=0,z=0){B=g,D=U,G=z;let F=null,I=!1,oe=!1;if(g){const ue=m.get(g);if(ue.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(w.FRAMEBUFFER,ue.__webglFramebuffer),H.copy(g.viewport),k.copy(g.scissor),$=g.scissorTest,ve.viewport(H),ve.scissor(k),ve.setScissorTest($),X=-1;return}else if(ue.__webglFramebuffer===void 0)L.setupRenderTarget(g);else if(ue.__hasExternalTextures)L.rebindTextures(g,m.get(g.texture).__webglTexture,m.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Ce=g.depthTexture;if(ue.__boundDepthTexture!==Ce){if(Ce!==null&&m.has(Ce)&&(g.width!==Ce.image.width||g.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(g)}}const _e=g.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);const Ee=m.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?F=Ee[U][z]:F=Ee[U],I=!0):g.samples>0&&L.useMultisampledRTT(g)===!1?F=m.get(g).__webglMultisampledFramebuffer:Array.isArray(Ee)?F=Ee[z]:F=Ee,H.copy(g.viewport),k.copy(g.scissor),$=g.scissorTest}else H.copy(V).multiplyScalar(ye).floor(),k.copy(q).multiplyScalar(ye).floor(),$=he;if(z!==0&&(F=nl),ve.bindFramebuffer(w.FRAMEBUFFER,F)&&ve.drawBuffers(g,F),ve.viewport(H),ve.scissor(k),ve.setScissorTest($),I){const ue=m.get(g.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,z)}else if(oe){const ue=U;for(let _e=0;_e<g.textures.length;_e++){const Ee=m.get(g.textures[_e]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+_e,Ee.__webglTexture,z,ue)}}else if(g!==null&&z!==0){const ue=m.get(g.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ue.__webglTexture,z)}X=-1},this.readRenderTargetPixels=function(g,U,z,F,I,oe,me,ue=0){if(!(g&&g.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=m.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){ve.bindFramebuffer(w.FRAMEBUFFER,_e);try{const Ee=g.textures[ue],Ce=Ee.format,be=Ee.type;if(!nt.textureFormatReadable(Ce)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(be)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=g.width-F&&z>=0&&z<=g.height-I&&(g.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ue),w.readPixels(U,z,F,I,te.convert(Ce),te.convert(be),oe))}finally{const Ee=B!==null?m.get(B).__webglFramebuffer:null;ve.bindFramebuffer(w.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(g,U,z,F,I,oe,me,ue=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=m.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(U>=0&&U<=g.width-F&&z>=0&&z<=g.height-I){ve.bindFramebuffer(w.FRAMEBUFFER,_e);const Ee=g.textures[ue],Ce=Ee.format,be=Ee.type;if(!nt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.bufferData(w.PIXEL_PACK_BUFFER,oe.byteLength,w.STREAM_READ),g.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ue),w.readPixels(U,z,F,I,te.convert(Ce),te.convert(be),0);const Je=B!==null?m.get(B).__webglFramebuffer:null;ve.bindFramebuffer(w.FRAMEBUFFER,Je);const st=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Gl(w,st,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,oe),w.deleteBuffer(Ve),w.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,U=null,z=0){const F=Math.pow(2,-z),I=Math.floor(g.image.width*F),oe=Math.floor(g.image.height*F),me=U!==null?U.x:0,ue=U!==null?U.y:0;L.setTexture2D(g,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,me,ue,I,oe),ve.unbindTexture()};const il=w.createFramebuffer(),rl=w.createFramebuffer();this.copyTextureToTexture=function(g,U,z=null,F=null,I=0,oe=null){oe===null&&(I!==0?(wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=I,I=0):oe=0);let me,ue,_e,Ee,Ce,be,Ve,Je,st;const at=g.isCompressedTexture?g.mipmaps[oe]:g.image;if(z!==null)me=z.max.x-z.min.x,ue=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Ce=z.min.y,be=z.isBox3?z.min.z:0;else{const Nt=Math.pow(2,-I);me=Math.floor(at.width*Nt),ue=Math.floor(at.height*Nt),g.isDataArrayTexture?_e=at.depth:g.isData3DTexture?_e=Math.floor(at.depth*Nt):_e=1,Ee=0,Ce=0,be=0}F!==null?(Ve=F.x,Je=F.y,st=F.z):(Ve=0,Je=0,st=0);const tt=te.convert(U.format),Ae=te.convert(U.type);let je;U.isData3DTexture?(L.setTexture3D(U,0),je=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),je=w.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),je=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=w.getParameter(w.UNPACK_ROW_LENGTH),Ct=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Wn=w.getParameter(w.UNPACK_SKIP_PIXELS),Pt=w.getParameter(w.UNPACK_SKIP_ROWS),mi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,at.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,at.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ee),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,be);const rt=g.isDataArrayTexture||g.isData3DTexture,Tt=U.isDataArrayTexture||U.isData3DTexture;if(g.isDepthTexture){const Nt=m.get(g),St=m.get(U),bt=m.get(Nt.__renderTarget),Sr=m.get(St.__renderTarget);ve.bindFramebuffer(w.READ_FRAMEBUFFER,bt.__webglFramebuffer),ve.bindFramebuffer(w.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Pn=0;Pn<_e;Pn++)rt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(g).__webglTexture,I,be+Pn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(U).__webglTexture,oe,st+Pn)),w.blitFramebuffer(Ee,Ce,me,ue,Ve,Je,me,ue,w.DEPTH_BUFFER_BIT,w.NEAREST);ve.bindFramebuffer(w.READ_FRAMEBUFFER,null),ve.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||g.isRenderTargetTexture||m.has(g)){const Nt=m.get(g),St=m.get(U);ve.bindFramebuffer(w.READ_FRAMEBUFFER,il),ve.bindFramebuffer(w.DRAW_FRAMEBUFFER,rl);for(let bt=0;bt<_e;bt++)rt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Nt.__webglTexture,I,be+bt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Nt.__webglTexture,I),Tt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,St.__webglTexture,oe,st+bt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,St.__webglTexture,oe),I!==0?w.blitFramebuffer(Ee,Ce,me,ue,Ve,Je,me,ue,w.COLOR_BUFFER_BIT,w.NEAREST):Tt?w.copyTexSubImage3D(je,oe,Ve,Je,st+bt,Ee,Ce,me,ue):w.copyTexSubImage2D(je,oe,Ve,Je,Ee,Ce,me,ue);ve.bindFramebuffer(w.READ_FRAMEBUFFER,null),ve.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Tt?g.isDataTexture||g.isData3DTexture?w.texSubImage3D(je,oe,Ve,Je,st,me,ue,_e,tt,Ae,at.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(je,oe,Ve,Je,st,me,ue,_e,tt,at.data):w.texSubImage3D(je,oe,Ve,Je,st,me,ue,_e,tt,Ae,at):g.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,oe,Ve,Je,me,ue,tt,Ae,at.data):g.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,oe,Ve,Je,at.width,at.height,tt,at.data):w.texSubImage2D(w.TEXTURE_2D,oe,Ve,Je,me,ue,tt,Ae,at);w.pixelStorei(w.UNPACK_ROW_LENGTH,qe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ct),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Wn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Pt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,mi),oe===0&&U.generateMipmaps&&w.generateMipmap(je),ve.unbindTexture()},this.initRenderTarget=function(g){m.get(g).__webglFramebuffer===void 0&&L.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?L.setTextureCube(g,0):g.isData3DTexture?L.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?L.setTexture2DArray(g,0):L.setTexture2D(g,0),ve.unbindTexture()},this.resetState=function(){D=0,G=0,B=null,ve.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const mo={type:"change"},oa={type:"start"},jo={type:"end"},tr=new sa,_o=new bn,Ep=Math.cos(70*kl.DEG2RAD),dt=new N,Rt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jr=1e-6;class yp extends Tc{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Hn,this._lastTargetPosition=new N,this._quat=new Hn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ka,this._sphericalDelta=new ka,this._scale=1,this._panOffset=new N,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new N,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bp.bind(this),this._onPointerDown=Tp.bind(this),this._onPointerUp=Ap.bind(this),this._onContextMenu=Up.bind(this),this._onMouseWheel=Cp.bind(this),this._onKeyDown=Pp.bind(this),this._onTouchStart=Dp.bind(this),this._onTouchMove=Lp.bind(this),this._onMouseDown=Rp.bind(this),this._onMouseMove=wp.bind(this),this._interceptControlDown=Ip.bind(this),this._interceptControlUp=Np.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mo),this.update(),this.state=Qe.NONE}update(e=null){const t=this.object.position;dt.copy(t).sub(this.target),dt.applyQuaternion(this._quat),this._spherical.setFromVector3(dt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Rt:n>Math.PI&&(n-=Rt),r<-Math.PI?r+=Rt:r>Math.PI&&(r-=Rt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(dt.setFromSpherical(this._spherical),dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=dt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(tr.origin.copy(this.object.position),tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tr.direction))<Ep?this.object.lookAt(this.target):(_o.setFromNormalAndCoplanarPoint(this.object.up,this.target),tr.intersectPlane(_o,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Jr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jr||this._lastTargetPosition.distanceToSquared(this.target)>Jr?(this.dispatchEvent(mo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rt/60*this.autoRotateSpeed*e:Rt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dt.setFromMatrixColumn(t,0),dt.multiplyScalar(-e),this._panOffset.add(dt)}_panUp(e,t){this.screenSpacePanning===!0?dt.setFromMatrixColumn(t,1):(dt.setFromMatrixColumn(t,0),dt.crossVectors(this.object.up,dt)),dt.multiplyScalar(e),this._panOffset.add(dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;dt.copy(r).sub(this.target);let s=dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Tp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function bp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ap(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jo),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rp(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(oa)}function wp(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Cp(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(oa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(jo))}function Pp(i){this.enabled!==!1&&this._handleKeyDown(i)}function Dp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(oa)}function Lp(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function Up(i){this.enabled!==!1&&i.preventDefault()}function Ip(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Np(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fp=Ft.memo(({onExpertClick:i,showExperts:e=!0})=>{const t=Ft.useRef(null),n=Ft.useRef(null),r=Ft.useRef(new yc),s=Ft.useRef(new Fe),[a,o]=Ft.useState(null),[c,l]=Ft.useState({x:0,y:0}),u=Ft.useRef(null),f=Ft.useRef(i),d=Ft.useRef(!1);Ft.useEffect(()=>{f.current=i},[i]);const _=(M,p,h,y,b)=>{let T=(M-h/2)/(h/2)*-180,A=(p-y/2)/(y/2)*-90;T=T*Math.PI/180,A=A*Math.PI/180;const R=Math.cos(A)*b;return{x:Math.cos(T)*R,y:Math.sin(A)*b,z:Math.sin(T)*R}},v=(M,p,h)=>{const y=(90-M)*(Math.PI/180),b=(p+180)*(Math.PI/180);return new N(-h*Math.sin(y)*Math.cos(b),h*Math.cos(y),h*Math.sin(y)*Math.sin(b))};return Ft.useEffect(()=>{if(!t.current||!n.current||d.current)return;d.current=!0;let M,p,h,y,b,T=[],A,R,C;const O=()=>{const S=t.current,D=n.current;if(!S||!D)return;const{width:G,height:B}=S.getBoundingClientRect();if(G===0||B===0){requestAnimationFrame(O);return}const X=75,K=4098/2,H=1968/2;M=new dc,M.background=null,p=new zt(45,G/B,.1,1e3),p.position.set(0,0,265),h=new Sp({canvas:D,antialias:!0,alpha:!0}),h.setSize(G,B),h.setClearColor(16777215,0);const k=()=>{const J=[];for(let Re=0;Re<200;Re++)J.push({x:2049*.2+Math.random()*2049*.3,y:984*.3+Math.random()*984*.4});for(let Re=0;Re<150;Re++)J.push({x:2049*.25+Math.random()*2049*.2,y:984*.7+Math.random()*984*.25});for(let Re=0;Re<100;Re++)J.push({x:2049*.45+Math.random()*2049*.15,y:984*.25+Math.random()*984*.2});for(let Re=0;Re<120;Re++)J.push({x:2049*.48+Math.random()*2049*.12,y:984*.45+Math.random()*984*.3});for(let Re=0;Re<250;Re++)J.push({x:2049*.6+Math.random()*2049*.35,y:984*.2+Math.random()*984*.4});for(let Re=0;Re<80;Re++)J.push({x:2049*.75+Math.random()*2049*.2,y:984*.6+Math.random()*984*.25});return J},$=()=>{const J=new AbortController,Te=setTimeout(()=>J.abort(),5e3);fetch("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json",{signal:J.signal,cache:"force-cache"}).then(ye=>{if(clearTimeout(Te),!ye.ok)throw new Error("Network response was not ok");return ye.json()}).then(ye=>{console.log("Puntos cargados desde URL:",ye.points?.length||0),ce(ye.points||[])}).catch(ye=>{clearTimeout(Te),ye.name==="AbortError"?console.warn("Timeout al cargar puntos, usando datos locales"):console.warn("No se pudieron cargar los puntos desde la URL, usando datos locales:",ye);const Re=k();console.log("Usando puntos locales:",Re.length),ce(Re)})},ce=J=>{if(!J||J.length===0){console.warn("No hay puntos para renderizar");return}console.log(`Renderizando ${J.length} puntos`);const Te=new qt,ye=new dr(.8,4,4),Re=new fr({color:"#9ca3af"}),De=[],V=[];let q=0;for(const he of J){const{x:we,y:de,z:ke}=_(he.x,he.y,K*2,H*2,X);if(we&&de&&ke){const ot=ye.clone(),Oe=ot.attributes.position;for(let Ge=0;Ge<Oe.count;Ge++)De.push(Oe.getX(Ge)+we,Oe.getY(Ge)+de,Oe.getZ(Ge)+ke);const We=ot.index;if(We)for(let Ge=0;Ge<We.count;Ge++)V.push(We.getX(Ge)+q);q+=Oe.count}}if(De.length===0){console.warn("No se generaron posiciones válidas");return}Te.setAttribute("position",new It(De,3)),V.length>0&&Te.setIndex(V),Te.computeVertexNormals(),b=new Yt(Te,Re),M.add(b),h.render(M,p),se()},se=()=>{if(e){const De=new Ti;T=[],al.forEach(V=>{const q=v(V.lat,V.lng,X+2),he=new dr(1.5,8,8),we=new fr({color:V.status==="online"?"#4a5568":"#a0a0a0",transparent:!0,opacity:.8}),de=new Yt(he,we);de.position.set(q.x,q.y,q.z),de.userData=V,De.add(de),T.push(de)}),M.add(De)}else T=[];y=new yp(p,D),y.enableKeys=!1,y.enablePan=!1,y.enableZoom=!1,y.enableDamping=!1,y.enableRotate=!0,y.autoRotate=!0,y.autoRotateSpeed=2,A=De=>{if(!e||T.length===0)return;const V=D.getBoundingClientRect();s.current.x=(De.clientX-V.left)/V.width*2-1,s.current.y=-((De.clientY-V.top)/V.height)*2+1,r.current.setFromCamera(s.current,p);const q=r.current.intersectObjects(T);if(q.length>0){const he=q[0].object.userData;o(he),l({x:De.clientX,y:De.clientY}),q[0].object.material.color.setHex(4210752),q[0].object.scale.set(1.5,1.5,1.5)}else o(null),T.forEach(he=>{const we=he.userData;he.material.color.setHex(we.status==="online"?4871528:10526880),he.scale.set(1,1,1)})},R=De=>{if(!e||T.length===0)return;const V=D.getBoundingClientRect();s.current.x=(De.clientX-V.left)/V.width*2-1,s.current.y=-((De.clientY-V.top)/V.height)*2+1,r.current.setFromCamera(s.current,p);const q=r.current.intersectObjects(T);q.length>0&&f.current&&f.current(q[0].object.userData)},D.addEventListener("mousemove",A),D.addEventListener("click",R),C=()=>{if(!S||!p||!h)return;const De=S.clientWidth,V=S.clientHeight;p.aspect=De/V,p.updateProjectionMatrix(),h.setSize(De,V)},window.addEventListener("resize",C);let J=0;const ye=1e3/60,Re=De=>{u.current=requestAnimationFrame(Re);const V=De-J;V<ye||(J=De-V%ye,y&&y.update(),h&&M&&p&&h.render(M,p))};Re(0)};try{$()}catch(J){console.error("Error al inicializar el globo:",J);const Te=k();ce(Te)}return()=>{C&&window.removeEventListener("resize",C),A&&D.removeEventListener("mousemove",A),R&&D.removeEventListener("click",R),u.current&&cancelAnimationFrame(u.current),y&&y.dispose(),M&&M.traverse(J=>{J.geometry&&J.geometry.dispose(),J.material&&(Array.isArray(J.material)?J.material.forEach(Te=>Te.dispose()):J.material.dispose())}),h&&h.dispose()}},x=O();return()=>{x&&typeof x=="function"&&x(),u.current&&cancelAnimationFrame(u.current),d.current=!1}},[e]),Zt.jsxs("div",{className:"relative w-full h-full min-h-[500px] bg-white",children:[Zt.jsx("div",{ref:t,className:"w-full h-full min-h-[500px] bg-white",children:Zt.jsx("canvas",{ref:n,width:"700",height:"600",style:{outline:"none",width:"100%",height:"100%",background:"transparent"}})}),a&&Zt.jsx(sl.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:"fixed z-50 pointer-events-none",style:{left:c.x+10,top:c.y-10},children:Zt.jsxs("div",{className:"glass rounded-2xl p-4 min-w-[200px] glow-gray",children:[Zt.jsx("div",{className:"font-semibold text-lg mb-1 text-dark-gray",children:a.name}),Zt.jsx("div",{className:"text-medium-gray text-sm mb-2",children:a.technology}),Zt.jsxs("div",{className:"flex items-center justify-between",children:[Zt.jsxs("span",{className:"text-dark-gray text-sm",children:["$",a.pricePerMinute,"/min"]}),Zt.jsxs("span",{className:"text-sm text-medium-gray",children:["⭐ ",a.rating]})]})]})})]})});Fp.displayName="Planet3D";export{Fp as default};
