!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/core"),require("clipboard")):"function"==typeof define&&define.amd?define(["@angular/core","clipboard"],t):"object"==typeof exports?exports.ngII=t(require("@angular/core"),require("clipboard")):e.ngII=t(e.ng.core,e.clipboard)}(this,function(e,t){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,__webpack_require__),o.loaded=!0,o.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){"use strict";function __export(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}__export(r(1))},function(e,t,r){"use strict";var o=this&&this.__decorate||function(e,t,r,o){var i,n=arguments.length,c=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(c=(n<3?i(c):n>3?i(t,r,c):i(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},n=r(2),c=r(3),p=function(){function ClipboardModule(){}return ClipboardModule=o([n.NgModule({declarations:[c.ClipboardDirective],exports:[c.ClipboardDirective]}),i("design:paramtypes",[])],ClipboardModule)}();t.ClipboardModule=p},function(t,r){t.exports=e},function(e,t,r){"use strict";var o=this&&this.__decorate||function(e,t,r,o){var i,n=arguments.length,c=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(c=(n<3?i(c):n>3?i(t,r,c):i(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},n=r(2),c=r(4),p=function(){function ClipboardDirective(e){this.elmRef=e,this.onSuccess=new n.EventEmitter,this.onError=new n.EventEmitter}return ClipboardDirective.prototype.ngOnInit=function(){var e,t=this;e=this.targetElm?{target:function(){return t.targetElm}}:{text:function(){return t.cbContent}},this.clipboard=new c(this.elmRef.nativeElement,e),this.clipboard.on("success",function(e){return t.onSuccess.emit(!0)}),this.clipboard.on("error",function(e){return t.onError.emit(!0)})},ClipboardDirective.prototype.ngOnDestroy=function(){!!this.clipboard&&this.clipboard.destroy()},o([n.Input("ngIIclipboard"),i("design:type",n.ElementRef)],ClipboardDirective.prototype,"targetElm",void 0),o([n.Input(),i("design:type",String)],ClipboardDirective.prototype,"cbContent",void 0),o([n.Output("cbOnSuccess"),i("design:type",n.EventEmitter)],ClipboardDirective.prototype,"onSuccess",void 0),o([n.Output("cbOnError"),i("design:type",n.EventEmitter)],ClipboardDirective.prototype,"onError",void 0),ClipboardDirective=o([n.Directive({selector:"[ngIIclipboard]"}),i("design:paramtypes",[n.ElementRef])],ClipboardDirective)}();t.ClipboardDirective=p},function(e,r){e.exports=t}])});
//# sourceMappingURL=index.js.map