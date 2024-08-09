import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.css']
})
export class MovieSliderComponent implements OnInit {

  bannerResult?: any = [];

  constructor (private moviesService: MoviesService) { }

  ngOnInit (): void {
    this.bannerData();
  }

  bannerData () {
    this.moviesService.sliderMovies().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

}