import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = true;
  click(){
      this.status = false;       
  }

  click_dark(){
    this.status = true;       
}

}
