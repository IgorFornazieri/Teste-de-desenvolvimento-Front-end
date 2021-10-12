import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss']
})
export class MovieTrailerComponent implements OnInit {

  movieName!: string;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieName = this.activateRoute.snapshot.params.nome;
  }

}
