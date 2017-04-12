import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CounterModule} from "./counter/counter.module";
import {AppService} from "./app.services";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
/**
 * Created by Adi on 4/11/2017.
 */
@NgModule({
    imports: [BrowserModule, CounterModule, HttpModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule {}