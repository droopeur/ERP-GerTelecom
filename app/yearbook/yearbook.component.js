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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
//import {Members} from './members'
//import {MembersService} from './members.service'
var YearbookComponent = (function () {
    //members : Members;
    function YearbookComponent(
        //private _clientsService : ClientsService,
        //private _membersService : MembersService,
        _oldersService) {
        this._oldersService = _oldersService;
    }
    YearbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        ///this._clientsService.getClientsfromAPI()
        //  .subscribe( res => this.clients = res,
        //     err => console.error(err.status)
        this._oldersService.getOldersfromAPI()
            .subscribe(function (res) {
            _this.olders = res,
                console.log(_this.olders);
        }, function (err) { return console.error(err.status); });
        //  this._membersService.getMembersfromAPI()
        //      .subscribe( res => this.members = res,
        //          err => console.error(err.status)
        //      );
    };
    return YearbookComponent;
}());
YearbookComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'yearbook',
        templateUrl: 'yearbook.component.html',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.OldersService !== "undefined" && index_1.OldersService) === "function" && _a || Object])
], YearbookComponent);
exports.YearbookComponent = YearbookComponent;
var _a;
//# sourceMappingURL=yearbook.component.js.map