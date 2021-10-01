import { Router } from 'express';

import  moviesController from '../controllers/moviesController'

class MoviesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        //Route to get all the movies from the db
        this.router.get('/', moviesController.list);
         //Route to get a movie from the db throught its id
        this.router.get('/:id', moviesController.getOne);
        //Route to create a new movie on the db
        this.router.post('/', moviesController.create);
        //Route to update a new movie on the db
        this.router.put('/:id', moviesController.update);
        //Route to delete a new movie on the db
        this.router.delete('/:id', moviesController.delete);
        
    }
}

const moviesRoutes = new MoviesRoutes();
export default moviesRoutes.router;