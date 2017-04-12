
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HomeComponent, AboutComponent, ContactComponent, NotFoundComponent} from "./routecomponent";
import {Reverseletters} from "./app.pipe";
@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {path: "", component: HomeComponent},
            {path: "about", component: AboutComponent},
            {path: "contact", component: ContactComponent},
            {path: "**", component: NotFoundComponent}
        ])
    ],
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, NotFoundComponent, Reverseletters],
    bootstrap: [AppComponent]
})
export class AppModule {}
