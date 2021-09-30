import {Request, Response } from 'express';

import pool from '../database'

class MoviesController {
    
    public async list (req: Request, res: Response){
       const movies = await pool.query('SELECT * FROM movies')
        res.json(movies)
    }
    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const movies = await pool.query('SELECT * FROM movies WHERE mov_id = ?', [id]);
        console.log(movies);
        res.json({text: 'Movie Found'});
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