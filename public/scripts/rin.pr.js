/*
 AngularJS v1.3.8-build.3713+sha.661f6d9
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,Y,t){'use strict';function T(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.8-build.3713+sha.661f6d9/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a=b.length;
return b.nodeType===na&&a?!0:F(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Fd(){return++nb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function z(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}lc(b,a);return b}function ba(b){return parseInt(b,10)}function C(){}function oa(b){return b}function da(b){return function(){return b}}function D(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function H(b){return null!==b&&"object"===typeof b}function F(b){return"string"===typeof b}function V(b){return"number"===typeof b}function pa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function ob(b){return"[object RegExp]"===Da.call(b)}function Ua(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ua(b)||Va(b))throw Ka("cpws");if(a){if(b===a)throw Ka("cpi");c=c||[];d=d||[];if(H(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),H(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;x(a)?a.length=0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),H(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Ea(b,[],c,d):pa(b)?a=new Date(b.getTime()):ob(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):H(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(H(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?fa(b.getTime(),a.getTime()):!1;if(ob(b)&&ob(a))return b.toString()==a.toString();if(Va(b)||Va(a)||Ua(b)||Ua(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!fa(b[d],
a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function nc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?
c=t:Ua(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function oc(b){return F(b)?JSON.parse(b):b}function va(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===pb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a=
{},c,d;s((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];s(b,function(b,d){x(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=B(b);for(d=0;d<e;++d)if(c=rb[d]+a,F(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function sc(b,a,c){H(c)||(c={});c=z({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===Y?"document":va(b);throw Ka("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;M&&e.test(M.name)&&(c.debugInfoEnabled=!0,M.name=M.name.replace(e,""));if(M&&!f.test(M.name))return d();M.name=M.name.replace(f,"");ga.resumeBootstrap=function(b){s(b,function(b){a.push(b)});d()}}function Kd(){M.name="NG_ENABLE_DEBUG_INFO!"+M.name;M.location.reload()}function Ld(b){b=ga.element(b).injector();if(!b)throw Ka("test");return b.get("$$testability")}function tc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?
a:"")+b.toLowerCase()})}function Nd(){var b;uc||((ra=M.jQuery)&&ra.fn.on?(B=ra,z(ra.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Pb)Pb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):B=R,ga.element=B,uc=!0)}function Qb(b,a,c){if(!b)throw Ka("areq",a||"?",c||"required");return b}function sb(b,a,c){c&&
x(b)&&(b=b[b.length-1]);Qb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ka("badname",a);}function vc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?nc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ha(){return Object.create(null)}function Od(b){function a(a,
b,c){return a[b]||(a[b]=c())}var c=T("$injector"),d=T("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||T;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,
name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){z(b,{bootstrap:sc,copy:Ea,extend:z,equals:fa,element:B,forEach:s,
injector:Ob,noop:C,bind:nc,toJson:$a,fromJson:oc,identity:oa,isUndefined:D,isDefined:y,isString:F,isFunction:G,isObject:H,isNumber:V,isElement:mc,isArray:x,version:Qd,isDate:pa,lowercase:Q,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:T,$$csp:ab,reloadWithDebugInfo:Kd});bb=Od(M);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",Rd)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",wc).directive({a:Td,input:xc,textarea:xc,
form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:yc,ngPattern:yc,required:zc,ngRequired:zc,minlength:Ac,ngMinlength:Ac,maxlength:Bc,ngMaxlength:Bc,ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Cc);
a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Dc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function cb(b){return b.replace(cf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}
function Ec(b){b=b.nodeType;return b===na||!b||9===b}function Fc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Rb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof
R)return b;var a;F(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Sb("nosel");return new R(b)}if(a){a=Y;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Fc(b,a))?c.childNodes:[]}Gc(this,b)}function Tb(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Hc(b,a,c,d){if(y(d))throw Sb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),function(a){if(y(c)){var d=
e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Hc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Ub(b,a,c){if(Ec(b)){var d=y(c),e=!d&&a&&!H(a),f=!a;b=(b=yb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];z(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");s(a.split(" "),function(a){a=
U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Gc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ic(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function Jc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Kc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||M;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Lc(b,a){var c=Eb[a.toLowerCase()];return c&&Mc[ua(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Nc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:
0;if(g){if(D(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return z(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return Ab(b,a)},addClass:function(b,
a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Oc,"").match(Pc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Vb(b,
a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw F(c)&&c||(c=b.name||mf(b)),Ga("strictdi",c);a=b.toString().replace(Oc,"");a=a.match(Pc);s(a[1].split(nf),function(a){a.replace(of,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,sb(b[a],"fn"),d=b.slice(0,a)):sb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(H(b))s(b,kc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(G(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",
a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(D(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=bb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw x(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Vb(b,a,g),l,q,p;q=0;for(l=k.length;q<l;q++){p=k[q];if("string"!==
typeof p)throw Ga("itkn",p);h.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}x(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return H(a)||G(a)?a:d},get:d,annotate:Vb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new db([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ma(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ga.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),u={},r=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,t,a)});s(g(b),function(a){r.invoke(a||C)});return r}function Be(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function N(){s(L,function(a){a()});J=b(N,
a)})()}function g(){h();l()}function h(){A=b.history.state;A=D(A)?null:A;fa(A,I)&&(A=I);I=A}function l(){if(E!==m.url()||P!==A)E=m.url(),P=A,s(W,function(a){a(m.url(),A)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,u=b.history,r=b.setTimeout,O=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){s(L,function(a){a()});0===v?a():
w.push(a)};var L=[],J;m.addPollFn=function(a){D(J)&&f(100,r);L.push(a);return a};var A,P,E=q.href,S=a.find("base"),X=null;h();P=A;m.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=P===e;if(E===a&&(!d.history||f))return m;var g=E&&Ha(E)===Ha(a);E=a;P=e;!d.history||g&&f?(g||(X=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),P=A);return m}return X||q.href.replace(/%27/g,
"'")};m.state=function(){return A};var W=[],wa=!1,I=null;m.onUrlChange=function(a){if(!wa){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);wa=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=S.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ea={},y="",ca=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":F(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),ea={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),ea[a]===t&&(ea[a]=k(e.substring(g+1))));return ea}};m.defer=function(a,b){var c;v++;c=r(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],O(a),e(C),!0):!1}}function De(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new pf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw T("$cacheFactory")("iid",b);var g=0,h=z({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!D(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),
b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};p=q=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return z({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",
function(b){return b("templates")}]}function wc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){Ma(a,"directive");F(a)?(Qb(e,
"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";H(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,kc(p));return this};this.aHrefSanitizationWhitelist=
function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,O,n,v,w,L,J,A){function P(a,b){try{a.addClass(b)}catch(c){}}
function E(a,b,c,d,e){a instanceof B||(a=B(a));s(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,c,d){Qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Wb(g,B("<div>").append(a).html())):
c?La.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);E.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,p,n,w;if(r)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(p=h.length;q<p;)l=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),E.$$addScopeInfo(B(l),k)):k=a,n=c.transcludeOnThisElement?X(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?X(a,
b):null,c(f,k,l,d,n)):f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,q,p,r,n=0;n<a.length;n++){l=new Xb;k=W(a[n],[],l,0===n?d:t,e);(f=k.length?ea(k,a[n],l,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(n,f,l),p=!0,r=r||f;f=null}return p?g:null}function X(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case na:ca(b,ya(ua(a)),"E",d,g);for(var k,q,p,r=a.attributes,n=0,w=r&&r.length;n<w;n++){var O=!1,L=!1;k=r[n];l=k.name;q=U(k.value);k=ya(l);if(p=fb.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");D(u)&&k===u+"Start"&&(O=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());
h[k]=l;if(p||!c.hasOwnProperty(k))c[k]=q,Lc(a,k)&&(c[k]=!0);Pa(a,b,q,k,p);ca(b,k,"A",d,g,O,L)}a=a.className;if(F(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),ca(b,k,"C",d,g)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case pb:M(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),ca(b,k,"M",d,g)&&(c[k]=U(l[2]))}catch(v){}}b.sort(N);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function I(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function ea(a,d,e,f,g,l,k,p,r){function w(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=K.require;a.directiveName=z;if(S===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=I(b,c,d));b.require=K.require;b.directiveName=z;if(S===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",
g=!1,l=c,k;if(F(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);return e||null}x(b)&&(e=[],s(b,function(b){e.push(L(a,b,c,d))}));return e}function v(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=t);C&&(d=P);c||(c=C?W.parent():W);return h(a,b,d,c,wa)}var r,w,u,A,
P,eb,W,I;d===f?(I=e,W=e.$$element):(W=B(f),I=new Xb(W,e));S&&(A=c.$new(!0));h&&(eb=l,eb.$$boundTransclude=h);J&&(X={},P={},s(J,function(a){var b={$scope:a===S||a.$$isolateScope?A:c,$element:W,$attrs:I,$transclude:eb};u=a.controller;"@"==u&&(u=I[a.name]);b=n(u,b,!0,a.controllerAs);P[a.name]=b;C||W.data("$"+a.name+"Controller",b.instance);X[a.name]=b}));if(S){E.$$addScopeInfo(W,A,!0,!(ka&&(ka===S||ka===S.$$originalDirective)));E.$$addScopeClass(W,!0);g=X&&X[S.name];var xa=A;g&&g.identifier&&!0===S.bindToController&&
(xa=g.instance);s(A.$$isolateBindings=S.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":I.$observe(e,function(a){xa[d]=a});I.$$observers[e].$$scope=c;I[e]&&(xa[d]=b(I[e])(c));break;case "=":if(f&&!I[e])break;h=O(I[e]);k=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ja("nonassign",I[e],S.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);return g=a};f.$stateful=!0;f=a.collection?
c.$watchCollection(I[e],f):c.$watch(O(I[e],f),null,h.literal);A.$on("$destroy",f);break;case "&":h=O(I[e]),xa[d]=function(a){return h(c,a)}}})}X&&(s(X,function(a){a()}),X=null);g=0;for(r=k.length;g<r;g++)w=k[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,P),eb);var wa=c;S&&(S.template||null===S.templateUrl)&&(wa=A);a&&a(wa,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)w=p[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,P),eb)}r=r||{};for(var A=-Number.MAX_VALUE,
P,J=r.controllerDirectives,X,S=r.newIsolateScopeDirective,ka=r.templateDirective,ea=r.nonTlbTranscludeDirective,ca=!1,D=!1,C=r.hasElementTranscludeDirective,aa=e.$$element=B(d),K,z,N,Aa=f,Q,M=0,R=a.length;M<R;M++){K=a[M];var Pa=K.$$start,fb=K.$$end;Pa&&(aa=wa(d,Pa,fb));N=t;if(A>K.priority)break;if(N=K.scope)K.templateUrl||(H(N)?(Oa("new/isolated scope",S||P,K,aa),S=K):Oa("new/isolated scope",S,K,aa)),P=P||K;z=K.name;!K.templateUrl&&K.controller&&(N=K.controller,J=J||{},Oa("'"+z+"' controller",J[z],
K,aa),J[z]=K);if(N=K.transclude)ca=!0,K.$$tlb||(Oa("transclusion",ea,K,aa),ea=K),"element"==N?(C=!0,A=K.priority,N=aa,aa=e.$$element=B(Y.createComment(" "+z+": "+e[z]+" ")),d=aa[0],V(g,Za.call(N,0),d),Aa=E(N,f,A,l&&l.name,{nonTlbTranscludeDirective:ea})):(N=B(Tb(d)).contents(),aa.empty(),Aa=E(N,f));if(K.template)if(D=!0,Oa("template",ka,K,aa),ka=K,N=G(K.template)?K.template(aa,e):K.template,N=Sc(N),K.replace){l=K;N=Rb.test(N)?Tc(Wb(K.templateNamespace,U(N))):[];d=N[0];if(1!=N.length||d.nodeType!==
na)throw ja("tplrt",z,"");V(g,aa,d);R={$attr:{}};N=W(d,[],R);var ba=a.splice(M+1,a.length-(M+1));S&&y(N);a=a.concat(N).concat(ba);Qc(e,R);R=a.length}else aa.html(N);if(K.templateUrl)D=!0,Oa("template",ka,K,aa),ka=K,K.replace&&(l=K),v=T(a.splice(M,a.length-M),aa,e,g,ca&&Aa,k,p,{controllerDirectives:J,newIsolateScopeDirective:S,templateDirective:ka,nonTlbTranscludeDirective:ea}),R=a.length;else if(K.compile)try{Q=K.compile(aa,e,Aa),G(Q)?w(null,Q,Pa,fb):Q&&w(Q.pre,Q.post,Pa,fb)}catch(qf){c(qf,va(aa))}K.terminal&&
(v.terminal=!0,A=Math.max(A,K.priority))}v.scope=P&&!0===P.scope;v.transcludeOnThisElement=ca;v.elementTranscludeOnThisElement=C;v.templateOnThisElement=D;v.transclude=Aa;r.hasElementTranscludeDirective=C;return v}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=z(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ca(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=0,n=e.length;r<n;r++)try{if(q=e[r],(g===t||g>q.priority)&&-1!=
q.restrict.indexOf(f)){if(l){var w={$$start:l,$$end:k};q=z(Object.create(q),w)}b.push(q);h=q}}catch(O){c(O)}}return h}function D(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Qc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(P(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==
f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function T(a,b,c,d,e,f,g,h){var l=[],k,q,p=b[0],n=a.shift(),w=z({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),O=G(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,u=n.templateNamespace;b.empty();r(L.getTrustedResourceUrl(O)).then(function(r){var L,v;r=Sc(r);if(n.replace){r=Rb.test(r)?Tc(Wb(u,U(r))):[];L=r[0];if(1!=r.length||L.nodeType!==
na)throw ja("tplrt",n.name,O);r={$attr:{}};V(d,b,L);var A=W(L,[],r);H(n.scope)&&y(A);a=A.concat(a);Qc(c,r)}else L=p,b.html(r);a.unshift(w);k=ea(a,L,c,e,b,n,f,g,h);s(d,function(a,c){a==L&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var J=l.shift(),E=l.shift(),A=b[0];if(!r.$$destroyed){if(v!==p){var I=v.className;h.hasElementTranscludeDirective&&n.replace||(A=Tb(L));V(J,B(v),A);P(B(A),I)}v=k.transcludeOnThisElement?X(r,k.transclude,E):E;k(q,r,A,d,v)}}l=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=X(b,k.transclude,e)),k(q,b,c,d,a)))}}function N(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,va(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();b||E.$$addBindingClass(e);E.$$addBindingInfo(e,
d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Wb(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",
va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var p=g[e];p!==d&&(k=p&&b(p,!0,h,f),d=p);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,
h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ra?(Pb=!0,ra.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return z(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),
d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Xb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Uc(a,b);c&&c.length&&J.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&J.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Lc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):
h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=tc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=A(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var q=2*k,g=g+A(U(h[q]),!0),g=g+(" "+U(h[q+1]));h=U(h[2*k]).split(/\s/);g+=A(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||
b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ha()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var Aa=b.startSymbol(),ka=b.endSymbol(),Sc="{{"==Aa||"}}"==ka?oa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,ka)},fb=/^ngAttr[A-Z]/;E.$$addBindingInfo=k?function(a,b){var c=
a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;E.$$addBindingClass=k?function(a){P(a,"ng-binding")}:C;E.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;E.$$addScopeClass=k?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:C;return E}]}function ya(b){return cb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;
c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");H(a)?z(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!H(a.$scope))throw T("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,p,q;l=!0===l;k&&F(k)&&(q=k);F(g)&&
(k=g.match(c),p=k[1],q=q||k[3],g=b.hasOwnProperty(p)?b[p]:vc(h.$scope,p,!0)||(a?vc(e,p,!0):t),sb(g,p,!0));if(l)return l=(x(g)?g[g.length-1]:g).prototype,m=Object.create(l),q&&f(h,q,m,p||g.name),z(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(F(b)){var c=
b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=oc(c))}}return b}function Wc(b){var a=ha(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=Q(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=H(b)?b:t;return function(c){a||(a=Wc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Yc(b,a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}
function Ke(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return H(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory",
"$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=z({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ga.isObject(a))throw T("$http")("badreq",a);var e=z({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=z({},a.headers),
f,g,c=z({},c.common,c[Q(a.method)]);a:for(f in c){a=Q(f);for(g in e)if(Q(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),t,a.transformRequest);D(e)&&s(d,function(a,b){"content-type"===Q(b)&&delete d[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(s(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&
f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}P&&(200<=b&&300>b?P.put(X,[b,c,Wc(d),e]):P.remove(X));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,
status:b,headers:Xc(d),config:c,statusText:e})}function w(a){m(a.data,a.status,qa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var J=h.defer(),A=J.promise,P,E,s=c.headers,X=p(c.url,c.params);k.pendingRequests.push(c);A.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(P=H(c.cache)?c.cache:H(b.cache)?b.cache:q);P&&(E=P.get(X),y(E)?E&&G(E.then)?E.then(w,w):x(E)?m(E[1],E[0],qa(E[2]),E[3]):m(E,200,{},
"OK"):P.put(X,A));D(E)&&((E=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,X,f,l,s,c.timeout,c.withCredentials,c.responseType));return A}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||D(a)||(x(a)||(a=[a]),s(a,function(a){H(a)&&(a=pa(a)?a.toISOString():$a(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];s(c,function(a){u.unshift(F(a)?l.get(a):
l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(z(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(z(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new M.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,
d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,p,q,u){function r(){v&&v();w&&w.abort()}
function O(a,d,e,f,g){J!==t&&c.cancel(J);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var n="_"+(d.counter++).toString(36);d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){O(k,a,d[n].data,"",b);d[n]=C})}else{var w=a();w.open(e,h,!0);s(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);O(k,c,b,w.getAllResponseHeaders(),a)};e=function(){O(k,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(u)try{w.responseType=u}catch(L){if("json"!==u)throw L;}w.send(l||null)}if(0<p)var J=c(r,p);else p&&G(p.then)&&p.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",
function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,r){function O(c){return c.replace(k,b).replace(m,a)}function n(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}r=!!r;for(var v,w,L=0,J=[],A=[],P=f.length,E=[],s=[];L<P;)if(-1!=(v=f.indexOf(b,L))&&-1!=(w=f.indexOf(a,v+h)))L!==v&&E.push(O(f.substring(L,
v))),L=f.substring(v+h,w),J.push(L),A.push(c(L,n)),L=w+l,s.push(E.length),E.push("");else{L!==P&&E.push(O(f.substring(L)));break}if(u&&1<E.length)throw $b("noconcat",f);if(!g||J.length){var X=function(a){for(var b=0,c=J.length;b<c;b++){if(r&&D(a[b]))return;E[s[b]]=a[b]}return E.join("")};return z(function(a){var b=0,c=J.length,e=Array(c);try{for(;b<c;b++)e[b]=A[b](a);return X(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:J,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(A,
function(c,e){var f=X(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,r=(u?d:c).defer(),O=r.promise;l=y(l)?l:0;O.then(null,null,e);O.$$intervalId=m(function(){r.notify(q++);0<
l&&q>=l&&(r.resolve(q),p(O.$$intervalId),delete f[O.$$intervalId]);u||b.$apply()},h);f[O.$$intervalId]=r;return O}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,
maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",
longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);return b.join("/")}function $c(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=ba(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):
d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function bd(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);$c(b,this);this.$$parse=function(a){var b=za(c,a);if(!F(b))throw Fb("ipthprfx",a,c);
ad(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=za(b,d))!==t?(g=f,g=(f=za(a,f))!==t?c+(za("/",f)||f):b+g):(f=za(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);$c(b,this);this.$$parse=function(d){d=
za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),D(e)&&(e=d)):e=this.$$html5?d:"";ad(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):!1}}function cd(b,
a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Gb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(D(c))return this[b];this[b]=
a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):H(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;
try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var p=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Fb("nobase");q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(m||"/");m=e.history?cc:cd}else q=Ha(p),m=dc;k=new m(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&
2!=b.which){for(var e=B(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=p&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=bd(d.url()),b=bd(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function gb(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},l=g||Qa(b)?h:oa,k=g||Qa(a)?h:oa,m=
g||Qa(c)?h:oa,p=g||Qa(d)?h:oa,q=g||Qa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],
c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return gb(a,b,c,b)};return e[b]=
f}function fc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ha(),a=ha();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?
!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&fc(b));return h},b,c)}for(var k=[],q=0,p=e.length;q<p;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&fc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);
y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,
c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,L;switch(typeof d){case "string":L=d=d.trim();var J=g?a:b;v=J[L];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?u:q,v=new gc(g),v=(new hb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=
m:w?(v=e(v),v.$$watchDelegate=v.literal?k:l):v.inputs&&(v.$$watchDelegate=h),J[L]=v);return p(v,f);case "function":return p(d,f);default:return p(C,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
{status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=
T("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
e;e=c(this,this.$$resolve,this.$$reject);try{if(H(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof
u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=x(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,
a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=10,a=T("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=
++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function u(){null===
d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++nb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=
d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=C);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Xa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&
b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!D(e)){if(H(e))if(Ta(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==
m&&(f=m={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,p=g(a,c),q=[],m={},n=!0,u=0;return this.$watch(p,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(l)if(H(e))if(Ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=
e})},$digest:function(){var e,g,l,m,u,v,s=b,t,W=[],y,I;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(t=this;O.length;){try{I=O.shift(),I.scope.$eval(I.expression,I.locals)}catch(B){f(B)}c=null}a:do{if(m=t.$$watchers)for(u=m.length;u--;)try{if(e=m[u])if((g=e.get(t))!==(l=e.last)&&!(e.eq?fa(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))v=!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===p?g:l,t),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?
"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=m);if((v||O.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(v||O.length);for(r.$$phase=null;n.length;)try{n.shift()()}catch(ca){f(ca)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,
this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||O.length||h.defer(function(){O.length&&r.$digest()});O.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Ya([h],arguments,1),k,p;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(p=d.length;k<p;k++)if(d[k])try{d[k].apply(null,
l)}catch(m){f(m)}else d.splice(k,1),k--,p--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,O=r.$$asyncQueue=[],n=r.$$postDigestQueue=[],v=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=
d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(F(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ob(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=[];y(b)&&s(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};
this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));
var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,u=
!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ra)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=
c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(ma,function(a,b){var c=Q(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",
function(b,a){var c={},d=ba((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=F(f.body.style.webkitTransition),m=F(f.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;
return a.data},function(a){d.totalPendingRequests--;if(!f)throw ja("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=ga.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,
c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,p=(m?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),
e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ra&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,
port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=F(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=da(M)}function Dc(b){function a(c,d){if(H(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",
ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=H(b)&&"$"in b;!0===a?a=fa:G(a)||(a=function(a,b){if(H(a)||H(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!H(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=typeof b,g=
typeof a;if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if("array"===f)return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);
D(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||H(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=
(g.split(od)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,m=0;m<p;m++)0===(p-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);for(m=p;m<k.length;m++)0===(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}
function Hb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Hb(e,a,d)}}function Ib(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),
a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Hb(a,b)}}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=Kf.test(c)?ba(c):a(c));V(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));s(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){D(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){V(b)&&(b=b.toString());if(!x(b)&&!F(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):ba(a);if(F(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c,d;a>b.length?a=b.length:a<-b.length&&(a=-b.length);if(0<a)c=0,d=a;else{if(!a)return[];c=b.length+a;d=b.length}return b.slice(c,d)}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===
a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(F(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=
d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Jb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=
!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,null,a)});s(f.$error,function(b,c){f.$setValidity(c,
null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Kb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Lb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(F(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,
c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}
function q(a){return y(a)?pa(a)?a:c(a):t}td(e,f,g,h);ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!pa(a))throw Mb("datefmt",a);if(p(a)){if((r=a)&&"UTC"===u){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,d,u)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=
function(a){return!p(a)||D(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||D(n)||c(a)<=n};g.$observe("max",function(a){n=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=H(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw T("ngModel")("constexpr",c,d);return b(a)}return e}
function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+tc(b,"-"):"";a(kb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[kb]=e.hasClass(kb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,
b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}
function e(a){if(!x(a)){if(F(a))return a.split(" ");if(H(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,m)){var r=e(m),u=d(k,r),k=d(r,k),u=l(u,1),k=
l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}m=qa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}var Of=/^\/(.+)\/([a-z]*)$/,Q=function(b){return F(b)?b.toLowerCase():b},rc=Object.prototype.hasOwnProperty,ub=function(b){return F(b)?b.toUpperCase():b},Ra,B,ra,Za=[].slice,rf=[].splice,
Pf=[].push,Da=Object.prototype.toString,Ka=T("ng"),ga=M.angular||(M.angular={}),bb,nb=0;Ra=Y.documentMode;C.$inject=[];oa.$inject=[];var x=Array.isArray,U=function(b){return F(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(y(ab.isActive_))return ab.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},rb=["ng-","data-ng-","ng:",
"x-ng-"],Md=/[A-Z]/g,uc=!1,Pb,na=1,pb=3,Qd={full:"1.3.8-build.3713+sha.661f6d9",major:1,minor:3,dot:8,codeName:"snapshot"};R.expando="ng339";var zb=R.cache={},hf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Sb=T("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Rb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(M).on("load",a))},toString:function(){var b=[];s(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[Q(b)]=b});var Mc={};s("input select option textarea button form details".split(" "),function(b){Mc[b]=!0});var Nc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};s({data:Ub,removeData:xb},function(b,a){R[a]=b});s({data:Ub,
inheritedData:Db,scope:function(b){return B.data(b,"$scope")||Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Ic,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=cb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===na||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===ua(b)){var c=[];s(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?
null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;wb(b,!0);b.innerHTML=a},empty:Jc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Jc&&(2==b.length&&b!==Ab&&b!==Ic?a:d)===t){if(H(a)){for(e=0;e<g;e++)if(b===Ub)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});s({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Sb("onargs");
if(Ec(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Hc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);s(new R(c),
function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;s(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];
var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Kc,detach:function(a){Kc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;D(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Tb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:g,target:a},c.type&&(e=z(e,c)),c=qa(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||
c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)D(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Gc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Pc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,nf=/,/,of=/^\s*(_?)(\S+?)\1\s*$/,
Oc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=T("$injector");Ob.$$annotate=Vb;var Rf=T("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Rf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,
g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ha();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,
c){if(ga.isObject(c)){var d=z(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:x(c)?c.join(" "):"";s(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,
[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:x(c)?c.join(" "):"";s(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ga.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&
k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:C,cancel:C}}]}],ja=T("$compile");wc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,Vc="application/json",Zb={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,$b=T("$interpolate"),Sf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xf={http:80,https:443,ftp:21},Fb=T("$location"),Tf={$$html5:!1,$$replace:!1,absUrl:Gb("$$absUrl"),url:function(a){if(D(a))return this.$$url;var c=Sf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Gb("$$protocol"),host:Gb("$$host"),port:Gb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(F(a)||V(a))a=a.toString(),this.$$search=qc(a);else if(H(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Fb("isrcharg");break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,dc,cc],function(a){a.prototype=Object.create(Tf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;
if(a!==cc||!this.$$html5)throw Fb("nostate");this.$$state=D(c)?null:c;return this}});var la=T("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,lb=ha();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;lb[c]=a});lb["this"]=function(a){return a};lb["this"].sharedGetter=!0;var mb=z(ha(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?
d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Xf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=mb[c],f=mb[d];mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Xf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var hb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};hb.ZERO=z(function(){return 0},{sharedGetter:!0,constant:!0});hb.prototype={constructor:hb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in lb?a=lb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,
c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=mb[a];return z(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){var f=mb[c];return z(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return z(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",
";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return z(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,
e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),z(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=
this.assignment();return z(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());
return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(hb.ZERO,
a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return z(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){(f=a(d,f))||a.assign(d,f={});return c.assign(f,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return z(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],c):t},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,
g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||C;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(l,e);if(k){if(k.constructor===k)throw la("isecfn",e);if(k===Uf||k===Vf||k===Wf)throw la("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);return ta(l,e)}},arrayDeclaration:function(){var a=
[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return z(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))
}this.consume("}");return z(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ha(),Af=ha(),Cf=Object.prototype.valueOf,Ca=T("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=T("$compile"),Z=Y.createElement("a"),id=Ba(M.location.href);Dc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),
MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Lf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=da(Q),If=da(ub);md.$inject=["$parse"];var Td=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),vb={};s(Eb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});
s(Nc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?
(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Jb={$addControl:C,$$renameControl:function(a,c){a.$name=c},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Sa).addClass(kb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();
h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(gb(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(gb(a,m,t,m),m=c,gb(a,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&gb(a,m,t,m);z(h,Jb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Yf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Zf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,$f=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ag=/(\s+|^)default(\s+|$)/,Mb=new T("ngModel"),Dd={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e)},date:jb("date",zd,Lb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",
Ad,Lb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Cd,Lb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",jc,function(a,c){if(pa(a))return a;if(F(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Bd,Lb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,
c,d,e,f,g){td(a,c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:$f.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Mb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||D(h)||a>=h};d.$observe("min",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
D(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},radio:function(a,c,d,e){D(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:C,
button:C,submit:C,reset:C,file:C},xc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[Q(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],kb="ng-valid",vd="ng-invalid",Sa="ng-pristine",Kb="ng-dirty",xd="ng-pending",bg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=
t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,r=q,O=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};
r=function(a,c){G(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Mb("nonassign",d.ngModel,va(e));};this.$render=C;this.$isEmpty=function(a){return D(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Jb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Kb);g.addClass(e,Sa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=
!1;g.removeClass(e,Sa);g.addClass(e,Kb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(O);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!V(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;
n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:t,a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:t,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;s(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;s(n.$asyncValidators,function(f,g){var l=f(c,d);if(!l||!G(l.then))throw Mb("$asyncValidators",l);h(g,t);a.push(l.then(function(){h(g,
!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},C):l(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function l(a){m===w&&e(a)}w++;var m=w;(function(a){var c=n.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return s(n.$validators,function(a,c){h(c,null)}),s(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(O);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=
a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=D(c)?t:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),D(c)){d=!1;break}V(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=u(a));var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,n.$$lastCommittedViewValue,function(a){g||(n.$modelValue=
a?c:t,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,n.$modelValue);s(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(O);d?O=h(function(){n.$commitViewValue()},d):
l.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(t,c,f,C))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:bg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(kb);
return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Jb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],xe=da({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&
!a.test)throw T("ngPattern")("noregexp",g,a,va(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||D(f)||f.test(a)}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=ba(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",
function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},cg=/^(true|false|\d+)$/,
ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(ag,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=
a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],be=ic("",!0),de=ic("Odd",0),ce=ic("Even",1),ee=Ja({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Cc={},dg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Cc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ga.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var t=0,n,v,w,L=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},q=++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();s.template=a;a=r(c,function(a){L();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){q===t&&(L(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(L(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Fc(f.template,Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
le=Ja({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},u={},m=c.startSymbol(),r=c.endSymbol(),t=m+k+"-"+p+r,n=ga.noop,v;s(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=
isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(u[c],l),v=c)})}}}],ne=["$parse","$animate",function(a,c){var d=T("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",h);var m=k[1],p=k[2],q=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var n,v,w,D,z={$id:Na};u?n=a(u):(w=function(a,c){return Na(c)},D=function(a){return a});return function(a,f,g,k,m){n&&(v=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return n(a,
z)});var u=ha();a.$watchCollection(p,function(g){var k,p,n=f[0],E,z=ha(),C,S,N,G,J,x,H;q&&(a[q]=g);if(Ta(g))J=g,p=v||w;else{p=v||D;J=[];for(H in g)g.hasOwnProperty(H)&&"$"!=H.charAt(0)&&J.push(H);J.sort()}C=J.length;H=Array(C);for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],G=p(S,N,k),u[G])x=u[G],delete u[G],z[G]=x,H[k]=x;else{if(z[G])throw s(H,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,G,N);H[k]={id:G,scope:t,clone:t};z[G]=!0}for(E in u){x=u[E];G=tb(x.clone);c.leave(G);if(G[0].parentNode)for(k=0,
p=G.length;k<p;k++)G[k].$$NG_REMOVED=!0;x.scope.$destroy()}for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],x=H[k],x.scope){E=n;do E=E.nextSibling;while(E&&E.$$NG_REMOVED);x.clone[0]!=E&&c.move(tb(x.clone),null,B(n));n=x.clone[x.clone.length-1];e(x.scope,k,r,N,y,S,C)}else m(function(a,d){x.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(n));n=f;x.clone=a;z[x.id]=x;e(x.scope,k,r,N,y,S,C)});u=z})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,
function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ja(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,
f.parent(),f)})})})}}}],re=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw T("ngTransclude")("orphan",
va(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],eg=T("ngOptions"),te=da({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};
return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,p;l.databound=d.ngModel;l.init=function(a,c,d){m=a;p=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";
p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&n.prop("selected",!0)):D(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=
new db(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[A]=d;H&&(T[H]=c);return a(e,T)}function k(a){var c;if(u)if(M&&x(a)){c=new db([]);for(var d=0;d<a.length;d++)c.put(h(M,null,a[d]),!0)}else c=new db(a);else M&&(a=h(M,null,
a));return function(d,e){var f;f=M?M:B?B:F;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(p),v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){v=!1;var a={"":[]},c=[""],d,l,n,r,t;n=g.$viewValue;r=P(e)||[];var B=H?Object.keys(r).sort():r,x,A,D,F,N={};t=k(n);var I=!1,U,V;Q={};for(F=0;D=B.length,F<D;F++){x=F;if(H&&(x=B[F],"$"===x.charAt(0)))continue;A=r[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=t(x,A);I=I||d;A=h(C,x,A);A=y(A)?A:"";V=M?M(e,T):H?B[F]:
F;M&&(Q[V]=x);l.push({id:V,label:A,selected:d})}u||(z||null===n?a[""].unshift({id:"",label:"",selected:!I}):I||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(n={element:G.clone().attr("label",d),label:l.label},r=[n],R.push(r),f.append(n.element)):(r=R[x],n=r[0],n.label!=d&&n.element.attr("label",n.label=d));I=null;F=0;for(D=l.length;F<D;F++)d=l[F],(t=r[F+1])?(I=t.element,t.label!==d.label&&(m(N,t.label,!1),m(N,d.label,!0),I.text(t.label=d.label),
I.prop("label",t.label)),t.id!==d.id&&I.val(t.id=d.id),I[0].selected!==d.selected&&(I.prop("selected",t.selected=d.selected),Ra&&I.prop("selected",t.selected))):(""===d.id&&z?U=z:(U=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),r.push(t={element:U,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),I?I.after(U):n.element.append(U),I=U);for(F++;r.length>F;)d=r.pop(),m(N,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();
for(F=1;F<l.length;++F)m(N,l[F].label,!1);l[0].element.remove()}s(N,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var n;if(!(n=r.match(d)))throw eg("iexp",r,va(f));var C=c(n[2]||n[1]),A=n[4]||n[6],D=/ as /.test(n[0])&&n[1],B=D?c(D):null,H=n[5],J=c(n[3]||""),F=c(n[2]?n[1]:A),P=c(n[7]),M=n[8]?c(n[8]):null,Q={},R=[[{element:f,label:""}]],T={};z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(u)c=[],s(f.val(),function(d){d=
M?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:F,d,a[d]))});else{var d=M?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:F,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,r=h.ngOptions,
z=!1,n,v=!1,w=B(Y.createElement("option")),G=B(Y.createElement("optgroup")),C=w.clone();h=0;for(var A=g.children(),H=A.length;h<H;h++)if(""===A[h].value){n=z=A.eq(h);break}q.init(l,z,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});r?p(e,g,l):u?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),
m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=da({restrict:"E",terminal:!1});M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ga),B(Y).ready(function(){Jd(Y,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.3.5
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngAria
 * @description
 *
 * The `ngAria` module provides support for common
 * [<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](http://www.w3.org/TR/wai-aria/)
 * attributes that convey state or semantic information about the application for users
 * of assistive technologies, such as screen readers.
 *
 * <div doc-module-components="ngAria"></div>
 *
 * ## Usage
 *
 * For ngAria to do its magic, simply include the module as a dependency. The directives supported
 * by ngAria are:
 * `ngModel`, `ngDisabled`, `ngShow`, `ngHide`, `ngClick`, `ngDblClick`, and `ngMessages`.
 *
 * Below is a more detailed breakdown of the attributes handled by ngAria:
 *
 * | Directive                                   | Supported Attributes                                                                   |
 * |---------------------------------------------|----------------------------------------------------------------------------------------|
 * | {@link ng.directive:ngModel ngModel}        | aria-checked, aria-valuemin, aria-valuemax, aria-valuenow, aria-invalid, aria-required |
 * | {@link ng.directive:ngDisabled ngDisabled}  | aria-disabled                                                                          |
 * | {@link ng.directive:ngShow ngShow}          | aria-hidden                                                                            |
 * | {@link ng.directive:ngHide ngHide}          | aria-hidden                                                                            |
 * | {@link ng.directive:ngClick ngClick}        | tabindex                                                                               |
 * | {@link ng.directive:ngDblclick ngDblclick}  | tabindex                                                                               |
 * | {@link module:ngMessages ngMessages}        | aria-live                                                                              |
 *
 * Find out more information about each directive by reading the
 * {@link guide/accessibility ngAria Developer Guide}.
 *
 * ##Example
 * Using ngDisabled with ngAria:
 * ```html
 * <md-checkbox ng-disabled="disabled">
 * ```
 * Becomes:
 * ```html
 * <md-checkbox ng-disabled="disabled" aria-disabled="true">
 * ```
 *
 * ##Disabling Attributes
 * It's possible to disable individual attributes added by ngAria with the
 * {@link ngAria.$ariaProvider#config config} method. For more details, see the
 * {@link guide/accessibility Developer Guide}.
 */
 /* global -ngAriaModule */
var ngAriaModule = angular.module('ngAria', ['ng']).
                        provider('$aria', $AriaProvider);

/**
 * @ngdoc provider
 * @name $ariaProvider
 *
 * @description
 *
 * Used for configuring the ARIA attributes injected and managed by ngAria.
 *
 * ```js
 * angular.module('myApp', ['ngAria'], function config($ariaProvider) {
 *   $ariaProvider.config({
 *     ariaValue: true,
 *     tabindex: false
 *   });
 * });
 *```
 *
 * ## Dependencies
 * Requires the {@link ngAria} module to be installed.
 *
 */
function $AriaProvider() {
  var config = {
    ariaHidden: true,
    ariaChecked: true,
    ariaDisabled: true,
    ariaRequired: true,
    ariaInvalid: true,
    ariaMultiline: true,
    ariaValue: true,
    tabindex: true
  };

  /**
   * @ngdoc method
   * @name $ariaProvider#config
   *
   * @param {object} config object to enable/disable specific ARIA attributes
   *
   *  - **ariaHidden** – `{boolean}` – Enables/disables aria-hidden tags
   *  - **ariaChecked** – `{boolean}` – Enables/disables aria-checked tags
   *  - **ariaDisabled** – `{boolean}` – Enables/disables aria-disabled tags
   *  - **ariaRequired** – `{boolean}` – Enables/disables aria-required tags
   *  - **ariaInvalid** – `{boolean}` – Enables/disables aria-invalid tags
   *  - **ariaMultiline** – `{boolean}` – Enables/disables aria-multiline tags
   *  - **ariaValue** – `{boolean}` – Enables/disables aria-valuemin, aria-valuemax and aria-valuenow tags
   *  - **tabindex** – `{boolean}` – Enables/disables tabindex tags
   *
   * @description
   * Enables/disables various ARIA attributes
   */
  this.config = function(newConfig) {
    config = angular.extend(config, newConfig);
  };

  function camelCase(input) {
    return input.replace(/-./g, function(letter, pos) {
      return letter[1].toUpperCase();
    });
  }


  function watchExpr(attrName, ariaAttr, negate) {
    var ariaCamelName = camelCase(ariaAttr);
    return function(scope, elem, attr) {
      if (config[ariaCamelName] && !attr[ariaCamelName]) {
        scope.$watch(attr[attrName], function(boolVal) {
          if (negate) {
            boolVal = !boolVal;
          }
          elem.attr(ariaAttr, boolVal);
        });
      }
    };
  }

  /**
   * @ngdoc service
   * @name $aria
   *
   * @description
   *
   * The $aria service contains helper methods for applying common
   * [ARIA](http://www.w3.org/TR/wai-aria/) attributes to HTML directives.
   *
   * ngAria injects common accessibility attributes that tell assistive technologies when HTML
   * elements are enabled, selected, hidden, and more. To see how this is performed with ngAria,
   * let's review a code snippet from ngAria itself:
   *
   *```js
   * ngAriaModule.directive('ngDisabled', ['$aria', function($aria) {
   *   return $aria.$$watchExpr('ngDisabled', 'aria-disabled');
   * }])
   *```
   * Shown above, the ngAria module creates a directive with the same signature as the
   * traditional `ng-disabled` directive. But this ngAria version is dedicated to
   * solely managing accessibility attributes. The internal `$aria` service is used to watch the
   * boolean attribute `ngDisabled`. If it has not been explicitly set by the developer,
   * `aria-disabled` is injected as an attribute with its value synchronized to the value in
   * `ngDisabled`.
   *
   * Because ngAria hooks into the `ng-disabled` directive, developers do not have to do
   * anything to enable this feature. The `aria-disabled` attribute is automatically managed
   * simply as a silent side-effect of using `ng-disabled` with the ngAria module.
   *
   * The full list of directives that interface with ngAria:
   * * **ngModel**
   * * **ngShow**
   * * **ngHide**
   * * **ngClick**
   * * **ngDblclick**
   * * **ngMessages**
   * * **ngDisabled**
   *
   * Read the {@link guide/accessibility ngAria Developer Guide} for a thorough explanation of each
   * directive.
   *
   *
   * ## Dependencies
   * Requires the {@link ngAria} module to be installed.
   */
  this.$get = function() {
    return {
      config: function(key) {
        return config[camelCase(key)];
      },
      $$watchExpr: watchExpr
    };
  };
}

var ngAriaTabindex = ['$aria', function($aria) {
  return function(scope, elem, attr) {
    if ($aria.config('tabindex') && !elem.attr('tabindex')) {
      elem.attr('tabindex', 0);
    }
  };
}];

ngAriaModule.directive('ngShow', ['$aria', function($aria) {
  return $aria.$$watchExpr('ngShow', 'aria-hidden', true);
}])
.directive('ngHide', ['$aria', function($aria) {
  return $aria.$$watchExpr('ngHide', 'aria-hidden', false);
}])
.directive('ngModel', ['$aria', function($aria) {

  function shouldAttachAttr(attr, elem) {
    return $aria.config(attr) && !elem.attr(attr);
  }

  function getShape(attr, elem) {
    var type = attr.type,
        role = attr.role;

    return ((type || role) === 'checkbox' || role === 'menuitemcheckbox') ? 'checkbox' :
           ((type || role) === 'radio'    || role === 'menuitemradio') ? 'radio' :
           (type === 'range'              || role === 'progressbar' || role === 'slider') ? 'range' :
           (type || role) === 'textbox'   || elem[0].nodeName === 'TEXTAREA' ? 'multiline' : '';
  }

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, elem, attr, ngModel) {
      var shape = getShape(attr, elem);
      var needsTabIndex = shouldAttachAttr('tabindex', elem);

      function ngAriaWatchModelValue() {
        return ngModel.$modelValue;
      }

      function getRadioReaction() {
        if (needsTabIndex) {
          needsTabIndex = false;
          return function ngAriaRadioReaction(newVal) {
            var boolVal = newVal === attr.value;
            elem.attr('aria-checked', boolVal);
            elem.attr('tabindex', 0 - !boolVal);
          };
        } else {
          return function ngAriaRadioReaction(newVal) {
            elem.attr('aria-checked', newVal === attr.value);
          };
        }
      }

      function ngAriaCheckboxReaction(newVal) {
        elem.attr('aria-checked', !!newVal);
      }

      switch (shape) {
        case 'radio':
        case 'checkbox':
          if (shouldAttachAttr('aria-checked', elem)) {
            scope.$watch(ngAriaWatchModelValue, shape === 'radio' ?
                getRadioReaction() : ngAriaCheckboxReaction);
          }
          break;
        case 'range':
          if ($aria.config('ariaValue')) {
            if (attr.min && !elem.attr('aria-valuemin')) {
              elem.attr('aria-valuemin', attr.min);
            }
            if (attr.max && !elem.attr('aria-valuemax')) {
              elem.attr('aria-valuemax', attr.max);
            }
            if (!elem.attr('aria-valuenow')) {
              scope.$watch(ngAriaWatchModelValue, function ngAriaValueNowReaction(newVal) {
                elem.attr('aria-valuenow', newVal);
              });
            }
          }
          break;
        case 'multiline':
          if (shouldAttachAttr('aria-multiline', elem)) {
            elem.attr('aria-multiline', true);
          }
          break;
      }

      if (needsTabIndex) {
        elem.attr('tabindex', 0);
      }

      if (ngModel.$validators.required && shouldAttachAttr('aria-required', elem)) {
        scope.$watch(function ngAriaRequiredWatch() {
          return ngModel.$error.required;
        }, function ngAriaRequiredReaction(newVal) {
          elem.attr('aria-required', !!newVal);
        });
      }

      if (shouldAttachAttr('aria-invalid', elem)) {
        scope.$watch(function ngAriaInvalidWatch() {
          return ngModel.$invalid;
        }, function ngAriaInvalidReaction(newVal) {
          elem.attr('aria-invalid', !!newVal);
        });
      }
    }
  };
}])
.directive('ngDisabled', ['$aria', function($aria) {
  return $aria.$$watchExpr('ngDisabled', 'aria-disabled');
}])
.directive('ngMessages', function() {
  return {
    restrict: 'A',
    require: '?ngMessages',
    link: function(scope, elem, attr, ngMessages) {
      if (!elem.attr('aria-live')) {
        elem.attr('aria-live', 'assertive');
      }
    }
  };
})
.directive('ngClick', ngAriaTabindex)
.directive('ngDblclick', ngAriaTabindex);


})(window, window.angular);

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
    return extend(dest, src, true);
}

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        extend(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return (doc.defaultView || doc.parentWindow);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = last.deltaX - input.deltaX;
        var deltaY = last.deltaY - input.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        } else if (isMouse && !this.mouse.allow) {
            return;
        }

        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }

        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // pan-x and pan-y can be combined
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.id = uniqueId();

    this.manager = null;
    this.options = merge(options || {}, this.defaults);

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        extend(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(withState) {
            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(true);
        }

        emit(); // simple 'eventName' events

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(true);
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = extend({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        this._super.emit.call(this, input);
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            this.manager.emit(this.options.event + inOut, input);
        }
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 500, // minimal time of the pointer to be pressed
        threshold: 5 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.65,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.velocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.velocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.velocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.direction &&
            input.distance > this.options.threshold &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 2, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED ) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.4';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    options = options || {};

    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        extend(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        var recognizers = this.recognizers;
        recognizer = this.get(recognizer);
        recognizers.splice(inArray(recognizers, recognizer), 1);

        this.touchAction.update();
        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function(value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

extend(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

if (typeof define == TYPE_FUNCTION && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');

/*
ngProgress 1.0.7 - slim, site-wide progressbar for AngularJS 
(C) 2013 - Victor Bjelkholm 
License: MIT 
Source: https://github.com/VictorBjelkholm/ngProgress 
Date Compiled: 2014-09-26 
*/
angular.module("ngProgress.provider",["ngProgress.directive"]).provider("ngProgress",function(){"use strict";this.autoStyle=!0,this.count=0,this.height="2px",this.color="firebrick",this.$get=["$document","$window","$compile","$rootScope","$timeout",function(a,b,c,d,e){var f=this.count,g=this.height,h=this.color,i=d,j=a.find("body")[0],k=c("<ng-progress></ng-progress>")(i);j.appendChild(k[0]),i.count=f,void 0!==g&&k.eq(0).children().css("height",g),void 0!==h&&(k.eq(0).children().css("background-color",h),k.eq(0).children().css("color",h));var l,m=0;return{start:function(){this.show();var a=this;clearInterval(m),m=setInterval(function(){if(isNaN(f))clearInterval(m),f=0,a.hide();else{var b=100-f;f+=.15*Math.pow(1-Math.sqrt(b),2),a.updateCount(f)}},200)},updateCount:function(a){i.count=a,i.$$phase||i.$apply()},height:function(a){return void 0!==a&&(g=a,i.height=g,i.$$phase||i.$apply()),g},color:function(a){return void 0!==a&&(h=a,i.color=h,i.$$phase||i.$apply()),h},hide:function(){k.children().css("opacity","0");var a=this;a.animate(function(){k.children().css("width","0%"),a.animate(function(){a.show()},500)},500)},show:function(){var a=this;a.animate(function(){k.children().css("opacity","1")},100)},animate:function(a,b){l&&e.cancel(l),l=e(a,b)},status:function(){return f},stop:function(){clearInterval(m)},set:function(a){return this.show(),this.updateCount(a),f=a,clearInterval(m),f},css:function(a){return k.children().css(a)},reset:function(){return clearInterval(m),f=0,this.updateCount(f),0},complete:function(){f=100,this.updateCount(f);var a=this;return clearInterval(m),e(function(){a.hide(),e(function(){f=0,a.updateCount(f)},500)},1e3),f},setParent:function(a){if(null===a||void 0===a)throw new Error("Provide a valid parent of type HTMLElement");null!==j&&void 0!==j&&j.removeChild(k[0]),j=a,j.appendChild(k[0])},getDomElement:function(){return k}}}],this.setColor=function(a){return void 0!==a&&(this.color=a),this.color},this.setHeight=function(a){return void 0!==a&&(this.height=a),this.height}}),angular.module("ngProgress.directive",[]).directive("ngProgress",["$window","$rootScope",function(a,b){var c={replace:!0,restrict:"E",link:function(a,c){b.$watch("count",function(b){(void 0!==b||null!==b)&&(a.counter=b,c.eq(0).children().css("width",b+"%"))}),b.$watch("color",function(b){(void 0!==b||null!==b)&&(a.color=b,c.eq(0).children().css("background-color",b),c.eq(0).children().css("color",b))}),b.$watch("height",function(b){(void 0!==b||null!==b)&&(a.height=b,c.eq(0).children().css("height",b))})},template:'<div id="ngProgress-container"><div id="ngProgress"></div></div>'};return c}]),angular.module("ngProgress",["ngProgress.directive","ngProgress.provider"]);
/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function mdMediaFactory(e,t,n,r){function o(e){e=a(e);var t;return angular.isDefined(t=d.get(e))?t:i(e)}function a(e){return r.MEDIA[e]||("("!=e.charAt(0)?"("+e+")":e)}function i(t){return d.put(t,!!e.matchMedia(t).matches)}function c(){var t=d.keys();if(t.length){for(var r=0,o=t.length;o>r;r++)d.put(t[r],!!e.matchMedia(t[r]).matches);n(angular.noop)}}var d=t.cacheFactory("$mdMedia",{capacity:15});return angular.element(e).on("resize",c),o}angular.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.theming","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.content","material.components.dialog","material.components.divider","material.components.icon","material.components.list","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.textField","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.whiteframe"]),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){if("undefined"==typeof Hammer)throw new Error("ngMaterial requires HammerJS to be preloaded.")}function t(e,t){function n(e){return e.debounce=function(t){var n,r,o,a;return function(){n=arguments,a=this,o=t,r||(r=!0,e(function(){o.apply(a,n),r=!1}))}},e}e.decorator("$$rAF",["$delegate","$rootScope",n]),t.theme("default").primaryColor("blue").accentColor("green").warnColor("red").backgroundColor("grey")}angular.module("material.core",["material.core.theming"]).run(e).config(t),t.$inject=["$provide","$mdThemingProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t){function n(e){return r?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var r=/webkit/i.test(t.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40},CSS:{TRANSITIONEND:"transitionend"+(r?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(r?" webkitAnimationEnd":""),TRANSFORM:n("transform"),TRANSITION:n("transition"),TRANSITION_DURATION:n("transitionDuration"),ANIMATION_PLAY_STATE:n("animationPlayState"),ANIMATION_DURATION:n("animationDuration"),ANIMATION_NAME:n("animationName"),ANIMATION_TIMING:n("animationTimingFunction"),ANIMATION_DIRECTION:n("animationDirection")},MEDIA:{sm:"(max-width: 600px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 960px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1200px)","gt-lg":"(min-width: 1200px)"}}}angular.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
angular.module("material.core").factory("$mdMedia",mdMediaFactory),mdMediaFactory.$inject=["$window","$mdUtil","$timeout","$mdConstant"],/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";var e=["0","0","0"];angular.module("material.core").factory("$mdUtil",["$cacheFactory","$document",function(t,n){function r(e,t){function n(){return[].concat(E)}function r(){return E.length}function o(e){return E.length&&e>-1&&e<E.length}function a(e){return e?o(u(e)+1):!1}function i(e){return e?o(u(e)-1):!1}function c(e){return o(e)?E[e]:null}function d(e,t){return E.filter(function(n){return n[e]===t})}function l(e,t){return e?(angular.isNumber(t)||(t=E.length),E.splice(t,0,e),u(e)):-1}function m(e){s(e)&&E.splice(u(e),1)}function u(e){return E.indexOf(e)}function s(e){return e&&u(e)>-1}function p(e,n){if(n=n||b,s(e)){var r=u(e)+1,a=o(r)?E[r]:t?h():null;return n(a)?a:p(a,n)}return null}function f(e,n){if(n=n||b,s(e)){var r=u(e)-1,a=o(r)?E[r]:t?g():null;return n(a)?a:f(a,n)}return null}function h(){return E.length?E[0]:null}function g(){return E.length?E[E.length-1]:null}var b=function(){return!0};t=!!t;var E=e||[];return{items:n,count:r,inRange:o,contains:s,indexOf:u,itemAt:c,findBy:d,add:l,remove:m,first:h,last:g,next:p,previous:f,hasPrevious:i,hasNext:a}}function o(e,t){function r(){r.called||(r.called=!0,t.off(f,o),n.off(h,a).off(g,c),u=p=!1)}function o(e){var n=e.type.charAt(0),r=i.now();s&&s.pointerType!==n&&r-s.endTime<400||p||(p=!0,u={pointerType:n,startX:l(e),startTime:r},t.one("$md.dragstart",function(e){e.defaultPrevented&&(u=null)}),t.triggerHandler("$md.dragstart",u))}function a(e){u&&m(e,u)&&(("t"===u.pointerType||"p"===u.pointerType)&&e.preventDefault(),d(e),t.triggerHandler("$md.drag",u))}function c(e){p=!1,u&&m(e,u)&&(u.endTime=i.now(),d(e),t.triggerHandler("$md.dragend",u),s=u,u=null)}function d(e){var t=l(e);u.distance=u.startX-t,u.direction=u.distance>0?"left":u.distance<0?"right":"",u.duration=u.startTime-i.now(),u.velocity=Math.abs(u.duration)/u.time}function l(e){e=e.originalEvent||e;var t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e;return t.pageX}function m(e,t){return t&&e&&(e.type||"").charAt(0)===t.pointerType}var u,s,p,f="mousedown touchstart pointerdown",h="mousemove touchmove pointermove",g="mouseup mouseleave touchend touchcancel pointerup pointercancel";return t.on(f,o),n.on(h,a).on(g,c),e.$on("$destroy",r),r}function a(e,n){var r=t(e,n),o={};return r._put=r.put,r.put=function(e,t){return o[e]=!0,r._put(e,t)},r._remove=r.remove,r.remove=function(e){return delete o[e],r._remove(e)},r.keys=function(){return Object.keys(o)},r}var i;return i={now:window.performance?angular.bind(window.performance,window.performance.now):Date.now,attachDragBehavior:o,elementRect:function(e,t){var n=e[0];t=t||n.offsetParent||document.body,t=t[0]||t;var r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{left:r.left-o.left+t.scrollLeft,top:r.top-o.top+t.scrollTop,width:r.width,height:r.height}},iterator:r,fakeNgModel:function(){return{$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:angular.noop}},cacheFactory:a,debounce:function(e,t,n){var r;return function(){var o=this,a=arguments;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,a)},t),n&&!r&&e.apply(o,a)}},throttle:function(e,t){var n;return function(){var r=this,o=arguments,a=i.now();(!n||n-a>t)&&(e.apply(r,o),n=a)}},nextUid:function(){for(var t,n=e.length;n;){if(n--,t=e[n].charCodeAt(0),57==t)return e[n]="A",e.join("");if(90!=t)return e[n]=String.fromCharCode(t+1),e.join("");e[n]="0"}return e.unshift("0"),e.join("")},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}}}}]),angular.element.prototype.focus=angular.element.prototype.focus||function(){return this.length&&this[0].focus(),this},angular.element.prototype.blur=angular.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n){function r(e,n,r){var o=e[0];o.hasAttribute(n)||i(o,n)||(r=angular.isString(r)&&r.trim()||"",r.length?e.attr(n,r):t.warn('ARIA: Attribute "',n,'", required for accessibility, is missing on node:',o))}function o(t,n,o){e(function(){r(t,n,o())})}function a(e,t){o(e,t,function(){return e.text().trim()})}function i(e,t){function r(e){var t=e.currentStyle?e.currentStyle:n.getComputedStyle(e);return"none"===t.display}var o=e.hasChildNodes(),a=!1;if(o)for(var i=e.childNodes,c=0;c<i.length;c++){var d=i[c];1===d.nodeType&&d.hasAttribute(t)&&(r(d)||(a=!0))}return a}return{expect:r,expectAsync:o,expectWithText:a}}angular.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o,a){this.compile=function(i){var c=i.templateUrl,d=i.template||"",l=i.controller,m=i.controllerAs,u=i.resolve||{},s=i.locals||{},p=i.transformTemplate||angular.identity,f=i.bindToController;return angular.forEach(u,function(e,t){u[t]=angular.isString(e)?n.get(e):n.invoke(e)}),angular.extend(u,s),u.$template=c?t.get(c,{cache:a}).then(function(e){return e.data}):e.when(d),e.all(u).then(function(e){var t=p(e.$template),n=angular.element("<div>").html(t.trim()).contents(),a=r(n);return{locals:e,element:n,link:function(t){if(e.$scope=t,l){var r=o(l,e);f&&angular.extend(r,e),n.data("$ngControllerController",r),n.children().data("$ngControllerController",r),m&&(t[m]=r)}return a(t)}}})}}angular.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){function e(e){function t(e){return a.optionsFactory=e.options,a.methods=(e.methods||[]).concat(o),i}function n(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return a.presets[t]={methods:n.methods.concat(o),optionsFactory:n.options,argOption:n.argOption},i}function r(t,n,r){function o(e){return e&&e._options&&(e=e._options),l.show(angular.extend({},d,e))}function i(t,n){var o={};return o[e]=m,r.invoke(t||function(){return n},{},o)}var c,d,l=t(),m={hide:l.hide,cancel:l.cancel,show:o};return c=a.methods||[],d=i(a.optionsFactory,{}),angular.forEach(a.presets,function(e,t){function n(e){this._options=angular.extend({},r,e)}var r=i(e.optionsFactory,{}),o=(e.methods||[]).concat(c);angular.extend(r,{$type:t}),angular.forEach(o,function(e){n.prototype[e]=function(t){return this._options[e]=t,this}}),m[t]=function(t){return arguments.length&&e.argOption&&!angular.isObject(t)&&!angular.isArray(t)?(new n)[e.argOption](t):new n(t)}}),m}var o=["onHide","onShow","onRemove"],a={presets:{}},i={setDefaults:t,addPreset:n,$get:r};return i.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$animate","$injector"],i}function t(e,t,n,r,o,a,i,c,d){function l(e){return e&&angular.isString(e)?e.replace(/\{\{/g,m).replace(/}}/g,u):e}var m=i.startSymbol(),u=i.endSymbol(),s="{{"===m&&"}}"===u,p=s?angular.identity:l;return function(){function i(e){f.length&&s.cancel();var t=new u(e);return f.push(t),t.show().then(function(){return t.deferred.promise})}function l(e){var n=f.shift();return n&&n.remove().then(function(){n.deferred.resolve(e)}),n?n.deferred.promise:t.when(e)}function m(e){var n=f.shift();return n&&n.remove().then(function(){n.deferred.reject(e)}),n?n.deferred.promise:t.reject(e)}function u(i){var l,m,u;return i=i||{},i=angular.extend({scope:i.scope||n.$new(i.isolateScope),onShow:function(e,t,n){return a.enter(t,n.parent)},onRemove:function(e,n){return n&&a.leave(n)||t.when()}},i),i.template&&(i.template=p(i.template)),l={options:i,deferred:t.defer(),show:function(){return c.compile(i).then(function(n){function a(){i.hideDelay&&(m=r(s.cancel,i.hideDelay))}angular.extend(n.locals,l.options),angular.isString(i.parent)?i.parent=angular.element(e[0].querySelector(i.parent)):i.parent||(i.parent=o.find("body"),i.parent.length||(i.parent=o)),u=n.link(i.scope),i.themable&&d(u);var c=i.onShow(i.scope,u,i);return t.when(c).then(function(){(i.onComplete||angular.noop)(i.scope,u,i),a()})})},cancelTimeout:function(){m&&(r.cancel(m),m=void 0)},remove:function(){l.cancelTimeout();var e=i.onRemove(i.scope,u,i);return t.when(e).then(function(){i.scope.$destroy()})}}}var s,f=[];return s={show:i,hide:l,cancel:m}}}return e.$get=t,t.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$interpolate","$mdCompiler","$mdTheming"],e}angular.module("material.core").provider("$$interimElement",e)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e){return{controller:angular.noop,link:function(t,n,r){r.hasOwnProperty("mdInkRippleCheckbox")?e.attachCheckboxBehavior(t,n):e.attachButtonBehavior(t,n)}}}function t(e,t){function n(e,t,n){return a(e,t,angular.extend({isFAB:t.hasClass("md-fab"),isMenuItem:t.hasClass("md-menu-item"),center:!1,dimBackground:!0},n))}function r(e,t,n){return a(e,t,angular.extend({center:!0,dimBackground:!1},n))}function o(e,t,n){return a(e,t,angular.extend({center:!1,dimBackground:!0,outline:!0},n))}function a(n,r,o){function a(e){function t(e){var t="#"===e.charAt(0)?e.substr(1):e,n=t.length/3,r=t.substr(0,n),o=t.substr(n,n),a=t.substr(2*n);return 1===n&&(r+=r,o+=o,a+=a),"rgba("+parseInt(r,16)+","+parseInt(o,16)+","+parseInt(a,16)+",0.1)"}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,"0.1)"):0===e.indexOf("rgb")?n(e):0===e.indexOf("#")?t(e):void 0}function i(e,n){f.splice(f.indexOf(e),1),0===f.length&&m&&m.css({backgroundColor:""}),t(function(){e.remove()},n,!1)}function c(e){var t=f.indexOf(e),n=h[t]||{},r=f.length>1?!1:b,a=f.length>1?!1:E;r||n.animating||a?e.addClass("md-ripple-visible"):e&&(e.removeClass("md-ripple-visible"),o.outline&&e.css({width:u+"px",height:u+"px",marginLeft:-1*u+"px",marginTop:-1*u+"px"}),i(e,o.outline?450:650))}function d(n,i){function d(e){var t=angular.element('<div class="md-ripple" data-counter="'+p++ +'">');return f.unshift(t),h.unshift({animating:!0}),b.append(t),e&&t.css(e),t}function l(e,t){var n,r,a,i=b.prop("offsetWidth"),c=b.prop("offsetHeight");return o.isMenuItem?r=Math.sqrt(Math.pow(i,2)+Math.pow(c,2)):o.outline?(a=v.getBoundingClientRect(),e-=a.left,t-=a.top,i=Math.max(e,i-e),c=Math.max(t,c-t),r=2*Math.sqrt(Math.pow(i,2)+Math.pow(c,2))):(n=o.isFAB?1.1:.8,r=Math.max(i,c)*n),r}function s(e,t,n){function r(e){return e.replace("rgba","rgb").replace(/,[^\)\,]+\)/,")")}var a,i={backgroundColor:r(M),borderColor:r(M),width:e+"px",height:e+"px"};return o.outline?(i.width=0,i.height=0):i.marginLeft=i.marginTop=e*-.5+"px",o.center?i.left=i.top="50%":(a=v.getBoundingClientRect(),i.left=Math.round((t-a.left)/b.prop("offsetWidth")*100)+"%",i.top=Math.round((n-a.top)/b.prop("offsetHeight")*100)+"%"),i}function g(){if(m)return m;var e=m=angular.element('<div class="md-ripple-container">');return r.append(e),e}M=a(r.attr("md-ink-ripple"))||a(e.getComputedStyle(o.colorElement[0]).color||"rgb(0, 0, 0)");var b=g(),E=l(n,i),$=s(E,n,i),T=d($),A=f.indexOf(T),k=h[A]||{};return u=E,k.animating=!0,t(function(){o.dimBackground&&b.css({backgroundColor:M}),T.addClass("md-ripple-placed md-ripple-scaled"),o.outline?T.css({borderWidth:.5*E+"px",marginLeft:E*-.5+"px",marginTop:E*-.5+"px"}):T.css({left:"50%",top:"50%"}),c(T),t(function(){k.animating=!1,c(T)},o.outline?450:225,!1)},0,!1),T}function l(e){function n(){var e=v.parentNode,t=e&&e.parentNode,n=t&&t.parentNode;return!(v.hasAttribute("disabled")||e&&e.hasAttribute("disabled")||t&&t.hasAttribute("disabled")||n&&n.hasAttribute("disabled"))}var r,o;e.eventType===Hammer.INPUT_START&&e.isFirst&&n()?(r=d(e.center.x,e.center.y),E=!0):e.eventType===Hammer.INPUT_END&&e.isFinal&&(E=!1,o=f.length-1,r=f[o],t(function(){c(r)},0,!1))}if(r.controller("mdNoInk"))return angular.noop;o=angular.extend({colorElement:r,mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1,outline:!1,isFAB:!1,isMenuItem:!1},o);var m,u,s=r.controller("mdInkRipple")||{},p=0,f=[],h=[],g=r.attr("md-highlight"),b=!1,E=!1,v=r[0],$=new Hammer(v),M=a(r.attr("md-ink-ripple"))||a(e.getComputedStyle(o.colorElement[0]).color||"rgb(0, 0, 0)");return o.mousedown&&$.on("hammer.input",l),s.createRipple=d,g&&n.$watch(g,function(e){b=e,b&&!f.length&&t(function(){d(0,0)},0,!1),angular.forEach(f,c)}),function(){$.destroy(),m&&m.remove()}}return{attachButtonBehavior:n,attachCheckboxBehavior:r,attachTabBehavior:o,attach:a}}function n(){return function(){return{controller:angular.noop}}}angular.module("material.core").factory("$mdInkRipple",t).directive("mdInkRipple",e).directive("mdNoInk",n()).directive("mdNoBar",n()).directive("mdNoStretch",n()),e.$inject=["$mdInkRipple"],t.$inject=["$window","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){function e(){var e=document.createElement("div");e.classList.add("md-color-palette-definition"),document.body.appendChild(e);var t=getComputedStyle(e).backgroundImage;"none"!==t&&t||(t="{}"),t=t.replace(/^.*?\{/,"{").replace(/\}.\).*?$/,"}").replace(/_/g,'"');var n=JSON.parse(decodeURI(t));angular.extend(d,n),document.body.removeChild(e)}function t(e,t){return t=t||{},d[e]=o(e,t),m}function n(e,t){return o(e,angular.extend({},d[e]||{},t))}function o(e,t){var n=T.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function a(e,t){if(t=t||"default",l[e])return l[e];var n="string"==typeof t?l[t]:t,r=new i(e);return n&&angular.forEach(n.colors,function(e,t){r.colors[t]={name:e.name,hues:angular.extend({},e.hues)}}),l[e]=r,r}function i(e){function t(e){if(e=0===arguments.length?!0:!!e,e!==n.isDark){n.isDark=e,n.foregroundPalette=n.isDark?p:s,n.foregroundShadow=n.isDark?f:h;var t=n.isDark?M:$,r=n.isDark?$:M;return angular.forEach(t,function(e,t){var o=n.colors[t],a=r[t];if(o)for(var i in o.hues)o.hues[i]===a[i]&&(o.hues[i]=e[i])}),n}}var n=this;n.name=e,n.colors={},n.dark=t,t(!1),E.forEach(function(e){var t=(n.isDark?M:$)[e];n[e+"Color"]=function(r,o){var a=n.colors[e]={name:r,hues:angular.extend({},t,o)};return Object.keys(a.hues).forEach(function(e){if(!t[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",n.name).replace("%3",r).replace("%4",Object.keys(t).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==T.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",n.name).replace("%3",e).replace("%4",r).replace("%5",T.join(", ")))}),n}})}function u(e){function t(n,r){void 0===r&&(r=n,n=void 0),void 0===n&&(n=e),t.inherit(r,r)}return t.inherit=function(t,n){function r(e){var n=t.data("$mdThemeName");n&&t.removeClass("md-"+n+"-theme"),t.addClass("md-"+e+"-theme"),t.data("$mdThemeName",e)}var o=n.controller("mdTheme"),a=t.attr("md-theme-watch");if((b||angular.isDefined(a))&&"false"!=a){var i=e.$watch(function(){return o&&o.$mdTheme||g},r);t.on("$destroy",i)}else{var c=o&&o.$mdTheme||g;r(c)}},t}d={},l={};var g="default",b=!1;return e(),u.$inject=["$rootScope"],m={definePalette:t,extendPalette:n,theme:a,setDefaultTheme:function(e){g=e},alwaysWatchTheme:function(e){b=e},$get:u,_LIGHT_DEFAULT_HUES:$,_DARK_DEFAULT_HUES:M,_PALETTES:d,_THEMES:l,_parseRules:r,_rgba:c}}function t(e){return{priority:100,link:{pre:function(t,n,r){var o={$setTheme:function(e){o.$mdTheme=e}};n.data("$mdThemeController",o),o.$setTheme(e(r.mdTheme)(t)),r.$observe("mdTheme",o.$setTheme)}}}}function n(e){return e}function r(e,t,n){a(e,t),n=n.replace(/THEME_NAME/g,e.name);var r=[],o=e.colors[t],i=new RegExp(".md-"+e.name+"-theme","g"),l=new RegExp("('|\")?{{\\s*("+t+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),m=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g,u=d[o.name];return n=n.replace(m,function(t,n,r,o){return"foreground"===n?"shadow"==r?e.foregroundShadow:e.foregroundPalette[r]||e.foregroundPalette["1"]:(0===r.indexOf("hue")&&(r=e.colors[n].hues[r]),c((d[e.colors[n].name][r]||"").value,o))}),angular.forEach(o.hues,function(t,o){var a=n.replace(l,function(e,n,r,o,a){return c(u[t]["color"===o?"value":"contrast"],a)});"default"!==o&&(a=a.replace(i,".md-"+e.name+"-theme.md-"+o)),r.push(a)}),r.join("")}function o(e){function t(e){var t=e.contrastDefaultColor,n=e.contrastLightColors||[],r=e.contrastDarkColors||[];"string"==typeof n&&(n=n.split(" ")),"string"==typeof r&&(r=r.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastDarkColors,angular.forEach(e,function(o,a){function c(){return"light"===t?r.indexOf(a)>-1?g:b:n.indexOf(a)>-1?b:g}var d=i(o);if(!d)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",o).replace("%2",e.name).replace("%3",a));e[a]={value:d,contrast:c()}})}var n=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";angular.forEach(d,t);var o=n.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),a={};E.forEach(function(e){a[e]=""});var c=new RegExp("md-("+E.join("|")+")","g");o.forEach(function(e){for(var t,n=(e.match(c),0);t=E[n];n++)if(e.indexOf(".md-"+t)>-1)return a[t]+=e;for(n=0;t=E[n];n++)if(e.indexOf(t)>-1)return a[t]+=e;return a[v]+=e});var m="";if(angular.forEach(l,function(e){E.forEach(function(t){m+=r(e,t,a[t]+"")})}),!u){var s=document.createElement("style");s.innerHTML=m;var p=document.getElementsByTagName("head")[0];p.insertBefore(s,p.firstElementChild),u=!0}}function a(e,t){if(!d[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(d).join(", ")))}function i(e){if(angular.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e){return parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-f0-9]{3}){1,2}$/g.test(e)){var t=e.length/3,n=e.substr(0,t),r=e.substr(t,t),o=e.substr(2*t);return 1===t&&(n+=n,r+=r,o+=o),[parseInt(n,16),parseInt(r,16),parseInt(o,16)]}}function c(e,t){return 4==e.length&&(t=e.pop()),t&&t.length?"rgba("+e.join(",")+","+t+")":"rgb("+e.join(",")+")"}angular.module("material.core.theming",[]).directive("mdTheme",t).directive("mdThemable",n).provider("$mdTheming",e).run(o);var d,l,m,u,s={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},p={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},f="1px 1px 0px rgba(black, 0.4), -1px -1px 0px rgba(black, 0.4)",h="",g=i("rgba(0,0,0,0.87)"),b=i("rgb(255,255,255)"),E=["primary","accent","warn","background"],v="primary",$={accent:{"default":"400","hue-1":"300","hue-2":"800","hue-3":"A100"}},M={background:{"default":"500","hue-1":"300","hue-2":"600","hue-3":"800"}};E.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};$[e]||($[e]=t),M[e]||(M[e]=t)});var T=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];t.$inject=["$interpolate"],n.$inject=["$mdTheming"],o.$inject=["$injector"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e){return e}angular.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,n,r,o,a,i,c){function d(r,d,l){u=o('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(r),u.on("click touchstart",function(){n(i.cancel)}),a.inherit(u,l.parent),e.enter(u,l.parent,null);var s=new m(d);return l.bottomSheet=s,l.targetEvent&&angular.element(l.targetEvent.target).blur(),a.inherit(s.element,l.parent),e.enter(s.element,l.parent).then(function(){var e=angular.element(d[0].querySelector("button")||d[0].querySelector("a")||d[0].querySelector("[ng-click]"));e.focus(),l.escapeToClose&&(l.rootElementKeyupCallback=function(e){e.keyCode===t.KEY_CODE.ESCAPE&&n(i.cancel)},c.on("keyup",l.rootElementKeyupCallback))})}function l(t,n,r){var o=r.bottomSheet;return e.leave(u),e.leave(o.element).then(function(){o.cleanup(),r.targetEvent&&angular.element(r.targetEvent.target).focus()})}function m(e){function r(n){n.preventDefault(),f=n.target,m=c(n),p=e.css(t.CSS.TRANSITION_DURATION),e.css(t.CSS.TRANSITION_DURATION,"0s")}function o(r){e.css(t.CSS.TRANSITION_DURATION,p);var o=c(r);Math.abs(o-m)<5&&r.target==f?angular.element(r.target).triggerHandler("click"):s>b?n(i.cancel):d(void 0)}function a(e){var t=c(e),n=t-m;s=t-u,u=t,n=l(n),d(n+h)}function c(e){var t=e.touches&&e.touches.length?e.touches[0]:e.changedTouches[0];return t.clientY}function d(n){null===n||void 0===n?e.css(t.CSS.TRANSFORM,""):e.css(t.CSS.TRANSFORM,"translate3d(0, "+n+"px, 0)")}function l(e){if(0>e&&-h+g>e){e=-e;var t=h-g;e=Math.max(-h,-Math.min(h-5,t+g*(e-t)/h)-e/50)}return e}var m,u,s,p,f,h=80,g=20,b=10;return e=e.eq(0),e.on("touchstart",r).on("touchmove",a).on("touchend",o),{element:e,cleanup:function(){e.off("touchstart",r).off("touchmove",a).off("touchend",o)}}}var u;return{themable:!0,targetEvent:null,onShow:d,onRemove:l,escapeToClose:!0}}return t.$inject=["$animate","$mdConstant","$timeout","$$rAF","$compile","$mdTheming","$mdBottomSheet","$rootElement"],e("$mdBottomSheet").setDefaults({options:t})}angular.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",t),t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n){function r(e){return angular.isDefined(e.href)||angular.isDefined(e.ngHref)}function o(e,t){return r(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function a(o,a,i){var c=a[0];t(a),e.attachButtonBehavior(o,a);var d=c.textContent.trim();d||n.expect(a,"aria-label"),r(i)&&o.$watch(i.ngDisabled,function(e){a.attr("tabindex",e?-1:0)})}return{restrict:"E",replace:!0,transclude:!0,template:o,link:a}}angular.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdInkRipple","$mdTheming","$mdAria"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e){return{restrict:"E",link:function(t,n){e(n)}}}angular.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o,a){function i(t,i){return i.type="checkbox",i.tabIndex=0,t.attr("role",i.type),function(i,d,l,m){function u(e){e.which===r.KEY_CODE.SPACE&&(e.preventDefault(),s(e))}function s(e){d[0].hasAttribute("disabled")||i.$apply(function(){f=!f,m.$setViewValue(f,e&&e.type),m.$render()})}function p(){f=m.$viewValue,f?d.addClass(c):d.removeClass(c)}m=m||a.fakeNgModel();var f=!1;o(d),n.expectWithText(t,"aria-label"),e.link.pre(i,{on:angular.noop,0:{}},l,[m]),l.mdNoClick||d.on("click",s),d.on("keypress",u),m.$render=p}}e=e[0];var c="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:i}}angular.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdInkRipple","$mdAria","$mdConstant","$mdTheming","$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,n){e(n),t.$broadcast("$mdContentLoaded",n)}}}angular.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t){return{restrict:"E",link:function(n,r){t(r),e(function(){var e=r[0].querySelector("md-content");e&&e.scrollHeight>e.clientHeight&&r.addClass("md-content-overflow")})}}}function t(e){function t(e){return{template:['<md-dialog aria-label="{{ dialog.ariaLabel }}">',"<md-content>","<h2>{{ dialog.title }}</h2>","<p>{{ dialog.content }}</p>","</md-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0}}function n(e,t,n,r,o,a,i,c,d,l,m,u){function s(n,o,a){function i(){var e=o[0].querySelector(".dialog-close");if(!e){var t=o[0].querySelectorAll(".md-actions button");e=t[t.length-1]}return angular.element(e)}a.parent=angular.element(a.parent),a.popInTarget=angular.element((a.targetEvent||{}).target);var l=i();return f(o.find("md-dialog")),a.hasBackdrop&&(a.backdrop=angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'),d.inherit(a.backdrop,a.parent),r.enter(a.backdrop,a.parent)),h(o,a.parent,a.popInTarget.length&&a.popInTarget).then(function(){a.escapeToClose&&(a.rootElementKeyupCallback=function(t){t.keyCode===c.KEY_CODE.ESCAPE&&e(u.cancel)},t.on("keyup",a.rootElementKeyupCallback)),a.clickOutsideToClose&&(a.dialogClickOutsideCallback=function(t){t.target===o[0]&&e(u.cancel)},o.on("click",a.dialogClickOutsideCallback)),l.focus()})}function p(e,n,o){return o.backdrop&&r.leave(o.backdrop),o.escapeToClose&&t.off("keyup",o.rootElementKeyupCallback),o.clickOutsideToClose&&n.off("click",o.dialogClickOutsideCallback),g(n,o.parent,o.popInTarget.length&&o.popInTarget).then(function(){o.scope.$destroy(),n.remove(),o.popInTarget&&o.popInTarget.focus()})}function f(e){e.attr({role:"dialog"});var t=e.find("md-content");0===t.length&&(t=e),o.expectAsync(e,"aria-label",function(){var e=t.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function h(e,t,n){var r=e.find("md-dialog");return t.append(e),b(r,n),l(function(){r.addClass("transition-in").css(c.CSS.TRANSFORM,"")}),E(r)}function g(e,t,n){var r=e.find("md-dialog");return r.addClass("transition-out").removeClass("transition-in"),b(r,n),E(r)}function b(e,t){if(t){var n=t[0].getBoundingClientRect(),r=e[0].getBoundingClientRect(),o=Math.min(.5,n.width/r.width),a=Math.min(.5,n.height/r.height);e.css(c.CSS.TRANSFORM,"translate3d("+(-r.left+n.left+n.width/2-r.width/2)+"px,"+(-r.top+n.top+n.height/2-r.height/2)+"px,0) scale("+o+","+a+")")}}function E(e){function t(r){r.target===e[0]&&(e.off(c.CSS.TRANSITIONEND,t),n.resolve())}var n=m.defer();return e.on(c.CSS.TRANSITIONEND,t),n.promise}return{hasBackdrop:!0,isolateScope:!0,onShow:s,onRemove:p,clickOutsideToClose:!0,escapeToClose:!0,targetEvent:null,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}return t.$inject=["$mdDialog"],n.$inject=["$timeout","$rootElement","$compile","$animate","$mdAria","$document","$mdUtil","$mdConstant","$mdTheming","$$rAF","$q","$mdDialog"],e("$mdDialog").setDefaults({methods:["hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent"],options:n}).addPreset("alert",{methods:["title","content","ariaLabel","ok"],options:t}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel"],options:t})}angular.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",t),e.$inject=["$$rAF","$mdTheming"],t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){}function t(t){return{restrict:"E",link:t,controller:[e]}}angular.module("material.components.divider",["material.core"]).directive("mdDivider",t),t.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){return{restrict:"E",template:'<object class="md-icon"></object>',compile:function(e,t){var n=angular.element(e[0].children[0]);angular.isDefined(t.icon)&&n.attr("data",t.icon)}}}angular.module("material.components.icon",["material.core"]).directive("mdIcon",e)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){return{restrict:"E",link:function(e,t){t.attr({role:"list"})}}}function t(){return{restrict:"E",link:function(e,t){t.attr({role:"listitem"})}}}angular.module("material.components.list",["material.core"]).directive("mdList",e).directive("mdItem",t)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n){function r(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),o}function o(e,r,o){n(r);var d,l,m,u,s=r[0],p=s.querySelectorAll(".md-fill, .md-mask.md-full"),f=s.querySelectorAll(".md-fill.md-fix"),h=o.mdDiameter||48,g=h/48;s.style[t.CSS.TRANSFORM]="scale("+g.toString()+")",o.$observe("value",function(e){for(l=a(e),m=i[l],u=c[l],r.attr("aria-valuenow",l),d=0;d<p.length;d++)p[d].style[t.CSS.TRANSFORM]=m;for(d=0;d<f.length;d++)f[d].style[t.CSS.TRANSFORM]=u})}function a(e){return e>100?100:0>e?0:Math.ceil(e||0)}for(var i=new Array(101),c=new Array(101),d=0;101>d;d++){var l=d/100,m=Math.floor(180*l);i[d]="rotate("+m.toString()+"deg)",c[d]="rotate("+(2*m).toString()+"deg)"}return{restrict:"E",template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:r}}angular.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,n,r){function o(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(o,a,c){r(a);var d=a[0].querySelector(".md-bar1").style,l=a[0].querySelector(".md-bar2").style,m=angular.element(a[0].querySelector(".md-container"));c.$observe("value",function(e){if("query"!=c.mdMode){var r=i(e);a.attr("aria-valuenow",r),l[n.CSS.TRANSFORM]=t[r]}}),c.$observe("mdBufferValue",function(e){d[n.CSS.TRANSFORM]=t[i(e)]}),e(function(){m.addClass("md-ready")})}function i(e){return e>100?100:0>e?0:Math.ceil(e||0)}return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:o}}angular.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"];var t=function(){function e(e){var t=e/100,n=(e-100)/2;return"translateX("+n.toString()+"%) scale("+t.toString()+", 1)"}for(var t=new Array(101),n=0;101>n;n++)t[n]=e(n);return t}()}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n){function r(r,o,a,i){function c(e){e.keyCode===t.KEY_CODE.LEFT_ARROW||e.keyCode===t.KEY_CODE.UP_ARROW?(e.preventDefault(),d.selectPrevious()):(e.keyCode===t.KEY_CODE.RIGHT_ARROW||e.keyCode===t.KEY_CODE.DOWN_ARROW)&&(e.preventDefault(),d.selectNext())}n(o);var d=i[0],l=i[1]||e.fakeNgModel();d.init(l),o.attr({role:"radiogroup",tabIndex:o.attr("tabindex")||"0"}).on("keydown",c)}function o(e){this._radioButtonRenderFns=[],this.$element=e}function a(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=angular.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return i(this.$element,1)},selectPrevious:function(){return i(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function i(t,n){var r=e.iterator(Array.prototype.slice.call(t[0].querySelectorAll("md-radio-button")),!0);if(r.count()){var o=t[0].querySelector("md-radio-button.md-checked"),a=r[0>n?"previous":"next"](o)||r.first();angular.element(a).triggerHandler("click")}}return o.prototype=a(),{restrict:"E",controller:["$element",o],require:["mdRadioGroup","?ngModel"],link:r}}function t(e,t,n){function r(r,a,i,c){function d(e){a[0].hasAttribute("disabled")||r.$apply(function(){c.setViewValue(i.value,e&&e.type)})}function l(){var e=c.getViewValue()===i.value;e!==u&&(u=e,a.attr("aria-checked",e),e?(a.addClass(o),c.setActiveDescendant(a.attr("id"))):a.removeClass(o))}function m(n,r){function o(){return i.id||"radio_"+t.nextUid()}r.ariaId=o(),n.attr({id:r.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(a),m(a,r),c.add(l),i.$observe("value",l),a.on("click",d).on("$destroy",function(){c.remove(l)})}var o="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:r}}angular.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",t),e.$inject=["$mdUtil","$mdConstant","$mdTheming"],t.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t){return function(n){var r="SideNav '"+n+"' is not availabe!",o=e.get(n);return o||e.notFoundError(n),{isOpen:function(){return o&&o.isOpen()},toggle:function(){return o?o.toggle():t.reject(r)},open:function(){return o?o.open():t.reject(r)},close:function(){return o?o.close():t.reject(r)}}}}function t(e,t,n,r,o,a,i,c,d){function l(l,m,u,s){function p(e){m.toggleClass("md-locked-open",!!e),T.toggleClass("md-locked-open",!!e)}function f(e){var n=m.parent();return n[e?"on":"off"]("keydown",g),T[e?"on":"off"]("click",b),e&&(E=d[0].activeElement),v=c.all([t[e?"enter":"leave"](T,n),t[e?"removeClass":"addClass"](m,"md-closed").then(function(){l.isOpen&&m.focus()})])}function h(t){if(l.isOpen==t)return c.when(!0);var n=c.defer();return l.isOpen=t,e(function(){v.then(function(e){l.isOpen||(E&&E.focus(),E=null),n.resolve(e)})},0,!1),n.promise}function g(e){var t=e.keyCode===o.KEY_CODE.ESCAPE;return t?b(e):c.when(!0)}function b(e){return e.preventDefault(),e.stopPropagation(),s.close()}var E=null,v=c.when(!0),$=n(u.mdIsLockedOpen),M=function(){return $(l.$parent,{$media:r})},T=a('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(l);m.on("$destroy",s.destroy),i.inherit(T,m),l.$watch(M,p),l.$watch("isOpen",f),s.$toggleOpen=h}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),l}}}function n(e,t,n,r,o){var a=this;a.$toggleOpen=function(){return o.when(e.isOpen)},a.isOpen=function(){return!!e.isOpen},a.open=function(){return a.$toggleOpen(!0)},a.close=function(){return a.$toggleOpen(!1)},a.toggle=function(){return a.$toggleOpen(!e.isOpen)},a.destroy=r.register(a,n.mdComponentId)}function r(e){var t=[];return{notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return t},get:function(e){var n,r,o;for(n=0,r=t.length;r>n;n++)if(o=t[n],o.$$mdHandle===e)return o;return null},register:function(e,n){return e.$$mdHandle=n,t.push(e),function(){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}}angular.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",t).controller("$mdSidenavController",n).factory("$mdComponentRegistry",r),e.$inject=["$mdComponentRegistry","$q"],t.$inject=["$timeout","$animate","$parse","$mdMedia","$mdConstant","$compile","$mdTheming","$q","$document"],n.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"],r.$inject=["$log"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e){function n(t,n,r,o){e(n);var a=o[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},i=o[1];i.init(a)}return{scope:{},require:["?ngModel","mdSlider"],controller:t,template:'<div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div>',link:n}}function t(e,t,n,r,o,a,i,c){this.init=function(d){function l(){h(),v(),f()}function m(e){V=parseFloat(e),t.attr("aria-valuemin",e),l()}function u(e){U=parseFloat(e),t.attr("aria-valuemax",e),l()}function s(e){L=parseFloat(e),f()}function p(e){t.attr("aria-disabled",!!e)}function f(){if(angular.isDefined(n.mdDiscrete)){var e=Math.floor((U-V)/L);W||(W=angular.element('<canvas style="position:absolute;">'),K=W[0].getContext("2d"),K.fillStyle="black",j.append(W));var t=g();W[0].width=t.width,W[0].height=t.height;for(var r,o=0;e>=o;o++)r=Math.floor(t.width*(o/e)),K.fillRect(r-1,0,2,t.height)}}function h(){Y=I[0].getBoundingClientRect()}function g(){return F(),Y}function b(n){if(!t[0].hasAttribute("disabled")){var r;n.keyCode===c.KEY_CODE.LEFT_ARROW?r=-L:n.keyCode===c.KEY_CODE.RIGHT_ARROW&&(r=L),r&&((n.metaKey||n.ctrlKey||n.altKey)&&(r*=4),n.preventDefault(),n.stopPropagation(),e.$evalAsync(function(){E(d.$viewValue+r)}))}}function E(e){d.$setViewValue($(M(e)))}function v(){isNaN(d.$viewValue)&&(d.$viewValue=d.$modelValue);var n=(d.$viewValue-V)/(U-V);e.modelValue=d.$viewValue,t.attr("aria-valuenow",d.$viewValue),T(n),O.text(d.$viewValue)}function $(e){return angular.isNumber(e)?Math.max(V,Math.min(U,e)):void 0}function M(e){return angular.isNumber(e)?Math.round(e/L)*L:void 0}function T(e){D.css("width",100*e+"%"),R.css(c.CSS.TRANSFORM,"translate3d("+g().width*e+"px,0,0)"),t.toggleClass("md-min",0===e)}function A(e){z||e.eventType!==Hammer.INPUT_START||t[0].hasAttribute("disabled")?z&&e.eventType===Hammer.INPUT_END&&(z&&G&&N(e),z=!1,t.removeClass("panning active")):(z=!0,t.addClass("active"),t[0].focus(),h(),w(e),e.srcEvent.stopPropagation())}function k(){z&&t.addClass("panning")}function w(e){z&&(G?_(e.center.x):y(e.center.x),e.preventDefault(),e.srcEvent.stopPropagation())}function N(e){if(G&&!t[0].hasAttribute("disabled")){var n=S(x(e.center.x)),o=$(M(n));T(C(o)),r(function(){E(o)}),e.preventDefault(),e.srcEvent.stopPropagation()}}function y(t){e.$evalAsync(function(){E(S(x(t)))})}function _(e){var t=S(x(e)),n=$(M(t));T(x(e)),O.text(n)}function x(e){return Math.max(0,Math.min(1,(e-Y.left)/Y.width))}function S(e){return V+e*(U-V)}function C(e){return(e-V)/(U-V)}var H=angular.element(t[0].querySelector(".md-thumb")),O=angular.element(t[0].querySelector(".md-thumb-text")),R=H.parent(),I=angular.element(t[0].querySelector(".md-track-container")),D=angular.element(t[0].querySelector(".md-track-fill")),j=angular.element(t[0].querySelector(".md-track-ticks")),F=i.throttle(h,5e3);n.min?n.$observe("min",m):m(0),n.max?n.$observe("max",u):u(100),n.step?n.$observe("step",s):s(1);var P=angular.noop;n.ngDisabled&&(P=e.$parent.$watch(n.ngDisabled,p)),a.expect(t,"aria-label"),t.attr("tabIndex",0),t.attr("role","slider"),t.on("keydown",b);var q=new Hammer(t[0],{recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]});q.on("hammer.input",A),q.on("panstart",k),q.on("pan",w),q.on("panend",N),setTimeout(l);var B=r.debounce(l);angular.element(o).on("resize",B),e.$on("$destroy",function(){angular.element(o).off("resize",B),q.destroy(),P()}),d.$render=v,d.$viewChangeListeners.push(v),d.$formatters.push($),d.$formatters.push(M);var V,U,L,W,K,Y={};h();var z=!1,G=angular.isDefined(n.mdDiscrete);this._onInput=A,this._onPanStart=k,this._onPan=w}}angular.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$mdTheming"],t.$inject=["$scope","$element","$attrs","$$rAF","$window","$mdAria","$mdUtil","$mdConstant"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o){function a(e){function n(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return p.items.push(n),u.parent().prepend(n.clone),s(),function(){p.items.forEach(function(t,n){t.element[0]===e[0]&&(p.items.splice(n,1),t.clone.remove())}),s()}}function o(){p.items.forEach(a),p.items=p.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=u.prop("scrollTop"),n=p.items.length-1;n>=0;n--)if(t>p.items[n].top){e=p.items[n];break}d(e)}function a(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==u[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px")}function i(){var e=u.prop("scrollTop"),t=e>(i.prevScrollTop||0);i.prevScrollTop=e,0===e?d(null):t&&p.next?p.next.top-e<=0?d(p.next):p.current&&(p.next.top-e<=p.next.height?m(p.current,p.next.top-p.next.height-e):m(p.current,null)):!t&&p.current&&(e<p.current.top&&d(p.prev),p.current&&p.next&&(e>=p.next.top-p.current.height?m(p.current,p.next.top-e-p.current.height):m(p.current,null)))}function d(e){if(p.current!==e){p.current&&(m(p.current,null),l(p.current,null)),e&&l(e,"active"),p.current=e;var t=p.items.indexOf(e);p.next=p.items[t+1],p.prev=p.items[t-1],l(p.next,"next"),l(p.prev,"prev")}}function l(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function m(e,n){e&&(null===n||void 0===n?e.translateY&&(e.translateY=null,e.clone.css(t.CSS.TRANSFORM,"")):(e.translateY=n,e.clone.css(t.CSS.TRANSFORM,"translate3d("+e.left+"px,"+n+"px,0)")))}var u=e.$element,s=r.debounce(o);c(u),u.on("$scrollstart",s),u.on("$scroll",i);var p;return p={prev:null,current:null,next:null,items:[],add:n,refreshElements:o}}function i(){var t,n=angular.element("<div>");e[0].body.appendChild(n[0]);for(var r=["sticky","-webkit-sticky"],o=0;o<r.length;++o)if(n.css({position:r[o],top:0,"z-index":2}),n.css("position")==r[o]){t=r[o];break}return n.remove(),t}function c(e){function t(){+o.now()-a>i?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),r(t))}var n,a,i=200;e.on("scroll touchmove",function(){n||(n=!0,r(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),a=+o.now()})}var d=i();return function(e,t,n){var r=t.controller("mdContent");if(r)if(d)t.css({position:d,top:0,"z-index":2});else{var o=r.$element.data("$$sticky");o||(o=a(r),r.$element.data("$$sticky",o));var i=o.add(t,n||t.clone());e.$on("$destroy",i)}}}angular.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n){return{restrict:"E",replace:!0,transclude:!0,template:'<h2 class="md-subheader"><span class="md-subheader-content"></span></h2>',compile:function(r,o,a){var i=r[0].outerHTML;return function(r,o){function c(e){return angular.element(e[0].querySelector(".md-subheader-content"))}n(o),a(r,function(e){c(o).append(e)}),a(r,function(a){var d=t(angular.element(i))(r);n(d),c(d).append(a),e(r,o,d)})}}}}angular.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){return function(e,t){return t||(t="swipeleft swiperight"),function(n,r,o){function a(t){t.srcEvent.stopPropagation(),angular.isFunction(r)&&e.$apply(function(){r(t)})}function i(){return d.on(t,a),function(){d.off(t)}}function c(e,t){var n=t.indexOf("pan")>-1,r=t.indexOf("swipe")>-1;return n&&e.push([Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]),r&&e.push([Hammer.Swipe,{direction:Hammer.DIRECTION_HORIZONTAL}]),e}var d=new Hammer(n[0],{recognizers:c([],t)});return o||i(),e.$on("$destroy",function(){d.destroy()}),i}}}function t(e,t){return{restrict:"A",link:r(e,t,"SwipeLeft")}}function n(e,t){return{restrict:"A",link:r(e,t,"SwipeRight")}}function r(e,t,n){return function(r,o,a){var i=n.toLowerCase(),c="md"+n,d=e(a[c])||angular.noop,l=t(r,i),m=function(e){d(r,e)};l(o,function(e){e.type==i&&m()})}}angular.module("material.components.swipe",[]).factory("$mdSwipe",e).directive("mdSwipeLeft",t).directive("mdSwipeRight",n),t.$inject=["$parse","$mdSwipe"],n.$inject=["$parse","$mdSwipe"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o,a,i){function c(e,t){var r=d.compile(e,t);return function(e,t,c,d){function l(n,r){return s(e)?n.preventDefault():(r.width=p.prop("offsetWidth"),t.removeClass("transition"),void 0)}function m(e,t){var n=t.distance/t.width,r=d.$viewValue?1-n:-n;r=Math.max(0,Math.min(1,r)),p.css(o.CSS.TRANSFORM,"translate3d("+100*r+"%,0,0)"),t.translate=r}function u(n,r){if(s(e))return!1;t.addClass("transition"),p.css(o.CSS.TRANSFORM,"");var a=Math.abs(r.distance||0)<2||(d.$viewValue?r.translate<.5:r.translate>.5);a&&e.$apply(function(){d.$setViewValue(!d.$viewValue),d.$render()})}d=d||n.fakeNgModel();var s=a(c.ngDisabled),p=angular.element(t[0].querySelector(".md-thumb-container")),f=angular.element(t[0].querySelector(".md-container"));i(function(){t.addClass("transition")}),c.mdNoClick=!0,r(e,t,c,d),n.attachDragBehavior(e,f),f.on("$md.dragstart",l).on("$md.drag",m).on("$md.dragend",u)}}var d=e[0];return{restrict:"E",transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:c}}angular.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdTheming","$mdUtil","$document","$mdConstant","$parse","$$rAF"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";angular.module("material.components.tabs",["material.core"])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n){return{restrict:"E",replace:!0,scope:{fid:"@?mdFid",label:"@?",value:"=ngModel"},compile:function(r,o){return angular.isUndefined(o.mdFid)&&(o.mdFid=t.nextUid()),{pre:function(e,t,r){var o=n(r.ngDisabled);e.isDisabled=function(){return o(e.$parent)},e.inputType=r.type||"text"},post:e}},template:'<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'}}function t(){return{restrict:"CE",controller:["$element",function(e){this.setFocused=function(t){e.toggleClass("md-input-focused",!!t)},this.setHasValue=function(t){e.toggleClass("md-input-has-value",t)}}]}}function n(){return{restrict:"E",replace:!0,template:"<input >",require:["^?mdInputGroup","?ngModel"],link:function(e,t,n,r){function o(e){return e=angular.isUndefined(e)?t.val():e,angular.isDefined(e)&&null!==e&&""!==e.toString().trim()}if(r[0]){var a=r[0],i=r[1];e.$watch(e.isDisabled,function(e){t.attr("aria-disabled",!!e),t.attr("tabindex",!!e)}),t.attr("type",n.type||t.parent().attr("type")||"text"),i&&i.$formatters.push(function(e){return a.setHasValue(o(e)),e}),t.on("input",function(){a.setHasValue(o())}).on("focus",function(){a.setFocused(!0)}).on("blur",function(){a.setFocused(!1),a.setHasValue(o())}),e.$on("$destroy",function(){a.setFocused(!1),a.setHasValue(!1)})}}}}angular.module("material.components.textField",["material.core"]).directive("mdInputGroup",t).directive("mdInput",n).directive("mdTextFloat",e),e.$inject=["$mdTheming","$mdUtil","$parse"],n.$inject=["$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,n,r,o){function a(r,a,i){a.addClass(i.position.split(" ").map(function(e){return"md-"+e}).join(" ")),i.parent.addClass(c(i.position));var d=n(r,"swipeleft swiperight");return i.detachSwipe=d(a,function(t){a.addClass("md-"+t.type),e(o.cancel)}),t.enter(a,i.parent)}function i(e,n,r){return r.detachSwipe(),r.parent.removeClass(c(r.position)),t.leave(n)}function c(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}return{onShow:a,onRemove:i,position:"bottom left",themable:!0,hideDelay:3e3}}return t.$inject=["$timeout","$animate","$mdSwipe","$mdTheming","$mdToast"],e("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction"],options:["$mdToast",function(e){return{template:["<md-toast ng-class=\"{'md-capsule': toast.capsule}\">","<span flex>{{ toast.content }}</span>",'<md-button ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-action\': toast.highlightAction}">',"{{ toast.action }}","</md-button>","</md-toast>"].join(""),controller:function(){this.resolve=function(){e.hide()}},controllerAs:"toast",bindToController:!0}}]})}angular.module("material.components.toast",["material.core","material.components.swipe","material.components.button"]).directive("mdToast",e).provider("$mdToast",t),t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r){return{restrict:"E",controller:angular.noop,link:function(o,a,i){function c(){function r(t,n){a.parent()[0]===n.parent()[0]&&(m&&m.off("scroll",f),n.on("scroll",f),n.attr("scroll-shrink","true"),m=n,e(c))}function c(){l=a.prop("offsetHeight"),m.css("margin-top",-l*p+"px"),d()}function d(e){var n=e?e.target.scrollTop:s;h(),u=Math.min(l/p,Math.max(0,u+n-s)),a.css(t.CSS.TRANSFORM,"translate3d(0,"+-u*p+"px,0)"),m.css(t.CSS.TRANSFORM,"translate3d(0,"+(l-u)*p+"px,0)"),s=n}var l,m,u=0,s=0,p=i.mdShrinkSpeedFactor||.5,f=e.debounce(d),h=n.debounce(c,5e3);o.$on("$mdContentLoaded",r)}r(a),angular.isDefined(i.mdScrollShrink)&&c()}}}angular.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o,a,i){function c(c,m,u){function s(t){s.value=!!t,s.queued||(t?(s.queued=!0,e(function(){c.visible=s.value,s.queued=!1},d)):e(function(){c.visible=!1}))}function p(){m.removeClass("md-hide"),g.attr("aria-describedby",m.attr("id")),E.append(m),h(),n(function(){n(function(){h(),c.visible&&m.addClass("md-show")})})}function f(){m.removeClass("md-show").addClass("md-hide"),g.removeAttr("aria-describedby"),e(function(){c.visible||m.detach()},200,!1)}function h(){var e=o.elementRect(m,E),t=o.elementRect(g,E),n="bottom",r={left:t.left+t.width/2-e.width/2,top:t.top+t.height};r.left=Math.min(r.left,E.prop("scrollWidth")-e.width-l),r.left=Math.max(r.left,l),r.top+e.height>E.prop("scrollHeight")&&(r.top=t.top-e.height,n="top"),m.css({top:r.top+"px",left:r.left+"px"}),m.attr("width-32",Math.ceil(e.width/32)),m.attr("md-direction",n)}a(m);for(var g=m.parent(),b=m.parent()[0];b&&b!==i[0]&&b!==document.body&&(!b.tagName||"md-content"!=b.tagName.toLowerCase());)b=b.parentNode;var E=angular.element(b||document.body);m.detach(),m.attr("role","tooltip"),m.attr("id",u.id||"tooltip_"+o.nextUid()),g.on("focus mouseenter touchstart",function(){s(!0)}),g.on("blur mouseleave touchend touchcancel",function(){r[0].activeElement!==g[0]&&s(!1)}),c.$watch("visible",function(e){e?p():f()});var v=n.debounce(function(){c.visible&&h()});angular.element(t).on("resize",v),c.$on("$destroy",function(){c.visible=!1,m.remove(),angular.element(t).off("resize",v)})}var d=400,l=8;return{restrict:"E",transclude:!0,template:'<div class="md-background"></div><div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible"},link:c}}angular.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";angular.module("material.components.whiteframe",[])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e){function t(t,r,o,a){function i(){var e=c.getSelectedItem(),o=!e||c.count()<2;if(r.css("display",o?"none":"block"),!o&&t.pagination&&t.pagination.tabData){var a=c.getSelectedIndex(),i=t.pagination.tabData.tabs[a]||{left:0,right:0,width:0},d=r.parent().prop("offsetWidth")-i.right,l=["md-transition-left","md-transition-right","md-no-transition"],m=n>a?0:a>n?1:2;r.removeClass(l.join(" ")).addClass(l[m]).css({left:i.left+1+"px",right:d+"px"}),n=a}}if(!a[0]){var c=a[1],d=e.debounce(i);c.inkBarElement=r,t.$on("$mdTabsPaginationChanged",d)}}var n=0;return{restrict:"E",require:["^?mdNoBar","^mdTabs"],link:t}}angular.module("material.components.tabs").directive("mdTabsInkBar",e),e.$inject=["$$rAF"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o,a){function i(i,d,l,m){function u(e,t){if(e){var n=b(e);T.active&&n!==T.page?(t&&t.element.blur(),E(n).then(function(){e.element.focus()})):e.element.focus()}}function s(e){var t=T.tabData,n=Math.max(0,Math.min(t.pages.length-1,T.page+e)),r=t.pages[n][e>0?"firstTabIndex":"lastTabIndex"],o=m.itemAt(r);u(o)}function p(){function e(){M.css("width","9999px"),angular.forEach(a.tabs,function(e){angular.element(e.element).css("margin-left",e.filler+"px")}),E(b(m.getSelectedItem()))}function t(){f(0),M.css("width",""),r.css("width",""),r.css("margin-left",""),T.page=null,T.active=!1}function n(){return l||i.$watch(function(){o(function(){d[0].offsetParent&&(l(),$(),l=null)},0,!1)})}if(d.prop("offsetParent")){var r=d.find("md-tab");t();var a=T.tabData=g(),c=T.active=a.pages.length>1;c&&e(),i.$evalAsync(function(){i.$broadcast("$mdTabsPaginationChanged")})}else var l=n()}function f(t){function n(t){t.target===M[0]&&(M.off(e.CSS.TRANSITIONEND,n),o.resolve())}if(m.pagingOffset===t)return r.when();var o=r.defer();return m.$$pagingOffset=t,M.css(e.CSS.TRANSFORM,"translate3d("+t+"px,0,0)"),M.on(e.CSS.TRANSITIONEND,n),o.promise}function h(){switch(i.stretchTabs){case"never":return!1;case"always":return!0;default:return a("sm")}}function g(e){function t(){var e=1===u.length?r:o,t=Math.min(Math.floor(e/l),v.length),n=Math.floor(e/t);return a.css("width",n+"px"),g(!0)}var n,r=d.parent().prop("offsetWidth"),o=r-c-1,a=angular.element(v),i=0,l=0,m=[],u=[];return a.css("max-width",""),angular.forEach(v,function(e,t){var a=Math.min(o,e.offsetWidth),c={element:e,left:i,width:a,right:i+a,filler:0};c.page=Math.ceil(c.right/(1===u.length&&t===v.length-1?r:o))-1,c.page>=u.length?(c.filler=o*c.page-c.left,c.right+=c.filler,c.left+=c.filler,n={left:c.left,firstTabIndex:t,lastTabIndex:t,tabs:[c]},u.push(n)):(n.lastTabIndex=t,n.tabs.push(c)),i=c.right,l=Math.max(l,a),m.push(c)}),a.css("max-width",o+"px"),!e&&h()?t():{width:i,max:l,tabs:m,pages:u,tabElements:v}}function b(e){var t=m.indexOf(e);if(-1===t)return 0;var n=T.tabData;return n?n.tabs[t].page:0}function E(e){if(e!==T.page){var t=T.tabData.pages.length-1;return 0>e&&(e=0),e>t&&(e=t),T.hasPrev=e>0,T.hasNext=t>e,T.page=e,i.$broadcast("$mdTabsPaginationChanged"),f(-T.tabData.pages[e].left)}}var v=d[0].getElementsByTagName("md-tab"),$=n.debounce(p),M=d.children(),T=i.pagination={page:-1,active:!1,clickNext:function(){s(1)},clickPrevious:function(){s(-1)}};i.$on("$mdTabsChanged",$),angular.element(t).on("resize",$),i.$on("$destroy",function(){angular.element(t).off("resize",$)}),i.$watch(function(){return m.tabToFocus},u)}var c=64;return{restrict:"A",require:"^mdTabs",link:i}}angular.module("material.components.tabs").directive("mdTabsPagination",e),e.$inject=["$mdConstant","$window","$$rAF","$$q","$timeout","$mdMedia"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o,a,i){function c(){return p(e.$parent)}function d(t){s.content.length&&(s.contentContainer.append(s.content),s.contentScope=e.$parent.$new(),t.append(s.contentContainer),r(s.contentContainer)(s.contentScope),a.disconnectScope(s.contentScope))}function l(){s.hammertime.destroy(),o.leave(s.contentContainer).then(function(){s.contentScope&&s.contentScope.$destroy(),s.contentScope=null})}function m(){a.reconnectScope(s.contentScope),s.hammertime.on("swipeleft swiperight",e.onSwipe),t.addClass("active"),t.attr("aria-selected",!0),t.attr("tabIndex",0),o.removeClass(s.contentContainer,"ng-hide"),e.onSelect()}function u(){a.disconnectScope(s.contentScope),s.hammertime.off("swipeleft swiperight",e.onSwipe),t.removeClass("active"),t.attr("aria-selected",!1),t.attr("tabIndex",-1),o.addClass(s.contentContainer,"ng-hide"),e.onDeselect()}var s=this;s.contentContainer=angular.element('<div class="md-tab-content ng-hide">'),s.hammertime=new Hammer(s.contentContainer[0]),s.element=t,s.isDisabled=c,s.onAdd=d,s.onRemove=l,s.onSelect=m,s.onDeselect=u;var p=i(n.ngDisabled)}angular.module("material.components.tabs").controller("$mdTab",e),e.$inject=["$scope","$element","$attrs","$compile","$animate","$mdUtil","$parse"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n,r,o){function a(a,i){var c=a.find("md-tab-label");c.length?c.remove():c=angular.isDefined(i.label)?angular.element("<md-tab-label>").html(i.label):angular.element("<md-tab-label>").append(a.contents().remove());var d=a.contents().remove();return function(a,i,l,m){function u(){var e=c.clone();i.append(e),t(e)(a.$parent),v.content=d.clone()}function s(){a.$apply(function(){$.select(v),$.focus(v)})}function p(e){e.keyCode==r.KEY_CODE.SPACE||e.keyCode==r.KEY_CODE.ENTER?(i.triggerHandler("click"),e.preventDefault()):e.keyCode===r.KEY_CODE.LEFT_ARROW?a.$evalAsync(function(){$.focus($.previous(v))}):e.keyCode===r.KEY_CODE.RIGHT_ARROW&&a.$evalAsync(function(){$.focus($.next(v))})}function f(e){a.$apply(function(){"swipeleft"===e.type?$.select($.next()):$.select($.previous())})}function h(){a.$watch("$parent.$index",function(e){$.move(v,e)})}function g(){function e(e){var t=$.getSelectedItem()===v;e&&!t?$.select(v):!e&&t&&$.deselect(v)}var t=a.$parent.$watch("!!("+l.mdActive+")",e);a.$on("$destroy",t)}function b(){function e(e){i.attr("aria-disabled",e);var t=$.getSelectedItem()===v;t&&e&&$.select($.next()||$.previous())}a.$watch(v.isDisabled,e)}function E(){var e=l.id||"tab_"+n.nextUid();if(i.attr({id:e,role:"tab",tabIndex:-1}),d.length){var t="content_"+e;i.attr("aria-controls")||i.attr("aria-controls",t),v.contentContainer.attr({id:t,role:"tabpanel","aria-labelledby":e})}}var v=m[0],$=m[1];a.$watch(function(){return l.label},function(){o(function(){$.scope.$broadcast("$mdTabsChanged")},0,!1)}),u(),E();var M=e.attachTabBehavior(a,i,{colorElement:$.inkBarElement});$.add(v),a.$on("$destroy",function(){M(),$.remove(v)}),angular.isDefined(l.ngClick)||i.on("click",s),i.on("keydown",p),a.onSwipe=f,angular.isNumber(a.$parent.$index)&&h(),angular.isDefined(l.mdActive)&&g(),b()}}return{restrict:"E",require:["mdTab","^mdTabs"],controller:"$mdTab",scope:{onSelect:"&mdOnSelect",onDeselect:"&mdOnDeselect",label:"@"},compile:a}}angular.module("material.components.tabs").directive("mdTab",e),e.$inject=["$mdInkRipple","$compile","$mdUtil","$mdConstant","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e,t,n){function r(){return h.itemAt(e.selectedIndex)}function o(){return e.selectedIndex}function a(t,n){f.add(t,n),t.onAdd(h.contentArea),-1!==e.selectedIndex&&angular.isNumber(e.selectedIndex)&&e.selectedIndex!==h.indexOf(t)||h.select(t),e.$broadcast("$mdTabsChanged")}function i(t,n){f.contains(t)&&(n||h.getSelectedItem()===t&&(f.count()>1?h.select(h.previous()||h.next()):h.deselect(t)),f.remove(t),t.onRemove(),e.$broadcast("$mdTabsChanged"))}function c(t,n){var r=h.getSelectedItem()===t;f.remove(t),f.add(t,n),r&&h.select(t),e.$broadcast("$mdTabsChanged")}function d(t){!t||t.isSelected||t.isDisabled()||f.contains(t)&&(h.deselect(h.getSelectedItem()),e.selectedIndex=h.indexOf(t),t.isSelected=!0,t.onSelect(),e.$broadcast("$mdTabsChanged"))}function l(e){h.tabToFocus=e}function m(t){t&&t.isSelected&&f.contains(t)&&(e.selectedIndex=-1,t.isSelected=!1,t.onDeselect())}function u(e,t){return f.next(e||h.getSelectedItem(),t||p)}function s(e,t){return f.previous(e||h.getSelectedItem(),t||p)}function p(e){return e&&!e.isDisabled()}var f=n.iterator([],!1),h=this;h.$element=t,h.scope=e,h.contentArea=angular.element(t[0].querySelector(".md-tabs-content")),h.inRange=f.inRange,h.indexOf=f.indexOf,h.itemAt=f.itemAt,h.count=f.count,h.getSelectedItem=r,h.getSelectedIndex=o,h.add=a,h.remove=i,h.move=c,h.select=d,h.focus=l,h.deselect=m,h.next=u,h.previous=s,e.$on("$destroy",function(){h.deselect(h.getSelectedItem());for(var e=f.count()-1;e>=0;e--)h.remove(f[e],!0)})}angular.module("material.components.tabs").controller("$mdTabs",e),e.$inject=["$scope","$element","$mdUtil","$$rAF"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.0-rc1-master-7f0081c
 */
function(){"use strict";function e(e){function t(t,n,r,o,a){function i(){n.attr("role","tablist")}function c(){t.$watch("selectedIndex",function(e,t){if(o.deselect(o.itemAt(t)),o.inRange(e)){for(var n=o.itemAt(e);n&&n.isDisabled();)n=e>t?o.next(n):o.previous(n);o.select(n)}})}t.stretchTabs=r.hasOwnProperty("mdStretchTabs")?r.mdStretchTabs||"always":"auto",e(n),i(),c(),a(t.$parent,function(e){angular.element(n[0].querySelector(".md-header-items")).append(e)})}return{restrict:"E",controller:"$mdTabs",require:"mdTabs",transclude:!0,scope:{selectedIndex:"=?mdSelected"},template:'<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items"><md-tabs-ink-bar></md-tabs-ink-bar></div></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"></button></section><section class="md-tabs-content"></section>',link:t}}angular.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$mdTheming"]}(),angular.module("material.core").constant("$MD_THEME_CSS","md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}';  position: absolute; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }.md-button.md-THEME_NAME-theme {  border-radius: 3px; }  .md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):focus {    background-color: '{{background-500-0.2}}'; }  .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):focus {        background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%; }  .md-button.md-THEME_NAME-theme.md-raised, .md-button.md-THEME_NAME-theme.md-fab {    color: '{{background-contrast}}';    background-color: '{{background-500-0.185}}'; }    .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):focus {      background-color: '{{background-500-0.3}}'; }  .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):focus {        background-color: '{{warn-700}}'; }  .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):focus {        background-color: '{{accent-700}}'; }  .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    color: '{{foreground-3}}';    background-color: transparent;    cursor: not-allowed; }md-card.md-THEME_NAME-theme {  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-3}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {  border-color: '{{foreground-3}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {  border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme:focus:not(:empty) {  border-color: '{{foreground-1}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-accent .md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme.md-accent .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme.md-accent .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme.md-accent .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme.md-accent .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-hue-3}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-switch.md-THEME_NAME-theme:focus .md-label:not(:empty) {  border-color: '{{foreground-1}}';  border-style: dotted; }md-tabs.md-THEME_NAME-theme .md-header {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent .md-header {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]).active {    color: '{{accent-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-warn .md-header {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]).active {    color: '{{warn-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tabs-ink-bar {  color: white;  background: white; }md-tabs.md-THEME_NAME-theme md-tab {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme md-tab.active {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme md-tab[disabled] {    color: '{{foreground-4}}'; }  md-tabs.md-THEME_NAME-theme md-tab:focus {    color: '{{primary-contrast}}';    background-color: '{{primary-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme md-tab .md-ripple-container {    color: white; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  text-shadow: '{{foreground-shadow}}'; }  md-input-group.md-THEME_NAME-theme input:-ms-input-placeholder, md-input-group.md-THEME_NAME-theme textarea:-ms-input-placeholder {    color: '{{foreground-3}}'; }  md-input-group.md-THEME_NAME-theme input::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-webkit-input-placeholder {    color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme label {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused input, md-input-group.md-THEME_NAME-theme.md-input-focused textarea {  border-color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused label {  color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent input, md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent textarea {  border-color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-has-value:not(.md-input-focused) label {  color: '{{foreground-2}}'; }md-input-group.md-THEME_NAME-theme[disabled] input, md-input-group.md-THEME_NAME-theme[disabled] textarea {  border-bottom-color: '{{foreground-4}}';  color: '{{foreground-3}}'; }md-toast.md-THEME_NAME-theme {  background-color: '{{foreground-1}}';  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-action {    color: '{{primary-A200}}'; }    md-toast.md-THEME_NAME-theme .md-action.md-accent {      color: '{{accent-A200}}'; }    md-toast.md-THEME_NAME-theme .md-action.md-warn {      color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");
/*
 AngularJS v1.2.27
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*!
 * angular-translate - v2.5.0 - 2014-12-07
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */
angular.module("pascalprecht.translate",["ng"]).run(["$translate",function(a){var b=a.storageKey(),c=a.storage(),d=function(){var d=a.preferredLanguage();angular.isString(d)?a.use(d):c.put(b,a.use())};c?c.get(b)?a.use(c.get(b))["catch"](d):d():angular.isString(a.preferredLanguage())&&a.use(a.preferredLanguage())}]),angular.module("pascalprecht.translate").provider("$translate",["$STORAGE_KEY",function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q={},r=[],s=a,t=[],u=!1,v="translate-cloak",w=!1,x=".",y="2.5.0",z=function(){var a,b,c=window.navigator,d=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(c.languages))for(a=0;a<c.languages.length;a++)if(b=c.languages[a],b&&b.length)return b;for(a=0;a<d.length;a++)if(b=c[d[a]],b&&b.length)return b;return null};z.displayName="angular-translate/service: getFirstBrowserLanguage";var A=function(){return(z()||"").split("-").join("_")};A.displayName="angular-translate/service: getLocale";var B=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},C=function(){return this.replace(/^\s+|\s+$/g,"")},D=function(a){for(var b=[],d=angular.lowercase(a),e=0,f=r.length;f>e;e++)b.push(angular.lowercase(r[e]));if(B(b,d)>-1)return a;if(c){var g;for(var h in c){var i=!1,j=Object.prototype.hasOwnProperty.call(c,h)&&angular.lowercase(h)===angular.lowercase(a);if("*"===h.slice(-1)&&(i=h.slice(0,-1)===a.slice(0,h.length-1)),(j||i)&&(g=c[h],B(b,angular.lowercase(g))>-1))return g}}var k=a.split("_");return k.length>1&&B(b,angular.lowercase(k[0]))>-1?k[0]:a},E=function(a,b){if(!a&&!b)return q;if(a&&!b){if(angular.isString(a))return q[a]}else angular.isObject(q[a])||(q[a]={}),angular.extend(q[a],F(b));return this};this.translations=E,this.cloakClassName=function(a){return a?(v=a,this):v};var F=function(a,b,c,d){var e,f,g,h;b||(b=[]),c||(c={});for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(h=a[e],angular.isObject(h)?F(h,b.concat(e),c,e):(f=b.length?""+b.join(x)+x+e:e,b.length&&e===d&&(g=""+b.join(x),c[g]="@:"+f),c[f]=h));return c};this.addInterpolation=function(a){return t.push(a),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(a){return k=a,this},this.useSanitizeValueStrategy=function(a){return u=a,this},this.preferredLanguage=function(a){return G(a),this};var G=function(a){return a&&(b=a),b};this.translationNotFoundIndicator=function(a){return this.translationNotFoundIndicatorLeft(a),this.translationNotFoundIndicatorRight(a),this},this.translationNotFoundIndicatorLeft=function(a){return a?(n=a,this):n},this.translationNotFoundIndicatorRight=function(a){return a?(o=a,this):o},this.fallbackLanguage=function(a){return H(a),this};var H=function(a){return a?(angular.isString(a)?(e=!0,d=[a]):angular.isArray(a)&&(e=!1,d=a),angular.isString(b)&&B(d,b)<0&&d.push(b),this):e?d[0]:d};this.use=function(a){if(a){if(!q[a]&&!l)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+a+"'");return f=a,this}return f};var I=function(a){return a?void(s=a):i?i+s:s};this.storageKey=I,this.useUrlLoader=function(a,b){return this.useLoader("$translateUrlLoader",angular.extend({url:a},b))},this.useStaticFilesLoader=function(a){return this.useLoader("$translateStaticFilesLoader",a)},this.useLoader=function(a,b){return l=a,m=b||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(a){return h=a,this},this.storagePrefix=function(a){return a?(i=a,this):a},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(a){return j=a,this},this.usePostCompiling=function(a){return w=!!a,this},this.determinePreferredLanguage=function(a){var c=a&&angular.isFunction(a)?a():A();return b=r.length?D(c):c,this},this.registerAvailableLanguageKeys=function(a,b){return a?(r=a,b&&(c=b),this):r},this.useLoaderCache=function(a){return a===!1?p=void 0:a===!0?p=!0:"undefined"==typeof a?p="$translationCache":a&&(p=a),this},this.$get=["$log","$injector","$rootScope","$q",function(a,c,i,r){var x,z,A,J=c.get(k||"$translateDefaultInterpolation"),K=!1,L={},M={},N=function(a,c,e){if(angular.isArray(a)){var g=function(a){for(var b={},d=[],f=function(a){var d=r.defer(),f=function(c){b[a]=c,d.resolve([a,c])};return N(a,c,e).then(f,f),d.promise},g=0,h=a.length;h>g;g++)d.push(f(a[g]));return r.all(d).then(function(){return b})};return g(a)}var i=r.defer();a&&(a=C.apply(a));var j=function(){var a=b?M[b]:M[f];if(z=0,h&&!a){var c=x.get(s);if(a=M[c],d&&d.length){var e=B(d,c);z=0===e?1:0,B(d,b)<0&&d.push(b)}}return a}();return j?j.then(function(){Z(a,c,e).then(i.resolve,i.reject)},i.reject):Z(a,c,e).then(i.resolve,i.reject),i.promise},O=function(a){return n&&(a=[n,a].join(" ")),o&&(a=[a,o].join(" ")),a},P=function(a){f=a,i.$emit("$translateChangeSuccess",{language:a}),h&&x.put(N.storageKey(),f),J.setLocale(f),angular.forEach(L,function(a,b){L[b].setLocale(f)}),i.$emit("$translateChangeEnd",{language:a})},Q=function(a){if(!a)throw"No language key specified for loading.";var b=r.defer();i.$emit("$translateLoadingStart",{language:a}),K=!0;var d=p;"string"==typeof d&&(d=c.get(d));var e=angular.extend({},m,{key:a,$http:angular.extend({},{cache:d},m.$http)});return c.get(l)(e).then(function(c){var d={};i.$emit("$translateLoadingSuccess",{language:a}),angular.isArray(c)?angular.forEach(c,function(a){angular.extend(d,F(a))}):angular.extend(d,F(c)),K=!1,b.resolve({key:a,table:d}),i.$emit("$translateLoadingEnd",{language:a})},function(a){i.$emit("$translateLoadingError",{language:a}),b.reject(a),i.$emit("$translateLoadingEnd",{language:a})}),b.promise};if(h&&(x=c.get(h),!x.get||!x.put))throw new Error("Couldn't use storage '"+h+"', missing get() or put() method!");angular.isFunction(J.useSanitizeValueStrategy)&&J.useSanitizeValueStrategy(u),t.length&&angular.forEach(t,function(a){var d=c.get(a);d.setLocale(b||f),angular.isFunction(d.useSanitizeValueStrategy)&&d.useSanitizeValueStrategy(u),L[d.getInterpolationIdentifier()]=d});var R=function(a){var b=r.defer();return Object.prototype.hasOwnProperty.call(q,a)?b.resolve(q[a]):M[a]?M[a].then(function(a){E(a.key,a.table),b.resolve(a.table)},b.reject):b.reject(),b.promise},S=function(a,b,c,d){var e=r.defer();return R(a).then(function(g){Object.prototype.hasOwnProperty.call(g,b)?(d.setLocale(a),e.resolve(d.interpolate(g[b],c)),d.setLocale(f)):e.reject()},e.reject),e.promise},T=function(a,b,c,d){var e,g=q[a];return g&&Object.prototype.hasOwnProperty.call(g,b)&&(d.setLocale(a),e=d.interpolate(g[b],c),d.setLocale(f)),e},U=function(a){if(j){var b=c.get(j)(a,f);return void 0!==b?b:a}return a},V=function(a,b,c,e){var f=r.defer();if(a<d.length){var g=d[a];S(g,b,c,e).then(f.resolve,function(){V(a+1,b,c,e).then(f.resolve)})}else f.resolve(U(b));return f.promise},W=function(a,b,c,e){var f;if(a<d.length){var g=d[a];f=T(g,b,c,e),f||(f=W(a+1,b,c,e))}return f},X=function(a,b,c){return V(A>0?A:z,a,b,c)},Y=function(a,b,c){return W(A>0?A:z,a,b,c)},Z=function(a,b,c){var e=r.defer(),g=f?q[f]:q,h=c?L[c]:J;if(g&&Object.prototype.hasOwnProperty.call(g,a)){var i=g[a];"@:"===i.substr(0,2)?N(i.substr(2),b,c).then(e.resolve,e.reject):e.resolve(h.interpolate(i,b))}else{var k;j&&!K&&(k=U(a)),f&&d&&d.length?X(a,b,h).then(function(a){e.resolve(a)},function(a){e.reject(O(a))}):j&&!K&&k?e.resolve(k):e.reject(O(a))}return e.promise},$=function(a,b,c){var e,g=f?q[f]:q,h=c?L[c]:J;if(g&&Object.prototype.hasOwnProperty.call(g,a)){var i=g[a];e="@:"===i.substr(0,2)?$(i.substr(2),b,c):h.interpolate(i,b)}else{var k;j&&!K&&(k=U(a)),f&&d&&d.length?(z=0,e=Y(a,b,h)):e=j&&!K&&k?k:O(a)}return e};if(N.preferredLanguage=function(a){return a&&G(a),b},N.cloakClassName=function(){return v},N.fallbackLanguage=function(a){if(void 0!==a&&null!==a){if(H(a),l&&d&&d.length)for(var b=0,c=d.length;c>b;b++)M[d[b]]||(M[d[b]]=Q(d[b]));N.use(N.use())}return e?d[0]:d},N.useFallbackLanguage=function(a){if(void 0!==a&&null!==a)if(a){var b=B(d,a);b>-1&&(A=b)}else A=0},N.proposedLanguage=function(){return g},N.storage=function(){return x},N.use=function(a){if(!a)return f;var b=r.defer();i.$emit("$translateChangeStart",{language:a});var c=D(a);return c&&(a=c),q[a]||!l||M[a]?(b.resolve(a),P(a)):(g=a,M[a]=Q(a).then(function(c){return E(c.key,c.table),b.resolve(c.key),P(c.key),g===a&&(g=void 0),c},function(a){g===a&&(g=void 0),i.$emit("$translateChangeError",{language:a}),b.reject(a),i.$emit("$translateChangeEnd",{language:a})})),b.promise},N.storageKey=function(){return I()},N.isPostCompilingEnabled=function(){return w},N.refresh=function(a){function b(){e.resolve(),i.$emit("$translateRefreshEnd",{language:a})}function c(){e.reject(),i.$emit("$translateRefreshEnd",{language:a})}if(!l)throw new Error("Couldn't refresh translation table, no loader registered!");var e=r.defer();if(i.$emit("$translateRefreshStart",{language:a}),a)q[a]?Q(a).then(function(c){E(c.key,c.table),a===f&&P(f),b()},c):c();else{var g=[],h={};if(d&&d.length)for(var j=0,k=d.length;k>j;j++)g.push(Q(d[j])),h[d[j]]=!0;f&&!h[f]&&g.push(Q(f)),r.all(g).then(function(a){angular.forEach(a,function(a){q[a.key]&&delete q[a.key],E(a.key,a.table)}),f&&P(f),b()})}return e.promise},N.instant=function(a,c,e){if(null===a||angular.isUndefined(a))return a;if(angular.isArray(a)){for(var g={},h=0,i=a.length;i>h;h++)g[a[h]]=N.instant(a[h],c,e);return g}if(angular.isString(a)&&a.length<1)return a;a&&(a=C.apply(a));var k,l=[];b&&l.push(b),f&&l.push(f),d&&d.length&&(l=l.concat(d));for(var m=0,n=l.length;n>m;m++){var o=l[m];if(q[o]&&"undefined"!=typeof q[o][a]&&(k=$(a,c,e)),"undefined"!=typeof k)break}return k||""===k||(k=J.interpolate(a,c),j&&!K&&(k=U(a))),k},N.versionInfo=function(){return y},N.loaderCache=function(){return p},l&&(angular.equals(q,{})&&N.use(N.use()),d&&d.length))for(var _=function(a){return E(a.key,a.table),i.$emit("$translateChangeEnd",{language:a.key}),a},ab=0,bb=d.length;bb>ab;ab++)M[d[ab]]=Q(d[ab]).then(_);return N}]}]),angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",["$interpolate",function(a){var b,c={},d="default",e=null,f={escaped:function(a){var b={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=angular.element("<div></div>").text(a[c]).html());return b}},g=function(a){var b;return b=angular.isFunction(f[e])?f[e](a):a};return c.setLocale=function(a){b=a},c.getInterpolationIdentifier=function(){return d},c.useSanitizeValueStrategy=function(a){return e=a,this},c.interpolate=function(b,c){return e&&(c=g(c)),a(b)(c||{})},c}]),angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",["$translate","$q","$interpolate","$compile","$parse","$rootScope",function(a,b,c,d,e,f){return{restrict:"AE",scope:!0,compile:function(b,g){var h=g.translateValues?g.translateValues:void 0,i=g.translateInterpolation?g.translateInterpolation:void 0,j=b[0].outerHTML.match(/translate-value-+/i),k="^(.*)("+c.startSymbol()+".*"+c.endSymbol()+")(.*)";return function(b,l,m){b.interpolateParams={},b.preText="",b.postText="";var n={},o=function(a){if(angular.equals(a,"")||!angular.isDefined(a)){var d=l.text().match(k);angular.isArray(d)?(b.preText=d[1],b.postText=d[3],n.translate=c(d[2])(b.$parent)):n.translate=l.text().replace(/^\s+|\s+$/g,"")}else n.translate=a;t()},p=function(a){m.$observe(a,function(b){n[a]=b,t()})};m.$observe("translate",function(a){o(a)});for(var q in m)m.hasOwnProperty(q)&&"translateAttr"===q.substr(0,13)&&p(q);if(m.$observe("translateDefault",function(a){b.defaultText=a}),h&&m.$observe("translateValues",function(a){a&&b.$parent.$watch(function(){angular.extend(b.interpolateParams,e(a)(b.$parent))})}),j){var r=function(a){m.$observe(a,function(c){var d=angular.lowercase(a.substr(14,1))+a.substr(15);b.interpolateParams[d]=c})};for(var s in m)Object.prototype.hasOwnProperty.call(m,s)&&"translateValue"===s.substr(0,14)&&"translateValues"!==s&&r(s)}var t=function(){for(var a in n)n.hasOwnProperty(a)&&n[a]&&u(a,n[a],b,b.interpolateParams)},u=function(b,c,d,e){a(c,e,i).then(function(a){v(a,d,!0,b)},function(a){v(a,d,!1,b)})},v=function(b,c,e,f){if("translate"===f){e||"undefined"==typeof c.defaultText||(b=c.defaultText),l.html(c.preText+b+c.postText);var h=a.isPostCompilingEnabled(),i="undefined"!=typeof g.translateCompile,j=i&&"false"!==g.translateCompile;(h&&!i||j)&&d(l.contents())(c)}else{e||"undefined"==typeof c.defaultText||(b=c.defaultText);var k=m.$attr[f].substr(15);l.attr(k,b)}};b.$watch("interpolateParams",t,!0);var w=f.$on("$translateChangeSuccess",t);l.text().length&&o(""),t(),b.$on("$destroy",w)}}}}]),angular.module("pascalprecht.translate").directive("translateCloak",["$rootScope","$translate",function(a,b){return{compile:function(c){var d=function(){c.addClass(b.cloakClassName())},e=function(){c.removeClass(b.cloakClassName())},f=a.$on("$translateChangeEnd",function(){e(),f(),f=null});return d(),function(a,c,f){f.translateCloak&&f.translateCloak.length&&f.$observe("translateCloak",function(a){b(a).then(e,d)})}}}}]),angular.module("pascalprecht.translate").filter("translate",["$parse","$translate",function(a,b){var c=function(c,d,e){return angular.isObject(d)||(d=a(d)(this)),b.instant(c,d,e)};return c.$stateful=!0,c}]);
/*!
 * angular-translate - v2.5.0 - 2014-12-07
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */
angular.module("pascalprecht.translate").factory("$translateCookieStorage",["$cookieStore",function(a){var b={get:function(b){return a.get(b)},set:function(b,c){a.put(b,c)},put:function(b,c){a.put(b,c)}};return b}]);
/*!
 * angular-translate - v2.4.2 - 2014-10-21
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */
angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",["$q","$http",function(a,b){return function(c){if(!c||!angular.isString(c.prefix)||!angular.isString(c.suffix))throw new Error("Couldn't load static files, no prefix or suffix specified!");var d=a.defer();return b(angular.extend({url:[c.prefix,c.key,c.suffix].join(""),method:"GET",params:""},c.$http)).success(function(a){d.resolve(a)}).error(function(){d.reject(c.key)}),d.promise}}]);
/*
 AngularJS v1.3.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,f,S){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(T,B,k){k=k.ngAnimateChildren;f.isString(k)&&0===k.length?B.data("$$ngAnimateChildren",!0):T.$watch(k,function(f){B.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,B){return function(k){return f(function(){k()})}}]).config(["$provide","$animateProvider",function(T,B){function k(f){for(var g=0;g<f.length;g++){var k=f[g];if(1==k.nodeType)return k}}
function N(f,g){return k(f)==k(g)}var s=f.noop,g=f.forEach,ba=B.$$selectors,$=f.isArray,ca=f.isString,da=f.isObject,t={running:!0};T.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest",function(O,M,I,U,x,C,P,S,V){function A(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function z(a){var c,b=M.defer();b.promise.$$cancelFn=
function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function J(a){if(da(a))return a.tempClasses&&ca(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function W(a,c,b){b=b||{};var e={};g(b,function(a,d){g(d.split(" "),function(d){e[d]=a})});var m=Object.create(null);g((a.attr("class")||"").split(/\s+/),function(a){m[a]=!0});var f=[],k=[];g(c&&c.classes||[],function(a,d){var b=m[d],c=e[d]||{};!1===a?(b||"addClass"==c.event)&&k.push(d):!0===a&&(b&&
"removeClass"!=c.event||f.push(d))});return 0<f.length+k.length&&[f.join(" "),k.join(" ")]}function Q(a){if(a){var c=[],b={};a=a.substr(1).split(".");(U.transitions||U.animations)&&c.push(I.get(ba[""]));for(var e=0;e<a.length;e++){var f=a[e],k=ba[f];k&&!b[f]&&(c.push(I.get(k)),b[f]=!0)}return c}}function R(a,c,b,e){function m(a,d){var b=a[d],c=a["before"+d.charAt(0).toUpperCase()+d.substr(1)];if(b||c)return"leave"==d&&(c=b,b=null),l.push({event:d,fn:b}),H.push({event:d,fn:c}),!0}function k(c,h,G){var w=
[];g(c,function(a){a.fn&&w.push(a)});var f=0;g(w,function(c,n){var u=function(){a:{if(h){(h[n]||s)();if(++f<w.length)break a;h=null}G()}};switch(c.event){case "setClass":h.push(c.fn(a,F,d,u,e));break;case "animate":h.push(c.fn(a,b,e.from,e.to,u));break;case "addClass":h.push(c.fn(a,F||b,u,e));break;case "removeClass":h.push(c.fn(a,d||b,u,e));break;default:h.push(c.fn(a,u,e))}});h&&0===h.length&&G()}var p=a[0];if(p){e&&(e.to=e.to||{},e.from=e.from||{});var F,d;$(b)&&(F=b[0],d=b[1],F?d?b=F+" "+d:(b=
F,c="addClass"):(b=d,c="removeClass"));var h="setClass"==c,G=h||"addClass"==c||"removeClass"==c||"animate"==c,w=a.attr("class")+" "+b;if(X(w)){var u=s,n=[],H=[],q=s,r=[],l=[],w=(" "+w).replace(/\s+/g,".");g(Q(w),function(a){!m(a,c)&&h&&(m(a,"addClass"),m(a,"removeClass"))});return{node:p,event:c,className:b,isClassBased:G,isSetClassOperation:h,applyStyles:function(){e&&a.css(f.extend(e.from||{},e.to||{}))},before:function(a){u=a;k(H,n,function(){u=s;a()})},after:function(a){q=a;k(l,r,function(){q=
s;a()})},cancel:function(){n&&(g(n,function(a){(a||s)(!0)}),u(!0));r&&(g(r,function(a){(a||s)(!0)}),q(!0))}}}}}function y(a,c,b,e,m,k,p,F){function d(d){var h="$animate:"+d;H&&H[h]&&0<H[h].length&&C(function(){b.triggerHandler(h,{event:a,className:c})})}function h(){d("before")}function G(){d("after")}function w(){w.hasBeenRun||(w.hasBeenRun=!0,k())}function u(){if(!u.hasBeenRun){n&&n.applyStyles();u.hasBeenRun=!0;p&&p.tempClasses&&g(p.tempClasses,function(a){b.removeClass(a)});var h=b.data("$$ngAnimateState");
h&&(n&&n.isClassBased?l(b,c):(C(function(){var d=b.data("$$ngAnimateState")||{};v==d.index&&l(b,c,a)}),b.data("$$ngAnimateState",h)));d("close");F()}}var n=R(b,a,c,p);if(!n)return w(),h(),G(),u(),s;a=n.event;c=n.className;var H=f.element._data(n.node),H=H&&H.events;e||(e=m?m.parent():b.parent());if(Y(b,e))return w(),h(),G(),u(),s;e=b.data("$$ngAnimateState")||{};var q=e.active||{},r=e.totalActive||0,t=e.last;m=!1;if(0<r){r=[];if(n.isClassBased)"setClass"==t.event?(r.push(t),l(b,c)):q[c]&&(aa=q[c],
aa.event==a?m=!0:(r.push(aa),l(b,c)));else if("leave"==a&&q["ng-leave"])m=!0;else{for(var aa in q)r.push(q[aa]);e={};l(b,!0)}0<r.length&&g(r,function(a){a.cancel()})}!n.isClassBased||n.isSetClassOperation||"animate"==a||m||(m="addClass"==a==b.hasClass(c));if(m)return w(),h(),G(),d("close"),F(),s;q=e.active||{};r=e.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var d=a.data("$$ngAnimateState");d&&(d=d.active["ng-leave"])&&(d.cancel(),l(a,"ng-leave"))});b.addClass("ng-animate");
p&&p.tempClasses&&g(p.tempClasses,function(a){b.addClass(a)});var v=Z++;r++;q[c]=n;b.data("$$ngAnimateState",{last:n,active:q,index:v,totalActive:r});h();n.before(function(d){var h=b.data("$$ngAnimateState");d=d||!h||!h.active[c]||n.isClassBased&&h.active[c].event!=a;w();!0===d?u():(G(),n.after(u))});return n.cancel}function K(a){if(a=k(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),g(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&
a.active&&g(a.active,function(a){a.cancel()})})}function l(a,c){if(N(a,x))t.disabled||(t.running=!1,t.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},e=!0===c;!e&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(e||!b.totalActive)a.removeClass("ng-animate"),a.removeData("$$ngAnimateState")}}function Y(a,c){if(t.disabled)return!0;if(N(a,x))return t.running;var b,e,k;do{if(0===c.length)break;var g=N(c,x),p=g?t:c.data("$$ngAnimateState")||{};if(p.disabled)return!0;g&&(k=
!0);!1!==b&&(g=c.data("$$ngAnimateChildren"),f.isDefined(g)&&(b=g));e=e||p.running||p.last&&!p.last.isClassBased}while(c=c.parent());return!k||!b&&e}x.data("$$ngAnimateState",t);var L=P.$watch(function(){return V.totalPendingRequests},function(a,c){0===a&&(L(),P.$$postDigest(function(){P.$$postDigest(function(){t.running=!1})}))}),Z=0,E=B.classNameFilter(),X=E?function(a){return E.test(a)}:function(){return!0};return{animate:function(a,c,b,e,g){e=e||"ng-inline-animate";g=J(g)||{};g.from=b?c:null;
g.to=b?b:c;return z(function(b){return y("animate",e,f.element(k(a)),null,null,s,g,b)})},enter:function(a,c,b,e){e=J(e);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);A(a,!0);O.enter(a,c,b);return z(function(g){return y("enter","ng-enter",f.element(k(a)),c,b,s,e,g)})},leave:function(a,c){c=J(c);a=f.element(a);K(a);A(a,!0);return z(function(b){return y("leave","ng-leave",f.element(k(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,e){e=J(e);a=f.element(a);c=c&&f.element(c);b=b&&
f.element(b);K(a);A(a,!0);O.move(a,c,b);return z(function(g){return y("move","ng-move",f.element(k(a)),c,b,s,e,g)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,e){e=J(e);a=f.element(a);a=f.element(k(a));if(A(a))return O.$$setClassImmediately(a,c,b,e);var m,l=a.data("$$animateClasses"),p=!!l;l||(l={classes:{}});m=l.classes;c=$(c)?c:c.split(" ");g(c,function(a){a&&a.length&&(m[a]=!0)});b=$(b)?b:b.split(" ");
g(b,function(a){a&&a.length&&(m[a]=!1)});if(p)return e&&l.options&&(l.options=f.extend(l.options||{},e)),l.promise;a.data("$$animateClasses",l={classes:m,options:e});return l.promise=z(function(b){var d=a.parent(),h=k(a),c=h.parentNode;if(!c||c.$$NG_REMOVED||h.$$NG_REMOVED)b();else{h=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},e=W(a,h,c.active);return e?y("setClass",e,a,d,null,function(){e[0]&&O.$$addClassImmediately(a,e[0]);e[1]&&O.$$removeClassImmediately(a,
e[1])},h.options,b):b()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)l(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:t.disabled=!a;break;default:a=!t.disabled}return!!a}}}]);B.register("",["$window","$sniffer","$timeout","$$animateReflow",function(t,B,I,U){function x(){e||(e=U(function(){b=[];e=null;a={}}))}function C(c,d){e&&e();b.push(d);e=U(function(){g(b,function(a){a()});b=[];e=null;a=
{}})}function P(a,d){var h=k(a);a=f.element(h);p.push(a);h=Date.now()+d;h<=N||(I.cancel(m),N=h,m=I(function(){T(p);p=[]},d,!1))}function T(a){g(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&g(a.closeAnimationFns,function(a){a()})})}function V(b,d){var h=d?a[d]:null;if(!h){var c=0,e=0,f=0,k=0;g(b,function(a){if(1==a.nodeType){a=t.getComputedStyle(a)||{};c=Math.max(A(a[L+"Duration"]),c);e=Math.max(A(a[L+"Delay"]),e);k=Math.max(A(a[E+"Delay"]),k);var d=A(a[E+"Duration"]);0<d&&(d*=parseInt(a[E+"IterationCount"],
10)||1);f=Math.max(d,f)}});h={total:0,transitionDelay:e,transitionDuration:c,animationDelay:k,animationDuration:f};d&&(a[d]=h)}return h}function A(a){var d=0;a=ca(a)?a.split(/\s*,\s*/):[];g(a,function(a){d=Math.max(parseFloat(a)||0,d)});return d}function z(b,d,h,e){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(h);var f,g=d.parent(),n=g.data("$$ngAnimateKey");n||(g.data("$$ngAnimateKey",++c),n=c);f=n+"-"+k(d).getAttribute("class");var g=f+" "+h,n=a[g]?++a[g].total:0,l={};if(0<n){var q=h+"-stagger",
l=f+" "+q;(f=!a[l])&&d.addClass(q);l=V(d,l);f&&d.removeClass(q)}d.addClass(h);var q=d.data("$$ngAnimateCSS3Data")||{},r=V(d,g);f=r.transitionDuration;r=r.animationDuration;if(b&&0===f&&0===r)return d.removeClass(h),!1;h=e||b&&0<f;b=0<r&&0<l.animationDelay&&0===l.animationDuration;d.data("$$ngAnimateCSS3Data",{stagger:l,cacheKey:g,running:q.running||0,itemIndex:n,blockTransition:h,closeAnimationFns:q.closeAnimationFns||[]});g=k(d);h&&(W(g,!0),e&&d.css(e));b&&(g.style[E+"PlayState"]="paused");return!0}
function J(a,d,b,c,e){function f(){d.off(C,l);d.removeClass(q);d.removeClass(r);z&&I.cancel(z);K(d,b);var a=k(d),c;for(c in p)a.style.removeProperty(p[c])}function l(a){a.stopPropagation();var d=a.originalEvent||a;a=d.$manualTimeStamp||d.timeStamp||Date.now();d=parseFloat(d.elapsedTime.toFixed(3));Math.max(a-B,0)>=A&&d>=x&&c()}var m=k(d);a=d.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var q="",r="";g(b.split(" "),function(a,d){var b=(0<d?" ":"")+a;q+=b+"-active";r+=b+
"-pending"});var p=[],t=a.itemIndex,v=a.stagger,s=0;if(0<t){s=0;0<v.transitionDelay&&0===v.transitionDuration&&(s=v.transitionDelay*t);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*t,p.push(Y+"animation-play-state"));s=Math.round(100*Math.max(s,y))/100}s||(d.addClass(q),a.blockTransition&&W(m,!1));var D=V(d,a.cacheKey+" "+q),x=Math.max(D.transitionDuration,D.animationDuration);if(0===x)d.removeClass(q),K(d,b),c();else{!s&&e&&(D.transitionDuration||(d.css("transition",D.animationDuration+
"s linear all"),p.push("transition")),d.css(e));var t=Math.max(D.transitionDelay,D.animationDelay),A=1E3*t;0<p.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var B=Date.now(),C=X+" "+Z,t=1E3*(s+1.5*(t+x)),z;0<s&&(d.addClass(r),z=I(function(){z=null;0<D.transitionDuration&&W(m,!1);0<D.animationDuration&&(m.style[E+"PlayState"]="");d.addClass(q);d.removeClass(r);e&&(0===D.transitionDuration&&d.css("transition",D.animationDuration+"s linear all"),
d.css(e),p.push("transition"))},1E3*s,!1));d.on(C,l);a.closeAnimationFns.push(function(){f();c()});a.running++;P(d,t);return f}}else c()}function W(a,d){a.style[L+"Property"]=d?"none":""}function Q(a,d,b,c){if(z(a,d,b,c))return function(a){a&&K(d,b)}}function R(a,d,b,c,e){if(d.data("$$ngAnimateCSS3Data"))return J(a,d,b,c,e);K(d,b);c()}function y(a,d,b,c,e){var f=Q(a,d,b,e.from);if(f){var g=f;C(d,function(){g=R(a,d,b,c,e.to)});return function(a){(g||s)(a)}}x();c()}function K(a,d){a.removeClass(d);
var b=a.data("$$ngAnimateCSS3Data");b&&(b.running&&b.running--,b.running&&0!==b.running||a.removeData("$$ngAnimateCSS3Data"))}function l(a,d){var b="";a=$(a)?a:a.split(/\s+/);g(a,function(a,c){a&&0<a.length&&(b+=(0<c?" ":"")+a+d)});return b}var Y="",L,Z,E,X;M.ontransitionend===S&&M.onwebkittransitionend!==S?(Y="-webkit-",L="WebkitTransition",Z="webkitTransitionEnd transitionend"):(L="transition",Z="transitionend");M.onanimationend===S&&M.onwebkitanimationend!==S?(Y="-webkit-",E="WebkitAnimation",
X="webkitAnimationEnd animationend"):(E="animation",X="animationend");var a={},c=0,b=[],e,m=null,N=0,p=[];return{animate:function(a,d,b,c,e,f){f=f||{};f.from=b;f.to=c;return y("animate",a,d,e,f)},enter:function(a,b,c){c=c||{};return y("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return y("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return y("move",a,"ng-move",b,c)},beforeSetClass:function(a,b,c,e,f){f=f||{};b=l(c,"-remove")+" "+l(b,"-add");if(f=Q("setClass",a,b,f.from))return C(a,
e),f;x();e()},beforeAddClass:function(a,b,c,e){e=e||{};if(b=Q("addClass",a,l(b,"-add"),e.from))return C(a,c),b;x();c()},beforeRemoveClass:function(a,b,c,e){e=e||{};if(b=Q("removeClass",a,l(b,"-remove"),e.from))return C(a,c),b;x();c()},setClass:function(a,b,c,e,f){f=f||{};c=l(c,"-remove");b=l(b,"-add");return R("setClass",a,c+" "+b,e,f.to)},addClass:function(a,b,c,e){e=e||{};return R("addClass",a,l(b,"-add"),c,e.to)},removeClass:function(a,b,c,e){e=e||{};return R("removeClass",a,l(b,"-remove"),c,e.to)}}}])}])})(window,
window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
  angular-md5 - v0.1.7 
  2014-01-20
*/

!function(a,b){b.module("angular-md5",["gdi2290.md5"]),b.module("ngMd5",["gdi2290.md5"]),b.module("gdi2290.md5",["gdi2290.gravatar-filter","gdi2290.md5-service","gdi2290.md5-filter"]),b.module("gdi2290.gravatar-filter",[]).filter("gravatar",["md5",function(a){var b={};return function(c,d){return b[c]||(d=d?a.createHash(d.toString().toLowerCase()):"",b[c]=c?a.createHash(c.toString().toLowerCase()):d),b[c]}}]),b.module("gdi2290.md5-filter",[]).filter("md5",["md5",function(a){return function(b){return b?a.createHash(b.toString().toLowerCase()):b}}]),b.module("gdi2290.md5-service",[]).factory("md5",[function(){var a={createHash:function(a){var b,c,d,e,f,g,h,i,j,k,l=function(a,b){return a<<b|a>>>32-b},m=function(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f},n=function(a,b,c){return a&b|~a&c},o=function(a,b,c){return a&c|b&~c},p=function(a,b,c){return a^b^c},q=function(a,b,c){return b^(a|~c)},r=function(a,b,c,d,e,f,g){return a=m(a,m(m(n(b,c,d),e),g)),m(l(a,f),b)},s=function(a,b,c,d,e,f,g){return a=m(a,m(m(o(b,c,d),e),g)),m(l(a,f),b)},t=function(a,b,c,d,e,f,g){return a=m(a,m(m(p(b,c,d),e),g)),m(l(a,f),b)},u=function(a,b,c,d,e,f,g){return a=m(a,m(m(q(b,c,d),e),g)),m(l(a,f),b)},v=function(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g},w=function(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d},x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(x=v(a),h=1732584193,i=4023233417,j=2562383102,k=271733878,b=x.length,c=0;b>c;c+=16)d=h,e=i,f=j,g=k,h=r(h,i,j,k,x[c+0],y,3614090360),k=r(k,h,i,j,x[c+1],z,3905402710),j=r(j,k,h,i,x[c+2],A,606105819),i=r(i,j,k,h,x[c+3],B,3250441966),h=r(h,i,j,k,x[c+4],y,4118548399),k=r(k,h,i,j,x[c+5],z,1200080426),j=r(j,k,h,i,x[c+6],A,2821735955),i=r(i,j,k,h,x[c+7],B,4249261313),h=r(h,i,j,k,x[c+8],y,1770035416),k=r(k,h,i,j,x[c+9],z,2336552879),j=r(j,k,h,i,x[c+10],A,4294925233),i=r(i,j,k,h,x[c+11],B,2304563134),h=r(h,i,j,k,x[c+12],y,1804603682),k=r(k,h,i,j,x[c+13],z,4254626195),j=r(j,k,h,i,x[c+14],A,2792965006),i=r(i,j,k,h,x[c+15],B,1236535329),h=s(h,i,j,k,x[c+1],C,4129170786),k=s(k,h,i,j,x[c+6],D,3225465664),j=s(j,k,h,i,x[c+11],E,643717713),i=s(i,j,k,h,x[c+0],F,3921069994),h=s(h,i,j,k,x[c+5],C,3593408605),k=s(k,h,i,j,x[c+10],D,38016083),j=s(j,k,h,i,x[c+15],E,3634488961),i=s(i,j,k,h,x[c+4],F,3889429448),h=s(h,i,j,k,x[c+9],C,568446438),k=s(k,h,i,j,x[c+14],D,3275163606),j=s(j,k,h,i,x[c+3],E,4107603335),i=s(i,j,k,h,x[c+8],F,1163531501),h=s(h,i,j,k,x[c+13],C,2850285829),k=s(k,h,i,j,x[c+2],D,4243563512),j=s(j,k,h,i,x[c+7],E,1735328473),i=s(i,j,k,h,x[c+12],F,2368359562),h=t(h,i,j,k,x[c+5],G,4294588738),k=t(k,h,i,j,x[c+8],H,2272392833),j=t(j,k,h,i,x[c+11],I,1839030562),i=t(i,j,k,h,x[c+14],J,4259657740),h=t(h,i,j,k,x[c+1],G,2763975236),k=t(k,h,i,j,x[c+4],H,1272893353),j=t(j,k,h,i,x[c+7],I,4139469664),i=t(i,j,k,h,x[c+10],J,3200236656),h=t(h,i,j,k,x[c+13],G,681279174),k=t(k,h,i,j,x[c+0],H,3936430074),j=t(j,k,h,i,x[c+3],I,3572445317),i=t(i,j,k,h,x[c+6],J,76029189),h=t(h,i,j,k,x[c+9],G,3654602809),k=t(k,h,i,j,x[c+12],H,3873151461),j=t(j,k,h,i,x[c+15],I,530742520),i=t(i,j,k,h,x[c+2],J,3299628645),h=u(h,i,j,k,x[c+0],K,4096336452),k=u(k,h,i,j,x[c+7],L,1126891415),j=u(j,k,h,i,x[c+14],M,2878612391),i=u(i,j,k,h,x[c+5],N,4237533241),h=u(h,i,j,k,x[c+12],K,1700485571),k=u(k,h,i,j,x[c+3],L,2399980690),j=u(j,k,h,i,x[c+10],M,4293915773),i=u(i,j,k,h,x[c+1],N,2240044497),h=u(h,i,j,k,x[c+8],K,1873313359),k=u(k,h,i,j,x[c+15],L,4264355552),j=u(j,k,h,i,x[c+6],M,2734768916),i=u(i,j,k,h,x[c+13],N,1309151649),h=u(h,i,j,k,x[c+4],K,4149444226),k=u(k,h,i,j,x[c+11],L,3174756917),j=u(j,k,h,i,x[c+2],M,718787259),i=u(i,j,k,h,x[c+9],N,3951481745),h=m(h,d),i=m(i,e),j=m(j,f),k=m(k,g);var O=w(h)+w(i)+w(j)+w(k);return O.toLowerCase()}};return a}])}(this,this.angular,void 0);
//# sourceMappingURL=angular-md5.min.js.map
//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>24||24===a._a[Db]&&(0!==a._a[Eb]||0!==a._a[Fb]||0!==a._a[Gb])?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(tb.isMoment(a)||v(a)?+a:+tb(a))-+c,c._d.setTime(+c._d+d),tb.updateOffset(c,!1),c):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"x":return Xb;case"X":return Yb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"x":c._d=new Date(A(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Db]&&0===a._a[Eb]&&0===a._a[Fb]&&0===a._a[Gb]&&(a._nextDay=!0,a._a[Db]=0),a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm),a._nextDay&&(a._a[Db]=24)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(b){if(b._f===tb.ISO_8601)return void $(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=O(b._f,b._locale).match(Nb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),pc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),R(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Db]<=12&&(b._pf.bigHour=a),b._isPm&&b._a[Db]<12&&(b._a[Db]+=12),b._isPm===!1&&12===b._a[Db]&&(b._a[Db]=0),T(b),F(b)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||tb.localeData(b._l),null===d||e===a&&""===d?tb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),tb.isMoment(d)?new k(d,!0):(e?u(e)?Z(b):W(b):bb(b),c=new k(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.4",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+/,Yb=/[\+\-]?\d+(\.\d{1,3})?/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=tb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,tb(b)))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=x(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):(c=tb.isMoment(a)?+a:+tb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):(c=tb.isMoment(a)?+a:+tb(a),+this.clone().endOf(b)<c)},isSame:function(a,b){var c;return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):(c=+tb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(qb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;
case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),function(a){a(tb)}(function(a){return a.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiem:function(a,b,c){return 12>a?c?"vm":"VM":c?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){var b={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},c={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};return a.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:function(a){return 12>a?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(a){return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(a){return c[a]}).replace(/،/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){var b={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},c={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},d=function(a){return 0===a?0:1===a?1:2===a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5},e={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},f=function(a){return function(b,c){var f=d(b),g=e[a][d(b)];return 2===f&&(g=g[c?0:1]),g.replace(/%d/i,b)}},g=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];return a.defineLocale("ar",{months:g,monthsShort:g,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:function(a){return 12>a?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:f("s"),m:f("m"),mm:f("m"),h:f("h"),hh:f("h"),d:f("d"),dd:f("d"),M:f("M"),MM:f("M"),y:f("y"),yy:f("y")},preparse:function(a){return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(a){return c[a]}).replace(/،/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){var b={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};return a.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiem:function(a){return 4>a?"gecə":12>a?"səhər":17>a?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(a){if(0===a)return a+"-ıncı";var c=a%10,d=a%100-c,e=a>=100?100:null;return a+(b[c]||b[d]||b[e])},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:c?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:c?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===d?c?"хвіліна":"хвіліну":"h"===d?c?"гадзіна":"гадзіну":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),accusative:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),accusative:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")},d=/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("be",{months:d,monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:e,weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:c,mm:c,h:c,hh:c,d:"дзень",dd:c,M:"месяц",MM:c,y:"год",yy:c},meridiem:function(a){return 4>a?"ночы":12>a?"раніцы":17>a?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a%10!==2&&a%10!==3||a%100===12||a%100===13?a+"-ы":a+"-і";case"D":return a+"-га";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-ев":0===c?a+"-ен":c>10&&20>c?a+"-ти":1===b?a+"-ви":2===b?a+"-ри":7===b||8===b?a+"-ми":a+"-ти"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},c={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};return a.defineLocale("bn",{months:"জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),weekdaysMin:"রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কএক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(a){return a.replace(/[১২৩৪৫৬৭৮৯০]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"রাত":10>a?"শকাল":17>a?"দুপুর":20>a?"বিকেল":"রাত"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){var b={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},c={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};return a.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(a){return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"མཚན་མོ":10>a?"ཞོགས་ཀས":17>a?"ཉིན་གུང":20>a?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(b){function c(a,b,c){var d={mm:"munutenn",MM:"miz",dd:"devezh"};return a+" "+f(d[c],a)}function d(a){switch(e(a)){case 1:case 3:case 4:case 5:case 9:return a+" bloaz";default:return a+" vloaz"}}function e(a){return a>9?e(a%10):a}function f(a,b){return 2===b?g(a):a}function g(b){var c={m:"v",b:"v",d:"z"};return c[b.charAt(0)]===a?b:c[b.charAt(0)]+b.substring(1)}return b.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY LT",LLLL:"dddd, D [a viz] MMMM YYYY LT"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:c,h:"un eur",hh:"%d eur",d:"un devezh",dd:c,M:"ur miz",MM:c,y:"ur bloaz",yy:d},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(a){var b=1===a?"añ":"vet";return a+b},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}return a.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:b,mm:b,h:b,hh:b,d:"dan",dd:b,M:"mjesec",MM:b,y:"godinu",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(a,b){var c=1===a?"r":2===a?"n":3===a?"r":4===a?"t":"è";return("w"===b||"W"===b)&&(c="a"),a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a){return a>1&&5>a&&1!==~~(a/10)}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"pár sekund":"pár sekundami";case"m":return c?"minuta":e?"minutu":"minutou";case"mm":return c||e?f+(b(a)?"minuty":"minut"):f+"minutami";break;case"h":return c?"hodina":e?"hodinu":"hodinou";case"hh":return c||e?f+(b(a)?"hodiny":"hodin"):f+"hodinami";break;case"d":return c||e?"den":"dnem";case"dd":return c||e?f+(b(a)?"dny":"dní"):f+"dny";break;case"M":return c||e?"měsíc":"měsícem";case"MM":return c||e?f+(b(a)?"měsíce":"měsíců"):f+"měsíci";break;case"y":return c||e?"rok":"rokem";case"yy":return c||e?f+(b(a)?"roky":"let"):f+"lety"}}var d="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),e="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return a.defineLocale("cs",{months:d,monthsShort:e,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(d,e),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("cv",{months:"кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),monthsShort:"кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кç_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",LLL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",LLLL:"dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ĕнер] LT [сехетре]",nextWeek:"[Çитес] dddd LT [сехетре]",lastWeek:"[Иртнĕ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(a){var b=/сехет$/i.exec(a)?"рен":/çул$/i.exec(a)?"тан":"ран";return a+b},past:"%s каялла",s:"пĕр-ик çеккунт",m:"пĕр минут",mm:"%d минут",h:"пĕр сехет",hh:"%d сехет",d:"пĕр кун",dd:"%d кун",M:"пĕр уйăх",MM:"%d уйăх",y:"пĕр çул",yy:"%d çул"},ordinalParse:/\d{1,2}-мĕш/,ordinal:"%d-мĕш",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(a){var b=a,c="",d=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return b>20?c=40===b||50===b||60===b||80===b||100===b?"fed":"ain":b>0&&(c=d[b]),a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd [d.] D. MMMM YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?d[c][0]:d[c][1]}return a.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:b,mm:"%d Minuten",h:b,hh:"%d Stunden",d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?d[c][0]:d[c][1]}return a.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:b,mm:"%d Minuten",h:b,hh:"%d Stunden",d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(a,b){return/D/.test(b.substring(0,b.indexOf("MMMM")))?this._monthsGenitiveEl[a.month()]:this._monthsNominativeEl[a.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(a,b,c){return a>11?c?"μμ":"ΜΜ":c?"πμ":"ΠΜ"},isPM:function(a){return"μ"===(a+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(a,b){var c=this._calendarEl[a],d=b&&b.hours();return"function"==typeof c&&(c=c.apply(b)),c.replace("{}",d%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}})}),function(a){a(tb)}(function(a){return a.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY LT",LLLL:"dddd, [la] D[-an de] MMMM, YYYY LT"},meridiem:function(a,b,c){return a>11?c?"p.t.m.":"P.T.M.":c?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})
}),function(a){a(tb)}(function(a){var b="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),c="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return a.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c,d){var e={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[a+" minuti",a+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[a+" tunni",a+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[a+" kuu",a+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[a+" aasta",a+" aastat"]};return b?e[c][2]?e[c][2]:e[c][1]:d?e[c][0]:e[c][1]}return a.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:"%d päeva",M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},c={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};return a.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:function(a){return 12>a?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(a){return a.replace(/[۰-۹]/g,function(a){return c[a]}).replace(/،/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){function b(a,b,d,e){var f="";switch(d){case"s":return e?"muutaman sekunnin":"muutama sekunti";case"m":return e?"minuutin":"minuutti";case"mm":f=e?"minuutin":"minuuttia";break;case"h":return e?"tunnin":"tunti";case"hh":f=e?"tunnin":"tuntia";break;case"d":return e?"päivän":"päivä";case"dd":f=e?"päivän":"päivää";break;case"M":return e?"kuukauden":"kuukausi";case"MM":f=e?"kuukauden":"kuukautta";break;case"y":return e?"vuoden":"vuosi";case"yy":f=e?"vuoden":"vuotta"}return f=c(a,e)+" "+f}function c(a,b){return 10>a?b?e[a]:d[a]:a}var d="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),e=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",d[7],d[8],d[9]];return a.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")}})}),function(a){a(tb)}(function(a){return a.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(a){return"uns segundos"===a?"nuns segundos":"en "+a},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY LT",LLLL:"dddd, D [ב]MMMM YYYY LT",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(a){return 2===a?"שעתיים":a+" שעות"},d:"יום",dd:function(a){return 2===a?"יומיים":a+" ימים"},M:"חודש",MM:function(a){return 2===a?"חודשיים":a+" חודשים"},y:"שנה",yy:function(a){return 2===a?"שנתיים":a+" שנים"}}})}),function(a){a(tb)}(function(a){var b={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},c={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return a.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(a){return a.replace(/[१२३४५६७८९०]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"रात":10>a?"सुबह":17>a?"दोपहर":20>a?"शाम":"रात"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}return a.defineLocale("hr",{months:"sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:b,mm:b,h:b,hh:b,d:"dan",dd:b,M:"mjesec",MM:b,y:"godinu",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b,c,d){var e=a;switch(c){case"s":return d||b?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(d||b?" perc":" perce");case"mm":return e+(d||b?" perc":" perce");case"h":return"egy"+(d||b?" óra":" órája");case"hh":return e+(d||b?" óra":" órája");case"d":return"egy"+(d||b?" nap":" napja");case"dd":return e+(d||b?" nap":" napja");case"M":return"egy"+(d||b?" hónap":" hónapja");case"MM":return e+(d||b?" hónap":" hónapja");case"y":return"egy"+(d||b?" év":" éve");case"yy":return e+(d||b?" év":" éve")}return""}function c(a){return(a?"":"[múlt] ")+"["+d[this.day()]+"] LT[-kor]"}var d="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");return a.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},meridiem:function(a,b,c){return 12>a?c===!0?"de":"DE":c===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return c.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return c.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b){var c={nominative:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),accusative:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function c(a){var b="հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");return b[a.month()]}function d(a){var b="կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");return b[a.day()]}return a.defineLocale("hy-am",{months:b,monthsShort:c,weekdays:d,weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., LT",LLLL:"dddd, D MMMM YYYY թ., LT"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiem:function(a){return 4>a?"գիշերվա":12>a?"առավոտվա":17>a?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(a,b){switch(b){case"DDD":case"w":case"W":case"DDDo":return 1===a?a+"-ին":a+"-րդ";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiem:function(a){return 11>a?"pagi":15>a?"siang":19>a?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a){return a%100===11?!0:a%10===1?!1:!0}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return c?"mínúta":"mínútu";case"mm":return b(a)?f+(c||e?"mínútur":"mínútum"):c?f+"mínúta":f+"mínútu";case"hh":return b(a)?f+(c||e?"klukkustundir":"klukkustundum"):f+"klukkustund";case"d":return c?"dagur":e?"dag":"degi";case"dd":return b(a)?c?f+"dagar":f+(e?"daga":"dögum"):c?f+"dagur":f+(e?"dag":"degi");case"M":return c?"mánuður":e?"mánuð":"mánuði";case"MM":return b(a)?c?f+"mánuðir":f+(e?"mánuði":"mánuðum"):c?f+"mánuður":f+(e?"mánuð":"mánuði");case"y":return c||e?"ár":"ári";case"yy":return b(a)?f+(c||e?"ár":"árum"):f+(c||e?"ár":"ári")}}return a.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:c,m:c,mm:c,h:"klukkustund",hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(a){return(/^[0-9].+$/.test(a)?"tra":"in")+" "+a},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"LTs秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日LT",LLLL:"YYYY年M月D日LT dddd"},meridiem:function(a){return 12>a?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})}),function(a){a(tb)}(function(a){function b(a,b){var c={nominative:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),accusative:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},d=/D[oD] *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function c(a,b){var c={nominative:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),accusative:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")},d=/(წინა|შემდეგ)/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("ka",{months:b,monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:c,weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(a){return/(წამი|წუთი|საათი|წელი)/.test(a)?a.replace(/ი$/,"ში"):a+"ში"},past:function(a){return/(წამი|წუთი|საათი|დღე|თვე)/.test(a)?a.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(a)?a.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(a){return 0===a?a:1===a?a+"-ლი":20>a||100>=a&&a%20===0||a%100===0?"მე-"+a:a+"-ე"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("km",{months:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[ថ្ងៃនៈ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 LT",LLLL:"YYYY년 MMMM D일 dddd LT"},meridiem:function(a){return 12>a?"오전":"오후"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇초",ss:"%d초",m:"일분",mm:"%d분",h:"한시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한달",MM:"%d달",y:"일년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/(오전|오후)/,isPM:function(a){return"오후"===a}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return b?d[c][0]:d[c][1]}function c(a){var b=a.substr(0,a.indexOf(" "));return e(b)?"a "+a:"an "+a}function d(a){var b=a.substr(0,a.indexOf(" "));return e(b)?"viru "+a:"virun "+a}function e(a){if(a=parseInt(a,10),isNaN(a))return!1;if(0>a)return!0;if(10>a)return a>=4&&7>=a?!0:!1;if(100>a){var b=a%10,c=a/10;return e(0===b?c:b)}if(1e4>a){for(;a>=10;)a/=10;return e(a)}return a/=1e3,e(a)}return a.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:c,past:d,s:"e puer Sekonnen",m:b,mm:"%d Minutten",h:b,hh:"%d Stonnen",d:b,dd:"%d Deeg",M:b,MM:"%d Méint",y:b,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c,d){return b?"kelios sekundės":d?"kelių sekundžių":"kelias sekundes"}function c(a,b,c,d){return b?e(c)[0]:d?e(c)[1]:e(c)[2]}function d(a){return a%10===0||a>10&&20>a}function e(a){return h[a].split("_")}function f(a,b,f,g){var h=a+" ";return 1===a?h+c(a,b,f[0],g):b?h+(d(a)?e(f)[1]:e(f)[0]):g?h+e(f)[1]:h+(d(a)?e(f)[1]:e(f)[2])}function g(a,b){var c=-1===b.indexOf("dddd HH:mm"),d=i[a.day()];return c?d:d.substring(0,d.length-2)+"į"}var h={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},i="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");return a.defineLocale("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:g,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:b,m:c,mm:f,h:c,hh:f,d:c,dd:f,M:c,MM:f,y:c,yy:f},ordinalParse:/\d{1,2}-oji/,ordinal:function(a){return a+"-oji"},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a.split("_");return c?b%10===1&&11!==b?d[2]:d[3]:b%10===1&&11!==b?d[0]:d[1]}function c(a,c,e){return a+" "+b(d[e],a,c)}var d={mm:"minūti_minūtes_minūte_minūtes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"mēnesi_mēnešus_mēnesis_mēneši",yy:"gadu_gadus_gads_gadi"};return a.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"%s vēlāk",past:"%s agrāk",s:"dažas sekundes",m:"minūti",mm:c,h:"stundu",hh:c,d:"dienu",dd:c,M:"mēnesi",MM:c,y:"gadu",yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Во изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Во изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-ев":0===c?a+"-ен":c>10&&20>c?a+"-ти":1===b?a+"-ви":2===b?a+"-ри":7===b||8===b?a+"-ми":a+"-ти"
},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiem:function(a){return 4>a?"രാത്രി":12>a?"രാവിലെ":17>a?"ഉച്ച കഴിഞ്ഞ്":20>a?"വൈകുന്നേരം":"രാത്രി"}})}),function(a){a(tb)}(function(a){var b={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},c={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return a.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%s नंतर",past:"%s पूर्वी",s:"सेकंद",m:"एक मिनिट",mm:"%d मिनिटे",h:"एक तास",hh:"%d तास",d:"एक दिवस",dd:"%d दिवस",M:"एक महिना",MM:"%d महिने",y:"एक वर्ष",yy:"%d वर्षे"},preparse:function(a){return a.replace(/[१२३४५६७८९०]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"रात्री":10>a?"सकाळी":17>a?"दुपारी":20>a?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){return a.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiem:function(a){return 11>a?"pagi":15>a?"tengahari":19>a?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},c={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};return a.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(a){return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tirs_ons_tors_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"H.mm",LTS:"LT.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){var b={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},c={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return a.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आइ._सो._मङ्_बु._बि._शु._श.".split("_"),longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},preparse:function(a){return a.replace(/[१२३४५६७८९०]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 3>a?"राती":10>a?"बिहान":15>a?"दिउँसो":18>a?"बेलुका":20>a?"साँझ":"राती"},calendar:{sameDay:"[आज] LT",nextDay:"[भोली] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडी",s:"केही समय",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),c="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");return a.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a){return 5>a%10&&a%10>1&&~~(a/10)%10!==1}function c(a,c,d){var e=a+" ";switch(d){case"m":return c?"minuta":"minutę";case"mm":return e+(b(a)?"minuty":"minut");case"h":return c?"godzina":"godzinę";case"hh":return e+(b(a)?"godziny":"godzin");case"MM":return e+(b(a)?"miesiące":"miesięcy");case"yy":return e+(b(a)?"lata":"lat")}}var d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),e="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return a.defineLocale("pl",{months:function(a,b){return/D MMMM/.test(b)?e[a.month()]:d[a.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:c,mm:c,h:c,hh:c,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:c,y:"rok",yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] LT",LLLL:"dddd, D [de] MMMM [de] YYYY [às] LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"})}),function(a){a(tb)}(function(a){return a.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},e=" ";return(a%100>=20||a>=100&&a%100===0)&&(e=" de "),a+e+d[c]}return a.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:b,h:"o oră",hh:b,d:"o zi",dd:b,M:"o lună",MM:b,y:"un an",yy:b},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:c?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===d?c?"минута":"минуту":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),accusative:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),accusative:"янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function f(a,b){var c={nominative:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),accusative:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")},d=/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("ru",{months:d,monthsShort:e,weekdays:f,weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[й|я]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT"},lastWeek:function(a){if(a.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:c,mm:c,h:"час",hh:c,d:"день",dd:c,M:"месяц",MM:c,y:"год",yy:c},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(a){return/^(дня|вечера)$/.test(a)},meridiem:function(a){return 4>a?"ночи":12>a?"утра":17>a?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":return a+"-й";case"D":return a+"-го";case"w":case"W":return a+"-я";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a){return a>1&&5>a}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"pár sekúnd":"pár sekundami";case"m":return c?"minúta":e?"minútu":"minútou";case"mm":return c||e?f+(b(a)?"minúty":"minút"):f+"minútami";break;case"h":return c?"hodina":e?"hodinu":"hodinou";case"hh":return c||e?f+(b(a)?"hodiny":"hodín"):f+"hodinami";break;case"d":return c||e?"deň":"dňom";case"dd":return c||e?f+(b(a)?"dni":"dní"):f+"dňami";break;case"M":return c||e?"mesiac":"mesiacom";case"MM":return c||e?f+(b(a)?"mesiace":"mesiacov"):f+"mesiacmi";break;case"y":return c||e?"rok":"rokom";case"yy":return c||e?f+(b(a)?"roky":"rokov"):f+"rokmi"}}var d="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),e="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return a.defineLocale("sk",{months:d,monthsShort:e,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(d,e),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"ena minuta":"eno minuto";case"mm":return d+=1===a?"minuta":2===a?"minuti":3===a||4===a?"minute":"minut";case"h":return b?"ena ura":"eno uro";case"hh":return d+=1===a?"ura":2===a?"uri":3===a||4===a?"ure":"ur";case"dd":return d+=1===a?"dan":"dni";case"MM":return d+=1===a?"mesec":2===a?"meseca":3===a||4===a?"mesece":"mesecev";case"yy":return d+=1===a?"leto":2===a?"leti":3===a||4===a?"leta":"let"}}return a.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[prejšnja] dddd [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"%s nazaj",s:"nekaj sekund",m:b,mm:b,h:b,hh:b,d:"en dan",dd:b,M:"en mesec",MM:b,y:"eno leto",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),meridiem:function(a){return 12>a?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){var b={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,c,d){var e=b.words[d];return 1===d.length?c?e[0]:e[1]:a+" "+b.correctGrammaticalCase(a,e)}};return a.defineLocale("sr-cyrl",{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],monthsShort:["јан.","феб.","мар.","апр.","мај","јун","јул","авг.","сеп.","окт.","нов.","дец."],weekdays:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],weekdaysShort:["нед.","пон.","уто.","сре.","чет.","пет.","суб."],weekdaysMin:["не","по","ут","ср","че","пе","су"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var a=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:b.translate,mm:b.translate,h:b.translate,hh:b.translate,d:"дан",dd:b.translate,M:"месец",MM:b.translate,y:"годину",yy:b.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,c,d){var e=b.words[d];return 1===d.length?c?e[0]:e[1]:a+" "+b.correctGrammaticalCase(a,e)}};return a.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","čet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","če","pe","su"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var a=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:b.translate,mm:b.translate,h:b.translate,hh:b.translate,d:"dan",dd:b.translate,M:"mesec",MM:b.translate,y:"godinu",yy:b.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"dddd LT",lastWeek:"[Förra] dddd[en] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"e":1===b?"a":2===b?"a":3===b?"e":"e";return a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(a){return a+"வது"},meridiem:function(a){return a>=6&&10>=a?" காலை":a>=10&&14>=a?" நண்பகல்":a>=14&&18>=a?" எற்பாடு":a>=18&&20>=a?" மாலை":a>=20&&24>=a?" இரவு":a>=0&&6>=a?" வைகறை":void 0},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){return a.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),longDateFormat:{LT:"H นาฬิกา m นาที",LTS:"LT s วินาที",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา LT",LLLL:"วันddddที่ D MMMM YYYY เวลา LT"},meridiem:function(a){return 12>a?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})}),function(a){a(tb)}(function(a){return a.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM DD, YYYY LT"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){var b={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};return a.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(a){if(0===a)return a+"'ıncı";var c=a%10,d=a%100-c,e=a>=100?100:null;return a+(b[c]||b[d]||b[e])},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){return a.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})
}),function(a){a(tb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:"хвилина_хвилини_хвилин",hh:"година_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===d?c?"хвилина":"хвилину":"h"===d?c?"година":"годину":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),accusative:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")},d=/D[oD]? *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},d=/(\[[ВвУу]\]) ?dddd/.test(b)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(b)?"genitive":"nominative";return c[d][a.day()]}function f(a){return function(){return a+"о"+(11===this.hours()?"б":"")+"] LT"}}return a.defineLocale("uk",{months:d,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:e,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., LT",LLLL:"dddd, D MMMM YYYY р., LT"},calendar:{sameDay:f("[Сьогодні "),nextDay:f("[Завтра "),lastDay:f("[Вчора "),nextWeek:f("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return f("[Минулої] dddd [").call(this);case 1:case 2:case 4:return f("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:c,mm:c,h:"годину",hh:c,d:"день",dd:c,M:"місяць",MM:c,y:"рік",yy:c},meridiem:function(a){return 4>a?"ночі":12>a?"ранку":17>a?"дня":"вечора"},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a+"-й";case"D":return a+"-го";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("uz",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"D MMMM YYYY, dddd LT"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY LT",LLLL:"dddd, D MMMM [năm] YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiem:function(a,b){var c=100*a+b;return 600>c?"凌晨":900>c?"早上":1130>c?"上午":1230>c?"中午":1800>c?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var b,c;return b=a().startOf("week"),c=this.unix()-b.unix()>=604800?"[下]":"[本]",0===this.minutes()?c+"dddAh点整":c+"dddAh点mm"},lastWeek:function(){var b,c;return b=a().startOf("week"),c=this.unix()<b.unix()?"[上]":"[本]",0===this.minutes()?c+"dddAh点整":c+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"日";case"M":return a+"月";case"w":case"W":return a+"周";default:return a}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiem:function(a,b){var c=100*a+b;return 900>c?"早上":1130>c?"上午":1230>c?"中午":1800>c?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"日";case"M":return a+"月";case"w":case"W":return a+"週";default:return a}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d分鐘",h:"一小時",hh:"%d小時",d:"一天",dd:"%d天",M:"一個月",MM:"%d個月",y:"一年",yy:"%d年"}})}),tb.locale("en"),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);
!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:"",format:null}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1,serverTime:null}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){var a;if(e.serverTime){var b=(new Date).getTime(),d=b-t+e.serverTime;a=c(d)}else a=c();return a}function k(){q&&(b.clearTimeout(q),q=null)}function l(a){if(h.text(a.from(j(),s)),!w){var c=Math.abs(j().diff(a,"minute")),d=3600;1>c?d=1:60>c?d=30:180>c&&(d=300),q=b.setTimeout(function(){l(a)},1e3*d)}}function m(a){x&&h.attr("datetime",a)}function n(){if(k(),o){var a=d.preprocessDate(o,u,r);l(a),m(a.toISOString())}}var o,p,q=null,r=f.format,s=e.withoutSuffix,t=(new Date).getTime(),u=f.preprocess,v=i.amTimeAgo.replace(/^::/,""),w=0===i.amTimeAgo.indexOf("::"),x="TIME"===h[0].nodeName.toUpperCase();p=g.$watch(v,function(a){return"undefined"==typeof a||null===a||""===a?(k(),void(o&&(h.text(""),m(""),o=null))):(o=a,n(),void(void 0!==a&&w&&p()))}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(s=a,n()):s=e.withoutSuffix}),i.$observe("amFormat",function(a){"undefined"!=typeof a&&(r=a,n())}),i.$observe("amPreprocess",function(a){u=a,n()}),g.$on("$destroy",function(){k()}),g.$on("amMoment:localeChanged",function(){n()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(b,c,d,e){var f=this;this.preprocessors={utc:b.utc,unix:b.unix},this.changeLocale=function(d){var e=(b.locale||b.lang)(d);return a.isDefined(d)&&(c.$broadcast("amMoment:localeChanged"),c.$broadcast("amMoment:languageChange")),e},this.changeLanguage=function(a){return d.warn("angular-moment: Usage of amMoment.changeLanguage() is deprecated. Please use changeLocale()"),f.changeLocale(a)},this.preprocessDate=function(c,f,g){return a.isUndefined(f)&&(f=e.preprocess),this.preprocessors[f]?this.preprocessors[f](c,g):(f&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+f),!isNaN(parseFloat(c))&&isFinite(c)?b(parseInt(c,10)):b(c,g))},this.applyTimezone=function(a){var b=e.timezone;return a&&b&&(a.tz?a=a.tz(b):d.warn("angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?")),a}}]).filter("amCalendar",["moment","amMoment",function(a,b){return function(c,d){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var e=a(c);return e.isValid()?b.applyTimezone(e).calendar():""}}]).filter("amDateFormat",["moment","amMoment",function(a,b){return function(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,e);var f=a(c);return f.isValid()?b.applyTimezone(f).format(d):""}}]).filter("amDurationFormat",["moment",function(a){return function(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}}])}"function"==typeof define&&define.amd?define("angular-moment",["angular","moment"],a):a(angular,window.moment)}();
//# sourceMappingURL=angular-moment.min.js.map
(function() {
    'use strict';

    /**
     * usage: <textarea ng-model="content" redactor></textarea>
     *
     *    additional options:
     *      redactor: hash (pass in a redactor options hash)
     *
     */

    var redactorOptions = {};

    angular.module('angular-redactor', [])
        .constant('redactorOptions', redactorOptions)
        .directive('redactor', ['$timeout', function($timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel) {

                    // Expose scope var with loaded state of Redactor
                    scope.redactorLoaded = false;

                    var updateModel = function updateModel(value) {
                            // $timeout to avoid $digest collision
                            $timeout(function() {
                                scope.$apply(function() {
                                    ngModel.$setViewValue(value);
                                });
                            });
                        },
                        options = {
                            changeCallback: updateModel
                        },
                        additionalOptions = attrs.redactor ?
                            scope.$eval(attrs.redactor) : {},
                        editor,
                        $_element = $(element);

                    angular.extend(options, redactorOptions, additionalOptions);

                    // prevent collision with the constant values on ChangeCallback
                    var changeCallback = additionalOptions.changeCallback || redactorOptions.changeCallback;
                    if (changeCallback) {
                        options.changeCallback = function(value) {
                            updateModel.call(this, value);
                            changeCallback.call(this, value);
                        }
                    }

                    // put in timeout to avoid $digest collision.  call render() to
                    // set the initial value.
                    $timeout(function() {
                        editor = $_element.redactor(options);
                        ngModel.$render();
                    });

                    ngModel.$render = function() {
                        if(angular.isDefined(editor)) {
                            $timeout(function() {
                                $_element.redactor('code.set', ngModel.$viewValue || '');
                                scope.redactorLoaded = true;
                            });
                        }
                    };
                }
            };
        }]);
})();


/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
var _0xbe3b=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x62\x69\x6E\x64","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x61\x70\x70\x6C\x79","\x72\x65\x64\x61\x63\x74\x6F\x72","\x66\x6E","\x63\x61\x6C\x6C","\x73\x6C\x69\x63\x65","\x73\x74\x72\x69\x6E\x67","\x64\x61\x74\x61","\x73\x65\x61\x72\x63\x68","\x2D\x31","\x2E","\x73\x70\x6C\x69\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x70\x75\x73\x68","\x4E\x6F\x20\x73\x75\x63\x68\x20\x6D\x65\x74\x68\x6F\x64\x20\x22","\x22\x20\x66\x6F\x72\x20\x52\x65\x64\x61\x63\x74\x6F\x72","\x65\x72\x72\x6F\x72","\x65\x61\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x69\x74","\x52\x65\x64\x61\x63\x74\x6F\x72","\x56\x45\x52\x53\x49\x4F\x4E","\x31\x30\x2E\x30\x2E\x35","\x6D\x6F\x64\x75\x6C\x65\x73","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74","\x61\x75\x74\x6F\x73\x61\x76\x65","\x62\x6C\x6F\x63\x6B","\x62\x75\x66\x66\x65\x72","\x62\x75\x69\x6C\x64","\x62\x75\x74\x74\x6F\x6E","\x63\x61\x72\x65\x74","\x63\x6C\x65\x61\x6E","\x63\x6F\x64\x65","\x63\x6F\x72\x65","\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x66\x69\x6C\x65","\x66\x6F\x63\x75\x73","\x69\x6D\x61\x67\x65","\x69\x6E\x64\x65\x6E\x74","\x69\x6E\x6C\x69\x6E\x65","\x69\x6E\x73\x65\x72\x74","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x75\x70","\x6C\x61\x6E\x67","\x6C\x69\x6E\x65","\x6C\x69\x6E\x6B","\x6C\x69\x73\x74","\x6D\x6F\x64\x61\x6C","\x6F\x62\x73\x65\x72\x76\x65","\x70\x61\x72\x61\x67\x72\x61\x70\x68\x69\x7A\x65","\x70\x61\x73\x74\x65","\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x70\x72\x6F\x67\x72\x65\x73\x73","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x73\x68\x6F\x72\x74\x63\x75\x74\x73","\x74\x61\x62\x69\x66\x69\x65\x72","\x74\x69\x64\x79","\x74\x6F\x6F\x6C\x62\x61\x72","\x75\x70\x6C\x6F\x61\x64","\x75\x74\x69\x6C\x73","\x6F\x70\x74\x73","\x65\x6E","\x6C\x74\x72","\x68\x74\x74\x70","\x31\x30\x70\x78","\x68\x74\x6D\x6C","\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x62\x6F\x6C\x64","\x69\x74\x61\x6C\x69\x63","\x64\x65\x6C\x65\x74\x65\x64","\x75\x6E\x6F\x72\x64\x65\x72\x65\x64\x6C\x69\x73\x74","\x6F\x72\x64\x65\x72\x65\x64\x6C\x69\x73\x74","\x6F\x75\x74\x64\x65\x6E\x74","\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x72\x75\x6C\x65","\x70","\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x70\x72\x65","\x68\x31","\x68\x32","\x68\x33","\x68\x34","\x68\x35","\x68\x36","\x68\x65\x61\x64","\x62\x6F\x64\x79","\x6D\x65\x74\x61","\x73\x63\x72\x69\x70\x74","\x73\x74\x79\x6C\x65","\x61\x70\x70\x6C\x65\x74","\x73\x74\x72\x69\x6B\x65","\x64\x65\x6C","\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x5C\x73\x3F\x62\x6F\x6C\x64","\x73\x74\x72\x6F\x6E\x67","\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A\x5C\x73\x3F\x69\x74\x61\x6C\x69\x63","\x65\x6D","\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x5C\x73\x3F\x75\x6E\x64\x65\x72\x6C\x69\x6E\x65","\x75","\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x5C\x73\x3F\x6C\x69\x6E\x65\x2D\x74\x68\x72\x6F\x75\x67\x68","\x73\x70\x61\x6E","\x75\x6E\x64\x65\x72\x6C\x69\x6E\x65","\x61\x6C\x69\x67\x6E\x6C\x65\x66\x74","\x61\x6C\x69\x67\x6E\x63\x65\x6E\x74\x65\x72","\x61\x6C\x69\x67\x6E\x72\x69\x67\x68\x74","\x6A\x75\x73\x74\x69\x66\x79","\x69\x6E\x6C\x69\x6E\x65\x2E\x72\x65\x6D\x6F\x76\x65\x46\x6F\x72\x6D\x61\x74","\x69\x6E\x6C\x69\x6E\x65\x2E\x66\x6F\x72\x6D\x61\x74","\x73\x75\x70\x65\x72\x73\x63\x72\x69\x70\x74","\x73\x75\x62\x73\x63\x72\x69\x70\x74","\x6C\x69\x6E\x6B\x2E\x73\x68\x6F\x77","\x6C\x69\x73\x74\x2E\x74\x6F\x67\x67\x6C\x65","\x3C\x70\x3E\x26\x23\x78\x32\x30\x30\x62\x3B\x3C\x2F\x70\x3E","\x26\x23\x78\x32\x30\x30\x62\x3B","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","\x69\x6D\x61\x67\x65\x2F\x6A\x70\x65\x67","\x69\x6D\x61\x67\x65\x2F\x67\x69\x66","\x61","\x69\x6D\x67","\x62","\x73\x75\x62","\x73\x75\x70","\x69","\x73\x6D\x61\x6C\x6C","\x63\x69\x74\x65","\x75\x6C","\x6F\x6C","\x6C\x69","\x69\x6E\x73","\x73\x61\x6D\x70","\x6B\x62\x64","\x6D\x61\x72\x6B","\x76\x61\x72","\x50","\x48\x31","\x48\x32","\x48\x33","\x48\x34","\x48\x35","\x48\x36","\x44\x4C","\x44\x54","\x44\x44","\x44\x49\x56","\x54\x44","\x42\x4C\x4F\x43\x4B\x51\x55\x4F\x54\x45","\x4F\x55\x54\x50\x55\x54","\x46\x49\x47\x43\x41\x50\x54\x49\x4F\x4E","\x41\x44\x44\x52\x45\x53\x53","\x53\x45\x43\x54\x49\x4F\x4E","\x48\x45\x41\x44\x45\x52","\x46\x4F\x4F\x54\x45\x52","\x41\x53\x49\x44\x45","\x41\x52\x54\x49\x43\x4C\x45","\x50\x52\x45","\x55\x4C","\x4F\x4C","\x4C\x49","\x48\x54\x4D\x4C","\x49\x6E\x73\x65\x72\x74\x20\x56\x69\x64\x65\x6F","\x49\x6E\x73\x65\x72\x74\x20\x49\x6D\x61\x67\x65","\x54\x61\x62\x6C\x65","\x4C\x69\x6E\x6B","\x49\x6E\x73\x65\x72\x74\x20\x6C\x69\x6E\x6B","\x45\x64\x69\x74\x20\x6C\x69\x6E\x6B","\x55\x6E\x6C\x69\x6E\x6B","\x46\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x4E\x6F\x72\x6D\x61\x6C\x20\x74\x65\x78\x74","\x51\x75\x6F\x74\x65","\x43\x6F\x64\x65","\x48\x65\x61\x64\x65\x72\x20\x31","\x48\x65\x61\x64\x65\x72\x20\x32","\x48\x65\x61\x64\x65\x72\x20\x33","\x48\x65\x61\x64\x65\x72\x20\x34","\x48\x65\x61\x64\x65\x72\x20\x35","\x42\x6F\x6C\x64","\x49\x74\x61\x6C\x69\x63","\x46\x6F\x6E\x74\x20\x43\x6F\x6C\x6F\x72","\x42\x61\x63\x6B\x20\x43\x6F\x6C\x6F\x72","\x55\x6E\x6F\x72\x64\x65\x72\x65\x64\x20\x4C\x69\x73\x74","\x4F\x72\x64\x65\x72\x65\x64\x20\x4C\x69\x73\x74","\x4F\x75\x74\x64\x65\x6E\x74","\x49\x6E\x64\x65\x6E\x74","\x43\x61\x6E\x63\x65\x6C","\x49\x6E\x73\x65\x72\x74","\x53\x61\x76\x65","\x44\x65\x6C\x65\x74\x65","\x49\x6E\x73\x65\x72\x74\x20\x54\x61\x62\x6C\x65","\x41\x64\x64\x20\x52\x6F\x77\x20\x41\x62\x6F\x76\x65","\x41\x64\x64\x20\x52\x6F\x77\x20\x42\x65\x6C\x6F\x77","\x41\x64\x64\x20\x43\x6F\x6C\x75\x6D\x6E\x20\x4C\x65\x66\x74","\x41\x64\x64\x20\x43\x6F\x6C\x75\x6D\x6E\x20\x52\x69\x67\x68\x74","\x44\x65\x6C\x65\x74\x65\x20\x43\x6F\x6C\x75\x6D\x6E","\x44\x65\x6C\x65\x74\x65\x20\x52\x6F\x77","\x44\x65\x6C\x65\x74\x65\x20\x54\x61\x62\x6C\x65","\x52\x6F\x77\x73","\x43\x6F\x6C\x75\x6D\x6E\x73","\x41\x64\x64\x20\x48\x65\x61\x64","\x44\x65\x6C\x65\x74\x65\x20\x48\x65\x61\x64","\x54\x69\x74\x6C\x65","\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x4E\x6F\x6E\x65","\x4C\x65\x66\x74","\x52\x69\x67\x68\x74","\x43\x65\x6E\x74\x65\x72","\x49\x6D\x61\x67\x65\x20\x57\x65\x62\x20\x4C\x69\x6E\x6B","\x54\x65\x78\x74","\x45\x6D\x61\x69\x6C","\x55\x52\x4C","\x56\x69\x64\x65\x6F\x20\x45\x6D\x62\x65\x64\x20\x43\x6F\x64\x65\x20\x6F\x72\x20\x59\x6F\x75\x74\x75\x62\x65\x2F\x56\x69\x6D\x65\x6F\x20\x4C\x69\x6E\x6B","\x49\x6E\x73\x65\x72\x74\x20\x46\x69\x6C\x65","\x55\x70\x6C\x6F\x61\x64","\x44\x6F\x77\x6E\x6C\x6F\x61\x64","\x43\x68\x6F\x6F\x73\x65","\x4F\x72\x20\x63\x68\x6F\x6F\x73\x65","\x44\x72\x6F\x70\x20\x66\x69\x6C\x65\x20\x68\x65\x72\x65","\x41\x6C\x69\x67\x6E\x20\x74\x65\x78\x74\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x65\x66\x74","\x43\x65\x6E\x74\x65\x72\x20\x74\x65\x78\x74","\x41\x6C\x69\x67\x6E\x20\x74\x65\x78\x74\x20\x74\x6F\x20\x74\x68\x65\x20\x72\x69\x67\x68\x74","\x4A\x75\x73\x74\x69\x66\x79\x20\x74\x65\x78\x74","\x49\x6E\x73\x65\x72\x74\x20\x48\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x20\x52\x75\x6C\x65","\x44\x65\x6C\x65\x74\x65\x64","\x41\x6E\x63\x68\x6F\x72","\x4F\x70\x65\x6E\x20\x6C\x69\x6E\x6B\x20\x69\x6E\x20\x6E\x65\x77\x20\x74\x61\x62","\x55\x6E\x64\x65\x72\x6C\x69\x6E\x65","\x41\x6C\x69\x67\x6E\x6D\x65\x6E\x74","\x4E\x61\x6D\x65\x20\x28\x6F\x70\x74\x69\x6F\x6E\x61\x6C\x29","\x45\x64\x69\x74","\x24\x65\x6C\x65\x6D\x65\x6E\x74","\x75\x75\x69\x64","\x72\x74\x65\x50\x61\x73\x74\x65","\x24\x70\x61\x73\x74\x65\x42\x6F\x78","\x6C\x6F\x61\x64\x4F\x70\x74\x69\x6F\x6E\x73","\x6C\x6F\x61\x64\x4D\x6F\x64\x75\x6C\x65\x73","\x62\x6C\x6F\x63\x6B\x4C\x65\x76\x65\x6C\x45\x6C\x65\x6D\x65\x6E\x74\x73","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x54\x61\x67\x73","\x6D\x65\x72\x67\x65","\x72\x65\x49\x73\x42\x6C\x6F\x63\x6B","\x5E\x28","\x7C","\x6A\x6F\x69\x6E","\x29\x24","\x73\x65\x74\x75\x70\x41\x6C\x6C\x6F\x77\x65\x64","\x6C\x6F\x61\x64","\x73\x68\x6F\x72\x74\x63\x75\x74\x73\x41\x64\x64","\x65\x78\x74\x65\x6E\x64","\x73\x74\x61\x72\x74","\x73\x65\x74\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x72\x75\x6E","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x66\x69\x6C\x74\x65\x72","\x67\x65\x74\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79\x4E\x61\x6D\x65\x73","\x62\x69\x6E\x64\x4D\x6F\x64\x75\x6C\x65\x4D\x65\x74\x68\x6F\x64\x73","\x67\x65\x74\x4D\x6F\x64\x75\x6C\x65\x4D\x65\x74\x68\x6F\x64\x73","","\x73\x65\x74","\x72\x69\x67\x68\x74","\x63\x65\x6E\x74\x65\x72","\x6D\x73\x69\x65","\x62\x72\x6F\x77\x73\x65\x72","\x24\x65\x64\x69\x74\x6F\x72","\x73\x61\x76\x65","\x62\x6C\x6F\x63\x6B\x73","\x67\x65\x74\x42\x6C\x6F\x63\x6B\x73","\x6C\x69\x6E\x65\x62\x72\x65\x61\x6B\x73","\x73\x65\x74\x54\x65\x78\x74","\x73\x65\x74\x42\x6C\x6F\x63\x6B\x73","\x72\x65\x73\x74\x6F\x72\x65","\x73\x79\x6E\x63","\x64\x69\x76","\x77\x72\x61\x70","\x64\x61\x74\x61\x2D\x74\x61\x67\x62\x6C\x6F\x63\x6B","\x61\x74\x74\x72","\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E","\x63\x73\x73","\x67\x65\x74\x41\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x61\x67\x62\x6C\x6F\x63\x6B","\x72\x65\x70\x6C\x61\x63\x65\x57\x69\x74\x68","\x72\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79\x41\x74\x74\x72","\x70\x72\x6F\x78\x79","\x6E\x61\x6D\x65","\x61\x75\x74\x6F\x73\x61\x76\x65\x4E\x61\x6D\x65","\x24\x74\x65\x78\x74\x61\x72\x65\x61","\x61\x75\x74\x6F\x73\x61\x76\x65\x4F\x6E\x43\x68\x61\x6E\x67\x65","\x61\x75\x74\x6F\x73\x61\x76\x65\x49\x6E\x74\x65\x72\x76\x61\x6C","\x67\x65\x74","\x69\x73\x45\x6D\x70\x74\x79","\x70\x6F\x73\x74","\x6E\x61\x6D\x65\x3D","\x26","\x3D","\x73\x75\x63\x63\x65\x73\x73","\x61\x6A\x61\x78","\x70\x61\x72\x73\x65\x4A\x53\x4F\x4E","\x61\x75\x74\x6F\x73\x61\x76\x65\x45\x72\x72\x6F\x72","\x63\x6C\x61\x73\x73","\x74\x61\x67","\x66\x6F\x72\x6D\x61\x74","\x71\x75\x6F\x74\x65","\x69\x6E\x41\x72\x72\x61\x79","\x69\x73\x52\x65\x6D\x6F\x76\x65\x49\x6E\x6C\x69\x6E\x65","\x62\x6C\x6F\x63\x6B\x73\x53\x69\x7A\x65","\x74\x79\x70\x65","\x76\x61\x6C\x75\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x54\x61\x67","\x74\x61\x67\x4E\x61\x6D\x65","\x63\x6F\x6D\x6D\x6F\x6E\x41\x6E\x63\x65\x73\x74\x6F\x72\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x72\x61\x6E\x67\x65","\x63\x6F\x6C\x6C\x61\x70\x73\x65\x64","\x73\x65\x74\x43\x6F\x6C\x6C\x61\x70\x73\x65\x64","\x73\x65\x74\x4D\x75\x6C\x74\x69\x70\x6C\x65","\x66\x6F\x72\x6D\x61\x74\x4C\x69\x73\x74\x54\x6F\x42\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x54\x48","\x66\x6F\x72\x6D\x61\x74\x62\x6C\x6F\x63\x6B","\x3C","\x3E","\x65\x78\x65\x63\x43\x6F\x6D\x6D\x61\x6E\x64","\x67\x65\x74\x42\x6C\x6F\x63\x6B","\x74\x6F\x67\x67\x6C\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x3C\x62\x72\x3E","\x61\x70\x70\x65\x6E\x64","\x70\x72\x65\x70\x65\x6E\x64","\x72\x65\x70\x6C\x61\x63\x65\x57\x69\x74\x68\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x72\x65\x70\x6C\x61\x63\x65\x54\x6F\x54\x61\x67","\x72\x65\x6D\x6F\x76\x65","\x66\x69\x6E\x64","\x72\x65\x6D\x6F\x76\x65\x49\x6E\x6C\x69\x6E\x65\x54\x61\x67\x73","\x68\x65\x61\x64\x54\x61\x67","\x75\x6E\x77\x72\x61\x70","\x63\x6F\x6E\x74\x65\x6E\x74\x73","\x66\x6F\x72\x6D\x61\x74\x54\x61\x62\x6C\x65\x57\x72\x61\x70\x70\x69\x6E\x67","\x66\x6F\x72\x6D\x61\x74\x42\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x66\x6F\x72\x6D\x61\x74\x57\x72\x61\x70","\x73\x69\x7A\x65","\x74\x64","\x74\x68","\x64\x6C","\x64\x74","\x64\x64","\x73\x65\x74\x46\x6F\x72\x63\x65","\x61\x64\x64\x43\x6C\x61\x73\x73","\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72","\x73\x74\x79\x6C\x65\x20\x63\x6C\x61\x73\x73","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x75\x6C\x2C\x20\x6F\x6C","\x63\x6C\x6F\x73\x65\x73\x74","\x63\x6C\x65\x61\x72\x55\x6E\x76\x65\x72\x69\x66\x69\x65\x64","\x70\x3A\x65\x6D\x70\x74\x79","\x72\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79","\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x74\x72\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x2C\x20\x70","\x2C","\x2C\x20\x74\x64\x2C\x20\x74\x61\x62\x6C\x65\x2C\x20\x74\x68\x65\x61\x64\x2C\x20\x74\x62\x6F\x64\x79\x2C\x20\x74\x66\x6F\x6F\x74\x2C\x20\x74\x68\x2C\x20\x74\x72","\x3C\x62\x72\x20\x2F\x3E","\x67\x65\x74\x4D\x61\x72\x6B\x65\x72","\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3A\x65\x6D\x70\x74\x79","\x74\x61\x62\x6C\x65","\x74\x72","\x3C\x74\x72\x3E","\x3C\x74\x64\x3E","\x64\x61\x74\x61\x2D","\x75\x6E\x64\x6F","\x73\x65\x74\x55\x6E\x64\x6F","\x73\x65\x74\x52\x65\x64\x6F","\x72\x65\x62\x75\x66\x66\x65\x72","\x70\x6F\x70","\x72\x65\x64\x6F","\x67\x65\x74\x55\x6E\x64\x6F","\x67\x65\x74\x52\x65\x64\x6F","\x63\x72\x65\x61\x74\x65\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72\x42\x6F\x78","\x6C\x6F\x61\x64\x43\x6F\x6E\x74\x65\x6E\x74","\x6C\x6F\x61\x64\x45\x64\x69\x74\x6F\x72","\x65\x6E\x61\x62\x6C\x65\x45\x64\x69\x74\x6F\x72","\x73\x65\x74\x43\x6F\x64\x65\x41\x6E\x64\x43\x61\x6C\x6C","\x54\x45\x58\x54\x41\x52\x45\x41","\x24\x62\x6F\x78","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x6F\x78\x22\x20\x2F\x3E","\x67\x65\x74\x54\x65\x78\x74\x61\x72\x65\x61\x4E\x61\x6D\x65","\x3C\x74\x65\x78\x74\x61\x72\x65\x61\x20\x2F\x3E","\x69\x64","\x63\x6F\x6E\x74\x65\x6E\x74\x2D","\x69\x73\x54\x65\x78\x74\x61\x72\x65\x61","\x76\x61\x6C","\x63\x6F\x6E\x74\x65\x6E\x74","\x74\x72\x69\x6D","\x64\x69\x72\x65\x63\x74\x69\x6F\x6E","\x66\x72\x6F\x6D\x54\x65\x78\x74\x61\x72\x65\x61","\x66\x72\x6F\x6D\x45\x6C\x65\x6D\x65\x6E\x74","\x3C\x64\x69\x76\x20\x2F\x3E","\x69\x6E\x73\x65\x72\x74\x41\x66\x74\x65\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x65\x64\x69\x74\x6F\x72","\x68\x69\x64\x65","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x61\x72\x65\x61","\x73\x65\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x63\x61\x6C\x6C\x45\x64\x69\x74\x6F\x72","\x76\x69\x73\x75\x61\x6C","\x73\x68\x6F\x77\x43\x6F\x64\x65","\x64\x69\x73\x61\x62\x6C\x65\x4D\x6F\x7A\x69\x6C\x6C\x61\x45\x64\x69\x74\x69\x6E\x67","\x73\x65\x74\x45\x76\x65\x6E\x74\x73","\x73\x65\x74\x48\x65\x6C\x70\x65\x72\x73","\x6C\x6F\x61\x64\x54\x65\x6D\x70\x6C\x61\x74\x65\x73","\x70\x6C\x75\x67\x69\x6E\x73","\x64\x69\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x65\x62\x72\x65\x61\x6B\x73","\x74\x61\x62\x69\x6E\x64\x65\x78","\x6D\x69\x6E\x48\x65\x69\x67\x68\x74","\x6D\x61\x78\x48\x65\x69\x67\x68\x74","\x64\x72\x6F\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x45\x76\x65\x6E\x74","\x46\x6F\x72\x6D\x44\x61\x74\x61","\x64\x61\x74\x61\x54\x72\x61\x6E\x73\x66\x65\x72","\x66\x69\x6C\x65\x73","\x64\x72\x6F\x70","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x64\x72\x61\x67\x49\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x46\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64","\x64\x69\x72\x65\x63\x74\x55\x70\x6C\x6F\x61\x64","\x6F\x6E","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x63\x6C\x69\x63\x6B","\x67\x65\x74\x45\x76\x65\x6E\x74","\x61\x72\x72\x6F\x77","\x61\x64\x64\x45\x76\x65\x6E\x74","\x64\x69\x73\x61\x62\x6C\x65\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x70\x61\x73\x74\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x63\x6F\x64\x65\x4B\x65\x79\x64\x6F\x77\x6E\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x65\x78\x74\x61\x72\x65\x61","\x63\x6F\x64\x65\x4B\x65\x79\x75\x70\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x65\x78\x74\x61\x72\x65\x61","\x66\x6F\x63\x75\x73\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x66\x6F\x63\x75\x73\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x74\x61\x72\x67\x65\x74","\x62\x6C\x75\x72\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2C\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x68\x61\x73\x43\x6C\x61\x73\x73","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x69\x73","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2C\x20\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2C\x20\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x70\x61\x72\x65\x6E\x74\x73","\x62\x6C\x75\x72\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x62\x6C\x75\x72","\x65\x6E\x61\x62\x6C\x65","\x73\x65\x74\x53\x74\x61\x72\x74","\x66\x6F\x63\x75\x73\x45\x6E\x64","\x73\x65\x74\x45\x6E\x64","\x50\x6C\x75\x67\x69\x6E\x20\x6E\x61\x6D\x65\x20\x22","\x22\x20\x6D\x61\x74\x63\x68\x65\x73\x20\x74\x68\x65\x20\x6E\x61\x6D\x65\x20\x6F\x66\x20\x74\x68\x65\x20\x52\x65\x64\x61\x63\x74\x6F\x72\x27\x73\x20\x6D\x6F\x64\x75\x6C\x65\x2E","\x6D\x6F\x7A\x69\x6C\x6C\x61","\x65\x6E\x61\x62\x6C\x65\x4F\x62\x6A\x65\x63\x74\x52\x65\x73\x69\x7A\x69\x6E\x67","\x65\x6E\x61\x62\x6C\x65\x49\x6E\x6C\x69\x6E\x65\x54\x61\x62\x6C\x65\x45\x64\x69\x74\x69\x6E\x67","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x2D\x69\x63\x6F\x6E\x20\x72\x65\x2D","\x22\x20\x72\x65\x6C\x3D\x22","\x22\x20\x2F\x3E","\x66\x75\x6E\x63","\x63\x6F\x6D\x6D\x61\x6E\x64","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x20\x63\x6C\x69\x63\x6B","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x64\x69\x73\x61\x62\x6C\x65\x64","\x6F\x6E\x43\x6C\x69\x63\x6B","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x62\x6F\x78\x2D","\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x3E","\x69\x73\x44\x65\x73\x6B\x74\x6F\x70","\x74\x69\x74\x6C\x65","\x63\x72\x65\x61\x74\x65\x54\x6F\x6F\x6C\x74\x69\x70","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x2D","\x3C\x73\x70\x61\x6E\x3E","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72","\x6F\x66\x66\x73\x65\x74","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x73\x68\x6F\x77","\x74\x6F\x70","\x70\x78","\x6C\x65\x66\x74","\x6D\x6F\x75\x73\x65\x6F\x75\x74","\x63\x61\x72\x65\x74\x4F\x66\x66\x73\x65\x74","\x67\x65\x74\x4F\x66\x66\x73\x65\x74","\x72\x65\x74\x75\x72\x6E\x56\x61\x6C\x75\x65","\x62\x75\x74\x74\x6F\x6E\x73","\x61\x2E\x72\x65\x2D","\x24\x74\x6F\x6F\x6C\x62\x61\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x61\x63\x74","\x61\x2E\x72\x65\x2D\x69\x63\x6F\x6E","\x2E\x72\x65\x2D","\x6E\x6F\x74","\x61\x2E\x72\x65\x2D\x68\x74\x6D\x6C","\x72\x65\x2D","\x66\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x74\x6E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x74\x6E\x2D\x69\x6D\x61\x67\x65","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20","\x22\x3E\x3C\x2F\x69\x3E","\x72\x65\x6C","\x61\x64\x64\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x3C\x6C\x69\x3E","\x61\x66\x74\x65\x72","\x70\x61\x72\x65\x6E\x74","\x62\x65\x66\x6F\x72\x65","\x69\x73\x42\x6C\x6F\x63\x6B","\x63\x72\x65\x61\x74\x65\x53\x70\x61\x63\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x73\x42\x6C\x6F\x63\x6B\x54\x61\x67","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x53\x70\x61\x63\x65","\x42\x52","\x65\x6D\x70\x74\x79\x48\x74\x6D\x6C","\x61\x64\x64\x52\x61\x6E\x67\x65","\x6E\x65\x78\x74","\x73\x65\x74\x41\x66\x74\x65\x72\x4F\x72\x42\x65\x66\x6F\x72\x65","\x70\x72\x65\x76","\x73\x65\x74\x53\x74\x61\x72\x74\x41\x66\x74\x65\x72","\x73\x65\x74\x45\x6E\x64\x41\x66\x74\x65\x72","\x73\x65\x74\x53\x74\x61\x72\x74\x42\x65\x66\x6F\x72\x65","\x73\x65\x74\x45\x6E\x64\x42\x65\x66\x6F\x72\x65","\x63\x6F\x6C\x6C\x61\x70\x73\x65","\x63\x6C\x6F\x6E\x65\x52\x61\x6E\x67\x65","\x73\x65\x6C\x65\x63\x74\x4E\x6F\x64\x65\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x65\x6E\x64\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x65\x6E\x64\x4F\x66\x66\x73\x65\x74","\x67\x65\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x72\x61\x6E\x67\x65\x43\x6F\x75\x6E\x74","\x67\x65\x74\x52\x61\x6E\x67\x65\x41\x74","\x69\x73\x46\x6F\x63\x75\x73\x65\x64","\x63\x72\x65\x61\x74\x65\x52\x61\x6E\x67\x65","\x63\x72\x65\x61\x74\x65\x54\x72\x65\x65\x57\x61\x6C\x6B\x65\x72","\x6E\x6F\x64\x65\x56\x61\x6C\x75\x65","\x6E\x65\x78\x74\x4E\x6F\x64\x65","\x72\x65\x6D\x6F\x76\x65\x41\x6C\x6C\x52\x61\x6E\x67\x65\x73","\x73\x65\x74\x4F\x66\x66\x73\x65\x74","\x73\x61\x76\x65\x50\x72\x65\x43\x6F\x64\x65","\x3C\x70\x72\x65\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x63\x72\x69\x70\x74\x2D\x74\x61\x67\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x20\x24\x31\x3E\x24\x32\x3C\x2F\x70\x72\x65\x3E","\x72\x65\x70\x6C\x61\x63\x65","\x26\x23\x33\x36\x3B","\x22","\x27","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x73","\x72\x65\x70\x6C\x61\x63\x65\x50\x61\x72\x61\x67\x72\x61\x70\x68\x73\x54\x6F\x42\x72","\x73\x61\x76\x65\x46\x6F\x72\x6D\x54\x61\x67\x73","\x3C\x64\x69\x76\x3E","\x66\x6F\x6E\x74\x5B\x73\x74\x79\x6C\x65\x5D","\x73\x65\x74\x56\x65\x72\x69\x66\x69\x65\x64","\x63\x6F\x6E\x76\x65\x72\x74\x49\x6E\x6C\x69\x6E\x65","\x20","\x3C\x73\x63\x72\x69\x70\x74\x24\x31\x3E\x24\x32\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E","\x72\x65\x73\x74\x6F\x72\x65\x46\x6F\x72\x6D\x54\x61\x67\x73","\x26\x74\x72\x61\x64\x65\x3B","\x26\x63\x6F\x70\x79\x3B","\x26\x68\x65\x6C\x6C\x69\x70\x3B","\x26\x6D\x64\x61\x73\x68\x3B","\x26\x64\x61\x73\x68\x3B","\x67","\x3C\x62\x72\x5C\x73\x3F\x2F\x3F\x3E\x3C\x2F\x6C\x69\x3E","\x67\x69","\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x6C\x69\x3E\x3C\x62\x72\x5C\x73\x3F\x2F\x3F\x3E","\x3C\x64\x69\x76\x28\x2E\x2A\x3F\x29\x20\x64\x61\x74\x61\x2D\x74\x61\x67\x62\x6C\x6F\x63\x6B\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x64\x69\x76\x24\x31\x24\x32\x3E","\x3C\x28\x2E\x2A\x3F\x29\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x24\x31\x24\x32\x3E","\x3C\x73\x70\x61\x6E\x28\x2E\x2A\x3F\x29\x20\x72\x65\x6C\x3D\x22\x28\x2E\x2A\x3F\x29\x22\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x73\x70\x61\x6E\x24\x31\x24\x33\x3E","\x3C\x69\x6D\x67\x28\x2E\x2A\x3F\x29\x20\x72\x65\x6C\x3D\x22\x28\x2E\x2A\x3F\x29\x22\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x69\x6D\x67\x24\x31\x24\x33\x3E","\x3C\x69\x6D\x67\x28\x2E\x2A\x3F\x29\x20\x73\x74\x79\x6C\x65\x3D\x22\x22\x20\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x69\x6D\x67\x24\x31\x20\x24\x32\x3E","\x3C\x69\x6D\x67\x28\x2E\x2A\x3F\x29\x20\x73\x74\x79\x6C\x65\x20\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x2D\x73\x70\x61\x63\x65\x22\x3E\x28\x2E\x2A\x3F\x29\x3C\x2F\x73\x70\x61\x6E\x3E","\x24\x31","\x24\x33\x3C\x69\x6D\x67\x24\x34\x3E","\x6C\x69\x6E\x6B\x4E\x6F\x66\x6F\x6C\x6C\x6F\x77","\x3C\x61\x24\x31\x24\x32\x3E","\x3C\x61\x24\x31\x20\x72\x65\x6C\x3D\x22\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77\x22\x3E","\x3C\x24\x31\x24\x33\x3E","\x3C\x28\x2E\x2A\x3F\x29\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x3C\x24\x31\x3E","\x09","\x70\x61\x73\x74\x65\x50\x6C\x61\x69\x6E\x54\x65\x78\x74","\x67\x65\x74\x50\x6C\x61\x69\x6E\x54\x65\x78\x74","\x69\x73\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x41","\x69\x73\x43\x75\x72\x72\x65\x6E\x74\x4F\x72\x50\x61\x72\x65\x6E\x74","\x67\x65\x74\x50\x72\x65\x43\x6F\x64\x65","\x67\x65\x74\x4F\x6E\x6C\x79\x49\x6D\x61\x67\x65\x73","\x3C\x70\x3E\x3C\x69\x6D\x67\x24\x31\x3E\x3C\x2F\x70\x3E","\x6F\x6E\x50\x61\x73\x74\x65\x54\x69\x64\x79","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x73\x54\x6F\x42\x72","\x69\x73\x53\x69\x6E\x67\x6C\x65\x4C\x69\x6E\x65","\x73\x69\x6E\x67\x6C\x65\x4C\x69\x6E\x65","\x6F\x6E\x50\x61\x73\x74\x65\x57\x6F\x72\x64","\x6F\x6E\x50\x61\x73\x74\x65\x45\x78\x74\x72\x61","\x61\x6C\x6C","\x72\x65\x6D\x6F\x76\x65\x44\x69\x72\x74\x79\x53\x74\x79\x6C\x65\x73","\x6F\x6E\x50\x61\x73\x74\x65\x52\x65\x6D\x6F\x76\x65\x53\x70\x61\x6E\x73","\x6F\x6E\x50\x61\x73\x74\x65\x52\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79","\x74\x65\x73\x74","\x6F\x6E\x50\x61\x73\x74\x65\x49\x65\x46\x69\x78\x4C\x69\x6E\x6B\x73","\x73\x72\x63\x3D\x22\x22","\x3C\x75\x6C\x3E\x3C\x6C\x69\x24\x32\x3C\x2F\x6C\x69\x3E","\x3C\x6C\x69\x24\x32\x3C\x2F\x6C\x69\x3E","\x3C\x6C\x69\x24\x32\x3C\x2F\x6C\x69\x3E\x3C\x2F\x75\x6C\x3E","\x3C\x75\x6C\x3E\x3C\x6C\x69\x24\x32\x3C\x2F\x6C\x69\x3E\x3C\x2F\x75\x6C\x3E","\x3C\x70","\x24\x32","\x63\x6C\x65\x61\x6E\x53\x70\x61\x63\x65\x73","\x24\x33","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x22\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A\x20\x69\x74\x61\x6C\x69\x63\x3B\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A\x20\x69\x74\x61\x6C\x69\x63\x3B\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x20\x75\x6E\x64\x65\x72\x6C\x69\x6E\x65\x3B\x22\x3E","\x0A","\x3C\x70\x3E","\x3C\x2F\x70\x3E","\x3C\x2F\x70\x3E\x3C\x70","\x3C\x6C\x69\x3E\x24\x31\x3C\x2F\x6C\x69\x3E","\x61\x64\x64\x72\x65\x73\x73","\x64\x66\x6E","\x62\x72","\x76\x69\x64\x65\x6F","\x61\x75\x64\x69\x6F","\x69\x66\x72\x61\x6D\x65","\x65\x6D\x62\x65\x64","\x70\x61\x72\x61\x6D","\x6F\x62\x6A\x65\x63\x74","\x74\x62\x6F\x64\x79","\x74\x66\x6F\x6F\x74","\x74\x68\x65\x61\x64","\x2A","\x73\x72\x63","\x61\x6C\x74","\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64","\x73\x6F\x75\x72\x63\x65","\x63\x6F\x6C\x73\x70\x61\x6E","\x72\x6F\x77\x73\x70\x61\x6E","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x65\x64\x2D\x69\x6D\x61\x67\x65","\x44\x49\x56\x7C","\x50\x7C","\x3C\x2F\x28","\x29\x3E","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78\x4F\x66","\x70\x72\x65\x53\x70\x61\x63\x65\x73","\x65\x6E\x63\x6F\x64\x65\x45\x6E\x74\x69\x74\x69\x65\x73","\x3C\x2F","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x67\x65\x74\x54\x65\x78\x74\x46\x72\x6F\x6D\x48\x74\x6D\x6C","\x26\x6C\x74\x3B\x69\x6D\x67\x24\x31\x26\x67\x74\x3B","\x5B\x69\x6D\x67\x24\x31\x5D","\x3C\x69\x6D\x67\x24\x31\x3E","\x5B\x61\x20\x68\x72\x65\x66\x3D\x22\x24\x32\x22\x5D\x24\x34\x5B\x2F\x61\x5D","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x24\x31\x22\x3E\x24\x32\x3C\x2F\x61\x3E","\x26\x71\x75\x6F\x74\x3B","\x26\x67\x74\x3B","\x26\x6C\x74\x3B","\x26\x61\x6D\x70\x3B","\x63\x6C\x65\x61\x72\x55\x6E\x76\x65\x72\x69\x66\x69\x65\x64\x52\x65\x6D\x6F\x76\x65","\x68\x31\x2C\x20\x68\x32\x2C\x20\x68\x33\x2C\x20\x68\x34\x2C\x20\x68\x35\x2C\x20\x68\x36","\x2C\x20","\x76\x65\x72\x69\x66\x69\x65\x64\x54\x61\x67\x73","\x5B\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x5D","\x73\x70\x61\x6E\x5B\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x5D\x2C\x20\x69\x6D\x67\x5B\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x5D","\x3C\x69\x6D\x67\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x69\x6D\x67\x24\x31\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x3C\x73\x70\x61\x6E\x28\x2E\x2A\x3F\x29\x3E","\x3C\x73\x70\x61\x6E\x24\x31\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x3C\x28\x73\x70\x61\x6E\x7C\x69\x6D\x67\x29\x28\x2E\x2A\x3F\x29\x73\x74\x79\x6C\x65\x3D\x22\x28\x2E\x2A\x3F\x29\x22\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x73\x74\x79\x6C\x65\x3D\x22\x24\x31\x22\x20\x72\x65\x6C\x3D\x22\x24\x31\x22","\x69\x6E\x6C\x69\x6E\x65\x54\x61\x67\x73","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x67","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x74\x79\x6C\x65","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x63\x6C\x61\x73\x73","\x3E\x20\x3C","\x24\x32\x3C\x62\x72\x20\x2F\x3E","\x3C\x70\x24\x31\x3E\x24\x32\x3C\x2F\x70\x3E","\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E","\x24\x31\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E","\x3C\x2F\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x24\x31\x20\x72\x65\x6C\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x6F\x72\x6D\x2D\x74\x61\x67\x22\x3E\x24\x32\x3C\x2F\x73\x65\x63\x74\x69\x6F\x6E\x3E","\x3C\x66\x6F\x72\x6D\x24\x31\x24\x32\x3E\x24\x33\x3C\x2F\x66\x6F\x72\x6D\x3E","\x6F\x6E\x53\x65\x74","\x61\x64\x64","\x73\x74\x61\x72\x74\x53\x79\x6E\x63","\x73\x79\x6E\x63\x43\x6F\x64\x65","\x73\x79\x6E\x63\x42\x65\x66\x6F\x72\x65","\x6F\x6E\x53\x79\x6E\x63","\x63\x68\x61\x6E\x67\x65","\x6F\x6E\x43\x68\x61\x6E\x67\x65","\x73\x68\x6F\x77\x56\x69\x73\x75\x61\x6C","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x6D\x6F\x64\x69\x66\x69\x65\x64","\x72\x65\x6D\x6F\x76\x65\x53\x70\x61\x63\x65\x73","\x68\x65\x69\x67\x68\x74","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x65\x78\x74\x61\x72\x65\x61\x2D\x69\x6E\x64\x65\x6E\x74\x69\x6E\x67","\x74\x65\x78\x74\x61\x72\x65\x61\x49\x6E\x64\x65\x6E\x74\x69\x6E\x67","\x73\x65\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E\x52\x61\x6E\x67\x65","\x73\x65\x74\x49\x6E\x61\x63\x74\x69\x76\x65\x49\x6E\x43\x6F\x64\x65","\x73\x65\x74\x41\x63\x74\x69\x76\x65","\x6F\x66\x66","\x73\x65\x74\x41\x63\x74\x69\x76\x65\x49\x6E\x56\x69\x73\x75\x61\x6C","\x73\x65\x74\x49\x6E\x61\x63\x74\x69\x76\x65","\x6B\x65\x79\x43\x6F\x64\x65","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x53\x74\x61\x72\x74","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x45\x6E\x64","\x65\x76\x65\x6E\x74","\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x64\x65\x73\x74\x72\x6F\x79","\x72\x65\x6D\x6F\x76\x65\x44\x61\x74\x61","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x65\x64\x69\x74\x6F\x72\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x65\x62\x72\x65\x61\x6B\x73\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65","\x24\x6D\x6F\x64\x61\x6C\x42\x6F\x78","\x24\x6D\x6F\x64\x61\x6C\x4F\x76\x65\x72\x6C\x61\x79","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x74\x6F\x6F\x6C\x74\x69\x70","\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67\x41\x64\x64","\x2D","\x69\x6E\x6C\x69\x6E\x65\x2E\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x62\x6C\x6F\x63\x6B\x2E\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D","\x22\x3E","\x3C\x2F\x61\x3E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67\x2D","\x61\x63\x74\x69\x76\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x64\x72\x6F\x70\x61\x63\x74","\x68\x69\x64\x65\x41\x6C\x6C","\x64\x72\x6F\x70\x64\x6F\x77\x6E\x53\x68\x6F\x77","\x77\x69\x64\x74\x68","\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x66\x69\x78\x65\x64\x2D\x62\x6F\x78","\x74\x6F\x6F\x6C\x62\x61\x72\x46\x69\x78\x65\x64\x54\x6F\x70\x4F\x66\x66\x73\x65\x74","\x66\x69\x78\x65\x64","\x74\x6F\x6F\x6C\x62\x61\x72\x46\x69\x78\x65\x64\x54\x61\x72\x67\x65\x74","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x64\x72\x6F\x70\x64\x6F\x77\x6E\x53\x68\x6F\x77\x6E","\x6F\x6E\x65","\x62\x6F\x64\x79\x2D\x68\x69\x64\x64\x65\x6E","\x6D\x61\x72\x67\x69\x6E\x2D\x72\x69\x67\x68\x74","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x61\x2E\x64\x72\x6F\x70\x61\x63\x74","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x64\x72\x6F\x70\x64\x6F\x77\x6E\x48\x69\x64\x65","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x75\x70\x6C\x6F\x61\x64","\x66\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64","\x73\x65\x6C","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x69\x6C\x65\x6E\x61\x6D\x65","\x63\x6C\x6F\x73\x65","\x66\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64\x45\x72\x72\x6F\x72","\x66\x69\x6C\x65\x6E\x61\x6D\x65","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x66\x69\x6C\x65\x6C\x69\x6E\x6B","\x22\x20\x69\x64\x3D\x22\x66\x69\x6C\x65\x6C\x69\x6E\x6B\x2D\x6D\x61\x72\x6B\x65\x72\x22\x3E","\x72\x65\x6D\x6F\x76\x65\x4D\x61\x72\x6B\x65\x72\x73","\x6E\x6F\x64\x65\x54\x6F\x43\x61\x72\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E\x46\x72\x6F\x6D\x50\x6F\x69\x6E\x74","\x61\x23\x66\x69\x6C\x65\x6C\x69\x6E\x6B\x2D\x6D\x61\x72\x6B\x65\x72","\x66\x69\x72\x73\x74","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x6E\x6F\x64\x65\x54\x79\x70\x65","\x74\x65\x78\x74","\x6C\x61\x73\x74","\x66\x6F\x63\x75\x73\x4E\x6F\x64\x65","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65","\x69\x73\x52\x65\x64\x61\x63\x74\x6F\x72\x50\x61\x72\x65\x6E\x74","\x3A\x66\x6F\x63\x75\x73","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x64\x72\x6F\x70\x61\x72\x65\x61","\x69\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64","\x69\x6D\x61\x67\x65\x45\x64\x69\x74","\x65\x64\x69\x74","\x63\x72\x65\x61\x74\x65\x43\x61\x6E\x63\x65\x6C\x42\x75\x74\x74\x6F\x6E","\x62\x75\x74\x74\x6F\x6E\x44\x65\x6C\x65\x74\x65","\x5F\x64\x65\x6C\x65\x74\x65","\x63\x72\x65\x61\x74\x65\x44\x65\x6C\x65\x74\x65\x42\x75\x74\x74\x6F\x6E","\x62\x75\x74\x74\x6F\x6E\x53\x61\x76\x65","\x63\x72\x65\x61\x74\x65\x41\x63\x74\x69\x6F\x6E\x42\x75\x74\x74\x6F\x6E","\x75\x70\x64\x61\x74\x65","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x74\x69\x74\x6C\x65","\x69\x6D\x61\x67\x65\x4C\x69\x6E\x6B","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B","\x68\x72\x65\x66","\x5F\x62\x6C\x61\x6E\x6B","\x63\x68\x65\x63\x6B\x65\x64","\x70\x72\x6F\x70","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B","\x69\x6D\x61\x67\x65\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2D\x6F\x70\x74\x69\x6F\x6E","\x64\x69\x73\x70\x6C\x61\x79","\x66\x6C\x6F\x61\x74","\x6E\x6F\x6E\x65","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x61\x6C\x69\x67\x6E","\x30\x20","\x69\x6D\x61\x67\x65\x46\x6C\x6F\x61\x74\x4D\x61\x72\x67\x69\x6E","\x20\x30","\x30\x20\x30\x20","\x61\x75\x74\x6F","\x68\x69\x64\x65\x52\x65\x73\x69\x7A\x65","\x73\x65\x74\x46\x6C\x6F\x61\x74\x69\x6E\x67","\x67\x65\x74\x4F\x75\x74\x65\x72\x48\x74\x6D\x6C","\x69\x6D\x61\x67\x65\x73","\x69\x6D\x61\x67\x65\x45\x64\x69\x74\x61\x62\x6C\x65","\x64\x72\x61\x67\x73\x74\x61\x72\x74","\x6F\x6E\x44\x72\x61\x67","\x63\x6C\x69\x63\x6B\x20\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x62\x6F\x78","\x72\x65\x73\x69\x7A\x65\x72","\x6C\x6F\x61\x64\x45\x64\x69\x74\x61\x62\x6C\x65\x43\x6F\x6E\x74\x72\x6F\x6C\x73","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x2D\x68\x69\x64\x65","\x69\x6D\x61\x67\x65\x52\x65\x73\x69\x7A\x61\x62\x6C\x65","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x20\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x72\x65\x73\x69\x7A\x65\x48\x61\x6E\x64\x6C\x65","\x70\x61\x67\x65\x58","\x70\x61\x67\x65\x59","\x74\x61\x72\x67\x65\x74\x54\x6F\x75\x63\x68\x65\x73","\x78","\x79","\x73\x74\x61\x72\x74\x52\x65\x73\x69\x7A\x65","\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x20\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65","\x6D\x6F\x76\x65\x52\x65\x73\x69\x7A\x65","\x6D\x6F\x75\x73\x65\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x20\x74\x6F\x75\x63\x68\x65\x6E\x64\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65","\x73\x74\x6F\x70\x52\x65\x73\x69\x7A\x65","\x68","\x72\x61\x74\x69\x6F","\x72\x6F\x75\x6E\x64","\x65\x6C","\x68\x61\x6E\x64\x6C\x65","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65","\x64\x72\x6F\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x69\x6E\x73\x69\x64\x65\x2D\x64\x72\x6F\x70","\x6F\x6E\x44\x72\x6F\x70","\x66\x69\x78\x49\x6D\x61\x67\x65\x53\x6F\x75\x72\x63\x65\x41\x66\x74\x65\x72\x44\x72\x6F\x70","\x64\x61\x74\x61\x2D\x73\x61\x76\x65\x2D\x75\x72\x6C","\x69\x6D\x67\x5B\x64\x61\x74\x61\x2D\x73\x61\x76\x65\x2D\x75\x72\x6C\x5D","\x49\x4D\x47","\x65\x64\x69\x74\x74\x65\x72","\x6D\x61\x72\x67\x69\x6E\x54\x6F\x70","\x6D\x61\x72\x67\x69\x6E\x42\x6F\x74\x74\x6F\x6D","\x6D\x61\x72\x67\x69\x6E\x4C\x65\x66\x74","\x6D\x61\x72\x67\x69\x6E\x52\x69\x67\x68\x74","\x6D\x61\x72\x67\x69\x6E","\x6F\x70\x61\x63\x69\x74\x79","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x62\x6F\x78\x22\x20\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x3D\x22\x76\x65\x72\x69\x66\x69\x65\x64\x22\x3E","\x2E\x35","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x65\x64\x69\x74\x74\x65\x72\x22\x20\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x3D\x22\x76\x65\x72\x69\x66\x69\x65\x64\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","\x73\x68\x6F\x77\x45\x64\x69\x74","\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74","\x69\x73\x4D\x6F\x62\x69\x6C\x65","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x72\x22\x20\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x3D\x22\x76\x65\x72\x69\x66\x69\x65\x64\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x31\x35\x70\x78","\x66\x69\x67\x75\x72\x65","\x69\x6D\x61\x67\x65\x44\x65\x6C\x65\x74\x65","\x69\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64\x45\x72\x72\x6F\x72","\x74\x72\x75\x65","\x3C\x69\x6D\x67\x3E","\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x20\x2F\x3E","\x69\x6D\x67\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x65\x64\x2D\x69\x6D\x61\x67\x65\x3D\x74\x72\x75\x65\x5D","\x3C\x70\x20\x2F\x3E","\x69\x6E\x63\x72\x65\x61\x73\x65\x4C\x69\x73\x74\x73","\x69\x6E\x63\x72\x65\x61\x73\x65\x54\x65\x78\x74","\x69\x6E\x63\x72\x65\x61\x73\x65\x42\x6C\x6F\x63\x6B\x73","\x66\x69\x78\x45\x6D\x70\x74\x79\x49\x6E\x64\x65\x6E\x74","\x6E\x6F\x72\x6D\x61\x6C\x69\x7A\x65\x4C\x69\x73\x74\x73","\x6E\x6F\x72\x6D\x61\x6C\x69\x7A\x65","\x69\x6E\x64\x65\x6E\x74\x56\x61\x6C\x75\x65","\x64\x65\x63\x72\x65\x61\x73\x65\x4C\x69\x73\x74\x73","\x64\x65\x63\x72\x65\x61\x73\x65\x42\x6C\x6F\x63\x6B\x73","\x67\x65\x74\x43\x75\x72\x72\x65\x6E\x74","\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x2C\x20\x70","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72","\x73\x74\x72\x69\x6B\x65\x74\x68\x72\x6F\x75\x67\x68","\x66\x6F\x72\x6D\x61\x74\x43\x6F\x6C\x6C\x61\x70\x73\x65\x64","\x66\x6F\x72\x6D\x61\x74\x4D\x75\x6C\x74\x69\x70\x6C\x65","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x67\x3D","\x5D","\x73\x65\x74\x41\x66\x74\x65\x72","\x73\x65\x74\x46\x6F\x72\x6D\x61\x74","\x6E\x6F\x64\x65","\x66\x6F\x72\x6D\x61\x74\x43\x6F\x6E\x76\x65\x72\x74","\x66\x6F\x72\x6D\x61\x74\x52\x65\x6D\x6F\x76\x65\x53\x61\x6D\x65\x43\x68\x69\x6C\x64\x72\x65\x6E","\x53\x50\x41\x4E","\x3B","\x3A","\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E","\x6C\x69\x6E\x65\x2D\x74\x68\x72\x6F\x75\x67\x68","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x63\x6C\x61\x73\x73\x3D","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x74\x79\x6C\x65\x3D\x22","\x22\x5D","\x3C\x73\x74\x72\x69\x6B\x65\x20\x2F\x3E","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x67\x3D\x22","\x63\x73\x73\x54\x65\x78\x74","\x67\x65\x74\x49\x6E\x6C\x69\x6E\x65\x73","\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73","\x67\x65\x74\x50\x61\x72\x65\x6E\x74","\x72\x65\x6D\x6F\x76\x65\x46\x6F\x72\x6D\x61\x74","\x67\x65\x74\x4E\x6F\x64\x65\x73","\x6F\x6E\x50\x61\x73\x74\x65","\x68\x74\x6D\x6C\x49\x65","\x64\x65\x6C\x65\x74\x65\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x63\x72\x65\x61\x74\x65\x44\x6F\x63\x75\x6D\x65\x6E\x74\x46\x72\x61\x67\x6D\x65\x6E\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x69\x6E\x73\x65\x72\x74\x4E\x6F\x64\x65","\x65\x78\x65\x63\x48\x74\x6D\x6C","\x69\x6E\x73\x65\x72\x74\x48\x54\x4D\x4C","\x68\x74\x6D\x6C\x46\x69\x78\x4D\x6F\x7A\x69\x6C\x6C\x61","\x69\x73\x49\x65\x31\x31","\x70\x2C\x20\x3A\x68\x65\x61\x64\x65\x72\x2C\x20\x64\x6C\x2C\x20\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x64\x69\x76\x2C\x20\x74\x61\x62\x6C\x65\x2C\x20\x74\x64\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x2C\x20\x70\x72\x65\x2C\x20\x61\x64\x64\x72\x65\x73\x73\x2C\x20\x73\x65\x63\x74\x69\x6F\x6E\x2C\x20\x68\x65\x61\x64\x65\x72\x2C\x20\x66\x6F\x6F\x74\x65\x72\x2C\x20\x61\x73\x69\x64\x65\x2C\x20\x61\x72\x74\x69\x63\x6C\x65","\x69\x65\x31\x31\x46\x69\x78\x49\x6E\x73\x65\x72\x74\x69\x6E\x67","\x69\x65\x31\x31\x50\x61\x73\x74\x65\x46\x72\x61\x67","\x70\x61\x73\x74\x65\x48\x54\x4D\x4C","\x63\x61\x72\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E\x46\x72\x6F\x6D\x50\x6F\x69\x6E\x74","\x6F\x66\x66\x73\x65\x74\x4E\x6F\x64\x65","\x63\x61\x72\x65\x74\x52\x61\x6E\x67\x65\x46\x72\x6F\x6D\x50\x6F\x69\x6E\x74","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x52\x61\x6E\x67\x65","\x6D\x6F\x76\x65\x54\x6F\x50\x6F\x69\x6E\x74","\x64\x75\x70\x6C\x69\x63\x61\x74\x65","\x45\x6E\x64\x54\x6F\x45\x6E\x64","\x73\x65\x74\x45\x6E\x64\x50\x6F\x69\x6E\x74","\x73\x65\x6C\x65\x63\x74","\x63\x6C\x69\x65\x6E\x74\x58","\x63\x6C\x69\x65\x6E\x74\x59","\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x65\x2D\x70\x61\x73\x74\x65","\x77\x68\x69\x63\x68","\x63\x74\x72\x6C","\x63\x74\x72\x6C\x4B\x65\x79","\x6D\x65\x74\x61\x4B\x65\x79","\x63\x75\x72\x72\x65\x6E\x74","\x69\x73\x54\x61\x67","\x66\x69\x67\x63\x61\x70\x74\x69\x6F\x6E","\x63\x68\x65\x63\x6B\x45\x76\x65\x6E\x74\x73","\x73\x65\x74\x75\x70\x42\x75\x66\x66\x65\x72","\x61\x64\x64\x41\x72\x72\x6F\x77\x73\x45\x76\x65\x6E\x74","\x73\x65\x74\x75\x70\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x65\x6E\x74\x65\x72\x4B\x65\x79","\x44\x4F\x57\x4E","\x6F\x6E\x41\x72\x72\x6F\x77\x44\x6F\x77\x6E","\x45\x4E\x54\x45\x52","\x73\x68\x69\x66\x74\x4B\x65\x79","\x65\x6E\x74\x65\x72","\x65\x78\x69\x74\x46\x72\x6F\x6D\x42\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x69\x6E\x73\x65\x72\x74\x4E\x65\x77\x4C\x69\x6E\x65","\x69\x6E\x73\x65\x72\x74\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65","\x69\x73\x45\x6E\x64\x4F\x66\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x6E\x73\x65\x72\x74\x44\x62\x6C\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x2D\x73\x70\x61\x63\x65","\x63\x6F\x6E\x74\x65\x78\x74","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x54\x6F\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x54\x6F\x50\x61\x72\x61\x67\x72\x61\x70\x68","\x69\x6E\x73\x65\x72\x74\x50\x61\x72\x61\x67\x72\x61\x70\x68","\x6F\x6E\x53\x68\x69\x66\x74\x45\x6E\x74\x65\x72","\x54\x41\x42","\x6F\x6E\x54\x61\x62","\x42\x41\x43\x4B\x53\x50\x41\x43\x45","\x44\x45\x4C\x45\x54\x45","\x72\x65\x6D\x6F\x76\x65\x49\x6E\x76\x69\x73\x69\x62\x6C\x65\x53\x70\x61\x63\x65","\x72\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79\x4C\x69\x73\x74\x49\x6E\x54\x61\x62\x6C\x65","\x63\x68\x65\x63\x6B\x4B\x65\x79\x45\x76\x65\x6E\x74\x73","\x53\x50\x41\x43\x45","\x45\x53\x43","\x43\x54\x52\x4C","\x4D\x45\x54\x41","\x41\x4C\x54","\x53\x48\x49\x46\x54","\x61\x6C\x74\x4B\x65\x79","\x65\x6E\x61\x62\x6C\x65\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x4C\x45\x46\x54\x5F\x57\x49\x4E","\x69\x6E\x73\x65\x72\x74\x41\x66\x74\x65\x72\x4C\x61\x73\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x61\x62\x46\x6F\x63\x75\x73","\x74\x61\x62\x41\x73\x53\x70\x61\x63\x65\x73","\xA0","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x64\x65\x63\x72\x65\x61\x73\x65","\x69\x6E\x63\x72\x65\x61\x73\x65","\x73\x65\x74\x42\x65\x66\x6F\x72\x65","\x63\x6C\x65\x61\x6E\x53\x74\x79\x6C\x65\x4F\x6E\x45\x6E\x74\x65\x72","\x69\x6E\x73\x65\x72\x74\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65\x50\x72\x6F\x63\x65\x73\x73\x69\x6E\x67","\x42\x4F\x44\x59","\x72\x65\x70\x6C\x61\x63\x65\x54\x6F\x50\x61\x72\x61\x67\x72\x61\x70\x68","\x63\x6F\x6E\x76\x65\x72\x74\x4C\x69\x6E\x6B\x73","\x63\x6F\x6E\x76\x65\x72\x74\x55\x72\x6C\x4C\x69\x6E\x6B\x73","\x63\x6F\x6E\x76\x65\x72\x74\x49\x6D\x61\x67\x65\x4C\x69\x6E\x6B\x73","\x63\x6F\x6E\x76\x65\x72\x74\x56\x69\x64\x65\x6F\x4C\x69\x6E\x6B\x73","\x6C\x69\x6E\x6B\x50\x72\x6F\x74\x6F\x63\x6F\x6C","\x6C\x69\x6E\x6B\x53\x69\x7A\x65","\x66\x6F\x72\x6D\x61\x74\x4C\x69\x6E\x6B\x69\x66\x79","\x67\x65\x74\x4D\x61\x72\x6B\x65\x72\x41\x73\x48\x74\x6D\x6C","\x66\x6F\x72\x6D\x61\x74\x45\x6D\x70\x74\x79","\x63\x6C\x6F\x6E\x65","\x3C\x70\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x2F\x70\x3E","\x63\x75\x72\x4C\x61\x6E\x67","\x6C\x61\x6E\x67\x73","\x69\x73\x45\x78\x63\x65\x70\x74\x4C\x61\x73\x74\x4F\x72\x46\x69\x72\x73\x74","\x69\x6E\x73\x65\x72\x74\x49\x6E\x49\x65","\x69\x6E\x73\x65\x72\x74\x49\x6E\x4F\x74\x68\x65\x72\x73\x42\x72\x6F\x77\x73\x65\x72\x73","\x67\x65\x74\x4C\x61\x73\x74\x42\x6C\x6F\x63\x6B","\x73\x61\x76\x65\x53\x63\x72\x6F\x6C\x6C","\x68\x72","\x72\x65\x73\x74\x6F\x72\x65\x53\x63\x72\x6F\x6C\x6C","\x3C\x70\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x2D\x6C\x69\x6E\x65\x22\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x2F\x70\x3E","\x3C\x62\x72\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x2D\x6C\x69\x6E\x65\x22\x3E","\x3C\x68\x72\x3E","\x73\x65\x74\x46\x6F\x63\x75\x73","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x2D\x6C\x69\x6E\x65","\x6C\x69\x6E\x6B\x5F\x69\x6E\x73\x65\x72\x74","\x62\x75\x74\x74\x6F\x6E\x49\x6E\x73\x65\x72\x74","\x67\x65\x74\x44\x61\x74\x61","\x63\x6C\x65\x61\x6E\x55\x72\x6C","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B","\x24\x69\x6E\x70\x75\x74\x55\x72\x6C","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C","\x24\x69\x6E\x70\x75\x74\x54\x65\x78\x74","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C\x2D\x74\x65\x78\x74","\x75\x72\x6C","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x74\x6F\x6F\x6C\x74\x69\x70","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x23","\x6D\x61\x69\x6C\x74\x6F\x3A","\x5E\x28\x68\x74\x74\x70\x7C\x66\x74\x70\x7C\x68\x74\x74\x70\x73\x29\x3A\x2F\x2F","\x68\x6F\x73\x74","\x24\x6E\x6F\x64\x65","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x70\x75\x74\x2D\x65\x72\x72\x6F\x72","\x40","\x28\x28\x78\x6E\x2D\x2D\x29\x3F\x5B\x61\x2D\x7A\x30\x2D\x39\x5D\x2B\x28\x2D\x5B\x61\x2D\x7A\x30\x2D\x39\x5D\x2B\x29\x2A\x5C\x2E\x29\x2B\x5B\x61\x2D\x7A\x5D\x7B\x32\x2C\x7D","\x5E","\x3A\x2F\x2F","\x3C\x61\x20\x2F\x3E","\x73\x65\x6C\x65\x63\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x63\x72\x65\x61\x74\x65\x4C\x69\x6E\x6B","\x69\x6E\x73\x65\x72\x74\x65\x64\x4C\x69\x6E\x6B","\x6C\x69\x6E\x6B\x73","\x6F\x6C\x2C\x20\x75\x6C","\x3C\x6F\x6C\x3E","\x3C\x75\x6C\x3E","\x23\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x31","\x6C\x69\x2C\x20\x74\x68\x2C\x20\x74\x64","\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x65\x64\x69\x74\x22\x3E","\x3C\x6C\x61\x62\x65\x6C\x3E","\x3C\x2F\x6C\x61\x62\x65\x6C\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x74\x69\x74\x6C\x65\x22\x20\x2F\x3E","\x3C\x6C\x61\x62\x65\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x20\x2F\x3E","\x3C\x6C\x61\x62\x65\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x63\x68\x65\x63\x6B\x62\x6F\x78\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B\x22\x3E\x20","\x6C\x69\x6E\x6B\x5F\x6E\x65\x77\x5F\x74\x61\x62","\x3C\x6C\x61\x62\x65\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x3E","\x69\x6D\x61\x67\x65\x5F\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x3C\x73\x65\x6C\x65\x63\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x61\x6C\x69\x67\x6E\x22\x3E","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x6E\x6F\x6E\x65\x22\x3E","\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x6C\x65\x66\x74\x22\x3E","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x63\x65\x6E\x74\x65\x72\x22\x3E","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x72\x69\x67\x68\x74\x22\x3E","\x3C\x2F\x73\x65\x6C\x65\x63\x74\x3E","\x3C\x2F\x73\x65\x63\x74\x69\x6F\x6E\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x69\x6E\x73\x65\x72\x74\x22\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x64\x72\x6F\x70\x61\x72\x65\x61\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x69\x6E\x73\x65\x72\x74\x22\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x75\x70\x6C\x6F\x61\x64\x2D\x62\x6F\x78\x22\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x69\x6C\x65\x6E\x61\x6D\x65\x22\x20\x2F\x3E\x3C\x62\x72\x3E\x3C\x62\x72\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x75\x70\x6C\x6F\x61\x64\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x2F\x64\x69\x76\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x6C\x69\x6E\x6B\x2D\x69\x6E\x73\x65\x72\x74\x22\x3E","\x3C\x6C\x61\x62\x65\x6C\x3E\x55\x52\x4C\x3C\x2F\x6C\x61\x62\x65\x6C\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x75\x72\x6C\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C\x22\x20\x2F\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C\x2D\x74\x65\x78\x74\x22\x20\x2F\x3E","\x3C\x6C\x61\x62\x65\x6C\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x63\x68\x65\x63\x6B\x62\x6F\x78\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B\x22\x3E\x20","\x63\x61\x6C\x6C\x62\x61\x63\x6B\x73","\x24\x74\x61\x62\x62\x65\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x74\x61\x62\x62\x65\x72","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x72\x65\x6C\x3D\x22\x74\x61\x62","\x61\x63\x74\x69\x76\x65","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x62","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D","\x73\x65\x63\x74\x69\x6F\x6E","\x24\x6D\x6F\x64\x61\x6C\x42\x6F\x64\x79","\x74\x65\x6D\x70\x6C\x61\x74\x65\x4E\x61\x6D\x65","\x65\x6E\x61\x62\x6C\x65\x45\x76\x65\x6E\x74\x73","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x74\x44\x72\x61\x67\x67\x61\x62\x6C\x65","\x73\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x62\x6F\x64\x79\x4F\x76\x65\x66\x6C\x6F\x77","\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x68\x69\x64\x64\x65\x6E","\x73\x68\x6F\x77\x4F\x6E\x4D\x6F\x62\x69\x6C\x65","\x73\x68\x6F\x77\x4F\x6E\x44\x65\x73\x6B\x74\x6F\x70","\x73\x65\x74\x42\x75\x74\x74\x6F\x6E\x73\x57\x69\x64\x74\x68","\x72\x65\x73\x69\x7A\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x72\x65\x73\x69\x7A\x65","\x6D\x6F\x64\x61\x6C\x4F\x70\x65\x6E\x65\x64","\x66\x6F\x63\x75\x73\x69\x6E\x2E\x6D\x6F\x64\x61\x6C","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x73\x65\x74\x45\x6E\x74\x65\x72","\x69\x6E\x70\x75\x74\x5B\x74\x79\x70\x65\x3D\x74\x65\x78\x74\x5D","\x24\x6D\x6F\x64\x61\x6C","\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74","\x39\x36\x25","\x32\x30\x70\x78","\x32\x25","\x24\x6D\x6F\x64\x61\x6C\x48\x65\x61\x64\x65\x72","\x67\x65\x74\x54\x65\x6D\x70\x6C\x61\x74\x65","\x64\x72\x61\x67\x67\x61\x62\x6C\x65","\x63\x75\x72\x73\x6F\x72","\x6D\x6F\x76\x65","\x62\x75\x74\x74\x6F\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x62\x74\x6E","\x63\x61\x6E\x63\x65\x6C","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x74\x6E\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x63\x6C\x6F\x73\x65\x2D\x62\x74\x6E","\x3C\x62\x75\x74\x74\x6F\x6E\x3E","\x24\x6D\x6F\x64\x61\x6C\x46\x6F\x6F\x74\x65\x72","\x64\x65\x6C\x65\x74\x65","\x63\x72\x65\x61\x74\x65\x42\x75\x74\x74\x6F\x6E","\x61\x63\x74\x69\x6F\x6E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D","\x2D\x62\x74\x6E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x74\x6E","\x25","\x62\x75\x69\x6C\x64\x4F\x76\x65\x72\x6C\x61\x79","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x6F\x78\x22\x20\x2F\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x22\x20\x2F\x3E","\x3C\x68\x65\x61\x64\x65\x72\x20\x2F\x3E","\x24\x6D\x6F\x64\x61\x6C\x43\x6C\x6F\x73\x65","\x26\x74\x69\x6D\x65\x73\x3B","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x63\x6C\x6F\x73\x65\x22\x20\x2F\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x6F\x64\x79\x22\x20\x2F\x3E","\x3C\x66\x6F\x6F\x74\x65\x72\x20\x2F\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x6F\x76\x65\x72\x6C\x61\x79\x22\x3E","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x63\x6C\x6F\x73\x65\x48\x61\x6E\x64\x6C\x65\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x63\x6C\x6F\x73\x65\x2D\x62\x74\x6E","\x64\x69\x73\x61\x62\x6C\x65\x45\x76\x65\x6E\x74\x73","\x66\x61\x73\x74","\x6D\x6F\x64\x61\x6C\x43\x6C\x6F\x73\x65\x64","\x66\x61\x64\x65\x4F\x75\x74","\x73\x65\x74\x49\x6E\x61\x63\x74\x69\x76\x65\x41\x6C\x6C","\x61\x63\x74\x69\x76\x65\x42\x75\x74\x74\x6F\x6E\x73","\x74\x6F\x67\x67\x6C\x65\x41\x63\x74\x69\x76\x65","\x61\x63\x74\x69\x76\x65\x42\x75\x74\x74\x6F\x6E\x73\x53\x74\x61\x74\x65\x73","\x61\x6C\x69\x67\x6E","\x75\x6E\x73\x65\x6C\x65\x63\x74\x61\x62\x6C\x65","\x73\x65\x74\x45\x64\x69\x74\x61\x62\x6C\x65","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x64\x65\x6C\x65\x74\x65","\x6C\x69\x6E\x6B\x54\x6F\x6F\x6C\x74\x69\x70","\x73\x68\x6F\x77\x54\x6F\x6F\x6C\x74\x69\x70","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x20\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x63\x6C\x6F\x73\x65\x54\x6F\x6F\x6C\x74\x69\x70","\x67\x65\x74\x54\x6F\x6F\x6C\x74\x69\x70\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x2E\x2E\x2E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x2D\x61\x63\x74\x69\x6F\x6E","\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x20\x2F\x3E","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x2F\x3E","\x75\x6E\x6C\x69\x6E\x6B","\x20\x7C\x20","\x3C\x70\x3E\x3C\x2F\x70\x3E","\x66\x6F\x72\x6D","\x68\x65\x61\x64\x65\x72","\x66\x6F\x6F\x74\x65\x72","\x61\x73\x69\x64\x65","\x61\x72\x74\x69\x63\x6C\x65","\x69\x6E\x70\x75\x74","\x74\x65\x78\x74\x61\x72\x65\x61","\x6F\x70\x74\x69\x6F\x6E","\x6D\x61\x70","\x61\x72\x65\x61","\x6D\x61\x74\x68","\x66\x69\x65\x6C\x64\x73\x65\x74","\x6C\x65\x67\x65\x6E\x64","\x68\x67\x72\x6F\x75\x70","\x6E\x61\x76","\x64\x65\x74\x61\x69\x6C\x73","\x6D\x65\x6E\x75","\x73\x75\x6D\x6D\x61\x72\x79","\x73\x61\x66\x65\x73","\x7A","\x67\x65\x74\x53\x61\x66\x65\x73","\x67\x65\x74\x53\x61\x66\x65\x73\x43\x6F\x6D\x6D\x65\x6E\x74\x73","\x72\x65\x70\x6C\x61\x63\x65\x42\x72\x65\x61\x6B\x73\x54\x6F\x4E\x65\x77\x4C\x69\x6E\x65\x73","\x72\x65\x70\x6C\x61\x63\x65\x42\x72\x65\x61\x6B\x73\x54\x6F\x50\x61\x72\x61\x67\x72\x61\x70\x68\x73","\x63\x6C\x65\x61\x72","\x72\x65\x73\x74\x6F\x72\x65\x53\x61\x66\x65\x73","\x3C\x62\x72\x5C\x73\x3F\x2F\x3F\x3E\x0A\x3F\x3C\x28","\x29\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x70\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x2F\x70\x3E\x0A\x3C\x24\x31\x24\x32\x3E","\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x20\x70","\x6F\x75\x74\x65\x72\x48\x54\x4D\x4C","\x0A\x7B\x72\x65\x70\x6C\x61\x63\x65","\x7D","\x7B\x72\x65\x70\x6C\x61\x63\x65","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x0A\x0A","\x0A\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E","\x0D\x0A","\x0D","\x2F\x0A\x0A\x2B\x2F","\x3C\x2F\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E\x3C\x2F\x70\x3E","\x3C\x70\x3E\x3C\x2F\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x70\x3E\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E\x3C\x2F\x70\x3E","\x3C\x70\x3E\x3C\x70\x20","\x3C\x70\x20","\x3C\x70\x3E\x3C\x70\x3E","\x3C\x2F\x70\x3E\x3C\x2F\x70\x3E","\x3C\x70\x3E\x5C\x73\x3F\x3C\x2F\x70\x3E","\x0A\x3C\x2F\x70\x3E","\x3C\x70\x3E\x09\x3F\x09\x3F\x0A\x3F\x3C\x70\x3E","\x3C\x70\x3E\x09\x2A\x3C\x2F\x70\x3E","\x63\x6C\x65\x61\x6E\x4F\x6E\x50\x61\x73\x74\x65","\x63\x72\x65\x61\x74\x65\x50\x61\x73\x74\x65\x42\x6F\x78","\x73\x63\x72\x6F\x6C\x6C\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x72\x65\x65\x7A\x65","\x73\x61\x76\x65\x42\x6F\x64\x79\x53\x63\x72\x6F\x6C\x6C","\x2D\x39\x39\x39\x39\x70\x78","\x70\x61\x73\x74\x65\x42\x65\x66\x6F\x72\x65","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x72\x6F\x67\x72\x65\x73\x73\x22\x3E\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x64\x69\x76\x3E","\x66\x61\x64\x65\x49\x6E","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x72\x6F\x67\x72\x65\x73\x73","\x73\x74\x61\x72\x74\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x6C\x61\x73\x74\x42\x6C\x6F\x63\x6B","\x67\x65\x74\x4E\x6F\x64\x65\x73\x4D\x61\x72\x6B\x65\x72","\x73\x65\x74\x4E\x6F\x64\x65\x73\x4D\x61\x72\x6B\x65\x72","\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x31","\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x32","\x72\x65\x6D\x6F\x76\x65\x4E\x6F\x64\x65\x73\x4D\x61\x72\x6B\x65\x72\x73","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x2D","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x22\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x73\x70\x61\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72","\x65\x78\x74\x72\x61\x63\x74\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x63\x72\x65\x61\x74\x65\x4D\x61\x72\x6B\x65\x72\x73","\x73\x65\x74\x4D\x61\x72\x6B\x65\x72","\x73\x61\x76\x65\x64\x53\x65\x6C","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x22\x20\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x73\x70\x61\x6E\x23\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x31","\x73\x70\x61\x6E\x23\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x32","\x73\x70\x61\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72","\x63\x6C\x6F\x6E\x65\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x70\x61\x72\x61\x6D\x73","\x68\x61\x6E\x64\x6C\x65\x72","\x62\x61\x63\x6B\x73\x70\x61\x63\x65","\x74\x61\x62","\x72\x65\x74\x75\x72\x6E","\x73\x68\x69\x66\x74","\x70\x61\x75\x73\x65","\x63\x61\x70\x73\x6C\x6F\x63\x6B","\x65\x73\x63","\x73\x70\x61\x63\x65","\x70\x61\x67\x65\x75\x70","\x70\x61\x67\x65\x64\x6F\x77\x6E","\x65\x6E\x64","\x68\x6F\x6D\x65","\x75\x70","\x64\x6F\x77\x6E","\x30","\x31","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39","\x2B","\x2F","\x66\x31","\x66\x32","\x66\x33","\x66\x34","\x66\x35","\x66\x36","\x66\x37","\x66\x38","\x66\x39","\x66\x31\x30","\x66\x31\x31","\x66\x31\x32","\x6E\x75\x6D\x6C\x6F\x63\x6B","\x73\x63\x72\x6F\x6C\x6C","\x60","\x5B","\x5C","\x7E","\x21","\x24","\x28","\x29","\x5F","\x3A\x20","\x3F","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x4B\x65\x79","\x73\x68\x69\x66\x74\x2B","\x69\x3F\x66\x72\x61\x6D\x65","\x6E\x6F\x73\x63\x72\x69\x70\x74","\x68\x5B\x31\x2D\x36\x5D","\x66\x72\x61\x6D\x65\x73\x65\x74","\x6C\x69\x6E\x65\x42\x65\x66\x6F\x72\x65","\x5E\x3C\x28\x2F\x3F","\x7C\x2F\x3F","\x29\x5B\x20\x3E\x5D","\x6C\x69\x6E\x65\x41\x66\x74\x65\x72","\x5E\x3C\x28\x62\x72\x7C\x2F\x3F","\x7C\x2F","\x6E\x65\x77\x4C\x65\x76\x65\x6C","\x5E\x3C\x2F\x3F\x28","\x63\x6C\x65\x61\x6E\x6C\x65\x76\x65\x6C","\x73\x75\x62\x73\x74\x72","\x66\x69\x6E\x69\x73\x68","\x63\x68\x61\x72\x41\x74","\x67\x65\x74\x54\x61\x62\x73","\x21\x2D\x2D","\x2D\x2D\x3E","\x3E\x0A","\x70\x6C\x61\x63\x65\x54\x61\x67","\x63\x6C\x65\x61\x6E\x54\x61\x67","\x3C\x73\x63\x72\x69\x70\x74\x24\x31\x3E\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E","\x65\x78\x65\x63","\x61\x6C\x6C\x6F\x77\x65\x64\x54\x61\x67\x73","\x64\x65\x6E\x69\x65\x64\x54\x61\x67\x73","\x61\x6C\x6C\x6F\x77\x65\x64\x41\x74\x74\x72","\x61\x64\x64\x54\x6F\x41\x6C\x6C\x6F\x77\x65\x64","\x72\x65\x6D\x6F\x76\x65\x46\x72\x6F\x6D\x44\x65\x6E\x69\x65\x64","\x73\x70\x6C\x69\x63\x65","\x73\x65\x74\x74\x69\x6E\x67\x73","\x72\x65\x6D\x6F\x76\x65\x43\x6F\x6D\x6D\x65\x6E\x74\x73","\x72\x65\x70\x6C\x61\x63\x65\x54\x61\x67\x73","\x72\x65\x70\x6C\x61\x63\x65\x53\x74\x79\x6C\x65\x73","\x72\x65\x6D\x6F\x76\x65\x44\x61\x74\x61\x41\x74\x74\x72","\x72\x65\x6D\x6F\x76\x65\x57\x69\x74\x68\x6F\x75\x74\x41\x74\x74\x72","\x24\x64\x69\x76","\x72\x65\x6D\x6F\x76\x65\x54\x61\x67\x73","\x72\x65\x6D\x6F\x76\x65\x50\x61\x72\x61\x67\x72\x61\x70\x68\x73\x49\x6E\x4C\x69\x73\x74\x73","\x20\x2F\x3E","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x47\x65\x74\x52\x65\x6D\x6F\x76\x65\x73","\x69\x73\x41\x72\x72\x61\x79","\x73\x70\x65\x63\x69\x66\x69\x65\x64","\x6C\x69\x20\x70","\x5E\x28\x64\x61\x74\x61\x2D\x29","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x73","\x63\x6F\x64\x65\x2E\x74\x6F\x67\x67\x6C\x65","\x70\x61\x72\x61\x67\x72\x61\x70\x68","\x62\x6C\x6F\x63\x6B\x2E\x66\x6F\x72\x6D\x61\x74","\x68\x65\x61\x64\x65\x72\x31","\x68\x65\x61\x64\x65\x72\x32","\x68\x65\x61\x64\x65\x72\x33","\x68\x65\x61\x64\x65\x72\x34","\x68\x65\x61\x64\x65\x72\x35","\x26\x62\x75\x6C\x6C\x3B\x20","\x31\x2E\x20","\x3C\x20","\x69\x6E\x64\x65\x6E\x74\x2E\x64\x65\x63\x72\x65\x61\x73\x65","\x3E\x20","\x69\x6E\x64\x65\x6E\x74\x2E\x69\x6E\x63\x72\x65\x61\x73\x65","\x69\x6D\x61\x67\x65\x2E\x73\x68\x6F\x77","\x66\x69\x6C\x65\x2E\x73\x68\x6F\x77","\x6C\x69\x6E\x6B\x2E\x75\x6E\x6C\x69\x6E\x6B","\x61\x6C\x69\x67\x6E\x5F\x6C\x65\x66\x74","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6C\x65\x66\x74","\x61\x6C\x69\x67\x6E\x5F\x63\x65\x6E\x74\x65\x72","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x63\x65\x6E\x74\x65\x72","\x61\x6C\x69\x67\x6E\x5F\x72\x69\x67\x68\x74","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x72\x69\x67\x68\x74","\x61\x6C\x69\x67\x6E\x5F\x6A\x75\x73\x74\x69\x66\x79","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x75\x73\x74\x69\x66\x79","\x6C\x69\x6E\x65\x2E\x69\x6E\x73\x65\x72\x74","\x68\x69\x64\x65\x42\x75\x74\x74\x6F\x6E\x73","\x68\x69\x64\x65\x42\x75\x74\x74\x6F\x6E\x73\x4F\x6E\x4D\x6F\x62\x69\x6C\x65","\x69\x73\x42\x75\x74\x74\x6F\x6E\x53\x6F\x75\x72\x63\x65\x4E\x65\x65\x64\x65\x64","\x63\x72\x65\x61\x74\x65\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x73\x65\x74\x4F\x76\x65\x72\x66\x6C\x6F\x77","\x73\x65\x74\x46\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67\x54\x61\x67\x73","\x6C\x6F\x61\x64\x42\x75\x74\x74\x6F\x6E\x73","\x73\x65\x74\x46\x69\x78\x65\x64","\x6D\x6F\x75\x73\x65\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x20\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x20\x66\x6F\x63\x75\x73\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72","\x73\x33","\x74\x6F\x6F\x6C\x62\x61\x72\x45\x78\x74\x65\x72\x6E\x61\x6C","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x65\x78\x74\x65\x72\x6E\x61\x6C","\x74\x6F\x6F\x6C\x62\x61\x72\x46\x69\x78\x65\x64","\x6F\x62\x73\x65\x72\x76\x65\x53\x63\x72\x6F\x6C\x6C","\x73\x63\x72\x6F\x6C\x6C\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x74\x6F\x6F\x6C\x62\x61\x72\x4F\x76\x65\x72\x66\x6C\x6F\x77","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x62\x75\x74\x74\x6F\x6E\x53\x6F\x75\x72\x63\x65","\x62\x75\x74\x74\x6F\x6E\x73\x48\x69\x64\x65","\x62\x75\x74\x74\x6F\x6E\x73\x48\x69\x64\x65\x4F\x6E\x4D\x6F\x62\x69\x6C\x65","\x6F\x62\x73\x65\x72\x76\x65\x53\x63\x72\x6F\x6C\x6C\x45\x6E\x61\x62\x6C\x65","\x6F\x62\x73\x65\x72\x76\x65\x53\x63\x72\x6F\x6C\x6C\x44\x69\x73\x61\x62\x6C\x65","\x73\x65\x74\x44\x72\x6F\x70\x64\x6F\x77\x6E\x73\x46\x69\x78\x65\x64","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x76\x69\x73\x69\x62\x6C\x65","\x72\x65\x6C\x61\x74\x69\x76\x65","\x75\x6E\x73\x65\x74\x44\x72\x6F\x70\x64\x6F\x77\x6E\x73\x46\x69\x78\x65\x64","\x64\x69\x72\x65\x63\x74","\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x24\x65\x6C","\x24\x64\x72\x6F\x70\x61\x72\x65\x61","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x61\x72\x65\x61\x22\x20\x2F\x3E","\x24\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x6C\x65\x72","\x44\x72\x6F\x70\x20\x66\x69\x6C\x65\x20\x68\x65\x72\x65\x20\x6F\x72\x20","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x61\x72\x65\x61\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x22\x20\x2F\x3E","\x24\x69\x6E\x70\x75\x74","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x66\x69\x6C\x65\x22\x20\x6E\x61\x6D\x65\x3D\x22\x66\x69\x6C\x65\x22\x20\x2F\x3E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x6F\x76\x65\x72\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x6C\x65\x61\x76\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x6F\x6E\x44\x72\x61\x67\x4C\x65\x61\x76\x65","\x63\x68\x61\x6E\x67\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x74\x72\x61\x76\x65\x72\x73\x65\x46\x69\x6C\x65","\x64\x72\x6F\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x2D\x64\x72\x6F\x70","\x64\x72\x61\x67\x2D\x68\x6F\x76\x65\x72","\x73\x65\x74\x43\x6F\x6E\x66\x69\x67","\x73\x33\x75\x70\x6C\x6F\x61\x64\x46\x69\x6C\x65","\x69\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64\x50\x61\x72\x61\x6D","\x66\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64\x50\x61\x72\x61\x6D","\x73\x65\x6E\x64\x44\x61\x74\x61","\x67\x65\x74\x54\x79\x70\x65","\x69\x6D\x61\x67\x65\x54\x79\x70\x65\x73","\x75\x70\x6C\x6F\x61\x64\x49\x6D\x61\x67\x65\x46\x69\x65\x6C\x64\x73","\x67\x65\x74\x48\x69\x64\x64\x65\x6E\x46\x69\x65\x6C\x64\x73","\x69\x6D\x61\x67\x65\x46\x69\x65\x6C\x64\x73","\x75\x70\x6C\x6F\x61\x64\x46\x69\x6C\x65\x46\x69\x65\x6C\x64\x73","\x66\x69\x6C\x65\x46\x69\x65\x6C\x64\x73","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x73\x65\x6E\x64","\x73\x33\x75\x70\x6C\x6F\x61\x64\x54\x6F\x53\x33","\x73\x33\x65\x78\x65\x63\x75\x74\x65\x4F\x6E\x53\x69\x67\x6E\x65\x64\x55\x72\x6C","\x47\x45\x54","\x26\x74\x79\x70\x65\x3D","\x6F\x76\x65\x72\x72\x69\x64\x65\x4D\x69\x6D\x65\x54\x79\x70\x65","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x78\x2D\x75\x73\x65\x72\x2D\x64\x65\x66\x69\x6E\x65\x64","\x73\x74\x61\x74\x75\x73","\x77\x69\x74\x68\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x50\x55\x54","\x73\x33\x63\x72\x65\x61\x74\x65\x43\x4F\x52\x53\x52\x65\x71\x75\x65\x73\x74","\x6F\x6E\x6C\x6F\x61\x64","\x6F\x6E\x65\x72\x72\x6F\x72","\x6F\x6E\x70\x72\x6F\x67\x72\x65\x73\x73","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x78\x2D\x61\x6D\x7A\x2D\x61\x63\x6C","\x70\x75\x62\x6C\x69\x63\x2D\x72\x65\x61\x64","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x5B\x6F\x62\x6A\x65\x63\x74\x20\x53\x74\x72\x69\x6E\x67\x5D","\x72\x67\x62\x28","\x65\x71","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x2D\x73\x70\x61\x63\x65","\x68\x72\x2C\x20\x62\x72\x2C\x20\x69\x6D\x67\x2C\x20\x69\x66\x72\x61\x6D\x65","\x73\x61\x76\x65\x45\x64\x69\x74\x6F\x72\x53\x63\x72\x6F\x6C\x6C","\x73\x63\x72\x6F\x6C\x6C\x54\x61\x72\x67\x65\x74","\x73\x61\x76\x65\x54\x61\x72\x67\x65\x74\x53\x63\x72\x6F\x6C\x6C","\x67\x65\x74\x4F\x66\x66\x73\x65\x74\x4F\x66\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x65\x64\x69\x74\x6F\x72","\x69\x73\x43\x75\x72\x72\x65\x6E\x74\x4F\x72\x50\x61\x72\x65\x6E\x74\x4F\x6E\x65","\x76\x65\x72\x73\x69\x6F\x6E","\x74\x72\x69\x64\x65\x6E\x74","\x63\x6F\x6D\x70\x61\x74\x69\x62\x6C\x65","\x77\x65\x62\x6B\x69\x74","\x63\x68\x72\x6F\x6D\x65","\x72\x76","\x6F\x70\x72","\x28\x28\x3F\x3A\x68\x74\x74\x70\x5B\x73\x5D\x3F\x3A\x5C\x2F\x5C\x2F\x28\x3F\x3A\x77\x77\x77\x5C\x2E\x29\x3F\x7C\x77\x77\x77\x5C\x2E\x29\x7B\x31\x7D\x28\x3F\x3A\x5B\x30\x2D\x39\x41\x2D\x5A\x61\x2D\x7A\x5C\x2D\x25\x5F\x5D\x2B\x5C\x2E\x29\x2B\x5B\x61\x2D\x7A\x41\x2D\x5A\x5D\x7B\x32\x2C\x7D\x28\x3F\x3A\x3A\x5B\x30\x2D\x39\x5D\x2B\x29\x3F\x28\x3F\x3A\x28\x3F\x3A\x2F\x5B\x30\x2D\x39\x41\x2D\x5A\x61\x2D\x7A\x5C\x2D\x5C\x2E\x25\x2B\x5F\x5D\x2A\x29\x2B\x29\x3F\x28\x3F\x3A\x5C\x3F\x28\x3F\x3A\x5B\x30\x2D\x39\x41\x2D\x5A\x61\x2D\x7A\x5C\x2D\x5C\x2E\x25\x5F\x5D\x2B\x28\x3F\x3A\x3D\x5B\x30\x2D\x39\x41\x2D\x5A\x61\x2D\x7A\x5C\x2D\x5C\x2E\x25\x5F\x5C\x2B\x5D\x2A\x29\x3F\x29\x3F\x28\x3F\x3A\x26\x28\x3F\x3A\x5B\x30\x2D\x39\x41\x2D\x5A\x61\x2D\x7A\x5C\x2D\x5C\x2E\x25\x5F\x5D\x2B\x28\x3F\x3A\x3D\x5B\x30\x2D\x39\x41\x2D\x5A\x61\x2D\x7A\x5C\x2D\x5C\x2E\x25\x5F\x5C\x2B\x5D\x2A\x29\x3F\x29\x3F\x29\x2A\x29\x3F\x28\x3F\x3A\x23\x5B\x30\x2D\x39\x41\x2D\x5A\x61\x2D\x7A\x5C\x2D\x5C\x2E\x25\x5F\x5C\x2B\x3D\x5C\x3F\x26\x3B\x5D\x2A\x29\x3F\x29","\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73","\x3C\x69\x66\x72\x61\x6D\x65\x20\x77\x69\x64\x74\x68\x3D\x22\x35\x30\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x32\x38\x31\x22\x20\x73\x72\x63\x3D\x22","\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F\x24\x31","\x2F\x2F\x70\x6C\x61\x79\x65\x72\x2E\x76\x69\x6D\x65\x6F\x2E\x63\x6F\x6D\x2F\x76\x69\x64\x65\x6F\x2F\x24\x32","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x24\x31\x22\x20\x2F\x3E"];(function ($){_0xbe3b[0];if(!Function[_0xbe3b[2]][_0xbe3b[1]]){Function[_0xbe3b[2]][_0xbe3b[1]]=function (scope){var fn=this;return function (){return fn[_0xbe3b[3]](scope);} ;} ;} ;var uuid=0;var reUrlYoutube=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;var reUrlVimeo=/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;$[_0xbe3b[5]][_0xbe3b[4]]=function (options){var val=[];var args=Array[_0xbe3b[2]][_0xbe3b[7]][_0xbe3b[6]](arguments,1);if( typeof options===_0xbe3b[8]){this[_0xbe3b[20]](function (){var instance=$[_0xbe3b[9]](this,_0xbe3b[4]);var func;if(options[_0xbe3b[10]](/\./)!=_0xbe3b[11]){func=options[_0xbe3b[13]](_0xbe3b[12]);if( typeof instance[func[0]]!=_0xbe3b[14]){func=instance[func[0]][func[1]];} ;} else {func=instance[options];} ;if( typeof instance!==_0xbe3b[14]&&$[_0xbe3b[15]](func)){var methodVal=func[_0xbe3b[3]](instance,args);if(methodVal!==undefined&&methodVal!==instance){val[_0xbe3b[16]](methodVal);} ;} else {$[_0xbe3b[19]](_0xbe3b[17]+options+_0xbe3b[18]);} ;} );} else {this[_0xbe3b[20]](function (){$[_0xbe3b[9]](this,_0xbe3b[4],{});$[_0xbe3b[9]](this,_0xbe3b[4],Redactor(this,options));} );} ;if(val[_0xbe3b[21]]===0){return this;} else {if(val[_0xbe3b[21]]===1){return val[0];} else {return val;} ;} ;} ;function Redactor(el,options){return  new Redactor[_0xbe3b[2]][_0xbe3b[22]](el,options);} ;$[_0xbe3b[23]]=Redactor;$[_0xbe3b[23]][_0xbe3b[24]]=_0xbe3b[25];$[_0xbe3b[23]][_0xbe3b[26]]=[_0xbe3b[27],_0xbe3b[28],_0xbe3b[29],_0xbe3b[30],_0xbe3b[31],_0xbe3b[32],_0xbe3b[33],_0xbe3b[34],_0xbe3b[35],_0xbe3b[36],_0xbe3b[37],_0xbe3b[38],_0xbe3b[39],_0xbe3b[40],_0xbe3b[41],_0xbe3b[42],_0xbe3b[43],_0xbe3b[44],_0xbe3b[45],_0xbe3b[46],_0xbe3b[47],_0xbe3b[48],_0xbe3b[49],_0xbe3b[50],_0xbe3b[51],_0xbe3b[52],_0xbe3b[53],_0xbe3b[54],_0xbe3b[55],_0xbe3b[56],_0xbe3b[57],_0xbe3b[58],_0xbe3b[59],_0xbe3b[60],_0xbe3b[61],_0xbe3b[62]];$[_0xbe3b[23]][_0xbe3b[63]]={lang:_0xbe3b[64],direction:_0xbe3b[65],plugins:false,focus:false,focusEnd:false,placeholder:false,visual:true,tabindex:false,minHeight:false,maxHeight:false,linebreaks:false,replaceDivs:true,paragraphize:true,cleanStyleOnEnter:false,enterKey:true,cleanOnPaste:true,cleanSpaces:true,pastePlainText:false,autosave:false,autosaveName:false,autosaveInterval:60,autosaveOnChange:false,linkTooltip:true,linkProtocol:_0xbe3b[66],linkNofollow:false,linkSize:50,imageEditable:true,imageLink:true,imagePosition:true,imageFloatMargin:_0xbe3b[67],imageResizable:true,imageUpload:false,imageUploadParam:_0xbe3b[38],uploadImageField:false,dragImageUpload:true,fileUpload:false,fileUploadParam:_0xbe3b[38],dragFileUpload:true,s3:false,convertLinks:true,convertUrlLinks:true,convertImageLinks:true,convertVideoLinks:true,preSpaces:4,tabAsSpaces:false,tabFocus:true,scrollTarget:false,toolbar:true,toolbarFixed:true,toolbarFixedTarget:document,toolbarFixedTopOffset:0,toolbarExternal:false,toolbarOverflow:false,buttonSource:false,buttons:[_0xbe3b[68],_0xbe3b[69],_0xbe3b[70],_0xbe3b[71],_0xbe3b[72],_0xbe3b[73],_0xbe3b[74],_0xbe3b[75],_0xbe3b[41],_0xbe3b[40],_0xbe3b[38],_0xbe3b[48],_0xbe3b[27],_0xbe3b[76]],buttonsHide:[],buttonsHideOnMobile:[],formatting:[_0xbe3b[77],_0xbe3b[78],_0xbe3b[79],_0xbe3b[80],_0xbe3b[81],_0xbe3b[82],_0xbe3b[83],_0xbe3b[84],_0xbe3b[85]],formattingAdd:false,tabifier:true,deniedTags:[_0xbe3b[68],_0xbe3b[86],_0xbe3b[48],_0xbe3b[87],_0xbe3b[88],_0xbe3b[89],_0xbe3b[90],_0xbe3b[91]],allowedTags:false,removeComments:false,replaceTags:[[_0xbe3b[92],_0xbe3b[93]]],replaceStyles:[[_0xbe3b[94],_0xbe3b[95]],[_0xbe3b[96],_0xbe3b[97]],[_0xbe3b[98],_0xbe3b[99]],[_0xbe3b[100],_0xbe3b[93]]],removeDataAttr:false,removeAttr:false,allowedAttr:false,removeWithoutAttr:[_0xbe3b[101]],removeEmpty:[_0xbe3b[77]],activeButtons:[_0xbe3b[72],_0xbe3b[71],_0xbe3b[70],_0xbe3b[102],_0xbe3b[73],_0xbe3b[74],_0xbe3b[103],_0xbe3b[104],_0xbe3b[105],_0xbe3b[106]],activeButtonsStates:{b:_0xbe3b[70],strong:_0xbe3b[70],i:_0xbe3b[71],em:_0xbe3b[71],del:_0xbe3b[72],strike:_0xbe3b[72],ul:_0xbe3b[73],ol:_0xbe3b[74],u:_0xbe3b[102]},shortcuts:{"\x63\x74\x72\x6C\x2B\x73\x68\x69\x66\x74\x2B\x6D\x2C\x20\x6D\x65\x74\x61\x2B\x73\x68\x69\x66\x74\x2B\x6D":{func:_0xbe3b[107]},"\x63\x74\x72\x6C\x2B\x62\x2C\x20\x6D\x65\x74\x61\x2B\x62":{func:_0xbe3b[108],params:[_0xbe3b[70]]},"\x63\x74\x72\x6C\x2B\x69\x2C\x20\x6D\x65\x74\x61\x2B\x69":{func:_0xbe3b[108],params:[_0xbe3b[71]]},"\x63\x74\x72\x6C\x2B\x68\x2C\x20\x6D\x65\x74\x61\x2B\x68":{func:_0xbe3b[108],params:[_0xbe3b[109]]},"\x63\x74\x72\x6C\x2B\x6C\x2C\x20\x6D\x65\x74\x61\x2B\x6C":{func:_0xbe3b[108],params:[_0xbe3b[110]]},"\x63\x74\x72\x6C\x2B\x6B\x2C\x20\x6D\x65\x74\x61\x2B\x6B":{func:_0xbe3b[111]},"\x63\x74\x72\x6C\x2B\x73\x68\x69\x66\x74\x2B\x37":{func:_0xbe3b[112],params:[_0xbe3b[74]]},"\x63\x74\x72\x6C\x2B\x73\x68\x69\x66\x74\x2B\x38":{func:_0xbe3b[112],params:[_0xbe3b[73]]}},shortcutsAdd:false,buffer:[],rebuffer:[],emptyHtml:_0xbe3b[113],invisibleSpace:_0xbe3b[114],imageTypes:[_0xbe3b[115],_0xbe3b[116],_0xbe3b[117]],indentValue:20,verifiedTags:[_0xbe3b[118],_0xbe3b[119],_0xbe3b[120],_0xbe3b[95],_0xbe3b[121],_0xbe3b[122],_0xbe3b[123],_0xbe3b[97],_0xbe3b[99],_0xbe3b[124],_0xbe3b[92],_0xbe3b[93],_0xbe3b[125],_0xbe3b[126],_0xbe3b[127],_0xbe3b[128]],inlineTags:[_0xbe3b[95],_0xbe3b[120],_0xbe3b[99],_0xbe3b[97],_0xbe3b[123],_0xbe3b[35],_0xbe3b[93],_0xbe3b[129],_0xbe3b[130],_0xbe3b[131],_0xbe3b[122],_0xbe3b[121],_0xbe3b[132],_0xbe3b[133],_0xbe3b[125],_0xbe3b[124]],alignmentTags:[_0xbe3b[134],_0xbe3b[135],_0xbe3b[136],_0xbe3b[137],_0xbe3b[138],_0xbe3b[139],_0xbe3b[140],_0xbe3b[141],_0xbe3b[142],_0xbe3b[143],_0xbe3b[144],_0xbe3b[145],_0xbe3b[146],_0xbe3b[147],_0xbe3b[148],_0xbe3b[149],_0xbe3b[150],_0xbe3b[151],_0xbe3b[152],_0xbe3b[153],_0xbe3b[154]],blockLevelElements:[_0xbe3b[155],_0xbe3b[156],_0xbe3b[157],_0xbe3b[158]],langs:{en:{html:_0xbe3b[159],video:_0xbe3b[160],image:_0xbe3b[161],table:_0xbe3b[162],link:_0xbe3b[163],link_insert:_0xbe3b[164],link_edit:_0xbe3b[165],unlink:_0xbe3b[166],formatting:_0xbe3b[167],paragraph:_0xbe3b[168],quote:_0xbe3b[169],code:_0xbe3b[170],header1:_0xbe3b[171],header2:_0xbe3b[172],header3:_0xbe3b[173],header4:_0xbe3b[174],header5:_0xbe3b[175],bold:_0xbe3b[176],italic:_0xbe3b[177],fontcolor:_0xbe3b[178],backcolor:_0xbe3b[179],unorderedlist:_0xbe3b[180],orderedlist:_0xbe3b[181],outdent:_0xbe3b[182],indent:_0xbe3b[183],cancel:_0xbe3b[184],insert:_0xbe3b[185],save:_0xbe3b[186],_delete:_0xbe3b[187],insert_table:_0xbe3b[188],insert_row_above:_0xbe3b[189],insert_row_below:_0xbe3b[190],insert_column_left:_0xbe3b[191],insert_column_right:_0xbe3b[192],delete_column:_0xbe3b[193],delete_row:_0xbe3b[194],delete_table:_0xbe3b[195],rows:_0xbe3b[196],columns:_0xbe3b[197],add_head:_0xbe3b[198],delete_head:_0xbe3b[199],title:_0xbe3b[200],image_position:_0xbe3b[201],none:_0xbe3b[202],left:_0xbe3b[203],right:_0xbe3b[204],center:_0xbe3b[205],image_web_link:_0xbe3b[206],text:_0xbe3b[207],mailto:_0xbe3b[208],web:_0xbe3b[209],video_html_code:_0xbe3b[210],file:_0xbe3b[211],upload:_0xbe3b[212],download:_0xbe3b[213],choose:_0xbe3b[214],or_choose:_0xbe3b[215],drop_file_here:_0xbe3b[216],align_left:_0xbe3b[217],align_center:_0xbe3b[218],align_right:_0xbe3b[219],align_justify:_0xbe3b[220],horizontalrule:_0xbe3b[221],deleted:_0xbe3b[222],anchor:_0xbe3b[223],link_new_tab:_0xbe3b[224],underline:_0xbe3b[225],alignment:_0xbe3b[226],filename:_0xbe3b[227],edit:_0xbe3b[228]}}};Redactor[_0xbe3b[5]]=$[_0xbe3b[23]][_0xbe3b[2]]={keyCode:{BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,SPACE:32,ESC:27,TAB:9,CTRL:17,META:91,SHIFT:16,ALT:18,LEFT:37,LEFT_WIN:91},init:function (el,options){this[_0xbe3b[229]]=$(el);this[_0xbe3b[230]]=uuid++;this[_0xbe3b[231]]=false;this[_0xbe3b[232]]=false;this[_0xbe3b[233]](options);this[_0xbe3b[234]]();this[_0xbe3b[69]]={};$[_0xbe3b[237]](this[_0xbe3b[63]][_0xbe3b[235]],this[_0xbe3b[63]][_0xbe3b[236]]);this[_0xbe3b[238]]= new RegExp(_0xbe3b[239]+this[_0xbe3b[63]][_0xbe3b[235]][_0xbe3b[241]](_0xbe3b[240])+_0xbe3b[242],_0xbe3b[123]);this[_0xbe3b[59]][_0xbe3b[243]]();this[_0xbe3b[46]][_0xbe3b[244]]();$[_0xbe3b[246]](this[_0xbe3b[63]][_0xbe3b[57]],this[_0xbe3b[63]][_0xbe3b[245]]);this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[247]);this[_0xbe3b[247]]=true;this[_0xbe3b[31]][_0xbe3b[249]]();} ,loadOptions:function (options){this[_0xbe3b[63]]=$[_0xbe3b[246]]({},$[_0xbe3b[246]](true,{},$[_0xbe3b[23]][_0xbe3b[63]]),this[_0xbe3b[229]][_0xbe3b[9]](),options);} ,getModuleMethods:function (object){return Object[_0xbe3b[252]](object)[_0xbe3b[251]](function (property){return  typeof object[property]==_0xbe3b[250];} );} ,loadModules:function (){var len=$[_0xbe3b[23]][_0xbe3b[26]][_0xbe3b[21]];for(var i=0;i<len;i++){this[_0xbe3b[253]]($[_0xbe3b[23]][_0xbe3b[26]][i]);} ;} ,bindModuleMethods:function (module){if( typeof this[module]==_0xbe3b[14]){return ;} ;this[module]=this[module]();var methods=this[_0xbe3b[254]](this[module]);var len=methods[_0xbe3b[21]];for(var z=0;z<len;z++){this[module][methods[z]]=this[module][methods[z]][_0xbe3b[1]](this);} ;} ,alignment:function (){return {left:function (){this[_0xbe3b[27]][_0xbe3b[256]](_0xbe3b[255]);} ,right:function (){this[_0xbe3b[27]][_0xbe3b[256]](_0xbe3b[257]);} ,center:function (){this[_0xbe3b[27]][_0xbe3b[256]](_0xbe3b[258]);} ,justify:function (){this[_0xbe3b[27]][_0xbe3b[256]](_0xbe3b[106]);} ,set:function (type){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[27]][_0xbe3b[263]]=this[_0xbe3b[56]][_0xbe3b[264]]();if(this[_0xbe3b[63]][_0xbe3b[265]]&&this[_0xbe3b[27]][_0xbe3b[263]][0]===false){this[_0xbe3b[27]][_0xbe3b[266]](type);} else {this[_0xbe3b[27]][_0xbe3b[267]](type);} ;this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,setText:function (type){var wrapper=this[_0xbe3b[56]][_0xbe3b[271]](_0xbe3b[270]);$(wrapper)[_0xbe3b[273]](_0xbe3b[272],_0xbe3b[4]);$(wrapper)[_0xbe3b[275]](_0xbe3b[274],type);} ,setBlocks:function (type){$[_0xbe3b[20]](this[_0xbe3b[27]][_0xbe3b[263]],$[_0xbe3b[280]](function (i,el){var $el=this[_0xbe3b[62]][_0xbe3b[276]](el);if(!$el){return ;} ;if(type===_0xbe3b[255]&& typeof ($el[_0xbe3b[9]](_0xbe3b[277]))!==_0xbe3b[14]){$el[_0xbe3b[278]]($el[_0xbe3b[68]]());} else {$el[_0xbe3b[275]](_0xbe3b[274],type);this[_0xbe3b[62]][_0xbe3b[279]]($el,_0xbe3b[90]);} ;} ,this));} };} ,autosave:function (){return {enable:function (){if(!this[_0xbe3b[63]][_0xbe3b[28]]){return ;} ;this[_0xbe3b[28]][_0xbe3b[68]]=false;this[_0xbe3b[28]][_0xbe3b[281]]=(this[_0xbe3b[63]][_0xbe3b[282]])?this[_0xbe3b[63]][_0xbe3b[282]]:this[_0xbe3b[283]][_0xbe3b[273]](_0xbe3b[281]);if(!this[_0xbe3b[63]][_0xbe3b[284]]){this[_0xbe3b[285]]=setInterval($[_0xbe3b[280]](this[_0xbe3b[28]][_0xbe3b[244]],this),this[_0xbe3b[63]][_0xbe3b[285]]*1000);} ;} ,onChange:function (){if(!this[_0xbe3b[63]][_0xbe3b[284]]){return ;} ;this[_0xbe3b[28]][_0xbe3b[244]]();} ,load:function (){var html=this[_0xbe3b[35]][_0xbe3b[286]]();if(this[_0xbe3b[28]][_0xbe3b[68]]===html){return ;} ;if(this[_0xbe3b[62]][_0xbe3b[287]](html)){return ;} ;$[_0xbe3b[293]]({url:this[_0xbe3b[63]][_0xbe3b[28]],type:_0xbe3b[288],data:_0xbe3b[289]+this[_0xbe3b[28]][_0xbe3b[281]]+_0xbe3b[290]+this[_0xbe3b[28]][_0xbe3b[281]]+_0xbe3b[291]+escape(encodeURIComponent(html)),success:$[_0xbe3b[280]](function (data){this[_0xbe3b[28]][_0xbe3b[292]](data,html);} ,this)});} ,success:function (data,html){var json;try{json=$[_0xbe3b[294]](data);} catch(e){json=data;} ;var callbackName=( typeof json[_0xbe3b[19]]==_0xbe3b[14])?_0xbe3b[28]:_0xbe3b[295];this[_0xbe3b[36]][_0xbe3b[248]](callbackName,this[_0xbe3b[28]][_0xbe3b[281]],json);this[_0xbe3b[28]][_0xbe3b[68]]=html;} ,disable:function (){clearInterval(this[_0xbe3b[285]]);} };} ,block:function (){return {formatting:function (name){var type,value;if( typeof this[_0xbe3b[69]][name][_0xbe3b[9]]!=_0xbe3b[14]){type=_0xbe3b[9];} else {if( typeof this[_0xbe3b[69]][name][_0xbe3b[273]]!=_0xbe3b[14]){type=_0xbe3b[273];} else {if( typeof this[_0xbe3b[69]][name][_0xbe3b[296]]!=_0xbe3b[14]){type=_0xbe3b[296];} ;} ;} ;if(type){value=this[_0xbe3b[69]][name][type];} ;this[_0xbe3b[29]][_0xbe3b[298]](this[_0xbe3b[69]][name][_0xbe3b[297]],type,value);} ,format:function (tag,type,value){if(tag==_0xbe3b[299]){tag=_0xbe3b[78];} ;var formatTags=[_0xbe3b[77],_0xbe3b[79],_0xbe3b[78],_0xbe3b[80],_0xbe3b[81],_0xbe3b[82],_0xbe3b[83],_0xbe3b[84],_0xbe3b[85]];if($[_0xbe3b[300]](tag,formatTags)==-1){return ;} ;this[_0xbe3b[29]][_0xbe3b[301]]=(tag==_0xbe3b[79]||tag[_0xbe3b[10]](/h[1-6]/i)!=-1);if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;this[_0xbe3b[29]][_0xbe3b[263]]=this[_0xbe3b[56]][_0xbe3b[264]]();this[_0xbe3b[29]][_0xbe3b[302]]=this[_0xbe3b[29]][_0xbe3b[263]][_0xbe3b[21]];this[_0xbe3b[29]][_0xbe3b[303]]=type;this[_0xbe3b[29]][_0xbe3b[304]]=value;this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[29]][_0xbe3b[256]](tag);this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,set:function (tag){this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[29]][_0xbe3b[305]]=this[_0xbe3b[308]][_0xbe3b[307]][_0xbe3b[306]];if(this[_0xbe3b[308]][_0xbe3b[309]]){this[_0xbe3b[29]][_0xbe3b[310]](tag);} else {this[_0xbe3b[29]][_0xbe3b[311]](tag);} ;} ,setCollapsed:function (tag){var block=this[_0xbe3b[29]][_0xbe3b[263]][0];if(block===false){return ;} ;if(block[_0xbe3b[306]]==_0xbe3b[158]){if(tag!=_0xbe3b[78]){return ;} ;this[_0xbe3b[29]][_0xbe3b[312]]();return ;} ;var isContainerTable=(this[_0xbe3b[29]][_0xbe3b[305]]==_0xbe3b[145]||this[_0xbe3b[29]][_0xbe3b[305]]==_0xbe3b[313]);if(isContainerTable&&!this[_0xbe3b[63]][_0xbe3b[265]]){document[_0xbe3b[317]](_0xbe3b[314],false,_0xbe3b[315]+tag+_0xbe3b[316]);block=this[_0xbe3b[56]][_0xbe3b[318]]();this[_0xbe3b[29]][_0xbe3b[319]]($(block));} else {if(block[_0xbe3b[306]][_0xbe3b[320]]()!=tag){if(this[_0xbe3b[63]][_0xbe3b[265]]&&tag==_0xbe3b[77]){$(block)[_0xbe3b[323]](_0xbe3b[321])[_0xbe3b[322]](_0xbe3b[321]);this[_0xbe3b[62]][_0xbe3b[324]](block);} else {var $formatted=this[_0xbe3b[62]][_0xbe3b[325]](block,tag);this[_0xbe3b[29]][_0xbe3b[319]]($formatted);if(tag!=_0xbe3b[77]&&tag!=_0xbe3b[78]){$formatted[_0xbe3b[327]](_0xbe3b[119])[_0xbe3b[326]]();} ;if(this[_0xbe3b[29]][_0xbe3b[301]]){this[_0xbe3b[62]][_0xbe3b[328]]($formatted);} ;if(tag==_0xbe3b[77]||this[_0xbe3b[29]][_0xbe3b[329]]){$formatted[_0xbe3b[327]](_0xbe3b[77])[_0xbe3b[331]]()[_0xbe3b[330]]();} ;this[_0xbe3b[29]][_0xbe3b[332]]($formatted);} ;} else {if(tag==_0xbe3b[78]&&block[_0xbe3b[306]][_0xbe3b[320]]()==tag){if(this[_0xbe3b[63]][_0xbe3b[265]]){$(block)[_0xbe3b[323]](_0xbe3b[321])[_0xbe3b[322]](_0xbe3b[321]);this[_0xbe3b[62]][_0xbe3b[324]](block);} else {var $el=this[_0xbe3b[62]][_0xbe3b[325]](block,_0xbe3b[77]);this[_0xbe3b[29]][_0xbe3b[319]]($el);} ;} else {if(block[_0xbe3b[306]][_0xbe3b[320]]()==tag){this[_0xbe3b[29]][_0xbe3b[319]]($(block));} ;} ;} ;} ;} ,setMultiple:function (tag){var block=this[_0xbe3b[29]][_0xbe3b[263]][0];var isContainerTable=(this[_0xbe3b[29]][_0xbe3b[305]]==_0xbe3b[145]||this[_0xbe3b[29]][_0xbe3b[305]]==_0xbe3b[313]);if(block!==false&&this[_0xbe3b[29]][_0xbe3b[302]]===1){if(block[_0xbe3b[306]][_0xbe3b[320]]()==tag&&tag==_0xbe3b[78]){if(this[_0xbe3b[63]][_0xbe3b[265]]){$(block)[_0xbe3b[323]](_0xbe3b[321])[_0xbe3b[322]](_0xbe3b[321]);this[_0xbe3b[62]][_0xbe3b[324]](block);} else {var $el=this[_0xbe3b[62]][_0xbe3b[325]](block,_0xbe3b[77]);this[_0xbe3b[29]][_0xbe3b[319]]($el);} ;} else {if(block[_0xbe3b[306]]==_0xbe3b[158]){if(tag!=_0xbe3b[78]){return ;} ;this[_0xbe3b[29]][_0xbe3b[312]]();} else {if(this[_0xbe3b[29]][_0xbe3b[305]]==_0xbe3b[146]){this[_0xbe3b[29]][_0xbe3b[333]](tag);} else {if(this[_0xbe3b[63]][_0xbe3b[265]]&&((isContainerTable)||(this[_0xbe3b[308]][_0xbe3b[307]]!=block))){this[_0xbe3b[29]][_0xbe3b[334]](tag);} else {if(this[_0xbe3b[63]][_0xbe3b[265]]&&tag==_0xbe3b[77]){$(block)[_0xbe3b[323]](_0xbe3b[321])[_0xbe3b[322]](_0xbe3b[321]);this[_0xbe3b[62]][_0xbe3b[324]](block);} else {if(block[_0xbe3b[306]]===_0xbe3b[145]){this[_0xbe3b[29]][_0xbe3b[334]](tag);} else {var $formatted=this[_0xbe3b[62]][_0xbe3b[325]](block,tag);this[_0xbe3b[29]][_0xbe3b[319]]($formatted);if(this[_0xbe3b[29]][_0xbe3b[301]]){this[_0xbe3b[62]][_0xbe3b[328]]($formatted);} ;if(tag==_0xbe3b[77]||this[_0xbe3b[29]][_0xbe3b[329]]){$formatted[_0xbe3b[327]](_0xbe3b[77])[_0xbe3b[331]]()[_0xbe3b[330]]();} ;} ;} ;} ;} ;} ;} ;} else {if(this[_0xbe3b[63]][_0xbe3b[265]]||tag!=_0xbe3b[77]){if(tag==_0xbe3b[78]){var count=0;for(var i=0;i<this[_0xbe3b[29]][_0xbe3b[302]];i++){if(this[_0xbe3b[29]][_0xbe3b[263]][i][_0xbe3b[306]]==_0xbe3b[146]){count++;} ;} ;if(count==this[_0xbe3b[29]][_0xbe3b[302]]){$[_0xbe3b[20]](this[_0xbe3b[29]][_0xbe3b[263]],$[_0xbe3b[280]](function (i,s){if(this[_0xbe3b[63]][_0xbe3b[265]]){$(s)[_0xbe3b[323]](_0xbe3b[321])[_0xbe3b[322]](_0xbe3b[321]);this[_0xbe3b[62]][_0xbe3b[324]](s);} else {this[_0xbe3b[62]][_0xbe3b[325]](s,_0xbe3b[77]);} ;} ,this));return ;} ;} ;this[_0xbe3b[29]][_0xbe3b[334]](tag);} else {var classSize=0;var toggleType=false;if(this[_0xbe3b[29]][_0xbe3b[303]]==_0xbe3b[296]){toggleType=_0xbe3b[319];classSize=$(this[_0xbe3b[29]][_0xbe3b[263]])[_0xbe3b[251]](_0xbe3b[12]+this[_0xbe3b[29]][_0xbe3b[304]])[_0xbe3b[335]]();if(this[_0xbe3b[29]][_0xbe3b[302]]==classSize){toggleType=_0xbe3b[319];} else {if(this[_0xbe3b[29]][_0xbe3b[302]]>classSize){toggleType=_0xbe3b[256];} else {if(classSize===0){toggleType=_0xbe3b[256];} ;} ;} ;} ;var exceptTags=[_0xbe3b[126],_0xbe3b[127],_0xbe3b[128],_0xbe3b[336],_0xbe3b[337],_0xbe3b[338],_0xbe3b[339],_0xbe3b[340]];$[_0xbe3b[20]](this[_0xbe3b[29]][_0xbe3b[263]],$[_0xbe3b[280]](function (i,s){if($[_0xbe3b[300]](s[_0xbe3b[306]][_0xbe3b[320]](),exceptTags)!=-1){return ;} ;var $formatted=this[_0xbe3b[62]][_0xbe3b[325]](s,tag);if(toggleType){if(toggleType==_0xbe3b[319]){this[_0xbe3b[29]][_0xbe3b[319]]($formatted);} else {if(toggleType==_0xbe3b[326]){this[_0xbe3b[29]][_0xbe3b[326]]($formatted);} else {if(toggleType==_0xbe3b[256]){this[_0xbe3b[29]][_0xbe3b[341]]($formatted);} ;} ;} ;} else {this[_0xbe3b[29]][_0xbe3b[319]]($formatted);} ;if(tag!=_0xbe3b[77]&&tag!=_0xbe3b[78]){$formatted[_0xbe3b[327]](_0xbe3b[119])[_0xbe3b[326]]();} ;if(this[_0xbe3b[29]][_0xbe3b[301]]){this[_0xbe3b[62]][_0xbe3b[328]]($formatted);} ;if(tag==_0xbe3b[77]||this[_0xbe3b[29]][_0xbe3b[329]]){$formatted[_0xbe3b[327]](_0xbe3b[77])[_0xbe3b[331]]()[_0xbe3b[330]]();} ;} ,this));} ;} ;} ,setForce:function ($el){if(this[_0xbe3b[29]][_0xbe3b[303]]==_0xbe3b[296]){$el[_0xbe3b[342]](this[_0xbe3b[29]][_0xbe3b[304]]);return ;} else {if(this[_0xbe3b[29]][_0xbe3b[303]]==_0xbe3b[273]||this[_0xbe3b[29]][_0xbe3b[303]]==_0xbe3b[9]){$el[_0xbe3b[273]](this[_0xbe3b[29]][_0xbe3b[304]][_0xbe3b[281]],this[_0xbe3b[29]][_0xbe3b[304]][_0xbe3b[304]]);return ;} ;} ;} ,toggle:function ($el){if(this[_0xbe3b[29]][_0xbe3b[303]]==_0xbe3b[296]){$el[_0xbe3b[343]](this[_0xbe3b[29]][_0xbe3b[304]]);return ;} else {if(this[_0xbe3b[29]][_0xbe3b[303]]==_0xbe3b[273]||this[_0xbe3b[29]][_0xbe3b[303]]==_0xbe3b[9]){if($el[_0xbe3b[273]](this[_0xbe3b[29]][_0xbe3b[304]][_0xbe3b[281]])==this[_0xbe3b[29]][_0xbe3b[304]][_0xbe3b[304]]){$el[_0xbe3b[344]](this[_0xbe3b[29]][_0xbe3b[304]][_0xbe3b[281]]);} else {$el[_0xbe3b[273]](this[_0xbe3b[29]][_0xbe3b[304]][_0xbe3b[281]],this[_0xbe3b[29]][_0xbe3b[304]][_0xbe3b[304]]);} ;return ;} else {$el[_0xbe3b[344]](_0xbe3b[345]);return ;} ;} ;} ,remove:function ($el){$el[_0xbe3b[346]](this[_0xbe3b[29]][_0xbe3b[304]]);} ,formatListToBlockquote:function (){var block=$(this[_0xbe3b[29]][_0xbe3b[263]][0])[_0xbe3b[348]](_0xbe3b[347]);$(block)[_0xbe3b[327]](_0xbe3b[347])[_0xbe3b[331]]()[_0xbe3b[330]]();$(block)[_0xbe3b[327]](_0xbe3b[128])[_0xbe3b[322]]($(_0xbe3b[321]))[_0xbe3b[331]]()[_0xbe3b[330]]();var $el=this[_0xbe3b[62]][_0xbe3b[325]](block,_0xbe3b[78]);this[_0xbe3b[29]][_0xbe3b[319]]($el);} ,formatBlockquote:function (tag){document[_0xbe3b[317]](_0xbe3b[75]);document[_0xbe3b[317]](_0xbe3b[314],false,tag);this[_0xbe3b[34]][_0xbe3b[349]]();this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[350])[_0xbe3b[326]]();var formatted=this[_0xbe3b[56]][_0xbe3b[318]]();if(tag!=_0xbe3b[77]){$(formatted)[_0xbe3b[327]](_0xbe3b[119])[_0xbe3b[326]]();} ;if(!this[_0xbe3b[63]][_0xbe3b[265]]){this[_0xbe3b[29]][_0xbe3b[319]]($(formatted));} ;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[352])[_0xbe3b[20]]($[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[351]],this));if(this[_0xbe3b[63]][_0xbe3b[265]]&&tag==_0xbe3b[77]){this[_0xbe3b[62]][_0xbe3b[324]](formatted);} ;} ,formatWrap:function (tag){if(this[_0xbe3b[29]][_0xbe3b[305]]==_0xbe3b[156]||this[_0xbe3b[29]][_0xbe3b[305]]==_0xbe3b[157]){if(tag==_0xbe3b[78]){this[_0xbe3b[29]][_0xbe3b[312]]();} else {return ;} ;} ;var formatted=this[_0xbe3b[56]][_0xbe3b[271]](tag);if(formatted===false){return ;} ;var $formatted=$(formatted);this[_0xbe3b[29]][_0xbe3b[332]]($formatted);var $elements=$formatted[_0xbe3b[327]](this[_0xbe3b[63]][_0xbe3b[235]][_0xbe3b[241]](_0xbe3b[353])+_0xbe3b[354]);if((this[_0xbe3b[63]][_0xbe3b[265]]&&tag==_0xbe3b[77])||tag==_0xbe3b[79]||tag==_0xbe3b[78]){$elements[_0xbe3b[322]](_0xbe3b[355]);} ;$elements[_0xbe3b[331]]()[_0xbe3b[330]]();if(tag!=_0xbe3b[77]&&tag!=_0xbe3b[78]){$formatted[_0xbe3b[327]](_0xbe3b[119])[_0xbe3b[326]]();} ;$[_0xbe3b[20]](this[_0xbe3b[29]][_0xbe3b[263]],$[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[351]],this));$formatted[_0xbe3b[322]](this[_0xbe3b[56]][_0xbe3b[356]](2));if(!this[_0xbe3b[63]][_0xbe3b[265]]){this[_0xbe3b[29]][_0xbe3b[319]]($formatted);} ;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[352])[_0xbe3b[20]]($[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[351]],this));$formatted[_0xbe3b[327]](_0xbe3b[357])[_0xbe3b[326]]();if(this[_0xbe3b[29]][_0xbe3b[301]]){this[_0xbe3b[62]][_0xbe3b[328]]($formatted);} ;if(this[_0xbe3b[63]][_0xbe3b[265]]&&tag==_0xbe3b[77]){this[_0xbe3b[62]][_0xbe3b[324]]($formatted);} ;} ,formatTableWrapping:function ($formatted){if($formatted[_0xbe3b[348]](_0xbe3b[358])[_0xbe3b[335]]()===0){return ;} ;if($formatted[_0xbe3b[348]](_0xbe3b[359])[_0xbe3b[335]]()===0){$formatted[_0xbe3b[271]](_0xbe3b[360]);} ;if($formatted[_0xbe3b[348]](_0xbe3b[336])[_0xbe3b[335]]()===0&&$formatted[_0xbe3b[348]](_0xbe3b[337])[_0xbe3b[335]]()===0){$formatted[_0xbe3b[271]](_0xbe3b[361]);} ;} ,removeData:function (name,value){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$(blocks)[_0xbe3b[344]](_0xbe3b[362]+name);this[_0xbe3b[35]][_0xbe3b[269]]();} ,setData:function (name,value){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$(blocks)[_0xbe3b[273]](_0xbe3b[362]+name,value);this[_0xbe3b[35]][_0xbe3b[269]]();} ,toggleData:function (name,value){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$[_0xbe3b[20]](blocks,function (){if($(this)[_0xbe3b[273]](_0xbe3b[362]+name)){$(this)[_0xbe3b[344]](_0xbe3b[362]+name);} else {$(this)[_0xbe3b[273]](_0xbe3b[362]+name,value);} ;} );} ,removeAttr:function (attr,value){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$(blocks)[_0xbe3b[344]](attr);this[_0xbe3b[35]][_0xbe3b[269]]();} ,setAttr:function (attr,value){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$(blocks)[_0xbe3b[273]](attr,value);this[_0xbe3b[35]][_0xbe3b[269]]();} ,toggleAttr:function (attr,value){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$[_0xbe3b[20]](blocks,function (){if($(this)[_0xbe3b[273]](name)){$(this)[_0xbe3b[344]](name);} else {$(this)[_0xbe3b[273]](name,value);} ;} );} ,removeClass:function (className){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$(blocks)[_0xbe3b[346]](className);this[_0xbe3b[62]][_0xbe3b[279]](blocks,_0xbe3b[296]);this[_0xbe3b[35]][_0xbe3b[269]]();} ,setClass:function (className){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$(blocks)[_0xbe3b[342]](className);this[_0xbe3b[35]][_0xbe3b[269]]();} ,toggleClass:function (className){var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();$(blocks)[_0xbe3b[343]](className);this[_0xbe3b[35]][_0xbe3b[269]]();} };} ,buffer:function (){return {set:function (type){if( typeof type==_0xbe3b[14]||type==_0xbe3b[363]){this[_0xbe3b[30]][_0xbe3b[364]]();} else {this[_0xbe3b[30]][_0xbe3b[365]]();} ;} ,setUndo:function (){this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[63]][_0xbe3b[30]][_0xbe3b[16]](this[_0xbe3b[261]][_0xbe3b[68]]());this[_0xbe3b[56]][_0xbe3b[268]]();} ,setRedo:function (){this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[63]][_0xbe3b[366]][_0xbe3b[16]](this[_0xbe3b[261]][_0xbe3b[68]]());this[_0xbe3b[56]][_0xbe3b[268]]();} ,getUndo:function (){this[_0xbe3b[261]][_0xbe3b[68]](this[_0xbe3b[63]][_0xbe3b[30]][_0xbe3b[367]]());} ,getRedo:function (){this[_0xbe3b[261]][_0xbe3b[68]](this[_0xbe3b[63]][_0xbe3b[366]][_0xbe3b[367]]());} ,add:function (){this[_0xbe3b[63]][_0xbe3b[30]][_0xbe3b[16]](this[_0xbe3b[261]][_0xbe3b[68]]());} ,undo:function (){if(this[_0xbe3b[63]][_0xbe3b[30]][_0xbe3b[21]]===0){return ;} ;this[_0xbe3b[30]][_0xbe3b[256]](_0xbe3b[368]);this[_0xbe3b[30]][_0xbe3b[369]]();this[_0xbe3b[56]][_0xbe3b[268]]();setTimeout($[_0xbe3b[280]](this[_0xbe3b[51]][_0xbe3b[244]],this),50);} ,redo:function (){if(this[_0xbe3b[63]][_0xbe3b[366]][_0xbe3b[21]]===0){return ;} ;this[_0xbe3b[30]][_0xbe3b[256]](_0xbe3b[363]);this[_0xbe3b[30]][_0xbe3b[370]]();this[_0xbe3b[56]][_0xbe3b[268]]();setTimeout($[_0xbe3b[280]](this[_0xbe3b[51]][_0xbe3b[244]],this),50);} };} ,build:function (){return {run:function (){this[_0xbe3b[31]][_0xbe3b[371]]();this[_0xbe3b[31]][_0xbe3b[372]]();this[_0xbe3b[31]][_0xbe3b[373]]();this[_0xbe3b[31]][_0xbe3b[374]]();this[_0xbe3b[31]][_0xbe3b[375]]();} ,isTextarea:function (){return (this[_0xbe3b[229]][0][_0xbe3b[306]]===_0xbe3b[376]);} ,createContainerBox:function (){this[_0xbe3b[377]]=$(_0xbe3b[378]);} ,createTextarea:function (){this[_0xbe3b[283]]=$(_0xbe3b[380])[_0xbe3b[273]](_0xbe3b[281],this[_0xbe3b[31]][_0xbe3b[379]]());} ,getTextareaName:function (){var name=this[_0xbe3b[229]][_0xbe3b[273]](_0xbe3b[381]);if( typeof (name)==_0xbe3b[14]){name=_0xbe3b[382]+this[_0xbe3b[230]];} ;return name;} ,loadContent:function (){var func=(this[_0xbe3b[31]][_0xbe3b[383]]())?_0xbe3b[384]:_0xbe3b[68];this[_0xbe3b[385]]=$[_0xbe3b[386]](this[_0xbe3b[229]][func]());} ,enableEditor:function (){this[_0xbe3b[261]][_0xbe3b[273]]({"\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65":true,"\x64\x69\x72":this[_0xbe3b[63]][_0xbe3b[387]]});} ,loadEditor:function (){var func=(this[_0xbe3b[31]][_0xbe3b[383]]())?_0xbe3b[388]:_0xbe3b[389];this[_0xbe3b[31]][func]();} ,fromTextarea:function (){this[_0xbe3b[261]]=$(_0xbe3b[390]);this[_0xbe3b[283]]=this[_0xbe3b[229]];this[_0xbe3b[377]][_0xbe3b[391]](this.$element)[_0xbe3b[322]](this.$editor)[_0xbe3b[322]](this.$element);this[_0xbe3b[261]][_0xbe3b[342]](_0xbe3b[392]);this[_0xbe3b[229]][_0xbe3b[393]]();} ,fromElement:function (){this[_0xbe3b[261]]=this[_0xbe3b[229]];this[_0xbe3b[31]][_0xbe3b[394]]();this[_0xbe3b[377]][_0xbe3b[391]](this.$editor)[_0xbe3b[322]](this.$editor)[_0xbe3b[322]](this.$textarea);this[_0xbe3b[261]][_0xbe3b[342]](_0xbe3b[392]);this[_0xbe3b[283]][_0xbe3b[393]]();} ,setCodeAndCall:function (){this[_0xbe3b[35]][_0xbe3b[256]](this[_0xbe3b[385]]);this[_0xbe3b[31]][_0xbe3b[395]]();this[_0xbe3b[31]][_0xbe3b[396]]();if(!this[_0xbe3b[63]][_0xbe3b[397]]){setTimeout($[_0xbe3b[280]](this[_0xbe3b[35]][_0xbe3b[398]],this),200);} ;} ,callEditor:function (){this[_0xbe3b[31]][_0xbe3b[399]]();this[_0xbe3b[31]][_0xbe3b[400]]();this[_0xbe3b[31]][_0xbe3b[401]]();if(this[_0xbe3b[63]][_0xbe3b[60]]){this[_0xbe3b[63]][_0xbe3b[60]]=this[_0xbe3b[60]][_0xbe3b[22]]();this[_0xbe3b[60]][_0xbe3b[31]]();} ;this[_0xbe3b[50]][_0xbe3b[402]]();this[_0xbe3b[31]][_0xbe3b[403]]();setTimeout($[_0xbe3b[280]](this[_0xbe3b[51]][_0xbe3b[244]],this),4);this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[22]);} ,setOptions:function (){$(this.$textarea)[_0xbe3b[273]](_0xbe3b[404],this[_0xbe3b[63]][_0xbe3b[387]]);if(this[_0xbe3b[63]][_0xbe3b[265]]){this[_0xbe3b[261]][_0xbe3b[342]](_0xbe3b[405]);} ;if(this[_0xbe3b[63]][_0xbe3b[406]]){this[_0xbe3b[261]][_0xbe3b[273]](_0xbe3b[406],this[_0xbe3b[63]][_0xbe3b[406]]);} ;if(this[_0xbe3b[63]][_0xbe3b[407]]){this[_0xbe3b[261]][_0xbe3b[275]](_0xbe3b[407],this[_0xbe3b[63]][_0xbe3b[407]]);} ;if(this[_0xbe3b[63]][_0xbe3b[408]]){this[_0xbe3b[261]][_0xbe3b[275]](_0xbe3b[408],this[_0xbe3b[63]][_0xbe3b[408]]);} ;} ,setEvents:function (){this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[409],$[_0xbe3b[280]](function (e){e=e[_0xbe3b[410]]||e;if(window[_0xbe3b[411]]===undefined||!e[_0xbe3b[412]]){return true;} ;var length=e[_0xbe3b[412]][_0xbe3b[413]][_0xbe3b[21]];if(length===0){this[_0xbe3b[35]][_0xbe3b[269]]();setTimeout($[_0xbe3b[280]](this[_0xbe3b[34]][_0xbe3b[349]],this),1);this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[414],e);return true;} else {e[_0xbe3b[415]]();if(this[_0xbe3b[63]][_0xbe3b[416]]||this[_0xbe3b[63]][_0xbe3b[417]]){var files=e[_0xbe3b[412]][_0xbe3b[413]];this[_0xbe3b[61]][_0xbe3b[418]](files[0],e);} ;} ;setTimeout($[_0xbe3b[280]](this[_0xbe3b[34]][_0xbe3b[349]],this),1);this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[414],e);} ,this));this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[420],$[_0xbe3b[280]](function (e){var type=_0xbe3b[421];if((this[_0xbe3b[36]][_0xbe3b[422]]()==_0xbe3b[421]||this[_0xbe3b[36]][_0xbe3b[422]]()==_0xbe3b[423])){type=false;} ;this[_0xbe3b[36]][_0xbe3b[424]](type);this[_0xbe3b[62]][_0xbe3b[425]]();this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[421],e);} ,this));this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[426],$[_0xbe3b[280]](this[_0xbe3b[53]][_0xbe3b[22]],this));this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[427],$[_0xbe3b[280]](this[_0xbe3b[44]][_0xbe3b[22]],this));this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[428],$[_0xbe3b[280]](this[_0xbe3b[45]][_0xbe3b[22]],this));if($[_0xbe3b[15]](this[_0xbe3b[63]][_0xbe3b[429]])){this[_0xbe3b[283]][_0xbe3b[419]](_0xbe3b[430],$[_0xbe3b[280]](this[_0xbe3b[63]][_0xbe3b[429]],this));} ;if($[_0xbe3b[15]](this[_0xbe3b[63]][_0xbe3b[431]])){this[_0xbe3b[283]][_0xbe3b[419]](_0xbe3b[432],$[_0xbe3b[280]](this[_0xbe3b[63]][_0xbe3b[431]],this));} ;if($[_0xbe3b[15]](this[_0xbe3b[63]][_0xbe3b[433]])){this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[434],$[_0xbe3b[280]](this[_0xbe3b[63]][_0xbe3b[433]],this));} ;var clickedElement;$(document)[_0xbe3b[419]](_0xbe3b[435],function (e){clickedElement=$(e[_0xbe3b[436]]);} );this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[437],$[_0xbe3b[280]](function (e){if(this[_0xbe3b[231]]){return ;} ;var $el=$(clickedElement);if(!$el[_0xbe3b[439]](_0xbe3b[438])&&!$el[_0xbe3b[441]](_0xbe3b[440])&&$el[_0xbe3b[443]](_0xbe3b[442])[_0xbe3b[335]]()===0){this[_0xbe3b[62]][_0xbe3b[425]]();if($[_0xbe3b[15]](this[_0xbe3b[63]][_0xbe3b[444]])){this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[445],e);} ;} ;} ,this));} ,setHelpers:function (){this[_0xbe3b[28]][_0xbe3b[446]]();this[_0xbe3b[54]][_0xbe3b[446]]();if(this[_0xbe3b[63]][_0xbe3b[39]]){setTimeout($[_0xbe3b[280]](this[_0xbe3b[39]][_0xbe3b[447]],this),100);} ;if(this[_0xbe3b[63]][_0xbe3b[448]]){setTimeout($[_0xbe3b[280]](this[_0xbe3b[39]][_0xbe3b[449]],this),100);} ;} ,plugins:function (){if(!this[_0xbe3b[63]][_0xbe3b[403]]){return ;} ;if(!RedactorPlugins){return ;} ;$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[403]],$[_0xbe3b[280]](function (i,s){if( typeof RedactorPlugins[s]===_0xbe3b[14]){return ;} ;if($[_0xbe3b[300]](s,$[_0xbe3b[23]][_0xbe3b[26]])!==-1){$[_0xbe3b[19]](_0xbe3b[450]+s+_0xbe3b[451]);return ;} ;if(!$[_0xbe3b[15]](RedactorPlugins[s])){return ;} ;this[s]=RedactorPlugins[s]();var methods=this[_0xbe3b[254]](this[s]);var len=methods[_0xbe3b[21]];for(var z=0;z<len;z++){this[s][methods[z]]=this[s][methods[z]][_0xbe3b[1]](this);} ;if($[_0xbe3b[15]](this[s][_0xbe3b[22]])){this[s][_0xbe3b[22]]();} ;} ,this));} ,disableMozillaEditing:function (){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[452])){return ;} ;try{document[_0xbe3b[317]](_0xbe3b[453],false,false);document[_0xbe3b[317]](_0xbe3b[454],false,false);} catch(e){} ;} };} ,button:function (){return {build:function (btnName,btnObject){var $button=$(_0xbe3b[455]+btnName+_0xbe3b[456]+btnName+_0xbe3b[457])[_0xbe3b[273]](_0xbe3b[406],_0xbe3b[11]);if(btnObject[_0xbe3b[458]]||btnObject[_0xbe3b[459]]||btnObject[_0xbe3b[37]]){$button[_0xbe3b[419]](_0xbe3b[460],$[_0xbe3b[280]](function (e){if($button[_0xbe3b[439]](_0xbe3b[461])){return false;} ;var type=_0xbe3b[458];var callback=btnObject[_0xbe3b[458]];if(btnObject[_0xbe3b[459]]){type=_0xbe3b[459];callback=btnObject[_0xbe3b[459]];} else {if(btnObject[_0xbe3b[37]]){type=_0xbe3b[37];callback=false;} ;} ;this[_0xbe3b[32]][_0xbe3b[462]](e,btnName,type,callback);} ,this));} ;if(btnObject[_0xbe3b[37]]){var $dropdown=$(_0xbe3b[463]+btnName+_0xbe3b[464]);$button[_0xbe3b[9]](_0xbe3b[37],$dropdown);this[_0xbe3b[37]][_0xbe3b[31]](btnName,$dropdown,btnObject[_0xbe3b[37]]);} ;if(this[_0xbe3b[62]][_0xbe3b[465]]()){this[_0xbe3b[32]][_0xbe3b[467]]($button,btnName,btnObject[_0xbe3b[466]]);} ;return $button;} ,createTooltip:function ($button,name,title){var $tooltip=$(_0xbe3b[469])[_0xbe3b[342]](_0xbe3b[468]+name)[_0xbe3b[393]]()[_0xbe3b[68]](title);$tooltip[_0xbe3b[470]](_0xbe3b[87]);$button[_0xbe3b[419]](_0xbe3b[471],function (){if($(this)[_0xbe3b[439]](_0xbe3b[461])){return ;} ;var pos=$button[_0xbe3b[472]]();var height=$button[_0xbe3b[473]]();var width=$button[_0xbe3b[474]]();$tooltip[_0xbe3b[475]]();$tooltip[_0xbe3b[275]]({top:(pos[_0xbe3b[476]]+height)+_0xbe3b[477],left:(pos[_0xbe3b[478]]+width/2-$tooltip[_0xbe3b[474]]()/2)+_0xbe3b[477]});} );$button[_0xbe3b[419]](_0xbe3b[479],function (){$tooltip[_0xbe3b[393]]();} );} ,onClick:function (e,btnName,type,callback){this[_0xbe3b[32]][_0xbe3b[480]]=this[_0xbe3b[33]][_0xbe3b[481]]();e[_0xbe3b[415]]();if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){e[_0xbe3b[482]]=false;} ;if(type==_0xbe3b[459]){this[_0xbe3b[42]][_0xbe3b[298]](callback);} else {if(type==_0xbe3b[37]){this[_0xbe3b[37]][_0xbe3b[475]](e,btnName);} else {var func;if($[_0xbe3b[15]](callback)){callback[_0xbe3b[6]](this,btnName);this[_0xbe3b[51]][_0xbe3b[483]](e,btnName);} else {if(callback[_0xbe3b[10]](/\./)!=_0xbe3b[11]){func=callback[_0xbe3b[13]](_0xbe3b[12]);if( typeof this[func[0]]!=_0xbe3b[14]){this[func[0]][func[1]](btnName);this[_0xbe3b[51]][_0xbe3b[483]](e,btnName);} ;} else {this[callback](btnName);this[_0xbe3b[51]][_0xbe3b[483]](e,btnName);} ;} ;} ;} ;} ,get:function (key){return this[_0xbe3b[485]][_0xbe3b[327]](_0xbe3b[484]+key);} ,setActive:function (key){this[_0xbe3b[32]][_0xbe3b[286]](key)[_0xbe3b[342]](_0xbe3b[486]);} ,setInactive:function (key){this[_0xbe3b[32]][_0xbe3b[286]](key)[_0xbe3b[346]](_0xbe3b[486]);} ,setInactiveAll:function (key){if( typeof key==_0xbe3b[14]){this[_0xbe3b[485]][_0xbe3b[327]](_0xbe3b[487])[_0xbe3b[346]](_0xbe3b[486]);} else {this[_0xbe3b[485]][_0xbe3b[327]](_0xbe3b[487])[_0xbe3b[489]](_0xbe3b[488]+key)[_0xbe3b[346]](_0xbe3b[486]);} ;} ,setActiveInVisual:function (){this[_0xbe3b[485]][_0xbe3b[327]](_0xbe3b[487])[_0xbe3b[489]](_0xbe3b[490])[_0xbe3b[346]](_0xbe3b[461]);} ,setInactiveInCode:function (){this[_0xbe3b[485]][_0xbe3b[327]](_0xbe3b[487])[_0xbe3b[489]](_0xbe3b[490])[_0xbe3b[342]](_0xbe3b[461]);} ,changeIcon:function (key,classname){this[_0xbe3b[32]][_0xbe3b[286]](key)[_0xbe3b[342]](_0xbe3b[491]+classname);} ,removeIcon:function (key,classname){this[_0xbe3b[32]][_0xbe3b[286]](key)[_0xbe3b[346]](_0xbe3b[491]+classname);} ,setAwesome:function (key,name){var $button=this[_0xbe3b[32]][_0xbe3b[286]](key);$button[_0xbe3b[346]](_0xbe3b[493])[_0xbe3b[342]](_0xbe3b[492]);$button[_0xbe3b[68]](_0xbe3b[494]+name+_0xbe3b[495]);} ,addCallback:function ($btn,callback){var type=(callback==_0xbe3b[37])?_0xbe3b[37]:_0xbe3b[458];var key=$btn[_0xbe3b[273]](_0xbe3b[496]);$btn[_0xbe3b[419]](_0xbe3b[460],$[_0xbe3b[280]](function (e){if($btn[_0xbe3b[439]](_0xbe3b[461])){return false;} ;this[_0xbe3b[32]][_0xbe3b[462]](e,key,type,callback);} ,this));} ,addDropdown:function ($btn,dropdown){var key=$btn[_0xbe3b[273]](_0xbe3b[496]);this[_0xbe3b[32]][_0xbe3b[497]]($btn,_0xbe3b[37]);var $dropdown=$(_0xbe3b[463]+key+_0xbe3b[464]);$btn[_0xbe3b[9]](_0xbe3b[37],$dropdown);if(dropdown){this[_0xbe3b[37]][_0xbe3b[31]](key,$dropdown,dropdown);} ;return $dropdown;} ,add:function (key,title){if(!this[_0xbe3b[63]][_0xbe3b[60]]){return ;} ;var btn=this[_0xbe3b[32]][_0xbe3b[31]](key,{title:title});btn[_0xbe3b[342]](_0xbe3b[493]);this[_0xbe3b[485]][_0xbe3b[322]]($(_0xbe3b[498])[_0xbe3b[322]](btn));return btn;} ,addFirst:function (key,title){if(!this[_0xbe3b[63]][_0xbe3b[60]]){return ;} ;var btn=this[_0xbe3b[32]][_0xbe3b[31]](key,{title:title});this[_0xbe3b[485]][_0xbe3b[323]]($(_0xbe3b[498])[_0xbe3b[322]](btn));return btn;} ,addAfter:function (afterkey,key,title){if(!this[_0xbe3b[63]][_0xbe3b[60]]){return ;} ;var btn=this[_0xbe3b[32]][_0xbe3b[31]](key,{title:title});var $btn=this[_0xbe3b[32]][_0xbe3b[286]](afterkey);if($btn[_0xbe3b[335]]()!==0){$btn[_0xbe3b[500]]()[_0xbe3b[499]]($(_0xbe3b[498])[_0xbe3b[322]](btn));} else {this[_0xbe3b[485]][_0xbe3b[322]]($(_0xbe3b[498])[_0xbe3b[322]](btn));} ;return btn;} ,addBefore:function (beforekey,key,title){if(!this[_0xbe3b[63]][_0xbe3b[60]]){return ;} ;var btn=this[_0xbe3b[32]][_0xbe3b[31]](key,{title:title});var $btn=this[_0xbe3b[32]][_0xbe3b[286]](beforekey);if($btn[_0xbe3b[335]]()!==0){$btn[_0xbe3b[500]]()[_0xbe3b[501]]($(_0xbe3b[498])[_0xbe3b[322]](btn));} else {this[_0xbe3b[485]][_0xbe3b[322]]($(_0xbe3b[498])[_0xbe3b[322]](btn));} ;return btn;} ,remove:function (key){this[_0xbe3b[32]][_0xbe3b[286]](key)[_0xbe3b[326]]();} };} ,caret:function (){return {setStart:function (node){if(!this[_0xbe3b[62]][_0xbe3b[502]](node)){var space=this[_0xbe3b[62]][_0xbe3b[503]]();$(node)[_0xbe3b[323]](space);this[_0xbe3b[33]][_0xbe3b[449]](space);} else {this[_0xbe3b[33]][_0xbe3b[256]](node,0,node,0);} ;} ,setEnd:function (node){this[_0xbe3b[33]][_0xbe3b[256]](node,1,node,1);} ,set:function (orgn,orgo,focn,foco){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;orgn=orgn[0]||orgn;focn=focn[0]||focn;if(this[_0xbe3b[62]][_0xbe3b[504]](orgn[_0xbe3b[306]])&&orgn[_0xbe3b[505]]===_0xbe3b[255]){orgn[_0xbe3b[505]]=this[_0xbe3b[63]][_0xbe3b[506]];} ;if(orgn[_0xbe3b[306]]==_0xbe3b[507]&&this[_0xbe3b[63]][_0xbe3b[265]]===false){var par=$(this[_0xbe3b[63]][_0xbe3b[508]])[0];$(orgn)[_0xbe3b[278]](par);orgn=par;focn=orgn;} ;this[_0xbe3b[56]][_0xbe3b[286]]();try{this[_0xbe3b[308]][_0xbe3b[447]](orgn,orgo);this[_0xbe3b[308]][_0xbe3b[449]](focn,foco);} catch(e){} ;this[_0xbe3b[56]][_0xbe3b[509]]();} ,setAfter:function (node){try{var tag=$(node)[0][_0xbe3b[306]];if(tag!=_0xbe3b[507]&&!this[_0xbe3b[62]][_0xbe3b[502]](node)){var space=this[_0xbe3b[62]][_0xbe3b[503]]();$(node)[_0xbe3b[499]](space);this[_0xbe3b[33]][_0xbe3b[449]](space);} else {if(tag!=_0xbe3b[507]&&this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[33]][_0xbe3b[447]]($(node)[_0xbe3b[510]]());} else {this[_0xbe3b[33]][_0xbe3b[511]](node,_0xbe3b[499]);} ;} ;} catch(e){var space=this[_0xbe3b[62]][_0xbe3b[503]]();$(node)[_0xbe3b[499]](space);this[_0xbe3b[33]][_0xbe3b[449]](space);} ;} ,setBefore:function (node){if(this[_0xbe3b[62]][_0xbe3b[502]](node)){this[_0xbe3b[33]][_0xbe3b[449]]($(node)[_0xbe3b[512]]());} else {this[_0xbe3b[33]][_0xbe3b[511]](node,_0xbe3b[501]);} ;} ,setAfterOrBefore:function (node,type){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;node=node[0]||node;this[_0xbe3b[56]][_0xbe3b[286]]();if(type==_0xbe3b[499]){try{this[_0xbe3b[308]][_0xbe3b[513]](node);this[_0xbe3b[308]][_0xbe3b[514]](node);} catch(e){} ;} else {try{this[_0xbe3b[308]][_0xbe3b[515]](node);this[_0xbe3b[308]][_0xbe3b[516]](node);} catch(e){} ;} ;this[_0xbe3b[308]][_0xbe3b[517]](false);this[_0xbe3b[56]][_0xbe3b[509]]();} ,getOffsetOfElement:function (node){node=node[0]||node;this[_0xbe3b[56]][_0xbe3b[286]]();var cloned=this[_0xbe3b[308]][_0xbe3b[518]]();cloned[_0xbe3b[519]](node);cloned[_0xbe3b[449]](this[_0xbe3b[308]][_0xbe3b[520]],this[_0xbe3b[308]][_0xbe3b[521]]);return $[_0xbe3b[386]](cloned.toString())[_0xbe3b[21]];} ,getOffset:function (){var offset=0;var sel=window[_0xbe3b[522]]();if(sel[_0xbe3b[523]]>0){var range=window[_0xbe3b[522]]()[_0xbe3b[524]](0);var preCaretRange=range[_0xbe3b[518]]();preCaretRange[_0xbe3b[519]](this[_0xbe3b[261]][0]);preCaretRange[_0xbe3b[449]](range[_0xbe3b[520]],range[_0xbe3b[521]]);offset=preCaretRange.toString()[_0xbe3b[21]];} ;return offset;} ,setOffset:function (start,end){if( typeof end==_0xbe3b[14]){end=start;} ;if(!this[_0xbe3b[39]][_0xbe3b[525]]()){this[_0xbe3b[39]][_0xbe3b[447]]();} ;var range=document[_0xbe3b[526]]();var sel=document[_0xbe3b[522]]();var node,offset=0;var walker=document[_0xbe3b[527]](this[_0xbe3b[261]][0],NodeFilter.SHOW_TEXT,null,null);while(node=walker[_0xbe3b[529]]()){offset+=node[_0xbe3b[528]][_0xbe3b[21]];if(offset>start){range[_0xbe3b[447]](node,node[_0xbe3b[528]][_0xbe3b[21]]+start-offset);start=Infinity;} ;if(offset>=end){range[_0xbe3b[449]](node,node[_0xbe3b[528]][_0xbe3b[21]]+end-offset);break ;} ;} ;sel[_0xbe3b[530]]();sel[_0xbe3b[509]](range);} ,setToPoint:function (start,end){this[_0xbe3b[33]][_0xbe3b[531]](start,end);} ,getCoords:function (){return this[_0xbe3b[33]][_0xbe3b[481]]();} };} ,clean:function (){return {onSet:function (html){html=this[_0xbe3b[34]][_0xbe3b[532]](html);html=html[_0xbe3b[534]](/<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi,_0xbe3b[533]);html=html[_0xbe3b[534]](/\$/g,_0xbe3b[535]);html=html[_0xbe3b[534]](/”/g,_0xbe3b[536]);html=html[_0xbe3b[534]](/‘/g,_0xbe3b[537]);html=html[_0xbe3b[534]](/’/g,_0xbe3b[537]);if(this[_0xbe3b[63]][_0xbe3b[538]]){html=this[_0xbe3b[34]][_0xbe3b[538]](html);} ;if(this[_0xbe3b[63]][_0xbe3b[265]]){html=this[_0xbe3b[34]][_0xbe3b[539]](html);} ;html=this[_0xbe3b[34]][_0xbe3b[540]](html);var $div=$(_0xbe3b[541]);$div[_0xbe3b[68]](html);var fonts=$div[_0xbe3b[327]](_0xbe3b[542]);if(fonts[_0xbe3b[21]]!==0){fonts[_0xbe3b[278]](function (){var $el=$(this);var $span=$(_0xbe3b[469])[_0xbe3b[273]](_0xbe3b[90],$el[_0xbe3b[273]](_0xbe3b[90]));return $span[_0xbe3b[322]]($el[_0xbe3b[331]]());} );html=$div[_0xbe3b[68]]();} ;$div[_0xbe3b[326]]();html=html[_0xbe3b[534]](/<font(.*?[^<])>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<\/font>/gi,_0xbe3b[255]);html=this[_0xbe3b[59]][_0xbe3b[244]](html);if(this[_0xbe3b[63]][_0xbe3b[52]]){html=this[_0xbe3b[52]][_0xbe3b[244]](html);} ;html=this[_0xbe3b[34]][_0xbe3b[543]](html);html=this[_0xbe3b[34]][_0xbe3b[544]](html);return html;} ,onSync:function (html){html=html[_0xbe3b[534]](/[\u200B-\u200D\uFEFF]/g,_0xbe3b[255]);html=html[_0xbe3b[534]](/&#x200b;/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/&nbsp;/gi,_0xbe3b[545]);if(html[_0xbe3b[10]](/^<p>(||\s||&nbsp;)<\/p>$/i)!=-1){return _0xbe3b[255];} ;html=html[_0xbe3b[534]](/<pre class="redactor-script-tag" style="display: none;"(.*?[^>]?)>([\w\W]*?)<\/pre>/gi,_0xbe3b[546]);html=this[_0xbe3b[34]][_0xbe3b[547]](html);var chars={"\u2122":_0xbe3b[548],"\xA9":_0xbe3b[549],"\u2026":_0xbe3b[550],"\u2014":_0xbe3b[551],"\u2010":_0xbe3b[552]};$[_0xbe3b[20]](chars,function (i,s){html=html[_0xbe3b[534]]( new RegExp(i,_0xbe3b[553]),s);} );html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[554],_0xbe3b[555]),_0xbe3b[556]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[557],_0xbe3b[555]),_0xbe3b[556]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[558],_0xbe3b[555]),_0xbe3b[559]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[560],_0xbe3b[555]),_0xbe3b[561]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[562],_0xbe3b[555]),_0xbe3b[563]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[564],_0xbe3b[555]),_0xbe3b[565]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[566],_0xbe3b[555]),_0xbe3b[567]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[568],_0xbe3b[555]),_0xbe3b[567]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[569],_0xbe3b[555]),_0xbe3b[570]);html=html[_0xbe3b[534]](/ data-save-url="(.*?[^>])"/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<span(.*?)id="redactor-image-box"(.*?[^>])>([\w\W]*?)<img(.*?)><\/span>/gi,_0xbe3b[571]);html=html[_0xbe3b[534]](/<span(.*?)id="redactor-image-resizer"(.*?[^>])>(.*?)<\/span>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<span(.*?)id="redactor-image-editter"(.*?[^>])>(.*?)<\/span>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<font(.*?[^<])>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<\/font>/gi,_0xbe3b[255]);html=this[_0xbe3b[59]][_0xbe3b[244]](html);if(this[_0xbe3b[63]][_0xbe3b[572]]){html=html[_0xbe3b[534]](/<a(.*?)rel="nofollow"(.*?[^>])>/gi,_0xbe3b[573]);html=html[_0xbe3b[534]](/<a(.*?[^>])>/gi,_0xbe3b[574]);} ;html=html[_0xbe3b[534]](/<(.*?) data-redactor-tag="(.*?)"(.*?[^>])>/gi,_0xbe3b[575]);html=html[_0xbe3b[534]](/<(.*?) data-redactor-class="(.*?)"(.*?[^>])>/gi,_0xbe3b[575]);html=html[_0xbe3b[534]](/<(.*?) data-redactor-style="(.*?)"(.*?[^>])>/gi,_0xbe3b[575]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[560],_0xbe3b[555]),_0xbe3b[561]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[576],_0xbe3b[555]),_0xbe3b[577]);return html;} ,onPaste:function (html,setMode){html=$[_0xbe3b[386]](html);html=html[_0xbe3b[534]](/\$/g,_0xbe3b[535]);html=html[_0xbe3b[534]](/”/g,_0xbe3b[536]);html=html[_0xbe3b[534]](/“/g,_0xbe3b[536]);html=html[_0xbe3b[534]](/‘/g,_0xbe3b[537]);html=html[_0xbe3b[534]](/’/g,_0xbe3b[537]);html=html[_0xbe3b[534]](/<span class="Apple-converted-space">&nbsp;<\/span>/gi,_0xbe3b[545]);html=html[_0xbe3b[534]](/<span class="Apple-tab-span"[^>]*>\t<\/span>/gi,_0xbe3b[578]);html=html[_0xbe3b[534]](/<span[^>]*>(\s|&nbsp;)<\/span>/gi,_0xbe3b[545]);if(this[_0xbe3b[63]][_0xbe3b[579]]){return this[_0xbe3b[34]][_0xbe3b[580]](html);} ;if(!this[_0xbe3b[62]][_0xbe3b[581]]()&& typeof setMode==_0xbe3b[14]){if(this[_0xbe3b[62]][_0xbe3b[583]]([_0xbe3b[148],_0xbe3b[582]])){return this[_0xbe3b[34]][_0xbe3b[580]](html,false);} ;if(this[_0xbe3b[62]][_0xbe3b[583]](_0xbe3b[155])){return this[_0xbe3b[34]][_0xbe3b[584]](html);} ;if(this[_0xbe3b[62]][_0xbe3b[583]]([_0xbe3b[146],_0xbe3b[135],_0xbe3b[136],_0xbe3b[137],_0xbe3b[138],_0xbe3b[139],_0xbe3b[140]])){html=this[_0xbe3b[34]][_0xbe3b[585]](html);if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){var block=this[_0xbe3b[56]][_0xbe3b[318]]();if(block&&block[_0xbe3b[306]]==_0xbe3b[134]){html=html[_0xbe3b[534]](/<img(.*?)>/gi,_0xbe3b[586]);} ;} ;return html;} ;if(this[_0xbe3b[62]][_0xbe3b[583]]([_0xbe3b[145]])){html=this[_0xbe3b[34]][_0xbe3b[587]](html,_0xbe3b[336]);if(this[_0xbe3b[63]][_0xbe3b[265]]){html=this[_0xbe3b[34]][_0xbe3b[539]](html);} ;html=this[_0xbe3b[34]][_0xbe3b[588]](html);return html;} ;if(this[_0xbe3b[62]][_0xbe3b[583]]([_0xbe3b[158]])){return this[_0xbe3b[34]][_0xbe3b[587]](html,_0xbe3b[128]);} ;} ;html=this[_0xbe3b[34]][_0xbe3b[589]](html,setMode);if(!this[_0xbe3b[34]][_0xbe3b[590]]){if(this[_0xbe3b[63]][_0xbe3b[265]]){html=this[_0xbe3b[34]][_0xbe3b[539]](html);} ;if(this[_0xbe3b[63]][_0xbe3b[538]]){html=this[_0xbe3b[34]][_0xbe3b[538]](html);} ;html=this[_0xbe3b[34]][_0xbe3b[540]](html);} ;html=this[_0xbe3b[34]][_0xbe3b[591]](html);html=this[_0xbe3b[34]][_0xbe3b[592]](html);html=this[_0xbe3b[34]][_0xbe3b[587]](html,_0xbe3b[593]);if(!this[_0xbe3b[34]][_0xbe3b[590]]&&this[_0xbe3b[63]][_0xbe3b[52]]){html=this[_0xbe3b[52]][_0xbe3b[244]](html);} ;html=this[_0xbe3b[34]][_0xbe3b[594]](html);html=this[_0xbe3b[34]][_0xbe3b[595]](html);html=this[_0xbe3b[34]][_0xbe3b[596]](html);html=this[_0xbe3b[34]][_0xbe3b[544]](html);return html;} ,onPasteWord:function (html){html=html[_0xbe3b[534]](/<!--[\s\S]*?-->/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<style[^>]*>[\s\S]*?<\/style>/gi,_0xbe3b[255]);if(/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/[_0xbe3b[597]](html)){html=this[_0xbe3b[34]][_0xbe3b[598]](html);html=html[_0xbe3b[534]](/<img(.*?)v:shapes=(.*?)>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/src="file\:\/\/(.*?)"/,_0xbe3b[599]);html=html[_0xbe3b[534]](/<p(.*?)class="MsoListParagraphCxSpFirst"([\w\W]*?)<\/p>/gi,_0xbe3b[600]);html=html[_0xbe3b[534]](/<p(.*?)class="MsoListParagraphCxSpMiddle"([\w\W]*?)<\/p>/gi,_0xbe3b[601]);html=html[_0xbe3b[534]](/<p(.*?)class="MsoListParagraphCxSpLast"([\w\W]*?)<\/p>/gi,_0xbe3b[602]);html=html[_0xbe3b[534]](/<p(.*?)class="MsoListParagraph"([\w\W]*?)<\/p>/gi,_0xbe3b[603]);html=html[_0xbe3b[534]](/·/g,_0xbe3b[255]);html=html[_0xbe3b[534]](/<p class="Mso(.*?)"/gi,_0xbe3b[604]);html=html[_0xbe3b[534]](/ class=\"(mso[^\"]*)\"/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/ class=(mso\w+)/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<o:p(.*?)>([\w\W]*?)<\/o:p>/gi,_0xbe3b[605]);html=html[_0xbe3b[534]](/\n/g,_0xbe3b[545]);html=html[_0xbe3b[534]](/<p>\n?<li>/gi,_0xbe3b[498]);} ;if(this[_0xbe3b[63]][_0xbe3b[606]]){html=html[_0xbe3b[534]](/(\s|&nbsp;)+/g,_0xbe3b[545]);} ;return html;} ,onPasteExtra:function (html){html=html[_0xbe3b[534]](/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi,_0xbe3b[605]);html=html[_0xbe3b[534]](/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi,_0xbe3b[607]);html=html[_0xbe3b[534]](/<span[^>]*(font-style: italic; font-weight: bold|font-weight: bold; font-style: italic)[^>]*>/gi,_0xbe3b[608]);html=html[_0xbe3b[534]](/<span[^>]*font-style: italic[^>]*>/gi,_0xbe3b[609]);html=html[_0xbe3b[534]](/<span[^>]*font-weight: bold[^>]*>/gi,_0xbe3b[610]);html=html[_0xbe3b[534]](/<span[^>]*text-decoration: underline[^>]*>/gi,_0xbe3b[611]);html=html[_0xbe3b[534]](/<img>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/\n{3,}/gi,_0xbe3b[612]);html=html[_0xbe3b[534]](/<font(.*?)>([\w\W]*?)<\/font>/gi,_0xbe3b[605]);html=html[_0xbe3b[534]](/<p><p>/gi,_0xbe3b[613]);html=html[_0xbe3b[534]](/<\/p><\/p>/gi,_0xbe3b[614]);html=html[_0xbe3b[534]](/<li>(\s*|\t*|\n*)<p>/gi,_0xbe3b[498]);html=html[_0xbe3b[534]](/<\/p>(\s*|\t*|\n*)<\/li>/gi,_0xbe3b[556]);html=html[_0xbe3b[534]](/<\/p>\s<p/gi,_0xbe3b[615]);html=html[_0xbe3b[534]](/<img src="webkit-fake-url\:\/\/(.*?)"(.*?)>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<p>•([\w\W]*?)<\/p>/gi,_0xbe3b[616]);if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[452])){html=html[_0xbe3b[534]](/<br\s?\/?>$/gi,_0xbe3b[255]);} ;return html;} ,onPasteTidy:function (html,type){var tags=[_0xbe3b[101],_0xbe3b[118],_0xbe3b[79],_0xbe3b[78],_0xbe3b[124],_0xbe3b[97],_0xbe3b[95],_0xbe3b[35],_0xbe3b[131],_0xbe3b[132],_0xbe3b[617],_0xbe3b[125],_0xbe3b[133],_0xbe3b[130],_0xbe3b[618],_0xbe3b[122],_0xbe3b[121],_0xbe3b[120],_0xbe3b[123],_0xbe3b[99],_0xbe3b[93],_0xbe3b[127],_0xbe3b[126],_0xbe3b[128],_0xbe3b[338],_0xbe3b[339],_0xbe3b[340],_0xbe3b[77],_0xbe3b[619],_0xbe3b[620],_0xbe3b[621],_0xbe3b[622],_0xbe3b[623],_0xbe3b[624],_0xbe3b[625],_0xbe3b[119],_0xbe3b[358],_0xbe3b[336],_0xbe3b[337],_0xbe3b[359],_0xbe3b[626],_0xbe3b[627],_0xbe3b[628],_0xbe3b[80],_0xbe3b[81],_0xbe3b[82],_0xbe3b[83],_0xbe3b[84],_0xbe3b[85]];var tagsEmpty=false;var attrAllowed=[[_0xbe3b[118],_0xbe3b[629]],[_0xbe3b[119],[_0xbe3b[630],_0xbe3b[631]]],[_0xbe3b[101],[_0xbe3b[296],_0xbe3b[496],_0xbe3b[632]]],[_0xbe3b[622],_0xbe3b[629]],[_0xbe3b[620],_0xbe3b[629]],[_0xbe3b[621],_0xbe3b[629]],[_0xbe3b[623],_0xbe3b[629]],[_0xbe3b[625],_0xbe3b[629]],[_0xbe3b[624],_0xbe3b[629]],[_0xbe3b[633],_0xbe3b[629]]];if(type==_0xbe3b[593]){tagsEmpty=[_0xbe3b[77],_0xbe3b[101],_0xbe3b[80],_0xbe3b[81],_0xbe3b[82],_0xbe3b[83],_0xbe3b[84],_0xbe3b[85]];attrAllowed=[[_0xbe3b[358],_0xbe3b[296]],[_0xbe3b[336],[_0xbe3b[634],_0xbe3b[635]]],[_0xbe3b[118],_0xbe3b[629]],[_0xbe3b[119],[_0xbe3b[630],_0xbe3b[631],_0xbe3b[636]]],[_0xbe3b[101],[_0xbe3b[296],_0xbe3b[496],_0xbe3b[632]]],[_0xbe3b[622],_0xbe3b[629]],[_0xbe3b[620],_0xbe3b[629]],[_0xbe3b[621],_0xbe3b[629]],[_0xbe3b[623],_0xbe3b[629]],[_0xbe3b[625],_0xbe3b[629]],[_0xbe3b[624],_0xbe3b[629]],[_0xbe3b[633],_0xbe3b[629]]];} else {if(type==_0xbe3b[336]){tags=[_0xbe3b[126],_0xbe3b[127],_0xbe3b[128],_0xbe3b[101],_0xbe3b[118],_0xbe3b[124],_0xbe3b[97],_0xbe3b[95],_0xbe3b[35],_0xbe3b[131],_0xbe3b[132],_0xbe3b[125],_0xbe3b[133],_0xbe3b[130],_0xbe3b[618],_0xbe3b[122],_0xbe3b[121],_0xbe3b[120],_0xbe3b[123],_0xbe3b[99],_0xbe3b[93],_0xbe3b[127],_0xbe3b[126],_0xbe3b[128],_0xbe3b[338],_0xbe3b[339],_0xbe3b[340],_0xbe3b[619],_0xbe3b[622],_0xbe3b[620],_0xbe3b[621],_0xbe3b[623],_0xbe3b[624],_0xbe3b[625],_0xbe3b[119],_0xbe3b[80],_0xbe3b[81],_0xbe3b[82],_0xbe3b[83],_0xbe3b[84],_0xbe3b[85]];} else {if(type==_0xbe3b[128]){tags=[_0xbe3b[126],_0xbe3b[127],_0xbe3b[128],_0xbe3b[101],_0xbe3b[118],_0xbe3b[124],_0xbe3b[97],_0xbe3b[95],_0xbe3b[35],_0xbe3b[131],_0xbe3b[132],_0xbe3b[125],_0xbe3b[133],_0xbe3b[130],_0xbe3b[618],_0xbe3b[122],_0xbe3b[121],_0xbe3b[120],_0xbe3b[123],_0xbe3b[99],_0xbe3b[93],_0xbe3b[619],_0xbe3b[622],_0xbe3b[620],_0xbe3b[621],_0xbe3b[623],_0xbe3b[624],_0xbe3b[625],_0xbe3b[119]];} ;} ;} ;var options={deniedTags:false,allowedTags:tags,removeComments:true,removePhp:true,removeAttr:false,allowedAttr:attrAllowed,removeEmpty:tagsEmpty};return this[_0xbe3b[59]][_0xbe3b[244]](html,options);} ,onPasteRemoveEmpty:function (html){html=html[_0xbe3b[534]](/<(p|h[1-6])>(|\s|\n|\t|<br\s?\/?>)<\/(p|h[1-6])>/gi,_0xbe3b[255]);if(!this[_0xbe3b[63]][_0xbe3b[265]]){html=html[_0xbe3b[534]](/<br>$/i,_0xbe3b[255]);} ;return html;} ,onPasteRemoveSpans:function (html){html=html[_0xbe3b[534]](/<span>(.*?)<\/span>/gi,_0xbe3b[570]);html=html[_0xbe3b[534]](/<span[^>]*>\s|&nbsp;<\/span>/gi,_0xbe3b[545]);return html;} ,onPasteIeFixLinks:function (html){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){return html;} ;var tmp=$[_0xbe3b[386]](html);if(tmp[_0xbe3b[10]](/^<a(.*?)>(.*?)<\/a>$/i)===0){html=html[_0xbe3b[534]](/^<a(.*?)>(.*?)<\/a>$/i,_0xbe3b[605]);} ;return html;} ,isSingleLine:function (html,setMode){this[_0xbe3b[34]][_0xbe3b[590]]=false;if(!this[_0xbe3b[62]][_0xbe3b[581]]()&& typeof setMode==_0xbe3b[14]){var blocks=this[_0xbe3b[63]][_0xbe3b[235]][_0xbe3b[241]](_0xbe3b[240])[_0xbe3b[534]](_0xbe3b[638],_0xbe3b[255])[_0xbe3b[534]](_0xbe3b[637],_0xbe3b[255]);var matchBlocks=html[_0xbe3b[641]]( new RegExp(_0xbe3b[639]+blocks+_0xbe3b[640],_0xbe3b[555]));var matchContainers=html[_0xbe3b[641]](/<\/(p|div)>/gi);if(!matchBlocks&&(matchContainers===null||(matchContainers&&matchContainers[_0xbe3b[21]]<=1))){var matchBR=html[_0xbe3b[641]](/<br\s?\/?>/gi);var matchIMG=html[_0xbe3b[641]](/<img(.*?[^>])>/gi);if(!matchBR&&!matchIMG){this[_0xbe3b[34]][_0xbe3b[590]]=true;html=html[_0xbe3b[534]](/<\/?(p|div)(.*?)>/gi,_0xbe3b[255]);} ;} ;} ;return html;} ,stripTags:function (input,allowed){allowed=(((allowed||_0xbe3b[255])+_0xbe3b[255])[_0xbe3b[320]]()[_0xbe3b[641]](/<[a-z][a-z0-9]*>/g)||[])[_0xbe3b[241]](_0xbe3b[255]);var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;return input[_0xbe3b[534]](tags,function ($0,$1){return allowed[_0xbe3b[642]](_0xbe3b[315]+$1[_0xbe3b[320]]()+_0xbe3b[316])>-1?$0:_0xbe3b[255];} );} ,savePreCode:function (html){var pre=html[_0xbe3b[641]](/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/gi);if(pre!==null){$[_0xbe3b[20]](pre,$[_0xbe3b[280]](function (i,s){var arr=s[_0xbe3b[641]](/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/i);arr[3]=arr[3][_0xbe3b[534]](/<br\s?\/?>/g,_0xbe3b[612]);arr[3]=arr[3][_0xbe3b[534]](/&nbsp;/g,_0xbe3b[545]);if(this[_0xbe3b[63]][_0xbe3b[643]]){arr[3]=arr[3][_0xbe3b[534]](/\t/g,Array(this[_0xbe3b[63]][_0xbe3b[643]]+1)[_0xbe3b[241]](_0xbe3b[545]));} ;arr[3]=this[_0xbe3b[34]][_0xbe3b[644]](arr[3]);arr[3]=arr[3][_0xbe3b[534]](/\$/g,_0xbe3b[535]);html=html[_0xbe3b[534]](s,_0xbe3b[315]+arr[1]+arr[2]+_0xbe3b[316]+arr[3]+_0xbe3b[645]+arr[1]+_0xbe3b[316]);} ,this));} ;return html;} ,getTextFromHtml:function (html){html=html[_0xbe3b[534]](/<br\s?\/?>|<\/H[1-6]>|<\/p>|<\/div>|<\/li>|<\/td>/gi,_0xbe3b[612]);var tmp=document[_0xbe3b[646]](_0xbe3b[270]);tmp[_0xbe3b[505]]=html;html=tmp[_0xbe3b[647]]||tmp[_0xbe3b[648]];return $[_0xbe3b[386]](html);} ,getPlainText:function (html,paragraphize){html=this[_0xbe3b[34]][_0xbe3b[649]](html);html=html[_0xbe3b[534]](/\n/g,_0xbe3b[355]);if(this[_0xbe3b[63]][_0xbe3b[52]]&& typeof paragraphize==_0xbe3b[14]){html=this[_0xbe3b[52]][_0xbe3b[244]](html);} ;return html;} ,getPreCode:function (html){html=html[_0xbe3b[534]](/<img(.*?) style="(.*?)"(.*?[^>])>/gi,_0xbe3b[565]);html=html[_0xbe3b[534]](/<img(.*?)>/gi,_0xbe3b[650]);html=this[_0xbe3b[34]][_0xbe3b[649]](html);if(this[_0xbe3b[63]][_0xbe3b[643]]){html=html[_0xbe3b[534]](/\t/g,Array(this[_0xbe3b[63]][_0xbe3b[643]]+1)[_0xbe3b[241]](_0xbe3b[545]));} ;html=this[_0xbe3b[34]][_0xbe3b[644]](html);return html;} ,getOnlyImages:function (html){html=html[_0xbe3b[534]](/<img(.*?)>/gi,_0xbe3b[651]);html=html[_0xbe3b[534]](/<(.*?)>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/\[img(.*?)\]/gi,_0xbe3b[652]);return html;} ,getOnlyLinksAndImages:function (html){html=html[_0xbe3b[534]](/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi,_0xbe3b[653]);html=html[_0xbe3b[534]](/<img(.*?)>/gi,_0xbe3b[651]);html=html[_0xbe3b[534]](/<(.*?)>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi,_0xbe3b[654]);html=html[_0xbe3b[534]](/\[img(.*?)\]/gi,_0xbe3b[652]);return html;} ,encodeEntities:function (str){str=String(str)[_0xbe3b[534]](/&amp;/g,_0xbe3b[290])[_0xbe3b[534]](/&lt;/g,_0xbe3b[315])[_0xbe3b[534]](/&gt;/g,_0xbe3b[316])[_0xbe3b[534]](/&quot;/g,_0xbe3b[536]);return str[_0xbe3b[534]](/&/g,_0xbe3b[658])[_0xbe3b[534]](/</g,_0xbe3b[657])[_0xbe3b[534]](/>/g,_0xbe3b[656])[_0xbe3b[534]](/"/g,_0xbe3b[655]);} ,removeDirtyStyles:function (html){if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){return html;} ;var div=document[_0xbe3b[646]](_0xbe3b[270]);div[_0xbe3b[505]]=html;this[_0xbe3b[34]][_0xbe3b[659]]($(div));html=div[_0xbe3b[505]];$(div)[_0xbe3b[326]]();return html;} ,clearUnverified:function (){if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){return ;} ;this[_0xbe3b[34]][_0xbe3b[659]](this.$editor);var headers=this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[660]);headers[_0xbe3b[327]](_0xbe3b[101])[_0xbe3b[344]](_0xbe3b[90]);headers[_0xbe3b[327]](this[_0xbe3b[63]][_0xbe3b[662]][_0xbe3b[241]](_0xbe3b[661]))[_0xbe3b[344]](_0xbe3b[90]);this[_0xbe3b[35]][_0xbe3b[269]]();} ,clearUnverifiedRemove:function ($editor){$editor[_0xbe3b[327]](this[_0xbe3b[63]][_0xbe3b[662]][_0xbe3b[241]](_0xbe3b[661]))[_0xbe3b[344]](_0xbe3b[90]);$editor[_0xbe3b[327]](_0xbe3b[101])[_0xbe3b[489]](_0xbe3b[663])[_0xbe3b[344]](_0xbe3b[90]);$editor[_0xbe3b[327]](_0xbe3b[664])[_0xbe3b[20]](function (i,s){var $s=$(s);$s[_0xbe3b[273]](_0xbe3b[90],$s[_0xbe3b[273]](_0xbe3b[496]));} );} ,setVerified:function (html){if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){return html;} ;html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[665],_0xbe3b[555]),_0xbe3b[666]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[667],_0xbe3b[555]),_0xbe3b[668]);var matches=html[_0xbe3b[641]]( new RegExp(_0xbe3b[669],_0xbe3b[555]));if(matches){var len=matches[_0xbe3b[21]];for(var i=0;i<len;i++){try{var newTag=matches[i][_0xbe3b[534]](/style="(.*?)"/i,_0xbe3b[670]);html=html[_0xbe3b[534]]( new RegExp(matches[i],_0xbe3b[555]),newTag);} catch(e){} ;} ;} ;return html;} ,convertInline:function (html){var $div=$(_0xbe3b[390])[_0xbe3b[68]](html);var tags=this[_0xbe3b[63]][_0xbe3b[671]];tags[_0xbe3b[16]](_0xbe3b[101]);$div[_0xbe3b[327]](tags[_0xbe3b[241]](_0xbe3b[353]))[_0xbe3b[20]](function (){var $el=$(this);var tag=this[_0xbe3b[306]][_0xbe3b[320]]();$el[_0xbe3b[273]](_0xbe3b[672],tag);if(tag==_0xbe3b[101]){if($el[_0xbe3b[273]](_0xbe3b[90])){$el[_0xbe3b[273]](_0xbe3b[673],$el[_0xbe3b[273]](_0xbe3b[90]));} else {if($el[_0xbe3b[273]](_0xbe3b[296])){$el[_0xbe3b[273]](_0xbe3b[674],$el[_0xbe3b[273]](_0xbe3b[296]));} ;} ;} ;} );html=$div[_0xbe3b[68]]();$div[_0xbe3b[326]]();return html;} ,normalizeLists:function (){this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[128])[_0xbe3b[20]](function (i,s){var $next=$(s)[_0xbe3b[510]]();if($next[_0xbe3b[21]]!==0&&($next[0][_0xbe3b[306]]==_0xbe3b[156]||$next[0][_0xbe3b[306]]==_0xbe3b[157])){$(s)[_0xbe3b[322]]($next);} ;} );} ,removeSpaces:function (html){html=html[_0xbe3b[534]](/\n/g,_0xbe3b[255]);html=html[_0xbe3b[534]](/[\t]*/g,_0xbe3b[255]);html=html[_0xbe3b[534]](/\n\s*\n/g,_0xbe3b[612]);html=html[_0xbe3b[534]](/^[\s\n]*/g,_0xbe3b[545]);html=html[_0xbe3b[534]](/[\s\n]*$/g,_0xbe3b[545]);html=html[_0xbe3b[534]](/>\s{2,}</g,_0xbe3b[675]);html=html[_0xbe3b[534]](/\n\n/g,_0xbe3b[612]);html=html[_0xbe3b[534]](/[\u200B-\u200D\uFEFF]/g,_0xbe3b[255]);return html;} ,replaceDivs:function (html){if(this[_0xbe3b[63]][_0xbe3b[265]]){html=html[_0xbe3b[534]](/<div><br\s?\/?><\/div>/gi,_0xbe3b[355]);html=html[_0xbe3b[534]](/<div(.*?)>([\w\W]*?)<\/div>/gi,_0xbe3b[676]);} else {html=html[_0xbe3b[534]](/<div(.*?)>([\w\W]*?)<\/div>/gi,_0xbe3b[677]);} ;return html;} ,replaceDivsToBr:function (html){html=html[_0xbe3b[534]](/<div\s(.*?)>/gi,_0xbe3b[613]);html=html[_0xbe3b[534]](/<div><br\s?\/?><\/div>/gi,_0xbe3b[678]);html=html[_0xbe3b[534]](/<div>([\w\W]*?)<\/div>/gi,_0xbe3b[679]);return html;} ,replaceParagraphsToBr:function (html){html=html[_0xbe3b[534]](/<p\s(.*?)>/gi,_0xbe3b[613]);html=html[_0xbe3b[534]](/<p><br\s?\/?><\/p>/gi,_0xbe3b[355]);html=html[_0xbe3b[534]](/<p>([\w\W]*?)<\/p>/gi,_0xbe3b[679]);html=html[_0xbe3b[534]](/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,_0xbe3b[680]);return html;} ,saveFormTags:function (html){return html[_0xbe3b[534]](/<form(.*?)>([\w\W]*?)<\/form>/gi,_0xbe3b[681]);} ,restoreFormTags:function (html){return html[_0xbe3b[534]](/<section(.*?) rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi,_0xbe3b[682]);} };} ,code:function (){return {set:function (html){html=$[_0xbe3b[386]](html.toString());html=this[_0xbe3b[34]][_0xbe3b[683]](html);this[_0xbe3b[261]][_0xbe3b[68]](html);this[_0xbe3b[35]][_0xbe3b[269]]();setTimeout($[_0xbe3b[280]](this[_0xbe3b[30]][_0xbe3b[684]],this),15);if(this[_0xbe3b[247]]===false){this[_0xbe3b[51]][_0xbe3b[244]]();} ;} ,get:function (){var code=this[_0xbe3b[283]][_0xbe3b[384]]();code=this[_0xbe3b[58]][_0xbe3b[286]](code);return code;} ,sync:function (){setTimeout($[_0xbe3b[280]](this[_0xbe3b[35]][_0xbe3b[685]],this),10);} ,startSync:function (){var html=this[_0xbe3b[261]][_0xbe3b[68]]();if(this[_0xbe3b[35]][_0xbe3b[686]]&&this[_0xbe3b[35]][_0xbe3b[686]]==html){return ;} ;this[_0xbe3b[35]][_0xbe3b[686]]=html;html=this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[687],html);html=this[_0xbe3b[34]][_0xbe3b[688]](html);this[_0xbe3b[283]][_0xbe3b[384]](html);this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[269],html);if(this[_0xbe3b[247]]===false){this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[689],html);} ;this[_0xbe3b[247]]=false;this[_0xbe3b[28]][_0xbe3b[690]]();} ,toggle:function (){if(this[_0xbe3b[63]][_0xbe3b[397]]){this[_0xbe3b[35]][_0xbe3b[398]]();} else {this[_0xbe3b[35]][_0xbe3b[691]]();} ;} ,showCode:function (){this[_0xbe3b[35]][_0xbe3b[472]]=this[_0xbe3b[33]][_0xbe3b[481]]();var scroll=$(window)[_0xbe3b[692]]();var height=this[_0xbe3b[261]][_0xbe3b[473]]();this[_0xbe3b[261]][_0xbe3b[393]]();var html=this[_0xbe3b[283]][_0xbe3b[384]]();this[_0xbe3b[693]]=this[_0xbe3b[34]][_0xbe3b[694]](html);html=this[_0xbe3b[58]][_0xbe3b[286]](html);this[_0xbe3b[283]][_0xbe3b[384]](html)[_0xbe3b[695]](height)[_0xbe3b[475]]()[_0xbe3b[39]]();this[_0xbe3b[283]][_0xbe3b[419]](_0xbe3b[696],this[_0xbe3b[35]][_0xbe3b[697]]);$(window)[_0xbe3b[692]](scroll);if(this[_0xbe3b[283]][0][_0xbe3b[698]]){this[_0xbe3b[283]][0][_0xbe3b[698]](0,0);} ;this[_0xbe3b[283]][0][_0xbe3b[692]]=0;this[_0xbe3b[63]][_0xbe3b[397]]=false;this[_0xbe3b[32]][_0xbe3b[699]]();this[_0xbe3b[32]][_0xbe3b[700]](_0xbe3b[68]);this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[633],html);} ,showVisual:function (){if(this[_0xbe3b[63]][_0xbe3b[397]]){return ;} ;var html=this[_0xbe3b[283]][_0xbe3b[393]]()[_0xbe3b[384]]();if(this[_0xbe3b[693]]!==this[_0xbe3b[34]][_0xbe3b[694]](html)){this[_0xbe3b[35]][_0xbe3b[256]](html);} ;this[_0xbe3b[261]][_0xbe3b[475]]();if(!this[_0xbe3b[62]][_0xbe3b[287]](html)){this[_0xbe3b[54]][_0xbe3b[326]]();} ;this[_0xbe3b[33]][_0xbe3b[531]](this[_0xbe3b[35]][_0xbe3b[472]]);this[_0xbe3b[283]][_0xbe3b[701]](_0xbe3b[696]);this[_0xbe3b[32]][_0xbe3b[702]]();this[_0xbe3b[32]][_0xbe3b[703]](_0xbe3b[68]);this[_0xbe3b[51]][_0xbe3b[244]]();this[_0xbe3b[63]][_0xbe3b[397]]=true;} ,textareaIndenting:function (e){if(e[_0xbe3b[704]]!==9){return true;} ;var $el=this[_0xbe3b[283]];var start=$el[_0xbe3b[286]](0)[_0xbe3b[705]];$el[_0xbe3b[384]]($el[_0xbe3b[384]]()[_0xbe3b[706]](0,start)+_0xbe3b[578]+$el[_0xbe3b[384]]()[_0xbe3b[706]]($el[_0xbe3b[286]](0)[_0xbe3b[707]]));$el[_0xbe3b[286]](0)[_0xbe3b[705]]=$el[_0xbe3b[286]](0)[_0xbe3b[707]]=start+1;return false;} };} ,core:function (){return {getObject:function (){return $[_0xbe3b[246]]({},this);} ,getEditor:function (){return this[_0xbe3b[261]];} ,getBox:function (){return this[_0xbe3b[377]];} ,getElement:function (){return this[_0xbe3b[229]];} ,getTextarea:function (){return this[_0xbe3b[283]];} ,getToolbar:function (){return (this[_0xbe3b[485]])?this[_0xbe3b[485]]:false;} ,addEvent:function (name){this[_0xbe3b[36]][_0xbe3b[708]]=name;} ,getEvent:function (){return this[_0xbe3b[36]][_0xbe3b[708]];} ,setCallback:function (type,e,data){var callback=this[_0xbe3b[63]][type+_0xbe3b[709]];if($[_0xbe3b[15]](callback)){return ( typeof data==_0xbe3b[14])?callback[_0xbe3b[6]](this,e):callback[_0xbe3b[6]](this,e,data);} else {return ( typeof data==_0xbe3b[14])?e:data;} ;} ,destroy:function (){this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[710]);this[_0xbe3b[229]][_0xbe3b[701]](_0xbe3b[712])[_0xbe3b[711]](_0xbe3b[4]);this[_0xbe3b[261]][_0xbe3b[701]](_0xbe3b[712]);this[_0xbe3b[261]][_0xbe3b[346]](_0xbe3b[713]);this[_0xbe3b[261]][_0xbe3b[344]](_0xbe3b[714]);var html=this[_0xbe3b[35]][_0xbe3b[286]]();if(this[_0xbe3b[31]][_0xbe3b[383]]()){this[_0xbe3b[377]][_0xbe3b[499]](this.$element);this[_0xbe3b[377]][_0xbe3b[326]]();this[_0xbe3b[229]][_0xbe3b[384]](html)[_0xbe3b[475]]();} else {this[_0xbe3b[377]][_0xbe3b[499]](this.$editor);this[_0xbe3b[377]][_0xbe3b[326]]();this[_0xbe3b[229]][_0xbe3b[68]](html)[_0xbe3b[475]]();} ;if(this[_0xbe3b[232]]){this[_0xbe3b[232]][_0xbe3b[326]]();} ;if(this[_0xbe3b[715]]){this[_0xbe3b[715]][_0xbe3b[326]]();} ;if(this[_0xbe3b[716]]){this[_0xbe3b[716]][_0xbe3b[326]]();} ;$(_0xbe3b[717])[_0xbe3b[326]]();clearInterval(this[_0xbe3b[285]]);} };} ,dropdown:function (){return {build:function (name,$dropdown,dropdownObject){if(name==_0xbe3b[69]&&this[_0xbe3b[63]][_0xbe3b[718]]){$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[718]],$[_0xbe3b[280]](function (i,s){var name=s[_0xbe3b[297]];if( typeof s[_0xbe3b[296]]!=_0xbe3b[14]){name=name+_0xbe3b[719]+s[_0xbe3b[296]];} ;s[_0xbe3b[303]]=(this[_0xbe3b[62]][_0xbe3b[504]](s[_0xbe3b[297]]))?_0xbe3b[29]:_0xbe3b[42];var func=(s[_0xbe3b[303]]==_0xbe3b[42])?_0xbe3b[720]:_0xbe3b[721];if(this[_0xbe3b[63]][_0xbe3b[265]]&&s[_0xbe3b[303]]==_0xbe3b[29]&&s[_0xbe3b[297]]==_0xbe3b[77]){return ;} ;this[_0xbe3b[69]][name]={tag:s[_0xbe3b[297]],style:s[_0xbe3b[90]],"\x63\x6C\x61\x73\x73":s[_0xbe3b[296]],attr:s[_0xbe3b[273]],data:s[_0xbe3b[9]]};dropdownObject[name]={func:func,title:s[_0xbe3b[466]]};} ,this));} ;$[_0xbe3b[20]](dropdownObject,$[_0xbe3b[280]](function (btnName,btnObject){var $item=$(_0xbe3b[722]+btnName+_0xbe3b[723]+btnObject[_0xbe3b[466]]+_0xbe3b[724]);if(name==_0xbe3b[69]){$item[_0xbe3b[342]](_0xbe3b[725]+btnName);} ;$item[_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](function (e){var type=_0xbe3b[458];var callback=btnObject[_0xbe3b[458]];if(btnObject[_0xbe3b[459]]){type=_0xbe3b[459];callback=btnObject[_0xbe3b[459]];} else {if(btnObject[_0xbe3b[37]]){type=_0xbe3b[37];callback=btnObject[_0xbe3b[37]];} ;} ;this[_0xbe3b[32]][_0xbe3b[462]](e,btnName,type,callback);} ,this));$dropdown[_0xbe3b[322]]($item);} ,this));} ,show:function (e,key){if(!this[_0xbe3b[63]][_0xbe3b[397]]){e[_0xbe3b[415]]();return false;} ;var $button=this[_0xbe3b[32]][_0xbe3b[286]](key);var $dropdown=$button[_0xbe3b[9]](_0xbe3b[37])[_0xbe3b[470]](document[_0xbe3b[87]]);document[_0xbe3b[726]][_0xbe3b[445]]();if($button[_0xbe3b[439]](_0xbe3b[727])){this[_0xbe3b[37]][_0xbe3b[728]]();} else {this[_0xbe3b[37]][_0xbe3b[728]]();this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[729],{dropdown:$dropdown,key:key,button:$button});this[_0xbe3b[32]][_0xbe3b[700]](key);$button[_0xbe3b[342]](_0xbe3b[727]);var keyPosition=$button[_0xbe3b[472]]();var dropdownWidth=$dropdown[_0xbe3b[730]]();if((keyPosition[_0xbe3b[478]]+dropdownWidth)>$(document)[_0xbe3b[730]]()){keyPosition[_0xbe3b[478]]-=dropdownWidth;} ;var left=keyPosition[_0xbe3b[478]]+_0xbe3b[477];if(this[_0xbe3b[485]][_0xbe3b[439]](_0xbe3b[731])){var top=this[_0xbe3b[485]][_0xbe3b[473]]()+this[_0xbe3b[63]][_0xbe3b[732]];var position=_0xbe3b[733];if(this[_0xbe3b[63]][_0xbe3b[734]]!==document){top=(this[_0xbe3b[485]][_0xbe3b[473]]()+this[_0xbe3b[485]][_0xbe3b[472]]()[_0xbe3b[476]])+this[_0xbe3b[63]][_0xbe3b[732]];position=_0xbe3b[735];} ;$dropdown[_0xbe3b[275]]({position:position,left:left,top:top+_0xbe3b[477]})[_0xbe3b[475]]();} else {var top=($button[_0xbe3b[473]]()+keyPosition[_0xbe3b[476]])+_0xbe3b[477];$dropdown[_0xbe3b[275]]({position:_0xbe3b[735],left:left,top:top})[_0xbe3b[475]]();} ;this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[736],{dropdown:$dropdown,key:key,button:$button});} ;$(document)[_0xbe3b[737]](_0xbe3b[421],$[_0xbe3b[280]](this[_0xbe3b[37]][_0xbe3b[393]],this));this[_0xbe3b[261]][_0xbe3b[737]](_0xbe3b[421],$[_0xbe3b[280]](this[_0xbe3b[37]][_0xbe3b[393]],this));var $body=$(document[_0xbe3b[87]]);var width=$body[_0xbe3b[730]]();$dropdown[_0xbe3b[419]](_0xbe3b[471],function (){$body[_0xbe3b[342]](_0xbe3b[738]);$body[_0xbe3b[275]](_0xbe3b[739],($body[_0xbe3b[730]]()-width)+_0xbe3b[477]);} );$dropdown[_0xbe3b[419]](_0xbe3b[479],function (){$body[_0xbe3b[346]](_0xbe3b[738])[_0xbe3b[275]](_0xbe3b[739],0);} );e[_0xbe3b[740]]();} ,hideAll:function (){this[_0xbe3b[485]][_0xbe3b[327]](_0xbe3b[741])[_0xbe3b[346]](_0xbe3b[486])[_0xbe3b[346]](_0xbe3b[727]);$(document[_0xbe3b[87]])[_0xbe3b[346]](_0xbe3b[738])[_0xbe3b[275]](_0xbe3b[739],0);$(_0xbe3b[742])[_0xbe3b[393]]();this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[743]);} ,hide:function (e){var $dropdown=$(e[_0xbe3b[436]]);if(!$dropdown[_0xbe3b[439]](_0xbe3b[727])){$dropdown[_0xbe3b[346]](_0xbe3b[727]);this[_0xbe3b[37]][_0xbe3b[728]]();} ;} };} ,file:function (){return {show:function (){this[_0xbe3b[50]][_0xbe3b[244]](_0xbe3b[38],this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[38]),700);this[_0xbe3b[61]][_0xbe3b[22]](_0xbe3b[744],this[_0xbe3b[63]][_0xbe3b[745]],this[_0xbe3b[38]][_0xbe3b[43]]);this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[56]][_0xbe3b[286]]();var text=this[_0xbe3b[746]].toString();$(_0xbe3b[747])[_0xbe3b[384]](text);this[_0xbe3b[50]][_0xbe3b[475]]();} ,insert:function (json,direct,e){if( typeof json[_0xbe3b[19]]!=_0xbe3b[14]){this[_0xbe3b[50]][_0xbe3b[748]]();this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[749],json);return ;} ;var link;if( typeof json==_0xbe3b[8]){link=json;} else {var text=$(_0xbe3b[747])[_0xbe3b[384]]();if( typeof text==_0xbe3b[14]||text===_0xbe3b[255]){text=json[_0xbe3b[750]];} ;link=_0xbe3b[751]+json[_0xbe3b[752]]+_0xbe3b[753]+text+_0xbe3b[724];} ;if(direct){this[_0xbe3b[56]][_0xbe3b[754]]();var marker=this[_0xbe3b[56]][_0xbe3b[356]]();this[_0xbe3b[43]][_0xbe3b[755]](e,marker);} else {this[_0xbe3b[50]][_0xbe3b[748]]();} ;this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[43]][_0xbe3b[68]](link);if( typeof json==_0xbe3b[8]){return ;} ;var linkmarker=$(this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[756]));if(linkmarker[_0xbe3b[335]]()!==0){linkmarker[_0xbe3b[344]](_0xbe3b[381]);} else {linkmarker=false;} ;this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[745],linkmarker,json);} };} ,focus:function (){return {setStart:function (){this[_0xbe3b[261]][_0xbe3b[39]]();var first=this[_0xbe3b[261]][_0xbe3b[758]]()[_0xbe3b[757]]();if(first[_0xbe3b[335]]()===0){return ;} ;if(first[0][_0xbe3b[21]]===0||first[0][_0xbe3b[306]]==_0xbe3b[507]||first[0][_0xbe3b[759]]==3){return ;} ;if(first[0][_0xbe3b[306]]==_0xbe3b[156]||first[0][_0xbe3b[306]]==_0xbe3b[157]){first=first[_0xbe3b[327]](_0xbe3b[128])[_0xbe3b[757]]();var child=first[_0xbe3b[758]]()[_0xbe3b[757]]();if(!this[_0xbe3b[62]][_0xbe3b[502]](child)&&child[_0xbe3b[760]]()===_0xbe3b[255]){this[_0xbe3b[33]][_0xbe3b[447]](child);return ;} ;} ;if(this[_0xbe3b[63]][_0xbe3b[265]]&&!this[_0xbe3b[62]][_0xbe3b[504]](first[0][_0xbe3b[306]])){this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[308]][_0xbe3b[447]](this[_0xbe3b[261]][0],0);this[_0xbe3b[308]][_0xbe3b[449]](this[_0xbe3b[261]][0],0);this[_0xbe3b[56]][_0xbe3b[509]]();return ;} ;this[_0xbe3b[33]][_0xbe3b[447]](first);} ,setEnd:function (){if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[452])||this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){var last=this[_0xbe3b[261]][_0xbe3b[758]]()[_0xbe3b[761]]();this[_0xbe3b[33]][_0xbe3b[449]](last);} else {this[_0xbe3b[56]][_0xbe3b[286]]();try{this[_0xbe3b[308]][_0xbe3b[519]](this[_0xbe3b[261]][0]);this[_0xbe3b[308]][_0xbe3b[517]](false);this[_0xbe3b[56]][_0xbe3b[509]]();} catch(e){} ;} ;} ,isFocused:function (){var focusNode=document[_0xbe3b[522]]()[_0xbe3b[762]];if(focusNode===null){return false;} ;if(this[_0xbe3b[63]][_0xbe3b[265]]&&$(focusNode[_0xbe3b[763]])[_0xbe3b[439]](_0xbe3b[405])){return true;} else {if(!this[_0xbe3b[62]][_0xbe3b[764]](focusNode[_0xbe3b[763]])){return false;} ;} ;return this[_0xbe3b[261]][_0xbe3b[441]](_0xbe3b[765]);} };} ,image:function (){return {show:function (){this[_0xbe3b[50]][_0xbe3b[244]](_0xbe3b[40],this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[40]),700);this[_0xbe3b[61]][_0xbe3b[22]](_0xbe3b[766],this[_0xbe3b[63]][_0xbe3b[767]],this[_0xbe3b[40]][_0xbe3b[43]]);this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[50]][_0xbe3b[475]]();} ,showEdit:function ($image){var $link=$image[_0xbe3b[348]](_0xbe3b[118]);this[_0xbe3b[50]][_0xbe3b[244]](_0xbe3b[768],this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[769]),705);this[_0xbe3b[50]][_0xbe3b[770]]();this[_0xbe3b[40]][_0xbe3b[771]]=this[_0xbe3b[50]][_0xbe3b[773]](this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[772]));this[_0xbe3b[40]][_0xbe3b[774]]=this[_0xbe3b[50]][_0xbe3b[775]](this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[262]));this[_0xbe3b[40]][_0xbe3b[771]][_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](function (){this[_0xbe3b[40]][_0xbe3b[326]]($image);} ,this));this[_0xbe3b[40]][_0xbe3b[774]][_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](function (){this[_0xbe3b[40]][_0xbe3b[776]]($image);} ,this));$(_0xbe3b[777])[_0xbe3b[384]]($image[_0xbe3b[273]](_0xbe3b[631]));if(!this[_0xbe3b[63]][_0xbe3b[778]]){$(_0xbe3b[779])[_0xbe3b[393]]();} else {var $redactorImageLink=$(_0xbe3b[780]);$redactorImageLink[_0xbe3b[273]](_0xbe3b[781],$image[_0xbe3b[273]](_0xbe3b[630]));if($link[_0xbe3b[335]]()!==0){$redactorImageLink[_0xbe3b[384]]($link[_0xbe3b[273]](_0xbe3b[781]));if($link[_0xbe3b[273]](_0xbe3b[436])==_0xbe3b[782]){$(_0xbe3b[785])[_0xbe3b[784]](_0xbe3b[783],true);} ;} ;} ;if(!this[_0xbe3b[63]][_0xbe3b[786]]){$(_0xbe3b[787])[_0xbe3b[393]]();} else {var floatValue=($image[_0xbe3b[275]](_0xbe3b[788])==_0xbe3b[29]&&$image[_0xbe3b[275]](_0xbe3b[789])==_0xbe3b[790])?_0xbe3b[258]:$image[_0xbe3b[275]](_0xbe3b[789]);$(_0xbe3b[791])[_0xbe3b[384]](floatValue);} ;this[_0xbe3b[50]][_0xbe3b[475]]();} ,setFloating:function ($image){var floating=$(_0xbe3b[791])[_0xbe3b[384]]();var imageFloat=_0xbe3b[255];var imageDisplay=_0xbe3b[255];var imageMargin=_0xbe3b[255];switch(floating){case _0xbe3b[478]:imageFloat=_0xbe3b[478];imageMargin=_0xbe3b[792]+this[_0xbe3b[63]][_0xbe3b[793]]+_0xbe3b[545]+this[_0xbe3b[63]][_0xbe3b[793]]+_0xbe3b[794];break ;;case _0xbe3b[257]:imageFloat=_0xbe3b[257];imageMargin=_0xbe3b[795]+this[_0xbe3b[63]][_0xbe3b[793]]+_0xbe3b[545]+this[_0xbe3b[63]][_0xbe3b[793]];break ;;case _0xbe3b[258]:imageDisplay=_0xbe3b[29];imageMargin=_0xbe3b[796];break ;;} ;$image[_0xbe3b[275]]({"\x66\x6C\x6F\x61\x74":imageFloat,display:imageDisplay,margin:imageMargin});$image[_0xbe3b[273]](_0xbe3b[496],$image[_0xbe3b[273]](_0xbe3b[90]));} ,update:function ($image){this[_0xbe3b[40]][_0xbe3b[797]]();this[_0xbe3b[30]][_0xbe3b[256]]();var $link=$image[_0xbe3b[348]](_0xbe3b[118]);$image[_0xbe3b[273]](_0xbe3b[631],$(_0xbe3b[777])[_0xbe3b[384]]());this[_0xbe3b[40]][_0xbe3b[798]]($image);var link=$[_0xbe3b[386]]($(_0xbe3b[780])[_0xbe3b[384]]());if(link!==_0xbe3b[255]){var target=($(_0xbe3b[785])[_0xbe3b[784]](_0xbe3b[783]))?true:false;if($link[_0xbe3b[335]]()===0){var a=$(_0xbe3b[751]+link+_0xbe3b[723]+this[_0xbe3b[62]][_0xbe3b[799]]($image)+_0xbe3b[724]);if(target){a[_0xbe3b[273]](_0xbe3b[436],_0xbe3b[782]);} ;$image[_0xbe3b[278]](a);} else {$link[_0xbe3b[273]](_0xbe3b[781],link);if(target){$link[_0xbe3b[273]](_0xbe3b[436],_0xbe3b[782]);} else {$link[_0xbe3b[344]](_0xbe3b[436]);} ;} ;} else {if($link[_0xbe3b[335]]()!==0){$link[_0xbe3b[278]](this[_0xbe3b[62]][_0xbe3b[799]]($image));} ;} ;this[_0xbe3b[50]][_0xbe3b[748]]();this[_0xbe3b[51]][_0xbe3b[800]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,setEditable:function ($image){if(!this[_0xbe3b[63]][_0xbe3b[801]]){return ;} ;$image[_0xbe3b[419]](_0xbe3b[802],$[_0xbe3b[280]](this[_0xbe3b[40]][_0xbe3b[803]],this));$image[_0xbe3b[419]](_0xbe3b[435],$[_0xbe3b[280]](this[_0xbe3b[40]][_0xbe3b[797]],this));$image[_0xbe3b[419]](_0xbe3b[804],$[_0xbe3b[280]](function (e){this[_0xbe3b[51]][_0xbe3b[40]]=$image;if(this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[805])[_0xbe3b[335]]()!==0){return false;} ;this[_0xbe3b[40]][_0xbe3b[806]]=this[_0xbe3b[40]][_0xbe3b[807]]($image);$(document)[_0xbe3b[419]](_0xbe3b[808],$[_0xbe3b[280]](this[_0xbe3b[40]][_0xbe3b[797]],this));this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[808],$[_0xbe3b[280]](this[_0xbe3b[40]][_0xbe3b[797]],this));if(!this[_0xbe3b[63]][_0xbe3b[809]]){return ;} ;this[_0xbe3b[40]][_0xbe3b[806]][_0xbe3b[419]](_0xbe3b[810],$[_0xbe3b[280]](function (e){e[_0xbe3b[415]]();this[_0xbe3b[40]][_0xbe3b[811]]={x:e[_0xbe3b[812]],y:e[_0xbe3b[813]],el:$image,ratio:$image[_0xbe3b[730]]()/$image[_0xbe3b[695]](),h:$image[_0xbe3b[695]]()};e=e[_0xbe3b[410]]||e;if(e[_0xbe3b[814]]){this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[815]]=e[_0xbe3b[814]][0][_0xbe3b[812]];this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[816]]=e[_0xbe3b[814]][0][_0xbe3b[813]];} ;this[_0xbe3b[40]][_0xbe3b[817]]();} ,this));} ,this));} ,startResize:function (){$(document)[_0xbe3b[419]](_0xbe3b[818],$[_0xbe3b[280]](this[_0xbe3b[40]][_0xbe3b[819]],this));$(document)[_0xbe3b[419]](_0xbe3b[820],$[_0xbe3b[280]](this[_0xbe3b[40]][_0xbe3b[821]],this));} ,moveResize:function (e){e[_0xbe3b[415]]();e=e[_0xbe3b[410]]||e;var height=this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[822]];if(e[_0xbe3b[814]]){height+=(e[_0xbe3b[814]][0][_0xbe3b[813]]-this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[816]]);} else {height+=(e[_0xbe3b[813]]-this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[816]]);} ;var width=Math[_0xbe3b[824]](height*this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[823]]);if(height<50||width<100){return ;} ;this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[825]][_0xbe3b[730]](width);this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[825]][_0xbe3b[695]](this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[825]][_0xbe3b[730]]()/this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[823]]);this[_0xbe3b[35]][_0xbe3b[269]]();} ,stopResize:function (){this[_0xbe3b[826]]=false;$(document)[_0xbe3b[701]](_0xbe3b[827]);this[_0xbe3b[40]][_0xbe3b[797]]();} ,onDrag:function (e){if(this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[805])[_0xbe3b[335]]()!==0){e[_0xbe3b[415]]();return false;} ;this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[828],$[_0xbe3b[280]](function (){setTimeout($[_0xbe3b[280]](this[_0xbe3b[40]][_0xbe3b[829]],this),1);} ,this));} ,onDrop:function (){this[_0xbe3b[40]][_0xbe3b[830]]();this[_0xbe3b[51]][_0xbe3b[800]]();this[_0xbe3b[261]][_0xbe3b[701]](_0xbe3b[828]);this[_0xbe3b[34]][_0xbe3b[349]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,fixImageSourceAfterDrop:function (){this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[832])[_0xbe3b[20]](function (){var $el=$(this);$el[_0xbe3b[273]](_0xbe3b[630],$el[_0xbe3b[273]](_0xbe3b[831]));$el[_0xbe3b[344]](_0xbe3b[831]);} );} ,hideResize:function (e){if(e&&$(e[_0xbe3b[436]])[_0xbe3b[348]](_0xbe3b[805])[_0xbe3b[21]]!==0){return ;} ;if(e&&e[_0xbe3b[436]][_0xbe3b[306]]==_0xbe3b[833]){var $image=$(e[_0xbe3b[436]]);$image[_0xbe3b[273]](_0xbe3b[831],$image[_0xbe3b[273]](_0xbe3b[630]));} ;var imageBox=this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[805]);if(imageBox[_0xbe3b[335]]()===0){return ;} ;this[_0xbe3b[40]][_0xbe3b[834]][_0xbe3b[326]]();$(this[_0xbe3b[40]][_0xbe3b[806]])[_0xbe3b[326]]();imageBox[_0xbe3b[327]](_0xbe3b[119])[_0xbe3b[275]]({marginTop:imageBox[0][_0xbe3b[90]][_0xbe3b[835]],marginBottom:imageBox[0][_0xbe3b[90]][_0xbe3b[836]],marginLeft:imageBox[0][_0xbe3b[90]][_0xbe3b[837]],marginRight:imageBox[0][_0xbe3b[90]][_0xbe3b[838]]});imageBox[_0xbe3b[275]](_0xbe3b[839],_0xbe3b[255]);imageBox[_0xbe3b[327]](_0xbe3b[119])[_0xbe3b[275]](_0xbe3b[840],_0xbe3b[255]);imageBox[_0xbe3b[278]](function (){return $(this)[_0xbe3b[331]]();} );$(document)[_0xbe3b[701]](_0xbe3b[808]);this[_0xbe3b[261]][_0xbe3b[701]](_0xbe3b[808]);if( typeof this[_0xbe3b[40]][_0xbe3b[811]]!==_0xbe3b[14]){this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[825]][_0xbe3b[273]](_0xbe3b[496],this[_0xbe3b[40]][_0xbe3b[811]][_0xbe3b[825]][_0xbe3b[273]](_0xbe3b[90]));} ;this[_0xbe3b[35]][_0xbe3b[269]]();} ,loadEditableControls:function ($image){var imageBox=$(_0xbe3b[841]);imageBox[_0xbe3b[275]](_0xbe3b[789],$image[_0xbe3b[275]](_0xbe3b[789]))[_0xbe3b[273]](_0xbe3b[714],false);if($image[0][_0xbe3b[90]][_0xbe3b[839]]!=_0xbe3b[796]){imageBox[_0xbe3b[275]]({marginTop:$image[0][_0xbe3b[90]][_0xbe3b[835]],marginBottom:$image[0][_0xbe3b[90]][_0xbe3b[836]],marginLeft:$image[0][_0xbe3b[90]][_0xbe3b[837]],marginRight:$image[0][_0xbe3b[90]][_0xbe3b[838]]});$image[_0xbe3b[275]](_0xbe3b[839],_0xbe3b[255]);} else {imageBox[_0xbe3b[275]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xbe3b[29],"\x6D\x61\x72\x67\x69\x6E":_0xbe3b[796]});} ;$image[_0xbe3b[275]](_0xbe3b[840],_0xbe3b[842])[_0xbe3b[499]](imageBox);this[_0xbe3b[40]][_0xbe3b[834]]=$(_0xbe3b[843]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[769])+_0xbe3b[844]);this[_0xbe3b[40]][_0xbe3b[834]][_0xbe3b[273]](_0xbe3b[714],false);this[_0xbe3b[40]][_0xbe3b[834]][_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](function (){this[_0xbe3b[40]][_0xbe3b[845]]($image);} ,this));imageBox[_0xbe3b[322]](this[_0xbe3b[40]][_0xbe3b[834]]);var editerWidth=this[_0xbe3b[40]][_0xbe3b[834]][_0xbe3b[474]]();this[_0xbe3b[40]][_0xbe3b[834]][_0xbe3b[275]](_0xbe3b[846],_0xbe3b[719]+editerWidth/2+_0xbe3b[477]);if(this[_0xbe3b[63]][_0xbe3b[809]]&&!this[_0xbe3b[62]][_0xbe3b[847]]()){var imageResizer=$(_0xbe3b[848]);if(!this[_0xbe3b[62]][_0xbe3b[465]]()){imageResizer[_0xbe3b[275]]({width:_0xbe3b[849],height:_0xbe3b[849]});} ;imageResizer[_0xbe3b[273]](_0xbe3b[714],false);imageBox[_0xbe3b[322]](imageResizer);imageBox[_0xbe3b[322]]($image);return imageResizer;} else {imageBox[_0xbe3b[322]]($image);return false;} ;} ,remove:function (image){var $image=$(image);var $link=$image[_0xbe3b[348]](_0xbe3b[118]);var $figure=$image[_0xbe3b[348]](_0xbe3b[850]);var $parent=$image[_0xbe3b[500]]();if($(_0xbe3b[805])[_0xbe3b[335]]()!==0){$parent=$(_0xbe3b[805])[_0xbe3b[500]]();} ;var $next;if($figure[_0xbe3b[335]]()!==0){$next=$figure[_0xbe3b[510]]();$figure[_0xbe3b[326]]();} else {if($link[_0xbe3b[335]]()!==0){$parent=$link[_0xbe3b[500]]();$link[_0xbe3b[326]]();} else {$image[_0xbe3b[326]]();} ;} ;$(_0xbe3b[805])[_0xbe3b[326]]();if($figure[_0xbe3b[335]]()!==0){this[_0xbe3b[33]][_0xbe3b[447]]($next);} else {this[_0xbe3b[33]][_0xbe3b[447]]($parent);} ;this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[851],$image[0][_0xbe3b[630]],$image);this[_0xbe3b[50]][_0xbe3b[748]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,insert:function (json,direct,e){if( typeof json[_0xbe3b[19]]!=_0xbe3b[14]){this[_0xbe3b[50]][_0xbe3b[748]]();this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[852],json);return ;} ;var $img;if( typeof json==_0xbe3b[8]){$img=$(json)[_0xbe3b[273]](_0xbe3b[636],_0xbe3b[853]);} else {$img=$(_0xbe3b[854]);$img[_0xbe3b[273]](_0xbe3b[630],json[_0xbe3b[752]])[_0xbe3b[273]](_0xbe3b[636],_0xbe3b[853]);} ;var node=$img;var isP=this[_0xbe3b[62]][_0xbe3b[583]](_0xbe3b[134]);if(isP){node=$(_0xbe3b[855])[_0xbe3b[322]]($img);} ;if(direct){this[_0xbe3b[56]][_0xbe3b[754]]();var marker=this[_0xbe3b[56]][_0xbe3b[356]]();this[_0xbe3b[43]][_0xbe3b[755]](e,marker);} else {this[_0xbe3b[50]][_0xbe3b[748]]();} ;this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[43]][_0xbe3b[68]](this[_0xbe3b[62]][_0xbe3b[799]](node),false);var $image=this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[856])[_0xbe3b[344]](_0xbe3b[636]);if(isP){$image[_0xbe3b[500]]()[_0xbe3b[331]]()[_0xbe3b[330]]()[_0xbe3b[271]](_0xbe3b[857]);} else {if(this[_0xbe3b[63]][_0xbe3b[265]]){$image[_0xbe3b[501]](_0xbe3b[321])[_0xbe3b[499]](_0xbe3b[321]);} ;} ;if( typeof json==_0xbe3b[8]){return ;} ;this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[767],$image,json);} };} ,indent:function (){return {increase:function (){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[56]][_0xbe3b[262]]();var block=this[_0xbe3b[56]][_0xbe3b[318]]();if(block&&block[_0xbe3b[306]]==_0xbe3b[158]){this[_0xbe3b[41]][_0xbe3b[858]]();} else {if(block===false&&this[_0xbe3b[63]][_0xbe3b[265]]){this[_0xbe3b[41]][_0xbe3b[859]]();} else {this[_0xbe3b[41]][_0xbe3b[860]]();} ;} ;this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,increaseLists:function (){document[_0xbe3b[317]](_0xbe3b[41]);this[_0xbe3b[41]][_0xbe3b[861]]();this[_0xbe3b[34]][_0xbe3b[862]]();this[_0xbe3b[34]][_0xbe3b[349]]();} ,increaseBlocks:function (){$[_0xbe3b[20]](this[_0xbe3b[56]][_0xbe3b[264]](),$[_0xbe3b[280]](function (i,elem){if(elem[_0xbe3b[306]]===_0xbe3b[145]||elem[_0xbe3b[306]]===_0xbe3b[313]){return ;} ;var $el=this[_0xbe3b[62]][_0xbe3b[276]](elem);var left=this[_0xbe3b[62]][_0xbe3b[863]]($el[_0xbe3b[275]](_0xbe3b[846]))+this[_0xbe3b[63]][_0xbe3b[864]];$el[_0xbe3b[275]](_0xbe3b[846],left+_0xbe3b[477]);} ,this));} ,increaseText:function (){var wrapper=this[_0xbe3b[56]][_0xbe3b[271]](_0xbe3b[270]);$(wrapper)[_0xbe3b[273]](_0xbe3b[272],_0xbe3b[4]);$(wrapper)[_0xbe3b[275]](_0xbe3b[846],this[_0xbe3b[63]][_0xbe3b[864]]+_0xbe3b[477]);} ,decrease:function (){this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[56]][_0xbe3b[262]]();var block=this[_0xbe3b[56]][_0xbe3b[318]]();if(block&&block[_0xbe3b[306]]==_0xbe3b[158]){this[_0xbe3b[41]][_0xbe3b[865]]();} else {this[_0xbe3b[41]][_0xbe3b[866]]();} ;this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,decreaseLists:function (){document[_0xbe3b[317]](_0xbe3b[75]);var current=this[_0xbe3b[56]][_0xbe3b[867]]();var $item=$(current)[_0xbe3b[348]](_0xbe3b[128]);var $parent=$item[_0xbe3b[500]]();if($item[_0xbe3b[335]]()!==0&&$parent[_0xbe3b[335]]()!==0&&$parent[0][_0xbe3b[306]]==_0xbe3b[158]){$parent[_0xbe3b[499]]($item);} ;this[_0xbe3b[41]][_0xbe3b[861]]();if(!this[_0xbe3b[63]][_0xbe3b[265]]&&$item[_0xbe3b[335]]()===0){document[_0xbe3b[317]](_0xbe3b[314],false,_0xbe3b[77]);this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[868])[_0xbe3b[20]]($[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[351]],this));} ;this[_0xbe3b[34]][_0xbe3b[349]]();} ,decreaseBlocks:function (){$[_0xbe3b[20]](this[_0xbe3b[56]][_0xbe3b[264]](),$[_0xbe3b[280]](function (i,elem){var $el=this[_0xbe3b[62]][_0xbe3b[276]](elem);var left=this[_0xbe3b[62]][_0xbe3b[863]]($el[_0xbe3b[275]](_0xbe3b[846]))-this[_0xbe3b[63]][_0xbe3b[864]];if(left<=0){if(this[_0xbe3b[63]][_0xbe3b[265]]&& typeof ($el[_0xbe3b[9]](_0xbe3b[277]))!==_0xbe3b[14]){$el[_0xbe3b[278]]($el[_0xbe3b[68]]()+_0xbe3b[355]);} else {$el[_0xbe3b[275]](_0xbe3b[846],_0xbe3b[255]);this[_0xbe3b[62]][_0xbe3b[279]]($el,_0xbe3b[90]);} ;} else {$el[_0xbe3b[275]](_0xbe3b[846],left+_0xbe3b[477]);} ;} ,this));} ,fixEmptyIndent:function (){var block=this[_0xbe3b[56]][_0xbe3b[318]]();if(this[_0xbe3b[308]][_0xbe3b[309]]&&block&&block[_0xbe3b[306]]==_0xbe3b[158]&&this[_0xbe3b[62]][_0xbe3b[287]]($(block)[_0xbe3b[760]]())){var $block=$(block);$block[_0xbe3b[327]](_0xbe3b[101])[_0xbe3b[489]](_0xbe3b[869])[_0xbe3b[331]]()[_0xbe3b[330]]();$block[_0xbe3b[322]](_0xbe3b[321]);} ;} };} ,inline:function (){return {formatting:function (name){var type,value;if( typeof this[_0xbe3b[69]][name][_0xbe3b[90]]!=_0xbe3b[14]){type=_0xbe3b[90];} else {if( typeof this[_0xbe3b[69]][name][_0xbe3b[296]]!=_0xbe3b[14]){type=_0xbe3b[296];} ;} ;if(type){value=this[_0xbe3b[69]][name][type];} ;this[_0xbe3b[42]][_0xbe3b[298]](this[_0xbe3b[69]][name][_0xbe3b[297]],type,value);} ,format:function (tag,type,value){if(this[_0xbe3b[62]][_0xbe3b[583]](_0xbe3b[155])){return ;} ;var tags=[_0xbe3b[120],_0xbe3b[70],_0xbe3b[123],_0xbe3b[71],_0xbe3b[102],_0xbe3b[870],_0xbe3b[72],_0xbe3b[109],_0xbe3b[110]];var replaced=[_0xbe3b[95],_0xbe3b[95],_0xbe3b[97],_0xbe3b[97],_0xbe3b[99],_0xbe3b[93],_0xbe3b[93],_0xbe3b[122],_0xbe3b[121]];for(var i=0;i<tags[_0xbe3b[21]];i++){if(tag==tags[i]){tag=replaced[i];} ;} ;this[_0xbe3b[42]][_0xbe3b[303]]=type||false;this[_0xbe3b[42]][_0xbe3b[304]]=value||false;this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[261]][_0xbe3b[39]]();this[_0xbe3b[56]][_0xbe3b[286]]();if(this[_0xbe3b[308]][_0xbe3b[309]]){this[_0xbe3b[42]][_0xbe3b[871]](tag);} else {this[_0xbe3b[42]][_0xbe3b[872]](tag);} ;} ,formatCollapsed:function (tag){var current=this[_0xbe3b[56]][_0xbe3b[867]]();var $parent=$(current)[_0xbe3b[348]](tag+_0xbe3b[873]+tag+_0xbe3b[874]);if($parent[_0xbe3b[335]]()!==0){this[_0xbe3b[33]][_0xbe3b[875]]($parent[0]);if(this[_0xbe3b[62]][_0xbe3b[287]]($parent[_0xbe3b[760]]())){$parent[_0xbe3b[326]]();} ;this[_0xbe3b[35]][_0xbe3b[269]]();return ;} ;var node=$(_0xbe3b[315]+tag+_0xbe3b[316])[_0xbe3b[273]](_0xbe3b[632],_0xbe3b[4])[_0xbe3b[273]](_0xbe3b[672],tag);node[_0xbe3b[68]](this[_0xbe3b[63]][_0xbe3b[506]]);node=this[_0xbe3b[42]][_0xbe3b[876]](node);this[_0xbe3b[43]][_0xbe3b[877]](node);this[_0xbe3b[35]][_0xbe3b[269]]();return ;} ,formatMultiple:function (tag){this[_0xbe3b[42]][_0xbe3b[878]](tag);this[_0xbe3b[56]][_0xbe3b[262]]();document[_0xbe3b[317]](_0xbe3b[870]);this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[92])[_0xbe3b[20]]($[_0xbe3b[280]](function (i,s){var $el=$(s);this[_0xbe3b[42]][_0xbe3b[879]]($el,tag);var $span;if(this[_0xbe3b[42]][_0xbe3b[303]]){$span=$(_0xbe3b[469])[_0xbe3b[273]](_0xbe3b[672],tag)[_0xbe3b[273]](_0xbe3b[632],_0xbe3b[4]);$span=this[_0xbe3b[42]][_0xbe3b[876]]($span);} else {$span=$(_0xbe3b[315]+tag+_0xbe3b[316])[_0xbe3b[273]](_0xbe3b[672],tag)[_0xbe3b[273]](_0xbe3b[632],_0xbe3b[4]);} ;$el[_0xbe3b[278]]($span[_0xbe3b[68]]($el[_0xbe3b[331]]()));if(tag==_0xbe3b[101]){var $parent=$span[_0xbe3b[500]]();if($parent&&$parent[0][_0xbe3b[306]]==_0xbe3b[880]&&this[_0xbe3b[42]][_0xbe3b[303]]==_0xbe3b[90]){var arr=this[_0xbe3b[42]][_0xbe3b[304]][_0xbe3b[13]](_0xbe3b[881]);for(var z=0;z<arr[_0xbe3b[21]];z++){if(arr[z]===_0xbe3b[255]){return ;} ;var style=arr[z][_0xbe3b[13]](_0xbe3b[882]);$parent[_0xbe3b[275]](style[0],_0xbe3b[255]);if(this[_0xbe3b[62]][_0xbe3b[279]]($parent,_0xbe3b[90])){$parent[_0xbe3b[278]]($parent[_0xbe3b[331]]());} ;} ;} ;} ;} ,this));if(tag!=_0xbe3b[101]){this[_0xbe3b[261]][_0xbe3b[327]](this[_0xbe3b[63]][_0xbe3b[671]][_0xbe3b[241]](_0xbe3b[661]))[_0xbe3b[20]]($[_0xbe3b[280]](function (i,s){var $el=$(s);var property=$el[_0xbe3b[275]](_0xbe3b[883]);if(property==_0xbe3b[884]){$el[_0xbe3b[275]](_0xbe3b[883],_0xbe3b[255]);this[_0xbe3b[62]][_0xbe3b[279]]($el,_0xbe3b[90]);} ;} ,this));} ;if(tag!=_0xbe3b[93]){var _this=this;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[42])[_0xbe3b[20]](function (i,s){_this[_0xbe3b[62]][_0xbe3b[325]](s,_0xbe3b[93]);} );} ;this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,formatRemoveSameChildren:function ($el,tag){$el[_0xbe3b[758]](tag)[_0xbe3b[20]](function (){var $child=$(this);if(!$child[_0xbe3b[439]](_0xbe3b[885])){$child[_0xbe3b[331]]()[_0xbe3b[330]]();} ;} );} ,formatConvert:function (tag){this[_0xbe3b[56]][_0xbe3b[262]]();var find=_0xbe3b[255];if(this[_0xbe3b[42]][_0xbe3b[303]]==_0xbe3b[296]){find=_0xbe3b[886]+this[_0xbe3b[42]][_0xbe3b[304]]+_0xbe3b[874];} else {if(this[_0xbe3b[42]][_0xbe3b[303]]==_0xbe3b[90]){find=_0xbe3b[887]+this[_0xbe3b[42]][_0xbe3b[304]]+_0xbe3b[888];} ;} ;if(tag!=_0xbe3b[93]){var self=this;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[93])[_0xbe3b[20]](function (i,s){self[_0xbe3b[62]][_0xbe3b[325]](s,_0xbe3b[42]);} );} ;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[890]+tag+_0xbe3b[888]+find)[_0xbe3b[20]](function (){if(find===_0xbe3b[255]&&tag==_0xbe3b[101]&&this[_0xbe3b[306]][_0xbe3b[320]]()==tag){return ;} ;var $el=$(this);$el[_0xbe3b[278]]($(_0xbe3b[889])[_0xbe3b[68]]($el[_0xbe3b[331]]()));} );this[_0xbe3b[56]][_0xbe3b[268]]();} ,setFormat:function (node){switch(this[_0xbe3b[42]][_0xbe3b[303]]){case _0xbe3b[296]:if(node[_0xbe3b[439]](this[_0xbe3b[42]][_0xbe3b[304]])){node[_0xbe3b[346]](this[_0xbe3b[42]][_0xbe3b[304]]);node[_0xbe3b[344]](_0xbe3b[674]);} else {node[_0xbe3b[342]](this[_0xbe3b[42]][_0xbe3b[304]]);node[_0xbe3b[273]](_0xbe3b[674],this[_0xbe3b[42]][_0xbe3b[304]]);} ;break ;;case _0xbe3b[90]:node[0][_0xbe3b[90]][_0xbe3b[891]]=this[_0xbe3b[42]][_0xbe3b[304]];node[_0xbe3b[273]](_0xbe3b[673],this[_0xbe3b[42]][_0xbe3b[304]]);break ;;} ;return node;} ,removeStyle:function (){this[_0xbe3b[30]][_0xbe3b[256]]();var current=this[_0xbe3b[56]][_0xbe3b[867]]();var nodes=this[_0xbe3b[56]][_0xbe3b[892]]();this[_0xbe3b[56]][_0xbe3b[262]]();if(current&&current[_0xbe3b[306]]===_0xbe3b[880]){var $s=$(current);$s[_0xbe3b[344]](_0xbe3b[90]);if($s[0][_0xbe3b[893]][_0xbe3b[21]]===0){$s[_0xbe3b[278]]($s[_0xbe3b[331]]());} ;} ;$[_0xbe3b[20]](nodes,$[_0xbe3b[280]](function (i,s){var $s=$(s);if($[_0xbe3b[300]](s[_0xbe3b[306]][_0xbe3b[320]](),this[_0xbe3b[63]][_0xbe3b[671]])!=-1&&!$s[_0xbe3b[439]](_0xbe3b[885])){$s[_0xbe3b[344]](_0xbe3b[90]);if($s[0][_0xbe3b[893]][_0xbe3b[21]]===0){$s[_0xbe3b[278]]($s[_0xbe3b[331]]());} ;} ;} ,this));this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,removeStyleRule:function (name){this[_0xbe3b[30]][_0xbe3b[256]]();var parent=this[_0xbe3b[56]][_0xbe3b[894]]();var nodes=this[_0xbe3b[56]][_0xbe3b[892]]();this[_0xbe3b[56]][_0xbe3b[262]]();if(parent&&parent[_0xbe3b[306]]===_0xbe3b[880]){var $s=$(parent);$s[_0xbe3b[275]](name,_0xbe3b[255]);this[_0xbe3b[62]][_0xbe3b[279]]($s,_0xbe3b[90]);if($s[0][_0xbe3b[893]][_0xbe3b[21]]===0){$s[_0xbe3b[278]]($s[_0xbe3b[331]]());} ;} ;$[_0xbe3b[20]](nodes,$[_0xbe3b[280]](function (i,s){var $s=$(s);if($[_0xbe3b[300]](s[_0xbe3b[306]][_0xbe3b[320]](),this[_0xbe3b[63]][_0xbe3b[671]])!=-1&&!$s[_0xbe3b[439]](_0xbe3b[885])){$s[_0xbe3b[275]](name,_0xbe3b[255]);this[_0xbe3b[62]][_0xbe3b[279]]($s,_0xbe3b[90]);if($s[0][_0xbe3b[893]][_0xbe3b[21]]===0){$s[_0xbe3b[278]]($s[_0xbe3b[331]]());} ;} ;} ,this));this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,removeFormat:function (){this[_0xbe3b[30]][_0xbe3b[256]]();var current=this[_0xbe3b[56]][_0xbe3b[867]]();this[_0xbe3b[56]][_0xbe3b[262]]();document[_0xbe3b[317]](_0xbe3b[895]);if(current&&current[_0xbe3b[306]]===_0xbe3b[880]){$(current)[_0xbe3b[278]]($(current)[_0xbe3b[331]]());} ;$[_0xbe3b[20]](this[_0xbe3b[56]][_0xbe3b[896]](),$[_0xbe3b[280]](function (i,s){var $s=$(s);if($[_0xbe3b[300]](s[_0xbe3b[306]][_0xbe3b[320]](),this[_0xbe3b[63]][_0xbe3b[671]])!=-1&&!$s[_0xbe3b[439]](_0xbe3b[885])){$s[_0xbe3b[278]]($s[_0xbe3b[331]]());} ;} ,this));this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,toggleClass:function (className){this[_0xbe3b[42]][_0xbe3b[298]](_0xbe3b[101],_0xbe3b[296],className);} ,toggleStyle:function (value){this[_0xbe3b[42]][_0xbe3b[298]](_0xbe3b[101],_0xbe3b[90],value);} };} ,insert:function (){return {set:function (html,clean){this[_0xbe3b[54]][_0xbe3b[326]]();html=this[_0xbe3b[34]][_0xbe3b[543]](html);if( typeof clean==_0xbe3b[14]){html=this[_0xbe3b[34]][_0xbe3b[897]](html,false);} ;this[_0xbe3b[261]][_0xbe3b[68]](html);this[_0xbe3b[56]][_0xbe3b[326]]();this[_0xbe3b[39]][_0xbe3b[449]]();this[_0xbe3b[34]][_0xbe3b[862]]();this[_0xbe3b[35]][_0xbe3b[269]]();this[_0xbe3b[51]][_0xbe3b[244]]();if( typeof clean==_0xbe3b[14]){setTimeout($[_0xbe3b[280]](this[_0xbe3b[34]][_0xbe3b[349]],this),10);} ;} ,text:function (text){this[_0xbe3b[54]][_0xbe3b[326]]();text=text.toString();text=$[_0xbe3b[386]](text);text=this[_0xbe3b[34]][_0xbe3b[580]](text,false);this[_0xbe3b[261]][_0xbe3b[39]]();if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[43]][_0xbe3b[898]](text);} else {this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[308]][_0xbe3b[899]]();var el=document[_0xbe3b[646]](_0xbe3b[270]);el[_0xbe3b[505]]=text;var frag=document[_0xbe3b[900]](),node,lastNode;while((node=el[_0xbe3b[902]])){lastNode=frag[_0xbe3b[901]](node);} ;this[_0xbe3b[308]][_0xbe3b[903]](frag);if(lastNode){var range=this[_0xbe3b[308]][_0xbe3b[518]]();range[_0xbe3b[513]](lastNode);range[_0xbe3b[517]](true);this[_0xbe3b[746]][_0xbe3b[530]]();this[_0xbe3b[746]][_0xbe3b[509]](range);} ;} ;this[_0xbe3b[35]][_0xbe3b[269]]();this[_0xbe3b[34]][_0xbe3b[349]]();} ,htmlWithoutClean:function (html){this[_0xbe3b[43]][_0xbe3b[68]](html,false);} ,html:function (html,clean){this[_0xbe3b[54]][_0xbe3b[326]]();if( typeof clean==_0xbe3b[14]){clean=true;} ;this[_0xbe3b[261]][_0xbe3b[39]]();html=this[_0xbe3b[34]][_0xbe3b[543]](html);if(clean){html=this[_0xbe3b[34]][_0xbe3b[897]](html);} ;if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[43]][_0xbe3b[898]](html);} else {if(this[_0xbe3b[34]][_0xbe3b[590]]){this[_0xbe3b[43]][_0xbe3b[904]](html);} else {document[_0xbe3b[317]](_0xbe3b[905],null,html);} ;this[_0xbe3b[43]][_0xbe3b[906]]();} ;this[_0xbe3b[34]][_0xbe3b[862]]();if(!this[_0xbe3b[63]][_0xbe3b[265]]){this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[77])[_0xbe3b[20]]($[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[351]],this));} ;this[_0xbe3b[35]][_0xbe3b[269]]();this[_0xbe3b[51]][_0xbe3b[244]]();if(clean){this[_0xbe3b[34]][_0xbe3b[349]]();} ;} ,htmlFixMozilla:function (){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[452])){return ;} ;var $next=$(this[_0xbe3b[56]][_0xbe3b[318]]())[_0xbe3b[510]]();if($next[_0xbe3b[21]]>0&&$next[0][_0xbe3b[306]]==_0xbe3b[134]&&$next[_0xbe3b[68]]()===_0xbe3b[255]){$next[_0xbe3b[326]]();} ;} ,htmlIe:function (html){if(this[_0xbe3b[62]][_0xbe3b[907]]()){var parent=this[_0xbe3b[62]][_0xbe3b[583]](_0xbe3b[134]);var $html=$(_0xbe3b[541])[_0xbe3b[322]](html);var blocksMatch=$html[_0xbe3b[331]]()[_0xbe3b[441]](_0xbe3b[908]);if(parent&&blocksMatch){this[_0xbe3b[43]][_0xbe3b[909]](parent,html);} else {this[_0xbe3b[43]][_0xbe3b[910]](html);} ;return ;} ;document[_0xbe3b[56]][_0xbe3b[526]]()[_0xbe3b[911]](html);} ,execHtml:function (html){html=this[_0xbe3b[34]][_0xbe3b[543]](html);this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[308]][_0xbe3b[899]]();var el=document[_0xbe3b[646]](_0xbe3b[270]);el[_0xbe3b[505]]=html;var frag=document[_0xbe3b[900]](),node,lastNode;while((node=el[_0xbe3b[902]])){lastNode=frag[_0xbe3b[901]](node);} ;this[_0xbe3b[308]][_0xbe3b[903]](frag);this[_0xbe3b[308]][_0xbe3b[517]](true);this[_0xbe3b[33]][_0xbe3b[875]](lastNode);} ,node:function (node,deleteContents){node=node[0]||node;var html=this[_0xbe3b[62]][_0xbe3b[799]](node);html=this[_0xbe3b[34]][_0xbe3b[543]](html);node=$(html)[0];this[_0xbe3b[56]][_0xbe3b[286]]();if(deleteContents!==false){this[_0xbe3b[308]][_0xbe3b[899]]();} ;this[_0xbe3b[308]][_0xbe3b[903]](node);this[_0xbe3b[308]][_0xbe3b[517]](false);this[_0xbe3b[56]][_0xbe3b[509]]();return node;} ,nodeToPoint:function (node,x,y){node=node[0]||node;this[_0xbe3b[56]][_0xbe3b[286]]();var range;if(document[_0xbe3b[912]]){var pos=document[_0xbe3b[912]](x,y);this[_0xbe3b[308]][_0xbe3b[447]](pos[_0xbe3b[913]],pos[_0xbe3b[472]]);this[_0xbe3b[308]][_0xbe3b[517]](true);this[_0xbe3b[308]][_0xbe3b[903]](node);} else {if(document[_0xbe3b[914]]){range=document[_0xbe3b[914]](x,y);range[_0xbe3b[903]](node);} else {if( typeof document[_0xbe3b[87]][_0xbe3b[915]]!=_0xbe3b[14]){range=document[_0xbe3b[87]][_0xbe3b[915]]();range[_0xbe3b[916]](x,y);var endRange=range[_0xbe3b[917]]();endRange[_0xbe3b[916]](x,y);range[_0xbe3b[919]](_0xbe3b[918],endRange);range[_0xbe3b[920]]();} ;} ;} ;} ,nodeToCaretPositionFromPoint:function (e,node){node=node[0]||node;var range;var x=e[_0xbe3b[921]],y=e[_0xbe3b[922]];if(document[_0xbe3b[912]]){var pos=document[_0xbe3b[912]](x,y);var sel=document[_0xbe3b[522]]();range=sel[_0xbe3b[524]](0);range[_0xbe3b[447]](pos[_0xbe3b[913]],pos[_0xbe3b[472]]);range[_0xbe3b[517]](true);range[_0xbe3b[903]](node);} else {if(document[_0xbe3b[914]]){range=document[_0xbe3b[914]](x,y);range[_0xbe3b[903]](node);} else {if( typeof document[_0xbe3b[87]][_0xbe3b[915]]!=_0xbe3b[14]){range=document[_0xbe3b[87]][_0xbe3b[915]]();range[_0xbe3b[916]](x,y);var endRange=range[_0xbe3b[917]]();endRange[_0xbe3b[916]](x,y);range[_0xbe3b[919]](_0xbe3b[918],endRange);range[_0xbe3b[920]]();} ;} ;} ;} ,ie11FixInserting:function (parent,html){var node=document[_0xbe3b[646]](_0xbe3b[101]);node[_0xbe3b[923]]=_0xbe3b[924];this[_0xbe3b[43]][_0xbe3b[877]](node);var parHtml=$(parent)[_0xbe3b[68]]();parHtml=_0xbe3b[613]+parHtml[_0xbe3b[534]](/<span class="redactor-ie-paste"><\/span>/gi,_0xbe3b[614]+html+_0xbe3b[613])+_0xbe3b[614];$(parent)[_0xbe3b[278]](parHtml);} ,ie11PasteFrag:function (html){this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[308]][_0xbe3b[899]]();var el=document[_0xbe3b[646]](_0xbe3b[270]);el[_0xbe3b[505]]=html;var frag=document[_0xbe3b[900]](),node,lastNode;while((node=el[_0xbe3b[902]])){lastNode=frag[_0xbe3b[901]](node);} ;this[_0xbe3b[308]][_0xbe3b[903]](frag);} };} ,keydown:function (){return {init:function (e){if(this[_0xbe3b[231]]){return ;} ;var key=e[_0xbe3b[925]];var arrow=(key>=37&&key<=40);this[_0xbe3b[44]][_0xbe3b[926]]=e[_0xbe3b[927]]||e[_0xbe3b[928]];this[_0xbe3b[44]][_0xbe3b[929]]=this[_0xbe3b[56]][_0xbe3b[867]]();this[_0xbe3b[44]][_0xbe3b[500]]=this[_0xbe3b[56]][_0xbe3b[894]]();this[_0xbe3b[44]][_0xbe3b[29]]=this[_0xbe3b[56]][_0xbe3b[318]]();this[_0xbe3b[44]][_0xbe3b[79]]=this[_0xbe3b[62]][_0xbe3b[930]](this[_0xbe3b[44]][_0xbe3b[929]],_0xbe3b[79]);this[_0xbe3b[44]][_0xbe3b[78]]=this[_0xbe3b[62]][_0xbe3b[930]](this[_0xbe3b[44]][_0xbe3b[929]],_0xbe3b[78]);this[_0xbe3b[44]][_0xbe3b[931]]=this[_0xbe3b[62]][_0xbe3b[930]](this[_0xbe3b[44]][_0xbe3b[929]],_0xbe3b[931]);this[_0xbe3b[57]][_0xbe3b[22]](e,key);this[_0xbe3b[44]][_0xbe3b[932]](arrow,key);this[_0xbe3b[44]][_0xbe3b[933]](e,key);this[_0xbe3b[44]][_0xbe3b[934]](arrow);this[_0xbe3b[44]][_0xbe3b[935]](e,key);var keydownStop=this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[44],e);if(keydownStop===false){e[_0xbe3b[415]]();return false;} ;if(this[_0xbe3b[63]][_0xbe3b[936]]&&key===this[_0xbe3b[704]][_0xbe3b[937]]){this[_0xbe3b[44]][_0xbe3b[938]]();} ;if(!this[_0xbe3b[63]][_0xbe3b[936]]&&key===this[_0xbe3b[704]][_0xbe3b[939]]){e[_0xbe3b[415]]();if(!this[_0xbe3b[308]][_0xbe3b[309]]){this[_0xbe3b[308]][_0xbe3b[899]]();} ;return ;} ;if(key==this[_0xbe3b[704]][_0xbe3b[939]]&&!e[_0xbe3b[940]]&&!e[_0xbe3b[927]]&&!e[_0xbe3b[928]]){var stop=this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[941],e);if(stop===false){e[_0xbe3b[415]]();return false;} ;if(this[_0xbe3b[44]][_0xbe3b[78]]&&this[_0xbe3b[44]][_0xbe3b[942]](e)===true){return false;} ;var current,$next;if(this[_0xbe3b[44]][_0xbe3b[79]]){return this[_0xbe3b[44]][_0xbe3b[943]](e);} else {if(this[_0xbe3b[44]][_0xbe3b[78]]||this[_0xbe3b[44]][_0xbe3b[931]]){current=this[_0xbe3b[56]][_0xbe3b[867]]();$next=$(current)[_0xbe3b[510]]();if($next[_0xbe3b[335]]()!==0&&$next[0][_0xbe3b[306]]==_0xbe3b[507]){return this[_0xbe3b[44]][_0xbe3b[944]](e);} else {if(this[_0xbe3b[62]][_0xbe3b[945]]()&&(current&&current!=_0xbe3b[880])){return this[_0xbe3b[44]][_0xbe3b[946]](e);} else {return this[_0xbe3b[44]][_0xbe3b[944]](e);} ;} ;} else {if(this[_0xbe3b[63]][_0xbe3b[265]]&&!this[_0xbe3b[44]][_0xbe3b[29]]){current=this[_0xbe3b[56]][_0xbe3b[867]]();$next=$(this[_0xbe3b[44]][_0xbe3b[929]])[_0xbe3b[510]]();if(current!==false&&$(current)[_0xbe3b[439]](_0xbe3b[947])){$(current)[_0xbe3b[326]]();return this[_0xbe3b[44]][_0xbe3b[946]](e);} else {if($next[_0xbe3b[21]]===0&&current===false&& typeof $next[_0xbe3b[948]]!=_0xbe3b[14]){return this[_0xbe3b[44]][_0xbe3b[946]](e);} ;return this[_0xbe3b[44]][_0xbe3b[944]](e);} ;} else {if(this[_0xbe3b[63]][_0xbe3b[265]]&&this[_0xbe3b[44]][_0xbe3b[29]]){setTimeout($[_0xbe3b[280]](this[_0xbe3b[44]][_0xbe3b[949]],this),1);} else {if(!this[_0xbe3b[63]][_0xbe3b[265]]&&this[_0xbe3b[44]][_0xbe3b[29]]&&this[_0xbe3b[44]][_0xbe3b[29]][_0xbe3b[306]]!==_0xbe3b[158]){setTimeout($[_0xbe3b[280]](this[_0xbe3b[44]][_0xbe3b[950]],this),1);} else {if(!this[_0xbe3b[63]][_0xbe3b[265]]&&!this[_0xbe3b[44]][_0xbe3b[29]]){return this[_0xbe3b[44]][_0xbe3b[951]](e);} ;} ;} ;} ;} ;} ;} ;if(key===this[_0xbe3b[704]][_0xbe3b[939]]&&(e[_0xbe3b[927]]||e[_0xbe3b[940]])){return this[_0xbe3b[44]][_0xbe3b[952]](e);} ;if(key===this[_0xbe3b[704]][_0xbe3b[953]]||e[_0xbe3b[928]]&&key===221||e[_0xbe3b[928]]&&key===219){return this[_0xbe3b[44]][_0xbe3b[954]](e,key);} ;if(key===this[_0xbe3b[704]][_0xbe3b[955]]||key===this[_0xbe3b[704]][_0xbe3b[956]]){var nodes=this[_0xbe3b[56]][_0xbe3b[896]]();if(nodes){var len=nodes[_0xbe3b[21]];var last;for(var i=0;i<len;i++){var children=$(nodes[i])[_0xbe3b[758]](_0xbe3b[119]);if(children[_0xbe3b[335]]()!==0){var self=this;$[_0xbe3b[20]](children,function (z,s){var $s=$(s);if($s[_0xbe3b[275]](_0xbe3b[789])!=_0xbe3b[790]){return ;} ;self[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[851],s[_0xbe3b[630]],$s);last=s;} );} else {if(nodes[i][_0xbe3b[306]]==_0xbe3b[833]){if(last!=nodes[i]){this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[851],nodes[i][_0xbe3b[630]],$(nodes[i]));last=nodes[i];} ;} ;} ;} ;} ;} ;if(key===this[_0xbe3b[704]][_0xbe3b[955]]){this[_0xbe3b[44]][_0xbe3b[957]]();this[_0xbe3b[44]][_0xbe3b[958]](e);} ;this[_0xbe3b[35]][_0xbe3b[269]]();} ,checkEvents:function (arrow,key){if(!arrow&&(this[_0xbe3b[36]][_0xbe3b[422]]()==_0xbe3b[421]||this[_0xbe3b[36]][_0xbe3b[422]]()==_0xbe3b[423])){this[_0xbe3b[36]][_0xbe3b[424]](false);if(this[_0xbe3b[44]][_0xbe3b[959]](key)){this[_0xbe3b[30]][_0xbe3b[256]]();} ;} ;} ,checkKeyEvents:function (key){var k=this[_0xbe3b[704]];var keys=[k[_0xbe3b[955]],k[_0xbe3b[956]],k[_0xbe3b[939]],k[_0xbe3b[960]],k[_0xbe3b[961]],k[_0xbe3b[953]],k[_0xbe3b[962]],k[_0xbe3b[963]],k[_0xbe3b[964]],k[_0xbe3b[965]]];return ($[_0xbe3b[300]](key,keys)==-1)?true:false;} ,addArrowsEvent:function (arrow){if(!arrow){return ;} ;if((this[_0xbe3b[36]][_0xbe3b[422]]()==_0xbe3b[421]||this[_0xbe3b[36]][_0xbe3b[422]]()==_0xbe3b[423])){this[_0xbe3b[36]][_0xbe3b[424]](false);return ;} ;this[_0xbe3b[36]][_0xbe3b[424]](_0xbe3b[423]);} ,setupBuffer:function (e,key){if(this[_0xbe3b[44]][_0xbe3b[926]]&&key===90&&!e[_0xbe3b[940]]&&!e[_0xbe3b[966]]&&this[_0xbe3b[63]][_0xbe3b[30]][_0xbe3b[21]]){e[_0xbe3b[415]]();this[_0xbe3b[30]][_0xbe3b[363]]();return ;} else {if(this[_0xbe3b[44]][_0xbe3b[926]]&&key===90&&e[_0xbe3b[940]]&&!e[_0xbe3b[966]]&&this[_0xbe3b[63]][_0xbe3b[366]][_0xbe3b[21]]!==0){e[_0xbe3b[415]]();this[_0xbe3b[30]][_0xbe3b[368]]();return ;} else {if(!this[_0xbe3b[44]][_0xbe3b[926]]){if(key==this[_0xbe3b[704]][_0xbe3b[955]]||key==this[_0xbe3b[704]][_0xbe3b[956]]||(key==this[_0xbe3b[704]][_0xbe3b[939]]&&!e[_0xbe3b[927]]&&!e[_0xbe3b[940]])||key==this[_0xbe3b[704]][_0xbe3b[960]]){this[_0xbe3b[30]][_0xbe3b[256]]();} ;} ;} ;} ;} ,setupSelectAll:function (e,key){if(this[_0xbe3b[44]][_0xbe3b[926]]&&key===65){this[_0xbe3b[62]][_0xbe3b[967]]();} else {if(key!=this[_0xbe3b[704]][_0xbe3b[968]]&&!this[_0xbe3b[44]][_0xbe3b[926]]){this[_0xbe3b[62]][_0xbe3b[425]]();} ;} ;} ,onArrowDown:function (){var tags=[this[_0xbe3b[44]][_0xbe3b[78]],this[_0xbe3b[44]][_0xbe3b[79]],this[_0xbe3b[44]][_0xbe3b[931]]];for(var i=0;i<tags[_0xbe3b[21]];i++){if(tags[i]){this[_0xbe3b[44]][_0xbe3b[969]](tags[i]);return false;} ;} ;} ,onShiftEnter:function (e){this[_0xbe3b[30]][_0xbe3b[256]]();if(this[_0xbe3b[44]][_0xbe3b[78]]&&this[_0xbe3b[62]][_0xbe3b[945]]()){return this[_0xbe3b[44]][_0xbe3b[946]](e);} ;return this[_0xbe3b[44]][_0xbe3b[944]](e);} ,onTab:function (e,key){if(!this[_0xbe3b[63]][_0xbe3b[970]]){return true;} ;if(this[_0xbe3b[62]][_0xbe3b[287]](this[_0xbe3b[35]][_0xbe3b[286]]())&&this[_0xbe3b[63]][_0xbe3b[971]]===false){return true;} ;e[_0xbe3b[415]]();var node;if(this[_0xbe3b[44]][_0xbe3b[79]]&&!e[_0xbe3b[940]]){node=(this[_0xbe3b[63]][_0xbe3b[643]])?document[_0xbe3b[973]](Array(this[_0xbe3b[63]][_0xbe3b[643]]+1)[_0xbe3b[241]](_0xbe3b[972])):document[_0xbe3b[973]](_0xbe3b[578]);this[_0xbe3b[43]][_0xbe3b[877]](node);this[_0xbe3b[35]][_0xbe3b[269]]();} else {if(this[_0xbe3b[63]][_0xbe3b[971]]!==false){node=document[_0xbe3b[973]](Array(this[_0xbe3b[63]][_0xbe3b[971]]+1)[_0xbe3b[241]](_0xbe3b[972]));this[_0xbe3b[43]][_0xbe3b[877]](node);this[_0xbe3b[35]][_0xbe3b[269]]();} else {if(e[_0xbe3b[928]]&&key===219){this[_0xbe3b[41]][_0xbe3b[974]]();} else {if(e[_0xbe3b[928]]&&key===221){this[_0xbe3b[41]][_0xbe3b[975]]();} else {if(!e[_0xbe3b[940]]){this[_0xbe3b[41]][_0xbe3b[975]]();} else {this[_0xbe3b[41]][_0xbe3b[974]]();} ;} ;} ;} ;} ;return false;} ,replaceDivToBreakLine:function (){var blockElem=this[_0xbe3b[56]][_0xbe3b[318]]();var blockHtml=blockElem[_0xbe3b[505]][_0xbe3b[534]](/<br\s?\/?>/gi,_0xbe3b[255]);if((blockElem[_0xbe3b[306]]===_0xbe3b[144]||blockElem[_0xbe3b[306]]===_0xbe3b[134])&&blockHtml===_0xbe3b[255]&&!$(blockElem)[_0xbe3b[439]](_0xbe3b[392])){var br=document[_0xbe3b[646]](_0xbe3b[619]);$(blockElem)[_0xbe3b[278]](br);this[_0xbe3b[33]][_0xbe3b[976]](br);this[_0xbe3b[35]][_0xbe3b[269]]();return false;} ;} ,replaceDivToParagraph:function (){var blockElem=this[_0xbe3b[56]][_0xbe3b[318]]();var blockHtml=blockElem[_0xbe3b[505]][_0xbe3b[534]](/<br\s?\/?>/gi,_0xbe3b[255]);if(blockElem[_0xbe3b[306]]===_0xbe3b[144]&&blockHtml===_0xbe3b[255]&&!$(blockElem)[_0xbe3b[439]](_0xbe3b[392])){var p=document[_0xbe3b[646]](_0xbe3b[77]);p[_0xbe3b[505]]=this[_0xbe3b[63]][_0xbe3b[506]];$(blockElem)[_0xbe3b[278]](p);this[_0xbe3b[33]][_0xbe3b[447]](p);this[_0xbe3b[35]][_0xbe3b[269]]();return false;} else {if(this[_0xbe3b[63]][_0xbe3b[977]]&&blockElem[_0xbe3b[306]]==_0xbe3b[134]){$(blockElem)[_0xbe3b[344]](_0xbe3b[296])[_0xbe3b[344]](_0xbe3b[90]);} ;} ;} ,insertParagraph:function (e){e[_0xbe3b[415]]();this[_0xbe3b[56]][_0xbe3b[286]]();var p=document[_0xbe3b[646]](_0xbe3b[77]);p[_0xbe3b[505]]=this[_0xbe3b[63]][_0xbe3b[506]];this[_0xbe3b[308]][_0xbe3b[899]]();this[_0xbe3b[308]][_0xbe3b[903]](p);this[_0xbe3b[33]][_0xbe3b[447]](p);this[_0xbe3b[35]][_0xbe3b[269]]();return false;} ,exitFromBlockquote:function (e){if(!this[_0xbe3b[62]][_0xbe3b[945]]()){return ;} ;var tmp=$[_0xbe3b[386]]($(this[_0xbe3b[44]][_0xbe3b[29]])[_0xbe3b[68]]());if(tmp[_0xbe3b[10]](/(<br\s?\/?>){2}$/i)!=-1){e[_0xbe3b[415]]();if(this[_0xbe3b[63]][_0xbe3b[265]]){var br=document[_0xbe3b[646]](_0xbe3b[619]);$(this[_0xbe3b[44]][_0xbe3b[78]])[_0xbe3b[499]](br);this[_0xbe3b[33]][_0xbe3b[976]](br);$(this[_0xbe3b[44]][_0xbe3b[29]])[_0xbe3b[68]](tmp[_0xbe3b[534]](/<br\s?\/?>$/i,_0xbe3b[255]));} else {var node=$(this[_0xbe3b[63]][_0xbe3b[508]]);$(this[_0xbe3b[44]][_0xbe3b[78]])[_0xbe3b[499]](node);this[_0xbe3b[33]][_0xbe3b[447]](node);} ;return true;} ;return ;} ,insertAfterLastElement:function (element){if(!this[_0xbe3b[62]][_0xbe3b[945]]()){return ;} ;this[_0xbe3b[30]][_0xbe3b[256]]();if(this[_0xbe3b[63]][_0xbe3b[265]]){var contents=$(_0xbe3b[541])[_0xbe3b[322]]($[_0xbe3b[386]](this[_0xbe3b[261]][_0xbe3b[68]]()))[_0xbe3b[331]]();var last=contents[_0xbe3b[761]]()[0];if(last[_0xbe3b[306]]==_0xbe3b[880]&&last[_0xbe3b[505]]===_0xbe3b[255]){last=contents[_0xbe3b[512]]()[0];} ;if(this[_0xbe3b[62]][_0xbe3b[799]](last)!=this[_0xbe3b[62]][_0xbe3b[799]](element)){return ;} ;var br=document[_0xbe3b[646]](_0xbe3b[619]);$(element)[_0xbe3b[499]](br);this[_0xbe3b[33]][_0xbe3b[875]](br);} else {if(this[_0xbe3b[261]][_0xbe3b[331]]()[_0xbe3b[761]]()[0]!==element){return ;} ;var node=$(this[_0xbe3b[63]][_0xbe3b[508]]);$(element)[_0xbe3b[499]](node);this[_0xbe3b[33]][_0xbe3b[447]](node);} ;} ,insertNewLine:function (e){e[_0xbe3b[415]]();var node=document[_0xbe3b[973]](_0xbe3b[612]);this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[308]][_0xbe3b[899]]();this[_0xbe3b[308]][_0xbe3b[903]](node);this[_0xbe3b[33]][_0xbe3b[875]](node);this[_0xbe3b[35]][_0xbe3b[269]]();return false;} ,insertBreakLine:function (e){return this[_0xbe3b[44]][_0xbe3b[978]](e);} ,insertDblBreakLine:function (e){return this[_0xbe3b[44]][_0xbe3b[978]](e,true);} ,insertBreakLineProcessing:function (e,dbl){e[_0xbe3b[740]]();this[_0xbe3b[56]][_0xbe3b[286]]();var br1=document[_0xbe3b[646]](_0xbe3b[619]);this[_0xbe3b[308]][_0xbe3b[899]]();this[_0xbe3b[308]][_0xbe3b[903]](br1);if(dbl===true){var br2=document[_0xbe3b[646]](_0xbe3b[619]);this[_0xbe3b[308]][_0xbe3b[903]](br2);this[_0xbe3b[33]][_0xbe3b[875]](br2);} else {this[_0xbe3b[33]][_0xbe3b[875]](br1);} ;this[_0xbe3b[35]][_0xbe3b[269]]();return false;} ,removeInvisibleSpace:function (){var $current=$(this[_0xbe3b[44]][_0xbe3b[929]]);if($current[_0xbe3b[760]]()[_0xbe3b[10]](/^\u200B$/g)===0){$current[_0xbe3b[326]]();} ;} ,removeEmptyListInTable:function (e){var $current=$(this[_0xbe3b[44]][_0xbe3b[929]]);var $parent=$(this[_0xbe3b[44]][_0xbe3b[500]]);var td=$current[_0xbe3b[348]](_0xbe3b[336]);if(td[_0xbe3b[335]]()!==0&&$current[_0xbe3b[348]](_0xbe3b[128])&&$parent[_0xbe3b[758]](_0xbe3b[128])[_0xbe3b[335]]()===1){if(!this[_0xbe3b[62]][_0xbe3b[287]]($current[_0xbe3b[760]]())){return ;} ;e[_0xbe3b[415]]();$current[_0xbe3b[326]]();$parent[_0xbe3b[326]]();this[_0xbe3b[33]][_0xbe3b[447]](td);} ;} };} ,keyup:function (){return {init:function (e){if(this[_0xbe3b[231]]){return ;} ;var key=e[_0xbe3b[925]];this[_0xbe3b[45]][_0xbe3b[929]]=this[_0xbe3b[56]][_0xbe3b[867]]();this[_0xbe3b[45]][_0xbe3b[500]]=this[_0xbe3b[56]][_0xbe3b[894]]();var $parent=this[_0xbe3b[62]][_0xbe3b[764]]($(this[_0xbe3b[45]][_0xbe3b[500]])[_0xbe3b[500]]());var keyupStop=this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[45],e);if(keyupStop===false){e[_0xbe3b[415]]();return false;} ;if(!this[_0xbe3b[63]][_0xbe3b[265]]&&this[_0xbe3b[45]][_0xbe3b[929]][_0xbe3b[759]]==3&&this[_0xbe3b[45]][_0xbe3b[929]][_0xbe3b[21]]<=1&&(this[_0xbe3b[45]][_0xbe3b[500]]===false||this[_0xbe3b[45]][_0xbe3b[500]][_0xbe3b[306]]==_0xbe3b[979])){this[_0xbe3b[45]][_0xbe3b[980]]();} ;if(!this[_0xbe3b[63]][_0xbe3b[265]]&&$(this[_0xbe3b[45]][_0xbe3b[500]])[_0xbe3b[439]](_0xbe3b[947])&&($parent===false||$parent[0][_0xbe3b[306]]==_0xbe3b[979])){$(this[_0xbe3b[45]][_0xbe3b[500]])[_0xbe3b[331]]()[_0xbe3b[330]]();this[_0xbe3b[45]][_0xbe3b[980]]();} ;if(this[_0xbe3b[63]][_0xbe3b[981]]&&(this[_0xbe3b[63]][_0xbe3b[982]]||this[_0xbe3b[63]][_0xbe3b[983]]||this[_0xbe3b[63]][_0xbe3b[984]])&&key===this[_0xbe3b[704]][_0xbe3b[939]]){this[_0xbe3b[987]](this[_0xbe3b[63]][_0xbe3b[985]],this[_0xbe3b[63]][_0xbe3b[981]],this[_0xbe3b[63]][_0xbe3b[982]],this[_0xbe3b[63]][_0xbe3b[983]],this[_0xbe3b[63]][_0xbe3b[984]],this[_0xbe3b[63]][_0xbe3b[986]]);this[_0xbe3b[51]][_0xbe3b[244]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ;if(key===this[_0xbe3b[704]][_0xbe3b[956]]||key===this[_0xbe3b[704]][_0xbe3b[955]]){this[_0xbe3b[34]][_0xbe3b[349]]();if(this[_0xbe3b[51]][_0xbe3b[40]]){e[_0xbe3b[415]]();this[_0xbe3b[40]][_0xbe3b[797]]();this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[40]][_0xbe3b[326]](this[_0xbe3b[51]][_0xbe3b[40]]);this[_0xbe3b[51]][_0xbe3b[40]]=false;return false;} ;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[77])[_0xbe3b[20]]($[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[351]],this));if(this[_0xbe3b[45]][_0xbe3b[929]]&&this[_0xbe3b[45]][_0xbe3b[929]][_0xbe3b[306]]==_0xbe3b[144]&&this[_0xbe3b[62]][_0xbe3b[287]](this[_0xbe3b[45]][_0xbe3b[929]][_0xbe3b[505]])){if(this[_0xbe3b[63]][_0xbe3b[265]]){$(this[_0xbe3b[45]][_0xbe3b[929]])[_0xbe3b[499]](this[_0xbe3b[56]][_0xbe3b[988]]());this[_0xbe3b[56]][_0xbe3b[268]]();$(this[_0xbe3b[45]][_0xbe3b[929]])[_0xbe3b[326]]();} ;} ;return this[_0xbe3b[45]][_0xbe3b[989]](e);} ;} ,replaceToParagraph:function (){var $current=$(this[_0xbe3b[45]][_0xbe3b[929]]);var node=$(_0xbe3b[613])[_0xbe3b[322]]($current[_0xbe3b[990]]());$current[_0xbe3b[278]](node);var next=$(node)[_0xbe3b[510]]();if( typeof (next[0])!==_0xbe3b[14]&&next[0][_0xbe3b[306]]==_0xbe3b[507]){next[_0xbe3b[326]]();} ;this[_0xbe3b[33]][_0xbe3b[449]](node);} ,formatEmpty:function (e){var html=$[_0xbe3b[386]](this[_0xbe3b[261]][_0xbe3b[68]]());if(!this[_0xbe3b[62]][_0xbe3b[287]](html)){return ;} ;e[_0xbe3b[415]]();if(this[_0xbe3b[63]][_0xbe3b[265]]){this[_0xbe3b[261]][_0xbe3b[68]](this[_0xbe3b[56]][_0xbe3b[988]]());this[_0xbe3b[56]][_0xbe3b[268]]();} else {html=_0xbe3b[991];this[_0xbe3b[261]][_0xbe3b[68]](html);this[_0xbe3b[39]][_0xbe3b[447]]();} ;this[_0xbe3b[35]][_0xbe3b[269]]();return false;} };} ,lang:function (){return {load:function (){this[_0xbe3b[63]][_0xbe3b[992]]=this[_0xbe3b[63]][_0xbe3b[993]][this[_0xbe3b[63]][_0xbe3b[46]]];} ,get:function (name){return ( typeof this[_0xbe3b[63]][_0xbe3b[992]][name]!=_0xbe3b[14])?this[_0xbe3b[63]][_0xbe3b[992]][name]:_0xbe3b[255];} };} ,line:function (){return {insert:function (){this[_0xbe3b[30]][_0xbe3b[256]]();var blocks=this[_0xbe3b[56]][_0xbe3b[264]]();if(blocks[0]!==false&&this[_0xbe3b[47]][_0xbe3b[994]](blocks)){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;return ;} ;if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[47]][_0xbe3b[995]]();} else {this[_0xbe3b[47]][_0xbe3b[996]]();} ;} ,isExceptLastOrFirst:function (blocks){var exceptTags=[_0xbe3b[128],_0xbe3b[336],_0xbe3b[337],_0xbe3b[78],_0xbe3b[931],_0xbe3b[79],_0xbe3b[338],_0xbe3b[339],_0xbe3b[340]];var first=blocks[0][_0xbe3b[306]][_0xbe3b[320]]();var last=this[_0xbe3b[56]][_0xbe3b[997]]();last=( typeof last==_0xbe3b[14])?first:last[_0xbe3b[306]][_0xbe3b[320]]();var firstFound=$[_0xbe3b[300]](first,exceptTags)!=-1;var lastFound=$[_0xbe3b[300]](last,exceptTags)!=-1;if((firstFound&&lastFound)||firstFound){return true;} ;} ,insertInIe:function (){this[_0xbe3b[62]][_0xbe3b[998]]();this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[43]][_0xbe3b[877]](document[_0xbe3b[646]](_0xbe3b[999]));this[_0xbe3b[62]][_0xbe3b[1000]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,insertInOthersBrowsers:function (){this[_0xbe3b[30]][_0xbe3b[256]]();var extra=_0xbe3b[1001];if(this[_0xbe3b[63]][_0xbe3b[265]]){extra=_0xbe3b[1002];} ;document[_0xbe3b[317]](_0xbe3b[905],false,_0xbe3b[1003]+extra);this[_0xbe3b[47]][_0xbe3b[1004]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,setFocus:function (){var node=this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[1005]);var next=$(node)[_0xbe3b[510]]()[0];if(next){this[_0xbe3b[33]][_0xbe3b[875]](node);node[_0xbe3b[326]]();} else {node[_0xbe3b[344]](_0xbe3b[381]);} ;} };} ,link:function (){return {show:function (e){if( typeof e!=_0xbe3b[14]&&e[_0xbe3b[415]]){e[_0xbe3b[415]]();} ;this[_0xbe3b[50]][_0xbe3b[244]](_0xbe3b[48],this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1006]),600);this[_0xbe3b[50]][_0xbe3b[770]]();this[_0xbe3b[48]][_0xbe3b[1007]]=this[_0xbe3b[50]][_0xbe3b[775]](this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[43]));this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[48]][_0xbe3b[1008]]();this[_0xbe3b[48]][_0xbe3b[1009]]();if(this[_0xbe3b[48]][_0xbe3b[436]]==_0xbe3b[782]){$(_0xbe3b[1010])[_0xbe3b[784]](_0xbe3b[783],true);} ;this[_0xbe3b[48]][_0xbe3b[1011]]=$(_0xbe3b[1012]);this[_0xbe3b[48]][_0xbe3b[1013]]=$(_0xbe3b[1014]);this[_0xbe3b[48]][_0xbe3b[1013]][_0xbe3b[384]](this[_0xbe3b[48]][_0xbe3b[760]]);this[_0xbe3b[48]][_0xbe3b[1011]][_0xbe3b[384]](this[_0xbe3b[48]][_0xbe3b[1015]]);this[_0xbe3b[48]][_0xbe3b[1007]][_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](this[_0xbe3b[48]][_0xbe3b[43]],this));$(_0xbe3b[1016])[_0xbe3b[326]]();this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[50]][_0xbe3b[475]]();this[_0xbe3b[48]][_0xbe3b[1011]][_0xbe3b[39]]();} ,cleanUrl:function (){var thref=self[_0xbe3b[1017]][_0xbe3b[781]][_0xbe3b[534]](/\/$/i,_0xbe3b[255]);this[_0xbe3b[48]][_0xbe3b[1015]]=this[_0xbe3b[48]][_0xbe3b[1015]][_0xbe3b[534]](thref,_0xbe3b[255]);this[_0xbe3b[48]][_0xbe3b[1015]]=this[_0xbe3b[48]][_0xbe3b[1015]][_0xbe3b[534]](/^\/#/,_0xbe3b[1018]);this[_0xbe3b[48]][_0xbe3b[1015]]=this[_0xbe3b[48]][_0xbe3b[1015]][_0xbe3b[534]](_0xbe3b[1019],_0xbe3b[255]);if(!this[_0xbe3b[63]][_0xbe3b[985]]){var re= new RegExp(_0xbe3b[1020]+self[_0xbe3b[1017]][_0xbe3b[1021]],_0xbe3b[123]);this[_0xbe3b[48]][_0xbe3b[1015]]=this[_0xbe3b[48]][_0xbe3b[1015]][_0xbe3b[534]](re,_0xbe3b[255]);} ;} ,getData:function (){this[_0xbe3b[48]][_0xbe3b[1022]]=false;var $el=$(this[_0xbe3b[56]][_0xbe3b[867]]())[_0xbe3b[348]](_0xbe3b[118]);if($el[_0xbe3b[335]]()!==0&&$el[0][_0xbe3b[306]]===_0xbe3b[582]){this[_0xbe3b[48]][_0xbe3b[1022]]=$el;this[_0xbe3b[48]][_0xbe3b[1015]]=$el[_0xbe3b[273]](_0xbe3b[781]);this[_0xbe3b[48]][_0xbe3b[760]]=$el[_0xbe3b[760]]();this[_0xbe3b[48]][_0xbe3b[436]]=$el[_0xbe3b[273]](_0xbe3b[436]);} else {this[_0xbe3b[48]][_0xbe3b[760]]=this[_0xbe3b[746]].toString();this[_0xbe3b[48]][_0xbe3b[1015]]=_0xbe3b[255];this[_0xbe3b[48]][_0xbe3b[436]]=_0xbe3b[255];} ;} ,insert:function (){var target=_0xbe3b[255];var link=this[_0xbe3b[48]][_0xbe3b[1011]][_0xbe3b[384]]();var text=this[_0xbe3b[48]][_0xbe3b[1013]][_0xbe3b[384]]();if($[_0xbe3b[386]](link)===_0xbe3b[255]){this[_0xbe3b[48]][_0xbe3b[1011]][_0xbe3b[342]](_0xbe3b[1023])[_0xbe3b[419]](_0xbe3b[45],function (){$(this)[_0xbe3b[346]](_0xbe3b[1023]);$(this)[_0xbe3b[701]](_0xbe3b[45]);} );return ;} ;if(link[_0xbe3b[10]](_0xbe3b[1024])!=-1&&/(http|ftp|https):\/\//i[_0xbe3b[597]](link)===false){link=_0xbe3b[1019]+link;} else {if(link[_0xbe3b[10]](_0xbe3b[1018])!==0){if($(_0xbe3b[1010])[_0xbe3b[784]](_0xbe3b[783])){target=_0xbe3b[782];} ;var pattern=_0xbe3b[1025];var re= new RegExp(_0xbe3b[1020]+pattern,_0xbe3b[123]);var re2= new RegExp(_0xbe3b[1026]+pattern,_0xbe3b[123]);if(link[_0xbe3b[10]](re)==-1&&link[_0xbe3b[10]](re2)===0&&this[_0xbe3b[63]][_0xbe3b[985]]){link=this[_0xbe3b[63]][_0xbe3b[985]]+_0xbe3b[1027]+link;} ;} ;} ;this[_0xbe3b[48]][_0xbe3b[256]](text,link,target);this[_0xbe3b[50]][_0xbe3b[748]]();} ,set:function (text,link,target){text=$[_0xbe3b[386]](text[_0xbe3b[534]](/<|>/g,_0xbe3b[255]));this[_0xbe3b[56]][_0xbe3b[268]]();if(text===_0xbe3b[255]&&link===_0xbe3b[255]){return ;} ;if(text===_0xbe3b[255]&&link!==_0xbe3b[255]){text=link;} ;if(this[_0xbe3b[48]][_0xbe3b[1022]]){this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[48]][_0xbe3b[1022]][_0xbe3b[760]](text)[_0xbe3b[273]](_0xbe3b[781],link);if(target!==_0xbe3b[255]){this[_0xbe3b[48]][_0xbe3b[1022]][_0xbe3b[273]](_0xbe3b[436],target);} else {this[_0xbe3b[48]][_0xbe3b[1022]][_0xbe3b[344]](_0xbe3b[436]);} ;this[_0xbe3b[35]][_0xbe3b[269]]();} else {if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[452])&&this[_0xbe3b[48]][_0xbe3b[760]]===_0xbe3b[255]){var $a=$(_0xbe3b[1028])[_0xbe3b[273]](_0xbe3b[781],link)[_0xbe3b[760]](text);if(target!==_0xbe3b[255]){$a[_0xbe3b[273]](_0xbe3b[436],target);} ;this[_0xbe3b[43]][_0xbe3b[877]]($a);this[_0xbe3b[56]][_0xbe3b[1029]]($a);} else {var $a;if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){$a=$(_0xbe3b[751]+link+_0xbe3b[723])[_0xbe3b[760]](text);if(target!==_0xbe3b[255]){$a[_0xbe3b[273]](_0xbe3b[436],target);} ;$a=$(this[_0xbe3b[43]][_0xbe3b[877]]($a));this[_0xbe3b[56]][_0xbe3b[1029]]($a);} else {document[_0xbe3b[317]](_0xbe3b[1030],false,link);$a=$(this[_0xbe3b[56]][_0xbe3b[867]]())[_0xbe3b[348]](_0xbe3b[118]);if(target!==_0xbe3b[255]){$a[_0xbe3b[273]](_0xbe3b[436],target);} ;$a[_0xbe3b[344]](_0xbe3b[90]);if(this[_0xbe3b[48]][_0xbe3b[760]]===_0xbe3b[255]){$a[_0xbe3b[760]](text);this[_0xbe3b[56]][_0xbe3b[1029]]($a);} ;} ;} ;this[_0xbe3b[35]][_0xbe3b[269]]();this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[1031],$a);} ;setTimeout($[_0xbe3b[280]](function (){this[_0xbe3b[51]][_0xbe3b[1032]]();} ,this),5);} ,unlink:function (e){if( typeof e!=_0xbe3b[14]&&e[_0xbe3b[415]]){e[_0xbe3b[415]]();} ;var nodes=this[_0xbe3b[56]][_0xbe3b[896]]();if(!nodes){return ;} ;this[_0xbe3b[30]][_0xbe3b[256]]();var len=nodes[_0xbe3b[21]];for(var i=0;i<len;i++){if(nodes[i][_0xbe3b[306]]==_0xbe3b[582]){var $node=$(nodes[i]);$node[_0xbe3b[278]]($node[_0xbe3b[331]]());} ;} ;$(_0xbe3b[1016])[_0xbe3b[326]]();this[_0xbe3b[35]][_0xbe3b[269]]();} };} ,list:function (){return {toggle:function (cmd){if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[56]][_0xbe3b[262]]();var parent=this[_0xbe3b[56]][_0xbe3b[894]]();var $list=$(parent)[_0xbe3b[348]](_0xbe3b[1033]);if(!this[_0xbe3b[62]][_0xbe3b[764]]($list)&&$list[_0xbe3b[335]]()!==0){$list=false;} ;var isUnorderedCmdOrdered,isOrderedCmdUnordered;var remove=false;if($list&&$list[_0xbe3b[21]]){remove=true;var listTag=$list[0][_0xbe3b[306]];isUnorderedCmdOrdered=(cmd===_0xbe3b[74]&&listTag===_0xbe3b[156]);isOrderedCmdUnordered=(cmd===_0xbe3b[73]&&listTag===_0xbe3b[157]);} ;if(isUnorderedCmdOrdered){this[_0xbe3b[62]][_0xbe3b[325]]($list,_0xbe3b[127]);} else {if(isOrderedCmdUnordered){this[_0xbe3b[62]][_0xbe3b[325]]($list,_0xbe3b[126]);} else {if(remove){this[_0xbe3b[49]][_0xbe3b[326]](cmd);} else {this[_0xbe3b[49]][_0xbe3b[43]](cmd);} ;} ;} ;this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[35]][_0xbe3b[269]]();} ,insert:function (cmd){if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])&&this[_0xbe3b[63]][_0xbe3b[265]]){this[_0xbe3b[49]][_0xbe3b[995]](cmd);} else {document[_0xbe3b[317]](_0xbe3b[43]+cmd);} ;var parent=this[_0xbe3b[56]][_0xbe3b[894]]();var $list=$(parent)[_0xbe3b[348]](_0xbe3b[1033]);if(this[_0xbe3b[62]][_0xbe3b[287]]($list[_0xbe3b[327]](_0xbe3b[128])[_0xbe3b[760]]())){var $children=$list[_0xbe3b[758]](_0xbe3b[128]);$children[_0xbe3b[327]](_0xbe3b[619])[_0xbe3b[326]]();$children[_0xbe3b[322]](this[_0xbe3b[56]][_0xbe3b[988]]());} ;if($list[_0xbe3b[21]]){var $listParent=$list[_0xbe3b[500]]();if(this[_0xbe3b[62]][_0xbe3b[764]]($listParent)&&$listParent[0][_0xbe3b[306]]!=_0xbe3b[158]&&this[_0xbe3b[62]][_0xbe3b[502]]($listParent[0])){$listParent[_0xbe3b[278]]($listParent[_0xbe3b[331]]());} ;} ;if(!this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){this[_0xbe3b[261]][_0xbe3b[39]]();} ;this[_0xbe3b[34]][_0xbe3b[349]]();} ,insertInIe:function (cmd){var wrapper=this[_0xbe3b[56]][_0xbe3b[271]](_0xbe3b[270]);var wrapperHtml=$(wrapper)[_0xbe3b[68]]();var tmpList=(cmd==_0xbe3b[74])?$(_0xbe3b[1034]):$(_0xbe3b[1035]);var tmpLi=$(_0xbe3b[498]);if($[_0xbe3b[386]](wrapperHtml)===_0xbe3b[255]){tmpLi[_0xbe3b[322]](this[_0xbe3b[56]][_0xbe3b[988]]());tmpList[_0xbe3b[322]](tmpLi);this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[1036])[_0xbe3b[278]](tmpList);} else {var items=wrapperHtml[_0xbe3b[13]](/<br\s?\/?>/gi);if(items){for(var i=0;i<items[_0xbe3b[21]];i++){if($[_0xbe3b[386]](items[i])!==_0xbe3b[255]){tmpList[_0xbe3b[322]]($(_0xbe3b[498])[_0xbe3b[68]](items[i]));} ;} ;} else {tmpLi[_0xbe3b[322]](wrapperHtml);tmpList[_0xbe3b[322]](tmpLi);} ;$(wrapper)[_0xbe3b[278]](tmpList);} ;} ,remove:function (cmd){document[_0xbe3b[317]](_0xbe3b[43]+cmd);var $current=$(this[_0xbe3b[56]][_0xbe3b[867]]());this[_0xbe3b[41]][_0xbe3b[861]]();if(!this[_0xbe3b[63]][_0xbe3b[265]]&&$current[_0xbe3b[348]](_0xbe3b[1037])[_0xbe3b[335]]()===0){document[_0xbe3b[317]](_0xbe3b[314],false,_0xbe3b[77]);this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[1038])[_0xbe3b[20]]($[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[351]],this));} ;var $table=$(this[_0xbe3b[56]][_0xbe3b[867]]())[_0xbe3b[348]](_0xbe3b[358]);var $prev=$table[_0xbe3b[512]]();if(!this[_0xbe3b[63]][_0xbe3b[265]]&&$table[_0xbe3b[335]]()!==0&&$prev[_0xbe3b[335]]()!==0&&$prev[0][_0xbe3b[306]]==_0xbe3b[507]){$prev[_0xbe3b[326]]();} ;this[_0xbe3b[34]][_0xbe3b[349]]();} };} ,modal:function (){return {callbacks:{},loadTemplates:function (){this[_0xbe3b[63]][_0xbe3b[50]]={imageEdit:String()+_0xbe3b[1039]+_0xbe3b[1040]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[466])+_0xbe3b[1041]+_0xbe3b[1042]+_0xbe3b[1043]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[48])+_0xbe3b[1041]+_0xbe3b[1044]+_0xbe3b[1045]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1046])+_0xbe3b[1041]+_0xbe3b[1047]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1048])+_0xbe3b[1041]+_0xbe3b[1049]+_0xbe3b[1050]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[790])+_0xbe3b[1051]+_0xbe3b[1052]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[478])+_0xbe3b[1051]+_0xbe3b[1053]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[258])+_0xbe3b[1051]+_0xbe3b[1054]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[257])+_0xbe3b[1051]+_0xbe3b[1055]+_0xbe3b[1056],image:String()+_0xbe3b[1057]+_0xbe3b[1058]+_0xbe3b[1056],file:String()+_0xbe3b[1059]+_0xbe3b[1060]+_0xbe3b[1040]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[750])+_0xbe3b[1041]+_0xbe3b[1061]+_0xbe3b[1062]+_0xbe3b[1063]+_0xbe3b[1056],link:String()+_0xbe3b[1064]+_0xbe3b[1065]+_0xbe3b[1066]+_0xbe3b[1040]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[760])+_0xbe3b[1041]+_0xbe3b[1067]+_0xbe3b[1068]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1046])+_0xbe3b[1041]+_0xbe3b[1056]};$[_0xbe3b[246]](this[_0xbe3b[63]],this[_0xbe3b[63]][_0xbe3b[50]]);} ,addCallback:function (name,callback){this[_0xbe3b[50]][_0xbe3b[1069]][name]=callback;} ,createTabber:function ($modal){this[_0xbe3b[50]][_0xbe3b[1070]]=$(_0xbe3b[541])[_0xbe3b[273]](_0xbe3b[381],_0xbe3b[1071]);$modal[_0xbe3b[323]](this[_0xbe3b[50]].$tabber);} ,addTab:function (id,name,active){var $tab=$(_0xbe3b[1072]+id+_0xbe3b[723])[_0xbe3b[760]](name);if(active){$tab[_0xbe3b[342]](_0xbe3b[1073]);} ;var self=this;$tab[_0xbe3b[419]](_0xbe3b[421],function (e){e[_0xbe3b[415]]();$(_0xbe3b[1074])[_0xbe3b[393]]();$(_0xbe3b[1075]+$(this)[_0xbe3b[273]](_0xbe3b[496]))[_0xbe3b[475]]();self[_0xbe3b[50]][_0xbe3b[1070]][_0xbe3b[327]](_0xbe3b[118])[_0xbe3b[346]](_0xbe3b[1073]);$(this)[_0xbe3b[342]](_0xbe3b[1073]);} );this[_0xbe3b[50]][_0xbe3b[1070]][_0xbe3b[322]]($tab);} ,addTemplate:function (name,template){this[_0xbe3b[63]][_0xbe3b[50]][name]=template;} ,getTemplate:function (name){return this[_0xbe3b[63]][_0xbe3b[50]][name];} ,getModal:function (){return this[_0xbe3b[1077]][_0xbe3b[327]](_0xbe3b[1076]);} ,load:function (templateName,title,width){this[_0xbe3b[50]][_0xbe3b[1078]]=templateName;this[_0xbe3b[50]][_0xbe3b[730]]=width;this[_0xbe3b[50]][_0xbe3b[31]]();this[_0xbe3b[50]][_0xbe3b[1079]]();this[_0xbe3b[50]][_0xbe3b[1080]](title);this[_0xbe3b[50]][_0xbe3b[1081]]();this[_0xbe3b[50]][_0xbe3b[1082]]();if( typeof this[_0xbe3b[50]][_0xbe3b[1069]][templateName]!=_0xbe3b[14]){this[_0xbe3b[50]][_0xbe3b[1069]][templateName][_0xbe3b[6]](this);} ;} ,show:function (){document[_0xbe3b[726]][_0xbe3b[445]]();$(document[_0xbe3b[87]])[_0xbe3b[346]](_0xbe3b[738]);this[_0xbe3b[50]][_0xbe3b[1083]]=$(document[_0xbe3b[87]])[_0xbe3b[275]](_0xbe3b[1084]);$(document[_0xbe3b[87]])[_0xbe3b[275]](_0xbe3b[1084],_0xbe3b[1085]);if(this[_0xbe3b[62]][_0xbe3b[847]]()){this[_0xbe3b[50]][_0xbe3b[1086]]();} else {this[_0xbe3b[50]][_0xbe3b[1087]]();} ;this[_0xbe3b[716]][_0xbe3b[475]]();this[_0xbe3b[715]][_0xbe3b[475]]();this[_0xbe3b[50]][_0xbe3b[1088]]();this[_0xbe3b[62]][_0xbe3b[998]]();if(!this[_0xbe3b[62]][_0xbe3b[847]]()){setTimeout($[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[1087]],this),0);$(window)[_0xbe3b[419]](_0xbe3b[1089],$[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[1090]],this));} ;this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[1091],this[_0xbe3b[50]][_0xbe3b[1078]],this.$modal);$(document)[_0xbe3b[701]](_0xbe3b[1092]);this[_0xbe3b[1096]][_0xbe3b[327]](_0xbe3b[1095])[_0xbe3b[419]](_0xbe3b[1093],$[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[1094]],this));} ,showOnDesktop:function (){var height=this[_0xbe3b[1096]][_0xbe3b[1097]]();var windowHeight=$(window)[_0xbe3b[695]]();var windowWidth=$(window)[_0xbe3b[730]]();if(this[_0xbe3b[50]][_0xbe3b[730]]>windowWidth){this[_0xbe3b[1096]][_0xbe3b[275]]({width:_0xbe3b[1098],marginTop:(windowHeight/2-height/2)+_0xbe3b[477]});return ;} ;if(height>windowHeight){this[_0xbe3b[1096]][_0xbe3b[275]]({width:this[_0xbe3b[50]][_0xbe3b[730]]+_0xbe3b[477],marginTop:_0xbe3b[1099]});} else {this[_0xbe3b[1096]][_0xbe3b[275]]({width:this[_0xbe3b[50]][_0xbe3b[730]]+_0xbe3b[477],marginTop:(windowHeight/2-height/2)+_0xbe3b[477]});} ;} ,showOnMobile:function (){this[_0xbe3b[1096]][_0xbe3b[275]]({width:_0xbe3b[1098],marginTop:_0xbe3b[1100]});} ,resize:function (){if(this[_0xbe3b[62]][_0xbe3b[847]]()){this[_0xbe3b[50]][_0xbe3b[1086]]();} else {this[_0xbe3b[50]][_0xbe3b[1087]]();} ;} ,setTitle:function (title){this[_0xbe3b[1101]][_0xbe3b[68]](title);} ,setContent:function (){this[_0xbe3b[1077]][_0xbe3b[68]](this[_0xbe3b[50]][_0xbe3b[1102]](this[_0xbe3b[50]][_0xbe3b[1078]]));} ,setDraggable:function (){if( typeof $[_0xbe3b[5]][_0xbe3b[1103]]===_0xbe3b[14]){return ;} ;this[_0xbe3b[1096]][_0xbe3b[1103]]({handle:this[_0xbe3b[1101]]});this[_0xbe3b[1101]][_0xbe3b[275]](_0xbe3b[1104],_0xbe3b[1105]);} ,setEnter:function (e){if(e[_0xbe3b[925]]!=13){return ;} ;e[_0xbe3b[415]]();this[_0xbe3b[1096]][_0xbe3b[327]](_0xbe3b[1106])[_0xbe3b[421]]();} ,createCancelButton:function (){var button=$(_0xbe3b[1109])[_0xbe3b[342]](_0xbe3b[1108])[_0xbe3b[68]](this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1107]));button[_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[748]],this));this[_0xbe3b[1110]][_0xbe3b[322]](button);} ,createDeleteButton:function (label){return this[_0xbe3b[50]][_0xbe3b[1112]](label,_0xbe3b[1111]);} ,createActionButton:function (label){return this[_0xbe3b[50]][_0xbe3b[1112]](label,_0xbe3b[1113]);} ,createButton:function (label,className){var button=$(_0xbe3b[1109])[_0xbe3b[342]](_0xbe3b[1116])[_0xbe3b[342]](_0xbe3b[1114]+className+_0xbe3b[1115])[_0xbe3b[68]](label);this[_0xbe3b[1110]][_0xbe3b[322]](button);return button;} ,setButtonsWidth:function (){var buttons=this[_0xbe3b[1110]][_0xbe3b[327]](_0xbe3b[32]);var buttonsSize=buttons[_0xbe3b[335]]();if(buttonsSize===0){return ;} ;buttons[_0xbe3b[275]](_0xbe3b[730],(100/buttonsSize)+_0xbe3b[1117]);} ,build:function (){this[_0xbe3b[50]][_0xbe3b[1118]]();this[_0xbe3b[715]]=$(_0xbe3b[1119])[_0xbe3b[393]]();this[_0xbe3b[1096]]=$(_0xbe3b[1120]);this[_0xbe3b[1101]]=$(_0xbe3b[1121]);this[_0xbe3b[1122]]=$(_0xbe3b[1124])[_0xbe3b[68]](_0xbe3b[1123]);this[_0xbe3b[1077]]=$(_0xbe3b[1125]);this[_0xbe3b[1110]]=$(_0xbe3b[1126]);this[_0xbe3b[1096]][_0xbe3b[322]](this.$modalHeader);this[_0xbe3b[1096]][_0xbe3b[322]](this.$modalClose);this[_0xbe3b[1096]][_0xbe3b[322]](this.$modalBody);this[_0xbe3b[1096]][_0xbe3b[322]](this.$modalFooter);this[_0xbe3b[715]][_0xbe3b[322]](this.$modal);this[_0xbe3b[715]][_0xbe3b[470]](document[_0xbe3b[87]]);} ,buildOverlay:function (){this[_0xbe3b[716]]=$(_0xbe3b[1127])[_0xbe3b[393]]();$(_0xbe3b[87])[_0xbe3b[323]](this.$modalOverlay);} ,enableEvents:function (){this[_0xbe3b[1122]][_0xbe3b[419]](_0xbe3b[1128],$[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[748]],this));$(document)[_0xbe3b[419]](_0xbe3b[1129],$[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[1130]],this));this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[1129],$[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[1130]],this));this[_0xbe3b[715]][_0xbe3b[419]](_0xbe3b[1128],$[_0xbe3b[280]](this[_0xbe3b[50]][_0xbe3b[748]],this));} ,disableEvents:function (){this[_0xbe3b[1122]][_0xbe3b[701]](_0xbe3b[1128]);$(document)[_0xbe3b[701]](_0xbe3b[1129]);this[_0xbe3b[261]][_0xbe3b[701]](_0xbe3b[1129]);this[_0xbe3b[715]][_0xbe3b[701]](_0xbe3b[1128]);$(window)[_0xbe3b[701]](_0xbe3b[1089]);} ,closeHandler:function (e){if(e[_0xbe3b[925]]!=this[_0xbe3b[704]][_0xbe3b[961]]){return ;} ;this[_0xbe3b[50]][_0xbe3b[748]](false);} ,close:function (e){if(e){if(!$(e[_0xbe3b[436]])[_0xbe3b[439]](_0xbe3b[1131])&&e[_0xbe3b[436]]!=this[_0xbe3b[1122]][0]&&e[_0xbe3b[436]]!=this[_0xbe3b[715]][0]){return ;} ;e[_0xbe3b[415]]();} ;if(!this[_0xbe3b[715]]){return ;} ;this[_0xbe3b[50]][_0xbe3b[1132]]();this[_0xbe3b[716]][_0xbe3b[326]]();this[_0xbe3b[715]][_0xbe3b[1135]](_0xbe3b[1133],$[_0xbe3b[280]](function (){this[_0xbe3b[715]][_0xbe3b[326]]();setTimeout($[_0xbe3b[280]](this[_0xbe3b[62]][_0xbe3b[1000]],this),0);if(e!==undefined){this[_0xbe3b[56]][_0xbe3b[268]]();} ;$(document[_0xbe3b[87]])[_0xbe3b[275]](_0xbe3b[1084],this[_0xbe3b[50]][_0xbe3b[1083]]);this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[1134],this[_0xbe3b[50]][_0xbe3b[1078]]);} ,this));} };} ,observe:function (){return {load:function (){this[_0xbe3b[51]][_0xbe3b[800]]();this[_0xbe3b[51]][_0xbe3b[1032]]();} ,buttons:function (e,btnName){var current=this[_0xbe3b[56]][_0xbe3b[867]]();var parent=this[_0xbe3b[56]][_0xbe3b[894]]();this[_0xbe3b[32]][_0xbe3b[1136]](btnName);if(e===false&&btnName!==_0xbe3b[68]){if($[_0xbe3b[300]](btnName,this[_0xbe3b[63]][_0xbe3b[1137]])!=-1){this[_0xbe3b[32]][_0xbe3b[1138]](btnName);} ;return ;} ;$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[1139]],$[_0xbe3b[280]](function (key,value){var parentEl=$(parent)[_0xbe3b[348]](key);var currentEl=$(current)[_0xbe3b[348]](key);if(parentEl[_0xbe3b[21]]!==0&&!this[_0xbe3b[62]][_0xbe3b[764]](parentEl)){return ;} ;if(!this[_0xbe3b[62]][_0xbe3b[764]](currentEl)){return ;} ;if(parentEl[_0xbe3b[21]]!==0||currentEl[_0xbe3b[348]](key)[_0xbe3b[21]]!==0){this[_0xbe3b[32]][_0xbe3b[700]](value);} ;} ,this));var $parent=$(parent)[_0xbe3b[348]](this[_0xbe3b[63]][_0xbe3b[236]].toString()[_0xbe3b[320]]());if(this[_0xbe3b[62]][_0xbe3b[764]](parent)&&$parent[_0xbe3b[21]]){var align=($parent[_0xbe3b[275]](_0xbe3b[274])===_0xbe3b[255])?_0xbe3b[478]:$parent[_0xbe3b[275]](_0xbe3b[274]);this[_0xbe3b[32]][_0xbe3b[700]](_0xbe3b[1140]+align);} ;} ,addButton:function (tag,btnName){this[_0xbe3b[63]][_0xbe3b[1137]][_0xbe3b[16]](btnName);this[_0xbe3b[63]][_0xbe3b[1139]][tag]=btnName;} ,images:function (){this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[119])[_0xbe3b[20]]($[_0xbe3b[280]](function (i,img){var $img=$(img);$img[_0xbe3b[348]](_0xbe3b[118])[_0xbe3b[419]](_0xbe3b[421],function (e){e[_0xbe3b[415]]();} );if(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])){$img[_0xbe3b[273]](_0xbe3b[1141],_0xbe3b[419]);} ;this[_0xbe3b[40]][_0xbe3b[1142]]($img);} ,this));$(document)[_0xbe3b[419]](_0xbe3b[1143],$[_0xbe3b[280]](function (e){this[_0xbe3b[51]][_0xbe3b[40]]=false;if(e[_0xbe3b[436]][_0xbe3b[306]]==_0xbe3b[833]&&this[_0xbe3b[62]][_0xbe3b[764]](e[_0xbe3b[436]])){this[_0xbe3b[51]][_0xbe3b[40]]=(this[_0xbe3b[51]][_0xbe3b[40]]&&this[_0xbe3b[51]][_0xbe3b[40]]==e[_0xbe3b[436]])?false:e[_0xbe3b[436]];} ;} ,this));} ,links:function (){if(!this[_0xbe3b[63]][_0xbe3b[1144]]){return ;} ;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[118])[_0xbe3b[419]](_0xbe3b[460],$[_0xbe3b[280]](this[_0xbe3b[51]][_0xbe3b[1145]],this));this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[1146],$[_0xbe3b[280]](this[_0xbe3b[51]][_0xbe3b[1147]],this));$(document)[_0xbe3b[419]](_0xbe3b[1146],$[_0xbe3b[280]](this[_0xbe3b[51]][_0xbe3b[1147]],this));} ,getTooltipPosition:function ($link){return $link[_0xbe3b[472]]();} ,showTooltip:function (e){var $link=$(e[_0xbe3b[436]]);var $parent=$link[_0xbe3b[348]](_0xbe3b[118]);if($parent[_0xbe3b[335]]()!==0&&$parent[0][_0xbe3b[306]]===_0xbe3b[582]&&$link[0][_0xbe3b[306]]!==_0xbe3b[582]){$link=$parent;} else {if($link[_0xbe3b[335]]()===0||$link[0][_0xbe3b[306]]!==_0xbe3b[582]){return ;} ;} ;var pos=this[_0xbe3b[51]][_0xbe3b[1148]]($link);var tooltip=$(_0xbe3b[1149]);var href=$link[_0xbe3b[273]](_0xbe3b[781]);if(href===undefined){href=_0xbe3b[255];} ;if(href[_0xbe3b[21]]>24){href=href[_0xbe3b[706]](0,24)+_0xbe3b[1150];} ;var aLink=$(_0xbe3b[751]+$link[_0xbe3b[273]](_0xbe3b[781])+_0xbe3b[1152])[_0xbe3b[68]](href)[_0xbe3b[342]](_0xbe3b[1151]);var aEdit=$(_0xbe3b[1153])[_0xbe3b[68]](this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[769]))[_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](this[_0xbe3b[48]][_0xbe3b[475]],this))[_0xbe3b[342]](_0xbe3b[1151]);var aUnlink=$(_0xbe3b[1153])[_0xbe3b[68]](this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1154]))[_0xbe3b[419]](_0xbe3b[421],$[_0xbe3b[280]](this[_0xbe3b[48]][_0xbe3b[1154]],this))[_0xbe3b[342]](_0xbe3b[1151]);tooltip[_0xbe3b[322]](aLink)[_0xbe3b[322]](_0xbe3b[1155])[_0xbe3b[322]](aEdit)[_0xbe3b[322]](_0xbe3b[1155])[_0xbe3b[322]](aUnlink);tooltip[_0xbe3b[275]]({top:(pos[_0xbe3b[476]]+20)+_0xbe3b[477],left:pos[_0xbe3b[478]]+_0xbe3b[477]});$(_0xbe3b[1016])[_0xbe3b[326]]();$(_0xbe3b[87])[_0xbe3b[322]](tooltip);} ,closeTooltip:function (e){e=e[_0xbe3b[410]]||e;var target=e[_0xbe3b[436]];var $parent=$(target)[_0xbe3b[348]](_0xbe3b[118]);if($parent[_0xbe3b[335]]()!==0&&$parent[0][_0xbe3b[306]]===_0xbe3b[582]&&target[_0xbe3b[306]]!==_0xbe3b[582]){return ;} else {if((target[_0xbe3b[306]]===_0xbe3b[582]&&this[_0xbe3b[62]][_0xbe3b[764]](target))||$(target)[_0xbe3b[439]](_0xbe3b[1151])){return ;} ;} ;$(_0xbe3b[1016])[_0xbe3b[326]]();} };} ,paragraphize:function (){return {load:function (html){if(this[_0xbe3b[63]][_0xbe3b[265]]){return html;} ;if(html===_0xbe3b[255]||html===_0xbe3b[1156]){return this[_0xbe3b[63]][_0xbe3b[508]];} ;this[_0xbe3b[52]][_0xbe3b[263]]=[_0xbe3b[358],_0xbe3b[270],_0xbe3b[79],_0xbe3b[1157],_0xbe3b[126],_0xbe3b[127],_0xbe3b[80],_0xbe3b[81],_0xbe3b[82],_0xbe3b[83],_0xbe3b[84],_0xbe3b[85],_0xbe3b[338],_0xbe3b[78],_0xbe3b[931],_0xbe3b[617],_0xbe3b[1076],_0xbe3b[1158],_0xbe3b[1159],_0xbe3b[1160],_0xbe3b[1161],_0xbe3b[625],_0xbe3b[90],_0xbe3b[89],_0xbe3b[622],_0xbe3b[920],_0xbe3b[1162],_0xbe3b[1163],_0xbe3b[32],_0xbe3b[1164],_0xbe3b[1165],_0xbe3b[1166],_0xbe3b[1167],_0xbe3b[999],_0xbe3b[1168],_0xbe3b[1169],_0xbe3b[1170],_0xbe3b[1171],_0xbe3b[850],_0xbe3b[1172],_0xbe3b[1173],_0xbe3b[1174],_0xbe3b[77]];html=html+_0xbe3b[612];this[_0xbe3b[52]][_0xbe3b[1175]]=[];this[_0xbe3b[52]][_0xbe3b[1176]]=0;html=html[_0xbe3b[534]](/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,_0xbe3b[680]);html=this[_0xbe3b[52]][_0xbe3b[1177]](html);html=this[_0xbe3b[52]][_0xbe3b[1178]](html);html=this[_0xbe3b[52]][_0xbe3b[1179]](html);html=this[_0xbe3b[52]][_0xbe3b[1180]](html);html=this[_0xbe3b[52]][_0xbe3b[1181]](html);html=this[_0xbe3b[52]][_0xbe3b[1182]](html);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1183]+this[_0xbe3b[52]][_0xbe3b[263]][_0xbe3b[241]](_0xbe3b[240])+_0xbe3b[1184],_0xbe3b[555]),_0xbe3b[1185]);return $[_0xbe3b[386]](html);} ,getSafes:function (html){var $div=$(_0xbe3b[390])[_0xbe3b[322]](html);$div[_0xbe3b[327]](_0xbe3b[1186])[_0xbe3b[278]](function (){return $(this)[_0xbe3b[322]](_0xbe3b[355])[_0xbe3b[331]]();} );html=$div[_0xbe3b[68]]();$div[_0xbe3b[327]](this[_0xbe3b[52]][_0xbe3b[263]][_0xbe3b[241]](_0xbe3b[661]))[_0xbe3b[20]]($[_0xbe3b[280]](function (i,s){this[_0xbe3b[52]][_0xbe3b[1176]]++;this[_0xbe3b[52]][_0xbe3b[1175]][this[_0xbe3b[52]][_0xbe3b[1176]]]=s[_0xbe3b[1187]];html=html[_0xbe3b[534]](s[_0xbe3b[1187]],_0xbe3b[1188]+this[_0xbe3b[52]][_0xbe3b[1176]]+_0xbe3b[1189]);} ,this));return html;} ,getSafesComments:function (html){var commentsMatches=html[_0xbe3b[641]](/<!--([\w\W]*?)-->/gi);if(!commentsMatches){return html;} ;$[_0xbe3b[20]](commentsMatches,$[_0xbe3b[280]](function (i,s){this[_0xbe3b[52]][_0xbe3b[1176]]++;this[_0xbe3b[52]][_0xbe3b[1175]][this[_0xbe3b[52]][_0xbe3b[1176]]]=s;html=html[_0xbe3b[534]](s,_0xbe3b[1188]+this[_0xbe3b[52]][_0xbe3b[1176]]+_0xbe3b[1189]);} ,this));return html;} ,restoreSafes:function (html){$[_0xbe3b[20]](this[_0xbe3b[52]][_0xbe3b[1175]],function (i,s){html=html[_0xbe3b[534]](_0xbe3b[1190]+i+_0xbe3b[1189],s);} );return html;} ,replaceBreaksToParagraphs:function (html){var htmls=html[_0xbe3b[13]]( new RegExp(_0xbe3b[612],_0xbe3b[553]),-1);html=_0xbe3b[255];if(htmls){var len=htmls[_0xbe3b[21]];for(var i=0;i<len;i++){if(!htmls[_0xbe3b[1191]](i)){return ;} ;if(htmls[i][_0xbe3b[10]](_0xbe3b[1190])==-1){htmls[i]=htmls[i][_0xbe3b[534]](/<p>\n\t?<\/p>/gi,_0xbe3b[255]);htmls[i]=htmls[i][_0xbe3b[534]](/<p><\/p>/gi,_0xbe3b[255]);if(htmls[i]!==_0xbe3b[255]){html+=_0xbe3b[613]+htmls[i][_0xbe3b[534]](/^\n+|\n+$/g,_0xbe3b[255])+_0xbe3b[614];} ;} else {html+=htmls[i];} ;} ;} ;return html;} ,replaceBreaksToNewLines:function (html){html=html[_0xbe3b[534]](/<br \/>\s*<br \/>/gi,_0xbe3b[1192]);html=html[_0xbe3b[534]](/<br\s?\/?>\n?<br\s?\/?>/gi,_0xbe3b[1193]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1194],_0xbe3b[553]),_0xbe3b[612]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1195],_0xbe3b[553]),_0xbe3b[612]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1196]),_0xbe3b[553],_0xbe3b[1192]);return html;} ,clear:function (html){html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1197],_0xbe3b[555]),_0xbe3b[680]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1198],_0xbe3b[555]),_0xbe3b[680]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1199],_0xbe3b[555]),_0xbe3b[1200]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1201],_0xbe3b[555]),_0xbe3b[1200]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1202],_0xbe3b[555]),_0xbe3b[1203]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1204],_0xbe3b[555]),_0xbe3b[613]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1205],_0xbe3b[555]),_0xbe3b[614]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1206],_0xbe3b[555]),_0xbe3b[255]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1207],_0xbe3b[555]),_0xbe3b[614]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1208],_0xbe3b[555]),_0xbe3b[613]);html=html[_0xbe3b[534]]( new RegExp(_0xbe3b[1209],_0xbe3b[555]),_0xbe3b[255]);return html;} };} ,paste:function (){return {init:function (e){if(!this[_0xbe3b[63]][_0xbe3b[1210]]){return ;} ;this[_0xbe3b[231]]=true;this[_0xbe3b[30]][_0xbe3b[256]]();this[_0xbe3b[56]][_0xbe3b[262]]();this[_0xbe3b[62]][_0xbe3b[998]]();this[_0xbe3b[53]][_0xbe3b[1211]]();$(window)[_0xbe3b[419]](_0xbe3b[1212],$[_0xbe3b[280]](function (){$(window)[_0xbe3b[692]](this[_0xbe3b[1213]]);} ,this));setTimeout($[_0xbe3b[280]](function (){var html=this[_0xbe3b[232]][_0xbe3b[68]]();this[_0xbe3b[232]][_0xbe3b[326]]();this[_0xbe3b[56]][_0xbe3b[268]]();this[_0xbe3b[62]][_0xbe3b[1000]]();this[_0xbe3b[53]][_0xbe3b[43]](html);$(window)[_0xbe3b[701]](_0xbe3b[1212]);} ,this),1);} ,createPasteBox:function (){this[_0xbe3b[232]]=$(_0xbe3b[541])[_0xbe3b[68]](_0xbe3b[545])[_0xbe3b[273]](_0xbe3b[714],_0xbe3b[853])[_0xbe3b[275]]({position:_0xbe3b[733],width:0,top:0,left:_0xbe3b[1214]});this[_0xbe3b[377]][_0xbe3b[500]]()[_0xbe3b[322]](this.$pasteBox);this[_0xbe3b[232]][_0xbe3b[39]]();} ,insert:function (html){html=this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[1215],html);html=(this[_0xbe3b[62]][_0xbe3b[581]]())?this[_0xbe3b[34]][_0xbe3b[897]](html,false):this[_0xbe3b[34]][_0xbe3b[897]](html);html=this[_0xbe3b[36]][_0xbe3b[248]](_0xbe3b[53],html);if(this[_0xbe3b[62]][_0xbe3b[581]]()){this[_0xbe3b[43]][_0xbe3b[256]](html,false);} else {this[_0xbe3b[43]][_0xbe3b[68]](html,false);} ;this[_0xbe3b[62]][_0xbe3b[425]]();this[_0xbe3b[231]]=false;setTimeout($[_0xbe3b[280]](this[_0xbe3b[34]][_0xbe3b[349]],this),10);} };} ,placeholder:function (){return {enable:function (){if(!this[_0xbe3b[54]][_0xbe3b[441]]()){return ;} ;this[_0xbe3b[261]][_0xbe3b[273]](_0xbe3b[54],this[_0xbe3b[229]][_0xbe3b[273]](_0xbe3b[54]));this[_0xbe3b[54]][_0xbe3b[319]]();this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[1216],$[_0xbe3b[280]](this[_0xbe3b[54]][_0xbe3b[319]],this));} ,toggle:function (){var func=_0xbe3b[346];if(this[_0xbe3b[62]][_0xbe3b[287]](this[_0xbe3b[261]][_0xbe3b[68]](),false)){func=_0xbe3b[342];} ;this[_0xbe3b[261]][func](_0xbe3b[1217]);} ,remove:function (){this[_0xbe3b[261]][_0xbe3b[346]](_0xbe3b[1217]);} ,is:function (){if(this[_0xbe3b[63]][_0xbe3b[54]]){return this[_0xbe3b[229]][_0xbe3b[273]](_0xbe3b[54],this[_0xbe3b[63]][_0xbe3b[54]]);} else {return !( typeof this[_0xbe3b[229]][_0xbe3b[273]](_0xbe3b[54])==_0xbe3b[14]||this[_0xbe3b[229]][_0xbe3b[273]](_0xbe3b[54])===_0xbe3b[255]);} ;} };} ,progress:function (){return {show:function (){$(document[_0xbe3b[87]])[_0xbe3b[322]]($(_0xbe3b[1218]));$(_0xbe3b[1220])[_0xbe3b[1219]]();} ,hide:function (){$(_0xbe3b[1220])[_0xbe3b[1135]](1500,function (){$(this)[_0xbe3b[326]]();} );} };} ,selection:function (){return {get:function (){this[_0xbe3b[746]]=document[_0xbe3b[522]]();if(document[_0xbe3b[522]]&&this[_0xbe3b[746]][_0xbe3b[524]]&&this[_0xbe3b[746]][_0xbe3b[523]]){this[_0xbe3b[308]]=this[_0xbe3b[746]][_0xbe3b[524]](0);} else {this[_0xbe3b[308]]=document[_0xbe3b[526]]();} ;} ,addRange:function (){try{this[_0xbe3b[746]][_0xbe3b[530]]();} catch(e){} ;this[_0xbe3b[746]][_0xbe3b[509]](this[_0xbe3b[308]]);} ,getCurrent:function (){var el=false;this[_0xbe3b[56]][_0xbe3b[286]]();if(this[_0xbe3b[746]]&&this[_0xbe3b[746]][_0xbe3b[523]]>0){el=this[_0xbe3b[746]][_0xbe3b[524]](0)[_0xbe3b[1221]];} ;return this[_0xbe3b[62]][_0xbe3b[764]](el);} ,getParent:function (elem){elem=elem||this[_0xbe3b[56]][_0xbe3b[867]]();if(elem){return this[_0xbe3b[62]][_0xbe3b[764]]($(elem)[_0xbe3b[500]]()[0]);} ;return false;} ,getBlock:function (node){node=node||this[_0xbe3b[56]][_0xbe3b[867]]();while(node){if(this[_0xbe3b[62]][_0xbe3b[504]](node[_0xbe3b[306]])){return ($(node)[_0xbe3b[439]](_0xbe3b[392]))?false:node;} ;node=node[_0xbe3b[763]];} ;return false;} ,getInlines:function (nodes){this[_0xbe3b[56]][_0xbe3b[286]]();if(this[_0xbe3b[308]]&&this[_0xbe3b[308]][_0xbe3b[309]]){return false;} ;var inlines=[];nodes=( typeof nodes==_0xbe3b[14])?this[_0xbe3b[56]][_0xbe3b[896]]():nodes;var inlineTags=this[_0xbe3b[63]][_0xbe3b[671]];inlineTags[_0xbe3b[16]](_0xbe3b[101]);$[_0xbe3b[20]](nodes,$[_0xbe3b[280]](function (i,node){if($[_0xbe3b[300]](node[_0xbe3b[306]][_0xbe3b[320]](),inlineTags)!=-1){inlines[_0xbe3b[16]](node);} ;} ,this));return (inlines[_0xbe3b[21]]===0)?false:inlines;} ,getBlocks:function (nodes){this[_0xbe3b[56]][_0xbe3b[286]]();if(this[_0xbe3b[308]]&&this[_0xbe3b[308]][_0xbe3b[309]]){return [this[_0xbe3b[56]][_0xbe3b[318]]()];} ;var blocks=[];nodes=( typeof nodes==_0xbe3b[14])?this[_0xbe3b[56]][_0xbe3b[896]]():nodes;$[_0xbe3b[20]](nodes,$[_0xbe3b[280]](function (i,node){if(this[_0xbe3b[62]][_0xbe3b[502]](node)){this[_0xbe3b[56]][_0xbe3b[1222]]=node;blocks[_0xbe3b[16]](node);} ;} ,this));return (blocks[_0xbe3b[21]]===0)?[this[_0xbe3b[56]][_0xbe3b[318]]()]:blocks;} ,getLastBlock:function (){return this[_0xbe3b[56]][_0xbe3b[1222]];} ,getNodes:function (){this[_0xbe3b[56]][_0xbe3b[286]]();var startNode=this[_0xbe3b[56]][_0xbe3b[1223]](1);var endNode=this[_0xbe3b[56]][_0xbe3b[1223]](2);this[_0xbe3b[56]][_0xbe3b[1224]](this[_0xbe3b[308]],startNode,true);if(this[_0xbe3b[308]][_0xbe3b[309]]===false){this[_0xbe3b[56]][_0xbe3b[1224]](this[_0xbe3b[308]],endNode,false);} else {endNode=startNode;} ;var nodes=[];var counter=0;var self=this;this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[629])[_0xbe3b[20]](function (){if(this==startNode){var parent=$(this)[_0xbe3b[500]]();if(parent[_0xbe3b[21]]!==0&&parent[0][_0xbe3b[306]]!=_0xbe3b[979]&&self[_0xbe3b[62]][_0xbe3b[764]](parent[0])){nodes[_0xbe3b[16]](parent[0]);} ;nodes[_0xbe3b[16]](this);counter=1;} else {if(counter>0){nodes[_0xbe3b[16]](this);counter=counter+1;} ;} ;if(this==endNode){return false;} ;} );var finalNodes=[];var len=nodes[_0xbe3b[21]];for(var i=0;i<len;i++){if(nodes[i][_0xbe3b[381]]!=_0xbe3b[1225]&&nodes[i][_0xbe3b[381]]!=_0xbe3b[1226]){finalNodes[_0xbe3b[16]](nodes[i]);} ;} ;this[_0xbe3b[56]][_0xbe3b[1227]]();return finalNodes;} ,getNodesMarker:function (num){return $(_0xbe3b[1228]+num+_0xbe3b[1229]+this[_0xbe3b[63]][_0xbe3b[506]]+_0xbe3b[844])[0];} ,setNodesMarker:function (range,node,type){range=range[_0xbe3b[518]]();try{range[_0xbe3b[517]](type);range[_0xbe3b[903]](node);} catch(e){} ;} ,removeNodesMarkers:function (){$(document)[_0xbe3b[327]](_0xbe3b[1230])[_0xbe3b[326]]();this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[1230])[_0xbe3b[326]]();} ,fromPoint:function (start,end){this[_0xbe3b[33]][_0xbe3b[531]](start,end);} ,wrap:function (tag){this[_0xbe3b[56]][_0xbe3b[286]]();if(this[_0xbe3b[308]][_0xbe3b[309]]){return false;} ;var wrapper=document[_0xbe3b[646]](tag);wrapper[_0xbe3b[901]](this[_0xbe3b[308]][_0xbe3b[1231]]());this[_0xbe3b[308]][_0xbe3b[903]](wrapper);return wrapper;} ,selectElement:function (node){this[_0xbe3b[33]][_0xbe3b[256]](node,0,node,1);} ,selectAll:function (){this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[308]][_0xbe3b[519]](this[_0xbe3b[261]][0]);this[_0xbe3b[56]][_0xbe3b[509]]();} ,remove:function (){this[_0xbe3b[56]][_0xbe3b[286]]();this[_0xbe3b[746]][_0xbe3b[530]]();} ,save:function (){this[_0xbe3b[56]][_0xbe3b[1232]]();} ,createMarkers:function (){this[_0xbe3b[56]][_0xbe3b[286]]();var node1=this[_0xbe3b[56]][_0xbe3b[356]](1);this[_0xbe3b[56]][_0xbe3b[1233]](this[_0xbe3b[308]],node1,true);if(this[_0xbe3b[308]][_0xbe3b[309]]===false){var node2=this[_0xbe3b[56]][_0xbe3b[356]](2);this[_0xbe3b[56]][_0xbe3b[1233]](this[_0xbe3b[308]],node2,false);} ;this[_0xbe3b[1234]]=this[_0xbe3b[261]][_0xbe3b[68]]();} ,getMarker:function (num){if( typeof num==_0xbe3b[14]){num=1;} ;return $(_0xbe3b[1235]+num+_0xbe3b[1236]+this[_0xbe3b[63]][_0xbe3b[506]]+_0xbe3b[844])[0];} ,getMarkerAsHtml:function (num){return this[_0xbe3b[62]][_0xbe3b[799]](this[_0xbe3b[56]][_0xbe3b[356]](num));} ,setMarker:function (range,node,type){range=range[_0xbe3b[518]]();try{range[_0xbe3b[517]](type);range[_0xbe3b[903]](node);} catch(e){this[_0xbe3b[39]][_0xbe3b[447]]();} ;} ,restore:function (){var node1=this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[1237]);var node2=this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[1238]);if(node1[_0xbe3b[21]]!==0&&node2[_0xbe3b[21]]!==0){this[_0xbe3b[33]][_0xbe3b[256]](node1,0,node2,0);} else {if(node1[_0xbe3b[21]]!==0){this[_0xbe3b[33]][_0xbe3b[256]](node1,0,node1,0);} else {this[_0xbe3b[261]][_0xbe3b[39]]();} ;} ;this[_0xbe3b[56]][_0xbe3b[754]]();this[_0xbe3b[1234]]=false;} ,removeMarkers:function (){this[_0xbe3b[261]][_0xbe3b[327]](_0xbe3b[1239])[_0xbe3b[326]]();} ,getText:function (){this[_0xbe3b[56]][_0xbe3b[286]]();return this[_0xbe3b[746]].toString();} ,getHtml:function (){var html=_0xbe3b[255];this[_0xbe3b[56]][_0xbe3b[286]]();if(this[_0xbe3b[746]][_0xbe3b[523]]){var container=document[_0xbe3b[646]](_0xbe3b[270]);var len=this[_0xbe3b[746]][_0xbe3b[523]];for(var i=0;i<len;++i){container[_0xbe3b[901]](this[_0xbe3b[746]][_0xbe3b[524]](i)[_0xbe3b[1240]]());} ;html=container[_0xbe3b[505]];} ;return this[_0xbe3b[34]][_0xbe3b[688]](html);} };} ,shortcuts:function (){return {init:function (e,key){if(!this[_0xbe3b[63]][_0xbe3b[57]]){if((e[_0xbe3b[927]]||e[_0xbe3b[928]])&&(key===66||key===73)){e[_0xbe3b[415]]();} ;return false;} ;$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[57]],$[_0xbe3b[280]](function (str,command){var keys=str[_0xbe3b[13]](_0xbe3b[353]);var len=keys[_0xbe3b[21]];for(var i=0;i<len;i++){if( typeof keys[i]===_0xbe3b[8]){this[_0xbe3b[57]][_0xbe3b[1242]](e,$[_0xbe3b[386]](keys[i]),$[_0xbe3b[280]](function (){var func;if(command[_0xbe3b[458]][_0xbe3b[10]](/\./)!=_0xbe3b[11]){func=command[_0xbe3b[458]][_0xbe3b[13]](_0xbe3b[12]);if( typeof this[func[0]]!=_0xbe3b[14]){this[func[0]][func[1]][_0xbe3b[3]](this,command[_0xbe3b[1241]]);} ;} else {this[command[_0xbe3b[458]]][_0xbe3b[3]](this,command[_0xbe3b[1241]]);} ;} ,this));} ;} ;} ,this));} ,handler:function (e,keys,origHandler){var hotkeysSpecialKeys={8:_0xbe3b[1243],9:_0xbe3b[1244],10:_0xbe3b[1245],13:_0xbe3b[1245],16:_0xbe3b[1246],17:_0xbe3b[926],18:_0xbe3b[631],19:_0xbe3b[1247],20:_0xbe3b[1248],27:_0xbe3b[1249],32:_0xbe3b[1250],33:_0xbe3b[1251],34:_0xbe3b[1252],35:_0xbe3b[1253],36:_0xbe3b[1254],37:_0xbe3b[478],38:_0xbe3b[1255],39:_0xbe3b[257],40:_0xbe3b[1256],45:_0xbe3b[43],46:_0xbe3b[93],59:_0xbe3b[881],61:_0xbe3b[291],96:_0xbe3b[1257],97:_0xbe3b[1258],98:_0xbe3b[1259],99:_0xbe3b[1260],100:_0xbe3b[1261],101:_0xbe3b[1262],102:_0xbe3b[1263],103:_0xbe3b[1264],104:_0xbe3b[1265],105:_0xbe3b[1266],106:_0xbe3b[629],107:_0xbe3b[1267],109:_0xbe3b[719],110:_0xbe3b[12],111:_0xbe3b[1268],112:_0xbe3b[1269],113:_0xbe3b[1270],114:_0xbe3b[1271],115:_0xbe3b[1272],116:_0xbe3b[1273],117:_0xbe3b[1274],118:_0xbe3b[1275],119:_0xbe3b[1276],120:_0xbe3b[1277],121:_0xbe3b[1278],122:_0xbe3b[1279],123:_0xbe3b[1280],144:_0xbe3b[1281],145:_0xbe3b[1282],173:_0xbe3b[719],186:_0xbe3b[881],187:_0xbe3b[291],188:_0xbe3b[353],189:_0xbe3b[719],190:_0xbe3b[12],191:_0xbe3b[1268],192:_0xbe3b[1283],219:_0xbe3b[1284],220:_0xbe3b[1285],221:_0xbe3b[874],222:_0xbe3b[537]};var hotkeysShiftNums={"\x60":_0xbe3b[1286],"\x31":_0xbe3b[1287],"\x32":_0xbe3b[1024],"\x33":_0xbe3b[1018],"\x34":_0xbe3b[1288],"\x35":_0xbe3b[1117],"\x36":_0xbe3b[1026],"\x37":_0xbe3b[290],"\x38":_0xbe3b[629],"\x39":_0xbe3b[1289],"\x30":_0xbe3b[1290],"\x2D":_0xbe3b[1291],"\x3D":_0xbe3b[1267],"\x3B":_0xbe3b[1292],"\x27":_0xbe3b[536],"\x2C":_0xbe3b[315],"\x2E":_0xbe3b[316],"\x2F":_0xbe3b[1293],"\x5C":_0xbe3b[240]};keys=keys[_0xbe3b[320]]()[_0xbe3b[13]](_0xbe3b[545]);var special=hotkeysSpecialKeys[e[_0xbe3b[704]]],character=String[_0xbe3b[1294]](e[_0xbe3b[925]])[_0xbe3b[320]](),modif=_0xbe3b[255],possible={};$[_0xbe3b[20]]([_0xbe3b[631],_0xbe3b[926],_0xbe3b[88],_0xbe3b[1246]],function (index,specialKey){if(e[specialKey+_0xbe3b[1295]]&&special!==specialKey){modif+=specialKey+_0xbe3b[1267];} ;} );if(special){possible[modif+special]=true;} ;if(character){possible[modif+character]=true;possible[modif+hotkeysShiftNums[character]]=true;if(modif===_0xbe3b[1296]){possible[hotkeysShiftNums[character]]=true;} ;} ;for(var i=0,len=keys[_0xbe3b[21]];i<len;i++){if(possible[keys[i]]){e[_0xbe3b[415]]();return origHandler[_0xbe3b[3]](this,arguments);} ;} ;} };} ,tabifier:function (){return {get:function (code){if(!this[_0xbe3b[63]][_0xbe3b[58]]){return code;} ;var ownLine=[_0xbe3b[1166],_0xbe3b[87],_0xbe3b[86],_0xbe3b[999],_0xbe3b[1297],_0xbe3b[48],_0xbe3b[88],_0xbe3b[1298],_0xbe3b[90],_0xbe3b[89],_0xbe3b[358],_0xbe3b[626],_0xbe3b[628],_0xbe3b[627]];var contOwnLine=[_0xbe3b[128],_0xbe3b[339],_0xbe3b[339],_0xbe3b[1299],_0xbe3b[1164],_0xbe3b[89]];var newLevel=[_0xbe3b[78],_0xbe3b[270],_0xbe3b[338],_0xbe3b[1168],_0xbe3b[1157],_0xbe3b[1300],_0xbe3b[1165],_0xbe3b[127],_0xbe3b[77],_0xbe3b[79],_0xbe3b[920],_0xbe3b[336],_0xbe3b[337],_0xbe3b[359],_0xbe3b[126]];this[_0xbe3b[58]][_0xbe3b[1301]]= new RegExp(_0xbe3b[1302]+ownLine[_0xbe3b[241]](_0xbe3b[1303])+_0xbe3b[240]+contOwnLine[_0xbe3b[241]](_0xbe3b[240])+_0xbe3b[1304]);this[_0xbe3b[58]][_0xbe3b[1305]]= new RegExp(_0xbe3b[1306]+ownLine[_0xbe3b[241]](_0xbe3b[1303])+_0xbe3b[1307]+contOwnLine[_0xbe3b[241]](_0xbe3b[1307])+_0xbe3b[1304]);this[_0xbe3b[58]][_0xbe3b[1308]]= new RegExp(_0xbe3b[1309]+newLevel[_0xbe3b[241]](_0xbe3b[240])+_0xbe3b[1304]);var i=0,codeLength=code[_0xbe3b[21]],point=0,start=null,end=null,tag=_0xbe3b[255],out=_0xbe3b[255],cont=_0xbe3b[255];this[_0xbe3b[58]][_0xbe3b[1310]]=0;for(;i<codeLength;i++){point=i;if(-1==code[_0xbe3b[1311]](i)[_0xbe3b[642]](_0xbe3b[315])){out+=code[_0xbe3b[1311]](i);return this[_0xbe3b[58]][_0xbe3b[1312]](out);} ;while(point<codeLength&&code[_0xbe3b[1313]](point)!=_0xbe3b[315]){point++;} ;if(i!=point){cont=code[_0xbe3b[1311]](i,point-i);if(!cont[_0xbe3b[641]](/^\s{2,}$/g)){if(_0xbe3b[612]==out[_0xbe3b[1313]](out[_0xbe3b[21]]-1)){out+=this[_0xbe3b[58]][_0xbe3b[1314]]();} else {if(_0xbe3b[612]==cont[_0xbe3b[1313]](0)){out+=_0xbe3b[612]+this[_0xbe3b[58]][_0xbe3b[1314]]();cont=cont[_0xbe3b[534]](/^\s+/,_0xbe3b[255]);} ;} ;out+=cont;} ;if(cont[_0xbe3b[641]](/\n/)){out+=_0xbe3b[612]+this[_0xbe3b[58]][_0xbe3b[1314]]();} ;} ;start=point;while(point<codeLength&&_0xbe3b[316]!=code[_0xbe3b[1313]](point)){point++;} ;tag=code[_0xbe3b[1311]](start,point-start);i=point;var t;if(_0xbe3b[1315]==tag[_0xbe3b[1311]](1,3)){if(!tag[_0xbe3b[641]](/--$/)){while(_0xbe3b[1316]!=code[_0xbe3b[1311]](point,3)){point++;} ;point+=2;tag=code[_0xbe3b[1311]](start,point-start);i=point;} ;if(_0xbe3b[612]!=out[_0xbe3b[1313]](out[_0xbe3b[21]]-1)){out+=_0xbe3b[612];} ;out+=this[_0xbe3b[58]][_0xbe3b[1314]]();out+=tag+_0xbe3b[1317];} else {if(_0xbe3b[1287]==tag[1]){out=this[_0xbe3b[58]][_0xbe3b[1318]](tag+_0xbe3b[316],out);} else {if(_0xbe3b[1293]==tag[1]){out+=tag+_0xbe3b[1317];} else {if(t=tag[_0xbe3b[641]](/^<(script|style|pre)/i)){t[1]=t[1][_0xbe3b[320]]();tag=this[_0xbe3b[58]][_0xbe3b[1319]](tag);out=this[_0xbe3b[58]][_0xbe3b[1318]](tag,out);end=String(code[_0xbe3b[1311]](i+1))[_0xbe3b[320]]()[_0xbe3b[642]](_0xbe3b[645]+t[1]);if(end){cont=code[_0xbe3b[1311]](i+1,end);i+=end;out+=cont;} ;} else {tag=this[_0xbe3b[58]][_0xbe3b[1319]](tag);out=this[_0xbe3b[58]][_0xbe3b[1318]](tag,out);} ;} ;} ;} ;} ;return this[_0xbe3b[58]][_0xbe3b[1312]](out);} ,getTabs:function (){var s=_0xbe3b[255];for(var j=0;j<this[_0xbe3b[58]][_0xbe3b[1310]];j++){s+=_0xbe3b[578];} ;return s;} ,finish:function (code){code=code[_0xbe3b[534]](/\n\s*\n/g,_0xbe3b[612]);code=code[_0xbe3b[534]](/^[\s\n]*/,_0xbe3b[255]);code=code[_0xbe3b[534]](/[\s\n]*$/,_0xbe3b[255]);code=code[_0xbe3b[534]](/<script(.*?)>\n<\/script>/gi,_0xbe3b[1320]);this[_0xbe3b[58]][_0xbe3b[1310]]=0;return code;} ,cleanTag:function (tag){var tagout=_0xbe3b[255];tag=tag[_0xbe3b[534]](/\n/g,_0xbe3b[545]);tag=tag[_0xbe3b[534]](/\s{2,}/g,_0xbe3b[545]);tag=tag[_0xbe3b[534]](/^\s+|\s+$/g,_0xbe3b[545]);var suffix=_0xbe3b[255];if(tag[_0xbe3b[641]](/\/$/)){suffix=_0xbe3b[1268];tag=tag[_0xbe3b[534]](/\/+$/,_0xbe3b[255]);} ;var m;while(m=/\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/[_0xbe3b[1321]](tag)){if(m[2]){tagout+=m[1][_0xbe3b[320]]()+_0xbe3b[291]+m[2];} else {if(m[1]){tagout+=m[1][_0xbe3b[320]]();} ;} ;tagout+=_0xbe3b[545];tag=tag[_0xbe3b[1311]](m[0][_0xbe3b[21]]);} ;return tagout[_0xbe3b[534]](/\s*$/,_0xbe3b[255])+suffix+_0xbe3b[316];} ,placeTag:function (tag,out){var nl=tag[_0xbe3b[641]](this[_0xbe3b[58]][_0xbe3b[1308]]);if(tag[_0xbe3b[641]](this[_0xbe3b[58]][_0xbe3b[1301]])||nl){out=out[_0xbe3b[534]](/\s*$/,_0xbe3b[255]);out+=_0xbe3b[612];} ;if(nl&&_0xbe3b[1268]==tag[_0xbe3b[1313]](1)){this[_0xbe3b[58]][_0xbe3b[1310]]--;} ;if(_0xbe3b[612]==out[_0xbe3b[1313]](out[_0xbe3b[21]]-1)){out+=this[_0xbe3b[58]][_0xbe3b[1314]]();} ;if(nl&&_0xbe3b[1268]!=tag[_0xbe3b[1313]](1)){this[_0xbe3b[58]][_0xbe3b[1310]]++;} ;out+=tag;if(tag[_0xbe3b[641]](this[_0xbe3b[58]][_0xbe3b[1305]])||tag[_0xbe3b[641]](this[_0xbe3b[58]][_0xbe3b[1308]])){out=out[_0xbe3b[534]](/ *$/,_0xbe3b[255]);out+=_0xbe3b[612];} ;return out;} };} ,tidy:function (){return {setupAllowed:function (){if(this[_0xbe3b[63]][_0xbe3b[1322]]){this[_0xbe3b[63]][_0xbe3b[1323]]=false;} ;if(this[_0xbe3b[63]][_0xbe3b[1324]]){this[_0xbe3b[63]][_0xbe3b[344]]=false;} ;if(this[_0xbe3b[63]][_0xbe3b[265]]){return ;} ;var tags=[_0xbe3b[77],_0xbe3b[1076]];if(this[_0xbe3b[63]][_0xbe3b[1322]]){this[_0xbe3b[59]][_0xbe3b[1325]](tags);} ;if(this[_0xbe3b[63]][_0xbe3b[1323]]){this[_0xbe3b[59]][_0xbe3b[1326]](tags);} ;} ,addToAllowed:function (tags){var len=tags[_0xbe3b[21]];for(var i=0;i<len;i++){if($[_0xbe3b[300]](tags[i],this[_0xbe3b[63]][_0xbe3b[1322]])==-1){this[_0xbe3b[63]][_0xbe3b[1322]][_0xbe3b[16]](tags[i]);} ;} ;} ,removeFromDenied:function (tags){var len=tags[_0xbe3b[21]];for(var i=0;i<len;i++){var pos=$[_0xbe3b[300]](tags[i],this[_0xbe3b[63]][_0xbe3b[1323]]);if(pos!=-1){this[_0xbe3b[63]][_0xbe3b[1323]][_0xbe3b[1327]](pos,1);} ;} ;} ,load:function (html,options){this[_0xbe3b[59]][_0xbe3b[1328]]={deniedTags:this[_0xbe3b[63]][_0xbe3b[1323]],allowedTags:this[_0xbe3b[63]][_0xbe3b[1322]],removeComments:this[_0xbe3b[63]][_0xbe3b[1329]],replaceTags:this[_0xbe3b[63]][_0xbe3b[1330]],replaceStyles:this[_0xbe3b[63]][_0xbe3b[1331]],removeDataAttr:this[_0xbe3b[63]][_0xbe3b[1332]],removeAttr:this[_0xbe3b[63]][_0xbe3b[344]],allowedAttr:this[_0xbe3b[63]][_0xbe3b[1324]],removeWithoutAttr:this[_0xbe3b[63]][_0xbe3b[1333]],removeEmpty:this[_0xbe3b[63]][_0xbe3b[351]]};$[_0xbe3b[246]](this[_0xbe3b[59]][_0xbe3b[1328]],options);html=this[_0xbe3b[59]][_0xbe3b[1329]](html);this[_0xbe3b[59]][_0xbe3b[1334]]=$(_0xbe3b[390])[_0xbe3b[322]](html);this[_0xbe3b[59]][_0xbe3b[1330]]();this[_0xbe3b[59]][_0xbe3b[1331]]();this[_0xbe3b[59]][_0xbe3b[1335]]();this[_0xbe3b[59]][_0xbe3b[344]]();this[_0xbe3b[59]][_0xbe3b[351]]();this[_0xbe3b[59]][_0xbe3b[1336]]();this[_0xbe3b[59]][_0xbe3b[1332]]();this[_0xbe3b[59]][_0xbe3b[1333]]();html=this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[68]]();this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[326]]();return html;} ,removeComments:function (html){if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1329]]){return html;} ;return html[_0xbe3b[534]](/<!--[\s\S]*?-->/gi,_0xbe3b[255]);} ,replaceTags:function (html){if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1330]]){return html;} ;var len=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1330]][_0xbe3b[21]];var replacement=[],rTags=[];for(var i=0;i<len;i++){rTags[_0xbe3b[16]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1330]][i][1]);replacement[_0xbe3b[16]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1330]][i][0]);} ;this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](replacement[_0xbe3b[241]](_0xbe3b[353]))[_0xbe3b[20]]($[_0xbe3b[280]](function (n,s){var tag=rTags[n];$(s)[_0xbe3b[278]](function (){var replaced=$(_0xbe3b[315]+tag+_0xbe3b[1337])[_0xbe3b[322]]($(this)[_0xbe3b[331]]());for(var i=0;i<this[_0xbe3b[893]][_0xbe3b[21]];i++){replaced[_0xbe3b[273]](this[_0xbe3b[893]][i][_0xbe3b[281]],this[_0xbe3b[893]][i][_0xbe3b[304]]);} ;return replaced;} );} ,this));return html;} ,replaceStyles:function (){if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1331]]){return ;} ;var len=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1331]][_0xbe3b[21]];this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](_0xbe3b[101])[_0xbe3b[20]]($[_0xbe3b[280]](function (n,s){var $el=$(s);var style=$el[_0xbe3b[273]](_0xbe3b[90]);for(var i=0;i<len;i++){if(style&&style[_0xbe3b[641]]( new RegExp(_0xbe3b[1026]+this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1331]][i][0],_0xbe3b[123]))){var tagName=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1331]][i][1];$el[_0xbe3b[278]](function (){var tag=document[_0xbe3b[646]](tagName);return $(tag)[_0xbe3b[322]]($(this)[_0xbe3b[331]]());} );} ;} ;} ,this));} ,removeTags:function (){if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1323]]&&this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1322]]){this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](_0xbe3b[629])[_0xbe3b[489]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1322]][_0xbe3b[241]](_0xbe3b[353]))[_0xbe3b[20]](function (i,s){if(s[_0xbe3b[505]]===_0xbe3b[255]){$(s)[_0xbe3b[326]]();} else {$(s)[_0xbe3b[331]]()[_0xbe3b[330]]();} ;} );} ;if(this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1323]]){this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1323]][_0xbe3b[241]](_0xbe3b[353]))[_0xbe3b[20]](function (i,s){if(s[_0xbe3b[505]]===_0xbe3b[255]){$(s)[_0xbe3b[326]]();} else {$(s)[_0xbe3b[331]]()[_0xbe3b[330]]();} ;} );} ;} ,removeAttr:function (){var len;if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[344]]&&this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1324]]){var allowedAttrTags=[],allowedAttrData=[];len=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1324]][_0xbe3b[21]];for(var i=0;i<len;i++){allowedAttrTags[_0xbe3b[16]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1324]][i][0]);allowedAttrData[_0xbe3b[16]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1324]][i][1]);} ;this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](_0xbe3b[629])[_0xbe3b[20]]($[_0xbe3b[280]](function (n,s){var $el=$(s);var pos=$[_0xbe3b[300]]($el[0][_0xbe3b[306]][_0xbe3b[320]](),allowedAttrTags);var attributesRemove=this[_0xbe3b[59]][_0xbe3b[1338]](pos,allowedAttrData,$el);if(attributesRemove){$[_0xbe3b[20]](attributesRemove,function (z,f){$el[_0xbe3b[344]](f);} );} ;} ,this));} ;if(this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[344]]){len=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[344]][_0xbe3b[21]];for(var i=0;i<len;i++){var attrs=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[344]][i][1];if($[_0xbe3b[1339]](attrs)){attrs=attrs[_0xbe3b[241]](_0xbe3b[545]);} ;this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[344]][i][0])[_0xbe3b[344]](attrs);} ;} ;} ,removeAttrGetRemoves:function (pos,allowed,$el){var attributesRemove=[];if(pos==-1){$[_0xbe3b[20]]($el[0][_0xbe3b[893]],function (i,item){attributesRemove[_0xbe3b[16]](item[_0xbe3b[281]]);} );} else {if(allowed[pos]==_0xbe3b[629]){attributesRemove=[];} else {$[_0xbe3b[20]]($el[0][_0xbe3b[893]],function (i,item){if($[_0xbe3b[1339]](allowed[pos])){if($[_0xbe3b[300]](item[_0xbe3b[281]],allowed[pos])==-1){attributesRemove[_0xbe3b[16]](item[_0xbe3b[281]]);} ;} else {if(allowed[pos]!=item[_0xbe3b[281]]){attributesRemove[_0xbe3b[16]](item[_0xbe3b[281]]);} ;} ;} );} ;} ;return attributesRemove;} ,removeAttrs:function (el,regex){regex= new RegExp(regex,_0xbe3b[553]);return el[_0xbe3b[20]](function (){var self=$(this);var len=this[_0xbe3b[893]][_0xbe3b[21]]-1;for(var i=len;i>=0;i--){var item=this[_0xbe3b[893]][i];if(item&&item[_0xbe3b[1340]]&&item[_0xbe3b[281]][_0xbe3b[10]](regex)>=0){self[_0xbe3b[344]](item[_0xbe3b[281]]);} ;} ;} );} ,removeEmpty:function (){if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[351]]){return ;} ;this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[351]][_0xbe3b[241]](_0xbe3b[353]))[_0xbe3b[20]](function (){var $el=$(this);var text=$el[_0xbe3b[760]]();text=text[_0xbe3b[534]](/[\u200B-\u200D\uFEFF]/g,_0xbe3b[255]);text=text[_0xbe3b[534]](/&nbsp;/gi,_0xbe3b[255]);text=text[_0xbe3b[534]](/\s/g,_0xbe3b[255]);if(text===_0xbe3b[255]&&$el[_0xbe3b[758]]()[_0xbe3b[21]]===0){$el[_0xbe3b[326]]();} ;} );} ,removeParagraphsInLists:function (){this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](_0xbe3b[1341])[_0xbe3b[331]]()[_0xbe3b[330]]();} ,removeDataAttr:function (){if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1332]]){return ;} ;var tags=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1332]];if($[_0xbe3b[1339]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1332]])){tags=this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1332]][_0xbe3b[241]](_0xbe3b[353]);} ;this[_0xbe3b[59]][_0xbe3b[1343]](this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](tags),_0xbe3b[1342]);} ,removeWithoutAttr:function (){if(!this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1333]]){return ;} ;this[_0xbe3b[59]][_0xbe3b[1334]][_0xbe3b[327]](this[_0xbe3b[59]][_0xbe3b[1328]][_0xbe3b[1333]][_0xbe3b[241]](_0xbe3b[353]))[_0xbe3b[20]](function (){if(this[_0xbe3b[893]][_0xbe3b[21]]===0){$(this)[_0xbe3b[331]]()[_0xbe3b[330]]();} ;} );} };} ,toolbar:function (){return {init:function (){return {html:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[68]),func:_0xbe3b[1344]},formatting:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[69]),dropdown:{p:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1345]),func:_0xbe3b[1346]},blockquote:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[299]),func:_0xbe3b[1346]},pre:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[35]),func:_0xbe3b[1346]},h1:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1347]),func:_0xbe3b[1346]},h2:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1348]),func:_0xbe3b[1346]},h3:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1349]),func:_0xbe3b[1346]},h4:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1350]),func:_0xbe3b[1346]},h5:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1351]),func:_0xbe3b[1346]}}},bold:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[70]),func:_0xbe3b[108]},italic:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[71]),func:_0xbe3b[108]},deleted:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[72]),func:_0xbe3b[108]},underline:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[102]),func:_0xbe3b[108]},unorderedlist:{title:_0xbe3b[1352]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[73]),func:_0xbe3b[112]},orderedlist:{title:_0xbe3b[1353]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[74]),func:_0xbe3b[112]},outdent:{title:_0xbe3b[1354]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[75]),func:_0xbe3b[1355]},indent:{title:_0xbe3b[1356]+this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[41]),func:_0xbe3b[1357]},image:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[40]),func:_0xbe3b[1358]},file:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[38]),func:_0xbe3b[1359]},link:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[48]),dropdown:{link:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1006]),func:_0xbe3b[111]},unlink:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1154]),func:_0xbe3b[1360]}}},alignment:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[27]),dropdown:{left:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1361]),func:_0xbe3b[1362]},center:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1363]),func:_0xbe3b[1364]},right:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1365]),func:_0xbe3b[1366]},justify:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[1367]),func:_0xbe3b[1368]}}},horizontalrule:{title:this[_0xbe3b[46]][_0xbe3b[286]](_0xbe3b[76]),func:_0xbe3b[1369]}};} ,build:function (){this[_0xbe3b[60]][_0xbe3b[1370]]();this[_0xbe3b[60]][_0xbe3b[1371]]();this[_0xbe3b[60]][_0xbe3b[1372]]();if(this[_0xbe3b[63]][_0xbe3b[483]][_0xbe3b[21]]===0){return ;} ;this[_0xbe3b[485]]=this[_0xbe3b[60]][_0xbe3b[1373]]();this[_0xbe3b[60]][_0xbe3b[1374]]();this[_0xbe3b[60]][_0xbe3b[322]]();this[_0xbe3b[60]][_0xbe3b[1375]]();this[_0xbe3b[60]][_0xbe3b[1376]]();this[_0xbe3b[60]][_0xbe3b[1377]]();if(this[_0xbe3b[63]][_0xbe3b[1137]]){this[_0xbe3b[261]][_0xbe3b[419]](_0xbe3b[1378],$[_0xbe3b[280]](this[_0xbe3b[51]][_0xbe3b[483]],this));} ;} ,createContainer:function (){return $(_0xbe3b[1035])[_0xbe3b[342]](_0xbe3b[1380])[_0xbe3b[273]](_0xbe3b[381],_0xbe3b[1379]+this[_0xbe3b[230]]);} ,setFormattingTags:function (){$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[60]][_0xbe3b[69]][_0xbe3b[37]],$[_0xbe3b[280]](function (i,s){if($[_0xbe3b[300]](i,this[_0xbe3b[63]][_0xbe3b[69]])==-1){delete this[_0xbe3b[63]][_0xbe3b[60]][_0xbe3b[69]][_0xbe3b[37]][i];} ;} ,this));} ,loadButtons:function (){$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[483]],$[_0xbe3b[280]](function (i,btnName){if(!this[_0xbe3b[63]][_0xbe3b[60]][btnName]){return ;} ;if(this[_0xbe3b[63]][_0xbe3b[745]]===false&&btnName===_0xbe3b[38]){return true;} ;if((this[_0xbe3b[63]][_0xbe3b[767]]===false&&this[_0xbe3b[63]][_0xbe3b[1381]]===false)&&btnName===_0xbe3b[40]){return true;} ;var btnObject=this[_0xbe3b[63]][_0xbe3b[60]][btnName];this[_0xbe3b[485]][_0xbe3b[322]]($(_0xbe3b[498])[_0xbe3b[322]](this[_0xbe3b[32]][_0xbe3b[31]](btnName,btnObject)));} ,this));} ,append:function (){if(this[_0xbe3b[63]][_0xbe3b[1382]]){this[_0xbe3b[485]][_0xbe3b[342]](_0xbe3b[1383]);$(this[_0xbe3b[63]][_0xbe3b[1382]])[_0xbe3b[68]](this.$toolbar);} else {this[_0xbe3b[377]][_0xbe3b[323]](this.$toolbar);} ;} ,setFixed:function (){if(this[_0xbe3b[62]][_0xbe3b[847]]()){return ;} ;if(this[_0xbe3b[63]][_0xbe3b[1382]]){return ;} ;if(!this[_0xbe3b[63]][_0xbe3b[1384]]){return ;} ;this[_0xbe3b[60]][_0xbe3b[1385]]();$(this[_0xbe3b[63]][_0xbe3b[734]])[_0xbe3b[419]](_0xbe3b[1386],$[_0xbe3b[280]](this[_0xbe3b[60]][_0xbe3b[1385]],this));} ,setOverflow:function (){if(this[_0xbe3b[62]][_0xbe3b[847]]()&&this[_0xbe3b[63]][_0xbe3b[1387]]){this[_0xbe3b[485]][_0xbe3b[342]](_0xbe3b[1388]);} ;} ,isButtonSourceNeeded:function (){if(this[_0xbe3b[63]][_0xbe3b[1389]]){return ;} ;var index=this[_0xbe3b[63]][_0xbe3b[483]][_0xbe3b[642]](_0xbe3b[68]);if(index!==-1){this[_0xbe3b[63]][_0xbe3b[483]][_0xbe3b[1327]](index,1);} ;} ,hideButtons:function (){if(this[_0xbe3b[63]][_0xbe3b[1390]][_0xbe3b[21]]===0){return ;} ;$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[1390]],$[_0xbe3b[280]](function (i,s){var index=this[_0xbe3b[63]][_0xbe3b[483]][_0xbe3b[642]](s);this[_0xbe3b[63]][_0xbe3b[483]][_0xbe3b[1327]](index,1);} ,this));} ,hideButtonsOnMobile:function (){if(!this[_0xbe3b[62]][_0xbe3b[847]]()||this[_0xbe3b[63]][_0xbe3b[1391]][_0xbe3b[21]]===0){return ;} ;$[_0xbe3b[20]](this[_0xbe3b[63]][_0xbe3b[1391]],$[_0xbe3b[280]](function (i,s){var index=this[_0xbe3b[63]][_0xbe3b[483]][_0xbe3b[642]](s);this[_0xbe3b[63]][_0xbe3b[483]][_0xbe3b[1327]](index,1);} ,this));} ,observeScroll:function (){var scrollTop=$(this[_0xbe3b[63]][_0xbe3b[734]])[_0xbe3b[692]]();var boxTop=1;if(this[_0xbe3b[63]][_0xbe3b[734]]===document){boxTop=this[_0xbe3b[377]][_0xbe3b[472]]()[_0xbe3b[476]];} ;if(scrollTop>boxTop){this[_0xbe3b[60]][_0xbe3b[1392]](scrollTop,boxTop);} else {this[_0xbe3b[60]][_0xbe3b[1393]]();} ;} ,observeScrollEnable:function (scrollTop,boxTop){var top=this[_0xbe3b[63]][_0xbe3b[732]]+scrollTop-boxTop;var left=0;var end=boxTop+this[_0xbe3b[377]][_0xbe3b[695]]()+30;var width=this[_0xbe3b[377]][_0xbe3b[474]]();this[_0xbe3b[485]][_0xbe3b[342]](_0xbe3b[731]);this[_0xbe3b[485]][_0xbe3b[275]]({position:_0xbe3b[735],width:width,top:top+_0xbe3b[477],left:left});this[_0xbe3b[60]][_0xbe3b[1394]]();this[_0xbe3b[485]][_0xbe3b[275]](_0xbe3b[1395],(scrollTop<end)?_0xbe3b[1396]:_0xbe3b[1085]);} ,observeScrollDisable:function (){this[_0xbe3b[485]][_0xbe3b[275]]({position:_0xbe3b[1397],width:_0xbe3b[796],top:0,left:0,visibility:_0xbe3b[1396]});this[_0xbe3b[60]][_0xbe3b[1398]]();this[_0xbe3b[485]][_0xbe3b[346]](_0xbe3b[731]);} ,setDropdownsFixed:function (){var top=this[_0xbe3b[485]][_0xbe3b[473]]()+this[_0xbe3b[63]][_0xbe3b[732]];var position=_0xbe3b[733];if(this[_0xbe3b[63]][_0xbe3b[734]]!==document){top=(this[_0xbe3b[485]][_0xbe3b[473]]()+this[_0xbe3b[485]][_0xbe3b[472]]()[_0xbe3b[476]])+this[_0xbe3b[63]][_0xbe3b[732]];position=_0xbe3b[735];} ;$(_0xbe3b[742])[_0xbe3b[20]](function (){$(this)[_0xbe3b[275]]({position:position,top:top+_0xbe3b[477]});} );} ,unsetDropdownsFixed:function (){var top=(this[_0xbe3b[485]][_0xbe3b[473]]()+this[_0xbe3b[485]][_0xbe3b[472]]()[_0xbe3b[476]]);$(_0xbe3b[742])[_0xbe3b[20]](function (){$(this)[_0xbe3b[275]]({position:_0xbe3b[735],top:top+_0xbe3b[477]});} );} };} ,upload:function (){return {init:function (id,url,callback){this[_0xbe3b[61]][_0xbe3b[1399]]=false;this[_0xbe3b[61]][_0xbe3b[1400]]=callback;this[_0xbe3b[61]][_0xbe3b[1015]]=url;this[_0xbe3b[61]][_0xbe3b[1401]]=$(id);this[_0xbe3b[61]][_0xbe3b[1402]]=$(_0xbe3b[1403]);this[_0xbe3b[61]][_0xbe3b[1404]]=$(_0xbe3b[1406])[_0xbe3b[760]](_0xbe3b[1405]);this[_0xbe3b[61]][_0xbe3b[1407]]=$(_0xbe3b[1408]);this[_0xbe3b[61]][_0xbe3b[1404]][_0xbe3b[322]](this[_0xbe3b[61]].$input);this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[322]](this[_0xbe3b[61]].$placeholdler);this[_0xbe3b[61]][_0xbe3b[1401]][_0xbe3b[322]](this[_0xbe3b[61]].$droparea);this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[701]](_0xbe3b[1409]);this[_0xbe3b[61]][_0xbe3b[1407]][_0xbe3b[701]](_0xbe3b[1409]);this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[419]](_0xbe3b[1410],$[_0xbe3b[280]](this[_0xbe3b[61]][_0xbe3b[803]],this));this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[419]](_0xbe3b[1411],$[_0xbe3b[280]](this[_0xbe3b[61]][_0xbe3b[1412]],this));this[_0xbe3b[61]][_0xbe3b[1407]][_0xbe3b[419]](_0xbe3b[1413],$[_0xbe3b[280]](function (e){e=e[_0xbe3b[410]]||e;this[_0xbe3b[61]][_0xbe3b[1414]](this[_0xbe3b[61]][_0xbe3b[1407]][0][_0xbe3b[413]][0],e);} ,this));this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[419]](_0xbe3b[1415],$[_0xbe3b[280]](function (e){e[_0xbe3b[415]]();this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[346]](_0xbe3b[1417])[_0xbe3b[342]](_0xbe3b[1416]);this[_0xbe3b[61]][_0xbe3b[829]](e);} ,this));} ,directUpload:function (file,e){this[_0xbe3b[61]][_0xbe3b[1399]]=true;this[_0xbe3b[61]][_0xbe3b[1414]](file,e);} ,onDrop:function (e){e=e[_0xbe3b[410]]||e;var files=e[_0xbe3b[412]][_0xbe3b[413]];this[_0xbe3b[61]][_0xbe3b[1414]](files[0],e);} ,traverseFile:function (file,e){if(this[_0xbe3b[63]][_0xbe3b[1381]]){this[_0xbe3b[61]][_0xbe3b[1418]](file);this[_0xbe3b[61]][_0xbe3b[1419]](file);return ;} ;var formData=!!window[_0xbe3b[411]]? new FormData():null;if(window[_0xbe3b[411]]){this[_0xbe3b[61]][_0xbe3b[1418]](file);var name=(this[_0xbe3b[61]][_0xbe3b[303]]==_0xbe3b[40])?this[_0xbe3b[63]][_0xbe3b[1420]]:this[_0xbe3b[63]][_0xbe3b[1421]];formData[_0xbe3b[322]](name,file);} ;this[_0xbe3b[55]][_0xbe3b[475]]();this[_0xbe3b[61]][_0xbe3b[1422]](formData,e);} ,setConfig:function (file){this[_0xbe3b[61]][_0xbe3b[1423]](file);if(this[_0xbe3b[61]][_0xbe3b[1399]]){this[_0xbe3b[61]][_0xbe3b[1015]]=(this[_0xbe3b[61]][_0xbe3b[303]]==_0xbe3b[40])?this[_0xbe3b[63]][_0xbe3b[767]]:this[_0xbe3b[63]][_0xbe3b[745]];this[_0xbe3b[61]][_0xbe3b[1400]]=(this[_0xbe3b[61]][_0xbe3b[303]]==_0xbe3b[40])?this[_0xbe3b[40]][_0xbe3b[43]]:this[_0xbe3b[38]][_0xbe3b[43]];} ;} ,getType:function (file){this[_0xbe3b[61]][_0xbe3b[303]]=_0xbe3b[40];if(this[_0xbe3b[63]][_0xbe3b[1424]][_0xbe3b[642]](file[_0xbe3b[303]])==-1){this[_0xbe3b[61]][_0xbe3b[303]]=_0xbe3b[38];} ;} ,getHiddenFields:function (obj,fd){if(obj===false|| typeof obj!==_0xbe3b[625]){return fd;} ;$[_0xbe3b[20]](obj,$[_0xbe3b[280]](function (k,v){if(v!==null&&v.toString()[_0xbe3b[642]](_0xbe3b[1018])===0){v=$(v)[_0xbe3b[384]]();} ;fd[_0xbe3b[322]](k,v);} ,this));return fd;} ,sendData:function (formData,e){if(this[_0xbe3b[61]][_0xbe3b[303]]==_0xbe3b[40]){formData=this[_0xbe3b[61]][_0xbe3b[1426]](this[_0xbe3b[63]][_0xbe3b[1425]],formData);formData=this[_0xbe3b[61]][_0xbe3b[1426]](this[_0xbe3b[61]][_0xbe3b[1427]],formData);} else {formData=this[_0xbe3b[61]][_0xbe3b[1426]](this[_0xbe3b[63]][_0xbe3b[1428]],formData);formData=this[_0xbe3b[61]][_0xbe3b[1426]](this[_0xbe3b[61]][_0xbe3b[1429]],formData);} ;var xhr= new XMLHttpRequest();xhr[_0xbe3b[1431]](_0xbe3b[1430],this[_0xbe3b[61]][_0xbe3b[1015]]);xhr[_0xbe3b[1432]]=$[_0xbe3b[280]](function (){if(xhr[_0xbe3b[1433]]==4){var data=xhr[_0xbe3b[1434]];data=data[_0xbe3b[534]](/^\[/,_0xbe3b[255]);data=data[_0xbe3b[534]](/\]$/,_0xbe3b[255]);var json;try{json=( typeof data===_0xbe3b[8]?$[_0xbe3b[294]](data):data);} catch(err){json={error:true};} ;this[_0xbe3b[55]][_0xbe3b[393]]();if(!this[_0xbe3b[61]][_0xbe3b[1399]]){this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[346]](_0xbe3b[1416]);} ;this[_0xbe3b[61]][_0xbe3b[1400]](json,this[_0xbe3b[61]][_0xbe3b[1399]],e);} ;} ,this);xhr[_0xbe3b[1435]](formData);} ,onDrag:function (e){e[_0xbe3b[415]]();this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[342]](_0xbe3b[1417]);} ,onDragLeave:function (e){e[_0xbe3b[415]]();this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[346]](_0xbe3b[1417]);} ,clearImageFields:function (){this[_0xbe3b[61]][_0xbe3b[1427]]={};} ,addImageFields:function (name,value){this[_0xbe3b[61]][_0xbe3b[1427]][name]=value;} ,removeImageFields:function (name){delete this[_0xbe3b[61]][_0xbe3b[1427]][name];} ,clearFileFields:function (){this[_0xbe3b[61]][_0xbe3b[1429]]={};} ,addFileFields:function (name,value){this[_0xbe3b[61]][_0xbe3b[1429]][name]=value;} ,removeFileFields:function (name){delete this[_0xbe3b[61]][_0xbe3b[1429]][name];} ,s3uploadFile:function (file){this[_0xbe3b[61]][_0xbe3b[1437]](file,$[_0xbe3b[280]](function (signedURL){this[_0xbe3b[61]][_0xbe3b[1436]](file,signedURL);} ,this));} ,s3executeOnSignedUrl:function (file,callback){var xhr= new XMLHttpRequest();var mark=_0xbe3b[1293];if(this[_0xbe3b[63]][_0xbe3b[1381]][_0xbe3b[10]](/\?/)!=_0xbe3b[11]){mark=_0xbe3b[290];} ;xhr[_0xbe3b[1431]](_0xbe3b[1438],this[_0xbe3b[63]][_0xbe3b[1381]]+mark+_0xbe3b[289]+file[_0xbe3b[281]]+_0xbe3b[1439]+file[_0xbe3b[303]],true);if(xhr[_0xbe3b[1440]]){xhr[_0xbe3b[1440]](_0xbe3b[1441]);} ;var that=this;xhr[_0xbe3b[1432]]=function (e){if(this[_0xbe3b[1433]]==4&&this[_0xbe3b[1442]]==200){that[_0xbe3b[55]][_0xbe3b[475]]();callback(decodeURIComponent(this[_0xbe3b[1434]]));} else {if(this[_0xbe3b[1433]]==4&&this[_0xbe3b[1442]]!=200){} ;} ;} ;xhr[_0xbe3b[1435]]();} ,s3createCORSRequest:function (method,url){var xhr= new XMLHttpRequest();if(_0xbe3b[1443] in xhr){xhr[_0xbe3b[1431]](method,url,true);} else {if( typeof XDomainRequest!=_0xbe3b[14]){xhr= new XDomainRequest();xhr[_0xbe3b[1431]](method,url);} else {xhr=null;} ;} ;return xhr;} ,s3uploadToS3:function (file,url){var xhr=this[_0xbe3b[61]][_0xbe3b[1445]](_0xbe3b[1444],url);if(!xhr){} else {xhr[_0xbe3b[1446]]=$[_0xbe3b[280]](function (){if(xhr[_0xbe3b[1442]]==200){this[_0xbe3b[55]][_0xbe3b[393]]();var s3file=url[_0xbe3b[13]](_0xbe3b[1293]);if(!s3file[0]){return false;} ;if(!this[_0xbe3b[61]][_0xbe3b[1399]]){this[_0xbe3b[61]][_0xbe3b[1402]][_0xbe3b[346]](_0xbe3b[1416]);} ;var json={filelink:s3file[0]};if(this[_0xbe3b[61]][_0xbe3b[303]]==_0xbe3b[38]){var arr=s3file[0][_0xbe3b[13]](_0xbe3b[1268]);json[_0xbe3b[750]]=arr[arr[_0xbe3b[21]]-1];} ;this[_0xbe3b[61]][_0xbe3b[1400]](json,this[_0xbe3b[61]][_0xbe3b[1399]],false);} else {} ;} ,this);xhr[_0xbe3b[1447]]=function (){} ;xhr[_0xbe3b[61]][_0xbe3b[1448]]=function (e){} ;xhr[_0xbe3b[1450]](_0xbe3b[1449],file[_0xbe3b[303]]);xhr[_0xbe3b[1450]](_0xbe3b[1451],_0xbe3b[1452]);xhr[_0xbe3b[1435]](file);} ;} };} ,utils:function (){return {isMobile:function (){return /(iPhone|iPod|BlackBerry|Android)/[_0xbe3b[597]](navigator[_0xbe3b[1453]]);} ,isDesktop:function (){return !/(iPhone|iPod|iPad|BlackBerry|Android)/[_0xbe3b[597]](navigator[_0xbe3b[1453]]);} ,isString:function (obj){return Object[_0xbe3b[2]][_0xbe3b[1454]][_0xbe3b[6]](obj)==_0xbe3b[1455];} ,isEmpty:function (html,removeEmptyTags){html=html[_0xbe3b[534]](/[\u200B-\u200D\uFEFF]/g,_0xbe3b[255]);html=html[_0xbe3b[534]](/&nbsp;/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<\/?br\s?\/?>/g,_0xbe3b[255]);html=html[_0xbe3b[534]](/\s/g,_0xbe3b[255]);html=html[_0xbe3b[534]](/^<p>[^\W\w\D\d]*?<\/p>$/i,_0xbe3b[255]);if(removeEmptyTags!==false){html=html[_0xbe3b[534]](/<[^\/>][^>]*><\/[^>]+>/gi,_0xbe3b[255]);html=html[_0xbe3b[534]](/<[^\/>][^>]*><\/[^>]+>/gi,_0xbe3b[255]);} ;html=$[_0xbe3b[386]](html);return html===_0xbe3b[255];} ,normalize:function (str){if( typeof (str)===_0xbe3b[14]){return 0;} ;return parseInt(str[_0xbe3b[534]](_0xbe3b[477],_0xbe3b[255]),10);} ,hexToRgb:function (hex){if( typeof hex==_0xbe3b[14]){return ;} ;if(hex[_0xbe3b[10]](/^#/)==-1){return hex;} ;var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex[_0xbe3b[534]](shorthandRegex,function (m,r,g,b){return r+r+g+g+b+b;} );var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i[_0xbe3b[1321]](hex);return _0xbe3b[1456]+parseInt(result[1],16)+_0xbe3b[661]+parseInt(result[2],16)+_0xbe3b[661]+parseInt(result[3],16)+_0xbe3b[1290];} ,getOuterHtml:function (el){return $(_0xbe3b[541])[_0xbe3b[322]]($(el)[_0xbe3b[1457]](0)[_0xbe3b[990]]())[_0xbe3b[68]]();} ,getAlignmentElement:function (el){if($[_0xbe3b[300]](el[_0xbe3b[306]],this[_0xbe3b[63]][_0xbe3b[236]])!==-1){return $(el);} else {return $(el)[_0xbe3b[348]](this[_0xbe3b[63]][_0xbe3b[236]].toString()[_0xbe3b[320]](),this[_0xbe3b[261]][0]);} ;} ,removeEmptyAttr:function (el,attr){var $el=$(el);if( typeof $el[_0xbe3b[273]](attr)==_0xbe3b[14]){return true;} ;if($el[_0xbe3b[273]](attr)===_0xbe3b[255]){$el[_0xbe3b[344]](attr);return true;} ;return false;} ,removeEmpty:function (i,s){var $s=$(s);$s[_0xbe3b[327]](_0xbe3b[1458])[_0xbe3b[344]](_0xbe3b[90])[_0xbe3b[344]](_0xbe3b[296]);if($s[_0xbe3b[327]](_0xbe3b[1459])[_0xbe3b[21]]!==0){return ;} ;var text=$[_0xbe3b[386]]($s[_0xbe3b[760]]());if(this[_0xbe3b[62]][_0xbe3b[287]](text,false)){$s[_0xbe3b[326]]();} ;} ,saveScroll:function (){if(this[_0xbe3b[62]][_0xbe3b[581]]()){return ;} ;this[_0xbe3b[1460]]=this[_0xbe3b[261]][_0xbe3b[692]]();this[_0xbe3b[1213]]=$(window)[_0xbe3b[692]]();if(this[_0xbe3b[63]][_0xbe3b[1461]]){this[_0xbe3b[1462]]=$(this[_0xbe3b[63]][_0xbe3b[1461]])[_0xbe3b[692]]();} ;} ,restoreScroll:function (){if( typeof this[_0xbe3b[998]]===_0xbe3b[14]&& typeof this[_0xbe3b[1213]]===_0xbe3b[14]){return ;} ;$(window)[_0xbe3b[692]](this[_0xbe3b[1213]]);this[_0xbe3b[261]][_0xbe3b[692]](this[_0xbe3b[1460]]);if(this[_0xbe3b[63]][_0xbe3b[1461]]){$(this[_0xbe3b[63]][_0xbe3b[1461]])[_0xbe3b[692]](this[_0xbe3b[1462]]);} ;} ,createSpaceElement:function (){var space=document[_0xbe3b[646]](_0xbe3b[101]);space[_0xbe3b[923]]=_0xbe3b[947];space[_0xbe3b[505]]=this[_0xbe3b[63]][_0xbe3b[506]];return space;} ,removeInlineTags:function (node){var tags=this[_0xbe3b[63]][_0xbe3b[671]];tags[_0xbe3b[16]](_0xbe3b[101]);if(node[_0xbe3b[306]]==_0xbe3b[155]){tags[_0xbe3b[16]](_0xbe3b[118]);} ;$(node)[_0xbe3b[327]](tags[_0xbe3b[241]](_0xbe3b[353]))[_0xbe3b[489]](_0xbe3b[1239])[_0xbe3b[331]]()[_0xbe3b[330]]();} ,replaceWithContents:function (node,removeInlineTags){var self=this;$(node)[_0xbe3b[278]](function (){if(removeInlineTags===true){self[_0xbe3b[62]][_0xbe3b[328]](this);} ;return $(this)[_0xbe3b[331]]();} );} ,replaceToTag:function (node,tag,removeInlineTags){var replacement;var self=this;$(node)[_0xbe3b[278]](function (){replacement=$(_0xbe3b[315]+tag+_0xbe3b[1337])[_0xbe3b[322]]($(this)[_0xbe3b[331]]());for(var i=0;i<this[_0xbe3b[893]][_0xbe3b[21]];i++){replacement[_0xbe3b[273]](this[_0xbe3b[893]][i][_0xbe3b[281]],this[_0xbe3b[893]][i][_0xbe3b[304]]);} ;if(removeInlineTags===true){self[_0xbe3b[62]][_0xbe3b[328]](replacement);} ;return replacement;} );return replacement;} ,isStartOfElement:function (){var block=this[_0xbe3b[56]][_0xbe3b[318]]();if(!block){return false;} ;var offset=this[_0xbe3b[33]][_0xbe3b[1463]](block);return (offset===0)?true:false;} ,isEndOfElement:function (){var block=this[_0xbe3b[56]][_0xbe3b[318]]();if(!block){return false;} ;var offset=this[_0xbe3b[33]][_0xbe3b[1463]](block);var text=$[_0xbe3b[386]]($(block)[_0xbe3b[760]]())[_0xbe3b[534]](/\n\r\n/g,_0xbe3b[255]);return (offset==text[_0xbe3b[21]])?true:false;} ,isBlock:function (block){block=block[0]||block;return block&&this[_0xbe3b[62]][_0xbe3b[504]](block[_0xbe3b[306]]);} ,isBlockTag:function (tag){if( typeof tag==_0xbe3b[14]){return false;} ;return this[_0xbe3b[238]][_0xbe3b[597]](tag);} ,isTag:function (current,tag){var element=$(current)[_0xbe3b[348]](tag);if(element[_0xbe3b[335]]()==1){return element[0];} ;return false;} ,isSelectAll:function (){return this[_0xbe3b[1464]];} ,enableSelectAll:function (){this[_0xbe3b[1464]]=true;} ,disableSelectAll:function (){this[_0xbe3b[1464]]=false;} ,isRedactorParent:function (el){if(!el){return false;} ;if($(el)[_0xbe3b[443]](_0xbe3b[1465])[_0xbe3b[21]]===0||$(el)[_0xbe3b[439]](_0xbe3b[392])){return false;} ;return el;} ,isCurrentOrParent:function (tagName){var parent=this[_0xbe3b[56]][_0xbe3b[894]]();var current=this[_0xbe3b[56]][_0xbe3b[867]]();if($[_0xbe3b[1339]](tagName)){var matched=0;$[_0xbe3b[20]](tagName,$[_0xbe3b[280]](function (i,s){if(this[_0xbe3b[62]][_0xbe3b[1466]](current,parent,s)){matched++;} ;} ,this));return (matched===0)?false:true;} else {return this[_0xbe3b[62]][_0xbe3b[1466]](current,parent,tagName);} ;} ,isCurrentOrParentOne:function (current,parent,tagName){return parent&&parent[_0xbe3b[306]]===tagName?parent:current&&current[_0xbe3b[306]]===tagName?current:false;} ,isOldIe:function (){return (this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])&&parseInt(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[1467]),10)<9)?true:false;} ,isLessIe10:function (){return (this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[259])&&parseInt(this[_0xbe3b[62]][_0xbe3b[260]](_0xbe3b[1467]),10)<10)?true:false;} ,isIe11:function (){return !!navigator[_0xbe3b[1453]][_0xbe3b[641]](/Trident\/7\./);} ,browser:function (browser){var ua=navigator[_0xbe3b[1453]][_0xbe3b[320]]();var match=/(opr)[\/]([\w.]+)/[_0xbe3b[1321]](ua)||/(chrome)[ \/]([\w.]+)/[_0xbe3b[1321]](ua)||/(webkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/[_0xbe3b[1321]](ua)||/(webkit)[ \/]([\w.]+)/[_0xbe3b[1321]](ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/[_0xbe3b[1321]](ua)||/(msie) ([\w.]+)/[_0xbe3b[1321]](ua)||ua[_0xbe3b[642]](_0xbe3b[1468])>=0&&/(rv)(?::| )([\w.]+)/[_0xbe3b[1321]](ua)||ua[_0xbe3b[642]](_0xbe3b[1469])<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/[_0xbe3b[1321]](ua)||[];if(browser==_0xbe3b[1467]){return match[2];} ;if(browser==_0xbe3b[1470]){return (match[1]==_0xbe3b[1471]||match[1]==_0xbe3b[1470]);} ;if(match[1]==_0xbe3b[1472]){return browser==_0xbe3b[259];} ;if(match[1]==_0xbe3b[1473]){return browser==_0xbe3b[1470];} ;return browser==match[1];} };} };Redactor[_0xbe3b[2]][_0xbe3b[22]][_0xbe3b[2]]=Redactor[_0xbe3b[2]];$[_0xbe3b[23]][_0xbe3b[5]][_0xbe3b[987]]=function (protocol,convertLinks,convertUrlLinks,convertImageLinks,convertVideoLinks,linkSize){var urlCheck=_0xbe3b[1474];var regex= new RegExp(urlCheck,_0xbe3b[555]);var rProtocol=/(https?|ftp):\/\//i;var urlImage=/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi;var childNodes=(this[_0xbe3b[261]]?this[_0xbe3b[261]][0]:this)[_0xbe3b[1475]],i=childNodes[_0xbe3b[21]];while(i--){var n=childNodes[i];if(n[_0xbe3b[759]]===3){var html=n[_0xbe3b[528]];if(convertVideoLinks&&html){var iframeStart=_0xbe3b[1476],iframeEnd=_0xbe3b[1477];if(html[_0xbe3b[641]](reUrlYoutube)){html=html[_0xbe3b[534]](reUrlYoutube,iframeStart+_0xbe3b[1478]+iframeEnd);$(n)[_0xbe3b[499]](html)[_0xbe3b[326]]();} else {if(html[_0xbe3b[641]](reUrlVimeo)){html=html[_0xbe3b[534]](reUrlVimeo,iframeStart+_0xbe3b[1479]+iframeEnd);$(n)[_0xbe3b[499]](html)[_0xbe3b[326]]();} ;} ;} ;if(convertImageLinks&&html&&html[_0xbe3b[641]](urlImage)){html=html[_0xbe3b[534]](urlImage,_0xbe3b[1480]);$(n)[_0xbe3b[499]](html)[_0xbe3b[326]]();return ;} ;if(html[_0xbe3b[10]](/\$/g)!=-1){html=html[_0xbe3b[534]](/\$/g,_0xbe3b[535]);} ;var matches=html[_0xbe3b[641]](regex);if(convertUrlLinks&&html&&matches){var len=matches[_0xbe3b[21]];for(var z=0;z<len;z++){if(matches[z][_0xbe3b[641]](/\.$/)!==null){matches[z]=matches[z][_0xbe3b[534]](/\.$/,_0xbe3b[255]);} ;var href=matches[z];var text=href;var space=_0xbe3b[255];if(href[_0xbe3b[641]](/\s$/)!==null){space=_0xbe3b[545];} ;var addProtocol=protocol+_0xbe3b[1027];if(href[_0xbe3b[641]](rProtocol)!==null){addProtocol=_0xbe3b[255];} ;if(text[_0xbe3b[21]]>linkSize){text=text[_0xbe3b[706]](0,linkSize)+_0xbe3b[1150];} ;text=text[_0xbe3b[534]](/&#36;/g,_0xbe3b[1288])[_0xbe3b[534]](/&/g,_0xbe3b[658])[_0xbe3b[534]](/</g,_0xbe3b[657])[_0xbe3b[534]](/>/g,_0xbe3b[656]);html=html[_0xbe3b[534]](href,_0xbe3b[751]+addProtocol+$[_0xbe3b[386]](href)+_0xbe3b[723]+$[_0xbe3b[386]](text)+_0xbe3b[724]+space);} ;$(n)[_0xbe3b[499]](html)[_0xbe3b[326]]();} ;} else {if(n[_0xbe3b[759]]===1&&!/^(a|button|textarea)$/i[_0xbe3b[597]](n[_0xbe3b[306]])){$[_0xbe3b[23]][_0xbe3b[5]][_0xbe3b[987]][_0xbe3b[6]](n,protocol,convertLinks,convertUrlLinks,convertImageLinks,convertVideoLinks,linkSize);} ;} ;} ;} ;} )(jQuery);
if (!RedactorPlugins) var RedactorPlugins = {};

(function($)
{
	RedactorPlugins.fontcolor = function()
	{
		return {
			init: function()
			{
				var colors = [
					'#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00',
					'#f2f2f2', '#7f7f7f', '#ddd9c3', '#c6d9f0', '#dbe5f1', '#f2dcdb', '#ebf1dd', '#e5e0ec', '#dbeef3', '#fdeada', '#fff2ca',
					'#d8d8d8', '#595959', '#c4bd97', '#8db3e2', '#b8cce4', '#e5b9b7', '#d7e3bc', '#ccc1d9', '#b7dde8', '#fbd5b5', '#ffe694',
					'#bfbfbf', '#3f3f3f', '#938953', '#548dd4', '#95b3d7', '#d99694', '#c3d69b', '#b2a2c7', '#b7dde8', '#fac08f', '#f2c314',
					'#a5a5a5', '#262626', '#494429', '#17365d', '#366092', '#953734', '#76923c', '#5f497a', '#92cddc', '#e36c09', '#c09100',
					'#7f7f7f', '#0c0c0c', '#1d1b10', '#0f243e', '#244061', '#632423', '#4f6128', '#3f3151', '#31859b',  '#974806', '#7f6000'
				];

				var buttons = ['fontcolor', 'backcolor'];

				for (var i = 0; i < 2; i++)
				{
					var name = buttons[i];

					var button = this.button.add(name, this.lang.get(name));
					var $dropdown = this.button.addDropdown(button);

					$dropdown.width(242);
					this.fontcolor.buildPicker($dropdown, name, colors);

				}
			},
			buildPicker: function($dropdown, name, colors)
			{
				var rule = (name == 'backcolor') ? 'background-color' : 'color';

				var len = colors.length;
				var self = this;
				var func = function(e)
				{
					e.preventDefault();
					self.fontcolor.set($(this).data('rule'), $(this).attr('rel'));
				};

				for (var z = 0; z < len; z++)
				{
					var color = colors[z];

					var $swatch = $('<a rel="' + color + '" data-rule="' + rule +'" href="#" style="float: left; font-size: 0; border: 2px solid #fff; padding: 0; margin: 0; width: 22px; height: 22px;"></a>');
					$swatch.css('background-color', color);
					$swatch.on('click', func);

					$dropdown.append($swatch);
				}

				var $elNone = $('<a href="#" style="display: block; clear: both; padding: 5px; font-size: 12px; line-height: 1;"></a>').html(this.lang.get('none'));
				$elNone.on('click', $.proxy(function(e)
				{
					e.preventDefault();
					this.fontcolor.remove(rule);

				}, this));

				$dropdown.append($elNone);
			},
			set: function(rule, type)
			{
				this.inline.format('span', 'style', rule + ': ' + type + ';');
			},
			remove: function(rule)
			{
				this.inline.removeStyleRule(rule);
			}
		};
	};
})(jQuery);
if (!RedactorPlugins) var RedactorPlugins = {};

(function($)
{
	RedactorPlugins.imagemanager = function()
	{
		return {
			init: function()
			{
				if (!this.opts.imageManagerJson) return;

				this.modal.addCallback('image', this.imagemanager.load);
			},
			load: function()
			{
				var $modal = this.modal.getModal();
				var enableUpload = this.opts.imageEnableUpload;

				this.modal.createTabber($modal);
				this.modal.addTab(1, 'External', 'active');
				if (enableUpload) {
					this.modal.addTab(2, 'Upload');
					this.modal.addTab(3, 'Choose');
				}

				$('#redactor-modal-image-droparea').addClass('redactor-tab redactor-tab2').hide();

				var $box1 = $('<div id="redactor-image-url-box" style="overflow: auto;" class="redactor-tab redactor-tab1">'
					+ '<br />'
					+ '<div class=""><p>Image URL:</p><input type="text" name="image-url" /></div>'
					+ '<br />'
					+ '<br />'
					+ '<div class="form-actions" style="float:right"><button id="image-url-insert" class="md-primary md-button md-pink-theme">Insert</button></div></div>');
				$modal.append($box1);

				var $box = $('<div id="redactor-image-manager-box" style="overflow: auto; height: 300px;" class="redactor-tab redactor-tab3">').hide();
				$modal.append($box);

				$('#redactor-image-url-box').find('.form-actions').find('#image-url-insert').click($.proxy(function () {
					var el = $('#redactor-image-url-box').find('input[name=image-url]');
					var imgUrl = el.val();
					if (imgUrl) {
						this.imagemanager.insertUrl(imgUrl);
					} else {
						el.focus();
					}
				}, this));

				if (enableUpload) {
					$.ajax({
					  dataType: "json",
					  cache: false,
					  url: this.opts.imageManagerJson,
					  success: $.proxy(function(data)
						{
							$.each(data, $.proxy(function(key, val)
							{
								// title
								var thumbtitle = '';
								if (typeof val.filename !== 'undefined') thumbtitle = val.filename;
								//val.image
								var img = $('<img src="/' + val.savepath + '" rel="' + '' + '" title="' + thumbtitle + '" style="width: 100px; height: 75px; cursor: pointer;" />');
								$('#redactor-image-manager-box').append(img);
								$(img).click($.proxy(this.imagemanager.insert, this));

							}, this));


						}, this)
					});
				}

			},
			insert: function(e)
			{
				this.image.insert('<img src="' + $(e.target).attr('src') + '" alt="' + $(e.target).attr('title') + '"/>');
			},
			insertUrl: function(url)
			{
				this.image.insert('<img src="' + url + '"/>');
			}
		};
	};
})(jQuery);
(function ($) {
$.Redactor.opts.langs['zh_tw'] = {
	html: 'HTML',
	video: '插入影片',
	image: '插入圖片',
	table: '表格',
	link: '連結',
	link_insert: '插入連結',
	link_edit: 'Edit link',
	unlink: '移除連結',
	formatting: '樣式',
	paragraph: '段落',
	quote: '引用',
	code: '原始碼',
	header1: '標題 1',
	header2: '標題 2',
	header3: '標題 3',
	header4: '標題 4',
	header5: '標題 5',
	bold:  '將文字變成粗體',
	italic: '將文字變成斜體',
	fontcolor: '選擇文字顏色',
	backcolor: '選擇文字底色',
	unorderedlist: '項目列表',
	orderedlist: '編號列表',
	outdent: '減少縮排',
	indent: '增加縮排',
	cancel: '取消',
	insert: '插入',
	save: '儲存',
	_delete: '刪除',
	insert_table: '插入表格',
	insert_row_above: '加入上方橫列',
	insert_row_below: '加入下方橫列',
	insert_column_left: '加入左方直欄',
	insert_column_right: '加入右方直欄',
	delete_column: '刪除整欄',
	delete_row: '刪除整列',
	delete_table: '刪除表格',
	rows: '橫列',
	columns: '直欄',
	add_head: '加入表格標題',
	delete_head: '刪除表格標題',
	title: '標題',
	image_position: '位置',
	none: '無',
	left: '靠左',
	right: '靠右',
	image_web_link: '連結',
	text: '內文',
	mailto: 'Email',
	web: '網址',
	video_html_code: '嵌入影片的原始碼',
	file: '插入文件',
	upload: '上傳',
	download: '下載',
	choose: '選擇',
	or_choose: '或選擇',
	drop_file_here: '將文件拖曳至此',
	align_left:	'將文字對齊至左側',
	align_center: '將文字置中',
	align_right: '將文字對齊至右側',
	align_justify: '對齊至兩側',
	horizontalrule: '插入水平線',
	fullscreen: '全銀幕',
	deleted: '刪除線',
	anchor: '錨點',
	link_new_tab: 'Open link in new tab',
	underline: 'Underline',
	alignment: 'Alignment',
	filename: 'Name (optional)',
	edit: 'Edit',
	center: 'Center'
};
})( jQuery );
(function ($) {
$.Redactor.opts.langs['zh_cn'] = {
	html: 'HTML代码',
	video: '视频',
	image: '图片',
	table: '表格',
	link: '链接',
	link_insert: '插入链接',
	link_edit: 'Edit link',
	unlink: '取消链接',
	formatting: '样式',
	paragraph: '段落',
	quote: '引用',
	code: '代码',
	header1: '一级标题',
	header2: '二级标题',
	header3: '三级标题',
	header4: '四级标题',
	header5: 'Header 5',
	bold:  '粗体',
	italic: '斜体',
	fontcolor: '字体颜色',
	backcolor: '背景颜色',
	unorderedlist: '项目编号',
	orderedlist: '数字编号',
	outdent: '减少缩进',
	indent: '增加缩进',
	cancel: '取消',
	insert: '插入',
	save: '保存',
	_delete: '删除',
	insert_table: '插入表格',
	insert_row_above: '在上方插入',
	insert_row_below: '在下方插入',
	insert_column_left: '在左侧插入',
	insert_column_right: '在右侧插入',
	delete_column: '删除整列',
	delete_row: '删除整行',
	delete_table: '删除表格',
	rows: '行',
	columns: '列',
	add_head: '添加标题',
	delete_head: '删除标题',
	title: '标题',
	image_position: '位置',
	none: '无',
	left: '左',
	right: '右',
	image_web_link: '图片网页链接',
	text: '文本',
	mailto: '邮箱',
	web: '网址',
	video_html_code: '视频嵌入代码',
	file: '文件',
	upload: '上传',
	download: '下载',
	choose: '选择',
	or_choose: '或选择',
	drop_file_here: '将文件拖拽至此区域',
	align_left:	'左对齐',
	align_center: '居中',
	align_right: '右对齐',
	align_justify: '两端对齐',
	horizontalrule: '水平线',
	fullscreen: '全屏',
	deleted: '删除',
	anchor: '锚点',
	link_new_tab: 'Open link in new tab',
	underline: 'Underline',
	alignment: 'Alignment',
	filename: 'Name (optional)',
	edit: 'Edit',
	center: 'Center'
};
})( jQuery );

(function (angular, window) {
  'use strict';

  var disqusModule = angular.module('ngDisqus', [ ]);

  /**
   * $disqus provider.
   */
  disqusModule.provider('$disqus', function() {
    var TYPE_EMBED = 'embed.js'; // general disqus embed script
    var TYPE_COUNT = 'count.js'; // used for count

    // Placeholder for the disqus shortname
    var shortname;
    var url_prefix = '';

    /**
     * @return {Element} dom element for script adding
     */
    function getScriptContainer() {
      return (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
    }

    /**
     * @return {String} disqus shortname
     */
    function getShortname() {
      return shortname || window.disqus_shortname;
    }

    /**
     * @param {String} shortname disqus shortname
     * @param {String} file file name to add.
     * @return {String} disqus embed src with embedded shortname
     */
    function getScriptSrc(shortname, file) {
      return '//' + shortname + '.disqus.com/' + file;
    }

    /**
     * Builds the script tag
     *
     * @param {String} src script source
     * @return {Element} script element
     */
    function buildScriptTag(src) {
      var script = document.createElement('script');

      // Configure the script tag
      script.type  = 'text/javascript';
      script.async = true;
      script.src   = src;

      return script;
    }

    /**
     * Searches the given element for defined script tag
     * if its already there then return true. Otherwise return false
     *
     * @param {Element} element element to search within
     * @param {String} scriptSrc script src
     * @return {Boolean} true if its there, false if its not
     */
    function hasScriptTagInPlace(container, scriptSrc) {
      var scripts   = container.getElementsByTagName('script'),
      script, i;

      for (i = 0; i < scripts.length; i += 1) {
        script = scripts[i];

        // Check if the name contains the given values
        // We need to check with indexOf because browsers replace // with their protocol
        if (~script.src.indexOf(scriptSrc)) {
          return true;
        }
      }

      return false;
    }

    /**
     * Writes disqus globals to window object.
     * Needed for the first load. Otherwise the disqus wouldn't know what thread comments to load.
     *
     * @param {String} id disqus identifier
     * @param {String} url disqus url
     * @param {String} shortname disqus shortname
     */
    function setGlobals(id, url, shortname) {
      window.disqus_identifier = id;
      window.disqus_url        = url;
      window.disqus_shortname  = shortname;
    }

    /**
     * Refreshes the count from DISQUSWIDGETS.
     */
    function getCount() {
      var widgets = window.DISQUSWIDGETS;
      if (widgets && angular.isFunction(widgets.getCount)) {
        widgets.getCount();
      }
    }

    /**
     * Trigger the reset comment call
     * @param  {String} $location location service
     * @param  {String} id Thread id
     */
    function resetCommit(url, id) {
      window.DISQUS.reset({
        reload: true,
        config : function() {
          this.page.identifier = id;
          this.page.url        = url;
        }
      });
    }

    /**
     * Adds disqus script tag to header by its type.
     * If the script tag already exists in header then wont continue.
     *
     * Adds script tags by their type.
     * Currently we are using two types:
     *  1. count.js
     *  2. embed.js
     *
     * @param {String} shortname disqus shortname
     * @param {String} type disqus script tag type
     */
    function addScriptTag(shortname, type) {
      var container = getScriptContainer(),
      scriptSrc = getScriptSrc(shortname, type);

      if (container) {
        // If it already has a script tag in place then lets not do anything
        // This might happen if the user changes the page faster than then disqus can load
        if (hasScriptTagInPlace(container, scriptSrc)) {
          return;
        }

        // Build the script tag and append it to container
        container.appendChild(buildScriptTag(scriptSrc));
      }
    }


    /**
     * @param {String} sname shortname
     */
    this.setShortname = function(sname) {
      shortname = sname;
    };

    this.setUrlPrefix = function(sprefix) {
      url_prefix = sprefix;
    };

    // Provider constructor
    this.$get = [ '$location', function($location) {

      function getUrl(url) {
        if (url) {
          url = url_prefix + url;
        } else {
          url = $location.absUrl();
        }
        return url;
      }

      /**
       * Resets the comment for thread.
       * If disqus was not defined then it will add disqus to script tags.
       * If disqus was initialized earlier then it will just use disqus api to reset it
       *
       * @param  {String} id required thread id
       */
      function commit(id, url) {
        var shortname = getShortname();
        url = getUrl(url);

        if (!angular.isDefined(shortname)) {
          throw new Error('No disqus shortname defined');
        } else if (!angular.isDefined(id)) {
          throw new Error('No disqus thread id defined');
        } else if (angular.isDefined(window.DISQUS)) {
          resetCommit(url, id);
        } else {
          setGlobals(id, url, shortname);
          addScriptTag(shortname, TYPE_EMBED);
        }
      }

      /**
       * Loads the comment script tag and initiates the comments.
       * Sets the globals according to the current page.
       *
       * If the embed disqus is not added to page then adds that.
       *
       * @param {String} id thread id
       */
      function loadCount(id, url) {
        var shortname = getShortname();
        url = getUrl(url);

        setGlobals(id, url, shortname);
        addScriptTag(getShortname(), TYPE_EMBED);
        addScriptTag(getShortname(), TYPE_COUNT);
        getCount();
      }

      // Expose public api
      return {
        commit       : commit,
        getShortname : getShortname,
        loadCount    : loadCount
      };
    }];
  });

  /**
   * Disqus thread comment directive.
   * Used to display the comments block for a thread.
   */
  disqusModule.directive('disqus', [ '$disqus', function($disqus) {

    return {
      restrict : 'AC',
      replace  : true,
      scope    : {
        id : '=disqus',
        url: '=disqusUrl'
      },
      template : '<div id="disqus_thread"></div>',
      link: function link(scope) {
        scope.$watchGroup(['id', 'url'], function(vals) {
          if (angular.isDefined(vals[0])) {
            $disqus.commit(vals[0], vals[1]);
          }
        });
      }
    };
  }]);

  /**
   * Disqus comment count directive.
   * Just wraps `disqus-identifier` to load the disqus comments count script tag on page
   */
  disqusModule.directive('disqusCount', [ '$disqus', function($disqus) {
    return {
      restrict : 'AC',
      replace  : true,
      scope    : {
        id : '=disqusCount',
        url: '=disqusUrl'
      },
      template : '<span class="disqus-comment-count" data-disqus-identifier="{{id}}">Comments</span>',
      link     : function(scope, elem, attr) {
        scope.$watchGroup(['id', 'url'], function(vals) {
          if (angular.isDefined(vals[0])) {
            $disqus.loadCount(vals[0], vals[1]);
          }
        });
      }
    };
  }]);

})(angular, this);

/*
    TimelineJS - ver. 2014-11-26-21-25-11 - 2014-11-26
    Copyright (c) 2012-2013 Northwestern University
    a project of the Northwestern University Knight Lab, originally created by Zach Wise
    https://github.com/NUKnightLab/TimelineJS
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
    If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
LazyLoad=function(doc){var env,head,pending={},pollCount=0,queue={css:[],js:[]},styleSheets=doc.styleSheets;function createNode(name,attrs){var node=doc.createElement(name),attr;for(attr in attrs){if(attrs.hasOwnProperty(attr)){node.setAttribute(attr,attrs[attr])}}return node}function finish(type){var p=pending[type],callback,urls;if(p){callback=p.callback;urls=p.urls;urls.shift();pollCount=0;if(!urls.length){callback&&callback.call(p.context,p.obj);pending[type]=null;queue[type].length&&load(type)}}}function getEnv(){var ua=navigator.userAgent;env={async:doc.createElement("script").async===true};(env.webkit=/AppleWebKit\//.test(ua))||(env.ie=/MSIE/.test(ua))||(env.opera=/Opera/.test(ua))||(env.gecko=/Gecko\//.test(ua))||(env.unknown=true)}function load(type,urls,callback,obj,context){var _finish=function(){finish(type)},isCSS=type==="css",nodes=[],i,len,node,p,pendingUrls,url;env||getEnv();if(urls){urls=typeof urls==="string"?[urls]:urls.concat();if(isCSS||env.async||env.gecko||env.opera){queue[type].push({urls:urls,callback:callback,obj:obj,context:context})}else{for(i=0,len=urls.length;i<len;++i){queue[type].push({urls:[urls[i]],callback:i===len-1?callback:null,obj:obj,context:context})}}}if(pending[type]||!(p=pending[type]=queue[type].shift())){return}head||(head=doc.head||doc.getElementsByTagName("head")[0]);pendingUrls=p.urls;for(i=0,len=pendingUrls.length;i<len;++i){url=pendingUrls[i];if(isCSS){node=env.gecko?createNode("style"):createNode("link",{href:url,rel:"stylesheet"})}else{node=createNode("script",{src:url});node.async=false}node.className="lazyload";node.setAttribute("charset","utf-8");if(env.ie&&!isCSS){node.onreadystatechange=function(){if(/loaded|complete/.test(node.readyState)){node.onreadystatechange=null;_finish()}}}else if(isCSS&&(env.gecko||env.webkit)){if(env.webkit){p.urls[i]=node.href;pollWebKit()}else{node.innerHTML='@import "'+url+'";';pollGecko(node)}}else{node.onload=node.onerror=_finish}nodes.push(node)}for(i=0,len=nodes.length;i<len;++i){head.appendChild(nodes[i])}}function pollGecko(node){var hasRules;try{hasRules=!!node.sheet.cssRules}catch(ex){pollCount+=1;if(pollCount<200){setTimeout(function(){pollGecko(node)},50)}else{hasRules&&finish("css")}return}finish("css")}function pollWebKit(){var css=pending.css,i;if(css){i=styleSheets.length;while(--i>=0){if(styleSheets[i].href===css.urls[0]){finish("css");break}}pollCount+=1;if(css){if(pollCount<200){setTimeout(pollWebKit,50)}else{finish("css")}}}}return{css:function(urls,callback,obj,context){load("css",urls,callback,obj,context)},js:function(urls,callback,obj,context){load("js",urls,callback,obj,context)}}}(this.document);LoadLib=function(doc){var loaded=[];function isLoaded(url){var i=0,has_loaded=false;for(i=0;i<loaded.length;i++){if(loaded[i]==url){has_loaded=true}}if(has_loaded){return true}else{loaded.push(url);return false}}return{css:function(urls,callback,obj,context){if(!isLoaded(urls)){LazyLoad.css(urls,callback,obj,context)}},js:function(urls,callback,obj,context){if(!isLoaded(urls)){LazyLoad.js(urls,callback,obj,context)}}}}(this.document);var WebFontConfig;if(typeof embed_path=="undefined"){var _tmp_script_path=getEmbedScriptPath("storyjs-embed.js");var embed_path=_tmp_script_path.substr(0,_tmp_script_path.lastIndexOf("js/"))}function getEmbedScriptPath(scriptname){var scriptTags=document.getElementsByTagName("script"),script_path="",script_path_end="";for(var i=0;i<scriptTags.length;i++){if(scriptTags[i].src.match(scriptname)){script_path=scriptTags[i].src}}if(script_path!=""){script_path_end="/"}return script_path.split("?")[0].split("/").slice(0,-1).join("/")+script_path_end}(function(){if(typeof url_config=="object"){createStoryJS(url_config)}else if(typeof timeline_config=="object"){createStoryJS(timeline_config)}else if(typeof storyjs_config=="object"){createStoryJS(storyjs_config)}else if(typeof config=="object"){createStoryJS(config)}else{}})();function createStoryJS(c,src){var storyjs_embedjs,t,te,x,isCDN=false,js_version="2.24",jquery_version_required="1.7.1",jquery_version="",ready={timeout:"",checks:0,finished:false,js:false,css:false,jquery:false,has_jquery:false,language:false,font:{css:false,js:false}},path={base:embed_path,css:embed_path+"css/",js:embed_path+"js/",locale:embed_path+"js/locale/",jquery:"//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",font:{google:false,css:embed_path+"css/themes/font/",js:"//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"}},storyjs_e_config={version:js_version,debug:false,type:"timeline",id:"storyjs",embed_id:"timeline-embed",embed:true,width:"100%",height:"100%",source:"https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html",lang:"en",font:"default",css:path.css+"timeline.css?"+js_version,js:"",api_keys:{google:"",flickr:"",twitter:""},gmap_key:""},font_presets=[{name:"Merriweather-NewsCycle",google:["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"]},{name:"NewsCycle-Merriweather",google:["News+Cycle:400,700:latin","Merriweather:300,400,700:latin"]},{name:"PoiretOne-Molengo",google:["Poiret+One::latin","Molengo::latin"]},{name:"Arvo-PTSans",google:["Arvo:400,700,400italic:latin","PT+Sans:400,700,400italic:latin"]},{name:"PTSerif-PTSans",google:["PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"PT",google:["PT+Sans+Narrow:400,700:latin","PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"DroidSerif-DroidSans",google:["Droid+Sans:400,700:latin","Droid+Serif:400,700,400italic:latin"]},{name:"Lekton-Molengo",google:["Lekton:400,700,400italic:latin","Molengo::latin"]},{name:"NixieOne-Ledger",google:["Nixie+One::latin","Ledger::latin"]},{name:"AbrilFatface-Average",google:["Average::latin","Abril+Fatface::latin"]},{name:"PlayfairDisplay-Muli",google:["Playfair+Display:400,400italic:latin","Muli:300,400,300italic,400italic:latin"]},{name:"Rancho-Gudea",google:["Rancho::latin","Gudea:400,700,400italic:latin"]},{name:"Bevan-PotanoSans",google:["Bevan::latin","Pontano+Sans::latin"]},{name:"BreeSerif-OpenSans",google:["Bree+Serif::latin","Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin"]},{name:"SansitaOne-Kameron",google:["Sansita+One::latin","Kameron:400,700:latin"]},{name:"Lora-Istok",google:["Lora:400,700,400italic,700italic:latin","Istok+Web:400,700,400italic,700italic:latin"]},{name:"Pacifico-Arimo",google:["Pacifico::latin","Arimo:400,700,400italic,700italic:latin"]}];if(typeof c=="object"){for(x in c){if(Object.prototype.hasOwnProperty.call(c,x)){storyjs_e_config[x]=c[x]}}}if(typeof src!="undefined"){storyjs_e_config.source=src}if(typeof url_config=="object"){isCDN=true;if(storyjs_e_config.source.match("docs.google.com")||storyjs_e_config.source.match("json")||storyjs_e_config.source.match("storify")){}else{storyjs_e_config.source="https://docs.google.com/spreadsheet/pub?key="+storyjs_e_config.source+"&output=html"}}if(storyjs_e_config.js.match("locale")){storyjs_e_config.lang=storyjs_e_config.js.split("locale/")[1].replace(".js","");storyjs_e_config.js=path.js+"timeline-min.js?"+js_version}if(storyjs_e_config.js.match("/")){}else{storyjs_e_config.css=path.css+storyjs_e_config.type+".css?"+js_version;storyjs_e_config.js=path.js+storyjs_e_config.type;if(storyjs_e_config.debug){storyjs_e_config.js+=".js?"+js_version}else{storyjs_e_config.js+="-min.js?"+js_version}storyjs_e_config.id="storyjs-"+storyjs_e_config.type}if(storyjs_e_config.lang.match("/")){path.locale=storyjs_e_config.lang}else{path.locale=path.locale+storyjs_e_config.lang+".js?"+js_version}createEmbedDiv();LoadLib.css(storyjs_e_config.css,onloaded_css);if(storyjs_e_config.font=="default"){ready.font.js=true;ready.font.css=true}else{var fn;if(storyjs_e_config.font.match("/")){fn=storyjs_e_config.font.split(".css")[0].split("/");path.font.name=fn[fn.length-1];path.font.css=storyjs_e_config.font}else{path.font.name=storyjs_e_config.font;path.font.css=path.font.css+storyjs_e_config.font+".css?"+js_version}LoadLib.css(path.font.css,onloaded_font_css);for(var i=0;i<font_presets.length;i++){if(path.font.name==font_presets[i].name){path.font.google=true;WebFontConfig={google:{families:font_presets[i].google}}}}if(path.font.google){LoadLib.js(path.font.js,onloaded_font_js)}else{ready.font.js=true}}try{ready.has_jquery=jQuery;ready.has_jquery=true;if(ready.has_jquery){var jquery_version_array=jQuery.fn.jquery.split(".");var jquery_version_required_array=jquery_version_required.split(".");ready.jquery=true;for(i=0;i<2;i++){var have=jquery_version_array[i],need=parseFloat(jquery_version_required_array[i]);if(have!=need){ready.jquery=have>need;break}}}}catch(err){ready.jquery=false}if(!ready.jquery){LoadLib.js(path.jquery,onloaded_jquery)}else{onloaded_jquery()}function onloaded_jquery(){LoadLib.js(storyjs_e_config.js,onloaded_js)}function onloaded_js(){ready.js=true;if(storyjs_e_config.lang!="en"){LazyLoad.js(path.locale,onloaded_language)}else{ready.language=true}onloaded_check()}function onloaded_language(){ready.language=true;onloaded_check()}function onloaded_css(){ready.css=true;onloaded_check()}function onloaded_font_css(){ready.font.css=true;onloaded_check()}function onloaded_font_js(){ready.font.js=true;onloaded_check()}function onloaded_check(){if(ready.checks>40){return;alert("Error Loading Files")}else{ready.checks++;if(ready.js&&ready.css&&ready.font.css&&ready.font.js&&ready.language){if(!ready.finished){ready.finished=true;buildEmbed()}}else{ready.timeout=setTimeout("onloaded_check_again();",250)}}}this.onloaded_check_again=function(){onloaded_check()};function createEmbedDiv(){var embed_classname="storyjs-embed";t=document.createElement("div");if(storyjs_e_config.embed_id!=""){te=document.getElementById(storyjs_e_config.embed_id)}else{te=document.getElementById("timeline-embed")}te.appendChild(t);t.setAttribute("id",storyjs_e_config.id);if(storyjs_e_config.width.toString().match("%")){te.style.width=storyjs_e_config.width.split("%")[0]+"%"}else{storyjs_e_config.width=storyjs_e_config.width-2;te.style.width=storyjs_e_config.width+"px"}if(storyjs_e_config.height.toString().match("%")){te.style.height=storyjs_e_config.height;embed_classname+=" full-embed";te.style.height=storyjs_e_config.height.split("%")[0]+"%"}else if(storyjs_e_config.width.toString().match("%")){embed_classname+=" full-embed";storyjs_e_config.height=storyjs_e_config.height-16;te.style.height=storyjs_e_config.height+"px"}else{embed_classname+=" sized-embed";storyjs_e_config.height=storyjs_e_config.height-16;te.style.height=storyjs_e_config.height+"px"}te.setAttribute("class",embed_classname);te.setAttribute("className",embed_classname);t.style.position="relative"}function buildEmbed(){VMM.debug=storyjs_e_config.debug;storyjs_embedjs=new VMM.Timeline(storyjs_e_config.id);storyjs_embedjs.init(storyjs_e_config);if(isCDN){VMM.bindEvent(global,onHeadline,"HEADLINE")}}}
/*globals define, jQuery */
/*jslint vars:true */

/**
 * @license angular-bootstrap-datetimepicker  version: 0.3.7
 * (c) 2013-2014 Knight Rider Consulting, Inc. http://www.knightrider.com
 * License: MIT
 */

/**
 *
 *    @author        Dale "Ducky" Lotts
 *    @since        2013-Jul-8
 */

(function (factory) {
  'use strict';
  /* istanbul ignore if */
  if (typeof define === 'function'  && /* istanbul ignore next */ define.amd) {
    define(['angular', 'moment'], factory); // AMD
  } else {
    factory(window.angular, window.moment); // Browser global
  }
}(function (angular, moment) {
  'use strict';
  angular.module('ui.bootstrap.datetimepicker', [])
    .constant('dateTimePickerConfig', {
      dropdownSelector: null,
      minuteStep: 5,
      minView: 'minute',
      startView: 'day'
    })
    .directive('datetimepicker', ['$log', 'dateTimePickerConfig', function datetimepickerDirective($log, defaultConfig) {

      function DateObject() {

        this.dateValue = new Date().getTime();
        this.selectable = true;

        var validProperties = ['dateValue', 'display', 'active', 'selectable', 'past', 'future'];

        for (var prop in arguments[0]) {
          /* istanbul ignore else */
          //noinspection JSUnfilteredForInLoop
          if (validProperties.indexOf(prop) >= 0) {
            //noinspection JSUnfilteredForInLoop
            this[prop] = arguments[0][prop];
          }
        }
      }

      var validateConfiguration = function validateConfiguration(configuration) {
        var validOptions = ['startView', 'minView', 'minuteStep', 'dropdownSelector'];

        for (var prop in configuration) {
          //noinspection JSUnfilteredForInLoop
          if (validOptions.indexOf(prop) < 0) {
            throw ('invalid option: ' + prop);
          }
        }

        // Order of the elements in the validViews array is significant.
        var validViews = ['minute', 'hour', 'day', 'month', 'year'];

        if (validViews.indexOf(configuration.startView) < 0) {
          throw ('invalid startView value: ' + configuration.startView);
        }

        if (validViews.indexOf(configuration.minView) < 0) {
          throw ('invalid minView value: ' + configuration.minView);
        }

        if (validViews.indexOf(configuration.minView) > validViews.indexOf(configuration.startView)) {
          throw ('startView must be greater than minView');
        }

        if (!angular.isNumber(configuration.minuteStep)) {
          throw ('minuteStep must be numeric');
        }
        if (configuration.minuteStep <= 0 || configuration.minuteStep >= 60) {
          throw ('minuteStep must be greater than zero and less than 60');
        }
        if (configuration.dropdownSelector !== null && !angular.isString(configuration.dropdownSelector)) {
          throw ('dropdownSelector must be a string');
        }

        /* istanbul ignore next */
        if (configuration.dropdownSelector !== null && ((typeof jQuery === 'undefined') || (typeof jQuery().dropdown !== 'function'))) {
          $log.error('Please DO NOT specify the dropdownSelector option unless you are using jQuery AND Bootstrap.js. ' +
          'Please include jQuery AND Bootstrap.js, or write code to close the dropdown in the on-set-time callback. \n\n' +
          'The dropdownSelector configuration option is being removed because it will not function properly.');
          delete configuration.dropdownSelector;
        }
      };

      return {
        restrict: 'E',
        require: 'ngModel',
        template: '<div class="datetimepicker table-responsive">' +
        '<table class="table table-striped">' +
        '   <thead>' +
        '       <tr>' +
        '           <th class="left" data-ng-click="changeView(data.currentView, data.leftDate, $event)" data-ng-show="data.leftDate.selectable"><i class="fa fa-arrow-left"/></th>' +
        '           <th class="switch" colspan="5" data-ng-show="data.previousViewDate.selectable" data-ng-click="changeView(data.previousView, data.previousViewDate, $event)">{{ data.previousViewDate.display }}</th>' +
        '           <th class="right" data-ng-click="changeView(data.currentView, data.rightDate, $event)" data-ng-show="data.rightDate.selectable"><i class="fa fa-arrow-right"/></th>' +
        '       </tr>' +
        '       <tr>' +
        '           <th class="dow" data-ng-repeat="day in data.dayNames" >{{ day }}</th>' +
        '       </tr>' +
        '   </thead>' +
        '   <tbody>' +
        '       <tr data-ng-if="data.currentView !== \'day\'" >' +
        '           <td colspan="7" >' +
        '              <span    class="{{ data.currentView }}" ' +
        '                       data-ng-repeat="dateObject in data.dates"  ' +
        '                       data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" ' +
        '                       data-ng-click="changeView(data.nextView, dateObject, $event)">{{ dateObject.display }}</span> ' +
        '           </td>' +
        '       </tr>' +
        '       <tr data-ng-if="data.currentView === \'day\'" data-ng-repeat="week in data.weeks">' +
        '           <td data-ng-repeat="dateObject in week.dates" ' +
        '               data-ng-click="changeView(data.nextView, dateObject, $event)"' +
        '               class="day" ' +
        '               data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" >{{ dateObject.display }}</td>' +
        '       </tr>' +
        '   </tbody>' +
        '</table></div>',
        scope: {
          onSetTime: '&',
          beforeRender: '&'
        },
        replace: true,
        link: function link(scope, element, attrs, ngModelController) {

          var directiveConfig = {};

          if (attrs.datetimepickerConfig) {
            directiveConfig = scope.$parent.$eval(attrs.datetimepickerConfig);
          }

          var configuration = {};

          angular.extend(configuration, defaultConfig, directiveConfig);

          validateConfiguration(configuration);

          var startOfDecade = function startOfDecade(unixDate) {
            var startYear = (parseInt(moment.utc(unixDate).year() / 10, 10) * 10);
            return moment.utc(unixDate).year(startYear).startOf('year');
          };

          var dataFactory = {
            year: function year(unixDate) {
              var selectedDate = moment.utc(unixDate).startOf('year');
              // View starts one year before the decade starts and ends one year after the decade ends
              // i.e. passing in a date of 1/1/2013 will give a range of 2009 to 2020
              // Truncate the last digit from the current year and subtract 1 to get the start of the decade
              var startDecade = (parseInt(selectedDate.year() / 10, 10) * 10);
              var startDate = moment.utc(startOfDecade(unixDate)).subtract(1, 'year').startOf('year');

              var activeYear = ngModelController.$modelValue ? moment(ngModelController.$modelValue).year() : 0;

              var result = {
                'currentView': 'year',
                'nextView': configuration.minView === 'year' ? 'setTime' : 'month',
                'previousViewDate': new DateObject({dateValue: null, display: startDecade + '-' + (startDecade + 9)}),
                'leftDate': new DateObject({dateValue: moment.utc(startDate).subtract(9, 'year').valueOf()}),
                'rightDate': new DateObject({dateValue: moment.utc(startDate).add(11, 'year').valueOf()}),
                'dates': []
              };

              for (var i = 0; i < 12; i += 1) {
                var yearMoment = moment.utc(startDate).add(i, 'years');
                var dateValue = {
                  'dateValue': yearMoment.valueOf(),
                  'display': yearMoment.format('YYYY'),
                  'past': yearMoment.year() < startDecade,
                  'future': yearMoment.year() > startDecade + 9,
                  'active': yearMoment.year() === activeYear
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            month: function month(unixDate) {

              var startDate = moment.utc(unixDate).startOf('year');
              var previousViewDate = startOfDecade(unixDate);
              var activeDate = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MMM') : 0;

              var result = {
                'previousView': 'year',
                'currentView': 'month',
                'nextView': configuration.minView === 'month' ? 'setTime' : 'day',
                'previousViewDate': new DateObject({
                  dateValue: previousViewDate.valueOf(),
                  display: startDate.format('YYYY')
                }),
                'leftDate': new DateObject({dateValue: moment.utc(startDate).subtract(1, 'year').valueOf()}),
                'rightDate': new DateObject({dateValue: moment.utc(startDate).add(1, 'year').valueOf()}),
                'dates': []
              };

              for (var i = 0; i < 12; i += 1) {
                var monthMoment = moment.utc(startDate).add(i, 'months');
                var dateValue = {
                  'dateValue': monthMoment.valueOf(),
                  'display': monthMoment.format('MMM'),
                  'active': monthMoment.format('YYYY-MMM') === activeDate
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            day: function day(unixDate) {

              var selectedDate = moment.utc(unixDate);
              var startOfMonth = moment.utc(selectedDate).startOf('month');
              var previousViewDate = moment.utc(selectedDate).startOf('year');
              var endOfMonth = moment.utc(selectedDate).endOf('month');

              var startDate = moment.utc(startOfMonth).subtract(Math.abs(startOfMonth.weekday()), 'days');

              var activeDate = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MMM-DD') : '';

              var result = {
                'previousView': 'month',
                'currentView': 'day',
                'nextView': configuration.minView === 'day' ? 'setTime' : 'hour',
                'previousViewDate': new DateObject({
                  dateValue: previousViewDate.valueOf(),
                  display: startOfMonth.format('YYYY-MMM')
                }),
                'leftDate': new DateObject({dateValue: moment.utc(startOfMonth).subtract(1, 'months').valueOf()}),
                'rightDate': new DateObject({dateValue: moment.utc(startOfMonth).add(1, 'months').valueOf()}),
                'dayNames': [],
                'weeks': []
              };


              for (var dayNumber = 0; dayNumber < 7; dayNumber += 1) {
                result.dayNames.push(moment.utc().weekday(dayNumber).format('dd'));
              }

              for (var i = 0; i < 6; i += 1) {
                var week = {dates: []};
                for (var j = 0; j < 7; j += 1) {
                  var monthMoment = moment.utc(startDate).add((i * 7) + j, 'days');
                  var dateValue = {
                    'dateValue': monthMoment.valueOf(),
                    'display': monthMoment.format('D'),
                    'active': monthMoment.format('YYYY-MMM-DD') === activeDate,
                    'past': monthMoment.isBefore(startOfMonth),
                    'future': monthMoment.isAfter(endOfMonth)
                  };
                  week.dates.push(new DateObject(dateValue));
                }
                result.weeks.push(week);
              }

              return result;
            },

            hour: function hour(unixDate) {
              var selectedDate = moment.utc(unixDate).startOf('day');
              var previousViewDate = moment.utc(selectedDate).startOf('month');

              var activeFormat = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MM-DD H') : '';

              var result = {
                'previousView': 'day',
                'currentView': 'hour',
                'nextView': configuration.minView === 'hour' ? 'setTime' : 'minute',
                'previousViewDate': new DateObject({
                  dateValue: previousViewDate.valueOf(),
                  display: selectedDate.format('ll')
                }),
                'leftDate': new DateObject({dateValue: moment.utc(selectedDate).subtract(1, 'days').valueOf()}),
                'rightDate': new DateObject({dateValue: moment.utc(selectedDate).add(1, 'days').valueOf()}),
                'dates': []
              };

              for (var i = 0; i < 24; i += 1) {
                var hourMoment = moment.utc(selectedDate).add(i, 'hours');
                var dateValue = {
                  'dateValue': hourMoment.valueOf(),
                  'display': hourMoment.format('LT'),
                  'active': hourMoment.format('YYYY-MM-DD H') === activeFormat
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            minute: function minute(unixDate) {
              var selectedDate = moment.utc(unixDate).startOf('hour');
              var previousViewDate = moment.utc(selectedDate).startOf('day');
              var activeFormat = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MM-DD H:mm') : '';

              var result = {
                'previousView': 'hour',
                'currentView': 'minute',
                'nextView': 'setTime',
                'previousViewDate': new DateObject({
                  dateValue: previousViewDate.valueOf(),
                  display: selectedDate.format('lll')
                }),
                'leftDate': new DateObject({dateValue: moment.utc(selectedDate).subtract(1, 'hours').valueOf()}),
                'rightDate': new DateObject({dateValue: moment.utc(selectedDate).add(1, 'hours').valueOf()}),
                'dates': []
              };

              var limit = 60 / configuration.minuteStep;

              for (var i = 0; i < limit; i += 1) {
                var hourMoment = moment.utc(selectedDate).add(i * configuration.minuteStep, 'minute');
                var dateValue = {
                  'dateValue': hourMoment.valueOf(),
                  'display': hourMoment.format('LT'),
                  'active': hourMoment.format('YYYY-MM-DD H:mm') === activeFormat
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            setTime: function setTime(unixDate) {
              var tempDate = new Date(unixDate);
              var newDate = new Date(tempDate.getTime() + (tempDate.getTimezoneOffset() * 60000));

              var oldDate = ngModelController.$modelValue;
              ngModelController.$setViewValue(newDate);

              if (configuration.dropdownSelector) {
                jQuery(configuration.dropdownSelector).dropdown('toggle');
              }

              scope.onSetTime({newDate: newDate, oldDate: oldDate});

              return dataFactory[configuration.startView](unixDate);
            }
          };

          var getUTCTime = function getUTCTime(modelValue) {
            var tempDate = (modelValue ? moment(modelValue).toDate() : new Date());
            return tempDate.getTime() - (tempDate.getTimezoneOffset() * 60000);
          };

          scope.changeView = function changeView(viewName, dateObject, event) {
            if (event) {
              event.stopPropagation();
              event.preventDefault();
            }

            if (viewName && (dateObject.dateValue > -Infinity) && dateObject.selectable && dataFactory[viewName]) {
              var result = dataFactory[viewName](dateObject.dateValue);

              var weekDates = [];
              if (result.weeks) {
                for (var i = 0; i < result.weeks.length; i += 1) {
                  var week = result.weeks[i];
                  for (var j = 0; j < week.dates.length; j += 1) {
                    var weekDate = week.dates[j];
                    weekDates.push(weekDate);
                  }
                }
              }

              scope.beforeRender({
                $view: result.currentView,
                $dates: result.dates || weekDates,
                $leftDate: result.leftDate,
                $upDate: result.previousViewDate,
                $rightDate: result.rightDate
              });

              scope.data = result;
            }
          };

          ngModelController.$render = function $render() {
            scope.changeView(configuration.startView, new DateObject({dateValue: getUTCTime(ngModelController.$viewValue)}));
          };
        }
      };
    }]);
}));

"use strict";

/**
 * public/angular-prpr.js
 * Rin prpr!
 *
 * rin-pr project angular app
 * WE LOVE ACG
 *
 * */

var disqus_shortname = 'bangumi';

var rin = angular.module('rin', [
    'ngProgress',
    'ui.router',
    'pascalprecht.translate',
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'angular-md5',
    'angularMoment',
    'angular-redactor',
    'ngDisqus',
    'ui.bootstrap.datetimepicker'
])
    .run([
        '$rootScope',
        '$state',
        '$stateParams',
        '$translate',
        '$http',
        '$q',
        'amMoment',
        '$mdDialog',
        '$translateCookieStorage',
        'ngProgress',
        'redactorOptions',
        function (
            $rootScope,
            $state,
            $stateParams,
            $translate,
            $http,
            $q,
            amMoment,
            $mdDialog,
            $translateCookieStorage,
            ngProgress,
            redactorOptions
        ) {
            ngProgress.start();
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.switchLang = function(lang, notSetCookie) {
                $rootScope.showAdditionLang = false;
                $rootScope.lang = lang;
                $translate.use(lang);
                if (!notSetCookie) {
                    $translateCookieStorage.set('locale', lang);
                }
                amMoment.changeLocale(lang);
                //moment.locale(newLocale);
                redactorOptions.lang = lang;
            };
            $rootScope.showTorrentDetailsDialog = function (ev, torrent) {
                $mdDialog.show({
                    controller: 'TorrentDetailsCtrl',
                    templateUrl: 'templates/torrent-details.html',
                    targetEvent: ev,
                    locals: { torrent: torrent }
                });
            };
            $rootScope.editTorrent = function (ev, torrent, user) {
                $mdDialog.show({
                    controller: 'TorrentPublishCtrl',
                    templateUrl: 'templates/torrent-publish.html',
                    targetEvent: ev,
                    locals: { torrent: torrent, user: user }
                }).finally(function() {
                    $('.redactor-toolbar-tooltip').remove();
                });
            };
            $rootScope.removeTorrent = function (ev, torrent, callback) {
                ev.preventDefault();
                if (confirm('Delete this torrent?')) {
                    $http.post('/api/torrent/remove', {_id: torrent._id}, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                callback(null);
                            } else {
                                callback(true);
                            }
                        })
                        .error(function () {
                            callback(true);
                        });
                }
                ev.stopPropagation();
            };
            $rootScope.fetchTorrentUserAndTeam = function (lt, callback) {
                var user_ids = [], team_ids = [];
                for (var i = 0; i < lt.length; i++) {
                    if (lt[i].uploader_id) {
                        user_ids.push(lt[i].uploader_id);
                    }
                    if (lt[i].team_id) {
                        team_ids.push(lt[i].team_id);
                    }
                }
                var queries = [], qName = [];
                if (user_ids.length > 0) {
                    qName.push('user');
                    queries.push(
                        $http.post('/api/user/fetch', {_ids: user_ids}, { responseType: 'json' })
                    );
                }
                if (team_ids.length > 0) {
                    qName.push('team');
                    queries.push(
                        $http.post('/api/team/fetch', {_ids: team_ids}, { responseType: 'json' })
                    );

                }
                if (queries.length > 0) {
                    $q.all(queries).then(function(dataArray) {
                        for (var k = 0; k < dataArray.length; k++) {
                            var data = dataArray[k].data;
                            for (var i = 0; i < lt.length; i++) {
                                for (var j = 0; j < data.length; j++) {
                                    if (qName[k] == 'user') {
                                        if (lt[i].uploader_id == data[j]._id) {
                                            lt[i].uploader = data[j];
                                            break;
                                        }
                                    } else if (qName[k] == 'team') {
                                        if (lt[i].team_id == data[j]._id) {
                                            lt[i].team = data[j];
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (callback) callback();
                    });
                } else {
                    if (callback) callback();
                }
            };
            var cookieLangConfig = $translateCookieStorage.get('locale');
            if (!cookieLangConfig) {
                cookieLangConfig = 'zh_tw';
            }
            $rootScope.switchLang(cookieLangConfig, true);
        }
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        '$locationProvider',
        '$translateProvider',
        '$compileProvider',
        'redactorOptions',
        '$disqusProvider',
        function (
            $stateProvider,
            $urlRouterProvider,
            $httpProvider,
            $locationProvider,
            $translateProvider,
            $compileProvider,
            redactorOptions,
            $disqusProvider
        ) {

            $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/',
                suffix: '.json'
            });

            $locationProvider.hashPrefix('!');

            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|magnet):/);

            $urlRouterProvider
                // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                // Here we are just setting up some convenience urls.
                // .when('/c?id', '/contacts/:id')
                // .when('/user/:id', '/contacts/:id')
                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise('/');

            $stateProvider
                .state("root", {
                    url: "/",
                    templateUrl: 'templates/index-unified.html',
                    controller: 'UnifiedIndexCtrl'
                })
                .state("tag", {
                    url: "/tag/:tag_id",
                    templateUrl: 'templates/tag-search.html',
                    controller: 'TagSearchCtrl'
                })
                .state("bangumi", {
                    url: "/bangumi/list",
                    templateUrl: 'templates/bangumi-list.html',
                    controller: 'BangumiListCtrl'
                })
                .state("search", {
                    url: "/search/:tag_id",
                    templateUrl: 'templates/search-filter.html',
                    controller: 'SearchFilterCtrl'
                })
                .state("user-reset-password", {
                    url: "/user/reset-password/:reset_key",
                    templateUrl: 'templates/index-blank.html',
                    controller: 'UserResetCtrl'
                })
                .state("help", {
                    url: "/help",
                    templateUrl: 'templates/page-help.html',
                    controller: 'PageHelpCtrl'
                });

            $httpProvider.defaults.transformRequest = function(data) {
                if (data === undefined)
                  return data;

                var needMultipart = false;
                angular.forEach(data, function(value, key) {
                  if (value instanceof FileList) {
                    needMultipart = true;
                  }
                });
                if (!needMultipart) {
                  //transform to JSON
                  return JSON.stringify(data);
                }

                var fd = new FormData();
                angular.forEach(data, function(value, key) {
                  if (value instanceof FileList) {
                    if (value.length == 1) {
                      fd.append(key, value[0]);
                    } else {
                      angular.forEach(value, function(file, index) {
                        fd.append(key + '_' + index, file);
                      });
                    }
                  } else {
                    fd.append(key, value);
                  }
                });

                return fd;
            };

            $httpProvider.defaults.headers.post['Content-Type'] = undefined;

            redactorOptions.imageEnableUpload = false;      //disable upload
            redactorOptions.imageUpload = '/api/file/upload/image?for=redactor';
            redactorOptions.imageManagerJson = '/api/file/all/image';
            redactorOptions.plugins = ['fontcolor', 'imagemanager'];

            $disqusProvider.setShortname(disqus_shortname);
            if (window.location.origin) {
                $disqusProvider.setUrlPrefix(window.location.origin);
            } else {
                var m = window.location.href.match(/(https?:\/\/[^\/]+)\/?/i);
                if (m && m[0]) $disqusProvider.setUrlPrefix(m[1]);
            }
        }
    ])
    .filter('to_trusted', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .filter('tagname', ['$rootScope', function($rootScope) {
        return function(tag) {
            if (!tag) {
                return '';
            }
            var lang = $rootScope.lang;
            if (tag.locale && tag.locale[lang]) {
                return tag.locale[lang];
            } else {
                return tag.name;
            }
        };
    }])
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })
    .directive("fileread", [function () {
      return {
        scope: {
          fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
              scope.$apply(function () {
                //scope.fileread = changeEvent.target.files[0];
                // or all selected files:
                scope.fileread = changeEvent.target.files;
            });
          });
        }
      }
    }])
    .directive('newScope', function() {
        return {
            scope: true,
            priority: 450,
        };
    })
    .controller('SidebarCtrl', [
        '$scope',
        '$rootScope',
        '$http',
        '$mdDialog',
        'md5',
        'ngProgress',
        function($scope, $rootScope, $http, $mdDialog, md5, ngProgress) {
            $scope.isExpanded = false;
            $scope.setUser = function (user) {
                if (user && user.email) {
                    user.emailHash = md5.createHash(user.email);
                }
                $scope.user = user;
                $rootScope.user = user;
            };
            $scope.expand = function (ev) {
                if ($scope.user) {
                    $scope.isExpanded = !$scope.isExpanded;
                } else {
                    $scope.showSigninDialog(ev);
                }
            };
            $scope.signout = function () {
                ngProgress.start();
                $http.delete('/api/user/signout', { cache: false, responseType: 'json' })
                    .success(function (data, status) {
                        if (data && data.success) {
                            $scope.setUser(null);
                            $scope.isExpanded = false;
                            ngProgress.complete();
                        }
                    });
            };
            $scope.showSigninDialog = function (ev) {
                $mdDialog.show({
                    controller: 'UserSigninCtrl',
                    templateUrl: 'templates/user-signin.html',
                    targetEvent: ev,
                    locals: { user: null }
                }).then(function (user) {
                    $scope.setUser(user);
                    $scope.expand();
                });
            };
            $scope.showTeamDialog = function (ev) {
                $mdDialog.show({
                    controller: 'TeamActionsCtrl',
                    templateUrl: 'templates/team-actions.html',
                    targetEvent: ev,
                    locals: { user: $scope.user }
                }).then(function () {
                }).finally(function() {
                    $('.redactor-toolbar-tooltip').remove();
                });
            };
            $scope.showTagDialog = function (ev) {
                $mdDialog.show({
                    controller: 'TagActionsCtrl',
                    templateUrl: 'templates/tag-actions.html',
                    targetEvent: ev,
                    locals: { user: $scope.user }
                }).then(function () {
                }).finally(function() {
                });
            };
            $scope.showBangumiDialog = function (ev) {
                $mdDialog.show({
                    controller: 'BangumiActionsCtrl',
                    templateUrl: 'templates/bangumi-actions.html',
                    targetEvent: ev,
                    locals: { user: $scope.user }
                }).then(function () {
                }).finally(function() {
                });
            };
            $scope.showPublishDialog = function (ev) {
                $mdDialog.show({
                    controller: 'TorrentPublishCtrl',
                    templateUrl: 'templates/torrent-publish.html',
                    targetEvent: ev,
                    clickOutsideToClose: false,
                    locals: { user: $scope.user, torrent: null }
                }).then(function (torrent) {
                    if (torrent) {
                        torrent.uploader = $scope.user;
                        $rootScope.$emit('torrentAdd', torrent);
                    }
                }).finally(function() {
                    $('.redactor-toolbar-tooltip').remove();
                });
            };
            $scope.showUserDialog = function (ev) {
                $mdDialog.show({
                    controller: 'UserActionsCtrl',
                    templateUrl: 'templates/user-actions.html',
                    targetEvent: ev,
                    locals: { user: $scope.user }
                }).then(function () {
                }).finally(function() {
                });
            };
            $http.get('/api/user/session', { cache: false, responseType: 'json' })
                .success(function (data, status) {
                    if (data && data._id) {
                        $scope.setUser(data);
                    }
                });
        }
    ])
    .controller('PageHelpCtrl', [
        '$scope',
        'ngProgress',
        function ($scope, ngProgress) {
            ngProgress.complete();
        }
    ])
    .controller('BangumiListCtrl', [
        '$scope',
        '$http',
        'ngProgress',
        function ($scope, $http, ngProgress) {
            $scope.weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            $scope.bangumis = [];
            $scope.data = {};
            $http.get('/api/bangumi/current', { responseType: 'json' })
                .success(function (data) {
                    if (data) {
                        var bs = data;
                        var bangumis = [];
                        var tag_ids = [];
                        for (var i = 0; i < bs.length; i++) {
                            tag_ids.push(bs[i].tag_id);
                            if (bangumis[bs[i].showOn]) {
                                bangumis[bs[i].showOn].push(bs[i]);
                            } else {
                                bangumis[bs[i].showOn] = [bs[i]];
                            }
                        }
                        $http.post('/api/tag/fetch', {_ids: tag_ids}, { cache: false, responseType: 'json' })
                            .success(function (data) {
                                if (data) {
                                    var tags = data;
                                    var _tags = {};
                                    tags.forEach(function (tag) {
                                        _tags[tag._id] = tag;
                                    });
                                    bs.forEach(function (b, i) {
                                        if (b.tag_id) {
                                            bs[i].tag = _tags[b.tag_id];
                                        }
                                    });
                                }
                            });
                        $scope.bangumis = bangumis;
                    }
                    ngProgress.complete();
                })
                .error(function (data) {
                    ngProgress.complete();
                });
        }
    ])
    .controller('UserResetCtrl', [
        '$stateParams',
        '$scope',
        '$window',
        '$mdDialog',
        'ngProgress',
        function ($stateParams, $scope, $window, $mdDialog, ngProgress) {
            ngProgress.complete();
            var resetKey = $stateParams.reset_key;
            if (!resetKey) {
                $window.location = '/';
                return;
            }
            $mdDialog.show({
                controller: 'UserSigninCtrl',
                templateUrl: 'templates/user-signin.html',
                clickOutsideToClose: false,
                locals: { user: { resetKey: resetKey } }
            }).then(function (user) {
                $window.location = '/';
            });
        }
    ])
    .controller('UserSigninCtrl', [
        '$scope',
        '$http',
        '$filter',
        '$mdDialog',
        'md5',
        'ngProgress',
        'user',
        function($scope, $http, $filter, $mdDialog, md5, ngProgress, user) {
            $scope.working = false;
            $scope.user = user ? user : {};
            if (user) {
                $scope.isForgot = true;
            }
            function jobError() {
                $scope.working = false;
                $scope.jobFailed = true;
            }
            $scope.switchMode = function(type) {
                if ($scope.working) {
                    return;
                }
                $scope.jobFailed = false;
                if (type == 'forgot') {
                    $scope.isRegister = false;
                    $scope.isForgot = true;
                } else if ($scope.isForgot) {
                    $scope.isRegister = false;
                    $scope.isForgot = false;
                } else {
                    $scope.isRegister = !$scope.isRegister;
                }
            };
            $scope.signin = function() {
                if ($scope.working) {
                    return;
                }
                $scope.jobFailed = false;
                if ($scope.user.username && $scope.user.password) {
                    $scope.working = true;
                    ngProgress.start();
                    var u = {
                        username: $scope.user.username,
                        password: md5.createHash($scope.user.password)
                    };
                    $http.post('/api/user/signin', u, { cache: false, responseType: 'json' })
                        .success(function(data, status) {
                            if (data && data.success) {
                                $mdDialog.hide(data.user);
                            } else {
                                jobError();
                            }
                            ngProgress.complete();
                        })
                        .error(function(data, status) {
                            jobError();
                            ngProgress.complete();
                        });
                }
            };
            $scope.register = function() {
                if ($scope.working) {
                    return;
                }
                $scope.jobFailed = false;
                if ($scope.user.password != $scope.user.password2
                    || $scope.user.password.length < 6) {
                    $scope.user.password = $scope.user.password2 = '';
                    jobError();
                    return;
                }
                if ($scope.user.username && $scope.user.password && $scope.user.email) {
                    $scope.working = true;
                    ngProgress.start();
                    var u = {
                        username: $scope.user.username,
                        email: $scope.user.email,
                        password: md5.createHash($scope.user.password)
                    };
                    $http.post('/api/user/register', u, { cache: false, responseType: 'json' })
                        .success(function(data, status) {
                            if (data && data.success) {
                                $mdDialog.hide(data.user);

                                var ok = $filter('translate')('Got it!');
                                var title = $filter('translate')('Need to verify');
                                var message = $filter('translate')('Done! We\'ve sent you an email with instructions to verify your account.');
                                $mdDialog.show(
                                  $mdDialog.alert()
                                    .title(title)
                                    .content(message)
                                    .ok(ok)
                                    //.targetEvent(ev)
                                );
                            } else {
                                jobError();
                            }
                            ngProgress.complete();
                        })
                        .error(function(data, status) {
                            jobError();
                            ngProgress.complete();
                        });
                }
            };
            $scope.reset = function(ev) {
                if ($scope.working) {
                    return;
                }
                $scope.jobFailed = false;
                if (!$scope.user.resetKey && $scope.user.username && $scope.user.email) {
                    $scope.working = true;
                    ngProgress.start();
                    var u = {
                        username: $scope.user.username,
                        email: $scope.user.email
                    };
                    $http.post('/api/user/reset-password/request', u, { cache: false, responseType: 'json' })
                        .success(function(data, status) {
                            if (data && data.success) {
                                $mdDialog.cancel();

                                var ok = $filter('translate')('Got it!');
                                var title = $filter('translate')('Reset Password');
                                var message = $filter('translate')('Done! We\'ve sent you an email with instructions to reset your password.');
                                $mdDialog.show(
                                  $mdDialog.alert()
                                    .title(title)
                                    .content(message)
                                    .ok(ok)
                                    //.targetEvent(ev)
                                );
                            } else {
                                jobError();
                            }
                            ngProgress.complete();
                        })
                        .error(function(data, status) {
                            jobError();
                            ngProgress.complete();
                        });
                } else if ($scope.user.resetKey) {
                    if ($scope.user.password != $scope.user.password2
                        || $scope.user.password.length < 6) {
                        $scope.user.password = $scope.user.password2 = '';
                        jobError();
                        return;
                    }
                    $scope.working = true;
                    ngProgress.start();
                    var u = {
                        username: $scope.user.username,
                        password: md5.createHash($scope.user.password),
                        resetKey: $scope.user.resetKey
                    };
                    $http.post('/api/user/reset-password', u, { cache: false, responseType: 'json' })
                        .success(function(data, status) {
                            if (data && data.success) {
                                $mdDialog.hide();
                            } else {
                                jobError();
                            }
                            ngProgress.complete();
                        })
                        .error(function(data, status) {
                            jobError();
                            ngProgress.complete();
                        });
                }
            };
            $scope.close = function() {
                $mdDialog.cancel();
            };
        }
    ])
    .controller('UserActionsCtrl', [
        '$scope',
        '$rootScope',
        '$http',
        '$mdDialog',
        '$q',
        'md5',
        'user',
        'ngProgress',
        function($scope, $rootScope, $http, $mdDialog, $q, md5, user, ngProgress) {
            ngProgress.start();
            $scope.working = false;
            $scope.jobFailed = false;
            function jobError() {
                $scope.working = false;
                $scope.jobFailed = true;
            }
            $scope.showTorrentEdit = true;
            $scope.removeTorrent = function (ev, torrent, i) {
                $rootScope.removeTorrent(ev, torrent, function (err) {
                    if (!err) {
                        if ($scope.data.selectedIndex == 1) {
                            $scope.mytorrents.splice(i, 1);
                        } else {
                            $scope.teamtorrents.splice(i, 1);
                        }
                    }
                });
            };
            $scope.editTorrent = function (ev, torrent, i) {
                $rootScope.editTorrent(ev, torrent, $scope.user, function (err, torrent) {
                    if (!err) {
                        if ($scope.data.selectedIndex == 1) {
                            $scope.mytorrents[i] = torrent;
                        } else {
                            $scope.teamtorrents[i] = torrent;
                        }
                    }
                });
            };
            $scope.user = user;
            $scope.data = {};
            var queries = [];
            queries.push($http.get('/api/torrent/my', { responseType: 'json' }));
            if (user.team_id) {
                queries.push($http.get('/api/torrent/team', { responseType: 'json' }));
                queries.push($http.post('/api/team/fetch', {_id: user.team_id}, { responseType: 'json' }));
            }
            $q.all(queries).then(function(dataArray) {
                var mytorrents = dataArray[0].data.torrents;
                if (mytorrents) {
                    for (var i = 0; i < mytorrents.length; i++) {
                        //all self
                        mytorrents[i].uploader = user;
                    }
                }
                $scope.mytorrents = mytorrents;

                if (user.team_id) {
                    var teamtorrents = dataArray[1].data.torrents;
                    var team = dataArray[2].data;

                    $scope.teamtorrents = teamtorrents;

                    var user_ids = [];
                    if (teamtorrents) {
                        teamtorrents.forEach(function (t) {
                            user_ids.push(t.uploader_id);
                        });
                    }
                    if (user_ids.length > 0) {
                        $http.post('/api/user/fetch', {_ids: user_ids}, { responseType: 'json' })
                            .success(function (data) {
                                for (var i = 0; i < teamtorrents.length; i++) {
                                    //in profile page not shown team logo
                                    //teamtorrents[i].team = team;
                                    for (var j = 0; j < data.length; j++) {
                                        if (teamtorrents[i].uploader_id == data[j]._id) {
                                            teamtorrents[i].uploader = data[j];
                                            break;
                                        }
                                    }
                                }
                                ngProgress.complete();
                            });
                    } else {
                        ngProgress.complete();
                    }
                } else {
                    ngProgress.complete();
                }
            });
            $scope.showTorrentDetailsDialog = function (ev, torrent) {
            };
            $scope.save = function() {
                if (!$scope.user.password || !$scope.user.new_password) {
                    return;
                }
                if ($scope.user.new_password.length < 6) {
                    return;
                }
                $scope.jobFailed = false;
                if ($scope.user.new_password != $scope.user.new_password2) {
                    $scope.user.new_password = $scope.user.new_password2 = '';
                    $scope.jobFailed = true;
                    return;
                }
                $scope.working = false;
                var u = {
                    password: md5.createHash($scope.user.password),
                    new_password: md5.createHash($scope.user.new_password)
                };
                $http.post('/api/user/update', u, { responseType: 'json' })
                    .success(function (data) {
                        if (data && data.success) {
                            $scope.working = false;
                            $scope.user.password = '';
                            $scope.user.new_password = $scope.user.new_password2 = '';
                            $mdDialog.hide();
                        } else {
                            jobError();
                        }
                    })
                    .error(function () {
                        jobError();
                    });
            };
            $scope.close = function() {
                $mdDialog.cancel();
            };
        }
    ])
    .controller('TeamActionsCtrl', [
        '$scope',
        '$http',
        '$mdDialog',
        'user',
        'ngProgress',
        function($scope, $http, $mdDialog, user, ngProgress) {
            $scope.user = user;
            $scope.data = {};
            $scope.sync = { dmhy: {}, ktxp: {}, popgo: {} };
            $scope.syncSites = ['dmhy', 'ktxp', 'popgo'];
            $scope.newteam = {};
            $scope.jointeam = {};
            $scope.working = false;
            $scope.jobFailed = false;
            if (user.team_id) {
                $http.get('/api/team/myteam', { responseType: 'json' })
                    .success(function (data) {
                        $scope.team = data;
                        if (data.admin_id == user._id) {
                            //is admin
                            $http.get('/api/team/members/pending', { responseType: 'json' })
                                .success(function (data) {
                                    $scope.teamPendingMembers = data;
                                });
                        }
                    });
                $http.get('/api/team/members', { responseType: 'json' })
                    .success(function (data) {
                        $scope.teamMembers = data;
                    });
                $http.get('/api/team/sync/get', { cache: false, responseType: 'json' })
                    .success(function (data) {
                        if (data) {
                            for (var i = 0; i < $scope.syncSites.length; i++) {
                                var site = $scope.syncSites[i];
                                if (data[site]) {
                                    $scope.sync[site] = data[site];
                                }
                            }
                        }
                    });
            } else {
                $http.get('/api/team/myjoining', { responseType: 'json' })
                    .success(function (data) {
                        $scope.teamJoining = data;
                        $scope.jointeam.name = data.name;
                    });
                $http.get('/api/team/pending', { cache: false, responseType: 'json' })
                    .success(function (data) {
                        $scope.teamPending = data;
                    });
            }
            if (user.group == 'admin') {
                $http.get('/api/team/all/pending', { cache: false, responseType: 'json' })
                    .success(function (data) {
                        var tr = data;
                        $scope.teamRequests = tr;
                        var user_ids = [];
                        data.forEach(function (t) {
                            user_ids.push(t.admin_id);
                        });
                        if (user_ids.length > 0) {
                            $http.post('/api/user/fetch', {_ids: user_ids}, { responseType: 'json' })
                                .success(function (data) {
                                    for (var i = 0; i < tr.length; i++) {
                                        for (var j = 0; j < data.length; j++) {
                                            if (tr[i].admin_id == data[j]._id) {
                                                tr[i].admin = data[j];
                                                break;
                                            }
                                        }
                                    }
                                });
                        }
                    });
            }
            function jobError() {
                $scope.working = false;
                $scope.jobFailed = true;
            }
            $scope.join = function () {
                $scope.jobFailed = false;
                var jt = $scope.jointeam;
                if (jt && jt.name) {
                    $http.post('/api/team/join', jt, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $http.get('/api/team/myjoining', { responseType: 'json' })
                                    .success(function (data) {
                                        $scope.teamJoining = data;
                                        $scope.jointeam.name = data.name;
                                    });
                            }
                        });
                }
            };
            $scope.remove = function (ev, team_id, user_id) {
                $scope.jobFailed = false;
                var j = { team_id: team_id, user_id: user_id };
                $http.post('/api/team/remove', j, { cache: false, responseType: 'json' })
                    .success(function (data) {
                        if (data && data.success) {
                            var tm = $scope.teamMembers;
                            for (var i = 0; i < tm.length; i++) {
                                if (tm[i]._id == user_id) {
                                    tm.splice(i, 1);
                                    break;
                                }
                            }
                        }
                    });
            };
            $scope.approve = function (ev, team_id, user_id, isMember) {
                $scope.jobFailed = false;
                var j = { team_id: team_id, user_id: user_id };
                if (isMember) j.type = 'member';
                $http.post('/api/team/approve', j, { cache: false, responseType: 'json' })
                    .success(function (data) {
                        if (data && data.success) {
                            var tr = isMember ? $scope.teamPendingMembers : $scope.teamRequests;
                            for (var i = 0; i < tr.length; i++) {
                                if (isMember && tr[i]._id == user_id) {
                                    $scope.teamMembers.push(tr[i]);
                                    tr.splice(i, 1);
                                    break;
                                }
                                if (!isMember && tr[i]._id == team_id) {
                                    tr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                    });
            };
            $scope.reject = function (ev, team_id, user_id, isMember) {
                $scope.jobFailed = false;
                var j = { team_id: team_id, user_id: user_id };
                if (isMember) j.type = 'member';
                $http.post('/api/team/reject', j, { cache: false, responseType: 'json' })
                    .success(function (data) {
                        if (data && data.success) {
                            var tr = isMember ? $scope.teamPendingMembers : $scope.teamRequests;
                            for (var i = 0; i < tr.length; i++) {
                                if ((isMember && tr[i]._id == user_id)
                                    || (!isMember && tr[i]._id == team_id)) {
                                    tr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                    });
            };
            $scope.approveMember = function (ev, team_id, user_id) {
                return $scope.approve(ev, team_id, user_id, true);
            };
            $scope.rejectMember = function (ev, team_id, user_id) {
                return $scope.reject(ev, team_id, user_id, true);
            };
            $scope.save = function () {
                $scope.jobFailed = false;
                if ($scope.data.selectedIndex == 3) {
                    //Team Sync
                    if ($scope.sync) {
                        $http.post('/api/team/sync/update', {sync: $scope.sync}, { cache: false, responseType: 'json' })
                            .success(function (data) {
                                if (data && data.success) {
                                    $scope.working = false;
                                } else {
                                    jobError();
                                }
                            })
                            .error(function (data) {
                                jobError();
                            });
                    }
                    return;
                }
                var t = $scope.team;
                if (t && (t.new_icon || t.signature)) {
                    $scope.working = true;
                    var nt = {
                        _id: t._id,
                        icon: t.new_icon,
                        signature: t.signature
                    };
                    $http.post('/api/team/update', nt, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                                //refresh
                                $http.get('/api/team/myteam', { cache: false, responseType: 'json' })
                                    .success(function (data) {
                                        $scope.team = data;
                                    });
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.submit = function () {
                $scope.jobFailed = false;
                var nt = $scope.newteam;
                if (nt && nt.name && nt.certification) {
                    $scope.working = true;
                    $http.post('/api/team/register', nt, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                                $scope.teamPending = data.team;
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.close = function () {
                $mdDialog.cancel();
            };
        }
    ])
    .controller('TagActionsCtrl', [
        '$scope',
        '$http',
        '$mdDialog',
        'user',
        'ngProgress',
        function($scope, $http, $mdDialog, user, ngProgress) {
            $scope.tagTypeList = ['team', 'bangumi', 'lang', 'resolution', 'format', 'misc'];
            $scope.user = user;
            $scope.tag = {};
            $scope.tag_locale = [];
            $scope.jobFailed = false;
            $scope.working = false;
            function jobError() {
                $scope.working = false;
                $scope.jobFailed = true;
            }
            function getTagLocale() {
                if (!$scope.tag.synonyms || $scope.tag.synonyms.length <= 0) {
                    return;
                }
                var locale = {};
                var tagl = $scope.tag_locale;
                for (var i = 0; i < tagl.length; i++) {
                    if (tagl[i] && $scope.tag.synonyms[i]) {
                        if (tagl[i].indexOf(',') >= 0) {
                            var locs = tagl[i].split(',');
                            for (var j = 0; j < locs.length; j++) {
                                if (locs[j]) {
                                    locale[locs[j]] = $scope.tag.synonyms[i];
                                }
                            }
                        } else {
                            locale[tagl[i]] = $scope.tag.synonyms[i];
                        }
                    }
                }
                return locale;
            }
            function setTagLocale() {
                if (!$scope.tag.synonyms || !$scope.tag.locale
                    || $scope.tag.synonyms.length <= 0) {
                    $scope.tag_locale = [''];
                    return;
                }
                var tagl = [];
                for (var k in $scope.tag.locale) {
                    var i = $scope.tag.synonyms.indexOf($scope.tag.locale[k]);
                    if (i >= 0) {
                        if (tagl[i]) {
                            tagl[i] += ',' + k;
                        } else {
                            tagl[i] = k;
                        }
                    }
                }
                $scope.tag_locale = tagl;
            }
            $scope.search = function() {
                $scope.jobFailed = false;
                if ($scope.tag.name) {
                    $scope.working = true;
                    $http.post('/api/tag/search', {name: $scope.tag.name}, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                                if (data.found) {
                                    $scope.tag = data.tag;
                                    setTagLocale();
                                } else {
                                    $scope.tag.synonyms = [''];
                                    $scope.tag_locale = [''];
                                    $scope.notfound = true;
                                }
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.increase = function() {
                $scope.tag.synonyms.push('');
                $scope.tag_locale.push('');
            };
            $scope.remove = function(i) {
                $scope.tag.synonyms.splice(i, 1);
                $scope.tag_locale.splice(i, 1);
            };
            $scope.add = function() {
                $scope.jobFailed = false;
                if ($scope.notfound) {
                    $scope.working = true;
                    var t = {
                        name: $scope.tag.name,
                        type: $scope.tag.type,
                        synonyms: $scope.tag.synonyms,
                        locale: getTagLocale()
                    };
                    $http.post('/api/tag/add', t, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                                $scope.notfound = false;
                                $scope.tag = data.tag;
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.save = function() {
                $scope.jobFailed = false;
                if ($scope.tag._id) {
                    $scope.working = true;
                    var t = {
                        _id: $scope.tag._id,
                        name: $scope.tag.name,
                        type: $scope.tag.type,
                        synonyms: $scope.tag.synonyms,
                        locale: getTagLocale()
                    };
                    $http.post('/api/tag/update', t, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.delete = function() {
                $scope.jobFailed = false;
                if ($scope.tag._id) {
                    $scope.working = true;
                    $http.post('/api/tag/remove', {_id: $scope.tag._id}, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                                $scope.notfound = false;
                                $scope.tag = {};
                                $scope.tag_locale = [];
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.close = function() {
                $mdDialog.cancel();
            };
        }
    ])
    .controller('BangumiActionsCtrl', [
        '$scope',
        '$http',
        '$filter',
        '$mdDialog',
        'user',
        'ngProgress',
        function($scope, $http, $filter, $mdDialog, user, ngProgress) {
            $scope.user = user;
            $scope.data = {};
            $scope.bangumi = {};
            $scope.newbangumi = { timezone: 9, showOn: 0 };
            $scope.jobFailed = false;
            $scope.working = false;
            $scope.date = null;
            $scope.weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            function jobError() {
                $scope.working = false;
                $scope.jobFailed = true;
            }
            function timezoneT(date) {
                var d = new Date(date);
                var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
                var offset = parseInt($scope.newbangumi.timezone);
                return new Date(utc + (3600000*offset));
            }
            function isValid(bgm) {
                if (bgm && bgm.name && bgm.credit
                    && bgm.startDate && bgm.endDate && bgm.showOn >= 0) {
                    return true;
                }
                return false;
            }
            $scope.setDate = function(type) {
                $scope.settingDate = type;
            };
            $scope.add = function() {
                $scope.jobFailed = false;
                if (isValid($scope.newbangumi)
                    && $scope.newbangumi.icon
                    && $scope.newbangumi.cover) {
                    $scope.working = true;
                    var t = {
                        name: $scope.newbangumi.name,
                        credit: $scope.newbangumi.credit,
                        startDate: $scope.newbangumi.startDate.getTime(),
                        endDate: $scope.newbangumi.endDate.getTime(),
                        showOn: $scope.newbangumi.showOn,
                        icon: $scope.newbangumi.icon,
                        cover: $scope.newbangumi.cover
                    };
                    $http.post('/api/bangumi/add', t, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                                //Move to Management
                                $scope.data.selectedIndex = 1;
                                $scope.bangumi = data.bangumi;
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.save = function() {
                $scope.jobFailed = false;
                var t = {
                    _id: $scope.bangumi._id,
                    name: $scope.bangumi.name,
                    credit: $scope.bangumi.credit,
                    startDate: $scope.newbangumi.startDate.getTime(),
                    endDate: $scope.newbangumi.endDate.getTime(),
                    showOn: $scope.newbangumi.showOn,
                    icon: $scope.bangumi.icon,
                    cover: $scope.bangumi.cover
                };
                if (t._id && isValid(t)) {
                    $scope.working = true;
                    $http.post('/api/bangumi/update', t, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.search = function() {
                $scope.jobFailed = false;
                if ($scope.bangumi.name) {
                    $scope.working = true;
                    $http.post('/api/bangumi/search', {name: $scope.bangumi.name}, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success && data.found) {
                                $scope.working = false;
                                $scope.bangumi = data.bangumi;

                                var d1 = new Date(data.bangumi.startDate);
                                var d2 = new Date(data.bangumi.endDate);
                                $scope.newbangumi['startDate'] = d1;
                                $scope.newbangumi['endDate'] = d2;
                                $scope.newbangumi['startDateFormat'] = $filter('amDateFormat')(d1, 'YYYY/MM/DD HH:mm:ss');
                                $scope.newbangumi['endDateFormat'] = $filter('amDateFormat')(d2, 'YYYY/MM/DD HH:mm:ss');
                                $scope.newbangumi['showOn'] = data.bangumi.showOn;
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.delete = function() {
                $scope.jobFailed = false;
                if ($scope.bangumi._id) {
                    $scope.working = true;
                    $http.post('/api/bangumi/remove', {_id: $scope.bangumi._id}, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            if (data && data.success) {
                                $scope.working = false;
                                $scope.bangumi = {};
                            } else {
                                jobError();
                            }
                        })
                        .error(function (data) {
                            jobError();
                        });
                }
            };
            $scope.close = function() {
                $mdDialog.cancel();
            };
            $scope.$watch("newbangumi.date", function(newValue, oldValue) {
                if ($scope.settingDate) {
                    $scope.newbangumi[$scope.settingDate + 'Format'] = $filter('amDateFormat')(newValue, 'YYYY/MM/DD HH:mm:ss');
                    $scope.newbangumi[$scope.settingDate] = timezoneT(newValue);
                    $scope.settingDate = '';
                }
            });
            $scope.$watch("newbangumi.timezone", function(newValue, oldValue) {
                $scope.newbangumi.startDate = $scope.newbangumi.endDate = null;
                $scope.newbangumi.startDateFormat = $scope.newbangumi.endDateFormat = '';
            });
        }
    ])
    .controller('TorrentPublishCtrl', [
        '$scope',
        '$state',
        '$http',
        '$timeout',
        '$mdDialog',
        '$mdToast',
        'user',
        'torrent',
        'ngProgress',
        function($scope, $state, $http, $timeout, $mdDialog, $mdToast, user, torrent, ngProgress) {
            $scope.user = user;
            $scope.working = false;
            $scope.tags = [];
            if (torrent) {
                $scope.torrent = torrent;
                if (torrent.team_id) {
                    $scope.torrent.inteam = true;
                }
                if (torrent.tag_ids && torrent.tag_ids.length > 0) {
                    $http.post('/api/tag/fetch', { _ids: torrent.tag_ids }, { responseType: 'json' })
                        .success(function (data) {
                            if (data) {
                                $scope.tags = data;
                            }
                        });
                }
            } else {
                $scope.torrent = {};
                if (user.team_id) {
                    $scope.torrent.inteam = true;
                }
            }
            function jobError() {
                $scope.working = false;
                $scope.jobFailed = true;
            }
            $scope.publish = function () {
                if ($scope.working) {
                    return;
                }
                $scope.message = '';
                $scope.jobFailed = false;
                if ($scope.torrent.title && $scope.torrent.introduction
                    && $scope.torrent.title.length < 128) {
                    if (!$scope.torrent._id && !$scope.torrent_file) {
                        return;
                    }

                    $scope.working = true;
                    var nt = {
                        title: $scope.torrent.title,
                        introduction: $scope.torrent.introduction,
                        tag_ids: [],
                        inteam: $scope.torrent.inteam ? '1' : ''
                    };
                    for (var j = 0; j < $scope.tags.length; j++) {
                        nt.tag_ids.push($scope.tags[j]._id);
                    }
                    var apiUrl;
                    if ($scope.torrent._id) {
                        apiUrl = '/api/torrent/update';
                        nt._id = $scope.torrent._id;
                    } else {
                        apiUrl = '/api/torrent/add';
                        if ($scope.torrent.teamsync) {
                            nt.teamsync = '1';
                        }
                        nt.file = $scope.torrent_file;
                    }
                    $http.post(apiUrl, nt, { cache: false, responseType: 'json' })
                        .success(function(data, status) {
                            if (data && data.success) {
                                ngProgress.complete();
                                $mdDialog.hide(data.torrent);
                            } else {
                                if (data && data.message) {
                                    $scope.message = data.message;
                                }

                                jobError();
                                ngProgress.complete();
                            }
                        })
                        .error(function(data, status) {
                            jobError();
                            ngProgress.complete();
                        });
                }
            };
            $scope.removeTag = function (i) {
                $scope.tags.splice(i, 1);
            };
            $scope.addTag = function (i) {
                if ($scope.newtag) {
                    $scope.working = true;
                    $http.post('/api/tag/search', {name: $scope.newtag}, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            $scope.working = false;
                            if (data && data.found && data.tag) {
                                var found = false;
                                for (var j = 0; j < $scope.tags.length; j++) {
                                    if ($scope.tags[j]._id == data.tag._id) {
                                        found = true;
                                        break;
                                    }
                                }
                                if (!found) {
                                    $scope.tags.push(data.tag);
                                }
                                $scope.newtag = '';
                            }
                        })
                        .error(function () {
                            $scope.working = false;
                        });
                }
            };
            $scope.getSuggest = function () {
                if ($scope.torrent.title) {
                    $scope.working = true;
                    $http.post('/api/tag/suggest', { query: $scope.torrent.title }, { cache: false, responseType: 'json' })
                        .success(function (data) {
                            $scope.working = false;
                            if (data && data.length > 0) {
                                for (var i = 0; i < data.length; i++) {
                                    var found = false;
                                    for (var j = 0; j < $scope.tags.length; j++) {
                                        if ($scope.tags[j]._id == data[i]._id) {
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found) {
                                        $scope.tags.push(data[i]);
                                    }
                                }
                            }
                        })
                        .error(function () {
                            $scope.working = false;
                        });
                }
            };
            $scope.close = function() {
                $mdDialog.cancel();
            };
            //TODO: use onblur to instead
            var lastTimeout = null;
            $scope.$watch("torrent.title", function(newValue, oldValue) {
                if (lastTimeout) $timeout.cancel(lastTimeout);
                lastTimeout = $timeout($scope.getSuggest, 2000);
            });
        }
    ])
    .controller('ProfileActionsCtrl', [
        '$scope',
        '$http',
        '$timeout',
        '$mdDialog',
        'user',
        'ngProgress',
        function($scope, $http, $timeout, $mdDialog, user, ngProgress) {
            $scope.user = user;
            $scope.working = false;
            $scope.torrent = {};

            $scope.close = function() {
                $mdDialog.cancel();
            };
        }
    ])
    .controller('TorrentDetailsCtrl', [
        '$scope',
        '$rootScope',
        '$http',
        '$mdDialog',
        '$window',
        'torrent',
        'ngProgress',
        function($scope, $rootScope, $http, $mdDialog, $window, torrent, ngProgress) {
            $scope.torrent = torrent;
            $scope.user = $rootScope.user;
            $scope.fileContainer = false;
            $scope.showComments = false;
            if (torrent.content && torrent.content.length <= 1) {
                $scope.fileContainer = true;
            }
            if (torrent.tag_ids && torrent.tag_ids.length > 0) {
                $http.post('/api/tag/fetch', { _ids: torrent.tag_ids }, { responseType: 'json' })
                    .success(function (data) {
                        if (data) {
                            $scope.torrent.tags = data;
                        }
                    });
            }
            $scope.downloadTorrent = function(torrent) {
                torrent.downloads += 1;
                var downloadLink = '/download/torrent/' + torrent._id +
                    '/' + torrent.title + '.torrent';
                var urlCreator = $window.URL || $window.webkitURL || $window.mozURL || $window.msURL;
                var link = document.createElement("a");
                if (urlCreator && "download" in link) {
                    ngProgress.start();
                    $http.get(downloadLink, { responseType: 'arraybuffer' })
                        .success(function(data) {
                            ngProgress.complete();
                            var blob = new Blob([ data ], { type: 'application/octet-stream' });
                            var url = urlCreator.createObjectURL(blob);
                            link.setAttribute("href", url);
                            link.setAttribute("download", torrent.title + '.torrent');
                            var event = document.createEvent('MouseEvents');
                            // deprecated method, improvement needed
                            event.initMouseEvent('click', true, true, $window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                            link.dispatchEvent(event);
                        })
                        .error(function(err) {
                            ngProgress.complete();
                            // TODO error message
                        });
                } else {
                    // urlCreator not support, redirect to normal http download
                    window.location = downloadLink;
                }
            };

            $scope.edit = function(ev) {
                $rootScope.editTorrent(ev, $scope.torrent, $scope.user, function () {});
            };
            $scope.close = function() {
                $mdDialog.cancel();
            };
        }
    ])
    .controller('UnifiedIndexCtrl', [
        '$scope',
        '$rootScope',
        '$state',
        '$http',
        '$q',
        '$mdDialog',
        'ngProgress',
        function($scope, $rootScope, $state, $http, $q, $mdDialog, ngProgress) {
            ngProgress.start();
            $scope.currentPage = 0;
            $rootScope.$on('torrentAdd', function (ev, torrent) {
                $scope.torrents.unshift(torrent);
            });
            $scope.removeTorrent = function (ev, torrent, i) {
                $rootScope.removeTorrent(ev, torrent, function (err) {
                    if (!err) {
                        $scope.torrents.splice(i, 1);
                    }
                });
            };
            $scope.editTorrent = function (ev, torrent, i) {
                $rootScope.editTorrent(ev, torrent, $scope.user, function (err, torrent) {
                    if (!err) {
                        $scope.torrents[i] = torrent;
                    }
                });
            };
            var latestTorrents = $http.get('/api/torrent/latest', { cache: false }),
                recentBangumis = $http.get('/api/bangumi/recent', { cache: false }),
                timelineBangumis = $http.get('/api/bangumi/timeline', { cache: false });
            $q.all([latestTorrents, recentBangumis, timelineBangumis]).then(function(dataArray) {
                $scope.totalPages = dataArray[0].data.page;
                $scope.torrents = dataArray[0].data.torrents;
                $scope.currentPage = 1;
                // Calculate week day on client side may cause errors
                $scope.availableDays = [];
                $scope.data = {};
                $scope.data.selectedIndex = 2;

                var tag_ids = [];
                var rbs = dataArray[1].data;
                var startSlide = 0;
                rbs.forEach(function(rb) {
                    tag_ids.push(rb.tag_id);
                });
                function getShowList() {
                    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var showList = [];
                    var aDays = [];
                    var tempList = {};
                    rbs.forEach(function(rb) {
                        if (tempList[weekDays[rb.showOn]]) {
                            tempList[weekDays[rb.showOn]].push(rb);
                        } else {
                            tempList[weekDays[rb.showOn]] = [rb];
                        }
                    });
                    var aDays_temp = [], showList_temp = [];
                    weekDays.forEach(function (day) {
                        //keep order
                        if (tempList[day]) {
                            aDays_temp.push(day);
                            showList_temp.push(tempList[day]);
                        }
                    });
                    var yesterday = '';
                    var index = null;
                    aDays_temp.forEach(function(day) {
                        if (yesterday !== '') {
                            if (weekDays.indexOf(day) - weekDays.indexOf(yesterday) !== 1) {
                                index = aDays_temp.indexOf(day);
                            }
                        }
                        yesterday = day;
                    });
                    if (index) {
                        // weekdays not in a row
                        aDays = aDays.concat(aDays_temp.slice(index), aDays_temp.splice(0, index));
                        showList = showList.concat(showList_temp.slice(index), showList_temp.splice(0, index));
                    }
                    if (showList.length > 1 && showList[1].length > 0) {
                        startSlide = showList[0].length + 1;
                        if (showList[2] && showList[2].length > 0) {
                            startSlide += showList[2].length;
                        }
                    }
                    $scope.availableDays = aDays;
                    $scope.showList = showList;
                }
                getShowList();

                $rootScope.fetchTorrentUserAndTeam($scope.torrents, function () {
                    ngProgress.complete();
                });
                $http.post('/api/tag/fetch', {_ids: tag_ids}, { cache: false, responseType: 'json' })
                    .success(function (data) {
                        if (data) {
                            var tags = data;
                            var _tags = {};
                            tags.forEach(function (tag) {
                                _tags[tag._id] = tag;
                            });
                            rbs.forEach(function (rb, i) {
                                if (rbs[i].tag_id) {
                                    rbs[i].tag = _tags[rbs[i].tag_id];
                                }
                            });
                            getShowList();
                        }
                    });

                //set timelinejs lazyload path
                window.embed_path = '/scripts/timelinejs/';

                var lang = $rootScope.lang;
                lang = lang.replace('_', '-'); //like 'zh-tw'
                createStoryJS({
                    type:       'timeline',
                    width:      '100%',
                    height:     '500',
                    lang:       lang,
                    start_at_slide: startSlide,
                    source:     dataArray[2].data,
                    embed_id:   'bangumi-timeline-embed'
                });
            });
            var loadMore = function() {
                ngProgress.start();
                $http.get('/api/torrent/page/' + ($scope.currentPage + 1), { cache: false, responseType: 'json' })
                    .success(function(data) {
                        var nt = data;
                        $rootScope.fetchTorrentUserAndTeam(nt, function () {
                            ngProgress.complete();
                        });
                        $scope.torrents.push(nt);
                        $scope.currentPage += 1;
                    })
                    .error(function() {
                        ngProgress.complete();
                    });
            };
        }
    ])
    .controller('TagSearchCtrl', [
        '$stateParams',
        '$scope',
        '$rootScope',
        '$http',
        '$q',
        'ngProgress',
        function($stateParams, $scope, $rootScope, $http, $q, ngProgress) {
            ngProgress.start();
            $scope.removeTorrent = function (ev, torrent, i) {
                $rootScope.removeTorrent(ev, torrent, function (err) {
                    if (!err) {
                        $scope.torrents.splice(i, 1);
                    }
                });
            };
            $scope.editTorrent = function (ev, torrent, i) {
            };
            var tag_id = $stateParams.tag_id;
            var reqTag = $http.post('/api/tag/fetch', { _id: tag_id }, { responseType: 'json' }),
                reqTorrents = $http.post('/api/torrent/search', { tag_id: tag_id }, { responseType: 'json' });
            $q.all([reqTag, reqTorrents]).then(function(dataArray) {
                $scope.optTags = [];
                $scope.tags = [];

                $scope.tag = dataArray[0].data;
                $scope.torrents = dataArray[1].data;
                var tag_ids = [];
                //TODO: tag_ids need from server
                for (var i = 0; i < $scope.torrents.length; i++) {
                    if ($scope.torrents[i].tag_ids) {
                        tag_ids = tag_ids.concat($scope.torrents[i].tag_ids);
                    }
                }
                if (tag_ids.length > 0) {
                    $http.post('/api/tag/fetch', { _ids: tag_ids }, { responseType: 'json' })
                        .success(function (data) {
                            for (var i = 0; i < data.length; i++) {
                                if (data[i]._id == $scope.tag._id) {
                                    data.splice(i, 1);
                                    break;
                                }
                            }
                            $scope.optTags = data;
                        });
                }
                $rootScope.fetchTorrentUserAndTeam($scope.torrents, function () {
                    ngProgress.complete();
                });
            });
            /*
            These functions should use with rss
            $scope.reSearch = function () {
                var tag_ids = [tag_id];
                for (var i = 0; i < $scope.tags.length; i++) {
                    tag_ids.push($scope.tags[i]._id);
                }
                if (tag_ids.length > 0) {
                    ngProgress.start();
                    $http.post('/api/torrent/search', { tag_id: tag_ids }, { responseType: 'json' })
                        .success(function (data) {
                            $scope.torrents = data;
                            if (data) {
                                $rootScope.fetchTorrentUserAndTeam($scope.torrents, function () {
                                    ngProgress.complete();
                                });
                            } else {
                                ngProgress.complete();
                            }
                        });
                }
            };
            $scope.addSearch = function (i) {
                $scope.tags.push($scope.optTags[i]);
                $scope.optTags.splice(i, 1);
                $scope.reSearch();
            };
            $scope.removeSearch = function (i) {
                $scope.optTags.push($scope.tags[i]);
                $scope.tags.splice(i, 1);
                $scope.reSearch();
            };
            */
        }
    ])
    .controller('SearchFilterCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        '$rootScope',
        '$location',
        '$http',
        '$q',
        '$mdDialog',
        'ngProgress',
        function($scope, $state, $stateParams, $rootScope, $location, $http, $q, $mdDialog, ngProgress) {
            $scope.selectedTags = [];
            var selectedTagIds = [];
            $scope.searchByTitle = false;
            $scope.tags = {};
            $scope.tagTypeList = ['lang', 'resolution', 'format', 'bangumi', 'team'];
            $scope.torrents = [];
            $scope.searched = false;
            $scope.rsslink = '/rss/latest';
            ngProgress.start();

            $scope.update = function () {
                if (selectedTagIds.length <= 0) {
                    $location.path('/search/index');
                    return;
                }
                if (typeof selectedTagIds === 'string') {
                    $location.path('/search/' + selectedTagIds);
                } else {
                    var location_path = '/search/';
                    for (var i = 0; i < selectedTagIds.length; i++) {
                        location_path += selectedTagIds[i];
                        if (i < selectedTagIds.length - 1) {
                            location_path += '+';
                        }
                    }
                    $location.path(location_path);
                }
                updateSearchResults(selectedTagIds, function (err, ts) {
                    $scope.searched = true;
                    if (!err && ts) {
                        $scope.torrents = ts;
                    } else {
                        $scope.torrents = [];
                    }
                });
            };

            var queries = [];
            queries.push($http.get('/api/tag/popbangumi', { responseType: 'json' }));
            queries.push($http.get('/api/tag/team', { responseType: 'json' }));
            queries.push($http.get('/api/tag/common', { responseType: 'json' }));
            if ($stateParams.tag_id && $stateParams.tag_id !== 'index') {
                if ($stateParams.tag_id.indexOf('+') !== -1) {
                    var param_tag_ids = $stateParams.tag_id.split('+');
                    queries.push($http.post('/api/tag/fetch', { _ids: param_tag_ids }, { responseType: 'json' }));
                } else {
                    queries.push($http.post('/api/tag/fetch', { _id: $stateParams.tag_id }, { responseType: 'json' }));
                }
            }
            $q.all(queries).then(function(dataArray) {
                var tags = {};
                for (var i = 0; i < 3; i++) {
                    if (dataArray[i].data) {
                        for (var j = 0; j < dataArray[i].data.length; j++) {
                            var t = dataArray[i].data[j];
                            if (tags[t.type]) {
                                tags[t.type].push(t);
                            } else {
                                tags[t.type] = [t];
                            }
                        }
                    }
                }

                $scope.tags = tags;
                if (dataArray.length > 3) {
                    if (dataArray[3].data instanceof Array) {
                        dataArray[3].data.forEach(function(tag) {
                            if (tag && tag._id) {
                                $scope.addTag(tag);
                            }
                        });
                    } else {
                        var tag = dataArray[3].data;
                        if (tag && tag._id) {
                            $scope.addTag(tag);
                        }
                    }
                }

                ngProgress.complete();
            });

            $scope.searchTag = function(tagname) {
                if (!tagname || tagname.length < 2) {
                    return;
                }
                ngProgress.start();
                $scope.searching = 'Searching...';
                $http.post('/api/tag/search', { name: tagname, multi: true }, { responseType: 'json' })
                    .success(function(data) {
                        ngProgress.complete();
                        if (data.success && data.found) {
                            $scope.searching = 'Search results for: ';
                            for (var i = 0; i < data.tag.length; i++) {
                                $scope.addTag(data.tag[i], true);
                            }
                            $scope.update();
                        } else {
                            $scope.searching = 'No results found for: ';
                        }
                    })
                    .error(function () {
                        ngProgress.complete();
                        $scope.searching = 'Server error when searching for: ';
                    });
            };
            $scope.searchTitle = function(title) {
                if (!title || title.length < 2) {
                    return;
                }
                updateSearchResults(title, function (err, ts) {
                    $scope.searched = true;
                    if (!err && ts) {
                        $scope.torrents = ts;
                    } else {
                        $scope.torrents = [];
                    }
                });
            };
            $scope.addTag = function(tag, notupdate) {
                var i = $scope.tags[tag.type] ? $scope.tags[tag.type].indexOf(tag) : -1;
                if (i >= 0) {
                    $scope.tags[tag.type].splice(i, 1);
                }
                $scope.selectedTags.push(tag);
                selectedTagIds.push(tag._id);
                if (notupdate) {
                    return;
                }
                $scope.update();
            };
            $scope.removeTag = function(tag) {
                var i = $scope.selectedTags.indexOf(tag);
                if (i >= 0) {
                    $scope.selectedTags.splice(i, 1);
                    selectedTagIds.splice(selectedTagIds.indexOf(tag._id), 1);
                }
                if ($scope.tags[tag.type]) {
                    $scope.tags[tag.type].push(tag);
                } else {
                    $scope.tags[tag.type] = [tag];
                }
                if ($scope.selectedTags.length === 0) {
                    $scope.searched = false;
                    $scope.rsslink = '/rss/latest';
                } else {
                    $scope.update();
                }
            };
            var updateSearchResults = function(tag_ids, callback) {
                ngProgress.start();
                var b = {};
                var rsslink = '/rss/tags/';
                var apiUrl = '/api/torrent/search';
                if (typeof tag_ids == 'string') {
                    //title
                    b.title = tag_ids;
                    rsslink = '';
                    apiUrl += '/title';
                } else {
                    b.tag_id = tag_ids;
                    tag_ids.forEach(function(tag_id, i) {
                        rsslink += tag_id + ((i + 1) < tag_ids.length ? '+' : '');
                    });
                }
                $scope.rsslink = rsslink;

                $http.post(apiUrl, b, { responseType: 'json' })
                    .success(function(data) {
                        if (data && data.length) {
                            $rootScope.fetchTorrentUserAndTeam(data, function () {
                                ngProgress.complete();
                                callback(null, data);
                            });
                        } else {
                            ngProgress.complete();
                            callback();
                        }
                    })
                    .error(function() {
                        ngProgress.complete();
                        callback();
                    });
            }
        }
    ])
;

"use strict";

/**
 * public/rin-jq.js
 * Rin prpr!
 *
 * rin-pr project jquery script
 * WE LOVE ACG
 *
 * */

$(document).ready(function () {
  $('html').removeClass('no-js');
  $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      /*if (scrollTop > 32) {
        $('#header').addClass('fixed-header');
      } else {
        $('#header').removeClass('fixed-header');
      }*/
      if (scrollTop > 100) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });
  $('.scrollup .fab').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });
});

if (navigator.userAgent.indexOf('MSIE') !== -1
  || navigator.userAgent.indexOf('Trident') !== -1) {
  alert('Sorry! We don\'t support IE now, even IE11 had some problems.');
  window.location = "http://outdatedbrowser.com/";
}