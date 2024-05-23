import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  parentCount: number = 10;
  steps:number = 1;
  changeValue(num : number) {
    this.parentCount += (num * this.steps);
  }

  changeStep(input: number) {
    this.steps = input;
  }
  saveToStorage(){
    localStorage.setItem('steps',`${this.steps}`);
    
  }

}
