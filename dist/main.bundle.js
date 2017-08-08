webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'landing-page', component: __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__["a" /* LandingPageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/templates/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/templates/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_page_client_list_component__ = __webpack_require__("../../../../../src/app/landing-page/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // NgModel lives here







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__landing_page_client_list_component__["a" /* ClientListComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__common_service__["a" /* CommonService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonService = (function () {
    function CommonService() {
    }
    CommonService.prototype.getUser = function () {
        return this.user;
    };
    CommonService.prototype.setUser = function (user) {
        this.user = user;
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/client-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientListComponent = (function () {
    function ClientListComponent() {
    }
    return ClientListComponent;
}());
ClientListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'client-list',
        styles: [__webpack_require__("../../../../../src/app/landing-page/templates/client-list.component.css")],
        template: __webpack_require__("../../../../../src/app/landing-page/templates/client-list.component.html")
    })
], ClientListComponent);

//# sourceMappingURL=client-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = (function () {
    function LandingPageComponent(commonService) {
        this.commonService = commonService;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.user = this.commonService.getUser();
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'landing-page',
        styles: [__webpack_require__("../../../../../src/app/landing-page/templates/landing-page.component.css")],
        template: __webpack_require__("../../../../../src/app/landing-page/templates/landing-page.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], LandingPageComponent);

var _a;
//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/templates/client-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/templates/client-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"col-md-12\">\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <td class=\"active\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td class=\"active\">Client Name</td>\r\n        <td class=\"active\">Status</td>\r\n        <td class=\"active\">Preparer</td>\r\n        <td class=\"active\">Last Updated</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"info\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td>Ana Vitoria Goulet</td>\r\n        <td>In Progress</td>\r\n        <td>Josue Edgardo Alberto</td>\r\n        <td>08/05/2017 22:29</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"success\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td>Antonio Carlos da Costa</td>\r\n        <td>E-Filed</td>\r\n        <td>Josue Edgardo Alberto</td>\r\n        <td>08/08/2017 08:03</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"success\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td>Antonio Carlos da Costa</td>\r\n        <td>E-Filed</td>\r\n        <td>Josue Edgardo Alberto</td>\r\n        <td>08/08/2017 08:03</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"success\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td>Antonio Carlos da Costa</td>\r\n        <td>E-Filed</td>\r\n        <td>Josue Edgardo Alberto</td>\r\n        <td>08/08/2017 08:03</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"danger\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td>Ana Vitoria Goulet</td>\r\n        <td>Rejected</td>\r\n        <td>Josue Edgardo Alberto</td>\r\n        <td>08/08/2017 10:47</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/templates/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-client-button {\r\n  min-width: 90px;\r\n  min-height: 90px;\r\n  color: #ffffff;\r\n  background-color: #004d66;\r\n}\r\n\r\n.year-font {\r\n  font-size: 40px;\r\n  font-weight: 600;\r\n  color: #C3C3C3;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/templates/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" id=\"myButton\" data-loading-text=\"Loading...\" class=\"btn new-client-button\" autocomplete=\"off\">\r\n      <br>\r\n      <span class=\"glyphicon glyphicon-plus\"></span>\r\n      <span class=\"glyphicon glyphicon-user\"></span>\r\n      <br><br>\r\n      New Client\r\n    </button>\r\n  </div>\r\n  <div class=\"col-md-11\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"><span class=\"year-font\">2017</span></div>\r\n      <div class=\"col-md-10\">&nbsp;</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <label for=\"clientName\">&nbsp;</label>\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\" id=\"basic-addon1\">>\r\n              <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\r\n          </span>\r\n          <input type=\"text\" name=\"clientName\" class=\"form-control\" placeholder=\"Client Name\" aria-describedby=\"basic-addon1\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n          <label for=\"returnYear\">Return Year</label>\r\n          <select name=\"returnYear\" class=\"form-control\">\r\n            <option value=\"2017\">2017</option>\r\n            <option value=\"2016\">2016</option>\r\n            <option value=\"2015\">2015</option>\r\n          </select>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n          <label for=\"federalStatus\">Federal Status</label>\r\n          <select name=\"federalStatus\" class=\"form-control\">\r\n            <option value=\"In Progress\">In Progress</option>\r\n            <option value=\"On Hold\">On Hold</option>\r\n            <option value=\"E-Filed\">E-Filed</option>\r\n          </select>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n          <label for=\"taxPreparer\">Federal Status</label>\r\n          <select name=\"taxPreparer\" class=\"form-control\">\r\n            <option value=\"Josue Edgardo Albertp\">Josue Edgardo Alberto</option>\r\n            <option value=\"Marcos Costa\">Marcos Costa</option>\r\n            <option value=\"Kristy Campbell\">Kristy Campbell</option>\r\n            <option value=\"Val V\">Val V</option>\r\n          </select>\r\n      </div>\r\n      <div class=\"col-md-4\">&nbsp;</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- list starts here-->\r\n<div class=\"container-fluid\" style=\"padding-top:30px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <client-list></client-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
var Alert = (function () {
    function Alert() {
    }
    return Alert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/login/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert__ = __webpack_require__("../../../../../src/app/login/alert.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, commonService) {
        this.router = router;
        this.commonService = commonService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.gotoLandingPage = function () {
        this.user.name = 'Marcos Costa';
        this.user.alerts = [new __WEBPACK_IMPORTED_MODULE_4__alert__["a" /* Alert */](), new __WEBPACK_IMPORTED_MODULE_4__alert__["a" /* Alert */](), new __WEBPACK_IMPORTED_MODULE_4__alert__["a" /* Alert */]()];
        this.commonService.setUser(this.user);
        this.router.navigate(['/landing-page']);
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]) === "function" && _a || Object)
], LoginComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
    __metadata("design:type", String)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'login-component',
        styles: [__webpack_require__("../../../../../src/app/login/templates/login.component.css")],
        template: __webpack_require__("../../../../../src/app/login/templates/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/templates/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/templates/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-12\">\r\n    <form class=\"form-signin\" (ngSubmit)=\"gotoLandingPage()\">\r\n      <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n      <input [(ngModel)]=\"user.email\" name=\"user.email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\r\n\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n\r\n      <div class=\"checkbox\">\r\n        <label>\r\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n        </label>\r\n      </div>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(commonService) {
        this.commonService = commonService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.user = this.commonService.getUser();
    };
    // This ebables two way binding so when user changes into commonService it will get it
    MenuComponent.prototype.ngDoCheck = function () {
        this.user = this.commonService.getUser();
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'menu-component',
        template: __webpack_require__("../../../../../src/app/menu/templates/menu-component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/templates/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/templates/menu-component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-offset\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top main-menu\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          LEVIT\r\n        </a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a routerLink=\"/login\" routerLinkActive=\"active\">Clients <span class=\"sr-only\">(current)</span></a></li>\r\n          <li><a routerLink=\"/landing-page\" routerLinkActive=\"active\">Reports</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"user && user.name\" class=\"loggedAgent\">Welcome {{user.name}}&nbsp;&nbsp;&nbsp;</li>\r\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-bell image-button-yellow\"><span *ngIf=\"user && user.alerts\" class=\"badge\">{{user.alerts.length}}</span></span></a></li>\r\n        <li>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-default dropdown-toggle image-button image-button-yellow\" type=\"button\" id=\"services\" data-toggle=\"servicesDropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n              <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\" aria-labelledby=\"servicesDropdown\">\r\n              <li><a href=\"#\">Action</a></li>\r\n              <li><a href=\"#\">Another action</a></li>\r\n              <li><a href=\"#\">Something else here</a></li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <li><a href=\"#\">Separated link</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/templates/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-menu {\n  background-color: #606060;\n}\n\n.navbar-brand {\n  color: #ffffff;\n}\n\n.navbar-default {\n  border-bottom-color: #000000;\n  border-bottom-width: thick;\n}\n\n.navbar-nav>li>a {\n  color: #ffffff;\n}\n\n.loggedAgent {\n  top: 15px;\n  color: #ffffff;\n}\n\n.navbar-nav>.active>a, .navbar-nav>.active>a:focus, .navbar-nav>.active>a:hover {\n  color: #ffcc5c;\n  background-color: #606060;\n}\n\n.navbar-text {\n    color: #ffffff;\n}\n\n.menu-offset {\n  min-height: 60px;\n}\n\n.badge {\n  border-radius: 8px;\n  display: inline-block;\n  font: 12px Roboto,Arial,Helvetica,sans-serif;\n  line-height: 12px;\n  min-height: 12px;\n  min-width: 12px;\n  left: 8px;\n  position: absolute;\n  text-align: center;\n  top: -8px;\n  background-color: #d9534f;\n}\n\n.image-button {\n  margin-top: 7px!important;\n  margin-bottom:;\n}\n\n.image-button-yellow {\n  color: #ffffff;\n  background-color: #606060;\n  border-color: #606060;\n}\n\n.image-button-yellow.focus, .image-button-yellow:focus {\n  color: #ffcc5c;\n  background-color: #606060;\n  border-color: #606060;\n}\n\n.image-button-yellow:hover {\n  color: #ffcc5c;\n  background-color: #606060;\n  border-color: #606060;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/templates/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/templates/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"col-md-12\">\n    <menu-component></menu-component>\n  </div>\n<div>\n"

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



if (!/localhost/.test(document.location.host)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map