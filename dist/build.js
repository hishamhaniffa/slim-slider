!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["slim-slider"]=e():t["slim-slider"]=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(2),u=n(a),c=i(1),h=n(c),l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,p={timing:400,childsClassName:".slide",dir:"ltr",carouselItem:".product-carousel-item",threshold:10},f=function(){function t(e){var i=this;r(this,t),this.handleSwipe=function(t){var e=t.deltaY/i.width*100>-20;i.panEnabled&&e?(i.translate(i.pos+t.deltaX),t.isFinal?"panleft"==t.type?i.slideTo(i.current-i.operator):"panright"==t.type?i.slideTo(i.current+i.operator):i.slideTo(i.current):"panend"!=t.type&&"pancancel"!=t.type||i.slideTo(i.current)):i.slideTo(i.current)},this.timeout,this.panEnabled=!0,this.timing=e.timing||p.timing,this.threshold=e.threshold||p.threshold,this.current=0,this.pos=0,this.operator=("rtl"===e.dir?1:-1)||p.dir,this.slider=document.querySelector(e.selector),this.slides=this.slider.querySelectorAll(e.childsClassName||p.childsClassName),this.carouselItem=e.carouselItem||p.carouselItem,this.width=this.slides[0].offsetWidth,this.slideCount=this.slides.length,this.init()}return o(t,[{key:"dispatchEvent",value:function(t,e,i){var n=new h.default(e,{bubbles:!0,cancelable:!0,detail:i});t.dispatchEvent(n)}},{key:"setPan",value:function(t){this.panEnabled=t,this.initGesture()}},{key:"initGesture",value:function(){this.sliderManager&&(this.sliderManager.destroy(),this.sliderManager=null);var t=this.panEnabled?{touchAction:"pan-y"}:{touchAction:"none"};this.sliderManager=new u.default.Manager(this.slider,s({},t,{recognizers:[[u.default.Pan,{direction:u.default.DIRECTION_ALL}]]})),this.sliderManager.on("panstart panmove panend pancancel panleft panright panup pandown",this.handleSwipe)}},{key:"init",value:function(){this.initGesture(),this.slides[0].classList.add("active"),this.dispatchEvent(this.slider,"after.slim.init",{})}},{key:"translate",value:function(t){var e=this;l(function(i){e.slider.style.transform="translateX("+t+"px)"})}},{key:"slideTo",value:function(t){var e=this;this.current=t<0?0:t>this.slideCount-1?this.slideCount-1:t,this.pos=this.operator*this.current*this.width;var i=document.querySelector(this.carouselItem+".active");this.slider.classList.add("is-animating"),i&&i.classList.remove("active"),this.slides[this.current].classList.add("active"),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(t){e.slider.classList.remove("is-animating"),e.dispatchEvent(e.slider,"after.slim.slide",{})},this.timing),this.translate(this.pos)}}]),t}();e.default=f},function(t,e,i){(function(e){function i(){try{var t=new n("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}var n=e.CustomEvent;t.exports=i()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var i=document.createEvent("CustomEvent");return e?i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):i.initCustomEvent(t,!1,!1,void 0),i}:function(t,e){var i=document.createEventObject();return i.type=t,e?(i.bubbles=Boolean(e.bubbles),i.cancelable=Boolean(e.cancelable),i.detail=e.detail):(i.bubbles=!1,i.cancelable=!1,i.detail=void 0),i}}).call(e,i(3))},function(t,e,i){var n;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(r,s,o,a){"use strict";function u(t,e,i){return setTimeout(f(t,i),e)}function c(t,e,i){return!!Array.isArray(t)&&(h(t,i[e],i),!0)}function h(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function l(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,n,i),t.apply(this,arguments)}}function p(t,e,i){var n,r=e.prototype;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&vt(n,i)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==yt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function m(t,e,i){h(E(e),function(e){t.addEventListener(e,i,!1)})}function g(t,e,i){h(E(e),function(e){t.removeEventListener(e,i,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function T(t,e){return t.indexOf(e)>-1}function E(t){return t.trim().split(/\s+/g)}function b(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function w(t){return Array.prototype.slice.call(t,0)}function I(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];b(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function A(t,e){for(var i,n,r=e[0].toUpperCase()+e.slice(1),s=0;s<mt.length;){if(i=mt[s],n=i?i+r:e,n in t)return n;s++}return a}function C(){return At++}function _(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function x(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&i.handler(e)},this.init()}function P(t){var e,i=t.options.inputClass;return new(e=i?i:xt?j:Pt?U:_t?G:L)(t,S)}function S(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&zt&&n-r===0,o=e&(Xt|Ft)&&n-r===0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e,O(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function O(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=R(e)),r>1&&!i.firstMultiple?i.firstMultiple=R(e):1===r&&(i.firstMultiple=!1);var s=i.firstInput,o=i.firstMultiple,a=o?o.center:s.center,u=e.center=z(n);e.timeStamp=bt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=Y(a,u),e.distance=F(a,u),D(i,e),e.offsetDirection=X(e.deltaX,e.deltaY);var c=N(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=Et(c.x)>Et(c.y)?c.x:c.y,e.scale=o?k(o.pointers,n):1,e.rotation=o?q(o.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,M(i,e);var h=t.element;y(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function D(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==zt&&s.eventType!==Xt||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}function M(t,e){var i,n,r,s,o=t.lastInterval||e,u=e.timeStamp-o.timeStamp;if(e.eventType!=Ft&&(u>Rt||o.velocity===a)){var c=e.deltaX-o.deltaX,h=e.deltaY-o.deltaY,l=N(u,c,h);n=l.x,r=l.y,i=Et(l.x)>Et(l.y)?l.x:l.y,s=X(c,h),t.lastInterval=e}else i=o.velocity,n=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=i,e.velocityX=n,e.velocityY=r,e.direction=s}function R(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:Tt(t.pointers[i].clientX),clientY:Tt(t.pointers[i].clientY)},i++;return{timeStamp:bt(),pointers:e,center:z(e),deltaX:t.deltaX,deltaY:t.deltaY}}function z(t){var e=t.length;if(1===e)return{x:Tt(t[0].clientX),y:Tt(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:Tt(i/e),y:Tt(n/e)}}function N(t,e,i){return{x:e/t||0,y:i/t||0}}function X(t,e){return t===e?Yt:Et(t)>=Et(e)?t<0?qt:kt:e<0?Lt:jt}function F(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function Y(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}function q(t,e){return Y(e[1],e[0],Gt)+Y(t[1],t[0],Gt)}function k(t,e){return F(e[0],e[1],Gt)/F(t[0],t[1],Gt)}function L(){this.evEl=Zt,this.evWin=$t,this.pressed=!1,x.apply(this,arguments)}function j(){this.evEl=Qt,this.evWin=te,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=ie,this.evWin=ne,this.started=!1,x.apply(this,arguments)}function H(t,e){var i=w(t.touches),n=w(t.changedTouches);return e&(Xt|Ft)&&(i=I(i.concat(n),"identifier",!0)),[i,n]}function U(){this.evTarget=se,this.targetIds={},x.apply(this,arguments)}function V(t,e){var i=w(t.touches),n=this.targetIds;if(e&(zt|Nt)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=w(t.changedTouches),a=[],u=this.target;if(s=i.filter(function(t){return y(t.target,u)}),e===zt)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(Xt|Ft)&&delete n[o[r].identifier],r++;return a.length?[I(s.concat(a),"identifier",!0),a]:void 0}function G(){x.apply(this,arguments);var t=f(this.handler,this);this.touch=new U(this.manager,t),this.mouse=new L(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function B(t,e){t&zt?(this.primaryTouch=e.changedPointers[0].identifier,Z.call(this,e)):t&(Xt|Ft)&&Z.call(this,e)}function Z(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches,r=function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)};setTimeout(r,oe)}}function $(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(s<=ae&&o<=ae)return!0}return!1}function J(t,e){this.manager=t,this.set(e)}function K(t){if(T(t,fe))return fe;var e=T(t,de),i=T(t,ve);return e&&i?fe:e||i?e?de:ve:T(t,pe)?pe:le}function Q(){if(!ce)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!e||r.CSS.supports("touch-action",i)}),t}function tt(t){this.options=vt({},this.defaults,t||{}),this.id=C(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=ge,this.simultaneous={},this.requireFail=[]}function et(t){return t&we?"cancel":t&Ee?"end":t&Te?"move":t&ye?"start":""}function it(t){return t==jt?"down":t==Lt?"up":t==qt?"left":t==kt?"right":""}function nt(t,e){var i=e.manager;return i?i.get(t):t}function rt(){tt.apply(this,arguments)}function st(){rt.apply(this,arguments),this.pX=null,this.pY=null}function ot(){rt.apply(this,arguments)}function at(){tt.apply(this,arguments),this._timer=null,this._input=null}function ut(){rt.apply(this,arguments)}function ct(){rt.apply(this,arguments)}function ht(){tt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function lt(t,e){return e=e||{},e.recognizers=v(e.recognizers,lt.defaults.preset),new pt(t,e)}function pt(t,e){this.options=vt({},lt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=P(this),this.touchAction=new J(this,this.options.touchAction),ft(this,!0),h(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ft(t,e){var i=t.element;if(i.style){var n;h(t.options.cssProps,function(r,s){n=A(i.style,s),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={})}}function dt(t,e){var i=s.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}var vt,mt=["","webkit","Moz","MS","ms","o"],gt=s.createElement("div"),yt="function",Tt=Math.round,Et=Math.abs,bt=Date.now;vt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==a&&null!==n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}:Object.assign;var wt=l(function(t,e,i){for(var n=Object.keys(e),r=0;r<n.length;)(!i||i&&t[n[r]]===a)&&(t[n[r]]=e[n[r]]),r++;return t},"extend","Use `assign`."),It=l(function(t,e){return wt(t,e,!0)},"merge","Use `assign`."),At=1,Ct=/mobile|tablet|ip(ad|hone|od)|android/i,_t="ontouchstart"in r,xt=A(r,"PointerEvent")!==a,Pt=_t&&Ct.test(navigator.userAgent),St="touch",Ot="pen",Dt="mouse",Mt="kinect",Rt=25,zt=1,Nt=2,Xt=4,Ft=8,Yt=1,qt=2,kt=4,Lt=8,jt=16,Wt=qt|kt,Ht=Lt|jt,Ut=Wt|Ht,Vt=["x","y"],Gt=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(_(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(_(this.element),this.evWin,this.domHandler)}};var Bt={mousedown:zt,mousemove:Nt,mouseup:Xt},Zt="mousedown",$t="mousemove mouseup";p(L,x,{handler:function(t){var e=Bt[t.type];e&zt&&0===t.button&&(this.pressed=!0),e&Nt&&1!==t.which&&(e=Xt),this.pressed&&(e&Xt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Dt,srcEvent:t}))}});var Jt={pointerdown:zt,pointermove:Nt,pointerup:Xt,pointercancel:Ft,pointerout:Ft},Kt={2:St,3:Ot,4:Dt,5:Mt},Qt="pointerdown",te="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(Qt="MSPointerDown",te="MSPointerMove MSPointerUp MSPointerCancel"),p(j,x,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=Jt[n],s=Kt[t.pointerType]||t.pointerType,o=s==St,a=b(e,t.pointerId,"pointerId");r&zt&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(Xt|Ft)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var ee={touchstart:zt,touchmove:Nt,touchend:Xt,touchcancel:Ft},ie="touchstart",ne="touchstart touchmove touchend touchcancel";p(W,x,{handler:function(t){var e=ee[t.type];if(e===zt&&(this.started=!0),this.started){var i=H.call(this,t,e);e&(Xt|Ft)&&i[0].length-i[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:St,srcEvent:t})}}});var re={touchstart:zt,touchmove:Nt,touchend:Xt,touchcancel:Ft},se="touchstart touchmove touchend touchcancel";p(U,x,{handler:function(t){var e=re[t.type],i=V.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:St,srcEvent:t})}});var oe=2500,ae=25;p(G,x,{handler:function(t,e,i){var n=i.pointerType==St,r=i.pointerType==Dt;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)B.call(this,e,i);else if(r&&$.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ue=A(gt.style,"touchAction"),ce=ue!==a,he="compute",le="auto",pe="manipulation",fe="none",de="pan-x",ve="pan-y",me=Q();J.prototype={set:function(t){t==he&&(t=this.compute()),ce&&this.manager.element.style&&me[t]&&(this.manager.element.style[ue]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return h(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),K(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,r=T(n,fe)&&!me[fe],s=T(n,ve)&&!me[ve],o=T(n,de)&&!me[de];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}return o&&s?void 0:r||s&&i&Wt||o&&i&Ht?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ge=1,ye=2,Te=4,Ee=8,be=Ee,we=16,Ie=32;tt.prototype={defaults:{},set:function(t){return vt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(c(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=nt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return c(t,"dropRecognizeWith",this)?this:(t=nt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(c(t,"requireFailure",this))return this;var e=this.requireFail;return t=nt(t,this),b(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(c(t,"dropRequireFailure",this))return this;t=nt(t,this);var e=b(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(e,t)}var i=this,n=this.state;n<Ee&&e(i.options.event+et(n)),e(i.options.event),t.additionalEvent&&e(t.additionalEvent),n>=Ee&&e(i.options.event+et(n))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=Ie)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(Ie|ge)))return!1;t++}return!0},recognize:function(t){var e=vt({},t);return d(this.options.enable,[this,e])?(this.state&(be|we|Ie)&&(this.state=ge),this.state=this.process(e),void(this.state&(ye|Te|Ee|we)&&this.tryEmit(e))):(this.reset(),void(this.state=Ie))},process:function(t){},getTouchAction:function(){},reset:function(){}},p(rt,tt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ye|Te),r=this.attrTest(t);return n&&(i&Ft||!r)?e|we:n||r?i&Xt?e|Ee:e&ye?e|Te:ye:Ie}}),p(st,rt,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ut},getTouchAction:function(){var t=this.options.direction,e=[];return t&Wt&&e.push(ve),t&Ht&&e.push(de),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&Wt?(r=0===s?Yt:s<0?qt:kt,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?Yt:o<0?Lt:jt,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return rt.prototype.attrTest.call(this,t)&&(this.state&ye||!(this.state&ye)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=it(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(ot,rt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ye)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(at,tt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[le]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Xt|Ft)&&!r)this.reset();else if(t.eventType&zt)this.reset(),this._timer=u(function(){this.state=be,this.tryEmit()},e.time,this);else if(t.eventType&Xt)return be;return Ie},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===be&&(t&&t.eventType&Xt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=bt(),this.manager.emit(this.options.event,this._input)))}}),p(ut,rt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ye)}}),p(ct,rt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Wt|Ht,pointers:1},getTouchAction:function(){return st.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Wt|Ht)?e=t.overallVelocity:i&Wt?e=t.overallVelocityX:i&Ht&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Et(e)>this.options.velocity&&t.eventType&Xt},emit:function(t){var e=it(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(ht,tt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[pe]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&zt&&0===this.count)return this.failTimeout();if(n&&r&&i){if(t.eventType!=Xt)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||F(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=u(function(){this.state=be,this.tryEmit()},e.interval,this),ye):be}return Ie},failTimeout:function(){return this._timer=u(function(){this.state=Ie},this.options.interval,this),Ie},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==be&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),lt.VERSION="2.0.7",lt.defaults={domEvents:!1,touchAction:he,enable:!0,inputTarget:null,inputClass:null,preset:[[ut,{enable:!1}],[ot,{enable:!1},["rotate"]],[ct,{direction:Wt}],[st,{direction:Wt},["swipe"]],[ht],[ht,{event:"doubletap",taps:2},["tap"]],[at]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ae=1,Ce=2;pt.prototype={set:function(t){return vt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Ce:Ae},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&be)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],e.stopped===Ce||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(ye|Te|Ee)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof tt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(c(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(c(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=b(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return h(E(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==a){var i=this.handlers;return h(E(t),function(t){e?i[t]&&i[t].splice(b(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&dt(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ft(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},vt(lt,{INPUT_START:zt,INPUT_MOVE:Nt,INPUT_END:Xt,INPUT_CANCEL:Ft,STATE_POSSIBLE:ge,STATE_BEGAN:ye,STATE_CHANGED:Te,STATE_ENDED:Ee,STATE_RECOGNIZED:be,STATE_CANCELLED:we,STATE_FAILED:Ie,DIRECTION_NONE:Yt,DIRECTION_LEFT:qt,DIRECTION_RIGHT:kt,DIRECTION_UP:Lt,DIRECTION_DOWN:jt,DIRECTION_HORIZONTAL:Wt,DIRECTION_VERTICAL:Ht,DIRECTION_ALL:Ut,Manager:pt,Input:x,TouchAction:J,TouchInput:U,MouseInput:L,PointerEventInput:j,TouchMouseInput:G,SingleTouchInput:W,Recognizer:tt,AttrRecognizer:rt,Tap:ht,Pan:st,Swipe:ct,Pinch:ot,Rotate:ut,Press:at,on:m,off:g,each:h,merge:It,extend:wt,assign:vt,inherit:p,bindFn:f,prefixed:A});var _e="undefined"!=typeof r?r:"undefined"!=typeof self?self:{};_e.Hammer=lt,n=function(){return lt}.call(e,i,e,t),!(n!==a&&(t.exports=n))}(window,document,"Hammer")},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){t.exports=i(0)}])});
//# sourceMappingURL=build.js.map