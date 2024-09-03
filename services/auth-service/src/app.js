import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.listen(port, () => { 
    console.log(`☁️  SmartBusiness: AuthService | service start (port: ${port})`)
})