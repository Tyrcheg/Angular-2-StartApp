"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "hello";
        this.users = [
            { id: 25, name: "josh", username: "simple" },
            { id: 26, name: "asdaa", username: "monkey" },
            { id: 27, name: "nicka", username: "zeus" },
            { id: 21, name: "lalka", username: "edward" },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n                <a href=\"/\" class=\"navbar-brand\">My Angular 2 app</a>\n            </div>\n        </nav> \n    </header>\n\n    <main>\n        <div class = \"jumbotron\">\n            <h1>Welcome to Arthur's app </h1>\n            <p>{{message}}</p>\n        </div>\n\n        <div *ngIf=\"users\">\n            <div *ngFor=\"let user of users\">\n                {{user.name}} {{user.username}}\n            </div>\n        </div>\n    </main>\n\n    <footer class=\"text-center\" >\n        Copyright &copy; 2016\n    </footer>\n    ",
        styles: ["\n        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map