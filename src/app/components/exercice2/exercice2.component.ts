import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {

  private dateSource;

  $seconds:number;
  $minutes:number;
  $hours:number;
  constructor() {
    this.dateSource = interval(1000).subscribe(ign=>{
      var date = new Date();
      this.$seconds = date.getSeconds();
      this.$minutes = date.getMinutes();
      this.$hours = date.getHours();
      console.log(this.$hours+"/"+this.$minutes+"/"+this.$seconds);
    });
  }

  ngOnInit() {
  }

}
