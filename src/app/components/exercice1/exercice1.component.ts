import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { error } from 'protractor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {


  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  event_list = [
    {
      event:' Event 1',
      eventLocation:'Bangalore',
      eventDescription:'Bangalore event',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      eventLocation:'Dubai',
      eventDescription:'Dubai event',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      eventLocation:'New York',
      eventDescription:'NewYork event',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      eventLocation:'Singapore',
      eventDescription:'Singapore event',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event:' Event 5',
      eventLocation:'Berlin',
      eventDescription: 'Berlin event',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
      eventStartDate: new Date('2017/07/10'),
      eventEndingDate: new Date('2017/08/14')
    },
    {
      event:' Event 6',
      eventLocation:'Mumbai',
      eventDescription:'Mumbai event',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
    {
      event:' Event 7',
      eventLocation:'Barcelona',
      eventDescription:'Barcelona event',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ]
  upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());


  constructor(private $ser: MovieService) { }

  click() {
    this.$ser.GetData().subscribe(
      s => alert('OK'),
      err => {
        alert('error');
        console.log(err);
      }
    );
  }

  ngOnInit() {


  }
}


