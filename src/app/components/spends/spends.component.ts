import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-spends',
  templateUrl: './spends.component.html',
  styleUrls: ['./spends.component.css']
})
export class SpendsComponent {
  constructor(
    private spendService : DataService
  ){}

  totalSpends = 0;
  spends = [];
  clicked = false;
  fetchData(date:string){
    const newDate = new Date(date);
    date = `${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear()}`;
    this.spendService.getSpends(date).subscribe ({
      next:(res:any) =>{
        this.totalSpends = res.data;
        this.spends = res.sources;
        this.clicked = true;
      }, error: (err: any) => {
        console.log(err)
      }
      
    })
  }
}
