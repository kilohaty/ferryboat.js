!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.ferryboat=o():t.ferryboat=o()}("undefined"!=typeof self?self:this,function(){return function(t){function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}var n={};return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=0)}([function(t,o){function n(t){t=t||{},this.max=isNaN(t.max)?1:t.max,this.taskList=t.taskList||[],this.onSuccess=t.onSuccess||e,this.onFail=t.onFail||e,this.onComplete=t.onComplete||e,this.stopOnError="boolean"!=typeof t.stopOnError||t.stopOnError,this.stopped=!1,this.pointer=0,this.doingCount=0,this.successCount=0,this.failCount=0,this.completeCount=0,this.total=this.taskList.length,this._run()}var e=function(){};n.prototype._run=function(){for(var t=0;t<this.max;t++)this._next()},n.prototype._next=function(){function t(){n.completeCount===n.taskList.length?o():n._next()}function o(){n.onComplete({successCount:n.successCount,failCount:n.failCount,total:n.total})}var n=this;if(!(this.doingCount>=this.max||this.pointer>=this.taskList.length||this.stopped)){var e=this.pointer++,s=this.taskList[e];this.doingCount++,s.fn().then(function(o){this.doingCount--,this.successCount++,this.completeCount++,this.onSuccess({result:o,current:this.completeCount,total:this.total,taskIndex:e}),t()}.bind(this)).catch(function(n){if(this.doingCount--,this.failCount++,this.completeCount++,this.onFail({error:n,current:this.completeCount,total:this.total,taskIndex:e}),this.stopOnError)return o(),void(this.stopped=!0);t()}.bind(this))}}}])});
//# sourceMappingURL=ferryboat.js.map