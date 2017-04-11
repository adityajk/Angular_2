import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./partials/app.component.html"
})
export class AppComponent {
    pageHeading:string = "Wells Fargo";

    myCount:number = 10;

    incrementMyCount():void {
        this.myCount++;
    }

    onMyEvent(val:number) {
        this.myCount = val;
    }
}