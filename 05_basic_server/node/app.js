import express from "express"; 
const app = express(); 

app.get("/", (req, res) => {
    res.send({Message: "our first express route"})
}); 

app.get("/newRoute", (req, res) => {
    res.send({Message: "our secound express route"})
});

app.listen(8080, () => console.log("Server is now running on port: " + 8080));