"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var yearbook_component_1 = require("./yearbook.component");
//import {ClientsService} from './clients.service'
var http_1 = require("@angular/http");
//import {MembersService} from './members.service'
var YearbookModule = (function () {
    function YearbookModule() {
    }
    return YearbookModule;
}());
YearbookModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule],
        declarations: [yearbook_component_1.YearbookComponent],
        exports: [],
        providers: []
    })
], YearbookModule);
exports.YearbookModule = YearbookModule;
//# sourceMappingURL=yearbook.module.js.map