import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as localStorage from 'nativescript-localstorage';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { PlayerItem } from '../../models/sample-array-model';
import { PlayerItems } from '../../models/sample-array-model';

@Component({
    selector: "ListPage",
    moduleId: module.id,
    templateUrl: "./list-page.component.html",
})

export class ListPageComponent implements OnInit {
    public playerNameArray: Array<any> = [];
    public useArray: Array<any> = [];
    public selectedArray: Array<any> = [];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.useArray = PlayerItems
        if ((localStorage.getItem('selectedPeople') !== null) && (localStorage.getItem('selectedPeople') !== 'undefined')) {
            let localStorageSelections = JSON.parse(localStorage.getItem('selectedPeople'))
            localStorageSelections.forEach((selection) => {
                this.playerNameArray.push(selection.name)
            })
        }
    }

    addToArray(player) {
        if ((this.playerNameArray as any).includes(player.name)) {
            let index = this.playerNameArray.indexOf(player.name)
            this.playerNameArray.splice(index, 1)
        } else {
            this.playerNameArray.push(player.name)
            this.selectedArray.push(player)
            this.selectedArray.push(player)
            this.selectedArray.push(player)
            localStorage.setItem('selectedPeople', JSON.stringify(this.selectedArray))
        }
    }

    showSavedItems() {
        this.router.navigate(["stored-items"])
    }

} 