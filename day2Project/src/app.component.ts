import {Component} from "@angular/core";
import {User} from "./app.model";
import {AppService} from "./app.services";
import {Hero} from "./app.hero";

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
    hero: Hero = new Hero(1, "", "", "");

    newUser: User = new User("", "", "");

    constructor(private a:AppService) {

        this.a.getAllUsers().subscribe(
            (respData) => {this.users = respData.json(); console.log(respData)},
            (errData) => console.log("Error", errData),
            () => console.log("Completed")
        );

       //let a:AppService = new AppService();
       //this.users = a.getAllUsers();
    }

    addUser() {
        this.a.addNewuser(this.newUser).subscribe(
            (respData) => this.users.push(respData.json()),
            (err) => console.log("Add Error"),
            () => console.log("Add Completed")
        )
        this.newUser = new User("", "", "");
    }

    deleteUser(id:string, idx:number) {
        this.a.deleteUser(id).subscribe(
            () => {console.log("Delete Success");
                    this.users.splice(idx, 1);
                    },
            (err) => console.log("Delete error"),
            () => console.log("Delete Complete")
        );
    }

    editUser(selectedUser:User) {
        let cp = Object.assign({}, selectedUser);
        this.newUser = cp;
    }

    updateUser() {
        this.a.updateUser(this.newUser).subscribe(
            (respData) => console.log("updated...:)"),
            (err) => console.log("Add Error"),
            () => console.log("Add Completed")
        )
        this.newUser = new User("", "", "");
    }
}