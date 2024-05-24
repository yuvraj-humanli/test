import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  parentCount: number = 10;
  steps:number = 1;
  @Output() stepEmitter = new EventEmitter<string>();
  @Output() countEmitter = new EventEmitter<number>();
  changeValue(num : number) {
    this.parentCount += (num * this.steps);
  }

  changeStep(input: number) {
    this.steps = input;
  }
  saveToStorage(){
    localStorage.setItem('steps',`${this.steps}`);
    localStorage.setItem('count',`${this.parentCount}`);
  }
  ngOnInit(): void {
    let count = localStorage.getItem('count');
    let step = localStorage.getItem('steps');
    this.parentCount = (count)?parseInt(count):10;
    this.steps = (step)?parseInt(step):1;
    this.emitSteps(this.steps.toString());
    this.emitCount(this.parentCount);
  }
  emitSteps(value:string){
    this.stepEmitter.emit(value);
  }
  emitCount(value:number){
    this.countEmitter.emit(value);
  }
}
