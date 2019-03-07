import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerItem2 } from '../../models/sample-array-model2';
import { PlayerItems2 } from '../../models/sample-array-model2';

@Component({
    selector: "TestListPage",
    moduleId: module.id,
    templateUrl: "./test-list-page.component.html",
})

export class TestListPageComponent implements OnInit {
    public playerNameArray: Array<any> = [];
    public useArray: Array<any> = [];
  

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.useArray = PlayerItems2
    }

    addToArray(player){
        if ((this.playerNameArray as any).includes(player.name)){
            let index= this.playerNameArray.indexOf(player.name)
            this.playerNameArray.splice(index,1)
        } else {
            this.playerNameArray.push(player.name)
        }
    }

    ngForPage(){
        this.router.navigate(["ngFor-test-list-page"])
    }


} 