(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<app-resident-registration></app-resident-registration>\n<router-outlet></router-outlet>\n<app-loading-screen></app-loading-screen>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loading-screen/loading-screen.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loading-screen/loading-screen.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-screen-wrapper\" *ngIf=\"loading\">\n  <div class=\"loading-screen-icon\">\n    <div class=\"cssload-loader\">\n      <div class=\"cssload-inner cssload-one\"></div>\n      <div class=\"cssload-inner cssload-two\"></div>\n      <div class=\"cssload-inner cssload-three\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/resident-registration/resident-registration.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/resident-registration/resident-registration.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <form [formGroup]=\"residentRegistrationForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"txtIDNumber\"> Name</label>\n                  <input type=\"text\" formControlName=\"IDNumber\" class=\"form-control\" id=\"txtIDNumber\" placeholder=\"IDNumber\"/>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OSTTechApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_resident_registration_resident_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/resident-registration/resident-registration.component */ "./src/app/components/resident-registration/resident-registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _intersceptors_loading_screen_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intersceptors/loading-screen.interceptor */ "./src/app/intersceptors/loading-screen.interceptor.ts");
/* harmony import */ var _components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loading-screen/loading-screen.component */ "./src/app/components/loading-screen/loading-screen.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_resident_registration_resident_registration_component__WEBPACK_IMPORTED_MODULE_5__["ResidentRegistrationComponent"],
                _components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__["LoadingScreenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                    closeButton: true,
                    timeOut: 3000
                })
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _intersceptors_loading_screen_interceptor__WEBPACK_IMPORTED_MODULE_8__["LoadingScreenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/loading-screen/loading-screen.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/loading-screen/loading-screen.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-screen-wrapper {\n  z-index: 100000;\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.loading-screen-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.cssload-loader {\n  position: relative;\n  left: calc(50% - 31px);\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n  -o-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-perspective: 780px;\n          perspective: 780px;\n}\n\n.cssload-inner {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border-radius: 50%;\n  -o-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n}\n\n.cssload-inner.cssload-one {\n  left: 0%;\n  top: 0%;\n  animation: cssload-rotate-one 1.15s linear infinite;\n  -o-animation: cssload-rotate-one 1.15s linear infinite;\n  -ms-animation: cssload-rotate-one 1.15s linear infinite;\n  -webkit-animation: cssload-rotate-one 1.15s linear infinite;\n  -moz-animation: cssload-rotate-one 1.15s linear infinite;\n  border-bottom: 3px solid black;\n}\n\n.cssload-inner.cssload-two {\n  right: 0%;\n  top: 0%;\n  animation: cssload-rotate-two 1.15s linear infinite;\n  -o-animation: cssload-rotate-two 1.15s linear infinite;\n  -ms-animation: cssload-rotate-two 1.15s linear infinite;\n  -webkit-animation: cssload-rotate-two 1.15s linear infinite;\n  -moz-animation: cssload-rotate-two 1.15s linear infinite;\n  border-right: 3px solid black;\n}\n\n.cssload-inner.cssload-three {\n  right: 0%;\n  bottom: 0%;\n  animation: cssload-rotate-three 1.15s linear infinite;\n  -o-animation: cssload-rotate-three 1.15s linear infinite;\n  -ms-animation: cssload-rotate-three 1.15s linear infinite;\n  -webkit-animation: cssload-rotate-three 1.15s linear infinite;\n  -moz-animation: cssload-rotate-three 1.15s linear infinite;\n  border-top: 3px solid black;\n}\n\n@keyframes cssload-rotate-one {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n  }\n}\n\n@-webkit-keyframes cssload-rotate-one {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n  }\n}\n\n@keyframes cssload-rotate-two {\n  0% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n  }\n}\n\n@-webkit-keyframes cssload-rotate-two {\n  0% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n  }\n}\n\n@keyframes cssload-rotate-three {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n  }\n}\n\n@-webkit-keyframes cssload-rotate-three {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNjcmVlbi9DOlxcVXNlcnNcXGt1bWFya2RcXERlc2t0b3BcXE9TVC1UZWNoLVRlc3RcXE9TVFRlY2hBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvYWRpbmctc2NyZWVuXFxsb2FkaW5nLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNjcmVlbi9sb2FkaW5nLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0Qsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNELDBCQUFBO1VBQUEsa0JBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNDLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Qsa0JBQUE7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0MsUUFBQTtFQUNBLE9BQUE7RUFDQSxtREFBQTtFQUNDLHNEQUFBO0VBQ0EsdURBQUE7RUFDQSwyREFBQTtFQUNBLHdEQUFBO0VBQ0QsOEJBQUE7QUNDRDs7QURFQTtFQUNDLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbURBQUE7RUFDQyxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtFQUNELDZCQUFBO0FDQ0Q7O0FERUE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO0VBQ0Msd0RBQUE7RUFDQSx5REFBQTtFQUNBLDZEQUFBO0VBQ0EsMERBQUE7RUFDRCwyQkFBQTtBQ0NEOztBRFFBO0VBQ0M7SUFDQywrREFBQTtZQUFBLHVEQUFBO0VDTEE7RURPRDtJQUNDLGlFQUFBO1lBQUEseURBQUE7RUNMQTtBQUNGOztBRDBCQTtFQUNDO0lBQ0MsK0RBQUE7RUNSQTtFRFVEO0lBQ0MsaUVBQUE7RUNSQTtBQUNGOztBRG9CQTtFQUNDO0lBQ0MsOERBQUE7WUFBQSxzREFBQTtFQ1ZBO0VEWUQ7SUFDQyxnRUFBQTtZQUFBLHdEQUFBO0VDVkE7QUFDRjs7QUQrQkE7RUFDQztJQUNDLDhEQUFBO0VDYkE7RURlRDtJQUNDLGdFQUFBO0VDYkE7QUFDRjs7QUR5QkE7RUFDQztJQUNDLDhEQUFBO1lBQUEsc0RBQUE7RUNmQTtFRGlCRDtJQUNDLGdFQUFBO1lBQUEsd0RBQUE7RUNmQTtBQUNGOztBRG9DQTtFQUNDO0lBQ0MsOERBQUE7RUNsQkE7RURvQkQ7SUFDQyxnRUFBQTtFQ2xCQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNjcmVlbi9sb2FkaW5nLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLXNjcmVlbi13cmFwcGVyIHtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5nLXNjcmVlbi1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAuY3NzbG9hZC1sb2FkZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRsZWZ0OiBjYWxjKDUwJSAtIDMxcHgpO1xyXG5cdHdpZHRoOiA2MnB4O1xyXG5cdGhlaWdodDogNjJweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRwZXJzcGVjdGl2ZTogNzgwcHg7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWlubmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHRcclxufVxyXG5cclxuLmNzc2xvYWQtaW5uZXIuY3NzbG9hZC1vbmUge1xyXG5cdGxlZnQ6IDAlO1xyXG5cdHRvcDogMCU7XHJcblx0YW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS1vbmUgMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS1vbmUgMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LW1zLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtb25lIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS1vbmUgMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LW1vei1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLW9uZSAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigwLDAsMCk7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWlubmVyLmNzc2xvYWQtdHdvIHtcclxuXHRyaWdodDogMCU7XHJcblx0dG9wOiAwJTtcclxuXHRhbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXR3byAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHQtby1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXR3byAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHQtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS10d28gMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXR3byAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHQtbW96LWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtdHdvIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMCwwLDApO1xyXG59XHJcblxyXG4uY3NzbG9hZC1pbm5lci5jc3Nsb2FkLXRocmVlIHtcclxuXHRyaWdodDogMCU7XHJcblx0Ym90dG9tOiAwJTtcclxuXHRhbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXRocmVlIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC1vLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtdGhyZWUgMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LW1zLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtdGhyZWUgMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXRocmVlIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS10aHJlZSAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0Ym9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYigwLDAsMCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtb25lIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtb25lIHtcclxuXHQwJSB7XHJcblx0XHQtby10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLW9uZSB7XHJcblx0MCUge1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMGRlZyk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS1vbmUge1xyXG5cdDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS1vbmUge1xyXG5cdDAlIHtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtdHdvIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLXR3byB7XHJcblx0MCUge1xyXG5cdFx0LW8tdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtdHdvIHtcclxuXHQwJSB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS10d28ge1xyXG5cdDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtdHdvIHtcclxuXHQwJSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS10aHJlZSB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKDU1ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS10aHJlZSB7XHJcblx0MCUge1xyXG5cdFx0LW8tdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKDU1ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtdGhyZWUge1xyXG5cdDAlIHtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMGRlZyk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLXRocmVlIHtcclxuXHQwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLXRocmVlIHtcclxuXHQwJSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpO1xyXG5cdH1cclxufSIsIi5sb2FkaW5nLXNjcmVlbi13cmFwcGVyIHtcbiAgei1pbmRleDogMTAwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2FkaW5nLXNjcmVlbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNzc2xvYWQtbG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMxcHgpO1xuICB3aWR0aDogNjJweDtcbiAgaGVpZ2h0OiA2MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBwZXJzcGVjdGl2ZTogNzgwcHg7XG59XG5cbi5jc3Nsb2FkLWlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jc3Nsb2FkLWlubmVyLmNzc2xvYWQtb25lIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogMCU7XG4gIGFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtb25lIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS1vbmUgMS4xNXMgbGluZWFyIGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS1vbmUgMS4xNXMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtb25lIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLW9uZSAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbn1cblxuLmNzc2xvYWQtaW5uZXIuY3NzbG9hZC10d28ge1xuICByaWdodDogMCU7XG4gIHRvcDogMCU7XG4gIGFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtdHdvIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS10d28gMS4xNXMgbGluZWFyIGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS10d28gMS4xNXMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUtdHdvIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXR3byAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4uY3NzbG9hZC1pbm5lci5jc3Nsb2FkLXRocmVlIHtcbiAgcmlnaHQ6IDAlO1xuICBib3R0b206IDAlO1xuICBhbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXRocmVlIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZS10aHJlZSAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXRocmVlIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXRocmVlIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlLXRocmVlIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG5Aa2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLW9uZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS1vbmUge1xuICAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLW9uZSB7XG4gIDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtb25lIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLW9uZSB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtdHdvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS10d28ge1xuICAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS10d28ge1xuICAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS10d28ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLXR3byB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLXRocmVlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZS10aHJlZSB7XG4gIDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKDU1ZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLXRocmVlIHtcbiAgMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUtdGhyZWUge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlLXRocmVlIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKDU1ZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDM1ZGVnKSByb3RhdGVZKDU1ZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/loading-screen/loading-screen.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/loading-screen/loading-screen.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loading-screen.service */ "./src/app/services/loading-screen.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoadingScreenComponent = /** @class */ (function () {
    function LoadingScreenComponent(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.loading = false;
    }
    LoadingScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200)).subscribe(function (value) {
            _this.loading = value;
        });
    };
    LoadingScreenComponent.prototype.ngOnDestroy = function () {
        this.loadingSubscription.unsubscribe();
    };
    LoadingScreenComponent.ctorParameters = function () { return [
        { type: _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenService"] }
    ]; };
    LoadingScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-screen',
            template: __webpack_require__(/*! raw-loader!./loading-screen.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loading-screen/loading-screen.component.html"),
            styles: [__webpack_require__(/*! ./loading-screen.component.scss */ "./src/app/components/loading-screen/loading-screen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenService"]])
    ], LoadingScreenComponent);
    return LoadingScreenComponent;
}());



/***/ }),

/***/ "./src/app/components/resident-registration/resident-registration.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/resident-registration/resident-registration.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzaWRlbnQtcmVnaXN0cmF0aW9uL3Jlc2lkZW50LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/resident-registration/resident-registration.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/resident-registration/resident-registration.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ResidentRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentRegistrationComponent", function() { return ResidentRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");




var ResidentRegistrationComponent = /** @class */ (function () {
    function ResidentRegistrationComponent(formBuilder, notify //, private service: SmartCardService, private router: Router, 
    //private route: ActivatedRoute, private notify: NotificationService
    ) {
        this.formBuilder = formBuilder;
        this.notify = notify;
        this.submitted = false;
    }
    ResidentRegistrationComponent.prototype.ngOnInit = function () {
        this.declareResidentRegistrationForm();
    };
    ResidentRegistrationComponent.prototype.declareResidentRegistrationForm = function () {
        this.residentRegistrationForm = this.formBuilder.group({
            IDNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(ResidentRegistrationComponent.prototype, "f", {
        get: function () { return this.residentRegistrationForm['controls']; },
        enumerable: true,
        configurable: true
    });
    ResidentRegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.residentRegistrationForm.invalid) {
            return;
        }
        var smartCard = this.residentRegistrationForm.value;
        console.log(smartCard);
        this.notify.showError(smartCard, "");
        // this.service.InsertOrUpdateSmartCard(smartCard).subscribe(data => {
        //   if (data == "") {
        //     this.notify.showSuccess("Smartcard registered successfull!!","");
        //     this.router.navigate(["/smartcard/list"]);
        //   }
        //   else {  this.notify.showError(data,""); }
        // }
    };
    ResidentRegistrationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] //, private service: SmartCardService, private router: Router, 
         }
    ]; };
    ResidentRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resident-registration',
            template: __webpack_require__(/*! raw-loader!./resident-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/resident-registration/resident-registration.component.html"),
            styles: [__webpack_require__(/*! ./resident-registration.component.css */ "./src/app/components/resident-registration/resident-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] //, private service: SmartCardService, private router: Router, 
            //private route: ActivatedRoute, private notify: NotificationService
        ])
    ], ResidentRegistrationComponent);
    return ResidentRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/intersceptors/loading-screen.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/intersceptors/loading-screen.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: LoadingScreenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenInterceptor", function() { return LoadingScreenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading-screen.service */ "./src/app/services/loading-screen.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoadingScreenInterceptor = /** @class */ (function () {
    function LoadingScreenInterceptor(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.activeRequests = 0;
        /**
         * URLs for which the loading screen should not be enabled
         */
        this.skippUrls = [
            '/authrefresh',
        ];
    }
    LoadingScreenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var e_1, _a;
        var displayLoadingScreen = true;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.skippUrls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var skippUrl = _c.value;
                if (new RegExp(skippUrl).test(request.url)) {
                    displayLoadingScreen = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (displayLoadingScreen) {
            if (this.activeRequests === 0) {
                this.loadingScreenService.startLoading();
            }
            this.activeRequests++;
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this.activeRequests--;
                if (_this.activeRequests === 0) {
                    _this.loadingScreenService.stopLoading();
                }
            }));
        }
        else {
            return next.handle(request);
        }
    };
    ;
    LoadingScreenInterceptor.ctorParameters = function () { return [
        { type: _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenService"] }
    ]; };
    LoadingScreenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenService"]])
    ], LoadingScreenInterceptor);
    return LoadingScreenInterceptor;
}());



/***/ }),

/***/ "./src/app/services/loading-screen.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/loading-screen.service.ts ***!
  \****************************************************/
/*! exports provided: LoadingScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenService", function() { return LoadingScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoadingScreenService = /** @class */ (function () {
    function LoadingScreenService() {
        this._loading = false;
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(LoadingScreenService.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            this._loading = value;
            this.loadingStatus.next(value);
        },
        enumerable: true,
        configurable: true
    });
    LoadingScreenService.prototype.startLoading = function () {
        this.loading = true;
    };
    LoadingScreenService.prototype.stopLoading = function () {
        this.loading = false;
    };
    LoadingScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoadingScreenService);
    return LoadingScreenService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
    }
    NotificationService.prototype.showSuccess = function (message, title) {
        if (title === void 0) { title = "Success"; }
        this.toastr.success(message, title);
    };
    NotificationService.prototype.showError = function (message, title) {
        if (title === void 0) { title = "Error"; }
        this.toastr.error(message, title);
    };
    NotificationService.prototype.shoInfo = function (message, title) {
        if (title === void 0) { title = "Information"; }
        this.toastr.info(message, title);
    };
    NotificationService.prototype.showWarning = function (message, title) {
        if (title === void 0) { title = "Warning"; }
        this.toastr.warning(message, title);
    };
    NotificationService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kumarkd\Desktop\OST-Tech-Test\OSTTechApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map