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
/**
 * Created by Nelly on 10/20/2016.
 */
var core_1 = require('@angular/core');
var HeroBirthdayComponent = (function () {
    function HeroBirthdayComponent() {
        this.q = 2;
        this.p = 5;
    }
    HeroBirthdayComponent = __decorate([
        core_1.Component({
            selector: 'hero-birthday',
            template: "\n\n    <p>{{p | calcprice : q}} </p>\n    \n"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroBirthdayComponent);
    return HeroBirthdayComponent;
}());
exports.HeroBirthdayComponent = HeroBirthdayComponent;
//# sourceMappingURL=hero-birthday1.component.js.map