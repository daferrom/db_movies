import {Request, Response } from 'express';

import pool from '../database'

class MoviesController {
    
    public list (req: Request, res: Response){
       res.json({text:'Listing movies'});  
    }
    public getOne(req: Request, res: Response) {
        res.json({text:'This is the movie '+ req.params.id });

    }
    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO movies set ?', [req.body]);
        res.json({message: 'Movie saved on database'});
    }
    /*public async create(req: Request, res: Response):Promise<void> {
        await pool.query('INSERT INTO movies set ?', [req.body]);
        console.log(req.body);
        res.json({message: ''});
    }*/
    
    public update (req: Request, res:Response){
        res.json({text: 'Updating a movie ' + req.params.id});
    }
  
    public delete(req:Request, res: Response){
        res.json({text: 'deleting a movie ' + req.params.id});
    }
}

export const moviesController = new MoviesController
export default moviesController;