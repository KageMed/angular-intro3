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


  

  constructor(private $ser: MovieService) { }


  movies: Array<Movie> = [];
  isLoading = false;
  isError = false;
  page = 1;
  click() {

    
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

    this.loadData();
  }
}


