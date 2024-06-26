// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET endpoint
app.get('/greet', (req, res) => {
    res.send('Hello, world!');
});
app.put('/put',(req,res)=>{
    res.send("This is update");
})

app.post('/post',(req,res)=>{
    res.send("This is to post");
})

app.delete('/delete',(req,res)=>{
    res.send("This is to delete");
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
