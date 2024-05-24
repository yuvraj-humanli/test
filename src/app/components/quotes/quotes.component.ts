import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit{
  quote = "";
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
      this.data.getData().subscribe({
        next: (res: any) => {
          this.quote = res.content;
          console.log(res);
          
        }, error: (err: any) => {
          console.log("Error", err);
          
        }
      })    
  }
  

}
