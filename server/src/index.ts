import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors'

import indexRoutes from './routes/indexRoutes';
import moviesRoutes from './routes/moviesRoutes';

class Server {

    public app: Application;

    constructor(){
        this.app = express()
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        // de module morgan allows to know the client requests//
        this.app.use(morgan('dev'));
        // cors allow to request things to the server//
        this.app.use(cors());
        // allows to accept json formats on server//
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/movies', moviesRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();