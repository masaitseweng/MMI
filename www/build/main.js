webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, Api, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    // Login Function 
    LoginPage.prototype.onlogin = function (email, password) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        // var userData = { "email": email, "password": password}
        var userData = { "email": "rob@email.com", "password": "password", "returnSecureToken": true };
        this.Api.PUTapiLoginUrl(userData).subscribe(function (DATA) {
            //dismiss loader
            loader.dismiss();
            //local storage
            _this.storage.set('StoreSecureToken', DATA);
            // Route to Home page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
                key: DATA
            });
        }, function (error) {
            loader.dismiss();
            console.log(" ", error);
            console.log("error ", JSON.parse(error._body));
            _this.errorMessage = JSON.parse(error._body);
            console.log(" e", _this.errorMessage.error.message);
            var alert = _this.alertCtrl.create({
                title: 'Error Login',
                subTitle: _this.errorMessage.error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/masa/Documents/mmi/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Login </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<div class="login-image-style" >\n<h1 text-center>MMI</h1>\n</div>\n\n<ion-list>\n\n  <ion-item class="style-item">\n    <ion-input class="style-input" [(ngModel)]="email"   type="text" placeholder="Email Address"></ion-input>\n  </ion-item>\n\n  <ion-item class="style-item">\n    <ion-input class="style-input" [(ngModel)]="password"    type="password" placeholder="Password"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<ion-buttons start class="btn-wrapper1" >\n  <button ion-button color="dark" icon-only block (click)="onlogin(email,password)">\n    <ion-icon name="log-in"  ios="ios-log-in" md="md-log-in"  color="nav1"></ion-icon>\n    Login\n  </button>\n</ion-buttons>\n\n\n\n<!-- \n    <ion-item-divider color="light">A</ion-item-divider>\n    <ion-item-divider color="light">b</ion-item-divider>\n    <ion-item >Balance aaaa</ion-item>\n    <ion-item>Argentina</ion-item> -->\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/masa/Documents/mmi/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navParams, navCtrl, storage, Api, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.Api = Api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.acc = [];
        this.generateAcc = [];
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.key = navParams.get('key');
        console.log("key ", this.key);
        //Get API 
        this.Api.getapiAcountlist(this.key.localId, this.key.idToken).subscribe(function (Acountlist) {
            loader.dismiss();
            console.log(" ", Acountlist);
            var accountVar = Acountlist.accounts;
            // loop account 
            for (var loopAccount = 0; loopAccount < accountVar.length; loopAccount++) {
                console.log("loop ", accountVar[loopAccount]);
                _this.OpenAccount = accountVar[loopAccount];
                _this.acc.push(accountVar[loopAccount]);
                console.log("loop", _this.acc);
            }
            // this.acc = accountVar
            console.log(" ll", accountVar);
            var LastAccount = accountVar.pop();
            //  global variable
            _this.DepositAcc = LastAccount;
            // get the last Account and display Balance
            _this.Api.getBalance(LastAccount, _this.key.idToken).subscribe(function (DATA) {
                console.log(" balance", DATA);
                if (DATA === null) {
                    _this.balance = "0.00";
                    _this.overdraft = "0.00";
                }
                else {
                    _this.balance = DATA.balance;
                    _this.overdraft = DATA.overdraft;
                }
            });
            _this.name = Acountlist.name;
            _this.age = Acountlist.age;
            console.log(" name", _this.name);
        });
    }
    HomePage.prototype.viewBalance = function (acc) {
        var _this = this;
        console.log(" ", acc);
        this.DepositAcc = acc;
        this.Api.getBalance(acc, this.key.idToken).subscribe(function (DATA) {
            console.log(" D", DATA);
            if (DATA === null) {
                _this.balance = "0.00";
                _this.overdraft = "0.00";
            }
            else {
                _this.balance = DATA.balance;
                _this.overdraft = DATA.overdraft;
            }
        });
    };
    HomePage.prototype.openDeposit = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Deposit',
            message: "Enter amount you wanna deposit",
            inputs: [
                {
                    name: 'Balance',
                    placeholder: 'Balance'
                },
                {
                    name: 'Overdraft',
                    placeholder: 'Overdraft'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked', data);
                        console.log("account", _this.DepositAcc);
                        var body = {
                            "balance": data.Balance,
                            "overdraft": data.Overdraft
                        };
                        _this.Api.PutDeposit(_this.DepositAcc, _this.key.idToken, body).subscribe(function (DATA) {
                            console.log("Hi ", DATA);
                            var alert = _this.alertCtrl.create({
                                title: 'Deposit',
                                subTitle: 'Successfully deposited',
                                buttons: ['OK']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    // withdraw Function
    HomePage.prototype.openWithdraw = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Withdraw',
            message: "Enter amount you wanna Withdraw",
            inputs: [
                {
                    name: 'Balance',
                    placeholder: 'Balance'
                },
                {
                    name: 'Overdraft',
                    placeholder: 'Overdraft'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked', data);
                        console.log("account", _this.DepositAcc);
                        var body = {
                            "balance": data.Balance,
                            "overdraft": data.Overdraft
                        };
                        _this.Api.PutDeposit(_this.DepositAcc, _this.key.idToken, body).subscribe(function (DATA) {
                            console.log("Hi ", DATA);
                            var alert = _this.alertCtrl.create({
                                title: 'Withdraw',
                                subTitle: 'Successfully deposited',
                                buttons: ['OK']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    // open an Account
    HomePage.prototype.openNewaccount = function () {
        var _this = this;
        console.log(Math.floor(100000 + Math.random() * 900000));
        var GeneratedAccount = Math.floor(100000 + Math.random() * 900000);
        console.log("Ge ", GeneratedAccount);
        this.generateAcc.push(GeneratedAccount);
        var body = [
            this.generateAcc
        ];
        console.log(" ge", body);
        this.Api.putOpenAccount(this.key.localId, this.key.idToken, body).subscribe(function (DATA) {
            console.log(" ", DATA);
            var alert = _this.alertCtrl.create({
                title: 'New Account',
                subTitle: 'Your new account has been created ' + _this.generateAcc,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    HomePage.prototype.hello = function () {
        this.storage.clear();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/masa/Documents/mmi/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title text-center>\n     Welcome {{name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item-divider text-center  color="dark"><h1>Account List</h1></ion-item-divider>\n\n      <button ion-item  *ngFor="let acc of acc" (click)="viewBalance(acc)">\n        {{acc}}\n      </button>\n\n    <ion-item-divider text-center  color="light"> <ion-row no-padding>\n      <ion-col no-padding>\n    <h2>Balance </h2>\n      </ion-col>\n      <ion-col no-padding>\n    <h1>{{balance}}</h1>\n      </ion-col>\n    </ion-row> \n    </ion-item-divider>\n\n\n    <ion-item-divider text-center  color="dark"> <ion-row no-padding>\n      <ion-col no-padding>\n    <h2>Overdraft  </h2>\n      </ion-col>\n      <ion-col no-padding>\n    <h1>{{overdraft}}</h1>\n      </ion-col>\n    </ion-row> \n    </ion-item-divider>\n\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="dark">\n    <ion-row no-padding>\n      <ion-col no-padding>\n        <button ion-button color="light" block outline (click)="openDeposit()">Deposit</button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button color="light" block clear (click)="openNewaccount()">New account </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button color="light" block outline (click)="openWithdraw()">Withdraw</button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/masa/Documents/mmi/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/masa/Documents/mmi/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/masa/Documents/mmi/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        //login URL
        this.baseUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y";
        this.defaultURl = "https://momentum-retail-practical-test.firebaseio.com/clients/";
        // https://cors-anywhere.herokuapp.com/
        this.ProviderAcountlist = this.defaultURl;
        console.log('Hello ApiProvider Provider');
    }
    // login provider
    ApiProvider.prototype.PUTapiLoginUrl = function (body) {
        //Http Post function 
        var respond = this.http.post(this.baseUrl, body).map(function (res) { return res.json(); });
        return respond;
    };
    // Acount list provider
    ApiProvider.prototype.getapiAcountlist = function (localId, idToken) {
        // https://momentum-retail-practical-test.firebaseio.com/clients/<localId_from_login_response>.json?auth=<idToken_from_login_response>
        //Http get function 
        var respond = this.http.get("https://momentum-retail-practical-test.firebaseio.com/clients/" + localId + ".json?auth=" + idToken).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.getBalance = function (account_number, idToken) {
        var respond = this.http.get("https://momentum-retail-practical-test.firebaseio.com/accounts/" + account_number + ".json?auth=" + idToken).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.PutDeposit = function (account_number, idToken, body) {
        var respond = this.http.put("https://momentum-retail-practical-test.firebaseio.com/accounts/" + account_number + ".json?auth=" + idToken, body).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.putOpenAccount = function (localId, idToken, body) {
        var respond = this.http.put("https://momentum-retail-practical-test.firebaseio.com/clients/" + localId + "/accounts.json?auth=" + idToken, body).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map