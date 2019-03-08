import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as localStorage from 'nativescript-localstorage';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';

declare let myGlobal: any

@Component({
    selector: "StoredItems",
    moduleId: module.id,
    templateUrl: "./stored-items.component.html",
})

export class StoredItemsComponent implements OnInit {
  public selectedItems: Array<any> = [];

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        console.log('now on stored items page')
        this.getStoredItems()
    } 

    getStoredItems(){
        if ((localStorage.getItem('selectedPeople') !== null) && (localStorage.getItem('selectedPeople') !== 'undefined')) {
           let localStorageSelections = JSON.parse(localStorage.getItem('selectedPeople'))
           localStorageSelections.forEach((selection)=>{
               this.selectedItems.push(selection)
           })
        }
    }
      listPage() {
        this.router.navigate(["list-page"])
    }
 }