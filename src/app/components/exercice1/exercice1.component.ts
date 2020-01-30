import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { error } from 'protractor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/model/movie';
import { finalize, delay } from 'rxjs/operators';




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


  movies: Array<Movie> = [];
  isLoading = false;
  isError = false;
  page = 1;
  click() {

    this.loadData();
  }

  loadData() {
    const observable = this.$ser.GetData(this.page).pipe(
      finalize(() => this.isLoading = false)
    );

    observable.subscribe(
      apiResponse => {
        console.log("======");
        console.log(apiResponse.results);
        console.log("======");
        apiResponse.results.map((item)=>{
          item.poster_path = "https://image.tmdb.org/t/p/w342"+item.poster_path
        });
        this.movies = this.movies.concat(apiResponse.results);
        console.log(this.movies);

      }
      ,

      err => {
        this.isError = true;
        alert('error');
        console.log(err);
      }
    );
  }
  ngOnInit() {

  }
}


