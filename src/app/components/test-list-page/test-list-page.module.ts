import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { TestListPageRoutingModule } from "./test-list-page-routing.module";
import { TestListPageComponent } from "./test-list-page.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TestListPageRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        TestListPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TestListPageModule { }