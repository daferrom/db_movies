import { Injectable } from '@angular/core';
<<<<<<< HEAD
//import { HttpClient }  from '@angular/common/http'
=======
import { HttpClient }  from '@angular/common/http'
>>>>>>> 3423a8d10a7e972456111b7f7f9c0230921cbc2d

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

<<<<<<< HEAD
  API_URI = 'http://localhost:3000/api'


  constructor(/*private http: HttpClient*/) { }

  /*getMovies(){
    //return this.http.get(`${this.API_URI}/movies`)
  }*/

}
=======
  API_URI='http://localhost:3000/api'


  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get('')
  }
}
>>>>>>> 3423a8d10a7e972456111b7f7f9c0230921cbc2d
