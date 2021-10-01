import { Component, HostBinding, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  movie: Movie = {
    mov_id: 0,
    mov_title: '',
    mov_year: 0,
    mov_lang: '',
    mov_dt_rel: new Date,
    mov_rel_country:'',
    mov_image_url:'',
    created_at: new Date
  }

  constructor(private moviesService: MoviesService ) { }

  ngOnInit(): void {
  }

}
