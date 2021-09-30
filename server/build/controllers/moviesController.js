"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
class MoviesController {
    list(req, res) {
        res.json({ text: 'Listing movies' });
    }
    getOne(req, res) {
        res.json({ text: 'This is the movie ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'creating a movie ' });
    }
    update(req, res) {
        res.json({ text: 'Updating a movie ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'deleting a movie ' + req.params.id });
    }
}
exports.moviesController = new MoviesController;
exports.default = exports.moviesController;
