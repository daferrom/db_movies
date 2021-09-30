import {Request, Response } from 'express';

import pool from '../database'

class MoviesController {
    
    public list (req: Request, res: Response){
       res.json({text:'Listing movies'});  
    }
    getOne(req: Request, res: Response) {
        res.json({text:'This is the movie '+ req.params.id });

    public create(req: Request, res: Response) {
        res.json({text: 'creating a movie '});
    }
    
    public update (req: Request, res:Response){
        res.json({text: 'Updating a movie ' + req.params.id});
    }
  
    public delete(req:Request, res: Response){
        res.json({text: 'deleting a movie ' + req.params.id});
    }
}

export const moviesController = new MoviesController
export default moviesController;