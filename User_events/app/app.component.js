"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.clickMessage = '';
        this.values = '';
        this.values1 = '';
    }
    AppComponent.prototype.onClickMe = function () {
        this.clickMessage = 'You are my hero!';
    };
    AppComponent.prototype.onKey = function (value) {
        this.values1 += value + ' | ';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'click-me',
            template: "\n    <input #box (keyup)=\"0\">\n    <p>{{box.value}}</p>\n    \n    <input #enter (keyup.enter) = \"values=enter.value\"/>\n    <p>{{values}}</p>\n    \n    <input #box1 (keyup)=\"onKey(box1.value)\">\n    <p>{{values1}}</p>\n    \n    <button (click)=\"onClickMe()\">Click me!</button>\n    {{clickMessage}}"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map