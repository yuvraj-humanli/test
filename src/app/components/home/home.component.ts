import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parentCount: any = 0;

  ngOnInit(): void {
    this.parentCount = localStorage.getItem("parentCount")
  }

  changeCount(action: string){
    if(action == "inc"){
      this.parentCount += 1;
    }else{
      this.parentCount -= 1;
    }
  }

  saveCount() {
    localStorage.setItem("parentCount", this.parentCount.toString())
  }
}
