import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from "tns-core-modules/ui/page";
import * as localStorage from 'nativescript-localstorage';
import { GC } from "utils/utils";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})


export class HomeComponent implements OnInit {
    constructor(private router: RouterExtensions, private page: Page) {
    }

    ngOnInit() {      
        this.page.on('navigatedTo', (data) => {
            console.log('home page loaded')
            this.clearStorage();
        })
    }

    clearStorage() {
        localStorage.removeItem('selectedPeople')
    }

    videoPage() {
        this.router.navigate(["video-page"])
    }

    rlvList1() {
        this.router.navigate(["test-list-page"])
    }

    ngForList() {
        this.router.navigate(["ngFor-test-list-page"])
    }

    rlvList2() {
        this.router.navigate(["list-page"])
    }
}