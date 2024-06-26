const express = require('express');
const app = express();
const port = 8000;


//Path params >>> params is key wors that can access the path variables through req
app.get('/:param1/:param2', (req, res) => {
    const param1=parseInt(req.params.param1);
    const param2= parseInt(req.params.param2);
    const sum=param1+param2;
    res.send(`${sum}`);
});


//query params >> query is a keyword that deals  takes the input from url
app.get('/add',(req,res)=>{
    const query1=parseInt(req.query.num1);
    const query2 =parseInt(req.query.num2);
    const sum=query1+query2;
    res.send(`${sum}`);
})

//post params  >>
app.post('/',(req,res)=>{
    res.send("Hello");
})

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server running at http://localhost:${port}`);
    }
});
