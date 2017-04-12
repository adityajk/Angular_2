
import {Component} from "@angular/core";
@Component({
    selector: "myroute-app",
    template: `
        <h1>Router application example</h1><br>
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
        <a routerLink="/contact">Contact</a>
        <hr>
        <router-outlet></router-outlet>
                `
})
export class AppComponent{}