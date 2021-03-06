(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["msg-inbox-inbox-module"],{

/***/ "5ZWC":
/*!*******************************************!*\
  !*** ./src/app/msg/inbox/inbox.module.ts ***!
  \*******************************************/
/*! exports provided: InboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox-routing.module */ "ABew");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox.page */ "AhvM");
/* harmony import */ var _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/msg-menu/msg-menu.component */ "7WMo");







// 17.1) Importa dependências

let InboxPageModule = class InboxPageModule {
};
InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"]
        ],
        declarations: [
            _inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"],
            // 17.2) Declara dependências
            _components_msg_menu_msg_menu_component__WEBPACK_IMPORTED_MODULE_7__["MsgMenuComponent"],
        ]
    })
], InboxPageModule);



/***/ }),

/***/ "6o9R":
/*!*******************************************!*\
  !*** ./src/app/msg/inbox/inbox.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* 14.1) Formata o grid das mesagens */\nion-grid {\n  margin-top: 1rem;\n}\nion-row ion-col:first-child {\n  text-align: center;\n  background: #eee;\n  color: #333;\n  padding: 0.2rem;\n}\n/* 18.1) Estiliza mensagens lidas de forma diferente */\nion-row ion-col.readed:first-child {\n  background: #888;\n}\nion-grid small {\n  display: block;\n  margin-top: 0.2rem;\n}\nion-row {\n  margin: 1rem 0;\n}\nion-col div {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXNnL2luYm94L2luYm94LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBQTtBQUNBO0VBQ0ksZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQSxzREFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbXNnL2luYm94L2luYm94LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDE0LjEpIEZvcm1hdGEgbyBncmlkIGRhcyBtZXNhZ2VucyAqL1xyXG5pb24tZ3JpZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5pb24tcm93IGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGNvbG9yICAgICA6ICMzMzM7XHJcbiAgICBwYWRkaW5nICAgOiAuMlxccmVtO1xyXG59XHJcblxyXG4vKiAxOC4xKSBFc3RpbGl6YSBtZW5zYWdlbnMgbGlkYXMgZGUgZm9ybWEgZGlmZXJlbnRlICovXHJcbmlvbi1yb3cgaW9uLWNvbC5yZWFkZWQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuaW9uLWdyaWQgc21hbGwge1xyXG4gICAgZGlzcGxheSAgIDogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuaW9uLWNvbCBkaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBmb250LXdlaWdodCAgOiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "ABew":
/*!***************************************************!*\
  !*** ./src/app/msg/inbox/inbox-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function() { return InboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.page */ "AhvM");




const routes = [
    {
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
    }
];
let InboxPageRoutingModule = class InboxPageRoutingModule {
};
InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InboxPageRoutingModule);



/***/ }),

/***/ "AhvM":
/*!*****************************************!*\
  !*** ./src/app/msg/inbox/inbox.page.ts ***!
  \*****************************************/
/*! exports provided: InboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPage", function() { return InboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inbox.page.html */ "KXDH");
/* harmony import */ var _inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.page.scss */ "6o9R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




// 10.1) Importa dependências



// 11.1) Importa as dependências

let InboxPage = class InboxPage {
    constructor(
    // 10.2) Injeta dependências
    router, app, storage, 
    // 11.2) Injeta dependências
    fbStore) {
        this.router = router;
        this.app = app;
        this.storage = storage;
        this.fbStore = fbStore;
    }
    ngOnInit() { }
    // 10.4) Se tem perfil, obtém dados.
    //       Se não tem, vai para "novo perfil"
    ionViewWillEnter() {
        // Testa o perfil local (true e false)
        this.app.isProfile().then((data) => {
            // Se existe, faz as ações da página
            if (data) {
                // Obtém dados do login local e armazena em 'userData'
                this.storage.get('userData', { type: 'string' }).subscribe((uData) => {
                    this.userData = JSON.parse(uData);
                    // Obtém dados do perfil local e armazena em 'userProfile'
                    this.storage.get('userProfile', { type: 'string' }).subscribe((pData) => {
                        this.userProfile = JSON.parse(pData);
                        // 11.4) Obtém todas as mensagens para a 'view'
                        this.getAllMessages();
                    });
                });
                // Se não existe perfil, vai para o cadastro de perfil
            }
            else {
                this.router.navigate(['/user/new']);
            }
        });
    }
    // 11.5) Obtém todas as mensagens para a 'view'
    getAllMessages() {
        // Lê mesangens do banco de dados com base no Id do usuário logado
        this.fbStore.collection(`messages/${this.userData.uid}/inbox`, ref => ref.orderBy('date', 'desc')).valueChanges({ idField: 'msgId' }).subscribe((mData) => {
            // Variável local para as mensagens
            const allMessages = [];
            // Obtém cada mensagem recebida
            mData.forEach((msgData) => {
                // 13.1) Não exibe mensagens apagadas
                if (msgData.status !== 'Apagada') {
                    // Obtém o nome de que enviou a mensagem
                    this.fbStore.doc(`users/${msgData.from}`).valueChanges().subscribe((data) => {
                        msgData.fromName = data.name;
                        // 14) Seleciona ícone conforme status da mensagem
                        switch (msgData.status) {
                            case 'Não lida':
                                msgData.statusIcon = 'mail-outline';
                                break;
                            case 'Lida':
                                msgData.statusIcon = 'mail-open-outline';
                                break;
                            case 'Respondida':
                                msgData.statusIcon = 'send-outline';
                                break;
                        }
                        // Lista mensagem em "todas as mensagens"
                        allMessages.push(msgData);
                    });
                }
            });
            // Envia mensagens para a view
            this.allMessages = allMessages;
        });
    }
};
InboxPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inbox',
        template: _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InboxPage);



/***/ }),

/***/ "KXDH":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/msg/inbox/inbox.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 10.1) Menu e título -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Caixa de Entrada</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- 14.1) Lista mensagens recebidas -->\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Mensagens recebidas:</p>\r\n\r\n    <ion-grid class=\"allMessages\" *ngIf=\"allMessages?.length > 0\">\r\n\r\n      <ion-row *ngFor=\"let msg of allMessages\">\r\n\r\n        <!-- 18.2) Estiliza mensagens lidas de forma diferente -->\r\n        <ion-col size=\"1\" title=\"{{ msg.status }}\" [ngClass]=\"{'readed' : msg.status !== 'Não lida'}\">\r\n          <ion-icon name=\"{{msg.statusIcon}}\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div><a routerLink=\"/msg/view/inbox/{{ msg.msgId }}\">{{ msg.subject }}</a></div>\r\n          <small>De <strong>{{ msg.fromName }}</strong></small>\r\n          <small>\r\n            Em <strong>{{ msg.date | date: ['dd/MM/yyyy, HH:mm'] }}.</strong>\r\n            &nbsp;|&nbsp; {{ msg.status }}\r\n          </small>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n    <!-- 18.1) Se não exitem mensagens à exibir -->\r\n    <p class=\"ion-text-center\" *ngIf=\"allMessages?.length == 0\">Nenhuma mensagem...</p>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- 17.1) Menu de mensagens -->\r\n<app-msg-menu></app-msg-menu>");

/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/**
 * Serviços de uso geral
 *    Aqui estão alguns serviços usados em toda ou parte do aplicativo
 * @author Por Luferat
 */


// 3.1) Importa dependências
 // Roteamento
 // Caixa de alerta
// 4.1) Importa dependências
 // Armazenamento local
// 13.1) Importa dependências

let AppService = class AppService {
    constructor(
    // 3.2) Injeção das dependências
    router, // Roteamento
    alertController, // Caixa de alerta
    // 4.2) Injeção das dependências
    storage, // Armazenamento local
    // 13.2) Injeção das dependências
    fbStore) {
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.fbStore = fbStore;
    }
    // 3.3) Caixa de alerta para feedback (https://ionicframework.com/docs/api/alert)
    myAlert(title, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: text,
                buttons: [{
                        text: 'Ok',
                        handler: () => true
                    }]
            });
            yield alert.present();
        });
    }
    // 4.3) Método que detecta a presença do perfil local
    isProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Constrói a promise
            return new Promise((resolve, reject) => {
                // Lê o armazenamento local
                this.storage.get('userProfile', { type: 'string' }).subscribe({
                    next: (data) => {
                        // Se perfil, retorna 'true'
                        if (data) {
                            resolve(true);
                        }
                        // Se não tem perfil, retorna 'false'
                        else {
                            resolve(false);
                        }
                    },
                    // Em caso de erro ao tentar acessar 'storage'
                    error: (error) => console.error(error)
                });
            });
        });
    }
    // 13.3) Apaga uma mensagem da caixa de mensagens
    msgDelete(userId, msgBox, msgId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // 14.1) Exibe a caixa de alerta e de confirmação
            const alert = yield this.alertController.create({
                cssClass: '',
                header: 'Apagar mensagem',
                message: 'Tem certeza que deseja apagar esta mensagem? Este processo é irreversível!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => false
                    }, {
                        text: 'Apagar',
                        handler: () => {
                            // Localize a caixa correta e apaga a mensagem
                            this.fbStore.collection(`messages/${userId}/${msgBox}`).doc(msgId).update({ status: 'Apagada' })
                                // Se a mensagem foi apagada, retorna para a listagem da caixa
                                .then(() => { this.router.navigate([`/msg/${msgBox}`]); })
                                // Se deu erro, exibe
                                .catch(error => { console.log(error); });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AppService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ })

}]);
//# sourceMappingURL=msg-inbox-inbox-module-es2015.js.map