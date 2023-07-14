import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  movies: Movie[] = [];
  movieLength!: number;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
  this.movieService.getMovies()
    .subscribe(movies => {
      this.movies = movies.slice(0,10)
      this.movieLength = movies.length;
    })
}

}
