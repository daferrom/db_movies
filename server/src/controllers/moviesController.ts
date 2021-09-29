import {Request, Response } from 'express';

import pool from '../database'

class MoviesController {
    public index (req: Request, res: Response){
       /*pool.query('DESCRIBE movies');*/
       res.json('movies');  
    }
}

export const moviesController = new MoviesController
export default moviesController;