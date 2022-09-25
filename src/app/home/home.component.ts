import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private rout:Router) { }
  trendingMovies:any;
  theatorMovies:any;
  popularMovie:any;
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatorMovies();
    this.getPopularMovies()
    }

  getTrendingMovies(){
   this.http.get('http://localhost:4200/assets/data/trending-movie.json')
   .subscribe((movie)=>{
    this.trendingMovies=movie;
    console.log(this.trendingMovies);
    
   })
  }
  getTheatorMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movie.json')
  .subscribe((movie)=>{
    this.theatorMovies =movie;
    console.log(this.theatorMovies);
    
  })
  }

  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movie.json').subscribe((movie)=>{
      this.popularMovie=movie;
      console.log(this.popularMovie);
      
    })
  }

  gotoMovie(type:string ,id:string ){
    this.rout.navigate(['movie',type,id]);

  }

}
