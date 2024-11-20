import { Component } from "@angular/core";

// Aqui se definen la template del componente y el selector que es el nombre del componente
@Component({
  selector: 'app-counter',
  template: `
<h3>Counter: {{counter}}</h3>

<button (click)="increaseBy(1)">Increase</button>
<button (click)="increaseBy(-1)">Decrease</button>
<br>
<button (click)="resetCounter()">Reset</button>


  `,
})
export class CounterComponent {
  constructor(){}
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}
