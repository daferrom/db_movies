import {Request, Response } from 'express';

import pool from '../database'

class MoviesController {
    
    public async list (req: Request, res: Response){
       const movies = await pool.query('SELECT * FROM movies')
        res.json(movies)
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const movies = await pool.query('SELECT * FROM movies WHERE mov_id = ?', [id]);
        if (movies.length > 0){
            return res.json(movies[0]);
        }
        res.status(404).json({text: "the movie does not exist"})
        
    }
    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO movies set ?', [req.body]);
        res.json({message: 'Movie saved on database'});
    }
    /*public async create(req: Request, res: Response):Promise<void> {
        await pool.query('INSERT INTO movies set ?', [req.body]);
        console.log(req.body);
        res.json({message: ''});
    }*/
    
    public async update (req: Request, res:Response){
        const { id } = req.params;
        await pool.query('UPDATE movies set ? WHERE mov_id = ?', [req.body, id]);
        res.json({message: 'The movie was updated'});

    }
  
    public async delete(req:Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM movies WHERE mov_id = ?', [id]);
        res.json({message: 'The movie was deleted'});       
    }
}

export const moviesController = new MoviesController
export default moviesController;