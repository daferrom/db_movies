"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = __importDefault(require("../controllers/moviesController"));
class MoviesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Route to get all the movies from the db
        this.router.get('/', moviesController_1.default.list);
        //Route to get a movie from the db throught its id
        this.router.get('/:id', moviesController_1.default.getOne);
        //Route to create a new movie on the db
        this.router.post('/', moviesController_1.default.create);
        //Route to update a new movie on the db
        this.router.put('/:id', moviesController_1.default.update);
        //Route to delete a new movie on the db
        this.router.delete('/:id', moviesController_1.default.delete);
    }
}
const moviesRoutes = new MoviesRoutes();
exports.default = moviesRoutes.router;
