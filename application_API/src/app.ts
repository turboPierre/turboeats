import express, { Application, Request, Response, NextFunction} from 'express';

const app: Application = express();
const messagePayload: string = 'Hello ts-express';

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send(messagePayload);
});

app.listen(5000, () => console.log(`Server running on http://localhost:5000`) );
	