import express, { Application, Request, Response, NextFunction} from 'express';

const app: Application = express();
const messagePayload: string = 'Hello ts-express';

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send(messagePayload);
});

app.listen(5000, () => console.log(`Server running on http://localhost:5000`) );

//Mongoose DB init
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:admin@turbocluster.n0lcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));