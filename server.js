// Import Express
const express = require('express');

// Create an express server
const app = express() 

app.use(express.json());

app.use((res, req, next) => {
    req.custom = "Test";
    next();
})

// Express middleware
app.get("/", (req, res, next) => {
    try {
        res.sendFile(join(__dirname, "./public/index.html"));
        // res.json({ msg: req.custom})
    } catch(error) {
        next(error)
    }
})

app.get("/public:filename", (req, res, next) => {
    res.send(join(__dirname, "./public/"+req.params.filename))
})
// Express Router
// Listen on a port
app.listen(3001, () => console.log("Server listening..."))