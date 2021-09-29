"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
class MoviesController {
    index(req, res) {
        //pool.query('DESCRIBE movies')
        res.json('games');
    }
}
exports.moviesController = new MoviesController;
exports.default = exports.moviesController;
