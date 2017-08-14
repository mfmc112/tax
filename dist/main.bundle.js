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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tax_return_tax_return_component__ = __webpack_require__("../../../../../src/app/tax-return/tax-return.component.ts");
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
    { path: 'landing-page', component: __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'tax-return', component: __WEBPACK_IMPORTED_MODULE_4__tax_return_tax_return_component__["a" /* TaxReturnComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/ng2-bs3-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator_validator_rules_component__ = __webpack_require__("../../../../../src/app/validator/validator-rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__landing_page_client_list_component__ = __webpack_require__("../../../../../src/app/landing-page/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tax_return_tax_return_component__ = __webpack_require__("../../../../../src/app/tax-return/tax-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tax_return_tax_header_component__ = __webpack_require__("../../../../../src/app/tax-return/tax-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tax_return_tax_menu_component__ = __webpack_require__("../../../../../src/app/tax-return/tax-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tax_return_tax_area_component__ = __webpack_require__("../../../../../src/app/tax-return/tax-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tax_return_tax_content_component__ = __webpack_require__("../../../../../src/app/tax-return/tax-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__working_client_service__ = __webpack_require__("../../../../../src/app/working-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__working_tax_return_service__ = __webpack_require__("../../../../../src/app/working-tax-return.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__client_new_client_component__ = __webpack_require__("../../../../../src/app/client/new-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__client_client_api_service__ = __webpack_require__("../../../../../src/app/client/client-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_http_client_service__ = __webpack_require__("../../../../../src/app/common/http-client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // NgModel lives here, Reactive is for validation

















// client

//Services


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__landing_page_client_list_component__["a" /* ClientListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tax_return_tax_return_component__["a" /* TaxReturnComponent */],
            __WEBPACK_IMPORTED_MODULE_13__tax_return_tax_header_component__["a" /* TaxHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__tax_return_tax_menu_component__["a" /* TaxMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__tax_return_tax_area_component__["a" /* TaxAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_16__tax_return_tax_content_component__["a" /* TaxContentComponent */],
            __WEBPACK_IMPORTED_MODULE_20__client_new_client_component__["a" /* NewClientComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_18__working_client_service__["a" /* WorkingClientService */],
            __WEBPACK_IMPORTED_MODULE_19__working_tax_return_service__["a" /* WorkingTaxReturnService */],
            __WEBPACK_IMPORTED_MODULE_5__validator_validator_rules_component__["a" /* ValidatorRulesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_22__common_http_client_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_21__client_client_api_service__["a" /* ClientApiService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/client/client-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_http_client_service__ = __webpack_require__("../../../../../src/app/common/http-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientApiService = (function () {
    function ClientApiService(http) {
        this.http = http;
        this.url = '/api/clients';
    }
    ClientApiService.prototype.findByFilter = function (filter) {
        return this.http.get(this.url);
    };
    ClientApiService.prototype.insert = function (client) {
        return this.http.post(this.url, client);
    };
    return ClientApiService;
}());
ClientApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_http_client_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_http_client_service__["a" /* HttpClientService */]) === "function" && _a || Object])
], ClientApiService);

var _a;
//# sourceMappingURL=client-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/client/new-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/ng2-bs3-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_validator_rules_component__ = __webpack_require__("../../../../../src/app/validator/validator-rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_api_service__ = __webpack_require__("../../../../../src/app/client/client-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_client__ = __webpack_require__("../../../../../src/app/common/client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewClientComponent = (function () {
    function NewClientComponent(formBuilder, clientApiService) {
        this.formBuilder = formBuilder;
        this.clientApiService = clientApiService;
        this.validator = new __WEBPACK_IMPORTED_MODULE_3__validator_validator_rules_component__["a" /* ValidatorRulesComponent */]();
        var SSN_PATTERN = this.validator.getSSNPattern();
        // Here we are using the FormBuilder to build out our form.
        this.clientForm = formBuilder.group({
            'firstName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(45)])],
            'middleName': '',
            'lastName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(45)])],
            'returnYear': '2017',
            'ssnItin': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(SSN_PATTERN)])],
            'generateItin': false
        });
    }
    NewClientComponent.prototype.submitForm = function (fields) {
        var client = new __WEBPACK_IMPORTED_MODULE_5__common_client__["a" /* Client */]();
        if (fields.ssnItin && /^(9\d{2})([ \-]?)([7]\d|8[0-8])([ \-]?)(\d{4})$/.test(fields.ssnItin)) {
            client.setITIN(fields.ssnItin);
        }
        else {
            client.setSSN(fields.ssnItin);
        }
        client.firstName = fields.firstName;
        client.middleName = fields.middleName;
        client.lastName = fields.lastName;
        this.addClient(client);
    };
    NewClientComponent.prototype.open = function () {
        this.modal.open();
    };
    NewClientComponent.prototype.close = function () {
        this.modal.close();
    };
    NewClientComponent.prototype.addClient = function (client) {
        var _this = this;
        this.clientApiService.insert(client).subscribe(function (data) { return _this.close(); });
    };
    return NewClientComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newClientModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === "function" && _a || Object)
], NewClientComponent.prototype, "modal", void 0);
NewClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-client-modal',
        template: __webpack_require__("../../../../../src/app/client/templates/new-client.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__client_client_api_service__["a" /* ClientApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__client_client_api_service__["a" /* ClientApiService */]) === "function" && _c || Object])
], NewClientComponent);

var _a, _b, _c;
//# sourceMappingURL=new-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/client/templates/new-client.component.html":
/***/ (function(module, exports) {

module.exports = "<modal #newClientModal>\r\n  <modal-header [show-close]=\"true\">\r\n      <h4 class=\"modal-title\">NEW CLIENT</h4>\r\n  </modal-header>\r\n  <modal-body>\r\n    <form [formGroup]=\"clientForm\" (submit)=\"submitForm(clientForm.value)\" style=\"min-height:150px\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label>Return Year</label>\r\n              <select formControlName=\"returnYear\" class=\"form-control\">\r\n                <option value=\"2017\">2017</option>\r\n                <option value=\"2016\">2016</option>\r\n                <option value=\"2015\">2015</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label>SSN/ITIN</label>\r\n              <input formControlName=\"ssnItin\" type=\"text\" placeholder=\"###-##-####\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group middle_lable\">\r\n              <strong>or <input formControlName=\"generateItin\" type=\"checkbox\"> Generate ITIN</strong>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"divider-20\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"form-group\">\r\n              <label><br>First Name</label>\r\n              <input formControlName=\"firstName\" type=\"text\" placeholder=\"Client First Name\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\" style=\"text-align: center;\">\r\n            <div class=\"form-group\">\r\n              <label>Middle<br>Name</label>\r\n              <input formControlName=\"middleName\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"form-group\">\r\n              <label><br>Last Name</label>\r\n              <input formControlName=\"lastName\" type=\"text\" placeholder=\"Last Name\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  </modal-body>\r\n  <modal-footer>\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!clientForm.valid\" (click)=\"submitForm(clientForm.value)\">Add Client</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Close</button>\r\n  </modal-footer>\r\n</modal>\r\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    Client.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Client.prototype.setMiddleName = function (middleName) {
        this.middleName = middleName;
    };
    Client.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Client.prototype.setSSN = function (ssn) {
        this.ssn = ssn;
    };
    Client.prototype.setITIN = function (itin) {
        this.itin = itin;
    };
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../../../../src/app/common/http-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClientService = (function () {
    function HttpClientService(http) {
        this.http = http;
        this.urlBase = ''; //'http://localhost:5000';
    }
    HttpClientService.prototype.createAuthorizationHeader = function (headers) {
        //TODO: implement that in the future
        //headers.set('Authorization', 'Basic ' + btoa('username:password'));
    };
    HttpClientService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.urlBase + url, { headers: headers });
    };
    HttpClientService.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(this.urlBase + url, data, { headers: headers });
    };
    HttpClientService.prototype.put = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.put(this.urlBase + url, data, { headers: headers });
    };
    return HttpClientService;
}());
HttpClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], HttpClientService);

var _a;
//# sourceMappingURL=http-client.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/tax-return.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxReturn; });
var TaxReturn = (function () {
    function TaxReturn() {
    }
    TaxReturn.prototype.setEstimate = function (estimate) {
        this.estimate = estimate;
    };
    TaxReturn.prototype.setCurrentAGI = function (currentAGI) {
        this.currentAGI = currentAGI;
    };
    return TaxReturn;
}());

//# sourceMappingURL=tax-return.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/client-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_client__ = __webpack_require__("../../../../../src/app/common/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_tax_return__ = __webpack_require__("../../../../../src/app/common/tax-return.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__working_client_service__ = __webpack_require__("../../../../../src/app/working-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__working_tax_return_service__ = __webpack_require__("../../../../../src/app/working-tax-return.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_client_api_service__ = __webpack_require__("../../../../../src/app/client/client-api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientListComponent = (function () {
    function ClientListComponent(router, workingClientService, workingTaxReturnService, clientApiService) {
        this.router = router;
        this.workingClientService = workingClientService;
        this.workingTaxReturnService = workingTaxReturnService;
        this.clientApiService = clientApiService;
        this.findClients();
    }
    ClientListComponent.prototype.taxReturn = function () {
        var client = new __WEBPACK_IMPORTED_MODULE_2__common_client__["a" /* Client */]();
        client.setFirstName('Kristy');
        client.setMiddleName('L');
        client.setLastName('Campbell');
        this.workingClientService.setClient(client);
        var taxReturn = new __WEBPACK_IMPORTED_MODULE_3__common_tax_return__["a" /* TaxReturn */]();
        taxReturn.setEstimate(2500);
        taxReturn.setCurrentAGI(24858);
        this.workingTaxReturnService.setTaxReturn(taxReturn);
        this.router.navigate(['./tax-return']);
    };
    ClientListComponent.prototype.findClients = function () {
        var _this = this;
        this.clientApiService.findByFilter({}).subscribe(function (data) { return _this.clientList = data; });
    };
    return ClientListComponent;
}());
ClientListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-list',
        styles: [__webpack_require__("../../../../../src/app/landing-page/templates/client-list.component.css")],
        template: __webpack_require__("../../../../../src/app/landing-page/templates/client-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__working_client_service__["a" /* WorkingClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__working_client_service__["a" /* WorkingClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__working_tax_return_service__["a" /* WorkingTaxReturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__working_tax_return_service__["a" /* WorkingTaxReturnService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__client_client_api_service__["a" /* ClientApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__client_client_api_service__["a" /* ClientApiService */]) === "function" && _d || Object])
], ClientListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_new_client_component__ = __webpack_require__("../../../../../src/app/client/new-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
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
    LandingPageComponent.prototype.close = function () {
        this.newClientComponent.close();
    };
    LandingPageComponent.prototype.open = function () {
        this.newClientComponent.open();
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        this.user = this.commonService.getUser();
    };
    return LandingPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__client_new_client_component__["a" /* NewClientComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__client_new_client_component__["a" /* NewClientComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client_new_client_component__["a" /* NewClientComponent */]) === "function" && _a || Object)
], LandingPageComponent.prototype, "newClientComponent", void 0);
LandingPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'landing-page',
        styles: [__webpack_require__("../../../../../src/app/landing-page/templates/landing-page.component.css")],
        template: __webpack_require__("../../../../../src/app/landing-page/templates/landing-page.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]) === "function" && _b || Object])
], LandingPageComponent);

var _a, _b;
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

module.exports = "    <table *ngIf=\"clientList\" class=\"table table-hover\">\r\n      <tr>\r\n        <td class=\"active\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td class=\"active\">Client Name</td>\r\n        <td class=\"active\">Status</td>\r\n        <td class=\"active\">Preparer</td>\r\n        <td class=\"active\">Last Updated</td>\r\n      </tr>\r\n      <tr *ngFor=\"let client of clientList.clients\" (click)=\"taxReturn(client._id)\">\r\n        <td class=\"info\"><input type=\"checkbox\" class=\"checkbox\"></td>\r\n        <td>{{client.fistName}} {{client.middleName}} {{client.lastName}}</td>\r\n        <td>In Progress</td>\r\n        <td>Josue Edgardo Alberto</td>\r\n        <td>08/05/2017 22:29</td>\r\n      </tr>\r\n    </table>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/templates/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.year-font {\r\n  font-size: 40px;\r\n  font-weight: 600;\r\n  color: #C3C3C3;\r\n}\r\n\r\n.middle_lable {\r\n  top: 30px;\r\n  position: relative;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/templates/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-1\" style=\"position:relative; top:20px;\">\r\n      <button type=\"button\" id=\"myButton\" (click)=\"open()\" class=\"btn large-button large-button-blue\" autocomplete=\"off\">\r\n        <span class=\"glyphicon glyphicon-plus medium-button-icon\"></span>\r\n        <span class=\"glyphicon glyphicon-user medium-button-icon\"></span>\r\n        <div class=\"divider-5\"></div>\r\n        New Client\r\n      </button>\r\n      <new-client-modal></new-client-modal>\r\n    </div>\r\n    <div class=\"col-md-11\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\"><span class=\"year-font\">2017</span></div>\r\n        <div class=\"col-md-10\">&nbsp;</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <label for=\"clientName\">&nbsp;</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-btn\" id=\"basic-addon1\">>\r\n                <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\r\n            </span>\r\n            <input type=\"text\" name=\"clientName\" class=\"form-control\" placeholder=\"Client Name\" aria-describedby=\"basic-addon1\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <label for=\"returnYear\">Return Year</label>\r\n            <select name=\"returnYear\" class=\"form-control\">\r\n              <option value=\"2017\">2017</option>\r\n              <option value=\"2016\">2016</option>\r\n              <option value=\"2015\">2015</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <label for=\"federalStatus\">Federal Status</label>\r\n            <select name=\"federalStatus\" class=\"form-control\">\r\n              <option value=\"In Progress\">In Progress</option>\r\n              <option value=\"On Hold\">On Hold</option>\r\n              <option value=\"E-Filed\">E-Filed</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <label for=\"taxPreparer\">Federal Status</label>\r\n            <select name=\"taxPreparer\" class=\"form-control\">\r\n              <option value=\"Josue Edgardo Albertp\">Josue Edgardo Alberto</option>\r\n              <option value=\"Marcos Costa\">Marcos Costa</option>\r\n              <option value=\"Kristy Campbell\">Kristy Campbell</option>\r\n              <option value=\"Val V\">Valerie Osipenko</option>\r\n            </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"divider-10\"></div>\r\n  <!-- list starts here-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <client-list></client-list>\r\n    </div>\r\n  </div>\r\n  <!-- list ends here-->\r\n</div>\r\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]) === "function" && _a || Object)
], LoginComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

/***/ "../../../../../src/app/tax-return/tax-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__working_client_service__ = __webpack_require__("../../../../../src/app/working-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__ = __webpack_require__("../../../../../src/app/working-tax-return.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxAreaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaxAreaComponent = (function () {
    function TaxAreaComponent(workingClientService, workingTaxReturnService) {
        this.workingClientService = workingClientService;
        this.workingTaxReturnService = workingTaxReturnService;
    }
    TaxAreaComponent.prototype.ngOnInit = function () {
        this.client = this.workingClientService.getClient();
        this.taxReturn = this.workingTaxReturnService.getTaxReturn();
    };
    return TaxAreaComponent;
}());
TaxAreaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tax-area-component',
        template: __webpack_require__("../../../../../src/app/tax-return/templates/tax-area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tax-return/templates/tax-return.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */]) === "function" && _b || Object])
], TaxAreaComponent);

var _a, _b;
//# sourceMappingURL=tax-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/tax-return/tax-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__working_client_service__ = __webpack_require__("../../../../../src/app/working-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__ = __webpack_require__("../../../../../src/app/working-tax-return.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaxContentComponent = (function () {
    function TaxContentComponent(workingClientService, workingTaxReturnService) {
        this.workingClientService = workingClientService;
        this.workingTaxReturnService = workingTaxReturnService;
    }
    TaxContentComponent.prototype.ngOnInit = function () {
        this.client = this.workingClientService.getClient();
        this.taxReturn = this.workingTaxReturnService.getTaxReturn();
    };
    return TaxContentComponent;
}());
TaxContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tax-content-component',
        template: __webpack_require__("../../../../../src/app/tax-return/templates/tax-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tax-return/templates/tax-return.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */]) === "function" && _b || Object])
], TaxContentComponent);

var _a, _b;
//# sourceMappingURL=tax-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/tax-return/tax-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__working_client_service__ = __webpack_require__("../../../../../src/app/working-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__ = __webpack_require__("../../../../../src/app/working-tax-return.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaxHeaderComponent = (function () {
    function TaxHeaderComponent(workingClientService, workingTaxReturnService) {
        this.workingClientService = workingClientService;
        this.workingTaxReturnService = workingTaxReturnService;
    }
    TaxHeaderComponent.prototype.ngOnInit = function () {
        this.client = this.workingClientService.getClient();
        this.taxReturn = this.workingTaxReturnService.getTaxReturn();
    };
    return TaxHeaderComponent;
}());
TaxHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tax-header-component',
        template: __webpack_require__("../../../../../src/app/tax-return/templates/tax-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tax-return/templates/tax-return.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */]) === "function" && _b || Object])
], TaxHeaderComponent);

var _a, _b;
//# sourceMappingURL=tax-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/tax-return/tax-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__working_client_service__ = __webpack_require__("../../../../../src/app/working-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__ = __webpack_require__("../../../../../src/app/working-tax-return.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaxMenuComponent = (function () {
    function TaxMenuComponent(workingClientService, workingTaxReturnService) {
        this.workingClientService = workingClientService;
        this.workingTaxReturnService = workingTaxReturnService;
    }
    TaxMenuComponent.prototype.ngOnInit = function () {
        this.client = this.workingClientService.getClient();
        this.taxReturn = this.workingTaxReturnService.getTaxReturn();
    };
    return TaxMenuComponent;
}());
TaxMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tax-menu-component',
        template: __webpack_require__("../../../../../src/app/tax-return/templates/tax-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tax-return/templates/tax-return.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */]) === "function" && _b || Object])
], TaxMenuComponent);

var _a, _b;
//# sourceMappingURL=tax-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/tax-return/tax-return.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__working_client_service__ = __webpack_require__("../../../../../src/app/working-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__ = __webpack_require__("../../../../../src/app/working-tax-return.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxReturnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaxReturnComponent = (function () {
    function TaxReturnComponent(workingClientService, workingTaxReturnService) {
        this.workingClientService = workingClientService;
        this.workingTaxReturnService = workingTaxReturnService;
    }
    TaxReturnComponent.prototype.ngOnInit = function () {
        this.client = this.workingClientService.getClient();
        this.taxReturn = this.workingTaxReturnService.getTaxReturn();
    };
    return TaxReturnComponent;
}());
TaxReturnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-tax-return',
        template: __webpack_require__("../../../../../src/app/tax-return/templates/tax-return.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tax-return/templates/tax-return.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__working_client_service__["a" /* WorkingClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__working_tax_return_service__["a" /* WorkingTaxReturnService */]) === "function" && _b || Object])
], TaxReturnComponent);

var _a, _b;
//# sourceMappingURL=tax-return.component.js.map

/***/ }),

/***/ "../../../../../src/app/tax-return/templates/tax-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-2 step-menu-border\">\r\n    <tax-menu-component></tax-menu-component>\r\n  </div>\r\n  <div class=\"col-md-10 area-menu area-menu-border\">\r\n    <tax-content-component></tax-content-component>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tax-return/templates/tax-content.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/tax-return/templates/tax-header.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h4>CLIENT // {{client.firstName}} {{client.middleName}} {{client.lastName}}</h4>\r\n      <div class=\"divider-10\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 ammount-box tax-header-row\">\r\n      <span class=\"big-value\">${{taxReturn.estimate}}</span><br>\r\n      FEDERAL<div class=\"divider-5\"></div>\r\n      Current AGI: {{taxReturn.currentAGI}}\r\n    </div>\r\n    <div class=\"col-md-4 tax-header-border-right\">\r\n      <div class=\"tax-header-row\">\r\n        <button type=\"button\" id=\"attachButton\" class=\"btn large-button large-button-blue tax-header-button\" autocomplete=\"off\">\r\n          <span class=\"glyphicon glyphicon-paperclip large-button-icon\"></span>\r\n          <div class=\"divider-5\"></div>\r\n          Attachments\r\n        </button>\r\n\r\n        <button type=\"button\" id=\"summaryButton\" class=\"btn large-button large-button-blue align-bottom tax-header-button\" autocomplete=\"off\">\r\n          <span class=\"glyphicon glyphicon-list-alt large-button-icon\"></span>\r\n          <br>\r\n          Return<br>Summary\r\n        </button>\r\n\r\n        <button type=\"button\" id=\"printButton\" class=\"btn large-button large-button-blue align-bottom tax-header-button\" autocomplete=\"off\">\r\n          <span class=\"glyphicon glyphicon-print large-button-icon\"></span>\r\n          <div class=\"divider-5\"></div>\r\n          Print\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">&nbsp;</div>\r\n\r\n    <div class=\"col-md-2\">\r\n      <div class=\"tax-header-row pull-right\">\r\n        <button type=\"button\" id=\"printButton\" class=\"btn large-button large-button-red align-bottom tax-header-button\" autocomplete=\"off\">\r\n          Error<br>Check\r\n        </button>\r\n\r\n        <button type=\"button\" id=\"printButton\" class=\"btn large-button large-button-grey align-bottom tax-header-button\" autocomplete=\"off\">\r\n          Send\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tax-return/templates/tax-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>FEDERAL FORMS</h4>\r\n<div class=\"panel-group steps-menu\" id=\"accordion\">\r\n  <!-- Client Information -->\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4 class=\"panel-title\">\r\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#client\">\r\n              <span class=\"glyphicon glyphicon-user\">&nbsp;</span>\r\n              Client Information\r\n            </a>\r\n        </h4>\r\n    </div>\r\n    <div id=\"client\" class=\"panel-collapse collapse in\">\r\n        <div class=\"panel-body\">\r\n            <table class=\"table\">\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"glyphicon glyphicon-ok text-success\"></span>&nbsp;<a>Personal Information</a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"glyphicon glyphicon-ok text-success\"></span>&nbsp;<a>Filing Information</a>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n          <h4 class=\"panel-title\">\r\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#form1040\">\r\n                <span class=\"glyphicon glyphicon-user\">&nbsp;</span>\r\n                Form 1040\r\n              </a>\r\n          </h4>\r\n      </div>\r\n      <div id=\"form1040\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\">\r\n              <table class=\"table\">\r\n                  <tr>\r\n                      <td>\r\n                          <span class=\"glyphicon glyphicon-ok text-success\"></span>&nbsp;<a>Page 1</a>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>\r\n                          <span class=\"glyphicon glyphicon-ok text-success\"></span>&nbsp;<a>Page 2</a>\r\n                      </td>\r\n                  </tr>\r\n              </table>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <!-- W-2 -->\r\n  <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n          <h4 class=\"panel-title\">\r\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#w2\">\r\n                <span class=\"glyphicon glyphicon-user\">&nbsp;</span>\r\n                W-2\r\n              </a>\r\n          </h4>\r\n      </div>\r\n      <div id=\"w2\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\">\r\n              <table class=\"table\">\r\n                  <tr>\r\n                      <td>\r\n                          <span class=\"glyphicon glyphicon-plus\"></span>&nbsp;<a> Add W-2</a>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>\r\n                          <span class=\"glyphicon glyphicon-ok text-success\"></span>&nbsp;<a>W-2 (T-AXXESS HEALTHCARE)</a>\r\n                      </td>\r\n                  </tr>\r\n              </table>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tax-return/templates/tax-return.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.ammount-box {\r\n  background-color: #9EBA7E;\r\n  font-size: 15px;\r\n  font-family: Arial!important;\r\n  border: #000000;\r\n  border-width: 1px;\r\n  border-bottom-width: 0;\r\n  border-style: solid;\r\n  border-right-width: 0;\r\n}\r\n\r\n.big-value {\r\n  font-size: 30px;\r\n}\r\n\r\n.tax-header-row {\r\n  height: 100px;\r\n}\r\n\r\n.tax-header-button {\r\n  margin-top: 5px;\r\n}\r\n\r\n.tax-header-border-right{\r\n  border-left: #000000;\r\n  border-left-style: solid;\r\n  border-left-width: 1px;\r\n}\r\n\r\n.step-menu-border {\r\n  border: #000000;\r\n  border-width: 1px;\r\n  border-right-width: 0;\r\n  border-style: solid;\r\n  background-color: #bfbfbf;\r\n  min-height:500px;\r\n}\r\n\r\n.steps-menu {\r\n\r\n\r\n}\r\n\r\n.area-menu {\r\n   min-height:500px;\r\n}\r\n\r\n.area-menu-border {\r\n  border: #000000;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n}\r\n\r\n.panel-group .panel {\r\n    border-radius: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tax-return/templates/tax-return.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"client && client.firstName\" style=\"border-right-style: solid;border-right-width: 1px;\">\r\n  <div class=\"col-md-12\">\r\n    <tax-header-component></tax-header-component>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <tax-area-component></tax-area-component>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"colsm-12\">\n    <menu-component></menu-component>\n  </div>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/validator/validator-rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorRulesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidatorRulesComponent = (function () {
    function ValidatorRulesComponent() {
        this.SSN_REGEXP = /^(\d{3}-?\d{2}-?\d{4})$/;
    }
    ValidatorRulesComponent.prototype.getSSNPattern = function () {
        return this.SSN_REGEXP;
    };
    return ValidatorRulesComponent;
}());
ValidatorRulesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: ''
    })
], ValidatorRulesComponent);

//# sourceMappingURL=validator-rules.component.js.map

/***/ }),

/***/ "../../../../../src/app/working-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkingClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorkingClientService = (function () {
    function WorkingClientService() {
    }
    WorkingClientService.prototype.getClient = function () {
        return this.client;
    };
    WorkingClientService.prototype.setClient = function (client) {
        this.client = client;
    };
    return WorkingClientService;
}());
WorkingClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WorkingClientService);

//# sourceMappingURL=working-client.service.js.map

/***/ }),

/***/ "../../../../../src/app/working-tax-return.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkingTaxReturnService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorkingTaxReturnService = (function () {
    function WorkingTaxReturnService() {
    }
    WorkingTaxReturnService.prototype.getTaxReturn = function () {
        return this.taxReturn;
    };
    WorkingTaxReturnService.prototype.setTaxReturn = function (taxReturn) {
        this.taxReturn = taxReturn;
    };
    return WorkingTaxReturnService;
}());
WorkingTaxReturnService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WorkingTaxReturnService);

//# sourceMappingURL=working-tax-return.service.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



if (!/localhost/.test(document.location.host)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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