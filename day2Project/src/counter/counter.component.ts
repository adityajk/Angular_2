import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "counter",
    template: `<h3>This is counter component </h3>
                 <h2>value of count is {{count}}</h2>
                 <button (click)="incrementCounter()">++Count</button>
                 <input type="number" [(ngModel)]="count">
               `
})
export class CounterComponent{
    //@Input()
    @Input('init')
    count:number = 0;

    @Output()
    myEvent = new EventEmitter();

    incrementCounter(): void {
        this.count++;
        this.myEvent.emit(this.count);
    }
}
