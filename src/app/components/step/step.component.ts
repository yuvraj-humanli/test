import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Output() stepEmitter = new EventEmitter<number>();
  val = "5";

  ngOnInit(): void {
    this.emitNewStep(this.val);
  }

  emitNewStep(counterElem: string) {
    
    this.stepEmitter.emit(parseInt(counterElem))
  }

}
