!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealZoom=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=Function.prototype.call,c=u.bind?u.bind(u):function(){return u.apply(u,arguments)},a={},s={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,f=l&&!s.call({1:2},1);a.f=f?function(t){var e=l(this,t);return!!e&&e.enumerable}:s;var d,y,m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},p=Function.prototype,g=p.bind,b=p.call,v=g&&g.bind(b),h=g?function(t){return t&&v(b,t)}:function(t){return t&&function(){return b.apply(t,arguments)}},w=h,x=w({}.toString),O=w("".slice),S=function(t){return O(x(t),8,-1)},T=h,E=o,j=S,I=n.Object,P=T("".split),z=E((function(){return!I("z").propertyIsEnumerable(0)}))?function(t){return"String"==j(t)?P(t,""):I(t)}:I,R=n.TypeError,C=function(t){if(null==t)throw R("Can't call method on "+t);return t},k=z,L=C,M=function(t){return k(L(t))},W=function(t){return"function"==typeof t},A=W,F=function(t){return"object"==typeof t?null!==t:A(t)},_=n,N=W,D=function(t){return N(t)?t:void 0},Y=function(t,e){return arguments.length<2?D(_[t]):_[t]&&_[t][e]},U=h({}.isPrototypeOf),X=n,K=Y("navigator","userAgent")||"",B=X.process,H=X.Deno,G=B&&B.versions||H&&H.version,$=G&&G.v8;$&&(y=(d=$.split("."))[0]>0&&d[0]<4?1:+(d[0]+d[1])),!y&&K&&(!(d=K.match(/Edge\/(\d+)/))||d[1]>=74)&&(d=K.match(/Chrome\/(\d+)/))&&(y=+d[1]);var q=y,V=o,Z=!!Object.getOwnPropertySymbols&&!V((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&q&&q<41})),J=Z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Q=Y,tt=W,et=U,nt=J,rt=n.Object,ot=nt?function(t){return"symbol"==typeof t}:function(t){var e=Q("Symbol");return tt(e)&&et(e.prototype,rt(t))},it=n.String,ut=W,ct=function(t){try{return it(t)}catch(t){return"Object"}},at=n.TypeError,st=function(t){if(ut(t))return t;throw at(ct(t)+" is not a function")},lt=c,ft=W,dt=F,yt=n.TypeError,mt={exports:{}},pt=n,gt=Object.defineProperty,bt=function(t,e){try{gt(pt,t,{value:e,configurable:!0,writable:!0})}catch(n){pt[t]=e}return e},vt=bt,ht="__core-js_shared__",wt=n[ht]||vt(ht,{}),xt=wt;(mt.exports=function(t,e){return xt[t]||(xt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Ot=C,St=n.Object,Tt=function(t){return St(Ot(t))},Et=h({}.hasOwnProperty),jt=Object.hasOwn||function(t,e){return Et(Tt(t),e)},It=h,Pt=0,zt=Math.random(),Rt=It(1..toString),Ct=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Rt(++Pt+zt,36)},kt=n,Lt=mt.exports,Mt=jt,Wt=Ct,At=Z,Ft=J,_t=Lt("wks"),Nt=kt.Symbol,Dt=Nt&&Nt.for,Yt=Ft?Nt:Nt&&Nt.withoutSetter||Wt,Ut=function(t){if(!Mt(_t,t)||!At&&"string"!=typeof _t[t]){var e="Symbol."+t;At&&Mt(Nt,t)?_t[t]=Nt[t]:_t[t]=Ft&&Dt?Dt(e):Yt(e)}return _t[t]},Xt=c,Kt=F,Bt=ot,Ht=function(t,e){var n=t[e];return null==n?void 0:st(n)},Gt=function(t,e){var n,r;if("string"===e&&ft(n=t.toString)&&!dt(r=lt(n,t)))return r;if(ft(n=t.valueOf)&&!dt(r=lt(n,t)))return r;if("string"!==e&&ft(n=t.toString)&&!dt(r=lt(n,t)))return r;throw yt("Can't convert object to primitive value")},$t=Ut,qt=n.TypeError,Vt=$t("toPrimitive"),Zt=function(t,e){if(!Kt(t)||Bt(t))return t;var n,r=Ht(t,Vt);if(r){if(void 0===e&&(e="default"),n=Xt(r,t,e),!Kt(n)||Bt(n))return n;throw qt("Can't convert object to primitive value")}return void 0===e&&(e="number"),Gt(t,e)},Jt=ot,Qt=function(t){var e=Zt(t,"string");return Jt(e)?e:e+""},te=F,ee=n.document,ne=te(ee)&&te(ee.createElement),re=function(t){return ne?ee.createElement(t):{}},oe=re,ie=!i&&!o((function(){return 7!=Object.defineProperty(oe("div"),"a",{get:function(){return 7}}).a})),ue=i,ce=c,ae=a,se=m,le=M,fe=Qt,de=jt,ye=ie,me=Object.getOwnPropertyDescriptor;r.f=ue?me:function(t,e){if(t=le(t),e=fe(e),ye)try{return me(t,e)}catch(t){}if(de(t,e))return se(!ce(ae.f,t,e),t[e])};var pe={},ge=n,be=F,ve=ge.String,he=ge.TypeError,we=function(t){if(be(t))return t;throw he(ve(t)+" is not an object")},xe=i,Oe=ie,Se=we,Te=Qt,Ee=n.TypeError,je=Object.defineProperty;pe.f=xe?je:function(t,e,n){if(Se(t),e=Te(e),Se(n),Oe)try{return je(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ee("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ie=pe,Pe=m,ze=i?function(t,e,n){return Ie.f(t,e,Pe(1,n))}:function(t,e,n){return t[e]=n,t},Re={exports:{}},Ce=W,ke=wt,Le=h(Function.toString);Ce(ke.inspectSource)||(ke.inspectSource=function(t){return Le(t)});var Me,We,Ae,Fe=ke.inspectSource,_e=W,Ne=Fe,De=n.WeakMap,Ye=_e(De)&&/native code/.test(Ne(De)),Ue=mt.exports,Xe=Ct,Ke=Ue("keys"),Be=function(t){return Ke[t]||(Ke[t]=Xe(t))},He={},Ge=Ye,$e=n,qe=h,Ve=F,Ze=ze,Je=jt,Qe=wt,tn=Be,en=He,nn="Object already initialized",rn=$e.TypeError,on=$e.WeakMap;if(Ge||Qe.state){var un=Qe.state||(Qe.state=new on),cn=qe(un.get),an=qe(un.has),sn=qe(un.set);Me=function(t,e){if(an(un,t))throw new rn(nn);return e.facade=t,sn(un,t,e),e},We=function(t){return cn(un,t)||{}},Ae=function(t){return an(un,t)}}else{var ln=tn("state");en[ln]=!0,Me=function(t,e){if(Je(t,ln))throw new rn(nn);return e.facade=t,Ze(t,ln,e),e},We=function(t){return Je(t,ln)?t[ln]:{}},Ae=function(t){return Je(t,ln)}}var fn={set:Me,get:We,has:Ae,enforce:function(t){return Ae(t)?We(t):Me(t,{})},getterFor:function(t){return function(e){var n;if(!Ve(e)||(n=We(e)).type!==t)throw rn("Incompatible receiver, "+t+" required");return n}}},dn=i,yn=jt,mn=Function.prototype,pn=dn&&Object.getOwnPropertyDescriptor,gn=yn(mn,"name"),bn=gn&&"something"===function(){}.name,vn=gn&&(!dn||dn&&pn(mn,"name").configurable),hn=n,wn=W,xn=jt,On=ze,Sn=bt,Tn=Fe,En={EXISTS:gn,PROPER:bn,CONFIGURABLE:vn}.CONFIGURABLE,jn=fn.get,In=fn.enforce,Pn=String(String).split("String");(Re.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,u=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,a=r&&void 0!==r.name?r.name:e;wn(n)&&("Symbol("===String(a).slice(0,7)&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!xn(n,"name")||En&&n.name!==a)&&On(n,"name",a),(o=In(n)).source||(o.source=Pn.join("string"==typeof a?a:""))),t!==hn?(i?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=n:On(t,e,n)):u?t[e]=n:Sn(e,n)})(Function.prototype,"toString",(function(){return wn(this)&&jn(this).source||Tn(this)}));var zn={},Rn=Math.ceil,Cn=Math.floor,kn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Cn:Rn)(e)},Ln=kn,Mn=Math.max,Wn=Math.min,An=kn,Fn=Math.min,_n=function(t){return t>0?Fn(An(t),9007199254740991):0},Nn=M,Dn=function(t,e){var n=Ln(t);return n<0?Mn(n+e,0):Wn(n,e)},Yn=function(t){return _n(t.length)},Un=function(t){return function(e,n,r){var o,i=Nn(e),u=Yn(i),c=Dn(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Xn={includes:Un(!0),indexOf:Un(!1)},Kn=jt,Bn=M,Hn=Xn.indexOf,Gn=He,$n=h([].push),qn=function(t,e){var n,r=Bn(t),o=0,i=[];for(n in r)!Kn(Gn,n)&&Kn(r,n)&&$n(i,n);for(;e.length>o;)Kn(r,n=e[o++])&&(~Hn(i,n)||$n(i,n));return i},Vn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Zn=qn,Jn=Vn.concat("length","prototype");zn.f=Object.getOwnPropertyNames||function(t){return Zn(t,Jn)};var Qn={};Qn.f=Object.getOwnPropertySymbols;var tr=Y,er=zn,nr=Qn,rr=we,or=h([].concat),ir=tr("Reflect","ownKeys")||function(t){var e=er.f(rr(t)),n=nr.f;return n?or(e,n(t)):e},ur=jt,cr=ir,ar=r,sr=pe,lr=o,fr=W,dr=/#|\.prototype\./,yr=function(t,e){var n=pr[mr(t)];return n==br||n!=gr&&(fr(e)?lr(e):!!e)},mr=yr.normalize=function(t){return String(t).replace(dr,".").toLowerCase()},pr=yr.data={},gr=yr.NATIVE="N",br=yr.POLYFILL="P",vr=yr,hr=n,wr=r.f,xr=ze,Or=Re.exports,Sr=bt,Tr=function(t,e){for(var n=cr(e),r=sr.f,o=ar.f,i=0;i<n.length;i++){var u=n[i];ur(t,u)||r(t,u,o(e,u))}},Er=vr,jr={};jr[Ut("toStringTag")]="z";var Ir=n,Pr="[object z]"===String(jr),zr=W,Rr=S,Cr=Ut("toStringTag"),kr=Ir.Object,Lr="Arguments"==Rr(function(){return arguments}()),Mr=Pr?Rr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=kr(t),Cr))?n:Lr?Rr(e):"Object"==(r=Rr(e))&&zr(e.callee)?"Arguments":r},Wr=n.String,Ar=we,Fr={},_r=o,Nr=n.RegExp;Fr.UNSUPPORTED_Y=_r((function(){var t=Nr("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Fr.BROKEN_CARET=_r((function(){var t=Nr("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));var Dr,Yr=qn,Ur=Vn,Xr=Object.keys||function(t){return Yr(t,Ur)},Kr=pe,Br=we,Hr=M,Gr=Xr,$r=i?Object.defineProperties:function(t,e){Br(t);for(var n,r=Hr(e),o=Gr(e),i=o.length,u=0;i>u;)Kr.f(t,n=o[u++],r[n]);return t},qr=Y("document","documentElement"),Vr=we,Zr=$r,Jr=Vn,Qr=He,to=qr,eo=re,no=Be("IE_PROTO"),ro=function(){},oo=function(t){return"<script>"+t+"</"+"script>"},io=function(t){t.write(oo("")),t.close();var e=t.parentWindow.Object;return t=null,e},uo=function(){try{Dr=new ActiveXObject("htmlfile")}catch(t){}var t,e;uo="undefined"!=typeof document?document.domain&&Dr?io(Dr):((e=eo("iframe")).style.display="none",to.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(oo("document.F=Object")),t.close(),t.F):io(Dr);for(var n=Jr.length;n--;)delete uo.prototype[Jr[n]];return uo()};Qr[no]=!0;var co,ao,so=Object.create||function(t,e){var n;return null!==t?(ro.prototype=Vr(t),n=new ro,ro.prototype=null,n[no]=t):n=uo(),void 0===e?n:Zr(n,e)},lo=o,fo=n.RegExp,yo=lo((function(){var t=fo(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),mo=o,po=n.RegExp,go=mo((function(){var t=po("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),bo=c,vo=h,ho=function(t){if("Symbol"===Mr(t))throw TypeError("Cannot convert a Symbol value to a string");return Wr(t)},wo=function(){var t=Ar(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},xo=Fr,Oo=mt.exports,So=so,To=fn.get,Eo=yo,jo=go,Io=Oo("native-string-replace",String.prototype.replace),Po=RegExp.prototype.exec,zo=Po,Ro=vo("".charAt),Co=vo("".indexOf),ko=vo("".replace),Lo=vo("".slice),Mo=(ao=/b*/g,bo(Po,co=/a/,"a"),bo(Po,ao,"a"),0!==co.lastIndex||0!==ao.lastIndex),Wo=xo.UNSUPPORTED_Y||xo.BROKEN_CARET,Ao=void 0!==/()??/.exec("")[1];(Mo||Ao||Wo||Eo||jo)&&(zo=function(t){var e,n,r,o,i,u,c,a=this,s=To(a),l=ho(t),f=s.raw;if(f)return f.lastIndex=a.lastIndex,e=bo(zo,f,l),a.lastIndex=f.lastIndex,e;var d=s.groups,y=Wo&&a.sticky,m=bo(wo,a),p=a.source,g=0,b=l;if(y&&(m=ko(m,"y",""),-1===Co(m,"g")&&(m+="g"),b=Lo(l,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==Ro(l,a.lastIndex-1))&&(p="(?: "+p+")",b=" "+b,g++),n=new RegExp("^(?:"+p+")",m)),Ao&&(n=new RegExp("^"+p+"$(?!\\s)",m)),Mo&&(r=a.lastIndex),o=bo(Po,y?n:a,b),y?o?(o.input=Lo(o.input,g),o[0]=Lo(o[0],g),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:Mo&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),Ao&&o&&o.length>1&&bo(Io,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&d)for(o.groups=u=So(null),i=0;i<d.length;i++)u[(c=d[i])[0]]=o[c[1]];return o});(function(t,e){var n,r,o,i,u,c=t.target,a=t.global,s=t.stat;if(n=a?hr:s?hr[c]||Sr(c,{}):(hr[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=wr(n,r))&&u.value:n[r],!Er(a?r:c+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Tr(i,o)}(t.sham||o&&o.sham)&&xr(i,"sham",!0),Or(n,r,i,t)}})({target:"RegExp",proto:!0,forced:/./.exec!==zo},{exec:zo});
/*!
	 * reveal.js Zoom plugin
	 */
var Fo={id:"zoom",init:function(t){t.getRevealElement().addEventListener("mousedown",(function(e){var n=/Linux/.test(window.navigator.platform)?"ctrl":"alt",r=(t.getConfig().zoomKey?t.getConfig().zoomKey:n)+"Key",o=t.getConfig().zoomLevel?t.getConfig().zoomLevel:2;e[r]&&!t.isOverview()&&(e.preventDefault(),_o.to({x:e.clientX,y:e.clientY,scale:o,pan:!1}))}))}},_o=function(){var t=1,e=0,n=0,r=-1,o=-1,i="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style;function u(e,n){var r=a();if(e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*n)/2,e.y-=(window.innerHeight-e.height*n)/2,i)if(1===n)document.body.style.transform="",document.body.style.OTransform="",document.body.style.msTransform="",document.body.style.MozTransform="",document.body.style.WebkitTransform="";else{var o=r.x+"px "+r.y+"px",u="translate("+-e.x+"px,"+-e.y+"px) scale("+n+")";document.body.style.transformOrigin=o,document.body.style.OTransformOrigin=o,document.body.style.msTransformOrigin=o,document.body.style.MozTransformOrigin=o,document.body.style.WebkitTransformOrigin=o,document.body.style.transform=u,document.body.style.OTransform=u,document.body.style.msTransform=u,document.body.style.MozTransform=u,document.body.style.WebkitTransform=u}else 1===n?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(r.x+e.x)/n+"px",document.body.style.top=-(r.y+e.y)/n+"px",document.body.style.width=100*n+"%",document.body.style.height=100*n+"%",document.body.style.zoom=n);t=n,document.documentElement.classList&&(1!==t?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function c(){var r=.12*window.innerWidth,o=.12*window.innerHeight,i=a();n<o?window.scroll(i.x,i.y-14/t*(1-n/o)):n>window.innerHeight-o&&window.scroll(i.x,i.y+(1-(window.innerHeight-n)/o)*(14/t)),e<r?window.scroll(i.x-14/t*(1-e/r),i.y):e>window.innerWidth-r&&window.scroll(i.x+(1-(window.innerWidth-e)/r)*(14/t),i.y)}function a(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}return i&&(document.body.style.transition="transform 0.8s ease",document.body.style.OTransition="-o-transform 0.8s ease",document.body.style.msTransition="-ms-transform 0.8s ease",document.body.style.MozTransition="-moz-transform 0.8s ease",document.body.style.WebkitTransition="-webkit-transform 0.8s ease"),document.addEventListener("keyup",(function(e){1!==t&&27===e.keyCode&&_o.out()})),document.addEventListener("mousemove",(function(r){1!==t&&(e=r.clientX,n=r.clientY)})),{to:function(e){if(1!==t)_o.out();else{if(e.x=e.x||0,e.y=e.y||0,e.element){var n=e.element.getBoundingClientRect();e.x=n.left-20,e.y=n.top-20,e.width=n.width+40,e.height=n.height+40}void 0!==e.width&&void 0!==e.height&&(e.scale=Math.max(Math.min(window.innerWidth/e.width,window.innerHeight/e.height),1)),e.scale>1&&(e.x*=e.scale,e.y*=e.scale,u(e,e.scale),!1!==e.pan&&(r=setTimeout((function(){o=setInterval(c,1e3/60)}),800)))}},out:function(){clearTimeout(r),clearInterval(o),u({x:0,y:0},1),t=1},magnify:function(t){this.to(t)},reset:function(){this.out()},zoomLevel:function(){return t}}}();return function(){return Fo}}));
