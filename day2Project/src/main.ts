import "reflect-metadata"
import "zone.js"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
/**
 * Created by Adi on 4/11/2017.
 */

platformBrowserDynamic().bootstrapModule(AppModule);