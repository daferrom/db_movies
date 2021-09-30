"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
class MoviesController {
    index(req, res) {
        pool.query('DESCRIBE movies');
        res.json('movies');
    list(req, res) {
        res.json({ text: 'Listing movies' });
    }
    getOne(req, res) {
        res.json({ text: 'This is the movie ' + req.params.id });
    }
    create(req, res) {
        console.log(req.body);
        res.json({ message: 'Movie saved on database' });
    }
    /*public async create(req: Request, res: Response):Promise<void> {
        await pool.query('INSERT INTO movies set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Movie saved on database'});
    }*/
    update(req, res) {
        res.json({ text: 'Updating a movie ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'deleting a movie ' + req.params.id });
    }
}
exports.moviesController = new MoviesController;
exports.default = exports.moviesController;
