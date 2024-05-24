import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit{
  quote = "";
  spends = [];
  total = 0;
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
      // this.data.getData().subscribe({
      //   next: (res: any) => {
      //     this.quote = res.content;
      //     console.log(res);
          
      //   }, error: (err: any) => {
      //     console.log("Error", err);
          
      //   }
      // })
  }

  dateSelect(date:any){
    const newDate = new Date(date);
    date = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+newDate.getFullYear();
    this.data.getSpends(date).subscribe({
      next : (res:any) => {
        this.total = res.data;
        this.spends = res.sources;
        
      },error: (err: any) => {
        console.log("Error", err);
        
      }
    })
    
  }
  

}
