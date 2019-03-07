import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerItem2 } from '../../models/sample-array-model2';
import { PlayerItems2 } from '../../models/sample-array-model2';

@Component({
    selector: "NgForTestListPage",
    moduleId: module.id,
    templateUrl: "./ngFor-test-list-page.component.html",
})

export class NgForTestListPageComponent implements OnInit {
    public playerNameArray: Array<any> = [];
    public useArray: Array<any> = [];
  

    constructor(private router: Router) {
    }
 
    ngOnInit(): void { /**ngFOR Page**/
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

    rlvPage(){
        this.router.navigate(["list-page"])
    }


} 