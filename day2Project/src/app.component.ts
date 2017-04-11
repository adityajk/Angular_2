import {Component} from "@angular/core";
import {User} from "./app.model";

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

    users: User[] = [];

    constructor() {
        this.users = [
            new User("A","B"),
            new User("C","D"),
            new User("X","Y")
        ]
    }
}