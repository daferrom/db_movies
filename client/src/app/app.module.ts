import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
<<<<<<< HEAD
import { MoviesService } from './services/movies.service'
=======
import { MoviesService} from './services/movies.service'
>>>>>>> 3423a8d10a7e972456111b7f7f9c0230921cbc2d

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieFormComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }