import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NgForTestListPageRoutingModule } from "./ngFor-test-list-page-routing.module";
import { NgForTestListPageComponent } from "./ngFor-test-list-page.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NgForTestListPageRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        NgForTestListPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NgForTestListPageModule { }