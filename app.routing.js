"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var yearbook_component_1 = require("./yearbook/yearbook.component");
var studies_component_1 = require("./studies/studies.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var index_1 = require("./_guards/index");
var pagenotfound_component_1 = require("./pagenotfound.component");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', component: home_component_1.HomeComponent, canActivate: [index_1.AuthGuard] },
    //{ path: 'home', component: HomeComponent},
    { path: 'studies', component: studies_component_1.StudiesComponent, canActivate: [index_1.AuthGuard] },
    { path: 'yearbook', component: yearbook_component_1.YearbookComponent, canActivate: [index_1.AuthGuard] },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent, canActivate: [index_1.AuthGuard] },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map