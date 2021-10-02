import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
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
    mov_dt_rel: '',
    mov_rel_country:'',
    mov_image_url: '',
    
  }

  constructor(private moviesService: MoviesService ) { }

  ngOnInit(): void {
  }

  saveNewMovie() {
    
    delete this.movie.mov_id;

    this.moviesService.saveMovie(this.movie)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )

    //console.log(this.movie)
  }
}
