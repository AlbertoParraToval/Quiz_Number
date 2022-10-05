import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clue: string = '...';
  numberUser: number = 0;
  secretNumber: number = Math.round(Math.random() * 101); 

  constructor() {}

  checkNumber(num: number) {
    if (this.numberUser == this.secretNumber) {
      this.clue = 'Has acertado!!';
    }else if(this.numberUser > this.secretNumber){
      this.clue= 'es mayor que el numero secreto'
    }else if(this.numberUser < this.secretNumber){
      this.clue = 'es menor que el numero secreto'
    }else{
      this.clue = 'Ups, ha ocurrido un fallo.'
    }
  }
}
