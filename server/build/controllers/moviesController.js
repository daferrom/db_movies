"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
const database_1 = __importDefault(require("../database"));
class MoviesController {
    list(req, res) {
        res.json({ text: 'Listing movies' });
    }
    getOne(req, res) {
        res.json({ text: 'This is the movie ' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO movies set ?', [req.body]);
            res.json({ message: 'Movie saved on database' });
        });
    }
    /*public async create(req: Request, res: Response):Promise<void> {
        await pool.query('INSERT INTO movies set ?', [req.body]);
        console.log(req.body);
        res.json({message: ''});
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
