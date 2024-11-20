import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  // si hacemos el metodo "private" solo puede ser usado dentro de la clase, ni siquiera en el html se puede usar
  getHeroDescription(): string{

    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string): void{
    this.name=name;
  }

  changeAge(age: number): void{
    this.age=age;
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 45;
  }
}
