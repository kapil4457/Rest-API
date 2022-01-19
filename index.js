import express from 'express';
import bodyParser from 'body-parser';
import user from './routes/user.js'

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use('/users' , user);

app.get('/',(req,res)=>{
    res.send("Welcome")
})
app.listen(port , ()=>{
    console.log(`server running on port : http://localhost:${port}`);
})