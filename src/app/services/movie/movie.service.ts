import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/model/api_response';
@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private $http: HttpClient) {

    }

    API_KEY = "e6acb665359b45f8a3a0345a4bb9a5e9";
    endpoint = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+this.API_KEY;
    GetData(page:number): Observable<ApiResponse> {
        console.log(page);
        return this.$http.get<ApiResponse>(this.endpoint+"&page="+page);
    }
}