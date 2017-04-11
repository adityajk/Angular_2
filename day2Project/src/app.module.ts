import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CounterModule} from "./counter/counter.module";
/**
 * Created by Adi on 4/11/2017.
 */
@NgModule({
    imports: [BrowserModule, CounterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}