import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Output() stepEmitter = new EventEmitter<number>();
  @Input() stepsEmitter = "0";
  ngOnInit(): void {
    this.emitNewStep(this.stepsEmitter);
  }

  emitNewStep(counterElem: string) {
    
    this.stepEmitter.emit(parseInt(counterElem));
  }  

}
