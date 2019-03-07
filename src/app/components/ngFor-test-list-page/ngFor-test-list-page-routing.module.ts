import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NgForTestListPageComponent } from "./ngFor-test-list-page.component";

const routes: Routes = [
    { path: "", component: NgForTestListPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NgForTestListPageRoutingModule { }