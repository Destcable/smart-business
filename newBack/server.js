import express from 'express';
import cors from 'cors';
import { getCategorysForCost } from './controllers/cost/costSettingsController.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/cost/categorys', getCategorysForCost)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});