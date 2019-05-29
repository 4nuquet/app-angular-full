import '@babel/polyfill';
import express from 'express';
import cors from 'cors';

import itemRoutes from './routes/items.routes';


const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/items', itemRoutes);

//Start the serve
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
})