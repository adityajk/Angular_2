
import {NgModule} from "@angular/core";
import {CounterComponent} from "./counter.component";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [FormsModule],
    declarations: [CounterComponent],
    exports: [CounterComponent]
})
export class CounterModule {

}